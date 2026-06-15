/**
 * Hand-written, per-slug content enrichments for the highest-value programmatic
 * blog posts (from the 2026-06-12 GSC audit, section D).
 *
 * WHY THIS EXISTS — and why it is NOT a template:
 * The comparison / cutoff / syllabus posts are generated from shared templates
 * (`programmaticBlogs.ts`). Editing those templates to add "AIIMS Delhi's
 * closing rank" or "AP EAMCET Maths weightage" would inject the same noun-swapped
 * block into 60+ unrelated posts — exactly the scaled-content pattern that earned
 * the March 2026 penalty. Instead, each entry below is researched, page-specific
 * data (real cutoff ranks, real exam patterns, real chapter weightage) that
 * applies to ONE post only. It is appended once, in `improveBlogContent`.
 *
 * Keys are the post slug WITHOUT the trailing exam year, so an enrichment
 * survives the annual CURRENT_EXAM_YEAR slug rollover. `{Y}` is the year
 * placeholder; historical data years (2022–2025) are written literally because
 * they are facts, not the current cycle.
 *
 * Sources verified June 2026 from official/aggregator data (Careers360, PW,
 * CollegeDekho, Shiksha). Cutoff ranks are All-India-Quota MBBS closing ranks.
 */

import { CURRENT_EXAM_YEAR } from '@/lib/examYears';

const Y = String(CURRENT_EXAM_YEAR);

/**
 * Each enrichment is a markdown block (H2 sections + table + FAQs) that answers
 * the exact query the page ranks for, with concrete numbers the templated body
 * was missing. Written to read like one teacher's notes, not a fill-in template.
 */
const ENRICHMENTS: Record<string, string> = {
  /* ───────────────────────── AIIMS Delhi NEET cutoff ─────────────────────────
     Query: "aiims delhi cut off" (pos ~8–10, 0% CTR — snippet showed no numbers).
     Gap none of the SERP leaders front-load: the actual year-wise closing AIR. */
  'neet-cutoff-aiims-delhi': `## AIIMS Delhi NEET Cutoff — Year-wise Closing Ranks (the number you actually need)

AIIMS Delhi has the single most competitive MBBS seat in India. Admission runs
through the common NEET-UG counselling conducted by MCC under the 15% All India
Quota plus the institute's seats — there is no separate AIIMS entrance any more.
What decides your seat is your **All India Rank**, so here are the real AIQ MBBS
closing ranks, not a generic "expected cutoff":

| NEET Year | General (AIR) | OBC | SC | ST | EWS |
|---|---|---|---|---|---|
| 2025 | 48 | 206 | 644 | 1,405 | 254 |
| 2024 | 47 | 186 | 647 | 1,150 | — |
| 2023 | 57 | 255 | 989 | 1,624 | — |
| 2022 | 61 | — | — | — | — |

**Read this honestly:** for an unreserved candidate, the AIIMS Delhi MBBS seat has
closed inside the **top ~50 ranks in the whole country** for four years running.
In recent NEET papers that corresponds to roughly **710–715 out of 720** — you can
afford to lose only a handful of marks across 180 questions. If you are targeting
AIIMS Delhi specifically (not "an AIIMS"), your realistic goal is a near-perfect
paper, and a single silly mistake in Biology can be the difference between AIR 30
and AIR 300.

**A more reachable framing:** the other 19 AIIMS campuses close far softer (Jodhpur,
Bhopal, Bhubaneswar etc. routinely close in the few-hundreds to low-thousands for
General). If your honest target score is 680–700, you are competing for those seats
and the top state government colleges — not for AIIMS Delhi. Set the target college
to the score you can actually hit, then work backwards.

### FAQ — AIIMS Delhi cutoff

**Q: What NEET marks do I need for AIIMS Delhi?**
A: Around 710+/720 for General. The seat has closed inside AIR ~50 every year
since 2022, and at that rank the marks band is roughly 710–715. There is no fixed
"cutoff mark" — it is purely a rank race, and the rank moves a few points each year
with paper difficulty.

**Q: Is AIIMS Delhi cutoff higher than other AIIMS?**
A: Yes, by a wide margin. AIIMS Delhi closes around AIR 50 (General); most other
AIIMS campuses close anywhere from a few hundred to a few thousand. "AIIMS" is not
one cutoff — Delhi is the hardest by far.

**Q: My rank is ~250 General — can I get AIIMS Delhi?**
A: Not Delhi in the General pool (it closed at 47–61). But AIR ~250 is comfortably
inside range for several newer AIIMS campuses and top central/state government
colleges. Run the {Y} MCC choice-filling with realistic preferences rather than
locking only on Delhi.`,

  /* ───────────────────────── COMEDK UGET complete guide ──────────────────────
     Query: "comedk exam pattern" (pos ~12). Gap: an above-the-fold pattern table
     and the no-negative-marking strategy implication. */
  'comedk-complete-guide': `## COMEDK UGET Exam Pattern at a Glance ({Y})

COMEDK UGET is conducted by the **Consortium of Medical, Engineering and Dental
Colleges of Karnataka** for admission to private engineering seats in Karnataka —
it is a *separate* exam from KCET (which covers government-quota seats). Here is the
pattern in one table so you don't have to dig for it:

| Parameter | COMEDK UGET |
|---|---|
| Mode | Computer-based test (CBT) |
| Total questions | 180 MCQs |
| Sections | Physics 60 · Chemistry 60 · Mathematics 60 |
| Marks | 1 mark per question (180 total) |
| Negative marking | **None** |
| Duration | 3 hours |
| Syllabus | Class 11 & 12, NCERT/CBSE-aligned (~33% Class 11, ~67% Class 12) |
| Tie-break | Maths score → Physics → Chemistry → fewer wrong answers → age |

### The one strategic consequence of "no negative marking"

Because a wrong answer costs you nothing, the optimal COMEDK strategy is the
opposite of NEET/JEE: **leave nothing blank.** Attempt every one of the 180
questions. After you have solved everything you genuinely know, spend the last 10
minutes making educated guesses on the rest — even a 1-in-4 blind guess has
positive expected value here. Students who carry over JEE's "skip if unsure"
instinct routinely leave 15–20 marks on the table.

### Which colleges a COMEDK rank unlocks

COMEDK feeds ~150+ participating engineering colleges (overwhelmingly private,
Bengaluru-heavy). The realistic rank-to-college map:

| COMEDK rank (CSE-ish) | Representative colleges |
|---|---|
| Under ~1,500 | RV College of Engineering, BMS College of Engineering, MS Ramaiah |
| ~1,500–6,000 | PES University, Dayananda Sagar, BMSIT, RNSIT |
| ~6,000–20,000 | Sir M Visvesvaraya, New Horizon, Acharya, CMRIT |
| ~20,000–40,000 | Branch/college trade-offs widen; core branches still available |

**Honest note:** COMEDK's top colleges (RVCE, BMSCE) are excellent and a genuinely
strong outcome — but the seats there are private-quota and the fees are
substantially higher than a KCET government seat at the same college. If you also
clear KCET with a good rank, compare the *government* seat fee against the COMEDK
private seat before deciding. For many Karnataka students the smart play is to sit
all three (KCET, COMEDK, JEE Main) and choose on the final fee-vs-college table.

### FAQ — COMEDK

**Q: Is there negative marking in COMEDK?**
A: No. Every question is +1 for correct and 0 for wrong, so you should attempt all
180.

**Q: Is COMEDK tougher than KCET?**
A: Slightly. COMEDK questions are pitched a notch above KCET's textbook-direct style
(closer to JEE Main in places, especially Maths), but well below JEE Advanced. If
your JEE Main prep is on track, COMEDK needs little extra beyond timed practice.

**Q: Does COMEDK accept JEE Main score?**
A: No — COMEDK runs its own test. KCET, COMEDK and JEE Main are three separate
exams; a Karnataka student targeting top private colleges typically writes COMEDK
regardless of their JEE result.`,

  /* ───────────────────── AP EAMCET syllabus + weightage ──────────────────────
     Query cluster: "ap eamcet syllabus" + "...weightage" (~40% of impressions).
     Gap: an actual chapter-wise weightage table, not prose. */
  'ap-eamcet-syllabus-complete-guide': `## AP EAMCET Chapter-wise Weightage — Where the Marks Actually Are

The AP EAMCET (now AP EAPCET) engineering paper is **160 questions / 160 marks, no
negative marking, 3 hours** — and the single most important fact most syllabus
pages bury is the subject split:

| Subject | Questions | Share of paper |
|---|---|---|
| **Mathematics** | 80 | 50% |
| Physics | 40 | 25% |
| Chemistry | 40 | 25% |

**Maths is half your rank.** A student who is average in Physics/Chemistry but
strong in Maths will out-rank a "balanced" student here — the weighting rewards it
more than JEE Main does. Plan your hours accordingly.

### High-weightage chapters (approximate question counts, recent papers)

**Mathematics (80 Q):**

| Area | Typical questions |
|---|---|
| Calculus (limits, differentiation, integration) | 5–7 |
| Vector Algebra | 5–6 |
| Algebra (functions, matrices, determinants) | 4–6 |
| Coordinate Geometry (circle, parabola, ellipse) | 3–4 |
| Probability | 3–4 |
| Trigonometry | 3–4 |

**Physics (40 Q):** Mechanics dominates (~25% of the section); then Heat &
Thermodynamics (4–5), Magnetism & EMI (~10%), Current Electricity (2–3), Modern
Physics (~8%), Waves (~9%).

**Chemistry (40 Q):** Physical + Organic together carry ~29 of 40 marks. Organic
(Hydrocarbons & functional groups) 4–5, p-Block ~4, Chemical Bonding 3–4, d- & f-
Block ~3.

### The 70% rule

If you master **Calculus + Vector Algebra + Algebra** in Maths, **Mechanics +
Thermodynamics + Electromagnetism** in Physics, and **Physical + Organic** in
Chemistry, you have covered roughly **70% of the paper**. For a student short on
time, that is the priority order — finish these to high accuracy *before* chasing
the long tail of low-frequency chapters.

### If you're also preparing for JEE Main

Good news: the AP EAMCET syllabus overlaps heavily with JEE Main at the concept
level, so you are not studying two separate courses. The differences are in
*style*, not content — EAMCET questions are more direct and formula-based, with no
negative marking, so the skill to add is **speed and full-attempt discipline**, not
new theory. Use your JEE prep as the foundation and add timed EAMCET PYQ sets.

### FAQ — AP EAMCET syllabus

**Q: Which subject has the most weightage in AP EAMCET?**
A: Mathematics — 80 of 160 questions (50%). Physics and Chemistry are 40 each.
Strong Maths is the fastest route to a low rank.

**Q: Is there negative marking in AP EAMCET?**
A: No. Attempt all 160 questions; there is no penalty for a wrong answer.

**Q: How many chapters should I focus on?**
A: About 20 high-frequency chapters across the three subjects account for ~70% of
the marks. Secure those to high accuracy first, then expand.`,

  /* ───────────────────── KCET vs JEE Advanced comparison ──────────────────────
     Query: "is kcet easier than jee" (pos ~4). Gap: a direct yes/no up top + the
     Karnataka-specific 50:50 rank quirk national pages miss. */
  'kcet-vs-jee-advanced-comparison': `## Is KCET Easier Than JEE Advanced? Short Answer: Yes — Significantly

Let's not bury it. **KCET is far easier than JEE Advanced**, and it isn't close.
KCET follows the Karnataka PU board syllabus with direct, formula-based,
single-step MCQs that mirror textbook examples. JEE Advanced is widely considered
India's hardest UG entrance: multi-concept problems, unfamiliar question types, and
variable marking designed to separate the top fraction of an already-selected pool.
A student comfortable with KCET-level questions will find JEE Advanced a different
universe of difficulty.

| Parameter | KCET | JEE Advanced |
|---|---|---|
| Conducting body | KEA (Karnataka) | IITs (rotating) |
| Pattern | 180 MCQs (60 PCM each), 1 mark each | Two papers, multi-format, variable marks |
| Negative marking | **None** | Yes (and variable per section) |
| Question style | Direct, formula/NCERT-textbook level | Multi-concept, application, novel |
| Per-subject time | ~80 min per subject paper, across 2 days | 3 hours per paper (P1 + P2) |
| Unlocks | Karnataka govt + private engineering | The 23 IITs |

### The Karnataka quirk national comparison pages miss: your board marks count 50%

Here is the detail that actually changes how a Karnataka student should plan, and
that generic "X vs Y" pages never mention: **KCET engineering rank is computed
50:50 from your KCET score and your 2nd PUC (Class 12) PCM marks.** Your board exam
is not just an eligibility gate — it is literally half your rank.

The contrast with JEE Advanced is stark. For JEE, your board marks only need to
clear a threshold (75% / top-20-percentile) for IIT eligibility; they contribute
*nothing* to your rank. So:

- For **KCET**, a 95%+ in 2nd PUC PCM is as valuable as a great KCET attempt. Neglect
  boards and you cap your rank no matter how well you do in the entrance.
- For **JEE Advanced**, boards are pass/fail for eligibility; every rank point comes
  from the entrance itself.

This single rule means a disciplined board-syllabus student is structurally
advantaged in KCET, while JEE Advanced rewards depth and problem-solving range.

### Which should a Karnataka student prioritise? (an honest take)

- **KCET should usually be your primary target** if you want a top Karnataka college
  (UVCE, RVCE/BMSCE government seats, etc.) and a safe, high-probability outcome.
  It is the realistic path for the large majority of students.
- **JEE Advanced is worth it** *only if* you can also clear JEE Main strongly and you
  specifically want an IIT — and you are willing to invest in the deeper, harder
  preparation that Advanced demands. It is a high-risk, high-reward add-on, not a
  replacement for KCET.
- **Doing both is reasonable** because the concept base overlaps ~80%+. The extra
  work for Advanced is depth and problem variety, not new chapters. But be honest
  about your bandwidth: half-preparing for Advanced can hurt your KCET board-and-
  entrance focus, which is the seat you're far more likely to actually land.

### FAQ — KCET vs JEE Advanced

**Q: Can I crack KCET with only JEE preparation?**
A: Largely yes for the syllabus, but two adjustments matter: practise KCET's faster,
direct MCQ style, and — critically — don't neglect your 2nd PUC board marks, which
are 50% of your KCET rank. JEE prep alone won't fix a weak board score.

**Q: Is KCET rank based only on the entrance exam?**
A: No. KCET engineering rank = 50% KCET marks + 50% 2nd PUC PCM marks. This is the
biggest difference from JEE, where boards don't affect rank.

**Q: If KCET is easier, why attempt JEE Advanced at all?**
A: Because it unlocks the IITs, which KCET cannot. Difficulty and reward go together
— Advanced is harder precisely because the seat it offers is one KCET doesn't. Choose
based on the college you actually want, not on which exam is easier.`,

  /* ───────────────────────── CUET vs JEE Main ─────────────────────────────────
     Query: "cuet vs jee" (pos ~7). Every SERP leader says "CUET is easier" and
     stops there. The gap none of them front-load: the two exams open *different*
     colleges — CUET is not a back-door to NIT/IIIT — so "easier" is the wrong
     question. Lead with the colleges intent + an honest decision rule. */
  'cuet-vs-jee-main-comparison': `## CUET vs JEE Main — "Easier" Is the Wrong Question

Yes, CUET UG is easier than JEE Main: it is drawn only from the **Class 12 NCERT
syllabus**, it is **MCQ-only** (no numerical-answer questions), and it skips the
experimental/depth topics JEE loves. But difficulty is not the decision — the two
exams unlock **completely different colleges**, and that is what most comparisons
bury. Pick the exam that opens the door you actually want.

| | CUET UG | JEE Main |
|---|---|---|
| Syllabus scope | Class 12 NCERT only | Class 11 **and** 12 |
| Question type | MCQ only | MCQ + numerical-answer |
| Negative marking | Yes (recent cycles +5 / −1) | Yes (−1 on MCQs; 0 on numerical) |
| Difficulty | Moderate, textbook-direct | High, multi-concept |
| Unlocks | Central-university B.Tech/integrated programs | NITs, IIITs, GFTIs (+ JEE Advanced gateway to IITs) |

### The detail that actually decides it: which colleges accept each

This is what "CUET is easier" pages never tell you plainly:

- **CUET UG does NOT get you into the IITs, NITs, IIITs or GFTIs.** Those are JEE
  Main only (and JEE Advanced for the IITs). If your goal is an NIT or IIT, CUET is
  not a shortcut to it — it cannot be.
- **CUET engineering seats are at central universities** — DU, BHU, Tezpur
  University, Pondicherry University, Central University of Rajasthan/Haryana/Punjab,
  HNBGU Garhwal, AMU, and similar. These are genuinely good government institutions,
  but they are a *different* set from the JEE ecosystem.

So the honest framing is: if you want NIT/IIIT/IIT, you must clear JEE Main — there
is no CUET route to those, however much easier CUET is. If you are aiming at a
central-university B.Tech or a non-engineering degree (the bulk of what CUET is
built for), CUET is the right and far less brutal exam.

### A 30-second decision rule

1. **Target is an IIT/NIT/IIIT?** → JEE Main is non-negotiable. Treat CUET only as a
   low-effort safety net (your JEE prep already covers its Class 12 portion).
2. **Target is a central-university engineering or B.Sc./integrated programme?** →
   CUET is your main exam; don't burn a year on JEE Advanced-grade depth you won't
   use.
3. **Genuinely unsure?** → Prepare JEE Main properly. It is the strictly harder
   syllabus, so anyone JEE-ready can walk into CUET, but the reverse is not true.

### FAQ — CUET vs JEE Main

**Q: Is CUET easier than JEE Main?**
A: Yes. CUET covers only Class 12 NCERT, is MCQ-only, and is pitched at textbook
level, while JEE Main spans Class 11 and 12 with deeper, multi-step problems. A
JEE-prepared student usually finds CUET's PCM sections comfortable.

**Q: Can I get into an NIT or IIT through CUET?**
A: No. NITs, IIITs and GFTIs admit through JEE Main; the IITs through JEE Advanced.
CUET is accepted by central universities, not the JEE-counselling institutes. If
those are your target, CUET cannot substitute for JEE Main.

**Q: Can my JEE Main preparation cover CUET too?**
A: Largely yes for the Class 12 portion, since CUET is a subset of the JEE syllabus.
The only adjustments are practising CUET's strictly-MCQ format and its negative
marking. Many students sit both — JEE for the premier institutes, CUET as a backup.`,

  /* ───────────────────────── BITSAT vs JEE Main ───────────────────────────────
     Query cluster: "bitsat vs jee mains" + "...syllabus overlap" (pos ~7–9).
     SERP leaders give the overlap % but omit (a) the two extra sections JEE
     students never prepare and (b) the real BITS cutoff scores. Add both. */
  'bitsat-vs-jee-main-comparison': `## BITSAT vs JEE Main — Pattern, Overlap & the Scores BITS Actually Wants

The syllabus overlap is **~85%** — Physics, Chemistry and Maths in BITSAT are the
same NCERT Class 11–12 you already do for JEE Main. So the differences that matter
are *structural*, not topical, and there are two JEE students consistently miss.
Here is the current BITSAT pattern beside JEE Main:

| Parameter | BITSAT | JEE Main |
|---|---|---|
| Total questions | 130 (+12 optional bonus) | 90 |
| Sections | Physics 30 · Chemistry 30 · Maths/Bio 40 · **English + Logical Reasoning 30** | Physics 30 · Chemistry 30 · Maths 30 |
| Marking | +3 / −1 | +4 / −1 (MCQ); 0 on numerical |
| Total marks | 390 (max 426 with bonus) | 300 |
| Duration | 3 hours | 3 hours |
| Time per question | ~1.4 min | ~2.4 min |
| Question type | MCQ only | MCQ + numerical |

### What JEE students underestimate #1: the English + Logical Reasoning section

30 of BITSAT's 130 questions — nearly a quarter of the paper — are **English
Proficiency and Logical Reasoning**, which simply do not exist in JEE Main. They are
not hard, but they are unfamiliar, and a JEE aspirant who walks in cold can drop 40+
easy marks here. A week of practice on series, analogies, figure-completion and basic
grammar/vocabulary is the single highest-return BITSAT-specific prep you can do.

### What JEE students underestimate #2: speed, not depth

You get **~1.4 minutes per question against JEE Main's ~2.4**. BITSAT questions are
individually *easier* than JEE Main's, but you must solve them almost twice as fast,
with no numerical-answer breathers. The skill BITSAT rewards is rapid, accurate,
single-pass MCQ solving — train with strict per-question timers, not untimed sets.

### The real numbers: what score gets you BITS CSE

Most comparison pages stop at "it's competitive." The concrete targets (out of 390):

| Campus | CSE cutoff (recent years) |
|---|---|
| BITS Pilani | ~304–331 |
| BITS Goa / Hyderabad | ~275–300 |

If you finish all 130 questions confidently, attempt the **12 bonus questions** — but
only then, because choosing them locks you out of revisiting the main paper. They can
add up to 36 marks (taking the max to 426), which is exactly the cushion that pushes a
borderline score over a campus cutoff.

### Should you sit both? (honest take)

For most JEE Main aspirants, **yes** — the 85% overlap means BITSAT costs you only a
few days of format-specific prep (English/LR + timed practice) for a shot at BITS,
which for CSE/EEE rivals the better NITs. The case *against* is if your JEE prep is
shaky: don't let BITSAT's extra sections or a second exam centre split a focus that
your primary target still needs.

### FAQ — BITSAT vs JEE Main

**Q: Is BITSAT easier than JEE Main?**
A: The questions are easier and the syllabus overlaps ~85%, but BITSAT is harder on
*time* (~1.4 min/question vs ~2.4) and adds English + Logical Reasoning that JEE
doesn't test. Easier content, tougher pace.

**Q: How much syllabus overlap is there between BITSAT and JEE Main?**
A: About 85%. The PCM is essentially the same NCERT Class 11–12. The non-overlap is
BITSAT's English Proficiency and Logical Reasoning section (30 questions) and JEE
Main's numerical-answer questions.

**Q: What BITSAT score do I need for CSE at BITS Pilani?**
A: Roughly 304–331 out of 390 in recent years for Pilani CSE; about 275–300 for Goa
and Hyderabad CSE. Use the optional 12 bonus questions only after finishing the main
130 — they can add the marks that clear a cutoff.`,

  /* ───────────────────────── KCET Physics preparation ─────────────────────────
     Query: "important chapters for kcet physics" (pos ~6). Gap: a concrete
     chapter-weightage table + the no-negative-marking attempt-all consequence +
     the board-marks-are-50%-of-rank reminder specific to KCET. */
  'how-to-prepare-physics-for-kcet': `## KCET Physics — Where the 60 Marks Actually Sit

KCET Physics is **60 questions, 1 mark each, no negative marking, ~80 minutes**, and
roughly **80% of it comes from 2nd PUC (Class 12)** and 20% from 1st PUC (Class 11).
About half the paper is numerical, so formula fluency matters more than wordy theory.
Here is where the marks concentrate, so you study in the right order:

| Area | Approx. share of the Physics section | Priority |
|---|---|---|
| Mechanics (kinematics, laws, work-energy, rotation, gravitation) | ~30% | Do first |
| Electricity & Magnetism (Current Electricity is the single top chapter) | ~28% | Do first |
| Optics (Ray + Wave) | ~12–15% | High |
| Modern Physics (dual nature, atoms, nuclei, semiconductors) | ~12–15% | High |
| Heat & Thermodynamics, Oscillations & Waves | ~10–12% | Medium |

**The takeaway:** Mechanics + Electricity & Magnetism together are nearly **60% of
the section.** If you are short on time, secure these two to high accuracy before
touching anything else — Current Electricity, Electrostatics and Mechanics are the
chapters that decide a KCET Physics score.

### The strategy "important chapters" lists never mention: no negative marking

KCET has **no negative marking**, which changes how you play the paper. Unlike JEE,
where a wrong answer costs you, here a blind guess has only upside. So: solve every
question you know, then **attempt all 60** — never leave a blank. On the toughest
numericals, eliminate two options and guess; even a 1-in-2 has positive expected
value. Carrying JEE's "skip if unsure" habit into KCET silently throws away marks.

### Don't forget: your board marks are half your rank

KCET engineering rank is computed **50% from KCET + 50% from your 2nd PUC PCM board
marks.** That means a brilliant Physics paper is only half the battle — neglecting
your PU board Physics caps your rank no matter how well you do here. Prepare the
NCERT/PU concepts once, well, and they pay off in *both* the board exam and KCET.

### A focused 6-week Physics plan

| Weeks | Focus |
|---|---|
| 1–2 | Mechanics end to end + daily numerical sets |
| 3–4 | Current Electricity, Electrostatics, Magnetism & EMI |
| 5 | Optics + Modern Physics |
| 6 | Heat/Thermo, Waves + full timed KCET PYQ papers (attempt all 60) |

### FAQ — KCET Physics

**Q: Which are the most important chapters for KCET Physics?**
A: Mechanics (~30%) and Electricity & Magnetism (~28%) — together nearly 60% of the
section, with Current Electricity the single highest-yield chapter. Then Optics and
Modern Physics. Around 80% of the paper is Class 12.

**Q: Is there negative marking in KCET Physics?**
A: No. Every question is +1 for correct, 0 for wrong — so attempt all 60 and never
leave a blank, guessing intelligently on the ones you're unsure of.

**Q: How much of KCET Physics is numerical?**
A: Roughly half. KCET rewards fast, accurate formula application over long theory, so
practise timed numerical sets rather than only reading concepts.`,

  /* ─────────────────── Environmental Issues (NEET Biology) ────────────────────
     Query: "environmental issues neet" (pos ~8). Gap: an exact NCERT subtopic
     checklist + honest "low-weightage, high-ROI, last-week chapter" framing +
     the specific factual hooks (BOD, eutrophication, ozone) that get tested. */
  'how-to-prepare-environmental-issues-for-neet': `## Environmental Issues for NEET — A Small, High-ROI Chapter (Don't Over-Invest)

Let's be honest about weightage: Environmental Issues is a **small chapter — about
2–3% of NEET Biology, typically 1–2 questions.** It is **100% from NCERT**, almost
entirely **factual or assertion-reason** in style, with essentially no problem-solving.
That makes it a *high-return, low-effort* chapter: a couple of focused revisions can
near-guarantee those marks, but it does **not** deserve days of study at the expense
of high-weightage units like Genetics, Ecology proper, or Human Physiology.

### The exact NCERT sub-topics that get tested

Don't read it as a story — memorise this checklist, because questions come straight
off these facts:

| Topic | The facts NEET actually asks |
|---|---|
| Air pollution & control | Electrostatic precipitator, scrubber, catalytic converter (needs unleaded petrol) |
| Water pollution | **BOD** (higher BOD = more pollution), **eutrophication**, algal bloom, biomagnification (DDT in food chains) |
| Case studies | Integrated waste-water treatment (Arcata), ecological sanitation |
| Solid & e-waste | Sanitary landfills, e-waste recycling concerns |
| Agrochemicals | Eutrophication from fertilisers, organic farming/IPM as alternatives |
| Greenhouse effect & global warming | Order of greenhouse gases (CO₂ > CH₄ > others), consequences |
| Ozone depletion | UV-B effects, **CFCs**, the Montreal Protocol, "Bad Ozone vs Good Ozone" |
| Deforestation | Slash-and-burn (jhum), reforestation, Chipko/Joint Forest Management |

### The classic high-yield hooks (worth a permanent place on your revision sheet)

- **BOD**: the amount of oxygen microbes need to break down organic matter — *higher
  BOD means more organic pollution.* A perennial one-liner.
- **Eutrophication**: nutrient enrichment (nitrogen/phosphorus) → algal bloom → oxygen
  depletion → fish death. Know the *sequence*, not just the word.
- **Biomagnification**: pollutant concentration increases up the trophic levels (classic
  example: DDT, highest in fish-eating birds).
- **Montreal Protocol** = ozone (CFCs); **Kyoto Protocol** = greenhouse gases. NEET
  loves to swap these in assertion-reason questions.

### How to actually prepare it

Read the NCERT chapter once for understanding, then convert it into the table above
and revise it twice — ideally in the **last week** before the exam, alongside the
other short Ecology chapters. That timing is deliberate: it's pure recall, so it
benefits most from being fresh, and it frees your earlier weeks for the units that
carry real weight.

### FAQ — Environmental Issues for NEET

**Q: How important is Environmental Issues for NEET?**
A: Low individual weightage — about 2–3% of Biology, usually 1–2 questions — but it's
100% NCERT and factual, so it's among the easiest marks in the paper. Worth securing,
not worth over-studying.

**Q: What are the most asked topics from Environmental Issues?**
A: BOD and eutrophication (water pollution), the greenhouse effect/global warming,
ozone depletion and CFCs (Montreal Protocol), and biomagnification. These recur across
NEET PYQs as direct or assertion-reason questions.

**Q: When should I study Environmental Issues in my NEET prep?**
A: Late — it's a recall-heavy chapter, so it pays to revise it in the final week with
the other short Ecology topics rather than early in your schedule.`,
};

/**
 * Returns the hand-written enrichment block for a blog slug, if one exists.
 * The trailing exam year (e.g. `-2027`) is stripped before lookup, and `{Y}`
 * placeholders are replaced with the current exam year.
 */
export function getBlogContentEnrichment(slug: string): string | undefined {
  const base = slug.replace(/-20\d{2}$/, '');
  const block = ENRICHMENTS[base];
  if (!block) return undefined;
  return block.replaceAll('{Y}', Y);
}
