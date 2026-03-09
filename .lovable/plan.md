

## Add `boardType`, `localCoachingGap`, `distanceToMetro` to All 130+ City Entries

### Problem
Only `thane` has the three structured fields (`boardType`, `localCoachingGap`, `distanceToMetro`). The LocationPage.tsx already renders these in the City Snapshot Card and Student Challenge sections, but for 130+ other cities they fall back to generic defaults ("CBSE / State Board") or show nothing.

### Solution
Add accurate, city-specific values for all three fields to every entry in `src/data/cityUniqueContent.ts`. Each value will be genuinely localized:

- **boardType**: Actual dominant board(s) in that city (e.g., "Maharashtra State Board / CBSE" for MH cities, "TN State Board / Matriculation" for TN cities, "CBSE / ICSE" for NRI hubs, "Bihar Board / CBSE" for Bihar cities)
- **localCoachingGap**: A specific, factual statement about what's missing in local coaching (e.g., "Zero IIT-alumni faculty among 15 coaching centres" or "All 50+ KPHB centres run 100-300 student batches — no 1-on-1 option exists")
- **distanceToMetro**: Distance to nearest IIT/NIT/AIIMS campus with specific measurement (e.g., "200 km to IIT Bombay", "0 km — IIT Kanpur is in the city")

### Scope
~130 city entries across all state groups:
- Maharashtra (~15 cities)
- Karnataka (~12 cities)
- Tamil Nadu (~12 cities)
- Kerala (~6 cities)
- Andhra Pradesh (~5 cities)
- Telangana (~4 cities)
- Rajasthan (~5 cities)
- Uttar Pradesh (~8 cities)
- Bihar (~5 cities)
- Gujarat (~4 cities)
- Madhya Pradesh (~3 cities)
- West Bengal (~3 cities)
- Odisha, Jharkhand, Chhattisgarh, Punjab, Assam (~8 cities)
- Delhi metro areas (~6 entries)
- Mumbai metro areas (~4 entries)
- Bangalore metro areas (~3 entries)
- Hyderabad metro areas (~2 entries)
- Chennai metro areas (~2 entries)
- Pune metro areas (~2 entries)
- Kolkata metro areas (~2 entries)
- NRI cities (~15 entries)

### File Changed
`src/data/cityUniqueContent.ts` — add three fields to every existing entry

### No UI Changes Needed
LocationPage.tsx already renders these fields in the City Snapshot Card (boardType badge) and Student Challenge callout (localCoachingGap as italic text). Adding the data automatically enriches all 130+ city pages.

