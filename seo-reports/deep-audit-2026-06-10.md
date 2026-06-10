# Deep Audit — Index Inventory & Systemic Fixes — 2026-06-10

**Source:** GSC URL Inspection API (all 507 sitemap URLs inspected), live-signal crawl of all
doorway URLs with post-crash impressions, and a code audit of every route/metadata path.
Follow-up to `gsc-api-audit-2026-06-10.md` (same day, same PR).

---

## 1. Definitive index state of all 507 sitemap URLs

First-ever full inventory (raw per-URL data: `index-state-2026-06-10.csv`):

| Coverage state | Count | % |
|---|---|---|
| ✅ Submitted and indexed | **247** | 49% |
| ⚠️ Crawled — currently not indexed | 176 | 35% |
| 🔴 **Excluded by 'noindex' tag** | **56** | 11% |
| ⏳ Discovered — currently not indexed | 27 | 5% |
| ❓ URL unknown to Google | 1 | <1% |

**The site is far more indexed than the weekly reports believed** (247 pages vs the handful
confirmed by `site:` sampling). The "Crawled — not indexed" bucket (mostly chapter pages and
blog guides) is the penalty quality-gate easing over time — no code defect, content keeps its
chances on recrawl.

## 2. CRITICAL BUG FIXED: 56 sitemap pages served `noindex` in production

URL Inspection showed 50+ pages with **June 2026 crawl dates** excluded by noindex — these were
serving `noindex, follow` live while listed in the sitemap as priority 0.6–0.75 content:

- All 21 `difference-between-*` pages (DNA/RNA, speed/velocity, JEE/NEET…)
- All ~24 exam-info pages (`jee-main-syllabus-2027`, `neet-cutoff-2027`, eligibility, dates…)
- All 6 `*-important-questions` hubs
- Counselling pages (`top-medical-colleges-india`, `jee-main-rank-vs-college`)

**Root cause:** `resolveSlugMetadata()` had no metadata branch for these families — they passed
`isKnownSlug()` (page renders) but fell through to the *"Fallback — noindex to prevent any
unknown slug from being indexed"* branch. The site was noindexing ~11% of its own curated
sitemap.

**Fix:** explicit indexable metadata branches (real titles/descriptions from their data files)
for exam-info, difference-between, counselling, and important-questions pages.

## 3. FIXED: two real pages were 404 in code (alive only as stale prerenders)

`/jee-mock-test-strategy` and `/neet-mock-test-strategy` — sitemap-listed, internally linked
from JEECoaching/SubjectPage/RelatedPages, fully built in `SubjectPage.tsx` — were **404 under
current code** (`isKnownSlug` didn't include them; production served a stale noindexed
prerender). Restored to the slug list + given curated metadata.

## 4. FIXED: sitemap advertised 404s for paper-analysis posts

`generatePaperAnalysisPosts()` hardcodes years 2016–2025, but the sitemap slug lists derived
years from `CURRENT_EXAM_YEAR` (now 2027) → sitemap listed `/blog/jee-2026-paper-analysis`
(**404, no content**) and omitted the real `/blog/jee-2016-paper-analysis`. All three year
arrays now share `PAPER_ANALYSIS_YEARS`. This class of bug recurs on every exam-year rollover —
worth remembering.

## 5. FIXED: topic/notes/study-guide consolidation was not enforced in production

The March-recovery plan 301s ~1,184 topic sub-pages (`/jee-physics-kinematics/motion-in-a-
straight-line`), `/notes` pages, and ~800 `how-to-study-*` guides into their parent chapters.
The redirects exist in `app/[...slug]/page.tsx` — **but production serves prerendered HTTP 200
topic pages with `index, follow`** (verified on cache MISS, so not stale-cache; prerender/ISR
behavior on Vercel bypasses the in-page redirect). That's 1,000+ thin template pages live and
indexable — the exact scaled-content pattern behind the penalty.

**Fix:** the 301s now also run in `proxy.ts` (middleware executes before the prerender cache,
unconditionally). Verified locally: topic → 301 chapter, notes → 301 chapter, how-to-study →
301 chapter, chapter itself → 200.

## 6. FIXED: legacy sitemap farm deleted

29 static sitemap files under `public/sitemaps/**` + `public/sitemap-topics.xml` (1,219
redirecting topic URLs) + `public/final.xml` (4,157 URLs incl. 40 doorways) were still publicly
served, and `npm run build` re-stamped every `<lastmod>` with *today* on each deploy — telling
crawlers thousands of dead/redirecting URLs were "just modified". All deleted;
`generate-topic-sitemap.mjs` removed from the build pipeline; CLAUDE.md updated. The only live
sitemaps are now the dynamic `/sitemap.xml` (507 curated URLs) and `/removal-sitemap.xml`
(661 doorways pending de-indexing).

## 7. Audited clean — no action needed

- **All 289 non-blog doorway URLs** with post-crash impressions: 253 × 301, 10 × 410, 26 × 200
  (all either indexable hubs/T1 cities or correct `noindex, follow` city pages). Fully consistent.
- **Internal links:** no live page links to a 410'd URL (1 link to a noindexed city page — harmless).
- **Auto-generated monthly posts** (`autoBlogs.ts`): only the current month's 3 posts resolve;
  expired months now 404 correctly (post-fix) and have zero GSC footprint. Design wart, not a
  recovery blocker.
- **Canonical conflicts:** zero URLs where Google chose a different canonical than declared.
- **examEventBlogs:** time-gated slugs consistent between sitemap and resolver.

## 8. Still open (owner / next session)

1. **GSC UI actions** from `gsc-api-audit-2026-06-10.md` §5 (Request Indexing for T1 pages,
   Manual Actions check, key rotation) — unchanged, still pending.
2. After this PR deploys: **re-submit both sitemaps** in GSC (or via API) so Google re-reads
   the corrected URL set and the 661-URL removal sitemap.
3. Watch Page indexing report: "Excluded by noindex" should fall from ~56 toward 0 for sitemap
   URLs; "Not found (404)/(410)" should climb as the 658 blog doorways drain.
4. The 176 "Crawled — not indexed" pages need no code change — re-evaluate content quality for
   any still excluded in 4–6 weeks (especially chapter pages, the biggest cluster).

*Generated from live GSC API data + production crawls, 2026-06-10.*
