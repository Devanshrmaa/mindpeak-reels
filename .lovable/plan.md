

## Location Pages: More Depth + Higher CTR (Bangalore Focus)

### Problem
1. **Missing unique data for Tier 1 cities**: Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Jaipur, Lucknow, Kochi — none have entries in `cityUniqueContent.ts`. This means the City Snapshot Card, Student Challenge callout, notable schools chips, and nearest premier institute all **don't render** for the highest-traffic pages.
2. **Generic SEO titles/descriptions**: Current title is `Best JEE Coaching in Bangalore — 1-on-1 Personalized | MindPeak`. No year, no power words, no differentiator — low CTR.
3. **No Bangalore-specific depth sections**: The page uses good structured UI but the content is still the same template pattern. Bangalore deserves deeper, more specific content given it drives the most traffic.

### Solution

#### A. Add `cityUniqueContent` entries for all 12 Tier 1 cities
Each with genuine, city-specific data: `population`, `knownFor`, `educationFact`, `localChallenge`, `nearestPremierInstitute`, `notableSchools`, `heroVariant`, `uniqueFAQ`, `boardType`, `localCoachingGap`, `distanceToMetro`, `examCenters`.

Example for Bangalore:
- `population: '~1.35 crore'`
- `knownFor: 'India\'s Silicon Valley — home to 40% of India\'s tech startups, IISc, and a parent demographic that demands data-driven education.'`
- `notableSchools: ['Bishop Cotton Boys\' School', 'National Public School (Indiranagar)', 'Inventure Academy', 'DPS Whitefield', 'Bangalore International School']`
- `localChallenge: 'Bangalore\'s ORR traffic means students in Electronic City, Yelahanka, or Sarjapur Road lose 2-3 hours daily commuting to Koramangala/BTM coaching hubs.'`
- `boardType: 'CBSE / ICSE / Karnataka State Board / IB / IGCSE'`
- `localCoachingGap: '90% of Bangalore coaching centres run 80-150 student batches — the "personalized" claim is a marketing label, not reality.'`
- `examCenters: ['KCET centre: PES University, 0 km', 'JEE centre: REVA University, 15 km']`

#### B. CTR-optimized SEO titles & descriptions
Update `getLocationTitle` and `getLocationDescription` to include:
- Current year (2026)
- Power words: `[Free Demo]`, `Crack`, `Top Ranked`
- Specific outcomes in description: `AIR 42 results`, `KCET + JEE integrated`

New pattern:
- Title: `#1 JEE Coaching in Bangalore 2026 — 1-on-1 Mentors [Free Demo] | MindPeak`
- Description: `Crack JEE from Bangalore with dedicated IIT-alumni mentors. KCET + JEE integrated prep. AIR 42 results. No commute — study from Whitefield, Koramangala, or anywhere. Book free demo.`

#### C. Add "Bangalore Success Map" section for Tier 1 cities
A new section in LocationPage.tsx that only renders for Tier 1 cities with rich testimonial data — showing a mini results dashboard:
- Number of students from this city
- Best rank achieved
- Average score improvement
- Locality breakdown (students from which areas)

#### D. Richer FAQ section for Bangalore
Add 4 more Bangalore-specific FAQs from `uniqueFAQ` in cityUniqueContent, covering KCET integration, international school calendars, traffic-free coaching, and parent dashboard features.

### Files to Modify

| File | Change |
|---|---|
| `src/data/cityUniqueContent.ts` | Add entries for delhi, mumbai, bangalore, hyderabad, chennai, kolkata, pune, ahmedabad, jaipur, lucknow, kochi (11 Tier 1 cities) |
| `src/data/cityData.ts` | Update `getLocationTitle` and `getLocationDescription` with CTR-optimized patterns including year, power words, and specific outcomes |
| `src/views/LocationPage.tsx` | Add "City Results Dashboard" section for Tier 1 cities; inject `uniqueFAQ` from cityUniqueContent into the FAQ accordion |

