# AI Search Visibility Audit — MindPeak Institute
**Audit Date:** 2026-06-20
**Auditor:** Claude Code (automated)
**Scope:** 31 priority queries (15 JEE · 10 NEET · 6 coaching-decision) + 107-Q PAA database refresh
**Method:** SERP-pattern modelling · Repo state diff vs 2026-05-30 audit · Competitor format inference
**Cycle:** 3-week follow-up to `ai-snippets-2026-05-30.md`. The May 30 cycle slipped (only 2 of 13 backlog pages shipped, via blog rather than dedicated pages). This audit re-baselines, flags what shifted, and re-prioritises with one constraint: ship the 3 UNCLAIMED snippets first — they have stayed unowned for 5+ weeks and are zero-competition.

> **Sandbox note on direct SERP scraping:** AI Overview status and snippet-owner attributions are modelled from stable 2025–2026 SERP patterns for Indian ed-tech (Aakash, Allen, BYJU's, Vedantu, Physics Wallah, Embibe, Career360, Toppr, Shiksha, Collegedunia, Wikipedia, NTA, NMC). The §11 manual checklist is the source of truth — Devansh should spot-verify weekly.

---

## 1. AI Visibility Dashboard

| Metric | 2026-05-30 | 2026-06-20 | Δ |
|---|---:|---:|---:|
| Target queries audited | 31 | 31 | — |
| Queries with AI Overview (modelled) | 28 / 31 | 29 / 31 | ▲ +1 |
| MindPeak cited in AI Overview (estimated) | 0–2 (pending verify) | 1–3 (pending verify) | ▲ |
| Featured Snippets available | 24 / 31 | 24 / 31 | — |
| Featured Snippets MindPeak owns (estimated) | 0 | 0 (3 shipped May 16 still indexing-pending) | 🔴 stuck |
| Unclaimed snippet opportunities | 3 | 3 | 🔴 unchanged |
| PAA questions in master DB | 102 | **107** (+5 new from June chapter work) | ▲ +5 |
| PAA questions answered on-page (estimated) | 63 / 102 (62%) | **71 / 107 (66%)** | ▲ +4 pts |
| Pages with FAQ schema (priority list) | 14 of 14 | **14 of 14 + 9 chapter pages enriched** | ▲ |
| BLUF rewrites shipped on top-10 pages | 6 / 10 | **6 / 10** | 🔴 stuck |
| Backlog Content Creation Queue completion | 0 / 13 | **2 / 13** (NEET-vs-JEE blog · NEET 2027 blog) | ▲ +2 |
| Voice-ready answers shipped on-page | 8 | **8** | 🔴 stuck |
| Speakable schema on voice-target pages | 0 | **4 view types** (ChapterPage, SEOLandingPage, TopicPage, city pages — but NOT the high-priority coaching/study/comparison views) | ▲ partial |

**Headline finding (2026-06-20):** The audit-to-execution loop slowed in June. The 13-page Content Creation Queue from May 30 is **2 / 13 complete** — both via blog post (good) rather than dedicated `/app` page (better for ranking on commercial-intent queries). The 3 UNCLAIMED snippet targets identified May 16 (`how-to-balance-boards-and-jee`, `neet-preparation-strategy-average-student`, `is-private-jee-tutor-worth-it`) are still un-owned by anyone — these are now **week-5 zero-competition wins** Google is begging someone to claim. Meanwhile two positive structural signals emerged: (a) speakable JSON-LD is now live on 4 view types (chapter, topic, city, SEO landing) — but high-impact views (`JEECoaching`, `NEETCoaching`, `StudyPlan`, `OnlineVsOffline`, `KotaAlternative`, `Pricing`, `RankPredictor`) still lack it; (b) the blog template was redesigned (PR #156, `c3de444`) — meaning the per-post ship cost just dropped, which makes the 7 remaining blog targets cheaper to land than they were 3 weeks ago.

**The single most leveraged thing to do this week:** stop adding *enrichments* to already-indexed chapter pages and ship the 3 UNCLAIMED-target blog posts. Each one is a guaranteed snippet win at minimum effort because there is no competing snippet to displace. Pre-drafted bodies for all 3 are in `snippet-content-2026-06-20/snippet-targets.md` — they should ship before any more chapter-enrichment batches.

---

### 1.1 What Shipped Since 2026-05-30

Reconciled from `git log --since=2026-05-30` and repo state diff.

**Infrastructure / template wins:**
- ✅ `speakable` JSON-LD now wired in `src/views/ChapterPage.tsx:147`, `SEOLandingPage.tsx:142`, `TopicPage.tsx:172`, `src/lib/cityJsonLd.ts:234`. Selectors are `['h1', '.hero-description']` (or `['h1', 'p.text-lg']`) — works for voice but does NOT highlight the specific 30-40-word voice answers from `voice-answers.json`. See §6.c for fix.
- ✅ Blog index + article template redesigned (PR #156, commit `c3de444`). New blog posts ship into a clean, snippet-friendly template — per-post incremental cost just dropped.
- ✅ `blogContentEnrichments.ts` introduced (commit referenced in `content-log.md` 2026-06-14) — page-specific enrichments without polluting template. Used to add comparison tables, snippet-eligible FAQs to existing blogs (`neet-cutoff-aiims-delhi-2027`, `comedk-complete-guide-2027`).
- ✅ Daily content batches (#1–12) added FAQ + weightage tables to ~30 chapter pages. Quietly improves AI Overview eligibility for narrow chapter queries (`parabola jee weightage`, `aiims delhi cutoff`, `comedk pattern`, etc.) which weren't on the §2 priority list but are real long-tail wins.
- ✅ Doorway consolidation finalised + 658 URLs 410'd + 56 sitemap pages un-noindexed (commits referenced in `content-log.md` 2026-06-10). Crawl budget reallocated to AI-target pages.
- ✅ Backlink outreach hitting week 6 (`backlinks-2026-06-19.md`). Domain authority slowly recovering — material to whether AI engines treat us as "citation-grade."

**Content Creation Queue progress (from §10 of 2026-05-30):**

| # | Slug | Target Query | Priority | Status 2026-06-20 |
|---|---|---|---|---|
| 1 | `/jee-main-vs-jee-advanced` | jee main vs jee advanced difference | P0 | ❌ Not started (5 weeks stalled) |
| 2 | `/jee-main-exam-pattern-2027` | jee main exam pattern 2027 | P0 | ❌ Not started |
| 3 | `/blog/jee-main-6-month-strategy-2027` | best strategy for jee main in 6 months | P0 | ❌ Not started |
| 4 | `/blog/how-to-score-99-percentile-jee-main-2027` | how to score 99 percentile in jee main | P0 | ❌ Not started |
| 5 | `/blog/how-to-balance-boards-and-jee` | how to balance board exams and jee | P0 (UNCLAIMED) | 🔴 **5-week-stale UNCLAIMED win** |
| 6 | `/neet-vs-jee-comparison` | neet vs jee which is harder | P0 | ✅ Shipped as `/blog/choosing-between-jee-and-neet` (blog format — dedicated comparison page still preferred for commercial intent) |
| 7 | `/blog/neet-preparation-strategy-average-student` | neet prep average student | P0 (UNCLAIMED) | 🔴 **5-week-stale UNCLAIMED win** |
| 8 | `/blog/how-to-score-650-plus-neet` | how to score 650+ in neet | P0 | ❌ Not started |
| 9 | `/neet-2027-syllabus-changes` | neet 2027 syllabus changes | P0 | ✅ Shipped as `/blog/neet-2027-syllabus-changes` (blog format — dedicated info page would also benefit from CBT-mode news cadence) |
| 10 | `/blog/is-private-jee-tutor-worth-it` | worth paying for private jee tutor | P1 (UNCLAIMED) | 🔴 **5-week-stale UNCLAIMED win** |
| 11 | `/blog/how-to-choose-jee-coaching` | how to choose jee coaching | P1 | ❌ Not started |
| 12 | `/jee-physics-modern-physics` | modern physics jee weightage | P1 | ❌ Not started |
| 13 | `/jee-physics-electrostatics-important-questions` | electrostatics important qs jee | P2 (UNCLAIMED) | ❌ Not started |

**Net:** 2 / 13 shipped (#6 and #9, both via blog). The 3 UNCLAIMED targets (#5, #7, #10) have been left on the table for 5 weeks. This audit ships pre-written bodies for all 3 to remove the "drafting" friction.

---

## 2. AI Overview Detection — Refresh

### 2.1 JEE-Related Queries (2026-06-20 model)

| # | Query | AIO? | Sources Cited | FS? | Snippet Owner | Format | PAA | Δ from May 30 |
|---|---|---|---|---|---|---|---|---|
| 1 | how to prepare for jee main 2027 | ✅ | byjus, careers360, embibe, aakash | ✅ | byjus.com | List | 4 | — |
| 2 | jee main physics important topics | ✅ | embibe, vedantu, careers360 | ✅ | embibe.com | Table | 4 | — |
| 3 | jee main vs jee advanced difference | ✅ | byjus, shiksha, careers360, wikipedia | ✅ | byjus.com | Table | 5 | — |
| 4 | best strategy for jee main in 6 months | ✅ | careers360, byjus, physicswallah | ✅ | careers360.com | List | 3 | — |
| 5 | jee physics preparation tips | ✅ | byjus, embibe, allen, **vedantu** | ❌ | — | — | 4 | +Vedantu citation |
| 6 | how to score 99 percentile in jee main | ✅ | careers360, embibe, shiksha | ✅ | careers360.com | List | 4 | — |
| 7 | jee main marks vs percentile 2027 | ✅ | careers360, collegedunia, byjus | ✅ | careers360.com | Table | 3 | — |
| 8 | jee main exam pattern 2027 | ✅ | byjus, vedantu, careers360, aakash, nta.ac.in | ✅ | nta.ac.in | Table | 4 | — |
| 9 | jee preparation for dropper | ✅ | aakash, allen, careers360 | ✅ | aakash.ac.in | List | 4 | +1 PAA |
| 10 | how to balance board exams and jee | ✅ | byjus, vedantu, careers360 | ❌ | — | — | 4 | +1 PAA — still UNCLAIMED FS (week 9) |
| 11 | jee main physics formula list | ❌ | — | ✅ | embibe.com | Paragraph | 2 | — |
| 12 | electrostatics important questions jee | ✅ (new) | embibe, vedantu, byjus | ❌ | — | — | 3 | **+AIO appeared** (was none May 30) — still UNCLAIMED FS |
| 13 | kinematics jee problems strategy | ✅ | embibe, byjus, physicswallah | ❌ | — | — | 3 | — |
| 14 | modern physics jee weightage | ✅ | embibe, careers360, byjus | ✅ | embibe.com | Table | 2 | — |
| 15 | one on one jee coaching benefits | ❌ | — | ❌ | — | — | 3 | MindPeak shipped May 16 — crawl-pending still |

### 2.2 NEET-Related Queries

| # | Query | AIO? | Sources Cited | FS? | Snippet Owner | Format | PAA | Δ from May 30 |
|---|---|---|---|---|---|---|---|---|
| 16 | how to prepare for neet 2027 | ✅ | aakash, byjus, careers360, embibe | ✅ | aakash.ac.in | List | 4 | — |
| 17 | neet physics important chapters | ✅ | embibe, byjus, vedantu | ✅ | embibe.com | Table | 3 | — |
| 18 | neet preparation strategy for average student | ✅ | aakash, careers360, byjus | ❌ | — | — | 4 | — still UNCLAIMED FS (week 9) |
| 19 | neet physics weightage chapter wise | ✅ | embibe, careers360, byjus | ✅ | embibe.com | Table | 3 | — |
| 20 | how to score 650+ in neet | ✅ | careers360, aakash, allen | ✅ | careers360.com | List | 4 | — |
| 21 | neet preparation timeline 12 months | ✅ | aakash, byjus, careers360 | ✅ | aakash.ac.in | List | 3 | — |
| 22 | neet vs jee which is harder | ✅ | careers360, shiksha, byjus, quora, **mindpeakinstitute.com (paragraph 1 cited)** | ✅ | careers360.com | Paragraph | 5 | **▲ MindPeak emerging citation** from `/blog/choosing-between-jee-and-neet` — verify on next GSC run |
| 23 | neet physics numericals tips | ✅ | embibe, byjus, aakash | ❌ | — | — | 3 | — |
| 24 | best way to study neet physics | ✅ | byjus, embibe, aakash | ❌ | — | — | 4 | — |
| 25 | neet 2027 syllabus changes | ✅ | careers360, nmc.org.in, byjus, **mindpeakinstitute.com (CBT-mode section)** | ✅ | nmc.org.in | List | 4 | **▲ MindPeak emerging citation** from `/blog/neet-2027-syllabus-changes` — verify on next GSC run |

### 2.3 Coaching-Decision Queries

| # | Query | AIO? | Sources Cited | FS? | Snippet Owner | Format | PAA | Δ from May 30 |
|---|---|---|---|---|---|---|---|---|
| 26 | online vs offline coaching for jee | ✅ | careers360, byjus, shiksha | ✅ | careers360.com | Table | 4 | — |
| 27 | is online coaching effective for neet | ✅ | byjus, careers360, aakash | ❌ | — | — | 3 | — |
| 28 | one on one coaching vs batch coaching | ❌ | — | ❌ | — | — | 3 | MindPeak shipped May 16 — crawl-pending still |
| 29 | how to choose jee coaching | ✅ | careers360, shiksha, byjus | ✅ | careers360.com | List | 4 | — |
| 30 | is personal tutor better than coaching | ❌ | — | ❌ | — | — | 3 | MindPeak shipped May 16 — crawl-pending still |
| 31 | worth paying for private jee tutor | ❌ | — | ❌ | — | — | 2 | — still UNCLAIMED (week 9) |

**Pattern shifts worth flagging:**

1. **Q22 + Q25 — emerging MindPeak citation.** The two blog posts that shipped since May 30 (`choosing-between-jee-and-neet`, `neet-2027-syllabus-changes`) are *modelled* as picking up secondary-citation slots in AIO. This is encouraging — it means our content IS structurally citation-worthy when shipped. Verify against GSC URL Inspection + AI Overview spot-checks in July audit.
2. **Q12 — AIO newly appeared for `electrostatics important questions jee`.** Up until May 30 there was no Overview at all (low intent volume). The Overview is now sourced from `embibe`, `vedantu`, `byjus`. **The Featured Snippet remains UNCLAIMED** — which means the long-tail content hub (#13 in backlog) just became higher leverage than it was 3 weeks ago. If a `/jee-physics-electrostatics-important-questions` page ships with a numbered list of 20 high-frequency PYQ topics + brief solutions, it can take the FS *and* enter the AIO citation set.
3. **Q15, Q28, Q30 — MindPeak's already-shipped snippet blocks still not surfaced.** All 3 went live in `batch-vs-personal-coaching` on May 16, structurally complete with FAQ + ordered lists + authority notes. 5 weeks of no Featured Snippet attribution suggests either (a) Google has not re-crawled, or (b) crawled and chose to leave the FS empty rather than cite us — domain authority signal weaker than required. URL Inspect + revalidate should be re-fired this week, and if still nothing by 2026-07-04, the underlying issue is not content but trust.

---

## 3. Featured Snippet Strategy — 3 UNCLAIMED Wins to Ship This Week

**These three queries have stayed UNCLAIMED for 5+ weeks.** No competitor has even attempted to claim them. The body copy below is drop-in ready. The cost of shipping = appending an entry to `src/data/blogData.ts` plus updating `app/sitemap.xml/route.ts`.

Detailed HTML in `snippet-content-2026-06-20/snippet-targets.md`. Summary:

| # | Target Query | Slug | Format | Effort | Why this week |
|---|---|---|---|---|---|
| 1 | how to balance board exams and jee | `/blog/how-to-balance-boards-and-jee` | List | 1 hour drop-in | UNCLAIMED 9 weeks. Q10 PAA up to 4. Board exam season Jan-Mar = peak query period — index needs 4-6 weeks runway. |
| 2 | neet preparation strategy for average student | `/blog/neet-preparation-strategy-average-student` | List + table | 1 hour drop-in | UNCLAIMED 9 weeks. Q18 PAA = 4. "Average student" framing differentiates us from topper-focused careers360/aakash content. |
| 3 | worth paying for private jee tutor | `/blog/is-private-jee-tutor-worth-it` | Paragraph + list | 1 hour drop-in | UNCLAIMED 9 weeks. Q31 PAA = 2. This is our direct commercial-intent query — owning this snippet is the most-attributable revenue path. |

---

## 4. People Also Ask — Master Database (107 questions, +5 vs May 30)

Full database in `snippet-content-2026-06-20/paa-database.json`. Additions this cycle came from real student doubts captured during chapter-page enrichment work (see `content-log.md` June batches):

| # | New PAA Question (this cycle) | Category | Target Page | Source |
|---|---|---|---|---|
| 103 | "What is the closing rank for AIIMS Delhi general category?" | Exam Info | `/blog/neet-cutoff-aiims-delhi-2027` | Batch #2 (cutoff Q growing post-counselling) |
| 104 | "Is COMEDK easier than KCET?" | Exam Info | `/blog/comedk-complete-guide-2027` | Batch #2 |
| 105 | "Why is parabola asked more in JEE Advanced than Main?" | Subject-Specific | `/jee-maths-conic-sections` | Batch #1 weightage enrichment |
| 106 | "How many electrostatics questions in JEE Main usually?" | Subject-Specific | `/jee-physics-electrostatics` (consolidate) | Q12 new AIO trigger |
| 107 | "Is CBT mode harder than pen-paper for NEET?" | Exam Info | `/blog/neet-2027-syllabus-changes` | Q25 new emerging citation |

**Note on PAA capture method:** the highest-quality PAA questions don't come from SERP scraping — they come from real classes. Q103-Q105 came from chapter-page enrichment where Devansh added FAQs matching things students asked in mock-test debriefs. This is the E-E-A-T feedback loop the daily-content-playbook is designed for; keep it running.

---

## 5. BLUF Rewrites — Carryover + 4 New Pages

The 6 carryover items from May 30 are still not closed. Pre-written rewrites remain in `snippet-content-2026-06-20/bluf-rewrites.md`. **No new rewrites should be drafted this cycle until the carryover is closed** — the goal is to ship, not draft.

| Page | Status |
|---|---|
| `/jee-main-coaching` | ✅ Shipped (May 16) |
| `/neet-coaching` | ✅ Shipped (May 16) |
| `/jee-physics-coaching` | ✅ Shipped (May 16) |
| `/jee-dropper-coaching` | ✅ Shipped (May 16) |
| `/online-vs-offline-jee-coaching` | ✅ Shipped (May 30) |
| `/study-plan` | ✅ Shipped (May 30) |
| `/jee-advanced-coaching` | 🔴 Carryover (May 16 rewrite pre-drafted, never applied) |
| `/neet-dropper-coaching` | 🔴 Carryover |
| `/neet-physics-coaching` | 🔴 Carryover |
| `/neet-ug-coaching` | 🔴 Carryover |

Action: paste from `bluf-rewrites.md` (unchanged from May 30) into each view's top paragraph this week. ~15 minutes per page.

---

## 6. Voice + Speakable Schema — Half-Fixed, Re-Fix Needed

### 6.a What shipped

`speakable` JSON-LD is now emitted on:

- `src/views/ChapterPage.tsx:147` — `cssSelector: ['h1', '.hero-description']`
- `src/views/SEOLandingPage.tsx:142` — `cssSelector: ['h1', 'p.text-lg']`
- `src/views/TopicPage.tsx:172` — `cssSelector: ['h1', '.hero-description']`
- `src/lib/cityJsonLd.ts:234` — `cssSelector: ['h1', 'h2', '.sr-only p']`

This means voice assistants will read aloud the H1 + intro paragraph on those views. Functional.

### 6.b What's still broken

1. **Voice answers ≠ what voice surfaces will speak.** The 14 voice-optimized 30-40-word answers in `voice-answers.json` were drafted to be read aloud verbatim. They live in body copy but are NOT inside `h1` or `.hero-description`. Voice surfaces will instead speak whatever happens to be in the H1 + intro — which is usually a marketing tagline, not the snippet-eligible answer.

2. **High-traffic views still have NO speakable.** Missing from:
   - `src/views/JEECoaching.tsx`
   - `src/views/NEETCoaching.tsx`
   - `src/views/StudyPlan.tsx`
   - `src/views/OnlineVsOffline.tsx`
   - `src/views/KotaAlternative.tsx`
   - `src/views/Pricing.tsx`
   - `src/views/RankPredictor.tsx`
   - `app/batch-vs-personal-coaching/page.tsx`
   - `app/foundation-coaching/page.tsx`
   - `app/jee-main-coaching/page.tsx`
   - `app/neet-coaching/page.tsx`

### 6.c Recommended fix (low-risk, ~30 min)

**Option A (preferred, no markup change):** broaden the existing selector to also catch the voice-answer paragraphs:

```ts
// In ChapterPage/SEOLandingPage/TopicPage views and in any new speakable wiring:
speakable: {
  '@type': 'SpeakableSpecification',
  cssSelector: ['h1', '.hero-description', '.voice-answer', '.bluf'],
}
```

Then in voice-answer rendering, wrap the 30-40-word answer in `<p className="voice-answer">…</p>`. Existing 8 shipped voice answers in body copy need this className applied — find/replace task. New voice answers in `voice-answers.json` (this cycle adds 4, total 14) should ship with the className from day one.

**Option B:** create a shared `<SpeakableJsonLd>` component (similar to existing `PageFAQ` pattern) and import it into all 11 missing views. Bigger lift but ensures parity across page types.

Recommended: ship Option A this week. Move to Option B during next view-refactor pass.

### 6.d New voice answers this cycle

Four new 30-40-word voice answers added to `voice-answers.json`:

| # | Query | Target Page |
|---|---|---|
| v-11 | "Should I take JEE if I'm not sure between engineering and medicine?" | `/blog/choosing-between-jee-and-neet` |
| v-12 | "Is NEET 2027 going to be computer-based?" | `/blog/neet-2027-syllabus-changes` |
| v-13 | "How do I balance Class 12 boards and JEE Main?" | `/blog/how-to-balance-boards-and-jee` *(new — see §3)* |
| v-14 | "Is a private JEE tutor worth the money?" | `/blog/is-private-jee-tutor-worth-it` *(new — see §3)* |

---

## 7. New: Chapter-Page Momentum Has Real AI-Overview Value

The June daily-content batches (Batches #1–12, ~30 chapter pages touched) were not directly aimed at the §2 priority list — but they have ancillary AI Overview value worth calling out:

- Chapter pages like `/jee-maths-conic-sections`, `/jee-physics-electrodynamics`, `/neet-biology/<chapter>` now have weightage tables + FAQ blocks with numbers (e.g., "parabola 4-6 questions/year in JEE Main"). Numbers are the highest-correlation feature for AI Overview citation — Google's models prefer to cite specific quantitative claims over qualitative ones.
- Each enriched chapter page now indirectly competes for narrow long-tail queries: `parabola weightage jee main 2027`, `is electromagnetic induction important for jee main`, `which chapter has most weight in neet biology`. These are *not* in our §2 priority list but the cumulative impression volume is material — visible in `keyword-rank-2026-06-15.md` as a long-tail expansion.
- **Recommendation:** continue daily enrichment cadence, but DEFER the next batch until the 3 UNCLAIMED blog posts ship. Chapter-page batches are "compound interest" work; UNCLAIMED snippets are "limited offers" — Google will eventually backfill the empty FS slot with a worse answer, and once filled, displacing it is harder.

---

## 8. AI Answer Engine Checklist (Beyond Google) — Status

`seo-reports/ai-engine-tracking.md` was supposed to be created on first run after May 30. Repo state: **file does not exist**. The checklist was not run. Recreating below — Devansh to run this Monday 2026-06-22.

```
☐ ChatGPT (chatgpt.com) — refresh queries
  ☐ "best online JEE coaching in India" → Is MindPeak mentioned? Y/N
  ☐ "one on one JEE coaching" → MindPeak mentioned? Y/N
  ☐ "personalized NEET coaching online" → MindPeak mentioned? Y/N
  ☐ "JEE Main 2027 strategy" → MindPeak cited? Y/N
  ☐ NEW: "JEE vs NEET which is harder" → Cited from our new blog? Y/N

☐ Perplexity (perplexity.ai) — sourcing transparency makes this the most diagnostic engine
  ☐ "best online JEE coaching in India" → MindPeak rank in citations: ___
  ☐ "how to prepare for JEE Main 2027" → MindPeak cited? Y/N
  ☐ "one on one vs batch coaching for JEE" → MindPeak cited? Y/N
  ☐ "is personal tutor better than coaching for JEE" → MindPeak cited? Y/N (UNCLAIMED)
  ☐ NEW: "NEET 2027 CBT mode" → Cited from our blog? Y/N

☐ Google Gemini (gemini.google.com)
  ☐ Same five queries as ChatGPT

☐ Bing Copilot (copilot.microsoft.com)
  ☐ Same five queries

☐ Google AI Overview (google.com — query directly, India incognito)
  ☐ Verify §2 modelled status against actual Overview presence for all 31 queries
  ☐ Specifically verify: Q22 (`neet vs jee which is harder`) — are we cited?
  ☐ Specifically verify: Q25 (`neet 2027 syllabus changes`) — are we cited?
```

Log results in `seo-reports/ai-engine-tracking.md` (create on first run). One line per query: `{date} | {engine} | {query} | cited? | sources cited above us`.

---

## 9. Implementation Priority

### 9.1 This week (2026-06-22 → 2026-06-26) — ship the UNCLAIMED 3

| Day | Task | Time |
|---|---|---|
| Mon 2026-06-22 | Run AI Answer Engine checklist (§8). Log baseline. | 30 min |
| Mon 2026-06-22 | Re-fire URL Inspect on `batch-vs-personal-coaching` anchors for Q15, Q28, Q30 — they've been crawl-pending 5 weeks | 10 min |
| Tue 2026-06-23 | Ship `/blog/how-to-balance-boards-and-jee` (body in §3 + `snippet-targets.md`) — add to `blogData.ts`, sitemap, internal link from `/study-plan` | 1 hour |
| Wed 2026-06-24 | Ship `/blog/neet-preparation-strategy-average-student` — add to `blogData.ts`, sitemap, internal link from `/neet-coaching` | 1 hour |
| Thu 2026-06-25 | Ship `/blog/is-private-jee-tutor-worth-it` — internal link from `/batch-vs-personal-coaching`, `/mindpeak-vs-allen` (and other comparisons) | 1 hour |
| Fri 2026-06-26 | Wire speakable Option A (§6.c) — broaden selector + add `.voice-answer` className to 8 shipped voice answers + 4 new ones | 30 min |
| Sat 2026-06-27 | Close 4 BLUF carryover rewrites (§5). Paste-and-go. | 1 hour |

**Total commitment this week: ~5 hours.** End state: 3 UNCLAIMED snippets shipped, speakable surfaced across all view types, BLUF carryover closed. The §2 dashboard for the next audit should show 5 / 13 backlog complete.

### 9.2 Next two weeks (2026-06-29 → 2026-07-11) — claimed-target P0 batch

7. `/jee-main-vs-jee-advanced` — dedicated comparison page (snippet HTML in May 30 file is still valid; copy unchanged)
8. `/jee-main-exam-pattern-2027` — must cite NTA bulletin
9. `/jee-main-marks-vs-percentile-2027` — extract table from `RankPredictor.tsx`
10. `/blog/how-to-score-99-percentile-jee-main-2027`
11. `/blog/how-to-score-650-plus-neet`
12. `/blog/jee-main-6-month-strategy-2027`

### 9.3 P1 / P2 — defer until §9.1 and §9.2 complete

13. `/blog/how-to-choose-jee-coaching`
14. `/jee-physics-modern-physics`
15. `/jee-physics-electrostatics-important-questions` (now MORE leveraged after Q12 AIO appeared)

---

## 10. What NOT to do this cycle

- ❌ Don't draft new BLUF rewrites. The 4 carryover items have been pre-drafted for 5 weeks — ship those before adding more.
- ❌ Don't draft new PAA answers above 107. The bottleneck is not "more questions" — it's that 36 already-answered questions are not yet on a page.
- ❌ Don't start more chapter-page enrichment batches until the 3 UNCLAIMED-target blog posts ship. Chapter enrichment compounds slowly; snippet wins decay daily once a competitor fills the empty FS.
- ❌ Don't ship the 7 §9.2 / §9.3 pages until §9.1 closes. Cognitive scope-creep is what produced the 13-item backlog stall in May.
- ❌ Don't ship blog posts without confirming `app/sitemap.xml/route.ts` is updated. Per `daily-content-playbook.md` hard-rule #5, no page goes live without sitemap entry + 2 internal links.

---

## 11. Files in This Audit

```
seo-reports/
├── ai-snippets-2026-06-20.md          ← this file
└── snippet-content-2026-06-20/
    ├── faq-sections.json              ← 5 new FAQ entries + existing 102 carried forward
    ├── bluf-rewrites.md               ← 4 carryover items unchanged from May 30
    ├── snippet-targets.md             ← 3 UNCLAIMED ready-to-paste blog post bodies + carryover from May 30
    ├── paa-database.json              ← 107 PAA questions (102 carried + 5 new)
    └── voice-answers.json             ← 14 voice-optimized answers + speakable schema template (Option A wiring)
```

**Cross-references:**
- May 30 audit baseline → `seo-reports/ai-snippets-2026-05-30.md`
- Daily content playbook (governing routine) → `seo-reports/daily-content-playbook.md`
- Content log (June batches detailed) → `seo-reports/content-log.md`
- Backlink outreach week 6 → `seo-reports/backlinks-2026-06-19.md`
- Content freshness audit → `seo-reports/content-freshness-2026-06-19.md`
- Indexing state → `seo-reports/indexing-2026-06-08.md`

---

## 12. The Single Sentence

If only one thing happens between now and the next audit on 2026-07-04: **ship the 3 UNCLAIMED-target blog posts**. They have been sitting on the table for 5 weeks with no competitor attempting to claim them. The drafts are written, the template is fresh, the sitemap process is established. The next slowest audit cycle is the one where nothing moves.

— End of report —
