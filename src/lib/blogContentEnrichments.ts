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

  /* ───────────────────── BITSAT vs JEE Main — the real differences ────────────
     Query cluster: "bitsat vs jee mains" + "...syllabus overlap" (pos ~7-9). The
     SERP leaders quote an outdated 150-question / 450-mark pattern, omit the
     bonus-question mechanic, give no BITS campus cutoffs and no decision rule.
     Gaps filled here: current (130-Q/390-mark) pattern, the 23% English+LR reality,
     the bonus-round trade-off, campus-wise cutoff bands, and a decision framework. */
  'bitsat-vs-jee-main-comparison': `## BITSAT vs JEE Main — What's Actually Different (and what you already know)

If you are preparing for JEE Main, you are already ~85% prepared for BITSAT: the
Physics, Chemistry and Mathematics are the same NCERT Class 11–12 base. The real
differences are three — **speed, two extra sections, and which colleges each opens** —
and they are exactly what the generic comparison pages gloss over (several still quote
the old 150-question / 450-mark pattern; the current paper is 130 questions / 390 marks).

| | JEE Main | BITSAT ({Y}) |
|---|---|---|
| Questions | 90 (you answer 75) | 130 |
| Total marks | 300 | 390 |
| Marking | +4 / −1 (no negative on numericals) | +3 / −1 (all questions) |
| Time per question | ~2.0 min | ~1.4 min |
| Sections | Physics, Chemistry, Maths | Physics, Chemistry, Maths/Bio, **English**, **Logical Reasoning** |
| Mode | Online CBT | Online CBT |
| What it unlocks | NITs, IIITs, GFTIs (JoSAA) + gateway to JEE Advanced → IITs | BITS Pilani, Goa, Hyderabad only |

### The 23% of BITSAT that JEE never tests

Thirty of BITSAT's 130 questions — **English Proficiency (10) + Logical Reasoning (20),
worth 90 of 390 marks (≈23%)** — cover ground JEE never touches. For a JEE student these
are either free marks or a silent rank-killer. English Proficiency needs almost no study
(grammar, vocabulary, reading). Logical Reasoning rewards ~1–2 weeks of pattern practice:
series, analogies, figure completion, coding-decoding. Skipping these because "my PCM is
strong" is the most common way good JEE students underperform on BITSAT.

### The bonus-question mechanic competitors leave out

Finish all 130 questions before time runs out and BITSAT unlocks **12 bonus questions**
(3 each from Physics, Chemistry, Maths/Bio and Logical Reasoning), worth up to **+36**.
The catch nobody mentions: **the moment you opt into the bonus round you can no longer go
back and change any of your first 130 answers.** So opt in only if you are genuinely
confident in your 130; if several are shaky, that spare time is better spent reviewing
them than gambling on the bonus.

### Cutoffs — the number that decides whether BITSAT is worth it for you

BITSAT only matters if the score you can realistically hit clears the branch you want.
Approximate recent BITSAT cutoffs (out of 390 — treat as moving bands, not fixed lines):

| Campus & branch | Approx. BITSAT score |
|---|---|
| BITS Pilani — CSE | ~327–333+ |
| BITS Pilani — EEE / ECE / Mechanical | ~295–315 |
| BITS Goa / Hyderabad — CSE | ~290–305 |
| BITS Goa / Hyderabad — other core branches | ~250–290 |

BITS Pilani CSE is one of the highest per-seat bars in the country — comparable in
selectivity to a top-NIT CSE seat, just reached through a different exam.

### A 30-second decision framework

1. **Want an IIT, NIT or IIIT?** → JEE Main is mandatory; BITSAT cannot reach any of them.
   Treat BITSAT as a *parallel* shot at BITS, never a substitute for JEE.
2. **Specifically want BITS Pilani/Goa/Hyderabad?** → BITSAT is the *only* route. There is
   no JEE-score-based admission to BITS, so you must write BITSAT.
3. **Already preparing JEE Main?** → Add BITSAT cheaply: ~2–3 weeks of English + Logical
   Reasoning practice plus timed full-length mocks for speed. Don't start new PCM theory —
   you already have it.

**Honest note:** BITSAT's individual questions are easier and more NCERT-direct than JEE
Main's. But the 1.4-minute clock and the two unfamiliar sections make it its own exam. A
strong JEE student who never sits a timed BITSAT mock routinely scores below their true
PCM ability on the day — the gap is speed and stamina, not concepts.

### FAQ — BITSAT vs JEE Main

**Q: Is BITSAT easier than JEE Main?**
A: Concept-wise, yes — BITSAT questions are more direct and NCERT-aligned. But it is
faster (130 questions in 180 minutes ≈ 1.4 min each, versus ~2 min in JEE Main) and adds
English and Logical Reasoning, which JEE never tests. "Easier questions, harder clock, two
extra sections" is the honest one-line summary.

**Q: How much of my JEE Main preparation covers BITSAT?**
A: About 85%. Physics, Chemistry and Maths share the same NCERT Class 11–12 base. The
remaining ~15% is English Proficiency, Logical Reasoning and speed training — roughly 2–3
weeks of focused work on top of your JEE prep.

**Q: Can I get into an IIT or NIT through BITSAT?**
A: No. BITSAT admits only to BITS Pilani, Goa and Hyderabad. IITs require JEE Advanced
(via JEE Main); NITs and IIITs require JEE Main through JoSAA. BITSAT is a separate,
parallel exam — write it for BITS, not as a route into the IIT/NIT system.

**Q: What BITSAT score do I need for BITS Pilani CSE?**
A: Realistically around 327–333+ out of 390 in recent years — one of the toughest
per-seat bars in India. CSE at Goa/Hyderabad closes a little lower (~290–305), and
non-CSE branches at all three campuses are more reachable. Treat these as bands that move
each year, and check the live iteration cutoffs during admissions.

**Q: Should I attempt the 12 bonus questions?**
A: Only if you are confident in your first 130. Finishing all 130 before time unlocks 12
bonus questions (up to +36), but once you opt in you cannot return to revise earlier
answers. If several questions are shaky, the spare time is better spent reviewing them
than gambling on the bonus round.`,
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
