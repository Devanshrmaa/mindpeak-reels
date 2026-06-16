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
  'chemistry/haloalkanes': {
    overview:
      'Haloalkanes & Haloarenes (NCERT Class 12 Organic Chemistry) is a reliable scorer in NEET — most years carry 2–3 questions, and recent papers (2022–2024) pushed that to 5–6. The chapter rewards memory more than derivation: the bulk of NEET marks here come from named reactions and direct-recall facts about polyhalogen compounds, so it is one of the fastest organic chapters to convert into guaranteed marks once you have drilled the past papers.',
    facts: [
      { label: 'NEET question frequency', value: '~2–3 most years; 5–6 in 2022, 2023, 2024' },
      { label: 'NCERT source', value: 'Class 12, Ch. Haloalkanes & Haloarenes' },
      { label: 'Difficulty', value: 'Easy–Moderate; mostly recall + named reactions' },
      { label: 'Best use of time', value: 'High — fact-dense chapter, low conceptual depth' },
    ],
    highYield: [
      {
        topic: 'Named reactions (the single biggest mark source)',
        detail:
          'Learn name → product → reagent as one block: Wurtz (2R–X + Na/dry ether → symmetrical alkane), Finkelstein (R–Cl + NaI/acetone → R–I), Swarts (R–Cl + AgF → R–F), Sandmeyer (ArN₂⁺ + CuX → Ar–X), Williamson ether (R–X + R′ONa → ether), and the Grignard reagent (RMgX). NEET almost always asks at least one "which reaction does X" question.',
      },
      {
        topic: 'SN1 vs SN2 — substrate order and solvent',
        detail:
          'SN2 reactivity is 1° > 2° > 3° (backside attack, steric hindrance dominates) and is favoured by polar aprotic solvents. SN1 is the reverse — 3° > 2° > 1° (via the more stable carbocation) — favoured by polar protic solvents. AgNO₃ in ethanol (SN1 conditions) distinguishes the three: 3° gives an immediate precipitate, 1° the slowest.',
      },
      {
        topic: 'Why aryl & vinyl halides are unreactive',
        detail:
          'The halogen lone pair delocalises into the ring/double bond, giving the C–X bond partial double-bond character — so it is shorter and stronger and resists nucleophilic substitution. A perennial "why is chlorobenzene less reactive than chloroethane" question.',
      },
      {
        topic: 'Polyhalogen compounds — direct-recall facts',
        detail:
          'Chloroform is stored in dark bottles because light oxidises it to toxic phosgene (COCl₂); Freon-12 (CCl₂F₂) is the ozone-depleting refrigerant banned under the Montreal Protocol; DDT is a persistent organochlorine insecticide; CCl₄ was a fire-extinguisher solvent. These are free marks if memorised.',
      },
      {
        topic: 'Elimination & Zaitsev',
        detail:
          'Dehydrohalogenation (alcoholic KOH) removes HX to give an alkene; by Zaitsev\'s rule the major product is the more substituted alkene — e.g. 2-bromobutane gives mainly 2-butene, not 1-butene.',
      },
    ],
    traps: [
      'Reversing the SN2 order. SN2 is 1° > 2° > 3° (opposite of SN1). The most-missed single fact in this chapter.',
      'Saying aryl halides are unreactive because the C–X bond is longer — it is actually shorter and stronger due to resonance/partial double-bond character.',
      'Using Lucas reagent for alkyl halides. Lucas (conc. HCl + ZnCl₂) distinguishes alcohols; AgNO₃/ethanol distinguishes 1°/2°/3° alkyl halides.',
      'Swapping Finkelstein (Cl → I, NaI/acetone) with Swarts (Cl → F, AgF). Both are halogen-exchange reactions but in opposite directions of the group.',
    ],
    faqs: [
      {
        q: 'How many questions come from Haloalkanes and Haloarenes in NEET?',
        a: 'Typically 2–3 questions most years, but recent papers ran hot — 2022, 2023 and 2024 each carried roughly 5–6 questions across the broader organic block. It is worth roughly 3–4% of the Chemistry section, and the questions are repetitive, so PYQs give a high return per hour.',
      },
      {
        q: 'Which reactions are most important in Haloalkanes and Haloarenes for NEET?',
        a: 'The named reactions: Wurtz, Finkelstein, Swarts, Sandmeyer, Williamson ether synthesis, and the Grignard reagent. Learn each as "name → what it converts → reagent". After that, the SN1 vs SN2 reactivity orders and the polyhalogen facts (chloroform/phosgene, Freon, DDT) account for most of the remaining marks.',
      },
      {
        q: 'What is the reactivity order of alkyl halides in SN1 and SN2?',
        a: 'SN2: 1° > 2° > 3° (steric hindrance blocks backside attack). SN1: 3° > 2° > 1° (the reaction goes through a carbocation, and 3° carbocations are most stable). They are exact opposites — mixing them up is the classic NEET mistake here.',
      },
      {
        q: 'Is Haloalkanes and Haloarenes an easy chapter for NEET?',
        a: 'Yes, relatively — it is fact-dense rather than calculation-heavy, so it rewards memorisation of named reactions and polyhalogen facts. The only real traps are the SN1/SN2 order and the aryl-halide resonance reasoning. Solving past papers locks in these marks quickly.',
      },
    ],
  },
  'biology/locomotion-movement': {
    overview:
      'Locomotion & Movement (NCERT Class 11, Human Physiology unit) is a steady NEET scorer — about 2–4 questions almost every year. The marks split predictably: muscle contraction (sliding filament theory and the sarcomere) is the heaviest theme, followed by joint classification and straight bone-count recall. Almost every question is directly traceable to NCERT lines, so it is a high-return chapter for PYQ practice.',
    facts: [
      { label: 'NEET question frequency', value: '~2–4 questions almost every year' },
      { label: 'NCERT source', value: 'Class 11 Biology, Ch. Locomotion & Movement' },
      { label: 'Difficulty', value: 'Easy–Moderate; almost entirely NCERT recall' },
      { label: 'Best use of time', value: 'High — short, factual, repeats every year' },
    ],
    highYield: [
      {
        topic: 'Sliding filament theory & sarcomere bands',
        detail:
          'The single most-asked theme. The sarcomere (Z-line to Z-line) is the contractile unit. During contraction the A band stays the SAME length, while the I band and H zone shorten as actin slides over myosin. Huxley & Hanson proposed the theory; expect a "which band changes" question almost every year.',
      },
      {
        topic: 'Cross-bridge cycle — Ca²⁺, troponin, tropomyosin, ATP',
        detail:
          'At rest, tropomyosin covers the myosin-binding sites on actin. Ca²⁺ released from the sarcoplasmic reticulum binds troponin, shifting tropomyosin to expose those sites. ATP is needed for the myosin head to DETACH and re-cock — which is why rigor mortis (ATP depletion + Ca²⁺ flooding) locks the muscle.',
      },
      {
        topic: 'Bone counts — quick recall table',
        detail:
          'Direct-recall favourites: total 206 bones in an adult = axial 80 (skull, vertebral column, ribs, sternum) + appendicular 126 (limbs and girdles). Skull = 22 bones; vertebral column = 26; each pelvic half = ilium + ischium + pubis. Infants start with ~300 bones that later fuse.',
      },
      {
        topic: 'Joint classification',
        detail:
          'Ball-and-socket (shoulder, hip) = multiaxial; hinge (elbow, knee) = flexion/extension only; pivot (atlas–axis); gliding (carpals); saddle (thumb); fibrous sutures (skull, immovable); cartilaginous (between vertebrae). The synovial sub-types and their examples are the second-most-tested area.',
      },
      {
        topic: 'Skeletal-muscular disorders',
        detail:
          'Gout = uric-acid (urate) crystal deposition in joints; osteoporosis = reduced bone density (post-menopausal, low oestrogen); tetany = rapid spasms from low Ca²⁺; myasthenia gravis = autoimmune attack on ACh receptors; muscular dystrophy = genetic muscle degeneration. One disorder question recurs regularly.',
      },
    ],
    traps: [
      'Thinking the A band shortens during contraction. Only the I band and H zone shorten; the A band length is constant — this is the most-missed sliding-filament fact.',
      'Swapping tendon and ligament. Tendon connects muscle to bone; ligament connects bone to bone.',
      'Forgetting that ATP is needed for myosin to DETACH (not just to contract) — which is exactly why a muscle stiffens (rigor mortis) when ATP runs out.',
      'Confusing red (slow, myoglobin-rich, aerobic) with white (fast, fewer mitochondria, anaerobic) muscle fibres.',
    ],
    faqs: [
      {
        q: 'How many questions come from Locomotion and Movement in NEET?',
        a: 'Usually 2–4 questions every year (an average close to 3 across recent papers). Because the chapter is short and almost entirely NCERT-recall, the marks-per-hour of study is high — it is one of the safest chapters to bank by drilling PYQs.',
      },
      {
        q: 'What is the most important topic in Locomotion and Movement for NEET?',
        a: 'The sliding filament theory and sarcomere structure — especially which bands change during contraction (A band constant; I band and H zone shorten) and the roles of Ca²⁺, troponin, tropomyosin and ATP in the cross-bridge cycle. Joint classification and bone counts come next.',
      },
      {
        q: 'Which bands of the sarcomere shorten during muscle contraction?',
        a: 'The I band (light) and the H zone shorten as actin filaments slide toward the centre. The A band (dark) stays the same length because the thick myosin filaments do not change length — the filaments slide, they do not contract.',
      },
      {
        q: 'Is Locomotion and Movement an easy chapter for NEET?',
        a: 'Yes — it is short and mostly direct NCERT recall, with predictable themes (muscle contraction, joints, bone counts, disorders). The few traps are the A-band-constant rule and the tendon-vs-ligament distinction. Past-year practice almost guarantees these marks.',
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
