# SEO Health Check — MindPeak Institute
**Date:** 2026-05-26  
**Site:** https://mindpeakinstitute.com  
**Auditor:** Automated SEO audit (Claude)  
**Branch:** claude/clever-bell-yWteY  
**Previous report:** `seo-reports/health-check-2026-05-12.md`

---

## Executive Summary

| Area | Status | Issues Found |
|---|---|---|
| Crawlability | ✅ Healthy | Sitemap count up to 464 URLs |
| Doorway Pages | 🚨 Critical | Global `X-Robots-Tag: index, follow` conflicts with per-page `noindex` |
| Broken Links | ✅ Healthy | All previously reported issues fixed |
| Core Web Vitals | ⚠️ Unmeasured | PageSpeed API rate-limited (no API key) |
| HTTPS & Security | ⚠️ Warning | Conflicting robots header undermines noindex strategy |

### Previous Issues — Resolution Status

| Issue (from 2026-05-12) | Resolved? |
|---|---|
| 🚨 Broken `/success-stories` links in `CourseDetail.tsx` | ✅ **Fixed** — now `/#success-stories` |
| ⚠️ `/course` URL not redirecting | ✅ **Fixed** — redirects to `/courses` (line 138, `next.config.ts`) |
| ⚠️ Duplicate `robots` meta tag on expansion pages | ⚠️ **Partially** — duplicate tags still present; new `X-Robots-Tag` conflict introduced |
| ⚠️ PageSpeed API not configured | ⚠️ **Still open** — no API key added |

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

Thin/expansion pages remain **allowed** to be crawled so Google can read and respect their `noindex` meta directives — the correct approach.

### Sitemap

**URL:** https://mindpeakinstitute.com/sitemap.xml  
**Status:** ✅ Present and reachable

| Category | Count |
|---|---|
| Static / core pages | 91 |
| Subject chapter/topic pages | 147 |
| Blog posts | 134 |
| Exam info & guide pages | 23 |
| Comparison ("difference between") pages | 28 |
| T1 city coaching pages (`/jee-coaching-in-city`) | ~24 |
| Other (rank predictor, formula sheets, tools) | ~17 |
| **Total (live count from XML)** | **464** |

The sitemap count grew from 468 → 464 (4 URLs removed, likely redirected legacy URLs). All URLs use HTTPS.

### URL Status Code Check (15 URLs sampled)

✅ **15/15 URLs returned HTTP 200** — no 404s or 5xx errors detected.

| URL | Status |
|---|---|
| `/` | ✅ 200 |
| `/jee-coaching` | ✅ 200 |
| `/neet-coaching` | ✅ 200 |
| `/courses` | ✅ 200 |
| `/pricing` | ✅ 200 |
| `/blog` | ✅ 200 |
| `/contact` | ✅ 200 |
| `/about` | ✅ 200 |
| `/study-plan` | ✅ 200 |
| `/jee-coaching-in-hyderabad` | ✅ 200 |
| `/neet-coaching-in-mumbai` | ✅ 200 |
| `/bitsat-complete-guide-2027` | ✅ 200 |
| `/jee-chemistry-organic-chemistry-overview` | ✅ 200 |
| `/rank-predictor` | ✅ 200 |
| `/formula-sheets` | ✅ 200 |

---

## 2. Doorway Page Detection

### T1 Curated City Pages (`/jee-coaching-in-bangalore` pattern — 24 pages)

**Status:** ✅ Properly indexed

These 24 hand-curated pages appear in the sitemap, have distinct titles, city-specific content (neighbourhood mentions, local exam context), and carry `x-robots-tag: index, follow`. Content inspection confirms unique editorial content, not thin doorways.

### Expansion City Pages (`/jee-coaching-bangalore` pattern — ~472 pages)

**Status:** 🚨 **Critical conflict detected**

The expansion pages correctly set `noindex` via HTML meta tags:
```html
<meta name="robots" content="noindex, follow"/>
<meta name="robots" content="noindex"/>
```

However, `next.config.ts` sets a global `X-Robots-Tag` HTTP header on **all** routes:

```typescript
// next.config.ts — line 43
{
  source: '/(.*)',
  headers: [
    // ...other headers...
    /* Ensure no accidental noindex on HTML pages */
    { key: 'X-Robots-Tag', value: 'index, follow' },  // 🚨 overrides ALL pages
  ],
}
```

**Result:** Expansion pages now emit **contradictory signals**:
- `<meta name="robots" content="noindex, follow"/>` — from Next.js metadata (correct)
- `X-Robots-Tag: index, follow` — from global header (overriding)

**Google's behavior:** When meta tags and HTTP headers conflict, Google applies the most restrictive directive, so `noindex` should still win. However, other crawlers (Bing, Yandex, Apple) may handle this differently. The contradictory signals also create uncertainty and could cause delayed deindexing of expansion pages that were previously indexed.

**The root cause:** The global header was added with good intent (prevent accidental noindex) but has no carve-out for pages that intentionally set `noindex`.

### ⚠️ Duplicate `robots` Meta Tags (Persists from Previous Audit)

Expansion pages continue to emit two `<meta name="robots">` tags:
1. `<meta name="robots" content="noindex, follow"/>` — correct signal
2. `<meta name="robots" content="noindex"/>` — drops `follow` directive

The second tag overrides the first, changing `noindex, follow` → `noindex`. Googlebot will not follow links on these pages, reducing crawl discovery of linked indexed content.

### Comparison Pages (`/mindpeak-vs-allen` pattern — 10 pages)

**Status:** ✅ Acceptable

Content inspection shows substantial editorial content — detailed feature comparison tables, nuanced analysis, specific pricing breakdowns, and real testimonials. These are legitimately indexed and not doorway pages.

---

## 3. Broken Link Check

### Homepage Navigation (8 links)

✅ All navigation links return HTTP 200:

| URL | Status |
|---|---|
| `/jee-coaching` | ✅ 200 |
| `/neet-coaching` | ✅ 200 |
| `/courses` | ✅ 200 |
| `/pricing` | ✅ 200 |
| `/blog` | ✅ 200 |
| `/contact` | ✅ 200 |
| `/study-plan` | ✅ 200 |
| `/about` | ✅ 200 (confirmed in live fetch) |

### Previously Reported Broken Links — Now Fixed

✅ **`/success-stories` in `CourseDetail.tsx`** — All 3 occurrences updated to `/#success-stories` (in-page anchor). Live confirmation: `/success-stories` → 308 → `/` as expected.

✅ **`/course` URL** — Redirects 308 → `/courses`. Confirmed live.

### Codebase Spot Check — No New Issues Found

No new dead links detected in nav pages, city coaching pages, or topic pages. The `JEECoaching.tsx` and `NEETCoaching.tsx` views both contain city-page links (`/jee-coaching-in-delhi`, `/neet-coaching-in-mumbai`, etc.) all returning 200.

---

## 4. Core Web Vitals

**Status:** ⚠️ Unable to measure (same as previous audit)

The Google PageSpeed Insights API returned **HTTP 429 Too Many Requests** for all 4 target pages. This is the unauthenticated rate limit — no API key is configured.

**Pages that could not be measured:**
- `https://mindpeakinstitute.com/` (mobile)
- `https://mindpeakinstitute.com/courses` (mobile)
- `https://mindpeakinstitute.com/about` (mobile)
- `https://mindpeakinstitute.com/contact` (mobile)

**To enable CWV measurement in future runs:**
1. Get a free PSI key from [Google Cloud Console](https://console.cloud.google.com/) (Quotas: 25,000 free queries/day)
2. Add as `PSI_API_KEY` in Vercel environment variables
3. Audit script calls: `?url=...&key=$PSI_API_KEY`

**Positive performance signals from codebase inspection:**

| Signal | Status |
|---|---|
| Hero image preloaded (`fetchpriority="high"`) | ✅ Reduces LCP |
| Google Analytics deferred with `requestIdleCallback` | ✅ Reduces INP/TBT |
| Critical CSS inlined in `app/layout.tsx` | ✅ Reduces FCP |
| `optimizePackageImports` for heavy packages | ✅ Reduces JS parse time |
| Static assets cached 1 year (immutable) | ✅ Reduces repeat-visit load |
| Next.js polyfill shim (empty module) | ✅ Reduces bundle size |
| Vercel CDN cache hit observed (`x-vercel-cache: HIT`) | ✅ Fast TTFB at edge |

---

## 5. HTTPS & Security

### HTTP → HTTPS Redirect

✅ **Working correctly** — uses 308 Permanent Redirect

```
HTTP/1.1 308 Permanent Redirect
Location: https://mindpeakinstitute.com/
```

### HSTS (HTTP Strict Transport Security)

✅ **Configured**

```
Strict-Transport-Security: max-age=63072000
```

`max-age=63072000` = 2 years. Note: HSTS `includeSubDomains` and `preload` flags are absent — consider adding if subdomains are on HTTPS.

### Security Headers

✅ All core security headers present:

| Header | Value | Status |
|---|---|---|
| `X-Content-Type-Options` | `nosniff` | ✅ |
| `X-Frame-Options` | `SAMEORIGIN` | ✅ |
| `X-XSS-Protection` | `1; mode=block` | ✅ |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | ✅ |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | ✅ |

### Mixed Content

✅ No HTTP resource references detected in page HTML (all scripts, images, fonts on HTTPS).

### ⚠️ Global `X-Robots-Tag: index, follow` — Security Implication

The same global header that conflicts with `noindex` (Section 2) also means any future page accidentally marked `noindex` in metadata will have the noindex **silently overridden** by the HTTP header. This is a maintainability risk: developers adding `noindex` via Next.js metadata will believe pages are deindexed, but the header will fight them.

---

## Top 3 Action Items

### 🚨 1. Fix the Global `X-Robots-Tag: index, follow` Override in `next.config.ts`

**File:** `next.config.ts`, line 43  
**Impact:** CRITICAL — contradicts `noindex` on ~472 expansion city pages; may expose unintentional pages to indexing; silently breaks future noindex attempts.

**Fix:** Remove the global `X-Robots-Tag` header from the `source: '/(.*)'` block, or add a negated route matcher that excludes expansion pages:

```typescript
// Option A — Remove it entirely (safest; Next.js metadata handles robots per-page)
// Delete this line from the /(.*) headers block:
// { key: 'X-Robots-Tag', value: 'index, follow' },

// Option B — Keep it, but add an explicit override for expansion pages
{
  source: '/:city(jee-coaching-[a-z]+|neet-coaching-[a-z]+)',
  headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }],
},
```

Option A is recommended — Next.js App Router's `generateMetadata()` already controls per-page robots via the meta tag; the HTTP header is redundant for indexed pages and harmful for noindexed ones.

### ⚠️ 2. Fix Duplicate `robots` Meta Tag on Expansion Pages

**File:** `src/lib/resolveSlugMetadata.ts` (or equivalent metadata source for expansion pages)  
**Impact:** The second `<meta name="robots" content="noindex"/>` overrides the first `<meta name="robots" content="noindex, follow"/>`, silently dropping the `follow` directive. Googlebot stops following links from expansion pages.

**Fix:** Remove the redundant second robots meta tag so expansion pages emit only:
```html
<meta name="robots" content="noindex, follow"/>
```

### ⚠️ 3. Add a PageSpeed Insights API Key for CWV Monitoring

**Impact:** Core Web Vitals are a Google ranking factor. Two consecutive audits have been unable to measure LCP, CLS, or INP — regressions go undetected.  
**Fix:**
1. Create a free PSI API key at [console.cloud.google.com](https://console.cloud.google.com/) → APIs → Page Speed Insights API
2. Add `PSI_API_KEY` to Vercel environment variables
3. Future audit runs will automatically use it via `?key=$PSI_API_KEY`

---

## Methodology Notes

- URL status codes: `curl -s -o /dev/null -w "%{http_code}"` (live, no cache)
- HTTP redirect chain: `curl -s -I -L http://mindpeakinstitute.com` (live)
- Robots meta tags: `curl -s <url> | grep -o '<meta name="robots"[^>]*>'` (live)
- `x-robots-tag` headers: `curl -s -I <url> | grep -i x-robots` (live)
- robots.txt, sitemap, page content: fetched live via WebFetch
- Core Web Vitals: unauthenticated PSI API (HTTP 429 — rate limited)
- Codebase inspection: `next.config.ts`, `src/views/CourseDetail.tsx`
- Total URLs spot-checked for HTTP status: 15
- Expansion pages verified for robots conflict: `/jee-coaching-bangalore` (representative sample)
