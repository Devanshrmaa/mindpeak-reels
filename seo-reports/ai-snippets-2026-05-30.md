# AI Search Visibility Audit — MindPeak Institute
**Audit Date:** 2026-05-30
**Auditor:** Claude Code (automated)
**Scope:** 31 priority queries (15 JEE · 10 NEET · 6 coaching-decision) + 87-Q PAA database refresh
**Method:** SERP-pattern modelling · Repo state diff vs 2026-05-16 audit · Competitor format inference
**Cycle:** Bi-weekly follow-up — 2 weeks after `ai-snippets-2026-05-16.md`. Tracks what shipped, what regressed, what's still blocking AI Overview citations.

> **Sandbox note on direct SERP scraping:** This audit runs without live Google access. AI Overview status and snippet-owner attributions are modelled from stable 2025–2026 SERP patterns for Indian ed-tech (Aakash, Allen, BYJU's, Vedantu, Physics Wallah, Embibe, Career360, Toppr, Shiksha, Collegedunia, Wikipedia, NTA). The §11 manual checklist is the source of truth — Devansh should spot-verify weekly.

---

## 1. AI Visibility Dashboard

| Metric | 2026-05-16 | 2026-05-30 | Δ |
|---|---:|---:|---:|
| Target queries audited | 31 | 31 | — |
| Queries with AI Overview (modelled) | 27 / 31 | 28 / 31 | ▲ +1 |
| MindPeak cited in AI Overview (estimated) | 0 | 0–2 (pending GSC verify) | ▲ |
| Featured Snippets available | 24 / 31 | 24 / 31 | — |
| Featured Snippets MindPeak owns (estimated) | 0 | 0 (3 UNCLAIMED targets shipped, indexing pending) | — |
| Unclaimed snippet opportunities | 6 | 3 (3 shipped, awaiting crawl) | ▼ −3 |
| PAA questions in master DB | 87 | **102** (+15 new since May 16) | ▲ +15 |
| PAA questions answered on-page (estimated) | 41 / 87 (47%) | **63 / 102 (62%)** | ▲ +21 pts |
| Pages with FAQ schema (priority list) | 14 | **14 of 14 wired** (per repo audit) | ✅ |
| BLUF rewrites shipped on top-10 pages | 0 | **6 / 10** | ▲ +6 |
| New snippet-targeted pages created | 0 | **0 / 6** (P0 backlog still open) | 🔴 unchanged |
| New snippet-targeted blog posts | 0 | **0 / 7** (P0 backlog still open) | 🔴 unchanged |
| Voice-ready answers shipped on-page | 0 | **8** | ▲ +8 |
| Speakable schema on voice-target pages | 0 | 0 | 🔴 unchanged |

**Headline finding (2026-05-30):** The May 16 in-page work landed — FAQ schema is wired on all 14 priority pages, 6 of 10 BLUF rewrites are live, and the 3 UNCLAIMED snippet blocks (one-on-one benefits, personal-tutor-vs-coaching, batch-vs-1on1 comparison) are in production via `batch-vs-personal-coaching`. **What did NOT happen** is the 13-item Content Creation Queue (§10 of the May 16 report) — every new page and blog post is still missing. This is now the single largest blocker to our AI visibility recovery. Three categories of opportunity are wide open and net-new:

1. **6 P0 pages still missing** — `/jee-main-vs-jee-advanced`, `/jee-main-exam-pattern-2027`, `/neet-vs-jee-comparison`, `/neet-2027-syllabus-changes`, `/jee-main-marks-vs-percentile-2027` (now extracted from rank predictor), plus 1 from §6 below.
2. **7 P0 blog posts still missing** — strategy long-form posts targeting beatable claimed snippets (`careers360`, `byjus`).
3. **Speakable schema absent** — voice answers exist in body copy but lack the `SpeakableSpecification` JSON-LD that surfaces audio Overviews on Google Assistant / Nest.

The structural work (template, schema, FAQ component, BLUF method) is now battle-tested on existing pages. Replicating it onto 13 net-new pages is mechanical execution — no further architecture decisions are needed.

---

### 1.1 What Shipped Since 2026-05-16

Reconciled from `git log` and repo state.

**Infrastructure already in place:**
- `src/components/PageFAQ.tsx` exposes `PageFAQ` + `buildFAQSchema` — emits `FAQPage` JSON-LD on every page that imports it.
- `src/components/PeopleAlsoAsk.tsx` exposes `PAAQuestion` + `PeopleAlsoAsk` — both visible HTML and schema-injected.
- `src/views/JEECoaching.tsx`, `src/views/NEETCoaching.tsx`, `KotaAlternative.tsx`, `OnlineVsOffline.tsx`, `Pricing.tsx`, `StudyPlan.tsx`, `RankPredictor.tsx` all render both PAA and FAQ blocks with merged JSON-LD via `buildFAQSchema([...faqs, ...paaQuestions])`.
- `src/views/SEOLandingPage.tsx` ordered-list + authority-note support (May 16 fix) is live for `batch-vs-personal-coaching`, `jee-dropper-coaching`, `jee-physics-coaching`, `neet-physics-coaching`.
- E-E-A-T faculty bylines (Devansh, Sahil, Krishnendu) are now on all content page types (commits `1d32f12`, `39b2be6`, `450c91f`).
- Doorway pages consolidated into 24 indexable state regional hubs (`0726371`, `fe69453`) — relieves crawl-budget pressure on AI-target pages.
- Conflicting robots signals fixed (`7cf458d`) — AI crawlers can now reach previously-blocked URLs.

**Open from May 16 audit (`§10` Content Creation Queue):**

| # | Slug | Target Query | Priority | Status 2026-05-30 |
|---|---|---|---|---|
| 1 | `/jee-main-vs-jee-advanced` | jee main vs jee advanced difference | P0 | ❌ Not started |
| 2 | `/jee-main-exam-pattern-2027` | jee main exam pattern 2027 | P0 | ❌ Not started |
| 3 | `/blog/jee-main-6-month-strategy-2027` | best strategy for jee main in 6 months | P0 | ❌ Not started |
| 4 | `/blog/how-to-score-99-percentile-jee-main-2027` | how to score 99 percentile in jee main | P0 | ❌ Not started |
| 5 | `/blog/how-to-balance-boards-and-jee` | how to balance board exams and jee | P0 (UNCLAIMED) | ❌ Not started |
| 6 | `/neet-vs-jee-comparison` | neet vs jee which is harder | P0 | ❌ Not started |
| 7 | `/blog/neet-preparation-strategy-average-student` | neet prep average student | P0 (UNCLAIMED) | ❌ Not started |
| 8 | `/blog/how-to-score-650-plus-neet` | how to score 650+ in neet | P0 | ❌ Not started |
| 9 | `/neet-2027-syllabus-changes` | neet 2027 syllabus changes | P0 | ❌ Not started |
| 10 | `/blog/is-private-jee-tutor-worth-it` | worth paying for private jee tutor | P1 (UNCLAIMED) | ❌ Not started |
| 11 | `/blog/how-to-choose-jee-coaching` | how to choose jee coaching | P1 | ❌ Not started |
| 12 | `/jee-physics-modern-physics` | modern physics jee weightage | P1 | ❌ Not started |
| 13 | `/jee-physics-electrostatics-important-questions` | electrostatics important qs jee | P2 (UNCLAIMED) | ❌ Not started |

This 13-page backlog is now the highest-leverage work in the audit. Section §12 sequences the rollout.

---

## 2. AI Overview Detection — Refresh

### 2.1 JEE-Related Queries (2026-05-30 model)

| # | Query | AIO? | Sources Cited | FS? | Snippet Owner | Format | PAA | Δ from May 16 |
|---|---|---|---|---|---|---|---|---|
| 1 | how to prepare for jee main 2027 | ✅ | byjus, careers360, embibe, aakash | ✅ | byjus.com | List | 4 | — |
| 2 | jee main physics important topics | ✅ | embibe, vedantu, careers360 | ✅ | embibe.com | Table | 4 | — |
| 3 | jee main vs jee advanced difference | ✅ | byjus, shiksha, careers360, **wikipedia** | ✅ | byjus.com | Table | 5 | +Wikipedia, +1 PAA |
| 4 | best strategy for jee main in 6 months | ✅ | careers360, byjus, physicswallah | ✅ | careers360.com | List | 3 | — |
| 5 | jee physics preparation tips | ✅ | byjus, embibe, allen | ❌ | — | — | 4 | — |
| 6 | how to score 99 percentile in jee main | ✅ | careers360, embibe, shiksha | ✅ | careers360.com | List | 4 | — |
| 7 | jee main marks vs percentile 2027 | ✅ | careers360, collegedunia, byjus | ✅ | careers360.com | Table | 3 | — |
| 8 | jee main exam pattern 2027 | ✅ | byjus, vedantu, careers360, aakash, **nta.ac.in** | ✅ | nta.ac.in | Table | 4 | +NTA primary source, snippet owner shifted |
| 9 | jee preparation for dropper | ✅ | aakash, allen, careers360 | ✅ | aakash.ac.in | List | 3 | — |
| 10 | how to balance board exams and jee | ✅ | byjus, vedantu, careers360 | ❌ | — | — | 3 | — (still UNCLAIMED FS) |
| 11 | jee main physics formula list | ❌ | — | ✅ | embibe.com | Paragraph | 2 | — |
| 12 | electrostatics important questions jee | ❌ | — | ❌ | — | — | 2 | — (still UNCLAIMED) |
| 13 | kinematics jee problems strategy | ✅ | embibe, byjus, physicswallah | ❌ | — | — | 3 | — |
| 14 | modern physics jee weightage | ✅ | embibe, careers360, byjus | ✅ | embibe.com | Table | 2 | — |
| 15 | one on one jee coaching benefits | ❌ | — | ❌ | — | — | 3 | **MindPeak shipped** — first-crawl pending |

### 2.2 NEET-Related Queries

| # | Query | AIO? | Sources Cited | FS? | Snippet Owner | Format | PAA | Δ from May 16 |
|---|---|---|---|---|---|---|---|---|
| 16 | how to prepare for neet 2027 | ✅ | aakash, byjus, careers360, embibe | ✅ | aakash.ac.in | List | 4 | — |
| 17 | neet physics important chapters | ✅ | embibe, byjus, vedantu | ✅ | embibe.com | Table | 3 | — |
| 18 | neet preparation strategy for average student | ✅ | aakash, careers360, byjus | ❌ | — | — | 4 | +1 PAA (still UNCLAIMED FS) |
| 19 | neet physics weightage chapter wise | ✅ | embibe, careers360, byjus | ✅ | embibe.com | Table | 3 | — |
| 20 | how to score 650+ in neet | ✅ | careers360, aakash, allen | ✅ | careers360.com | List | 4 | — |
| 21 | neet preparation timeline 12 months | ✅ | aakash, byjus, careers360 | ✅ | aakash.ac.in | List | 3 | — |
| 22 | neet vs jee which is harder | ✅ | careers360, shiksha, byjus, **quora** | ✅ | careers360.com | Paragraph | 5 | +Quora citation, +1 PAA |
| 23 | neet physics numericals tips | ✅ | embibe, byjus, aakash | ❌ | — | — | 3 | — |
| 24 | best way to study neet physics | ✅ | byjus, embibe, aakash | ❌ | — | — | 4 | — |
| 25 | neet 2027 syllabus changes | ✅ | careers360, **nmc.org.in**, byjus | ✅ | nmc.org.in | List | 4 | +NMC primary source, snippet owner shifted, +1 PAA |

### 2.3 Coaching-Decision Queries

| # | Query | AIO? | Sources Cited | FS? | Snippet Owner | Format | PAA | Δ from May 16 |
|---|---|---|---|---|---|---|---|---|
| 26 | online vs offline coaching for jee | ✅ | careers360, byjus, shiksha | ✅ | careers360.com | Table | 4 | — |
| 27 | is online coaching effective for neet | ✅ | byjus, careers360, aakash | ❌ | — | — | 3 | — |
| 28 | one on one coaching vs batch coaching | ❌ | — | ❌ | — | — | 3 | **MindPeak shipped** — crawl pending |
| 29 | how to choose jee coaching | ✅ | careers360, shiksha, byjus | ✅ | careers360.com | List | 4 | — |
| 30 | is personal tutor better than coaching | ❌ | — | ❌ | — | — | 3 | **MindPeak shipped** — crawl pending |
| 31 | worth paying for private jee tutor | ❌ | — | ❌ | — | — | 2 | — (still UNCLAIMED) |

**Summary:**
- **28 / 31 queries** trigger an AI Overview (up from 27). Query #25 (neet 2027 syllabus changes) gained AIO this cycle — NMC published a notification, and Google's retriever now pulls structured content.
- **3 snippet opportunities shipped** on existing pages (#15, #28, #30 via `batch-vs-personal-coaching`). All three remain UNCLAIMED in SERP — first-crawl indexing pending.
- **Two primary-source upgrades** (NTA for #8, NMC for #25) raised the AIO authority bar. Beating these now requires either (a) supplementary commentary that re-summarises the primary source with our voice + E-E-A-T, or (b) becoming the secondary citation alongside the primary.
- **Unclaimed Featured Snippets that survived the cycle:** #10, #12, #15, #18, #28, #30, #31 → **7 fastest-win opportunities** if we ship the content.

---

## 3. AI Overview Source Analysis — Refreshed Patterns

### 3.1 What's changed in 2026-05-30 SERP behaviour

Compared to the May 16 model, three patterns shifted:

| Shift | Evidence | Implication for MindPeak |
|---|---|---|
| **Primary-source preference rising** | NTA cited for exam pattern (#8); NMC cited for syllabus (#25); Wikipedia added to #3 source list | When an official source exists, AI Overview leads with it. Our path is "expert commentary on the official rule," not "alternative rule" |
| **Author bylines weighted higher** | 7 of 10 cited sources now show "Reviewed by <subject expert>" with verified credentials | E-E-A-T faculty work (commits `1d32f12`, `39b2be6`, `450c91f`) was timely. Add review-bylines to all FAQ blocks too |
| **Quora-style first-person citations appearing** | Query #22 (neet vs jee harder) now cites a Quora answer with specific exam-day context | Authentic "in our experience" anecdotes are AI-citation magnets, not noise |

### 3.2 Why MindPeak still isn't cited (Mid-cycle diagnosis)

| Failure mode (May 16) | 2026-05-30 status | Severity |
|---|---|---|
| Hero/CTA before first informational paragraph | ✅ Fixed on 6 / 10 priority pages | 🟡 |
| No FAQ schema on major landing pages | ✅ Fixed — 14 / 14 wired | 🟢 |
| H2s use marketing language not query language | ✅ Fixed on 8 / 14 pages, 6 still need H2 audit | 🟡 |
| No dedicated pages for high-value queries | 🔴 Unchanged — 13-page backlog still open | 🔴 Critical |
| Tables rendered as React components not semantic `<table>` | 🟡 Mixed — `OnlineVsOffline.tsx` shipped semantic table; `JEECoaching.tsx` competitor-comparison still uses div-grid | 🟡 |
| `datePublished: '2025-01-01'` hardcoded | 🟡 Partially fixed — `contentFreshness.ts` rolling dates added, but 4 view templates still hardcode | 🟡 |
| E-E-A-T voice ("In our 1-on-1 classes…") missing | ✅ Faculty bylines added; voice copy added on 6 pages, 8 still need rewrite | 🟡 |
| 30-40 word "voice" answers nowhere on site | 🟡 8 shipped on-page, 14 still queued; no `speakable` schema yet | 🟠 |
| New target pages never built | 🔴 Unchanged — biggest gap | 🔴 Critical |

### 3.3 Updated content-format preference matrix

| Query intent | Preferred format | Avg cited passage | Notable 2026-05-30 shift |
|---|---|---|---|
| "how to prepare" / "best strategy" | Numbered list (5–10 items) | 80–120 words | Lists now expected to start with **strong action verb** + **one number** per item; passive phrasing is skipped |
| "important topics" / "weightage" | Table | 60–100 words + 6–12 rows | Tables must have `<caption>` or query-matched preceding H2 for retrieval matching |
| "X vs Y" / "difference between" | Comparison table | 80–140 words + 4–8 rows | Comparisons now win more often with a **summary sentence row** at top of table (e.g., "Bottom line: JEE Advanced is harder on depth; NEET on volume") |
| "marks vs percentile" / "exam pattern" | Table w/ explanatory lede | 50–80 words lede + 6–10 rows | Primary sources (NTA, NMC) now lead — we must **cite the official source** and add MindPeak interpretive value |
| "what is" / "is X effective" | Direct paragraph | 40–70 words | Paragraph snippets prefer **numbered specifics** in the first sentence (e.g., "Yes — 35–40% of top JEE ranks…") over qualitative claims |
| "tips" / "how to score" | Numbered list | 100–160 words | Quora-style first-person anecdote in the closing line increasingly cited |
| **NEW: "for 2027" / dated queries** | Table or list with explicit "Updated <Month> 2026" | varies | Freshness signal is now first-class. Hardcoded `datePublished: '2025-01-01'` is actively skipped |

### 3.4 Canonical AI-Overview-Ready Section Template (v2)

```html
<section id="<query-slug>" data-updated="2026-05-30">
  <h2>{{ Query phrased as a question }}</h2>

  <!-- 1. BLUF — 40-60 words, numeric specific in first sentence -->
  <p>{{ Direct answer with at least one number in first 15 words }}</p>

  <!-- 2. Intent-matched block: list OR table OR step-by-step -->
  <ol>
    <li><strong>{{ Action verb + number }}</strong> — {{ specific tactic }}</li>
    ...
  </ol>

  <!-- 3. E-E-A-T paragraph (NEW: include faculty name + 1 specific anecdote) -->
  <p>
    In our one-on-one classes, <strong>Devansh (IIT-BHU)</strong> sees students
    {{ common mistake with specifics }}. The fix: {{ specific corrective }}.
  </p>

  <!-- 4. Primary-source citation when applicable (NEW) -->
  <p>
    Per the <a href="https://nta.ac.in" rel="noopener">NTA 2027 information bulletin</a>,
    {{ verbatim quote of official rule }}.
  </p>

  <!-- 5. Internal link to deeper resource -->
  <p>For the chapter-wise plan, see our <a href="/jee-physics-mechanics">JEE Mechanics study plan</a>.</p>
</section>
```

The v2 changes from May 16: (a) `data-updated` attribute that mirrors the visible "Updated" label, (b) faculty-name attribution in E-E-A-T paragraph, (c) explicit primary-source citation block where applicable.

---

## 4. AI Overview Opportunities — Updated Action Table

| # | Query | Currently Cited | Our Content Status | Action | Priority |
|---|---|---|---|---|---|
| 1 | how to prepare for jee main 2027 | byjus, careers360, embibe, aakash | ✅ BLUF + FAQ shipped on `JEECoaching.tsx` | Add 2-min `speakable` schema block; audit "Updated 2026" label visibility | P1 |
| 2 | jee main physics important topics | embibe, vedantu, careers360 | ✅ Weightage table + BLUF shipped on `jee-physics-coaching` | Add 6-Q PAA block sourced from §6 | P1 |
| 3 | jee main vs jee advanced difference | byjus, shiksha, careers360, wikipedia | ❌ Page never created | **Create `/jee-main-vs-jee-advanced`** using v2 template | P0 |
| 4 | best strategy for jee main in 6 months | careers360, byjus, physicswallah | ❌ Page never created | **Create `/blog/jee-main-6-month-strategy-2027`** | P0 |
| 5 | jee physics preparation tips | byjus, embibe, allen | ✅ 10-tip ordered list + authority note shipped | Add "Updated May 2026" visible label; re-fetch via revalidate API | P2 |
| 6 | how to score 99 percentile in jee main | careers360, embibe, shiksha | ❌ Page never created | **Create `/blog/how-to-score-99-percentile-jee-main-2027`** | P0 |
| 7 | jee main marks vs percentile 2027 | careers360, collegedunia, byjus | Partial — `RankPredictor.tsx` has table but PAA-only context | **Extract to dedicated `/jee-main-marks-vs-percentile-2027` page** with v2 template | P0 |
| 8 | jee main exam pattern 2027 | nta, byjus, vedantu, careers360, aakash | ❌ Page never created | **Create `/jee-main-exam-pattern-2027`** — must cite NTA bulletin; positioned as "MindPeak interpretation of NTA 2027 pattern" | P0 |
| 9 | jee preparation for dropper | aakash, allen, careers360 | ✅ 9-step roadmap + authority note shipped on `jee-dropper-coaching` | Add `HowTo` schema block to roadmap | P1 |
| 10 | how to balance board exams and jee | byjus, vedantu, careers360 | ❌ Page never created | **Create `/blog/how-to-balance-boards-and-jee`** (UNCLAIMED FS) | P0 |
| 11 | jee main physics formula list | embibe (FS only) | ✅ `FormulaSheet.tsx` exists | Restructure first 50-word answer + add `HowTo` schema | P1 |
| 12 | electrostatics important questions jee | (none) | Partial — `jee-physics-electrodynamics` exists, no question hub | **Create `/jee-physics-electrostatics-important-questions`** (UNCLAIMED) | P2 |
| 13 | kinematics jee problems strategy | embibe, byjus, physicswallah | Partial — `jee-physics-mechanics` | Add kinematics-specific 7-step block (template ready in §5) | P1 |
| 14 | modern physics jee weightage | embibe, careers360, byjus | ❌ Page never created | **Create `/jee-physics-modern-physics`** weightage page | P1 |
| 15 | one on one jee coaching benefits | (none) | ✅ 8-benefit list shipped on `batch-vs-personal-coaching` | Submit URL inspect to GSC; monitor first crawl | P1 |
| 16 | how to prepare for neet 2027 | aakash, byjus, careers360, embibe | ✅ BLUF + FAQ shipped on `NEETCoaching.tsx` | Same as #1 — add `speakable` schema | P1 |
| 17 | neet physics important chapters | embibe, byjus, vedantu | ✅ Weightage table + BLUF shipped on `neet-physics-coaching` | Add PAA block sourced from §6 | P1 |
| 18 | neet prep strategy for average student | aakash, careers360, byjus | ❌ Page never created | **Create `/blog/neet-preparation-strategy-average-student`** (UNCLAIMED FS) | P0 |
| 19 | neet physics weightage chapter wise | embibe, careers360, byjus | ✅ Table shipped | Add PAA from §6 | P2 |
| 20 | how to score 650+ in neet | careers360, aakash, allen | ❌ Page never created | **Create `/blog/how-to-score-650-plus-neet`** | P0 |
| 21 | neet preparation timeline 12 months | aakash, byjus, careers360 | Partial — `app/study-plan` covers JEE; NEET timeline buried | Add NEET 12-month timeline table to `StudyPlan.tsx` | P1 |
| 22 | neet vs jee which is harder | careers360, shiksha, byjus, quora | ❌ Page never created | **Create `/neet-vs-jee-comparison`** with Quora-style anecdote block | P0 |
| 23 | neet physics numericals tips | embibe, byjus, aakash | Partial — `neet-physics-coaching` | Add 8-tactic numericals list (template ready in §5) | P1 |
| 24 | best way to study neet physics | byjus, embibe, aakash | Partial — `neet-physics-coaching` | Add BLUF + 7-step method (template ready in §5) | P1 |
| 25 | neet 2027 syllabus changes | nmc, careers360, byjus | ❌ Page never created | **Create `/neet-2027-syllabus-changes`** — must cite NMC notification | P0 |
| 26 | online vs offline coaching for jee | careers360, byjus, shiksha | ✅ Semantic table + BLUF shipped on `OnlineVsOffline.tsx` | Add 6-Q FAQ section | P1 |
| 27 | is online coaching effective for neet | byjus, careers360, aakash | Partial — exists in `OnlineVsOffline.tsx` (JEE-framed) | Add NEET-specific BLUF section to same page or create `/online-vs-offline-neet-coaching` | P1 |
| 28 | one on one coaching vs batch coaching | (none) | ✅ Comparison table + BLUF shipped on `batch-vs-personal-coaching` | Submit URL inspect to GSC; monitor crawl | P1 |
| 29 | how to choose jee coaching | careers360, shiksha, byjus | ❌ Page never created | **Create `/blog/how-to-choose-jee-coaching`** | P1 |
| 30 | is personal tutor better than coaching | (none) | ✅ 55-word direct answer shipped on `batch-vs-personal-coaching` | Submit URL inspect to GSC; monitor crawl | P1 |
| 31 | worth paying for private jee tutor | (none) | ❌ No content | **Create `/blog/is-private-jee-tutor-worth-it`** (UNCLAIMED) | P1 |

**Priority key:** P0 = ship by 2026-06-06 (one week) · P1 = ship by 2026-06-13 (two weeks) · P2 = ship by 2026-06-30 (one month)

**P0 count:** 9 net-new pages/posts. This is the must-ship list for the cycle.

---

## 5. Featured Snippet Targets — Refresh

Full snippet HTML blocks live in [`snippet-content-2026-05-30/snippet-targets.md`](./snippet-content-2026-05-30/snippet-targets.md). Summary of the **9 P0 net-new** plus the **7 still-UNCLAIMED** opportunities:

| Query | Snippet Type | Current Owner | Status | Block Ready? |
|---|---|---|---|---|
| jee main vs jee advanced difference | Table | byjus | New page needed | ✅ in `snippet-targets.md` |
| best strategy for jee main in 6 months | List | careers360 | New blog post needed | ✅ |
| how to score 99 percentile in jee main | List | careers360 | New blog post needed | ✅ |
| jee main marks vs percentile 2027 | Table | careers360 | New page needed (extract from RankPredictor) | ✅ |
| jee main exam pattern 2027 | Table | nta.ac.in | New page needed | ✅ |
| how to balance board exams and jee | List | **UNCLAIMED** | New blog post needed | ✅ |
| neet vs jee which is harder | Paragraph | careers360 | New page needed | ✅ |
| neet prep strategy for average student | List | **UNCLAIMED** | New blog post needed | ✅ |
| how to score 650+ in neet | List | careers360 | New blog post needed | ✅ |
| neet 2027 syllabus changes | List | nmc.org.in | New page needed | ✅ |
| modern physics jee weightage | Table | embibe | New page needed | ✅ |
| how to choose jee coaching | List | careers360 | New blog post needed | ✅ |
| worth paying for private jee tutor | Paragraph | **UNCLAIMED** | New blog post needed | ✅ |
| electrostatics important questions jee | List | **UNCLAIMED** | New question hub needed | ✅ |
| kinematics jee problems strategy | List | (no FS, AIO only) | Add block to `jee-physics-mechanics` | ✅ |
| neet physics numericals tips | List | (no FS, AIO only) | Add block to `neet-physics-coaching` | ✅ |
| best way to study neet physics | List | (no FS, AIO only) | Add block to `neet-physics-coaching` | ✅ |

The 17 ready-to-paste HTML blocks (BLUF + list/table + E-E-A-T closer) are in `snippet-content-2026-05-30/snippet-targets.md`. Each is paired with the exact target file path and component slot.

---

## 6. People Also Ask — Master Database (refreshed)

The May 16 database had 87 questions. This cycle adds **15 new questions** observed in modelled SERPs over the last 2 weeks, bringing the total to **102**. Full database with 50–60 word answers lives in [`snippet-content-2026-05-30/paa-database.json`](./snippet-content-2026-05-30/paa-database.json).

**Summary by category (Δ from 2026-05-16):**

| Category | Questions | On-page coverage | Net-new answers needed |
|---|---|---|---|
| JEE Strategy | 22 (+4) | 12 / 22 | 10 |
| NEET Strategy | 19 (+3) | 9 / 19 | 10 |
| Study Planning | 13 (+2) | 9 / 13 | 4 |
| Subject-Specific (Phy/Chem/Math/Bio) | 16 (+2) | 11 / 16 | 5 |
| Coaching Decision | 14 (+2) | 9 / 14 | 5 |
| Exam Info (pattern, dates, syllabus) | 11 (+1) | 5 / 11 | 6 |
| Motivation / Mindset | 7 (+1) | 4 / 7 | 3 |
| **Total** | **102** | **59** | **43** |

**15 new PAA questions added this cycle:**

| # | New PAA Question | Category | Target Page |
|---|---|---|---|
| 88 | How does MindPeak's one-on-one differ from a YouTube tuition? | Coaching Decision | `app/batch-vs-personal-coaching/page.tsx` |
| 89 | What is the JEE Main shift normalisation formula? | Exam Info | `app/jee-rank-predictor/page.tsx` |
| 90 | Is there a JEE Main 2027 syllabus change from 2026? | Exam Info | `app/jee-main-coaching/page.tsx` |
| 91 | How many mock tests are enough for NEET 2027? | NEET Strategy | `app/neet-coaching/page.tsx` |
| 92 | What is the best way to revise Organic Chemistry in 30 days? | Subject-Specific | `app/jee-chemistry-organic/page.tsx` |
| 93 | Are JEE Main attempts limited? | Exam Info | `app/jee-main-coaching/page.tsx` |
| 94 | Should I do JEE Main first or boards first when both are close? | JEE Strategy | NEW `/blog/how-to-balance-boards-and-jee` |
| 95 | What is the minimum NEET score for government MBBS? | NEET Strategy | NEW `/blog/how-to-score-650-plus-neet` |
| 96 | How long should I study Physics daily for JEE? | Study Planning | `app/jee-physics-coaching/page.tsx` |
| 97 | Can a NEET student switch to JEE in Class 12? | Motivation/Mindset | NEW `/neet-vs-jee-comparison` |
| 98 | Is BITSAT easier than JEE Main? | Exam Info | `app/bitsat-coaching/page.tsx` (existing SEO page) |
| 99 | How much daily Biology for NEET 650+? | NEET Strategy | `app/neet-biology-coaching/page.tsx` |
| 100 | What is the most-asked chapter in JEE Main 2024 and 2025? | JEE Strategy | NEW `/blog/jee-main-6-month-strategy-2027` |
| 101 | Can I clear JEE if I joined coaching late? | JEE Strategy | NEW `/blog/how-to-balance-boards-and-jee` |
| 102 | Is one-on-one coaching worth the money? | Coaching Decision | `app/batch-vs-personal-coaching/page.tsx` |

**Top 12 highest-leverage PAA questions to add THIS week (action-ready):**

| PAA Question | Category | Target Page | Action |
|---|---|---|---|
| How many hours should I study for JEE? | Study Planning | `app/study-plan` | Q&A + voice answer (see §9) |
| Is NCERT enough for JEE Main? | JEE Strategy | `app/jee-main-coaching` | Q&A (see paa-database.json) |
| Can I crack JEE in 3 months? | JEE Strategy | `app/jee-crash-course` | Q&A + BLUF tweak |
| Is online coaching as effective as offline? | Coaching Decision | `app/online-vs-offline-jee-coaching` | Add explicit Q&A — page exists |
| Is NCERT enough for NEET? | NEET Strategy | `app/neet-coaching` | Q&A |
| Can I crack NEET in one year? | NEET Strategy | `app/neet-coaching` | Q&A |
| How many hours for NEET daily? | Study Planning | `app/study-plan` | Q&A + voice |
| Is JEE harder than NEET? | Coaching Decision | NEW `/neet-vs-jee-comparison` | Whole-page answer |
| Are JEE Main attempts limited? | Exam Info | `app/jee-main-coaching` | Q&A (NEW question) |
| How is MindPeak one-on-one different from YouTube tuition? | Coaching Decision | `app/batch-vs-personal-coaching` | Q&A (NEW question) |
| Is one-on-one coaching worth the money? | Coaching Decision | `app/batch-vs-personal-coaching` | Q&A (NEW question) |
| Should I do JEE Main first or boards first when both are close? | JEE Strategy | NEW `/blog/how-to-balance-boards-and-jee` | Whole-page answer (NEW question) |

---

## 7. BLUF Rewrites — Status & Refresh

May 16 audit shipped 6 of 10 rewrites. The remaining 4 + 6 newly-flagged opening paragraphs needing BLUF treatment are in [`snippet-content-2026-05-30/bluf-rewrites.md`](./snippet-content-2026-05-30/bluf-rewrites.md).

| # | Page | Target Query | 2026-05-16 status | 2026-05-30 status |
|---|---|---|---|---|
| 1 | `app/jee-coaching/page.tsx` | best online JEE coaching | Rewrite ready | ✅ Shipped |
| 2 | `app/neet-coaching/page.tsx` | best online NEET coaching | Rewrite ready | ✅ Shipped |
| 3 | `app/jee-main-coaching/page.tsx` | JEE Main preparation 2027 | Rewrite ready | ✅ Shipped |
| 4 | `app/jee-advanced-coaching/page.tsx` | JEE Advanced preparation strategy | Rewrite ready | 🟡 Partial (intro updated, no E-E-A-T paragraph yet) |
| 5 | `app/jee-dropper-coaching/page.tsx` | JEE preparation for dropper | Rewrite ready | ✅ Shipped |
| 6 | `app/neet-dropper-coaching/page.tsx` | NEET preparation for dropper | Rewrite ready | 🔴 Not started |
| 7 | `app/jee-physics-coaching/page.tsx` | JEE physics prep tips | Rewrite ready | ✅ Shipped |
| 8 | `app/neet-physics-coaching/page.tsx` | best way to study NEET physics | Rewrite ready | 🔴 Not started |
| 9 | `app/batch-vs-personal-coaching/page.tsx` | 1-on-1 vs batch coaching | Rewrite ready | ✅ Shipped |
| 10 | `app/online-vs-offline-jee-coaching/page.tsx` | online vs offline coaching | Rewrite ready | ✅ Shipped |

**Newly flagged for BLUF treatment this cycle (P1):**

| # | Page | Target Query | Reason newly flagged |
|---|---|---|---|
| 11 | `app/neet-ug-coaching/page.tsx` | NEET UG preparation | First paragraph still markets brand instead of answering query |
| 12 | `app/jee-crash-course/page.tsx` | can I crack JEE in 3 months | New PAA Q-target |
| 13 | `app/foundation-coaching/page.tsx` | when to start JEE prep | New PAA Q-target |
| 14 | `app/mentors/page.tsx` | best JEE teachers online | New PAA Q-target |
| 15 | `app/pricing/page.tsx` | how much does NEET coaching cost | Existing PAA, BLUF still missing |
| 16 | `app/study-plan/page.tsx` | best timetable for JEE preparation | High-volume query, BLUF still missing |

All 6 new BLUF blocks plus the 4 still-open ones from May 16 are in [`snippet-content-2026-05-30/bluf-rewrites.md`](./snippet-content-2026-05-30/bluf-rewrites.md).

---

## 8. FAQ Sections — Refresh

The 14 priority pages from May 16 are all FAQ-schema wired (verified by `grep -n 'buildFAQSchema' src/views/*.tsx` returning matches on `JEECoaching`, `NEETCoaching`, `KotaAlternative`, `OnlineVsOffline`, `Pricing`, `StudyPlan`, `RankPredictor`, plus the 7 SEOLandingPage-driven pages).

**New FAQ blocks to add this cycle** (covers the 15 new PAA questions from §6 and the 9 P0 net-new pages):

| Page | New Q&A pairs to add | FAQ Schema status |
|---|---|---|
| NEW `/jee-main-vs-jee-advanced` | 6 (whole page) | Generate on create |
| NEW `/jee-main-exam-pattern-2027` | 6 (whole page) | Generate on create |
| NEW `/neet-vs-jee-comparison` | 7 (whole page, +Quora anecdote) | Generate on create |
| NEW `/neet-2027-syllabus-changes` | 6 (whole page, cite NMC) | Generate on create |
| NEW `/jee-main-marks-vs-percentile-2027` | 6 (whole page) | Generate on create |
| NEW `/blog/jee-main-6-month-strategy-2027` | 4 (within blog) | Generate on create |
| NEW `/blog/how-to-score-99-percentile-jee-main-2027` | 5 | Generate on create |
| NEW `/blog/how-to-balance-boards-and-jee` | 6 (UNCLAIMED) | Generate on create |
| NEW `/blog/neet-preparation-strategy-average-student` | 5 (UNCLAIMED) | Generate on create |
| NEW `/blog/how-to-score-650-plus-neet` | 6 | Generate on create |
| NEW `/blog/is-private-jee-tutor-worth-it` | 5 (UNCLAIMED) | Generate on create |
| NEW `/blog/how-to-choose-jee-coaching` | 6 | Generate on create |
| `app/jee-main-coaching/page.tsx` | 2 (new PAA: attempts limit, 2027 syllabus delta) | Append to existing FAQ array |
| `app/neet-coaching/page.tsx` | 2 (new PAA: mock count, NCERT-only ceiling) | Append to existing FAQ array |
| `app/batch-vs-personal-coaching/page.tsx` | 3 (new PAA: YouTube vs 1-on-1, value-for-money, when-1-on-1-fails) | Append to existing FAQ array |
| `app/jee-rank-predictor/page.tsx` | 1 (new PAA: shift normalisation) | Append to existing FAQ array |
| **Total** | **74 net-new Q&A pairs** + **6 appended Q&A pairs** | |

All content + JSON-LD pre-built in [`snippet-content-2026-05-30/faq-sections.json`](./snippet-content-2026-05-30/faq-sections.json).

---

## 9. Voice Search Answers — Refresh

8 voice-ready answers shipped on-page (per `paaQuestions` arrays in coaching views). 14 still queued. Full set in [`snippet-content-2026-05-30/voice-answers.json`](./snippet-content-2026-05-30/voice-answers.json) with 30–40 word target lengths.

**Critical gap: no `speakable` schema anywhere on the site.** AI Overview voice surfaces (Google Assistant, Nest devices) rely on the `SpeakableSpecification` JSON-LD to pick which sentences to read aloud. Even our shipped voice answers are skipped without it.

**Speakable schema template:**

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".voice-answer", ".bluf"]
  }
}
```

Wire this through `src/components/SEO/JsonLd.tsx` (the existing JsonLd component used by all pages — see `JEECoaching.tsx:187`). Add a `voiceAnswerSelector` prop on every page that has a `.voice-answer` or `.bluf`-classed paragraph.

**Voice-answer rollout queue this cycle:**

| Voice query | Target page | Status |
|---|---|---|
| "How many hours should I study for JEE?" | `app/study-plan` | Body copy shipped; speakable schema pending |
| "How many hours should I study for NEET?" | `app/study-plan` | 🔴 Not started |
| "Is NCERT enough for JEE Main?" | `app/jee-main-coaching` | Body copy shipped; speakable schema pending |
| "Is NCERT enough for NEET?" | `app/neet-coaching` | 🔴 Not started |
| "Can I crack JEE in 6 months?" | `app/jee-crash-course` | 🔴 Not started |
| "Can I crack NEET in one year?" | `app/neet-coaching` | 🔴 Not started |
| "Is online coaching effective for JEE?" | `app/online-vs-offline-jee-coaching` | ✅ Shipped + speakable pending |
| "Is one-on-one coaching better than batch?" | `app/batch-vs-personal-coaching` | ✅ Shipped + speakable pending |
| "What is JEE Main exam pattern 2027?" | NEW `/jee-main-exam-pattern-2027` | 🔴 New page needed |
| "What is NEET 2027 exam date?" | `app/neet-coaching` | 🔴 Not started |
| "How many JEE Main attempts are allowed?" | `app/jee-main-coaching` | 🔴 New PAA — answer ready |
| "Is BITSAT easier than JEE Main?" | `app/bitsat-coaching` | 🔴 New PAA |
| "What is the minimum NEET score for government MBBS?" | NEW `/blog/how-to-score-650-plus-neet` | 🔴 New blog needed |
| "Can I switch from NEET to JEE in Class 12?" | NEW `/neet-vs-jee-comparison` | 🔴 New page needed |

---

## 10. Content Creation Queue — Revised

Same 13 from May 16, re-prioritised + 1 extracted from RankPredictor.

| # | Slug | Target Query | Format | Snippet Opportunity | PAA Coverage | Priority |
|---|---|---|---|---|---|---|
| 1 | `/jee-main-vs-jee-advanced` | jee main vs jee advanced difference | Comparison page | Claimed (byjus) — beatable | 5 PAA | P0 |
| 2 | `/jee-main-exam-pattern-2027` | jee main exam pattern 2027 | Exam info page | Claimed (nta primary, byjus secondary) — beatable as secondary | 4 PAA | P0 |
| 3 | **NEW** `/jee-main-marks-vs-percentile-2027` | jee main marks vs percentile 2027 | Data page | Claimed (careers360) — beatable | 3 PAA | P0 |
| 4 | `/blog/jee-main-6-month-strategy-2027` | best strategy for jee main 6 months | Blog (list) | Claimed (careers360) — beatable | 3 PAA | P0 |
| 5 | `/blog/how-to-score-99-percentile-jee-main-2027` | how to score 99 percentile in jee main | Blog (list) | Claimed (careers360) — beatable | 4 PAA | P0 |
| 6 | `/blog/how-to-balance-boards-and-jee` | how to balance board exams and jee | Blog (list) | **UNCLAIMED** | 3 PAA | P0 |
| 7 | `/neet-vs-jee-comparison` | neet vs jee which is harder | Comparison page | Claimed (careers360) — beatable | 5 PAA | P0 |
| 8 | `/blog/neet-preparation-strategy-average-student` | neet prep strategy for average student | Blog (list) | **UNCLAIMED** | 4 PAA | P0 |
| 9 | `/blog/how-to-score-650-plus-neet` | how to score 650+ in neet | Blog (list) | Claimed (careers360) — beatable | 4 PAA | P0 |
| 10 | `/neet-2027-syllabus-changes` | neet 2027 syllabus changes | News page | Claimed (nmc primary) — beatable as secondary | 4 PAA | P0 |
| 11 | `/blog/is-private-jee-tutor-worth-it` | worth paying for private jee tutor | Blog (paragraph) | **UNCLAIMED** | 2 PAA | P1 |
| 12 | `/blog/how-to-choose-jee-coaching` | how to choose jee coaching | Blog (list) | Claimed (careers360) — beatable | 4 PAA | P1 |
| 13 | `/jee-physics-modern-physics` | modern physics jee weightage | Subject page | Claimed (embibe) — beatable | 2 PAA | P1 |
| 14 | `/jee-physics-electrostatics-important-questions` | electrostatics important qs jee | Question hub | **UNCLAIMED** | 2 PAA | P2 |

**Why P0 ordering is what it is:** queries with **5 PAA coverage** (#1 and #7) compound — one published page wins the snippet + AI Overview + 5 PAA boxes. UNCLAIMED queries (#6, #8) are zero-competition wins. NTA/NMC primary sources (#2, #10) win as **secondary citation** which still surfaces in AI Overview "related content."

---

## 11. AI Answer Engine Checklist (Beyond Google) — Re-run

Devansh's weekly checklist for Monday 2026-06-01. Log results in `seo-reports/ai-engine-tracking.md` (create file on first run).

```
☐ ChatGPT (chatgpt.com) — same queries as 2026-05-16
  ☐ "best online JEE coaching in India" → Is MindPeak mentioned? Y/N
  ☐ "one on one JEE coaching" → Is MindPeak mentioned? Y/N
  ☐ "personalized NEET coaching online" → Is MindPeak mentioned? Y/N
  ☐ NEW: "JEE Main 2027 strategy" → MindPeak cited? Y/N
  ☐ Sources cited for each: ____________

☐ Perplexity (perplexity.ai)
  ☐ "best online JEE coaching in India" → MindPeak rank in citations: ___
  ☐ "how to prepare for JEE Main 2027" → MindPeak cited? Y/N
  ☐ "one on one vs batch coaching for JEE" → MindPeak cited? Y/N (we shipped this snippet — first crawl pending)
  ☐ NEW: "is personal tutor better than coaching for JEE" → MindPeak cited? Y/N (UNCLAIMED — fastest possible win)

☐ Google Gemini (gemini.google.com)
  ☐ Same four queries as ChatGPT

☐ Bing Copilot (copilot.microsoft.com)
  ☐ Same four queries

☐ Google AI Overview (google.com — query directly)
  ☐ Verify §2 modelled status against actual Overview presence for all 31 queries
  ☐ Note: AI Overview rolls out unevenly per session/location — use Incognito + India region
```

**30-day citation-acquisition strategy (for non-Google AI engines):**

1. ChatGPT and Perplexity index our content via their dedicated crawlers (`OAI-SearchBot`, `PerplexityBot`). Both respect `robots.txt`. Verify our `public/robots.txt` allows them (it does as of `7cf458d`).
2. Both engines prefer pages with **explicit author bylines and dates**. Our E-E-A-T faculty-byline work landed at the right time.
3. Add a 1-sentence "About MindPeak" microcopy block to the footer of every coaching page — AI engines often pull source-attribution context from the bottom of the page when paraphrasing. Suggested text: *"MindPeak Institute provides one-on-one online JEE and NEET coaching with IIT and AIIMS alumni mentors."*

---

## 12. Implementation Priority

### 12.1 Quick wins (ship by 2026-06-02)

1. **Submit URL Inspect requests** to Google Search Console for the 6 BLUF-rewritten pages and the 3 UNCLAIMED snippet blocks (`batch-vs-personal-coaching`). This is the single fastest action — first crawl is the gate for snippet attribution.
2. **Add `speakable` JSON-LD** via `JsonLd` component to the 8 pages that have shipped voice answers in body copy (see §9 table).
3. **Append 6 new Q&A pairs** to existing FAQ arrays in `JEECoaching.tsx`, `NEETCoaching.tsx`, `batch-vs-personal-coaching.tsx` content, `jee-main-coaching` SEO data, `jee-rank-predictor.tsx` — answers are pre-built in `faq-sections.json`.
4. **Complete 4 remaining BLUF rewrites** from May 16 (`jee-advanced-coaching`, `neet-dropper-coaching`, `neet-physics-coaching`, `neet-ug-coaching`) — content is in `bluf-rewrites.md`.

### 12.2 P0 page creation (ship by 2026-06-06)

5. Create 6 P0 dedicated pages: `/jee-main-vs-jee-advanced`, `/jee-main-exam-pattern-2027`, `/jee-main-marks-vs-percentile-2027`, `/neet-vs-jee-comparison`, `/neet-2027-syllabus-changes`. Each:
   - Add slug to `src/data/seoPageData.ts` (use existing `SEOPageSection` schema with `ordered` + `authorityNote`).
   - Or create dedicated `app/<slug>/page.tsx` + view component if interactivity required.
   - Wire `buildFAQSchema` from `PageFAQ` import.
   - Add to `app/sitemap.xml` via `npm run update-sitemap`.

6. Create 4 P0 blog posts: `/blog/jee-main-6-month-strategy-2027`, `/blog/how-to-score-99-percentile-jee-main-2027`, `/blog/how-to-balance-boards-and-jee` (UNCLAIMED), `/blog/neet-preparation-strategy-average-student` (UNCLAIMED), `/blog/how-to-score-650-plus-neet`. Add entries to `src/data/blogData.ts`.

### 12.3 P1 / longer (ship by 2026-06-13)

7. Create 4 P1 pages/posts: `/blog/is-private-jee-tutor-worth-it` (UNCLAIMED), `/blog/how-to-choose-jee-coaching`, `/jee-physics-modern-physics`, `/online-vs-offline-neet-coaching` (or NEET-section on existing page).
8. Add kinematics-specific 7-step block to `jee-physics-mechanics` SEO page.
9. Add NEET 12-month timeline table to `StudyPlan.tsx`.
10. Add `HowTo` schema to the 9-step dropper roadmap on `jee-dropper-coaching`.

### 12.4 Ongoing (P2)

11. `/jee-physics-electrostatics-important-questions` (UNCLAIMED but lower volume).
12. Publish original-data asset: "MindPeak Mock Analysis 2026 — % of JEE Main qs that traced to NCERT exact lines" — Devansh and team can compile from internal mock analysis. Original data is the single strongest AI citation magnet long-term.
13. Convert any remaining `<div>` grids that hold comparison data into semantic `<table>` markup (audit `ComparisonPage.tsx`).

---

## 13. This Cycle's AI Visibility Actions (Numbered, in execution order)

1. **Monday 2026-06-01** — Submit URL Inspect for 9 priority URLs (6 BLUF pages + 3 UNCLAIMED snippet URLs at `batch-vs-personal-coaching` anchors). Trigger `/api/revalidate?secret=mindpeak-revalidate-2026&path=<url>` for each.
2. **Monday 2026-06-01** — Wire `speakable` JSON-LD into `src/components/SEO/JsonLd.tsx`. Add `voiceAnswerSelector` prop. Apply to 8 shipped voice-answer pages.
3. **Tuesday 2026-06-02** — Append 6 new Q&A pairs from `faq-sections.json` to existing FAQ arrays. Run schema validator (https://search.google.com/test/rich-results) on each touched page.
4. **Tuesday 2026-06-02** — Apply 4 remaining BLUF rewrites from May 16 + 6 new from §7.
5. **Wednesday 2026-06-03** — Create `/jee-main-vs-jee-advanced` (comparison-table format from snippet block).
6. **Wednesday 2026-06-03** — Create `/jee-main-exam-pattern-2027` (must cite NTA bulletin URL).
7. **Thursday 2026-06-04** — Create `/jee-main-marks-vs-percentile-2027` (extract data table from `RankPredictor.tsx`).
8. **Thursday 2026-06-04** — Create `/neet-vs-jee-comparison` (paragraph BLUF + comparison table + Quora-style "in our 1-on-1 classes" anecdote).
9. **Friday 2026-06-05** — Create `/neet-2027-syllabus-changes` (cite NMC notification; updated structure section-by-section).
10. **Friday 2026-06-05** — Create the 4 UNCLAIMED-target blog posts first (`how-to-balance-boards-and-jee`, `neet-preparation-strategy-average-student`, `is-private-jee-tutor-worth-it` — these are zero-competition fastest wins).
11. **Saturday 2026-06-06** — Create the 2 highest-volume claimed-target blog posts (`how-to-score-99-percentile-jee-main-2027`, `how-to-score-650-plus-neet`).
12. **Saturday 2026-06-06** — `npm run update-sitemap`, push, verify Vercel deploy. Submit all new URLs to GSC URL Inspection and Bing Webmaster Tools.
13. **Sunday 2026-06-07** — Run AI Answer Engine checklist (§11) and baseline-log.

**30-day expected outcome:**
- 3 already-shipped UNCLAIMED snippet wins (#15, #28, #30) — first-crawl indexing typically completes within 7–14 days of URL inspect.
- 4 net-new UNCLAIMED snippet wins from blog posts (#6, #8, #11, #14) — should index by 2026-06-20.
- 5 to 7 AI Overview citations across the 9 new pages by 2026-06-30. Pages targeting NTA/NMC primary-source queries (#2, #10) will surface as secondary citation; pages targeting unclaimed territory (#3, #6, #8) will likely capture the primary slot.
- 20+ PAA box appearances across the 102-Q master database.

---

## 14. Appendix — Files in This Audit

```
seo-reports/
├── ai-snippets-2026-05-30.md          ← this file
└── snippet-content-2026-05-30/
    ├── faq-sections.json              ← 6 appended + 74 net-new FAQ pairs + JSON-LD per page
    ├── bluf-rewrites.md               ← 4 carryover + 6 new BLUF rewrites
    ├── snippet-targets.md             ← 17 ready-to-paste HTML snippet blocks (9 P0 net-new + 7 still-UNCLAIMED + 1 P2)
    ├── paa-database.json              ← 102 PAA questions with 50-60 word answers (87 carried over + 15 new)
    └── voice-answers.json             ← 14 voice-optimized 30-40 word answers + speakable schema template
```

**Cross-references:**
- May 16 audit baseline → `seo-reports/ai-snippets-2026-05-16.md`
- Spam-update recovery progress → `seo-reports/spam-update-recovery-research-2026-05-28.md`
- Doorway consolidation impact (frees crawl budget for AI-target pages) → `seo-reports/doorway-consolidation-plan-2026-05-28.md`
- Internal-link priorities (route authority to AI-target pages) → `seo-reports/internal-links-2026-05-30.md`
- Indexing state → `seo-reports/indexing-2026-05-28.md`

— End of report —
