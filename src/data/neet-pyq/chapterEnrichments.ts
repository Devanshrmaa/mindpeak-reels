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
  'chemistry/haloalkanes': {
    overview:
      'Haloalkanes & Haloarenes (NCERT Class 12 Chemistry) is a short, high-return Organic chapter: NEET has historically pulled ~2–3 questions from it almost every year (roughly 3–4% of the Chemistry section). Most of those marks come from a small, predictable set of ideas — SN1 vs SN2 behaviour, reactivity orders, and a handful of named reactions — so working past papers converts almost directly into marks. The mechanisms repeat with new molecules, which is exactly why PYQ practice beats re-reading the theory.',
    facts: [
      { label: 'NEET question frequency', value: '~2–3 questions most years (≈3–4% of Chemistry)' },
      { label: 'NCERT source', value: 'Class 12, Ch. Haloalkanes & Haloarenes' },
      { label: 'Difficulty', value: 'Easy–Moderate; mostly mechanism + reactivity-order recall' },
      { label: 'Best use of time', value: 'High — short chapter, reliable single-fact marks' },
    ],
    highYield: [
      {
        topic: 'SN1 vs SN2 — stereochemistry & rate',
        detail:
          'The single most-repeated theme. SN2 is one-step, bimolecular, and gives inversion of configuration (Walden inversion) — a chiral substrate flips. SN1 is two-step, goes through a planar carbocation, and gives racemisation (≈50:50 mixture, NOT retention). SN1 rate depends only on the substrate; SN2 rate depends on both substrate and nucleophile. Expect a "which mechanism / what is the product stereochemistry" question almost every year.',
      },
      {
        topic: 'Reactivity orders',
        detail:
          'Toward SN1: 3° > 2° > 1° (carbocation stability). Toward SN2: 1° > 2° > 3° (steric hindrance). Leaving-group / overall reactivity of the C–X bond: R–I > R–Br > R–Cl > R–F (weaker bond breaks easier). Allyl/benzyl halides are extra reactive; vinyl and aryl halides are the LEAST reactive toward nucleophilic substitution.',
      },
      {
        topic: 'Why haloarenes resist nucleophilic substitution',
        detail:
          'Chlorobenzene is far less reactive than chloromethane because of (i) partial double-bond character from resonance, (ii) the sp² carbon holding the C–Cl bond tighter, and (iii) an unstable phenyl cation. NEET loves a "least reactive toward SN" question — the answer is usually the aryl or vinyl halide.',
      },
      {
        topic: 'Named reactions',
        detail:
          'Finkelstein (R–Cl/Br + NaI in dry acetone → R–I), Swarts (R–X + AgF/Hg₂F₂ → R–F), Wurtz (2 R–X + Na → R–R), Wurtz–Fittig (alkyl + aryl halide → alkylarene), Fittig (2 aryl halides → biaryl), Sandmeyer and Gattermann (from diazonium salts). Knowing the exact reagent/solvent (e.g. "dry acetone" for Finkelstein) is the trick the question tests.',
      },
      {
        topic: 'Polyhalogen compounds & uses',
        detail:
          'Direct-recall marks: CHCl₃ is stored in dark bottles with a little ethanol (to stop phosgene, COCl₂, formation); CCl₄, DDT, freons (CFCs, ozone-depleting) and iodoform are common single-fact questions on uses and environmental effects.',
      },
    ],
    traps: [
      'Saying SN1 gives retention of configuration. SN1 goes through a planar carbocation, so it gives racemisation (≈50:50). Inversion is the SN2 outcome (Walden inversion).',
      'Thinking aryl/vinyl halides are MORE reactive because the carbon is sp². They are the LEAST reactive toward nucleophilic substitution — resonance and bond strength lock the halogen in.',
      'Flipping the reactivity orders: 3° is fastest for SN1 but slowest for SN2. Read whether the question asks about SN1 or SN2 before ranking.',
      'Forgetting the solvent condition in Finkelstein (dry acetone) — it is there to keep NaCl/NaBr insoluble and drive the equilibrium. The reagent alone is not the full answer.',
    ],
    faqs: [
      {
        q: 'How many questions come from Haloalkanes and Haloarenes in NEET?',
        a: 'Typically 2–3 questions almost every year — roughly 3–4% of the Chemistry section. Since the chapter is short and the same mechanisms recur, the marks-per-hour of study is among the best in Class 12 Organic Chemistry, which is why drilling PYQs pays off.',
      },
      {
        q: 'What is the most important topic in Haloalkanes and Haloarenes for NEET?',
        a: 'The SN1 vs SN2 comparison — mechanism, rate dependence, and especially stereochemistry (SN2 inversion, SN1 racemisation). After that, the reactivity orders (3°>2°>1° for SN1, the reverse for SN2; R–I>R–Br>R–Cl>R–F) and the named reactions (Finkelstein, Swarts, Wurtz, Sandmeyer) cover most past questions.',
      },
      {
        q: 'Does SN1 give inversion or retention of configuration?',
        a: 'Neither cleanly — SN1 gives racemisation. It proceeds through a flat (planar) carbocation that the nucleophile can attack from either face, producing a roughly 50:50 mixture of both enantiomers. Inversion of configuration (Walden inversion) is the SN2 result, not SN1.',
      },
      {
        q: 'Why is chlorobenzene less reactive than chloromethane toward nucleophiles?',
        a: 'Because of resonance (the C–Cl bond gets partial double-bond character and is harder to break), the sp² hybridised carbon holding the halogen more tightly, and the instability of the phenyl cation. So aryl halides — and vinyl halides for similar reasons — are the least reactive toward nucleophilic substitution, a frequent NEET "odd one out" answer.',
      },
    ],
  },
  'biology/locomotion-movement': {
    overview:
      'Locomotion & Movement (NCERT Class 11 Biology, Unit "Human Physiology") is a steady scorer in NEET — about 2–3 questions most years (often 4 if you count overlap with muscle physiology). The concept pool is small and finite, so PYQs cover the large majority of what gets asked. The marks cluster around three areas: the sliding-filament mechanism, the human skeleton (bone counts and the axial/appendicular split), and joint types — plus one disorder question that asks for the cause, not just the name.',
    facts: [
      { label: 'NEET question frequency', value: '~2–3 questions most years (occasionally 4)' },
      { label: 'NCERT source', value: 'Class 11, Ch. Locomotion & Movement' },
      { label: 'Difficulty', value: 'Easy–Moderate; mostly direct recall + one diagram-based Q' },
      { label: 'Best use of time', value: 'High — finite fact pool, PYQs repeat heavily' },
    ],
    highYield: [
      {
        topic: 'Sliding-filament theory — what shortens, what stays constant',
        detail:
          'The most-repeated question in the chapter. During contraction the sarcomere shortens, the I-band (light, actin-only) shortens, and the H-zone shortens, while the A-band (dark, myosin length) stays CONSTANT and the Z-lines move closer. The filaments themselves do not shorten — they slide. "Which band remains unchanged during contraction?" → A-band is a near-guaranteed mark.',
      },
      {
        topic: 'Muscle proteins & the cross-bridge cycle',
        detail:
          'Thin filament = actin (with regulatory troponin and tropomyosin); thick filament = myosin. Ca²⁺ binds troponin → exposes actin binding sites → myosin heads form cross-bridges → power stroke (ATP-driven). Red fibres are aerobic, myoglobin-rich with many mitochondria (sustained work); white fibres are anaerobic with few mitochondria (fast, fatigue-prone).',
      },
      {
        topic: 'Human skeleton — 206 bones and the axial/appendicular split',
        detail:
          'Total 206 bones = 80 axial + 126 appendicular. Axial: skull 22 (8 cranial + 14 facial) + 6 ear ossicles + 1 hyoid + vertebral column 26 + sternum 1 + ribs 24 = 80. Appendicular: 126 (limbs + pectoral and pelvic girdles). NEET regularly asks for one of these counts or to classify a given bone as axial vs appendicular.',
      },
      {
        topic: 'Joints — match the type to its example',
        detail:
          'Fibrous (immovable, e.g. skull sutures); cartilaginous (slightly movable, e.g. between adjacent vertebrae); synovial (freely movable). Within synovial: ball-and-socket (shoulder, hip), hinge (knee, elbow), pivot (atlas–axis), gliding (between carpals/tarsals), saddle (carpal–metacarpal of thumb), condyloid. Matching the joint to its body location is a classic PYQ format.',
      },
      {
        topic: 'Disorders — know the cause, not just the name',
        detail:
          'Myasthenia gravis (autoimmune, antibodies block the ACh receptor → fatigue); muscular dystrophy (genetic, progressive degeneration); tetany (low blood Ca²⁺ → rapid spasms); gout (uric-acid crystals inflame joints); osteoporosis (low bone mass, linked to decreased oestrogen, common post-menopause); arthritis (joint inflammation). NEET typically asks for the mechanism or cause.',
      },
    ],
    traps: [
      'Saying the A-band shortens during contraction. The A-band length is CONSTANT — it equals the myosin filament length. The I-band and H-zone shorten; the sarcomere shortens because filaments slide, not shrink.',
      'Confusing the bone counts: 80 axial + 126 appendicular = 206. A common mix-up is the skull total (22, of which 8 are cranial and 14 facial) and forgetting the 6 ear ossicles and 1 hyoid sit in the axial skeleton.',
      'Mixing up red and white muscle fibres. Red = aerobic, myoglobin- and mitochondria-rich, fatigue-resistant; white = anaerobic, few mitochondria, fast but quick to tire.',
      'Naming a disorder without its cause. NEET phrases it as "deficiency of Ca²⁺ causes ___" (tetany) or "autoimmune blockage of ACh receptors" (myasthenia gravis) — learn the mechanism, not just the label.',
    ],
    faqs: [
      {
        q: 'How many questions come from Locomotion and Movement in NEET?',
        a: 'Usually 2–3 questions most years, occasionally 4 if muscle-physiology overlap is counted. The fact pool is small and finite, so past-year questions cover the large majority of what NEET asks — making PYQ practice unusually efficient for this chapter.',
      },
      {
        q: 'Which band does not change during muscle contraction?',
        a: 'The A-band stays constant — its length equals the myosin (thick) filament, which does not shorten. During contraction the I-band and H-zone shorten and the Z-lines come closer, so the whole sarcomere shortens, but the filaments slide past each other rather than shrinking. This "which band is unchanged" question appears almost every year.',
      },
      {
        q: 'How many bones are in the human body for NEET, and how are they split?',
        a: '206 bones total: 80 axial (skull 22, ear ossicles 6, hyoid 1, vertebral column 26, sternum 1, ribs 24) and 126 appendicular (the two limbs plus the pectoral and pelvic girdles). Questions often give a single bone and ask you to classify it as axial or appendicular.',
      },
      {
        q: 'What are the most important topics in Locomotion and Movement for NEET?',
        a: 'In priority order: the sliding-filament theory (which bands shorten vs stay constant), the muscle proteins and cross-bridge cycle, the human skeleton (206 bones, axial vs appendicular), joint types matched to examples, and the locomotory disorders by cause (myasthenia gravis, tetany, gout, osteoporosis).',
      },
    ],
  },
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

  'biology/inheritance-variation': {
    overview:
      'Principles of Inheritance & Variation (NCERT Class 12 Biology, "Genetics & Evolution" unit) is one of the highest-return chapters in all of NEET Biology. The single chapter is asked roughly 3–4 questions almost every year, and together with Molecular Basis of Inheritance and Evolution the Genetics unit is usually the single highest-weight block of the whole paper. The good news for PYQ practice: the ideas repeat — Mendelian ratios, sex-linked disorders and chromosomal syndromes come back year after year in new wording.',
    facts: [
      { label: 'NEET question frequency', value: '~3–4 questions from this chapter most years' },
      { label: 'Genetics unit weightage', value: '~9–10 Qs (with Molecular Basis + Evolution) — among the highest of any unit' },
      { label: 'NCERT source', value: 'Class 12, Ch. "Principles of Inheritance & Variation"' },
      { label: 'Difficulty trend', value: 'Easy–Moderate, shifting toward match-the-column & multi-statement application' },
    ],
    highYield: [
      {
        topic: 'Mendelian ratios & the test cross',
        detail:
          'Monohybrid 3:1 (genotypic 1:2:1), dihybrid 9:3:3:1, and the test cross (a dominant phenotype × homozygous recessive) used to expose an unknown genotype. The most-asked single theme — practise reading a ratio backwards to the parent genotypes, not just forwards.',
      },
      {
        topic: 'Deviations from Mendelism',
        detail:
          'Incomplete dominance (snapdragon — F₂ phenotype ratio equals the genotype ratio, 1:2:1), codominance (ABO "AB" blood group expresses BOTH antigens), multiple alleles (Iᴬ, Iᴮ, i give six genotypes), and pleiotropy (one gene, many traits — sickle cell, PKU). NEET tests these distinctions almost every year.',
      },
      {
        topic: 'Sex determination systems',
        detail:
          'XX–XY (humans, Drosophila), XX–XO (grasshopper), ZZ–ZW (birds), and the haplodiploid honeybee system (males are haploid, developing from unfertilised eggs). In humans the sperm decides sex, and the SRY gene on the Y triggers male development.',
      },
      {
        topic: 'Sex-linked & Mendelian disorders',
        detail:
          'Haemophilia and red–green colour blindness are X-linked recessive (commoner in males; a carrier mother passes it to ~50% of sons). Sickle-cell anaemia = point mutation (Glu→Val at the 6th position of the β-globin chain, autosomal recessive); thalassemia = reduced globin synthesis; PKU = phenylalanine hydroxylase deficiency. Pedigree-reading questions hang on these.',
      },
      {
        topic: 'Chromosomal disorders (karyotypes)',
        detail:
          'Down syndrome = trisomy 21 (47,+21); Turner = 45,X (the only viable monosomy, female); Klinefelter = 47,XXY (male). The exact karyotype is an almost-guaranteed single-fact mark — lock all three.',
      },
    ],
    traps: [
      'Confusing incomplete dominance with codominance. Incomplete dominance BLENDS to an intermediate (pink); codominance shows both alleles fully and separately (AB blood = A and B antigens both present).',
      'Swapping Turner (45,X — female, monosomy) and Klinefelter (47,XXY — male, extra X). A whole mark can turn on this one character.',
      'Saying crossing over happens between sister chromatids — it is between NON-sister chromatids of homologous chromosomes, in the pachytene stage of prophase I.',
      'Forgetting that linked genes do NOT assort independently, so a dihybrid cross of linked genes does not give 9:3:3:1 — recombination frequency between them measures map distance.',
    ],
    faqs: [
      {
        q: 'How many questions come from Principles of Inheritance and Variation in NEET?',
        a: 'Typically 3–4 questions from this chapter alone, almost every year. Counting the whole Genetics & Evolution unit (this chapter plus Molecular Basis of Inheritance and Evolution), it is usually among the highest-weight units in the paper at roughly 9–10 questions — which is why genetics is non-negotiable for a top NEET rank.',
      },
      {
        q: 'Is genetics hard for NEET?',
        a: 'It is conceptual rather than memory-heavy, so it feels hard only until the logic clicks. Once you can read a cross both ways (parents → ratio and ratio → parents) and you have the karyotypes and X-linked patterns memorised, it becomes one of the most reliable scoring chapters because the question types repeat.',
      },
      {
        q: 'What are the most important topics in Principles of Inheritance for NEET?',
        a: 'In priority order: Mendelian ratios and the test cross, deviations from Mendelism (incomplete/codominance, multiple alleles, pleiotropy), sex-determination systems, X-linked disorders with pedigree analysis, and the three chromosomal syndromes (Down, Turner, Klinefelter) with their exact karyotypes.',
      },
      {
        q: 'How should I use previous year questions for genetics?',
        a: 'Drill them by theme, not by year. Because NEET re-asks the same handful of ideas, sorting PYQs into ratios / deviations / sex-linkage / disorders and solving each cluster together makes the repeating patterns obvious and exposes the exact distinctions (e.g. Turner vs Klinefelter) the examiners keep testing.',
      },
    ],
  },

  'biology/human-reproduction': {
    overview:
      'Human Reproduction (NCERT Class 12 Biology, Reproduction unit) is a high-yield, NCERT-direct chapter: on its own it is asked roughly 3–4 questions in most NEET papers. Be careful with the bigger numbers you see online — the "10–12 questions" figure quoted by many sites is for the whole Reproduction unit (Sexual Reproduction in Flowering Plants + Human Reproduction + Reproductive Health), not this single chapter. It scores well because answers come almost verbatim from NCERT lines and labelled diagrams.',
    facts: [
      { label: 'NEET question frequency', value: '~3–4 questions from this chapter most years' },
      { label: 'Reproduction unit weightage', value: '~9–10 Qs across the three chapters of the unit' },
      { label: 'NCERT source', value: 'Class 12, Ch. "Human Reproduction"' },
      { label: 'Best use of time', value: 'High — NCERT-direct, diagram-driven, reliable marks' },
    ],
    highYield: [
      {
        topic: 'Gametogenesis — spermatogenesis vs oogenesis',
        detail:
          'The most-tested theme. Know the cell sequence (spermatogonium → primary/secondary spermatocyte → spermatid → sperm; oogonium → primary oocyte → secondary oocyte → ootid/ovum) and the ploidy at each step. One sperm-mother cell yields 4 sperms; one egg-mother cell yields 1 ovum plus polar bodies.',
      },
      {
        topic: 'Menstrual cycle hormones',
        detail:
          'A near-guaranteed question. FSH drives follicle growth; the LH surge (~day 14) triggers ovulation; estrogen comes from the growing follicle; progesterone from the corpus luteum maintains the endometrium. With no fertilisation the corpus luteum regresses → progesterone falls → menstruation (~day 1). Match the hormone to the day/phase.',
      },
      {
        topic: 'Male & female reproductive histology',
        detail:
          'Seminiferous tubules (Sertoli cells nourish sperm; Leydig/interstitial cells secrete testosterone), the duct path (epididymis → vas deferens → ejaculatory duct), and on the female side the Graafian follicle and corpus luteum. "Which cell secretes X" and labelled-diagram questions are common.',
      },
      {
        topic: 'Fertilisation & early development',
        detail:
          'Acrosomal enzymes for sperm entry, fertilisation in the ampulla of the fallopian tube, cleavage → morula → blastocyst, implantation around day 7, and hCG / the placenta as the pregnancy-maintaining endocrine link. Day-counting and stage-identification appear frequently.',
      },
    ],
    traps: [
      'Mixing up where meiosis pauses: the primary oocyte is arrested in prophase I (until puberty) and the secondary oocyte in metaphase II (completed only if a sperm enters).',
      'Attributing progesterone to the follicle. Estrogen comes mainly from the growing follicle; progesterone comes from the corpus luteum after ovulation.',
      'Confusing Sertoli cells (nourish developing sperm) with Leydig/interstitial cells (secrete testosterone).',
      'Saying fertilisation happens in the uterus — it occurs in the ampullary region of the fallopian tube; only implantation happens in the uterus.',
    ],
    faqs: [
      {
        q: 'How many questions come from Human Reproduction in NEET?',
        a: 'About 3–4 questions from this chapter in most years. The larger "10–12 question" figure you may have seen online is for the entire Reproduction unit (this chapter plus Sexual Reproduction in Flowering Plants and Reproductive Health) — still worth treating as one high-priority block.',
      },
      {
        q: 'Is Human Reproduction a scoring chapter for NEET?',
        a: 'Yes — it is one of the most NCERT-direct chapters in Class 12. Most questions are answered by the exact NCERT lines and the labelled diagrams, so disciplined NCERT reading plus PYQ practice usually converts to full marks here.',
      },
      {
        q: 'What are the most important topics in Human Reproduction for NEET?',
        a: 'Gametogenesis (spermatogenesis vs oogenesis with ploidy at each stage), the menstrual cycle hormones and their days, reproductive-system histology (Sertoli vs Leydig cells, Graafian follicle, corpus luteum), and the fertilisation-to-implantation sequence.',
      },
      {
        q: 'How do I avoid silly mistakes in reproduction questions?',
        a: 'Anchor every fact to a diagram or a timeline: draw the menstrual cycle with hormone peaks against the days, and the gametogenesis flow with the meiosis-arrest points marked. Most NEET traps here are about WHEN something happens (which day, which arrested stage) or WHICH cell secretes a given hormone.',
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
