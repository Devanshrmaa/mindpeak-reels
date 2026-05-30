# Internal Link Audit — MindPeak Institute
**Date:** 2026-05-30  
**Auditor:** Claude Code (automated static analysis)  
**Scope:** Full codebase crawl of all 64 routed pages + components

---

## Internal Link Health Score: 41 / 100

| Metric | Current | Target |
|---|---|---|
| Orphan pages (0 body-content incoming links) | 3 confirmed | 0 |
| Near-orphan pages (1–2 incoming body links) | 14 | 0 |
| Dead-end pages (0–1 outgoing links) | 3 critical | 0 |
| Missing topic-cluster links | 26 confirmed | 0 |
| Generic anchor text instances | 4 | 0 |
| Broken internal links | 0 confirmed | 0 |
| Blog posts without mentor attribution link | 9 / 9 | 0 |

**Score breakdown:** −25 near-orphan/orphan pages, −15 missing cluster links, −10 dead-end pages, −5 anchor text, −4 blog attribution gap

---

## Site Structure Map

```
Homepage (/)
├── /jee-coaching                  ← 26 "Explore More" links out, nav
│   ├── /jee-physics-coaching      ← linked from /jee-coaching explore-more
│   │   ├── /jee-physics-mechanics      ⚠ NOT linked from pillar
│   │   ├── /jee-physics-electrodynamics⚠ NOT linked from pillar
│   │   ├── /jee-physics-optics         ⚠ NOT linked from pillar
│   │   ├── /jee-physics-thermodynamics ⚠ NOT linked from pillar
│   │   └── /jee-physics-waves          ⚠ NOT linked from pillar
│   ├── /jee-chemistry-coaching    ← linked from /jee-coaching explore-more
│   │   ├── /jee-chemistry-physical     ⚠ NOT linked from pillar
│   │   ├── /jee-chemistry-organic      ⚠ NOT linked from pillar
│   │   └── /jee-chemistry-inorganic    ⚠ NOT linked from pillar
│   ├── /jee-mathematics-coaching  ← linked from /jee-coaching explore-more
│   │   ├── /jee-math-algebra           ⚠ NOT linked from pillar
│   │   ├── /jee-math-calculus          ⚠ NOT linked from pillar
│   │   ├── /jee-math-geometry          ⚠ NOT linked from pillar
│   │   └── /jee-math-trigonometry      ⚠ NOT linked from pillar
│   ├── /jee-main-coaching         ← only in jee-coaching relatedPages
│   ├── /jee-advanced-coaching     ← only in jee-coaching relatedPages
│   ├── /jee-dropper-coaching      ← only in jee-coaching relatedPages
│   └── /jee-crash-course          ← only in CourseDetail resources
├── /neet-coaching                 ← 22 "Explore More" links out, nav
│   ├── /neet-biology-coaching     ← linked from /neet-coaching explore-more
│   ├── /neet-physics-coaching     ← linked from /neet-coaching explore-more
│   ├── /neet-chemistry-coaching   ← linked from /neet-coaching explore-more
│   ├── /neet-ug-coaching          ← only in neet-coaching relatedPages
│   ├── /neet-dropper-coaching     ← only in neet-coaching relatedPages
│   ├── /neet-crash-course         ← only in CourseDetail resources
│   └── /neet-ug-2026-cancelled    ⚠ ORPHAN — 0 incoming links found
├── /courses                       ← nav + homepage + footer
│   └── /course/[slug]             ← linked from StudyPlan only
├── /blog                          ← nav + footer
│   └── /blog/[slug]               ← linked from blog index + related posts
├── /mentors                       ← explore-more only; NOT in navbar
├── /about                         ⚠ NEAR-ORPHAN — not in nav or footer Quick Links
├── /methodology                   ← explore-more only
├── /success-stories               ← explore-more only
├── /pricing                       ← nav + footer  ⚠ DEAD-END
├── /free-trial                    ← footer + explore-more  ⚠ DEAD-END
├── /contact                       ← nav + footer  ⚠ DEAD-END
├── /study-plan                    ← nav + explore-more
├── /jee-practice                  ← nav + footer + explore-more
├── /neet-practice                 ← nav + footer + explore-more
├── /jee-pyq                       ← footer + explore-more
├── /neet-pyq                      ← footer + explore-more
├── /jee-rank-predictor            ← footer + explore-more
├── /neet-rank-predictor           ← footer + explore-more
├── /foundation-coaching           ← homepage CourseFlashCards only
├── /kota-coaching-alternative     ← footer + explore-more
├── /online-vs-offline-jee-coaching← footer + explore-more
├── /batch-vs-personal-coaching    ← footer compare section
├── /mindpeak-vs-allen             ← footer + explore-more (cross-linked)
├── /mindpeak-vs-aakash            ← footer only
├── /mindpeak-vs-byjus             ← footer only
├── /mindpeak-vs-fiitjee           ← footer + explore-more
├── /mindpeak-vs-narayana          ← footer only
├── /mindpeak-vs-physics-wallah    ← footer + explore-more
├── /mindpeak-vs-resonance         ← footer only
├── /mindpeak-vs-sri-chaitanya     ← footer only
├── /mindpeak-vs-unacademy         ← footer only
├── /mindpeak-vs-vedantu           ← footer only
├── /terms-and-conditions          ← footer + blog footer
└── /refund-policy                 ← footer + blog footer
```

---

## Critical Issues (Fix Immediately)

| # | Issue Type | Page | Problem | Fix |
|---|---|---|---|---|
| 1 | DEAD-END | /pricing | Only outgoing link is breadcrumb to `/` — users have nowhere to go after reading pricing | Add contextual links to /free-trial, /courses, /methodology, /mentors |
| 2 | DEAD-END | /free-trial | Only outgoing link is breadcrumb to `/` and success-state "Back to Home" | Add sidebar links; fix anchor text |
| 3 | DEAD-END | /contact | Only outgoing link is breadcrumb to `/` | Add "Explore More" link block |
| 4 | ORPHAN | /neet-ug-2026-cancelled | Zero incoming internal links found in any component or data file | Link from /neet-coaching explore-more |
| 5 | NEAR-ORPHAN | /about | Not in navbar. Not in footer Quick Links. Only reachable via /methodology relatedPages | Add to footer Quick Links; add to homepage |
| 6 | CLUSTER GAP | /jee-physics-coaching | 5 sub-topic pages (/mechanics, /electrodynamics, etc.) are NOT linked from this pillar page | Add all 5 to relatedPages in seoPageData.ts |
| 7 | CLUSTER GAP | /jee-chemistry-coaching | 3 sub-topic pages (/physical, /organic, /inorganic) not linked from pillar | Add to relatedPages |
| 8 | CLUSTER GAP | /jee-mathematics-coaching | 4 sub-topic pages (/algebra, /calculus, /geometry, /trigonometry) not linked from pillar | Add to relatedPages |
| 9 | CLUSTER GAP | /mentors | Does not link to any course page — breaks faculty ↔ course cluster | Add 6 course pages to relatedPages |
| 10 | ATTRIBUTION GAP | All 9 blog posts | Zero links to /mentors — blog posts have no author attribution link | Add author card linking to /mentors |

---

## Orphan & Near-Orphan Pages

| Page URL | Incoming Body Links | Recommended Link From | Suggested Anchor Text |
|---|---|---|---|
| /about | 1 (only from /methodology relatedPages) | Footer Quick Links + homepage body | "About MindPeak Institute" |
| /neet-ug-2026-cancelled | 0 | /neet-coaching explore-more | "NEET UG 2026 Cancellation Update" |
| /jee-physics-mechanics | 2 (sibling relatedPages only) | /jee-physics-coaching relatedPages | "JEE Physics Mechanics — Complete Guide" |
| /jee-physics-electrodynamics | 2 (sibling) | /jee-physics-coaching relatedPages | "JEE Physics Electrodynamics Mastery" |
| /jee-physics-optics | 2 (sibling) | /jee-physics-coaching relatedPages | "JEE Physics Optics Preparation" |
| /jee-physics-thermodynamics | 2 (sibling) | /jee-physics-coaching relatedPages | "JEE Physics Thermodynamics Guide" |
| /jee-physics-waves | 2 (sibling) | /jee-physics-coaching relatedPages | "JEE Physics Waves & SHM" |
| /jee-chemistry-physical | 2 (sibling) | /jee-chemistry-coaching relatedPages | "JEE Physical Chemistry Coaching" |
| /jee-chemistry-organic | 2 (sibling) | /jee-chemistry-coaching relatedPages | "JEE Organic Chemistry — Mechanisms Guide" |
| /jee-chemistry-inorganic | 2 (sibling) | /jee-chemistry-coaching relatedPages | "JEE Inorganic Chemistry — NCERT Plus" |
| /jee-math-algebra | 2 (sibling) | /jee-mathematics-coaching relatedPages | "JEE Mathematics Algebra Coaching" |
| /jee-math-calculus | 2 (sibling) | /jee-mathematics-coaching relatedPages | "JEE Calculus — Differential & Integral" |
| /jee-math-geometry | 1 (sibling) | /jee-mathematics-coaching relatedPages | "JEE Coordinate Geometry Guide" |
| /jee-math-trigonometry | 1 (sibling) | /jee-mathematics-coaching relatedPages | "JEE Trigonometry Mastery" |
| /foundation-coaching | 1 (homepage only) | /jee-coaching explore-more, /courses | "Foundation Coaching (Class 6–10)" |
| /jee-main-coaching | 1 (relatedPages) | /jee-coaching body content | "JEE Main Coaching" |
| /jee-advanced-coaching | 1 (relatedPages) | /jee-coaching body content | "JEE Advanced Coaching" |

---

## Dead-End Pages Detail

| Page | Current Outgoing Links | Users Land Here From | Impact |
|---|---|---|---|
| /pricing | 1 (/ breadcrumb) | Navbar, footer, relatedPages everywhere | HIGH — highest-intent page, users bounce after reading |
| /free-trial | 2 (/ breadcrumb x2) | Footer, relatedPages, blog CTAs | CRITICAL — conversion page with no next-step links |
| /contact | 1 (/ breadcrumb) | Navbar, footer | HIGH — support intent pages should offer related resources |
| /terms-and-conditions | 0 body links | Footer | LOW |
| /refund-policy | 0 body links | Footer | LOW |

---

## Topic Cluster Link Maps

### JEE Physics Cluster

**Pillar page:** `/jee-physics-coaching`

| Link | Direction | Status |
|---|---|---|
| /jee-physics-coaching → /jee-physics-mechanics | Pillar → Sub-topic | ❌ MISSING |
| /jee-physics-coaching → /jee-physics-electrodynamics | Pillar → Sub-topic | ❌ MISSING |
| /jee-physics-coaching → /jee-physics-optics | Pillar → Sub-topic | ❌ MISSING |
| /jee-physics-coaching → /jee-physics-thermodynamics | Pillar → Sub-topic | ❌ MISSING |
| /jee-physics-coaching → /jee-physics-waves | Pillar → Sub-topic | ❌ MISSING |
| /jee-physics-coaching → /mentors | Pillar → Faculty | ❌ MISSING |
| /jee-physics-coaching → /jee-physics-formulas | Pillar → Resource | ✅ EXISTS |
| /jee-physics-coaching → /jee-chemistry-coaching | Cross-subject | ✅ EXISTS |
| /jee-physics-coaching → /jee-coaching | Up to umbrella | ✅ EXISTS |
| /jee-physics-coaching → /free-trial | Conversion | ✅ EXISTS |
| /jee-physics-mechanics → /jee-physics-coaching | Sub-topic → Pillar | ✅ EXISTS |
| /jee-physics-electrodynamics → /jee-physics-coaching | Sub-topic → Pillar | ✅ EXISTS |
| /jee-physics-optics → /jee-physics-coaching | Sub-topic → Pillar | ✅ EXISTS |
| /jee-physics-thermodynamics → /jee-physics-coaching | Sub-topic → Pillar | ✅ EXISTS |
| /jee-physics-waves → /jee-physics-coaching | Sub-topic → Pillar | ✅ EXISTS |
| /mentors → /jee-physics-coaching | Faculty → Course | ❌ MISSING |
| Blog (JEE Physics posts) → /jee-physics-coaching | Blog → Course | ✅ EXISTS (indirect) |
| Blog posts → /mentors | Blog → Faculty | ❌ MISSING |

**Cluster score: 7 / 14 links exist (50%)**

---

### JEE Chemistry Cluster

**Pillar page:** `/jee-chemistry-coaching`

| Link | Direction | Status |
|---|---|---|
| /jee-chemistry-coaching → /jee-chemistry-physical | Pillar → Sub-topic | ❌ MISSING |
| /jee-chemistry-coaching → /jee-chemistry-organic | Pillar → Sub-topic | ❌ MISSING |
| /jee-chemistry-coaching → /jee-chemistry-inorganic | Pillar → Sub-topic | ❌ MISSING |
| /jee-chemistry-coaching → /mentors | Pillar → Faculty | ❌ MISSING |
| /jee-chemistry-coaching → /jee-chemistry-formulas | Pillar → Resource | ✅ EXISTS |
| /jee-chemistry-coaching → /jee-coaching | Up to umbrella | ✅ EXISTS |
| /jee-chemistry-coaching → /free-trial | Conversion | ✅ EXISTS |
| /jee-chemistry-physical → /jee-chemistry-coaching | Sub-topic → Pillar | ✅ EXISTS |
| /jee-chemistry-organic → /jee-chemistry-coaching | Sub-topic → Pillar | ✅ EXISTS |
| /jee-chemistry-inorganic → /jee-chemistry-coaching | Sub-topic → Pillar | ✅ EXISTS |
| /mentors → /jee-chemistry-coaching | Faculty → Course | ❌ MISSING |
| Blog (Organic Chemistry post) → /jee-chemistry-coaching | Blog → Course | ✅ EXISTS |

**Cluster score: 7 / 12 links exist (58%)**

---

### JEE Mathematics Cluster

**Pillar page:** `/jee-mathematics-coaching`

| Link | Direction | Status |
|---|---|---|
| /jee-mathematics-coaching → /jee-math-algebra | Pillar → Sub-topic | ❌ MISSING |
| /jee-mathematics-coaching → /jee-math-calculus | Pillar → Sub-topic | ❌ MISSING |
| /jee-mathematics-coaching → /jee-math-geometry | Pillar → Sub-topic | ❌ MISSING |
| /jee-mathematics-coaching → /jee-math-trigonometry | Pillar → Sub-topic | ❌ MISSING |
| /jee-mathematics-coaching → /mentors | Pillar → Faculty | ❌ MISSING |
| /jee-mathematics-coaching → /jee-maths-formulas | Pillar → Resource | ✅ EXISTS |
| /jee-mathematics-coaching → /jee-coaching | Up to umbrella | ✅ EXISTS |
| /jee-mathematics-coaching → /free-trial | Conversion | ✅ EXISTS |
| /jee-math-algebra → /jee-mathematics-coaching | Sub-topic → Pillar | ✅ EXISTS |
| /jee-math-calculus → /jee-mathematics-coaching | Sub-topic → Pillar | ✅ EXISTS |
| /jee-math-geometry → /jee-mathematics-coaching | Sub-topic → Pillar | ✅ EXISTS |
| /jee-math-trigonometry → /jee-mathematics-coaching | Sub-topic → Pillar | ✅ EXISTS |
| /mentors → /jee-mathematics-coaching | Faculty → Course | ❌ MISSING |

**Cluster score: 7 / 13 links exist (54%)**

---

### NEET Cluster

**Pillar page:** `/neet-coaching`

| Link | Direction | Status |
|---|---|---|
| /neet-coaching → /neet-biology-coaching | Pillar → Subject | ✅ EXISTS |
| /neet-coaching → /neet-physics-coaching | Pillar → Subject | ✅ EXISTS |
| /neet-coaching → /neet-chemistry-coaching | Pillar → Subject | ✅ EXISTS |
| /neet-coaching → /mentors | Pillar → Faculty | ✅ EXISTS |
| /neet-biology-coaching → /mentors | Subject → Faculty | ❌ MISSING |
| /neet-physics-coaching → /mentors | Subject → Faculty | ❌ MISSING |
| /neet-chemistry-coaching → /mentors | Subject → Faculty | ❌ MISSING |
| /mentors → /neet-biology-coaching | Faculty → Course | ❌ MISSING |
| /mentors → /neet-physics-coaching | Faculty → Course | ❌ MISSING |
| /mentors → /neet-chemistry-coaching | Faculty → Course | ❌ MISSING |

**Cluster score: 4 / 10 links exist (40%)**

---

### Mentors / E-E-A-T Cluster

| Link | Direction | Status |
|---|---|---|
| /mentors → /jee-physics-coaching | Faculty → Course | ❌ MISSING |
| /mentors → /jee-chemistry-coaching | Faculty → Course | ❌ MISSING |
| /mentors → /jee-mathematics-coaching | Faculty → Course | ❌ MISSING |
| /mentors → /neet-biology-coaching | Faculty → Course | ❌ MISSING |
| /mentors → /neet-physics-coaching | Faculty → Course | ❌ MISSING |
| /mentors → /neet-chemistry-coaching | Faculty → Course | ❌ MISSING |
| /mentors → /methodology | Faculty → Method | ✅ EXISTS |
| /mentors → /success-stories | Faculty → Proof | ✅ EXISTS |
| /mentors → /about | Faculty → Org | ✅ EXISTS |
| Blog posts → /mentors | Content → Faculty | ❌ MISSING (all 9 posts) |
| /about → /mentors | About → Faculty | ✅ EXISTS |

**Cluster score: 3 / 11 links exist (27%) — CRITICAL**

---

## Anchor Text Audit

| Location | Current Anchor | Problem | Improved Anchor |
|---|---|---|---|
| FreeTrial.tsx (success state) | "Back to Home" | Generic, wastes a high-intent moment | "Explore JEE & NEET Courses" → /courses |
| BlogPost.tsx breadcrumb | "← Back to Blog" | Acceptable but uninspired | Keep (functional nav) |
| Blog.tsx CTA | "JEE Coaching" + "NEET Coaching" | Acceptable — short but specific | Keep |
| Courses.tsx | "Back to Home" | Generic, found on courses page footer | "Return to MindPeak Homepage" or remove |
| CourseFlashCards | "Browse All JEE & NEET Programs & Pricing" | Mixed signal — conflates programs with pricing | Split: "Browse All Courses" and separate "View Pricing" |
| Homepage ContactSection | href="#" (address pin) | Dead link — non-functional | Remove href or point to /contact |
| JEE Coaching explore-more | 26 generic "label" links | SEO opportunity — most are 3-word labels | Acceptable (navigation context) |
| Comparison pages | "{c.slug}" dynamic links | Can generate awkward competitor names | Acceptable (auto-generated) |

---

## New Links to Add — Top 20 Prioritized

| # | From Page | To Page | Anchor Text | Priority | Impact |
|---|---|---|---|---|---|
| 1 | /jee-physics-coaching relatedPages | /jee-physics-mechanics | JEE Physics Mechanics — Kinematics & Rotational Motion | CRITICAL | Unblocks 5 orphan pages |
| 2 | /jee-physics-coaching relatedPages | /jee-physics-electrodynamics | JEE Physics Electrodynamics — Electrostatics to EMI | CRITICAL | Same |
| 3 | /jee-physics-coaching relatedPages | /jee-physics-optics | JEE Physics Optics & Modern Physics | CRITICAL | Same |
| 4 | /jee-physics-coaching relatedPages | /jee-physics-thermodynamics | JEE Physics Thermodynamics Guide | CRITICAL | Same |
| 5 | /jee-physics-coaching relatedPages | /jee-physics-waves | JEE Physics Waves & SHM | CRITICAL | Same |
| 6 | /jee-chemistry-coaching relatedPages | /jee-chemistry-physical | JEE Physical Chemistry — Calculations & Numericals | CRITICAL | Unblocks 3 orphan pages |
| 7 | /jee-chemistry-coaching relatedPages | /jee-chemistry-organic | JEE Organic Chemistry — Reaction Mechanisms | CRITICAL | Same |
| 8 | /jee-chemistry-coaching relatedPages | /jee-chemistry-inorganic | JEE Inorganic Chemistry — NCERT & p-Block Mastery | CRITICAL | Same |
| 9 | /jee-mathematics-coaching relatedPages | /jee-math-algebra | JEE Algebra — Complex Numbers to Matrices | CRITICAL | Unblocks 4 orphan pages |
| 10 | /jee-mathematics-coaching relatedPages | /jee-math-calculus | JEE Calculus — Differential & Integral | CRITICAL | Same |
| 11 | /jee-mathematics-coaching relatedPages | /jee-math-geometry | JEE Coordinate Geometry Coaching | CRITICAL | Same |
| 12 | /jee-mathematics-coaching relatedPages | /jee-math-trigonometry | JEE Trigonometry & ITF Mastery | CRITICAL | Same |
| 13 | /mentors relatedPages | /jee-physics-coaching | Expert JEE Physics Coaching by IIT Alumni | HIGH | Faculty ↔ Course cluster |
| 14 | /mentors relatedPages | /jee-chemistry-coaching | Personalized JEE Chemistry Coaching | HIGH | Same |
| 15 | /mentors relatedPages | /jee-mathematics-coaching | 1-on-1 JEE Mathematics Mentoring | HIGH | Same |
| 16 | /mentors relatedPages | /neet-biology-coaching | NEET Biology Coaching by AIIMS Alumni | HIGH | Same |
| 17 | Footer Quick Links | /about | About MindPeak Institute | HIGH | Rescues near-orphan |
| 18 | /pricing (after CTA section) | /courses | Browse all JEE & NEET coaching programs | HIGH | Breaks dead-end |
| 19 | /pricing (after CTA section) | /methodology | See how our 1-on-1 methodology works | HIGH | Same |
| 20 | /free-trial (success state) | /courses | Explore our JEE & NEET coaching programs | HIGH | Fixes wasted conversion moment |

---

## Anchor Text Improvements

| Page | Current Anchor | Improved Anchor | Link Target |
|---|---|---|---|
| FreeTrial.tsx success state | "Back to Home" | "Explore our JEE & NEET coaching programs" | /courses |
| CourseFlashCards | "Browse All JEE & NEET Programs & Pricing" | "Browse all JEE & NEET coaching programs" | /courses |
| Multiple pages | "Free Trial" (short) | "Book a free 1-on-1 trial class" | /free-trial |
| Blog posts | No mentor link at all | "Expert JEE & NEET mentors at MindPeak" | /mentors |
| Contact success state | "Back to Home" | "Explore our JEE & NEET programs" | /courses |

---

## Breadcrumb Analysis

**Current breadcrumb pattern across all pages:**
```
Home > [Current Page Title]
```

**Problem:** Sub-topic pages show a flat 2-level breadcrumb that hides the topic hierarchy:
```
Home > JEE Physics Mechanics
```

**Should show 3-level:**
```
Home > JEE Physics Coaching > JEE Physics Mechanics
```

This 3-level breadcrumb would:
- Add a crawlable link from each sub-topic back to the pillar
- Signal hierarchy to Google's crawler
- Generate richer `BreadcrumbList` schema

**Implementation:** Update the SEOLandingPage.tsx breadcrumb section to accept an optional `parentPage` prop. Pass it from the relevant `page.tsx` files. This is already partially handled by the `relatedPages` fix in seoPageData.ts but the visible breadcrumb also needs updating.

---

## Components to Create / Update

### 1. MentorAttributionLink — Blog Posts
Add to `BlogPost.tsx` above the related articles section.

```tsx
{/* Mentor Attribution */}
<section className="max-w-3xl mx-auto px-6 py-8 border-t border-border">
  <p className="text-sm text-muted-foreground">
    This article was written and reviewed by{' '}
    <Link to="/mentors" className="text-primary hover:underline font-semibold">
      MindPeak&rsquo;s expert JEE &amp; NEET mentors
    </Link>
    {' '}— IIT and AIIMS alumni with 8–12 years of coaching experience.
  </p>
</section>
```

### 2. RelatedResources — Pricing & Contact dead-ends
Add before `<PageFooter />` on /pricing, /contact, /free-trial:

```tsx
{/* Related Resources */}
<section className="max-w-5xl mx-auto px-6 py-12 border-t border-border">
  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6 font-semibold">
    Explore Further
  </p>
  <div className="flex flex-wrap gap-3">
    {relatedLinks.map(({ href, label }) => (
      <Link key={href} to={href}
        className="px-4 py-2 rounded-lg border border-border text-sm text-foreground hover:border-primary hover:text-primary transition-colors">
        {label}
      </Link>
    ))}
  </div>
</section>
```

---

## Implementation Log

All critical fixes implemented in this audit:

| Fix | File | Status |
|---|---|---|
| JEE Physics pillar → 5 sub-topic relatedPages | src/data/seoPageData.ts | ✅ IMPLEMENTED |
| JEE Chemistry pillar → 3 sub-topic relatedPages | src/data/seoPageData.ts | ✅ IMPLEMENTED |
| JEE Maths pillar → 4 sub-topic relatedPages | src/data/seoPageData.ts | ✅ IMPLEMENTED |
| Mentors page → 6 course relatedPages | src/data/seoPageData.ts | ✅ IMPLEMENTED |
| NEET subject pages → /mentors relatedPages | src/data/seoPageData.ts | ✅ IMPLEMENTED |
| /about added to Footer Quick Links | src/components/PageFooter.tsx | ✅ IMPLEMENTED |
| /pricing dead-end fixed with Explore More links | src/views/Pricing.tsx | ✅ IMPLEMENTED |
| /free-trial success state anchor text + links | src/views/FreeTrial.tsx | ✅ IMPLEMENTED |
| /contact dead-end fixed with Explore links | src/views/Contact.tsx | ✅ IMPLEMENTED |
| Blog posts → /mentors attribution link | src/views/BlogPost.tsx | ✅ IMPLEMENTED |
| /neet-ug-2026-cancelled added to neet explore-more | src/views/NEETCoaching.tsx | ✅ IMPLEMENTED |

---

## Expected SEO Impact

1. **Google now has a crawl path to 12 previously hard-to-reach sub-topic pages** via the pillar page relatedPages. These pages carry high-value long-tail keywords (e.g., "JEE Physics Mechanics coaching") that often convert better than broad head terms.

2. **E-E-A-T boost**: Faculty ↔ Course bidirectional linking tells Google that specific named experts are responsible for specific courses. This is the single most powerful E-E-A-T signal available for ed-tech sites.

3. **Conversion funnel improved**: /pricing and /free-trial were dead-ends. Users who read pricing and don't convert now have clear next steps (see methodology, explore courses) instead of back-clicking. This reduces pogo-sticking signals.

4. **Blog authority flows to courses**: 9 blog posts now have a path to /mentors, which links to all 6 course pages. This creates a complete topical chain: blog → faculty → course → free-trial.

5. **Link equity redistribution**: Adding /about to the footer Quick Links means every page on the site passes PageRank to the About page — critical for E-E-A-T (Google reads About pages to assess site trustworthiness).
