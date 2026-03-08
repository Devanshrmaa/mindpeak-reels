

## Strategy: Average Position 10 → Top 5

### Diagnosis

Average position 10 means pages are indexed and have some authority, but Google sees competitors as more relevant/authoritative. After auditing the codebase, the root causes are:

1. **Thin topical depth on hub pages** — JEECoaching, NEETCoaching, and Subject pages are content-rich but lack the "pillar page" structure Google rewards (no Table of Contents, no jump-links, no long-form comprehensive guides)
2. **No `Article`/`BlogPosting` schema on content pages** — Chapter pages, topic pages, and blog posts lack proper Article JSON-LD with `datePublished`/`dateModified`, losing freshness signals to Google
3. **Homepage has zero SSR text** — `Index.tsx` is 100% client-rendered with dynamic imports. Google sees a spinner, not content. The most important page has no crawlable H1 or body text
4. **No Table of Contents (ToC) with jump links** — Long-form pages (coaching, chapters, subjects) lack anchor-linked ToC sections. Google uses these for "jump to" sitelinks in SERP, which boost CTR and position
5. **Weak internal linking mesh between question pages** — 20,000+ question pages link to hub/coaching but rarely cross-link to sibling questions or related chapters, creating orphan-like topology
6. **No `SameAs` or `mentions` entity linking** — Pages reference JEE/NEET/NTA but don't use schema entity linking, missing topical authority signals
7. **Blog posts missing structured data entirely** — `BlogPost.tsx` has no JSON-LD at all (no BlogPosting, no author, no dates)

### Plan (7 Changes)

#### 1. Make homepage SSR-crawlable
**File:** `app/page.tsx` + `src/views/Index.tsx`

Add a server-rendered `<section>` with the H1, key description paragraph, and stat highlights directly in `app/page.tsx` (not behind dynamic imports). This ensures Googlebot sees 200+ words of core content without JS execution. Keep the animated hero for users but add a `<noscript>` / SSR fallback with the same text.

#### 2. Add Table of Contents with jump links to all long-form pages
**New file:** `src/components/TableOfContents.tsx`

Create a sticky/collapsible ToC component that auto-generates anchor links from section headings. Integrate into:
- `SEOLandingPage.tsx` (all 14+ pages)
- `JEECoaching.tsx` / `NEETCoaching.tsx`
- `ChapterPage.tsx`
- `SubjectPage.tsx`

This enables Google's "jump to" SERP feature and improves dwell time.

#### 3. Add Article/BlogPosting JSON-LD to all content pages
**Files:** `BlogPost.tsx`, `ChapterPage.tsx`, `TopicPage.tsx`, `SEOLandingPage.tsx`

Add proper `Article` or `BlogPosting` schema with `headline`, `author`, `datePublished`, `dateModified`, `image`, and `publisher`. Use the deterministic freshness date from `getLastUpdated()` for `dateModified`. This gives Google explicit freshness and authorship signals.

#### 4. Strengthen internal cross-linking on question pages
**Files:** `JEEPracticeQuestion.tsx`, `NEETPracticeQuestion.tsx`, `JEEPYQQuestion.tsx`, `NEETPYQQuestion.tsx`

Add a "Related Questions" section at the bottom of every question page linking to 3-5 sibling questions (same chapter, different difficulty or topic). Also add "Next Chapter" and "Previous Chapter" navigation links. This distributes PageRank across 20,000+ question pages instead of funneling it all to hubs.

#### 5. Add `HowTo` schema to methodology and study plan pages
**Files:** `app/methodology/page.tsx`, `app/study-plan/page.tsx`

These pages describe step-by-step processes — perfect candidates for HowTo rich results. Add `HowTo` JSON-LD with named steps, which can appear as rich snippets and dramatically improve position for "how to prepare for JEE" queries.

#### 6. Add NTA/exam entity references in schema
**Files:** `resolveSlugMetadata.ts`, coaching page views

Add `about` and `mentions` properties to page schemas referencing well-known entities (NTA, JEE Main, JEE Advanced, NEET-UG) using their Wikipedia/Wikidata URIs. This strengthens topical relevance signals:
```json
"about": [
  { "@type": "Thing", "name": "JEE Main", "sameAs": "https://en.wikipedia.org/wiki/Joint_Entrance_Examination_%E2%80%93_Main" }
]
```

#### 7. Add `BlogPosting` schema + author markup to all blog posts
**File:** `src/views/BlogPost.tsx`

Currently zero structured data. Add full BlogPosting JSON-LD with author, datePublished, wordCount, and article sections.

### Files to modify

| File | Change |
|---|---|
| `app/page.tsx` | Add SSR-rendered H1 + intro paragraph for crawlability |
| `src/components/TableOfContents.tsx` | **New** — Auto-generated ToC with anchor links |
| `src/views/SEOLandingPage.tsx` | Add ToC + Article JSON-LD |
| `src/views/JEECoaching.tsx` | Add ToC + entity `about`/`mentions` schema |
| `src/views/NEETCoaching.tsx` | Add ToC + entity `about`/`mentions` schema |
| `src/views/ChapterPage.tsx` | Add ToC + Article JSON-LD with proper dates |
| `src/views/SubjectPage.tsx` | Add ToC component |
| `src/views/BlogPost.tsx` | Add BlogPosting JSON-LD with author + dates |
| `src/views/JEEPracticeQuestion.tsx` | Add sibling question cross-links |
| `src/views/NEETPracticeQuestion.tsx` | Add sibling question cross-links |
| `src/views/JEEPYQQuestion.tsx` | Add sibling question cross-links |
| `src/views/NEETPYQQuestion.tsx` | Add sibling question cross-links |
| `app/methodology/page.tsx` | Add HowTo JSON-LD |
| `app/study-plan/page.tsx` | Add HowTo JSON-LD |
| `src/lib/resolveSlugMetadata.ts` | Add entity `about` references to metadata |

### Expected Impact

| Change | Ranking Signal | Est. Position Lift |
|---|---|---|
| SSR homepage content | Crawlability fix | +2-3 positions for branded queries |
| Table of Contents | Dwell time + jump-to sitelinks | +1-2 positions |
| Article/BlogPosting schema | Freshness + authorship | +1-2 positions |
| Question cross-linking | Internal PageRank distribution | +1-3 positions for long-tail |
| HowTo schema | Rich snippet eligibility | +2-4 for "how to" queries |
| Entity linking | Topical authority | +1-2 positions |
| Blog structured data | Content classification | +1-2 for blog queries |

Combined target: **Position 10 → Position 4-6 within 4-8 weeks** as Google re-crawls and re-evaluates.

