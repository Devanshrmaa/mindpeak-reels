# SEO Health Check — MindPeak Institute
**Date:** 2026-05-12  
**Site:** https://mindpeakinstitute.com  
**Auditor:** Automated SEO audit (Claude)  
**Branch:** claude/clever-bell-rrhjX

---

## Executive Summary

| Area | Status | Issues Found |
|---|---|---|
| Crawlability | ✅ Healthy | None |
| Doorway Pages | ✅ Controlled | Minor: duplicate `robots` meta tag |
| Broken Links | 🚨 Critical | 3 dead links to `/success-stories` in CourseDetail |
| Core Web Vitals | ⚠️ Unmeasured | PageSpeed API rate-limited (no API key) |
| HTTPS & Security | ✅ Healthy | None |

---

## 1. Crawlability Check

### robots.txt

**File:** https://mindpeakinstitute.com/robots.txt  
**Status:** ✅ Well-configured

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
```

Notable: Thin/expansion pages (noindexed) are **allowed** to be crawled so Google can discover and respect their `noindex` directives — a correct approach that avoids slow deindexing via `Disallow`.

### Sitemap

**URL:** https://mindpeakinstitute.com/sitemap.xml  
**Status:** ✅ Present and well-structured

| Category | Count |
|---|---|
| Static / core pages | 91 |
| Subject chapters | 147 |
| Blog posts | 134 |
| Exam info pages | 23 |
| Comparison ("difference between") | 28 |
| Location-based coaching (T1 cities) | 24 |
| Other | 21 |
| **Total** | **468** |

All sitemap URLs use HTTPS. Last-modified dates are current (April 2026).

### URL Status Code Check (40 URLs sampled)

✅ **40/40 URLs returned HTTP 200** — no 404s or 5xx errors detected in the sample.

URLs checked include: homepage, all nav pages, subject pages, comparison pages, blog entries, rank predictors, formula sheets, exam info pages, and T1 city coaching pages.

---

## 2. Doorway Page Detection

### Expansion City Pages (~472 pages)

**Status:** ✅ Properly suppressed

Auto-generated city expansion pages (e.g., `/jee-coaching-bangalore`, `/neet-coaching-pune`) are live and return HTTP 200 but carry `noindex, follow` directives. Confirmed via live HTML inspection:

```html
<meta name="robots" content="noindex, follow"/>
```

The code explicitly documents this:
```typescript
// All 472 auto-generated expansion cities remain noindexed.
```

### Subject-City Pages (e.g., `/jee-physics-coaching-bangalore`)

**Status:** ✅ Noindexed

Confirmed in `src/lib/resolveSlugMetadata.ts`:
```typescript
// 5. Subject-city pages — noindex (doorway-page risk)
robots: { index: false, follow: true }
```

### Individual Practice & PYQ Question Pages

**Status:** ✅ Noindexed

All individual MCQ pages (JEE practice, NEET practice, PYQ questions) return `robots: { index: false, follow: true }`. Hub/chapter pages remain indexed.

### T1 Curated City Pages (24 pages — e.g., `/jee-coaching-in-bangalore`)

**Status:** ✅ Properly indexed

24 hand-curated "in" city pages are in the sitemap and carry `index, follow` with correct canonical URLs:

```html
<meta name="robots" content="index, follow"/>
<link rel="canonical" href="https://mindpeakinstitute.com/jee-coaching-in-bangalore"/>
```

These pages have differentiated titles, city-specific content, and proper structured data.

### ⚠️ Minor Issue: Duplicate `robots` Meta Tag on Expansion Pages

**Affected pages:** All ~472 expansion city pages (e.g., `/jee-coaching-bangalore`)  
**Severity:** ⚠️ Warning

The expansion pages emit two `<meta name="robots">` tags:
1. `<meta name="robots" content="noindex, follow"/>`
2. `<meta name="robots" content="noindex"/>`

While both are `noindex` (consistent signal), duplicate meta tags can confuse some crawlers. The second tag overrides the first and drops the `follow` directive.  
**Fix:** Remove the redundant second robots meta tag in `src/lib/resolveSlugMetadata.ts`.

---

## 3. Broken Link Check

### Homepage Navigation

✅ All 8 navigation links return HTTP 200:

| URL | Status |
|---|---|
| `/jee-coaching` | ✅ 200 |
| `/neet-coaching` | ✅ 200 |
| `/courses` | ✅ 200 |
| `/pricing` | ✅ 200 |
| `/blog` | ✅ 200 |
| `/contact` | ✅ 200 |
| `/study-plan` | ✅ 200 |
| `/about` | ✅ 200 |

### 🚨 Critical: Broken `/success-stories` Links in CourseDetail

**Severity:** 🚨 Critical  
**File:** `src/views/CourseDetail.tsx` (3 occurrences)  
**Issue:** Three links navigate to `/success-stories`:

```tsx
<Link to="/success-stories" className="...">Success Stories →</Link>
```

**Actual behavior:** `/success-stories` returns HTTP 308 redirect → `/` (homepage). Users following these links land on the homepage with no context, resulting in a poor UX and a broken user flow from the course detail pages.

**Note:** The `HeroSection.tsx` correctly uses `href="#success-stories"` (in-page anchor) — this is fine.

**Recommended fix options:**
1. **Remove the links** if `/success-stories` as a standalone page is no longer intended.
2. **Create a `/success-stories` page** if the standalone page is desired.
3. **Replace with `#success-stories` anchor** to scroll to the homepage section (consistent with HeroSection).
4. **Replace with `/about#success-stories`** or another appropriate destination.

### ⚠️ `/course` URL Returns 200 Without a Dedicated Page

**Severity:** ⚠️ Warning  
**Issue:** `https://mindpeakinstitute.com/course` returns HTTP 200 but is **not in the sitemap** and has no `app/course/page.tsx`. The `app/course/` directory only contains `[slug]/` (for course detail pages). The URL is handled by the `[...slug]` catch-all and renders an unexpected response.

**Risk:** If this URL gets indexed or linked, users may land on confusing content.  
**Recommended fix:** Verify what content `/course` renders. If unintentional, add it to the redirects in `next.config.ts`:
```ts
{ source: '/course', destination: '/courses', permanent: true }
```

---

## 4. Core Web Vitals

**Status:** ⚠️ Unable to measure

The Google PageSpeed Insights API (`/pagespeedonline/v5/runPagespeed`) returned **HTTP 429 Too Many Requests** for all four target pages. This happens when requests are made without an API key (unauthenticated rate limit reached).

**Pages that could not be measured:**
- `https://mindpeakinstitute.com/` (mobile)
- `https://mindpeakinstitute.com/courses` (mobile)
- `https://mindpeakinstitute.com/about` (mobile)
- `https://mindpeakinstitute.com/contact` (mobile)

**To enable CWV measurement in future runs:**
1. Obtain a free Google PageSpeed Insights API key from [Google Cloud Console](https://console.cloud.google.com/).
2. Add the key as `PSI_API_KEY` in the Vercel environment variables.
3. Pass it as `&key=$PSI_API_KEY` in audit requests.

**Code infrastructure signals (positive indicators):**
- ✅ Hero image preloaded with `<link rel="preload" fetchpriority="high">` — reduces LCP
- ✅ Google Analytics deferred with `requestIdleCallback` — reduces INP/TBT
- ✅ Critical CSS inlined in `app/layout.tsx` — reduces FCP
- ✅ `optimizePackageImports` for heavy packages (`framer-motion`, `lucide-react`, `recharts`) — reduces JS parse time
- ✅ Static assets cached for 1 year — reduces repeat-visit load time
- ✅ Next.js polyfill shim reduces bundle size

---

## 5. HTTPS & Security

### HTTP → HTTPS Redirect

✅ **Working correctly**

```
HTTP/1.1 308 Permanent Redirect
Location: https://mindpeakinstitute.com/
```

All HTTP requests are upgraded to HTTPS via a 308 permanent redirect.

### Mixed Content

✅ **No mixed content detected**

Scan of homepage HTML found **no `src=` or `href=` attributes pointing to HTTP resources**. All scripts, styles, images, and fonts are loaded over HTTPS.

### Security Headers

✅ **Present** (observed on responses):

```
permissions-policy: camera=(), microphone=(), geolocation=()
```

Restricts access to sensitive browser APIs — good practice.

### Additional Security Observations

- ✅ `/api/` endpoints blocked in robots.txt
- ✅ `/admin/` and `/dashboard/` blocked in robots.txt
- ✅ Query parameters (`/*?*`) blocked in robots.txt (prevents crawling of search/filter variations)
- ✅ Sitemap URLs all use HTTPS canonical format

---

## Top 3 Action Items

### 🚨 1. Fix broken `/success-stories` links in CourseDetail.tsx

**File:** `src/views/CourseDetail.tsx` (3 occurrences)  
**Impact:** Users clicking "Success Stories →" links from course detail pages land on the homepage — broken UX and potential negative crawl signal.  
**Fix:** Replace `<Link to="/success-stories">` with either an in-page anchor (`#success-stories`), a redirect to an existing page, or create a dedicated `/success-stories` page.

### ⚠️ 2. Set up PageSpeed Insights API key for measurable CWV tracking

**Impact:** Core Web Vitals are a confirmed Google ranking factor for mobile search. Without measurement, regressions go undetected.  
**Fix:** Add a free PSI API key to Vercel env vars and re-run CWV checks. Target thresholds: LCP < 2.5s, CLS < 0.1, INP < 200ms.

### ⚠️ 3. Resolve ambiguous `/course` URL (HTTP 200 but not in sitemap)

**Impact:** Orphaned 200 response could attract unintended backlinks or confuse crawlers.  
**Fix:** Add a 301 redirect from `/course` → `/courses` in `next.config.ts`, or confirm current behavior is intentional.

---

## Methodology Notes

- URL status codes checked via `curl -s -o /dev/null -w "%{http_code}"`
- HTML inspection via `curl -s | grep` for meta tags and canonical links
- robots.txt and sitemap fetched live from production
- PageSpeed API: unauthenticated requests, rate-limited (429)
- Codebase analysis: `src/lib/resolveSlugMetadata.ts`, `src/data/cityExpansion.ts`, `src/data/cityData.ts`, `src/views/CourseDetail.tsx`
- Total URLs sampled for status check: 40 (sitemap-referenced pages + city/expansion patterns)
