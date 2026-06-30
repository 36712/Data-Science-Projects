# M6 Demo — MovieLens Recommender Web App

Interactive demo for the INFO 442 final presentation and demo video.

## Files

| File | Purpose |
|------|---------|
| `export_demo_data.py` | Train M5 models and export precomputed Top-10 lists |
| `demo_data.json` | Generated recommendation data (6 sample users × 3 models) |
| `demo_data.js` | Same data as JS (loaded by index.html, works without HTTP server) |
| `index.html` | Demo web UI |
| demo_video.mp4 | Web demo video |

## Run locally

Double-click `index.html` or open it in a browser — data loads from `demo_data.js` .

## Demo script (for video)

1. Select **User 196** (matches M5 recommendation preview chart)
2. Choose **Matrix Factorization** → click **Get Top-10 Recommendations**
3. Switch to **Item-Based CF** and compare the list
4. Try another user (e.g. User 253)
