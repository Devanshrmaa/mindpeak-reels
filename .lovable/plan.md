

## Plan: Expand Other Exam Pages to JEE/NEET Quality

### Problem
- 5 exam coaching pages from the registry have NO SEO page data: `srmjeee-coaching`, `kcet-coaching`, `ap-eamcet-coaching`, `ts-eamcet-coaching`, `olympiad-coaching`
- Existing 8 other exam pages (BITSAT, CUET, etc.) have ~200-300 words — far below the 1,000+ word target and nowhere near JEE/NEET page quality
- SEOLandingPage view doesn't show FreshnessBadge
- No city+exam combination pages for these exams
- final3.xml lists URLs that don't resolve to pages

### Changes

#### 1. Add 5 missing SEO pages in `src/data/seoPageData.ts`
Create full SEO page entries for SRMJEEE, KCET, AP EAMCET, TS EAMCET, and Olympiad coaching. Each with 6-8 sections, 6+ FAQs, exam pattern tables, chapter weightage tables, study strategy sections, common mistakes, and backlinks — targeting 1,200+ words per page. Content pulled from the rich `examRegistry.ts` data.

#### 2. Expand existing 8 exam pages to 1,000+ words
Rewrite BITSAT, CUET, WBJEE, MHT-CET, KVPY, ISI Entrance, COMEDK, VITEEE entries with:
- 6-8 content sections (not 2-3)
- Detailed syllabus weightage tables
- Chapter-wise study plans
- Common mistakes section
- Study strategy phases (like JEE page's 4-phase approach)
- Comparison with JEE/NEET
- 6+ FAQs (not 1-2)
- 6+ related page backlinks
- Unique, creative content per exam (no paragraph dumping)

#### 3. Add FreshnessBadge to SEOLandingPage view (`src/views/SEOLandingPage.tsx`)
Import and render `FreshnessBadge` + `getLastUpdated` + `getCurrentExamYear` in the hero section, same pattern as JEECoaching.tsx.

#### 4. Add exam-specific blogs in `src/lib/programmaticBlogs.ts`
The blog generators (categories 18-22) already generate posts for all examRegistry exams. Verify no gaps exist. Add a new category: "Complete Guide to [Exam] — Syllabus, Pattern, Strategy" for each of the 14 exams (~14 posts).

#### 5. Update `app/final3.xml/route.ts` — audit for dead URLs
Ensure every static URL in the STATIC array resolves to an actual page. Remove any URLs for pages that don't exist (e.g., `/jee-physics-preparation`, `/jee-mock-test-strategy` if they have no backing component/data). Add the 5 new exam coaching URLs explicitly.

#### 6. Add city combinations for other exams
Update `src/data/cityData.ts` or the sitemap to support `/{exam}-coaching-in-{city}` for a subset of exams beyond JEE/NEET. The catch-all router and LocationPage already handle `{exam}-coaching-in-{city}` patterns — we need to ensure the location page component supports these exam slugs from the registry.

### File-by-file summary

| File | Action |
|------|--------|
| `src/data/seoPageData.ts` | Add 5 new pages, expand 8 existing to 1,000+ words each |
| `src/views/SEOLandingPage.tsx` | Add FreshnessBadge import and rendering in hero |
| `src/lib/programmaticBlogs.ts` | Add "Complete Guide" blog category (~14 posts) |
| `app/final3.xml/route.ts` | Audit dead URLs, ensure all static paths resolve |

### Content approach (no paragraph dumping)
Each page will use varied content structures:
- Tables (exam pattern, weightage, comparison)
- Bullet lists (mistakes, strategies, tips)
- Phased study plans (numbered phases with timelines)
- FAQ sections (6+ unique Q&As)
- Backlink grids (8+ related pages)

All dates use `getLastUpdated()` for auto-refresh with no future dates.

