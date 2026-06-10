# Daily Content & SEO Playbook — MindPeak Institute

This is the **human** half of the daily routine. The machine half
(`scripts/daily-seo-routine.mjs` + the `seo-daily` GitHub Action) checks hygiene
automatically every morning and opens an issue if anything regresses.

---

## ⚠️ Read this first — why there is no "auto-publish human-like content" script

The March 2026 penalty was caused by **scaled content abuse**: thousands of templated,
machine-generated pages pretending to be editorial content ("Best X Coaching in Y").
Google's spam policies target *content generated at scale with little human value-add,
regardless of how human it sounds*. An automated daily publisher — however "human-like" —
is a re-penalty machine. Sites get caught by patterns (publish cadence, template skeletons,
interlinking shape), not just by prose quality.

What actually moves rankings now: **fewer, genuinely useful pages, improved continuously by
a human**. That's the routine below. Budget: ~30–45 minutes/day.

---

## Daily routine (Mon–Sat, ~30–45 min)

### 1. Check the dashboard (5 min)
- Look at the `seo-daily` Action run (green = hygiene OK).
- GSC → Performance: scan impressions trend and any new queries.
- GSC → Page indexing: is "Crawled – currently not indexed" shrinking? Are 404/410 counts
  rising as doorways drain? (Both are expected during recovery.)

### 2. Improve ONE existing page (15–25 min) — the highest-ROI habit
Pick from this priority queue (in order):
1. **Chapter pages still "Crawled – not indexed"** (`seo-reports/index-state-2026-06-10.csv`,
   ~120 pages): add one genuinely new element a student would thank you for — a worked PYQ
   with your own solution walkthrough, a common-mistake example from real mentoring sessions,
   an updated weightage note from the latest paper. Real teaching insight, not padding.
2. **Striking-distance pages** (`seo-reports/keyword-opportunities-2026-06-10.md`): the page
   already ranks 4–30 for a proven query — make it clearly the best answer. Check the query,
   read the top 3 competitors, add what they're missing.
3. **Exam-info pages** (`/jee-main-syllabus-2027` etc.): update the moment NTA/NMC publishes
   real news. Genuine freshness on dated reference pages is exactly what Google rewards.

### 3. Capture one real student question (5 min)
Every demo class, WhatsApp doubt, or parent call contains real query language. Add the best
question of the day — with a genuine answer — to the FAQ of the most relevant page. This is
"human data" Google cannot get from any competitor, and it naturally matches voice/long-tail
queries.

### 4. Log it (2 min)
Append one line to `seo-reports/content-log.md`: date, page touched, what changed. After 4–6
weeks this log is your evidence of sustained quality investment (useful if a reconsideration
request is ever needed).

---

## Weekly (pick a fixed day, ~2–3 h)

| Task | Detail |
|---|---|
| **Publish ONE genuinely written post** | From the keyword-opportunities themes: exam comparisons (`X vs Y`), cutoff/counselling guides, chapter strategy. Written or heavily edited by a person who teaches this material. One excellent post/week beats seven generated ones. |
| **Run the full GSC health check** | `GSC_KEY_FILE=… node scripts/gsc-health.mjs` — review trend, top queries, sitemap status. |
| **Success story / proof content** | One student result, mentor profile, or session story (with permission). E-E-A-T is the moat batch-coaching competitors can't copy. |
| **Internal link pass** | When you publish or improve a page, add 2–3 contextual links to it from already-indexed relevant pages. |

## Monthly

- `node scripts/gsc-health.mjs --inspect` → fresh index-state CSV; diff against the previous
  month. The KPI of recovery is **"Crawled – not indexed" → "Indexed"** conversion.
- Review GSC → Removals + Manual actions panels.
- Prune: if a page got zero impressions for 90 days and serves no user purpose, improve it or
  remove it (real 404/410 — never leave thin pages 200).

---

## Hard rules (the penalty was earned by breaking these)

1. **Never generate location × exam combination pages.** Not as blog posts, not as landing
   pages, not "just for the sitemap".
2. **Never auto-publish.** Generated drafts are fine as *input*; a human must rewrite, verify
   facts, and consciously click publish.
3. **Never fake dates.** No rotating `lastmod`, no republishing old content with new dates.
4. **One intent = one page.** Demand for "coaching fees in <city>" is answered by ONE
   excellent fees guide, not 75 city variants.
5. **Every new page goes into `app/sitemap.xml/route.ts`** and gets at least 2 internal links
   from indexed pages — or it doesn't ship.
