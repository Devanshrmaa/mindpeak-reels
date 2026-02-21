# Missing Sitemap URLs — Complete Audit

> All URLs below exist as valid routable pages in the codebase but are **NOT** in any existing sitemap XML.
> Base: `https://mindpeakinstitute.com`

---

## 1. CORE / STATIC PAGES (1 URL)

```
https://mindpeakinstitute.com/study-plan
```

**Source**: Route in `src/App.tsx` → `StudyPlanPage`. Not present in `core/sitemap.xml` or `core.xml`.

---

## 2. COURSE DETAIL PAGES (11 URLs)

Route: `/course/:slug` → `CoursePage`

```
https://mindpeakinstitute.com/course/jee-main-target-2028
https://mindpeakinstitute.com/course/neet-target-2028
https://mindpeakinstitute.com/course/jee-target-2027
https://mindpeakinstitute.com/course/neet-target-2027
https://mindpeakinstitute.com/course/subject-crash-course
https://mindpeakinstitute.com/course/1-on-1-crash-program
https://mindpeakinstitute.com/course/6th-foundation
https://mindpeakinstitute.com/course/7th-foundation
https://mindpeakinstitute.com/course/8th-foundation
https://mindpeakinstitute.com/course/9th-foundation
https://mindpeakinstitute.com/course/10th-foundation
```

**Source**: `src/data/coursesData.ts` (slugs at lines 46, 183, 323, 402, 481, 560, 645, 716, 786, 856, 927).
> Note: Year-based slugs use dynamic `TWO_YEAR_TARGET=2028` and `ONE_YEAR_TARGET=2027` from `examYears.ts`.

---

## 3. SUBJECT / PREPARATION PAGES (1 URL)

6 of 7 subject slugs are in `jee/sitemap.xml` or `neet/sitemap.xml`. Missing:

```
https://mindpeakinstitute.com/jee-mock-test-strategy
```

**Source**: `src/pages/SubjectPage.tsx` — SUBJECTS object key `jee-mock-test-strategy`.

---

## 4. PRACTICE & PYQ HUB PAGES (4 URLs)

```
https://mindpeakinstitute.com/jee-practice
https://mindpeakinstitute.com/jee-pyq
https://mindpeakinstitute.com/neet-practice
https://mindpeakinstitute.com/neet-pyq
```

**Source**: Explicit routes in `src/App.tsx` for `JEEPracticeHub`, `JEEPYQHub`, `NEETPracticeHub`, `NEETPYQHub`.

---

## 5. AUTO-GENERATED BLOG POSTS (3 URLs, monthly rotation)

The `blog/sitemap.xml` (organized) has the 7 manual posts. These auto-generated monthly posts are missing:

```
https://mindpeakinstitute.com/blog/jee-2026-preparation-february
https://mindpeakinstitute.com/blog/neet-2026-biology-strategy-february
https://mindpeakinstitute.com/blog/time-management-february-2026
```

**Source**: `src/lib/autoBlogs.ts` — generates 3 posts per month dynamically.
> Note: Slugs change each month (e.g., `...-march`, `...-april`). The sitemap should be regenerated monthly.

---

## 6. EXPANSION CITY LOCATION PAGES (~326 URLs)

Each expansion city generates 2 pages: `jee-coaching-in-{slug}` + `neet-coaching-in-{slug}`.

Cities already covered in existing location sitemaps (tier1/tier2/tier3): delhi, mumbai, bangalore, hyderabad, chennai, kolkata, pune, ahmedabad, jaipur, kochi, indore, chandigarh, nagpur, coimbatore, surat, vadodara, dehradun, mysore, rajkot, udaipur, lucknow, patna, bhopal, visakhapatnam, nashik, guwahati, mangalore, ranchi, raipur, vijayawada, thane, navi-mumbai, aurangabad, madurai, trichy, kolhapur, solapur, hubli, belgaum, salem.

**All expansion cities below are MISSING** (from `src/data/cityExpansion.ts`):

### Maharashtra (6 cities × 2 = 12 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-sangli
https://mindpeakinstitute.com/neet-coaching-in-sangli
https://mindpeakinstitute.com/jee-coaching-in-amravati
https://mindpeakinstitute.com/neet-coaching-in-amravati
https://mindpeakinstitute.com/jee-coaching-in-latur
https://mindpeakinstitute.com/neet-coaching-in-latur
https://mindpeakinstitute.com/jee-coaching-in-ahmednagar
https://mindpeakinstitute.com/neet-coaching-in-ahmednagar
https://mindpeakinstitute.com/jee-coaching-in-jalgaon
https://mindpeakinstitute.com/neet-coaching-in-jalgaon
https://mindpeakinstitute.com/jee-coaching-in-dhule
https://mindpeakinstitute.com/neet-coaching-in-dhule
https://mindpeakinstitute.com/jee-coaching-in-satara
https://mindpeakinstitute.com/neet-coaching-in-satara
https://mindpeakinstitute.com/jee-coaching-in-ichalkaranji
https://mindpeakinstitute.com/neet-coaching-in-ichalkaranji
https://mindpeakinstitute.com/jee-coaching-in-parbhani
https://mindpeakinstitute.com/neet-coaching-in-parbhani
https://mindpeakinstitute.com/jee-coaching-in-nanded
https://mindpeakinstitute.com/neet-coaching-in-nanded
```

### Karnataka (5 cities × 2 = 10 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-gulbarga
https://mindpeakinstitute.com/neet-coaching-in-gulbarga
https://mindpeakinstitute.com/jee-coaching-in-davanagere
https://mindpeakinstitute.com/neet-coaching-in-davanagere
https://mindpeakinstitute.com/jee-coaching-in-shimoga
https://mindpeakinstitute.com/neet-coaching-in-shimoga
https://mindpeakinstitute.com/jee-coaching-in-tumkur
https://mindpeakinstitute.com/neet-coaching-in-tumkur
https://mindpeakinstitute.com/jee-coaching-in-hassan
https://mindpeakinstitute.com/neet-coaching-in-hassan
https://mindpeakinstitute.com/jee-coaching-in-bellary
https://mindpeakinstitute.com/neet-coaching-in-bellary
https://mindpeakinstitute.com/jee-coaching-in-bijapur
https://mindpeakinstitute.com/neet-coaching-in-bijapur
https://mindpeakinstitute.com/jee-coaching-in-raichur
https://mindpeakinstitute.com/neet-coaching-in-raichur
https://mindpeakinstitute.com/jee-coaching-in-udupi
https://mindpeakinstitute.com/neet-coaching-in-udupi
```

### Tamil Nadu (8 cities × 2 = 16 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-tirunelveli
https://mindpeakinstitute.com/neet-coaching-in-tirunelveli
https://mindpeakinstitute.com/jee-coaching-in-erode
https://mindpeakinstitute.com/neet-coaching-in-erode
https://mindpeakinstitute.com/jee-coaching-in-tiruppur
https://mindpeakinstitute.com/neet-coaching-in-tiruppur
https://mindpeakinstitute.com/jee-coaching-in-vellore
https://mindpeakinstitute.com/neet-coaching-in-vellore
https://mindpeakinstitute.com/jee-coaching-in-thanjavur
https://mindpeakinstitute.com/neet-coaching-in-thanjavur
https://mindpeakinstitute.com/jee-coaching-in-dindigul
https://mindpeakinstitute.com/neet-coaching-in-dindigul
https://mindpeakinstitute.com/jee-coaching-in-nagercoil
https://mindpeakinstitute.com/neet-coaching-in-nagercoil
https://mindpeakinstitute.com/jee-coaching-in-hosur
https://mindpeakinstitute.com/neet-coaching-in-hosur
https://mindpeakinstitute.com/jee-coaching-in-karur
https://mindpeakinstitute.com/neet-coaching-in-karur
https://mindpeakinstitute.com/jee-coaching-in-kumbakonam
https://mindpeakinstitute.com/neet-coaching-in-kumbakonam
https://mindpeakinstitute.com/jee-coaching-in-cuddalore
https://mindpeakinstitute.com/neet-coaching-in-cuddalore
```

### Kerala (8 cities × 2 = 16 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-thiruvananthapuram
https://mindpeakinstitute.com/neet-coaching-in-thiruvananthapuram
https://mindpeakinstitute.com/jee-coaching-in-kozhikode
https://mindpeakinstitute.com/neet-coaching-in-kozhikode
https://mindpeakinstitute.com/jee-coaching-in-thrissur
https://mindpeakinstitute.com/neet-coaching-in-thrissur
https://mindpeakinstitute.com/jee-coaching-in-kollam
https://mindpeakinstitute.com/neet-coaching-in-kollam
https://mindpeakinstitute.com/jee-coaching-in-palakkad
https://mindpeakinstitute.com/neet-coaching-in-palakkad
https://mindpeakinstitute.com/jee-coaching-in-alappuzha
https://mindpeakinstitute.com/neet-coaching-in-alappuzha
https://mindpeakinstitute.com/jee-coaching-in-kannur
https://mindpeakinstitute.com/neet-coaching-in-kannur
https://mindpeakinstitute.com/jee-coaching-in-kottayam
https://mindpeakinstitute.com/neet-coaching-in-kottayam
https://mindpeakinstitute.com/jee-coaching-in-malappuram
https://mindpeakinstitute.com/neet-coaching-in-malappuram
https://mindpeakinstitute.com/jee-coaching-in-pathanamthitta
https://mindpeakinstitute.com/neet-coaching-in-pathanamthitta
https://mindpeakinstitute.com/jee-coaching-in-idukki
https://mindpeakinstitute.com/neet-coaching-in-idukki
```

### Telangana (5 cities × 2 = 10 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-warangal
https://mindpeakinstitute.com/neet-coaching-in-warangal
https://mindpeakinstitute.com/jee-coaching-in-nizamabad
https://mindpeakinstitute.com/neet-coaching-in-nizamabad
https://mindpeakinstitute.com/jee-coaching-in-karimnagar
https://mindpeakinstitute.com/neet-coaching-in-karimnagar
https://mindpeakinstitute.com/jee-coaching-in-khammam
https://mindpeakinstitute.com/neet-coaching-in-khammam
https://mindpeakinstitute.com/jee-coaching-in-secunderabad
https://mindpeakinstitute.com/neet-coaching-in-secunderabad
https://mindpeakinstitute.com/jee-coaching-in-mahbubnagar
https://mindpeakinstitute.com/neet-coaching-in-mahbubnagar
https://mindpeakinstitute.com/jee-coaching-in-adilabad
https://mindpeakinstitute.com/neet-coaching-in-adilabad
```

### Andhra Pradesh (9 cities × 2 = 18 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-tirupati
https://mindpeakinstitute.com/neet-coaching-in-tirupati
https://mindpeakinstitute.com/jee-coaching-in-guntur
https://mindpeakinstitute.com/neet-coaching-in-guntur
https://mindpeakinstitute.com/jee-coaching-in-kakinada
https://mindpeakinstitute.com/neet-coaching-in-kakinada
https://mindpeakinstitute.com/jee-coaching-in-nellore
https://mindpeakinstitute.com/neet-coaching-in-nellore
https://mindpeakinstitute.com/jee-coaching-in-rajahmundry
https://mindpeakinstitute.com/neet-coaching-in-rajahmundry
https://mindpeakinstitute.com/jee-coaching-in-kurnool
https://mindpeakinstitute.com/neet-coaching-in-kurnool
https://mindpeakinstitute.com/jee-coaching-in-anantapur
https://mindpeakinstitute.com/neet-coaching-in-anantapur
https://mindpeakinstitute.com/jee-coaching-in-eluru
https://mindpeakinstitute.com/neet-coaching-in-eluru
https://mindpeakinstitute.com/jee-coaching-in-ongole
https://mindpeakinstitute.com/neet-coaching-in-ongole
```

### Rajasthan (7 cities × 2 = 14 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-jodhpur
https://mindpeakinstitute.com/neet-coaching-in-jodhpur
https://mindpeakinstitute.com/jee-coaching-in-kota
https://mindpeakinstitute.com/neet-coaching-in-kota
https://mindpeakinstitute.com/jee-coaching-in-bikaner
https://mindpeakinstitute.com/neet-coaching-in-bikaner
https://mindpeakinstitute.com/jee-coaching-in-ajmer
https://mindpeakinstitute.com/neet-coaching-in-ajmer
https://mindpeakinstitute.com/jee-coaching-in-sikar
https://mindpeakinstitute.com/neet-coaching-in-sikar
https://mindpeakinstitute.com/jee-coaching-in-alwar
https://mindpeakinstitute.com/neet-coaching-in-alwar
https://mindpeakinstitute.com/jee-coaching-in-bhilwara
https://mindpeakinstitute.com/neet-coaching-in-bhilwara
https://mindpeakinstitute.com/jee-coaching-in-pali
https://mindpeakinstitute.com/neet-coaching-in-pali
https://mindpeakinstitute.com/jee-coaching-in-chittorgarh
https://mindpeakinstitute.com/neet-coaching-in-chittorgarh
https://mindpeakinstitute.com/jee-coaching-in-tonk
https://mindpeakinstitute.com/neet-coaching-in-tonk
```

### Madhya Pradesh (8 cities × 2 = 16 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-gwalior
https://mindpeakinstitute.com/neet-coaching-in-gwalior
https://mindpeakinstitute.com/jee-coaching-in-jabalpur
https://mindpeakinstitute.com/neet-coaching-in-jabalpur
https://mindpeakinstitute.com/jee-coaching-in-ujjain
https://mindpeakinstitute.com/neet-coaching-in-ujjain
https://mindpeakinstitute.com/jee-coaching-in-sagar
https://mindpeakinstitute.com/neet-coaching-in-sagar
https://mindpeakinstitute.com/jee-coaching-in-satna
https://mindpeakinstitute.com/neet-coaching-in-satna
https://mindpeakinstitute.com/jee-coaching-in-rewa
https://mindpeakinstitute.com/neet-coaching-in-rewa
https://mindpeakinstitute.com/jee-coaching-in-indore-mp
https://mindpeakinstitute.com/neet-coaching-in-indore-mp
https://mindpeakinstitute.com/jee-coaching-in-vidisha
https://mindpeakinstitute.com/neet-coaching-in-vidisha
https://mindpeakinstitute.com/jee-coaching-in-katni
https://mindpeakinstitute.com/neet-coaching-in-katni
https://mindpeakinstitute.com/jee-coaching-in-chhindwara
https://mindpeakinstitute.com/neet-coaching-in-chhindwara
https://mindpeakinstitute.com/jee-coaching-in-mandsaur
https://mindpeakinstitute.com/neet-coaching-in-mandsaur
```

### Uttar Pradesh (15 cities × 2 = 30 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-noida
https://mindpeakinstitute.com/neet-coaching-in-noida
https://mindpeakinstitute.com/jee-coaching-in-ghaziabad
https://mindpeakinstitute.com/neet-coaching-in-ghaziabad
https://mindpeakinstitute.com/jee-coaching-in-agra
https://mindpeakinstitute.com/neet-coaching-in-agra
https://mindpeakinstitute.com/jee-coaching-in-varanasi
https://mindpeakinstitute.com/neet-coaching-in-varanasi
https://mindpeakinstitute.com/jee-coaching-in-kanpur
https://mindpeakinstitute.com/neet-coaching-in-kanpur
https://mindpeakinstitute.com/jee-coaching-in-allahabad
https://mindpeakinstitute.com/neet-coaching-in-allahabad
https://mindpeakinstitute.com/jee-coaching-in-meerut
https://mindpeakinstitute.com/neet-coaching-in-meerut
https://mindpeakinstitute.com/jee-coaching-in-bareilly
https://mindpeakinstitute.com/neet-coaching-in-bareilly
https://mindpeakinstitute.com/jee-coaching-in-aligarh
https://mindpeakinstitute.com/neet-coaching-in-aligarh
https://mindpeakinstitute.com/jee-coaching-in-moradabad
https://mindpeakinstitute.com/neet-coaching-in-moradabad
https://mindpeakinstitute.com/jee-coaching-in-gorakhpur
https://mindpeakinstitute.com/neet-coaching-in-gorakhpur
https://mindpeakinstitute.com/jee-coaching-in-mathura
https://mindpeakinstitute.com/neet-coaching-in-mathura
https://mindpeakinstitute.com/jee-coaching-in-saharanpur
https://mindpeakinstitute.com/neet-coaching-in-saharanpur
https://mindpeakinstitute.com/jee-coaching-in-firozabad
https://mindpeakinstitute.com/neet-coaching-in-firozabad
https://mindpeakinstitute.com/jee-coaching-in-jhansi
https://mindpeakinstitute.com/neet-coaching-in-jhansi
https://mindpeakinstitute.com/jee-coaching-in-greater-noida
https://mindpeakinstitute.com/neet-coaching-in-greater-noida
https://mindpeakinstitute.com/jee-coaching-in-muzaffarnagar
https://mindpeakinstitute.com/neet-coaching-in-muzaffarnagar
https://mindpeakinstitute.com/jee-coaching-in-shahjahanpur
https://mindpeakinstitute.com/neet-coaching-in-shahjahanpur
https://mindpeakinstitute.com/jee-coaching-in-rampur
https://mindpeakinstitute.com/neet-coaching-in-rampur
```

### Bihar (5 + 5 additional = 10 cities × 2 = 20 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-gaya
https://mindpeakinstitute.com/neet-coaching-in-gaya
https://mindpeakinstitute.com/jee-coaching-in-muzaffarpur
https://mindpeakinstitute.com/neet-coaching-in-muzaffarpur
https://mindpeakinstitute.com/jee-coaching-in-bhagalpur
https://mindpeakinstitute.com/neet-coaching-in-bhagalpur
https://mindpeakinstitute.com/jee-coaching-in-darbhanga
https://mindpeakinstitute.com/neet-coaching-in-darbhanga
https://mindpeakinstitute.com/jee-coaching-in-purnia
https://mindpeakinstitute.com/neet-coaching-in-purnia
https://mindpeakinstitute.com/jee-coaching-in-begusarai
https://mindpeakinstitute.com/neet-coaching-in-begusarai
https://mindpeakinstitute.com/jee-coaching-in-chapra
https://mindpeakinstitute.com/neet-coaching-in-chapra
https://mindpeakinstitute.com/jee-coaching-in-samastipur
https://mindpeakinstitute.com/neet-coaching-in-samastipur
https://mindpeakinstitute.com/jee-coaching-in-arrah
https://mindpeakinstitute.com/neet-coaching-in-arrah
https://mindpeakinstitute.com/jee-coaching-in-katihar
https://mindpeakinstitute.com/neet-coaching-in-katihar
```

### West Bengal (7 + 5 additional = 12 cities × 2 = 24 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-howrah
https://mindpeakinstitute.com/neet-coaching-in-howrah
https://mindpeakinstitute.com/jee-coaching-in-durgapur
https://mindpeakinstitute.com/neet-coaching-in-durgapur
https://mindpeakinstitute.com/jee-coaching-in-siliguri
https://mindpeakinstitute.com/neet-coaching-in-siliguri
https://mindpeakinstitute.com/jee-coaching-in-asansol
https://mindpeakinstitute.com/neet-coaching-in-asansol
https://mindpeakinstitute.com/jee-coaching-in-kharagpur
https://mindpeakinstitute.com/neet-coaching-in-kharagpur
https://mindpeakinstitute.com/jee-coaching-in-haldia
https://mindpeakinstitute.com/neet-coaching-in-haldia
https://mindpeakinstitute.com/jee-coaching-in-bardhaman
https://mindpeakinstitute.com/neet-coaching-in-bardhaman
https://mindpeakinstitute.com/jee-coaching-in-kalyani
https://mindpeakinstitute.com/neet-coaching-in-kalyani
https://mindpeakinstitute.com/jee-coaching-in-barasat
https://mindpeakinstitute.com/neet-coaching-in-barasat
https://mindpeakinstitute.com/jee-coaching-in-berhampore
https://mindpeakinstitute.com/neet-coaching-in-berhampore
https://mindpeakinstitute.com/jee-coaching-in-malda
https://mindpeakinstitute.com/neet-coaching-in-malda
https://mindpeakinstitute.com/jee-coaching-in-midnapore
https://mindpeakinstitute.com/neet-coaching-in-midnapore
```

### Gujarat (8 + 4 additional = 12 cities × 2 = 24 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-gandhinagar
https://mindpeakinstitute.com/neet-coaching-in-gandhinagar
https://mindpeakinstitute.com/jee-coaching-in-bhavnagar
https://mindpeakinstitute.com/neet-coaching-in-bhavnagar
https://mindpeakinstitute.com/jee-coaching-in-jamnagar
https://mindpeakinstitute.com/neet-coaching-in-jamnagar
https://mindpeakinstitute.com/jee-coaching-in-junagadh
https://mindpeakinstitute.com/neet-coaching-in-junagadh
https://mindpeakinstitute.com/jee-coaching-in-anand
https://mindpeakinstitute.com/neet-coaching-in-anand
https://mindpeakinstitute.com/jee-coaching-in-mehsana
https://mindpeakinstitute.com/neet-coaching-in-mehsana
https://mindpeakinstitute.com/jee-coaching-in-bharuch
https://mindpeakinstitute.com/neet-coaching-in-bharuch
https://mindpeakinstitute.com/jee-coaching-in-navsari
https://mindpeakinstitute.com/neet-coaching-in-navsari
https://mindpeakinstitute.com/jee-coaching-in-vapi
https://mindpeakinstitute.com/neet-coaching-in-vapi
https://mindpeakinstitute.com/jee-coaching-in-morbi
https://mindpeakinstitute.com/neet-coaching-in-morbi
https://mindpeakinstitute.com/jee-coaching-in-porbandar
https://mindpeakinstitute.com/neet-coaching-in-porbandar
https://mindpeakinstitute.com/jee-coaching-in-surendranagar
https://mindpeakinstitute.com/neet-coaching-in-surendranagar
```

### Punjab (6 + 2 additional = 8 cities × 2 = 16 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-ludhiana
https://mindpeakinstitute.com/neet-coaching-in-ludhiana
https://mindpeakinstitute.com/jee-coaching-in-amritsar
https://mindpeakinstitute.com/neet-coaching-in-amritsar
https://mindpeakinstitute.com/jee-coaching-in-jalandhar
https://mindpeakinstitute.com/neet-coaching-in-jalandhar
https://mindpeakinstitute.com/jee-coaching-in-patiala
https://mindpeakinstitute.com/neet-coaching-in-patiala
https://mindpeakinstitute.com/jee-coaching-in-bathinda
https://mindpeakinstitute.com/neet-coaching-in-bathinda
https://mindpeakinstitute.com/jee-coaching-in-mohali
https://mindpeakinstitute.com/neet-coaching-in-mohali
https://mindpeakinstitute.com/jee-coaching-in-hoshiarpur
https://mindpeakinstitute.com/neet-coaching-in-hoshiarpur
https://mindpeakinstitute.com/jee-coaching-in-phagwara
https://mindpeakinstitute.com/neet-coaching-in-phagwara
```

### Haryana (7 + 4 additional = 11 cities × 2 = 22 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-gurgaon
https://mindpeakinstitute.com/neet-coaching-in-gurgaon
https://mindpeakinstitute.com/jee-coaching-in-faridabad
https://mindpeakinstitute.com/neet-coaching-in-faridabad
https://mindpeakinstitute.com/jee-coaching-in-karnal
https://mindpeakinstitute.com/neet-coaching-in-karnal
https://mindpeakinstitute.com/jee-coaching-in-ambala
https://mindpeakinstitute.com/neet-coaching-in-ambala
https://mindpeakinstitute.com/jee-coaching-in-panipat
https://mindpeakinstitute.com/neet-coaching-in-panipat
https://mindpeakinstitute.com/jee-coaching-in-hisar
https://mindpeakinstitute.com/neet-coaching-in-hisar
https://mindpeakinstitute.com/jee-coaching-in-rohtak
https://mindpeakinstitute.com/neet-coaching-in-rohtak
https://mindpeakinstitute.com/jee-coaching-in-sonipat
https://mindpeakinstitute.com/neet-coaching-in-sonipat
https://mindpeakinstitute.com/jee-coaching-in-yamunanagar
https://mindpeakinstitute.com/neet-coaching-in-yamunanagar
https://mindpeakinstitute.com/jee-coaching-in-rewari
https://mindpeakinstitute.com/neet-coaching-in-rewari
https://mindpeakinstitute.com/jee-coaching-in-sirsa
https://mindpeakinstitute.com/neet-coaching-in-sirsa
```

### Odisha (5 + 2 additional = 7 cities × 2 = 14 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-bhubaneswar
https://mindpeakinstitute.com/neet-coaching-in-bhubaneswar
https://mindpeakinstitute.com/jee-coaching-in-cuttack
https://mindpeakinstitute.com/neet-coaching-in-cuttack
https://mindpeakinstitute.com/jee-coaching-in-rourkela
https://mindpeakinstitute.com/neet-coaching-in-rourkela
https://mindpeakinstitute.com/jee-coaching-in-sambalpur
https://mindpeakinstitute.com/neet-coaching-in-sambalpur
https://mindpeakinstitute.com/jee-coaching-in-berhampur
https://mindpeakinstitute.com/neet-coaching-in-berhampur
https://mindpeakinstitute.com/jee-coaching-in-balasore
https://mindpeakinstitute.com/neet-coaching-in-balasore
https://mindpeakinstitute.com/jee-coaching-in-brahmapur
https://mindpeakinstitute.com/neet-coaching-in-brahmapur
```

### Jharkhand (5 cities × 2 = 10 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-jamshedpur
https://mindpeakinstitute.com/neet-coaching-in-jamshedpur
https://mindpeakinstitute.com/jee-coaching-in-dhanbad
https://mindpeakinstitute.com/neet-coaching-in-dhanbad
https://mindpeakinstitute.com/jee-coaching-in-bokaro
https://mindpeakinstitute.com/neet-coaching-in-bokaro
https://mindpeakinstitute.com/jee-coaching-in-hazaribagh
https://mindpeakinstitute.com/neet-coaching-in-hazaribagh
https://mindpeakinstitute.com/jee-coaching-in-deoghar
https://mindpeakinstitute.com/neet-coaching-in-deoghar
```

### Chhattisgarh (3 + 2 additional = 5 cities × 2 = 10 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-bilaspur
https://mindpeakinstitute.com/neet-coaching-in-bilaspur
https://mindpeakinstitute.com/jee-coaching-in-durg
https://mindpeakinstitute.com/neet-coaching-in-durg
https://mindpeakinstitute.com/jee-coaching-in-korba
https://mindpeakinstitute.com/neet-coaching-in-korba
https://mindpeakinstitute.com/jee-coaching-in-bhilai
https://mindpeakinstitute.com/neet-coaching-in-bhilai
https://mindpeakinstitute.com/jee-coaching-in-rajnandgaon
https://mindpeakinstitute.com/neet-coaching-in-rajnandgaon
```

### Assam & Northeast (11 + 2 additional = 13 cities × 2 = 26 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-dibrugarh
https://mindpeakinstitute.com/neet-coaching-in-dibrugarh
https://mindpeakinstitute.com/jee-coaching-in-silchar
https://mindpeakinstitute.com/neet-coaching-in-silchar
https://mindpeakinstitute.com/jee-coaching-in-jorhat
https://mindpeakinstitute.com/neet-coaching-in-jorhat
https://mindpeakinstitute.com/jee-coaching-in-tezpur
https://mindpeakinstitute.com/neet-coaching-in-tezpur
https://mindpeakinstitute.com/jee-coaching-in-imphal
https://mindpeakinstitute.com/neet-coaching-in-imphal
https://mindpeakinstitute.com/jee-coaching-in-shillong
https://mindpeakinstitute.com/neet-coaching-in-shillong
https://mindpeakinstitute.com/jee-coaching-in-agartala
https://mindpeakinstitute.com/neet-coaching-in-agartala
https://mindpeakinstitute.com/jee-coaching-in-aizawl
https://mindpeakinstitute.com/neet-coaching-in-aizawl
https://mindpeakinstitute.com/jee-coaching-in-kohima
https://mindpeakinstitute.com/neet-coaching-in-kohima
https://mindpeakinstitute.com/jee-coaching-in-itanagar
https://mindpeakinstitute.com/neet-coaching-in-itanagar
https://mindpeakinstitute.com/jee-coaching-in-gangtok
https://mindpeakinstitute.com/neet-coaching-in-gangtok
https://mindpeakinstitute.com/jee-coaching-in-nagaon
https://mindpeakinstitute.com/neet-coaching-in-nagaon
https://mindpeakinstitute.com/jee-coaching-in-bongaigaon
https://mindpeakinstitute.com/neet-coaching-in-bongaigaon
```

### Uttarakhand (3 cities × 2 = 6 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-haridwar
https://mindpeakinstitute.com/neet-coaching-in-haridwar
https://mindpeakinstitute.com/jee-coaching-in-haldwani
https://mindpeakinstitute.com/neet-coaching-in-haldwani
https://mindpeakinstitute.com/jee-coaching-in-roorkee
https://mindpeakinstitute.com/neet-coaching-in-roorkee
```

### Himachal Pradesh (4 cities × 2 = 8 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-shimla
https://mindpeakinstitute.com/neet-coaching-in-shimla
https://mindpeakinstitute.com/jee-coaching-in-dharamshala
https://mindpeakinstitute.com/neet-coaching-in-dharamshala
https://mindpeakinstitute.com/jee-coaching-in-mandi
https://mindpeakinstitute.com/neet-coaching-in-mandi
https://mindpeakinstitute.com/jee-coaching-in-solan
https://mindpeakinstitute.com/neet-coaching-in-solan
```

### Jammu & Kashmir (2 cities × 2 = 4 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-jammu
https://mindpeakinstitute.com/neet-coaching-in-jammu
https://mindpeakinstitute.com/jee-coaching-in-srinagar
https://mindpeakinstitute.com/neet-coaching-in-srinagar
```

### Goa (2 cities × 2 = 4 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-panaji
https://mindpeakinstitute.com/neet-coaching-in-panaji
https://mindpeakinstitute.com/jee-coaching-in-margao
https://mindpeakinstitute.com/neet-coaching-in-margao
```

### Union Territories (2 cities × 2 = 4 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-pondicherry
https://mindpeakinstitute.com/neet-coaching-in-pondicherry
https://mindpeakinstitute.com/jee-coaching-in-daman
https://mindpeakinstitute.com/neet-coaching-in-daman
```

### Metro Sub-Areas — Delhi (10 areas × 2 = 20 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-rohini
https://mindpeakinstitute.com/neet-coaching-in-rohini
https://mindpeakinstitute.com/jee-coaching-in-dwarka
https://mindpeakinstitute.com/neet-coaching-in-dwarka
https://mindpeakinstitute.com/jee-coaching-in-pitampura
https://mindpeakinstitute.com/neet-coaching-in-pitampura
https://mindpeakinstitute.com/jee-coaching-in-janakpuri
https://mindpeakinstitute.com/neet-coaching-in-janakpuri
https://mindpeakinstitute.com/jee-coaching-in-laxmi-nagar
https://mindpeakinstitute.com/neet-coaching-in-laxmi-nagar
https://mindpeakinstitute.com/jee-coaching-in-rajouri-garden
https://mindpeakinstitute.com/neet-coaching-in-rajouri-garden
https://mindpeakinstitute.com/jee-coaching-in-south-delhi
https://mindpeakinstitute.com/neet-coaching-in-south-delhi
https://mindpeakinstitute.com/jee-coaching-in-east-delhi
https://mindpeakinstitute.com/neet-coaching-in-east-delhi
https://mindpeakinstitute.com/jee-coaching-in-karol-bagh
https://mindpeakinstitute.com/neet-coaching-in-karol-bagh
https://mindpeakinstitute.com/jee-coaching-in-greater-kailash
https://mindpeakinstitute.com/neet-coaching-in-greater-kailash
```

### Metro Sub-Areas — Mumbai (8 areas × 2 = 16 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-andheri
https://mindpeakinstitute.com/neet-coaching-in-andheri
https://mindpeakinstitute.com/jee-coaching-in-borivali
https://mindpeakinstitute.com/neet-coaching-in-borivali
https://mindpeakinstitute.com/jee-coaching-in-dadar
https://mindpeakinstitute.com/neet-coaching-in-dadar
https://mindpeakinstitute.com/jee-coaching-in-mulund
https://mindpeakinstitute.com/neet-coaching-in-mulund
https://mindpeakinstitute.com/jee-coaching-in-goregaon
https://mindpeakinstitute.com/neet-coaching-in-goregaon
https://mindpeakinstitute.com/jee-coaching-in-kandivali
https://mindpeakinstitute.com/neet-coaching-in-kandivali
https://mindpeakinstitute.com/jee-coaching-in-powai
https://mindpeakinstitute.com/neet-coaching-in-powai
https://mindpeakinstitute.com/jee-coaching-in-chembur
https://mindpeakinstitute.com/neet-coaching-in-chembur
```

### Metro Sub-Areas — Bangalore (8 areas × 2 = 16 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-koramangala
https://mindpeakinstitute.com/neet-coaching-in-koramangala
https://mindpeakinstitute.com/jee-coaching-in-btm-layout
https://mindpeakinstitute.com/neet-coaching-in-btm-layout
https://mindpeakinstitute.com/jee-coaching-in-whitefield
https://mindpeakinstitute.com/neet-coaching-in-whitefield
https://mindpeakinstitute.com/jee-coaching-in-jayanagar
https://mindpeakinstitute.com/neet-coaching-in-jayanagar
https://mindpeakinstitute.com/jee-coaching-in-indiranagar
https://mindpeakinstitute.com/neet-coaching-in-indiranagar
https://mindpeakinstitute.com/jee-coaching-in-hsr-layout
https://mindpeakinstitute.com/neet-coaching-in-hsr-layout
https://mindpeakinstitute.com/jee-coaching-in-rajajinagar
https://mindpeakinstitute.com/neet-coaching-in-rajajinagar
https://mindpeakinstitute.com/jee-coaching-in-electronic-city
https://mindpeakinstitute.com/neet-coaching-in-electronic-city
```

### Metro Sub-Areas — Hyderabad (6 areas × 2 = 12 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-kukatpally
https://mindpeakinstitute.com/neet-coaching-in-kukatpally
https://mindpeakinstitute.com/jee-coaching-in-dilsukhnagar
https://mindpeakinstitute.com/neet-coaching-in-dilsukhnagar
https://mindpeakinstitute.com/jee-coaching-in-ameerpet
https://mindpeakinstitute.com/neet-coaching-in-ameerpet
https://mindpeakinstitute.com/jee-coaching-in-begumpet
https://mindpeakinstitute.com/neet-coaching-in-begumpet
https://mindpeakinstitute.com/jee-coaching-in-madhapur
https://mindpeakinstitute.com/neet-coaching-in-madhapur
https://mindpeakinstitute.com/jee-coaching-in-gachibowli
https://mindpeakinstitute.com/neet-coaching-in-gachibowli
```

### Metro Sub-Areas — Chennai (6 areas × 2 = 12 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-adyar
https://mindpeakinstitute.com/neet-coaching-in-adyar
https://mindpeakinstitute.com/jee-coaching-in-anna-nagar
https://mindpeakinstitute.com/neet-coaching-in-anna-nagar
https://mindpeakinstitute.com/jee-coaching-in-velachery
https://mindpeakinstitute.com/neet-coaching-in-velachery
https://mindpeakinstitute.com/jee-coaching-in-tambaram
https://mindpeakinstitute.com/neet-coaching-in-tambaram
https://mindpeakinstitute.com/jee-coaching-in-porur
https://mindpeakinstitute.com/neet-coaching-in-porur
https://mindpeakinstitute.com/jee-coaching-in-t-nagar
https://mindpeakinstitute.com/neet-coaching-in-t-nagar
```

### Metro Sub-Areas — Pune (4 areas × 2 = 8 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-kothrud
https://mindpeakinstitute.com/neet-coaching-in-kothrud
https://mindpeakinstitute.com/jee-coaching-in-viman-nagar
https://mindpeakinstitute.com/neet-coaching-in-viman-nagar
https://mindpeakinstitute.com/jee-coaching-in-hadapsar
https://mindpeakinstitute.com/neet-coaching-in-hadapsar
https://mindpeakinstitute.com/jee-coaching-in-pimpri-chinchwad
https://mindpeakinstitute.com/neet-coaching-in-pimpri-chinchwad
```

### Metro Sub-Areas — Kolkata (5 areas × 2 = 10 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-salt-lake
https://mindpeakinstitute.com/neet-coaching-in-salt-lake
https://mindpeakinstitute.com/jee-coaching-in-new-town
https://mindpeakinstitute.com/neet-coaching-in-new-town
https://mindpeakinstitute.com/jee-coaching-in-ballygunge
https://mindpeakinstitute.com/neet-coaching-in-ballygunge
https://mindpeakinstitute.com/jee-coaching-in-jadavpur
https://mindpeakinstitute.com/neet-coaching-in-jadavpur
https://mindpeakinstitute.com/jee-coaching-in-lake-town
https://mindpeakinstitute.com/neet-coaching-in-lake-town
```

### NCR Satellite Cities (3 areas × 2 = 6 URLs)
```
https://mindpeakinstitute.com/jee-coaching-in-indirapuram
https://mindpeakinstitute.com/neet-coaching-in-indirapuram
https://mindpeakinstitute.com/jee-coaching-in-vasundhara
https://mindpeakinstitute.com/neet-coaching-in-vasundhara
https://mindpeakinstitute.com/jee-coaching-in-sector-62-noida
https://mindpeakinstitute.com/neet-coaching-in-sector-62-noida
```

---

## 7. TOPIC-LEVEL PAGES (~870+ URLs, mostly missing)

The sitemaps `jee/topics/sitemap.xml` and `neet/topics/sitemap.xml` contain only **representative subsets** (15 JEE + 11 NEET = 26 total). The comments in those files say:
- "Run the script for complete **500+ topic URLs**" (JEE)
- "Run the script for complete **400+ topic URLs**" (NEET)

**Pattern**: `https://mindpeakinstitute.com/{chapter-slug}/{topic-slug}`

### Already in sitemap (26 of ~900+):

**JEE Topics covered** (15):
```
jee-physics-kinematics/motion-in-a-straight-line
jee-physics-kinematics/equations-of-motion
jee-physics-kinematics/projectile-motion
jee-physics-newtons-laws/free-body-diagrams
jee-physics-newtons-laws/friction-static-kinetic
jee-physics-work-energy-power/work-energy-theorem
jee-physics-electrostatics/coulombs-law
jee-physics-electrostatics/gauss-law
jee-physics-modern-physics/photoelectric-effect
jee-chemistry-atomic-structure/bohrs-model
jee-chemistry-chemical-bonding/vsepr-theory
jee-chemistry-goc/inductive-effect
jee-maths-limits-continuity/lhopitals-rule
jee-maths-differentiation/chain-rule
jee-maths-probability/bayes-theorem
```

**NEET Topics covered** (11):
```
neet-biology-cell-unit-of-life/cell-membrane-structure
neet-biology-photosynthesis/light-reactions
neet-biology-digestion-absorption/human-digestive-system
neet-biology-inheritance-variation/mendels-laws
neet-biology-molecular-inheritance/dna-replication
neet-biology-biotechnology-principles/pcr-polymerase-chain-reaction
neet-biology-ecosystem/energy-flow-10-rule
neet-physics-kinematics/projectile-motion
neet-physics-electrostatics/coulombs-law
neet-chemistry-chemical-bonding/hybridization
neet-chemistry-equilibrium/le-chateliers-principle
```

**Action needed**: Run `node scripts/generate-enterprise-sitemaps.mjs` to generate the full 900+ topic URLs. Each chapter has 3-8 topics; with 147 chapters that's ~500-900+ topic pages.

---

## 8. JEE PRACTICE QUESTION PAGES (dynamic count — ALL MISSING)

The old `jee-practice.xml` has stale URLs using a **wrong format** (`jee-physics-easy-q1`).  
The actual app generates slugs as: `jee-{subject}-{chapter}-{topic}-{difficulty}-q{n}`

**Pattern**: `https://mindpeakinstitute.com/jee-{subject}-{chapter}-{topic}-{easy|medium|hard}-q{N}`

**Source**: `src/data/practice/index.ts` → `buildAllPracticeSlugs()`  
- 3 subjects (physics, chemistry, mathematics)
- Multiple chapters per subject (from 14 practice data files)
- Multiple topics per chapter
- 3 difficulties × N questions per topic

**Example URLs** (actual format):
```
https://mindpeakinstitute.com/jee-physics-kinematics-motion-in-a-straight-line-easy-q1
https://mindpeakinstitute.com/jee-chemistry-atomic-structure-bohrs-model-medium-q3
https://mindpeakinstitute.com/jee-mathematics-limits-continuity-lhopitals-rule-hard-q5
```

> Exact count requires running `buildAllPracticeSlugs()`. Estimated: 1,000-3,000+ URLs.

---

## 9. NEET PRACTICE QUESTION PAGES (dynamic count — ALL MISSING)

The old `neet-practice.xml` has stale URLs using a **wrong format** (`neet-botany-question-1`).  
The actual app generates slugs as: `neet-{subject}-{chapter}-{topic}-{difficulty}-q{n}`

**Pattern**: `https://mindpeakinstitute.com/neet-{subject}-{chapter}-{topic}-{easy|medium|hard}-q{N}`

**Source**: `src/data/neet-practice/index.ts` → `buildAllNEETPracticeSlugs()`  
- 3 subjects (biology, physics, chemistry)
- Multiple chapters (from 4 data files)

**Example URLs**:
```
https://mindpeakinstitute.com/neet-biology-cell-unit-of-life-cell-membrane-structure-easy-q1
https://mindpeakinstitute.com/neet-physics-kinematics-projectile-motion-medium-q2
https://mindpeakinstitute.com/neet-chemistry-chemical-bonding-hybridization-hard-q3
```

> Estimated: 500-1,500+ URLs.

---

## 10. JEE PYQ (Previous Year Question) PAGES (dynamic count — ALL MISSING)

**Pattern**: `https://mindpeakinstitute.com/jee-pyq-{subject}-{chapter}-q{N}`

**Source**: `src/data/pyq/index.ts` → `buildAllPYQSlugs()`  
- 3 subjects (physics, chemistry, mathematics)
- 11 data files (physics-pyq-1 to 4, chemistry-pyq-1 to 4, maths-pyq-1 to 3)

**Example URLs**:
```
https://mindpeakinstitute.com/jee-pyq-physics-kinematics-q1
https://mindpeakinstitute.com/jee-pyq-chemistry-atomic-structure-q5
https://mindpeakinstitute.com/jee-pyq-mathematics-limits-continuity-q3
```

> Estimated: 300-900+ URLs.

---

## 11. NEET PYQ PAGES (dynamic count — ALL MISSING)

**Pattern**: `https://mindpeakinstitute.com/neet-pyq-{subject}-{chapter}-q{N}`

**Source**: `src/data/neet-pyq/index.ts` → `buildAllNEETPYQSlugs()`  
- 3 subjects (biology, physics, chemistry)
- 4 data files

**Example URLs**:
```
https://mindpeakinstitute.com/neet-pyq-biology-cell-unit-of-life-q1
https://mindpeakinstitute.com/neet-pyq-physics-kinematics-q2
https://mindpeakinstitute.com/neet-pyq-chemistry-chemical-bonding-q4
```

> Estimated: 200-600+ URLs.

---

## SUMMARY

| Category | Count | Status |
|---|---|---|
| Core static pages | 1 | `/study-plan` |
| Course detail pages | 11 | All missing |
| Subject pages | 1 | `jee-mock-test-strategy` |
| Hub pages | 4 | All missing |
| Auto-generated blogs | 3 | Monthly rotation |
| Expansion city locations | ~326 | All missing (163 cities × 2) |
| Topic-level pages | ~870+ | Only 26 in sitemap |
| JEE Practice questions | ~1,000-3,000+ | All missing (stale sitemap) |
| NEET Practice questions | ~500-1,500+ | All missing (stale sitemap) |
| JEE PYQ questions | ~300-900+ | All missing |
| NEET PYQ questions | ~200-600+ | All missing |
| **TOTAL ESTIMATED** | **~3,200-7,200+** | |

---

## ALSO NOTED: Stale/Phantom Sitemaps

The following root-level sitemaps contain URLs that **do NOT correspond to any actual app route**:

| Stale Sitemap | Issue |
|---|---|
| `jee-practice.xml` (452 URLs) | Uses `jee-physics-easy-q1` format; actual is `jee-physics-kinematics-...-easy-q1` |
| `neet-practice.xml` (201 URLs) | Uses `neet-botany-question-1` format; actual is `neet-biology-...-easy-q1` |
| `blog.xml` (67 URLs) | Uses `blog/jee-preparation-1` format; actual slugs are `blog/top-10-jee-preparation-tips-2026` etc. |
| `neet-chapters.xml` (40 URLs) | Uses `neet-botany-chapter-1` format; actual slugs are `neet-biology-living-world-classification` etc. |

These should be **deleted or replaced** with correct URLs.
