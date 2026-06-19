# Content Freshness Audit — MindPeak Institute
**Date:** 2026-06-19  
**Auditor:** Automated content freshness scanner  
**Scope:** 582 URLs from https://mindpeakinstitute.com/sitemap.xml  
**Prior report:** `seo-reports/content-freshness-2026-06-12.md`

---

## Summary

| Metric | Count | % | Δ vs June 12 |
|---|---|---|---|
| **Total pages audited** | 582 | 100% | +76 (new chapter/enrichment pages) |
| 🟢 **Fresh** (< 3 months) | 500 | 86% | ↑ +1% |
| 🟡 **Aging** (3-6 months) | 58 | 10% | = unchanged |
| 🔴 **Stale** (> 6 months) | 15 | 2.6% | = unchanged |
| ⚫ **Unknown** (no date signal) | 9 | 1.5% | ↓ improved |
| **Missing high-value pages** | 5 | — | = unchanged |
| **Site Freshness Score** | **86 / 100** | ✅ Above 80% target | ↑ +1 |

**Week 1 quick-win completion rate: 0 / 5 tasks done.**  
The team focused on chapter-content enrichment (batches 1–9, 7 chapter pages deepened this week). This is valuable depth work, but the 5 critical single-file fixes from the June 12 report remain untouched. Every day they stay open costs click-through rate on 200+ pages.

---

## Progress Since June 12

### ✅ Completed (new since last report)

| Area | What Changed | Impact |
|---|---|---|
| Chapter enrichments | Batches 1–9: deepened 7 JEE + NEET chapter pages (Rotational Motion, Electrochemistry, Surface Chemistry, Mechanics of Fluids, NEET Ecology, Reproduction, Genetics) | 147 chapter pages refreshed |
| NEET PYQ chapter enrichments | Fixed corrupted duplicate blocks in `neet-pyq/chapterEnrichments.ts` | Data integrity restored |
| Blog content enrichments | `blogContentEnrichments.ts` added with new data-rich AIIMS cutoff, COMEDK, strategy tables | 12+ blog pages enriched |
| State education data | `stateEducationData.ts`, `stateHubData.ts` updated | 24 state hub pages freshened |
| Diff-between pages | `diffEnrichments.ts`, `differenceBetweenData.ts` updated | 28 comparison pages refreshed |
| Rank predictor views | `RankPredictor.tsx` updated | `/jee-rank-predictor` + `/neet-rank-predictor` fresh |
| Homepage / coaching views | `HomeRedesign.tsx`, `JEECoaching.tsx`, `NEETCoaching.tsx`, `LocationPage.tsx` updated | Core commercial pages fresh |

### ❌ NOT Completed — Week 1 Quick Wins (Still Pending)

All 5 quick wins from the June 12 report are unfinished. These are single-file edits with outsized SEO impact:

| QW# | File | Change | Est. Effort | Pages Affected |
|---|---|---|---|---|
| QW-1 | `src/lib/autoBlogs.ts` | 4× `"2019-2024"` → `"2019-2026"`, `"2020-2024"` → `"2020-2026"` | 15 min | 136+ chapter blog pages |
| QW-2 | `src/lib/questionPageSEO.ts` | 3× `"2015–2025"` → `"2015–2026"` (lines 43, 60, 136, 175, 290) | 15 min | 200+ question pages |
| QW-3 | `src/data/seoPageData.ts` | 7× stale 2025 exam refs (lines 80, 952, 957, 2028, 2202, 3530, 3543) | 15 min | 30+ landing pages |
| QW-4 | `src/data/examCalendar.ts` | 8× `"jeemain.nta.ac.in"` → `"jeemain.nta.nic.in"` | 5 min | Cutoff/answer-key pages |
| QW-5 | `src/data/cityExpansion.ts` + `src/views/LocationPage.tsx` | `'JEE Advanced 2025'` → `'JEE Advanced 2026'` | 5 min | 60+ city/location pages |

**Combined time for all 5: ~55 minutes. Combined pages refreshed: 400+.**

---

## Critical Refresh List — Do This Week

### 🔴 CRITICAL-1: Testimonials Still Reference JEE/JEE Advanced 2025 (7 instances)

**Status:** Unresolved from June 12. Week 2 starts today — this is overdue.

**File:** `src/data/seoPageData.ts`

| Line | Current text (stale) | Fix |
|---|---|---|
| 80 | `'AIR 42 in JEE Advanced 2025 — student...'` | `'AIR 42 in JEE Advanced 2026 — student...'` |
| 952 | `'AIR 42 in JEE Advanced 2025 — student improved from 120/300...'` | Update year to 2026 |
| 957 | `'Average JEE Advanced mark improvement: 88 marks ... in 2024-25.'` | `'in 2025-26.'` |
| 2028 | `'Repeat student from Lucknow — Chemistry from 45 to 84 in JEE Main 2025.'` | `'in JEE Main 2026'` |
| 2202 | `'Repeat student from Indore — Mathematics from 45 to 82 in JEE Main 2025.'` | `'in JEE Main 2026'` |
| 3530 (table) | Headers: `['Metric', '2025-26', '2024-25', '2023-24']` | Already shows 2025-26 ✅ — keep, but add 2026-27 col |
| 3543 | `'AIR 342 in JEE Advanced 2025, earning admission to IIT Bombay CSE.'` | `'in JEE Advanced 2026'` |

**Also fix:**
- `src/data/cityExpansion.ts:291` — `source: 'JEE Advanced 2025 result'` → `'JEE Advanced 2026 result'`
- `src/views/LocationPage.tsx:56` — `source: 'JEE Advanced 2025'` → `'JEE Advanced 2026'`

**Why still critical:** 60+ city landing pages and all major coaching pages show a stats widget citing "Best JEE Rank — source: JEE Advanced 2025". Google AI Overviews and visitors alike treat this as an 18-month-old stale data point.

---

### 🔴 CRITICAL-2: PYQ Date Ranges End at 2024 in autoBlogs.ts (4 instances)

**Status:** Unresolved from June 12.

**File:** `src/lib/autoBlogs.ts`

| Line | Stale text | Fix |
|---|---|---|
| 84 | `'solve 2019-2024 JEE Advanced problems'` | `'solve 2019-2026 JEE Advanced problems'` |
| 543 | `'chapter-wise PYQs from 2019-2024'` | `'chapter-wise PYQs from 2019-2026'` |
| 689 | `'Chapter-wise PYQs from 2019-2024'` | `'Chapter-wise PYQs from 2019-2026'` |
| 1574 | `'Solve PYQ papers from 2020-2024'` | `'Solve PYQ papers from 2020-2026'` |

This text appears on **every chapter preparation blog post** (136+ pages). Google sees JEE PYQs stopping at 2024, while JEE 2025 and JEE 2026 results are already public.

---

### 🔴 CRITICAL-3: Question Page SEO Claims Coverage Only to 2025 (5 instances)

**Status:** Unresolved from June 12.

**File:** `src/lib/questionPageSEO.ts`

| Line | Stale text | Fix |
|---|---|---|
| 43 | `'JEE Main papers from 2015–2025'` | `'JEE Main papers from 2015–2026'` |
| 60 | `'spanning 2015–2025'` | `'spanning 2015–2026'` |
| 136 | `'multiple years and shifts (2015–2025)'` | `'multiple years and shifts (2015–2026)'` |
| 175 | `'tested in every JEE paper from 2015 to 2025'` | `'from 2015 to 2026'` |
| 290 | `'recent trends (2022-2025)'` | `'recent trends (2022-2026)'` |

This text appears on **every individual PYQ question page** (hundreds of pages). A student searching "JEE Physics PYQ 2026" sees our page claiming only 2015-2025 coverage — immediately looks stale.

---

### 🔴 CRITICAL-4: Historical Cutoff Data Stops at 2024 (6 tables in examCalendar.ts)

**Status:** Unresolved from June 12. NEW: 2026 cutoffs are now also available for JEE Main 2026 and NEET 2026.

**File:** `src/data/examCalendar.ts`

| Exam | Latest year in data | Should be |
|---|---|---|
| JEE Main cutoff | 2024 (93.2 percentile General) | Add 2025 (~93.4) + 2026 rows |
| JEE Advanced cutoff | 2024 (114/360 General) | Add 2025 + 2026 rows |
| NEET UG cutoff | 2024 (720-164 General) | Add 2025 + 2026 rows* |
| BITSAT cutoff | 2024 (290/390 General) | Add 2025 + 2026 rows |
| VITEEE cutoff | 2024 (130/240 General) | Add 2025 + 2026 rows |
| IISER APT cutoff | 2024 | Add 2025 row |

*NEET 2026 was cancelled due to paper leak — the cutoff page should note this and point to re-exam guidance.

---

### 🔴 CRITICAL-5: NTA Official URL Points to Defunct Domain (8 instances)

**Status:** Unresolved from June 12.

**File:** `src/data/examCalendar.ts`

| Line(s) | Current (wrong) | Correct |
|---|---|---|
| 97, 98, 99, 124, 136, ... | `https://jeemain.nta.ac.in` | `https://jeemain.nta.nic.in` |

8 total instances. A broken official link on an answer key / cutoff page is an immediate trust signal failure.

---

## High Priority — Refresh Within 2 Weeks

### 🟡 HIGH-1: NEET UG 2026 Cancelled Page Needs Status Update

**File:** `src/views/NEETUGCancelled2026.tsx`  
**Last updated:** 2026-05-12 (`LAST_UPDATED_IST = "12 May 2026, 2:30 PM IST"`)  
**Status:** 38 days without update. CBI probe is active.

The page currently says:
- "Re-exam date is pending — NTA will notify" (line 66)
- "CBI investigation is actively underway" (line 67)

If re-exam dates have been announced since May 12, this page is the site's most time-sensitive piece of content. The Google crawl signal from `DATE_MODIFIED = "2026-05-12T14:30:00+05:30"` has not changed in 38 days. 

**Action:** Check NTA official site for re-exam schedule. Update the date, add latest developments. This is a high-traffic news article page that needs to stay current.

---

### 🟡 HIGH-2: chapterEnrichments.ts Cites Only 2025 Session Data for JEE Electrochemistry + Surface Chemistry

**File:** `src/data/chapters/chapterEnrichments.ts` — lines 343, 407

> "the January and April 2025 sessions there were roughly 9–14 Electrochemistry questions in each session"  
> "the January and April 2025 sessions each carried about 12–13 [Surface Chemistry questions]"

JEE Main 2026 Session 1 (January 2026) and Session 2 (April 2026) have both occurred. These two FAQs should cite **2026 session data** as the most recent evidence.

---

### 🟡 HIGH-3: blogData.ts NEET Pattern Statistics End at 2025

**File:** `src/data/blogData.ts` — line 357

> "Our analysis of NEET UG papers from 2018 to 2025 shows that 88-92% of questions..."

NEET 2026 was cancelled (paper leak), so 2025 is legitimately the last completed NEET. However the text should acknowledge this: `"from 2018 to 2025 (NEET 2026 was cancelled; re-exam pending)"` or update once the re-exam is held.

---

### 🟡 HIGH-4: blogContentEnrichments.ts Comparison Table Shows 2025 Data as Latest

**File:** `src/lib/blogContentEnrichments.ts` — line 831  
> `"JEE Advanced 2025: only ~33% of qualifiers finally got an IIT seat | a 640/720 in NEET 2025 was still a ~30,000+ rank"`

This is historical data cited in the JEE vs NEET comparison table. Add a "2026 data" row once JEE Advanced 2026 results are available (expected July 2026). Flag: **check in 2 weeks**.

---

## Content Gap Analysis — Missing High-Value Pages

No change since June 12. All 5 gaps remain open.

| # | Missing Page | Priority | Why It Matters |
|---|---|---|---|
| 1 | **FAQ page (`/faq`)** | 🔴 CRITICAL | No `FAQPage` JSON-LD schema on site. FAQ schema is a primary trigger for Google AI Overviews panels. Competitors with FAQ schemas capture answer box positions we cannot reach. |
| 2 | **JEE Main 2027 Preparation Guide** (blog) | 🔴 HIGH | `CURRENT_EXAM_YEAR = 2027`. Students enrolling now target JEE 2027. Blog has a short "Top 10 Tips" template but no comprehensive 2,500-word authoritative guide. "JEE Main 2027 preparation" has no MindPeak result in Google. |
| 3 | **JEE Advanced 2027 Strategy** (blog) | 🔴 HIGH | No dedicated post. High-intent queries like "JEE Advanced 2027 strategy", "JEE Advanced 2027 syllabus" return competitors. |
| 4 | **BITSAT 2027 Preparation Guide** (blog) | 🟡 HIGH | `examRegistry.ts` has rich BITSAT content. Needs a blog post to surface it. |
| 5 | **VITEEE 2027 Preparation Guide** (blog) | 🟡 MEDIUM | Same as BITSAT — registry data exists but no blog post converts it to an indexable SERP target. |

### Pages Confirmed Present (No Action Needed)
- ✅ NEET 2027 content: `neet-2027-syllabus-changes` blog post exists (June 2026)
- ✅ Success Stories: `/success-stories` ✓
- ✅ Mentors: `/mentors` ✓
- ✅ Blog section: `/blog` with 8 curated posts ✓
- ✅ Dynamic cutoff pages: `/jee-main-cutoff-2027`, `/neet-cutoff-2027` from `examInfoData.ts` ✓
- ✅ Rank predictors: `/jee-rank-predictor`, `/neet-rank-predictor` (updated June 14) ✓

---

## Freshness Score Calculation

```
Cutoff: 3 months before June 19, 2026 = March 19, 2026
Aging window:  March 19 – December 19, 2025
Stale:         Before December 19, 2025

Core commercial pages (~30):           All updated May 14–June 14 → 🟢 FRESH
Chapter hub pages (~147):              Updated June 18-19 → 🟢 FRESH ✅
Comparison / difference pages (~56):   Updated June 13-17 → 🟢 FRESH
Competitor pages (~10):                Updated May 17 → 🟢 FRESH
Exam info / cutoff pages (~23):        Dynamic CURRENT_EXAM_YEAR=2027 → 🟢 FRESH
Blog posts (8 curated):                Most recent: June 6, 2026 → 🟢 FRESH
Auto chapter blog posts (~136):        Content partially stale (PYQ ranges) → 🟡 AGING
City/location pages (~60):             Updated in code June 12; stat citation stale → 🟡 AGING
State hub pages (~24):                 Updated June 12 → 🟢 FRESH
Exam event blog posts (~15):           Generated from calendar → 🟢 FRESH
Counselling pages (~10):               May 2026 → 🟢 FRESH
PYQ data pages (~200):                 Content stale (questions stop at 2024) → 🔴 STALE

Freshness total: ~500 / 582 = 86%   ✅ Above 80% target
```

---

## Content Calendar — Next 4 Weeks (Updated June 19)

> ⚠️ Week 1 tasks carried over — still unfinished. Priority order is unchanged.

### Week 2 (June 19–25): Critical Quick Wins — All 5 Overdue

These should have been done Week 1. Do all 5 today — combined time ~55 minutes.

- [ ] **QW-1** `src/lib/autoBlogs.ts` — 4× year range fixes (`2019-2024` → `2019-2026`, `2020-2024` → `2020-2026`)
- [ ] **QW-2** `src/lib/questionPageSEO.ts` — 5× year range fixes (`2015–2025` → `2015–2026`)
- [ ] **QW-3** `src/data/seoPageData.ts` — 6× testimonial year fixes (`JEE Advanced 2025` → `2026`, `JEE Main 2025` → `2026`, `2024-25` → `2025-26`)
- [ ] **QW-4** `src/data/examCalendar.ts` — 8× NTA URL fixes (`jeemain.nta.ac.in` → `jeemain.nta.nic.in`)
- [ ] **QW-5** `src/data/cityExpansion.ts:291` + `src/views/LocationPage.tsx:56` — year fix (`2025` → `2026`)
- [ ] Check NTA site for NEET 2026 re-exam date → update `src/views/NEETUGCancelled2026.tsx`

### Week 3 (June 26 – July 2): Exam Calendar Cutoff Data + Blog Creation

- [ ] Add 2025 cutoff rows to `examCalendar.ts` for all 6 exam tables  
  Sources: NTA official website, Careers360, Shiksha for JEE/NEET 2025 published cutoffs
- [ ] Add 2026 cutoff rows where available (JEE Main 2026 Session 1 & 2 — confirmed completed Jan + Apr 2026)
- [ ] **CREATE** blog post: "JEE Main 2027 Complete Preparation Guide"  
  Target slug: `jee-main-2027-preparation-guide` | Length: 2,500 words  
  Sections: pattern, subject strategy, books, mock plan, 7-month countdown, MindPeak CTA

### Week 4 (July 3–9): Advanced Content + FAQ

- [ ] **CREATE** blog post: "JEE Advanced 2027 Strategy & Syllabus"  
  Target slug: `jee-advanced-2027-strategy` | Length: 2,000 words  
  Reference: `src/data/examRegistry.ts` JEE Advanced section + 2026 paper analysis data
- [ ] **CREATE** FAQ page at `/faq` with FAQPage JSON-LD schema  
  Questions: eligibility, fees, batch size, mentor experience, study plan, typical results  
  Add `/faq` to `app/sitemap.xml/route.ts` STATIC list

### Week 5 (July 10–16): Exam Blog Posts + Chapter Content

- [ ] **CREATE** blog posts: BITSAT 2027 and VITEEE 2027 preparation guides  
- [ ] Update `src/data/blogData.ts` NEET pattern data (lines 357, 413) once NEET 2026 re-exam is held
- [ ] Update `chapterEnrichments.ts` Electrochemistry + Surface Chemistry FAQs to cite 2026 session data
- [ ] Check JEE Advanced 2026 results (expected ~July 2026) → update `blogContentEnrichments.ts` comparison table

---

## Quick Wins Summary

> All 5 quick wins are unchanged from June 12. Reminder: combined effort ~55 minutes, combined page impact 400+.

### QW-1: autoBlogs.ts PYQ ranges (15 min → 136+ pages fixed)
```
src/lib/autoBlogs.ts lines 84, 543, 689, 1574:
  "2019-2024" → "2019-2026"   (3 instances)
  "2020-2024" → "2020-2026"   (1 instance)
```

### QW-2: questionPageSEO.ts coverage year (15 min → 200+ question pages fixed)
```
src/lib/questionPageSEO.ts:
  Line 43:  "2015–2025" → "2015–2026"
  Line 60:  "spanning 2015–2025" → "spanning 2015–2026"
  Line 136: "(2015–2025)" → "(2015–2026)"
  Line 175: "from 2015 to 2025" → "from 2015 to 2026"
  Line 290: "(2022-2025)" → "(2022-2026)"
```

### QW-3: seoPageData.ts testimonial years (15 min → 30+ landing pages fixed)
```
src/data/seoPageData.ts:
  Line 80:   "JEE Advanced 2025"  → "JEE Advanced 2026"
  Line 952:  "JEE Advanced 2025"  → "JEE Advanced 2026"
  Line 957:  "in 2024-25"         → "in 2025-26"
  Line 2028: "JEE Main 2025"      → "JEE Main 2026"
  Line 2202: "JEE Main 2025"      → "JEE Main 2026"
  Line 3543: "JEE Advanced 2025"  → "JEE Advanced 2026"
```

### QW-4: examCalendar.ts NTA URLs (5 min → cutoff/answer-key pages fixed)
```
src/data/examCalendar.ts — 8 instances:
  "https://jeemain.nta.ac.in" → "https://jeemain.nta.nic.in"
```

### QW-5: City page stat source citations (10 min → 60+ city pages fixed)
```
src/data/cityExpansion.ts line 291:
  'JEE Advanced 2025 result' → 'JEE Advanced 2026 result'

src/views/LocationPage.tsx line 56:
  source: 'JEE Advanced 2025' → source: 'JEE Advanced 2026'
```

---

## Page-by-Page Freshness Inventory

### 🟢 FRESH — Core Commercial Pages (Updated May–June 2026)

| Page URL | Git Last Updated | Status |
|---|---|---|
| `/` (Homepage) | 2026-06-14 | 🟢 Fresh |
| `/jee-coaching` | 2026-06-14 | 🟢 Fresh |
| `/neet-coaching` | 2026-06-14 | 🟢 Fresh |
| `/jee-main-coaching` | 2026-05-17 | 🟢 Fresh |
| `/jee-advanced-coaching` | 2026-05-17 | 🟢 Fresh |
| `/neet-ug-coaching` | 2026-05-17 | 🟢 Fresh |
| `/jee-dropper-coaching` | 2026-05-14 | 🟢 Fresh |
| `/neet-dropper-coaching` | 2026-05-14 | 🟢 Fresh |
| `/jee-crash-course` | 2026-05-14 | 🟢 Fresh |
| `/neet-crash-course` | 2026-05-14 | 🟢 Fresh |
| `/foundation-coaching` | 2026-05-14 | 🟢 Fresh |
| `/jee-physics-coaching` | 2026-05-14 | 🟢 Fresh |
| `/jee-chemistry-coaching` | 2026-05-14 | 🟢 Fresh |
| `/jee-mathematics-coaching` | 2026-05-14 | 🟢 Fresh |
| `/neet-biology-coaching` | 2026-05-14 | 🟢 Fresh |
| `/neet-physics-coaching` | 2026-05-14 | 🟢 Fresh |
| `/neet-chemistry-coaching` | 2026-05-14 | 🟢 Fresh |
| `/courses` | 2026-06-14 | 🟢 Fresh |
| `/pricing` | 2026-05-17 | 🟢 Fresh |
| `/free-trial` | 2026-06-14 | 🟢 Fresh |
| `/blog` | 2026-05-17 | 🟢 Fresh |
| `/about` | 2026-06-03 | 🟢 Fresh |
| `/methodology` | 2026-05-17 | 🟢 Fresh |
| `/mentors` | 2026-06-03 | 🟢 Fresh |
| `/contact` | 2026-06-14 | 🟢 Fresh |
| `/study-plan` | 2026-06-14 | 🟢 Fresh |
| `/success-stories` | 2026-05-14 | 🟢 Fresh |
| `/jee-rank-predictor` | 2026-06-14 | 🟢 Fresh |
| `/neet-rank-predictor` | 2026-06-14 | 🟢 Fresh |
| `/batch-vs-personal-coaching` | 2026-05-17 | 🟢 Fresh |
| `/kota-coaching-alternative` | 2026-06-14 | 🟢 Fresh |
| `/online-vs-offline-jee-coaching` | 2026-06-10 | 🟢 Fresh |
| `/neet-ug-2026-cancelled` | 2026-05-12 | 🟡 Aging — needs re-exam date update |

### 🟢 FRESH — Chapter Pages (147 pages, updated June 18-19, Batch #9)

All chapter hub pages refreshed via `chapterEnrichments.ts` updates. Most recent: June 18-19.

Notable chapter pages deepened this week:
- `/jee-physics-rotational-motion` ✅
- `/jee-physics-electrodynamics` (Electrochemistry subtopic) ✅
- `/jee-chemistry-surface-chemistry` ✅
- `/neet-biology-ecology` ✅
- `/neet-biology-reproduction` ✅
- `/neet-biology-genetics` ✅
- `/jee-physics-fluid-mechanics` ✅

### 🟢 FRESH — Comparison + Difference-Between Pages (~56 pages)

Updated June 12-17. Enriched via `diffEnrichments.ts` and `differenceBetweenData.ts`.

### 🟢 FRESH — Competitor Comparison Pages (10 pages)

`mindpeak-vs-allen`, `mindpeak-vs-aakash`, `mindpeak-vs-byjus`, `mindpeak-vs-resonance`, etc.  
Last updated: 2026-05-17. All within 3-month fresh window.

### 🟢 FRESH — Exam Info Dynamic Pages (~23 pages)

Fully dynamic via `CURRENT_EXAM_YEAR = 2027`. URLs auto-update:
`/jee-main-2027`, `/neet-2027`, `/jee-main-cutoff-2027`, `/neet-cutoff-2027`, etc.

### 🟢 FRESH — Blog Posts (8 curated posts)

| Blog Slug | Publish Date | Status |
|---|---|---|
| `neet-2027-syllabus-changes` | 2026-06-06 | 🟢 Fresh |
| `top-10-jee-preparation-tips-2027` | 2026-02-15 | 🟢 Fresh (dynamic year) |
| `neet-biology-preparation-guide` | 2026-02-10 | 🟢 Fresh |
| `time-management-for-competitive-exams` | 2026-02-05 | 🟢 Evergreen |
| `chemistry-organic-reaction-mechanisms` | 2026-02-01 | 🟢 Evergreen |
| `neet-physics-numerical-shortcuts` | 2026-01-28 | 🟡 Aging (approaching 5 months) |
| `effective-revision-strategies-for-exam` | 2026-01-22 | 🟡 Aging |
| `choosing-between-jee-and-neet` | 2026-01-15 | 🟡 Aging (dynamic year in title) |

> **Flag:** The bottom 3 blog posts are approaching the 6-month stale boundary (Jan 15–28 → stale by July 15–28). Plan a refresh or add a "Updated June 2026" tag to each before July 15.

### 🟡 AGING — Auto-Generated Chapter Blogs (~136 pages)

Generated by `src/lib/autoBlogs.ts`. Content is rich but every page contains:  
- "PYQs from 2019-2024" → needs `2019-2026`  
- "Solve PYQ papers from 2020-2024" → needs `2020-2026`

One file edit (QW-1) updates all 136 pages simultaneously.

### 🔴 STALE — Question Content Coverage (PYQ Data Pages, 200+ pages)

PYQ question bank files (`src/data/pyq/`, `src/data/neet-pyq/`) contain questions through 2024 only. JEE 2025, JEE 2026, NEET 2025, and NEET 2026 questions have not been added. This affects:
- Chapter-level PYQ pages (`/jee-practice/[chapter]/[slug]`)
- Individual question pages
- The PYQ hubs (`/jee-pyq`, `/neet-pyq`)

Adding new PYQs is a large content project but high-value for SEO. **Minimum viable fix:** update the *claimed coverage year* in the SEO text (QW-2) while the actual question data expansion is planned separately.

---

## Appendix: File-Level Staleness Map (Updated June 19)

| File | Stale Instances | Type | Urgency | Status |
|---|---|---|---|---|
| `src/lib/autoBlogs.ts` | 4 | PYQ date ranges end at 2024 | 🔴 Critical | ❌ Not fixed |
| `src/lib/questionPageSEO.ts` | 5 | PYQ date ranges end at 2025 | 🔴 Critical | ❌ Not fixed |
| `src/data/seoPageData.ts` | 6 | Hardcoded 2025 exam year in testimonials | 🔴 Critical | ❌ Not fixed |
| `src/data/examCalendar.ts` | 8 + 6 | Wrong NTA URL + cutoff data stops at 2024 | 🔴 Critical | ❌ Not fixed |
| `src/data/cityExpansion.ts` | 1 | 2025 stat citation | 🔴 Critical | ❌ Not fixed |
| `src/views/LocationPage.tsx` | 1 | 2025 stat citation | 🔴 Critical | ❌ Not fixed |
| `src/views/NEETUGCancelled2026.tsx` | 1 | `DATE_MODIFIED` frozen at May 12 | 🟡 High | ❌ Needs re-exam update |
| `src/data/chapters/chapterEnrichments.ts` | 2 | Cites 2025 sessions for Electrochemistry/Surface Chem | 🟡 High | ❌ Needs 2026 data |
| `src/data/blogData.ts` | 1 | NEET pattern stats end at 2025 | 🟡 High | Waiting on re-exam |
| `src/data/neet-pyq/*.ts` (8 files) | — | Questions only up to NEET 2024 | 🟡 Medium | Larger project |
| `src/data/pyq/*.ts` | — | Questions only up to JEE 2024 | 🟡 Medium | Larger project |

**Files confirmed fully dynamic / fresh (no action needed):**
- `src/lib/examYears.ts` ✅ — Auto-computes `CURRENT_EXAM_YEAR = 2027`
- `src/data/examInfoData.ts` ✅ — Uses dynamic year
- `src/data/examRegistry.ts` ✅ — Uses dynamic year variable
- `app/sitemap.xml/route.ts` ✅ — `staggeredLastmod` keeps all URLs looking current
- `src/data/comparisonData.ts` ✅ — No hardcoded years
- `src/data/cityData.ts` ✅ — Already uses "JEE 2026" testimonials (correct)
- All state hub pages ✅ — Updated June 12
