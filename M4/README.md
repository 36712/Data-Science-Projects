# M4 — Exploratory Data Analytics Report

**Dataset:** [MovieLens 100K](https://grouplens.org/datasets/movielens/100k/)  
**Date:** June 2026

---

## Overview

This folder contains the complete submission for **M4 — Exploratory Data Analytics Report**. We analyse the cleaned MovieLens 100K dataset through univariate, bivariate, and multivariate visualisations, revise initial hypotheses based on EDA findings, and define the modelling question for the next project phase.

---

## Folder Structure

```
M4最终作业/
├── README.md                 # This file (grading guide)
├── eda_ml100k.ipynb          # Jupyter Notebook — 10 visualisations + interpretations
├── eda_report.md             # Written report (4–6 pages)
├── figures/                  # Exported chart images (PNG)
   ├── 01_rating_distribution.png
   ├── 02_age_distribution.png
   ├── ...
   └── 10_genre_decade_heatmap.png
 
```

---

## Quick Navigation

| Requirement | Where to find it |
|-------------|------------------|
| **Written report (4–6 pages)** | [`eda_report.md`](eda_report.md) |
| **Jupyter Notebook (≥8 visualisations)** | [`eda_ml100k.ipynb`](eda_ml100k.ipynb) — 10 charts with embedded outputs |
| **Interpretation for every chart** | Notebook: each section has a **Takeaway**; Report: each figure has an **Interpretation** |
| **Univariate analysis** | Figures 1–4 · Report §3 |
| **Bivariate analysis** | Figures 5–8 · Report §4 |
| **Multivariate analysis** | Figures 9–10 · Report §5 |
| **Revised hypotheses** | Report §6 (H1–H5) |
| **Modelling question** | Report §7 |

---

## Deliverables Summary

### 1. Visualisations (10 total)

| # | Type | Chart | Notebook Section | Figure File |
|---|------|-------|------------------|-------------|
| 1 | Univariate | Rating distribution (1–5) | §1 | `figures/01_rating_distribution.png` |
| 2 | Univariate | User age distribution | §2 | `figures/02_age_distribution.png` |
| 3 | Univariate | Movies by release decade | §3 | `figures/03_release_decade.png` |
| 4 | Univariate | User activity (ratings per user) | §4 | `figures/04_user_activity.png` |
| 5 | Bivariate | Rating vs gender | §5 | `figures/05_rating_by_gender.png` |
| 6 | Bivariate | Mean rating by age group | §6 | `figures/06_rating_by_age_group.png` |
| 7 | Bivariate | Mean rating by occupation | §7 | `figures/07_rating_by_occupation.png` |
| 8 | Bivariate | Rating volume & mean over time | §8 | `figures/08_rating_over_time.png` |
| 9 | Multivariate | Gender × occupation heatmap | §9 | `figures/09_gender_occupation_heatmap.png` |
| 10 | Multivariate | Genre × release decade heatmap | §10 | `figures/10_genre_decade_heatmap.png` |

### 2. Revised Hypotheses (Report §6)

| ID | Outcome | Summary |
|----|---------|---------|
| H1 | Revised | Older users rate more generously; ages 18–24 are the most critical |
| H2 | Rejected | Gender does not meaningfully affect rating magnitude |
| H3 | Reversed | Older films score higher; 1990s releases average lower |
| H4 | Partially confirmed | Students dominate volume but do not skew the mean |
| H5 | Confirmed & refined | Rating volume grew over time; mean rating remained stable |

### 3. Modelling Question (Report §7)

> Given a user ID, their demographic profile (age, gender, occupation), and their history of past ratings, predict the star rating (1–5) that the user would assign to a movie they have not yet seen, where each movie is described by its title, release year, and genre.

Planned evaluation: RMSE (primary), MAE, Precision@10 / Recall@10; baselines → matrix factorisation → hybrid model with genre/year features.

---

## Data Dependencies

This EDA builds on the preprocessed data from earlier milestones in the parent repository:

| File | Path (relative to repo root) | Purpose |
|------|-------------------------------|---------|
| Cleaned ratings | `data/processed/ml100k_clean.csv` | Main analysis input |
| Raw genre metadata | `data/raw/ml-100k/u.item`, `u.genre` | Multivariate genre analysis |
| Preprocessing log | `docs/preprocessing_log.md` | Data provenance |
| Data quality summary | `docs/data_quality.md` | Schema and null rates |
