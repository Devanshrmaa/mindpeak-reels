

## Competitor SEO Analysis & Strategy to Build Missing Page Types

### Competitor Crawl Summary

| Competitor | Key Page Types We're Missing |
|---|---|
| **Allen** (allen.ac.in) | City-specific course/fee pages (`/delhi/iit-jee-main-Advanced-coaching.asp`), Syllabus pages, Exam overview hubs (dates/eligibility/pattern/cutoff), Answer key pages, Sample papers, Results/achievements pages |
| **PW** (pw.live) | PYQ chapter-wise blog posts (`/blogs/jee-exams/jee-main-chapter-wise-pyq`), Study strategy blogs (`/vp-blogs/exams/...`), Exam info hubs (`/iit-jee/exams/jee-main-previous-year-question-papers`), Score strategy guides ("How to score 650+ in NEET") |
| **Vedantu** (vedantu.com) | City + exam coaching pages (`/offline-centres/delhi/coaching/jee`), Subject-wise important questions hubs, Chapter-wise revision notes, Subject-wise formulas hub, "Difference Between" pages, Preparation tips pages |
| **Aakash** (aakash.ac.in) | City hub pages (`/hyderabad-city`, `/kota-city/neet-ug-coaching`), Blog-style study material guides, NEET/JEE counselling guides, College predictor tools |
| **Byjus** (byjus.com) | Chapter-level formula pages, JEE notes per chapter, Important questions per chapter, Subject-wise concept pages |

### Gap Analysis: Page Types MindPeak Is Missing

MindPeak has strong practice/PYQ question pages and city coaching pages. But competitors dominate with **exam info hub pages** and **study material pages** that capture high-volume informational queries.

**Missing page categories (sorted by search volume impact):**

1. **Exam Info Hub Pages** — `/jee-main-syllabus-2026`, `/jee-main-exam-pattern`, `/jee-main-cutoff-2026`, `/neet-eligibility-2026`, `/jee-main-admit-card-2026`, `/neet-answer-key-2026`, `/jee-counselling-2026` (Allen, PW, Aakash, Vedantu ALL have these)
2. **Chapter-wise Revision Notes** — `/jee-physics-notes`, `/neet-biology-notes/cell-biology` (Vedantu, Byjus dominate)
3. **"Difference Between" Pages** — `/difference-between-jee-main-and-advanced`, `/difference-between-speed-and-velocity` (Vedantu has hundreds)
4. **Subject-wise Important Questions Hub** — `/jee-physics-important-questions`, `/neet-chemistry-important-questions` (Vedantu, Byjus)
5. **Exam Results & Answer Key Pages** — Annual pages updated each year (Allen, Aakash)
6. **College Predictor / Counselling Guide** — `/jee-main-college-predictor`, `/neet-counselling-guide-2026` (Allen, Aakash)

### Plan: 6 New Page Type Vectors (~2,000+ pages)

#### Vector 1: Exam Info Hub Pages (~30 pages) — HIGH PRIORITY
These capture massive search volume ("JEE Main syllabus 2026" = 100K+ monthly searches).

**New pages:**
- `/jee-main-syllabus-2026`, `/jee-advanced-syllabus-2026`, `/neet-syllabus-2026`
- `/jee-main-exam-pattern-2026`, `/jee-advanced-exam-pattern`, `/neet-exam-pattern`
- `/jee-main-cutoff-2026`, `/jee-advanced-cutoff-2026`, `/neet-cutoff-2026`
- `/jee-main-eligibility-2026`, `/neet-eligibility-2026`
- `/jee-main-admit-card-2026`, `/neet-admit-card-2026`
- `/jee-main-answer-key-2026`, `/neet-answer-key-2026`
- `/jee-main-result-2026`, `/neet-result-2026`
- `/jee-counselling-2026`, `/neet-counselling-2026`
- `/jee-main-registration-2026`, `/neet-registration-2026`
- `/jee-main-important-dates-2026`, `/neet-important-dates-2026`

**Implementation:**
- `src/data/examInfoData.ts` — Structured data for each exam info page (dates, tables, step-by-step guides)
- `src/views/ExamInfoPage.tsx` — Template view with info tables, timeline, FAQ, internal links
- Add to `seoPageData.ts` or create new routing in `QuestionSlugRouter.tsx`
- Year auto-updates via `CURRENT_EXAM_YEAR`

#### Vector 2: Chapter-wise Revision Notes (~150 pages)
Every chapter already exists in `chapterData.ts`. Add a `/notes/` sub-route.

**Route:** `/{chapter-slug}/notes` (e.g., `/jee-mechanics-kinematics/notes`)

**Implementation:**
- `src/views/RevisionNotesPage.tsx` — Template with key concepts, formulas summary, common mistakes, mind maps (text-based), mnemonics
- Content generated from existing `chapterData` (formulas, key topics) + programmatic expansion
- Links back to chapter page, practice questions, PYQs, formula sheet

#### Vector 3: "Difference Between" Pages (~200 pages)
Extremely high search volume for informational queries.

**Examples:** "difference between speed and velocity", "difference between atom and molecule", "difference between JEE Main and Advanced", "difference between mitosis and meiosis"

**Implementation:**
- `src/data/differenceBetweenData.ts` — Array of ~200 comparison pairs with structured content (comparison table, key points, FAQ)
- `src/views/DifferenceBetweenPage.tsx` — Template with comparison table, visual differences, exam relevance, related chapters
- Route: `/difference-between-{term1}-and-{term2}`

#### Vector 4: Subject-wise Important Questions Hub (~12 pages)
Hub pages linking to existing practice questions, organized by importance.

**Pages:** `/jee-physics-important-questions`, `/jee-chemistry-important-questions`, `/jee-mathematics-important-questions`, `/neet-physics-important-questions`, `/neet-chemistry-important-questions`, `/neet-biology-important-questions` + per-chapter variants

**Implementation:**
- `src/views/ImportantQuestionsHub.tsx` — Curated list pulling from existing practice banks, sorted by "most frequently asked" tag
- Links to individual question pages (distributes authority to existing 20K+ pages)

#### Vector 5: Counselling & College Predictor Guides (~20 pages)
Captures post-exam search traffic (massive volume after results).

**Pages:**
- `/jee-main-counselling-2026`, `/jee-advanced-counselling-2026`, `/neet-counselling-2026`
- `/jee-main-college-predictor`, `/neet-college-predictor` (interactive tool)
- `/top-engineering-colleges-india`, `/top-medical-colleges-india`
- `/jee-main-rank-vs-college`, `/neet-rank-vs-college`
- State-wise counselling: `/jee-counselling-maharashtra`, etc.

**Implementation:**
- `src/data/counsellingData.ts` — Structured data (cutoff ranks, college lists, dates)
- `src/views/CounsellingGuidePage.tsx` — Step-by-step guide with timeline, choice filling tips
- Enhance existing `RankPredictor` with college mapping

#### Vector 6: Exam Results & Answer Key Pages (~10 pages)
Annual pages that capture massive traffic spikes around exam dates.

**Pages:** `/jee-main-result-2026`, `/neet-result-2026`, `/jee-main-answer-key-2026`, `/neet-answer-key-2026`

**Implementation:**
- `src/data/examResultsData.ts` — Template with expected dates, how to check, direct links
- Auto-generates for `CURRENT_EXAM_YEAR` and `CURRENT_EXAM_YEAR - 1`
- CTA: "While you wait for results, start your next-year prep with a free demo"

### Files to Create/Modify

| File | Action |
|---|---|
| `src/data/examInfoData.ts` | **New** — 30 exam info page definitions |
| `src/views/ExamInfoPage.tsx` | **New** — Template for syllabus/pattern/cutoff/dates |
| `src/data/differenceBetweenData.ts` | **New** — 200 comparison pairs |
| `src/views/DifferenceBetweenPage.tsx` | **New** — Comparison template |
| `src/views/RevisionNotesPage.tsx` | **New** — Chapter notes template |
| `src/views/ImportantQuestionsHub.tsx` | **New** — Curated question hub |
| `src/data/counsellingData.ts` | **New** — Counselling/college data |
| `src/views/CounsellingGuidePage.tsx` | **New** — Counselling guide template |
| `src/data/examResultsData.ts` | **New** — Result/answer key data |
| `app/[...slug]/CatchAllClient.tsx` | **Modify** — Add routing for new page types |
| `src/lib/resolveSlugMetadata.ts` | **Modify** — Add metadata for new page types |
| `app/final3.xml/route.ts` | **Modify** — Include all new URLs in sitemap |

### Page Count Impact

| Vector | Pages |
|---|---|
| Exam info hubs | +30 |
| Chapter revision notes | +150 |
| Difference Between pages | +200 |
| Important questions hubs | +12 |
| Counselling & college guides | +20 |
| Exam results/answer keys | +10 |
| **Total new pages** | **~420** |

These are **high-authority informational pages** that capture the top-of-funnel traffic competitors currently own. Each page funnels users to MindPeak's coaching via contextual CTAs.

### Priority Order
1. Exam Info Hub Pages (highest search volume, fastest ROI)
2. Difference Between Pages (easy to generate, massive long-tail volume)
3. Chapter Revision Notes (leverages existing chapter data)
4. Important Questions Hubs (strengthens existing question page authority)
5. Counselling Guides (seasonal but massive traffic spikes)
6. Results/Answer Key Pages (seasonal, low effort)

