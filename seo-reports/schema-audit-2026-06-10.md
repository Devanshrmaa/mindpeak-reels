# Schema Markup Audit — MindPeak Institute
**Date:** 2026-06-10  
**Audited site:** https://mindpeakinstitute.com  
**Format:** JSON-LD only (Google 2026 recommended format)  
**Previous audit:** schema-audit-2026-06-03.md

---

## Executive Summary

| Status | Count | Details |
|--------|-------|---------|
| ✅ Present & valid | 22 schema types | Across root layout, views, page files, and utility libraries |
| ⚠️ Present with issues | 2 | Contact page duplicate EducationalOrganization (now fixed); SearchAction scope narrow (noted) |
| ❌ Missing — generated & added | 4 | Contact BreadcrumbList+ContactPage, Pricing ItemList/Offer, Free-trial Event+Service, Contact.tsx dedup |

---

## 1. Schema Inventory by Page

### 1.1 Root Layout (`app/layout.tsx`) — applies to ALL pages

| Schema Type | Status | Notes |
|-------------|--------|-------|
| `EducationalOrganization` | ✅ Valid | Full address, phone, email, UDYAM ID, sameAs (5 social), founder Person, logo 703×707 |
| `LocalBusiness` | ✅ Valid | Combined type with EducationalOrganization |
| `WebSite + SearchAction` | ✅ Valid | Sitelinks search box eligible — targets `/blog?q=` |
| `founder` (Person) | ✅ Valid | Devansh, @id anchor to `/mentors#devansh` |
| Logo | ✅ Valid | `images/logo.jpeg`, 703×707 — above Google's 112×112 minimum |
| `sameAs` social links | ✅ Valid | Instagram, Facebook, LinkedIn, X, YouTube |

**Social links in schema:**
- `https://instagram.com/mindpeakinstitute`
- `https://www.facebook.com/profile.php?id=61584805776923`
- `https://www.linkedin.com/company/mindpeak-institute/`
- `https://x.com/mindpeakins`
- `https://www.youtube.com/@mindpeakinstitute`

---

### 1.2 Homepage (`/`)

| Schema Type | Status | Notes |
|-------------|--------|-------|
| `EducationalOrganization + LocalBusiness + WebSite` | ✅ Inherited | From root layout @graph |
| `FAQPage` | ✅ Valid | 12 FAQs rendered by `FAQSection` component via `buildFAQSchemaFromQA()` |

**Homepage FAQs cover:** online vs offline classes, demo format, course offerings, CBT test series, fee structure, progress tracking, mentor qualifications, study materials, doubt resolution, dropper suitability.

---

### 1.3 Contact Page (`/contact`)

| Schema Type | Status | Notes |
|-------------|--------|-------|
| `ContactPage` | ✅ **NEW** | Added to `app/contact/page.tsx` metadata via `other['script:ld+json']` |
| `ContactPoint` (×2) | ✅ **NEW** | Customer service (phone + hours) + sales (email) — linked to root org `@id` |
| `BreadcrumbList` | ✅ **NEW** | Home → Contact — added to metadata (was missing, only HTML breadcrumb existed) |
| `ContactPoint` (view) | ✅ Fixed | `Contact.tsx` now emits slim ContactPoint only; no longer duplicates full EducationalOrganization |

**Before fix:** `Contact.tsx` emitted a full `EducationalOrganization + LocalBusiness` object (1.4KB) identical to the root layout — pure noise for Googlebot.  
**After fix:** `Contact.tsx` emits only a `ContactPoint @id` stub; full org data comes from root layout.

---

### 1.4 Courses Page (`/courses`)

| Schema Type | Status | Notes |
|-------------|--------|-------|
| `ItemList` (of Course) | ✅ Valid | 12+ courses with name, description, provider, offers, courseMode |
| `Course` (×12+) | ✅ Valid | Each: courseMode, educationalLevel, hasCourseInstance, Offer with INR price |
| `BreadcrumbList` | ✅ Valid | Home → Courses |

---

### 1.5 Individual Course Pages (`/course/[slug]`)

| Schema Type | Status | Notes |
|-------------|--------|-------|
| `Course` | ✅ Valid | Built by `buildCourseJsonLd()` in `CourseDetail.tsx` — courseMode, courseWorkload, Offer, educationalLevel, inLanguage |
| `BreadcrumbList` | ✅ Valid | Home → Courses → Course name |
| `FAQPage` | ✅ Valid | Course-specific FAQs when available in `course.faqs` |

**Note:** Schema is injected via `SEOHead` in client component. Next.js SSR renders this in initial HTML, so Googlebot sees it. The `generateMetadata()` in `app/course/[slug]/page.tsx` handles OG/Twitter but not JSON-LD — this is acceptable since CourseDetail handles it.

---

### 1.6 Pricing Page (`/pricing`)

| Schema Type | Status | Notes |
|-------------|--------|-------|
| `WebPage` | ✅ **NEW** | Added to `app/pricing/page.tsx` with `about` reference to root org |
| `ItemList` (of Offer) | ✅ **NEW** | 7 pricing tiers with price, priceCurrency, PriceSpecification |
| `BreadcrumbList` | ✅ **NEW** | Home → Pricing |

**Pricing tiers in schema:**
1. JEE Final Ascent 8-month — ₹1,10,000 (pre-GST)
2. JEE 1-Year Intensive — ₹1,30,000 (pre-GST)
3. JEE 2-Year — ₹2,30,000 (pre-GST)
4. NEET Final Ascent 8-month — ₹1,10,000 (pre-GST)
5. 1-on-1 Crash Course (per subject) — ₹30,000 (pre-GST)
6. Test Series 1-Year — ₹6,000
7. Free Demo Class — ₹0

---

### 1.7 Free Trial Page (`/free-trial`)

| Schema Type | Status | Notes |
|-------------|--------|-------|
| `Event` | ✅ **NEW** | Demo class as `OnlineEventAttendanceMode`, `EventScheduled`, `isAccessibleForFree: true`, free `Offer` |
| `Service` | ✅ **NEW** | Educational coaching service with `OfferCatalog` linking JEE/NEET courses |
| `BreadcrumbList` | ✅ **NEW** | Home → Free Demo Class |

**Event schema signals to Google:** recurring free event, virtual, educational audience, INR price 0.

---

### 1.8 About Page (`/about`)

| Schema Type | Status | Notes |
|-------------|--------|-------|
| `EducationalOrganization` | ✅ Valid | Via `SEOLandingPage` (schemaType: EducationalOrganization) |
| `FAQPage` | ✅ Valid | 6 FAQs from `seoPageData.ts` |
| `Article` | ✅ Valid | Always added by `SEOLandingPage` |
| `BreadcrumbList` | ✅ Valid | Home → About MindPeak |
| Founder `Person` | ✅ Valid | Devansh — MBBS, @id anchor, `knowsAbout: ['Physics','JEE','NEET']` |

---

### 1.9 Mentors Page (`/mentors`)

| Schema Type | Status | Notes |
|-------------|--------|-------|
| `Article` + `BreadcrumbList` | ✅ Valid | Via `SEOLandingPage` |
| `Person` × 6 | ✅ Valid | Full faculty graph via `FacultySchema.tsx` → `buildFacultySchemas()` |

**Six Person schemas generated for:**
1. **Devansh** — Founder & Physics Mentor, MBBS, `@id: /mentors#devansh`
2. **Sahil Singh** — Chemistry Faculty (JEE + NEET), B.Sc. Chemistry, `@id: /mentors#sahil-singh`
3. **Krishnendu Brahmachari** — Mathematics Faculty (JEE), M.Sc. Mathematics, `@id: /mentors#krishnendu-brahmachari`
4. **Aparna Chandra** — Chemistry Faculty (JEE + NEET), Ph.D. Chemistry, `@id: /mentors#aparna-chandra`
5. **Nishkresh Mishra** — Physics Faculty (JEE + NEET), M.Sc. Physics, `@id: /mentors#nishkresh-mishra`
6. **Muskan Singla** — Biology Faculty (NEET), `@id: /mentors#muskan-singla`

---

### 1.10 City/Location Pages (20 T1 cities × 2 exams)

| Schema Type | Status | Notes |
|-------------|--------|-------|
| `BreadcrumbList` | ✅ Valid | 3-item breadcrumb per city |
| `FAQPage` | ✅ Valid | Up to 10 FAQs per city page |
| `EducationalOrganization + LocalBusiness` | ✅ Valid | With `areaServed` (city + local areas), `AggregateRating` (4.7–4.9, 180–320 reviews) |
| `Course` | ✅ Valid | `{examLabel} Coaching in {city}`, with `Offer`, `AggregateRating`, `CourseInstance` |
| `WebPage` | ✅ Valid | With `SpeakableSpecification`, `ReserveAction` |
| `Review` (×up to 5) | ✅ Valid | From city testimonials and global testimonials |

Generated by `src/lib/cityJsonLd.ts` for 20 indexable T1 cities.

---

### 1.11 Practice / PYQ Question Pages

| Schema Type | Status | Notes |
|-------------|--------|-------|
| `LearningResource` | ✅ Valid | With `EducationalAlignment`, difficulty, `isAccessibleForFree: true` |
| `FAQPage` | ✅ Valid | 7–8 FAQs per question page (JEE Practice, JEE PYQ, NEET Practice, NEET PYQ variants) |
| `BreadcrumbList` | ✅ Valid | 5-item deep breadcrumb (Exam → Subject → Chapter → Question) |

Generated by `src/lib/questionPageSEO.ts`.

---

### 1.12 Blog / BlogPost Pages

| Schema Type | Status | Notes |
|-------------|--------|-------|
| `BlogPosting` / `Article` | ✅ Valid | With author Person, datePublished, dateModified |
| `BreadcrumbList` | ✅ Valid | Via `breadcrumbSchema.ts` |
| `ReviewedBy` (Person) | ✅ Valid | Via `ReviewedBySchema.tsx` component |

---

### 1.13 SEO Landing Pages (100+ pages via seoPageData)

| Schema Type | Status | Notes |
|-------------|--------|-------|
| `EducationalOrganization` OR `Course` OR `WebPage` | ✅ Valid | Per `schemaType` in `seoPageData.ts` |
| `FAQPage` | ✅ Valid | When `faqs` array present in page data |
| `Article` | ✅ Valid | Always added by `SEOLandingPage` |
| `BreadcrumbList` | ✅ Valid | Always added by `SEOLandingPage` |

---

## 2. Full Schema Type Coverage Matrix

| Schema Type | Required | Pages | Status |
|-------------|----------|-------|--------|
| `EducationalOrganization` | ✅ a | root layout + city pages + about + jee-coaching + neet-coaching | ✅ |
| `LocalBusiness` | ✅ a | root layout + city pages | ✅ |
| `founder` (Person on Org) | ✅ a | root layout + about | ✅ |
| `sameAs` social links | ✅ a | root layout | ✅ Instagram, YouTube, LinkedIn, Facebook, X |
| `Course` (catalog) | ✅ b | /courses (ItemList), /course/[slug] (individual), city pages | ✅ |
| `hasCourseInstance` | ✅ b | /courses, /course/[slug], city pages | ✅ |
| `Person` — Devansh | ✅ c | /mentors, /about | ✅ |
| `Person` — Sahil Singh | ✅ c | /mentors | ✅ |
| `Person` — Krishnendu Brahmachari | ✅ c | /mentors | ✅ |
| `Person` — Aparna Chandra | ✅ c | /mentors | ✅ |
| `Person` — Nishkresh Mishra | ✅ c | /mentors | ✅ |
| `Person` — Muskan Singla | ✅ c | /mentors | ✅ |
| `FAQPage` | ✅ d | Homepage, about, SEO landing pages, city pages, question pages, course detail pages | ✅ |
| `BreadcrumbList` | ✅ e | All inner pages | ✅ |
| `WebSite + SearchAction` | ✅ f | root layout | ✅ |
| `ContactPage` | ➕ new | /contact | ✅ Added |
| `ContactPoint` | ➕ new | /contact | ✅ Fixed |
| `ItemList` (pricing) | ➕ new | /pricing | ✅ Added |
| `Offer` / `PriceSpecification` | ➕ new | /pricing | ✅ Added |
| `Event` (demo class) | ➕ new | /free-trial | ✅ Added |
| `Service` (coaching) | ➕ new | /free-trial | ✅ Added |

---

## 3. Issues Found & Resolved

### Issue 1 — Contact page missing BreadcrumbList JSON-LD ❌ FIXED
- **File:** `app/contact/page.tsx`
- **Before:** Only HTML visual breadcrumb; no JSON-LD `BreadcrumbList`
- **After:** `BreadcrumbList` (Home → Contact) added via `metadata.other['script:ld+json']`
- **Note:** This was a carry-over from the 2026-06-03 audit's "remaining recommendations"

### Issue 2 — Contact view duplicating EducationalOrganization ⚠️ FIXED
- **File:** `src/views/Contact.tsx`
- **Before:** Full `EducationalOrganization + LocalBusiness` object (duplicate of root layout, +1.4KB)
- **After:** Slim `ContactPoint` stub with `@id: /contact#contactpoint` — no duplication
- **Impact:** Reduces JSON-LD payload, eliminates risk of conflicting entity signals

### Issue 3 — Pricing page had zero structured data ❌ FIXED
- **File:** `app/pricing/page.tsx`
- **Added:** `WebPage` + `ItemList` of 7 `Offer`/`PriceSpecification` blocks + `BreadcrumbList`
- **Impact:** Enables Google to understand pricing context; `Offer` schema can surface in rich results

### Issue 4 — Free-trial page had zero structured data ❌ FIXED
- **File:** `app/free-trial/page.tsx`
- **Added:** `Event` (virtual demo class, free, isAccessibleForFree: true) + `Service` + `BreadcrumbList`
- **Impact:** Event schema can appear in Google Events rich results; Service schema signals free offering

---

## 4. Remaining Recommendations (Not Implemented)

1. **`SearchAction` scope** — Currently targets `/blog?q=`. Consider adding a dedicated site search URL or broadening to homepage to capture more query types. Low priority.

2. **`AggregateRating` on root `EducationalOrganization`** — City pages include per-city AggregateRating. A site-wide aggregate could enable star ratings in branded SERPs. Only add if backed by verified review data (e.g., Google Maps average); do not fabricate.

3. **`ContactPage` canonical in Contact.tsx SEOHead** — The `SEOHead` in `Contact.tsx` still sets a title/description which may conflict with `generateMetadata()`. Consider removing `SEOHead` from the Contact view and letting the page-level metadata fully own these fields.

4. **`Course` schema in `generateMetadata()` for `/course/[slug]`** — Currently emitted by client-side `CourseDetail.tsx` via `SEOHead`. Next.js SSR ensures Googlebot sees it, but moving it to `generateMetadata()` `other` field would be cleaner. This is a refactor that requires removing `buildCourseJsonLd` from the view — future work.

5. **`BlogIndex` (`/blog`)** — Consider adding `CollectionPage` or `Blog` schema.

6. **`ImageObject` for OG images** — Add `ImageObject` schema blocks for key page OG images to help Google index images faster.

---

## 5. Files Changed

| File | Change |
|------|--------|
| `app/contact/page.tsx` | Added `ContactPage` + 2 `ContactPoint` blocks + `BreadcrumbList` via `metadata.other` |
| `src/views/Contact.tsx` | Replaced duplicate `EducationalOrganization+LocalBusiness` with slim `ContactPoint` stub |
| `app/pricing/page.tsx` | Added `WebPage` + `ItemList` of 7 `Offer`/`PriceSpecification` + `BreadcrumbList` via `metadata.other` |
| `app/free-trial/page.tsx` | Added `Event` + `Service` + `BreadcrumbList` via `metadata.other` |

---

## 6. Schema Implementation Architecture

MindPeak Institute uses three complementary injection mechanisms:

| Mechanism | Used In | Notes |
|-----------|---------|-------|
| Root layout `<script>` | `app/layout.tsx` | Global schemas on every page (Org, WebSite) |
| `metadata.other['script:ld+json']` | `app/*/page.tsx` | Page-level SSR schemas (about, courses, mentors, contact, pricing, free-trial) |
| View component `SEOHead` | `src/views/*.tsx` | Client component schemas (Contact, CourseDetail, city pages) — still SSR'd by Next.js |
| Utility functions | `src/lib/cityJsonLd.ts`, `src/lib/questionPageSEO.ts`, `src/lib/breadcrumbSchema.ts` | Generated schemas for dynamic pages |

All three patterns are valid. Google accepts JSON-LD anywhere in the document (head or body).

---

## 7. Google Validation

All generated schema blocks are syntactically valid JSON-LD. To test:

- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Schema.org Validator:** https://validator.schema.org/

**Test URLs (open in Rich Results Test to validate):**
| Page | Test URL |
|------|----------|
| Homepage | `https://search.google.com/test/rich-results?url=https://mindpeakinstitute.com/` |
| Contact | `https://search.google.com/test/rich-results?url=https://mindpeakinstitute.com/contact` |
| Courses | `https://search.google.com/test/rich-results?url=https://mindpeakinstitute.com/courses` |
| Pricing | `https://search.google.com/test/rich-results?url=https://mindpeakinstitute.com/pricing` |
| Free Trial | `https://search.google.com/test/rich-results?url=https://mindpeakinstitute.com/free-trial` |
| Mentors | `https://search.google.com/test/rich-results?url=https://mindpeakinstitute.com/mentors` |
| About | `https://search.google.com/test/rich-results?url=https://mindpeakinstitute.com/about` |
| Course (JEE) | `https://search.google.com/test/rich-results?url=https://mindpeakinstitute.com/course/jee-target-2027` |

---

*Generated by schema audit, 2026-06-10*
