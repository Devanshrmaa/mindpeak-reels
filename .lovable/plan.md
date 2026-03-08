

## CTR Improvement Plan: 1% → 2%+

### Root Cause Analysis

After auditing the title/description patterns across 60+ page files, the key CTR killers are:

1. **Generic, passive titles** — Many pages use descriptive titles ("Courses — JEE & NEET Coaching Programs") instead of benefit-driven ones
2. **No emotional triggers in meta descriptions** — Descriptions read like feature lists, not value propositions
3. **Missing structured data for rich results** — No `HowTo`, `Course`, or `Review` schema on key pages, limiting SERP real estate
4. **No sitelinks search box optimization** — The SearchAction schema points to a non-functional `/courses?q=` URL
5. **Inconsistent year tagging** — Some hardcoded pages (pricing, courses, blog, contact) lack the dynamic year in titles
6. **No FAQ rich results on high-traffic pages** — Homepage, pricing, and coaching pages don't emit FAQPage schema even though they have FAQ content

### Changes

#### 1. Rewrite all static `app/*/page.tsx` metadata titles with power words + year

Target files: `app/page.tsx`, `app/pricing/page.tsx`, `app/courses/page.tsx`, `app/contact/page.tsx`, `app/free-trial/page.tsx`, `app/jee-coaching/page.tsx`, `app/neet-coaching/page.tsx`, `app/blog/page.tsx`, `app/study-plan/page.tsx`, `app/jee-practice/page.tsx`, `app/neet-practice/page.tsx`, `app/jee-pyq/page.tsx`, `app/neet-pyq/page.tsx`, `app/methodology/page.tsx`

Pattern: Replace passive titles with action-driven, year-tagged, benefit-first titles. Add urgency/specificity to descriptions.

Examples:
- `"Pricing — Personalized JEE & NEET Coaching Plans"` → `"JEE & NEET Coaching Fees 2026 — Plans from ₹8,333/mo [Free Trial]"`
- `"Courses — JEE & NEET Coaching Programs"` → `"JEE & NEET Courses 2026 — 1-on-1 Coaching, Foundation to Advanced [Free Demo]"`
- `"Book Free Trial — 1-on-1 JEE & NEET Coaching"` → `"Free Demo Class — Try 1-on-1 JEE/NEET Coaching Today [Zero Cost]"`
- `"JEE Online Coaching..."` → `"Best JEE Coaching Online 2026 — AIR <5K | 95% Success [Free Trial]"`

#### 2. Rewrite meta descriptions with CTA + social proof + urgency

Every description gets this formula: **Benefit + Proof + CTA**

Example: `"Crack JEE 2026 with 1-on-1 mentors from IIT/NIT. 95% success rate, 500+ students. Get your free demo class — no credit card, no commitment."`

#### 3. Add FAQPage JSON-LD to high-traffic static pages

Add `generateMetadata` or inline JSON-LD for FAQ schema on homepage, pricing, JEE coaching, NEET coaching pages — these already have FAQ sections in the view components but don't emit FAQPage schema at the `<head>` level.

Inject FAQ schema into `app/layout.tsx`'s structured data or add page-level `<script type="application/ld+json">` in the respective page components.

#### 4. Add `Course` schema to coaching and course pages

Emit `Course` JSON-LD on `/jee-coaching`, `/neet-coaching`, `/courses`, and `/pricing` with `provider`, `coursePrerequisites`, `offers` (with price), and `hasCourseInstance`. This unlocks Course rich results in Google.

#### 5. Fix the SearchAction schema

The current SearchAction points to `/courses?q={search_term_string}` which doesn't work. Either remove it or point it to a functional search endpoint.

#### 6. Dynamic year in `resolveSlugMetadata.ts` fix

Line 22 uses `new Date().getFullYear()` instead of importing `CURRENT_EXAM_YEAR` from `examYears.ts`. This means during Jan-Apr 2026, it shows "2026" (correct), but the logic diverges from the centralized exam year system. Replace with the proper import.

### Files to modify

| File | Change |
|---|---|
| `app/page.tsx` | CTR-optimized title + description |
| `app/pricing/page.tsx` | CTR-optimized title + description |
| `app/courses/page.tsx` | CTR-optimized title + description |
| `app/contact/page.tsx` | CTR-optimized title + description |
| `app/free-trial/page.tsx` | CTR-optimized title + description |
| `app/jee-coaching/page.tsx` | CTR-optimized title + description + Course schema |
| `app/neet-coaching/page.tsx` | CTR-optimized title + description + Course schema |
| `app/blog/page.tsx` | CTR-optimized title + description |
| `app/study-plan/page.tsx` | CTR-optimized title + description |
| `app/jee-practice/page.tsx` | CTR-optimized title + description |
| `app/neet-practice/page.tsx` | CTR-optimized title + description |
| `app/jee-pyq/page.tsx` | CTR-optimized title + description |
| `app/neet-pyq/page.tsx` | CTR-optimized title + description (if exists) |
| `app/methodology/page.tsx` | CTR-optimized title + description |
| `app/layout.tsx` | Fix SearchAction, add Course schema helper |
| `src/lib/resolveSlugMetadata.ts` | Import `CURRENT_EXAM_YEAR` instead of `getFullYear()` |
| `src/views/Pricing.tsx` | Add FAQPage JSON-LD output |
| `src/views/Index.tsx` | Add FAQPage JSON-LD output |

### Expected Impact

- **Year + power words in titles**: +30-50% CTR lift (industry benchmark)
- **FAQ rich results**: +20-30% more SERP real estate → higher CTR
- **Course schema**: Unlocks course carousels in Google → new click source
- **Benefit-first descriptions**: Converts impressions to clicks via social proof + CTA

