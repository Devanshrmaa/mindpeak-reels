# Weekly SEO Loop — Standing Playbook

**This file is the loop's memory.** It lives in the repo so any fresh session can run
the weekly loop without depending on a long-lived chat session's context. Update the
"Priority queue" and "Last run" sections at the end of every run.

---

## Context in one paragraph

`mindpeakinstitute.com` was hit by the March 2026 Google spam update (scaled doorway
content and fabricated trust signals) and collapsed from ~110 clicks/day to ~1. Recovery
work removed the scaled-content surfaces, rebuilt the sitemap as an honest segmented index
and fixed on-page defects. **Ranking has recovered**: in the 28 days to 2026-09-08 the site
earned 464 clicks from 48,940 impressions at an average position of 8.8 (prior 28 days:
45 clicks, 1,387 impressions, position 35.2). The constraint is now **click-through and
trust**: CTR is ~0.95%, and on 2026-10-10 a crawl found fabricated results still live on
~40 indexed pages (see Last run) — the same class of signal the penalty punished.

## Non-negotiable rules (also in CLAUDE.md)

1. `src/lib/sitemapUrls.ts` is the single source of truth for indexable URLs.
2. **Never** stamp rolling "today" lastmod dates — bump `CONTENT_ANCHOR` only on real
   content releases. Fake freshness contributed to the penalty.
3. No thin/templated pages added to the sitemap. New URLs need genuine unique content.
4. **Never fabricate** student results, ranks, testimonials, review counts, or stats.
   The owner has confirmed there are no publishable verified results yet. That includes
   *softer* forms the earlier cleanups missed: "a strong rank", "our results prove…",
   "students who switch report N marks improvement", stat tiles that split "95%" from
   "Selection Rate", and any sentence claiming results were "verified" or "consented".
   `src/test/no-fabricated-claims.test.ts` PART 3 enforces these over everything served.
5. Verify before pushing: `npx vitest run`, `npx tsc --noEmit`, and a live dev render of
   whatever changed.
6. Work on branch `claude/service-account-credentials-u2rh5j`, restarted from
   `origin/main`. Open a draft PR.

## Each run

1. **Data (optional).** If a GSC service-account JSON is available (env var
   `GSC_SA_JSON`, or a path in `GSC_SA_JSON_PATH`) — it must be set in the cloud
   environment's settings, not pasted into chat, or it is lost on every container
   recycle — mint a token and pull
   week-over-week: daily clicks/impressions, top queries/pages, striking-distance
   movers (position 5–30). If no credentials are available, **say so plainly in the
   report and continue** with the next queued item below — the loop must not stall on
   missing credentials.
2. **Report the trend honestly.** Impressions and average position are the leading
   indicators during recovery; clicks lag. Do not dress up a flat week.
3. **Ship exactly one improvement** from the priority queue (or a better one the data
   surfaces). Small, verified, reversible.
4. **Update this file**: move the item out of the queue, append to "Last run".
5. After merge, run `node scripts/indexnow-ping.mjs` (Bing is not suppressing this
   domain — fastest indexing lane available).

## Priority queue (work top-down)

1. **IIT/AIIMS credential claims — blocked on the owner.** ~170 mentions on ~30 live
   pages (homepage, `app/layout.tsx` default metadata, Pricing, Contact, `/mentors`,
   city JSON-LD) say mentors are "IIT/AIIMS alumni", and one URL is built on it
   (`/jee-mentorship-by-iitians`). `src/data/authorData.ts` — the user-confirmed faculty
   list — records degrees but **no institution for anyone**. Do not touch until the owner
   answers. If none are IIT/AIIMS alumni: remove sitewide and decide the URL's fate. If
   some are: record `institution` in `authorData.ts` and rewrite the claims to name only
   those people.
2. **Measure #266 and #270 (needs GSC).** #266 rewrote the 147 chapter meta descriptions
   (live 2026-09-09). #270 fixed mid-word-truncated descriptions on 170 URLs and dropped
   the brand suffix from overlong blog titles (live 2026-09-12). Baseline for the 170
   pages, 28d to 2026-09-08: 13,331 impressions, 74 clicks, 0.56% CTR (site 0.95%).
   Read them separately — they touch different pages.
3. **Enrich NEET PYQ chapter hubs.** Still 5 of 69 chapters in
   `src/data/neet-pyq/chapterEnrichments.ts` (unchanged since July). Enrichment *is* the
   indexing mechanism: enriched chapters are promoted into `/sitemap-pyq.xml` by
   `getNeetPyqHubPaths()`. Prioritise chapters with GSC impressions.
4. **Answer the question the chapter pages actually rank for.** Query data shows the
   high-impression chapter pages rank for questions — "is rotational motion hard" (25/wk),
   "can i skip complex numbers for jee mains" (12/wk) — that their descriptions and copy
   never address. Do this after #266 has data, so the two changes are not confounded.
5. **Original-data counselling cluster.** Still only 2 counselling pages. Build citable
   assets from the repo's own question banks (756 JEE + 1,556 NEET PYQs) plus public
   JoSAA/MCC data.
6. **Delete the dead Vite tree — ask first.** `src/views/Index.tsx`, `HomeRedesign.tsx`
   and `components/{home-redesign,sections,storytelling}/` are not reachable from any
   Next.js route and still hold old fabricated claims (named students, "a strong rank").
   But `index.html` → `src/main.tsx` → `Index.tsx` is live Vite config, and the owner
   uses Lovable; confirm Lovable does not depend on it before deleting.

## Owner actions (blockers the loop cannot do)

- **Rotate the GSC service-account key and store it as an environment variable.** The
  key (`private_key_id 00952f4f…`) has been pasted into chat in plaintext more than once.
  Rotate it in Google Cloud, then add the new JSON in this cloud environment's settings
  as `GSC_SA_JSON` so fresh sessions — including this weekly loop — can read it.
- **Answer the IIT/AIIMS question** (queue item 1).
- **GSC → Security & Manual Actions check.** No API exists; still unconfirmed.
- **Request Indexing** in GSC for `/one-to-one-jee-coaching` and `/neet-cbt-2027-guide`.
- **Two smaller facts to confirm:** city pages show "MindPeak Students Across <city> —
  students from these localities"; and `authorData.ts` has near-duplicate entries
  (Devansh *MBBS* vs Devansh Sharma *BDS*; Muskan *MDS* vs Muskan Singla, no degree).
- **Backlinks.** Free routes only (the owner has no budget): guest posts
  (futuretopper.in, edustoke.com, examcharcha.in), Google Business Profile, Bing Places,
  Startup India / MSME listing, genuine Quora/Reddit answers. Skip the pay-to-play
  targets in `seo-reports/outreach-targets.json`.

## Last run

- **2026-10-10** — No GSC data (no credentials in the environment), so no trend this run.
  **Loop health:** this routine fired every Monday from 2026-07-27 to 2026-10-05 and
  reported success, but opened no PR and never updated this file — the queue above was
  eleven weeks stale. Shipped (manual session): a crawl of production found fabricated
  results live on ~40 indexed pages that the existing guard could not see — eight
  "Verified … Student Outcomes" sections claiming NTA-scorecard verification "with
  student consent" over invented ranks attributed to real faculty; ~25 "a strong rank"
  remnants of an earlier find-and-replace; templated fake testimonials on all 147 chapter
  pages and the city pages; invented results blocks on all 16 course pages; per-city
  "Avg. Marks Improvement" figures seeded from a hash of the slug; "95% Success Rate"
  tiles on /courses, /free-trial and others; an invented faculty member on /mentors.
  All removed or replaced with programme facts; added PART 3 to the guard test (claim
  *classes* over the served import graph) and confirmed it fails on the old code.
- **2026-07-21** — Trend: impressions 92 → 195 → 262/week (best yet), avg position ~31.
  Shipped: NSEP/NSEC/IMO-specific FAQs on the olympiad comparison (biggest
  striking-distance cluster, ~10 queries at position 13–30), plus SERP title fitting
  across 250 templated pages (84 pages with impressions were shipping titles over 65
  chars; worst was 104). PR #199.
