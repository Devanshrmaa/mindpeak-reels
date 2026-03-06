

# Continue: NEET PYQ Expansion — Next Steps

## Status

**Completed:**
- `hierarchy.ts` — all 74 chapters mapped to units and classes
- `biology-botany-pyq-2.ts` — 6 chapters with 20+ Qs each (120 Qs added)
- `index.ts` — imports botanyPyq2

**Remaining work (in priority order):**

## Step 1: Finish Botany Data (3 more chapters)

Add to `biology-botany-pyq-2.ts`:
- `photosynthesis` — 20 Qs
- `plant-respiration` — 20 Qs
- `plant-growth-development` — 20 Qs

## Step 2: Create Zoology Expansion (`biology-zoology-pyq-2.ts`)

Current zoology has 8 clusters. Need granular chapters matching hierarchy.ts. Add 20+ Qs for each missing/thin chapter:
- `breathing-gas-exchange`, `body-fluids-circulation`, `excretory-system`, `locomotion-movement`, `neural-control` (split from existing clusters)
- `reproduction-organisms`, `sexual-reproduction-plants`, `reproductive-health` (new or split)
- `inheritance-variation`, `molecular-inheritance`, `evolution` (new or split)
- `food-production-microbes`, `biotechnology-principles`, `biotechnology-applications` (new or split)
- `organisms-populations`, `ecosystem`, `biodiversity-conservation`, `environmental-issues` (new or split)

~15 chapters × 20 Qs = ~300 Qs

## Step 3: Create Physics Expansion (`physics-pyq-2.ts`)

Missing/thin chapters from hierarchy:
- `thermal-properties` — 20 Qs (NEW)
- `electrostatics`, `current-electricity` — 10 more each (split from `electrostatics-current`)
- `ray-optics`, `wave-optics` — 10+20 (split from `optics-modern`)
- `waves-sound` — 10 more
- `dual-nature-atoms`, `nuclei-semiconductors` — 10+20 (split)

~8 chapters, ~140 Qs

## Step 4: Create Chemistry Expansion (`chemistry-pyq-2.ts`)

Missing/thin chapters from hierarchy:
- `some-basic-concepts`, `atomic-structure`, `chemical-bonding` (split from `atomic-structure-bonding`)
- `thermodynamics` (NEW), `redox-electrochemistry` (NEW)
- `kinetics` (split from `kinetics-electrochemistry`)
- `solutions`, `surface-chemistry` (split from `solutions-solid-state`)
- `periodic-classification`, `s-block`, `p-block`, `d-f-block`, `coordination-compounds` (split from `inorganic` clusters)
- `organic-basics`, `haloalkanes`, `alcohols-phenols-ethers`, `carbonyl-compounds`, `amines` (split from organic clusters)
- `biomolecules-polymers` (expand)

~17 chapters × 20 Qs = ~340 Qs

## Step 5: Update `index.ts`

Import `zoologyPyq2`, `neetPhysicsPyq2`, `neetChemistryPyq2` and merge into subject banks.

## Step 6: Create Hub Views

### `NEETPYQChapterHub.tsx`
- Route: `/neet-pyq-{subject}-{chapter}` (e.g., `/neet-pyq-biology-digestion-absorption`)
- Lists all PYQs for one chapter with year/shift filter
- Links to individual question pages
- Breadcrumb: Home > NEET PYQ > Subject > Class > Unit > Chapter
- Backlinks to chapter study page and related chapters

### `NEETPYQUnitHub.tsx`
- Route: `/neet-pyq-{subject}-unit-{unit}` (e.g., `/neet-pyq-biology-unit-human-physiology`)
- Lists all chapters in the unit with question counts and year distribution
- Links to chapter hubs

### `NEETPYQClassHub.tsx`
- Route: `/neet-pyq-{subject}-class-{11|12}`
- Lists all units for that class with total question counts
- Links to unit hubs

## Step 7: Update Routing

### `QuestionSlugRouter.tsx`
Currently all `neet-pyq-*` goes to NEETPYQQuestion. Need to intercept hub slugs first:
1. Import `NEET_PYQ_HUB_SLUGS` and `parseNEETPYQHubSlug` from hierarchy
2. Before the existing `neet-pyq-` check, test if slug is in hub slugs
3. Route to appropriate hub component based on `type` (chapter/unit/class)

### `resolveSlugMetadata.ts`
Add hub metadata resolution in the `neet-pyq-` section:
- Check `parseNEETPYQHubSlug` before `parseNEETPYQSlug`
- Return appropriate title/description for chapter/unit/class hubs

## Step 8: Update Existing Pages

### `NEETPYQHub.tsx`
- Add Class 11/12 filter tabs
- Show unit groupings within each subject
- Link to class hubs, unit hubs, and chapter hubs

### `NEETPYQQuestion.tsx`
- Update breadcrumb to include unit and class levels using `getUnitForChapter` and `getClassForChapter`

## Implementation Approach

Due to the large volume of question data (~900 new questions), I'll create the data files in batches across multiple steps. The hub views and routing can be done in parallel once the data structure is stable.

**Batch 1** (this step): Finish botany + create zoology expansion + update index
**Batch 2**: Create physics + chemistry expansion + update index
**Batch 3**: Create all 3 hub views
**Batch 4**: Update routing (QuestionSlugRouter, resolveSlugMetadata, CatchAllClient)
**Batch 5**: Update NEETPYQHub and NEETPYQQuestion with hierarchy links

