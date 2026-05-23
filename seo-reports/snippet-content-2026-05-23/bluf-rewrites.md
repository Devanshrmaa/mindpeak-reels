# BLUF Rewrites — 2026-05-23

Bottom-Line-Up-Front opening paragraphs. AI Overview retrievers and Featured Snippets pull the first 1–2 sentences, so every opening must answer the page's target query directly, with a specific number, before any brand or motivational language.

---

## ✅ Shipped this week

### `/neet-coaching` hero — `src/views/NEETCoaching.tsx:209`

**Before (4/10 — emotional hook, AI skips it):**
> "Your dream of becoming a doctor deserves more than a seat in a 200-student classroom. At MindPeak, every NEET aspirant receives a dedicated mentor from AIIMS or top medical colleges, an adaptive Biology-first curriculum, and daily 1-on-1 live sessions. 95% success rate, NCERT mastery, 500+ students mentored."

**After (shipped — answers "how to prepare for NEET" first):**
> "NEET success starts with the right priority order: Biology carries 360 of 720 marks, so it comes first — anchored to NCERT, where 80-90% of NEET questions originate. At MindPeak, every NEET aspirant gets a dedicated AIIMS-mentored coach, an adaptive Biology-first curriculum, and daily 1-on-1 live sessions — backed by a 95% success rate, NCERT mastery, and 500+ students mentored."

*Why it wins:* opens with an actionable, numeric fact (360/720, 80-90% NCERT) that maps to the query intent, then transitions to the offer. Brand claims kept, just demoted below the answer.

---

## ⏳ Remaining priority rewrites (next batch)

Each "After" below is paste-ready. Edit the corresponding hero/intro string.

### 1. `/jee-coaching` hero (`src/data/seoPageData.ts` → `jee-coaching.heroSubtitle`)
**Before (6/10 — offer-first):** "Crack JEE 2027 with 1-on-1 mentors from IIT/NIT. Adaptive curriculum, daily doubt sessions, 95% success rate…"
**After:**
> "Cracking JEE Main needs ~235-255 marks out of 300 for 99 percentile — reached through NCERT-strong Chemistry, high-weightage chapter mastery, and 15+ analysed mock tests. MindPeak's 1-on-1 IIT/NIT mentors build exactly that accuracy-first plan around your weak areas, with daily doubt sessions and a 95% success rate."

### 2. `/online-vs-offline-jee-coaching` intro (`src/views/OnlineVsOffline.tsx`)
**Before (5/10 — no real opening paragraph):** "Honest comparison of online vs offline JEE coaching…"
**After:**
> "Online JEE coaching is now as effective as offline for most students and clearly better for those who need 1-on-1 attention — it removes commute time, gives access to IIT-alumni mentors regardless of city, and records every class for revision. Offline still wins on peer pressure and fixed routine. Below is a 9-criterion breakdown."

### 3. Blog `top-10-jee-preparation-tips` intro (`src/data/blogData.ts`)
**Before (3/10 — metaphor):** "Preparing for JEE Main and Advanced is a marathon, not a sprint…"
**After:**
> "The 10 highest-impact JEE preparation habits are: master NCERT first, prioritise high-weightage chapters, solve 50-100 problems per chapter, take weekly analysed mocks, and maintain an error log. Below is the full list with the why behind each, drawn from mentoring 500+ JEE aspirants."

### 4. Blog `neet-biology-preparation-guide` intro (6/10 → tighten)
**After:**
> "Biology is 50% of NEET (360 of 720 marks), so it is the highest-return subject to master first. The winning approach is line-by-line NCERT command — examiners lift questions, phrasing, and diagram labels straight from it — combined with daily assertion-reason practice. Here is the complete Botany-and-Zoology plan."

### 5. Blog `choosing-between-jee-and-neet` intro
**After:**
> "Choose JEE if you enjoy problem-solving Maths and want engineering; choose NEET if you prefer Biology-heavy memorisation and want medicine. The exams share Physics and Chemistry but differ sharply in the third subject and question style. Here is a side-by-side breakdown to decide."

### 6. Blog `time-management-for-competitive-exams` intro
**After:**
> "The most effective time-management method for JEE/NEET is time-blocking: fixed daily slots per subject, 90-minute focus blocks with short breaks, and one weekly full-length mock. Aim for 6-8 focused hours on school days. Below is a ready-to-use weekly template."

### 7. Blog `effective-revision-strategies-for-exam` intro
**After:**
> "The three revision strategies that move marks most are spaced repetition (revisit at day 1, 3, 7), active recall (test yourself, don't reread), and error-log review before each mock. Passive rereading is the lowest-return habit. Here is how to apply each to JEE and NEET."

### 8. Blog `chemistry-organic-reaction-mechanisms` intro
**After:**
> "Organic reaction mechanisms are best learned by grouping reactions by mechanism type (addition, substitution, elimination) rather than memorising each one — once you understand the electron movement, dozens of named reactions become predictable. Here are the core mechanisms every JEE/NEET aspirant must master."

---

## BLUF checklist (apply to every new page)
- [ ] First sentence answers the literal query.
- [ ] A specific number appears in the first 2 sentences (marks, hours, %, weightage).
- [ ] Target keyword used naturally, not stuffed.
- [ ] Brand/CTA language demoted below the answer.
- [ ] No "In today's competitive world…", "marathon not a sprint", or "dream of becoming…" openers.
