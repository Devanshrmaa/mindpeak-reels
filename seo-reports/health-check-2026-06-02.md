# SEO Health Check — MindPeak Institute
**Date:** 2026-06-02  
**Site:** https://mindpeakinstitute.com  
**Auditor:** Automated SEO audit (Claude)  
**Branch:** claude/clever-bell-NRPwQ

---

## Executive Summary

| Area | Status | Issues Found |
|---|---|---|
| Crawlability | ✅ Healthy | None |
| Doorway Page De-indexing | ⚠️ Warning | 16/19 removal-sitemap URLs return 301 not 410 |
| Broken Links | ✅ Healthy | No 404s found |
| Core Web Vitals | ⚠️ Unmeasured | PageSpeed API quota exhausted — manual check required |
| HTTPS & Security | ✅ Healthy | 308 redirect, HSTS, security headers present |
| Soft 404s | 🚨 Critical | Unknown slugs return HTTP 200 instead of 404 |

**Top 3 action items:**
1. 🚨 Fix unknown-slug soft 404s — every URL returns 200 regardless of whether it exists
2. ⚠️ Reconcile removal-sitemap.xml: 16 of 19 listed URLs return 301 not 410; update either the slug set or the comment/documentation
3. ⚠️ Run Core Web Vitals manually — API quota exhausted; visit https://pagespeed.web.dev for homepage, /courses, /about, /contact

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
Sitemap: https://mindpeakinstitute.com/removal-sitemap.xml
```

Observations:
- Correct strategy: thin/doorway pages use `noindex` meta tag rather than `Disallow`, allowing Google to discover and act on the directive
- Query-string duplicates blocked with `/*?*`
- Both primary and removal sitemaps referenced
- Technical paths (API, admin, Next.js internals) correctly disallowed

### Sitemap

**File:** https://mindpeakinstitute.com/sitemap.xml  
**Status:** ✅ Well-structured

**Total URLs:** 503

| Category | Count |
|---|---|
| Static / main pages | 11 |
| Coaching programs | 10 |
| Subject-specific pages | 23 |
| Topic / chapter pages | 147 |
| Blog articles | 134 |
| Exam information pages | 23 |
| Comparison pages | 10 |
| Concept / difference pages | 28 |
| Geographic coaching pages | 52 |
| Other | ~65 |

- Single flat sitemap (no sitemapindex) — manageable at 503 URLs
- Geographic pages in sitemap are state/metro hub pages (e.g. `/jee-coaching-in-maharashtra`) — curated and indexable
- Removal sitemap (`/removal-sitemap.xml`) correctly lists only URLs marked for de-indexing

### Page Status — Top 50 Spot-Check

All sampled URLs from the main sitemap return HTTP 200:

| URL | Status |
|---|---|
| / | ✅ 200 |
| /courses | ✅ 200 |
| /pricing | ✅ 200 |
| /about | ✅ 200 |
| /contact | ✅ 200 |
| /study-plan | ✅ 200 |
| /blog | ✅ 200 |
| /jee-coaching | ✅ 200 |
| /neet-coaching | ✅ 200 |
| /methodology | ✅ 200 |
| /mentors | ✅ 200 |
| /free-trial | ✅ 200 |
| /jee-physics-coaching | ✅ 200 |
| /jee-chemistry-coaching | ✅ 200 |
| /jee-mathematics-coaching | ✅ 200 |
| /jee-mechanics | ✅ 200 |
| /jee-thermodynamics | ✅ 200 |
| /neet-biology | ✅ 200 |
| /jee-rank-predictor | ✅ 200 |
| /neet-rank-predictor | ✅ 200 |
| /mindpeak-vs-allen | ✅ 200 |
| /mindpeak-vs-physics-wallah | ✅ 200 |
| /jee-coaching-in-mumbai | ✅ 200 |
| /jee-coaching-in-delhi | ✅ 200 |
| /neet-coaching-in-bangalore | ✅ 200 |
| /jee-coaching-in-maharashtra | ✅ 200 |
| /jee-coaching-in-uttar-pradesh | ✅ 200 |
| /jee-coaching-in-rajasthan | ✅ 200 |
| /terms-and-conditions | ✅ 200 |
| /refund-policy | ✅ 200 |
| /blog/jee-main-2025-analysis | ✅ 200 |
| /online-jee-coaching | ✅ 200 |
| /online-neet-coaching | ✅ 200 |

**No 404s or 5xx errors detected across all sampled URLs.**

---

## 2. Doorway Page Detection

**Status:** ⚠️ Warning — removal-sitemap strategy partially working

### Background
The site previously generated ~15,000+ thin city/subject-city doorway pages. These are being suppressed via three-tier strategy: `noindex` meta, 301 redirects to hub pages, and 410 Gone for confirmed-indexed doorways.

### Removal Sitemap (19 URLs)

`/removal-sitemap.xml` lists 19 confirmed-indexed doorway URLs to be de-indexed. However, actual HTTP responses differ from documentation:

| URL | Expected | Actual |
|---|---|---|
| /jee-coaching-in-srinagar | 410 | ✅ 410 |
| /neet-coaching-in-chandigarh | 410 | ✅ 410 |
| /jee-coaching-in-bahrain | 410 | ✅ 410 |
| /jee-coaching-in-andheri | 410 | ⚠️ 301 → /jee-coaching-in-maharashtra |
| /jee-coaching-in-rampur | 410 | ⚠️ 301 → /jee-coaching-in-uttar-pradesh |
| /jee-coaching-in-dharamshala | 410 | ⚠️ 301 → /jee-coaching-in-himachal-pradesh |
| /jee-coaching-in-hisar | 410 | ⚠️ 301 → /jee-coaching-in-haryana |
| /jee-coaching-in-janakpuri | 410 | ⚠️ 301 → /jee-coaching-in-delhi |
| /jee-coaching-in-katihar | 410 | ⚠️ 301 → /jee-coaching-in-bihar |
| /neet-coaching-in-indirapuram | 410 | ⚠️ 301 → /neet-coaching-in-uttar-pradesh |
| /neet-coaching-in-dehradun | 410 | ⚠️ 301 → /neet-coaching-in-uttarakhand |
| /neet-coaching-in-guwahati | 410 | ⚠️ 301 → /neet-coaching-in-assam |
| /jee-chemistry-coaching-in-kottayam | 410 | ⚠️ 301 → /jee-chemistry-preparation |
| /jee-mathematics-coaching-in-karnal | 410 | ⚠️ 301 → /jee-mathematics-preparation |
| /neet-chemistry-coaching-in-bhagalpur | 410 | ⚠️ 301 → /neet-chemistry-preparation |
| /jee-physics-coaching-in-davanagere | 410 | ⚠️ 301 → /jee-physics-preparation |
| /jee-physics-coaching-in-dharamshala | 410 | ⚠️ 301 → /jee-physics-preparation |
| /jee-physics-coaching-in-nawada | 410 | ⚠️ 301 → /jee-physics-preparation |
| /neet-physics-coaching-in-hsr-layout | 410 | ⚠️ 301 → /neet-physics-preparation |

**Result: 3/19 correctly returning 410; 16/19 returning 301**

### Root Cause
`proxy.ts` checks `cityConsolidation` (301 to hub pages) **before** checking `REMOVED_DOORWAY_SLUGS` (410). For the 16 URLs that have a consolidation rule, the 301 fires first and the 410 branch in `REMOVED_DOORWAY_SLUGS` is never reached.

```typescript
// proxy.ts (simplified)
const con = getCityConsolidation(slug);   // checked FIRST
if (con?.action === '301') return redirect(...);   // 16 URLs exit here

if (REMOVED_DOORWAY_SLUGS.has(slug)) return gone(); // only 3 reach here
```

### Impact Assessment
The 301 strategy is not necessarily wrong — redirecting to state hubs is a valid consolidation signal. However:
- `removal-sitemap.xml` claims all 19 URLs "serve HTTP 410" — this is inaccurate for 16 of them
- Google processes a 301-in-removal-sitemap differently from 410; the de-indexing signal is weaker
- If the goal is fast de-indexing of confirmed-indexed doorways, these 16 should either be excluded from the removal sitemap or have their consolidation rules removed so `REMOVED_DOORWAY_SLUGS` fires

### Codebase Status
- No active doorway page route directories found in `app/` — all city/subject-city pages are served dynamically through the `[...slug]` catch-all
- `isDoorwayCoachingSlug` in `src/lib/indexableCities.ts` correctly identifies remaining non-hub city pages and `proxy.ts` adds `X-Robots-Tag: noindex, follow` to those responses

---

## 3. Broken Link Check

**Status:** ✅ No broken links found

### Homepage Internal Links Crawled
All 7 internal links found on the homepage resolve to 200:
- `/` (logo), `/jee-coaching`, `/neet-coaching`, `/courses`, `/pricing`, `/study-plan`, `/blog`, `/contact`

### Extended Navigation Audit
Secondary pages (`/about`, `/contact`) expose a broader footer navigation. All sampled destinations return 200. No 404s detected in any checked page.

---

## 4. Core Web Vitals

**Status:** ⚠️ Cannot report — PageSpeed Insights API quota exhausted

The shared Google PageSpeed API project (`project_number:583797351490`) has exhausted its daily quota (`Queries per day: 0 remaining`). Both authenticated and unauthenticated API calls return `HTTP 429 RESOURCE_EXHAUSTED`.

**Recommended action:** Run manually at https://pagespeed.web.dev for the following pages on **mobile**:

| Page | URL |
|---|---|
| Homepage | https://mindpeakinstitute.com |
| Courses | https://mindpeakinstitute.com/courses |
| About | https://mindpeakinstitute.com/about |
| Contact | https://mindpeakinstitute.com/contact |

**Thresholds for flagging:**

| Metric | Good | Needs Improvement | Poor (flag 🚨) |
|---|---|---|---|
| LCP | < 2.5s | 2.5–4s | > 4s |
| CLS | < 0.1 | 0.1–0.25 | > 0.25 |
| INP | < 200ms | 200–500ms | > 500ms |

**Reference (from previous health-check 2026-05-12):** Performance metrics were not measurable in that run either — consider configuring a dedicated API key via Google Cloud Console to enable automated CWV tracking in future runs.

---

## 5. HTTPS & Security

**Status:** ✅ Healthy

### HTTP → HTTPS Redirect
```
HTTP/1.1 308 Permanent Redirect
Location: https://mindpeakinstitute.com/
```
✅ All HTTP traffic permanently redirected to HTTPS (308, not 301 — preserves POST method)

### Security Headers
Every page response includes:

| Header | Value | Assessment |
|---|---|---|
| `strict-transport-security` | `max-age=63072000` (2 years) | ✅ HSTS enabled |
| `x-content-type-options` | `nosniff` | ✅ MIME sniffing blocked |
| `referrer-policy` | `strict-origin-when-cross-origin` | ✅ Privacy-preserving |
| `permissions-policy` | `camera=(), microphone=(), geolocation=()` | ✅ Feature access locked |

### Mixed Content
No `http://` asset URLs found in `src/` source files. Risk: **Low**.  
Cannot verify dynamically loaded third-party scripts (Google Analytics, etc.) without browser DevTools — manual check recommended.

---

## 6. 🚨 Critical: Soft 404s (Unknown URLs Return HTTP 200)

**Status:** 🚨 Critical

### Finding
URLs that do not correspond to any real page on the site return **HTTP 200** instead of 404:

```bash
$ curl -sI https://mindpeakinstitute.com/random-unrelated-page-abc
HTTP/2 200

$ curl -sI https://mindpeakinstitute.com/totally-nonexistent-xyz-12345
HTTP/2 200

$ curl -sI https://mindpeakinstitute.com/jee-coaching-in-fakecity-xyz
HTTP/2 200
```

### Why This Happens

**Path A — Any slug with `coaching-in-`** is unconditionally accepted in `isKnownSlug`:
```typescript
// src/lib/resolveSlugMetadata.ts:89
if (slug.includes('coaching-in-')) return true;
```
This means `/jee-coaching-in-fakecity-xyz` passes the 404 gate and renders a live (if noindexed) city page.

**Path B — Truly random slugs** (no recognisable pattern) also return 200. `isKnownSlug` correctly returns `false` and `notFound()` is called in the page component, but `notFound()` does not produce an HTTP 404 response — the not-found page renders at HTTP 200. This is a Next.js soft-404 condition.

**Path C — `resolveSlugMetadata` fallback** generates a title and metadata for every slug that reaches it, including completely unknown ones:
```typescript
// src/lib/resolveSlugMetadata.ts (end of function)
return {
  title: `${prettyName} ${YEAR} | MindPeak Institute`,
  robots: { index: false, follow: true },   // noindex mitigates, but HTTP 200 remains
};
```

### SEO Impact
- **Google penalises soft 404s** even when the page carries `noindex`. Returning HTTP 200 for non-existent pages signals poor site hygiene and can depress crawl budget.
- **Scaled-content / spam signal**: combined with the March 2026 Spam Update penalty the site is already recovering from, soft 404s reinforce the negative quality signal.
- **Crawl waste**: Googlebot will crawl URLs that return 200 hoping to find indexable content, burning crawl budget on empty pages.
- **Abuse vector**: any external link to an arbitrary URL (e.g. `/jee-coaching-in-[any-city-slug]`) will serve a 200 response with a generated page — exactly the pattern that triggered the Spam Update penalty.

### Recommended Fixes

**Fix 1 (highest priority): ensure `notFound()` produces HTTP 404**

In `app/[...slug]/page.tsx`, verify that the not-found.tsx boundary returns the correct status. If the global `not-found.tsx` is overriding the status, add an explicit response:

```typescript
// app/[...slug]/not-found.tsx
import { notFound } from 'next/navigation';
export default function NotFound() { notFound(); }
```

Or use Next.js's built-in not-found mechanism without a wrapper component.

**Fix 2: tighten `isKnownSlug` for the `coaching-in-` wildcard**

Replace the blanket `includes('coaching-in-')` check with a lookup against the actual set of served city slugs:

```typescript
// Before (line 89)
if (slug.includes('coaching-in-')) return true;

// After
import { INDEXABLE_CITY_SLUGS, STATE_HUB_SLUG_SET } from '@/lib/indexableCities';
if (STATE_HUB_SLUG_SET.has(slug) || INDEXABLE_CITY_SLUGS.has(slug)) return true;
// Non-hub city pages are served (with noindex) but should still be known
if (slug.match(/^(jee|neet)-coaching-in-.+$/) && STATE_BY_CITY.has(slug.split('-in-').pop()!)) return true;
```

**Fix 3: gate the `resolveSlugMetadata` fallback**

The unconditional fallback in `resolveSlugMetadata` should check `isKnownSlug` before generating metadata, or throw so `generateMetadata` returns the generic fallback:

```typescript
// At the end of resolveSlugMetadata, before the fallback:
throw new Error(`Unknown slug: ${slug}`);
// generateMetadata in page.tsx catches this and returns { title: 'MindPeak Institute' }
```

---

## Appendix — Full URL Sample Tested

### Returning 200 ✅ (sitemap URLs)
/jee-coaching, /neet-coaching, /courses, /pricing, /about, /contact, /study-plan, /blog, /methodology, /mentors, /free-trial, /jee-physics-coaching, /jee-chemistry-coaching, /jee-mathematics-coaching, /jee-mechanics, /jee-thermodynamics, /neet-biology, /jee-rank-predictor, /neet-rank-predictor, /mindpeak-vs-allen, /mindpeak-vs-physics-wallah, /jee-coaching-in-mumbai, /jee-coaching-in-delhi, /jee-coaching-in-bangalore, /neet-coaching-in-bangalore, /jee-coaching-in-maharashtra, /jee-coaching-in-uttar-pradesh, /online-jee-coaching, /online-neet-coaching, /terms-and-conditions, /refund-policy, /blog/jee-main-2025-analysis

### Returning 410 ✅ (removal sitemap URLs)
/jee-coaching-in-srinagar, /neet-coaching-in-chandigarh, /jee-coaching-in-bahrain

### Returning 301 ⚠️ (removal sitemap URLs — expected 410)
/jee-coaching-in-andheri → /jee-coaching-in-maharashtra  
/jee-coaching-in-rampur → /jee-coaching-in-uttar-pradesh  
/neet-coaching-in-indirapuram → /neet-coaching-in-uttar-pradesh  
/jee-chemistry-coaching-in-kottayam → /jee-chemistry-preparation  
/jee-mathematics-coaching-in-karnal → /jee-mathematics-preparation  
/jee-physics-coaching-in-davanagere → /jee-physics-preparation  
/neet-chemistry-coaching-in-bhagalpur → /neet-chemistry-preparation  
/neet-coaching-in-dehradun → (301 to state hub)  
/neet-coaching-in-guwahati → (301 to state hub)  
(+ 7 more)

### Returning 200 🚨 (non-existent URLs — soft 404)
/totally-nonexistent-xyz-12345, /random-unrelated-page-abc, /jee-coaching-in-fakecity-xyz
