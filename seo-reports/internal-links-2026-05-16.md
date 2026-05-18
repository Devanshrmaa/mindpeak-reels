# MindPeak Institute — Internal Link Audit
**Date:** 2026-05-16  
**Audited by:** Claude (automated codebase analysis)  
**Site:** mindpeakinstitute.com

---

## Internal Link Health Score: 52/100

| Metric | Current | Target |
|---|---|---|
| Orphan pages (body content) | 11 | 0 |
| Dead-end pages | 4 | 0 |
| Deep pages (3+ clicks) | ~8 | 0 |
| Broken internal links | 0 | 0 |
| Generic anchor text instances | 12 | 0 |
| Blog posts missing course links | 7/7 | 0/7 |
| Author profiles with no page | 4 | 0 |

---

## Site Structure Map

```
Homepage (/)
├── /jee-coaching              ← Navbar + Footer ✅
│   ├── /jee-main-coaching     ← Footer only ⚠️
│   ├── /jee-advanced-coaching ← Footer only ⚠️
│   ├── /jee-crash-course      ← Footer only ⚠️
│   ├── /jee-dropper-coaching  ← Footer only ⚠️
│   ├── /jee-physics-coaching  ← Footer only ⚠️
│   ├── /jee-chemistry-coaching← Footer only ⚠️
│   └── /jee-mathematics-coaching ← Footer only ⚠️
├── /neet-coaching             ← Navbar + Footer ✅
│   ├── /neet-ug-coaching      ← Footer only ⚠️
│   ├── /neet-crash-course     ← Footer only ⚠️
│   ├── /neet-dropper-coaching ← Footer only ⚠️
│   ├── /neet-biology-coaching ← Footer only ⚠️
│   ├── /neet-physics-coaching ← Footer only ⚠️
│   └── /neet-chemistry-coaching ← Footer only ⚠️
├── /courses                   ← Navbar + Footer ✅
│   └── /course/[slug]         ← Courses page ✅
├── /blog                      ← Navbar + Footer ✅
│   └── /blog/[slug]           ← Blog index ✅ (but no course links inside)
├── /pricing                   ← Navbar + Footer ✅
├── /study-plan                ← Navbar + Footer ✅
├── /contact                   ← Navbar + Footer ✅
├── /free-trial                ← Footer Quick Links only ⚠️
├── /mentors                   ← Footer Important Links only ❌ ORPHAN
├── /success-stories           ← Footer only ❌ ORPHAN
├── /about                     ← Footer only ❌ ORPHAN
├── /methodology               ← CourseDetail sidebar only ❌ ORPHAN
├── /foundation-coaching       ← Footer only ❌ ORPHAN
├── /jee-practice              ← Footer + jee-coaching links ✅
├── /jee-pyq                   ← Footer + jee-coaching links ✅
├── /neet-practice             ← Footer + neet-coaching links ✅
├── /neet-pyq                  ← Footer + neet-coaching links ✅
├── /jee-rank-predictor        ← Footer ✅
├── /neet-rank-predictor       ← Footer ✅
├── /jee-physics-formulas      ← Footer ✅
├── /jee-chemistry-formulas    ← Footer ✅
├── /jee-maths-formulas        ← Footer ✅
├── /neet-biology-formulas     ← Footer ✅
├── /neet-physics-formulas     ← Footer ✅
├── /neet-chemistry-formulas   ← Footer ✅
├── /kota-coaching-alternative ← Footer + Comparison pages ✅
├── /online-vs-offline-jee-coaching ← Footer + Comparison ✅
├── /batch-vs-personal-coaching ← Footer only ⚠️
├── /jee-coaching-in-[city]   ← Footer + jee-coaching links ✅
├── /neet-coaching-in-[city]  ← Footer + neet-coaching links ✅
├── /mindpeak-vs-allen (× 10) ← Footer only ⚠️
├── /neet-ug-2026-cancelled   ← NOTHING ❌ ORPHAN
├── /jee-physics-mechanics    ← Footer only (catch-all) ⚠️
├── /jee-physics-electrodynamics ← Footer only ⚠️
├── /jee-chemistry-organic    ← Footer only ⚠️
├── /jee-math-algebra         ← Footer only ⚠️
├── /terms-and-conditions     ← Footer ✅
└── /refund-policy            ← Footer ✅
```

**Key:**
- ✅ Properly linked from body content
- ⚠️ Only accessible via footer/nav (no body content links)
- ❌ ORPHAN — barely or not linked from any indexed page content

---

## Critical Issues (Fix Immediately)

| # | Issue Type | Page | Problem | Fix |
|---|---|---|---|---|
| 1 | ORPHAN | `/mentors` | Zero body content links. Mentors are a primary E-E-A-T signal. Google has no authority signals pointing here. | Add link from: homepage, all blog posts (AuthorBio), JEECoaching, NEETCoaching |
| 2 | ORPHAN | `/success-stories` | Never linked from body content. Social proof page invisible to crawler. | Link from: homepage CourseFlashcards, blog CTA, JEECoaching hero, NEETCoaching hero |
| 3 | ORPHAN | `/neet-ug-2026-cancelled` | No links pointing to it from anywhere. Completely invisible. | Link from: NEET Coaching page, blog, footer |
| 4 | DEAD-END | All blog posts | Blog posts only link to `/courses` (CTA) and related posts. Zero links to course-specific pages, practice tools, or formula sheets. | Add inline links to course pages within blog content |
| 5 | DEAD-END | Comparison pages (× 10) | Only link to other comparison pages, `/kota-coaching-alternative`, `/online-vs-offline`. No link to `/jee-coaching` or `/neet-coaching`. | Add course links to "Related Comparisons" section |
| 6 | ORPHAN | `/foundation-coaching` | Only in footer "Other Exams" section. Never linked from body content of homepage or course pages. | Link from CourseFlashcards (Foundation card) |
| 7 | CLUSTER GAP | JEE Coaching → Subject pages | `/jee-coaching` body content has NO links to `/jee-physics-coaching`, `/jee-chemistry-coaching`, `/jee-mathematics-coaching` | Add to "Explore More" section |
| 8 | CLUSTER GAP | NEET Coaching → Subject pages | `/neet-coaching` body content has NO links to `/neet-biology-coaching`, `/neet-physics-coaching`, `/neet-chemistry-coaching` | Add to "Explore More" section |
| 9 | ANCHOR TEXT | Blog post CTA | `[Book a free demo class](/courses)` — links to wrong destination. `/courses` is the catalog; `/free-trial` is the conversion page. | Change target to `/free-trial` |
| 10 | ANCHOR TEXT | CourseFlashcards | "View JEE Programs Details" / "View NEET Programs Details" — all link to `/courses` instead of specific landing pages | Change to `/jee-coaching`, `/neet-coaching`, `/foundation-coaching` |
| 11 | MISSING LINK | AuthorBio component | Expert author bio boxes appear on every blog post but have NO links whatsoever — wasted E-E-A-T opportunity | Add link to `/mentors` from AuthorBio |
| 12 | MISSING LINK | Blog index page | Blog CTA links to `/courses`. Should link to `/jee-coaching` and `/neet-coaching` as primary conversion targets | Update Blog.tsx CTA section |

---

## Orphan Pages

| Page URL | Current Incoming Links | Recommended Link From | Anchor Text |
|---|---|---|---|
| `/mentors` | Footer only | AuthorBio component (every blog post), JEECoaching "Explore More", NEETCoaching "Explore More", homepage | "Meet Our Expert JEE & NEET Mentors" |
| `/success-stories` | Footer only | JEECoaching hero section, NEETCoaching hero section, Blog CTA, Homepage CourseFlashcards | "Read Student Success Stories" |
| `/foundation-coaching` | Footer "Other Exams" | CourseFlashcards Foundation card, Homepage | "JEE/NEET Foundation Coaching for Class 6–10" |
| `/methodology` | CourseDetail sidebar only | JEECoaching "Explore More", NEETCoaching "Explore More", Homepage | "Our Adaptive Learning Methodology" |
| `/about` | Footer only | Homepage, Contact page, Blog CTA | "About MindPeak Institute" |
| `/neet-ug-2026-cancelled` | Nothing | NEET Coaching page, Blog, footer | "NEET UG 2026 — Latest Updates" |
| `/free-trial` | Footer Quick Links | All course pages CTA sections (currently use modal), Blog CTA, Homepage | "Book a Free Trial Class" |
| `/jee-physics-coaching` | Footer only | JEECoaching "Explore More" section | "JEE Physics Coaching — 1-on-1 Mentorship" |
| `/jee-chemistry-coaching` | Footer only | JEECoaching "Explore More" section | "JEE Chemistry Coaching — Organic & Inorganic" |
| `/jee-mathematics-coaching` | Footer only | JEECoaching "Explore More" section | "JEE Mathematics Coaching — Calculus & Algebra" |
| `/neet-biology-coaching` | Footer only | NEETCoaching "Explore More" section | "NEET Biology Coaching — NCERT Deep Dive" |
| `/neet-physics-coaching` | Footer only | NEETCoaching "Explore More" section | "NEET Physics Coaching — Numericals & Concepts" |
| `/neet-chemistry-coaching` | Footer only | NEETCoaching "Explore More" section | "NEET Chemistry Coaching — Organic & Inorganic" |

---

## Topic Cluster Link Map

### JEE Physics Cluster — Pillar: `/jee-physics-coaching`

| Link | Status | Action |
|---|---|---|
| `/jee-coaching` → `/jee-physics-coaching` | ❌ Missing | Add to JEECoaching "Explore More" section |
| `/jee-physics-coaching` → `/jee-physics-formulas` | ⚠️ Via footer only | Add inline body content link |
| `/jee-physics-coaching` → `/jee-practice` (Physics) | ❌ Missing | Add contextual link |
| `/jee-physics-coaching` → `/jee-pyq` | ❌ Missing | Add contextual link |
| `/jee-physics-coaching` → `/free-trial` | ❌ Missing | Add CTA link |
| Blog (chemistry-organic) → `/jee-physics-coaching` | ❌ Missing | Add inline link |
| `/jee-physics-mechanics` → `/jee-physics-coaching` | ❌ Missing | Add parent link |
| `/jee-physics-electrodynamics` → `/jee-physics-coaching` | ❌ Missing | Add parent link |
| Author Dr. Ananya Sharma → any page | ❌ Missing | Add link from AuthorBio to `/mentors` |

### JEE Chemistry Cluster — Pillar: `/jee-chemistry-coaching`

| Link | Status | Action |
|---|---|---|
| `/jee-coaching` → `/jee-chemistry-coaching` | ❌ Missing | Add to JEECoaching "Explore More" |
| `/jee-chemistry-coaching` → `/jee-chemistry-formulas` | ⚠️ Via footer | Add body link |
| `/jee-chemistry-coaching` → `/jee-chemistry-organic` | ❌ Missing | Add contextual link |
| Blog (chemistry-organic) → `/jee-chemistry-coaching` | ❌ Missing | Add inline blog link |
| Author Vikram Patel → any page | ❌ Missing | Add link from AuthorBio to `/mentors` |

### JEE Mathematics Cluster — Pillar: `/jee-mathematics-coaching`

| Link | Status | Action |
|---|---|---|
| `/jee-coaching` → `/jee-mathematics-coaching` | ❌ Missing | Add to JEECoaching "Explore More" |
| `/jee-mathematics-coaching` → `/jee-maths-formulas` | ⚠️ Via footer | Add body link |
| Blog posts → `/jee-mathematics-coaching` | ❌ Missing | Add inline links |
| Author Rajesh Kumar → any page | ❌ Missing | Add link from AuthorBio to `/mentors` |

### NEET Biology Cluster — Pillar: `/neet-biology-coaching`

| Link | Status | Action |
|---|---|---|
| `/neet-coaching` → `/neet-biology-coaching` | ❌ Missing | Add to NEETCoaching "Explore More" |
| `/neet-biology-coaching` → `/neet-biology-formulas` | ⚠️ Via footer | Add body link |
| `/neet-biology-coaching` → `/neet-practice` | ❌ Missing | Add contextual link |
| Blog (neet-biology-preparation-guide) → `/neet-biology-coaching` | ❌ Missing | Add inline link |
| Author Dr. Priya Nair → any page | ❌ Missing | Add link from AuthorBio to `/mentors` |

### Resources Cluster

| Link | Status | Action |
|---|---|---|
| `/jee-physics-formulas` → `/jee-coaching` | ❌ Missing | Add CTA link |
| `/jee-practice` → `/jee-coaching` | ⚠️ Via breadcrumb home only | Add explicit body link |
| `/neet-practice` → `/neet-coaching` | ⚠️ Via breadcrumb home only | Add explicit body link |
| Blog posts → `/jee-practice` | ❌ Missing | Add in blog content |
| Blog posts → `/jee-physics-formulas` | ❌ Missing | Add in blog content |

---

## Anchor Text Improvements

| Page | Current Anchor | Improved Anchor | Link Target |
|---|---|---|---|
| Blog post (JEE tips) content | `[Book a free demo class]` | `[Start your 1-on-1 JEE coaching journey]` | `/free-trial` |
| CourseFlashcards — JEE card | `View JEE Programs Details` | `Explore JEE Coaching — Main & Advanced` | `/jee-coaching` |
| CourseFlashcards — NEET card | `View NEET Programs Details` | `Explore NEET Coaching — 1-on-1 Mentorship` | `/neet-coaching` |
| CourseFlashcards — Foundation | `View Foundation Details` | `Explore Foundation Coaching — Class 6–10` | `/foundation-coaching` |
| Blog CTA | `Explore Courses` | `Explore JEE & NEET Coaching Programs` | `/courses` |
| AuthorBio (all) | *(no link)* | `View all MindPeak mentors` | `/mentors` |
| JEECoaching "Explore More" | *(missing)* | `JEE Physics Coaching` | `/jee-physics-coaching` |
| JEECoaching "Explore More" | *(missing)* | `JEE Chemistry Coaching` | `/jee-chemistry-coaching` |
| JEECoaching "Explore More" | *(missing)* | `JEE Mathematics Coaching` | `/jee-mathematics-coaching` |
| NEETCoaching "Explore More" | *(missing)* | `NEET Biology Coaching` | `/neet-biology-coaching` |
| NEETCoaching "Explore More" | *(missing)* | `NEET Physics Coaching` | `/neet-physics-coaching` |
| NEETCoaching "Explore More" | *(missing)* | `NEET Chemistry Coaching` | `/neet-chemistry-coaching` |
| Comparison pages | *(no course link)* | `View our JEE Coaching Program` | `/jee-coaching` |
| Comparison pages | *(no course link)* | `View our NEET Coaching Program` | `/neet-coaching` |

---

## New Links to Add (Prioritized — Top 20 This Week)

| # | From Page | To Page | Anchor Text | Priority | File |
|---|---|---|---|---|---|
| 1 | `AuthorBio.tsx` (all blog posts) | `/mentors` | "View all MindPeak mentors →" | 🔴 CRITICAL | `src/components/AuthorBio.tsx` |
| 2 | `CourseFlashcards` JEE card | `/jee-coaching` | "Explore JEE Coaching — Main & Advanced" | 🔴 CRITICAL | `src/components/sections/CourseFlashcards.tsx` |
| 3 | `CourseFlashcards` NEET card | `/neet-coaching` | "Explore NEET Coaching — 1-on-1 Mentorship" | 🔴 CRITICAL | `src/components/sections/CourseFlashcards.tsx` |
| 4 | `CourseFlashcards` Foundation card | `/foundation-coaching` | "Explore Foundation Coaching — Class 6–10" | 🔴 CRITICAL | `src/components/sections/CourseFlashcards.tsx` |
| 5 | `JEECoaching.tsx` "Explore More" | `/jee-physics-coaching` | "JEE Physics Coaching" | 🔴 CRITICAL | `src/views/JEECoaching.tsx` |
| 6 | `JEECoaching.tsx` "Explore More" | `/jee-chemistry-coaching` | "JEE Chemistry Coaching" | 🔴 CRITICAL | `src/views/JEECoaching.tsx` |
| 7 | `JEECoaching.tsx` "Explore More" | `/jee-mathematics-coaching` | "JEE Mathematics Coaching" | 🔴 CRITICAL | `src/views/JEECoaching.tsx` |
| 8 | `JEECoaching.tsx` "Explore More" | `/mentors` | "Meet Our JEE Mentors" | 🔴 CRITICAL | `src/views/JEECoaching.tsx` |
| 9 | `JEECoaching.tsx` "Explore More" | `/success-stories` | "Student Success Stories" | 🟠 HIGH | `src/views/JEECoaching.tsx` |
| 10 | `NEETCoaching.tsx` "Explore More" | `/neet-biology-coaching` | "NEET Biology Coaching" | 🔴 CRITICAL | `src/views/NEETCoaching.tsx` |
| 11 | `NEETCoaching.tsx` "Explore More" | `/neet-physics-coaching` | "NEET Physics Coaching" | 🔴 CRITICAL | `src/views/NEETCoaching.tsx` |
| 12 | `NEETCoaching.tsx` "Explore More" | `/neet-chemistry-coaching` | "NEET Chemistry Coaching" | 🔴 CRITICAL | `src/views/NEETCoaching.tsx` |
| 13 | `NEETCoaching.tsx` "Explore More" | `/mentors` | "Meet Our NEET Mentors" | 🔴 CRITICAL | `src/views/NEETCoaching.tsx` |
| 14 | Blog post (JEE tips) | `/jee-coaching` | "personalized 1-on-1 JEE coaching" | 🟠 HIGH | `src/data/blogData.ts` |
| 15 | Blog post (NEET biology) | `/neet-coaching` | "1-on-1 NEET coaching" | 🟠 HIGH | `src/data/blogData.ts` |
| 16 | Blog post (chemistry) | `/jee-chemistry-coaching` | "JEE Chemistry coaching program" | 🟠 HIGH | `src/data/blogData.ts` |
| 17 | `ComparisonPage.tsx` | `/jee-coaching` | "View our JEE Coaching Program" | 🟠 HIGH | `src/views/ComparisonPage.tsx` |
| 18 | `ComparisonPage.tsx` | `/neet-coaching` | "View our NEET Coaching Program" | 🟠 HIGH | `src/views/ComparisonPage.tsx` |
| 19 | `Blog.tsx` CTA | `/jee-coaching` | "Explore JEE Coaching" | 🟡 MEDIUM | `src/views/Blog.tsx` |
| 20 | `Blog.tsx` CTA | `/neet-coaching` | "Explore NEET Coaching" | 🟡 MEDIUM | `src/views/Blog.tsx` |

---

## Blog Post Internal Links (Detailed)

Every blog post should contain:
- ≥ 2 links to relevant course pages
- ≥ 1 link to a resource page (formula sheet / practice / PYQ)
- ≥ 1 link to the `/free-trial` or `/contact` (conversion link)
- ≥ 1 link to a related blog post (already handled by the "Related Articles" section)

### Current state vs target:

| Post | Course Link | Resource Link | Conversion Link | Related Posts |
|---|---|---|---|---|
| JEE Preparation Tips | `/courses` (generic) | ❌ | ❌ | ✅ (auto) |
| NEET Biology Guide | ❌ | ❌ | ❌ | ✅ (auto) |
| Time Management | ❌ | ❌ | ❌ | ✅ (auto) |
| Organic Chemistry | ❌ | ❌ | ❌ | ✅ (auto) |
| NEET Physics Numericals | ❌ | ❌ | ❌ | ✅ (auto) |
| Revision Strategies | ❌ | ❌ | ❌ | ✅ (auto) |
| JEE vs NEET | ❌ | ❌ | ❌ | ✅ (auto) |

**All 7 posts are missing course-specific and resource links.**

---

## Breadcrumb Implementation

Breadcrumbs are **already implemented** site-wide:
- UI component: `src/components/ui/breadcrumb.tsx` ✅
- Schema generator: `src/lib/breadcrumbSchema.ts` ✅
- HTML breadcrumbs: present in JEECoaching, NEETCoaching, Blog, BlogPost, Contact, ComparisonPage, all practice/PYQ pages ✅
- JSON-LD breadcrumb schema: present in JEECoaching, NEETCoaching, BlogPost ✅

**Breadcrumb gaps found:**
- `/free-trial` — has breadcrumb but shows only "Home / Free Trial" with no link to parent `/courses`
- `/methodology`, `/success-stories`, `/mentors`, `/about` — use SEOLandingPage template which renders a standard breadcrumb ✅

---

## Components to Create / Update

### 1. CourseLinks component for blog posts (recommended)

A `src/components/CourseLinks.tsx` component that renders 2–3 contextual course links at the end of a blog post article, above the CTA band. Different links shown based on post category (JEE vs NEET).

```tsx
// src/components/CourseLinks.tsx
import { Link } from '@/components/RouterLink';
import { ArrowRight } from 'lucide-react';

type PostCategory = 'JEE' | 'NEET' | 'Study Tips' | 'Exam Strategy' | 'General';

const jeeLinks = [
  { to: '/jee-coaching', label: 'JEE 1-on-1 Coaching Program', tag: 'Main Course' },
  { to: '/jee-physics-coaching', label: 'JEE Physics — Dedicated Mentor', tag: 'Physics' },
  { to: '/jee-practice', label: 'Free JEE Practice Questions', tag: 'Free Tool' },
];

const neetLinks = [
  { to: '/neet-coaching', label: 'NEET 1-on-1 Coaching Program', tag: 'Main Course' },
  { to: '/neet-biology-coaching', label: 'NEET Biology — NCERT Deep Dive', tag: 'Biology' },
  { to: '/neet-practice', label: 'Free NEET Practice Questions', tag: 'Free Tool' },
];

const generalLinks = [
  { to: '/jee-coaching', label: 'JEE Personalized Coaching', tag: 'JEE' },
  { to: '/neet-coaching', label: 'NEET Personalized Coaching', tag: 'NEET' },
  { to: '/courses', label: 'All Coaching Programs', tag: 'Explore' },
];

export function CourseLinks({ category }: { category: PostCategory }) {
  const links = category === 'JEE' ? jeeLinks : category === 'NEET' ? neetLinks : generalLinks;
  return (
    <div className="rounded-xl border border-border bg-secondary/20 p-5 my-8">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Related Courses</p>
      <div className="space-y-2">
        {links.map(l => (
          <Link key={l.to} to={l.to} className="flex items-center justify-between p-3 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors group">
            <div className="flex items-center gap-3">
              <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">{l.tag}</span>
              <span className="text-sm text-foreground group-hover:text-primary transition-colors">{l.label}</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
}
```

---

## Implementation Summary (Changes Made in This Audit)

The following code changes were applied as part of this audit:

1. **`AuthorBio.tsx`** — Added "Meet all our mentors →" link to `/mentors` in both compact and full variants
2. **`CourseFlashcards.tsx`** — Changed card links from generic `/courses` to specific landing pages (`/jee-coaching`, `/neet-coaching`, `/foundation-coaching`)
3. **`JEECoaching.tsx`** — Added 5 new links to "Explore More" section: `jee-physics-coaching`, `jee-chemistry-coaching`, `jee-mathematics-coaching`, `mentors`, `success-stories`
4. **`NEETCoaching.tsx`** — Added 5 new links to "Explore More" section: `neet-biology-coaching`, `neet-physics-coaching`, `neet-chemistry-coaching`, `mentors`, `success-stories`
5. **`blogData.ts`** — Added internal links to relevant course/resource pages in all 7 blog post markdown content bodies
6. **`Blog.tsx`** — Updated CTA section to include separate links to `/jee-coaching` and `/neet-coaching` alongside the existing "Book Demo" button
7. **`ComparisonPage.tsx`** — Added course landing page links to the "Related Comparisons" section

**Estimated SEO impact:** Internal PageRank redistribution will lift `/mentors`, `/success-stories`, subject coaching pages, and formula sheet pages from near-zero authority to proportional site authority within 2–4 crawl cycles.

---

## Footer Analysis

The footer currently has **~110 internal links** across 9 categories. This is on the high end but acceptable for a large content site. Key observations:

- ✅ All major page categories represented
- ✅ City pages well-represented (11 JEE + 10 NEET cities)
- ✅ Comparison pages well-represented (8 links)
- ⚠️ `/success-stories` is in "Important Links" but easy to miss
- ⚠️ `/mentors` is in "Important Links" but easy to miss
- ❌ `/foundation-coaching` is under "Other Exams" — confusing categorization
- ❌ `/about` is NOT in the footer at all — add it

**Recommended footer change:** Move `/success-stories` and `/mentors` to the "Quick Links" section alongside Courses, Pricing, Blog, Contact.

---

## 30-Day Action Plan

### Week 1 (Done in this audit — code changes committed)
- [x] Fix CourseFlashcards to link to specific course pages
- [x] Add author bio links to /mentors
- [x] Add subject coaching links to JEECoaching and NEETCoaching
- [x] Add course links to all blog posts
- [x] Add course links to Blog index CTA
- [x] Add course links to ComparisonPage

### Week 2 (Manual)
- [ ] Create individual author profile pages at `/mentors/dr-ananya-sharma`, `/mentors/rajesh-kumar`, etc.
- [ ] Update AuthorBio to link to individual profiles once created
- [ ] Add `/about` to footer
- [ ] Move `/success-stories` to Quick Links in footer
- [ ] Add link to `/neet-ug-2026-cancelled` from NEET Coaching page

### Week 3 (Content)
- [ ] Add 3–4 links per blog post to related blog posts (beyond the auto "Related Articles")
- [ ] Add breadcrumb-style subject navigation to `/jee-physics-coaching`, `/jee-chemistry-coaching`, etc.
- [ ] Create a hub page for formula sheets and link from course pages

### Week 4 (Audit)
- [ ] Re-crawl and verify all orphan pages now have 3+ incoming links
- [ ] Check Google Search Console for improved crawl coverage
- [ ] Verify breadcrumb schema validates in Rich Results Test
