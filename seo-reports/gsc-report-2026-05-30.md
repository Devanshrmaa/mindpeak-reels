# MindPeak Institute — Search Console Report (first with REAL GSC data)
**Date:** 2026-05-30 · **Source:** Google Search Console API (`sc-domain:mindpeakinstitute.com`, service-account `siteFullUser`)
**Prior reports** used public `site:` search as a proxy; **this one uses authenticated GSC data.**

---

## Executive summary

The "Google performance drop" is now **confirmed and quantified** from first-party data: a new site that spiked to **141,787 impressions in March 2026**, then **collapsed ~98%** and is **still declining** in May — the signature of the **March 2026 Spam Update** hitting the mass doorway pages. The site currently ranks **only for its own brand name**.

The de-indexing work **is taking effect** (a sampled doorway now returns "Not found" in GSC). But the **decisive problem** is that Google **has not recrawled the money pages since ~April 13** under penalty crawl-throttle, so every indexability fix is **unseen** — the curated city pages still show "Excluded by noindex," and the 40 new regional hubs are "unknown to Google."

**Status: 🔴 Penalty confirmed, still bleeding — recovery gated almost entirely on getting Google to RECRAWL the now-indexable pages.**

---

## 1. Performance trend (clicks / impressions)

| Month | Clicks | Impressions |
|---|---|---|
| Dec 2025 | 40 | 80 |
| Jan 2026 | 16 | 59 |
| Feb 2026 | 103 | 2,006 |
| **Mar 2026** | **1,890** | **141,787** |
| Apr 2026 | 119 | 2,509 |
| May 2026 | 108 | 1,199 |

- **Year-ago (May 2025): 0 / 0** — the site is new; it has no pre-penalty baseline to "recover" to.
- The **March spike** was the doorway pages briefly ranking; the **April collapse** is the Spam Update.
- **Still falling:** May 1–28 = **1,199 impressions** vs the comparable April window's **2,245** — roughly **half**. Recovery has **not** begun.

| 28-day window | Clicks | Impressions | Avg position |
|---|---|---|---|
| May 1–28 | 108 | 1,199 | 12.9 |
| Apr 3–30 | 107 | 2,245 | 11.9 |

(Average position is flattered by brand queries at #1; non-brand sits at 30–88.)

---

## 2. Brand-only survival (classic post-penalty signature)

**Top queries (last 28d):** `mindpeak institute` (47 clicks), `mind peak institute` (23) — **65% of all clicks are your own name.** Every non-brand query is at **position 30–88** with ~0 clicks (e.g. "best neet coaching centres in vizag" pos 88, "chemistry formula for jee mains" pos 80).

**Top pages (last 28d):** Homepage 80 clicks (74% of total), `/about` 5, `/jee-chemistry-formulas` 4 (pos 30). **No city/subject/hub page drives meaningful traffic.**

---

## 3. URL Inspection — the critical finding

| URL | GSC coverage | Last crawled | Read |
|---|---|---|---|
| `/` | ✅ Submitted and indexed | 2026-05-25 | healthy |
| `/best-jee-coaching-in-india` | ✅ Submitted and indexed | 2026-05-12 | flagship works |
| `/jee-coaching-in-bangalore` (T1 keeper) | 🔴 Excluded by 'noindex' | **2026-04-13** | **stuck on stale crawl** |
| `/jee-coaching-in-karnataka` (new hub) | ⚪ URL is unknown to Google | never | just created |
| `/jee-coaching-in-dharamshala` (doorway) | ✅ Not found (404/410) | 2026-05-23 | **410 working** |
| `/jee-coaching-in-bahrain` (doorway) | Excluded by 'noindex' | 2026-05-12 | de-indexing in progress |

**Interpretation:**
- ✅ **De-indexing is working.** `dharamshala` is gone ("Not found"); the public `site:` cache simply lags GSC.
- 🔴 **The money pages aren't indexed.** `bangalore` is `index:true` in code, but Google **last crawled it 2026-04-13** and saw the *old* noindex, then never returned. **Six weeks of indexability fixes are unseen.** This is the #1 blocker.
- ⚪ The 40 hubs are unknown (merged today) — they need a first crawl.

---

## 4. Sitemap status — action taken

`/sitemap.xml`: last downloaded 2026-05-27, **464 URLs, 0 errors**. Production is **live with today's merge** (now 97 KB, includes the 40 hubs).

**Actions taken this session (via GSC API):**
- **Resubmitted** `https://mindpeakinstitute.com/sitemap.xml` → HTTP 204 (queued; now carries the 40 hubs).
- **Submitted** `https://mindpeakinstitute.com/removal-sitemap.xml` → HTTP 204 (the temporary recrawl-accelerator for the dead doorways; was not previously in GSC).
- Both now show `isPending: true`, `errors: 0`.

---

## 5. What the GSC API does NOT expose

- **Manual Actions** — not available via API. **The owner must check `GSC → Security & Manual actions → Manual actions` manually.** This determines whether recovery needs a reconsideration request (manual action) or just recrawl + time (algorithmic). It is the single most important unknown.

---

## 6. Recovery assessment

The two-stage model from the research is visible in the data:
1. **De-indexing the doorways** — *on track* (410s landing in GSC).
2. **Re-surfacing the good pages** — *blocked*, because Google isn't recrawling the now-indexable keepers/hubs under throttle.

Because the site is **new with no pre-penalty baseline**, "recovery" means **building** non-brand visibility on the consolidated hubs/keepers — which cannot start until Google recrawls them.

---

## 7. Action items

### 🔴 Owner — manual, highest priority
1. **Check Manual Actions** (only place this is visible). If a manual action exists → fix + file a reconsideration request.
2. **Request Indexing** (URL Inspection → "Request indexing") for the **~20 keeper city pages** and the **40 new state hubs**. The data proves Google hasn't recrawled them since April; forcing recrawl is the #1 lever to make the indexability fixes count. (No API exists for this on normal pages — it must be done in the GSC UI.)

### ✅ Done this session (API)
3. Resubmitted `/sitemap.xml` (now with hubs) + submitted `/removal-sitemap.xml` to nudge recrawl.

### 🟡 Monitor (next check ~1–2 weeks, and after the next core update)
4. `bangalore` keeper → should flip from "Excluded by noindex" to "Indexed" once recrawled.
5. Hub URLs → should move from "unknown" to "Discovered/Indexed."
6. Doorways → "Not found" count should rise; impressions trend should stop falling, then turn.

---

## Appendix — method
Authenticated via service account (`webmasters` / `webmasters.readonly` scopes): `sites.list`, `searchanalytics.query` (date/page/query), `sitemaps.list` + `sitemaps.submit`, `urlInspection.index.inspect`. The service-account key was used only in-session and should be **rotated** by the owner.

*Next report: re-pull the same metrics in ~1–2 weeks to measure recrawl progress on the keepers/hubs.*
