# GSC API Audit & Soft-404 Doorway Fix — 2026-06-10

**Source:** Google Search Console API (service account, `sc-domain:mindpeakinstitute.com`)
**Scope:** First report with real GSC data (prior reports relied on `site:` searches, which
materially under/over-counted — see §4).

---

## 1. What actually happened to traffic (GSC daily data)

| Period | Clicks/day | Impressions/day | Notes |
|---|---|---|---|
| Feb 10–28 | 0–15 | 1–450 | Site ramping up |
| Mar 9–24 (peak) | 60–145 | 8,000–10,200 | **Driven almost entirely by doorway blog posts** |
| **Mar 25 (crash)** | 6 | 472 | Impressions fell 89% overnight — March 2026 Spam Update |
| Apr | 1–8 | 50–140 | Decay continues as doorways drop |
| Jun 1–7 | 0–1 | 7–22 | Effectively brand-only traffic |

**Top pages Mar 9–24:** `/blog/best-ts-eamcet-coaching-in-karimnagar-2026`,
`/blog/best-ts-eamcet-coaching-in-khammam-2026`, `/blog/best-ap-eamcet-coaching-in-visakhapatnam-2026`,
… (programmatic exam×city doorways). The homepage was the only non-doorway page in the top 5.

**Conclusion:** the "high performance" of March was doorway-spam traffic. It is not coming back
through those URLs, and trying to revive them would deepen the penalty. Recovery = finish the
cleanup with correct HTTP signals + keep building the legitimate content that is already
starting to index (state hubs, comparisons, chapter content).

## 2. Root cause found: 200 soft-404s on ~6,000 removed blog doorways

The killed blog generators (`generateExamCityPosts`, `generateBestCoachingInCityPosts`,
`generateParentPosts` city-cost posts, `generateKotaWorthItPosts`, `generateNCERTAnalysisPosts`)
correctly return `[]` — but their URLs **kept returning HTTP 200**:

- Root `app/loading.tsx` created a Suspense boundary above every page, so Next.js streamed a
  200 shell **before** `notFound()` could set a 404 status.
- The rendered shell carried **two conflicting robots tags** (`index, follow` from the root
  layout + `noindex` injected by Next) and an inherited canonical pointing at the homepage.
- Result: Google saw thousands of 200 "removed" pages with contradictory signals.
  **658 doorway blog URLs are confirmed still indexed** (GSC impressions since Mar 25).

URL Inspection confirmed: `/blog/best-ap-eamcet-coaching-in-calgary-2026` = *"Submitted and
indexed"*, last crawl **2026-03-08** — never recrawled in 3 months (penalty crawl throttle).

## 3. Fixes deployed in this change

| Fix | File | Effect |
|---|---|---|
| HTTP **410 Gone** for all killed blog doorway patterns | `proxy.ts` + `src/lib/removedBlogDoorways.ts` | Hard removal signal on plain crawl, no render needed |
| 658 GSC-confirmed-indexed doorways added to `/removal-sitemap.xml` (fresh lastmod) | `app/removal-sitemap.xml/route.ts` | Forces recrawl → Googlebot sees 410 → fast de-indexing |
| Deleted root `app/loading.tsx` | — | Unknown URLs now return **real 404s** site-wide (verified locally) |
| Removed sitewide `robots: index,follow` + root-layout canonical | `app/layout.tsx` | No more conflicting robots tags on 404s; no more stray URLs canonicalising to homepage |
| Killed doorway slugs purged from `getAllProgrammaticBlogSlugs()` | `src/lib/programmaticBlogs.ts` | Stale script can no longer emit dead URLs into sitemaps |
| robots.txt page-count comment updated (~370 → ~507) | `public/robots.txt` | Housekeeping |

Verified locally: doorway patterns → 410, unknown blog slug → 404, live posts → 200 with
correct canonical, sitemap.xml = 507 URLs (0 doorways), removal-sitemap.xml = 661 URLs.

## 4. Corrections to prior weekly reports (GSC API vs `site:` searches)

- `/jee-coaching-in-maharashtra` **IS indexed** (verdict PASS, crawled 2026-05-30). Week 5
  report's "38 of 40 hubs not indexed" is overstated — `site:` sampling misses pages.
- `/jee-coaching-in-delhi` is **not** "blocked by the janakpuri doorway". GSC shows
  *"Excluded by noindex tag"* from its last crawl on **2026-04-10** — it served a noindex back
  then (since fixed; live page is clean `index, follow` + 200). It needs a **recrawl**, not a
  doorway fix.
- `/jee-coaching-in-bahrain` shows *"Excluded by noindex"* in GSC — it is already **out** of
  the serving index; lingering `site:` visibility is stale.
- Sitemaps in GSC: both submitted, 0 errors. 504 discovered in sitemap.xml.

## 5. Owner actions (GSC UI — no API exists for these)

1. **Request Indexing** (URL Inspection → Request Indexing) for:
   `/jee-coaching-in-delhi`, `/neet-coaching-in-delhi`, `/jee-coaching-in-mumbai`,
   `/jee-coaching-in-hyderabad` — they're clean live but Google holds a stale noindex crawl.
2. **Check Manual Actions panel** (Security & Manual Actions → Manual actions). If anything is
   listed, file reconsideration AFTER this deploy is live.
3. Optional: Removals → Temporary Removal for the worst still-indexed doorways
   (e.g. the Calgary/Boston/Dubai EAMCET pages) to hide them from results immediately.
4. **Rotate the service-account key that was shared in chat** (Google Cloud Console → IAM →
   Service Accounts → keys). Treat the old key as compromised.

## 6. What recovery should look like

- **2–4 weeks:** 410s + removal sitemap drain the 658 indexed doorways. Watch GSC Page
  indexing report ("Not found (404)" / "Gone (410)" should climb as doorways leave).
- **Crawl budget shifts** to the 507 legitimate sitemap URLs; state hubs continue indexing
  (2 already in within 9 days — the throttle is easing).
- **Traffic expectation:** do NOT benchmark against March (~10k impressions/day of spam).
  The realistic baseline to grow from is the legitimate-content curve: brand + chapter guides +
  comparisons + state hubs compounding over months.

*Generated from live GSC API data, 2026-06-10.*
