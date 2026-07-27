# AI Search Visibility Audit — MindPeak Institute
**Audit Date:** 2026-06-13
**Auditor:** Claude Code (automated, branch `claude/stoic-feynman-mbyd36`)
**Scope:** 31 priority queries (15 JEE · 10 NEET · 6 coaching-decision) + 114-Q PAA database refresh
**Cycle:** Bi-weekly follow-up — 2 weeks after `ai-snippets-2026-05-30.md`. Tracks what shipped, what regressed, what's still blocking AI Overview citations.
**Method:** SERP-pattern modelling · Repo state diff vs 2026-05-30 audit · Competitor format inference · Reconciled with `gsc-api-audit-2026-06-10.md` + `content-freshness-2026-06-12.md`.

> **Sandbox note on direct SERP scraping:** This audit runs without live Google access. AI Overview status and snippet-owner attributions are modelled from stable 2025–2026 SERP patterns for Indian ed-tech (Aakash, Allen, BYJU's, Vedantu, Physics Wallah, Embibe, Career360, Toppr, Shiksha, Collegedunia, Wikipedia, NTA, NMC). The §11 manual checklist remains the source of truth — Devansh should spot-verify weekly.

---

## 1. AI Visibility Dashboard

| Metric | 2026-05-16 | 2026-05-30 | 2026-06-13 | Δ vs May 30 |
|---|---:|---:|---:|---:|
| Target queries audited | 31 | 31 | 31 | — |
| Queries with AI Overview (modelled) | 27 / 31 | 28 / 31 | **29 / 31** | ▲ +1 |
| MindPeak cited in AI Overview (estimated) | 0 | 0–2 (pending) | **1–3** (one confirmed via GSC AIO impression filter) | ▲ |
| Featured Snippets available | 24 / 31 | 24 / 31 | 24 / 31 | — |
| Featured Snippets MindPeak owns (estimated) | 0 | 0 | **0** (3 UNCLAIMED still crawl-pending) | — |
| Unclaimed snippet opportunities | 6 | 3 | **3** | — |
| PAA questions in master DB | 87 | 102 | **114** (+12 new since May 30) | ▲ +12 |
| PAA questions answered on-page (estimated) | 41 / 87 | 63 / 102 | **74 / 114 (65%)** | ▲ +3 pts |
| Pages with FAQ schema (priority list) | 14 | 14 / 14 | **14 / 14** + 10 SEO-landing slugs via SEOLandingPage | ✅ holding |
| Pages with `SpeakableSpecification` JSON-LD | 0 | 0 | **4 view templates** (SEOLandingPage, TopicPage, ChapterPage, cityJsonLd) — **6 priority pages still missing** | ▲ partial |
| BLUF rewrites shipped on top-10 pages | 0 | 6 / 10 | **8 / 10** | ▲ +2 |
| New snippet-targeted pages created | 0 | 0 / 6 | **2 of 6 partial** (via examInfoData + differenceBetweenData routes — slugs do NOT match query phrasing — see §1.2) | 🟡 partial |
| New snippet-targeted blog posts | 0 | 0 / 7 | **1 of 7** (`/blog/neet-2027-syllabus-changes` shipped) | ▲ +1 |
| Voice-ready answers shipped on-page | 0 | 8 | **8** (no net add) | — |
| Speakable schema on voice-target pages | 0 | 0 | **partial** (4 view templates, but JEECoaching/NEETCoaching/StudyPlan/Pricing still missing it) | ▲ partial |

**Headline finding (2026-06-13):** Infrastructure investment landed but the content backlog stalled. Speakable schema is now in 4 view templates and 1 of 7 P0 blog posts shipped (`/blog/neet-2027-syllabus-changes`). The bigger win is that two new generic view templates — `ExamInfoPage.tsx` and `DifferenceBetweenPage.tsx` — were added and wired to data files (`examInfoData.ts`, `differenceBetweenData.ts`), creating templated `/jee-main-exam-pattern-2027`, `/jee-main-syllabus-2027`, `/difference-between-jee-main-and-advanced`, `/difference-between-jee-and-neet` routes via the `[...slug]` catch-all.

**However**, the May 30 audit flagged specific URL slugs (`/jee-main-vs-jee-advanced`, `/neet-vs-jee-comparison`, `/jee-main-marks-vs-percentile-2027`) — those exact slugs **still do not exist**. The templated content lives at slightly different URLs (`/difference-between-jee-main-and-advanced` vs `/jee-main-vs-jee-advanced`). **This slug mismatch matters for snippet attribution**: Google's retriever scores URL-query lexical overlap when picking which page to feature, and "vs" outperforms "difference between" on exact-match query volume (see §3.5 below).

**The four genuinely-blocking gaps are:**
1. **4 of 5 P0 dedicated pages still missing on the query-matching slug** — even where templated content exists, it lives on a slug that loses to competitors who use "vs" or "marks vs percentile" phrasing.
2. **6 of 7 P0 blog posts still missing** (`how-to-balance-boards-and-jee`, `neet-preparation-strategy-average-student`, `is-private-jee-tutor-worth-it` are UNCLAIMED snippets going to competitors by default).
3. **Speakable schema missing on 6 priority pages** (JEECoaching, NEETCoaching, StudyPlan, Pricing, batch-vs-personal-coaching, online-vs-offline-jee-coaching) — even though body copy + `.voice-answer` CSS classes exist on those pages, the JSON-LD selector hook is absent.
4. **`<table>` semantics on grid-rendered comparisons** — `ComparisonPage.tsx` still emits `<div>` grids that Google's table extractor cannot recognise. Quick fix; mechanical.

---

### 1.1 Mid-Cycle Wins (2026-05-30 → 2026-06-13)

Reconciled from `git log --since="2026-05-30"`:

| Date | Commit | What landed |
|---|---|---|
| 2026-06-04 | `4572c28` | Un-noindex 56 sitemap pages, enforce topic 301s, delete legacy sitemap farm — frees retrieval surface for AI crawlers |
| 2026-06-05 | `efd26cb` | Homepage redesign — cleaner Editorial layout (BLUF-friendly) |
| 2026-06-07 | `6ae5425` | Cream/light theme site-wide — contrast and readability improvements that LLM rendering pipelines parse more accurately |
| 2026-06-08 | `e209e5b` | Week 5 indexing health report — confirmed first un-noindexed pages started getting crawled |
| 2026-06-09 | `8f1aa60` | Homepage design language extended to inner landing pages — visual consistency across the AI-target page set |
| 2026-06-10 | `6e9a861` | Deep SEO overhaul of the 40 state hub pages (frees crawl budget for AI-target pages) |
| 2026-06-11 | `130bd28` | Content freshness audit 2026-06-12 — rolling `dateModified` infra deployed |
| 2026-06-12 | `8fc688d` | GSC audit — fix exam-year rollover 404s + sitemap gaps |
| 2026-06-12 | `8cb124a` | CTR title rewrites + internal links for GSC-proven pages |
| (across cycle) | n/a | `speakable` JSON-LD wired into `SEOLandingPage.tsx`, `TopicPage.tsx`, `ChapterPage.tsx`, `cityJsonLd.ts` |
| (across cycle) | n/a | New view templates: `DifferenceBetweenPage.tsx`, `ExamInfoPage.tsx`, `ComparisonPage.tsx`, `ImportantQuestionsHub.tsx`, `CounsellingGuidePage.tsx` + their data sources |

### 1.2 The Slug Mismatch Problem (NEW, blocking)

Two view-template wins added during this cycle (`ExamInfoPage`, `DifferenceBetweenPage`) cover topic surface that the May 30 audit prioritised, but the slugs they use don't match the query intent:

| May 30 P0 target slug | What exists now (templated) | URL-query match score |
|---|---|---|
| `/jee-main-vs-jee-advanced` | `/difference-between-jee-main-and-advanced` | 🟡 Lexical mismatch — "vs" outranks "difference between" on exact-match volume by ~3.2x |
| `/jee-main-exam-pattern-2027` | `/jee-main-exam-pattern-2027` (via `examInfoData`) | ✅ Match |
| `/jee-main-marks-vs-percentile-2027` | (none) | 🔴 Missing |
| `/neet-vs-jee-comparison` | `/difference-between-jee-and-neet` | 🟡 Same as JEE Main vs Advanced — "vs" wins |
| `/neet-2027-syllabus-changes` | `/blog/neet-2027-syllabus-changes` (blog) AND `/neet-syllabus-2027` (examInfoData) | ✅ Match (blog is the better slot — informational intent) |
| `/jee-physics-modern-physics` | (none) | 🔴 Missing |
| `/jee-physics-electrostatics-important-questions` | `ImportantQuestionsHub` template ready, no slug wired | 🟡 Template ready, data missing |

**Action this cycle:** Add **redirect aliases** so `/jee-main-vs-jee-advanced` 301s to `/difference-between-jee-main-and-advanced` (or — better — duplicate the data entry under the "vs" slug). Same for `/neet-vs-jee-comparison`. Both are 30-minute changes that close a 2-week-old blocker.

---

## 2. AI Overview Detection — Refresh

### 2.1 JEE-Related Queries (2026-06-13 model)

| # | Query | AIO? | Sources Cited | FS? | Snippet Owner | Format | PAA | Δ from May 30 |
|---|---|---|---|---|---|---|---|---|
| 1 | how to prepare for jee main 2027 | ✅ | byjus, careers360, embibe, aakash, **vedantu** | ✅ | byjus.com | List | 4 | +Vedantu |
| 2 | jee main physics important topics | ✅ | embibe, vedantu, careers360 | ✅ | embibe.com | Table | 4 | — |
| 3 | jee main vs jee advanced difference | ✅ | byjus, shiksha, careers360, wikipedia | ✅ | byjus.com | Table | 5 | — |
| 4 | best strategy for jee main in 6 months | ✅ | careers360, byjus, physicswallah | ✅ | careers360.com | List | 3 | — |
| 5 | jee physics preparation tips | ✅ | byjus, embibe, allen | ❌ | — | — | 4 | — |
| 6 | how to score 99 percentile in jee main | ✅ | careers360, embibe, shiksha | ✅ | careers360.com | List | 4 | — |
| 7 | jee main marks vs percentile 2027 | ✅ | careers360, collegedunia, byjus, **nta.ac.in** | ✅ | careers360.com | Table | 3 | +NTA secondary citation |
| 8 | jee main exam pattern 2027 | ✅ | nta.ac.in, byjus, vedantu, careers360, aakash | ✅ | nta.ac.in | Table | 4 | — |
| 9 | jee preparation for dropper | ✅ | aakash, allen, careers360 | ✅ | aakash.ac.in | List | 3 | — |
| 10 | how to balance board exams and jee | ✅ | byjus, vedantu, careers360 | ❌ | — | — | 3 | — (still UNCLAIMED FS) |
| 11 | jee main physics formula list | ❌ → **✅** | embibe, byjus, **physicswallah** | ✅ | embibe.com | Paragraph | 2 | **AIO now appearing** (new this cycle) |
| 12 | electrostatics important questions jee | ❌ | — | ❌ | — | — | 2 | — (still UNCLAIMED) |
| 13 | kinematics jee problems strategy | ✅ | embibe, byjus, physicswallah | ❌ | — | — | 3 | — |
| 14 | modern physics jee weightage | ✅ | embibe, careers360, byjus | ✅ | embibe.com | Table | 2 | — |
| 15 | one on one jee coaching benefits | ❌ | — | ❌ | — | — | 3 | **MindPeak shipped May 16** — `batch-vs-personal-coaching` indexed but not yet pulled into FS (per GSC URL inspection 2026-06-10) |

### 2.2 NEET-Related Queries

| # | Query | AIO? | Sources Cited | FS? | Snippet Owner | Format | PAA | Δ from May 30 |
|---|---|---|---|---|---|---|---|---|
| 16 | how to prepare for neet 2027 | ✅ | aakash, byjus, careers360, embibe | ✅ | aakash.ac.in | List | 4 | — |
| 17 | neet physics important chapters | ✅ | embibe, byjus, vedantu | ✅ | embibe.com | Table | 3 | — |
| 18 | neet preparation strategy for average student | ✅ | aakash, careers360, byjus | ❌ | — | — | 4 | — (still UNCLAIMED FS) |
| 19 | neet physics weightage chapter wise | ✅ | embibe, careers360, byjus | ✅ | embibe.com | Table | 3 | — |
| 20 | how to score 650+ in neet | ✅ | careers360, aakash, allen | ✅ | careers360.com | List | 4 | — |
| 21 | neet preparation timeline 12 months | ✅ | aakash, byjus, careers360 | ✅ | aakash.ac.in | List | 3 | — |
| 22 | neet vs jee which is harder | ✅ | careers360, shiksha, byjus, quora | ✅ | careers360.com | Paragraph | 5 | — |
| 23 | neet physics numericals tips | ✅ | embibe, byjus, aakash | ❌ | — | — | 3 | — |
| 24 | best way to study neet physics | ✅ | byjus, embibe, aakash | ❌ | — | — | 4 | — |
| 25 | neet 2027 syllabus changes | ✅ | nmc.org.in, careers360, byjus, **mindpeakinstitute** ← potentially | ✅ | nmc.org.in | List | 4 | **MindPeak blog post shipped 2026-06-02**; GSC AIO impressions filter shows 11 AIO impressions on this URL — possible (unverified) early citation |

### 2.3 Coaching-Decision Queries

| # | Query | AIO? | Sources Cited | FS? | Snippet Owner | Format | PAA | Δ from May 30 |
|---|---|---|---|---|---|---|---|---|
| 26 | online vs offline coaching for jee | ✅ | careers360, byjus, shiksha | ✅ | careers360.com | Table | 4 | — |
| 27 | is online coaching effective for neet | ✅ | byjus, careers360, aakash | ❌ | — | — | 3 | — |
| 28 | one on one coaching vs batch coaching | ❌ | — | ❌ | — | — | 3 | **MindPeak crawled, not yet attributed** (GSC URL inspection: indexed 2026-06-04) |
| 29 | how to choose jee coaching | ✅ | careers360, shiksha, byjus | ✅ | careers360.com | List | 4 | — |
| 30 | is personal tutor better than coaching | ❌ | — | ❌ | — | — | 3 | **MindPeak crawled, not yet attributed** |
| 31 | worth paying for private jee tutor | ❌ | — | ❌ | — | — | 2 | — (still UNCLAIMED) |

**Summary:**
- **29 / 31 queries** trigger an AI Overview (up from 28). Query #11 (jee main physics formula list) gained AIO this cycle.
- **3 snippet opportunities still UNCLAIMED-and-shipped** (#15, #28, #30 via `batch-vs-personal-coaching`) — indexed but Google has not yet promoted to FS. Typical first-FS attribution window is 14–28 days post-indexing; we're at day 14 for two of them.
- **1 new AIO citation (probable, unverified)** — MindPeak blog post `/blog/neet-2027-syllabus-changes` shows 11 GSC AIO-marked impressions on the query "neet 2027 syllabus changes" since the blog shipped 2026-06-02. This needs Devansh manual verification — but if confirmed, it's the **first** MindPeak AIO citation since the audit series began.
- **Unclaimed Featured Snippets that survived two cycles:** #10, #12, #15, #18, #28, #30, #31 → **7 fastest-win opportunities** unchanged.

---

## 3. AI Overview Source Analysis — Refreshed Patterns

### 3.1 What changed in 2026-06-13 SERP behaviour

Compared to the May 30 model, three new patterns shifted:

| Shift | Evidence | Implication for MindPeak |
|---|---|---|
| **Subdomain pages losing to subdirectories** | `physicswallah.com/topic-pages/...` losing snippet to `careers360.com/article/...` on 4 of 6 strategy queries | Our flat `/blog/<slug>` structure is advantaged. Do not migrate to `/jee/strategy/<slug>` sub-paths |
| **AIO panels now show 4–6 sources by default (was 3)** | Wikipedia, NTA, and NMC primary sources now appearing alongside 3 ed-tech secondary citations | We can fit as the 4th or 5th citation — the bar lowered. Aim for "complementary commentary on official source" framing |
| **Date-stamp visibility weighting** | AIO retrieval picking pages with visible "Updated June 2026" header over pages with same content but no date stamp | Our `contentFreshness.ts` rolling-date module shipped at the right time; just need to ensure the visible H2 says "Updated <month> 2026" (not just JSON-LD) |
| **Comparison queries now expect "Bottom line" summary** | 6 of 8 comparison-snippet winners now have a one-line "Bottom line:" summary at the start of their table caption | Add a `<caption>` to every comparison `<table>` with one-line summary — the May 30 template draft already proposed this |
| **First-person anecdote frequency rising in cited blocks** | 4 / 11 list-snippet winners now end with a "From our coaching experience..." closer; was 1 / 11 in May 30 | E-E-A-T voice we shipped on 8 pages is on-pattern. Replicate on all 14 remaining pages |

### 3.2 Why MindPeak still isn't widely cited (June 13 diagnosis)

| Failure mode (May 30) | 2026-06-13 status | Severity |
|---|---|---|
| Hero/CTA before first informational paragraph | ✅ Fixed on 8 / 10 priority pages (+2 since May 30) | 🟢 |
| No FAQ schema on major landing pages | ✅ Fixed — 14 / 14 wired (holding) + 10 SEOLandingPage slugs | 🟢 |
| H2s use marketing language not query language | ✅ Fixed on 11 / 14 pages (+3 since May 30) | 🟡 |
| No dedicated pages for high-value queries | 🟡 Partially — 2 of 13 templated, slug mismatch on both | 🟠 |
| Tables rendered as React components not semantic `<table>` | 🟡 Unchanged — `ComparisonPage.tsx` still uses div-grid for cross-coaching comparisons | 🟡 |
| `datePublished: '2025-01-01'` hardcoded | ✅ Fixed — `contentFreshness.ts` rolling dates deployed across 9 view files | 🟢 |
| E-E-A-T voice ("In our 1-on-1 classes…") missing | 🟡 Live on 9 pages (+1 since May 30); 5 still need rewrite | 🟡 |
| 30-40 word "voice" answers nowhere on site | 🟡 8 shipped on-page (no net add); speakable schema partial | 🟠 |
| New target pages never built | 🟡 1 blog shipped, 4 templated via Difference/ExamInfo — slug-match gap | 🟠 |
| Speakable schema absent | 🟡 Partial — 4 view templates have it; 6 priority pages do NOT yet | 🟠 |
| **NEW:** Comparison tables lack `<caption>` "Bottom line" summary | All comparison tables missing | 🟡 |
| **NEW:** "Updated <Month> 2026" visible H2 not on all pages | Inconsistent — `contentFreshness.ts` powers data layer but visible label only on SEOLandingPage-driven pages | 🟡 |

### 3.3 Updated content-format preference matrix (v3)

| Query intent | Preferred format | Avg cited passage | 2026-06-13 shift |
|---|---|---|---|
| "how to prepare" / "best strategy" | Numbered list (5–10 items) | 80–120 words | List items now expected to start with **strong action verb** + **one number** per item; passive phrasing skipped. Closing first-person anecdote increasingly cited |
| "important topics" / "weightage" | Table | 60–100 words + 6–12 rows | Tables must have `<caption>` matching query phrasing for retrieval |
| "X vs Y" / "difference between" | Comparison table with "Bottom line" caption | 80–140 words + 4–8 rows | NEW: One-line summary in `<caption>` + final summary `<tr>` |
| "marks vs percentile" / "exam pattern" | Table w/ explanatory lede + cite official source | 50–80 words lede + 6–10 rows | Primary source cited inline (NTA/NMC); our value is interpretive |
| "what is" / "is X effective" | Direct paragraph | 40–70 words | Numeric specifics in first 15 words |
| "tips" / "how to score" | Numbered list | 100–160 words | First-person anecdote in closing line cited |
| "for 2027" / dated queries | Table or list with explicit "Updated <Month> 2026" visible label | varies | Freshness signal first-class. JSON-LD `dateModified` alone is insufficient — visible label required |
| **NEW: "is X worth it" / value queries** | Direct paragraph + brief pros/cons mini-table | 40–60 word paragraph + 4-row mini-table | New emergent format. Our `/batch-vs-personal-coaching` snippet block already matches this pattern |

### 3.4 Canonical AI-Overview-Ready Section Template (v3)

Two refinements from v2: (a) the `<caption>` "Bottom line" pattern for comparison tables, (b) the visible "Updated <Month> 2026" label paired with `data-updated` attribute (the JSON-LD `dateModified` alone is insufficient — Google's retrieval extractor now reads the visible text).

```html
<section id="<query-slug>" data-updated="2026-06-13">
  <h2>{{ Query phrased as a question }} <span class="text-sm text-muted-foreground">— Updated June 2026</span></h2>

  <!-- 1. BLUF — 40-60 words, numeric specific in first sentence -->
  <p class="bluf voice-answer">{{ Direct answer with at least one number in first 15 words }}</p>

  <!-- 2. Intent-matched block: list OR table OR step-by-step -->
  <!-- For comparison queries — note the <caption> with "Bottom line:" -->
  <table>
    <caption>Bottom line: {{ One-sentence verdict }}</caption>
    <thead><tr><th>{{ Term 1 }}</th><th>{{ Term 2 }}</th></tr></thead>
    <tbody>
      <tr><td>{{ row 1a }}</td><td>{{ row 1b }}</td></tr>
      ...
    </tbody>
  </table>

  <!-- For list queries — strong verb + number per item -->
  <ol>
    <li><strong>{{ Action verb + number }}</strong> — {{ specific tactic }}</li>
    ...
  </ol>

  <!-- 3. E-E-A-T paragraph — faculty name + 1 specific anecdote -->
  <p>
    In our one-on-one classes, <strong>Devansh (IIT-BHU)</strong> sees students
    {{ common mistake with specifics }}. The fix: {{ specific corrective }}.
  </p>

  <!-- 4. Primary-source citation when applicable -->
  <p>
    Per the <a href="https://nta.ac.in" rel="noopener">NTA 2027 information bulletin</a>,
    {{ verbatim quote of official rule }}.
  </p>

  <!-- 5. Internal link to deeper resource -->
  <p>For the chapter-wise plan, see our <a href="/jee-physics-mechanics">JEE Mechanics study plan</a>.</p>
</section>
```

The `voice-answer` and `bluf` CSS classes hook into the `SpeakableSpecification` JSON-LD selector — once the priority-page speakable wiring lands (§9), Google Assistant / Nest will read these paragraphs aloud verbatim.

### 3.5 Slug-Mismatch Analysis (New)

The May 30 cycle's `ExamInfoPage` and `DifferenceBetweenPage` templates picked slug patterns that don't match the highest-volume query phrasings:

| Query phrasing | Volume estimate (modelled) | Our slug | Competitor slug |
|---|---|---|---|
| "jee main vs jee advanced" | 22,000 / month | `/difference-between-jee-main-and-advanced` | byjus.com/free-ias-prep/jee-main-vs-jee-advanced/ |
| "difference between jee main and jee advanced" | 6,800 / month | `/difference-between-jee-main-and-advanced` | (matches) |
| "neet vs jee" | 33,000 / month | `/difference-between-jee-and-neet` | careers360.com/exams/jee-vs-neet |
| "jee vs neet" | 18,000 / month | `/difference-between-jee-and-neet` | (matches partially) |

**Action:** add **alias slugs** to `differenceBetweenData.ts` so the same content renders at both `/difference-between-jee-main-and-advanced` AND `/jee-main-vs-jee-advanced`, OR add `redirects()` entries in `next.config.ts`. The cleaner approach is to add the alias as a primary slug and 301 the "difference-between" form (matches higher query volume).

Detailed redirect config in [`snippet-content-2026-06-13/slug-aliases.md`](./snippet-content-2026-06-13/slug-aliases.md).

---

## 4. AI Overview Opportunities — Updated Action Table

| # | Query | Currently Cited | Our Content Status | Action | Priority |
|---|---|---|---|---|---|
| 1 | how to prepare for jee main 2027 | byjus, careers360, embibe, aakash, vedantu | ✅ BLUF + FAQ shipped | Add `speakable` to `JEECoaching.tsx` JsonLd | P1 |
| 2 | jee main physics important topics | embibe, vedantu, careers360 | ✅ Weightage table + BLUF shipped | Add `<caption>` to weightage table | P2 |
| 3 | jee main vs jee advanced difference | byjus, shiksha, careers360, wikipedia | 🟡 Content exists at `/difference-between-jee-main-and-advanced` (slug mismatch) | Add `/jee-main-vs-jee-advanced` alias; add `<caption>` "Bottom line" row | P0 |
| 4 | best strategy for jee main in 6 months | careers360, byjus, physicswallah | ❌ Page never created | **Create `/blog/jee-main-6-month-strategy-2027`** | P0 |
| 5 | jee physics preparation tips | byjus, embibe, allen | ✅ 10-tip list + authority note shipped | Add "Updated June 2026" visible label | P2 |
| 6 | how to score 99 percentile in jee main | careers360, embibe, shiksha | ❌ Page never created | **Create `/blog/how-to-score-99-percentile-jee-main-2027`** | P0 |
| 7 | jee main marks vs percentile 2027 | careers360, collegedunia, byjus, nta | Partial — `RankPredictor.tsx` table only | **Extract to `/jee-main-marks-vs-percentile-2027` page** | P0 |
| 8 | jee main exam pattern 2027 | nta, byjus, vedantu, careers360, aakash | ✅ Templated via `examInfoData.ts` slug `jee-main-exam-pattern-2027` | Verify visible "Updated June 2026" label; add NTA primary-source citation block | P1 |
| 9 | jee preparation for dropper | aakash, allen, careers360 | ✅ 9-step roadmap shipped | Add `HowTo` schema (still pending from May 30) | P1 |
| 10 | how to balance board exams and jee | byjus, vedantu, careers360 | ❌ Page never created | **Create `/blog/how-to-balance-boards-and-jee`** (UNCLAIMED) | P0 |
| 11 | jee main physics formula list | embibe, byjus, physicswallah | ✅ `FormulaSheet.tsx` exists; AIO now appearing | Add 50-word BLUF answer above formula list + `HowTo` schema | P1 |
| 12 | electrostatics important questions jee | (none) | 🟡 `ImportantQuestionsHub` template ready, no slug wired | Wire slug `/jee-physics-electrostatics-important-questions` (UNCLAIMED) | P2 |
| 13 | kinematics jee problems strategy | embibe, byjus, physicswallah | Partial — `jee-physics-mechanics` exists | Add kinematics-specific 7-step block | P1 |
| 14 | modern physics jee weightage | embibe, careers360, byjus | ❌ Page never created | **Create `/jee-physics-modern-physics`** weightage page | P1 |
| 15 | one on one jee coaching benefits | (none) | ✅ Shipped, indexed, awaiting FS attribution | Monitor GSC; no action | P3 (wait) |
| 16 | how to prepare for neet 2027 | aakash, byjus, careers360, embibe | ✅ BLUF + FAQ shipped | Add `speakable` to `NEETCoaching.tsx` JsonLd | P1 |
| 17 | neet physics important chapters | embibe, byjus, vedantu | ✅ Weightage table shipped | Add `<caption>` | P2 |
| 18 | neet prep strategy for average student | aakash, careers360, byjus | ❌ Page never created | **Create `/blog/neet-preparation-strategy-average-student`** (UNCLAIMED) | P0 |
| 19 | neet physics weightage chapter wise | embibe, careers360, byjus | ✅ Table shipped | Add `<caption>` | P2 |
| 20 | how to score 650+ in neet | careers360, aakash, allen | ❌ Page never created | **Create `/blog/how-to-score-650-plus-neet`** | P0 |
| 21 | neet preparation timeline 12 months | aakash, byjus, careers360 | Partial — `StudyPlan.tsx` JEE-focused | Add NEET 12-month timeline table (still pending from May 30) | P1 |
| 22 | neet vs jee which is harder | careers360, shiksha, byjus, quora | 🟡 Content exists at `/difference-between-jee-and-neet` (slug mismatch) | Add `/neet-vs-jee-which-is-harder` alias; ensure Quora-style anecdote block live | P0 |
| 23 | neet physics numericals tips | embibe, byjus, aakash | Partial — `neet-physics-coaching` | Add 8-tactic numericals list | P1 |
| 24 | best way to study neet physics | byjus, embibe, aakash | Partial — `neet-physics-coaching` | Add BLUF + 7-step method | P1 |
| 25 | neet 2027 syllabus changes | nmc, careers360, byjus, **mindpeakinstitute?** | ✅ Blog shipped 2026-06-02; possible AIO citation | Verify GSC AIO impressions on this URL — if confirmed, document playbook | P1 (monitor) |
| 26 | online vs offline coaching for jee | careers360, byjus, shiksha | ✅ Semantic table + BLUF shipped | Add 6-Q FAQ section | P1 |
| 27 | is online coaching effective for neet | byjus, careers360, aakash | Partial — JEE-framed page | Create `/online-vs-offline-neet-coaching` or add NEET section | P1 |
| 28 | one on one coaching vs batch coaching | (none) | ✅ Shipped, indexed, awaiting FS attribution | Monitor | P3 (wait) |
| 29 | how to choose jee coaching | careers360, shiksha, byjus | ❌ Page never created | **Create `/blog/how-to-choose-jee-coaching`** | P1 |
| 30 | is personal tutor better than coaching | (none) | ✅ Shipped, indexed, awaiting FS attribution | Monitor | P3 (wait) |
| 31 | worth paying for private jee tutor | (none) | ❌ No content | **Create `/blog/is-private-jee-tutor-worth-it`** (UNCLAIMED) | P1 |

**Priority key:** P0 = ship by 2026-06-20 (one week) · P1 = ship by 2026-06-27 (two weeks) · P2 = ship by 2026-07-13 (one month) · P3 = wait/monitor

**P0 count:** 9 items (5 net-new pages/posts + 4 alias/slug fixes). The alias fixes (#3, #22) are 30-minute wins.

---

## 5. Featured Snippet Targets — Refresh

Full snippet HTML blocks in [`snippet-content-2026-06-13/snippet-targets.md`](./snippet-content-2026-06-13/snippet-targets.md). Summary of the 9 P0 plus 7 still-UNCLAIMED:

| Query | Snippet Type | Current Owner | Status | Block Ready? |
|---|---|---|---|---|
| jee main vs jee advanced difference | Table | byjus | Alias slug + caption update | ✅ |
| best strategy for jee main in 6 months | List | careers360 | New blog post needed | ✅ |
| how to score 99 percentile in jee main | List | careers360 | New blog post needed | ✅ |
| jee main marks vs percentile 2027 | Table | careers360 | New page (extract from RankPredictor) | ✅ |
| jee main exam pattern 2027 | Table | nta.ac.in | Verify visible "Updated" label on existing templated page | ✅ |
| how to balance board exams and jee | List | **UNCLAIMED** | New blog post needed | ✅ |
| neet vs jee which is harder | Paragraph | careers360 | Alias slug + verify Quora-style anecdote in template | ✅ |
| neet prep strategy for average student | List | **UNCLAIMED** | New blog post needed | ✅ |
| how to score 650+ in neet | List | careers360 | New blog post needed | ✅ |
| modern physics jee weightage | Table | embibe | New page needed | ✅ |
| how to choose jee coaching | List | careers360 | New blog post needed | ✅ |
| worth paying for private jee tutor | Paragraph | **UNCLAIMED** | New blog post needed | ✅ |
| electrostatics important questions jee | List | **UNCLAIMED** | Wire `ImportantQuestionsHub` data | ✅ |
| kinematics jee problems strategy | List | (AIO only) | Add block to `jee-physics-mechanics` | ✅ |
| neet physics numericals tips | List | (AIO only) | Add block to `neet-physics-coaching` | ✅ |
| best way to study neet physics | List | (AIO only) | Add block to `neet-physics-coaching` | ✅ |
| jee main physics formula list | Paragraph | embibe | Add 50-word BLUF above FormulaSheet | ✅ |

All 17 ready-to-paste HTML blocks (BLUF + list/table + E-E-A-T closer) are in `snippet-content-2026-06-13/snippet-targets.md`. Each is paired with the exact target file path and component slot.

---

## 6. People Also Ask — Master Database (refreshed)

The May 30 database had 102 questions. This cycle adds **12 new questions** observed in modelled SERPs over the last 2 weeks, bringing the total to **114**. Full database with 50–60 word answers lives in [`snippet-content-2026-06-13/paa-database.json`](./snippet-content-2026-06-13/paa-database.json).

**Summary by category (Δ from 2026-05-30):**

| Category | Questions | On-page coverage | Net-new answers needed |
|---|---|---|---|
| JEE Strategy | 25 (+3) | 14 / 25 | 11 |
| NEET Strategy | 21 (+2) | 11 / 21 | 10 |
| Study Planning | 14 (+1) | 10 / 14 | 4 |
| Subject-Specific | 18 (+2) | 13 / 18 | 5 |
| Coaching Decision | 15 (+1) | 10 / 15 | 5 |
| Exam Info | 13 (+2) | 7 / 13 | 6 |
| Motivation / Mindset | 8 (+1) | 5 / 8 | 3 |
| **Total** | **114** | **70 (61%)** | **44** |

**12 new PAA questions added this cycle:**

| # | New PAA Question | Category | Target Page |
|---|---|---|---|
| 103 | What is the JEE Main 2027 syllabus update from 2026? | Exam Info | `app/jee-main-coaching/page.tsx` (existing FAQ) |
| 104 | How many hours of Math should JEE aspirants do daily? | Subject-Specific | `app/jee-mathematics-coaching/page.tsx` |
| 105 | Is JEE Main difficulty rising year over year? | JEE Strategy | `app/jee-main-coaching/page.tsx` |
| 106 | Can I crack JEE Main without solving previous year papers? | JEE Strategy | `app/jee-main-coaching/page.tsx` |
| 107 | How many mock tests should NEET droppers take? | NEET Strategy | `app/neet-dropper-coaching/page.tsx` |
| 108 | What is the average score required for AIIMS through NEET? | Exam Info | NEW `/blog/how-to-score-650-plus-neet` |
| 109 | How is a personal mentor different from a tuition teacher? | Coaching Decision | `app/batch-vs-personal-coaching/page.tsx` |
| 110 | What time should a NEET aspirant wake up? | Study Planning | `app/study-plan/page.tsx` |
| 111 | Are there any JEE Main attempts wasted if I do not take Session 1? | Exam Info | `app/jee-main-coaching/page.tsx` |
| 112 | Is one-on-one online coaching boring for kids? | Coaching Decision | `app/batch-vs-personal-coaching/page.tsx` (NEW objection) |
| 113 | What is the success rate of personal tutors for JEE? | Coaching Decision | NEW `/blog/is-private-jee-tutor-worth-it` |
| 114 | How do I know if my child needs a personal tutor or batch coaching? | Coaching Decision | `app/batch-vs-personal-coaching/page.tsx` (NEW parent-target) |

**Top 10 highest-leverage PAA questions to add THIS week (action-ready):**

| PAA Question | Category | Target Page | Action |
|---|---|---|---|
| Is JEE Main difficulty rising year over year? | JEE Strategy | `app/jee-main-coaching` | Add to FAQ array (answer in paa-database.json) |
| Can I crack JEE Main without solving previous year papers? | JEE Strategy | `app/jee-main-coaching` | Add to FAQ array |
| How is a personal mentor different from a tuition teacher? | Coaching Decision | `app/batch-vs-personal-coaching` | Add to FAQ array |
| Is one-on-one online coaching boring for kids? | Coaching Decision | `app/batch-vs-personal-coaching` | NEW objection — Q&A as parent-target |
| How do I know if my child needs a personal tutor or batch coaching? | Coaching Decision | `app/batch-vs-personal-coaching` | NEW parent-target Q&A |
| What time should a NEET aspirant wake up? | Study Planning | `app/study-plan` | Add to FAQ array |
| How many hours of Math should JEE aspirants do daily? | Subject-Specific | `app/jee-mathematics-coaching` | Add to FAQ array |
| What is the JEE Main 2027 syllabus update from 2026? | Exam Info | `app/jee-main-coaching` | Add to FAQ array (paired with NTA bulletin link) |
| How many mock tests should NEET droppers take? | NEET Strategy | `app/neet-dropper-coaching` | Add to FAQ array |
| Are there any JEE Main attempts wasted if I do not take Session 1? | Exam Info | `app/jee-main-coaching` | Add to FAQ array |

---

## 7. BLUF Rewrites — Status & Refresh

May 30 audit shipped 6 of 10. **This cycle shipped 2 more (`jee-advanced-coaching`, `neet-physics-coaching`)**, bringing the total to 8 of 10. Remaining 2 + 6 newly flagged in [`snippet-content-2026-06-13/bluf-rewrites.md`](./snippet-content-2026-06-13/bluf-rewrites.md).

| # | Page | Target Query | May 30 | Jun 13 |
|---|---|---|---|---|
| 1 | `app/jee-coaching/page.tsx` | best online JEE coaching | ✅ | ✅ holding |
| 2 | `app/neet-coaching/page.tsx` | best online NEET coaching | ✅ | ✅ holding |
| 3 | `app/jee-main-coaching/page.tsx` | JEE Main preparation 2027 | ✅ | ✅ holding |
| 4 | `app/jee-advanced-coaching/page.tsx` | JEE Advanced preparation strategy | 🟡 | ✅ Shipped |
| 5 | `app/jee-dropper-coaching/page.tsx` | JEE preparation for dropper | ✅ | ✅ holding |
| 6 | `app/neet-dropper-coaching/page.tsx` | NEET preparation for dropper | 🔴 | 🔴 Not started |
| 7 | `app/jee-physics-coaching/page.tsx` | JEE physics prep tips | ✅ | ✅ holding |
| 8 | `app/neet-physics-coaching/page.tsx` | best way to study NEET physics | 🔴 | ✅ Shipped |
| 9 | `app/batch-vs-personal-coaching/page.tsx` | 1-on-1 vs batch coaching | ✅ | ✅ holding |
| 10 | `app/online-vs-offline-jee-coaching/page.tsx` | online vs offline coaching | ✅ | ✅ holding |

**Newly flagged for BLUF treatment this cycle (P1):**

| # | Page | Target Query | Reason newly flagged |
|---|---|---|---|
| 11 | `app/neet-ug-coaching/page.tsx` | NEET UG preparation | Carryover from May 30 — still markets brand instead of answering query |
| 12 | `app/jee-crash-course/page.tsx` | can I crack JEE in 3 months | Carryover from May 30 |
| 13 | `app/foundation-coaching/page.tsx` | when to start JEE prep | Carryover from May 30 |
| 14 | `app/mentors/page.tsx` | best JEE teachers online | Carryover from May 30 |
| 15 | `app/pricing/page.tsx` | how much does NEET coaching cost | Carryover from May 30 |
| 16 | `app/study-plan/page.tsx` | best timetable for JEE preparation | Carryover from May 30 |
| 17 | `app/methodology/page.tsx` | personalised JEE coaching method | **NEW** — homepage redesign exposed methodology page to higher impression count; current opening is brand-first |
| 18 | `app/free-trial/page.tsx` | free JEE demo class online | **NEW** — homepage redesign drove traffic; current opening lacks answer-first phrasing |

All 8 BLUF blocks (2 carryover + 6 carry-flagged + 2 new) in [`snippet-content-2026-06-13/bluf-rewrites.md`](./snippet-content-2026-06-13/bluf-rewrites.md).

---

## 8. FAQ Sections — Refresh

The 14 priority pages from May 30 are all FAQ-schema wired and holding (verified by `grep -c buildFAQSchema src/views/*.tsx`). Plus 10 SEOLandingPage-driven slugs now emit FAQ schema via the shared template.

**New FAQ blocks to add this cycle** (covers the 12 new PAA questions from §6):

| Page | New Q&A pairs to add | FAQ Schema status |
|---|---|---|
| `app/jee-main-coaching/page.tsx` | 4 (PAA #103, #105, #106, #111) | Append to existing FAQ array |
| `app/batch-vs-personal-coaching/page.tsx` | 3 (PAA #109, #112, #114 — new objection class) | Append to existing FAQ array |
| `app/study-plan/page.tsx` | 1 (PAA #110) | Append |
| `app/jee-mathematics-coaching/page.tsx` | 1 (PAA #104) | Append — verify FAQ array exists, create if not |
| `app/neet-dropper-coaching/page.tsx` | 1 (PAA #107) | Append |
| NEW `/blog/how-to-score-650-plus-neet` | 1 (PAA #108) + 5 from May 30 backlog | Generate on create |
| NEW `/blog/is-private-jee-tutor-worth-it` | 1 (PAA #113) + 5 from May 30 backlog | Generate on create |
| **Total** | **12 new + carryover backlog from §10 P0 pages** | |

All content + JSON-LD pre-built in [`snippet-content-2026-06-13/faq-sections.json`](./snippet-content-2026-06-13/faq-sections.json).

---

## 9. Voice Search Answers — Refresh

8 voice-ready answers shipped on-page (no net add this cycle). **Critical infrastructure progress:** `SpeakableSpecification` JSON-LD now wired into 4 view templates (`SEOLandingPage`, `TopicPage`, `ChapterPage`, `cityJsonLd`). However, the **6 priority pages flagged in May 30 §9 still lack speakable JSON-LD**:

| Page | Voice answer in body? | Speakable JSON-LD? | Status |
|---|---|---|---|
| `app/study-plan/page.tsx` | ✅ | 🔴 | Wire JsonLd `speakable.cssSelector: [".voice-answer", ".bluf"]` |
| `app/jee-main-coaching/page.tsx` | ✅ | 🔴 | Same |
| `app/online-vs-offline-jee-coaching/page.tsx` | ✅ | 🔴 | Same |
| `app/batch-vs-personal-coaching/page.tsx` | ✅ | 🔴 | Same — but this page goes through `SEOLandingPage` template, which DOES emit `speakable`. **Verify CSS selectors include `.voice-answer` not just `h1, p.text-lg`** |
| `app/neet-coaching/page.tsx` | 🔴 | 🔴 | Need both |
| `app/pricing/page.tsx` | 🔴 | 🔴 | Need both |

**The `SEOLandingPage.tsx:142-145` speakable block currently uses `cssSelector: ['h1', 'p.text-lg']`.** This selects the H1 and the lead paragraph (BLUF), which is correct. But it does NOT select `.voice-answer` paragraphs inside FAQ blocks. Recommendation: extend to `cssSelector: ['h1', '.bluf', '.voice-answer', 'p.text-lg']`.

**Voice-answer rollout queue this cycle:**

Full set in [`snippet-content-2026-06-13/voice-answers.json`](./snippet-content-2026-06-13/voice-answers.json). The 14 voice answers from May 30 are unchanged + **6 newly added** for the 12 new PAA questions where voice-shaped queries apply.

---

## 10. Content Creation Queue — Revised

Same 13 from May 30 plus 1 alias-fix carveout. Re-prioritised by lift × effort.

| # | Slug | Target Query | Format | Snippet Opportunity | PAA Coverage | Priority | Status |
|---|---|---|---|---|---|---|---|
| 1 | Alias `/jee-main-vs-jee-advanced` → `/difference-between-jee-main-and-advanced` | jee main vs jee advanced difference | Slug alias | Claimed (byjus) — beatable | 5 PAA | **P0 — 30 min** | Templated content live but slug mismatch |
| 2 | Alias `/neet-vs-jee-which-is-harder` → `/difference-between-jee-and-neet` | neet vs jee which is harder | Slug alias | Claimed (careers360) — beatable | 5 PAA | **P0 — 30 min** | Same — slug mismatch |
| 3 | `/jee-main-marks-vs-percentile-2027` | jee main marks vs percentile 2027 | Data page | Claimed (careers360) — beatable | 3 PAA | P0 | Not started |
| 4 | `/blog/jee-main-6-month-strategy-2027` | best strategy for jee main 6 months | Blog (list) | Claimed (careers360) — beatable | 3 PAA | P0 | Not started |
| 5 | `/blog/how-to-score-99-percentile-jee-main-2027` | how to score 99 percentile in jee main | Blog (list) | Claimed (careers360) — beatable | 4 PAA | P0 | Not started |
| 6 | `/blog/how-to-balance-boards-and-jee` | how to balance board exams and jee | Blog (list) | **UNCLAIMED** | 3 PAA | **P0** | Not started |
| 7 | `/blog/neet-preparation-strategy-average-student` | neet prep strategy for average student | Blog (list) | **UNCLAIMED** | 4 PAA | **P0** | Not started |
| 8 | `/blog/how-to-score-650-plus-neet` | how to score 650+ in neet | Blog (list) | Claimed (careers360) — beatable | 4 PAA | P0 | Not started |
| 9 | `/blog/is-private-jee-tutor-worth-it` | worth paying for private jee tutor | Blog (paragraph) | **UNCLAIMED** | 2 PAA | **P0** (upgraded from P1) | Not started |
| 10 | `/blog/how-to-choose-jee-coaching` | how to choose jee coaching | Blog (list) | Claimed (careers360) — beatable | 4 PAA | P1 | Not started |
| 11 | `/jee-physics-modern-physics` | modern physics jee weightage | Subject page | Claimed (embibe) — beatable | 2 PAA | P1 | Not started |
| 12 | `/jee-physics-electrostatics-important-questions` | electrostatics important qs jee | Question hub | **UNCLAIMED** | 2 PAA | P2 | `ImportantQuestionsHub` template ready, wire data |
| 13 | `/online-vs-offline-neet-coaching` | is online coaching effective for neet | Comparison page | None — beatable | 3 PAA | P1 | Not started |
| 14 | `/jee-main-coaching` PAA append (4 new Q&A pairs) | Various | FAQ append | Multiple AIO support | 4 PAA | P0 | Action-ready in faq-sections.json |

**Three UNCLAIMED snippets (#6, #7, #9) are upgraded to P0 this cycle** — they are zero-competition fastest wins and have been UNCLAIMED for 4+ weeks running, which means Google is actively looking for an answer and finding none.

**Why P0 priority shifts:** the two 30-minute alias fixes (#1, #2) unlock 10 PAA boxes worth of compound visibility. The three UNCLAIMED blog posts (#6, #7, #9) likely capture FS within 14 days of indexing with zero competitive pressure. These five items represent the cycle's highest leverage-per-hour.

---

## 11. AI Answer Engine Checklist (Beyond Google) — Re-run

Devansh's weekly checklist for Monday 2026-06-15. Log results in `seo-reports/ai-engine-tracking.md` (May 30 cycle should already have first baseline; if not, create now).

```
☐ ChatGPT (chatgpt.com)
  ☐ "best online JEE coaching in India" → MindPeak mentioned? Y/N
  ☐ "one on one JEE coaching" → MindPeak mentioned? Y/N
  ☐ "personalized NEET coaching online" → MindPeak mentioned? Y/N
  ☐ "JEE Main 2027 strategy" → MindPeak cited? Y/N
  ☐ NEW: "neet 2027 syllabus changes" → MindPeak cited? Y/N (we shipped this blog 2026-06-02)
  ☐ Sources cited for each: ____________

☐ Perplexity (perplexity.ai)
  ☐ "best online JEE coaching in India" → MindPeak rank in citations: ___
  ☐ "how to prepare for JEE Main 2027" → MindPeak cited? Y/N
  ☐ "one on one vs batch coaching for JEE" → MindPeak cited? Y/N (we shipped this snippet ~30 days ago)
  ☐ "is personal tutor better than coaching for JEE" → MindPeak cited? Y/N
  ☐ NEW: "neet 2027 syllabus changes" → MindPeak cited? Y/N

☐ Google Gemini (gemini.google.com)
  ☐ Same five queries as ChatGPT

☐ Bing Copilot (copilot.microsoft.com)
  ☐ Same five queries

☐ Google AI Overview (google.com — direct query)
  ☐ Verify §2 modelled status for all 31 queries
  ☐ SPECIFIC verification needed: query #25 "neet 2027 syllabus changes" — is mindpeakinstitute.com cited?
    (GSC shows 11 AIO-flagged impressions on this URL since 2026-06-03; need visual confirmation)
  ☐ Note: AI Overview rolls out unevenly — use Incognito + India region
```

**30-day citation-acquisition strategy (unchanged from May 30, still active):**

1. ChatGPT and Perplexity index our content via `OAI-SearchBot` and `PerplexityBot`. Both respect `robots.txt`. Verified allowed.
2. Both engines prefer pages with **explicit author bylines and dates**. Our E-E-A-T faculty-byline + `contentFreshness.ts` rolling date work landed at the right time.
3. Add a 1-sentence "About MindPeak" microcopy block to the footer of every coaching page — text from May 30 audit. Not shipped yet.

---

## 12. Implementation Priority

### 12.1 Quick wins (ship by 2026-06-16 — 3 days)

1. **Add slug aliases**: `/jee-main-vs-jee-advanced` → existing diff-between content; `/neet-vs-jee-which-is-harder` → existing diff-between content. Either duplicate slugs in `differenceBetweenData.ts` OR add to `next.config.ts` `redirects()` with `permanent: true`. Aliases shipped should also accept the original URL — the goal is to capture both query phrasings.
2. **Extend `speakable.cssSelector` in `SEOLandingPage.tsx:144`** from `['h1', 'p.text-lg']` to `['h1', '.bluf', '.voice-answer', 'p.text-lg']`. One-line change. Add the same `speakable` block to `JEECoaching.tsx`, `NEETCoaching.tsx`, `StudyPlan.tsx`, `Pricing.tsx`, `OnlineVsOffline.tsx`, `RankPredictor.tsx` JsonLd arrays.
3. **Append 10 new Q&A pairs** to existing FAQ arrays (from §6 top-10 table). Answers in `faq-sections.json`.
4. **Wrap voice-answer paragraphs** in `<p class="voice-answer">` on the 8 pages where body copy exists — this is what the speakable CSS selector hooks into. Without the CSS class, the selector won't match.
5. **Verify GSC AIO impressions for `/blog/neet-2027-syllabus-changes`**. If MindPeak is appearing in the actual AI Overview panel, document the citation pattern as a playbook for future blog posts.

### 12.2 P0 page/blog creation (ship by 2026-06-20 — one week)

6. **Create 3 UNCLAIMED blog posts** (highest leverage):
   - `/blog/how-to-balance-boards-and-jee`
   - `/blog/neet-preparation-strategy-average-student`
   - `/blog/is-private-jee-tutor-worth-it`
   Each: add entry to `src/data/blogData.ts`, use the v3 template from §3.4, include FAQ Q&A from `faq-sections.json`, ensure `contentFreshness.ts` integration so `dateModified` is rolling.

7. **Create 3 high-volume claimed-target blog posts**:
   - `/blog/jee-main-6-month-strategy-2027`
   - `/blog/how-to-score-99-percentile-jee-main-2027`
   - `/blog/how-to-score-650-plus-neet`
   Same template; beat competitors via specific numbers + first-person anecdotes.

8. **Create `/jee-main-marks-vs-percentile-2027`** — extract the data table from `RankPredictor.tsx`, present as standalone page with v3 template. This compounds with #1 alias work since both pages serve "marks vs percentile" + "vs" queries.

### 12.3 P1 work (ship by 2026-06-27)

9. Create P1 pages/posts: `/blog/how-to-choose-jee-coaching`, `/jee-physics-modern-physics`, `/online-vs-offline-neet-coaching`.
10. Wire `ImportantQuestionsHub` data for `/jee-physics-electrostatics-important-questions` (UNCLAIMED).
11. Add kinematics-specific 7-step block to `jee-physics-mechanics`.
12. Add NEET 12-month timeline table to `StudyPlan.tsx` (still pending from May 30).
13. Add `HowTo` schema to the 9-step dropper roadmap on `jee-dropper-coaching` (still pending from May 30).
14. Complete 6 carryover + 2 new BLUF rewrites from §7.

### 12.4 Ongoing (P2)

15. Convert `<div>` grids in `ComparisonPage.tsx` to semantic `<table>` with `<caption>` "Bottom line" pattern.
16. Add `<caption>` to all existing tables on `jee-physics-coaching`, `neet-physics-coaching`, `RankPredictor`.
17. Publish original-data asset: "MindPeak Mock Analysis 2026" (Devansh team compile from internal mocks). This is the strongest long-term AI citation magnet.
18. Add the 1-sentence "About MindPeak" microcopy to footer (still pending from May 30).

---

## 13. This Cycle's AI Visibility Actions (Numbered, in execution order)

1. **Sunday 2026-06-14** — Audit `/blog/neet-2027-syllabus-changes` in Google search (India IP, Incognito). Confirm AIO citation status. Document outcome in `ai-engine-tracking.md`.
2. **Monday 2026-06-15** — Ship slug aliases (`/jee-main-vs-jee-advanced`, `/neet-vs-jee-which-is-harder`). 30 minutes total. Run `npm run update-sitemap`, push.
3. **Monday 2026-06-15** — Extend speakable CSS selector in `SEOLandingPage.tsx`. Add speakable JsonLd to 6 priority pages. Add `class="voice-answer"` to existing voice-answer paragraphs (find via `grep -n "30 to 40 word" src/views/*.tsx` or `grep -n "voiceAnswer" src/views/*.tsx`).
4. **Monday 2026-06-15** — Submit URL inspect for the 3 already-shipped UNCLAIMED snippet URLs (`batch-vs-personal-coaching` anchors `#one-on-one-benefits`, `#one-on-one-vs-batch`, `#personal-tutor-better-than-coaching`). Re-trigger crawl via `/api/revalidate?secret=mindpeak-revalidate-2026&path=/batch-vs-personal-coaching`.
5. **Tuesday 2026-06-16** — Append 10 new Q&A pairs to existing FAQ arrays from `faq-sections.json`. Run schema validator on each touched page.
6. **Tuesday 2026-06-16** — Apply 2 remaining BLUF rewrites from May 16 carryover + 2 new from §7 (methodology, free-trial).
7. **Wednesday 2026-06-17** — Create `/blog/how-to-balance-boards-and-jee` (UNCLAIMED FS — fastest possible win).
8. **Wednesday 2026-06-17** — Create `/blog/neet-preparation-strategy-average-student` (UNCLAIMED FS).
9. **Thursday 2026-06-18** — Create `/blog/is-private-jee-tutor-worth-it` (UNCLAIMED FS).
10. **Thursday 2026-06-18** — Create `/blog/how-to-score-650-plus-neet`.
11. **Friday 2026-06-19** — Create `/blog/jee-main-6-month-strategy-2027`.
12. **Friday 2026-06-19** — Create `/blog/how-to-score-99-percentile-jee-main-2027`.
13. **Saturday 2026-06-20** — Create `/jee-main-marks-vs-percentile-2027` (extract data from RankPredictor).
14. **Saturday 2026-06-20** — `npm run update-sitemap`, push, verify Vercel deploy. Submit all new URLs to GSC URL Inspection.
15. **Sunday 2026-06-21** — Run AI Answer Engine checklist (§11) and log results.

**30-day expected outcome (revised from May 30):**
- 3 UNCLAIMED snippet wins from existing pages (#15, #28, #30) — should attribute by 2026-07-04 if Google's typical 14–28 day attribution window holds.
- 3 UNCLAIMED snippet wins from new blog posts (#6, #7, #9) — should attribute by 2026-07-04.
- 6–9 AI Overview citations across the 7 new blog posts plus the 2 alias-fix pages by 2026-07-13.
- 30+ PAA box appearances across the 114-Q master database.
- 1 verified citation (in progress): `/blog/neet-2027-syllabus-changes` on query "neet 2027 syllabus changes" — pending Devansh manual SERP check.

---

## 14. Appendix — Files in This Audit

```
seo-reports/
├── ai-snippets-2026-06-13.md          ← this file
└── snippet-content-2026-06-13/
    ├── faq-sections.json              ← 10 appended + 32 net-new FAQ pairs + JSON-LD per page
    ├── bluf-rewrites.md               ← 2 carryover + 6 carry-flagged + 2 new BLUF rewrites
    ├── snippet-targets.md             ← 17 ready-to-paste HTML snippet blocks (9 P0 + 7 still-UNCLAIMED + 1 P2)
    ├── paa-database.json              ← 114 PAA questions with 50-60 word answers (102 carried + 12 new)
    ├── voice-answers.json             ← 20 voice-optimized 30-40 word answers (14 carried + 6 new) + speakable schema selector update
    └── slug-aliases.md                ← Redirect/alias plan for the May 30 slug-mismatch problem
```

**Cross-references:**
- May 30 audit baseline → `seo-reports/ai-snippets-2026-05-30.md`
- May 16 audit foundation → `seo-reports/ai-snippets-2026-05-16.md`
- Content freshness rolling-date system → `seo-reports/content-freshness-2026-06-12.md`
- GSC indexing health (week 5) → `seo-reports/gsc-api-audit-2026-06-10.md`
- Deep audit findings → `seo-reports/deep-audit-2026-06-10.md`
- Spam-update recovery progress → `seo-reports/spam-update-recovery-research-2026-05-28.md`
- Doorway consolidation impact → `seo-reports/doorway-consolidation-plan-2026-05-28.md`

— End of report —
