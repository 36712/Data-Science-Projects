"""Export precomputed recommendations for the M6 demo web app."""
from pathlib import Path
import json

import numpy as np
import pandas as pd
from scipy.sparse import csr_matrix
from sklearn.decomposition import TruncatedSVD

RANDOM_STATE = 42
K_FACTORS = 40
K_NEIGHBORS = 30
TOP_N = 10
SVD_ITER = 15
SAMPLE_USERS = [196, 253, 308, 122, 1, 42]


def resolve_paths():
    root = Path(__file__).resolve().parents[2]
    for raw_dir in [
        root / "M1" / "ml-100k",
        root / "M2 & M3" / "data" / "raw" / "ml-100k",
    ]:
        if (raw_dir / "u1.base").exists():
            return root, raw_dir
    raise FileNotFoundError("Cannot find u1.base under M1 or M2 & M3.")


def clip_ratings(values):
    return np.clip(values, 1.0, 5.0)


class BiasBaseline:
    key = "baseline"
    label = "Bias Baseline"

    def fit(self, train):
        self.mu = float(train["rating"].mean())
        self.user_bias = train.groupby("user_id")["rating"].mean() - self.mu
        self.item_bias = train.groupby("item_id")["rating"].mean() - self.mu

    def predict_row(self, user_id, item_id):
        bu = self.user_bias.get(user_id, 0.0)
        bi = self.item_bias.get(item_id, 0.0)
        return float(clip_ratings([self.mu + bu + bi])[0])


class ItemKNN:
    key = "item_cf"
    label = "Item-Based CF"

    def __init__(self, k=K_NEIGHBORS):
        self.k = k

    def fit(self, train):
        self.train_lookup = {(r.user_id, r.item_id): r.rating for r in train.itertuples()}
        self.mu = float(train["rating"].mean())
        self.user_means = train.groupby("user_id")["rating"].mean()
        self.item_means = train.groupby("item_id")["rating"].mean()
        users = np.sort(train["user_id"].unique())
        items = np.sort(train["item_id"].unique())
        self.user_index = {u: i for i, u in enumerate(users)}
        self.item_index = {it: i for i, it in enumerate(items)}
        self.index_item = {i: it for it, i in self.item_index.items()}
        rows = train["user_id"].map(self.user_index).to_numpy()
        cols = train["item_id"].map(self.item_index).to_numpy()
        centered = train["rating"].to_numpy() - train["user_id"].map(self.user_means).to_numpy()
        matrix = csr_matrix((centered, (rows, cols)), shape=(len(users), len(items)))
        denom = np.sqrt(matrix.power(2).sum(axis=0)).A1
        denom[denom == 0] = 1.0
        sim = (matrix.T @ matrix).toarray() / np.outer(denom, denom)
        np.fill_diagonal(sim, 0.0)
        self.sim = sim
        self.train_pairs = set(zip(train["user_id"], train["item_id"]))

    def predict_row(self, user_id, item_id):
        if item_id not in self.item_index or user_id not in self.user_index:
            return float(self.item_means.get(item_id, self.mu))
        i_idx = self.item_index[item_id]
        user_mean = self.user_means.get(user_id, self.mu)
        sims = self.sim[i_idx]
        rated_items = [j for j in range(len(sims)) if (user_id, self.index_item[j]) in self.train_pairs]
        if not rated_items:
            return float(self.item_means.get(item_id, self.mu))
        rated_items = np.array(rated_items, dtype=int)
        neighbor_sims = sims[rated_items]
        order = np.argsort(-np.abs(neighbor_sims))[: self.k]
        chosen = rated_items[order]
        weights = neighbor_sims[order]
        if np.allclose(weights, 0):
            return float(self.item_means.get(item_id, self.mu))
        neighbor_ratings = np.array(
            [self.train_lookup.get((user_id, self.index_item[j]), self.mu) for j in chosen],
            dtype=float,
        )
        pred = user_mean + np.dot(weights, neighbor_ratings - user_mean) / (np.sum(np.abs(weights)) + 1e-8)
        return float(clip_ratings([pred])[0])


class MatrixFactorizationSVD:
    key = "mf"
    label = "Matrix Factorization"

    def fit(self, train):
        self.mu = float(train["rating"].mean())
        self.user_bias = train.groupby("user_id")["rating"].mean() - self.mu
        self.item_bias = train.groupby("item_id")["rating"].mean() - self.mu
        users = np.sort(train["user_id"].unique())
        items = np.sort(train["item_id"].unique())
        self.user_index = {u: i for i, u in enumerate(users)}
        self.item_index = {it: i for i, it in enumerate(items)}
        rows = train["user_id"].map(self.user_index).to_numpy()
        cols = train["item_id"].map(self.item_index).to_numpy()
        residuals = (
            train["rating"].to_numpy()
            - self.mu
            - train["user_id"].map(self.user_bias).fillna(0.0).to_numpy()
            - train["item_id"].map(self.item_bias).fillna(0.0).to_numpy()
        )
        matrix = csr_matrix((residuals, (rows, cols)), shape=(len(users), len(items)))
        n_components = min(K_FACTORS, min(matrix.shape) - 1)
        svd = TruncatedSVD(n_components=n_components, random_state=RANDOM_STATE, n_iter=SVD_ITER)
        self.user_factors = svd.fit_transform(matrix)
        self.item_factors = svd.components_.T

    def predict_row(self, user_id, item_id):
        bu = self.user_bias.get(user_id, 0.0)
        bi = self.item_bias.get(item_id, 0.0)
        if user_id not in self.user_index or item_id not in self.item_index:
            return float(clip_ratings([self.mu + bu + bi])[0])
        latent = float(self.user_factors[self.user_index[user_id]] @ self.item_factors[self.item_index[item_id]])
        return float(clip_ratings([self.mu + bu + bi + latent])[0])


def top_n(model, train, user_id, n=TOP_N):
    seen = set(train.loc[train["user_id"] == user_id, "item_id"])
    candidates = [it for it in train["item_id"].unique() if it not in seen]
    scores = np.array([model.predict_row(user_id, it) for it in candidates])
    top_idx = np.argsort(-scores)[:n]
    return [(int(candidates[i]), float(scores[i])) for i in top_idx]


def main():
    _, raw_dir = resolve_paths()
    out_path = Path(__file__).parent / "demo_data.json"

    cols = ["user_id", "item_id", "rating", "timestamp"]
    train = pd.read_csv(raw_dir / "u1.base", sep="\t", names=cols)
    users = pd.read_csv(raw_dir / "u.user", sep="|", names=["user_id", "age", "gender", "occupation", "zip"])
    item_cols = ["item_id", "title", "release", "video", "url"] + [f"g{i}" for i in range(19)]
    items = pd.read_csv(raw_dir / "u.item", sep="|", header=None, encoding="latin-1", names=item_cols)
    items["year"] = items["release"].str[-4:]

    models = [BiasBaseline(), ItemKNN(), MatrixFactorizationSVD()]
    for model in models:
        print(f"Training {model.label}...")
        model.fit(train)

    payload = {
        "project": "MovieLens 100K Recommender Demo",
        "course": "INFO 442",
        "models": [{"key": m.key, "label": m.label} for m in models],
        "metrics": {
            "baseline": {"rmse": 0.977, "mae": 0.766, "p10": 0.009},
            "item_cf": {"rmse": 0.962, "mae": 0.751, "p10": 0.062},
            "mf": {"rmse": 0.959, "mae": 0.750, "p10": 0.025},
        },
        "users": [],
    }

    title_map = dict(zip(items["item_id"], items["title"]))
    year_map = dict(zip(items["item_id"], items["year"]))

    for uid in SAMPLE_USERS:
        profile = users[users["user_id"] == uid].iloc[0]
        history = (
            train[train["user_id"] == uid]
            .merge(items[["item_id", "title"]], on="item_id")
            .sort_values("rating", ascending=False)
            .head(8)
        )
        recs = {}
        for model in models:
            recs[model.key] = [
                {
                    "item_id": iid,
                    "title": title_map[iid],
                    "year": year_map.get(iid, ""),
                    "predicted": round(score, 2),
                }
                for iid, score in top_n(model, train, uid)
            ]
        payload["users"].append(
            {
                "user_id": int(uid),
                "age": int(profile["age"]),
                "gender": profile["gender"],
                "occupation": profile["occupation"],
                "history": [
                    {"title": r.title[:60], "rating": int(r.rating)}
                    for r in history.itertuples()
                ],
                "recommendations": recs,
            }
        )

    json_text = json.dumps(payload, ensure_ascii=False, indent=2)
    out_path.write_text(json_text, encoding="utf-8")
    print(f"Saved {out_path}")

    js_path = Path(__file__).parent / "demo_data.js"
    js_path.write_text(f"window.DEMO_DATA = {json_text};\n", encoding="utf-8")
    print(f"Saved {js_path}")


if __name__ == "__main__":
    main()
