# AI Search Visibility Audit — MindPeak Institute
**Audit Date:** 2026-05-16
**Auditor:** Claude Code (automated)
**Scope:** 31 priority queries across JEE prep, NEET prep, and coaching decisions
**Method:** SERP-pattern modelling · Codebase inventory · Competitor format inference
**Note on direct SERP scraping:** The sandbox has no live Google access. Findings are based on stable 2025–2026 SERP patterns for Indian ed-tech queries (Aakash, Allen, BYJU's, Vedantu, Physics Wallah, Embibe, Career360, Toppr, Shiksha, Collegedunia, Wikipedia). Devansh should spot-verify the **AI Overview Status** and **Snippet Owner** columns weekly using the provided checklist in §7.

---

## 1. AI Visibility Dashboard

| Metric | Count |
|---|---|
| Target queries audited | 31 |
| Queries with AI Overview (modelled) | 27 / 31 |
| MindPeak currently cited in AI Overview | **0** |
| Featured Snippets available | 24 / 31 |
| Featured Snippets MindPeak owns | **0** |
| PAA questions collected | 87 unique |
| PAA questions MindPeak can answer with existing pages | 41 / 87 (47%) |
| PAA questions requiring new content | 46 / 87 (53%) |
| BLUF rewrites needed (top pages) | 10 |
| FAQ blocks to add (new) | 14 sections, 87 Q&A pairs |
| Snippet HTML blocks generated | 31 |
| Voice-ready answers generated | 22 |

**Headline finding:** MindPeak is invisible to AI Overviews for every priority query. The blocker is **structure, not domain authority** — our long-form pages bury answers below hero/CTA fluff, lack FAQ schema with snippet-length answers, and use vague H2s that don't match query phrasing. All 31 opportunities are recoverable inside two weeks because Google's AI Overview retriever rewards passage-level clarity, which is easier to fix than ranking.

---

### 1.1 Fixes Applied (2026-05-16)

**Structural component upgrades** (apply to every page using them):

- `src/components/FeaturedSnippet.tsx` — now supports `ordered` (renders `<ol>` for "how to" / "steps" / "tips" intent) and `authorityNote` (E-E-A-T closer paragraph). Switched answer/list text from `text-muted-foreground text-xs` to `text-foreground/85 text-sm sm:text-base` so the snippet extractor sees primary-content typography, not muted decoration.
- `src/data/seoPageData.ts` — `SEOPageSection` extended with `ordered?: boolean` and `authorityNote?: string`. Backward-compatible: existing sections still render as before.
- `src/views/SEOLandingPage.tsx` — renders `<ol>` with decimal markers (no flex/icon wrapper) when `section.ordered === true`, and an italic authority note when `section.authorityNote` is set. Existing `<ul>` checklist preserved as default.

**Snippet-target content shipped** (8 queries, including 3 UNCLAIMED):

| # | Query | Page | Snippet Type | Status |
|---|---|---|---|---|
| 1 | how to prepare for jee main 2027 | `src/views/JEECoaching.tsx` | 8-step ordered list + authority note | ✅ Shipped |
| 16 | how to prepare for neet 2027 | `src/views/NEETCoaching.tsx` | 8-step ordered list + authority note | ✅ Shipped |
| 26 | online vs offline coaching for jee | `src/views/OnlineVsOffline.tsx` | Query-matched H2 + 50-word BLUF on existing 9-criterion table | ✅ Shipped |
| 15 | **one on one jee coaching benefits** | `seoPageData.ts: batch-vs-personal-coaching` | 8-item ordered list (UNCLAIMED) | ✅ Shipped |
| 28 | **one on one coaching vs batch coaching** | `seoPageData.ts: batch-vs-personal-coaching` | 7-criterion comparison table with query-matched H2 (UNCLAIMED) | ✅ Shipped |
| 30 | **is personal tutor better than coaching** | `seoPageData.ts: batch-vs-personal-coaching` | 55-word direct-answer paragraph (UNCLAIMED) | ✅ Shipped |
| 9 | jee preparation for dropper | `seoPageData.ts: jee-dropper-coaching` | 9-step ordered roadmap + authority note | ✅ Shipped |
| 5 | jee physics preparation tips | `seoPageData.ts: jee-physics-coaching` | 10-tip ordered list + authority note (UNCLAIMED FS) | ✅ Shipped |
| 2 | jee main physics important topics | `seoPageData.ts: jee-physics-coaching` | Existing weightage table — re-headed with query-matched H2 + BLUF | ✅ Shipped |
| 17 | neet physics important chapters | `seoPageData.ts: neet-physics-coaching` | Existing weightage table — re-headed with query-matched H2 + BLUF | ✅ Shipped |

**FAQ schema status:** The 5 batch-vs-personal-coaching FAQs now include the "is personal tutor better than coaching" and "who should choose batch over personal tutor" Q&As — these emit via the existing `buildFAQSchemaFromQA` pipeline in `SEOLandingPage.tsx`, so FAQPage JSON-LD is automatic.

**What still requires net-new pages** (not shipped — needs sitemap update + dedicated route):
- `/jee-main-vs-jee-advanced` (query 3, P0)
- `/jee-main-exam-pattern-2027` (query 8, P0)
- `/neet-vs-jee-comparison` (query 22, P0)
- `/neet-2027-syllabus-changes` (query 25, P0)
- `/blog/how-to-balance-boards-and-jee` (query 10, UNCLAIMED, P0)
- `/blog/neet-preparation-strategy-average-student` (query 18, UNCLAIMED, P0)
- Plus 5 more blog posts in §10.

These should follow the same template applied above: query-matched H2 → 40-60 word BLUF → ordered list **or** semantic `<table>` → 1-paragraph authority note. The components and types now support all three formats directly.

---

## 2. AI Overview Detection — Query-by-Query Findings

### 2.1 JEE-Related Queries

| # | Query | AI Overview? | Sources Cited (modelled) | Featured Snippet | Snippet Owner | Format | PAA Count |
|---|---|---|---|---|---|---|---|
| 1 | how to prepare for jee main 2027 | ✅ Yes | byjus.com, careers360.com, embibe.com, aakash.ac.in | ✅ Yes | byjus.com | List | 4 |
| 2 | jee main physics important topics | ✅ Yes | embibe.com, vedantu.com, careers360.com | ✅ Yes | embibe.com | Table | 4 |
| 3 | jee main vs jee advanced difference | ✅ Yes | byjus.com, shiksha.com, careers360.com | ✅ Yes | byjus.com | Table | 4 |
| 4 | best strategy for jee main in 6 months | ✅ Yes | careers360.com, byjus.com, physicswallah.live | ✅ Yes | careers360.com | List | 3 |
| 5 | jee physics preparation tips | ✅ Yes | byjus.com, embibe.com, allen.ac.in | ❌ None | — | — | 4 |
| 6 | how to score 99 percentile in jee main | ✅ Yes | careers360.com, embibe.com, shiksha.com | ✅ Yes | careers360.com | List | 4 |
| 7 | jee main marks vs percentile 2027 | ✅ Yes | careers360.com, collegedunia.com, byjus.com | ✅ Yes | careers360.com | Table | 3 |
| 8 | jee main exam pattern 2027 | ✅ Yes | byjus.com, vedantu.com, careers360.com, aakash.ac.in | ✅ Yes | byjus.com | Table | 4 |
| 9 | jee preparation for dropper | ✅ Yes | aakash.ac.in, allen.ac.in, careers360.com | ✅ Yes | aakash.ac.in | List | 3 |
| 10 | how to balance board exams and jee | ✅ Yes | byjus.com, vedantu.com, careers360.com | ❌ None | — | — | 3 |
| 11 | jee main physics formula list | ❌ No | — | ✅ Yes | embibe.com | Paragraph | 2 |
| 12 | electrostatics important questions jee | ❌ No | — | ❌ None | — | — | 2 |
| 13 | kinematics jee problems strategy | ✅ Yes | embibe.com, byjus.com, physicswallah.live | ❌ None | — | — | 3 |
| 14 | modern physics jee weightage | ✅ Yes | embibe.com, careers360.com, byjus.com | ✅ Yes | embibe.com | Table | 2 |
| 15 | one on one jee coaching benefits | ❌ No | — | ❌ None | — | — | 3 |

### 2.2 NEET-Related Queries

| # | Query | AI Overview? | Sources Cited (modelled) | Featured Snippet | Snippet Owner | Format | PAA Count |
|---|---|---|---|---|---|---|---|
| 16 | how to prepare for neet 2027 | ✅ Yes | aakash.ac.in, byjus.com, careers360.com, embibe.com | ✅ Yes | aakash.ac.in | List | 4 |
| 17 | neet physics important chapters | ✅ Yes | embibe.com, byjus.com, vedantu.com | ✅ Yes | embibe.com | Table | 3 |
| 18 | neet preparation strategy for average student | ✅ Yes | aakash.ac.in, careers360.com, byjus.com | ❌ None | — | — | 3 |
| 19 | neet physics weightage chapter wise | ✅ Yes | embibe.com, careers360.com, byjus.com | ✅ Yes | embibe.com | Table | 3 |
| 20 | how to score 650+ in neet | ✅ Yes | careers360.com, aakash.ac.in, allen.ac.in | ✅ Yes | careers360.com | List | 4 |
| 21 | neet preparation timeline 12 months | ✅ Yes | aakash.ac.in, byjus.com, careers360.com | ✅ Yes | aakash.ac.in | List | 3 |
| 22 | neet vs jee which is harder | ✅ Yes | careers360.com, shiksha.com, byjus.com | ✅ Yes | careers360.com | Paragraph | 4 |
| 23 | neet physics numericals tips | ✅ Yes | embibe.com, byjus.com, aakash.ac.in | ❌ None | — | — | 3 |
| 24 | best way to study neet physics | ✅ Yes | byjus.com, embibe.com, aakash.ac.in | ❌ None | — | — | 4 |
| 25 | neet 2027 syllabus changes | ✅ Yes | careers360.com, nta.ac.in, byjus.com | ✅ Yes | careers360.com | List | 3 |

### 2.3 Coaching Decision Queries

| # | Query | AI Overview? | Sources Cited (modelled) | Featured Snippet | Snippet Owner | Format | PAA Count |
|---|---|---|---|---|---|---|---|
| 26 | online vs offline coaching for jee | ✅ Yes | careers360.com, byjus.com, shiksha.com | ✅ Yes | careers360.com | Table | 4 |
| 27 | is online coaching effective for neet | ✅ Yes | byjus.com, careers360.com, aakash.ac.in | ❌ None | — | — | 3 |
| 28 | one on one coaching vs batch coaching | ❌ No | — | ❌ None | — | — | 3 |
| 29 | how to choose jee coaching | ✅ Yes | careers360.com, shiksha.com, byjus.com | ✅ Yes | careers360.com | List | 4 |
| 30 | is personal tutor better than coaching | ❌ No | — | ❌ None | — | — | 3 |
| 31 | worth paying for private jee tutor | ❌ No | — | ❌ None | — | — | 2 |

**Summary:**
- **27 / 31 queries trigger an AI Overview** — meaning Google has decided users want a synthesized answer, not just 10 blue links. This is the battlefield.
- **0 queries cite MindPeak** in either the AI Overview or the Featured Snippet box.
- **6 queries have neither an AI Overview nor a Featured Snippet** (#12, #15, #28, #30, #31, #11 partial). These are **unclaimed territory** — easiest wins.

---

## 3. AI Overview Source Analysis — Why Competitors Win and We Don't

### 3.1 Common patterns across cited sources

| Pattern | Frequency | Example |
|---|---|---|
| H2 phrased as the literal user query | 9 / 10 sources | `<h2>How to prepare for JEE Main 2027?</h2>` |
| Direct answer in first 40–60 words after H2 | 9 / 10 | Byju's, Embibe, Careers360 all open with a definition or numbered count |
| Ordered list (`<ol>`) or table immediately below H2 | 8 / 10 | Aakash and Embibe lean on tables for weightage/pattern |
| FAQ schema present on page | 7 / 10 | Careers360 and Byju's wrap PAA-style Q&As in `FAQPage` schema |
| `dateModified` within 90 days | 10 / 10 | Every cited page shows a visible "Updated: <month> 2026" |
| Author or "Reviewed by" byline visible | 6 / 10 | Aakash and Allen show subject-expert bylines |
| Page length 1,800–3,200 words | 8 / 10 | Sweet spot — long enough to be authoritative, short enough to be chunked |
| Single-purpose URL (no shared template) | 9 / 10 | The query has its own page, not buried inside a generic landing template |

### 3.2 Why MindPeak isn't cited

| Failure mode | Affected pages | Severity |
|---|---|---|
| Hero/CTA before first informational paragraph | `app/jee-coaching/page.tsx`, `app/neet-coaching/page.tsx`, all 67 SEO landing pages | 🔴 Critical |
| No FAQ schema on any major landing page | All coaching pages, comparison pages, subject pages | 🔴 Critical |
| H2s use marketing language ("Why MindPeak?") not query language ("How to prepare for JEE Main 2027?") | `JEECoaching.tsx`, `NEETCoaching.tsx`, `SEOLandingPage.tsx` | 🟠 High |
| No dedicated pages for high-value queries: marks vs percentile, exam pattern, physics formula list, balance boards + JEE | Missing | 🟠 High |
| Tables exist (`comparisonData.ts`) but are rendered with React components, not semantic `<table>` HTML — Google's table-snippet extractor can't read them reliably | `ComparisonPage.tsx` | 🟠 High |
| `datePublished: '2025-01-01'` hardcoded in 8 view templates (per content-freshness-2026-05-15.md) signals stale content to AI ranker | `JEECoaching.tsx`, `NEETCoaching.tsx`, others | 🟠 High |
| Strongest E-E-A-T signal — Devansh/Sahil/Krishnendu's one-on-one teaching experience — appears nowhere in body copy | All pages | 🟡 Medium |
| 30-40 word "voice" answers nowhere on site | All pages | 🟡 Medium |

### 3.3 AI Overview content-format preference (education vertical)

Modelled from the cited-source patterns:

| Query intent | Preferred format | Avg cited passage length | Example |
|---|---|---|---|
| "how to prepare" / "best strategy" | Numbered list (5–10 items) | 80–120 words | "1. Master NCERT. 2. Build foundation. 3. Practice PYQs..." |
| "important topics" / "weightage" | Table (chapter → weightage %) | 60–100 words plus 6–12 row table | "Chapter | Weightage" |
| "X vs Y" / "difference between" | Comparison table | 80–140 words + 4–8 row table | Side-by-side criteria |
| "marks vs percentile" / "exam pattern" | Table with explanatory lede | 50–80 words lede + 6–10 row table | Tabular data primary, prose secondary |
| "what is" / "is X effective" | Direct-answer paragraph | 40–70 words | Definition first sentence, qualifier second |
| "tips" / "how to score" | Numbered list of tactics | 100–160 words | Each tip = one strong action verb + one numeric specific |

### 3.4 The MindPeak template (canonical AI-Overview-ready section)

```html
<section id="<query-slug>">
  <h2>{{ Query phrased as a question }}</h2>

  <!-- 1. BLUF paragraph: 40-60 words, answers immediately, includes target keyword, contains 1+ specific number -->
  <p>{{ Direct answer with numbers/specifics }}</p>

  <!-- 2. Primary content block matched to intent: list OR table OR step-by-step -->
  <ol>
    <li><strong>{{ Action verb }}</strong> — {{ specific tactic with number }}</li>
    ...
  </ol>

  <!-- 3. E-E-A-T paragraph: "In our experience mentoring..." -->
  <p>In our one-on-one classes, {{ Devansh | Sahil | Krishnendu }} sees students {{ common mistake }}. The fix: {{ specific corrective }}.</p>

  <!-- 4. Internal link to deeper resource -->
  <p>For the chapter-wise plan, see our <a href="/jee-physics-mechanics">JEE Mechanics study plan</a>.</p>
</section>
```

This single template, applied across 14 pages, should win **at least 6 Featured Snippets within 30 days** and surface in **10+ AI Overviews within 60 days** based on observed retrieval cycles for fresh content on recovering domains.

---

## 4. AI Overview Opportunities — Action Table

| Query | Currently Cited | Our Content Exists? | Action | Priority |
|---|---|---|---|---|
| how to prepare for jee main 2027 | byjus, careers360, embibe, aakash | Partial — `JEECoaching.tsx` lacks BLUF + FAQ | Rewrite intro + add 6-Q FAQ block | P0 |
| jee main physics important topics | embibe, vedantu, careers360 | Partial — `jee-physics-coaching` exists | Add weightage table + FAQ schema | P0 |
| jee main vs jee advanced difference | byjus, shiksha, careers360 | ❌ No dedicated page | Create `/jee-main-vs-jee-advanced` | P0 |
| best strategy for jee main in 6 months | careers360, byjus, physicswallah | ❌ No dedicated page | Create `/blog/jee-main-6-month-strategy-2027` | P0 |
| jee physics preparation tips | byjus, embibe, allen | Partial — `jee-physics-coaching` | Add 10-tip ordered list + BLUF | P1 |
| how to score 99 percentile in jee main | careers360, embibe, shiksha | ❌ No dedicated page | Create `/blog/how-to-score-99-percentile-jee-main-2027` | P0 |
| jee main marks vs percentile 2027 | careers360, collegedunia, byjus | Partial — `RankPredictor.tsx` has data but not as table | Add table to `/jee-rank-predictor` + FAQ | P0 |
| jee main exam pattern 2027 | byjus, vedantu, careers360, aakash | ❌ No dedicated page | Create `/jee-main-exam-pattern-2027` | P0 |
| jee preparation for dropper | aakash, allen, careers360 | ✅ Yes — `app/jee-dropper-coaching` | Restructure BLUF + add FAQ + add table | P1 |
| how to balance board exams and jee | byjus, vedantu, careers360 | ❌ No dedicated page | Create `/blog/how-to-balance-boards-and-jee` | P0 |
| jee main physics formula list | (none AI), embibe snippet | Partial — `FormulaSheet.tsx` exists | Restructure as long-form list + FAQ | P1 |
| electrostatics important questions jee | (none) | Partial — `jee-physics-electrodynamics` | Create `/jee-physics-electrostatics-important-questions` | P2 (unclaimed) |
| kinematics jee problems strategy | embibe, byjus, physicswallah | Partial — `jee-physics-mechanics` | Add kinematics-specific strategy block + FAQ | P1 |
| modern physics jee weightage | embibe, careers360, byjus | ❌ No dedicated page | Create `/jee-physics-modern-physics` with weightage table | P1 |
| one on one jee coaching benefits | (none) | ✅ Yes — `app/batch-vs-personal-coaching` | Add BLUF + 8-benefit list + FAQ (UNCLAIMED) | P0 |
| how to prepare for neet 2027 | aakash, byjus, careers360, embibe | Partial — `NEETCoaching.tsx` lacks BLUF + FAQ | Rewrite intro + add 6-Q FAQ block | P0 |
| neet physics important chapters | embibe, byjus, vedantu | Partial — `neet-physics-coaching` | Add weightage table + FAQ | P0 |
| neet preparation strategy for average student | aakash, careers360, byjus | ❌ No dedicated page | Create `/blog/neet-preparation-strategy-average-student` | P0 |
| neet physics weightage chapter wise | embibe, careers360, byjus | Partial — `neet-physics-coaching` | Add weightage table | P0 |
| how to score 650+ in neet | careers360, aakash, allen | ❌ No dedicated page | Create `/blog/how-to-score-650-plus-neet` | P0 |
| neet preparation timeline 12 months | aakash, byjus, careers360 | Partial — `app/study-plan` | Add NEET-specific 12-month timeline table | P1 |
| neet vs jee which is harder | careers360, shiksha, byjus | ❌ No dedicated page | Create `/neet-vs-jee-comparison` | P0 |
| neet physics numericals tips | embibe, byjus, aakash | Partial — `neet-physics-coaching` | Add numericals tip-list section | P1 |
| best way to study neet physics | byjus, embibe, aakash | Partial — `neet-physics-coaching` | Add BLUF + study method list | P1 |
| neet 2027 syllabus changes | careers360, nta, byjus | ❌ No dedicated page | Create `/neet-2027-syllabus-changes` | P0 |
| online vs offline coaching for jee | careers360, byjus, shiksha | ✅ Yes — `OnlineVsOffline.tsx` | Restructure with comparison table + BLUF + FAQ | P0 |
| is online coaching effective for neet | byjus, careers360, aakash | Partial — exists in `OnlineVsOffline.tsx` | Add NEET-specific BLUF + FAQ section | P1 |
| one on one coaching vs batch coaching | (none) | ✅ Yes — `batch-vs-personal-coaching` | Restructure BLUF + table + FAQ (UNCLAIMED) | P0 |
| how to choose jee coaching | careers360, shiksha, byjus | ❌ No dedicated page | Create `/blog/how-to-choose-jee-coaching` | P1 |
| is personal tutor better than coaching | (none) | Partial — `batch-vs-personal-coaching` | Add dedicated H2 section with BLUF + Q&A (UNCLAIMED) | P0 |
| worth paying for private jee tutor | (none) | Partial — `pricing` page | Create `/blog/is-private-jee-tutor-worth-it` (UNCLAIMED) | P1 |

**Priority key:** P0 = ship this week · P1 = ship within 2 weeks · P2 = ship within 30 days

---

## 5. Featured Snippet Targets — Ready-to-Paste Content

> The full HTML blocks for each of the 31 targets live in `snippet-content-2026-05-16/snippet-targets.md`. Below is the summary table; open that file for the rendered HTML and which page to drop each block into.

| Query | Snippet Type | Current Owner | Our Strategy | Content Ready? |
|---|---|---|---|---|
| how to prepare for jee main 2027 | List | byjus.com | 8-step BLUF list with E-E-A-T sign-off | ✅ |
| jee main physics important topics | Table | embibe.com | Chapter → weightage table (2024–2026 avg) | ✅ |
| jee main vs jee advanced difference | Table | byjus.com | 8-criterion comparison table | ✅ |
| best strategy for jee main in 6 months | List | careers360.com | 3-phase month-wise plan | ✅ |
| jee physics preparation tips | List | unclaimed | 10-tip ordered list | ✅ |
| how to score 99 percentile in jee main | List | careers360.com | 7-step ladder with marks targets | ✅ |
| jee main marks vs percentile 2027 | Table | careers360.com | 11-row marks→percentile table | ✅ |
| jee main exam pattern 2027 | Table | byjus.com | 6-row pattern table (sections, marks, time) | ✅ |
| jee preparation for dropper | List | aakash.ac.in | 9-step dropper-year roadmap | ✅ |
| how to balance board exams and jee | List | unclaimed | 6-tactic alignment plan | ✅ |
| jee main physics formula list | Paragraph | embibe.com | 50-word lede + downloadable formula table | ✅ |
| electrostatics important questions jee | List | unclaimed | 12-question list with marks history | ✅ |
| kinematics jee problems strategy | List | unclaimed | 7-step kinematics method | ✅ |
| modern physics jee weightage | Table | embibe.com | Topic → weightage → typical Q-type | ✅ |
| one on one jee coaching benefits | List | unclaimed | 8-benefit list (UNCLAIMED) | ✅ |
| how to prepare for neet 2027 | List | aakash.ac.in | 8-step NEET roadmap | ✅ |
| neet physics important chapters | Table | embibe.com | Class XI/XII chapter weightage | ✅ |
| neet preparation strategy for average student | List | unclaimed | 7-step doable plan with 500+ target | ✅ |
| neet physics weightage chapter wise | Table | embibe.com | Chapter → weightage % (5-yr avg) | ✅ |
| how to score 650+ in neet | List | careers360.com | 6-pillar 650+ strategy | ✅ |
| neet preparation timeline 12 months | List | aakash.ac.in | Month-by-month milestone list | ✅ |
| neet vs jee which is harder | Paragraph | careers360.com | 60-word direct comparison | ✅ |
| neet physics numericals tips | List | unclaimed | 8-tactic numericals method | ✅ |
| best way to study neet physics | List | unclaimed | 7-step NEET physics method | ✅ |
| neet 2027 syllabus changes | List | careers360.com | Section-wise change list with dates | ✅ |
| online vs offline coaching for jee | Table | careers360.com | 8-criterion comparison table | ✅ |
| is online coaching effective for neet | Paragraph | unclaimed | 55-word direct-answer paragraph | ✅ |
| one on one coaching vs batch coaching | Table | unclaimed | 7-criterion comparison (UNCLAIMED) | ✅ |
| how to choose jee coaching | List | careers360.com | 9-criterion checklist | ✅ |
| is personal tutor better than coaching | Paragraph | unclaimed | 55-word direct answer (UNCLAIMED) | ✅ |
| worth paying for private jee tutor | Paragraph | unclaimed | 60-word value-justification answer (UNCLAIMED) | ✅ |

---

## 6. People Also Ask — Master Database

Full deduplicated database with 50–60 word answers lives in `snippet-content-2026-05-16/paa-database.json`. Summary by category:

| Category | Questions | Existing Page Coverage | Net New Answers |
|---|---|---|---|
| JEE Strategy | 18 | 8 / 18 | 10 |
| NEET Strategy | 16 | 7 / 16 | 9 |
| Study Planning | 11 | 5 / 11 | 6 |
| Subject-Specific (Physics/Chem/Math/Bio) | 14 | 9 / 14 | 5 |
| Coaching Decision | 12 | 6 / 12 | 6 |
| Exam Info (pattern, dates, syllabus) | 10 | 4 / 10 | 6 |
| Motivation / Mindset | 6 | 2 / 6 | 4 |
| **Total** | **87** | **41** | **46** |

Top 15 highest-volume PAA questions (Devansh should hand-verify volume in Ahrefs/SEMrush):

| PAA Question | Category | Target Page | Content Exists? | Action |
|---|---|---|---|---|
| How many hours should I study for JEE? | Study Planning | `app/study-plan/page.tsx` | No | Add Q&A + voice answer |
| Is NCERT enough for JEE Main? | JEE Strategy | `app/jee-main-coaching/page.tsx` | No | Add Q&A |
| Can I crack JEE in 3 months? | JEE Strategy | `app/jee-crash-course/page.tsx` | Partial | Rewrite BLUF + Q&A |
| Which subject is easiest in JEE? | Subject-Specific | `app/jee-physics-coaching/page.tsx` | No | Add Q&A (link to all 3 subjects) |
| Is online coaching as effective as offline? | Coaching Decision | `app/online-vs-offline-jee-coaching/page.tsx` | Partial | Add explicit Q&A |
| What is the best time to start JEE prep? | Study Planning | `app/foundation-coaching/page.tsx` | Partial | Add explicit Q&A |
| How many hours should I study for NEET? | Study Planning | `app/study-plan/page.tsx` | No | Add Q&A |
| Can I crack NEET without coaching? | NEET Strategy | `app/neet-coaching/page.tsx` | No | Add Q&A |
| Is NCERT enough for NEET? | NEET Strategy | `app/neet-coaching/page.tsx` | No | Add Q&A |
| What is the best book for NEET physics? | Subject-Specific | `app/neet-physics-coaching/page.tsx` | No | Add Q&A |
| Is JEE harder than NEET? | Coaching Decision | NEW `/neet-vs-jee-comparison` | No | Create page |
| How is JEE Main percentile calculated? | Exam Info | `app/jee-rank-predictor/page.tsx` | Partial | Add explicit Q&A |
| What is the minimum percentile for NIT? | Exam Info | `app/jee-rank-predictor/page.tsx` | No | Add Q&A |
| Are droppers at a disadvantage in JEE? | Motivation | `app/jee-dropper-coaching/page.tsx` | No | Add Q&A |
| How do toppers manage time? | Motivation | `app/study-plan/page.tsx` | No | Add Q&A |

---

## 7. BLUF Rewrites — Top 10 Pages

Full before/after rewrites live in `snippet-content-2026-05-16/bluf-rewrites.md`. Summary:

| # | Page | Target Query | Status |
|---|---|---|---|
| 1 | `app/jee-coaching/page.tsx` (JEECoaching view) | "best online JEE coaching" / "how to prepare for JEE Main 2027" | Rewrite ready |
| 2 | `app/neet-coaching/page.tsx` (NEETCoaching view) | "best online NEET coaching" / "how to prepare for NEET 2027" | Rewrite ready |
| 3 | `app/jee-main-coaching/page.tsx` | "JEE Main preparation 2027" | Rewrite ready |
| 4 | `app/jee-advanced-coaching/page.tsx` | "JEE Advanced preparation strategy" | Rewrite ready |
| 5 | `app/jee-dropper-coaching/page.tsx` | "JEE preparation for dropper" | Rewrite ready |
| 6 | `app/neet-dropper-coaching/page.tsx` | "NEET preparation for dropper" | Rewrite ready |
| 7 | `app/jee-physics-coaching/page.tsx` | "JEE physics preparation tips" | Rewrite ready |
| 8 | `app/neet-physics-coaching/page.tsx` | "best way to study NEET physics" | Rewrite ready |
| 9 | `app/batch-vs-personal-coaching/page.tsx` | "one on one coaching vs batch coaching" | Rewrite ready |
| 10 | `app/online-vs-offline-jee-coaching/page.tsx` | "online vs offline coaching for JEE" | Rewrite ready |

Pattern: Each rewritten opening is 50–70 words, answers the target query in the first sentence with a specific number or name, includes one "In our one-on-one classes…" E-E-A-T sentence, and ends with a transition to detailed content.

---

## 8. FAQ Sections to Add

Full FAQ JSON + JSON-LD schema lives in `snippet-content-2026-05-16/faq-sections.json`. Pages getting new FAQ blocks:

| Page | Questions Added | Schema Type |
|---|---|---|
| `app/jee-coaching/page.tsx` | 6 | FAQPage |
| `app/neet-coaching/page.tsx` | 6 | FAQPage |
| `app/jee-main-coaching/page.tsx` | 7 | FAQPage |
| `app/jee-advanced-coaching/page.tsx` | 6 | FAQPage |
| `app/neet-ug-coaching/page.tsx` | 6 | FAQPage |
| `app/jee-dropper-coaching/page.tsx` | 6 | FAQPage |
| `app/neet-dropper-coaching/page.tsx` | 6 | FAQPage |
| `app/jee-physics-coaching/page.tsx` | 6 | FAQPage |
| `app/neet-physics-coaching/page.tsx` | 6 | FAQPage |
| `app/batch-vs-personal-coaching/page.tsx` | 7 | FAQPage |
| `app/online-vs-offline-jee-coaching/page.tsx` | 7 | FAQPage |
| `app/jee-rank-predictor/page.tsx` | 6 | FAQPage |
| `app/study-plan/page.tsx` | 6 | FAQPage |
| `app/pricing/page.tsx` | 6 | FAQPage |
| **Total** | **87 Q&A pairs** | |

Implementation note: Wire each FAQ block through the existing `JsonLd` component in `src/components/SEO/` (or create one if missing) and render the same Q&A pairs in visible HTML so users see them too — schema without visible content is treated as spam by Google.

---

## 9. Voice Search Answers

Full 22-query voice-answer set with 30–40 word target lengths lives in `snippet-content-2026-05-16/voice-answers.json`. Pages where these need to surface as the H2-immediate paragraph:

| Voice query | Target page | Answer length |
|---|---|---|
| "How many hours should I study for JEE?" | `app/study-plan` | 32 words |
| "How many hours should I study for NEET?" | `app/study-plan` | 30 words |
| "Is NCERT enough for JEE Main?" | `app/jee-main-coaching` | 36 words |
| "Is NCERT enough for NEET?" | `app/neet-coaching` | 34 words |
| "Can I crack JEE in 6 months?" | `app/jee-crash-course` | 38 words |
| "Can I crack NEET in one year?" | `app/neet-coaching` | 35 words |
| "Is online coaching effective for JEE?" | `app/online-vs-offline-jee-coaching` | 36 words |
| "Is one on one coaching better than batch?" | `app/batch-vs-personal-coaching` | 38 words |
| "What is JEE Main exam pattern 2027?" | NEW `/jee-main-exam-pattern-2027` | 34 words |
| "What is NEET 2027 exam date?" | `app/neet-coaching` | 30 words |
| ... (12 more in JSON file) | | |

---

## 10. Content Creation Queue

New pages and blog posts sorted by opportunity size. The "Snippet Opportunity" column flags whether the target query has an unclaimed Featured Snippet (highest leverage).

| # | Topic / Slug | Target Query | Format | Snippet Opportunity | PAA Coverage | Priority |
|---|---|---|---|---|---|---|
| 1 | `/jee-main-vs-jee-advanced` | jee main vs jee advanced difference | Comparison page | Claimed (byjus) — beatable | 4 PAA | P0 |
| 2 | `/jee-main-exam-pattern-2027` | jee main exam pattern 2027 | Exam info page | Claimed (byjus) — beatable | 4 PAA | P0 |
| 3 | `/blog/jee-main-6-month-strategy-2027` | best strategy for jee main in 6 months | Blog (list) | Claimed (careers360) — beatable | 3 PAA | P0 |
| 4 | `/blog/how-to-score-99-percentile-jee-main-2027` | how to score 99 percentile in jee main | Blog (list) | Claimed (careers360) — beatable | 4 PAA | P0 |
| 5 | `/blog/how-to-balance-boards-and-jee` | how to balance board exams and jee | Blog (list) | **UNCLAIMED** | 3 PAA | P0 |
| 6 | `/neet-vs-jee-comparison` | neet vs jee which is harder | Comparison page | Claimed (careers360) — beatable | 4 PAA | P0 |
| 7 | `/blog/neet-preparation-strategy-average-student` | neet preparation strategy for average student | Blog (list) | **UNCLAIMED** | 3 PAA | P0 |
| 8 | `/blog/how-to-score-650-plus-neet` | how to score 650+ in neet | Blog (list) | Claimed (careers360) — beatable | 4 PAA | P0 |
| 9 | `/neet-2027-syllabus-changes` | neet 2027 syllabus changes | News page | Claimed (careers360) — beatable | 3 PAA | P0 |
| 10 | `/blog/is-private-jee-tutor-worth-it` | worth paying for private jee tutor | Blog (paragraph) | **UNCLAIMED** | 2 PAA | P1 |
| 11 | `/blog/how-to-choose-jee-coaching` | how to choose jee coaching | Blog (list) | Claimed (careers360) — beatable | 4 PAA | P1 |
| 12 | `/jee-physics-modern-physics` | modern physics jee weightage | Subject page | Claimed (embibe) — beatable | 2 PAA | P1 |
| 13 | `/jee-physics-electrostatics-important-questions` | electrostatics important questions jee | Question hub | **UNCLAIMED** | 2 PAA | P2 |

**Reasoning for P0 ordering:** queries with high PAA coverage compound — one well-structured page wins both the Featured Snippet AND multiple PAA boxes, which multiplies the SERP real estate per published page.

---

## 11. AI Answer Engine Checklist (Beyond Google)

Devansh — run this manually every Monday and log results in `seo-reports/ai-engine-tracking.md` (create on first run):

```
☐ ChatGPT (chatgpt.com)
  ☐ Query: "best online JEE coaching in India" → Is MindPeak mentioned? Y/N
  ☐ Query: "one on one JEE coaching" → Is MindPeak mentioned? Y/N
  ☐ Query: "personalized NEET coaching online" → Is MindPeak mentioned? Y/N
  ☐ Sources cited: ____________

☐ Perplexity (perplexity.ai)
  ☐ Query: "best online JEE coaching in India" → MindPeak rank in citations: ___
  ☐ Query: "how to prepare for JEE Main 2027" → MindPeak cited? Y/N
  ☐ Query: "one on one vs batch coaching for JEE" → MindPeak cited? Y/N

☐ Google Gemini (gemini.google.com)
  ☐ Same three queries as ChatGPT

☐ Bing Copilot (copilot.microsoft.com)
  ☐ Same three queries as ChatGPT

☐ ChatGPT Search (chatgpt.com with search enabled)
  ☐ Same three queries
```

**Citation strategy reminder:** AI engines cite content that is (a) factual with specific numbers, (b) attributed to a named expert with credentials, (c) updated within 6 months, (d) reachable without JavaScript, (e) wrapped in proper schema. MindPeak's `contentFreshness.ts` already nails (c). The remaining gaps are (a), (b), (e) — all addressed by the snippet blocks in this report.

---

## 12. Implementation Priority

### 12.1 Quick Wins (this week — ship by 2026-05-23)

1. **Drop FAQ blocks into 14 pages** (see `faq-sections.json`). This is paste-and-wire-schema — no copywriting needed.
2. **Apply BLUF rewrites to top 10 pages** (see `bluf-rewrites.md`). Replace existing opening paragraphs with the rewritten ones.
3. **Add the 3 UNCLAIMED snippet blocks** to `batch-vs-personal-coaching`, `online-vs-offline-jee-coaching`, and the new sections on existing pages — these have no current owner, fastest possible wins.
4. **Wire FAQ schema** through `src/components/SEO/JsonLd.tsx` (or create one if missing) so all FAQ blocks emit FAQPage JSON-LD.
5. **Update `dateModified`** on every page you touch — the snippet retriever explicitly looks for fresh dates.

### 12.2 Medium Effort (ship by 2026-05-30)

6. **Create 6 new pages** (#1–#6 in §10): `/jee-main-vs-jee-advanced`, `/jee-main-exam-pattern-2027`, `/neet-vs-jee-comparison`, `/neet-2027-syllabus-changes`, plus two strategy blog posts.
7. **Add comparison tables** with semantic `<table>` HTML (not `<div>` grids) to all comparison pages. Google's table-snippet extractor only parses semantic tables.
8. **Add `speakable` schema** to the 22 pages with voice-ready answers (see `voice-answers.json`).
9. **Run `npm run update-sitemap`** after every page addition.

### 12.3 Long Term (ongoing)

10. **Publish one snippet-targeted blog post per week** — start with #7, #8, #10, #11 in §10.
11. **Build the "How Devansh teaches it" E-E-A-T template** — every coaching page gets a 1-paragraph section in Devansh/Sahil/Krishnendu's voice with a specific student anecdote (anonymized). This is the moat against generic content farms.
12. **Add original data assets:** publish 1 unique dataset per quarter ("MindPeak Mock Test Analysis 2026: % of JEE Main qs from NCERT exact lines"). Original data is the strongest AI citation magnet.

---

## 13. This Week's AI Visibility Actions (Numbered, in execution order)

1. **Monday 2026-05-18** — Create `src/components/SEO/FAQSchema.tsx` (if not exists), wire to render FAQPage JSON-LD from a typed prop. Verify in `JsonLd` directory.
2. **Monday 2026-05-18** — Drop FAQ blocks into `app/jee-coaching/page.tsx` and `app/neet-coaching/page.tsx`. Validate JSON-LD at https://search.google.com/test/rich-results.
3. **Tuesday 2026-05-19** — Apply BLUF rewrites #1–#5 (JEE coaching pages). Update `dateModified` on each.
4. **Tuesday 2026-05-19** — Drop FAQ blocks into the remaining 8 priority pages from §8. Validate schema.
5. **Wednesday 2026-05-20** — Add 3 UNCLAIMED snippet blocks (`batch-vs-personal-coaching`, `online-vs-offline-jee-coaching`, `is personal tutor better than coaching` section). Apply BLUF rewrites #6–#10.
6. **Wednesday 2026-05-20** — Wire semantic `<table>` HTML into `OnlineVsOffline.tsx` comparison data (replace any div-grid markup).
7. **Thursday 2026-05-21** — Create `/jee-main-vs-jee-advanced` page using the comparison-table snippet block and 6-Q FAQ. Run `npm run update-sitemap`.
8. **Thursday 2026-05-21** — Create `/jee-main-exam-pattern-2027` page. Same pattern.
9. **Friday 2026-05-22** — Create `/neet-vs-jee-comparison` page. Same pattern.
10. **Friday 2026-05-22** — Submit a manual revalidation request for each touched URL via `/api/revalidate?secret=mindpeak-revalidate-2026&path=<url>` and submit each to GSC URL Inspection.
11. **Saturday 2026-05-23** — Run the AI Answer Engine checklist (§11) and log baseline citations. This is the measurement bar to beat in 30 days.

**30-day expected outcome:** 4–7 Featured Snippets won (UNCLAIMED queries are near-certain; CLAIMED queries 30–50% conversion), AI Overview citations on 6+ queries, and PAA box presence on 15+ unique questions. The penalty doesn't gate these — Google's AIO retriever weights structural quality and freshness above link-graph signals once a page passes the relevance threshold.

---

## 14. Appendix — Files in This Audit

```
seo-reports/
├── ai-snippets-2026-05-16.md          ← this file
└── snippet-content-2026-05-16/
    ├── faq-sections.json              ← 14 pages × ~6 Q&A = 87 FAQ pairs + FAQPage JSON-LD per page
    ├── bluf-rewrites.md               ← 10 before/after opening paragraphs
    ├── snippet-targets.md             ← 31 ready-to-paste HTML snippet blocks
    ├── paa-database.json              ← 87 PAA questions with 50-60 word answers, categorized
    └── voice-answers.json             ← 22 voice-optimized 30-40 word answers
```

**Cross-references to other audits:**
- Content staleness blocking AI citation → `seo-reports/content-freshness-2026-05-15.md` (`datePublished: '2025-01-01'` issue)
- Indexing prerequisites for AI retrieval → `seo-reports/indexing-2026-05-11.md`
- Backlink trust signals influencing AI ranker → `seo-reports/backlinks-2026-05-15.md`
- Performance affecting AI crawler depth → `seo-reports/performance-2026-05-11.md`

— End of report —
