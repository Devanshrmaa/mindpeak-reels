# Keyword Opportunities — Striking-Distance Queries on Legitimate Pages

**Source:** GSC Search Analytics API, pre-crash window (2026-03-01 → 2026-03-24), filtered to
non-brand queries at positions 4–30 with ≥20 impressions, **landing on legitimate pages only**
(doorway URLs excluded). These are the queries the site has already proven it can rank for —
the fastest traffic to reclaim as the penalty eases.

## Top proven query → page pairs

| Impr. | Pos | Query | Page | Status |
|---|---|---|---|---|
| 103 | 4 | online vs offline jee coaching which is better | `/online-vs-offline-jee-coaching` | ✅ indexed |
| 96 | 7 | cell cycle and cell division neet pyq | `/neet-pyq-biology-cell-division` | check |
| 85 | 7 | cuet vs jee | `/blog/cuet-vs-jee-main-comparison-2026` | check |
| 68 | 9 | haloalkanes and haloarenes neet pyq | `/neet-pyq-chemistry-haloalkanes` | check |
| 64+63 | 5 | locomotion and movement pyq neet | NEET PYQ question pages | check |
| 52 | 10 | aiims delhi cut off | `/blog/neet-cutoff-aiims-delhi-2026` | check |
| 46+40+23 | 8–20 | ap eamcet syllabus (+weightage) | `/blog/ap-eamcet-syllabus-complete-guide-2026` | ✅ still earning |
| 40 | 4 | is kcet easier than jee | `/blog/kcet-vs-jee-advanced-comparison-2026` | check |
| 38 | 5 | best coaching class 6–10 jee neet | `/foundation-coaching` | crawled-not-indexed |
| 31 | 12 | comedk exam pattern | `/blog/comedk-complete-guide-2026` | check |
| 28+27 | 7–9 | bitsat vs jee mains (+syllabus overlap) | `/blog/bitsat-vs-jee-main-comparison-2026` | check |
| 25 | 6 | important chapters for kcet physics | `/blog/how-to-prepare-physics-for-kcet-2026` | check |
| 24+24 | 6–7 | jee advanced weightage parabola/conic sections | `/jee-maths-conic-sections`, `/jee-math-geometry` | crawled-not-indexed |
| 23+23 | 4–7 | 99 percentile in neet | `/blog/how-to-score-99-percentile-in-neet-*` | check |
| 22 | 8 | environmental issues neet | `/blog/how-to-prepare-environmental-issues-for-neet` | check |

## Demand with no landing page (killed doorways had it)

City-fee queries ("indore neet coaching fees" 35i, "kanpur neet coaching fees" 28i, "kota neet
coaching fees for 1 year" 26i) used to land on the killed `cost-of-*-preparation-in-{city}`
doorways. The demand is real; the doorway answer was wrong. **Option (only if pursued as ONE
genuinely useful page, not per-city):** a single, data-rich "JEE/NEET coaching fees in India —
city-wise breakdown" guide could capture this cluster legitimately. Do not regenerate per-city
pages.

## Themes that consistently ranked

1. **Exam-comparison content** (`X vs Y`) — bitsat/cuet/kcet/eamcet vs jee/neet. Positions 4–10
   pre-crash. Comparisons are unique content the site does well; keep expanding.
2. **NEET PYQ chapter hubs** — chapter-level PYQ queries reached pos 5–9 with zero link
   building. The chapter/PYQ architecture is sound.
3. **Cutoff/syllabus reference** — AIIMS cutoff, AP EAMCET syllabus. The exam-info pages (now
   un-noindexed as of this PR) target exactly this.
4. **Weightage queries** — "jee advanced weightage <topic>" landed on chapter pages now stuck
   in "crawled — not indexed"; the homepage footer link hub added in this PR is the crawl-path
   fix for those.

## Monitoring

Run `GSC_KEY_FILE=… node scripts/gsc-health.mjs` weekly (add `--inspect` monthly for the full
index inventory). Compare against `seo-reports/index-state-2026-06-10.csv` as the baseline.
