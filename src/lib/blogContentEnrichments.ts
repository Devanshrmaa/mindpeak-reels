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
  /* ───────────────────── KCET Physics — important chapters ───────────────────
     Query: "important chapters for kcet physics" (pos ~6). Gap: the templated body
     used auto-generated weightage %; this is real, section-level weightage with the
     1st-vs-2nd-PUC split and an honest "the per-chapter tables online don't add up"
     warning. Section shares are labelled approximate on purpose. */
  'how-to-prepare-physics-for-kcet': `## KCET Physics — Where the 60 Marks Actually Sit (and what to study first)

KCET Physics is **60 one-mark MCQs in 70 minutes, no negative marking**, drawn from
the Karnataka 1st & 2nd PUC syllabus. Before chasing a chapter list, fix the two
numbers that decide your strategy:

- **~65–70% of questions come from 2nd PUC (Class 12); ~30–35% from 1st PUC (Class 11).**
  Class 12 is where most of your marks live — but the Class 11 mechanics base is
  what those Class 12 chapters are built on, so you can't skip it.
- **No negative marking ⇒ attempt all 60.** Even a blind guess has positive expected
  value. Leaving questions blank is the single most common KCET Physics mistake.

### Section-level weightage (approximate, from recent papers)

A warning first: most "chapter-wise weightage" tables floating around online add up to
80–90 questions for a 60-question paper — they are counting appearances *across several
years*, not one paper. Use **section shares**, which actually sum sensibly:

| Section | Approx. share of paper | ~Questions (of 60) |
|---|---|---|
| Mechanics (Motion, Laws of Motion, Work-Energy, Gravitation, Rotation, Oscillations) | ~30% | 17–19 |
| Electricity & Magnetism (Current Electricity, Electrostatics, Magnetism, EMI, AC) | ~28% | 16–18 |
| Modern Physics (Atoms, Nuclei, Dual Nature, Semiconductors) | ~14% | 8–9 |
| Heat & Thermodynamics (incl. Kinetic Theory) | ~12% | 7–8 |
| Optics & Waves | ~10% | 6–7 |
| Units, Measurement, Communication, EM Waves | ~6% | 3–4 |

**The headline:** Mechanics + Electricity & Magnetism alone are roughly **58–60% of the
paper**. If your time is short, these two blocks are non-negotiable before anything else.

### The high-yield chapters that reliably repeat

Within those blocks, the chapters that show up with multiple questions almost every year:
**Current Electricity, Gravitation, Oscillations, Thermodynamics, Magnetism & Matter,
Alternating Current, Electromagnetic Induction, and Atoms/Nuclei.** If you can only
deep-revise eight chapters in the final fortnight, revise these eight.

### Priority order for a student short on time

1. **Current Electricity + Electrostatics** — densest, most predictable, formula-driven.
2. **Mechanics core** (Laws of Motion, Work-Energy, Gravitation, Rotation).
3. **Magnetism, EMI, AC** — finish the full E&M block while the formulas are fresh.
4. **Thermodynamics + Kinetic Theory**, then **Modern Physics** (high return for low effort —
   mostly direct, definition/formula questions).
5. **Optics & Waves** last; secure the standard ray-optics and SHM-wave formula questions.

**Honest note:** KCET Physics is pitched at PU-board level — direct, single-step,
formula-recall questions, *easier than JEE Main*. If you are already on a JEE track, you
do not need new theory for KCET; you need **OMR speed and full-attempt discipline** (it is
an offline pen-paper OMR exam). Practise timed 60-question sets and never leave a bubble blank.

### FAQ — KCET Physics

**Q: Which chapters are most important for KCET Physics?**
A: At the section level, Mechanics (~30%) and Electricity & Magnetism (~28%) together make
up close to 60% of the paper. The individual chapters that repeat most are Current
Electricity, Gravitation, Oscillations, Thermodynamics, Magnetism, Alternating Current,
EMI and Modern Physics (Atoms/Nuclei).

**Q: Is KCET Physics from 1st PUC or 2nd PUC?**
A: Both, but weighted toward 2nd PUC — roughly 65–70% of questions come from Class 12
chapters and 30–35% from Class 11. Don't drop Class 11 mechanics; the Class 12 chapters
assume it.

**Q: Is there negative marking in KCET Physics?**
A: No. Every question is +1 for correct and 0 for wrong, so you must attempt all 60 —
guess the ones you're unsure of in the last few minutes.

**Q: Is KCET Physics harder than JEE Main Physics?**
A: No — it's noticeably easier. KCET asks direct, formula-based, single-step questions at
PU-board level. A JEE-track student's main adjustment is speed and OMR full-attempt
discipline, not new concepts.`,

  /* ───────────────────────── KCET Biology preparation ────────────────────────
     Query: "important chapters for kcet biology" (489 impr, pos ~4.9, page-1).
     Gap the SERP leaders miss: KCET Biology is a near-subset of NEET Biology, so
     a NEET-track student over-prepares. Real unit-level question counts + the
     no-negative-marking attempt-all rule + the PUC-wording caveat. */
  'how-to-prepare-biology-for-kcet': `## KCET Biology — Where the 60 Marks Actually Sit (and what NOT to over-study)

KCET Biology is **60 one-mark MCQs in 70 minutes, no negative marking**, set from the
Karnataka 1st & 2nd PUC syllabus (which is NCERT-aligned). Two numbers decide your strategy:

- **~60% of questions come from 2nd PUC (Class 12); ~40% from 1st PUC (Class 11).**
  Biology is more balanced toward Class 11 than KCET Physics is, because Class 11
  carries the heavy Botany — Plant Kingdom, Morphology/Anatomy of Flowering Plants,
  Cell Biology and Plant Physiology all sit there.
- **No negative marking ⇒ attempt all 60.** A blank is a guaranteed zero; a guess has
  positive expected value. Leaving bubbles empty is the most common KCET Biology mistake.

### Unit-level weightage (approximate, from recent papers)

Ignore the online "chapter-wise" tables that add up to 80-90 questions for a 60-question
paper — they count appearances *across several years*, not one paper. Unit shares sum
sensibly:

| Unit | Source | ~Questions (of 60) |
|---|---|---|
| Human Physiology (Digestion, Breathing, Circulation, Excretion, Locomotion, Neural & Chemical Coordination) | 1st & 2nd PUC | 10-12 |
| Diversity, Morphology & Anatomy (Plant & Animal Kingdom, Flowering Plants, Animal Tissues) | 1st PUC | 7-8 |
| Reproduction (Human + Flowering Plants + Reproductive Health) | 2nd PUC | 6-7 |
| Plant Physiology (Photosynthesis, Respiration, Plant Growth, Transport) | 1st PUC | 6-7 |
| Biology in Human Welfare + Biotechnology | 2nd PUC | 6-7 |
| Genetics & Evolution | 2nd PUC | 5-6 |
| Cell Biology, Cell Cycle & Biomolecules | 1st PUC | 4-5 |
| Ecology (Organisms & Populations, Ecosystem, Biodiversity) | 2nd PUC | 4-5 |

**The headline:** Human Physiology + Genetics & Evolution + Reproduction alone are close to
**half the paper (~22-25 questions)**. Within them, Neural Control & Coordination is the
single most reliable 1st-PUC topic (~3-4 questions) and Genetics & Evolution the heaviest
2nd-PUC unit (~5-6). Botany and Zoology each take roughly 30 of the 60 — do not neglect plants.

### The honest part: if you are a NEET aspirant, do NOT re-study for KCET Biology

KCET Biology is **essentially a subset of NEET Biology.** Same NCERT-aligned content, fewer
chapters, and the questions are easier — direct, single-line factual recall rather than NEET's
assertion-reason, multi-statement and match-the-column formats. For a student already on a
NEET track, KCET Biology needs **almost no new study**; it needs revision and attempt
discipline. The real trap is over-preparing it and stealing time from Physics/Maths.

Two caveats that genuinely differ:

- **Follow the Karnataka PUC textbook wording for the last lap.** ~95% overlaps with NCERT,
  but a handful of definitions, diagrams and example species follow the PU text. If you have
  studied only from NCERT, skim the 1st & 2nd PUC Biology texts once before the exam.
- **It rewards line-by-line reading, not problem-drilling.** Unlike Physics, most marks come
  from recall, so re-reading NCERT/PUC carefully beats solving hundreds of application
  problems. A disciplined NEET-track student can realistically target **55+/60**.

### FAQ — KCET Biology

**Q: Which chapters are most important for KCET Biology?**
A: At the unit level, Human Physiology (~10-12 questions), Genetics & Evolution (~5-6) and
Reproduction (~6-7) together make up nearly half the paper. The single most reliable topics
are Neural Control & Coordination (1st PUC) and Genetics & Evolution (2nd PUC). Don't drop
Botany — Plant Physiology, Morphology and Plant Kingdom are another ~13-15 questions.

**Q: How many questions are in KCET Biology and is there negative marking?**
A: 60 one-mark questions, 60 marks, and **no negative marking**, so you must attempt all 60 —
guess anything you're unsure of in the final minutes rather than leaving it blank.

**Q: Is KCET Biology the same as NEET Biology?**
A: Nearly — it's a subset. The content is NCERT-aligned and KCET asks easier, direct recall
questions instead of NEET's assertion-reason and multi-statement style. A NEET aspirant needs
little extra study; just revise, follow the Karnataka PUC textbook wording for the final lap,
and practise full-attempt OMR speed.

**Q: Is KCET Biology from 1st PUC or 2nd PUC?**
A: Both, weighted ~60% to 2nd PUC (Class 12) and ~40% to 1st PUC (Class 11). Class 11 carries
most of the Botany — Plant Kingdom, Morphology, Cell Biology and Plant Physiology — so it
cannot be skipped.`,

  /* ───────────────────── CUET vs JEE Main — engineering reality ───────────────
     Query: "cuet vs jee" (~85 impr, pos ~7). Gap none of the SERP leaders make
     unmissable: CUET will NOT get you into IITs/NITs/IIITs for B.Tech, and exactly
     which institutions a CUET score *can* unlock for engineering. */
  'cuet-vs-jee-main-comparison': `## CUET vs JEE Main for Engineering — Read This Before You Choose

The single most important thing to understand, and the thing comparison pages bury under
"both test PCM": **CUET and JEE Main are not interchangeable routes to the same colleges.**
They open *different doors*. If your goal is a B.Tech at the institutions most aspirants
actually mean by "engineering college," JEE Main is not optional.

### What each exam actually unlocks for B.Tech

| | JEE Main | CUET (UG) |
|---|---|---|
| IITs (via Advanced) | ✅ (Main → Advanced) | ❌ Never |
| NITs, IIITs, GFTIs (JoSAA) | ✅ | ❌ |
| Most top private engineering (BITS/VIT have own tests; others take JEE) | ✅ | Rarely |
| Central-university B.Tech (DU, BHU, AMU, Jamia, Tezpur, central univ. of Rajasthan/Haryana/Punjab/Jammu…) | Some | ✅ |
| State & many private/deemed univ. B.Tech | Some | ✅ (250+ universities) |

**The honest bottom line:** CUET *can* get you a B.Tech — at 40+ central universities and
200+ state/private/deemed universities (DU, BHU, AMU, Jamia Millia, Tezpur, several Central
Universities offer it). What CUET **cannot** do is get you into an IIT, NIT or IIIT. For
those, the only route is JEE (Main, then Advanced for IITs). So:

- If you want an IIT/NIT/IIIT seat → **JEE Main is mandatory; CUET is not a substitute.**
- If you'd be happy with a B.Tech from a good central or state university (and value the
  lighter, NCERT-level prep) → **CUET is a genuinely reasonable, lower-pressure path.**

### A 30-second decision framework

1. **Is an IIT/NIT/IIIT your real target?** → Prepare JEE Main. Add CUET only as a low-cost
   backup (your JEE PCM prep already covers CUET's domain subjects).
2. **Do you want a non-engineering degree** (BA Eco, B.Com, B.Sc, BBA, BCA, integrated law)?
   → CUET is the *primary* exam; JEE is irrelevant.
3. **Do you want engineering but find JEE-level prep unrealistic** for your timeline? → A
   central/state-university B.Tech via CUET is an honest, achievable goal — just go in
   knowing it is not the IIT/NIT pool.

### The smart combined play for a science student

Because CUET domain subjects are strictly **NCERT Class 12 level**, a student already
preparing JEE Main is ~70–80% ready for CUET PCM with zero extra theory. The *only* extra
work is CUET's **Language section and General Test** (current affairs, reasoning, quantitative
aptitude) — areas JEE never touches. Sitting both costs little and gives you a
central-university B.Tech as a safety net behind your JEE attempt. Always confirm the current
participating-university list on the official CUET portal, since it is revised each year.

### FAQ — CUET vs JEE Main

**Q: Can I get into an IIT or NIT through CUET?**
A: No. IITs admit only through JEE Advanced (which requires JEE Main first); NITs and IIITs
admit through JEE Main via JoSAA. CUET does not feed any of them. If those are your targets,
you must write JEE.

**Q: Can I do B.Tech through CUET at all?**
A: Yes — at 40+ central universities and 200+ state/private/deemed universities (DU, BHU,
AMU, Jamia Millia, Tezpur and others offer CUET-based B.Tech). It just won't include the
IIT/NIT/IIIT system.

**Q: Is CUET easier than JEE Main?**
A: Yes, clearly. CUET domain subjects stay at NCERT Class 12 level; JEE Main tests
application well beyond NCERT. But top central-university cutoffs run 95+ percentile, so
easy questions still demand near-perfect accuracy.

**Q: I'm preparing for JEE — should I also write CUET?**
A: Usually yes, as a backup. Your JEE PCM prep already covers CUET's domain papers; you only
need to add the Language and General Test sections. It's a cheap insurance policy for a
central-university seat.`,

  /* ───────────────── Environmental Issues for NEET — syllabus removal ──────────
     Query: "environmental issues neet" (pos ~8). Gap that is actually URGENT for the
     searcher and that no "important topics" page leads with: this chapter has been
     removed from the NEET syllabus in the NCERT rationalisation. Honest reframe +
     where to redirect Ecology effort. */
  'how-to-prepare-environmental-issues-for-neet': `## Important: Environmental Issues Has Been Removed From the NEET Syllabus

Before you spend a single hour here, the fact that matters most: **the "Environmental
Issues" chapter (old NCERT Class 12 Biology, Chapter 16) was deleted in the NCERT
rationalisation and is no longer part of the NEET syllabus** (from the 2024–25 cycle
onward). It was dropped alongside chapters like *Reproduction in Organisms* and
*Strategies for Enhancement in Food Production*. Topics that used to live here — air and
water pollution, BOD, eutrophication, ozone depletion, the greenhouse effect, solid-waste
management, the Chipko movement — are **not examinable in current NEET.**

**What this means for your prep:**

- **Do not allocate dedicated NEET revision time to Environmental Issues.** The marks that
  used to come from here have been redistributed to the rest of the Ecology unit.
- **If your school still teaches it,** that's for your board syllabus, not NEET — keep the
  two separate so you don't over-study a deboarded topic.
- **Always cross-check the latest official NMC NEET syllabus** before finalising your plan;
  syllabi are revised periodically and the authority's notification is the only source that
  overrides this.

### Where your Ecology time should actually go

Ecology remains one of the highest-return units in NEET Biology — roughly **8–10 questions
a year**, and almost entirely NCERT-line, direct-recall material. With Environmental Issues
gone, the unit is effectively **three chapters**, and that is where to put the hours:

| Ecology chapter (still in NEET) | Why it pays off |
|---|---|
| **Organisms & Populations** | Population growth (exponential vs logistic), age pyramids, interactions (mutualism, predation, competition) — repeat every year, very NCERT-direct. |
| **Ecosystem** | Energy flow, ecological pyramids, productivity, nutrient cycling, ecological succession — diagram- and definition-heavy, high accuracy possible. |
| **Biodiversity & Conservation** | Patterns of biodiversity, species-area relationship, hotspots, in-situ vs ex-situ, IUCN categories — pure recall, fast marks. |

**Honest framing:** treat Ecology as a *scoring* unit, not a tough one. The questions are
straightforward if you've read NCERT line-by-line; the only real trap is mixing up
definitions (exponential vs logistic growth, in-situ vs ex-situ). A focused last-fortnight
NCERT re-read of these three chapters typically converts to near-full marks.

### FAQ — Environmental Issues / Ecology for NEET

**Q: Is Environmental Issues still in the NEET syllabus?**
A: No. The chapter was removed in the NCERT rationalisation and is not part of the current
NEET syllabus (2024–25 onward). Don't spend NEET prep time on pollution, BOD, ozone
depletion or global warming as standalone topics. Verify against the latest NMC syllabus.

**Q: Then what should I study from Ecology for NEET?**
A: The three chapters that remain and are tested: Organisms & Populations, Ecosystem, and
Biodiversity & Conservation. Together they contribute roughly 8–10 questions a year and are
among the most scoring, NCERT-direct topics in Biology.

**Q: My coaching material still has Environmental Issues — should I ignore it?**
A: For NEET, yes — it's deboarded. If the material is shared with board preparation, study
it for boards but don't count it toward NEET. Keep your NEET syllabus aligned to the current
official NMC list.`,

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

  /* ───────────────────────── BITSAT vs JEE Main ──────────────────────────────
     Query: "bitsat vs jee main" / "is bitsat easier than jee" / "bitsat syllabus
     overlap" (pos 7–9, 55 impr). SERP leaders (shiksha, pw, getmyuni) assert
     "BITSAT is easier" but carry NO quantitative admission data, never mention the
     board-topper route that skips the exam entirely, and don't frame the decision
     of whether the extra exam is worth it. Those are the gaps below. */
  'bitsat-vs-jee-main-comparison': `## BITSAT Score → Branch → Campus (the table every "BITSAT vs JEE Main" article skips)

"BITSAT is easier" is the headline everyone repeats, but it answers the wrong
question. JEE Main gives you a percentile and a rank across the NIT/IIIT system;
BITSAT gives you a raw score out of 390 that maps to exactly one private system —
the three BITS campuses. Here is what a given BITSAT score actually buys, using
recent-cycle (2024–25) closing scores. Treat these as bands, not promises — they
drift 5–15 marks each year with paper difficulty:

| Branch | BITS Pilani | BITS Goa | BITS Hyderabad |
|---|---|---|---|
| Computer Science | ~327–331 | ~295–300 | ~284–290 |
| Electronics & Comm. (ECE) | ~310–315 | ~277–282 | ~268–274 |
| Electrical & Electronics (EEE) | ~290–295 | ~262–268 | ~252–258 |
| Mechanical | ~262–270 | ~240–248 | ~230–238 |
| Chemical / Civil | ~238–250 | ~225–235 | ~215–225 |

**Read it honestly:** a score that lands you CS at Hyderabad (~285) is *below* the
Pilani CS bar (~328). So "I cleared BITSAT" means little on its own — the campus
and branch are decided entirely by where your score sits in that grid. A 300 is a
fantastic Goa/Hyderabad score and a near-miss for Pilani CS in the same year.

## The route nobody mentions: board toppers skip BITSAT entirely

This is the single most useful fact missing from every "BITSAT vs JEE Main" page,
and it can change your whole plan. **If you secure the first rank in your Class 12
board** (any central or state board, PCM stream), BITS offers you **direct
admission to any first-degree programme at any campus — your BITSAT score is not
considered at all.** You don't even have to sit the exam. (PCB first-rankers get
direct B.Pharm admission.) Separately, the baseline eligibility for the BITSAT
route itself is strict: **75% aggregate in PCM *and* at least 60% in each of
Physics, Chemistry and Maths individually** — a 74% PCM average locks you out even
with a great BITSAT score. JEE Main's eligibility (75% board aggregate OR top-20
percentile) is more forgiving, so check your board numbers before you bank on BITS.

## The 12 bonus questions — the mechanic, and the trap

BITSAT's signature feature is genuinely an edge, but it is widely misunderstood.
You answer the 130 questions in order; **only if you submit all 130 with time left
do 12 bonus questions unlock — and once you enter the bonus round you cannot go
back** to review the first 130. The bonus questions carry the same +3/−1 marking.

The decision rule that actually matters:
- **Take the bonus only if you've genuinely attempted all 130 with confidence.**
  An extra 12 questions = up to 36 marks, which is the gap between Goa CS and Pilani
  CS. Worth chasing.
- **Do NOT rush 130 just to unlock the bonus.** Three guessed answers (−3) wipe out
  one correct bonus answer (+3). Students lose more in the bonus chase than they gain.
- The skill this rewards is **finishing your real attempt fast and clean**, not gambling.

## Is the extra exam worth it for you? A 30-second decision

BITSAT costs roughly ₹3,400 for one session (₹2,900 for female candidates), a
separate application, one more exam day in May–June, and ~3 months of part-time
English + Logical Reasoning prep (25 questions JEE Main never tests). Be honest:

**Worth it if** — you want a strong CS/ECE seat and aren't certain of a top-10 NIT
through JEE Main; you're a fast, accurate solver who thrives under time pressure
(1.4 min/question vs JEE Main's 2.4); or you simply want a high-quality private
backup that isn't dependent on JEE rank volatility.

**Probably skip it if** — your JEE Main mocks already point to a top-tier NIT/IIIT
branch you'd happily take; you melt under speed pressure (BITSAT punishes slow,
deep solvers far more than JEE Main does); or you can't spare the English/LR prep
without denting your core PCM revision in the final months. There's no shame in
this — BITS is excellent, but it is one private system, and JEE Main opens a much
wider government college map. The right answer is the college you'd actually attend.

### FAQ — BITSAT vs JEE Main

**Q: Is BITSAT really easier than JEE Main?**
A: Question-by-question, yes — BITSAT problems are mostly JEE Main level or a notch
below, with no integer/numerical types. But the *exam* is not easier: you get 1.4
minutes per question against JEE Main's 2.4, plus 25 English + Logical Reasoning
questions JEE Main doesn't have. It rewards speed and breadth over depth, so a
strong-but-slow JEE student can underperform on BITSAT.

**Q: How much of my JEE Main prep covers BITSAT?**
A: About 80%. The Physics, Chemistry and Maths are the same NCERT-based syllabus.
What's left is BITSAT-only: English Proficiency and Logical Reasoning (~40 marks)
plus dedicated speed training. Budget 30 minutes a day for those starting ~3 months out.

**Q: What BITSAT score do I need for BITS Pilani CSE?**
A: Recent cycles closed around 327–331/390 for Pilani Computer Science. Goa CS sat
near 295–300 and Hyderabad CS near 284–290. Aim for 330+ if Pilani CS is the goal;
300+ keeps Goa/Hyderabad CS realistic.

**Q: Should I give BITSAT if I'm already preparing for JEE?**
A: If you want a top private CS/ECE option and you're a fast solver, yes — the 80%
overlap makes the marginal effort small. If your JEE mocks already secure a branch
you'd happily accept and you struggle with time pressure, the extra exam, fee and
English/LR prep may not earn their keep. Decide on the seat you'd actually take.`,

  /* ──────────────── "99 percentile in NEET" — what it really means ────────────────
     Query: "99 percentile in neet" (pos ~4–7). Gap the SERP and our own templated
     body bury: 99 percentile in NEET is NOT elite — it is ~AIR 22,000, the borderline
     of the All-India-Quota govt MBBS cutoff. The number that decides a seat is
     marks → rank, not percentile. Biology (half the paper) is the rank-decider. */
  'how-to-score-99-percentile-in-neet-biology': `## What "99 Percentile in NEET" Actually Means (read this before you set it as your goal)

Most students who search "99 percentile in NEET" picture an elite, AIIMS-level
score. It isn't. **99 percentile means you beat 99% of candidates — i.e. you are in
the top 1%.** With roughly **22–24 lakh** people writing NEET, the top 1% is about
**All India Rank 22,000**. And in NEET ${Y}, the All-India-Quota *general*-category
MBBS seats closed around **AIR 26,000 (~525 marks)** — so a 99-percentile rank only
*just* clears the line for a government MBBS seat. It is the floor, not a safe target.

The deeper point: **NEET decides your seat from marks → rank, not from a percentile.**
Unlike JEE Main, NEET is a single paper with no multi-shift normalisation, so your
All India Rank comes straight from your marks (with a fixed tie-break order). The
percentile shown on the scorecard is informational; counselling runs on your AIR.
Chasing "99 percentile" is chasing the wrong number.

### NEET marks → rank → percentile (NEET ${Y}, approximate)

| Marks (/720) | Approx. All India Rank | Approx. percentile | What it realistically gets |
|---|---|---|---|
| 705–720 | 1–150 | 99.99+ | AIIMS Delhi, top government colleges |
| 680–704 | ~200–800 | 99.95+ | AIIMS, MAMC, top state government |
| 650–679 | ~800–5,000 | 99.8+ | A comfortable government MBBS seat |
| 600–649 | ~5,000–22,000 | ~99.2–99.7 | Mid government / state quota |
| ~595–600 | **~22,000** | **~99.0 (the real "99 percentile")** | Borderline AIQ general MBBS |
| ~525 | ~26,000 | ~98.8 | Last AIQ general government seat (${Y}) |

Rank bands shift a little each year with the number of candidates and paper
difficulty, but the shape holds: **99 percentile ≈ ~600 marks ≈ rank ~22,000** —
borderline for a government seat. If you genuinely want a *safe* government MBBS seat,
aim for **99.9 percentile (top ~2,500, roughly 650+ marks)**, and for AIIMS Delhi /
the top colleges you need to be inside the top few hundred ranks (≈690+).

### Why Biology is the chapter that decides this

Biology is **360 of the 720 marks — exactly half the paper — and it is the rank-decider.**
It is also the most "protectable" subject: most questions are direct from NCERT with
little calculation, so toppers treat near-perfect Biology as non-negotiable and use it
to absorb a weaker Physics section. A realistic Biology target for a top-2,500 rank is
**around 340+/360** — that means getting all but a handful of the 90 Biology questions
right, so accuracy and NCERT line-by-line recall matter more than speed here.

Where those Biology marks actually sit: **Human Physiology, Genetics & Evolution,
Ecology, Cell Biology and Plant Physiology** dominate the paper. Lock NCERT for these
units first, drill chapter-wise PYQs (NEET re-asks the same ideas in new wording), and
keep negative marking in mind — at +4/−1, a wild guess costs you, so leave a question
blank rather than guessing when you cannot eliminate at least two options.

### FAQ — 99 percentile in NEET

**Q: How many marks is 99 percentile in NEET?**
A: Roughly **600 out of 720**, which corresponds to about **All India Rank 22,000**
(the top 1% of ~22–24 lakh candidates). The exact mark moves a little each year with
difficulty and the number of test-takers.

**Q: Is 99 percentile enough for a government MBBS seat?**
A: It is borderline. In NEET ${Y} the All-India-Quota general MBBS cutoff closed near
AIR 26,000 (~525 marks), so a 99-percentile rank (~22,000) *may* get you an AIQ or
state-quota government seat — but it is not safe, and the college choice will be
limited. For a comfortable government seat, target **99.9 percentile (650+ marks)**.

**Q: Does NEET use percentile the way JEE Main does?**
A: No. JEE Main runs across many shifts and uses normalised percentile scores; NEET
is one paper on one day, so your **rank is derived directly from your marks** with a
fixed tie-breaking rule. The percentile on your scorecard is informational — admission
counselling uses your marks and All India Rank.

**Q: How many marks in Biology do I need for a 99+ percentile rank?**
A: Aim for about **340+/360 in Biology**. Because Biology is half the paper and the
most NCERT-direct subject, a near-perfect Biology score is how most top-rankers create
the cushion that protects them when Physics is tough.`,

  /* ───────────────────────── JEE vs NEET — which is harder ─────────────────────
     Query: "jee vs neet which is harder" (pos >10, crawled-not-indexed). The page
     already gives a verdict + decision framework; the SERP-wide gap (incl. our own
     page) is QUANTIFYING the "harder race" claim with real seat/applicant numbers. */
  'choosing-between-jee-and-neet': `## JEE vs NEET By the Numbers — the "race" most comparisons never quantify

Almost every "which is harder" article tells you NEET is *more competitive* and JEE is
*more conceptual*, then stops. Here is the selectivity that one sentence is hiding, using
the most recent admission cycle (2025). These are the numbers that actually decide how
hard each path is to convert into a seat:

| Metric | JEE → IITs | NEET → Govt MBBS |
|---|---|---|
| Candidates (2025) | ~14 lakh (JEE Main) | ~22 lakh |
| The "dream" seats | ~18,160 IIT B.Tech seats | ~41,000–56,000 govt MBBS seats |
| Rough odds of the dream seat | about 1 in 75 for an IIT seat | about 1 in 40–50 for a govt MBBS seat |
| The strong next tier | ~24,000 NIT + ~8,000 IIIT/GFTI seats | mostly private/deemed MBBS (₹60L–1Cr+ fees) |
| Reality check | JEE Advanced 2025: only ~33% of *qualifiers* finally got an IIT seat | a 640/720 in NEET 2025 was still a ~30,000+ rank — outside most govt MBBS |

**How to read this honestly.** On raw "dream seat" odds, a government MBBS seat is actually
*less* of a long shot than an IIT seat. The reason NEET still feels like the harder race is
the **tail**: below the IITs, engineering has a deep funnel of genuinely good outcomes — NITs,
IIITs, strong state and private colleges — where a respectable JEE Main rank still lands you
somewhere you can build a career. In NEET, once you fall outside the ~56,000 government seats,
the next option is largely private/deemed MBBS at ₹60 lakh–1 crore+ for the degree. So the
honest framing is: *JEE punishes you with a lower-ranked engineering college; NEET punishes
you with a far bigger fee bill or another year of dropping.*

**The marks-to-rank cliff (the part that shocks NEET aspirants).** Because ~22 lakh students
sit one paper, NEET ranks are brutally compressed near the top: in 2025, ~640/720 was already
outside most government MBBS, and a 690+ could still mean a five-figure rank. JEE spreads its
candidates across multiple shifts and a much harder, lower-attempt Advanced paper, so a given
percentile band maps to a wider, more forgiving rank range. One careless NEET mistake (−4 net)
can move your rank by *hundreds*; the same slip in JEE Advanced rarely does, because nobody is
scoring near-full anyway.

### FAQ — JEE vs NEET, by the numbers

**Q: Is it true that a 700 in NEET can still give a bad rank?**
A: "Bad" is relative, but yes — the compression is real. With ~22 lakh candidates, even ~690–700
can land a five-figure All India Rank, and ~640 in 2025 was already outside most government MBBS.
A 700/720 will get you a government seat somewhere, but possibly not in your home state or
preferred college. There is no equivalent crowding at the very top of JEE because the Advanced
paper is built so that almost nobody scores near-full.

**Q: Which has better odds of a good government college — JEE or NEET?**
A: For the very top seat (IIT vs govt MBBS), govt MBBS odds are actually a bit better (~1 in 40–50
vs ~1 in 75). But "a good government college" is easier in engineering overall, because NITs,
IIITs and GFTIs add ~30,000+ more strong, low-fee seats below the IITs. In medicine, falling
short of the ~56,000 government seats usually means expensive private MBBS. Engineering has the
softer landing; medicine has the higher floor for "free/affordable + prestigious".

**Q: If I'm genuinely equally interested in both, which is the safer bet?**
A: Be honest about two things first — your tolerance for fees and your appetite for risk. If
paying ₹60L–1Cr for private MBBS is off the table and you cannot picture a happy gap year,
engineering is statistically the safer bet because its "still good" outcomes are far wider. If
you are certain you want to be a doctor and can either hit a top rank or accept the dropper/private
route, NEET is reasonable — but go in with eyes open about the cliff above. Neither exam is the
"easy" choice; pick the subject you can study for 10–12 hours a day without resenting it, because
that stamina, not the exam's difficulty rating, decides the result.`,
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
