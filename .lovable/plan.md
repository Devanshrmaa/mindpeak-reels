

# Plan: NEET Chapter-Wise PYQ Expansion + Hierarchical PYQ Pages

## Current State

**NEET PYQ data has only 36 clustered chapters** with ~10 questions each (504 total). But `neetBiology.ts` has 34 chapters, `neetPhysics.ts` has 15, `neetChemistry.ts` has 25 = **74 granular chapters**. Many chapters have zero PYQs.

**Gap:** Need to expand from 36 → 74 chapter-level PYQ banks, each with 20+ questions. Plus create a 4-level hierarchy of aggregation pages.

---

## Part 1: Expand NEET PYQ Data (74 chapters × 20+ Qs = 1,480+ question pages)

Currently 504 questions → target ~1,500. Net new: ~1,000 question pages.

### Biology PYQ Expansion

Current botany PYQ has 8 clusters. Need to split into 17 granular chapters matching `neetBiology.ts`:

**New/expanded files:**
- `src/data/neet-pyq/biology-botany-pyq-2.ts` — Split existing clusters + add new questions to cover all 17 botany chapters with 20+ Qs each:
  - Living World & Classification (have 10, need 10 more)
  - Animal Kingdom (have 10, need 10 more)
  - Plant Morphology & Anatomy (have 10, need 10 more)
  - Structural Organisation in Animals (NEW: 20 Qs)
  - Cell: Unit of Life (split from "Cell Biology" cluster, need 10 more)
  - Biomolecules (split from "Cell Biology", need 15 more)
  - Cell Division (NEW: 20 Qs)
  - Transport in Plants (split from "Plant Physiology", need 15 more)
  - Mineral Nutrition (NEW: 20 Qs)
  - Photosynthesis (split from "Plant Physiology", need 15 more)
  - Plant Respiration (NEW: 20 Qs)
  - Plant Growth & Development (NEW: 20 Qs)

**Zoology expansion** — split 8 clusters into 17 chapters:
- `src/data/neet-pyq/biology-zoology-pyq-2.ts`
  - Digestion & Absorption (have 10, need 10 more)
  - Breathing & Gas Exchange (split from cluster, need 15 more)
  - Body Fluids & Circulation (split, need 15 more)
  - Excretory Products (split from cluster, need 15 more)
  - Locomotion & Movement (NEW: 20 Qs)
  - Neural Control (split from cluster, need 15 more)
  - Chemical Coordination (have 10, need 10 more)
  - Reproduction in Organisms (NEW: 20 Qs)
  - Sexual Reproduction in Plants (split from cluster, need 15 more)
  - Human Reproduction (have 10, need 10 more)
  - Reproductive Health (NEW: 20 Qs)
  - Inheritance & Variation (split, need 15 more)
  - Molecular Inheritance (NEW: 20 Qs)
  - Evolution (split, need 15 more)
  - Human Health & Diseases (have 10, need 10 more)
  - Food Production & Microbes (NEW: 20 Qs)
  - Biotechnology Principles (split, need 15 more)
  - Biotechnology Applications (have 10, need 10 more)
  - Organisms & Populations (NEW: 20 Qs)
  - Ecosystem (split, need 15 more)
  - Biodiversity & Conservation (NEW: 20 Qs)
  - Environmental Issues (NEW: 20 Qs)

### Physics PYQ Expansion (10 → 15 chapters)

- `src/data/neet-pyq/physics-pyq-2.ts` — Add missing chapters + expand existing:
  - Thermal Properties (NEW: 20 Qs)
  - Electrostatics (split from combined, need 10 more)
  - Current Electricity (split, need 10 more)
  - Ray Optics (split from combined, need 10 more)
  - Wave Optics (NEW: 20 Qs)
  - Oscillations & Waves (split, need 10 more, currently combined)
  - Dual Nature & Atoms (split from combined, need 10 more)
  - Nuclei & Semiconductors (NEW: 20 Qs)

### Chemistry PYQ Expansion (10 → 25 chapters)

- `src/data/neet-pyq/chemistry-pyq-2.ts` — Most need splitting + new chapters:
  - Some Basic Concepts (NEW: 20 Qs)
  - Atomic Structure (split from combined, need 10 more)
  - Chemical Bonding (split, need 10 more)
  - Thermodynamics (NEW: 20 Qs)
  - Redox & Electrochemistry (NEW: 20 Qs)
  - Chemical Kinetics (split from combined, need 10 more)
  - Solutions (NEW: 20 Qs)
  - Surface Chemistry (NEW: 20 Qs)
  - Periodic Classification (split, need 10 more)
  - s-Block (split from combined, need 10 more)
  - p-Block (NEW: 20 Qs)
  - d-Block & Coordination (split, need 10 more)
  - Haloalkanes (NEW: 20 Qs)
  - Alcohols Phenols Ethers (NEW: 20 Qs)
  - Carbonyl Compounds (NEW: 20 Qs)
  - Amines (NEW: 20 Qs)
  - Biomolecules Polymers (split, need 10 more)

**Update index:** `src/data/neet-pyq/index.ts` — import all new files, update `mergeChapters` to handle granular slugs matching `chapterData.ts` chapter slugs.

---

## Part 2: Hierarchical PYQ Aggregation Pages

Create a 4-level page hierarchy (bottom-up):

```text
Level 1: Individual PYQ Question pages (existing)
   ↓ grouped by chapter
Level 2: Chapter PYQ Hub — /neet-pyq-biology-digestion-absorption
   ↓ grouped by unit
Level 3: Unit PYQ Hub — /neet-pyq-biology-human-physiology
   ↓ grouped by class
Level 4: Class PYQ Hub — /neet-pyq-biology-class-11, /neet-pyq-biology-class-12
   ↓ grouped by subject
Level 5: Subject PYQ Hub — /neet-pyq-biology (already exists partially in NEETPYQHub)
```

### New Data Structure

**`src/data/neet-pyq/hierarchy.ts`** — Define unit groupings and class assignments:
- Maps each chapter to a unit (e.g., "Human Physiology" unit contains Digestion, Breathing, Circulation, Excretion, Locomotion, Neural, Endocrine)
- Maps each chapter to Class 11 or Class 12
- Biology: ~8 units, Physics: ~6 units, Chemistry: ~7 units
- Estimated: **~21 unit pages + 6 class pages + 3 subject pages = ~30 aggregation pages**

### New Views

**`src/views/NEETPYQChapterHub.tsx`** — Chapter-level PYQ hub page:
- Lists all 20+ PYQs for one chapter with year/shift filters
- Links to individual question pages
- Backlinks to unit hub, subject hub, and chapter study page
- SEO: "NEET [Chapter] Previous Year Questions — Last 10 Years"

**`src/views/NEETPYQUnitHub.tsx`** — Unit-level aggregation:
- Lists all chapters in the unit with question counts
- Year-wise distribution chart
- Links to chapter hubs
- "NEET [Unit] PYQ — All Chapters Combined"

**`src/views/NEETPYQClassHub.tsx`** — Class 11/12 level:
- Lists all units/chapters for that class
- Subject-wise breakdown
- Links to unit hubs
- "NEET Class 11/12 PYQ — Subject-Wise Chapter Analysis"

### Routing Updates

**`src/views/QuestionSlugRouter.tsx`** — Add detection for:
- `neet-pyq-{subject}-{chapter-slug}` → NEETPYQChapterHub
- `neet-pyq-{subject}-unit-{unit-slug}` → NEETPYQUnitHub
- `neet-pyq-{subject}-class-{11|12}` → NEETPYQClassHub

**`app/[...slug]/CatchAllClient.tsx`** — Add imports for new hub views.

**`src/lib/resolveSlugMetadata.ts`** — Add metadata for all new hub page patterns.

### Update Existing Pages

**`src/views/NEETPYQHub.tsx`** — Update to:
- Show unit groupings instead of flat chapter list
- Add Class 11/12 filter tabs
- Link to unit hubs and class hubs
- Show total question counts per unit

**`src/views/NEETPYQQuestion.tsx`** — Update breadcrumb to include unit and class levels:
```
Home > NEET PYQ > Biology > Class 11 > Human Physiology > Digestion > Question
```

---

## Part 3: Sitemap Integration

Add all new URLs to `final2.xml` generation:
- ~1,000 new individual NEET PYQ question pages
- ~74 chapter hub pages
- ~21 unit hub pages
- ~6 class hub pages
- Update existing sub-sitemaps

---

## Page Count Impact

| New Pages | Count |
|---|---|
| New NEET PYQ questions (~1,000 net new) | ~1,000 |
| Chapter PYQ hub pages (74) | 74 |
| Unit PYQ hub pages (~21) | 21 |
| Class PYQ hub pages (6) | 6 |
| **Total new pages** | **~1,100** |

Combined with the 20,000 target from the previous plan: **~21,100+ pages** (on track for 22,000 when combined with other vectors).

---

## Implementation Order

1. Create `src/data/neet-pyq/hierarchy.ts` (unit/class mappings)
2. Expand PYQ data files (biology-botany-pyq-2, biology-zoology-pyq-2, physics-pyq-2, chemistry-pyq-2) with granular chapter slugs and 20+ Qs each
3. Update `src/data/neet-pyq/index.ts` to import new files
4. Create `NEETPYQChapterHub.tsx` view
5. Create `NEETPYQUnitHub.tsx` view
6. Create `NEETPYQClassHub.tsx` view
7. Update routing (QuestionSlugRouter, CatchAllClient, resolveSlugMetadata)
8. Update `NEETPYQHub.tsx` and `NEETPYQQuestion.tsx` with hierarchy links
9. Generate sitemaps for new pages into `final2.xml`

