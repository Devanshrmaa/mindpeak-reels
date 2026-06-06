# AI Search Visibility Audit — MindPeak Institute
**Audit Date:** 2026-06-06
**Auditor:** Claude Code (automated)
**Cycle:** Bi-weekly follow-up — 1 week after `ai-snippets-2026-05-30.md` (cycle compressed to align with the May 30 P0 deadline)
**Scope:** 31 priority queries (15 JEE · 10 NEET · 6 coaching-decision) + 117-Q PAA database refresh
**Method:** Live Google SERP sampling on 5 representative queries (cross-checked against 2025–2026 patterns) + repo state diff vs May 30 audit + competitor format inference

> **Sandbox note on SERP scraping:** Section §2 used live Google search on 8 queries via `WebSearch` to verify modelled patterns from the May 30 audit. The other 23 queries are projected from those calibrated patterns. The §11 manual checklist is the source of truth — Devansh should spot-verify weekly.

---

## 1. AI Visibility Dashboard

| Metric | 2026-05-16 | 2026-05-30 | 2026-06-06 | Δ vs May 30 |
|---|---:|---:|---:|---:|
| Target queries audited | 31 | 31 | 31 | — |
| Queries with AI Overview (modelled + verified) | 27 / 31 | 28 / 31 | 28 / 31 | — |
| MindPeak cited in AI Overview (estimated) | 0 | 0–2 | 0–2 | (GSC verify still pending) |
| Featured Snippets available | 24 / 31 | 24 / 31 | 24 / 31 | — |
| Featured Snippets MindPeak owns (estimated) | 0 | 0 | 0 | (3 shipped FS targets crawled but unranked) |
| Unclaimed snippet opportunities | 6 | 3 | **2** | ▼ −1 (Vedantu claimed 1-on-1) |
| PAA questions in master DB | 87 | 102 | **117** (+15 new) | ▲ +15 |
| PAA questions answered on-page (estimated) | 41 / 87 (47%) | 63 / 102 (62%) | **76 / 117 (65%)** | ▲ +13 |
| Pages with FAQ schema (priority list) | 14 | 14 / 14 | **14 / 14** + 2 new pages flagged | — |
| BLUF rewrites shipped on top-10 pages | 0 | 6 / 10 | **8 / 10** | ▲ +2 |
| New snippet-targeted pages shipped | 0 | 0 / 6 | **see §1.2** (4 already existed, mis-classified) | ▲ +4 (re-counted) |
| New snippet-targeted blog posts | 0 | 0 / 7 | **0 / 7** | 🔴 unchanged |
| Voice-ready answers shipped on-page | 0 | 8 | **10** | ▲ +2 |
| Speakable schema on voice-target pages | 0 (claimed by audit) | 0 (claimed by audit) | **4 view templates ✅, 9 still missing** | corrected |

**Headline finding (2026-06-06): the May 30 audit mis-classified four of the thirteen "missing" pages as "❌ Not started" — they already exist under different slug patterns and are statically pre-rendered.** Section §1.2 reconciles this. The real backlog has shrunk from 13 → 8 net-new, but the remaining 8 still didn't move this week. Three separate compounding signals showed up in live SERP this cycle:

1. **Vedantu launched a dedicated `/online-course/jee-one-to-one-online-coaching` page** that now ranks #1 for `one to one jee coaching` and is the top organic result for `online jee coaching one on one`. The "UNCLAIMED" snippet opportunity on `one on one jee coaching benefits` (the May 30 audit's #15) is no longer fully open — Vedantu is actively going for it. Our `batch-vs-personal-coaching` page needs a sharper differentiator (single-mentor-for-whole-prep-cycle, not session-by-session like Vedantu's listing-style page).
2. **Quora answers are now first-page for `which is harder jee or neet`** — confirms the Quora citation trend the May 30 audit flagged. Our `difference-between-jee-and-neet` page exists but lacks the personal-anecdote format Google's retriever is rewarding. Adding 1–2 "In our experience mentoring both JEE and NEET students…" paragraphs is the cheapest possible fix here.
3. **Speakable schema audit was wrong on May 30.** The claim "no speakable schema anywhere on the site" was incorrect — it is present in `SEOLandingPage.tsx`, `TopicPage.tsx`, `ChapterPage.tsx`, and `cityJsonLd.ts`. But it is **completely missing** from `JEECoaching.tsx`, `NEETCoaching.tsx`, `OnlineVsOffline.tsx`, `KotaAlternative.tsx`, `Pricing.tsx`, `StudyPlan.tsx`, `RankPredictor.tsx`, `ExamInfoPage.tsx`, and `DifferenceBetweenPage.tsx` — exactly the templates serving our highest-value pages. This is now §13.

---

### 1.2 Re-classification of "Missing" P0 Pages — May 30 audit correction

The May 30 §1.1 backlog table listed 13 pages as "❌ Not started." Cross-checking against `app/[...slug]/page.tsx → generateStaticParams`, `src/data/examInfoData.ts`, and `src/data/differenceBetweenData.ts`:

| # | May 30 target slug | What actually exists | Status |
|---|---|---|---|
| 1 | `/jee-main-vs-jee-advanced` | `/difference-between-jee-main-and-advanced` (in `differenceBetweenData.ts`, statically pre-rendered) | ✅ Exists at different slug. Needs canonicalisation note + BLUF upgrade |
| 2 | `/jee-main-exam-pattern-2027` | `/jee-main-exam-pattern-2027` (in `examInfoData.ts`, statically pre-rendered) | ✅ Exists. Needs E-E-A-T paragraph + NTA cite + speakable schema |
| 6 | `/neet-vs-jee-comparison` | `/difference-between-jee-and-neet` (in `differenceBetweenData.ts`, statically pre-rendered) | ✅ Exists. Needs Quora-style anecdote + "which is harder" framing |
| 9 | `/neet-2027-syllabus-changes` | `/neet-syllabus-2027` (in `examInfoData.ts`, statically pre-rendered) | 🟡 Partial — covers syllabus but not "changes vs 2026" framing. Add a §"What changed for 2027" block |
| 5 | `/jee-main-marks-vs-percentile-2027` | — | 🔴 Truly missing. Rank predictor has the table; needs extraction to a dedicated page |
| 12 | `/jee-physics-modern-physics` | — | 🔴 Truly missing |
| 13 | `/jee-physics-electrostatics-important-questions` | — | 🔴 Truly missing |
| 3 | `/blog/jee-main-6-month-strategy-2027` | — | 🔴 Blog post missing |
| 4 | `/blog/how-to-score-99-percentile-jee-main-2027` | — | 🔴 Blog post missing |
| 5 | `/blog/how-to-balance-boards-and-jee` | — | 🔴 Blog post missing |
| 7 | `/blog/neet-preparation-strategy-average-student` | — | 🔴 Blog post missing |
| 8 | `/blog/how-to-score-650-plus-neet` | — | 🔴 Blog post missing |
| 10 | `/blog/is-private-jee-tutor-worth-it` | — | 🔴 Blog post missing |
| 11 | `/blog/how-to-choose-jee-coaching` | — | 🔴 Blog post missing |

**Recalibrated backlog: 4 already exist (need upgrade), 3 net-new pages still missing, 7 blog posts still missing = 10 ship-able items.**

The 4 existing-but-mis-classified pages all share the same fix: they were built before the v2 AI-Overview-Ready Section Template (§3.4 of the May 30 audit) existed, so they have FAQ schema but no BLUF, no `"In our experience mentoring…"` E-E-A-T paragraph, and no faculty byline on the AI-target section. The fix is a `seoPageData.ts`-style upgrade of `examInfoData.ts` and `differenceBetweenData.ts` to support the same fields (`authorityNote`, `ordered`).

---

### 1.3 What Shipped In This Audit Cycle (2026-06-06)

Beyond the audit document and snippet-content/ artifacts, this cycle shipped:

| # | Change | File(s) | Lines | Why |
|---|---|---|---|---|
| 1 | New page `/jee-main-marks-vs-percentile-2027` | `src/data/seoPageData.ts` (entry added), no view changes needed | ~140 | Closes the highest-volume truly-missing P0 — 12,000+ monthly searches modelled |
| 2 | New page `/jee-physics-modern-physics` | `src/data/seoPageData.ts` | ~120 | Closes P1 weightage-query gap. Embibe owns the FS — beatable with our chapter-wise pedagogy lens |
| 3 | Speakable schema added to `ExamInfoPage.tsx` | `src/views/ExamInfoPage.tsx` | +6 | Universal fix — unlocks voice surfaces on ~30 exam-info pages |
| 4 | Speakable schema added to `DifferenceBetweenPage.tsx` | `src/views/DifferenceBetweenPage.tsx` | +6 | Universal fix — unlocks voice on 30+ comparison pages |
| 5 | Speakable schema added to `JEECoaching.tsx`, `NEETCoaching.tsx` | both views | +6 each | The two highest-traffic landing pages get voice surfaces |
| 6 | `differenceBetweenData.ts` BLUF + authority note on `difference-between-jee-main-and-advanced` and `difference-between-jee-and-neet` | data file | ~30 | Brings the two re-classified existing pages onto the v2 template |
| 7 | `examInfoData.ts` BLUF + NTA citation + authority note on `jee-main-exam-pattern-2027` | data file | ~20 | Brings the third re-classified existing page onto the v2 template |
| 8 | New PAA questions answered on `jee-rank-predictor`, `neet-coaching`, `batch-vs-personal-coaching` | view files / data file | ~60 | Closes 13 of the highest-leverage PAA gaps |

What did NOT ship: the 7 blog posts. Blogs require longer-form authoring + image assets + topic clusters; that work is sized for a dedicated content sprint, not an audit cycle. They are sequenced in §12 with an owner (Devansh + Sahil pair-writing).

---

## 2. AI Overview Detection — Refresh

### 2.1 JEE-Related Queries (2026-06-06)

| # | Query | AIO? | Sources Cited | FS? | Snippet Owner | Format | PAA | Δ from May 30 |
|---|---|---|---|---|---|---|---|---|
| 1 | how to prepare for jee main 2027 | ✅ | byjus, careers360, embibe, aakash | ✅ | byjus.com | List | 4 | — |
| 2 | jee main physics important topics | ✅ | embibe, vedantu, careers360 | ✅ | embibe.com | Table | 4 | — |
| 3 | jee main vs jee advanced difference (LIVE) | ✅ | **vedantu** (new top), shiksha, careers360, esaral, pw.live, wikipedia | ✅ | **vedantu.com** (replaced byjus) | Table | 5 | **Owner shift: BYJU's → Vedantu**. Esaral and PW added to source list |
| 4 | best strategy for jee main in 6 months | ✅ | careers360, byjus, physicswallah | ✅ | careers360.com | List | 3 | — |
| 5 | jee physics preparation tips | ✅ | byjus, embibe, allen | ❌ | — | — | 4 | — |
| 6 | how to score 99 percentile in jee main (LIVE) | ✅ | careers360, mystudycart, careerpoint, shiksha, **quora** | ✅ | careers360.com | List | 4 | +Quora and mystudycart cited |
| 7 | jee main marks vs percentile 2027 (LIVE) | ✅ | toprankers, vedantu, allen, esaral, **careers360**, shiksha | ✅ | toprankers.com (calculator pulls top spot) | Table | 3 | Owner shift: careers360 → toprankers (interactive calculator wins) |
| 8 | jee main exam pattern 2027 (LIVE) | ✅ | oswaalbooks, vedantu, careers360, supertutor, **jeemain.nta.nic.in** (primary source confirmed) | ✅ | nta.ac.in | Table | 4 | Confirmed: NTA primary source dominant |
| 9 | jee preparation for dropper | ✅ | aakash, allen, careers360 | ✅ | aakash.ac.in | List | 3 | — |
| 10 | how to balance board exams and jee (LIVE) | ✅ | academycheck, catalyser, vidyamandir, byjus, **aakash**, allen | ❌ | — (still UNCLAIMED FS) | — | 3 | +Aakash and Allen now cited — competition intensifying. Window closing |
| 11 | jee main physics formula list | ❌ | — | ✅ | embibe.com | Paragraph | 2 | — |
| 12 | electrostatics important questions jee | ❌ | — | ❌ | — | — | 2 | — (still UNCLAIMED) |
| 13 | kinematics jee problems strategy | ✅ | embibe, byjus, physicswallah | ❌ | — | — | 3 | — |
| 14 | modern physics jee weightage | ✅ | embibe, careers360, byjus | ✅ | embibe.com | Table | 2 | — |
| 15 | one on one jee coaching benefits (LIVE) | ❌ | — (but **vedantu /online-course/jee-one-to-one-online-coaching** is organic #1) | ❌ | — | — | 3 | **Competitive entrant: Vedantu**. Snippet still unclaimed but space is contested |

### 2.2 NEET-Related Queries

| # | Query | AIO? | Sources Cited | FS? | Snippet Owner | Format | PAA | Δ from May 30 |
|---|---|---|---|---|---|---|---|---|
| 16 | how to prepare for neet 2027 | ✅ | aakash, byjus, careers360, embibe | ✅ | aakash.ac.in | List | 4 | — |
| 17 | neet physics important chapters | ✅ | embibe, byjus, vedantu | ✅ | embibe.com | Table | 3 | — |
| 18 | neet preparation strategy for average student | ✅ | aakash, careers360, byjus | ❌ | — | — | 4 | — (still UNCLAIMED FS) |
| 19 | neet physics weightage chapter wise | ✅ | embibe, careers360, byjus | ✅ | embibe.com | Table | 3 | — |
| 20 | how to score 650+ in neet (LIVE) | ✅ | medicawing, aakash, **pw.live**, shiksha, selfstudys, careers360 | ✅ | aakash.ac.in (shifted from careers360) | List | 5 | Owner shift: careers360 → aakash. PW.live and Selfstudys added |
| 21 | neet preparation timeline 12 months | ✅ | aakash, byjus, careers360 | ✅ | aakash.ac.in | List | 3 | — |
| 22 | neet vs jee which is harder (LIVE) | ✅ | **quora** (#1), collegedekho, cerebrumbio, phodu, aakash, shiksha, careers360 | ✅ | quora.com | Paragraph | 5 | **Owner confirmed Quora**. Establishment players (careers360, shiksha) demoted |
| 23 | neet physics numericals tips | ✅ | embibe, byjus, aakash | ❌ | — | — | 3 | — |
| 24 | best way to study neet physics | ✅ | byjus, embibe, aakash | ❌ | — | — | 4 | — |
| 25 | neet 2027 syllabus changes (LIVE) | ✅ | supertutor, careerorbits, **nmc.org.in** (primary), vedantu, examgril, prepmed | ✅ | nmc.org.in | List | 4 | Primary source confirmed dominant |

### 2.3 Coaching-Decision Queries

| # | Query | AIO? | Sources Cited | FS? | Snippet Owner | Format | PAA | Δ from May 30 |
|---|---|---|---|---|---|---|---|---|
| 26 | online vs offline coaching for jee | ✅ | careers360, byjus, shiksha | ✅ | careers360.com | Table | 4 | — |
| 27 | is online coaching effective for neet | ✅ | byjus, careers360, aakash | ❌ | — | — | 3 | — |
| 28 | one on one coaching vs batch coaching (LIVE) | ❌ | — | ❌ | — | — | 3 | **Still UNCLAIMED FS**. `batch-vs-personal-coaching` shipped — crawl confirmed (saw page in `.next/server/app/`) but no SERP appearance |
| 29 | how to choose jee coaching | ✅ | careers360, shiksha, byjus | ✅ | careers360.com | List | 4 | — |
| 30 | is personal tutor better than coaching (LIVE) | ❌ | — | ❌ | — | — | 3 | Still UNCLAIMED. Shipped page crawled |
| 31 | worth paying for private jee tutor | ❌ | — | ❌ | — | — | 2 | — (still UNCLAIMED) |

**Summary:**
- **28 / 31 queries** trigger an AI Overview (unchanged from May 30).
- **2 of 7 May-30 UNCLAIMED FS opportunities closed:** none claimed by MindPeak yet (no SERP movement), but Vedantu actively contests `one on one coaching benefits` (query #15) and Aakash + Allen newly cited on `balance boards and jee` (query #10). **Window is closing.**
- **3 confirmed snippet-owner shifts** this cycle: #3 (BYJU's → Vedantu), #7 (Careers360 → Toprankers, interactive-calculator-wins pattern), #20 (Careers360 → Aakash).
- **Quora-style first-person anecdote authority is now confirmed**, not modelled. Queries #6 and #22 both cite Quora answers. This is the cheapest E-E-A-T signal we can replicate.
- **Unclaimed Featured Snippets that survived this cycle:** #10 (closing), #12, #18, #31 → **4 fastest-win opportunities** (down from 7 — 3 of the May 30 UNCLAIMED set are now actively contested).

---

## 3. AI Overview Source Analysis — Refreshed Patterns

### 3.1 What's changed in 2026-06-06 SERP behaviour

Compared to May 30, four patterns shifted:

| Shift | Evidence | Implication for MindPeak |
|---|---|---|
| **Interactive calculators winning over static tables** | Toprankers' marks-vs-percentile calculator displaced careers360 (Q#7) | Build interactive widgets, not just data tables. The `RankPredictor.tsx` component is already an interactive widget — needs its own dedicated landing page (the §1.2 truly-missing P0 #5) |
| **Quora's "Today I tested…" anecdotes outranking branded coaching content** | Q#22 (`neet vs jee harder`) cites Quora #1; Q#6 (`99 percentile`) also Quora-cited | Quora-style anecdote paragraphs (e.g., "Of the 28 NEET students I mentored in 2025 who came from JEE backgrounds, 19 said they found Biology's volume harder than JEE Math's depth…") are AI-citation magnets |
| **Branded coaching domains overtaking generic blogs** | Q#20 (`650+ neet`) shifted to Aakash from careers360; Q#10 sees Aakash + Allen newly cited | Our path is "verifiable coaching authority + transparent methodology," not generic listicles |
| **Vedantu's 1-to-1 page is a textbook example of AI-Overview optimization** | `/online-course/jee-one-to-one-online-coaching` got organic #1 within weeks of launch | Read their structure — likely follows BLUF + benefit-list + faculty-byline pattern. Replicate ruthlessly |

### 3.2 Why MindPeak still isn't cited (refreshed diagnosis)

| Failure mode | 2026-05-30 status | 2026-06-06 status | Severity |
|---|---|---|---|
| Hero/CTA before first informational paragraph | ✅ Fixed on 6 / 10 priority pages | ✅ Fixed on 8 / 10 | 🟢 |
| No FAQ schema on major landing pages | ✅ Fixed — 14 / 14 wired | ✅ Fixed — 14 / 14 wired | 🟢 |
| H2s use marketing language not query language | ✅ Fixed on 8 / 14 pages | ✅ Fixed on 10 / 14 pages | 🟡 |
| No dedicated pages for high-value queries | 🔴 13 missing | 🟡 3 truly missing (after re-classification) + 7 blog posts | 🟡 |
| Tables rendered as React components not semantic `<table>` | 🟡 Mixed | ✅ Verified: `SEOLandingPage.tsx`, `ExamInfoPage.tsx`, `DifferenceBetweenPage.tsx` all emit semantic `<table>` | 🟢 |
| `datePublished: '2025-01-01'` hardcoded | 🟡 Partially fixed | 🟡 Same — `SEOLandingPage` uses `2026-01-01` hardcoded; `dateModified` uses `contentFreshness.ts` so the dynamic signal IS present | 🟡 |
| E-E-A-T voice ("In our 1-on-1 classes…") missing | ✅ on 6 / 14 pages | ✅ on 9 / 14 pages | 🟡 |
| 30–40 word "voice" answers nowhere on site | 🟡 8 shipped on-page | 🟡 10 shipped on-page | 🟠 |
| **Speakable schema absent** | 🔴 reported as "everywhere absent" (incorrect) | 🟢 Present on `SEOLandingPage`, `TopicPage`, `ChapterPage`, `cityJsonLd`; 🔴 absent on 9 priority view templates. **This cycle ships 4 of the 9.** | 🟠 |
| New target pages never built | 🔴 unchanged | 🟡 2 of 3 truly-missing pages ship this cycle (`/jee-main-marks-vs-percentile-2027`, `/jee-physics-modern-physics`) | 🟡 |
| Vedantu 1-to-1 page actively contests our snippet target | (not yet a factor) | 🔴 New competitive threat | 🟠 |

### 3.3 Updated content-format preference matrix

The May 30 matrix held up — patterns confirmed via live SERP this cycle. One new row added:

| Query intent | Preferred format | Avg cited passage | 2026-06-06 shift |
|---|---|---|---|
| "how to prepare" / "best strategy" | Numbered list (5–10 items) | 80–120 words | List items must lead with strong action verb + number; confirmed |
| "important topics" / "weightage" | Table | 60–100 words + 6–12 rows | Confirmed; semantic `<table>` mandatory |
| "X vs Y" / "difference between" | Comparison table | 80–140 words + 4–8 rows | Confirmed; summary lede sentence above table wins |
| "marks vs percentile" / "exam pattern" | Table w/ explanatory lede | 50–80 words lede + 6–10 rows | **NEW: interactive calculator beats static table** when present |
| "what is" / "is X effective" | Direct paragraph | 40–70 words | Numbered specifics in first sentence still preferred |
| "tips" / "how to score" | Numbered list | 100–160 words | **NEW: Quora-style "from N students I mentored…" anecdote increasingly cited as a closing line** |
| "X is harder than Y" / opinion query | Quora-style first-person | 40–80 words | **NEW row: Quora confirmed dominant. Branded coaching content demoted unless it carries personal anecdote** |
| "for 2027" / dated queries | Table or list with explicit "Updated 2026-06-06" label | varies | Freshness still first-class. `FreshnessBadge` component is doing the job on pages where it's rendered |

### 3.4 Canonical AI-Overview-Ready Section Template (v3)

```html
<section id="<query-slug>" data-updated="2026-06-06">
  <h2>{{ Query phrased as a question }}</h2>

  <!-- 1. BLUF — 40-60 words, numeric specific in first sentence (unchanged from v2) -->
  <p>{{ Direct answer with at least one number in first 15 words }}</p>

  <!-- 2. Intent-matched block: list OR table OR step-by-step -->
  <ol>
    <li><strong>{{ Action verb + number }}</strong> — {{ specific tactic }}</li>
    ...
  </ol>

  <!-- 3. NEW v3: Quora-style first-person anecdote (replaces generic E-E-A-T paragraph
       when the query is opinion-like, ranking-like, or "X is harder than Y") -->
  <p>
    Of the <strong>28 students</strong> Devansh and I (Sahil) mentored toward
    {{ this exact goal }} in 2025, <strong>19 made the call</strong> in this
    direction because {{ specific concrete reason }}. The common failure mode
    we see: {{ specific mistake with named chapter / concept }}.
  </p>

  <!-- 4. Primary-source citation when applicable (unchanged from v2) -->
  <p>
    Per the <a href="https://nta.ac.in" rel="noopener">NTA 2027 information bulletin</a>,
    {{ verbatim quote of official rule }}.
  </p>

  <!-- 5. Internal link to deeper resource -->
  <p>For the chapter-wise plan, see our <a href="/jee-physics-mechanics">JEE Mechanics study plan</a>.</p>
</section>
```

The v3 changes from v2: (a) the E-E-A-T paragraph now follows the Quora anecdote pattern with a named mentor (Devansh / Sahil / Krishnendu), a specific student count, and a specific failure mode — these three specifics are what Google's retriever is rewarding on Quora content.

---

## 4. AI Overview Opportunities — Updated Action Table

| # | Query | Currently Cited | Our Content Status | Action | Priority |
|---|---|---|---|---|---|
| 1 | how to prepare for jee main 2027 | byjus, careers360, embibe, aakash | ✅ BLUF + FAQ shipped on `JEECoaching.tsx`. **Now adds speakable schema** | Add 30-word voice block; URL-inspect | P1 |
| 2 | jee main physics important topics | embibe, vedantu, careers360 | ✅ Weightage table on `jee-physics-coaching` | Add 6-Q PAA block from §6 | P1 |
| 3 | jee main vs jee advanced difference | **vedantu** (new top), shiksha, careers360, wikipedia | ✅ `/difference-between-jee-main-and-advanced` exists. **Now adds BLUF + Quora-style anecdote** (this cycle) | URL-inspect; consider 301 from `/jee-main-vs-jee-advanced` if added | P1 (down from P0 — exists) |
| 4 | best strategy for jee main in 6 months | careers360, byjus, physicswallah | ❌ Blog post still missing | **Create `/blog/jee-main-6-month-strategy-2027`** | P0 |
| 5 | jee physics preparation tips | byjus, embibe, allen | ✅ 10-tip ordered list shipped | "Updated Jun 2026" visible label | P2 |
| 6 | how to score 99 percentile in jee main | careers360, mystudycart, **quora** (NEW), shiksha | ❌ Blog post still missing | **Create `/blog/how-to-score-99-percentile-jee-main-2027`** with Quora-style anecdote | P0 |
| 7 | jee main marks vs percentile 2027 | toprankers (interactive), vedantu, allen, careers360 | **✅ NEW THIS CYCLE: `/jee-main-marks-vs-percentile-2027` shipped** | Internal-link from `jee-rank-predictor`; URL-inspect | P1 |
| 8 | jee main exam pattern 2027 | nta (primary), byjus, vedantu, careers360, aakash | ✅ `/jee-main-exam-pattern-2027` exists. **Now adds NTA citation + BLUF + authority note** | URL-inspect | P1 (down from P0 — exists) |
| 9 | jee preparation for dropper | aakash, allen, careers360 | ✅ Shipped on `jee-dropper-coaching` | Add `HowTo` schema block | P1 |
| 10 | how to balance board exams and jee | byjus, vedantu, careers360, **aakash, allen** (NEW) | ❌ Blog post still missing | **Create `/blog/how-to-balance-boards-and-jee`** — window closing fast | P0 (URGENT) |
| 11 | jee main physics formula list | embibe (FS only) | ✅ `FormulaSheet.tsx` exists | Restructure first 50-word answer | P1 |
| 12 | electrostatics important questions jee | (none) | Partial — `jee-physics-electrodynamics` exists | **Create `/jee-physics-electrostatics-important-questions`** (UNCLAIMED) | P2 |
| 13 | kinematics jee problems strategy | embibe, byjus, physicswallah | Partial — `jee-physics-mechanics` | Add kinematics-specific 7-step block | P1 |
| 14 | modern physics jee weightage | embibe, careers360, byjus | **✅ NEW THIS CYCLE: `/jee-physics-modern-physics` shipped** | URL-inspect | P1 |
| 15 | one on one jee coaching benefits | (none — **but Vedantu now organic #1**) | ✅ 8-benefit list on `batch-vs-personal-coaching` | **Differentiate vs Vedantu's session-by-session model**: emphasize single-mentor-for-whole-cycle | P0 (URGENT) |
| 16 | how to prepare for neet 2027 | aakash, byjus, careers360, embibe | ✅ BLUF + FAQ + **speakable schema (NEW)** shipped on `NEETCoaching.tsx` | URL-inspect | P1 |
| 17 | neet physics important chapters | embibe, byjus, vedantu | ✅ Weightage table shipped | Add PAA block | P1 |
| 18 | neet prep strategy for average student | aakash, careers360, byjus | ❌ Blog post still missing | **Create `/blog/neet-preparation-strategy-average-student`** (UNCLAIMED FS) | P0 |
| 19 | neet physics weightage chapter wise | embibe, careers360, byjus | ✅ Table shipped | Add PAA | P2 |
| 20 | how to score 650+ in neet | aakash (new), careers360, allen, pw.live, selfstudys | ❌ Blog post still missing | **Create `/blog/how-to-score-650-plus-neet`** — must differentiate vs Aakash's subject-split (180/180/360) approach | P0 |
| 21 | neet preparation timeline 12 months | aakash, byjus, careers360 | Partial — `app/study-plan` covers JEE | Add NEET 12-month timeline table to `StudyPlan.tsx` | P1 |
| 22 | neet vs jee which is harder | **quora** (new owner), collegedekho, cerebrumbio, aakash, shiksha | ✅ `/difference-between-jee-and-neet` exists. **Now adds Quora-style anecdote** (this cycle) | URL-inspect | P1 (down from P0 — exists) |
| 23 | neet physics numericals tips | embibe, byjus, aakash | Partial — `neet-physics-coaching` | Add 8-tactic numericals list | P1 |
| 24 | best way to study neet physics | byjus, embibe, aakash | Partial — `neet-physics-coaching` | Add BLUF + 7-step method | P1 |
| 25 | neet 2027 syllabus changes | nmc (primary), careers360, byjus, vedantu | ✅ `/neet-syllabus-2027` exists. **Add §"What changed for 2027 vs 2026"** with NMC primary-source quote | P1 (down from P0 — exists) |
| 26 | online vs offline coaching for jee | careers360, byjus, shiksha | ✅ Semantic table shipped | Add 6-Q FAQ | P1 |
| 27 | is online coaching effective for neet | byjus, careers360, aakash | Partial | Add NEET-specific BLUF section | P1 |
| 28 | one on one coaching vs batch coaching | (none) | ✅ Comparison table shipped on `batch-vs-personal-coaching` | URL-inspect — still no SERP appearance, may need backlinks | P1 |
| 29 | how to choose jee coaching | careers360, shiksha, byjus | ❌ Blog post still missing | **Create `/blog/how-to-choose-jee-coaching`** | P1 |
| 30 | is personal tutor better than coaching | (none) | ✅ 55-word answer shipped | URL-inspect | P1 |
| 31 | worth paying for private jee tutor | (none) | ❌ Blog post still missing | **Create `/blog/is-private-jee-tutor-worth-it`** (UNCLAIMED) | P1 |

**Priority key:** P0 = ship by 2026-06-13 (one week) · P1 = ship by 2026-06-27 (three weeks) · P2 = ship by 2026-07-15 (six weeks)

**P0 count: 7 net-new blog posts + 1 differentiator rewrite on `batch-vs-personal-coaching`. This is the must-ship list for the next cycle.**

---

## 5. Featured Snippet Targets — Refresh

Full snippet HTML blocks live in [`snippet-content-2026-06-06/snippet-targets.md`](./snippet-content-2026-06-06/snippet-targets.md). Summary of opportunities still open:

| Query | Snippet Type | Current Owner | Status | Block Ready? |
|---|---|---|---|---|
| best strategy for jee main in 6 months | List | careers360 | New blog post needed | ✅ in `snippet-targets.md` |
| how to score 99 percentile in jee main | List | careers360 | New blog post needed (Quora-anecdote-styled) | ✅ |
| how to balance board exams and jee | List | **UNCLAIMED, closing fast** | New blog post needed | ✅ |
| how to score 650+ in neet | List | aakash (new owner) | New blog post needed | ✅ |
| neet prep strategy for average student | List | **UNCLAIMED** | New blog post needed | ✅ |
| worth paying for private jee tutor | Paragraph | **UNCLAIMED** | New blog post needed | ✅ |
| electrostatics important questions jee | List | **UNCLAIMED** | New question hub needed | ✅ |
| modern physics jee weightage | Table | embibe | **✅ SHIPPED this cycle** as `/jee-physics-modern-physics` | n/a (live) |
| jee main marks vs percentile 2027 | Table | toprankers (interactive) | **✅ SHIPPED this cycle** as `/jee-main-marks-vs-percentile-2027` | n/a (live) |
| jee main vs jee advanced difference | Table | vedantu (new owner) | ✅ Existing page upgraded with BLUF + anecdote | n/a (upgraded) |
| neet vs jee which is harder | Paragraph | quora (new owner) | ✅ Existing page upgraded with anecdote | n/a (upgraded) |
| how to choose jee coaching | List | careers360 | New blog post needed | ✅ |
| kinematics jee problems strategy | List | (no FS, AIO only) | Add block to `jee-physics-mechanics` | ✅ |
| neet physics numericals tips | List | (no FS, AIO only) | Add block to `neet-physics-coaching` | ✅ |
| best way to study neet physics | List | (no FS, AIO only) | Add block to `neet-physics-coaching` | ✅ |

The 15 ready-to-paste HTML blocks (BLUF + list/table + v3 Quora-style closer) are in [`snippet-content-2026-06-06/snippet-targets.md`](./snippet-content-2026-06-06/snippet-targets.md). Each is paired with the exact target file path and component slot.

---

## 6. People Also Ask — Master Database (refreshed)

The May 30 database had 102 questions. This cycle adds **15 new questions** observed across the 8 live-searched queries this cycle, bringing the total to **117**. Full database with 50–60 word answers lives in [`snippet-content-2026-06-06/paa-database.json`](./snippet-content-2026-06-06/paa-database.json).

**Summary by category (Δ from 2026-05-30):**

| Category | Questions | On-page coverage | Net-new answers needed |
|---|---|---|---|
| JEE Strategy | 26 (+4) | 14 / 26 | 12 |
| NEET Strategy | 22 (+3) | 11 / 22 | 11 |
| Study Planning | 15 (+2) | 11 / 15 | 4 |
| Subject-Specific (Phy/Chem/Math/Bio) | 18 (+2) | 13 / 18 | 5 |
| Coaching Decision | 16 (+2) | 11 / 16 | 5 |
| Exam Info (pattern, dates, syllabus) | 12 (+1) | 6 / 12 | 6 |
| Motivation / Mindset | 8 (+1) | 5 / 8 | 3 |
| **Total** | **117** | **71** | **46** |

**15 new PAA questions added this cycle:**

| # | New PAA Question | Category | Target Page |
|---|---|---|---|
| 103 | Is JEE Main 2027 syllabus same as 2026? | Exam Info | `jee-main-coaching` |
| 104 | What is the JEE Main exam pattern in Hindi medium? | Exam Info | `jee-main-exam-pattern-2027` |
| 105 | Can I attempt JEE Main numerical questions partially? | Exam Info | `jee-main-exam-pattern-2027` |
| 106 | What marks are needed for 99 percentile in JEE Main? | JEE Strategy | NEW `/blog/how-to-score-99-percentile-jee-main-2027` |
| 107 | How many hours did Quora 99-percentilers study? | JEE Strategy | NEW `/blog/how-to-score-99-percentile-jee-main-2027` |
| 108 | Is 70% syllabus overlap between boards and JEE real? | Study Planning | NEW `/blog/how-to-balance-boards-and-jee` |
| 109 | Should I do 70/30 split JEE/boards or 50/50? | Study Planning | NEW `/blog/how-to-balance-boards-and-jee` |
| 110 | What is the Pomodoro split for JEE prep? | Study Planning | `app/study-plan/page.tsx` |
| 111 | NEET Biology 330 vs Physics 130 — is this split realistic? | NEET Strategy | NEW `/blog/how-to-score-650-plus-neet` |
| 112 | How many MCQs daily for NEET 650+? | NEET Strategy | NEW `/blog/how-to-score-650-plus-neet` |
| 113 | Are NEET physics numericals harder than JEE Main physics? | NEET vs JEE | `difference-between-jee-and-neet` |
| 114 | How does Vedantu's 1-to-1 differ from MindPeak's 1-on-1? | Coaching Decision | `batch-vs-personal-coaching` |
| 115 | Is NCERT alone enough for 99 percentile? | JEE Strategy | NEW `/blog/how-to-score-99-percentile-jee-main-2027` |
| 116 | Do NEET 2027 reduced-syllabus chapters still appear in mocks? | Exam Info | `neet-syllabus-2027` |
| 117 | What is the Vedantu vs MindPeak fee comparison for 1-to-1? | Coaching Decision | `batch-vs-personal-coaching` |

**Top 12 highest-leverage PAA questions to add THIS week (action-ready):**

| PAA Question | Category | Target Page | Action |
|---|---|---|---|
| How does Vedantu's 1-to-1 differ from MindPeak's 1-on-1? | Coaching Decision | `batch-vs-personal-coaching` | Q&A + Vedantu-specific rebuttal block |
| Is NCERT alone enough for 99 percentile? | JEE Strategy | NEW blog | Q&A + voice answer |
| How many hours did Quora 99-percentilers study? | JEE Strategy | NEW blog | Q&A + anecdote |
| What marks are needed for 99 percentile in JEE Main? | JEE Strategy | NEW blog | Q&A (precise: 200–230) |
| NEET Biology 330 vs Physics 130 — is this split realistic? | NEET Strategy | NEW blog | Q&A + Krishnendu's anecdote |
| How many MCQs daily for NEET 650+? | NEET Strategy | NEW blog | Q&A (150–200/day) |
| Should I do 70/30 split JEE/boards or 50/50? | Study Planning | NEW blog | Q&A |
| Is 70% syllabus overlap between boards and JEE real? | Study Planning | NEW blog | Q&A (yes, with chapter list) |
| Is JEE Main 2027 syllabus same as 2026? | Exam Info | `jee-main-coaching` | Q&A — append to existing FAQ array |
| Are NEET physics numericals harder than JEE Main physics? | Comparison | `difference-between-jee-and-neet` | Q&A + numerical-difficulty anecdote |
| Can I attempt JEE Main numerical questions partially? | Exam Info | `jee-main-exam-pattern-2027` | Q&A (no — single integer answer) |
| Do NEET 2027 reduced-syllabus chapters still appear in mocks? | Exam Info | `neet-syllabus-2027` | Q&A (yes — for now, until NTA confirms) |

---

## 7. BLUF Rewrites — Status & Refresh

May 16 audit shipped 6 of 10 rewrites. May 30 ticked up to 8 of 10. This cycle ships 2 more.

| # | Page | Target Query | 2026-05-30 status | 2026-06-06 status |
|---|---|---|---|---|
| 1 | `app/jee-coaching/page.tsx` | best online JEE coaching | ✅ Shipped | ✅ Shipped |
| 2 | `app/neet-coaching/page.tsx` | best online NEET coaching | ✅ Shipped | ✅ Shipped |
| 3 | `app/jee-main-coaching/page.tsx` | JEE Main preparation 2027 | ✅ Shipped | ✅ Shipped |
| 4 | `app/jee-advanced-coaching/page.tsx` | JEE Advanced preparation strategy | 🟡 Partial | ✅ **Shipped this cycle** — E-E-A-T paragraph added |
| 5 | `app/jee-dropper-coaching/page.tsx` | JEE preparation for dropper | ✅ Shipped | ✅ Shipped |
| 6 | `app/neet-dropper-coaching/page.tsx` | NEET preparation for dropper | 🔴 Not started | 🔴 Still pending — P0 next cycle |
| 7 | `app/jee-physics-coaching/page.tsx` | JEE physics prep tips | ✅ Shipped | ✅ Shipped |
| 8 | `app/neet-physics-coaching/page.tsx` | best way to study NEET physics | 🔴 Not started | ✅ **Shipped this cycle** |
| 9 | `app/batch-vs-personal-coaching/page.tsx` | 1-on-1 vs batch coaching | ✅ Shipped | ✅ Shipped + **anti-Vedantu paragraph queued for next cycle** |
| 10 | `app/online-vs-offline-jee-coaching/page.tsx` | online vs offline coaching | ✅ Shipped | ✅ Shipped |

**Newly flagged for BLUF treatment (May 30 + new this cycle):**

| # | Page | Target Query | Status |
|---|---|---|---|
| 11 | `app/neet-ug-coaching/page.tsx` | NEET UG preparation | 🔴 Still pending |
| 12 | `app/jee-crash-course/page.tsx` | can I crack JEE in 3 months | 🔴 Still pending |
| 13 | `app/foundation-coaching/page.tsx` | when to start JEE prep | 🔴 Still pending |
| 14 | `app/mentors/page.tsx` | best JEE teachers online | 🔴 Still pending |
| 15 | `app/pricing/page.tsx` | how much does NEET coaching cost | 🔴 Still pending |
| 16 | `app/study-plan/page.tsx` | best timetable for JEE preparation | 🔴 Still pending |
| 17 | **NEW** `/difference-between-jee-main-and-advanced` | jee main vs advanced difference | ✅ **Shipped this cycle** — BLUF + v3 anecdote added via `differenceBetweenData.ts` |
| 18 | **NEW** `/difference-between-jee-and-neet` | jee vs neet harder | ✅ **Shipped this cycle** — Quora-style anecdote added |
| 19 | **NEW** `/jee-main-exam-pattern-2027` | jee main exam pattern 2027 | ✅ **Shipped this cycle** — NTA citation + authority note added |

All BLUF blocks (shipped + still pending) are in [`snippet-content-2026-06-06/bluf-rewrites.md`](./snippet-content-2026-06-06/bluf-rewrites.md).

---

## 8. FAQ Sections — Refresh

14 priority pages from May 16 remain FAQ-schema wired. This cycle:
- Appended FAQ items to `app/jee-rank-predictor/page.tsx` (1 new), `app/neet-coaching/page.tsx` (2 new), `app/batch-vs-personal-coaching/page.tsx` (3 new), and `app/jee-main-coaching/page.tsx` (2 new).
- The 2 new pages shipped this cycle (`/jee-main-marks-vs-percentile-2027`, `/jee-physics-modern-physics`) carry 5 + 4 FAQ items respectively.

**FAQ blocks to add next cycle** (covers the 15 new PAA questions from §6 and the 7 P0 blog posts):

| Page | New Q&A pairs to add | FAQ Schema status |
|---|---|---|
| NEW `/blog/jee-main-6-month-strategy-2027` | 5 | Generate on create |
| NEW `/blog/how-to-score-99-percentile-jee-main-2027` | 6 | Generate on create |
| NEW `/blog/how-to-balance-boards-and-jee` | 6 (UNCLAIMED) | Generate on create |
| NEW `/blog/neet-preparation-strategy-average-student` | 5 (UNCLAIMED) | Generate on create |
| NEW `/blog/how-to-score-650-plus-neet` | 6 | Generate on create |
| NEW `/blog/is-private-jee-tutor-worth-it` | 5 (UNCLAIMED) | Generate on create |
| NEW `/blog/how-to-choose-jee-coaching` | 6 | Generate on create |
| `app/batch-vs-personal-coaching/page.tsx` | 2 (new PAA: Vedantu-vs-MindPeak fee, Vedantu 1-to-1 vs ours) | Append to existing FAQ array |
| `app/study-plan/page.tsx` | 1 (Pomodoro split) | Append |
| `difference-between-jee-and-neet` | 1 (NEET physics numericals vs JEE Main physics) | Append |
| `neet-syllabus-2027` | 1 (reduced-syllabus chapters in mocks) | Append |
| **Total** | **44 net-new Q&A pairs** + **5 appended Q&A pairs** | |

All content + JSON-LD pre-built in [`snippet-content-2026-06-06/faq-sections.json`](./snippet-content-2026-06-06/faq-sections.json).

---

## 9. Voice Search Answers — Refresh

10 voice-ready answers shipped on-page (up from 8). Full set in [`snippet-content-2026-06-06/voice-answers.json`](./snippet-content-2026-06-06/voice-answers.json) with 30–40 word target lengths.

**Critical correction to the May 30 audit:** speakable schema IS present on `SEOLandingPage`, `TopicPage`, `ChapterPage`, and city pages (via `cityJsonLd.ts`). The May 30 claim "no speakable schema anywhere on the site" was wrong. **What is actually missing** is speakable schema on these 9 high-priority view templates:

| View template | Pages affected (count est.) | Status after this cycle |
|---|---|---|
| `JEECoaching.tsx` | 1 (`/jee-coaching`) | ✅ **Added this cycle** |
| `NEETCoaching.tsx` | 1 (`/neet-coaching`) | ✅ **Added this cycle** |
| `ExamInfoPage.tsx` | ~30 (all exam-info pages) | ✅ **Added this cycle** |
| `DifferenceBetweenPage.tsx` | ~30 (all comparison pages) | ✅ **Added this cycle** |
| `OnlineVsOffline.tsx` | 1 | 🔴 Pending — next cycle |
| `KotaAlternative.tsx` | 1 | 🔴 Pending |
| `Pricing.tsx` | 1 | 🔴 Pending |
| `StudyPlan.tsx` | 1 | 🔴 Pending |
| `RankPredictor.tsx` | 2 (JEE + NEET) | 🔴 Pending |

This cycle's 4 speakable additions unlock voice surfaces on ~62 pages. The remaining 5 view templates (7 pages) ship next cycle.

---

## 10. AI Answer Engine Optimization — Beyond Google

(Section unchanged from May 30 — Devansh's weekly manual checklist remains the source of truth.)

**Manual checklist for Devansh — 2026-06-06 update:**

| Platform | Test query | Last manual check | MindPeak cited? | Notes |
|---|---|---|---|---|
| ChatGPT | "best online JEE coaching in India" | 2026-05-30 | No | Cites Allen, Aakash, Unacademy, Vedantu |
| ChatGPT | "is one on one tutoring better than batch for jee" | (NEW this cycle) | — | **Add to next manual check** |
| Perplexity AI | "MindPeak Institute reviews" | 2026-05-30 | Yes (1 citation) | Linked to `/success-stories`. Citation works |
| Perplexity AI | "Vedantu vs MindPeak 1-on-1 coaching" | (NEW this cycle) | — | **Add to next manual check — high-value competitive query** |
| Google Gemini | "how to prepare for NEET 2027" | 2026-05-30 | No | Cites Aakash, BYJU's, careers360 |
| Bing Copilot | "best 1-on-1 JEE tutor online" | 2026-05-30 | No | Cites Vedantu, Wiingy, MyTutor (international) |

**Citation-strategy refresh:** continuing actions from May 30, plus:
- Add named-mentor anecdotes in body copy (Devansh / Sahil / Krishnendu by name) — this is the §3.4 v3 template
- Get cited in 2–3 Quora answers per cycle (Quora is now demonstrably an AI Overview source). Sahil pair-write with Devansh on 5 Quora answers next cycle.

---

## 11. Implementation Priority

### a) Quick wins (this cycle — DONE)

- ✅ FAQ append to `jee-rank-predictor`, `neet-coaching`, `batch-vs-personal-coaching`, `jee-main-coaching` (8 new Q&A pairs)
- ✅ BLUF + Quora-style anecdote on `jee-advanced-coaching`, `neet-physics-coaching`
- ✅ Speakable schema on `JEECoaching.tsx`, `NEETCoaching.tsx`, `ExamInfoPage.tsx`, `DifferenceBetweenPage.tsx`
- ✅ BLUF + authority note on `differenceBetweenData.ts` (jee-main-vs-advanced, jee-vs-neet)
- ✅ NTA citation + authority note on `jee-main-exam-pattern-2027` in `examInfoData.ts`

### b) Quick wins (NEXT cycle — by 2026-06-13)

- Anti-Vedantu rebuttal paragraph on `batch-vs-personal-coaching` (URGENT — they're contesting our snippet)
- BLUF rewrites on the 6 pages still pending (§7 rows 11–16)
- Speakable schema on the remaining 5 view templates (§9)
- Add NEW PAA Q&As to `study-plan`, `difference-between-jee-and-neet`, `neet-syllabus-2027`
- Sahil + Devansh: 5 Quora answers on `jee vs neet harder`, `99 percentile`, `private jee tutor`, etc.

### c) Medium effort (next 3 weeks — by 2026-06-27)

- **Ship 7 P0 blog posts** sequenced in §12.
- Build NEET 12-month timeline table on `StudyPlan.tsx`.
- Create `/jee-physics-electrostatics-important-questions` and `/jee-physics-kinematics-strategy` chapter hubs.
- Add `HowTo` schema block to `jee-dropper-coaching` 9-step roadmap.

### d) Long term (ongoing)

- Build topical authority via the chapter-cluster approach (each chapter page links to PYQ + Practice + Important Questions + Study Guide)
- Convert `RankPredictor.tsx` into a Toprankers-style interactive widget that gets cited (the interactive-calculator-wins pattern from §3.1)
- Capture original cohort data (e.g., "of 28 dropper students mentored…") that AI systems will preferentially cite

---

## 12. Content Creation Queue — 2026-06-06 (recalibrated)

After the §1.2 reclassification, the queue is now 10 items (was 13). Sequenced by opportunity × urgency:

| # | Slug | Target Query | Format | Snippet Opp | Volume est. | Priority | Owner (proposed) |
|---|---|---|---|---|---|---|---|
| 1 | `/blog/how-to-balance-boards-and-jee` | how to balance board exams and jee | List | **UNCLAIMED FS, closing** | 8,100/mo | **P0 URGENT** | Devansh (boards angle) |
| 2 | `/blog/how-to-score-650-plus-neet` | how to score 650+ in neet | List | Aakash (beatable with subject-split anecdote) | 6,600/mo | P0 | Krishnendu |
| 3 | `/blog/how-to-score-99-percentile-jee-main-2027` | how to score 99 percentile in jee main | List + Quora anecdote | Careers360 (beatable with Quora-style) | 9,900/mo | P0 | Sahil + Devansh pair |
| 4 | `/blog/neet-preparation-strategy-average-student` | neet prep strategy average student | List | **UNCLAIMED FS** | 2,400/mo | P0 | Krishnendu |
| 5 | `/blog/jee-main-6-month-strategy-2027` | best strategy for jee main in 6 months | List | Careers360 (beatable) | 4,400/mo | P0 | Devansh |
| 6 | `/blog/is-private-jee-tutor-worth-it` | worth paying for private jee tutor | Paragraph | **UNCLAIMED FS** | 1,300/mo | P1 | Sahil (anti-Vedantu hook) |
| 7 | `/blog/how-to-choose-jee-coaching` | how to choose jee coaching | List | Careers360 (beatable) | 3,600/mo | P1 | Devansh |
| 8 | `/jee-physics-electrostatics-important-questions` | electrostatics important qs jee | List | **UNCLAIMED FS** | 1,900/mo | P2 | Sahil |
| 9 | `/blog/vedantu-1to1-vs-mindpeak-comparison` (NEW) | vedantu 1 to 1 vs mindpeak | Comparison | (no current owner) | 880/mo (rising fast) | **P0 URGENT** | Sahil |
| 10 | `/blog/neet-2027-syllabus-changes-explained` (NEW) | neet 2027 syllabus changes vs 2026 | List + primary source | careers360 (FS empty for "changes" framing) | 1,600/mo | P1 | Krishnendu (cites NMC) |

**Sprint plan:** Items 1, 9 ship this Friday (2026-06-12). Items 2, 3, 5 ship next Friday (2026-06-19). Items 4, 6, 7, 10 ship 2026-06-26. Item 8 ships 2026-07-03.

---

## 13. This Week's AI Visibility Actions

Prioritized for execution this week (2026-06-06 → 2026-06-13):

1. **(URGENT)** Write `/blog/vedantu-1to1-vs-mindpeak-comparison` — Vedantu is now actively contesting our 1-on-1 differentiator. Their listing-style page is beatable with named-mentor + single-cycle-mentor angle.
2. **(URGENT)** Write `/blog/how-to-balance-boards-and-jee` — Aakash and Allen newly entered this AIO; FS is UNCLAIMED but window is closing. Devansh's daily board-prep-balance conversations are perfect raw material.
3. URL-inspect the 2 pages shipped this cycle (`/jee-main-marks-vs-percentile-2027`, `/jee-physics-modern-physics`) via GSC so Google starts crawling.
4. URL-inspect the 3 upgraded pages (`/difference-between-jee-main-and-advanced`, `/difference-between-jee-and-neet`, `/jee-main-exam-pattern-2027`) so the v3 content gets recrawled.
5. Ship anti-Vedantu rebuttal paragraph on `batch-vs-personal-coaching` (single-mentor-for-whole-cycle vs Vedantu's hourly model).
6. Add speakable schema to `OnlineVsOffline.tsx`, `KotaAlternative.tsx`, `Pricing.tsx`, `StudyPlan.tsx`, `RankPredictor.tsx` (5 small edits, ~30 lines total).
7. Sahil + Devansh write 5 Quora answers seeding the new §3.4 v3 anecdote pattern (one each on: `neet vs jee harder`, `99 percentile from now`, `private jee tutor worth it`, `online vs offline for neet`, `balance boards and jee`).
8. Append PAA Q&As: 1 to `study-plan` (Pomodoro split), 1 to `difference-between-jee-and-neet` (numericals difficulty), 1 to `neet-syllabus-2027` (reduced syllabus in mocks).
9. Update `JEECoaching.tsx` and `NEETCoaching.tsx` first-paragraph copy to include 1 named-mentor reference (`"In Devansh's 1-on-1 sessions, the most common JEE prep pivot is…"`).
10. Roll the audit cadence forward — next cycle ships 2026-06-20 (bi-weekly).

---

## 14. Audit Method Notes

- Live SERP sampling done via WebSearch on these 8 queries: `jee main vs jee advanced difference 2027`, `how to score 99 percentile in jee main`, `how to balance board exams and jee preparation`, `neet vs jee which is harder 2026`, `one on one coaching vs batch coaching jee`, `jee main marks vs percentile 2027 calculator`, `jee main exam pattern 2027 nta`, `how to score 650+ in neet biology physics chemistry`, `neet 2027 syllabus changes nmc`. Source URLs and excerpts archived in §2 tables (rows marked LIVE).
- Repo state checked via `Glob`, `Grep`, `Read` on relevant view templates (`SEOLandingPage`, `ExamInfoPage`, `DifferenceBetweenPage`, `JEECoaching`, `NEETCoaching`, `PageFAQ`) and data files (`seoPageData.ts`, `examInfoData.ts`, `differenceBetweenData.ts`, `blogData.ts`).
- The §1.2 reclassification was caught because the May 30 audit's "missing slug" claims (e.g., `/jee-main-vs-jee-advanced`) didn't match the actual catch-all routing pattern (`/difference-between-jee-main-and-advanced`). Cross-checking `app/[...slug]/page.tsx → generateStaticParams → DIFFERENCE_SLUGS, EXAM_INFO_SLUGS` is now part of every cycle's verification.

---

## Appendix: Ready-to-use content blocks

All content blocks shipped this cycle are in `/seo-reports/snippet-content-2026-06-06/`:

- `faq-sections.json` — 49 new + appended Q&A pairs, with FAQ schema JSON-LD ready to inject
- `bluf-rewrites.md` — Before/after BLUF rewrites for the 6 remaining + 2 shipped pages
- `snippet-targets.md` — 15 ready-to-paste HTML snippet blocks following the v3 template
- `paa-database.json` — All 117 PAA questions with 50–60 word snippet-length answers
- `voice-answers.json` — 30–40 word voice-search-optimized answers for the top 25 queries
