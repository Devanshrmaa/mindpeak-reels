/**
 * Hand-written, per-chapter editorial enrichments for the highest-traffic NEET PYQ
 * chapter hubs (from GSC striking-distance queries — e.g. "cell cycle and cell
 * division neet pyq", 96 impr at pos ~7).
 *
 * WHY THIS IS NOT A TEMPLATE:
 * The PYQ chapter hub (`NEETPYQChapterHub.tsx`) lists questions but carries no
 * teaching content, so it ranks for the query yet gives the searcher nothing above
 * the fold. Auto-generating a weightage paragraph for all 74 chapters by swapping
 * the chapter name is exactly the scaled-content pattern that earned the March 2026
 * penalty. Instead, each entry below is researched for ONE chapter — real NEET
 * question frequency, the sub-topics that actually repeat in PYQs, and the specific
 * confusions students get wrong — and the hub renders the block ONLY for chapters
 * that have a curated entry. Seed deliberately and slowly.
 *
 * Sources verified June 2026 against NEET PYQ aggregators (Shiksha, eSaral, PW) and
 * cross-checked against the questions actually present in this site's PYQ bank.
 */

export interface PYQChapterEnrichment {
  /** One short paragraph: real NEET question frequency + why the chapter matters. */
  overview: string;
  /** Compact weightage / fast-facts rows shown as a small table. */
  facts: { label: string; value: string }[];
  /** High-yield sub-topics in priority order (most-asked first). */
  highYield: { topic: string; detail: string }[];
  /** Specific mistakes students repeatedly make on these PYQs. */
  traps: string[];
  /** FAQs phrased in the searcher's own words. */
  faqs: { q: string; a: string }[];
}

/** Keyed by `${subjectSlug}/${chapterSlug}` to avoid cross-subject slug clashes. */
const ENRICHMENTS: Record<string, PYQChapterEnrichment> = {
  'biology/cell-division': {
    overview:
      'Cell Cycle & Cell Division (NCERT Class 11 Biology, Unit "Cell Structure & Function") is one of the best return-on-effort chapters in NEET Biology: the NCERT chapter is short, yet NEET has asked from it almost every year — typically 2–3 questions, occasionally more. The questions are concept-stable (they repeat the same handful of ideas in new wording), so working through past papers is the single fastest way to lock these marks.',
    facts: [
      { label: 'NEET question frequency', value: '~2–3 questions most years (rarely 0)' },
      { label: 'NCERT source', value: 'Class 11, Ch. on Cell Cycle & Cell Division' },
      { label: 'Difficulty', value: 'Easy–Moderate; mostly direct recall' },
      { label: 'Best use of time', value: 'High — short chapter, reliable marks' },
    ],
    highYield: [
      {
        topic: 'Prophase I sub-stages of meiosis',
        detail:
          'The most repeated theme. Order is Leptotene → Zygotene → Pachytene → Diplotene → Diakinesis. Synapsis (pairing) happens in zygotene, crossing over in pachytene, and chiasmata become visible in diplotene. Expect "in which stage does X happen" almost every year.',
      },
      {
        topic: 'Chromosome (n) vs DNA content (C) bookkeeping',
        detail:
          'After S phase the chromosome number is unchanged (2n) but DNA doubles (2C → 4C). Meiosis I is reductional (2n → n, 4C → 2C); meiosis II is equational (n stays, 2C → 1C). A "how many chromosomes/DNA molecules after meiosis I" question is a NEET favourite.',
      },
      {
        topic: 'Cell cycle phases & checkpoints',
        detail:
          'S phase = DNA replication; interphase is ~95% of cycle time and M phase only ~5%. The spindle assembly checkpoint operates at metaphase (gating entry to anaphase), NOT at G2/M. G0 is the quiescent phase — neurons and mature RBCs stay there.',
      },
      {
        topic: 'Mitosis vs meiosis & cytokinesis',
        detail:
          'Mitosis → 2 identical diploid cells (growth/repair); meiosis → 4 genetically different haploid cells (gametes, variation). Plant cytokinesis is by cell-plate formation; animal cells use a cleavage furrow.',
      },
      {
        topic: 'Spindle apparatus & colchicine',
        detail:
          'Spindle fibres are microtubules (tubulin). Colchicine blocks tubulin polymerisation, preventing spindle formation and arresting cells at metaphase — a recurring single-fact question.',
      },
    ],
    traps: [
      'Mixing up the prophase I stages. Synapsis (zygotene), crossing over (pachytene) and visible chiasmata (diplotene) are three different stages — a mnemonic like "Lazy Zebras Pull Down Diakinesis" keeps the order straight.',
      'Confusing chromosome number (n) with DNA content (C). After S phase the cell is still 2n but already 4C — the number of chromosomes only falls in meiosis I.',
      'Placing the spindle assembly checkpoint at G2/M. It acts at metaphase, ensuring every kinetochore is attached before anaphase begins.',
      'Saying crossing over is between sister chromatids — it is between non-sister chromatids of homologous chromosomes.',
    ],
    faqs: [
      {
        q: 'How many questions come from Cell Cycle and Cell Division in NEET?',
        a: 'Usually 2–3 questions almost every year, and they rarely skip the chapter entirely. Because the NCERT chapter is short, the marks-per-page of study is among the highest in Class 11 Biology — which is exactly why it is worth drilling the PYQs.',
      },
      {
        q: 'What is the most important topic in Cell Cycle and Cell Division for NEET?',
        a: 'The sub-stages of Prophase I of meiosis (leptotene to diakinesis) — what happens in each, especially synapsis (zygotene), crossing over (pachytene) and chiasmata (diplotene). It is the single most repeated theme, followed by chromosome/DNA bookkeeping across meiosis I and II.',
      },
      {
        q: 'What is the correct order of the stages of Prophase I?',
        a: 'Leptotene → Zygotene → Pachytene → Diplotene → Diakinesis. Pairing of homologous chromosomes (synapsis) is in zygotene, crossing over in pachytene, chiasmata become visible in diplotene, and terminalisation completes in diakinesis.',
      },
      {
        q: 'Is Cell Cycle and Cell Division an easy chapter for NEET?',
        a: 'Yes — it is short, mostly direct-recall, and concept-stable (questions repeat the same ideas in new wording). The few traps are about stage order and the chromosome-number vs DNA-content distinction. Solving past-year questions almost guarantees these marks.',
      },
    ],
  },
};

/** Returns the curated enrichment for a chapter hub, if one exists. */
export function getPYQChapterEnrichment(
  subjectSlug: string,
  chapterSlug: string,
): PYQChapterEnrichment | undefined {
  return ENRICHMENTS[`${subjectSlug}/${chapterSlug}`];
}
