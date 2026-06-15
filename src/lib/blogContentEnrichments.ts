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

  /* ───────────────────── CUET vs JEE Main comparison ─────────────────────────
     Query: "cuet vs jee" / "is cuet easier than jee" (pos ~2–3, near-zero CTR —
     the templated intro buries the answer). Gap the SERP leaders miss: they treat
     it purely as a difficulty contest, when the honest answer is that the two
     exams unlock *different* colleges, so "which is easier" is the wrong question. */
  'cuet-vs-jee-main-comparison': `## Is CUET Easier Than JEE Main? Yes — But That's the Wrong Question

Straight answer first: **yes, CUET (UG) is easier than JEE Main.** CUET domain
papers are pinned to the NCERT Class 12 syllabus and ask direct, single-concept
questions; JEE Main draws on Class 11 *and* 12 and rewards multi-step application
that goes beyond the textbook. A student who knows their Class 12 NCERT cold can
clear CUET comfortably, while JEE Main needs months of problem-solving practice on
top of that.

But comparing their difficulty is slightly beside the point, because **the two
exams open different doors:**

| | CUET (UG) | JEE Main |
|---|---|---|
| Conducting body | NTA | NTA |
| Primarily for | Central universities (DU, BHU, JNU, Jamia, Allahabad…) | Engineering — NITs, IIITs, GFTIs, state B.Tech |
| Typical courses | B.A., B.Sc., B.Com., a few B.Tech seats | B.Tech / B.E. only |
| Syllabus | Class 12 NCERT (per domain subject) | Class 11 + 12 PCM |
| Question style | Direct, NCERT-line MCQs | Application-heavy, multi-concept |
| Extra papers JEE prep doesn't cover | General Test (GK/aptitude/reasoning) + a language paper | — |
| Negative marking | −1 | −1 |

### The honest decision (not "which is easier")

- **If your goal is engineering (a B.Tech at an NIT/IIIT), JEE Main is not
  optional — CUET cannot get you there.** A handful of central universities (DU,
  Jamia) admit B.Tech through CUET, but they are a small, specific set of seats, not
  a substitute for the NIT/IIIT system.
- **If you want a B.Sc./B.A./B.Com. at a top central university** (Hindu/St.
  Stephen's-type DU colleges, BHU, JNU), **CUET is your exam** and JEE Main is
  irrelevant to that goal.
- **Doing both is genuinely reasonable** and common: keep JEE Main as your primary
  engineering route, and sit CUET as a backup for a B.Sc. at a strong central
  university if engineering doesn't work out. Because the PCM domain papers are pure
  Class 12 NCERT, your JEE preparation already covers ~all of the *theory* CUET
  tests — the extra work is mostly the **General Test and language paper**, which
  JEE prep never touches.

### Don't let "easier" fool you — CUET cutoffs are brutal

CUET questions are easier, but the **cutoffs for top DU colleges run at 99+
percentile**, often demanding a near-perfect score because thousands of students
all find the paper easy. Easy paper + huge applicant pool = tiny margin for error.
So "CUET is easier" does not mean "CUET is a soft option" for the colleges most
students actually want.

### FAQ — CUET vs JEE Main

**Q: Is CUET easier than JEE Main?**
A: Yes, the questions are easier — CUET is NCERT Class 12 level with direct MCQs,
while JEE Main is application-based across Class 11 and 12. But CUET's top-college
cutoffs (99+ percentile for premier DU colleges) make it competitive despite the
easier paper.

**Q: Can I get into an NIT or IIIT through CUET?**
A: No. NITs, IIITs and GFTIs admit through JEE Main only. CUET is for central
university programmes; a few central universities offer B.Tech via CUET, but the
mainstream engineering route is JEE Main.

**Q: Can I prepare for both CUET and JEE Main together?**
A: Largely yes for the PCM theory — CUET's science papers are a subset of what JEE
Main already demands, so your JEE prep covers the concepts. Budget separate time for
CUET's General Test (aptitude, GK, reasoning) and language section, which have no
overlap with JEE.

**Q: Should I drop JEE Main and just do CUET because it's easier?**
A: Only if you don't want engineering. If a B.Tech at an NIT/IIIT is your goal,
CUET can't replace JEE Main. Pick the exam that unlocks the degree you actually
want, then prepare for *that* — don't choose on difficulty alone.`,

  /* ───────────────────── BITSAT vs JEE Main comparison ───────────────────────
     Query: "bitsat vs jee mains" / "is bitsat easier than jee main" (pos ~4–9).
     Gap none of the SERP leaders front-load: the two non-PCM sections (English +
     Logical Reasoning = ~23% of the paper) that JEE prep gives you zero help with,
     and that BITSAT is a single-institute exam — worth it only if BITS is a target. */
  'bitsat-vs-jee-main-comparison': `## Is BITSAT Easier Than JEE Main? Easier Questions, Harder Clock

The honest answer has two halves. **Question by question, BITSAT is easier than JEE
Main** — its Physics, Chemistry and Maths problems are pitched below JEE Main's in
conceptual depth. But **BITSAT is harder on speed:** you get roughly **1.4 minutes
per question versus ~2.4 minutes in JEE Main**, so the challenge shifts from "can I
solve this?" to "can I solve it fast enough?" BITSAT rewards accuracy at pace; JEE
Main rewards depth.

| Parameter | BITSAT | JEE Main |
|---|---|---|
| Conducting body | BITS Pilani | NTA |
| Sections | Physics 30 · Chemistry 30 · **English 10 · Logical Reasoning 20** · Maths 40 | Physics 25 · Chemistry 25 · Maths 25 |
| Total questions | 130 (+12 optional bonus) | 75 to attempt (90 shown) |
| Marking | +3 correct, −1 wrong | +4 correct, −1 wrong |
| Duration | 3 hours | 3 hours |
| Time per question | ~1.4 min | ~2.4 min |
| Syllabus overlap | ~85% with JEE Main (PCM) | — |
| Unlocks | **Only BITS Pilani / Goa / Hyderabad** | NITs, IIITs, GFTIs, state B.Tech |

### The hidden 23% JEE prep does nothing for

Every BITSAT-vs-JEE article repeats "85% syllabus overlap" and stops there. Here is
what that statistic hides: **30 of BITSAT's 130 questions — English Proficiency (10)
and Logical Reasoning (20) — have no counterpart in JEE Main at all.** That's ~23%
of the paper your entire JEE preparation leaves you unprepared for. Logical
Reasoning in particular (series, analogies, figure patterns) is very scoring with a
week or two of targeted practice, and students who ignore it because "it's mostly
PCM anyway" routinely leave 60–90 easy marks on the table. If you're sitting BITSAT,
budget dedicated time for these two sections — they are the cheapest marks in the
exam.

### The decision most articles skip: is BITS even your target?

BITSAT unlocks exactly **three campuses — BITS Pilani, Goa and Hyderabad — and
nothing else.** JEE Main unlocks the entire NIT/IIIT/GFTI system plus most state
engineering colleges. So the real question isn't "which is easier," it's **"do I
actually want a BITS seat?"**

- **Sit BITSAT if** BITS Pilani (or Goa/Hyderabad) is a genuine target for you —
  it's an excellent private institute with strong placements, flexible dual-degree
  options and no board-marks-in-rank complication. Given the ~85% overlap, the extra
  cost is low: speed practice + the two non-PCM sections.
- **Skip BITSAT if** BITS isn't on your list. It's a single-institute exam; there's
  no point adding an exam day and a registration fee for a college you won't join.
- **JEE Main is the non-negotiable one** for almost everyone, because it's the
  gateway to far more seats. Treat BITSAT as a high-overlap add-on to JEE prep, never
  as a replacement.

### Real BITSAT cutoffs (so "easier" doesn't mislead you)

Easier questions don't mean a low bar — BITS cutoffs are high precisely because the
paper is scoring:

| BITS Pilani branch | Approx. BITSAT cutoff (/390) |
|---|---|
| Computer Science | ~327+ |
| Electronics & Communication | ~314+ |
| Electrical & Electronics | ~290+ |
| Mechanical | ~247+ |

(Goa and Hyderabad campuses close ~15–30 marks lower than Pilani for the same
branch.) Clearing BITSAT comfortably means a near-flawless run through easy
questions — there's little room for silly errors when everyone around you is also
finding the paper doable.

### FAQ — BITSAT vs JEE Main

**Q: Is BITSAT easier than JEE Main?**
A: The individual questions are easier (less conceptual depth), but BITSAT is harder
on time — ~1.4 minutes per question vs ~2.4 in JEE Main. It tests speed and
accuracy more than problem-solving depth.

**Q: Can I clear BITSAT with only JEE Main preparation?**
A: For the PCM portion, mostly yes — ~85% overlaps. But BITSAT adds English
Proficiency and Logical Reasoning (30 questions, ~23% of the paper) that JEE prep
doesn't cover, plus a faster clock. Add a couple of weeks for those two sections and
timed full-length practice.

**Q: How many questions and how much negative marking in BITSAT?**
A: 130 questions (Physics 30, Chemistry 30, English 10, Logical Reasoning 20, Maths
40), +3 for correct, −1 for wrong, 3 hours. You can opt for 12 bonus questions if
you finish all 130 with time left — but you can't go back after choosing them.

**Q: Should I prepare for BITSAT or JEE Main?**
A: JEE Main for almost everyone — it unlocks NITs, IIITs and many more colleges.
Add BITSAT only if a BITS Pilani/Goa/Hyderabad seat is genuinely on your wishlist;
otherwise the extra exam isn't worth it.`,
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
