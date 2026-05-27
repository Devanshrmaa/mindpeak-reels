# Schema Markup Audit — MindPeak Institute
**Date:** 2026-05-27  
**Auditor:** Structured Data Specialist  
**Site:** https://mindpeakinstitute.com

---

## Executive Summary

| Metric | Count |
|---|---|
| Pages with valid schema | 100+ |
| Issues fixed in this audit | 7 |
| New schema types added | 5 |
| Schema blocks generated | 40+ |

---

## Audit Checklist

### Homepage (/)
- ✅ `EducationalOrganization + LocalBusiness` — comprehensive, with address, telephone, geo, openingHours, sameAs
- ✅ `WebSite` with `SearchAction` (Sitelinks Search Box) — valid
- ⚠️ **FIXED:** Logo was `/favicon.ico` (64×64) → updated to `/images/logo.jpeg` (200×200); Google requires ≥112×112
- ⚠️ **FIXED:** Missing `founder` property → added `{ "@type": "Person", "name": "Devansh", "jobTitle": "Founder & Physics Mentor" }`
- ⚠️ Microdata on homepage (itemScope/itemType) is redundant with JSON-LD but not harmful; left as-is

### SEO Landing Pages (~100 pages using SEOLandingPage view)
- ✅ `FAQPage` schema generated for pages with FAQs
- ✅ `Article` schema with `author`, `publisher`, `dateModified`, `speakable`, `about` entity references
- ✅ `BreadcrumbList` schema
- ✅ `EducationalOrganization` schema for about/mentors-type pages
- ⚠️ **FIXED:** `Course` schema was sparse (name, description, provider only) → enhanced with `educationalLevel`, `courseMode`, `teaches`, `audience`, `hasCourseInstance`, `offers` (free demo)
- ✅ `datePublished: '2026-01-01'` is valid (site launched in 2026)

### City Landing Pages (20 T1 cities)
- ✅ `BreadcrumbList` — valid
- ✅ `FAQPage` — valid, up to 10 Q&As
- ✅ `EducationalOrganization + LocalBusiness + AggregateRating` — valid
- ✅ `Course + Offer + AggregateRating` — comprehensive
- ✅ `WebPage` with `speakable`, `dateModified` — valid
- ✅ `Review` item list — valid, max 5 reviews per page

### Question Pages (JEE/NEET Practice + PYQ)
- ✅ `LearningResource` schema — valid
- ✅ `Article`/`WebPage` with `reviewedBy` Person — valid (E-E-A-T signal)
- ✅ `BreadcrumbList` — valid
- ✅ `FAQPage` — valid, 7–8 Q&As per page

### Contact Page (/contact)
- ❌ **FIXED:** No schema → added `ContactPage` + `EducationalOrganization+LocalBusiness` with `contactPoint`, `openingHoursSpecification`, `BreadcrumbList`

### Courses Page (/courses)
- ❌ **FIXED:** No schema → added `ItemList` of 5 `Course` objects with `offers`, `hasCourseInstance`, `teaches` + `BreadcrumbList`

### Pricing Page (/pricing)
- ❌ **FIXED:** No schema → added 5 `Course` schemas with `Offer` + `UnitPriceSpecification` + `BreadcrumbList` + `WebPage`

### Mentors Page (/mentors)
- ❌ **FIXED:** No Person schema for actual faculty → added `@graph` with 6 `Person` schemas (Devansh, Sahil Singh, Krishnendu Brahmacharya, Aparna Chandra, Nishkersh Mishra, Muskan Singla)
- ✅ Existing `EducationalOrganization` schema from SEOLandingPage still present

### Blog Pages
- ℹ️ Blog pages use `BlogPosting` via `ReviewedBySchema` component — valid
- ✅ `Article` schema with `author`, `datePublished`, `dateModified` — valid

### Methodology Page (/methodology)
- ✅ `HowTo` schema with 6 `HowToStep` nodes — valid and comprehensive

---

## Issues Found & Fixed

| # | Page | Issue | Severity | Status |
|---|---|---|---|---|
| 1 | Homepage layout | Logo URL was favicon.ico (64×64) — below Google's 112×112 minimum | Medium | ✅ Fixed |
| 2 | Homepage layout | Missing `founder` property on EducationalOrganization | Low | ✅ Fixed |
| 3 | ~50 Course landing pages | Sparse Course schema (missing `hasCourseInstance`, `offers`, `educationalLevel`) | Medium | ✅ Fixed |
| 4 | /contact | No JSON-LD schema at all | High | ✅ Fixed |
| 5 | /courses | No JSON-LD schema | High | ✅ Fixed |
| 6 | /pricing | No JSON-LD schema | High | ✅ Fixed |
| 7 | /mentors | No Person schema for actual faculty | Medium | ✅ Fixed |

---

## Schema Types Now Present (Full Inventory)

| Schema Type | Pages | Status |
|---|---|---|
| `EducationalOrganization + LocalBusiness` | Homepage, 20 city pages, landing pages | ✅ |
| `WebSite + SearchAction` | Homepage | ✅ |
| `Course` | 50+ landing pages, /courses, /pricing | ✅ |
| `CourseInstance` | 50+ landing pages, /courses, /pricing | ✅ |
| `FAQPage` | 100+ pages | ✅ |
| `BreadcrumbList` | All inner pages | ✅ |
| `Article` / `BlogPosting` | Blog, landing pages | ✅ |
| `LearningResource` | JEE/NEET practice & PYQ pages | ✅ |
| `HowTo` | /methodology | ✅ |
| `Person` | /mentors, question pages (reviewedBy) | ✅ |
| `ContactPage` | /contact | ✅ (new) |
| `ItemList` of `Course` | /courses | ✅ (new) |
| `Offer` / `UnitPriceSpecification` | /pricing, /courses, course landing pages | ✅ (new) |
| `Review` (ItemList) | 20 city pages | ✅ |
| `WebPage` | City pages, /pricing | ✅ |

---

## Google Rich Results Eligibility

| Rich Result Type | Eligible Pages | Requirements Met |
|---|---|---|
| Course rich result | 50+ course landing pages, /courses, /pricing | ✅ name, description, provider, hasCourseInstance |
| FAQ rich result | 100+ pages | ✅ FAQPage with Question + AcceptedAnswer |
| Breadcrumb | All inner pages | ✅ BreadcrumbList |
| Sitelinks Search Box | Homepage | ✅ WebSite + SearchAction |
| Local Business | /contact, city pages | ✅ LocalBusiness + address + telephone |
| How-To | /methodology | ✅ HowTo + HowToStep |
| Review snippet | City pages | ✅ Review with ratingValue |

---

## Validation Notes

- All JSON-LD uses `@context: "https://schema.org"` — ✅
- All monetary values use `priceCurrency: "INR"` — ✅
- All `@id` values use full HTTPS URLs — ✅
- No deprecated `microdata` introduced (existing homepage microdata left as-is — not harmful)
- `datePublished` / `dateModified` values are ISO 8601 strings — ✅
- `availability` values use schema.org enum URLs — ✅
- Logo updated to meet Google's 112×112 minimum — ✅

---

## Files Changed

| File | Change |
|---|---|
| `app/layout.tsx` | Added `founder` to EducationalOrganization; fixed logo URL |
| `app/contact/page.tsx` | Added ContactPage + LocalBusiness JSON-LD |
| `app/courses/page.tsx` | Added Course ItemList JSON-LD |
| `app/pricing/page.tsx` | Added Course + Offer + PriceSpecification JSON-LD |
| `app/mentors/page.tsx` | Added 6 Person schemas for actual faculty |
| `src/views/SEOLandingPage.tsx` | Enhanced Course schema (hasCourseInstance, educationalLevel, teaches, audience, offers) |
| `src/lib/facultySchema.ts` | New file — Person schema generator for all 6 faculty members |
| `seo-reports/schema-blocks-2026-05-27.json` | All generated JSON-LD blocks |
