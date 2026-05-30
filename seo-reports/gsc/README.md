# GSC Recovery Monitor

Automated weekly pull of **authenticated Google Search Console** data for the
March 2026 Spam Update recovery. Generates a dated report here
(`seo-reports/gsc/gsc-YYYY-MM-DD.md`) with the performance trend, top
pages/queries, sitemap status, and — the key bit — a **Request-Indexing
TODO** list of indexable coaching pages Google hasn't indexed yet.

## How it runs

- **Script:** `scripts/gsc-report.mjs` (no external deps — Node 18+ built-ins).
- **Schedule:** `.github/workflows/gsc-report.yml` — every Monday 06:00 UTC, plus
  manual "Run workflow". Commits the new report and writes a run summary.
- **Locally:** `GSC_SA_FILE=./gsc-key.json npm run gsc-report`
  (or set `GSC_SERVICE_ACCOUNT_JSON` to the JSON string).

## One-time setup

1. **Service account** (Google Cloud) with the Search Console API enabled.
2. Add its email as a **Full/Owner user** on the GSC property
   (`sc-domain:mindpeakinstitute.com`).
3. In GitHub: **Settings → Secrets and variables → Actions → New secret**
   - `GSC_SERVICE_ACCOUNT_JSON` = the full service-account JSON.
   - (optional vars `GSC_SITE`, `GSC_ORIGIN` to override defaults.)

## ⚠️ Security

Never commit the key (the patterns are gitignored). If a key is ever exposed,
**rotate it** in Google Cloud Console → IAM → Service Accounts → Keys.

## What the API can't do (still manual, each week)

- **Manual Actions** report — not exposed by the API. Check
  `GSC → Security & Manual actions` by hand; it decides whether a
  reconsideration request is needed.
- **Request Indexing** — the API only supports it for job-posting/livestream
  pages, so work the TODO list in the report via **URL Inspection → Request
  indexing** in the GSC UI (a few per day).
