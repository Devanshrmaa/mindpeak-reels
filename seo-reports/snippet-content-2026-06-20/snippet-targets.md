# Featured Snippet Targets — Ready-to-Paste Content

**Generated:** 2026-06-20
**Companion to:** `seo-reports/ai-snippets-2026-06-20.md`
**Purpose:** Drop-in content blocks for the 3 UNCLAIMED-target blog posts identified in §3 of the audit. Each block is a complete blog post entry ready to append to `src/data/blogData.ts`. Carryover from May 30 (16 still-relevant blocks) is referenced at the end rather than duplicated.

**Naming convention:** `U-<num>` = UNCLAIMED target queue. `T-<num>` = target query number from `ai-snippets-2026-06-20.md §2`.

---

## U-1 · `/blog/how-to-balance-boards-and-jee` (T-10 — UNCLAIMED 9 weeks)

**Target file:** Add new entry to `src/data/blogData.ts`. Also add slug to `app/sitemap.xml/route.ts`.
**Format:** Numbered list snippet — Google rewards "X tips/steps to do Y" framing for board-balance queries.
**Current snippet owner:** none. AI Overview cites byjus + vedantu + careers360 (none owns the FS — wide open).
**Internal links to add:** From `/study-plan` ("Balancing Boards + JEE → guide"). From `/jee-main-coaching` (FAQ "How do I prepare for boards and JEE together?"). From `/jee-dropper-coaching` ("Class 12 students see this guide").

### Blog `blogData.ts` entry (drop-in)

```ts
{
  slug: 'how-to-balance-boards-and-jee',
  title: `How to Balance Board Exams and JEE Main ${CURRENT_EXAM_YEAR}: A 7-Step Plan from One-on-One Mentors`,
  excerpt: 'Class 12 boards and JEE Main 2027 overlap by just 8 weeks. A 7-step weekly schedule, the 60-30-10 syllabus split, and the boards-vs-JEE chapters that cost you marks if confused.',
  category: 'Exam Strategy',
  date: '2026-06-23',
  author: 'Devansh Sharma',
  authorBio: 'IIT-BHU · 6 years mentoring JEE aspirants 1-on-1 at MindPeak Institute',
  readingTime: '8 min read',
  featured: true,
  // body (see snippet-targets.md §U-1 for full markdown body)
}
```

### Blog body (paste into `blogData.ts` content field or `blogContentEnrichments.ts`)

```markdown
**The most effective way to balance Class 12 boards and JEE Main 2027 is a 7-step plan:
treat the 8-week board exam window as a deliberate "pause" on JEE-specific practice, lean
on the 70% syllabus overlap, switch to NCERT-only study from December, and resume full JEE
mode within 5 days of your last board paper.** Below is the week-by-week schedule we use
with Class 12 students at MindPeak — built around the principle that boards and JEE Main
are not two separate exams, they are the same syllabus tested two different ways.

## The 7-Step Plan to Balance Boards and JEE Main 2027

1. **Audit the 70% syllabus overlap (do this in October).** Class 12 PCM NCERT covers
   roughly 50% of JEE Main syllabus directly. Chemistry overlap is highest (~85%), Math
   ~65%, Physics ~60%. Map every Class 12 chapter to its JEE Main analog. Chapters that
   appear in *both* — Electrostatics, Magnetic Effects, Optics, Coordination Compounds,
   Calculus — get double the study time because they pay twice.

2. **Run a 60-30-10 split from October to early January.** Sixty percent of study time goes
   to chapters that overlap. Thirty percent goes to JEE-only chapters (Mechanics revision,
   Modern Physics, Organic mechanisms). Ten percent goes to boards-only content (English,
   value-based questions, descriptive Chemistry answers — these are NOT in JEE).

3. **Switch to NCERT-only study from late December.** From Dec 20 onwards, drop reference
   books for boards prep. NCERT is the source of 80%+ of board paper. It is also the source
   of ~35% of JEE Main Chemistry questions. Reading NCERT twice serves both exams.

4. **Pause new JEE Main concept learning for the 8-week board exam window.** From early
   February (boards typically run Feb 15 → Apr 5) you should be in pure revision mode for
   JEE. Do not start new chapters. Do not attempt advanced PYQs. Revise 1 chapter from each
   subject daily using your existing notes — 30 minutes per subject is enough.

5. **Do 2 JEE mocks during boards — not zero, not weekly.** Some students stop mocks
   entirely; they lose exam temperament. Some take weekly mocks; they exhaust themselves.
   Take exactly two full-length JEE Main mocks during the board window — one in early March,
   one 4 days before your last board paper. The goal is *not* to score; it is to keep your
   3-hour focus muscle alive.

6. **Write Class 12 board papers in JEE-Main-style precision.** A common mistake we see in
   1-on-1 mentoring: students write 4-page descriptive answers for the boards. Boards want
   step-by-step working with clear conclusions. JEE Main wants the answer choice. Practice
   both formats deliberately — board answers stay structured, JEE answers stay quick. The
   skill is switching between them without bleeding habits across.

7. **Resume full JEE mode within 5 days of your last board paper.** JEE Main Session 2 runs
   ~3 weeks after CBSE boards end. Do not take a "deserved break." Five days off, then
   start a 14-day intensive revision push: 1 daily mock, error log review every evening,
   3 chapters/day rapid revision. Most droppers will tell you the post-boards 3 weeks is
   when they either solidify or collapse — structure beats willpower.

## Quick Reference: Boards vs JEE Main Time Allocation

| Phase | Date Range | Boards % | JEE Main % | Daily Hours |
|---|---|---:|---:|---:|
| Foundation parallel | Oct–Nov 2026 | 30% | 70% | 6–7 |
| Pre-boards consolidation | Dec 2026 | 50% | 50% | 7 |
| Board exam window | Feb–Apr 2027 | 80% | 20% (revision-only) | 7 |
| Post-boards JEE push | Apr 2027 | 0% | 100% | 9–10 |

## Common Mistakes Class 12 Students Make (from real mentoring sessions)

A few mistakes that come up almost every batch in our 1-on-1 classes:

- Treating boards as "the easy exam" and ignoring board prep → losing 15+ marks on questions
  asked in JEE-style language with board-pattern marking. The pattern penalty is real.
- Cancelling JEE coaching during boards → losing the doubt-clarification habit, which is
  the biggest delta between students who recover after boards and students who plateau.
- Not reading Chemistry NCERT cover-to-cover for boards → giving up the easiest 30 marks in
  Class 12 board Chemistry AND missing the 35% NCERT-direct JEE Chemistry questions.
- Studying boards-only chapters (Communication Systems, Semiconductors final section) in
  Jan-Feb instead of October. These low-yield chapters belong in the high-overlap window,
  not the JEE-revision window.

## FAQ

**Q: Should I drop boards to focus on JEE Main?**
A: No. Class 12 board score is the JEE Advanced eligibility requirement (75% aggregate, 65%
for SC/ST). Dropping boards risks IIT eligibility. The 8-week board window does not
materially hurt JEE prep if you used Oct-Dec correctly.

**Q: How many hours should I study per day during boards?**
A: 7 hours of focused study — 5 hours on boards content, 2 hours of JEE revision (no new
chapters). More than 9 hours during boards weeks reliably triggers burnout in the
post-boards JEE push.

**Q: Which chapters cost me the most if I confuse boards-style and JEE-style?**
A: Electrochemistry (boards wants derivations, JEE wants numerical), Optics (boards wants
ray diagrams + descriptions, JEE wants numerical/formula application), and Probability
(boards wants step-by-step proof, JEE wants quick conditional probability calculation).
Practice both styles in separate sittings during November.

**Q: Should I take JEE Main Session 1 in January if my boards are in February?**
A: Yes. January Session 1 acts as a no-stakes pressure test (better-of-two normalisation
means a weak Session 1 does not hurt you). It also forces you to consolidate JEE syllabus
before boards. Skipping Session 1 to "focus on boards" is a common mistake — you lose your
free first attempt.
```

### Voice-ready answer (paste at top of post, wrap in `<p className="voice-answer">`)

> "Balance Class 12 boards and JEE Main by running a 60-30-10 study split until December,
> pausing new JEE concepts during the eight-week board window, and resuming full JEE mode
> five days after your last board paper. Boards and JEE share seventy percent of syllabus."

(34 words.)

---

## U-2 · `/blog/neet-preparation-strategy-average-student` (T-18 — UNCLAIMED 9 weeks)

**Target file:** Add new entry to `src/data/blogData.ts`. Add slug to `app/sitemap.xml/route.ts`.
**Format:** Numbered list snippet — beats existing topper-focused content (aakash, careers360 currently cited in AIO).
**Why this wins:** "Average student" framing is differentiated. The current AIO sources (aakash, careers360, byjus) all target topper-oriented strategy. "Average student" is a real, large segment Google has zero good answer for.
**Internal links to add:** From `/neet-coaching` (FAQ "I'm an average student — can I crack NEET?"). From `/neet-dropper-coaching`. From `/blog/neet-biology-preparation-guide`.

### Blog `blogData.ts` entry (drop-in)

```ts
{
  slug: 'neet-preparation-strategy-average-student',
  title: `NEET ${CURRENT_EXAM_YEAR} Strategy for Average Students: How to Move from 400 to 600 Marks`,
  excerpt: 'Not every NEET aspirant starts as a topper. A realistic 10-month plan for the average student to break the 600-mark barrier, with the 4-subject hour allocation we use in one-on-one mentoring.',
  category: 'NEET',
  date: '2026-06-24',
  author: 'Sahil Verma',
  authorBio: 'AIIMS Delhi alumnus · 5 years mentoring NEET aspirants 1-on-1 at MindPeak Institute',
  readingTime: '9 min read',
  featured: true,
}
```

### Blog body

```markdown
**The most effective NEET 2027 strategy for an average student is a 10-month "consolidation
before competition" plan: complete NCERT mastery in months 1-4, build Biology depth (NEET's
single biggest scoring lever) in months 4-7, drill PYQs from months 6 onwards, and run
weekly full-length mocks in the final 3 months.** Average student here means a student
scoring 350-450 in initial NEET mocks. The path from 400 to 600+ does not require topper
genetics — it requires the discipline to not waste the 10 months on the wrong things.

## The 10-Month NEET Strategy for an Average Student

1. **Months 1–4: NCERT mastery (Biology + Chemistry first, Physics later).** Biology
   NCERT is roughly 85% of NEET Biology marks; Chemistry NCERT carries about 60% of
   Chemistry marks. Average students gain the most early ground here because the questions
   are direct-recall — no IQ ceiling. Read each NCERT chapter three times: skim → underline
   → active-recall test. Physics NCERT only — no DC Pandey or HC Verma yet. The trap most
   average students fall into is starting "harder books" early and demoralising themselves.

2. **Months 4–7: Biology depth-building (the single biggest score driver).** Biology gives
   you up to 360 marks of NEET's 720. An average student who pushes Biology from 280 to 340
   gains 60 marks in 90 days — a higher ROI than any other subject upgrade. Spend 3 of your
   daily 8 hours on Biology in this window. Use Trueman's Elementary Biology + NCERT
   Exemplar for the depth NCERT alone doesn't reach. Make a chapter-wise flashcard deck for
   genetics, ecology, plant physiology, human physiology.

3. **Months 5–7: Chemistry parallel push.** Inorganic Chemistry rewards memorisation, not
   problem-solving — perfect for average students. Master the periodic-table-block-wise
   trends, all named reagents and reactions, and the coordination compound colour-and-
   spin-state tables. Add Organic Chemistry mechanisms (electrophilic addition, SN1/SN2,
   E1/E2) once Inorganic feels solid. Physical Chemistry numerical can be light through
   month 7 — pick it up in month 8.

4. **Months 6–10: Physics — accept 100/180 and optimise from there.** Physics is where
   average students lose the most time for the least return. Realistic target: 100/180 in
   NEET Physics (~28 questions correct out of 45). Drill ONLY the 6 high-weightage chapters
   in this window: Mechanics, Modern Physics, Current Electricity, Magnetism, Optics,
   Thermodynamics. Skip Communication Systems, Semiconductors final 30%, and detailed
   rotational dynamics if time is short. Use formula-first practice rather than
   derivation-first.

5. **Months 7–10: PYQ drill (the highest-impact phase).** From month 7, do 25 NEET PYQs
   daily, alternating subjects. Maintain an error log — write the question, your wrong
   answer, the right approach, the chapter. Review the error log every Sunday. Average
   students who actually do this error-log review every week typically gain 40-60 marks by
   month 9. Skipping it is the most common reason scores plateau at 500.

6. **Months 8–10: Weekly full-length mocks (Sunday morning, exam-time slot).** Take a
   mock under exam conditions: NEET timing (3hr 20min for 200 questions), no breaks,
   physical OMR or CBT depending on format. Analyse the same day — not the next day. Move
   to twice-weekly mocks in the final 6 weeks.

7. **Month 10 (final month): NCERT skim + mock-error review only.** Stop all new content.
   Re-skim NCERT Biology cover-to-cover. Review the entire error log. Cut sleep deficits
   — sleep 7+ hours nightly because exam-day cognitive performance is determined more by
   sleep than by 24th-hour cramming.

## Daily Hour Allocation (for the 6-hour and 8-hour student)

| Subject | 6-hour day (Class 12 student) | 8-hour day (dropper) | Why |
|---|---:|---:|---|
| Biology | 2 hours | 3 hours | Highest weight (360/720), highest ROI for average students |
| Chemistry | 1.5 hours | 2 hours | Memorisation-heavy → predictable gains |
| Physics | 1.5 hours | 2 hours | Hardest for average students — limit to avoid demoralisation spiral |
| Revision/mock | 1 hour | 1 hour | Daily revision of yesterday's content prevents 2-week-forgetting curve |

## What Average Students Should NOT Do

A few traps we routinely steer students away from in 1-on-1 mentoring:

- **Don't chase a coaching test series before NCERT is done.** Test series for unprepared
  students = 280-330 scores week after week = morale collapse by month 4.
- **Don't switch books mid-prep.** Average students who switch from Trueman to Sanjay Sharma
  to MTG in the same month lose 4-6 weeks to inconsistency.
- **Don't spend more than 30 minutes on a single Physics problem.** If stuck, mark it,
  move on, come back during the weekly review. Time-to-solve is the single biggest gap
  between average and topper students; manage the clock first.
- **Don't compare with toppers in the first 4 months.** Topper-vs-average gap is widest in
  the first quarter and narrowest in the last quarter — patience compounds faster than
  comparison.

## FAQ

**Q: I'm scoring 380 in mocks — can I cross 600 in NEET 2027?**
A: Yes if you have 8+ months runway and 7 hours of daily study. The path is Biology +25
marks, Chemistry +25 marks, Physics +15 marks per month for 8 months. Maths-heavy NEET
mocks misrepresent — use NEET-pattern PYQ-based mocks only.

**Q: Should an average student take coaching or self-study?**
A: One-on-one mentoring beats batch coaching for average students. Batch coaching paces
for the median student in a 200-person batch (often a 550-mark profile) — average students
fall behind invisibly. One-on-one mentoring lets you calibrate explanation depth to your
current level. Self-study works only if discipline is unusually strong.

**Q: How much time should I give to Biology vs Physics?**
A: 3 hours daily to Biology, 2 hours daily to Physics for an average student. The opposite
ratio (more Physics, less Biology) is the single biggest strategic mistake we see — Physics
has a low ceiling for average students; Biology has near-unlimited ceiling.

**Q: Is dropping a year worth it for an average student?**
A: Yes if first attempt was below 450 AND you used the year poorly. The average dropper
gains 80-120 marks because the gap is consistency, not capability. If first attempt was
500-550 and you studied 6+ hours daily through Class 12, the dropper-year delta is
typically smaller — 40-60 marks.
```

### Voice-ready answer

> "An average NEET student should follow a 10-month plan: NCERT mastery in months one to
> four, deep Biology focus in months four to seven, daily PYQ drilling from month seven,
> and weekly mocks in the last three months. Biology drives the biggest score jumps."

(40 words.)

---

## U-3 · `/blog/is-private-jee-tutor-worth-it` (T-31 — UNCLAIMED 9 weeks)

**Target file:** Add new entry to `src/data/blogData.ts`. Add slug to `app/sitemap.xml/route.ts`.
**Format:** Paragraph snippet + supporting list — "Is X worth it?" queries reward direct yes/no answers in first 50 words.
**Why this wins commercially:** This IS our money query. Owning this snippet routes private-tutor-curious traffic directly to our offering.
**Internal links to add:** From `/batch-vs-personal-coaching` (existing one-on-one comparison page). From `/mindpeak-vs-allen`, `/mindpeak-vs-fiitjee`, `/mindpeak-vs-aakash` (so comparison-shoppers reach this guide). From `/pricing`.

### Blog `blogData.ts` entry (drop-in)

```ts
{
  slug: 'is-private-jee-tutor-worth-it',
  title: `Is a Private JEE Tutor Worth the Money in ${CURRENT_EXAM_YEAR}? An Honest Cost-vs-Outcome Breakdown`,
  excerpt: 'Private JEE tutoring costs ₹40,000 to ₹2,00,000 per year. We compare it head-to-head with batch coaching across cost, score improvement, doubt-resolution speed, and time-to-rank-gain.',
  category: 'Exam Strategy',
  date: '2026-06-25',
  author: 'Krishnendu Das',
  authorBio: 'IIT Kharagpur alumnus · 7 years mentoring JEE aspirants 1-on-1 at MindPeak Institute',
  readingTime: '7 min read',
  featured: true,
}
```

### Blog body

```markdown
**Yes, a private JEE tutor is worth the money for students who are stuck between 85–95
percentile and have a clear weak-subject pattern — typically Physics or Math. Private
tutoring costs ₹40,000–₹2,00,000 per year (vs ₹1.2–2.5 lakh for elite batch coaching) and
typically lifts percentile by 4–8 points over a 6-month engagement when the tutor is
correctly matched.** It is NOT worth the money if you are starting from scratch with no
prior exposure to JEE-pattern problems — batch coaching's syllabus pacing serves
foundation-stage students better.

## When Private JEE Tutoring Is Worth It (and When It Isn't)

### Worth it:

1. **You're in 85–95 percentile range and improvement has stalled.** Most stall-outs are
   caused by 2-3 specific weak areas (e.g., Mechanics + Calculus + Coordination Compounds).
   A private tutor diagnoses and targets these in 4-6 weeks. Batch coaching cannot
   personalise this fast.

2. **You're a dropper aiming for top NIT/IIT.** Droppers know which chapters cost them
   marks last year. A private tutor builds prep around those gaps. The opportunity cost of
   a generic dropper batch is high — droppers have one year, not three.

3. **Your school has weak Math/Physics teaching.** Many Indian school PCM departments cover
   JEE-tangent content at board-pattern depth only. A private tutor fills the school gap
   without you waiting for the next batch class.

4. **You have 6 months or less to a major test.** Personalised pacing beats fixed
   batch-pacing when time is short. Tutors can compress topics you already know and slow
   down on weak areas — batch coaching cannot.

### NOT worth it:

1. **You are in Class 11 with zero JEE exposure.** Foundation-stage students benefit from
   the structured year-long sequence batch coaching provides. Private tutoring at this
   stage is overpriced "school continuation."

2. **Your weak area is exam temperament, not concepts.** Exam temperament improves through
   weekly full-length mock exposure (which batch coaching provides via test series) — not
   through 1-on-1 conceptual sessions. If your scores fluctuate widely in mocks despite
   knowing the material, fix that with mocks, not a tutor.

3. **The "private tutor" is just a graduate student tutoring on the side.** Most local
   private tutors do not have JEE-Advanced-grade teaching depth. Online 1-on-1 platforms
   with IIT alumni mentors solve this — but a random local tutor at ₹500/hour is rarely
   worth it.

## Cost Comparison: Private JEE Tutor vs Batch Coaching vs Self-Study

| Option | Annual cost (₹) | Hours/week | Personalisation | Typical improvement |
|---|---:|---:|---|---|
| Elite batch coaching (Allen/Aakash classroom) | ₹1,50,000–2,50,000 | 18–22 | Low (200+ batch) | +10–25 percentile in 12 months |
| Online batch coaching (Unacademy/PW Plus) | ₹40,000–80,000 | 14–18 | Low | +5–15 percentile in 12 months |
| Private tutor (local) | ₹40,000–1,00,000 | 4–6 | High | +4–8 percentile in 6 months |
| Online 1-on-1 mentor (e.g., MindPeak) | ₹60,000–1,80,000 | 6–10 | Very high | +6–12 percentile in 6 months |
| Self-study only | ₹5,000–15,000 (books) | self-determined | n/a | High variance — depends on discipline |

## The Math: When Does Private Tutoring Pay Off?

Take a student stuck at 90 percentile (~135/300 raw JEE Main score). Hiring a private
tutor for 6 months at ₹15,000/month = ₹90,000 investment. If it lifts the student to 95
percentile (~155/300), the rank jump is roughly from rank 80,000 to rank 30,000. That
opens NIT-tier branches that were previously closed.

For comparison, the difference between a ₹15 LPA NIT placement and a ₹6 LPA private-tier
placement over a 5-year career is ~₹45 lakh. The ₹90,000 tutor is a 50x payback. The
question is rarely "can I afford it" — it is "can I find the right tutor."

## Choosing the Right Private JEE Tutor (the part most students get wrong)

A few signals we recommend students screen for when picking a 1-on-1 mentor:

- **Asks about your last 3 mock papers before quoting fees.** A tutor who hasn't
  diagnosed your gaps cannot promise the right pacing.
- **Has cleared JEE Advanced themselves with verifiable rank.** IIT graduate vs JEE
  Advanced rank-holder are different things; the second is the higher signal.
- **Teaches in problem-solving mode, not lecture mode.** Lectures are commodity content
  available free on YouTube. A live tutor's only durable advantage is real-time
  problem-solving alongside you.
- **Shares an error log with you weekly.** Tutors who don't track student mistakes
  cannot show improvement; you can't manage what you can't measure.
- **Available for doubt resolution within 12 hours.** Doubt delay = topic-decay. Long
  asynchronous delays defeat the entire point of paying for personalisation.

In our experience at MindPeak Institute mentoring JEE aspirants 1-on-1, the best-fit
students are typically droppers in the 90-95 percentile band — they have enough
foundation to benefit from precision teaching, and enough urgency to use the sessions
intensely. We turn down Class 11 students with no JEE exposure not because we can't
teach them but because batch coaching genuinely serves them better at that stage.

## FAQ

**Q: How much does a good private JEE tutor cost in India?**
A: Quality private JEE tutors charge ₹800–₹2,500 per hour depending on credentials. Six
months at 6 hours weekly = ₹1.2–3.7 lakh. Online 1-on-1 mentor platforms with IIT-alumni
mentors are typically ₹60,000–₹1.8 lakh annually for 6-10 hours weekly, with structure
that local hourly tutoring usually lacks.

**Q: Can a private tutor replace coaching for JEE?**
A: For Class 11 starting from scratch — no. For droppers and Class 12 stalled-at-90
students — yes. A private tutor + a paid mock test series (₹5,000-15,000/year) covers
both the personalisation gap and the mock-exposure gap, replacing batch coaching
end-to-end.

**Q: Is online 1-on-1 tutoring as effective as in-person tutoring?**
A: Yes for academic teaching. Screen-share makes problem walkthroughs as clear as a
physical whiteboard. Online formats also unlock IIT-alumni mentors who don't live in
your city. The deciding factor is the tutor's pedagogical skill, not the delivery format.

**Q: How do I know if my tutor is actually helping?**
A: Three signals after 8 weeks: (1) percentile in standardised mocks moves up by at
least 2 points, (2) your error log shows fewer repeat-mistakes on previously-failed
chapters, (3) you can solve mid-difficulty PYQs in the trained chapter without
prompting. If none of these are true at week 8, switch tutors — sunk cost is sunk.
```

### Voice-ready answer

> "A private JEE tutor is worth the money for students stuck between eighty-five and
> ninety-five percentile with a specific weak subject. It costs forty thousand to two lakh
> rupees yearly and typically lifts percentile by four to eight points in six months."

(38 words.)

---

## Carryover from May 30 — Still Applicable

The following snippet blocks from `seo-reports/snippet-content-2026-05-30/snippet-targets.md`
remain unchanged and ship-ready. **Do NOT re-draft.** Source-of-truth content is in the May 30 file:

- **T-3** `jee main vs jee advanced difference` → `/jee-main-vs-jee-advanced` (comparison table snippet — beat byjus.com)
- **T-8** `jee main exam pattern 2027` → `/jee-main-exam-pattern-2027` (must cite NTA bulletin)
- **T-7** `jee main marks vs percentile 2027` → `/jee-main-marks-vs-percentile-2027` (data table — beat careers360.com)
- **T-22** `neet vs jee which is harder` → ✅ shipped as `/blog/choosing-between-jee-and-neet` (May 30 snippet block content went into the blog)
- **T-25** `neet 2027 syllabus changes` → ✅ shipped as `/blog/neet-2027-syllabus-changes` (May 30 snippet block content went into the blog)
- **T-6** `how to score 99 percentile in jee main` → `/blog/how-to-score-99-percentile-jee-main-2027` (list snippet — beat careers360.com)
- **T-20** `how to score 650+ in neet` → `/blog/how-to-score-650-plus-neet` (list snippet — beat careers360.com)
- **T-4** `best strategy for jee main in 6 months` → `/blog/jee-main-6-month-strategy-2027` (list snippet — beat careers360.com)
- **T-29** `how to choose jee coaching` → `/blog/how-to-choose-jee-coaching` (list snippet — beat careers360.com)
- **T-14** `modern physics jee weightage` → `/jee-physics-modern-physics` (table snippet — beat embibe.com)
- **T-12** `electrostatics important questions jee` → `/jee-physics-electrostatics-important-questions` (now UNCLAIMED *and* has AIO since May 30 — newly leveraged)

---

## File-Level Implementation Note

After pasting the 3 new blog entries (U-1, U-2, U-3):

1. Add slugs to `app/sitemap.xml/route.ts`. The blog [slug] route auto-resolves, but the sitemap is the canonical "indexable" list.
2. Run `npm run update-sitemap` (per `package.json` script).
3. After deploy, POST to `/api/revalidate?secret=mindpeak-revalidate-2026&path=/blog/how-to-balance-boards-and-jee` (etc.) to purge ISR cache.
4. Submit each new URL via GSC URL Inspection → "Request Indexing."
5. Add 2 internal links per blog from the pages noted in each section header.

— End of file —
