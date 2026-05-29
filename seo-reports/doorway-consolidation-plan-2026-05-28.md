# Doorway → Regional-Hub Consolidation Plan
### Making recovery action #4 executable: which cities → which hubs, with the 301 / 410 / keep split

**Date:** 2026-05-28 · **Owner:** dev + content · **Status:** plan (no code shipped yet)
**Basis:** `src/data/cityData.ts` + `cityExpansion.ts` inventory, the recovery research report, and Google's doorway/scaled-content policy.

> **Why this is needed:** noindex/410 stops the doorways *counting against* the site, but it doesn't create anything that *ranks*. Consolidating the ~1,000 near-duplicate city URLs into a small set of genuinely useful regional hubs is what turns the cleanup into recovered traffic. Per the research, the hard rule is: **a 301 only works if the destination genuinely serves the source's intent — otherwise Google treats it as a soft-404** (equity lost, source dropped anyway). So hubs must have real, differentiated content *before* anything is redirected to them.

---

## 1. Current inventory (measured)

| Surface | Count | URLs (×2 exams where applicable) | Current state |
|---|---|---|---|
| Hand-curated metro city pages (keepers) | ~10 cities | ~20 URLs | **Indexed** (unique local content) |
| Indian city pages (non-keeper) | 431 entries total¹ | 862 URLs | noindexed / partly 410 |
| Foreign city pages | 71 entries | 142 URLs | noindexed |
| Subject-city combos (`/{exam}-{subject}-coaching-in-{city}`) | — | **3,012 URLs** | noindexed |
| Confirmed-dead doorways (already 410) | 18 + andheri | 19 URLs | **410 Gone** |

¹ 431 Indian city entries includes the ~10 keepers and ~60 metro sub-locality entries (Koramangala, Andheri, Dwarka, …).

**Total doorway URL surface to resolve: ~4,000** (862 + 142 city URLs + 3,012 subject-city). The keepers (~20) stay.

---

## 2. Target architecture (what stays / gets built)

Three indexable tiers replace the ~4,000 doorways:

### Tier A — National anchors (2 pages)
- `/best-jee-coaching-in-india` — **exists, indexed.** Keep.
- `/best-neet-coaching-in-india` — **create** (mirror of the JEE flagship). Default 301 target for any Indian city without a state hub yet.

### Tier B — Metro city keepers (~20 pages, already indexed) — KEEP
The hand-curated `INDEXABLE_CITY_META` set (genuinely unique local content):
`jee/neet-coaching-in-` × **bangalore, mangalore, chennai, coimbatore, hyderabad, vijayawada, visakhapatnam, kochi, delhi, mumbai**.
These are the metro anchors; their sub-localities 301 into them.

### Tier C — State hubs (CREATE, indexable) — the heart of the plan
One genuinely-differentiated page per major state per exam, e.g. `/jee-coaching-in-karnataka`, `/neet-coaching-in-tamil-nadu`. **Not** city-name-swapped templates — each must carry real state-specific substance:
- the state entrance exam (KCET / MHT-CET / WBJEE / EAMCET / KEAM / GUJCET / UPSEE …) and how it integrates with JEE/NEET,
- the state board → JEE/NEET transition gap,
- the state's target colleges (NITs/IITs/state engineering & government medical colleges),
- language-support and "no relocation to Kota/metro" angle.

**Build in two phases (by city volume / demand):**

| Phase | States (→ 2 hubs each) | Cities consolidated |
|---|---|---|
| **C1** (build first) | Uttar Pradesh, Maharashtra, Karnataka, Tamil Nadu, Rajasthan, West Bengal, Madhya Pradesh, Bihar, Gujarat, Andhra Pradesh, Telangana, Kerala | ~330 |
| **C2** (build next) | Haryana, Punjab, Odisha, Jharkhand, Chhattisgarh, Assam, Uttarakhand, Himachal Pradesh | ~80 |
| no hub (→ national anchor) | Goa, J&K, Chandigarh, all NE states, UTs (single-city) | ~20 |

C1 = 24 hub pages covering the bulk; C2 = 16 more. Until a state's hub exists, its cities 301 to the national anchor (always a valid target — no soft-404).

---

## 3. The decision rules (the algorithm that classifies all ~4,000 URLs)

Apply in order, per city slug `s` and exam `e`:

1. **KEEP (indexed)** — if `s` ∈ metro keepers (Tier B) → no change, stays indexed.
2. **301 → metro keeper** — if `s` is a sub-locality of a keeper metro → `301 /{e}-coaching-in-{metro}`.
   *(Strong intent match: Koramangala → Bangalore, Andheri → Mumbai, Dwarka → Delhi, Gachibowli → Hyderabad, Velachery → Chennai.)*
3. **301 → state hub** — else if `s` is an Indian city whose state hub exists → `301 /{e}-coaching-in-{state-slug}`.
   *(Mysore/Hubli/Belgaum → karnataka; Nashik/Nagpur/Thane → maharashtra; Patna/Gaya → bihar.)*
4. **301 → national anchor** — else if `s` is Indian but the state hub isn't built yet → `301 /best-{e}-coaching-in-india`.
5. **410 Gone** — if `s` is **foreign** (non-Indian state) → permanent removal.
6. **410 Gone** — confirmed-dead doorways already in `REMOVED_DOORWAY_SLUGS` stay 410 (foreign ones e.g. bahrain) — but Indian sub-locality entries currently 410'd (janakpuri, indirapuram, andheri) **upgrade to rule 2** (301 → their metro keeper) for an intent match that preserves equity.

**Subject-city combos** (`/{exam}-{subject}-coaching-in-{city}`, 3,012 URLs): single regex rule →
`301 /{exam}-{subject}-preparation` (the genuine subject-intent page, e.g. `/jee-physics-preparation`). One rule covers all; if Google soft-404s any, that's no worse than a 404.

---

## 4. Concrete per-state mapping (Indian states)

`→ HUB` = 301 target for that state's T2/T3 cities. Sub-localities of a **keeper** metro 301 to the metro (not the hub). Counts are city *entries* (×2 for URLs).

| State | Cities | 301 target (hub) | Sub-locality 301 → metro keeper | Notes |
|---|---|---|---|---|
| Uttar Pradesh | 45 | `…-coaching-in-uttar-pradesh` (C1) | Noida/Greater Noida/Ghaziabad/Indirapuram/Vasundhara → **national anchor** (no UP metro keeper) | Rampur already 410 → switch to hub |
| Maharashtra | 43 | `…-in-maharashtra` (C1) | **Mumbai** keeper ← Andheri, Borivali, Dadar, Mulund, Goregaon, Kandivali, Powai, Chembur; Pune & its localities (Kothrud, Viman Nagar, Hadapsar, Pimpri-Chinchwad) → hub | Andheri already 410 → switch to Mumbai 301 |
| Karnataka | 32 | `…-in-karnataka` (C1) | **Bangalore** keeper ← Koramangala, BTM Layout, Whitefield, Jayanagar, Indiranagar, HSR Layout, Rajajinagar, Electronic City | Mangalore = keeper (stays); Davanagere/HSR already 410 → switch |
| Tamil Nadu | 32 | `…-in-tamil-nadu` (C1) | **Chennai** keeper ← Adyar, Anna Nagar, Velachery, Tambaram, Porur, T. Nagar | Coimbatore = keeper (stays) |
| Rajasthan | 28 | `…-in-rajasthan` (C1) | — | Kota → hub (with "why online beats relocating" angle) |
| West Bengal | 26 | `…-in-west-bengal` (C1) | Kolkata + Salt Lake/New Town/Ballygunge/Jadavpur/Lake Town → hub | Kolkata is **not** a keeper → all → WB hub |
| Madhya Pradesh | 23 | `…-in-madhya-pradesh` (C1) | — | Indore/Bhopal → hub |
| Bihar | 23 | `…-in-bihar` (C1) | — | Bhagalpur/Katihar/Nawada already 410 → switch to hub |
| Gujarat | 22 | `…-in-gujarat` (C1) | Ahmedabad localities → hub | Ahmedabad not a keeper |
| Andhra Pradesh | 20 | `…-in-andhra-pradesh` (C1) | — | Visakhapatnam & Vijayawada = keepers (stay) |
| Telangana | 19 | `…-in-telangana` (C1) | **Hyderabad** keeper ← Kukatpally, Dilsukhnagar, Ameerpet, Begumpet, Madhapur, Gachibowli | — |
| Kerala | 14 | `…-in-kerala` (C1) | — | Kochi = keeper (stays); Kottayam already 410 → switch to hub |
| Haryana | 17 | `…-in-haryana` (C2) | Gurgaon → hub | Karnal/Hisar already 410 → switch |
| Punjab | 14 | `…-in-punjab` (C2) | — | Chandigarh (UT) → national anchor |
| Odisha | 13 | `…-in-odisha` (C2) | — | — |
| Jharkhand | 10 | `…-in-jharkhand` (C2) | — | — |
| Chhattisgarh | 10 | `…-in-chhattisgarh` (C2) | — | — |
| Assam | 7 | `…-in-assam` (C2) | — | Guwahati already 410 → switch to hub |
| Uttarakhand | 4 | `…-in-uttarakhand` (C2) | — | Dehradun/Dharamshala already 410 (Dharamshala is HP) |
| Himachal Pradesh | 4 | `…-in-himachal-pradesh` (C2) | — | Dharamshala already 410 → switch to hub |
| Delhi | 11 | **Delhi keeper** (stays) ← Rohini, Dwarka, Pitampura, Janakpuri, Laxmi Nagar, Rajouri Garden, South/East Delhi, Karol Bagh, Greater Kailash | — | Janakpuri already 410 → switch to Delhi 301 |
| Goa, J&K, Chandigarh, NE states, UTs | ~20 | **national anchor** (no hub) | — | Srinagar already 410 → national anchor or J&K hub later |

---

## 5. Foreign cities — 410 Gone (71 entries, 142 URLs)

No genuine India-exam local relevance, highest doorway risk, no valid consolidation target → **410 Gone** (add to the removal set, served by `proxy.ts`, listed in the temporary removal-sitemap so Google recrawls).

Representative: dubai, abu-dhabi, sharjah, singapore, london, new-york, san-francisco, toronto, sydney, melbourne, kuala-lumpur, doha, riyadh, muscat, bahrain (already 410), hong-kong, bangkok, jakarta, nairobi, lagos, berlin, amsterdam, tokyo, seoul, auckland, … (full list generated from `allCities` where `state ∉ Indian-states`).

> If there's a real NRI/abroad audience, the correct move is **one** honest page — `/online-jee-neet-coaching-for-nri-students` — not 71 city doorways. Optional, post-recovery.

---

## 6. Resulting ratio (the point of the exercise)

| | Before | After |
|---|---|---|
| Indexable city/region pages | ~20 (+ 4,000 noindexed doorways crawlable) | ~46 (20 metros + 40 state hubs + 2 national) |
| 301-consolidated URLs | 0 | ~860 city + 3,012 subject-city |
| 410 URLs | 19 | ~160 (142 foreign + confirmed-dead) |

Low-quality:high-quality **indexed** ratio goes from "20 good among thousands of thin" to "~46 substantive pages, everything else removed or consolidated" — exactly the site-quality signal the research says drives recovery.

---

## 7. Implementation mechanics (how to encode it)

Keep it data-driven so the 4,000 URLs aren't hand-maintained:

1. **`src/data/cityConsolidation.ts`** — derive, from `allCities` + the keeper/hub/foreign sets, a map `slug → { action: 'keep'|'301'|'410', target? }` using the §3 rules. Single source of truth.
2. **301s via `proxy.ts`** (not 175+ static `next.config` entries): in the existing proxy, before the noindex branch, look up the city/subject-city slug in the consolidation map and `return NextResponse.redirect(new URL(target, req.url), 301)`. Subject-city handled by the regex `^(jee|neet)-(physics|chemistry|mathematics|biology)-coaching-in-` → `/{exam}-{subject}-preparation`. Guard against redirect chains (target must be a final 200 page).
3. **410s** — add foreign slugs to a `FOREIGN_410` set consumed by the proxy's existing 410 branch; keep the confirmed-dead set; move Indian sub-locality 410s to 301 (rule 6).
4. **Hub pages** — add state-hub entries to the catch-all metadata + a new `stateHubData.ts` with the genuine per-state content, add their slugs to `INDEXABLE_CITY_SLUGS` / `INDEXABLE_NATIONAL_COACHING_SLUGS`, and to `app/sitemap.xml`.
5. **Removal/recrawl** — add all newly 301'd and 410'd URLs to the temporary `removal-sitemap.xml` (fresh `lastmod`) so Google recrawls and processes them fast.
6. **Generator** — `scripts/gen-consolidation.mjs` emits the map + a report of counts per bucket; run it in `build` alongside the sitemap scripts.

---

## 8. Sequencing & risk

1. **Build hub content FIRST** (C1 states + `/best-neet-coaching-in-india`), index them, confirm they're substantive. **Do not redirect into an empty hub** — that's the soft-404 trap.
2. Ship **foreign 410s** immediately (no dependency, pure win).
3. Ship **sub-locality → metro-keeper 301s** (strong matches, low risk).
4. Ship **T2/T3 → state-hub 301s** only for states whose hub is live; the rest → national anchor.
5. Ship **subject-city regex 301**.
6. **Monitor GSC** Coverage → "soft 404" and "Redirect" reports for 2–4 weeks. A hub accumulating soft-404s means its content isn't matching the redirected intent → enrich it.

**Don'ts (from the research):** no `noindex` on a 301 target; no redirect chains; no `rel=canonical` as the cleanup mechanism; don't redirect to a generic page that doesn't match intent.

---

## 9. One open decision for the owner

**State-hub content is real writing** (12–20 genuinely different pages). Options:
- **A — Full build (recommended):** write all C1 hubs properly. Best recovery, most effort.
- **B — Phased:** build the top 6 states (UP, MH, KA, TN, RJ, WB = ~206 cities) first; everything else → national anchor until their hub ships.
- **C — Minimal:** skip state hubs entirely; 301 *all* Indian non-keeper cities → the two national anchors, 410 foreign, 301 subject-city → subject pages. Fastest, but national anchors are a weaker intent match for "JEE coaching in <small town>" (higher soft-404 share) and you forgo state-level ranking.

Recommend **B** as the pragmatic path: real hubs where volume justifies the writing, national anchor as the always-valid fallback, and grow hubs over time.

---

*Companion to: `seo-reports/spam-update-recovery-research-2026-05-28.md` (action #4) and `indexing-2026-05-28.md`.*
