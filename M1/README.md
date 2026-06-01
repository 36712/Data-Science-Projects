# INFO 442
# Project Proposal: Understanding User Preferences through Latent Factors

**Team Members:** Chang Liu (刘畅), Bolun Feng (冯博伦), Jiajin Guo (郭甲进), Shixuan Li (李仕轩)

---

## 1. Domain and Motivation
### Why does this problem matter?
In the digital era, streaming services like Netflix and Hulu deliver vast catalogs of content to millions of users. However, this abundance has created an **information overload** problem, where users struggle to find movies that match their specific preferences. 

Recommendation systems are the primary solution to this challenge. Studies indicate that over 80% of viewing activity on major platforms originates from recommendation engines. Improving these models directly enhances user experience, increases platform engagement, and solves the discovery problem in large-scale digital libraries.

---

## 2. Dataset Description
### Source and Access
We are using the **MovieLens 100K** dataset, released by the GroupLens Research Group. It is a benchmark dataset in the field of recommender systems. We will use the standard `u1.base` and `u1.test` files to ensure an 80/20 train-test split for fair evaluation.

### Dataset Statistics
| Metric | Value |
| :--- | :--- |
| **Total Users** | 943 |
| **Total Movies** | 1,682 |
| **Total Ratings** | 100,000 |
| **Sparsity** | 93.7% |
| **Rating Scale** | 1 - 5 (Explicit) |

### Ethical Considerations
The MovieLens dataset is fully de-identified, containing only numerical IDs and anonymized ratings. It does not contain any personally identifiable information (PII) and is used strictly for academic research purposes in compliance with GroupLens' terms of use.

---

## 3. Scientific Question
The core research question of this project is:
> **Can latent factor models (specifically Matrix Factorization) significantly outperform traditional neighborhood-based collaborative filtering methods in predicting user-movie ratings on the MovieLens 100K dataset?**

---

## 4. Preliminary Hypothesis
### What do we expect to find?
We hypothesize that the **Matrix Factorization (MF)** model will yield superior performance compared to baseline models (Global Average, User-based CF, and Item-based CF).

### Why?
1. **Handling Sparsity:** Neighborhood-based methods often struggle with the 93.7% sparsity of the MovieLens matrix. MF addresses this by mapping users and items into a dense, low-dimensional latent space.
2. **Latent Structures:** Unlike proximity-based methods, MF can uncover hidden preference structures (e.g., specific genre combinations or stylistic nuances) that are not explicitly captured by simple correlations.
3. **Expected Performance:** We expect the MF model to reduce the Root Mean Squared Error (RMSE) by approximately 10-15% compared to the baselines.

---

## 5. Roles and Responsibilities
The team responsibilities are divided as follows to ensure a balanced workload across the project lifecycle:

* **Chang Liu (刘畅):** **Data Engineer** – Responsible for data preprocessing, exploratory data analysis (EDA), and data cleaning.
* **Bolun Feng (冯博伦):** **Baseline Developer** – Responsible for implementing and evaluating baseline models (Global Mean, User-based CF, and Item-based CF).
* **Jiajin Guo (郭甲进):** **Algorithm Engineer** – Responsible for the core Matrix Factorization (MF) model development, hyperparameter tuning, and SGD optimization.
* **Shixuan Li (李仕轩):** **Evaluation & Lead** – Responsible for performance metric analysis, data visualization, and compiling the final report and documentation.
