

# CTR Improvement Plan: 0.7% → 2%+ Target

## Diagnosis

After reviewing the codebase, here are the key CTR killers:

1. **Titles lack emotional triggers and numbers** -- Most programmatic titles are dry/generic (e.g., "Jee Physics Preparation", "NEET Physics PYQ -- Digestion Q3")
2. **Meta descriptions are template-stuffed** -- Repetitive "by MindPeak Institute" filler, no urgency or differentiation
3. **No year in most titles** -- Students search "[topic] 2026", but titles don't include the current year
4. **Title template appends generic suffix** -- `%s | MindPeak Institute` wastes ~20 chars of SERP real estate
5. **Missing structured data for rich results** -- Question pages lack `Quiz`/`Question` schema that could show rich snippets (answer count, difficulty badges)
6. **No breadcrumb schema** -- Missing `BreadcrumbList` JSON-LD means flat URLs in SERPs instead of navigational breadcrumbs
7. **OG image is generic hero-bg.jpg everywhere** -- No dynamic OG images per page type

---

## Implementation Plan

### 1. Rewrite Title Templates with CTR Power Words + Year

**File: `src/lib/resolveSlugMetadata.ts`**

| Page Type | Current Title | New Title |
|---|---|---|
| Subject | `Jee Physics Preparation` | `JEE Physics 2026 — Complete Syllabus, PYQs & Free Practice \| MindPeak` |
| Chapter | `Kinematics — JEE Physics` | `Kinematics for JEE 2026 — Notes, Formulas & 50+ PYQs [Free]` |
| Topic | `Projectile Motion — Kinematics \| JEE Physics` | `Projectile Motion (JEE 2026) — Key Formulas, Mistakes & MCQs` |
| Practice Q | `JEE Physics — Projectile Motion (Easy) Q3` | `JEE Physics MCQ: Projectile Motion [Easy] — Solve & Check Answer` |
| PYQ | `JEE Physics PYQ — Kinematics Q5 (2023)` | `JEE 2023 Physics PYQ: Kinematics Q5 — Solution & Explanation` |
| Formula | `Jee Physics Formula Sheet` | `JEE Physics Formula Sheet 2026 — All Formulas PDF [Free Download]` |
| Location | `Jee Coaching In Delhi` | `Best JEE Coaching in Delhi 2026 — 1-on-1 Online \| Free Demo` |
| SEO Landing | Current `page.title` | Append year + power word if missing |

Key patterns: **Year first or prominent**, **[Free]** bracket tag, **action verbs** (Solve, Download, Check), **numbers** (50+ PYQs).

**File: `app/layout.tsx`** -- Change template from `%s | MindPeak Institute` to `%s` (full titles already include branding where needed).

### 2. Rewrite Meta Description Templates

Make descriptions answer the searcher's intent with specificity and urgency:

| Page Type | New Description Pattern |
|---|---|
| Practice Q | `Solve this [Easy/Medium/Hard] JEE Physics MCQ on [Topic]. Instant answer reveal + step-by-step solution. 500+ free practice questions.` |
| PYQ | `JEE Advanced 2023 Physics: [Chapter] Q5. Detailed solution with shortcut method. Practice 10+ years of PYQs free.` |
| Chapter | `Master [Chapter] for JEE 2026. Topic-wise notes, 30+ formulas, PYQs from 2015-2025, and 100+ free MCQs. Start now.` |
| Location | `Top-rated JEE coaching in [City] — online 1-on-1 with IIT mentors. ₹X/month. Book free demo class today.` |

### 3. Add BreadcrumbList JSON-LD Schema

**New utility: `src/lib/breadcrumbSchema.ts`**

Generate `BreadcrumbList` structured data for every page type. This gives Google navigational breadcrumbs in SERPs instead of raw URLs, significantly improving CTR.

```text
Home > JEE Physics > Kinematics > Projectile Motion > Q3
```

Wire into `resolveSlugMetadata` and render via existing JSON-LD mechanism.

### 4. Add Quiz/Question Schema for Practice & PYQ Pages

**Update: `src/views/JEEPracticeQuestion.tsx`, `NEETPracticeQuestion.tsx`, `JEEPYQQuestion.tsx`, `NEETPYQQuestion.tsx`**

Add `Quiz` + `Question` JSON-LD schema. Google can render rich results showing answer count and topic -- boosting CTR by 20-30% for question-type queries.

```json
{
  "@type": "Quiz",
  "name": "JEE Physics: Projectile Motion MCQ",
  "about": { "@type": "Thing", "name": "Projectile Motion" },
  "educationalLevel": "JEE Main",
  "hasPart": [{
    "@type": "Question",
    "text": "A ball is thrown...",
    "acceptedAnswer": { "@type": "Answer", "text": "Option B" },
    "eduQuestionType": "Multiple choice"
  }]
}
```

### 5. Dynamic OG Images by Page Category

**New utility: `src/lib/ogImage.ts`**

Instead of using generic `hero-bg.jpg` for all 22,000+ pages, generate category-specific OG image URLs. Even without a dynamic image generator, use 5-6 pre-made OG images:

- `/images/og/jee-practice.jpg` -- for all JEE practice pages
- `/images/og/neet-practice.jpg` -- for NEET
- `/images/og/pyq.jpg` -- for PYQ pages
- `/images/og/coaching.jpg` -- for coaching/location pages
- `/images/og/formula.jpg` -- for formula sheets

Wire into `resolveSlugMetadata` via the `openGraph.images` field.

### 6. Remove aggregateRating from Layout JSON-LD

**File: `app/layout.tsx`** (lines 134-140)

The memory notes say aggregateRating should be omitted to prevent Google Search Console validation errors. Currently it's still present in the layout. Removing it prevents GSC warnings that can suppress rich results.

---

## Expected CTR Impact

| Change | Est. CTR Lift |
|---|---|
| Year + power words in titles | +0.3-0.5% |
| Action-oriented descriptions | +0.2-0.3% |
| BreadcrumbList rich results | +0.2-0.4% |
| Quiz/Question schema | +0.2-0.3% |
| Category OG images | +0.1% |
| Remove invalid schema warnings | +0.05% |
| **Combined target** | **1.5-2.5%** |

## File Changes Summary

| File | Action |
|---|---|
| `src/lib/resolveSlugMetadata.ts` | Rewrite all title/description templates |
| `app/layout.tsx` | Remove `| MindPeak Institute` template suffix, remove aggregateRating |
| `src/lib/breadcrumbSchema.ts` | NEW -- breadcrumb JSON-LD generator |
| `src/lib/ogImage.ts` | NEW -- category-based OG image resolver |
| `src/views/*Question.tsx` (4 files) | Add Quiz/Question JSON-LD schema |
| `public/images/og/` | 5-6 pre-made category OG images (placeholder initially) |

