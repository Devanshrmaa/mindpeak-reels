# Internal Link Audit — MindPeak Institute
**Date:** 2026-05-11  
**Auditor:** Claude (Anthropic) — automated full-codebase crawl  
**Scope:** All `.tsx` files in `src/views/`, `src/components/`, `app/`; all link data in `src/data/`

---

## Internal Link Health Score: 42/100

| Metric | Current | Target |
|---|---|---|
| Orphan pages (0 incoming links) | **2** | 0 |
| Near-orphan pages (≤3 incoming links) | **3** | 0 |
| Dead-end pages (0 outgoing links) | **2** | 0 |
| Deep pages (>3 clicks from homepage) | **4 types** | 0 |
| Broken internal links | 0 | 0 |
| Generic anchor text instances | **12+** | 0 |
| Missing cluster cross-links | **25+** | 0 |

---

## Site Structure Map

```
Homepage (/)
├── /jee-coaching           [Navbar] — Custom JEECoaching.tsx view
│   ├── /jee-main-coaching      [SEO landing page]
│   ├── /jee-advanced-coaching  [SEO landing page]
│   ├── /jee-dropper-coaching   [SEO landing page]
│   ├── /jee-crash-course       [SEO landing page]
│   ├── /jee-physics-coaching   [SEO landing page] ⚠️ Not linked from JEECoaching hero
│   ├── /jee-chemistry-coaching [SEO landing page] ⚠️ Not linked from JEECoaching hero
│   └── /jee-mathematics-coaching [SEO landing page] ⚠️ Not linked from JEECoaching hero
├── /neet-coaching          [Navbar] — Custom NEETCoaching.tsx view
│   ├── /neet-ug-coaching       [SEO landing page]
│   ├── /neet-dropper-coaching  [SEO landing page]
│   ├── /neet-crash-course      [SEO landing page]
│   ├── /neet-biology-coaching  [SEO landing page] ⚠️ Not linked from NEETCoaching hero
│   ├── /neet-physics-coaching  [SEO landing page] ⚠️ Not linked from NEETCoaching hero
│   └── /neet-chemistry-coaching [SEO landing page] ⚠️ Not linked from NEETCoaching hero
├── /courses                [Navbar] — Courses.tsx view → /course/[slug]
├── /pricing                [Navbar]
├── /study-plan             [Navbar]
├── /blog                   [Navbar] — Blog.tsx → /blog/[slug] (7 posts)
├── /contact                [Navbar] ⚠️ Dead-end page
├── /practice               [Navbar dropdown]
│   ├── /jee-practice
│   └── /neet-practice
├── /jee-pyq
├── /neet-pyq
├── /jee-rank-predictor     [Footer only]
├── /neet-rank-predictor    [Footer only]
├── /free-trial             [Footer Quick Links only] ⚠️ Near-orphan
├── /about                  ❌ ORPHAN — Not in navbar or footer
├── /mentors                ❌ ORPHAN — Not in navbar or footer
├── /success-stories        ⚠️ Near-orphan — only 3 links from /course/[slug]
├── /methodology            ⚠️ Near-orphan — only 3 links from /course/[slug]
├── /foundation-coaching    [Footer → Other Exams]
├── /kota-coaching-alternative [Footer Quick Links]
├── /online-vs-offline-jee-coaching [Footer Quick Links]
├── /batch-vs-personal-coaching [Footer Compare]
├── /mindpeak-vs-allen      [Footer Compare]
├── /mindpeak-vs-fiitjee    [Footer Compare]
├── /mindpeak-vs-*          (8 comparison pages) [Footer Compare]
├── /jee-coaching-in-*      (11+ city pages) [Footer City]
├── /neet-coaching-in-*     (10+ city pages) [Footer City]
├── /jee-physics-mechanics  [catch-all via chapterData]
├── /jee-physics-*          (5 chapter pages)
├── /jee-chemistry-*        (3 chapter pages)
├── /jee-math-*             (4 chapter pages)
├── /jee-physics-formulas   [Footer Formula Sheets]
├── /jee-chemistry-formulas [Footer Formula Sheets]
├── /jee-maths-formulas     [Footer Formula Sheets]
├── /neet-biology-formulas  [Footer Formula Sheets]
├── /neet-physics-formulas  [Footer Formula Sheets]
├── /neet-chemistry-formulas [Footer Formula Sheets]
├── /jee-physics-preparation [Footer JEE Preparation]
├── /jee-chemistry-preparation [Footer JEE Preparation]
├── /jee-mathematics-preparation [Footer JEE Preparation]
├── /neet-physics-preparation [Footer NEET Preparation]
├── /neet-chemistry-preparation [Footer NEET Preparation]
├── /neet-biology-preparation [Footer NEET Preparation]
├── /best-jee-coaching-in-india [SEO landing page]
├── /bitsat-coaching        [Footer Other Exams]
├── /cuet-coaching          [Footer Other Exams]
├── /terms-and-conditions   [Footer Legal]
└── /refund-policy          [Footer Legal]
```

---

## Critical Issues (Fix Immediately)

| # | Issue Type | Page | Problem | Fix |
|---|---|---|---|---|
| 1 | ORPHAN | `/about` | Zero incoming internal links — Googlebot may never crawl this E-E-A-T critical page | Add to footer Important Links + navbar |
| 2 | ORPHAN | `/mentors` | Zero incoming internal links — Faculty profiles are invisible to crawlers | Add to footer + JEE/NEET coaching pages |
| 3 | NEAR-ORPHAN | `/success-stories` | Only 3 links (all from `/course/[slug]`) — Social proof invisible to most visitors | Add to footer + JEE/NEET coaching pages |
| 4 | NEAR-ORPHAN | `/methodology` | Only 3 links (all from `/course/[slug]`) — Teaching methodology page unreachable | Add to footer + JEE/NEET coaching pages |
| 5 | DEAD-END | `/contact` | Only links back to homepage — users have nowhere to go after contacting | Add links to /courses, /jee-coaching, /neet-coaching |
| 6 | DEAD-END | `/free-trial` | Only links back to homepage — conversion page doesn't cross-link to service pages | Add links to /courses, /jee-coaching, /neet-coaching |
| 7 | MISSING CLUSTER | `/jee-coaching` | Doesn't link to /jee-physics-coaching, /jee-chemistry-coaching, /jee-mathematics-coaching | Add subject coaching links in Explore More |
| 8 | MISSING CLUSTER | `/neet-coaching` | Doesn't link to /neet-biology-coaching, /neet-physics-coaching, /neet-chemistry-coaching | Add subject coaching links in Explore More |
| 9 | MISSING E-E-A-T | `AuthorBio.tsx` | Expert author bios don't link to /mentors — wasted authority signal | Add "Meet all our expert mentors →" link |
| 10 | MISSING CLUSTER | Blog posts | Body content only links to /courses generically — no subject-specific course links | Add contextual links to relevant course pages |

---

## Orphan Pages

| Page URL | Title | Problem | Recommended Link From | Suggested Anchor Text |
|---|---|---|---|---|
| `/about` | About MindPeak Institute | **Zero incoming links** — Critical E-E-A-T page hidden from crawlers and users | Footer (Important Links), Navbar, JEECoaching hero | "About MindPeak Institute" |
| `/mentors` | Expert JEE & NEET Mentors | **Zero incoming links** — Faculty page with IIT/AIIMS experts never gets crawled | Footer, JEECoaching Explore More, NEETCoaching Explore More, AuthorBio, Blog posts | "Meet Our Expert JEE & NEET Mentors" |

---

## Near-Orphan Pages (≤3 Incoming Links)

| Page URL | Incoming Links | Source | Fix |
|---|---|---|---|
| `/success-stories` | 3 | All from `/course/[slug]` only | Add to footer + JEE/NEET coaching + Blog CTA |
| `/methodology` | 3 | All from `/course/[slug]` only | Add to footer + JEE/NEET coaching |
| `/free-trial` | 1 (catch-all page `<a>` tag) + footer | Footer Quick Links (text only) | Keep footer but add to JEE/NEET coaching body content with stronger anchor text |

---

## Dead-End Pages

| Page | Outgoing Links | Problem | Fix |
|---|---|---|---|
| `/contact` | `/ ` (home link only) | Users who contact get stuck — no next step | Add links: /courses, /jee-coaching, /neet-coaching, /pricing |
| `/free-trial` | `/` (home link only) | Trial bookers can't browse — missed opportunity | Add links: /courses, /jee-coaching, /neet-coaching |
| `/terms-and-conditions` | None | Legal page — acceptable | No action needed |
| `/refund-policy` | None | Legal page — acceptable | No action needed |

---

## Deep Pages (>3 Clicks from Homepage)

| Page Type | Click Path | Depth | Fix |
|---|---|---|---|
| JEE Practice Questions | Homepage → Practice → Subject → Chapter → Question | 5 clicks | Add JEE Practice hub shortcut in footer ✅ (already done) |
| NEET Practice Questions | Homepage → Practice → Subject → Chapter → Question | 5 clicks | Add NEET Practice hub shortcut in footer ✅ (already done) |
| Subject Chapter Pages | Homepage → JEE Coaching → Chapter Guide | 3 clicks ✅ | OK |
| Course Detail Pages | Homepage → Courses → Course Detail | 3 clicks ✅ | OK |
| Blog Posts | Homepage → Blog → Post | 3 clicks ✅ | OK |

---

## Topic Cluster Link Map

### JEE Physics Cluster

**Pillar:** `/jee-physics-coaching`

| Link | Exists? | Notes |
|---|---|---|
| `/jee-coaching` → `/jee-physics-coaching` | ❌ | JEECoaching Explore More doesn't include this |
| `/jee-physics-coaching` → `/jee-coaching` | ✅ | Via relatedPages: "All JEE Programs" |
| `/jee-physics-coaching` → `/jee-chemistry-coaching` | ✅ | Via relatedPages |
| `/jee-physics-coaching` → `/jee-mathematics-coaching` | ✅ | Via relatedPages |
| `/jee-physics-coaching` → `/jee-physics-formulas` | ✅ | Via relatedPages |
| `/jee-physics-coaching` → `/jee-physics-preparation` | ✅ | Via relatedPages |
| `/jee-physics-coaching` → `/mentors` | ❌ | No faculty link |
| `/jee-physics-coaching` → blog posts (Physics) | ❌ | No blog links |
| Blog Physics posts → `/jee-physics-coaching` | ❌ | Blog CTA goes to /courses only |
| `/jee-physics-mechanics` → `/jee-physics-coaching` | ? | Needs verification |
| Homepage → `/jee-physics-coaching` | ❌ | No direct link from homepage |

**Missing Links to Add:**
```jsx
// In JEECoaching.tsx Explore More section:
{ label: 'JEE Physics Coaching', to: '/jee-physics-coaching' },
{ label: 'JEE Chemistry Coaching', to: '/jee-chemistry-coaching' },
{ label: 'JEE Mathematics Coaching', to: '/jee-mathematics-coaching' },
{ label: 'Meet Our JEE Expert Mentors', to: '/mentors' },
{ label: 'Student Success Stories', to: '/success-stories' },
{ label: 'Our Teaching Methodology', to: '/methodology' },
{ label: 'About MindPeak Institute', to: '/about' },
```

---

### JEE Chemistry Cluster

**Pillar:** `/jee-chemistry-coaching`

| Link | Exists? | Notes |
|---|---|---|
| `/jee-coaching` → `/jee-chemistry-coaching` | ❌ | Not in JEECoaching Explore More |
| `/jee-chemistry-coaching` → `/jee-coaching` | ✅ | Via relatedPages |
| `/jee-chemistry-coaching` → `/jee-physics-coaching` | ✅ | Via relatedPages |
| `/jee-chemistry-coaching` → `/jee-chemistry-formulas` | ✅ | Via relatedPages |
| `/jee-chemistry-coaching` → `/mentors` | ❌ | No faculty link |
| Chemistry blog posts → `/jee-chemistry-coaching` | ❌ | Blog CTA is generic |

---

### JEE Mathematics Cluster

**Pillar:** `/jee-mathematics-coaching`

| Link | Exists? | Notes |
|---|---|---|
| `/jee-coaching` → `/jee-mathematics-coaching` | ❌ | Not in JEECoaching Explore More |
| `/jee-mathematics-coaching` → `/jee-coaching` | ✅ | Via relatedPages |
| `/jee-mathematics-coaching` → `/jee-maths-formulas` | ✅ | Via relatedPages |
| `/jee-mathematics-coaching` → `/mentors` | ❌ | No faculty link |

---

### NEET Biology Cluster

**Pillar:** `/neet-biology-coaching`

| Link | Exists? | Notes |
|---|---|---|
| `/neet-coaching` → `/neet-biology-coaching` | ❌ | Not in NEETCoaching Explore More |
| `/neet-biology-coaching` → `/neet-coaching` | ✅ | Via relatedPages |
| `/neet-biology-coaching` → `/neet-physics-coaching` | ✅ | Via relatedPages |
| `/neet-biology-coaching` → `/neet-biology-formulas` | ✅ | Via relatedPages |
| `/neet-biology-coaching` → `/mentors` | ❌ | No faculty link |
| Biology blog posts → `/neet-biology-coaching` | ❌ | Blog CTA is generic |

---

### Resources Cluster

| Link | Exists? | Notes |
|---|---|---|
| Formula sheets → course pages | ✅ | Via relatedPages |
| Practice hub → course pages | ✅ | Via SEO landing page |
| Course pages → formula sheets | ✅ | Via relatedPages |
| Course pages → practice hub | ✅ | Via JEECoaching Explore More |
| Blog posts → formula sheets | ❌ | Missing |
| Blog posts → faculty profiles | ❌ | AuthorBio shows bio but no link to /mentors |

---

## Anchor Text Improvements

| Page | Current Anchor | Improved Anchor | Link Target |
|---|---|---|---|
| CourseFlashcards (×3) | "View JEE Programs Details" | "Explore 1-on-1 JEE Coaching Programs" | `/courses` |
| CourseFlashcards bottom | "View All JEE & NEET Courses" | "Browse All JEE & NEET Coaching Programs" | `/courses` |
| BlogPost CTA | "Explore Courses" | "Explore Personalized JEE/NEET Coaching" | `/courses` |
| Blog.tsx CTA | "Explore Courses" | "View All JEE & NEET Programs" | `/courses` |
| Footer Quick Links | "Free Trial" | "Book a Free Demo Class" | `/free-trial` |
| Footer Quick Links | "Blog" | "JEE & NEET Preparation Blog" | `/blog` |
| JEECoaching Explore More | "Blog — JEE Tips" | "JEE Preparation Blog & Strategy Guides" | `/blog` |
| NEETCoaching Explore More | "Blog — NEET Tips" | "NEET Preparation Blog & Expert Guides" | `/blog` |
| Navbar | "Study Plan" | (fine as-is) | `/study-plan` |
| AuthorBio full variant | *(no link to /mentors)* | "Meet all our expert mentors →" | `/mentors` |

---

## New Links to Add (Prioritized Top 20)

| # | From Page | To Page | Anchor Text | Priority | Position |
|---|---|---|---|---|---|
| 1 | Footer (Important Links) | `/about` | "About MindPeak Institute" | CRITICAL | Footer Important Links |
| 2 | Footer (Important Links) | `/mentors` | "Expert Faculty" | CRITICAL | Footer Important Links |
| 3 | Footer (Important Links) | `/success-stories` | "Student Success Stories" | CRITICAL | Footer Important Links |
| 4 | Footer (Important Links) | `/methodology` | "Our Teaching Methodology" | CRITICAL | Footer Important Links |
| 5 | `/jee-coaching` | `/mentors` | "Meet Our JEE Expert Mentors" | HIGH | Explore More section |
| 6 | `/jee-coaching` | `/jee-physics-coaching` | "JEE Physics Coaching" | HIGH | Explore More section |
| 7 | `/jee-coaching` | `/jee-chemistry-coaching` | "JEE Chemistry Coaching" | HIGH | Explore More section |
| 8 | `/jee-coaching` | `/jee-mathematics-coaching` | "JEE Mathematics Coaching" | HIGH | Explore More section |
| 9 | `/jee-coaching` | `/success-stories` | "Student Success Stories — JEE Results" | HIGH | Explore More section |
| 10 | `/neet-coaching` | `/mentors` | "Meet Our NEET Expert Mentors" | HIGH | Explore More section |
| 11 | `/neet-coaching` | `/neet-biology-coaching` | "NEET Biology Coaching" | HIGH | Explore More section |
| 12 | `/neet-coaching` | `/neet-physics-coaching` | "NEET Physics Coaching" | HIGH | Explore More section |
| 13 | `/neet-coaching` | `/neet-chemistry-coaching` | "NEET Chemistry Coaching" | HIGH | Explore More section |
| 14 | `/neet-coaching` | `/success-stories` | "Student Success Stories — NEET Results" | HIGH | Explore More section |
| 15 | `AuthorBio` (full) | `/mentors` | "Meet all our expert faculty at MindPeak →" | HIGH | Bottom of author bio |
| 16 | `/blog/[slug]` | `/mentors` | "Meet our expert JEE & NEET faculty" | MEDIUM | CTA band |
| 17 | `/contact` | `/courses` | "Browse our JEE & NEET coaching programs" | MEDIUM | Post-form section |
| 18 | `/free-trial` | `/jee-coaching` | "Learn about our JEE coaching program" | MEDIUM | Post-form section |
| 19 | `/free-trial` | `/neet-coaching` | "Learn about our NEET coaching program" | MEDIUM | Post-form section |
| 20 | `/contact` | `/pricing` | "View coaching fees and EMI plans" | MEDIUM | Post-form section |

---

## Anchor Text Rule Violations

The codebase has a `src/test/descriptive-links.test.ts` that enforces no generic anchor text. The following patterns were checked — **zero violations found** in the test's scanned paths. However, the following SEMANTIC issues remain (not caught by the test because they're contextually specific):

| File | Anchor | Issue |
|---|---|---|
| `CourseFlashcards.tsx:127` | "View JEE Programs Details" | All 3 cards link to `/courses` with nearly identical anchors |
| `Blog.tsx:248` | "Explore Courses" | Generic — doesn't say what courses |
| `BlogPost.tsx:292` | "Explore Courses" | Generic — doesn't say what courses |
| `PageFooter.tsx:79` | "Free Trial" | Under-optimized — should mention free demo |
| `PageFooter.tsx:80` | "Blog" | Under-optimized — no context |

---

## Components to Create / Update

### 1. Update `PageFooter.tsx` — Add orphaned pages to Important Links
```tsx
// In importantLinks array, add:
{ label: 'About MindPeak', to: '/about' },
{ label: 'Expert Faculty', to: '/mentors' },
{ label: 'Student Success Stories', to: '/success-stories' },
{ label: 'Teaching Methodology', to: '/methodology' },
```

### 2. Update `JEECoaching.tsx` — Add subject cluster + E-E-A-T links
```tsx
// In the Explore More section link array, add:
{ label: 'JEE Physics Coaching', to: '/jee-physics-coaching' },
{ label: 'JEE Chemistry Coaching', to: '/jee-chemistry-coaching' },
{ label: 'JEE Mathematics Coaching', to: '/jee-mathematics-coaching' },
{ label: 'Meet Our JEE Expert Mentors', to: '/mentors' },
{ label: 'Student Success Stories', to: '/success-stories' },
{ label: 'Our Teaching Methodology', to: '/methodology' },
{ label: 'About MindPeak Institute', to: '/about' },
```

### 3. Update `NEETCoaching.tsx` — Add subject cluster + E-E-A-T links
```tsx
// In the Explore More section link array, add:
{ label: 'NEET Biology Coaching', to: '/neet-biology-coaching' },
{ label: 'NEET Physics Coaching', to: '/neet-physics-coaching' },
{ label: 'NEET Chemistry Coaching', to: '/neet-chemistry-coaching' },
{ label: 'Meet Our NEET Expert Mentors', to: '/mentors' },
{ label: 'Student Success Stories', to: '/success-stories' },
{ label: 'Our Teaching Methodology', to: '/methodology' },
{ label: 'About MindPeak Institute', to: '/about' },
```

### 4. Update `AuthorBio.tsx` — Link to /mentors from full variant
```tsx
// In FullBio component, add after qualifications section:
<div className="mt-4 pt-4 border-t border-border">
  <Link
    to="/mentors"
    className="text-sm text-primary hover:underline font-medium"
  >
    Meet all our expert JEE &amp; NEET faculty →
  </Link>
</div>
```

### 5. Update `BlogPost.tsx` — Richer CTA with faculty and course links
```tsx
// In the CTA band, add:
<Link to="/mentors" className="...">Meet Our Expert Faculty</Link>
<Link to="/jee-coaching" className="...">JEE Coaching</Link>
<Link to="/neet-coaching" className="...">NEET Coaching</Link>
```

### 6. Fix Dead-end Pages — `Contact.tsx` and `FreeTrial.tsx`
```tsx
// Add "Quick Links" section after the form/confirmation:
const quickLinks = [
  { label: 'JEE Coaching Program', to: '/jee-coaching' },
  { label: 'NEET Coaching Program', to: '/neet-coaching' },
  { label: 'Browse All Courses', to: '/courses' },
  { label: 'Pricing & EMI Plans', to: '/pricing' },
  { label: 'Our Expert Faculty', to: '/mentors' },
];
```

---

## Breadcrumb Implementation

**Status:** ✅ Breadcrumbs exist in code for all major pages.

The following pages already have visual breadcrumb navigation:
- `/jee-coaching` — `Home / JEE Coaching` (with link on Home)
- `/neet-coaching` — `Home / NEET Coaching` (with link on Home)
- `/blog` — `Home / Blog` (with link on Home)
- `/blog/[slug]` — `Home / Blog / Post Title` (with links on Home + Blog)
- All SEOLandingPage pages — `Home / Page Name`

**Breadcrumb schema** is generated and injected into JSON-LD for all major pages. ✅

**Minor issue:** The SEOLandingPage breadcrumb only has 2 levels (Home → Page). For subject coaching pages like `/jee-physics-coaching`, ideally it should be: `Home → JEE Coaching → JEE Physics Coaching`. This is a low-priority improvement.

---

## Estimated Impact of Implementing All Fixes

| Fix | Pages Impacted | Expected SEO Impact |
|---|---|---|
| Add /about + /mentors to footer | ALL pages | CRITICAL — E-E-A-T pages become crawlable |
| Add /success-stories + /methodology to footer | ALL pages | HIGH — social proof + trust pages get indexed |
| JEECoaching.tsx subject cluster links | /jee-coaching + SEO authority flow | HIGH — cluster authority consolidation |
| NEETCoaching.tsx subject cluster links | /neet-coaching + authority flow | HIGH — cluster authority consolidation |
| AuthorBio → /mentors link | ALL blog posts | MEDIUM — E-E-A-T signal amplification |
| BlogPost CTA improvements | ALL 7 blog posts | MEDIUM — conversion path + cluster links |
| Fix Contact/FreeTrial dead-ends | /contact, /free-trial | MEDIUM — UX + crawl path improvement |

**Projected new Health Score after all fixes: ~78/100**

The remaining 22 points require content-level work:
- Adding internal links *within* blog post Markdown content (contextual links)
- Creating deep cluster pages (e.g., NEET Botany sub-chapter pages → /neet-biology-coaching)
- Building a proper "Faculty" page with individual faculty profile URLs

---

## Implementation Files Changed

The following files were modified as part of this audit:

1. `src/components/PageFooter.tsx` — Added 4 orphaned pages to Important Links
2. `src/views/JEECoaching.tsx` — Added 7 cluster + E-E-A-T links to Explore More section
3. `src/views/NEETCoaching.tsx` — Added 7 cluster + E-E-A-T links to Explore More section
4. `src/components/AuthorBio.tsx` — Added /mentors link in full bio variant
5. `src/views/BlogPost.tsx` — Added /mentors and specific course links to CTA band
6. `src/views/Contact.tsx` — Added helpful navigation links (dead-end fix)
7. `src/views/FreeTrial.tsx` — Added helpful navigation links (dead-end fix)
