# Featured Snippet Targets — 2026-05-23

Exact snippet-optimised blocks. The four "Shipped" blocks are already live in `src/data/blogData.ts` as markdown (rendered by `react-markdown` + `remark-gfm` → semantic `<ol>`/`<table>`). The "Queued" blocks are paste-ready for the dedicated pages still in the Content Creation Queue.

Exam facts verified against current public sources (May 2026). Marks-vs-percentile bands are **approximate** — NTA normalises across shifts, so values are indicative target bands, not guarantees.

---

## ✅ SHIPPED — `/blog/how-to-balance-board-exams-and-jee`
**Query:** how to balance board exams and jee · **Type:** List (UNCLAIMED)

> **How to Balance Board Exams and JEE Preparation**
> To balance board exams and JEE, use the 70/30 rule for most of the year (70% JEE, 30% board-specific material), then flip to ~70/30 in favour of boards in the final 6–8 weeks. Because 75–85% of the Class 12 syllabus overlaps with JEE, focused JEE prep already covers most board theory — add board-style answer writing, not a second syllabus.

5-step phase plan + subject divergence table + 4-question FAQ are live in the post.

---

## ✅ SHIPPED — `/blog/neet-preparation-strategy-for-average-student`
**Query:** neet preparation strategy for average student · **Type:** Table + List (UNCLAIMED)

> **NEET Preparation Strategy for an Average Student**
> An average student can crack NEET by prioritising Biology (360 of 720 marks) and mastering NCERT line by line, where ~80–90% of questions originate. A realistic 550–600 target is enough for government MBBS in many state quotas — reached through daily Biology, steady NCERT revision, and weekly mocks, not 14-hour days.

Target-score table (Biology 300–330, Chemistry 130–150, Physics 90–120 → 520–600) + Biology-first priority list + FAQ are live.

---

## ✅ SHIPPED — `/blog/is-private-jee-tutor-worth-it`
**Query:** worth paying for private jee tutor · **Type:** Paragraph (UNCLAIMED)

> **Is a Private JEE Tutor Worth It?**
> A private JEE tutor is worth it for students below the 80th percentile, those with one or two weak subjects, and droppers needing accountability — because one-on-one teaching targets your exact gaps instead of the batch average. For self-disciplined students above 95 percentile, a strong test series adds more marginal value than a tutor.

When-worth-it / when-not lists + tutor-vs-batch comparison table + FAQ are live.

---

## ✅ SHIPPED — `/blog/how-to-score-99-percentile-in-jee-main`
**Query:** how to score 99 percentile in jee main · **Type:** Table + List (beatable: careers360)

> **How to Score 99 Percentile in JEE Main**
> To score 99 percentile you typically need ~235–255 marks out of 300 (exact cutoff shifts with paper difficulty and NTA normalisation). It depends on >90% accuracy on attempted questions, complete NCERT Chemistry, and 15+ analysed mock tests — accuracy over volume, since negative marking makes a careless wrong answer a 5-mark swing.

**Marks-vs-percentile table (live in post, indicative):**

| Marks (/300) | Percentile (approx.) |
|---|---|
| 271–300 | 99.9–100 |
| 250–270 | 99.5–99.9 |
| 220–249 | 99.0–99.5 |
| 200–219 | 98.0–99.0 |
| 170–199 | 96–98 |
| 150–169 | 94–96 |
| 120–149 | 90–94 |
| 90–119 | 80–90 |

4-phase plan + high-weightage chapter list + FAQ are live.

---

## ⏳ QUEUED — paste-ready blocks for dedicated pages

### `/jee-main-exam-pattern-2027` — Table (beatable: byjus)
```html
<h2>JEE Main 2027 Exam Pattern</h2>
<p>JEE Main 2027 Paper 1 has 75 questions for 300 marks — Physics, Chemistry, and Mathematics each carry 25 questions (100 marks). Each subject has Section A (20 MCQs) and Section B (5 numerical-value questions), and all 75 are compulsory. Marking is +4 correct, −1 incorrect (including Section B).</p>
<table>
  <tr><th>Subject</th><th>Section A (MCQ)</th><th>Section B (Numerical)</th><th>Marks</th></tr>
  <tr><td>Physics</td><td>20</td><td>5 (all compulsory)</td><td>100</td></tr>
  <tr><td>Chemistry</td><td>20</td><td>5 (all compulsory)</td><td>100</td></tr>
  <tr><td>Mathematics</td><td>20</td><td>5 (all compulsory)</td><td>100</td></tr>
  <tr><td><strong>Total</strong></td><td>60</td><td>15</td><td><strong>300</strong></td></tr>
</table>
```

### `/jee-main-vs-jee-advanced` — Table (beatable: byjus)
```html
<h2>JEE Main vs JEE Advanced: Key Differences</h2>
<p>JEE Main is the qualifying exam for NITs, IIITs, and GFTIs and the gateway to JEE Advanced; JEE Advanced is the harder, IIT-only exam taken by the top ~2.5 lakh JEE Main qualifiers. Main tests speed and accuracy on a fixed pattern; Advanced tests deeper, multi-concept problem solving with a variable, unpredictable pattern.</p>
<table>
  <tr><th>Factor</th><th>JEE Main</th><th>JEE Advanced</th></tr>
  <tr><td>Conducting body</td><td>NTA</td><td>IITs (rotating)</td></tr>
  <tr><td>Admission to</td><td>NITs, IIITs, GFTIs</td><td>IITs</td></tr>
  <tr><td>Difficulty</td><td>Moderate</td><td>High</td></tr>
  <tr><td>Pattern</td><td>Fixed (75 Q / 300)</td><td>Variable each year</td></tr>
  <tr><td>Eligibility</td><td>Class 12 pass</td><td>Top ~2.5 lakh Main qualifiers</td></tr>
</table>
```

### `/neet-vs-jee-comparison` — Paragraph + Table (beatable: careers360)
```html
<h2>NEET vs JEE: Which Is Harder?</h2>
<p>NEET and JEE are hard in different ways: JEE (Advanced especially) is harder in problem-solving depth and Mathematics, while NEET is harder in volume — 180 questions across a vast Biology syllabus demanding near-perfect NCERT recall under tight time. JEE rewards analytical reasoning; NEET rewards memory, accuracy, and speed.</p>
```

### `/neet-2027-syllabus-changes` — List (beatable: careers360)
```html
<h2>NEET 2027 Syllabus: What to Know</h2>
<p>NEET 2027 follows the NTA-rationalised NCERT syllabus with 180 compulsory questions for 720 marks (Biology 90, Physics 45, Chemistry 45; +4 / −1; 3 hours). Confirm the exact topic list against the latest official NTA notification before finalising your plan, as deleted/added chapters shift year to year.</p>
```
> ⚠️ Verify the 2027 topic-level changes against the official NTA notification before publishing — syllabus rationalisation details must not be guessed.

---

## Format rule of thumb (from §3 of the audit)
- "how to / tips / steps" → numbered `<ol>`
- "X vs Y / marks vs percentile / weightage / pattern" → semantic `<table>`
- "what is / is X worth it" → 40–60-word `<p>` directly after the H2
- Always close with one E-E-A-T sentence: "In our experience mentoring … , [specific number/insight]."
