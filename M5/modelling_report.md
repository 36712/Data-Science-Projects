# M5 — Data Modelling & Visualisation Report
## MovieLens 100K Recommendation Project

**Milestone:** M5 (Week 8) · **Date:** June 2026 · **Course:** INFO 442

---

## 1. Introduction

This report documents the modelling phase of our MovieLens 100K recommender-system project. Building on the exploratory analysis completed in M4, we train and evaluate predictive models that estimate the star rating (1–5) a user would assign to an unseen movie, and derive Top-10 recommendation lists from those predictions.

Our M4 modelling question was:

> Given a user ID and their history of past ratings, predict the star rating that the user would assign to a movie they have not yet seen.

We address this question with three models of increasing complexity and present stakeholder-facing visualisations that summarise business-relevant trade-offs.

---

## 2. Data and Experimental Setup

### 2.1 Dataset and Split

We use the **MovieLens 100K** dataset (943 users, 1,682 movies, 100,000 ratings). To ensure reproducibility and comparability with published benchmarks, we adopt the standard **5-fold cross-validation split**:

| Partition | File | Rows |
|-----------|------|------|
| Training | `u1.base` | 80,000 |
| Test | `u1.test` | 20,000 |

Each user appears in both partitions with disjoint movie sets, simulating the production scenario where we must predict ratings for items the user has not rated during training.

### 2.2 Problem Type

This is an **explicit-feedback rating prediction** task (regression on ordinal 1–5 stars) with a secondary **Top-N recommendation** objective derived from predicted scores.

### 2.3 Evaluation Metrics

We report four metrics, two of which are primary for this problem type:

| Metric | Type | Rationale |
|--------|------|-----------|
| **RMSE** | Rating accuracy | Standard benchmark for MovieLens; penalises large errors that would visibly upset users |
| **MAE** | Rating accuracy | Interpretable as average star error; less sensitive to outliers than RMSE |
| **Precision@10** | Recommendation | Share of Top-10 recommended titles that the user actually liked (rating ≥ 4) in the test set |
| **Recall@10** | Recommendation | Share of the user's liked test movies captured in the Top-10 list |

RMSE and MAE directly answer *"How close is the predicted star rating?"* Precision and Recall@10 answer *"Does the model surface movies the user would actually watch?"* — a question product stakeholders care about even when RMSE differences look small.

---

## 3. Models and Rationale

We train **three models**, each chosen to test a distinct modelling assumption from our project proposal and M4 revised hypotheses.

### 3.1 Model 1 — Bias Baseline (μ + user + item)

**Formulation:**

$$\hat{r}_{ui} = \mu + b_u + b_i$$

where μ is the global mean rating, $b_u$ is the user's deviation from the mean (capturing leniency), and $b_i$ is the item's deviation (capturing overall quality).

**Why this model?**

Every recommender-system study requires a **strong, interpretable baseline**. This model captures the two largest systematic effects visible in M4 EDA — users who rate generously and movies that are generally well-liked — without any notion of taste similarity or latent structure. If a sophisticated model cannot beat this baseline on RMSE, its added complexity is not justified.

**Expected role:** Lower bound; target to beat.

### 3.2 Model 2 — Item-Based Collaborative Filtering (k = 30)

**Formulation:** For target item *i*, find the 30 most similar items (cosine similarity on mean-centered co-ratings) that user *u* has already rated, and predict a weighted average of those ratings.

**Why this model?**

Item-based CF is a **classic neighbourhood method** explicitly named in our project proposal as a baseline comparator to matrix factorization. It exploits the intuition that *"users who liked similar movies will agree on the next one."* M4 showed strong genre–era interaction effects; item similarity partially captures these co-occurrence patterns without explicit feature engineering.

**Expected role:** Strong on local similarity patterns; may degrade for sparse users or niche items with few reliable neighbours (93.7% matrix sparsity).

### 3.3 Model 3 — Matrix Factorization via Truncated SVD (k = 40)

**Formulation:** Decompose the bias-centered rating matrix into user and item latent factor matrices $P \in \mathbb{R}^{|U| \times k}$ and $Q \in \mathbb{R}^{|I| \times k}$:

$$\hat{r}_{ui} = \mu + b_u + b_i + p_u^\top q_i$$

**Why this model?**

This is the **core model under test** in our scientific question: *Can latent factor models significantly outperform neighbourhood methods?* Matrix factorization maps users and items into a shared 40-dimensional space where dimensions may correspond to unobserved taste axes (e.g., preference for classic drama vs. 1990s action). Unlike item-CF, MF generalises through shared latent structure even when two items have few co-raters.

**Expected role:** Best rating-prediction accuracy; primary candidate for deployment.

**Hyperparameters:** k = 40 latent factors, 15 power-iteration steps, bias terms estimated from training-set means.

---

## 4. Results

### 4.1 Performance Comparison

Table 1 summarises all models on the held-out `u1.test` partition (20,000 ratings).

**Table 1 — Model performance on MovieLens 100K (u1.test)**

| Model | RMSE ↓ | MAE ↓ | Precision@10 ↑ | Recall@10 ↑ |
|-------|--------|-------|----------------|-------------|
| Bias Baseline (μ + user + item) | 0.977 | 0.766 | 0.009 | 0.003 |
| Item-Based CF (k = 30) | 0.962 | 0.751 | **0.062** | **0.014** |
| Matrix Factorization (SVD, k = 40) | **0.959** | **0.750** | 0.025 | 0.008 |

*↓ lower is better for RMSE/MAE; ↑ higher is better for Precision/Recall.*

![Model performance comparison](figures/01_model_comparison.png)

**Key findings:**

1. **Matrix factorization achieves the best rating prediction**, reducing RMSE by **1.9%** relative to the bias baseline (0.977 → 0.959) and MAE by **2.1%** (0.766 → 0.750). This confirms our M4 hypothesis directionally, though the margin is modest on this split.
2. **Item-based CF is the strongest Top-10 recommender** in this evaluation (Precision@10 = 0.062 vs. 0.025 for MF). Neighbourhood aggregation appears well-suited to surfacing "liked" titles even when its star-level calibration is slightly worse than MF.
3. **All models struggle with extreme ratings.** The bias baseline's RMSE of ~0.98 on a 1–5 scale indicates that most predictions cluster around 3–4 stars, consistent with M4's positive skew finding.

### 4.2 Prediction Quality (Matrix Factorization)

![Predicted vs actual ratings and error distribution](figures/02_prediction_quality_mf.png)

The scatter plot shows predictions compress toward the 3–4 range: the model rarely predicts 1-star ratings, mirroring the training distribution. The error histogram is centred near zero with a slight positive tail (over-prediction of low ratings is less common than under-prediction of high ratings).

### 4.3 Stakeholder View — Model Lift

![RMSE improvement over baseline](figures/03_stakeholder_rmse_lift.png)

For a non-technical audience, the key message is: **advanced models deliver measurable but incremental gains in star-rating accuracy**, while the choice between item-CF and matrix factorization depends on whether the product prioritises *exact rating display* (MF wins) or *curated recommendation lists* (item-CF wins on Precision@10 in our test).

### 4.4 Stakeholder View — Recommendation Preview

![Top recommendations for a sample user](figures/04_recommendation_preview.png)

This chart shows the Top-8 movies our matrix factorization model would recommend to User 196, alongside their actual held-out ratings. Stakeholders can immediately see that predicted high scores align with several titles the user genuinely rated 4–5 stars, while mismatches highlight where human taste diverges from model averages.

---

## 5. Discussion

### 5.1 Which Model Should We Deploy?

| Stakeholder priority | Recommended model | Evidence |
|---------------------|-------------------|----------|
| Minimise star-rating error in UI | Matrix Factorization | Lowest RMSE (0.959) and MAE (0.750) |
| Maximise "would watch" hit rate in Top-10 | Item-Based CF | Highest Precision@10 (0.062) |
| Explainability / regulatory simplicity | Bias Baseline | Each prediction decomposes into user + item offsets |

A production system might use **MF for scoring** and **item-CF for diversity re-ranking**, but that hybrid is out of scope for this milestone.

### 5.2 Alignment with M4 Hypotheses

- **H5 (rating inflation over time):** Stable mean ratings in M4 suggest that a random split is acceptable; our u1 split results should generalise across folds.
- **Positive skew (M4 §3.1):** All models under-predict 1-star ratings, validating the need for class-balanced metrics alongside RMSE.
- **Genre–era interactions (M4 §5.2):** MF captures some of this structure implicitly; explicit genre features (planned hybrid model) may further improve niche-title performance.

---

## 6. Limitations and Failure Modes

### 6.1 Data and Evaluation Limitations

- **Gender imbalance (74% male):** Models may under-represent female-user taste patterns; Precision@10 for female users may be lower than the aggregate suggests.
- **Temporal catalogue bias:** 1990s films dominate the catalogue; models may fail for pre-1970 classics or obscure titles with few training ratings.
- **Single split:** Results reflect one 80/20 partition; cross-validation across all five folds would give tighter confidence intervals.

### 6.2 Model Failure Modes

| Failure mode | Affected model(s) | Symptom | Mitigation |
|--------------|-------------------|---------|------------|
| **Cold-start user** | All | New user with no history falls back to item/global mean | Collect onboarding preferences; use demographic features |
| **Cold-start item** | Item-CF, MF | New release has no co-rating neighbours or latent profile | Content-based features (genre, year) from M4 plan |
| **Sparse neighbours** | Item-CF | User rated niche films with no similar items in catalogue | Fall back to MF or popularity baseline |
| **Rating compression** | MF, Bias | Predictions cluster at 3–4; rare 1-star ratings missed | Threshold tuning; auxiliary binary "dislike" classifier |
| **Popularity bias** | All | Top-N lists over-recommend globally popular titles | Diversity penalties; inverse-propensity weighting |
| **Shilling / manipulation** | Item-CF | Fake co-ratings can inflate similarity scores | Robust similarity metrics; anomaly detection |

### 6.3 Known Risks for Production

1. **Small RMSE gains may not translate to user-perceived improvement** — a 0.02 RMSE reduction is statistically meaningful but may be invisible in A/B tests focused on engagement.
2. **Precision@10 remains low overall** (best model: 6.2%), meaning roughly 1 in 16 recommended titles is a confirmed "like" — stakeholders should set expectations accordingly.
3. **No fairness audit** was performed across demographic subgroups; age and occupation effects identified in M4 may produce uneven recommendation quality.

---

## 7. Conclusion

We trained and evaluated three models — bias baseline, item-based collaborative filtering, and matrix factorization — on the MovieLens 100K dataset using RMSE, MAE, Precision@10, and Recall@10. Matrix factorization delivers the best star-rating accuracy, partially confirming our core research hypothesis, while item-based CF excels at Top-10 recommendation precision. Stakeholder visualisations translate these technical results into actionable product trade-offs.

The companion notebook (`modelling_ml100k.ipynb`) reproduces all training, evaluation, and figure generation. 

---

## References

- M4 EDA report: `../M4/eda_report.md`
- Preprocessing log: `../M2 & M3/docs/preprocessing_log.md`
- Data quality summary: `../M2 & M3/docs/data_quality.md`
- MovieLens 100K: https://grouplens.org/datasets/movielens/100k/
