# MindPeak Institute — Keyword Ranking Strategy

> Goal: rank in the top 3 organic results for high-intent JEE / NEET coaching queries.
> This document captures the **competitive keyword pattern analysis** for the
> currently top-ranking pages and translates it into **on-page targets** for
> every major MindPeak course page.

Branch: `claude/seo-keyword-ranking-audit-3j81G`
Last reviewed: 2026-05-19

---

## 1. Method

For every "money keyword" we care about, we pulled the page that currently
occupies a top-3 SERP slot on Google India and counted the frequency of the
key terms (single words and short phrases) inside the rendered body. The
competitors sampled are the platforms that dominate JEE / NEET SERPs:

| Competitor | Domain | Pages analysed |
|---|---|---|
| Aakash Digital | `aakashdigital.com` | `/jee`, `/neet` |
| Physics Wallah | `pw.live` | `/iit-jee/batches`, `/neet/batches` |
| Vedantu | `vedantu.com` | `/online-course/jee-online-courses`, `/online-course/jee-repeater-course` |
| Allen | `allen.in` | `/jee`, `/neet` (JS-rendered, headings inferred from SERP) |
| Unacademy / Infinity Learn / Aakash AESL | (heading & meta-title sample) | landing pages |

Why these — they are the pages that own the queries we want.

---

## 2. The competitor keyword frequency table

Numbers below are **occurrences per page** on the live competitor landing
page (rendered HTML / visible text). All pages are long-form (3-6k words).

### 2.1 "JEE coaching" cluster

| Term | Aakash `/jee` | PW `/iit-jee/batches` | Vedantu `/jee-online-courses` | **Target (MindPeak)** |
|---|---:|---:|---:|---:|
| JEE | 89 | 87 | 157 | **80-120** |
| online | 65 | 28 | 95 | **40-70** |
| coaching | 44 | 19 | 78 | **30-50** |
| course / courses | 41 | 12 | 89 | **30-50** |
| preparation | 30 | 17 | 48 | **20-35** |
| IIT / IITian | 17 | n/a (PW brand) | 28 | **15-25** |
| Main | 10 | n/a | 26 | **8-15** |
| Advanced | 10 | 11 | 25 | **8-15** |
| live (classes) | 16 | 3 | 42 | **15-25** |
| classes | 9 | 47 (incl. "Class 11/12") | 54 | **20-40** |
| doubt | 11 | 5 | 9 | **6-12** |
| mentor / mentorship | 8 | 0 | 0 | **8-15** *(MindPeak differentiator)* |
| study material | 8 | 4 | 10 | **5-10** |
| test series | n/a | n/a | 11 | **5-10** |
| Class 11 / Class 12 | 12 | 47 | 14 | **10-20** |
| dropper / repeater | n/a | 8 | 4 | **5-10** |
| best | 5 (in H1) | 0 | 7 | **4-8** |
| faculty | n/a | 3 | 13 | **5-10** |

### 2.2 "NEET coaching" cluster

| Term | Aakash `/neet` | PW `/neet/batches` | **Target (MindPeak)** |
|---|---:|---:|---:|
| NEET | 47 (phrases) | 47 | **70-110** |
| online coaching | 18 | 9 (online) | **25-40** |
| Aakash / brand | 26 | 8 (PW) | **15-25** (MindPeak) |
| Class 11 / 12 | 12 | 18 | **10-20** |
| dropper | 6 | 8 | **5-10** |
| preparation | 12 | 8 | **15-25** |
| NCERT | 7 | 0 | **5-10** *(NEET-critical)* |
| Biology | implicit | 0 | **8-15** *(money sub-keyword)* |
| live classes | 8 | 3 | **10-18** |
| doubt | 4 | 4 | **5-10** |
| faculty | 5 | 3 | **5-10** |
| study material | 7 | 4 | **5-10** |
| mentor / mentorship | 5 | 0 | **8-15** *(differentiator)* |
| syllabus | implicit | 7 | **4-8** |
| best | yes (H1) | 0 | **3-6** |

### 2.3 Dropper / repeater cluster (Vedantu `/jee-repeater-course`)

| Term | Frequency | **Target (MindPeak `/jee-dropper-coaching`, `/neet-dropper-coaching`)** |
|---|---:|---:|
| JEE repeater / repeaters | 28 | **20-30** |
| dropper / dropper batch | 15 | **15-25** |
| JEE Main | 25 | **15-25** |
| JEE Advanced | 12 | **8-15** |
| online coaching / classes | 18 | **15-25** |
| doubt solving | 11 | **6-12** |
| test series | 10 | **6-10** |
| live classes | 9 | **8-15** |
| study material | 12 | **6-10** |
| Physics, Chemistry, Maths | 8 | **5-10** |
| mock tests | 6 | **5-10** |
| mentor / mentoring | 7 | **10-18** *(differentiator)* |

---

## 3. Universal SERP patterns we observed

These appear on *every* top-ranking JEE/NEET coaching page. They are not
optional — they are the table stakes Google's intent-matching expects.

1. **Exam-year freshness in title & H1** — every top page has the *current*
   target year in the title (e.g. "JEE Main 2026") and is re-published yearly.
2. **"Best Online Coaching for X" exact phrase** — used in H1 by Aakash,
   Vedantu, Allen, AESL. Google heavily favours the literal phrase.
3. **Class-segmentation H2/H3 block** — three sub-sections: "for Class 11
   students", "for Class 12 students", "for Droppers / Repeaters". Universal.
4. **Feature-pillar H2 block** — five recurring pillars (always present, in
   any order):
   - Live interactive classes
   - Recorded lectures / revision
   - Study material / DPP / notes
   - Doubt resolution / doubt support
   - Test series / mock tests / performance analytics
5. **Personal mentorship H2** — Aakash, Vedantu, Infinity Learn all have an
   explicit "personal academic mentor / mentorship" section. **This is our
   strongest existing differentiator** — we should lean harder, not back off.
6. **FAQ block ≥ 5 questions** with `FAQPage` schema. Every competitor has it.
7. **"Why choose [Brand]" H2** — branded trust block toward the bottom of the page.
8. **Subject pivot block** — every JEE page mentions "Physics, Chemistry,
   Mathematics"; every NEET page mentions "Physics, Chemistry, Biology" (and
   NCERT). Verbatim subject lists matter for entity recognition.
9. **Doubt support response-time claim** — "24×7" or "<2 hour response".
10. **Geo-signal: "India"** in title or first paragraph (most competitors).

---

## 4. Money keywords mapped to MindPeak pages

These are the SEO targets the rest of the site should be built around. The
priority tier reflects *commercial value* × *current ranking gap*.

### Tier 1 — Flagship pages (highest traffic value)

| Slug | Primary keyword | Secondary keywords | Long-tail |
|---|---|---|---|
| `jee-coaching` | "best JEE coaching online" | "online JEE coaching India", "JEE Main and Advanced coaching", "1-on-1 JEE coaching" | "best online JEE coaching 2026", "personal mentor for JEE preparation" |
| `neet-coaching` | "best NEET coaching online" | "online NEET coaching India", "NEET UG coaching", "1-on-1 NEET coaching" | "best online NEET coaching 2026", "personal mentor NEET preparation" |
| `best-jee-coaching-in-india` | "best JEE coaching in India" | "top JEE coaching institute India", "best online JEE coaching" | "best IIT JEE coaching online India 2026" |
| `jee-main-coaching` | "JEE Main coaching online" | "JEE Main 2026 coaching", "JEE Main online classes" | "JEE Main coaching for Class 12", "JEE Main preparation online 1-on-1" |
| `jee-advanced-coaching` | "JEE Advanced coaching" | "IIT JEE Advanced preparation", "JEE Advanced online classes" | "JEE Advanced coaching for top IIT rank", "JEE Advanced 1-on-1 mentor" |
| `neet-ug-coaching` | "NEET UG coaching online" | "NEET UG 2026 coaching", "NEET UG preparation" | "NEET UG online coaching for Class 12", "NEET UG personal mentor" |
| `jee-dropper-coaching` | "JEE dropper coaching online" | "JEE repeater course", "JEE Main dropper batch online" | "best online coaching for JEE droppers 2026" |
| `neet-dropper-coaching` | "NEET dropper coaching online" | "NEET repeater course", "NEET dropper batch online" | "best online coaching for NEET droppers 2026" |
| `jee-crash-course` | "JEE crash course online" | "JEE Main crash course 2026", "60 day JEE crash course" | "JEE Main April attempt crash course online" |
| `neet-crash-course` | "NEET crash course online" | "NEET crash course 2026", "60 day NEET crash course" | "NEET UG crash course online last 90 days" |

### Tier 2 — Subject hubs (medium volume, high intent)

| Slug | Primary keyword | Secondary keywords |
|---|---|---|
| `jee-physics-coaching` | "JEE Physics coaching online" | "IIT JEE Physics classes", "JEE Physics tutor online" |
| `jee-chemistry-coaching` | "JEE Chemistry coaching online" | "JEE Chemistry tutor online" |
| `jee-mathematics-coaching` | "JEE Maths coaching online" | "IIT JEE Maths classes online" |
| `neet-physics-coaching` | "NEET Physics coaching online" | "NEET Physics tutor online" |
| `neet-chemistry-coaching` | "NEET Chemistry coaching online" | "NEET Chemistry tutor online" |
| `neet-biology-coaching` | "NEET Biology coaching online" | "NEET Biology tutor", "NCERT biology coaching" |

### Tier 3 — Sub-topic / chapter clusters (long-tail traffic)

- `jee-physics-mechanics`, `jee-physics-electrodynamics`,
  `jee-physics-optics`, `jee-physics-thermodynamics`, `jee-physics-waves`
- `jee-chemistry-organic`, `jee-chemistry-inorganic`, `jee-chemistry-physical`
- `jee-math-algebra`, `jee-math-calculus`, `jee-math-geometry`, `jee-math-trigonometry`

Each should target `"[topic] coaching online"` + `"IIT JEE [topic] preparation"`.

### Tier 4 — Adjacent exams & support pages

`foundation-coaching`, `bitsat-coaching`, `cuet-coaching`, `kcet-coaching`,
`mht-cet-coaching`, `comedk-coaching`, `viteee-coaching`, `srmjeee-coaching`,
`ap-eamcet-coaching`, `ts-eamcet-coaching`, `wbjee-coaching`,
`olympiad-coaching`, `isi-entrance-coaching`, `kvpy-coaching`.

### Tier 5 — Comparison pages (brand-conquest, high conversion)

`mindpeak-vs-allen`, `mindpeak-vs-aakash`, `mindpeak-vs-byjus`,
`mindpeak-vs-fiitjee`, `mindpeak-vs-narayana`, `mindpeak-vs-physics-wallah`,
`mindpeak-vs-resonance`, `mindpeak-vs-sri-chaitanya`, `mindpeak-vs-unacademy`.

---

## 5. On-page placement rules

For every Tier 1 / Tier 2 page these placements are **mandatory**:

| Element | Rule |
|---|---|
| `<title>` | `<Primary KW> — <Differentiator> | MindPeak` ≤ 60 chars |
| `<meta description>` | Primary KW in first 120 chars, ends with CTA, ≤ 155 chars |
| `<h1>` | Exact primary keyword (e.g. "Best JEE Coaching Online 2026") |
| First `<p>` of hero | Primary keyword in the first 100 words |
| First H2 | Secondary keyword + "Why MindPeak" framing |
| Class-segmentation H2 block | "For Class 11 / Class 12 / Droppers" sub-headings |
| Feature-pillar block | All 5 pillars present as H3s: live classes, recorded lectures, study material, doubt support, test series |
| Mentorship H2 | "Personal 1-on-1 Mentorship" — our differentiator, prominent |
| Subject pivot | Internal links to subject pages with anchor "JEE Physics coaching", etc. |
| FAQ block | ≥ 5 Q/A, with `FAQPage` schema, primary KW in at least 2 questions |
| Result / proof block | "AIR 42", verified outcomes, near top of page |
| Schema | `Course` (Tier 1/2) or `EducationalOrganization` |
| Canonical | `https://mindpeakinstitute.com/<slug>` |

---

## 6. Content gaps we found vs competitors

Audit findings vs the top SERPs for each cluster:

1. **Class-segmentation block missing on several MindPeak pages.** Every
   competitor has explicit "for Class 11 / Class 12 / Dropper" sub-sections.
   We need this on `jee-coaching`, `neet-coaching`, `jee-main-coaching`,
   `neet-ug-coaching`.

2. **"Free demo" / "free trial" CTA proximity to H1.** Vedantu, Aakash, and
   Allen all surface a free demo CTA in the hero. We have a `/free-trial`
   page but it isn't surfaced visually near every Tier 1 H1.

3. **Subject mentions per JEE / NEET page.** Competitors repeat
   "Physics, Chemistry, Mathematics" (JEE) and "Physics, Chemistry, Biology
   + NCERT" (NEET) 5-10 times per page for entity recognition. Verify and
   reinforce on each Tier 1 page.

4. **Multi-language signal.** PW pages explicitly mention Hindi / Hinglish /
   English. We're English-only — fine as positioning, but call it out
   explicitly ("Taught in English by IIT alumni") to remove ambiguity.

5. **Year-bound freshness.** Every competitor title ends in `2026` or
   `2026-27`. We use `CURRENT_EXAM_YEAR` correctly — make sure the constant
   is bumped on schedule and `lastmod` in sitemap follows.

6. **Doubt-support response-time claim.** Aakash/PW say "24×7"; we say
   "<2 hour WhatsApp doubt line". Keep ours — it's more credible and stays
   on-message with personalisation. Mention it 2-3 times per page.

7. **Result freshness.** "AIR 42" is great. Pages should also surface the
   *most recent* batch's headline result with a year stamp so the proof
   stays current alongside the year-bumped title.

---

## 7. Programmatic targets

Per-slug keyword targets are encoded in `src/data/keywordTargets.ts` and
validated by `scripts/keyword-audit.mjs`.

### Density, not absolute counts

Competitor pages are 3-6k words; our SEO pages are typically 300-2,300
words. Copying competitor *absolute* counts (e.g. "JEE × 89") onto a
700-word page is keyword stuffing. Targets are therefore stored as a
**density window per 1,000 words**:

```ts
{ term: 'JEE', per1k: { min: 25, max: 50 }, floor: 8, priority: 'primary' }
```

For each page the audit resolves the window against the page's actual
body word count:

```
min = max(round(per1k.min × wordCount / 1000), floor ?? 0)
max = max(round(per1k.max × wordCount / 1000), min + 1)
```

`floor` guarantees a term appears at least N times even on very short
pages (e.g. brand-level "JEE" must appear ≥ 8× on any JEE page, regardless
of length).

### Running the audit

```bash
node scripts/keyword-audit.mjs                   # all configured pages, table output
node scripts/keyword-audit.mjs --json            # machine-readable output
node scripts/keyword-audit.mjs --no-exit         # don't exit non-zero on primary misses
node scripts/keyword-audit.mjs jee-coaching      # filter to specific slugs
```

The audit reads `seoPageData.ts`, walks each page object with brace-balanced
parsing, concatenates every visible-text field (title, description, h1,
heroSubtitle, section content, bullets, FAQ q/a) into a single blob, then
counts each target keyword (case-insensitive, word-boundary) and reports
UNDER / OK / OVER plus the measured `per1k` density.

By default the script exits non-zero if any **primary** keyword is under
target — suitable for CI. Pass `--no-exit` for local diagnostic runs.

---

## 8. Action items checklist

Run in order. Each item is independently verifiable.

- [ ] Run `node scripts/keyword-audit.mjs` and triage the report
- [ ] Add Class 11 / Class 12 / Dropper sub-section to every Tier 1 page that doesn't have one
- [ ] Verify "Physics, Chemistry, Mathematics/Biology" mentioned ≥ 5 times on JEE/NEET hubs
- [ ] Confirm every Tier 1 page exports `FAQPage` JSON-LD with ≥ 5 questions
- [ ] Cross-link every Tier 1 page → Tier 2 subject pages with descriptive anchors
- [ ] Confirm `CURRENT_EXAM_YEAR` is set to the next exam cycle (currently `examYears.ts`)
- [ ] Confirm a free-trial CTA is visible in the hero of every Tier 1 page
- [ ] Re-run audit after content edits; commit the report to PR for review
- [ ] Bump sitemap `lastmod` via `npm run update-sitemap`

---

## 9. Sources

- [Aakash Digital — JEE Online Coaching](https://aakashdigital.com/jee)
- [Aakash Digital — NEET Online Coaching](https://aakashdigital.com/neet)
- [Physics Wallah — IIT JEE Batches](https://www.pw.live/iit-jee/batches)
- [Physics Wallah — NEET Batches](https://www.pw.live/neet/batches)
- [Vedantu — JEE Online Courses](https://www.vedantu.com/online-course/jee-online-courses)
- [Vedantu — JEE Repeater Course 2026](https://www.vedantu.com/online-course/jee-repeater-course)
- [Allen — JEE Online Coaching 2026](https://allen.in/jee)
- [Allen — NEET Online Coaching](https://allen.in/neet)
- [Aakash AESL — JEE Main Repeater Course 2026](https://www.aakash.ac.in/jee-mains-repeater-course)
- [Infinity Learn — Best Online JEE Coaching in India 2026](https://infinitylearn.com/knowledge-base/best-online-jee-coaching-in-india-2026-how-to-choose)
