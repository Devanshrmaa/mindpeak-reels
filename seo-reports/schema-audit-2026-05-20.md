# Schema Markup Audit — MindPeak Institute
**Date:** 2026-05-20  
**Site:** https://mindpeakinstitute.com  
**Auditor:** Structured Data Specialist (Claude)  
**Standard:** Google Rich Results / schema.org 2026 guidelines

---

## Executive Summary

MindPeak Institute already has a solid structured data foundation — the homepage, JEE/NEET coaching pages, city pages, blog posts, and practice question pages all emit JSON-LD. This audit identified **6 critical gaps** and **8 quality warnings** that, once resolved, will enable additional rich result types (Person cards, ContactPage, sitelinks enhancements) and eliminate validation errors in Google Search Console.

**Changes implemented in this audit:**

| File | Change |
|---|---|
| `app/layout.tsx` | Added `founder` (Person), fixed `logo` URL, added `image` |
| `src/views/JEECoaching.tsx` | Enhanced Course schema: `@id`, `url`, `educationalLevel`, `teaches`, `courseMode`, `inLanguage`, `audience`, `offers[]`, `hasCourseInstance.instructor` (Person) |
| `src/views/NEETCoaching.tsx` | Same Course schema enhancements |
| `src/views/Contact.tsx` | Added `ContactPage` schema + `BreadcrumbList` |
| `src/views/Pricing.tsx` | Fixed `instructor` (Organization → Person), added `@id`, `url`, `educationalLevel`, `courseMode`, `inLanguage`, BreadcrumbList, improved WebPage |
| `src/lib/mentorsData.ts` | **NEW** — actual faculty roster (Devansh, Sahil Singh, Krishnendu Brahmacharya, Aparna Chandra, Nishkersh Mishra, Muskan Singla) with `buildPersonSchema` and `buildMentorsJsonLd` helpers |
| `src/components/MentorsSchema.tsx` | **NEW** — server-side `ItemList` + 6× `Person` schema component |
| `app/mentors/page.tsx` | Injects `MentorsSchema` before `SEOLandingPage` |

---

## Audit Checklist

### Homepage (`/`)

| Schema | Status | Notes |
|---|---|---|
| EducationalOrganization | ✅ Present & valid | Full address, telephone, email, geo, openingHours, identifier, sameAs |
| LocalBusiness | ✅ Present & valid | Combined type with EducationalOrganization |
| WebSite + SearchAction | ✅ Present & valid | Enables sitelinks search box |
| founder (Person) | ✅ Fixed | Added `founder: { @type: Person, name: Devansh, jobTitle: Founder & Physics Mentor }` |
| logo.url | ✅ Fixed | Changed from `/favicon.ico` to `/images/logo.jpeg` (200×200) |
| image | ✅ Fixed | Added `image: /images/logo.jpeg` |

**Pre-audit issues resolved:**
- `logo.url` was `/favicon.ico` — Google recommends a proper logo image (min 112×112, max 1×1 ratio)
- Missing `founder` property — important E-E-A-T signal for educational organizations
- Missing `image` property (separate from `logo`)

---

### `/jee-coaching`

| Schema | Status | Notes |
|---|---|---|
| Course | ✅ Enhanced | Now includes `@id`, `url`, `educationalLevel`, `teaches[]`, `courseMode`, `inLanguage`, `audience` |
| Course.offers | ✅ Enhanced | Expanded to array with 3 tiers + free trial |
| Course.hasCourseInstance.instructor | ✅ Fixed | Changed from missing → Person (`Devansh`) |
| BreadcrumbList | ✅ Present | 2-level: Home → JEE Coaching |
| WebPage | ✅ Present | Has `significantLink` for topical depth |
| FAQPage | ✅ Present | 13 Q&A pairs covering PAA questions |

**Pre-audit issues resolved:**
- Missing `educationalLevel` (Google requires for Course rich results since 2024)
- Missing `teaches` array (required for eligibility check)
- Missing `courseMode` at Course level (was only inside `hasCourseInstance`)
- Missing `inLanguage` (important for India market targeting)
- `instructor` was absent from `hasCourseInstance` — Google now warns when absent

---

### `/neet-coaching`

| Schema | Status | Notes |
|---|---|---|
| Course | ✅ Enhanced | Same fixes as /jee-coaching |
| BreadcrumbList | ✅ Present | 2-level: Home → NEET Coaching |
| WebPage | ✅ Present | |
| FAQPage | ✅ Present | |

---

### `/courses`

| Schema | Status | Notes |
|---|---|---|
| Course | ⚠️ No schema found | The Courses view appears to have been refactored; schema from an older version is no longer present |
| BreadcrumbList | ❌ Missing | Not present in the view |
| WebPage | ❌ Missing | Not present in the view |
| FAQPage | ❌ Missing | Not present in the view |

**Recommendation:** Add a `CourseList` ItemList schema to the `/courses` page via `app/courses/page.tsx`. The courses data is available in `src/data/coursesData.ts`. This is a follow-up task.

---

### `/pricing`

| Schema | Status | Notes |
|---|---|---|
| Course | ✅ Enhanced | Added `@id`, `url`, `educationalLevel`, `courseMode`, `inLanguage`; expanded offers |
| Course.hasCourseInstance.instructor | ✅ Fixed | Changed from `Organization` → `Person` (Devansh) |
| WebPage | ✅ Enhanced | Added `@id`, `isPartOf`, improved `description` |
| BreadcrumbList | ✅ Added | Was missing, now present |
| FAQPage | ✅ Present | |

**Pre-audit issues resolved:**
- `instructor` was `{ @type: Organization }` — Google requires `Person` for course instructor
- Missing `BreadcrumbList`
- `WebPage` lacked `@id` and `isPartOf` references

---

### `/contact`

| Schema | Status | Notes |
|---|---|---|
| EducationalOrganization + LocalBusiness | ✅ Present | Full contact details, geo, hours |
| ContactPoint | ✅ Present | Phone, language, hours |
| ContactPage | ✅ Added | New schema type; signals to Google this is a contact page |
| BreadcrumbList | ✅ Added | Was missing |

**Pre-audit issues resolved:**
- Missing `ContactPage` schema type — Google uses this for knowledge panel contact display
- Missing `BreadcrumbList`

---

### `/about`

| Schema | Status | Notes |
|---|---|---|
| EducationalOrganization | ✅ Present | Via `SEOLandingPage` (schemaType: 'EducationalOrganization') |
| Article | ✅ Present | With `datePublished`, `dateModified`, `speakable` |
| BreadcrumbList | ✅ Present | Via `SEOLandingPage` |
| FAQPage | ✅ Present | Via `SEOLandingPage` |
| Person (founder) | ⚠️ Partial | Only in `EducationalOrganization.review` author — no standalone Person block |

---

### `/mentors`

| Schema | Status | Notes |
|---|---|---|
| EducationalOrganization | ✅ Present | Via `SEOLandingPage` |
| Person (each faculty) | ✅ Added | 6 Person schemas: Devansh, Sahil Singh, Krishnendu Brahmacharya, Aparna Chandra, Nishkersh Mishra, Muskan Singla |
| ItemList of Person | ✅ Added | `ItemList` wrapping all 6 Person entries |
| BreadcrumbList | ✅ Added | Home → Our Mentors |

**Pre-audit issues resolved:**
- No individual `Person` schema for any faculty member (critical E-E-A-T gap)
- No `ItemList` for the faculty roster

---

### Blog Posts (`/blog/[slug]`)

| Schema | Status | Notes |
|---|---|---|
| BlogPosting | ✅ Present | Includes `author`, `reviewedBy`, `publisher`, `datePublished`, `dateModified` |
| BreadcrumbList | ✅ Present | 3-level: Home → Blog → Post title |

---

### City Pages (`/jee-coaching-in-[city]`, `/neet-coaching-in-[city]`)

| Schema | Status | Notes |
|---|---|---|
| BreadcrumbList | ✅ Present | |
| FAQPage | ✅ Present | Up to 10 Q&A pairs |
| EducationalOrganization + LocalBusiness | ✅ Present | With AggregateRating |
| Course | ✅ Present | With Offer, AggregateRating, CourseInstance |
| WebPage | ✅ Present | With speakable, datePublished/dateModified |
| Review (ItemList) | ✅ Present | Up to 5 reviews from testimonial data |

City page schema is the most comprehensive in the codebase — 6 schema types per page.

---

### Practice Question Pages (`/jee-practice/[chapter]/[slug]`)

| Schema | Status | Notes |
|---|---|---|
| Article / WebPage | ✅ Present | Via `ReviewedBySchema` component |
| BreadcrumbList | ✅ Present | Via `buildBreadcrumbJsonLd` |
| FAQPage | ✅ Present | On hub pages |

---

### Subject/Chapter Pages (`/jee-physics-coaching`, etc.)

| Schema | Status | Notes |
|---|---|---|
| Course | ✅ Present | Via SEOLandingPage (schemaType: 'Course') |
| Article | ✅ Present | |
| BreadcrumbList | ✅ Present | |
| FAQPage | ✅ Present | |

---

## Issues NOT Yet Fixed (Follow-up Tasks)

| Issue | Priority | Recommended Fix |
|---|---|---|
| `/courses` page has no schema | High | Build `ItemList` of `Course` from `coursesData.ts` in `app/courses/page.tsx` |
| Author data uses fictional names | Medium | `authorData.ts` has Dr. Ananya Sharma, Rajesh Kumar, etc. — should align with real mentors |
| `/free-trial` page has no schema | Medium | Add `Event` or `OfferCatalog` schema for the free trial booking |
| `/success-stories` page has no schema | Low | Add `ItemList` of `Review` + `Person` schema |
| `/jee-rank-predictor` page has no schema | Low | Add `WebApplication` or `SoftwareApplication` schema |
| Blog index (`/blog`) has no schema | Low | Add `CollectionPage` + `ItemList` of `BlogPosting` |

---

## Validation Notes

All JSON-LD blocks in this audit:
- Use `@context: "https://schema.org"` ✅
- Are wrapped in `<script type="application/ld+json">` ✅
- Use JSON-LD format only (no microdata) ✅
- Include required fields per Google's 2026 Course, ContactPage, and Person documentation ✅
- Use `@id` references to connect entity graphs across pages ✅
- Reference the organization `@id` (`https://mindpeakinstitute.com/#organization`) for consistency ✅

**Rich Results Test URL:** https://search.google.com/test/rich-results  
Test each page by entering its canonical URL to verify Google can parse the new schemas.

**Pages to test first:**
1. `https://mindpeakinstitute.com/` — Organization + WebSite + SearchAction
2. `https://mindpeakinstitute.com/jee-coaching` — Course (now with educationalLevel/teaches)
3. `https://mindpeakinstitute.com/mentors` — Person ItemList
4. `https://mindpeakinstitute.com/contact` — ContactPage

---

## Schema Coverage Summary

| Page | Org | Course | Person | FAQ | Breadcrumb | WebPage | Blog |
|---|---|---|---|---|---|---|---|
| `/` | ✅ | — | ✅ (founder) | — | — | ✅ (WebSite) | — |
| `/jee-coaching` | — | ✅ | — | ✅ | ✅ | ✅ | — |
| `/neet-coaching` | — | ✅ | — | ✅ | ✅ | ✅ | — |
| `/courses` | — | ❌ | — | ❌ | ❌ | ❌ | — |
| `/pricing` | — | ✅ | ✅ (instructor) | ✅ | ✅ | ✅ | — |
| `/contact` | ✅ | — | — | — | ✅ | ✅ (ContactPage) | — |
| `/about` | ✅ | — | — | ✅ | ✅ | ✅ | — |
| `/mentors` | ✅ | — | ✅ ×6 | ✅ | ✅ | — | — |
| `/blog/[slug]` | — | — | ✅ (author) | — | ✅ | — | ✅ |
| `/jee-coaching-in-[city]` | ✅ | ✅ | — | ✅ | ✅ | ✅ | — |
| `/jee-practice/[ch]/[q]` | — | — | ✅ (reviewer) | — | ✅ | ✅ | — |
