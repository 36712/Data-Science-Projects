# Data Quality Summary (ml-100k)

Total rows: 100000
Total columns: 12

## Null Rates
- user_id: 0.0
- item_id: 0.0
- rating: 0.0
- timestamp: 0.0
- movie_title: 0.0
- release_date: 0.0001
- age: 0.0
- gender: 0.0
- occupation: 0.0
- zip_code: 0.0
- rating_date: 0.0
- release_year: 0.0001

## Rating Distribution
- 1: count=6110, prop=0.0611
- 2: count=11370, prop=0.1137
- 3: count=27145, prop=0.2715
- 4: count=34174, prop=0.3417
- 5: count=21201, prop=0.2120

## Gender Distribution
- M: 74260
- F: 25740

## Top 10 Occupations
- student: 21957
- other: 10663
- educator: 9442
- engineer: 8175
- programmer: 7801
- administrator: 7479
- writer: 5536
- librarian: 5273
- technician: 3506
- executive: 3403

## Schema (pandas dtypes)
- user_id: int64
- item_id: int64
- rating: int64
- timestamp: datetime64[ns]
- movie_title: object
- release_date: datetime64[ns]
- age: int64
- gender: object
- occupation: object
- zip_code: object
- rating_date: object
- release_year: float64

## Outlier/Anomaly Notes
- Enforced rating bounds [1,5]; rows outside were dropped.
- release_date parsed with errors='coerce'; invalid dates set to NaT.
- Duplicated rows (exact match) removed.