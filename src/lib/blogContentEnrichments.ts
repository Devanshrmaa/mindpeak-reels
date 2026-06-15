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

  /* ───────────────────────── CUET vs JEE Main ────────────────────────────────
     Query: "cuet vs jee" (pos ~7). SERP leaders (Careers360, Shiksha) settle for
     a vague "JEE is more competitive, CUET is easier" line. Gaps none front-load:
     (1) exactly which 40% of CUET your JEE prep does NOT cover, in marks;
     (2) the percentile-not-rank trap that makes an "easy" paper still brutal at DU;
     (3) an honest verdict on whether a serious JEE aspirant should bother. */
  'cuet-vs-jee-main-comparison': `## CUET vs JEE Main — The Part Comparison Pages Skip: What's Actually Different

Most "CUET vs JEE" pages stop at "JEE is harder, CUET is NCERT-level." True, but
useless for planning. The decision that matters is: **if you're already preparing
for JEE Main, what extra does CUET actually cost you?** Here is the honest breakdown.

CUET-UG is a 3-section exam scored out of varying totals (each subject is 50
questions / 250 marks, normalised to a percentile). Your JEE Physics, Chemistry and
Maths preparation already covers the **domain subjects** — that's roughly 60% of a
science student's CUET load and needs almost no extra work. What it does **not**
cover is the other ~40%:

| CUET section | Covered by your JEE prep? | Extra work needed |
|---|---|---|
| Domain (Physics / Chemistry / Maths) | ✅ Yes — and CUET is easier than JEE here | Just practise NCERT-direct MCQs for speed |
| Section IA — Language (English) | ❌ No | Reading comprehension, vocabulary, verbal ability |
| Section III — General Test | ❌ No | GK, current affairs, quantitative & logical reasoning |

**So the real "cost" of adding CUET to a JEE plan is the Language + General Test
sections, not the science.** That's the honest headline most pages bury.

### The trap: CUET is "easy" but the cutoffs are not

Here is what trips students up. CUET questions are strictly Class 12 NCERT level —
genuinely easier than JEE Main. But CUET is scored on **percentile after
normalisation**, and the top Delhi University / BHU / Hindu / SRCC-type seats
routinely close at **95–99 percentile** for science and commerce courses. An easy
paper means *everyone* scores high, so a few wrong answers cost you far more
percentile than they would in JEE. The skill CUET rewards is not depth — it's
**near-zero careless errors at speed.** Treat it as an accuracy exam, not an easy one.

### Honest verdict — should a JEE aspirant even write CUET?

- **Write CUET as a backup if** you want a strong central-university degree (DU,
  BHU, Hyderabad) as insurance against a below-target JEE rank. The marginal effort
  is small because your science is already done — you only add Language + General Test.
- **Make CUET your primary exam if** your real goal is economics, B.Sc, B.Com or a
  research-university BA/B.Sc rather than an engineering seat. In that case CUET is
  not a "downgrade" — it's the correct door, and JEE is the distraction.
- **Skip CUET if** you are a focused IIT/NIT aspirant late in the cycle and adding
  GK + English revision would dilute your JEE mock discipline in the final months.
  Spreading thin to chase a backup you won't use is a real, common mistake.

The two exams are not really competitors — they open different doors. Choose by the
**degree you actually want**, then decide whether the other is worth the add-on.

### FAQ — CUET vs JEE Main

**Q: Is CUET easier than JEE Main?**
A: Yes, clearly — CUET domain questions are Class 12 NCERT level while JEE Main tests
application well beyond NCERT. But "easier paper" does not mean "easier admission":
top DU/BHU cutoffs sit at 95–99 percentile, so CUET demands very high accuracy.

**Q: If I'm preparing for JEE, am I already prepared for CUET?**
A: For the science (domain) section, ~60% — yes. You still need to prepare CUET's
Language (English) and General Test (GK, current affairs, reasoning) sections, which
JEE doesn't test at all. Budget those, not the physics.

**Q: Can I prepare for both CUET and JEE Main together?**
A: Yes, and many students do. Keep JEE as your primary track for PCM, and add ~30
minutes a day for English + General Test from a few months out. Don't let backup
prep eat into your JEE mock-test routine in the last 8 weeks.

**Q: Which CUET subjects should a science student pick?**
A: Your three domain subjects (Physics, Chemistry, and Maths or Biology), one
language (usually English), and the General Test. That combination keeps the top
science and dual-degree courses at central universities open.`,

  /* ───────────────────────── BITSAT vs JEE Main ──────────────────────────────
     Query cluster: "bitsat vs jee mains" + "syllabus overlap" (pos ~7–9). Every
     SERP leader repeats "80% overlap, BITSAT is faster, has English + LR." Gaps:
     (1) what the English + Logical Reasoning section concretely requires, in marks;
     (2) the 12-bonus-question mechanic and how to actually unlock it;
     (3) real BITS score→branch cutoffs; (4) honest BITS-vs-NIT call. */
  'bitsat-vs-jee-main-comparison': `## BITSAT vs JEE Main — Beyond "80% Overlap": The Parts That Actually Decide Your Score

Every comparison page tells you BITSAT shares ~80% of its syllabus with JEE Main and
is "faster." Correct, but that's not where students lose seats. The two things that
actually decide a BITSAT score — and that JEE prep does *not* give you — are the
non-PCM sections and the bonus-question mechanic. Here's the part the SERP skips.

### The "20% that isn't JEE": English + Logical Reasoning (don't underestimate it)

BITSAT is 130 questions; **25 of them (Physics 30, Chemistry 30, Maths 45, then
English 15 + Logical Reasoning 10) sit outside your JEE syllabus entirely.** That's
roughly 75 marks on a 390 paper — enough to swing you a full branch at BITS. JEE
toppers routinely leak marks here by treating it as an afterthought:

| Non-PCM section | Questions | What it tests | How to prep (low effort, high return) |
|---|---|---|---|
| English Proficiency | 15 | Grammar, vocabulary, reading comprehension, verbal ability | 20 min/day of vocab + one RC passage; past BITSAT papers |
| Logical Reasoning | 10 | Verbal & non-verbal reasoning, series, analogies, figures | RS Aggarwal Verbal & Non-Verbal; pattern-recognition drills |

The honest framing: these 25 questions are *easy marks* if you spend ~30 min/day on
them for the final 2–3 months, and *thrown-away marks* if you don't. A JEE aspirant
who ignores them is voluntarily competing for a lower branch.

### The bonus-question rule almost no comparison page explains

BITSAT has a feature JEE Main does not: **if you answer all 130 questions before time
runs out, you unlock 12 extra "bonus" questions (3 each in PCM + English).** These
can only *raise* your score — there is no penalty for the bonus set. So the optimal
BITSAT strategy is the opposite of JEE: **finish fast, leave nothing, and earn the
bonus.** Students who carry JEE's "linger on hard problems" habit never reach the
bonus round and lose a quiet 10–15 marks to peers who did. Practise to finish the
core 130 in ~2 hr 40 min so the bonus 12 are always on the table.

### Real score → BITS branch map (recent cycles, approximate)

Unlike JEE's rank-to-college, BITS admits on a raw score out of 390:

| BITSAT score (/390) | Realistic BITS Pilani branch |
|---|---|
| 320+ | Computer Science |
| 300–320 | Electronics & Communication / EEE |
| 280–300 | Mechanical / Chemical / other core |
| 250–280 | Pilani borderline; comfortable at Goa / Hyderabad campuses |

BITS Goa and Hyderabad close roughly 15–30 marks below Pilani for the same branch,
so a 295 that misses Pilani CS can still land CS at Goa.

### Honest call: BITS Pilani or the NIT your JEE rank gets you?

- **BITS Pilani CS/ECE is genuinely top-tier** — broadly comparable to the top 4–5
  NITs (Trichy, Warangal, Surathkal) on placements and brand, with a more flexible,
  practice-school-driven academic culture. If you clear BITSAT for Pilani CS, it's a
  strong choice, not a consolation prize.
- **But BITS is fully self-financed** (no central-government fee subsidy), so it is
  noticeably more expensive than an NIT. For core branches like Mechanical or Civil,
  a top NIT often matches or beats BITS on placement value at lower cost.
- **The reasonable play:** sit both exams (80% shared prep makes this nearly free),
  then choose on the final table — BITS Pilani CS over a mid-NIT is usually worth it;
  BITS Goa Mechanical over NIT Trichy Mechanical is a closer, cost-sensitive call.

### FAQ — BITSAT vs JEE Main

**Q: How much of BITSAT overlaps with JEE Main?**
A: About 80% — the entire Physics, Chemistry and Maths content is shared NCERT
Class 11–12. The non-overlapping ~20% is BITSAT's English Proficiency and Logical
Reasoning sections (25 questions, ~75 marks), which JEE Main does not test at all.

**Q: Is BITSAT easier than JEE Main?**
A: The questions are slightly easier, but the exam is harder to *finish*: 130
questions in 180 minutes (~1.4 min each) versus JEE Main's ~2.4 min per question.
BITSAT rewards speed and accuracy; JEE Main rewards depth.

**Q: What are the bonus questions in BITSAT?**
A: If you complete all 130 questions before time ends, you're offered 12 extra
questions that can only increase your score. Aim to finish the main paper in ~2 hr
40 min so you can attempt them — it's free marks JEE-style pacing makes you miss.

**Q: What BITSAT score do I need for BITS Pilani CSE?**
A: In recent cycles, roughly 320+/390 for Pilani Computer Science; ECE/EEE around
300–320, and core branches 280–300. Goa and Hyderabad campuses close 15–30 marks
lower for the same branch.`,

  /* ─────────────────── How to Prepare Physics for KCET ───────────────────────
     Query: "important chapters for kcet physics" (pos ~6). The templated body uses
     seeded/placeholder weightage %; this replaces it with the real recent-paper
     distribution and the KCET-specific 1st-PUC/2nd-PUC split + 50:50 rank rule. */
  'how-to-prepare-physics-for-kcet': `## KCET Physics — Real Chapter-wise Weightage (the table you searched for)

KCET Physics is **60 one-mark MCQs in 80 minutes, no negative marking**, drawn from
the Karnataka 1st & 2nd PUC syllabus. Before any study plan, you need the actual
mark distribution from recent papers — not a generic "all chapters matter" list:

| Physics area | Approx. share of the 60 marks | Priority |
|---|---|---|
| Mechanics (kinematics, laws of motion, work-energy, rotation, gravitation) | ~30–32% | Do first |
| Electricity & Magnetism (current electricity, electrostatics, EMI, magnetism) | ~28% | Do first |
| Modern Physics (atoms, nuclei, dual nature, semiconductors) | ~10% | High ROI |
| Waves & Optics (ray + wave optics, oscillations, waves) | ~10% | High ROI |
| Heat & Thermodynamics | ~10% | Medium |
| Units, Measurement & Errors | ~5% | Quick wins |
| Properties of Matter / Fluids | ~5% | Quick wins |

**Mechanics + Electricity & Magnetism alone are ~60% of the section.** If your time
is limited, securing those two blocks to high accuracy is the single fastest route
to a 45+/60.

### The KCET-specific split JEE-focused guides miss: 1st PUC vs 2nd PUC

A detail national prep pages never mention: in recent KCET papers, roughly **65–70%
of Physics questions come from the 2nd PUC (Class 12) syllabus and 30–35% from 1st
PUC (Class 11).** Don't drop Class 11 — Mechanics (mostly 1st PUC) is the single
biggest block — but when you're triaging in the final weeks, weight your revision
toward 2nd PUC chapters (Current Electricity, EMI, Optics, Modern Physics), which
carry more of the paper.

### No negative marking changes your exam-day rule

KCET has **no negative marking**, so the strategy is simple and non-negotiable:
**attempt all 60 questions.** After solving everything you know, make educated
guesses on the rest in the last few minutes — every guess has positive expected
value. Students who carry JEE's "skip if unsure" instinct leave easy marks behind.

### Don't forget: your 2nd PUC board marks are 50% of your KCET rank

KCET Physics prep is only half the rank equation. Your **KCET engineering rank is
computed 50:50 from your KCET score and your 2nd PUC PCM board marks.** A strong
KCET Physics paper can be capped by a weak board result — so revise the same Physics
deeply enough to score in *both* the entrance and your PU board exam. They test the
same NCERT/PU concepts; treat board prep as KCET prep, not a separate task.

### FAQ — KCET Physics preparation

**Q: Which are the most important chapters for KCET Physics?**
A: Mechanics and Electricity & Magnetism — together ~60% of the 60 marks. Add Modern
Physics, Optics and Thermodynamics (~10% each) next. Units/Measurement and Properties
of Matter are smaller but quick to secure.

**Q: Is KCET Physics from Class 11 or Class 12?**
A: Both, but skewed to Class 12 — recent papers draw ~65–70% from 2nd PUC and ~30–35%
from 1st PUC. Mechanics (largely 1st PUC) is still the biggest single block, so don't
skip Class 11.

**Q: Is there negative marking in KCET Physics?**
A: No. Every question is +1 for correct and 0 for wrong, so attempt all 60 — never
leave a blank.

**Q: How many marks should I target in KCET Physics?**
A: For a top Karnataka engineering seat, aim for 50+/60 in Physics. Locking down
Mechanics and Electricity to high accuracy gets you most of the way; remember your
2nd PUC board marks count for half your final rank, so keep them strong too.`,
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
