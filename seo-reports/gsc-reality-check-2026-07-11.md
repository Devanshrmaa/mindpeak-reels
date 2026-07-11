# GSC Reality Check & Scaled-Content Closure — 2026-07-11

**Source:** GSC Search Analytics API (2026-03-01 → 2026-07-08), Sitemaps API, URL Inspection API
(18-URL sample vs the 2026-06-10 baseline), live production header crawl, and a code audit of the
blog resolver pipeline. Follow-up to `deep-audit-2026-06-10.md`.

**Context:** the stated goal for this session was "10,000 clicks/day". This report documents where
the site actually is, what was changed, and what the realistic path looks like.

---

## 1. Where traffic actually is

Weekly clicks/impressions from the Search Analytics API (domain property):

| Week of | Clicks | Impressions |
|---|---|---|
| 2026-03-08 | 787 | 58,242 |
| 2026-03-22 | 209 | 18,163 |
| 2026-03-29 | 42 | 894 |
| 2026-05-03 | 19 | 407 |
| 2026-06-07 | 0 | 71 |
| 2026-07-05 | 5 | 75 |

The site currently earns **~0.5 clicks/day and ~11 impressions/day**. Nearly all remaining clicks
are branded (`mindpeak institute`, position 1). The March 2026 spam update did not just demote
rankings — it suppressed the domain's visibility by ~99.9%, and that suppression **has not eased**
as of 2026-07-08 (impressions are still drifting down month-over-month).

## 2. This is a ranking suppression, not an indexing problem

URL Inspection (2026-07-11) on core pages:

| URL | State | Last crawl |
|---|---|---|
| `/` | Submitted and indexed | **2026-07-11 (today)** |
| `/jee-coaching`, `/neet-coaching` | Submitted and indexed | 2026-06-30 |
| `/best-jee-coaching-in-india` | Submitted and indexed | 2026-07-05 |
| `/isi-entrance-coaching` | Submitted and indexed | 2026-07-11 |
| `/blog/jee-2019-paper-analysis` | Submitted and indexed | 2026-07-10 |

Core pages are indexed and freshly crawled; they simply are not shown for non-branded queries.
Both sitemaps are submitted and being re-fetched by Google (removal-sitemap downloaded 2026-07-10).
The 410'd blog doorways are draining as designed (sampled Paris/Al-Khobar doorways now
"Not found", noindexed, or dropped). The May–June fixes (noindex-bug pages like
`/difference-between-dna-and-rna`, `/jee-mock-test-strategy`) are verified serving indexable
200s in production — Google has not yet recrawled most of them (last crawls predate the fix).

**Conclusion: the remaining blocker is Google's sitewide quality/spam classification of the
domain, not any indexing mechanics.**

## 3. Closed in this PR: the last big scaled-content surface

Code audit of the blog pipeline found **853 resolvable blog posts, of which only 212 are in the
curated sitemap**. The other **641** (chapter-level `how-to-prepare-*`, `*-tips-and-tricks`,
`*-mistakes-to-avoid`, `revision-in-N-days` templates, expired monthly auto posts, and 6 unlisted
static posts) were:

- served HTTP 200 with fully indexable metadata (no `robots` meta at all),
- linked from `/blog` (which listed the first 200 of all 853 posts),
- collectively earning **2 clicks / 442 impressions in 90 days** (i.e., nothing).

That is exactly the scaled-content pattern the March update targeted, still visible to Google
three months into recovery. Changes:

1. **`src/lib/indexableBlogSlugs.ts` (new):** a post is indexable iff it is in the sitemap
   (kept generators + live exam-event posts). Lazy-loaded like the rest of the resolver.
2. **`app/blog/[slug]/page.tsx`:** non-sitemap posts now emit `robots: noindex, follow`.
3. **`app/blog/page.tsx`:** `/blog` lists only the 212 curated posts, so crawlers no longer
   discover the templates through internal links.

Verified: 212 listed/indexable, 641 noindexed; spot checks confirm every sitemap blog URL
(incl. `how-to-prepare-physics-for-ap-eamcet-2027`, paper-analysis, eamcet guides) stays
indexable. 310/310 tests pass; `tsc --noEmit` clean.

## 4. Owner actions (repeatedly flagged, still pending — now urgent)

1. **Check Manual Actions + Security Issues in the GSC UI** (no API exists for this).
   If a manual action is listed, everything above is secondary to filing reconsideration.
   Pending since `gsc-api-audit-2026-06-10.md` §5.
2. **Rotate the GSC service-account key** (Cloud Console → IAM → Service Accounts →
   `mindpeakinstitute@sigma-bay-483209-q9` → Keys). The current key has now been shared in
   plaintext outside the vault; treat it as compromised. Grant the new key the same
   Search Console access and store it only in a secrets manager.
3. After this PR deploys, spot-check `curl -sI https://mindpeakinstitute.com/blog/how-to-prepare-kinematics-for-jee`
   → HTML `<meta name="robots" content="noindex, follow">` should be present, and `/blog`
   should show ~212 posts.

## 5. The honest path from 0.5 → 10,000 clicks/day

10k/day is a 20,000× multiple of current traffic. For calibration: pre-penalty peak was
~110/day. No on-page tweak produces that; the sequence is:

1. **Lift the suppression (now → next core/spam update).** All known scaled-content surfaces
   are now removed, noindexed, 301'd, or 410'd. Sites hit by spam updates are typically
   re-evaluated at subsequent updates; recovery is rarely gradual — watch for step changes in
   impressions after the next confirmed Google update.
2. **Recover to pre-penalty baseline (~100–800 clicks/day).** The 212 curated posts + 583
   sitemap URLs earned ~800 clicks/week in early March. That inventory can plausibly return
   once trust is restored — nothing structural was lost.
3. **Grow beyond baseline (toward 10k/day).** Requires assets the codebase cannot generate:
   genuinely differentiated content (real student results, teacher-authored solutions,
   original data/rank analyses), backlinks/brand search demand, and consistent publishing
   under real author entities. The `daily-content-playbook.md` loop covers the content half;
   distribution/brand is off-repo work.

Interim milestones worth tracking in GSC weekly: impressions/week (first signal of lift),
non-branded clicks/week, and count of "Crawled — currently not indexed" curated pages
returning to the index.

*Generated from live GSC API data + production crawls, 2026-07-11.*
