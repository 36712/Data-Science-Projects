# Model Card — MovieLens 100K Recommender

**Project:** Understanding User Preferences through Latent Factors · **INFO 442** · June 2026  
**Team:** Chang Liu, Bolun Feng, Jiajin Guo, Shixuan Li

---

## Overview

| | |
|---|---|
| **Models** | Matrix Factorization (SVD, k=40) · Item-Based CF (k=30) · Bias Baseline |
| **Task** | Star-rating prediction (1–5) and Top-10 movie recommendation |
| **Data** | [MovieLens 100K](https://grouplens.org/datasets/movielens/100k/) — 943 users, 1,682 movies, 100k ratings (93.7% sparse) |
| **Split** | Train `u1.base` (80k) · Test `u1.test` (20k) |
| **Deployment** | Static web demo at `M6/demo/index.html` — precomputed Top-10 for 6 sample users |

---

## Intended Use

**Use for:** coursework, CF research, comparing MF vs. neighbourhood methods, demo UI with historical MovieLens users.  

---

## Performance (u1.test)

| Model | RMSE ↓ | MAE ↓ | P@10 ↑ |
|-------|--------|-------|--------|
| Bias Baseline | 0.977 | 0.766 | 0.009 |
| Item-Based CF | 0.962 | 0.751 | **0.062** |
| **Matrix Factorization** | **0.959** | **0.750** | 0.025 |

**Guidance:** MF for star-rating accuracy (−1.9% RMSE vs. baseline); Item-CF for Top-10 lists (P@10 ≈ 6.2%). P@10 remains low overall (~1 hit per 16 titles).

---

## Limitations & Ethics

- **Cold start** — new users/items fall back to global/item means  
- **Demographic skew** — 74% male raters; fairness not audited by subgroup  
- **Rating compression** — models under-predict 1-star ratings (positive skew in data)  
- **Scope** — single u1 split; MF gain modest (~2% RMSE), not 10–15% as initially hypothesised  
- **Ethics** — de-identified academic data; popularity bias and filter-bubble risk in recommendations  

---

## Reproducibility

Notebooks: `M4/eda_ml100k.ipynb`, `M5/modelling_ml100k.ipynb` · Full report: `M6/final_report.md` · Demo: `M6/demo/`
