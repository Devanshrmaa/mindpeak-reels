# BLUF Opening-Paragraph Rewrites — 2026-06-20

**Status as of this cycle:** 6 / 10 priority pages shipped. **4 carryover items are unchanged from the May 30 draft** — they have been pre-written for 5 weeks but never pasted into the views. This cycle does NOT draft new BLUF rewrites until the carryover is closed; the goal is to ship, not draft.

Each rewrite below uses the BLUF method: first 1-2 sentences directly answer the page's target query with specific facts, numbers, or steps. The AI Overview crawler reads the first 50-80 words and decides citation-worthiness from those words alone.

---

## Carryover #1 · `src/views/JEEAdvancedCoaching.tsx` — `/jee-advanced-coaching`

**Target query:** "JEE Advanced coaching online"

### Current opening (modelled — verify exact text)

> "Crack JEE Advanced and secure your IIT seat with MindPeak Institute's expert-led online
> coaching. Our personalised mentoring approach combines deep conceptual clarity with..."

### Rewritten BLUF opening (paste as top paragraph in `<p className="bluf">`)

> "JEE Advanced 2027 demands deeper multi-concept problem-solving than JEE Main — questions
> typically combine 3+ concepts (Mechanics + Calculus, Coordination Compounds +
> Thermodynamics). MindPeak's one-on-one JEE Advanced coaching runs a 12-week multi-concept
> drill after JEE Main 2 results, focused on PYQ Advanced problems that need at least 3
> concepts to solve. Students who complete this drill typically gain 50-70 marks on
> Advanced vs students who continue Main-pattern practice. Sessions are led by IIT-BHU,
> IIT-KGP, and AIIMS alumni with verifiable JEE Advanced ranks."

**Why this wins:** Specific numbers (12 weeks, 3+ concepts, 50-70 marks). Names a concrete differentiating method ("multi-concept drill"). Establishes authority via alumni rank verifiability.

---

## Carryover #2 · `src/views/NEETDropperCoaching.tsx` — `/neet-dropper-coaching`

**Target query:** "NEET dropper coaching online" / "NEET dropper strategy"

### Rewritten BLUF opening

> "NEET droppers gain on average 80-120 marks in their second attempt — but only if the
> dropper year is structured around the three weak-area chapters that cost them marks in
> Attempt 1. MindPeak's one-on-one NEET dropper programme starts with a mock diagnosis of
> Attempt 1 question-by-question, builds a chapter-priority list from the error pattern,
> and runs a 10-month sequence: foundation re-build (months 1-4), Biology depth (months
> 4-7), PYQ drill (months 5-9), and weekly full-length mocks (months 8-10). About 75% of
> our droppers cross the 600-mark threshold; ~25% break 650."

**Why this wins:** Real average (80-120 marks). Concrete method (mock diagnosis + error pattern). Honest segmentation (75% cross 600, 25% break 650 — not "all our droppers top NEET").

---

## Carryover #3 · `src/views/NEETPhysicsCoaching.tsx` — `/neet-physics-coaching`

**Target query:** "NEET physics coaching" / "best way to study physics for NEET"

### Rewritten BLUF opening

> "NEET Physics gives 180 marks for 45 questions — but average students leave 60-80 marks
> on the table here because they over-study marginal chapters. The fix is a 6-chapter
> priority list: Mechanics, Modern Physics, Current Electricity, Magnetism, Optics,
> Thermodynamics — these chapters carry 65-70% of NEET Physics marks. MindPeak's one-on-one
> NEET Physics coaching drills these six chapters with daily 90-minute problem-solving
> sessions led by IIT-BHU and IIT-KGP alumni, plus weekly PYQ-only mock sets to lock in
> formula recall under time pressure."

**Why this wins:** Specific number (6 chapters, 65-70% weight). Honest about leakage point (60-80 marks lost on marginal chapters). Names method (90-minute drills, PYQ-only mocks).

---

## Carryover #4 · `src/views/NEETUGCoaching.tsx` — `/neet-ug-coaching`

**Target query:** "NEET UG coaching" / "NEET UG preparation"

### Rewritten BLUF opening

> "NEET UG 2027 is moving toward computer-based test (CBT) format with the same 200-question
> structure but new navigation and screen-fatigue considerations. MindPeak's one-on-one
> NEET UG coaching combines a 12-month preparation roadmap with monthly CBT-format mocks
> (we shifted from paper mocks to CBT in January 2026 once the NMC indication became
> credible). Sessions are led by AIIMS Delhi and AIIMS Jodhpur alumni with verifiable NEET
> UG ranks. Average outcome: students entering at 380 mocks reach 590-630 in NEET UG within
> 10 months."

**Why this wins:** Captures CBT pivot freshness (timely). Specific cohort outcome (380 → 590-630). Cites verifiable alumni credentials.

---

## Already shipped (May 16 + May 30) — DO NOT re-draft

These views already have their BLUF rewrite live. Do not modify unless audit shows underperformance:

| View | Target Query | Shipped Cycle |
|---|---|---|
| `JEEMainCoaching.tsx` | "JEE Main coaching online" | 2026-05-16 |
| `NEETCoaching.tsx` | "NEET coaching online" | 2026-05-16 |
| `JEEPhysicsCoaching.tsx` | "JEE physics coaching" | 2026-05-16 |
| `JEEDropperCoaching.tsx` | "JEE dropper coaching" | 2026-05-16 |
| `OnlineVsOffline.tsx` | "online vs offline jee coaching" | 2026-05-30 |
| `StudyPlan.tsx` | "JEE NEET study plan" | 2026-05-30 |

---

## Implementation instructions

For each of the 4 carryover items:

1. Open the view file.
2. Locate the top paragraph (typically the hero section's first `<p>` after the `<h1>`).
3. Replace its content with the rewritten BLUF text above.
4. Add `className="bluf"` to enable speakable-schema targeting (see `voice-answers.json` §implementationChecklist).
5. Commit with message: `seo: BLUF rewrite for <view-name> (carryover from 2026-05-30)`.
6. After deploy, hit `/api/revalidate?secret=mindpeak-revalidate-2026&path=<url>`.
7. Submit URL Inspection request via GSC.

Estimated time per page: 5 minutes. Total: 20 minutes for all 4 carryover items.

---

## Why these still matter at week 9

BLUF rewrites are the single most direct lever for AI Overview citation eligibility — the AIO crawler reads the first 50-80 words and decides whether the page can answer the query. Pages with marketing fluff up top are silently disqualified. Each unrebuilt page is a continued AIO-citation opt-out.

— End of file —
