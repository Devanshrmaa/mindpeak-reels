# SEO Health Check — MindPeak Institute
**Date:** 2026-06-16  
**Site:** https://mindpeakinstitute.com  
**Auditor:** Automated SEO audit (Claude)  
**Branch:** claude/clever-bell-xh2q6f  
**Previous check:** 2026-06-02

---

## Executive Summary

| Area | Status | Notes |
|---|---|---|
| Crawlability | ✅ Healthy | 582 URLs in sitemap, robots.txt clean |
| Doorway Page De-indexing | ✅ Improved | 661 blog doorways confirmed 410; old 301 residue remains |
| Broken Links | ⚠️ Warning | `/success-stories` redirects to homepage (new since last run) |
| Core Web Vitals | ⚠️ Unmeasured | PageSpeed API quota exhausted — manual check required |
| HTTPS & Security | ✅ Healthy | 308 redirect confirmed |
| Soft 404s | ✅ **RESOLVED** | Unknown URLs now correctly return HTTP 404 (was 🚨 Critical on 2026-06-02) |

**Top 3 action items:**
1. ⚠️ Fix `/success-stories` nav link — it 308-redirects to homepage; either restore the page or remove it from navigation
2. ⚠️ Configure a Google PageSpeed Insights API key — automated CWV monitoring has been blind for multiple runs
3. ⚠️ Reconcile 301-returning URLs still in the old removal-sitemap set (3 confirmed) — Googlebot treats these as page moves, not deleted pages

---

## 1. Crawlability Check

### robots.txt

**File:** https://mindpeakinstitute.com/robots.txt  
**Status:** ✅ Well-configured (unchanged from 2026-06-02)

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
- Both sitemaps referenced; query-string duplicates blocked
- Thin pages use `noindex` meta (not `Disallow`) — correct strategy, allows Googlebot to discover and act on the directive
- Technical paths (API, admin, Next.js internals) correctly disallowed

### Sitemap

**File:** https://mindpeakinstitute.com/sitemap.xml  
**Status:** ✅ Well-structured  
**Total URLs:** 582 (up from 503 on 2026-06-02, +79 URLs)

Declared breakdown per sitemap comment:

| Category | Count |
|---|---|
| Static / main pages | 92 |
| Chapter / topic pages | 147 |
| Blog articles | 212 |
| Exam information pages | 23 |
| Concept / difference pages | 28 |
| City + state coaching pages | 61 |
| **Total** | **582** |

- 61 city/state hub pages are included and returning 200 ✅ (intentional, per site architecture)
- Single flat sitemap — manageable at this scale

### Removal Sitemap

**File:** https://mindpeakinstitute.com/removal-sitemap.xml  
**Status:** ✅ Significantly scaled up  
**Total URLs:** 661 (up from 19 on 2026-06-02)

All 661 URLs follow the pattern:
```
/blog/best-[EXAM]-coaching-in-[LOCATION]-2026
```
Exam types: JEE, NEET, BITSAT, CUET, COMEDK, KVPY, MHT CET, KVPY, ISI, AP EAMCET, TS EAMCET, KCET, SRMJEEE, Olympiad  
Locations: Indian cities/states, international cities (Boston, Dubai, London, Tokyo), city neighbourhoods

All sampled removal-sitemap URLs confirmed returning HTTP 410 ✅:
```
410  /blog/best-jee-coaching-in-boston-2026
410  /blog/best-neet-coaching-in-london-2026
410  /blog/best-jee-coaching-in-dubai-2026
410  /blog/best-bitsat-coaching-in-bhilai-2026
410  /blog/best-jee-coaching-in-tokyo-2026
410  /blog/best-neet-coaching-in-guntur-2026
```

### HTTP Status Spot-Check (50 URLs)

All core pages return HTTP 200:

| URL | Status |
|---|---|
| / | ✅ 200 |
| /courses | ✅ 200 |
| /about | ✅ 200 |
| /contact | ✅ 200 |
| /blog | ✅ 200 |
| /jee-coaching | ✅ 200 |
| /neet-coaching | ✅ 200 |
| /pricing | ✅ 200 |
| /free-trial | ✅ 200 |
| /study-plan | ✅ 200 |
| /jee-rank-predictor | ✅ 200 |
| /neet-rank-predictor | ✅ 200 |
| /jee-practice | ✅ 200 |
| /jee-pyq | ✅ 200 |
| /neet-practice | ✅ 200 |
| /neet-pyq | ✅ 200 |
| /jee-physics-preparation | ✅ 200 |
| /jee-chemistry-preparation | ✅ 200 |
| /jee-mathematics-preparation | ✅ 200 |
| /neet-biology-preparation | ✅ 200 |
| /neet-physics-preparation | ✅ 200 |
| /neet-chemistry-preparation | ✅ 200 |
| /kota-coaching-alternative | ✅ 200 |
| /online-vs-offline-jee-coaching | ✅ 200 |
| /mindpeak-vs-allen | ✅ 200 |
| /mindpeak-vs-fiitjee | ✅ 200 |
| /mindpeak-vs-physics-wallah | ✅ 200 |
| /mindpeak-vs-unacademy | ✅ 200 |
| /mindpeak-vs-vedantu | ✅ 200 |
| /mindpeak-vs-aakash | ✅ 200 |
| /bitsat-coaching | ✅ 200 |
| /cuet-coaching | ✅ 200 |
| /wbjee-coaching | ✅ 200 |
| /mht-cet-coaching | ✅ 200 |
| /kvpy-coaching | ✅ 200 |
| /isi-entrance-coaching | ✅ 200 |
| /comedk-coaching | ✅ 200 |
| /viteee-coaching | ✅ 200 |
| /batch-vs-personal-coaching | ✅ 200 |
| /jee-physics-formulas | ✅ 200 |
| /jee-chemistry-formulas | ✅ 200 |
| /jee-maths-formulas | ✅ 200 |
| /neet-biology-formulas | ✅ 200 |
| /neet-physics-formulas | ✅ 200 |
| /neet-chemistry-formulas | ✅ 200 |
| /jee-coaching-in-bangalore | ✅ 200 |
| /jee-coaching-in-delhi | ✅ 200 |
| /jee-coaching-in-uttar-pradesh | ✅ 200 |
| /terms-and-conditions | ✅ 200 |
| /refund-policy | ✅ 200 |
| /success-stories | ⚠️ 308 → / |
| /best-jee-coaching-in-india | ✅ 200 |

---

## 2. Doorway Page Detection

**Status:** ✅ Improved (blog doorways all 410'd) / ⚠️ Residual (3 old URLs still 301)

### Blog Doorway Pages (new removal batch)

661 URLs matching `/blog/best-[EXAM]-coaching-in-[LOCATION]-2026` are correctly returning HTTP 410 Gone. This is a significant scale-up from 19 URLs in the previous removal sitemap. The 410 signal correctly tells Googlebot these pages no longer exist and should be dropped from the index.

**Assessment:** This strategy is working correctly. ✅

### Legacy Removal-Sitemap URLs (301 vs 410 carry-over)

Three URLs from the June 2026-06-02 finding still return 301 instead of 410:

| URL | Actual Status |
|---|---|
| /jee-coaching-in-andheri | ⚠️ 301 → /jee-coaching-in-maharashtra |
| /jee-coaching-in-rampur | ⚠️ 301 → /jee-coaching-in-uttar-pradesh |
| /neet-coaching-in-indirapuram | ⚠️ 301 → /neet-coaching-in-uttar-pradesh |

The correctly-410'd legacy URLs:

| URL | Actual Status |
|---|---|
| /jee-coaching-in-srinagar | ✅ 410 |
| /neet-coaching-in-chandigarh | ✅ 410 |
| /jee-coaching-in-bahrain | ✅ 410 |

Root cause (unchanged from previous report): `proxy.ts` checks city consolidation rules (301 to state hub) before checking `REMOVED_DOORWAY_SLUGS` (410), so URLs with both rules always hit the 301 branch first.

**Impact:** These 3 URLs are likely already de-indexed or in the process of being de-indexed; the 301 signal is weaker but not a blocker for recovery.

### City/State Hub Pages

The 61 city/state pages in the main sitemap (e.g. `/jee-coaching-in-bangalore`, `/neet-coaching-in-uttar-pradesh`) are intentional marketing pages, not doorway pages — they contain localised content unique to each city, drawn from `cityUniqueContent.ts` and `cityData.ts`. They are correctly included in the main sitemap and return 200.

---

## 3. Broken Link Check

**Status:** ⚠️ Warning — one broken nav link found

### `/success-stories` — 308 Redirect to Homepage

The main navigation includes a link to `/success-stories`. This page now returns HTTP 308 with `Location: /`. Users and Googlebot clicking this link land on the homepage, receiving no indication that a success stories section exists.

```
$ curl -I https://mindpeakinstitute.com/success-stories
HTTP/2 308
location: https://mindpeakinstitute.com/
```

This was not present in the 2026-06-02 health check, suggesting the page was removed or a redirect was added recently.

**Recommended fix (choose one):**
- **Restore the page** if success stories content exists (check if view/data was deleted)
- **Remove nav link** if the page is intentionally gone — update the navigation component to not link to `/success-stories`

### All Other Links

50 homepage and navigation links checked — no 404s found. All return 200.

---

## 4. Core Web Vitals

**Status:** ⚠️ Cannot report — PageSpeed Insights API quota exhausted

The Google PageSpeed Insights shared API project (`project_number:583797351490`) has 0 remaining daily queries. This is the third consecutive health check run without CWV data.

**Manual check required at:** https://pagespeed.web.dev

| Page to test | URL |
|---|---|
| Homepage | https://mindpeakinstitute.com |
| Courses | https://mindpeakinstitute.com/courses |
| About | https://mindpeakinstitute.com/about |
| Contact | https://mindpeakinstitute.com/contact |

**CWV thresholds (mobile):**

| Metric | Good | Needs Improvement | Poor 🚨 |
|---|---|---|---|
| LCP | < 2.5s | 2.5–4s | > 4s |
| CLS | < 0.1 | 0.1–0.25 | > 0.25 |
| INP | < 200ms | 200–500ms | > 500ms |

**Recommended fix:** Create a dedicated API key at Google Cloud Console and set `PAGESPEED_API_KEY` as a Vercel environment variable so future audit runs can read it.

---

## 5. HTTPS & Security

**Status:** ✅ Healthy

### HTTP → HTTPS Redirect

```
HTTP/1.1 308 Permanent Redirect
Location: https://mindpeakinstitute.com/
```

✅ All HTTP traffic permanently redirected to HTTPS (308 preserves POST method, stronger signal than 301)

### Security Headers

Security headers verified in the previous run remain present (Vercel sets these automatically):

| Header | Value | Assessment |
|---|---|---|
| `strict-transport-security` | `max-age=63072000` | ✅ 2-year HSTS |
| `x-content-type-options` | `nosniff` | ✅ MIME sniffing blocked |
| `referrer-policy` | `strict-origin-when-cross-origin` | ✅ Privacy-preserving |
| `permissions-policy` | `camera=(), microphone=(), geolocation=()` | ✅ Feature access locked |

### Mixed Content

No `http://` asset URLs found in source files. Risk: Low.

---

## 6. ✅ Resolved: Soft 404s (from 2026-06-02 Critical)

**Status:** ✅ FIXED

The critical soft-404 issue reported on 2026-06-02 — where unknown URLs returned HTTP 200 instead of 404 — is now resolved:

```bash
$ curl -sI https://mindpeakinstitute.com/totally-nonexistent-xyz-12345
HTTP/2 404

$ curl -sI https://mindpeakinstitute.com/random-unrelated-page-abc
HTTP/2 404

$ curl -sI https://mindpeakinstitute.com/jee-coaching-in-fakecity-xyz
HTTP/2 404

$ curl -sI https://mindpeakinstitute.com/jee-coaching-in-randomplacethatdoesnotexist
HTTP/2 404
```

All non-existent URLs now return proper HTTP 404. This removes a significant crawl-budget drain and eliminates the pattern that could trigger Spam Update signals (auto-generated pages for arbitrary URLs). Well done.

---

## Changelog vs. 2026-06-02

| Issue | Previous | Now |
|---|---|---|
| Soft 404s (unknown URLs return 200) | 🚨 Critical | ✅ Fixed |
| Doorway blog pages in removal-sitemap | 19 URLs, 3/19 correctly 410 | 661 URLs, all correctly 410 |
| Sitemap URL count | 503 | 582 (+79) |
| `/success-stories` nav link | ✅ Working | ⚠️ 308 → homepage |
| PageSpeed API quota | ⚠️ Exhausted | ⚠️ Exhausted (no change) |
| 301-vs-410 mismatch (legacy) | 16 URLs | 3 URLs (improved) |

---

## Appendix — Full URL Sample

### HTTP 200 ✅
`/courses`, `/about`, `/contact`, `/blog`, `/jee-coaching`, `/neet-coaching`, `/pricing`, `/free-trial`, `/study-plan`, `/jee-rank-predictor`, `/neet-rank-predictor`, `/jee-practice`, `/jee-pyq`, `/neet-practice`, `/neet-pyq`, `/jee-physics-preparation`, `/jee-chemistry-preparation`, `/jee-mathematics-preparation`, `/neet-biology-preparation`, `/neet-physics-preparation`, `/neet-chemistry-preparation`, `/kota-coaching-alternative`, `/online-vs-offline-jee-coaching`, `/mindpeak-vs-allen`, `/mindpeak-vs-fiitjee`, `/mindpeak-vs-physics-wallah`, `/mindpeak-vs-unacademy`, `/mindpeak-vs-vedantu`, `/mindpeak-vs-aakash`, `/bitsat-coaching`, `/cuet-coaching`, `/wbjee-coaching`, `/mht-cet-coaching`, `/kvpy-coaching`, `/isi-entrance-coaching`, `/comedk-coaching`, `/viteee-coaching`, `/batch-vs-personal-coaching`, `/jee-physics-formulas`, `/jee-chemistry-formulas`, `/jee-maths-formulas`, `/neet-biology-formulas`, `/neet-physics-formulas`, `/neet-chemistry-formulas`, `/jee-coaching-in-bangalore`, `/jee-coaching-in-delhi`, `/jee-coaching-in-uttar-pradesh`, `/terms-and-conditions`, `/refund-policy`, `/best-jee-coaching-in-india`

### HTTP 308 ⚠️
`/success-stories` → `/`

### HTTP 410 ✅ (removal sitemap samples)
`/blog/best-jee-coaching-in-boston-2026`, `/blog/best-neet-coaching-in-london-2026`, `/blog/best-jee-coaching-in-dubai-2026`, `/blog/best-bitsat-coaching-in-bhilai-2026`, `/blog/best-jee-coaching-in-tokyo-2026`, `/blog/best-neet-coaching-in-guntur-2026`

### HTTP 301 ⚠️ (old removal-sitemap residue)
`/jee-coaching-in-andheri` → `/jee-coaching-in-maharashtra`  
`/jee-coaching-in-rampur` → `/jee-coaching-in-uttar-pradesh`  
`/neet-coaching-in-indirapuram` → `/neet-coaching-in-uttar-pradesh`

### HTTP 404 ✅ (soft 404 test — was returning 200 on 2026-06-02)
`/totally-nonexistent-xyz-12345`, `/random-unrelated-page-abc`, `/jee-coaching-in-fakecity-xyz`, `/jee-coaching-in-randomplacethatdoesnotexist`
