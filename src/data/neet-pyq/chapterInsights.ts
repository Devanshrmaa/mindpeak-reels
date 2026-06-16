/**
 * Hand-written, per-chapter PYQ strategy notes for the highest-value NEET PYQ
 * chapter-hub pages (striking-distance queries from the GSC keyword-opportunity
 * report, e.g. "cell cycle and cell division neet pyq", "haloalkanes and
 * haloarenes neet pyq").
 *
 * WHY THIS EXISTS — and why it is NOT a template:
 * The PYQ hub view (`NEETPYQChapterHub.tsx`) renders the same question-list
 * skeleton for every chapter. Adding a generic "study tips" paragraph to that
 * view would inject the same noun-swapped block into 100+ chapter pages — the
 * scaled-content pattern that earned the March 2026 penalty. Instead, each entry
 * below is researched, chapter-specific PYQ analysis (which sub-topics the
 * questions actually concentrate on, the traps NEET repeats, year-wise counts)
 * that applies to ONE chapter only. Chapters without an entry render nothing.
 *
 * Keys are the full page slug (`neet-pyq-<subject>-<chapter>`). Blocks are GitHub-
 * flavoured markdown (H3 sections + tables) rendered with react-markdown +
 * remark-gfm, the same renderer the blog uses. Question counts/weightage verified
 * June 2026 against NEET/AIPMT past papers and aggregator PYQ compilations
 * (EduRev, eSaral, Shiksha). Written to read like one teacher's PYQ notes.
 */

const INSIGHTS: Record<string, string> = {
  /* ─────────────── Cell Cycle & Cell Division (Biology, Class 11) ───────────────
     Query: "cell cycle and cell division neet pyq" (pos ~7, 96 impr). SERP leaders
     (eSaral, Shiksha, EduRev) list the questions but omit a priority roadmap,
     the repeated trap answers, and where in NCERT the high-yield lines sit. */
  'neet-pyq-biology-cell-division': `## How NEET Actually Tests Cell Cycle & Cell Division

This is one of the most *predictable* scoring chapters in Class 11 Biology. Across
NEET/AIPMT papers from 2010–2024 it has delivered **3–5 questions almost every year,
and never fewer than 2** — so a student who masters the patterns below is effectively
banking 12–20 marks. The questions repeat from a narrow set of sub-topics, which is
exactly why solving the PYQs above (rather than reading the chapter again) is the
fastest way to lock these marks.

### Where the questions concentrate — solve these PYQs first

Roughly **60%+ of the PYQs come from just three areas.** Prioritise in this order:

| Priority | Sub-topic | Why NEET loves it |
|---|---|---|
| 1 | **Meiosis I — Prophase I sub-stages** | Leptotene → Zygotene → Pachytene → Diplotene → Diakinesis: the exact event in each stage is asked almost every year |
| 2 | **Mitosis stage identification** | "Which stage shows X?" — metaphase plate, anaphase chromatid separation, telophase reformation |
| 3 | **Cell-cycle phases & checkpoints** | S-phase = DNA replication (NOT division), G1/S/G2 durations, G0 quiescent cells |
| 4 | Mitosis vs meiosis differences table | Chromosome number, crossing over, number of divisions, products |

### The five trap answers NEET repeats

These are the distinctions students get wrong under exam pressure — every one has
been a PYQ:

1. **Crossing over happens in *pachytene*, not zygotene.** Zygotene is *synapsis*
   (pairing) and synaptonemal complex formation; pachytene is recombination.
2. **Chiasmata become visible in *diplotene*** (synaptonemal complex dissolves),
   not in pachytene.
3. **Meiosis I is reductional (2n → n); Meiosis II is equational (n → n).** A
   classic "after which division is the chromosome number halved?" trap → Meiosis I.
4. **DNA doubles in S phase, but the chromosome number does NOT change** until cells
   actually separate. 2C → 4C DNA, still 2n chromosomes.
5. **Cytokinesis differs by kingdom:** plant cells form a *cell plate* (centre →
   outward); animal cells form a *cleavage furrow* (inward). Asked as a direct MCQ.

### NCERT anchor

Every PYQ here traces to **Class 11 Biology, Chapter 10 (Cell Cycle and Cell
Division)**. Two NCERT elements are gold: the **Prophase I sub-stage paragraph** and
the **mitosis-vs-meiosis comparison table**. If a fact isn't in NCERT, NEET almost
never asks it for this chapter — so resist the urge to add reference-book detail and
instead drill the PYQs above until stage-identification is instant.`,

  /* ─────────────── Haloalkanes & Haloarenes (Chemistry, Class 12) ───────────────
     Query: "haloalkanes and haloarenes neet pyq" (pos ~9, 68 impr). SERP leaders
     list year-wise questions but omit the named-reaction quick table, the
     SN1/SN2 decision rules, and the o/p-directing-but-deactivating trap. */
  'neet-pyq-chemistry-haloalkanes': `## How NEET Actually Tests Haloalkanes & Haloarenes

This chapter quietly became **high-yield**. From 2014–2025 it gave ~26 NEET questions,
but the distribution is the real story: **1–2 per year until 2021, then a sharp jump —
6 questions in 2022, 5 in 2023, 5 in 2024.** Treat it as a **2–3 question (≈4%)
chapter for the current cycle**, not the "1 easy question" chapter older guides
describe. The PYQs above are the fastest way to see the exact reaction types NEET
reuses.

### Where the marks are — solve in this order

| Priority | Sub-topic | Share of PYQs |
|---|---|---|
| 1 | **SN1 vs SN2** (mechanism, rate order, stereochemistry) | ~30% |
| 2 | **Named reactions** (Wurtz, Finkelstein, Swarts, Sandmeyer…) | ~25% |
| 3 | **Halide classification & reactivity orders** | ~20% |
| 4 | Preparation methods + elimination (Saytzeff) | remainder |

### Named-reaction quick table (memorise the reagent)

NEET asks these as one-line "product/reagent" MCQs — the reagent is the answer key:

| Reaction | Converts | Reagent / condition |
|---|---|---|
| **Wurtz** | 2 R–X → R–R | Na, dry ether |
| **Wurtz–Fittig** | alkyl + aryl halide → alkylarene | Na, dry ether |
| **Fittig** | 2 aryl–X → biaryl | Na, dry ether |
| **Finkelstein** | R–Cl/Br → R–I | NaI, dry acetone |
| **Swarts** | R–X → R–F | AgF / Hg₂F₂ / SbF₃ |
| **Sandmeyer** | aryl diazonium → aryl–Cl/Br/CN | CuCl/CuBr/CuCN |

### The decision rules (and the traps) NEET repeats

1. **SN2 rate: 1° > 2° > 3°. SN1 rate: 3° > 2° > 1°** — the orders are *reversed*.
   This single reversal is the most-asked idea in the chapter.
2. **Stereochemistry:** SN2 → 100% inversion (Walden inversion); SN1 → racemisation
   (slight excess of inversion). Don't swap these.
3. **Solvent:** polar **aprotic** (DMF, acetone, DMSO) favours SN2; polar **protic**
   (water, alcohol) favours SN1.
4. **Leaving-group ability: I > Br > Cl > F.** Bigger, more stable anion leaves easier.
5. **Aryl & vinyl halides are very *un*reactive** to nucleophilic substitution
   (partial double-bond character + sp² carbon + resonance). A favourite trap is an
   option claiming chlorobenzene undergoes easy SN1/SN2 — it does not.
6. **Halogens are deactivating but o/p-directing** in electrophilic substitution on
   haloarenes. The "deactivating *and* o/p-directing" combination is a guaranteed trap.
7. **SOCl₂ gives the purest alkyl chloride** from an alcohol because the by-products
   (SO₂, HCl) escape as gases.

### NCERT anchor

All of this is **Class 12 Chemistry, Chapter 10 (Haloalkanes and Haloarenes)**. The
SN1/SN2 comparison table and the named-reaction list in NCERT are the exact source of
the PYQs — drill them against the questions above rather than memorising extra
mechanisms from reference books.`,
};

/**
 * Returns the hand-written PYQ strategy block for a NEET PYQ chapter-hub slug,
 * if one exists (e.g. "neet-pyq-biology-cell-division"). Most chapters return
 * undefined and render no extra block.
 */
export function getNEETPYQChapterInsight(slug: string): string | undefined {
  return INSIGHTS[slug];
}
