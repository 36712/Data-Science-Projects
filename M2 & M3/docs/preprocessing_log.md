# Preprocessing Log — MovieLens 100K

## Overview
- Raw source: https://files.grouplens.org/datasets/movielens/ml-100k.zip
- Acquisition: scripts/download_ml100k.py
- Preprocessing script: scripts/preprocess_ml100k.py
- Output: data/processed/ml100k_clean.csv

## Steps (fill in run-specific details)
1. Acquisition
   - Command: `python scripts/download_ml100k.py`
   - Notes: downloads and extracts to data/raw/ml-100k.
2. Load & Parse
   - Files read: u.data (ratings), u.item (items), u.user (users).
   - Timestamp parsed from seconds to datetime; release_date parsed to datetime with invalid -> NaT.
3. Validation & Cleaning
   - Enforced rating bounds [1,5]; out-of-range rows dropped (record count affected: 0).
   - Exact duplicate rows removed (count removed: 0).
   - Missing value handling: release_date NaT kept; zip_code missing -> kept as is; no imputations.
4. Feature Derivation
   - Added rating_date (date) and release_year (int from release_date year).
5. Output
   - Saved cleaned data to data/processed/ml100k_clean.csv.
   - Generated docs/data_quality.md from preprocess run.

## Rationale
- Keep transformations minimal and reversible; only validity checks and type coercions applied.
- No normalization/imputation to preserve original signal; downstream models can decide.

## Run Metadata
- Run date/time: 2026-05-31 11:32 (UTC+08)
- Script version (git hash or timestamp): local run 2026-05-31
- Command used: `python scripts/preprocess_ml100k.py`
- Environment: python 3.12.4; pandas 2.2.3

## Checks Performed
- Row/column counts before/after cleaning.
- Rating distribution after cleaning.
- Null rate snapshot recorded in data_quality.md.
