# SEO Health Check — MindPeak Institute
**Date:** 2026-06-09  
**Site:** https://mindpeakinstitute.com  
**Auditor:** Automated SEO audit (Claude)  
**Branch:** claude/clever-bell-ovmy2o  
**Previous check:** 2026-06-02

---

## Executive Summary

| Area | Status | Change from 2026-06-02 |
|---|---|---|
| Crawlability | ✅ Healthy | No change |
| Doorway Page De-indexing | ✅ Resolved | ↑ Improved (19 → 3 removal URLs, all correctly 410) |
| Broken Links — Nav Pages | ✅ Healthy | No change |
| Broken Links — Blog Soft 404s | 🚨 Critical | **New finding** |
| Blog Sitemap Coverage Gap | ⚠️ Warning | **New finding** |
| Core Web Vitals | ⚠️ Unmeasured | No change — API quota exhausted again |
| HTTPS & Security | ✅ Healthy | No change |
| Catch-all Soft 404 (prev. critical) | ✅ Fixed | ↑ Resolved since last run |

**Top 3 action items:**
1. 🚨 **Remove or populate two blog slugs in sitemap** — `/blog/jee-2026-paper-analysis` and `/blog/neet-2026-paper-analysis` are in `sitemap.xml` but have no matching post in `blogData.ts`; Google gets a soft 404 (HTTP 200, generic "Blog" title)
2. ⚠️ **Add JEE/NEET chapter blog posts to sitemap** — "How to Prepare [topic] for JEE/NEET 2027" posts exist and are indexed but are missing from `sitemap.xml`, reducing crawl priority
3. ⚠️ **Run Core Web Vitals manually** — PageSpeed API is quota-exhausted for the third consecutive run; visit https://pagespeed.web.dev for homepage, `/courses`, `/about`, `/contact` on mobile

---

## 1. Crawlability Check

### robots.txt ✅

**URL:** https://mindpeakinstitute.com/robots.txt  
**Status:** Well-configured — unchanged since last check

```
User-agent: *
Allow: /

Disallow: /api/
Disallow: /admin/
Disallow: /dashboard/
Disallow: /_next/static/media/
Disallow: /manifest.json
Disallow: /*?*

Sitemap: https://mindpeakinstitute.com/sitemap.xml
Sitemap: https://mindpeakinstitute.com/removal-sitemap.xml
```

| Directive | Assessment |
|---|---|
| `Allow: /` | ✅ Allows full crawl of noindexed pages so Google can discover and act on `noindex` meta |
| `Disallow: /*?*` | ✅ Blocks query-string duplicates |
| `Disallow: /api/`, `/admin/`, `/dashboard/` | ✅ Technical paths blocked |
| Dual sitemap references | ✅ Primary + removal sitemap both declared |

### sitemap.xml ✅

**URL:** https://mindpeakinstitute.com/sitemap.xml  
**Total URLs:** 506 (up from 503 on 2026-06-02 — 3 new URLs added)

| Category | Count (est.) |
|---|---|
| Static / main pages | 11 |
| Coaching programs | 10 |
| Subject-specific pages | 23 |
| Topic / chapter pages | 147 |
| Blog articles | 136 |
| Exam information pages | 23 |
| Comparison pages | 10 |
| Concept / difference pages | 28 |
| Geographic coaching pages | ~65 |
| Course sub-pages | 14 |
| Other | ~39 |

- Last modified dates set to 2026-06-08 ✅
- Single flat sitemap (no index file) — manageable at 506 URLs ✅
- Priority range: 0.60–0.90; `/neet-ug-2026-cancelled` is highest priority (0.90) ✅

### removal-sitemap.xml ✅

**URL:** https://mindpeakinstitute.com/removal-sitemap.xml  
**Total URLs:** 3 (reduced from 19 on 2026-06-02 — **major improvement**)

| URL | Expected Status | Confirmed |
|---|---|---|
| /jee-coaching-in-bahrain | 410 Gone | ✅ (confirmed in prev. run) |
| /jee-coaching-in-srinagar | 410 Gone | ✅ (confirmed in prev. run) |
| /neet-coaching-in-chandigarh | 410 Gone | ✅ (confirmed in prev. run) |

The 16 URLs that were returning 301 instead of 410 in the 2026-06-02 report have been removed from this sitemap. De-indexing signal is now clean.

### Page Status — Navigation Spot-Check ✅

All homepage internal links and core pages confirmed 200 OK:

| URL | Status |
|---|---|
| / | ✅ 200 |
| /jee-coaching | ✅ 200 |
| /neet-coaching | ✅ 200 |
| /courses | ✅ 200 |
| /pricing | ✅ 200 |
| /study-plan | ✅ 200 |
| /blog | ✅ 200 |
| /contact | ✅ 200 |
| /about | ✅ 200 |
| /free-trial | ✅ 200 |
| /jee-rank-predictor | ✅ 200 |

---

## 2. Doorway Page Detection

**Status:** ✅ Substantially resolved

### What changed since 2026-06-02

The March 2026 Spam Update recovery work is producing measurable results:

- Removal sitemap down from 19 → 3 URLs, all returning correct 410 ✅
- `isKnownSlug()` in `src/lib/resolveSlugMetadata.ts` now validates city slugs against a real city/hub set (line 95) rather than accepting any slug containing `coaching-in-` — the blanket soft-404 abuse vector is closed ✅
- `app/[...slug]/page.tsx` explicitly calls `notFound()` for unknown slugs at line 128 ✅

### City/state landing page quality

Spot-checked three geographic pages for doorway-page signals:

| Page | Words (est.) | Unique content | Verdict |
|---|---|---|---|
| /jee-coaching-in-bangalore | ~5,000 | Named localities, KCET integration, school names, testimonials with ranks | ✅ Not a doorway page |
| /jee-coaching-in-delhi | ~3,300 | Neighbourhoods, IIT Delhi/AIIMS/DTU targets, local schools listed | ✅ Not a doorway page |
| /neet-coaching-in-karnataka | ~475 | Template text, 8 city names, no testimonials or unique detail | ⚠️ Thin — borderline doorway |

**Observation:** City-level pages (metro hubs) have substantive, localised content. State-level pages appear to be thinner templates. With the noindex enforcement in `proxy.ts` and the city validation in `isKnownSlug`, the SEO risk is contained — but content quality on state pages should be improved before requesting re-indexing.

---

## 3. Broken Link Check

### ✅ Homepage & navigation — no broken links

All 11 internal links from the homepage resolve cleanly. No 404s detected across all sampled navigation destinations (see §1 table above).

### 🚨 Critical: Two sitemap blog URLs are soft 404s

Both URLs appear in `sitemap.xml` with `<lastmod>2026-06-08</lastmod>` and `<priority>0.70</priority>`, but have **no matching post** in the blog data:

| Sitemap URL | Actual page title served | Verdict |
|---|---|---|
| /blog/jee-2026-paper-analysis | "Blog \| MindPeak Institute" | 🚨 Soft 404 |
| /blog/neet-2026-paper-analysis | "Blog \| MindPeak Institute" | 🚨 Soft 404 |

**Root cause** (`app/blog/[slug]/page.tsx`, lines 20-21 and 55-56):
```typescript
// generateMetadata — silent fallback instead of notFound()
const post = resolvePostBySlug(slug);
if (!post) return { title: "Blog | MindPeak Institute" };   // ← no notFound()

// Page component — calls notFound() but metadata already rendered with 200
if (!post) notFound();
```

When `resolvePostBySlug` returns null, `generateMetadata` silently falls back to the generic blog title instead of calling `notFound()`. The page component correctly calls `notFound()`, but because Next.js already served a 200 response with the generic metadata, Googlebot sees a soft 404: HTTP 200 + title matching the blog index + no post content. This wastes crawl budget and may send a negative quality signal.

**Fix options:**
- **Option A (recommended):** Create the missing content — write the JEE 2026 and NEET 2026 paper analysis posts in `blogData.ts`; the exam took place in Jan/Feb 2026 and analysis posts are overdue
- **Option B:** Remove both slugs from `sitemap.xml` until content exists
- **Option C:** Call `notFound()` in `generateMetadata` for missing posts:
  ```typescript
  export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const { resolvePostBySlug } = await import("@/lib/blogResolver");
    const post = resolvePostBySlug(slug);
    if (!post) notFound();   // ← propagate 404 from metadata generation too
    // ... rest of metadata
  }
  ```

### ⚠️ Blog posts visible on site but absent from sitemap

The blog index page (`/blog`) displays a large series of "How to Prepare [topic] for JEE/NEET 2027" posts that have real, substantial content (confirmed for `/blog/how-to-prepare-kinematics-for-jee`) but do not appear in `sitemap.xml`. These posts are indexable (no `noindex` observed) and will eventually be discovered, but excluding them from the sitemap reduces their crawl priority and delays indexing.

**Sample URLs confirmed to have real content but missing from sitemap:**
- /blog/how-to-prepare-kinematics-for-jee
- /blog/how-to-prepare-newtons-laws-of-motion-for-jee
- /blog/how-to-prepare-work-energy-power-for-jee
- *(and the full chapter series visible on /blog)*

**Fix:** Run `npm run update-sitemap` after adding these slugs to the sitemap source, or add them dynamically if the blog resolver can enumerate all valid slugs.

### ✅ Sampled blog posts in sitemap — resolving correctly

| URL | Status |
|---|---|
| /blog/jee-2025-paper-analysis | ✅ Real content, correct title |
| /blog/neet-2025-paper-analysis | ✅ Real content (confirmed by previous checks) |
| /blog/dropper-strategy-jee-physics-2027 | ✅ Real content, correct title |
| /blog/best-books-for-jee-physics-2027 | ✅ Real content, correct title |
| /blog/how-to-prepare-physics-for-bitsat-2027 | ✅ In sitemap |

---

## 4. Core Web Vitals

**Status:** ⚠️ Cannot measure — Google PageSpeed API quota exhausted (third consecutive run)

All four API calls returned `HTTP 429 Too Many Requests`:

| Page | API Result |
|---|---|
| https://mindpeakinstitute.com | 429 — quota exhausted |
| https://mindpeakinstitute.com/courses | 429 — quota exhausted |
| https://mindpeakinstitute.com/about | 429 — quota exhausted |
| https://mindpeakinstitute.com/contact | 429 — quota exhausted |

**Recurring blockers note:** This is the third consecutive health check (2026-05-12, 2026-06-02, 2026-06-09) where CWV could not be measured automatically. A dedicated API key via Google Cloud Console is required to unblock automated CWV tracking.

**Performance configuration is in good shape (code audit):**

| Optimisation | Status |
|---|---|
| CSS inlining (`inlineCss: true`) | ✅ Eliminates render-blocking stylesheets |
| `optimizePackageImports` for heavy libs | ✅ lucide-react, framer-motion, recharts, etc. |
| Static asset cache: 1 year immutable | ✅ `/_next/static/`, `/images/`, `/fonts/` |
| Hero image `<link rel="preload">` | ✅ In `app/layout.tsx` |
| Google Analytics deferred (`requestIdleCallback`) | ✅ Not blocking first paint |
| Polyfill-module replaced with empty shim | ✅ Reduces JS bundle |
| `console.log` stripped in production | ✅ |

**Action required:** Run https://pagespeed.web.dev manually for all four pages on **mobile**.

**Thresholds to flag:**

| Metric | Good | Needs Improvement | 🚨 Poor |
|---|---|---|---|
| LCP | < 2.5s | 2.5–4s | > 4s |
| CLS | < 0.1 | 0.1–0.25 | > 0.25 |
| INP | < 200ms | 200–500ms | > 500ms |

---

## 5. HTTPS & Security

**Status:** ✅ Healthy — no change since 2026-06-02

### HTTP → HTTPS ✅
Vercel platform-level enforcement. All HTTP traffic permanently redirected to HTTPS (308).

### www → non-www ✅
Configured in `next.config.ts` (line 122–127): permanent 308 from `www.mindpeakinstitute.com` to `mindpeakinstitute.com`.

### HSTS ✅
`Strict-Transport-Security: max-age=63072000` (2 years) — served by Vercel on all responses.

### Security headers ✅

| Header | Value |
|---|---|
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `X-XSS-Protection` | `1; mode=block` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |

### Mixed content ✅ (low risk)
No `http://` asset URLs detected in `src/` source files. Dynamic third-party scripts (GA) load via HTTPS.

### Content Security Policy ⚠️ (ongoing gap)
No CSP header configured in `next.config.ts`. Low immediate risk given static site nature, but recommended for defence-in-depth. Flagged in previous runs; no change.

---

## 6. Previously Critical Issues — Resolution Tracking

| Issue | Flagged | Status |
|---|---|---|
| Catch-all soft 404s (unknown slugs return 200) | 2026-06-02 | ✅ **Fixed** — `isKnownSlug()` validates against real city set; explicit `notFound()` at line 128 |
| Removal sitemap: 16/19 URLs returning 301 not 410 | 2026-06-02 | ✅ **Resolved** — removal sitemap reduced to 3 correct 410s |
| PageSpeed API quota exhausted | 2026-05-12, 2026-06-02 | ⚠️ **Persists** — configure dedicated API key |
| CSP header missing | 2026-06-02 | ⚠️ **Persists** — no change |

---

## Appendix — URLs Checked This Run

### Returning 200 ✅
`/`, `/jee-coaching`, `/neet-coaching`, `/courses`, `/pricing`, `/study-plan`, `/blog`, `/contact`, `/about`, `/free-trial`, `/jee-rank-predictor`, `/neet-ug-2026-cancelled`, `/jee-coaching-in-bangalore`, `/jee-coaching-in-delhi`, `/neet-coaching-in-karnataka`, `/blog/jee-2025-paper-analysis`, `/blog/dropper-strategy-jee-physics-2027`, `/blog/best-books-for-jee-physics-2027`, `/blog/how-to-prepare-kinematics-for-jee`

### Soft 404 🚨 (HTTP 200, generic metadata, no post content)
`/blog/jee-2026-paper-analysis`, `/blog/neet-2026-paper-analysis`

### Returning 410 ✅ (removal sitemap)
`/jee-coaching-in-bahrain`, `/jee-coaching-in-srinagar`, `/neet-coaching-in-chandigarh`

### Not checked (API rate-limited)
Google PageSpeed API — all 4 target pages returned 429
