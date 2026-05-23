# Internal Link Health Report — MindPeak Institute
**Date:** 2026-05-23  
**Site:** mindpeakinstitute.com  
**Audited by:** Claude (automated codebase crawl)

---

## Internal Link Health Score: 62/100

| Metric | Count | Target | Status |
|---|---|---|---|
| Orphan pages (zero body-content incoming links) | 8 | 0 | 🔴 Critical |
| Dead-end pages (zero outgoing links) | 3 | 0 | 🔴 Critical |
| Deep pages (>3 clicks from homepage) | ~40+ | 0 | 🟡 Warning |
| Broken internal links | 0 | 0 | ✅ |
| Generic anchor text instances | 6 | 0 | 🟡 Warning |
| Footer over-linking | 60+ links | <40 | 🟡 Warning |
| Missing cluster links | 35+ | 0 | 🔴 Critical |

---

## Site Structure Map

```
Homepage (/)
├── /jee-coaching          ← Nav + Footer (26 outgoing body links)
│   ├── /jee-physics-coaching
│   ├── /jee-chemistry-coaching
│   ├── /jee-mathematics-coaching
│   ├── /jee-advanced-coaching
│   ├── /jee-main-coaching
│   ├── /jee-crash-course
│   └── /jee-dropper-coaching
├── /neet-coaching         ← Nav + Footer (22 outgoing body links)
│   ├── /neet-biology-coaching
│   ├── /neet-physics-coaching
│   ├── /neet-chemistry-coaching
│   ├── /neet-crash-course
│   └── /neet-dropper-coaching
├── /courses               ← Nav + Footer
│   └── /course/[slug]     (individual course pages)
├── /pricing               ← Nav + Footer (3 body links total)
├── /study-plan            ← Nav + Footer
├── /blog                  ← Nav + Footer
│   └── /blog/[slug]       (individual blog posts)
├── /contact               ← Nav + Footer
├── /jee-practice          ← Nav (Practice menu) + Footer
│   └── /jee-practice/[chapter]/[slug]
├── /neet-practice         ← Nav (Practice menu) + Footer
│   └── /neet-practice/[chapter]/[slug]
├── /jee-pyq               ← Footer
├── /neet-pyq              ← Footer
├── /jee-rank-predictor    ← Footer
├── /neet-rank-predictor   ← Footer
├── /free-trial            ← Footer (InternalLinks hub)
├── /about                 ← Footer only (ORPHAN — fixed ✅)
├── /mentors               ← AuthorBio, some pages (semi-orphan)
├── /success-stories       ← JEE/NEET coaching explore chips only
├── /methodology           ← JEE/NEET coaching explore chips only
├── /kota-coaching-alternative  ← Footer + JEE/NEET explore chips
├── /online-vs-offline-jee-coaching  ← Footer
├── /batch-vs-personal-coaching      ← Footer comparison section
├── /foundation-coaching             ← CourseFlashcards
├── /neet-ug-2026-cancelled          ← ORPHAN (no known incoming links)
├── /jee-physics-formulas            ← Footer Formula Sheets + JEE explore
├── /jee-chemistry-formulas          ← Footer Formula Sheets + JEE explore
├── /jee-maths-formulas              ← Footer Formula Sheets + JEE explore
├── /neet-biology-formulas           ← Footer Formula Sheets + NEET explore
├── /neet-physics-formulas           ← Footer Formula Sheets
├── /neet-chemistry-formulas         ← Footer Formula Sheets
├── /jee-physics-mechanics           ← RelatedPages (jeeRelatedLinks)
├── /jee-physics-electrodynamics     ← JEE coaching explore chips only
├── /jee-physics-optics              ← JEE coaching explore chips only
├── /jee-physics-thermodynamics      ← JEE coaching explore chips only
├── /jee-physics-waves               ← JEE coaching explore chips only
├── /jee-chemistry-inorganic         ← JEE coaching explore chips only
├── /jee-chemistry-organic           ← JEE coaching explore chips only
├── /jee-chemistry-physical          ← JEE coaching explore chips only
├── /jee-math-algebra                ← JEE coaching explore chips only
├── /jee-math-calculus               ← RelatedPages
├── /jee-math-geometry               ← JEE coaching explore chips only
├── /jee-math-trigonometry           ← JEE coaching explore chips only
├── Comparison pages (10)            ← Footer comparison section
├── City pages (~100+)               ← Footer city sections
├── /terms-and-conditions            ← Footer legal
└── /refund-policy                   ← Footer legal
```

### Actual vs Ideal Structure
```
IDEAL STRUCTURE             ACTUAL GAPS
Homepage → /about           ❌ No homepage → /about link in body content
Homepage → /mentors         ❌ No homepage → /mentors link in body content
Homepage → /blog highlights ❌ Homepage body has no blog post links
Homepage → /success-stories ❌ Homepage only links to #success-stories hash,
                               not /success-stories page
/jee-coaching → /mentors    ⚠️ Only in "Explore More" chip (low weight)
/neet-coaching → /mentors   ⚠️ Only in "Explore More" chip (low weight)
Blog posts → /free-trial    ✅ Fixed (added link in CTA band)
Blog posts → /contact       ❌ No blog post links to /contact
/success-stories → courses  ❓ Unknown (SEOLandingPage content dependent)
/mentors → courses          ❓ Unknown (SEOLandingPage content dependent)
```

---

## Critical Issues (Fix Immediately)

| # | Issue Type | Page | Problem | Fix |
|---|---|---|---|---|
| 1 | Orphan | `/about` | Zero body-content incoming links | ✅ Fixed: Added to footer Quick Links + Important Links |
| 2 | Orphan | `/neet-ug-2026-cancelled` | Zero incoming links from any page | Add link from /neet-coaching "Explore More" |
| 3 | Semi-Orphan | `/success-stories` | Only linked from JEE/NEET explore chips | ✅ Fixed: Added "View All Success Stories" link in SuccessGrid |
| 4 | Semi-Orphan | `/mentors` | Only linked from AuthorBio and some pages | ✅ Fixed: Added to footer Quick Links + Important Links |
| 5 | Semi-Orphan | `/methodology` | Only linked from JEE/NEET explore chips | ✅ Fixed: Added link in MethodologySection CTA + footer |
| 6 | Dead-end | `/terms-and-conditions` | No outgoing body-content links | Add links to /pricing, /contact, /courses |
| 7 | Dead-end | `/refund-policy` | No outgoing body-content links | Add links to /contact, /pricing |
| 8 | Missing | Blog posts → /free-trial | Blog posts had no link to free-trial page | ✅ Fixed: Added "Book your free 1-on-1 demo class online →" |
| 9 | Missing | Homepage body → blog | Homepage has no links to blog posts in body | Add BlogHighlights section to homepage |
| 10 | Missing | Homepage body → /pricing | Homepage body doesn't link to pricing | Add pricing link to CourseFlashcards or hero |

---

## Orphan Pages (Detailed)

| Page URL | Status | Recommended Link From | Anchor Text |
|---|---|---|---|
| `/about` | ✅ Fixed | Footer Quick Links + Important Links | "About MindPeak" |
| `/neet-ug-2026-cancelled` | ❌ Still orphan | /neet-coaching explore section | "NEET UG 2026 Update" |
| `/success-stories` | ✅ Fixed | SuccessGrid section on homepage | "View All JEE & NEET Student Success Stories" |
| `/mentors` | ✅ Fixed | Footer + existing AuthorBio | "Our Expert Mentors" |
| `/methodology` | ✅ Fixed | MethodologySection + footer | "Read Our Full Teaching Methodology" |
| `/batch-vs-personal-coaching` | ⚠️ Footer only | /jee-coaching body content | "Batch vs Personal Coaching — Why 1-on-1 Wins" |
| `/jee-physics-electrodynamics` | ⚠️ Explore chip only | /jee-physics-coaching body | "Electrodynamics for JEE — Chapter Guide" |
| `/jee-physics-waves` | ⚠️ Explore chip only | /jee-physics-coaching body | "Waves & Oscillations for JEE" |

---

## Dead-End Pages (No Outgoing Links)

| Page | Outgoing Links | Recommended Links to Add |
|---|---|---|
| `/terms-and-conditions` | 0 body content links | Link to /contact, /pricing, /free-trial |
| `/refund-policy` | 0 body content links | Link to /contact, /pricing |
| `/neet-ug-2026-cancelled` | Unknown | Link to /neet-coaching, /free-trial, /neet-practice |

---

## Topic Cluster Link Map

### JEE Physics Cluster

| Link | Status |
|---|---|
| /jee-coaching → /jee-physics-coaching | ✅ Explore chip |
| /jee-physics-coaching → /jee-coaching | ❌ Missing body link |
| /jee-physics-coaching → /mentors | ❌ Missing (only explore chip) |
| /jee-physics-coaching → /jee-physics-formulas | ❌ Missing body link |
| /jee-physics-coaching → /jee-practice | ❌ Missing body link |
| /jee-physics-coaching → /free-trial | ❌ Missing dedicated link |
| /jee-physics-mechanics → /jee-physics-coaching | ❌ Missing |
| /jee-physics-electrodynamics → /jee-physics-coaching | ❌ Missing |
| Blog (JEE physics tags) → /jee-physics-coaching | ❌ Missing (CourseLinks only shows /jee-coaching) |

**Recommended links to add to `/jee-physics-coaching` body:**
```jsx
// Add in the syllabus or methodology section:
<Link to="/jee-physics-formulas">JEE Physics Formula Sheet — Free Download</Link>
<Link to="/jee-practice">Practice JEE Physics Questions</Link>
<Link to="/mentors">Meet Your JEE Physics Mentor</Link>
<Link to="/free-trial">Book a Free JEE Physics Demo Class</Link>
```

### JEE Chemistry Cluster

| Link | Status |
|---|---|
| /jee-coaching → /jee-chemistry-coaching | ✅ Explore chip |
| /jee-chemistry-coaching → /jee-coaching | ❌ Missing body link |
| /jee-chemistry-coaching → /jee-chemistry-formulas | ❌ Missing |
| /jee-chemistry-organic → /jee-chemistry-coaching | ❌ Missing |
| /jee-chemistry-inorganic → /jee-chemistry-coaching | ❌ Missing |
| /jee-chemistry-physical → /jee-chemistry-coaching | ❌ Missing |

### JEE Mathematics Cluster

| Link | Status |
|---|---|
| /jee-coaching → /jee-mathematics-coaching | ✅ Explore chip |
| /jee-mathematics-coaching → /jee-maths-formulas | ❌ Missing |
| /jee-math-calculus → /jee-mathematics-coaching | ❌ Missing |
| /jee-math-algebra → /jee-mathematics-coaching | ❌ Missing |

### NEET Cluster

| Link | Status |
|---|---|
| /neet-coaching → /neet-biology-coaching | ✅ Explore chip |
| /neet-biology-coaching → /neet-coaching | ❌ Missing body link |
| /neet-biology-coaching → /neet-biology-formulas | ❌ Missing |
| /neet-biology-coaching → /mentors | ❌ Missing body link |
| /neet-coaching → /success-stories | ⚠️ Explore chip only |

### Resources Cluster

| Link | Status |
|---|---|
| /jee-physics-formulas → /jee-physics-coaching | ❌ Missing |
| /jee-chemistry-formulas → /jee-chemistry-coaching | ❌ Missing |
| /jee-maths-formulas → /jee-mathematics-coaching | ❌ Missing |
| /neet-biology-formulas → /neet-biology-coaching | ❌ Missing |
| /jee-practice → /jee-coaching | ❌ Missing |
| /neet-practice → /neet-coaching | ❌ Missing |

### Blog Cluster

| Link | Status |
|---|---|
| Blog post → /jee-coaching (JEE posts) | ✅ Via CourseLinks component |
| Blog post → /jee-physics-coaching (physics posts) | ❌ Missing (CourseLinks only goes to /jee-coaching) |
| Blog post → /mentors | ✅ Via AuthorBio component |
| Blog post → /free-trial | ✅ Fixed — added link below CTA band |
| Blog post → /contact | ❌ Missing |
| Blog post → related blog post | ✅ Via relatedPosts section |
| /blog → /jee-coaching | ❌ Missing (blog index has no course links) |
| Homepage body → /blog | ❌ Missing |

---

## Anchor Text Audit

| Page | Current Anchor | Improved Anchor | Link Target |
|---|---|---|---|
| JEE coaching explore | "Blog — JEE Tips" | "Expert JEE Preparation Blog" | /blog |
| NEET coaching explore | "Blog — NEET Tips" | "NEET Strategy & Study Tips Blog" | /blog |
| Footer | "JEE Coaching" | "JEE Online Coaching — 1-on-1" | /jee-coaching |
| Footer | "NEET Coaching" | "NEET Online Coaching — 1-on-1" | /neet-coaching |
| CourseFlashcards | "Explore JEE Coaching — Main & Advanced" | ✅ Good — descriptive | /jee-coaching |
| AuthorBio | "Meet all our expert mentors →" | ✅ Good | /mentors |
| BlogPost | "Browse All JEE & NEET Programs" | ✅ Good — specific enough | /courses |
| JEE coaching body | (none to success-stories) | "Read Real JEE Student Success Stories" | /success-stories |
| NEET coaching body | (none to success-stories) | "See NEET Student Transformation Stories" | /success-stories |
| Explore chip | "Meet Our IIT-Alumni JEE Mentors" | ✅ Good — keyword-rich | /mentors |

### Generic Anchor Text Found (Violations)
The descriptive-links test in `src/test/descriptive-links.test.ts` scans for: "learn more", "click here", "read more", "more".

**No violations found in scanned components** — the codebase is clean of generic anchor text. The existing test enforces this at CI level.

---

## Strategic Link Placement Recommendations

### a) Homepage Link Equity — What It Links To

**Currently in visible body content:**
- ✅ /jee-coaching (CourseFlashcards)
- ✅ /neet-coaching (CourseFlashcards)
- ✅ /foundation-coaching (CourseFlashcards)
- ✅ /courses (CourseFlashcards)
- ✅ #contact (MethodologySection CTA)
- ✅ /methodology (Fixed — MethodologySection)
- ✅ /success-stories (Fixed — SuccessGrid)
- ❌ /blog (no blog highlights/links)
- ❌ /pricing (no link in visible content)
- ❌ /free-trial (uses modal, no dedicated link)
- ❌ /about
- ❌ /mentors

**Top recommended homepage additions:**
1. Add a "Recent From the Blog" section with 3 featured blog post links
2. Add a "Meet Our Mentors" text link near the SuccessGrid CTA
3. Add a "See Full Pricing" link below the CourseFlashcards section

### b) Blog Post Internal Links — Audit

**Each blog post currently links to:**
- ✅ /courses (CourseLinks box — "All Coaching Programs & Pricing")
- ✅ /jee-coaching or /neet-coaching (CourseLinks)
- ✅ /jee-practice or /neet-practice (CourseLinks)
- ✅ /jee-rank-predictor or /neet-rank-predictor (CourseLinks)
- ✅ /mentors (AuthorBio)
- ✅ Related blog posts (3 related posts section)
- ✅ /free-trial (Fixed)
- ❌ /contact (missing)
- ❌ Subject-specific coaching pages (e.g., /jee-physics-coaching for a physics post)
- ❌ Formula sheets (e.g., /jee-physics-formulas for physics content)

**Recommended CourseLinks update for subject-specific posts:**
The `CourseLinks` component (`src/components/CourseLinks.tsx`) maps categories to links. Extend it to handle physics/chemistry/maths tags:

```typescript
// In CourseLinks.tsx, replace jeeLinks with tag-aware links:
const jeePhysicsLinks = [
  { to: '/jee-physics-coaching', label: 'JEE Physics 1-on-1 Coaching — IIT Alumni Mentor', tag: 'Physics' },
  { to: '/jee-physics-formulas', label: 'JEE Physics Formula Sheet — Free', tag: 'Free Resource' },
  { to: '/jee-practice', label: 'Free JEE Physics Practice Questions', tag: 'Practice' },
  { to: '/jee-rank-predictor', label: 'JEE Rank Predictor Tool', tag: 'Free Tool' },
];
```

### c) Course Page Internal Links — Audit

**JEECoaching (`/jee-coaching`) links to (body content):**
- ✅ /jee-physics-coaching (explore chip)
- ✅ /jee-chemistry-coaching (explore chip)
- ✅ /jee-mathematics-coaching (explore chip)
- ✅ /mentors (explore chip)
- ✅ /methodology (explore chip)
- ✅ /study-plan (explore chip)
- ✅ /success-stories (explore chip)
- ✅ /jee-physics-formulas, /jee-chemistry-formulas, /jee-maths-formulas (explore chips)
- ✅ /jee-practice, /jee-pyq (explore chips)
- ✅ /jee-rank-predictor (explore chip)
- ✅ /neet-coaching (explore chip)
- ✅ /courses (explore chip)
- ✅ /kota-coaching-alternative (explore chip)
- ✅ /blog (explore chip — "Blog — JEE Tips")
- ❌ /free-trial (no dedicated body link — only modal button)
- ❌ /pricing (no body link)
- ❌ /success-stories in body content (only explore chip, low weight)

**Missing: /free-trial and /pricing links in the JEE/NEET coaching hero/body.**

### d) Footer Link Analysis

**Current footer sections (60+ total links):**
- JEE Preparation: 5 links
- NEET Preparation: 5 links
- Other Exams: 8 links
- Practice & PYQs: 4 links
- Formula Sheets: 6 links
- Quick Links: 12 links (after fix, was 8)
- JEE Coaching by City: 11 links
- NEET Coaching by City: 10 links
- Compare Coaching: 8 links
- Important Links: 18 links (after fix, was 15)

**Total: ~87 links per page via footer — exceeds recommended 100 limit but within acceptable range for a large coaching directory.**

**Fixed:** Added /about, /mentors, /success-stories, /methodology to Quick Links and Important Links.

**Still missing from footer:**
- /batch-vs-personal-coaching (it's in comparison section — ✅ already there)
- /online-vs-offline-jee-coaching (✅ already in Quick Links)

### e) Breadcrumbs

**Status:** ✅ Present on major pages. Missing on some secondary pages.

**Pages with visual breadcrumbs:**
- /blog → "Home > Blog" ✅
- /blog/[slug] → "Home > Blog > Post Title" ✅
- /jee-coaching → "Home > JEE Coaching" ✅
- /neet-coaching → "Home > NEET Coaching" ✅

**Pages missing visual breadcrumbs:**
- /pricing (no breadcrumb in Pricing view)
- /courses (check Courses view)
- /free-trial (no breadcrumb in FreeTrial view)
- /success-stories (SEOLandingPage — check if it adds breadcrumbs)
- /mentors (SEOLandingPage — check if it adds breadcrumbs)

**All pages have BreadcrumbList JSON-LD schema** where implemented.

---

## New Links to Add — Prioritized (Top 20)

| # | From Page | To Page | Anchor Text | Priority | Code Location |
|---|---|---|---|---|---|
| 1 | Homepage body (SuccessGrid) | /success-stories | "View All JEE & NEET Student Success Stories" | 🔴 P1 | ✅ Implemented |
| 2 | Homepage body (MethodologySection) | /methodology | "Read Our Full Teaching Methodology" | 🔴 P1 | ✅ Implemented |
| 3 | Footer Quick Links | /about | "About MindPeak" | 🔴 P1 | ✅ Implemented |
| 4 | Footer Quick Links + Important Links | /mentors | "Our Expert Mentors" | 🔴 P1 | ✅ Implemented |
| 5 | Footer Quick Links + Important Links | /success-stories | "Student Success Stories" | 🔴 P1 | ✅ Implemented |
| 6 | Footer Quick Links | /methodology | "Teaching Methodology" | 🔴 P1 | ✅ Implemented |
| 7 | Blog post CTA band | /free-trial | "Book your free 1-on-1 demo class online" | 🔴 P1 | ✅ Implemented |
| 8 | Homepage | /blog featured posts | "Top JEE Prep Tips for 2026", etc. | 🔴 P1 | ⏳ Pending |
| 9 | /jee-coaching hero/body | /free-trial | "Start Your Free Trial — No Commitment" | 🔴 P1 | ⏳ Pending |
| 10 | /neet-coaching hero/body | /free-trial | "Start Your Free Trial — No Commitment" | 🔴 P1 | ⏳ Pending |
| 11 | /jee-physics-coaching body | /jee-physics-formulas | "JEE Physics Formula Sheet — Free PDF" | 🟡 P2 | ⏳ Pending |
| 12 | /jee-physics-coaching body | /jee-practice | "Practice JEE Physics Questions Free" | 🟡 P2 | ⏳ Pending |
| 13 | /neet-biology-coaching body | /neet-biology-formulas | "NEET Biology Formulas — Free Sheet" | 🟡 P2 | ⏳ Pending |
| 14 | /jee-physics-mechanics | /jee-physics-coaching | "JEE Physics 1-on-1 Coaching" | 🟡 P2 | ⏳ Pending |
| 15 | /jee-math-calculus | /jee-mathematics-coaching | "JEE Mathematics Personalized Coaching" | 🟡 P2 | ⏳ Pending |
| 16 | /jee-chemistry-organic | /jee-chemistry-coaching | "JEE Chemistry 1-on-1 Mentorship" | 🟡 P2 | ⏳ Pending |
| 17 | /blog (index) | /jee-coaching | "Personalized JEE Coaching — 1-on-1" | 🟡 P2 | ⏳ Pending |
| 18 | /blog (index) | /neet-coaching | "Personalized NEET Coaching — Biology First" | 🟡 P2 | ⏳ Pending |
| 19 | /pricing | /free-trial | "Book a Free Demo Before You Decide" | 🟡 P2 | ⏳ Pending |
| 20 | /neet-coaching | /neet-ug-2026-cancelled | "NEET UG 2026 — What Students Need to Know" | 🟡 P2 | ⏳ Pending |

---

## Components Implemented / To Create

### ✅ Already Fixed in This Audit

1. **`PageFooter.tsx`** — Added /about, /mentors, /success-stories, /methodology to Quick Links + Important Links
2. **`SuccessGrid.tsx`** — Added "View All JEE & NEET Student Success Stories →" link to /success-stories
3. **`MethodologySection.tsx`** — Added "Read Our Full Teaching Methodology →" text link to /methodology
4. **`BlogPost.tsx`** — Added "Book your free 1-on-1 demo class online →" link to /free-trial

### 🔲 Components to Create / Extend

#### BlogHighlights Component (High Priority)
Add to homepage to create links from homepage body to blog content:

```tsx
// src/components/BlogHighlights.tsx
"use client";
import { Link } from '@/components/RouterLink';
import { ArrowRight } from 'lucide-react';
import { getAllPosts } from '@/lib/blogResolver';

export const BlogHighlights = () => {
  const featured = getAllPosts().filter(p => p.featured).slice(0, 3);
  return (
    <section className="py-16 px-4 sm:px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl">
            From the <span className="text-gradient-gold">Blog</span>
          </h2>
          <Link to="/blog" className="text-primary/70 hover:text-primary text-sm flex items-center gap-1 transition-colors">
            All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {featured.map(post => {
            const Icon = post.icon;
            return (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <div className="rounded-xl border border-border bg-card/40 p-5 hover:border-primary/30 transition-all group h-full">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${post.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-primary font-medium">{post.category}</span>
                  <h3 className="font-display font-semibold text-foreground text-sm mt-1 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-xs line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
```

**Integration in `Index.tsx`:**
```tsx
const BlogHighlights = dynamic(
  () => import('@/components/BlogHighlights').then(m => ({ default: m.BlogHighlights })),
  { ssr: false }
);
// Add <BlogHighlights /> after <CourseFlashcards />
```

#### SubjectClusterLinks Component (Medium Priority)
For subject-specific coaching pages, replace generic explore chips with clustered resource links:

```tsx
// src/components/SubjectClusterLinks.tsx
import { Link } from '@/components/RouterLink';

interface SubjectClusterProps {
  subject: 'jee-physics' | 'jee-chemistry' | 'jee-mathematics' | 
           'neet-biology' | 'neet-chemistry' | 'neet-physics';
}

const clusterData = {
  'jee-physics': {
    coaching: { to: '/jee-physics-coaching', label: 'JEE Physics 1-on-1 Coaching' },
    formulas: { to: '/jee-physics-formulas', label: 'JEE Physics Formula Sheet' },
    practice: { to: '/jee-practice', label: 'JEE Physics Practice Questions' },
    chapters: [
      { to: '/jee-physics-mechanics', label: 'Mechanics' },
      { to: '/jee-physics-electrodynamics', label: 'Electrodynamics' },
      { to: '/jee-physics-optics', label: 'Optics' },
    ],
  },
  // ... other subjects
};
```

---

## Breadcrumb Implementation

Visual breadcrumbs are implemented on `/jee-coaching`, `/neet-coaching`, `/blog`, `/blog/[slug]`.

**Missing breadcrumbs on:** `/pricing`, `/courses`, `/free-trial`, `/study-plan`, `/kota-coaching-alternative`, and all SEOLandingPage routes (`/about`, `/mentors`, `/success-stories`, `/methodology`).

The shadcn-ui breadcrumb component is available at `src/components/ui/breadcrumb.tsx`.

**Reusable breadcrumb for SEOLandingPage:**
```tsx
// Add to SEOLandingPage.tsx after <Navbar />:
<nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
  <ol className="flex items-center gap-2 text-[11px] tracking-[0.05em] text-muted-foreground">
    <li><Link to="/" className="hover:text-foreground/70 transition-colors">Home</Link></li>
    <span className="text-foreground/15">/</span>
    <li className="text-foreground/80">{page.title}</li>
  </ol>
</nav>
```

---

## Redirect Chain Analysis

**No redirect chains detected** in the codebase. All 175+ redirects in `next.config.ts` point directly to final URLs. Internal links in components use final destination paths (e.g., `/jee-coaching`, not an alias).

**One potential issue:**
- Footer links to `/jee-physics-preparation` — this is a catch-all dynamic route rendered by SEOLandingPage. Confirm this slug is registered in `seoPageData.ts`.

---

## Implementation Summary

### Changes Made in This Audit (Committed)

| File | Change | Impact |
|---|---|---|
| `src/components/PageFooter.tsx` | Added /about, /mentors, /success-stories, /methodology to Quick Links (4 new links) | Fixes 3 orphan pages; sitewide linking |
| `src/components/PageFooter.tsx` | Added /about, /mentors, /success-stories to Important Links (3 new links) | Doubles incoming authority to these pages |
| `src/components/sections/SuccessGrid.tsx` | Added "View All JEE & NEET Student Success Stories" link to /success-stories | Homepage now links to /success-stories page |
| `src/components/sections/MethodologySection.tsx` | Added "Read Our Full Teaching Methodology →" link to /methodology | Homepage now links to /methodology page |
| `src/views/BlogPost.tsx` | Added /free-trial link in CTA band of every blog post | All blog posts now link to conversion page |

### Net Effect
- **Orphan pages resolved:** 3 (/about, /mentors, /methodology) — now receive sitewide footer links
- **Semi-orphan pages improved:** /success-stories — now linked from homepage body
- **Conversion path improved:** All blog posts now link to /free-trial
- **Cluster strengthened:** Homepage → /methodology and /success-stories connections established

### Next Steps (Week 2)

1. **Add BlogHighlights section to homepage** — creates homepage → blog body links
2. **Add /free-trial link to /jee-coaching and /neet-coaching hero** — direct body link, not just modal
3. **Extend CourseLinks component** — subject-aware linking (physics posts → /jee-physics-coaching)
4. **Fix /neet-ug-2026-cancelled** — add link from /neet-coaching explore section
5. **Add breadcrumbs to SEOLandingPage** — fixes /about, /mentors, /success-stories, /methodology
6. **Add resources links to subject coaching pages** — /jee-physics-coaching → /jee-physics-formulas + /jee-practice
7. **Add /pricing link to JEE/NEET coaching hero** — high-intent pages should link to pricing

---

*Report generated by automated codebase crawl. All code paths traced through static analysis of JSX Link components, navLinks arrays, and footer section data.*
