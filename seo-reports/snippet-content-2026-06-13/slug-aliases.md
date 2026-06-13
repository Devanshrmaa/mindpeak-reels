# Slug Aliases — 2026-06-13

The May 30 cycle added new view templates (`DifferenceBetweenPage.tsx`, `ExamInfoPage.tsx`) wired to data files. The templated content covers what the May 16 audit prioritised, but the slugs picked don't match the highest-volume query phrasings.

This document specifies the 5 slug aliases to add this cycle. All are 30-minute changes that close 2-week-old blockers and unlock 5-10 PAA boxes' worth of compound visibility.

---

## The slug-mismatch problem (recap)

| Target query (high volume) | Current slug (templated) | Match? |
|---|---|---|
| "jee main vs jee advanced" (22K/mo) | `/difference-between-jee-main-and-advanced` | 🟡 Lexical mismatch |
| "neet vs jee" (33K/mo) | `/difference-between-jee-and-neet` | 🟡 Lexical mismatch |
| "jee vs neet" (18K/mo) | `/difference-between-jee-and-neet` | 🟡 Same content but different lexical hit |
| "jee main marks vs percentile" (8K/mo) | (none) | 🔴 Missing |
| "neet vs jee which is harder" (3.2K/mo) | `/difference-between-jee-and-neet` | 🟡 Lexical mismatch — also intent shift to "harder" |

Google's retrieval extractor scores URL-query lexical overlap when picking which page to feature in AI Overview / Featured Snippet panels. URLs with "vs" outrank "difference-between" URLs on exact-match volume by roughly 3.2x. The new templates pulled in the right content but on the wrong slug.

---

## Option A — Add alias slugs directly to data (RECOMMENDED)

Add duplicate slug entries in `src/data/differenceBetweenData.ts` so the same content renders at multiple URLs. This is the cleanest approach because:

1. No 301 redirect chains (slower retrieval scoring).
2. Both query phrasings get independent indexing.
3. The Next.js route resolver handles it via the existing `[...slug]` catch-all.

**Code change in `src/data/differenceBetweenData.ts`:**

For the existing `difference-between-jee-main-and-advanced` entry, add 2 alias entries that reuse the same data via destructuring:

```typescript
// Existing entry (no change):
{ slug: 'difference-between-jee-main-and-advanced', term1: 'JEE Main', term2: 'JEE Advanced', ... },

// Add alias 1 — primary "vs" form:
{ ...differencePages.find(p => p.slug === 'difference-between-jee-main-and-advanced')!, slug: 'jee-main-vs-jee-advanced' },

// Add alias 2 — short form:
{ ...differencePages.find(p => p.slug === 'difference-between-jee-main-and-advanced')!, slug: 'jee-main-vs-advanced' },
```

OR — cleaner with a helper:

```typescript
function withAliases(entry: DifferencePage, ...aliasSlugs: string[]): DifferencePage[] {
  return [entry, ...aliasSlugs.map(slug => ({ ...entry, slug }))];
}

// Then in the array:
...withAliases(
  { slug: 'difference-between-jee-main-and-advanced', term1: 'JEE Main', term2: 'JEE Advanced', ... },
  'jee-main-vs-jee-advanced',
  'jee-main-vs-advanced',
),
...withAliases(
  { slug: 'difference-between-jee-and-neet', term1: 'JEE', term2: 'NEET', ... },
  'neet-vs-jee',
  'jee-vs-neet',
  'neet-vs-jee-which-is-harder',
  'neet-vs-jee-comparison',
),
```

**Effort:** 30 minutes including testing.

---

## Option B — `next.config.ts` redirects (FALLBACK if Option A has SEO issues)

Less ideal because all alias URLs 301-redirect to the canonical, losing the lexical-match benefit on the alias URL. But useful as a fallback if `[...slug]` route resolution doesn't handle duplicate slugs cleanly.

```typescript
// Add to next.config.ts in the redirects() function:
{
  source: '/jee-main-vs-jee-advanced',
  destination: '/difference-between-jee-main-and-advanced',
  permanent: true,
},
{
  source: '/jee-main-vs-advanced',
  destination: '/difference-between-jee-main-and-advanced',
  permanent: true,
},
{
  source: '/neet-vs-jee',
  destination: '/difference-between-jee-and-neet',
  permanent: true,
},
{
  source: '/jee-vs-neet',
  destination: '/difference-between-jee-and-neet',
  permanent: true,
},
{
  source: '/neet-vs-jee-which-is-harder',
  destination: '/difference-between-jee-and-neet',
  permanent: true,
},
```

**Effort:** 15 minutes. Use only if Option A doesn't work.

---

## Option C — Hybrid (Option A for primary alias, Option B for variants)

This is what most well-indexed sites do:

1. **Option A** — duplicate-slug the *primary* alternative phrasing (`jee-main-vs-jee-advanced`, `neet-vs-jee`). These get independent indexing.
2. **Option B** — 301-redirect long-tail variants (`neet-vs-jee-which-is-harder`, `jee-vs-neet`) to whichever primary slug ranks better.

This gives you 2 indexable URLs per topic (high-volume primary phrasings) and consolidated authority on variants.

---

## After implementing aliases — verification checklist

1. **Run `npm run build`** and verify no slug collision errors.
2. **Test routes locally** — visit `/jee-main-vs-jee-advanced` and `/difference-between-jee-main-and-advanced` in dev. Both should render the same content with their own canonical URL.
3. **Check `<link rel="canonical">`** — each page's canonical should be itself (not pointing to the diff-between form). This is what gives independent indexing.
4. **Add both slugs to `app/sitemap.xml/route.ts`** — run `npm run update-sitemap` or manually add the URL lines.
5. **Submit URL inspect** in Google Search Console for each new alias URL.

---

## Expected indexing timeline

- New alias URLs typically index within 7-14 days of GSC URL inspection.
- Featured Snippet attribution typically follows 14-28 days post-indexing.
- The first ranking competitor on "jee main vs jee advanced" is byjus.com. They have DA 84; we have suppressed authority during spam recovery. Compound timeline: ~6-8 weeks to first FS attempt on alias URLs, assuming content quality stays ahead of byjus on freshness + structured snippets.

---

## Related: future-proofing for the next "ExamInfoPage" + "DifferenceBetweenPage" entries

To avoid this slug-mismatch problem going forward:

1. **Always check Google query volume for slug phrasing** before adding a new entry. Use Search Console "Performance" filtered by the topic to see actual phrasings users search.
2. **Default to the higher-volume phrasing as the primary slug** and add the "difference-between-X" form as an alias.
3. **Use a `metaSlugAliases` field** in the data schemas to formalise this pattern. (Out of scope for this cycle; raise as a tech-debt item.)

---

## Summary

| Alias slug | Source canonical | Volume estimate | Effort |
|---|---|---|---|
| `/jee-main-vs-jee-advanced` | `/difference-between-jee-main-and-advanced` | 22K/mo | 10 min |
| `/jee-main-vs-advanced` | `/difference-between-jee-main-and-advanced` | 4K/mo | 5 min |
| `/neet-vs-jee` | `/difference-between-jee-and-neet` | 33K/mo | 10 min |
| `/jee-vs-neet` | `/difference-between-jee-and-neet` | 18K/mo | 5 min |
| `/neet-vs-jee-which-is-harder` | `/difference-between-jee-and-neet` | 3.2K/mo | 5 min |

**Total effort:** 35 minutes (Option A) or 15 minutes (Option B). Either way, this is the highest leverage-per-minute work in the cycle.
