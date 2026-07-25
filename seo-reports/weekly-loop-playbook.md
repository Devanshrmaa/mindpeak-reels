# Weekly SEO Loop — Standing Playbook

**This file is the loop's memory.** It lives in the repo so any fresh session can run
the weekly loop without depending on a long-lived chat session's context. Update the
"Priority queue" and "Last run" sections at the end of every run.

---

## Context in one paragraph

`mindpeakinstitute.com` was hit by the March 2026 Google spam update (scaled doorway
content) and collapsed from ~110 clicks/day to ~1. Recovery work through July 2026
removed the scaled-content surfaces (641 thin blog posts noindexed, doorways 410'd/301'd),
removed every fabricated trust signal (fake review markup, invented student ranks,
auto-incrementing stats), rebuilt the sitemap as an honest segmented index, added
FAQ/BlogPosting schema, shipped six core service pages, and unlocked previously orphaned
NEET PYQ hubs. Impressions are recovering (≈92 → 262/week through mid-July); clicks lag
because average position is still ~25–31. **The remaining bottleneck is domain trust and
time, not code.**

## Non-negotiable rules (also in CLAUDE.md)

1. `src/lib/sitemapUrls.ts` is the single source of truth for indexable URLs.
2. **Never** stamp rolling "today" lastmod dates — bump `CONTENT_ANCHOR` only on real
   content releases. Fake freshness contributed to the penalty.
3. No thin/templated pages added to the sitemap. New URLs need genuine unique content.
4. **Never fabricate** student results, ranks, testimonials, review counts, or stats.
   The owner has confirmed there are no publishable verified results yet.
5. Verify before pushing: `npx vitest run`, `npx tsc --noEmit`, and a live dev render of
   whatever changed.
6. Work on branch `claude/service-account-credentials-u2rh5j`, restarted from
   `origin/main`. Open a draft PR.

## Each run

1. **Data (optional).** If a GSC service-account JSON is available (env var
   `GSC_SA_JSON`, or a path in `GSC_SA_JSON_PATH`), mint a token and pull
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

1. **Enrich NEET PYQ chapter hubs.** `src/data/neet-pyq/chapterEnrichments.ts` has
   editorial enrichment for only 5 of 69 chapters. Enriched chapters are automatically
   promoted into `/sitemap-pyq.xml` by `getNeetPyqHubPaths()`, so enrichment *is* the
   indexing mechanism. Prioritise chapters with GSC impressions — observed so far:
   reproductive-health, cell-division, haloalkanes, human-physiology topics.
2. **JEE PYQ hub indexing.** `/jee-pyq-<subject>-<chapter>` hubs render real content but
   have no branch in `src/lib/resolveSlugMetadata.ts`, so they hit the `noindex`
   fallback with a junk auto-generated title. Mirror the NEET hub branches, then promote
   into the sitemap tranche once titles/content are verified.
3. **Original-data counselling cluster.** Only 2 counselling pages exist against a rich
   template. Build genuinely original assets from the repo's own 757 JEE + 1,578 NEET
   PYQ banks (e.g. chapter-weightage-by-year analyses) plus public JoSAA/MCC data —
   citable content no competitor publishes.
4. **Dead-code cleanup.** `src/views/HomeRedesign.tsx`, `src/views/Index.tsx` and their
   `home-redesign/`, `sections/`, `storytelling/` components still contain fabricated
   rank claims ("AIR 42", named testimonials). They are imported by **no route** (verified
   2026-07-18), so they are not served — but they should be deleted so the claims cannot
   be revived by accident.

## Owner actions (blockers the loop cannot do)

- **GSC → Security & Manual Actions check.** No API exists. Still unconfirmed; this is
  the highest-stakes unknown in the recovery.
- **Rotate the GSC service-account key** (it was shared in plaintext) and store the new
  key as an environment variable so the loop keeps working from fresh sessions.
- **Backlinks.** `seo-reports/outreach-targets.json` is mostly pay-to-play (award mills,
  paid PR wires, paid directories) and the owner has no budget — skip those. Free routes:
  guest posts (futuretopper.in, edustoke.com, examcharcha.in), Google Business Profile,
  Bing Places, Startup India / MSME listing, genuine Quora/Reddit answers.

## Last run

- **2026-07-21** — Trend: impressions 92 → 195 → 262/week (best yet), avg position ~31.
  Shipped: NSEP/NSEC/IMO-specific FAQs on the olympiad comparison (biggest
  striking-distance cluster, ~10 queries at position 13–30), plus SERP title fitting
  across 250 templated pages (84 pages with impressions were shipping titles over 65
  chars; worst was 104). PR #199.
