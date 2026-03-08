

# Plan: Scale to 20,000+ Real, Indexed Pages

## Current Inventory (~8,500 pages)

| Category | Count |
|---|---|
| Static/core/SEO landing | ~110 |
| Location pages (300 cities × 2 exams) | ~600 |
| Chapter topic pages | ~149 |
| JEE Practice questions | ~2,500 |
| JEE PYQ questions | ~2,000 |
| NEET Practice questions | ~2,000 |
| NEET PYQ questions | ~1,000 |
| NEET PYQ hub pages | ~100 |
| Blog posts | ~13 |
| Formula sheets | ~5 |
| **Current total** | **~8,500** |

**Critical bug:** `gen-final-sitemap.ts` only includes 20 city slugs, not the 300+ from `allCities`. Fixing this alone adds ~560 URLs.

## Gap: ~11,500 pages needed

---

## Vector 1: Subject-City Pages (~3,600 pages) -- NEW PAGE TYPE

Route pattern: `/{exam}-{subject}-coaching-in-{city}`
Example: `/jee-physics-coaching-in-jaipur`, `/neet-biology-coaching-in-patna`

- 300 cities × 6 subject combos (JEE: physics, chemistry, maths; NEET: physics, chemistry, biology) = **3,600 pages**
- Each page: subject weightage table, chapter-wise prep plan, local context, internal links to practice/PYQ/formula sheets, FAQs, testimonials
- Template-generated from city config + subject data (similar to `cityExpansion.ts` pattern)
- Eye-catching: animated stats, gradient cards, subject-specific icons, progress bars, chapter difficulty heatmaps

**Files:**
- `src/data/subjectCityData.ts` -- template generators for subject-city content (weightage tables, chapter plans, local context)
- `src/views/SubjectCityPage.tsx` -- new view component with rich interactive sections
- Update `QuestionSlugRouter.tsx` to detect `{exam}-{subject}-coaching-in-{city}` pattern
- Update `resolveSlugMetadata.ts` for SEO

**Internal links per page (contextual backlinks):**
- Link to city's main coaching page (`/jee-coaching-in-{city}`)
- Link to subject coaching page (`/jee-physics-coaching`)
- Link to relevant practice hub (`/jee-practice`)
- Link to relevant PYQ hub (`/jee-pyq`)
- Link to formula sheet (`/jee-physics-formulas`)
- Link to chapter pages (top 5 chapters for that subject)

---

## Vector 2: NRI City Pages (~200 pages) -- NEW

Route: `/{exam}-coaching-in-{nri-city}` and `/{exam}-{subject}-coaching-in-{nri-city}`

30 NRI hubs (Dubai, Singapore, London, New York, San Francisco, Toronto, Sydney, Melbourne, Kuala Lumpur, Doha, Abu Dhabi, Riyadh, Muscat, Bahrain, Hong Kong, Bangkok, Jakarta, Nairobi, Lagos, Berlin, Frankfurt, Amsterdam, Tokyo, Seoul, Auckland, Sharjah, Kuwait, Colombo, Kathmandu, Dhaka)

- 30 cities × 2 exams = 60 base pages
- 30 cities × 6 subjects = 180 subject-city pages
- **Total: ~240 pages**
- NRI-specific content: timezone scheduling, CBSE-aligned curriculum, IST class timings, NRI exam registration guidance
- Add to `cityExpansion.ts` with `isNRI: true` flag

---

## Vector 3: Programmatic Blog Posts (~1,000 pages) -- MASSIVE EXPANSION

**Student-perspective high-search topics (~500):**
- "How to prepare [chapter] for JEE/NEET" × 74 chapters = 148 posts
- "Best books for [subject] JEE/NEET" × 6 = 6
- "[Chapter] important questions" × 74 = 74
- "[Chapter] tips and tricks" × 74 = 74
- "JEE/NEET [year] paper analysis" × 10 years × 2 exams = 20
- "[Subject] revision in [N] days" × 12 combos = 12
- "Class 11 vs Class 12 weightage [exam]" × 2 = 2
- State-wise: "[State] JEE/NEET topper strategy" × 28 states = 28
- Monthly: "[Month] study plan for JEE/NEET" × 12 × 2 = 24 (auto-generated)
- Comparison: "[Institute A] vs [Institute B]" × 20 = 20
- "How to score 99 percentile in [subject]" × 6 = 6
- Subject-chapter deep dives × ~100

**Parent-perspective high-search topics (~200):**
- "Is online coaching good for [exam]?" × 2 = 2
- "How to choose JEE/NEET coaching for my child" × 2 = 2
- "Signs your child needs a mentor" × 1
- "Cost of JEE/NEET preparation [city]" × 30 top cities = 30
- "Parent guide to [exam] preparation" × 2 = 2
- "How to support JEE/NEET child at home" × 2 = 2
- "Is Kota coaching worth it from [city]?" × 20 = 20
- "Best coaching institute in [city] for [exam]" × 50 = 100
- "JEE/NEET coaching fees comparison [year]" × 2 = 2
- "How to track child's JEE/NEET progress" × 2 = 2
- General parent guides × ~30

**Implementation:**
- `src/lib/programmaticBlogs.ts` -- generators for each blog category
- Each post: 800-1200 words, markdown with tables, chapter data, internal links, FAQ schema
- Content includes: study tables, chapter weightage charts, do's/don'ts, weekly planners, comparison tables
- Update `blogResolver.ts` to merge programmatic posts
- Update routing to handle all blog slugs

---

## Vector 4: More Indian Cities (~400 more location pages)

Expand from ~300 to ~500 cities by adding:
- District headquarters from UP, Bihar, Rajasthan, MP, Maharashtra, Tamil Nadu, Karnataka, West Bengal, Gujarat, Kerala
- ~100 additional Tier 3 cities × 2 exams = ~200 base + ~200 subject-city = **~400 pages**

Add to `cityExpansion.ts` with the same template generator pattern.

---

## Vector 5: Fix Sitemap to Include Everything

Update `scripts/gen-final-sitemap.ts` (or create `gen-final2-sitemap.ts`) to:
- Import `allCities` and generate ALL city routes (not just 20 hardcoded slugs)
- Include subject-city pages
- Include NRI city pages
- Include all programmatic blog slugs
- Include NEET PYQ hub pages (chapter/unit/class)
- Output to `public/final2.xml`

---

## Content Quality Standards (Every Page)

Every page will have:
1. **Animated hero section** with gradient backgrounds and exam-specific icons
2. **Interactive elements**: collapsible FAQs, tabbed content, stat counters
3. **Data tables**: chapter weightage, year-wise analysis, fee comparison
4. **Contextual internal links** (not just footer links -- inline within content)
5. **FAQ schema** for Google rich results
6. **Breadcrumbs** linking to parent pages
7. **Related content widget** with 4-6 contextual links
8. **CTA sections** with demo booking

---

## Final Page Count

| Category | Pages |
|---|---|
| Existing (static, questions, chapters, hubs) | ~8,500 |
| Subject-city pages (300 cities × 6 subjects × 2 exams) | +3,600 |
| NRI cities (base + subject) | +240 |
| Programmatic blogs | +1,000 |
| Additional Tier 3 cities (base + subject) | +400 |
| Fix sitemap (already-existing pages not in sitemap) | +560 |
| **Remaining gap covered by additional question expansion** | +5,700 |
| **Total** | **~20,000** |

Note: The remaining ~5,700 gap can be filled by expanding JEE/NEET practice and PYQ question banks (adding more questions per chapter across all subjects -- each question = 1 page).

---

## Implementation Order

1. Create `src/data/subjectCityData.ts` (template generators for subject-city content)
2. Create `src/views/SubjectCityPage.tsx` (rich interactive view)
3. Add NRI cities to `src/data/cityExpansion.ts`
4. Add ~100 more Tier 3 Indian cities to `cityExpansion.ts`
5. Create `src/lib/programmaticBlogs.ts` (500+ student + 200+ parent blog generators)
6. Update `blogResolver.ts` to merge programmatic blogs
7. Update routing (`QuestionSlugRouter.tsx`, `resolveSlugMetadata.ts`) for new patterns
8. Create `scripts/gen-final2-sitemap.ts` importing ALL page sources
9. Expand question banks if needed to hit 20K target

