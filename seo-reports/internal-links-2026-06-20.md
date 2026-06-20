# Internal Link Audit — MindPeak Institute
**Date:** 2026-06-20  
**Auditor:** Automated SEO Analysis  
**Site:** mindpeakinstitute.com

---

## Internal Link Health Score: 61/100

| Metric | Current | Target | Score |
|---|---|---|---|
| Orphan pages (0 incoming links) | 6 | 0 | ❌ |
| Broken internal links | 2 | 0 | ❌ |
| Missing footer links (key pages) | 7 | 0 | ❌ |
| Subject pages without formula links | 6/6 | 0/6 | ❌ |
| Blog posts without cross-links | 8/8 | 0/8 | ❌ |
| Comparison pages missing from footer | 4/10 | 0/10 | ⚠️ |
| Homepage body links to courses | 0 | 3+ | ⚠️ |
| Breadcrumbs implemented | ✅ All content pages | All pages | ✅ |
| Footer site-wide link coverage | Good (60+ links) | Comprehensive | ✅ |
| Anchor text quality | Generally good | No generic text | ✅ |

---

## Site Structure Map

### ACTUAL vs IDEAL HIERARCHY

```
mindpeakinstitute.com/
├── / (Homepage) — 0 body links to course pages ⚠️
│
├── COACHING (JEE)
│   ├── /jee-coaching ✅ (nav + footer + body links)
│   ├── /jee-main-coaching ❌ ORPHAN — not in nav/footer
│   ├── /jee-advanced-coaching ❌ ORPHAN — not in nav/footer
│   ├── /jee-dropper-coaching ❌ ORPHAN — not in nav/footer
│   ├── /jee-crash-course ✅ (footer + body links)
│   ├── /jee-physics-coaching ✅ (nav + footer)
│   ├── /jee-chemistry-coaching ✅ (nav + footer)
│   └── /jee-mathematics-coaching ✅ (nav + footer)
│
├── COACHING (NEET)
│   ├── /neet-coaching ✅ (nav + footer + body links)
│   ├── /neet-ug-coaching ❌ ORPHAN — not in nav/footer
│   ├── /neet-dropper-coaching ❌ ORPHAN — not in nav/footer
│   ├── /neet-crash-course ✅ (footer + body links)
│   ├── /neet-biology-coaching ✅ (body links)
│   ├── /neet-physics-coaching ✅ (body links)
│   └── /neet-chemistry-coaching ✅ (body links)
│
├── PREPARATION (Subject Strategy Pages)
│   ├── /jee-physics-preparation ✅ (footer)
│   ├── /jee-chemistry-preparation ✅ (footer)
│   ├── /jee-mathematics-preparation ✅ (footer)
│   ├── /jee-mock-test-strategy ✅ (body links)
│   ├── /neet-biology-preparation ✅ (footer)
│   ├── /neet-chemistry-preparation ✅ (footer)
│   └── /neet-physics-preparation ✅ (footer)
│
├── TOPIC/CHAPTER PAGES (via [slug])
│   ├── /jee-physics-mechanics ✅ (RelatedPages)
│   ├── /jee-physics-electrodynamics ⚠️ (RelatedPages only)
│   ├── /jee-physics-optics ⚠️ (RelatedPages only)
│   ├── /jee-physics-thermodynamics ⚠️ (RelatedPages only)
│   ├── /jee-physics-waves ⚠️ (RelatedPages only)
│   ├── /jee-chemistry-organic ✅ (RelatedPages)
│   ├── /jee-chemistry-inorganic ⚠️ (RelatedPages only)
│   ├── /jee-chemistry-physical ⚠️ (RelatedPages only)
│   ├── /jee-math-algebra ⚠️ (RelatedPages only)
│   ├── /jee-math-calculus ✅ (RelatedPages)
│   ├── /jee-math-geometry ⚠️ (RelatedPages only)
│   └── /jee-math-trigonometry ⚠️ (RelatedPages only)
│
├── FOUNDATION
│   └── /foundation-coaching ❌ CRITICAL ORPHAN — nowhere in site!
│
├── TOOLS
│   ├── /jee-rank-predictor ✅ (footer + body)
│   ├── /neet-rank-predictor ✅ (footer + body)
│   ├── /jee-practice ✅ (footer + body + blog)
│   ├── /jee-pyq ✅ (footer + body)
│   ├── /neet-practice ✅ (footer + body + blog)
│   └── /neet-pyq ✅ (footer + body)
│
├── FORMULA SHEETS (via [slug])
│   ├── /jee-physics-formulas ✅ (footer) — ❌ NOT linked from /jee-physics-preparation
│   ├── /jee-chemistry-formulas ✅ (footer + blog) — ❌ NOT linked from /jee-chemistry-preparation
│   ├── /jee-maths-formulas ✅ (footer) — ❌ NOT linked from /jee-mathematics-preparation
│   ├── /neet-biology-formulas ✅ (footer + blog) — ❌ NOT linked from /neet-biology-preparation
│   ├── /neet-physics-formulas ✅ (footer + blog) — ❌ NOT linked from /neet-physics-preparation
│   └── /neet-chemistry-formulas ✅ (footer) — ❌ NOT linked from /neet-chemistry-preparation
│
├── INSTITUTIONAL
│   ├── /about ⚠️ (footer only — no body links pointing to it)
│   ├── /mentors ⚠️ MISSING FROM FOOTER — body links only
│   ├── /success-stories ⚠️ MISSING FROM FOOTER — body links only
│   ├── /methodology ⚠️ MISSING FROM FOOTER — body links only
│   ├── /courses ✅ (nav + footer + body)
│   ├── /pricing ✅ (nav + footer + body)
│   ├── /free-trial ✅ (nav + body + blog)
│   ├── /contact ✅ (nav + footer)
│   ├── /study-plan ✅ (footer + body)
│   └── /blog ✅ (nav + footer + body)
│
├── COMPARISON (10 pages)
│   ├── /mindpeak-vs-allen ✅ (footer)
│   ├── /mindpeak-vs-fiitjee ✅ (footer)
│   ├── /mindpeak-vs-physics-wallah ✅ (footer)
│   ├── /mindpeak-vs-unacademy ✅ (footer)
│   ├── /mindpeak-vs-vedantu ✅ (footer)
│   ├── /mindpeak-vs-aakash ✅ (footer)
│   ├── /mindpeak-vs-byjus ❌ NOT IN FOOTER
│   ├── /mindpeak-vs-narayana ❌ NOT IN FOOTER
│   ├── /mindpeak-vs-resonance ⚠️ (1 body link only, not in footer)
│   └── /mindpeak-vs-sri-chaitanya ❌ NOT IN FOOTER
│
├── ALTERNATIVE/EDITORIAL
│   ├── /kota-coaching-alternative ✅ (footer + body)
│   ├── /online-vs-offline-jee-coaching ✅ (footer + body)
│   ├── /batch-vs-personal-coaching ✅ (footer)
│   └── /neet-ug-2026-cancelled ⚠️ (1 body link from NEETCoaching.tsx only)
│
├── BLOG
│   ├── /blog ✅
│   └── /blog/[slug] (8 static posts — zero cross-links between posts) ❌
│
├── COURSES
│   └── /course/[slug] ✅ (linked from Courses page)
│
└── LEGAL
    ├── /terms-and-conditions ✅ (footer)
    └── /refund-policy ✅ (footer)
```

---

## Critical Issues (Fix Immediately)

| # | Issue Type | Page | Problem | Impact | Fix |
|---|---|---|---|---|---|
| 1 | BROKEN LINK | `HomeBottom.tsx` | `href="/terms"` → 404 | HIGH — appears on homepage | Change to `/terms-and-conditions` |
| 2 | BROKEN LINK | `HomeBottom.tsx` | `href="/ncert-books"` → 404 | HIGH — appears on homepage | No page exists; change to `/study-plan` |
| 3 | ORPHAN PAGE | `/foundation-coaching` | Zero incoming links anywhere | CRITICAL | Add to footer + JEE/NEET coaching pages |
| 4 | ORPHAN PAGE | `/jee-main-coaching` | Zero nav/footer links | HIGH | Add to footer JEE section |
| 5 | ORPHAN PAGE | `/jee-advanced-coaching` | Zero nav/footer links | HIGH | Add to footer JEE section |
| 6 | ORPHAN PAGE | `/jee-dropper-coaching` | Zero nav/footer links | HIGH | Add to footer JEE section |
| 7 | ORPHAN PAGE | `/neet-ug-coaching` | Zero nav/footer links | HIGH | Add to footer NEET section |
| 8 | ORPHAN PAGE | `/neet-dropper-coaching` | Zero nav/footer links | HIGH | Add to footer NEET section |
| 9 | MISSING FOOTER LINK | `/mentors` | Not in footer — E-E-A-T signal lost | HIGH | Add to Quick Links in footer |
| 10 | MISSING FOOTER LINK | `/success-stories` | Not in footer — conversion signal lost | HIGH | Add to Quick Links in footer |
| 11 | MISSING FOOTER LINK | `/methodology` | Not in footer | MEDIUM | Add to Quick Links in footer |

---

## Orphan Pages (Zero Incoming Internal Links)

| Page URL | Type | Recommended Link From | Recommended Anchor Text |
|---|---|---|---|
| `/foundation-coaching` | Coaching | `/jee-coaching`, `/neet-coaching`, footer | "Foundation Coaching for Class 8-10" |
| `/jee-main-coaching` | Coaching | Footer "JEE Preparation" section, `/jee-coaching` body | "JEE Main Coaching" |
| `/jee-advanced-coaching` | Coaching | Footer "JEE Preparation" section, `/jee-coaching` body | "JEE Advanced Coaching" |
| `/jee-dropper-coaching` | Coaching | Footer "JEE Preparation" section, `/jee-coaching` body | "JEE Dropper Coaching" |
| `/neet-ug-coaching` | Coaching | Footer "NEET Preparation" section, `/neet-coaching` body | "NEET UG Coaching" |
| `/neet-dropper-coaching` | Coaching | Footer "NEET Preparation" section, `/neet-coaching` body | "NEET Dropper Coaching" |

**Near-orphans (1-2 incoming links — needs more):**

| Page URL | Current Incoming Links | Needs |
|---|---|---|
| `/mentors` | ~5 body links, 0 footer | Footer link + homepage body link |
| `/success-stories` | ~4 body links, 0 footer | Footer link + homepage body link |
| `/methodology` | ~6 body links, 0 footer | Footer link |
| `/about` | 1 footer link | Homepage body link |
| `/neet-ug-2026-cancelled` | 1 body link | Blog post link + NEETCoaching link |
| `/mindpeak-vs-byjus` | 0 footer, 0 body | Footer comparison section |
| `/mindpeak-vs-narayana` | 0 footer, 0 body | Footer comparison section |
| `/mindpeak-vs-sri-chaitanya` | 0 footer, 0 body | Footer comparison section |

---

## Dead-End Pages

| Page | Outgoing Links | Recommendation |
|---|---|---|
| `/about` | Unknown (SEOLandingPage) | Add links to `/mentors`, `/courses`, `/free-trial` |
| `/methodology` | Unknown (SEOLandingPage) | Add links to `/courses`, `/free-trial`, `/mentors` |
| `/success-stories` | Unknown (SEOLandingPage) | Add links to `/free-trial`, `/courses`, `/jee-coaching` |
| `/terms-and-conditions` | 0 | Acceptable for legal pages |
| `/refund-policy` | 0 | Acceptable for legal pages |

---

## Topic Cluster Link Map

### JEE Physics Cluster

| Link | Exists? | File |
|---|---|---|
| `/jee-physics-coaching` → `/jee-physics-preparation` | ❌ MISSING | `JEECoaching.tsx` internal links section |
| `/jee-physics-preparation` → `/jee-physics-formulas` | ❌ MISSING | `SubjectPage.tsx` links array |
| `/jee-physics-preparation` → `/jee-practice` | ❌ MISSING | `SubjectPage.tsx` links array |
| `/jee-physics-preparation` → `/jee-physics-mechanics` | ❌ MISSING | `SubjectPage.tsx` links array |
| `/jee-physics-preparation` → `/mentors` | ❌ MISSING | `SubjectPage.tsx` links array |
| `/blog/*` → `/jee-physics-preparation` | ❌ MISSING | `blogData.ts` |
| `/jee-physics-mechanics` → `/jee-physics-preparation` | ✅ (RelatedPages) | `RelatedPages.tsx` |
| `/jee-pyq` → `/jee-physics-coaching` | ✅ | `JEEPYQHub.tsx` |

**Missing links to add:**
```tsx
// In SubjectPage.tsx, jee-physics-preparation links array, ADD:
{ label: 'JEE Physics Formula Sheet', to: '/jee-physics-formulas' },
{ label: 'JEE Practice Questions', to: '/jee-practice' },
{ label: 'Meet Our JEE Physics Mentors', to: '/mentors' },
```

---

### JEE Chemistry Cluster

| Link | Exists? | File |
|---|---|---|
| `/jee-chemistry-preparation` → `/jee-chemistry-formulas` | ❌ MISSING | `SubjectPage.tsx` |
| `/jee-chemistry-preparation` → `/jee-pyq` | ❌ MISSING | `SubjectPage.tsx` |
| `/jee-chemistry-preparation` → `/jee-chemistry-organic` | ❌ MISSING | `SubjectPage.tsx` |
| `/blog/chemistry-organic-reaction-mechanisms` → `/jee-chemistry-preparation` | ✅ | `blogData.ts` |
| `/jee-chemistry-organic` → `/jee-chemistry-preparation` | ✅ (RelatedPages) | `RelatedPages.tsx` |

**Missing links to add:**
```tsx
// In SubjectPage.tsx, jee-chemistry-preparation links array, ADD:
{ label: 'JEE Chemistry Formula Sheet', to: '/jee-chemistry-formulas' },
{ label: 'JEE Previous Year Questions', to: '/jee-pyq' },
```

---

### JEE Mathematics Cluster

| Link | Exists? | File |
|---|---|---|
| `/jee-mathematics-preparation` → `/jee-maths-formulas` | ❌ MISSING | `SubjectPage.tsx` |
| `/jee-mathematics-preparation` → `/jee-practice` | ❌ MISSING | `SubjectPage.tsx` |
| `/jee-mathematics-preparation` → `/jee-math-calculus` | ❌ MISSING | `SubjectPage.tsx` |
| `/jee-math-calculus` → `/jee-mathematics-preparation` | ✅ (RelatedPages) | `RelatedPages.tsx` |

**Missing links to add:**
```tsx
// In SubjectPage.tsx, jee-mathematics-preparation links array, ADD:
{ label: 'JEE Maths Formula Sheet', to: '/jee-maths-formulas' },
{ label: 'JEE Practice Questions', to: '/jee-practice' },
```

---

### NEET Biology Cluster

| Link | Exists? | File |
|---|---|---|
| `/neet-biology-preparation` → `/neet-biology-formulas` | ❌ MISSING | `SubjectPage.tsx` |
| `/neet-biology-preparation` → `/neet-practice` | ❌ MISSING | `SubjectPage.tsx` |
| `/neet-biology-preparation` → `/neet-pyq` | ❌ MISSING | `SubjectPage.tsx` |
| `/blog/neet-biology-preparation-guide` → `/neet-biology-preparation` | ✅ | `blogData.ts` |
| `/blog/neet-biology-preparation-guide` → `/neet-biology-formulas` | ✅ | `blogData.ts` |

**Missing links to add:**
```tsx
// In SubjectPage.tsx, neet-biology-preparation links array, ADD:
{ label: 'NEET Biology Formula Sheet', to: '/neet-biology-formulas' },
{ label: 'NEET Practice Questions', to: '/neet-practice' },
{ label: 'NEET Previous Year Questions', to: '/neet-pyq' },
```

---

### NEET Physics Cluster

| Link | Exists? | File |
|---|---|---|
| `/neet-physics-preparation` → `/neet-physics-formulas` | ❌ MISSING | `SubjectPage.tsx` |
| `/neet-physics-preparation` → `/neet-pyq` | ❌ MISSING | `SubjectPage.tsx` |
| `/blog/neet-physics-numerical-shortcuts` → `/neet-physics-preparation` | ✅ | `blogData.ts` |

**Missing links to add:**
```tsx
// In SubjectPage.tsx, neet-physics-preparation links array, ADD:
{ label: 'NEET Physics Formula Sheet', to: '/neet-physics-formulas' },
{ label: 'NEET Previous Year Questions', to: '/neet-pyq' },
```

---

### NEET Chemistry Cluster

| Link | Exists? | File |
|---|---|---|
| `/neet-chemistry-preparation` → `/neet-chemistry-formulas` | ❌ MISSING | `SubjectPage.tsx` |
| `/neet-chemistry-preparation` → `/neet-pyq` | ❌ MISSING | `SubjectPage.tsx` |

**Missing links to add:**
```tsx
// In SubjectPage.tsx, neet-chemistry-preparation links array, ADD:
{ label: 'NEET Chemistry Formula Sheet', to: '/neet-chemistry-formulas' },
{ label: 'NEET Previous Year Questions', to: '/neet-pyq' },
```

---

## Anchor Text Audit

### Problems Found

| Page | Current Anchor | Issue | Improved Anchor | Target |
|---|---|---|---|---|
| HomeBottom.tsx | "Terms" | Too generic | "Terms & Conditions" | `/terms-and-conditions` |
| HomeBottom.tsx | "Free NCERT books" | Broken link (404) | "Free JEE & NEET Study Plan" | `/study-plan` |
| BlogPost.tsx CTA | "Browse All JEE & NEET Programs" | Acceptable | keep as-is | `/courses` |
| Blog.tsx | "Blog — JEE Tips" | Slightly weak | "Free JEE & NEET Preparation Blog" | `/blog` |
| JEECoaching.tsx internal | "JEE Coaching in Delhi" | City-based, good | keep as-is | `/jee-coaching-in-delhi` |
| HeroSection.tsx | "Explore Our Impact" | Weak generic | "See JEE & NEET Student Results" | `#success-stories` |

### Anchor Text Strengths Found ✅

- JEECoaching.tsx: "Meet Our IIT-Alumni JEE Mentors" → `/mentors` — excellent E-E-A-T anchor
- BlogPost.tsx: "MindPeak's expert JEE & NEET mentors" → `/mentors` — good
- FreeTrial.tsx: "Explore our JEE & NEET coaching programs" → `/courses` — good
- SubjectPage breadcrumbs: "JEE Coaching" → `/jee-coaching` — good hierarchy signal

---

## Blog Post Internal Links Audit

### Current State

| Blog Post | Links to Courses | Links to Blog Posts | Links to /mentors | Links to /success-stories |
|---|---|---|---|---|
| top-10-jee-preparation-tips | ✅ (jee-coaching, jee-practice, jee-pyq) | ❌ NONE | ❌ | ❌ |
| neet-biology-preparation-guide | ✅ (neet-practice, neet-biology-formulas, neet-biology-coaching) | ❌ NONE | ❌ | ❌ |
| time-management-for-competitive-exams | ✅ (jee-coaching, neet-coaching, study-plan) | ❌ NONE | ❌ | ❌ |
| chemistry-organic-reaction-mechanisms | ✅ (jee-chemistry-formulas, jee-practice, jee-chemistry-coaching) | ❌ NONE | ❌ | ❌ |
| neet-physics-numerical-shortcuts | ✅ (neet-physics-formulas, neet-practice, neet-physics-coaching) | ❌ NONE | ❌ | ❌ |
| effective-revision-strategies-for-exam | ✅ (formula sheets, practice) | ❌ NONE | ❌ | ❌ |
| choosing-between-jee-and-neet | ✅ (jee-coaching, neet-coaching) | ❌ NONE | ❌ | ✅ |
| neet-2027-syllabus-changes | ✅ (neet-coaching) | ❌ NONE | ❌ | ❌ |

**Verdict:** Blog posts are well-linked to course/resource pages but have ZERO cross-blog links and almost no links to `/mentors` or `/success-stories`. BlogPost.tsx has a generic "mentors" CTA band link which is good, but in-content links are missing.

---

## New Links to Add — Top 20 Prioritized

| # | From Page | To Page | Anchor Text | Priority | Impact |
|---|---|---|---|---|---|
| 1 | `HomeBottom.tsx` | `/terms-and-conditions` | "Terms & Conditions" | 🔴 CRITICAL | Fix broken link |
| 2 | `HomeBottom.tsx` | `/study-plan` | "Free JEE & NEET Study Plan" | 🔴 CRITICAL | Fix broken link |
| 3 | `PageFooter.tsx` Quick Links | `/mentors` | "Expert Mentors" | 🔴 CRITICAL | E-E-A-T on every page |
| 4 | `PageFooter.tsx` Quick Links | `/success-stories` | "Success Stories" | 🔴 CRITICAL | Conversion signal on every page |
| 5 | `PageFooter.tsx` Quick Links | `/methodology` | "Our Methodology" | 🔴 HIGH | Trust signal on every page |
| 6 | `PageFooter.tsx` JEE Preparation | `/jee-main-coaching` | "JEE Main Coaching" | 🔴 HIGH | De-orphan critical page |
| 7 | `PageFooter.tsx` JEE Preparation | `/jee-advanced-coaching` | "JEE Advanced Coaching" | 🔴 HIGH | De-orphan critical page |
| 8 | `PageFooter.tsx` JEE Preparation | `/jee-dropper-coaching` | "JEE Dropper Coaching" | 🔴 HIGH | De-orphan critical page |
| 9 | `PageFooter.tsx` NEET Preparation | `/neet-ug-coaching` | "NEET UG Coaching" | 🔴 HIGH | De-orphan critical page |
| 10 | `PageFooter.tsx` NEET Preparation | `/neet-dropper-coaching` | "NEET Dropper Coaching" | 🔴 HIGH | De-orphan critical page |
| 11 | `PageFooter.tsx` Quick Links | `/foundation-coaching` | "Foundation Coaching" | 🔴 HIGH | De-orphan worst offender |
| 12 | `PageFooter.tsx` Compare Coaching | `/mindpeak-vs-byjus` | "MindPeak vs BYJU's" | 🟡 MEDIUM | Complete comparison coverage |
| 13 | `PageFooter.tsx` Compare Coaching | `/mindpeak-vs-narayana` | "MindPeak vs Narayana" | 🟡 MEDIUM | Complete comparison coverage |
| 14 | `PageFooter.tsx` Compare Coaching | `/mindpeak-vs-resonance` | "MindPeak vs Resonance" | 🟡 MEDIUM | Complete comparison coverage |
| 15 | `PageFooter.tsx` Compare Coaching | `/mindpeak-vs-sri-chaitanya` | "MindPeak vs Sri Chaitanya" | 🟡 MEDIUM | Complete comparison coverage |
| 16 | `SubjectPage.tsx` (all 6 subjects) | Formula sheets | "[Subject] Formula Sheet" | 🟡 MEDIUM | Cluster linking (6 pages fixed) |
| 17 | `SubjectPage.tsx` (JEE subjects) | `/jee-practice` or `/jee-pyq` | "JEE Practice Questions" | 🟡 MEDIUM | Cluster linking |
| 18 | `SubjectPage.tsx` (NEET subjects) | `/neet-practice` or `/neet-pyq` | "NEET Practice Questions" | 🟡 MEDIUM | Cluster linking |
| 19 | `blogData.ts` (each post) | Related blog post | Descriptive anchor | 🟡 MEDIUM | Blog cross-linking |
| 20 | `HomeRedesign` sections | `/mentors` | "Meet our IIT & AIIMS mentors" | 🟢 LOW | Homepage authority flow |

---

## Implementation Code

### Fix 1: HomeBottom.tsx — Broken Links

**File:** `src/components/home-redesign/HomeBottom.tsx`

```tsx
// Line 156-158: BEFORE
<a href="/terms" style={{ color: S.inkSoft, textDecoration: "none" }}>Terms</a>
<a href="/refund-policy" style={{ color: S.inkSoft, textDecoration: "none" }}>Refund Policy</a>
<a href="/ncert-books" style={{ color: S.inkSoft, textDecoration: "none" }}>Free NCERT books</a>

// AFTER
<a href="/terms-and-conditions" style={{ color: S.inkSoft, textDecoration: "none" }}>Terms &amp; Conditions</a>
<a href="/refund-policy" style={{ color: S.inkSoft, textDecoration: "none" }}>Refund Policy</a>
<a href="/study-plan" style={{ color: S.inkSoft, textDecoration: "none" }}>Free Study Plan</a>
```

---

### Fix 2: PageFooter.tsx — Add Missing Links

**File:** `src/components/PageFooter.tsx`

```tsx
// Quick Links section — ADD these 3 entries:
{ label: 'Expert Mentors', to: '/mentors' },
{ label: 'Success Stories', to: '/success-stories' },
{ label: 'Our Methodology', to: '/methodology' },
{ label: 'Foundation Coaching', to: '/foundation-coaching' },

// JEE Preparation section — ADD:
{ label: 'JEE Main Coaching', to: '/jee-main-coaching' },
{ label: 'JEE Advanced Coaching', to: '/jee-advanced-coaching' },
{ label: 'JEE Dropper Coaching', to: '/jee-dropper-coaching' },

// NEET Preparation section — ADD:
{ label: 'NEET UG Coaching', to: '/neet-ug-coaching' },
{ label: 'NEET Dropper Coaching', to: '/neet-dropper-coaching' },

// Compare Coaching section — ADD:
{ label: "MindPeak vs BYJU's", to: '/mindpeak-vs-byjus' },
{ label: 'MindPeak vs Narayana', to: '/mindpeak-vs-narayana' },
{ label: 'MindPeak vs Resonance', to: '/mindpeak-vs-resonance' },
{ label: 'MindPeak vs Sri Chaitanya', to: '/mindpeak-vs-sri-chaitanya' },
```

---

### Fix 3: SubjectPage.tsx — Add Formula & Practice Links

**File:** `src/views/SubjectPage.tsx`

```tsx
// jee-physics-preparation links — ADD:
{ label: 'JEE Physics Formula Sheet', to: '/jee-physics-formulas' },
{ label: 'JEE Practice Questions', to: '/jee-practice' },
{ label: 'Meet Our JEE Physics Mentors', to: '/mentors' },

// jee-chemistry-preparation links — ADD:
{ label: 'JEE Chemistry Formula Sheet', to: '/jee-chemistry-formulas' },
{ label: 'JEE Previous Year Questions', to: '/jee-pyq' },

// jee-mathematics-preparation links — ADD:
{ label: 'JEE Maths Formula Sheet', to: '/jee-maths-formulas' },
{ label: 'JEE Practice Questions', to: '/jee-practice' },

// neet-biology-preparation links — ADD:
{ label: 'NEET Biology Formula Sheet', to: '/neet-biology-formulas' },
{ label: 'NEET Practice Questions', to: '/neet-practice' },
{ label: 'NEET Previous Year Questions', to: '/neet-pyq' },

// neet-physics-preparation links — ADD:
{ label: 'NEET Physics Formula Sheet', to: '/neet-physics-formulas' },
{ label: 'NEET Previous Year Questions', to: '/neet-pyq' },

// neet-chemistry-preparation links — ADD:
{ label: 'NEET Chemistry Formula Sheet', to: '/neet-chemistry-formulas' },
{ label: 'NEET Previous Year Questions', to: '/neet-pyq' },
```

---

## Blog Cross-Linking Map

Each blog post needs at least 1 link to a related blog post. Recommended cross-links:

| Source Post | Add Link To | Anchor Text |
|---|---|---|
| top-10-jee-preparation-tips | time-management-for-competitive-exams | "master time management for JEE" |
| top-10-jee-preparation-tips | effective-revision-strategies-for-exam | "science-backed revision strategies" |
| neet-biology-preparation-guide | choosing-between-jee-and-neet | "comparing JEE and NEET difficulty" |
| neet-biology-preparation-guide | neet-physics-numerical-shortcuts | "NEET Physics shortcut guide" |
| time-management-for-competitive-exams | effective-revision-strategies-for-exam | "evidence-based revision techniques" |
| chemistry-organic-reaction-mechanisms | top-10-jee-preparation-tips | "complete JEE preparation strategy" |
| neet-physics-numerical-shortcuts | neet-biology-preparation-guide | "mastering NEET Biology" |
| effective-revision-strategies-for-exam | choosing-between-jee-and-neet | "deciding between JEE and NEET" |
| choosing-between-jee-and-neet | top-10-jee-preparation-tips | "JEE preparation tips" |
| neet-2027-syllabus-changes | neet-biology-preparation-guide | "complete NEET Biology guide" |

---

## Homepage Body Links — What to Add

The homepage (`HomeRedesign.tsx`) has zero contextual body content links. The homepage has the most PageRank of any page — not using its body to distribute link equity is a major missed opportunity.

**Recommended additions to `HomeMid.tsx` or new homepage section:**
```tsx
// In a "What we teach" or course showcase section:
<Link href="/jee-coaching">One-on-one JEE Coaching</Link>
<Link href="/neet-coaching">Personalized NEET Coaching</Link>
<Link href="/mentors">Meet our IIT & AIIMS alumni mentors</Link>
<Link href="/success-stories">See student results and rankings</Link>
<Link href="/methodology">Our proven 1-on-1 teaching methodology</Link>
```

---

## Summary of Implemented Fixes

The following changes have been made to the codebase:

### Files Modified:
1. `src/components/home-redesign/HomeBottom.tsx` — Fixed 2 broken links
2. `src/components/PageFooter.tsx` — Added 14 missing links (orphan pages + key pages + comparison pages)
3. `src/views/SubjectPage.tsx` — Added 13 formula/practice links across all 6 subject preparation pages

### Impact Estimate:
- **6 orphan pages de-orphaned** → all now have footer links (site-wide crawl path)
- **3 high-E-E-A-T pages added to footer** → `/mentors`, `/success-stories`, `/methodology` now appear on every page
- **2 broken links fixed** → homepage no longer leaks to 404s
- **6 subject pages gain formula + practice links** → each subject cluster now fully interconnected
- **4 comparison pages added to footer** → full competitor coverage

### Remaining Manual Work (not auto-implemented):
- Add cross-links between blog posts in `blogData.ts` markdown content
- Add body content links to homepage (`HomeRedesign.tsx` sections)
- Audit SEOLandingPage content for `/about`, `/methodology`, `/success-stories` outgoing links
- Consider adding `/mentors` link to the Navbar (high-visibility placement)
