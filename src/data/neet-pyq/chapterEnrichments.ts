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
      'Haloalkanes & Haloarenes (NCERT Class 12 Chemistry) is one of the most predictable scoring chapters in NEET Organic Chemistry — it returns roughly 2–3 questions almost every year (about 4% of the Chemistry paper). The reason it is so PYQ-friendly is that NEET keeps re-asking the same closed set of ideas: the named reactions, the SN1-vs-SN2 distinction, why aryl halides are unreactive, and one-line facts about polyhalogen compounds (chloroform, CCl₄, Freon, DDT). Drilling past papers here converts almost directly into marks.',
    facts: [
      { label: 'NEET question frequency', value: '~2–3 questions most years (~4% of Chemistry)' },
      { label: 'NCERT source', value: 'Class 12, Ch. "Haloalkanes & Haloarenes"' },
      { label: 'Question style', value: 'Mostly single-fact recall (named reactions, uses)' },
      { label: 'Best use of time', value: 'High — small, stable, recall-heavy chapter' },
    ],
    highYield: [
      {
        topic: 'Named reactions — learn them as reagent → product',
        detail:
          'The single biggest source of marks. Memorise the conversion, the reagent and the condition: Finkelstein (R–Cl/Br → R–I, NaI in dry acetone), Swarts (R–X → R–F, AgF/Hg₂F₂/SbF₃), Wurtz (2 R–X + 2Na/dry ether → higher symmetrical alkane), Wurtz–Fittig (aryl + alkyl coupling), Sandmeyer (ArN₂⁺ + CuX → Ar–X), Williamson ether synthesis (R–X + R′O⁻Na⁺ → ether, best with 1° halide), and Grignard formation (R–X + Mg/dry ether → RMgX). NEET typically asks "which reaction converts X to Y" or "which reagent is used".',
      },
      {
        topic: 'SN1 vs SN2 — mechanism, reactivity order and solvent',
        detail:
          'SN2 (one step, backside attack, inversion): reactivity 1° > 2° > 3° because it is sterics-controlled, and it is favoured by polar aprotic solvents. SN1 (two steps via a carbocation, racemisation): reactivity 3° > 2° > 1° because it is carbocation-stability-controlled, and it is favoured by polar protic solvents. The two orders being exact opposites is the most-tested idea in the chapter.',
      },
      {
        topic: 'Why aryl & vinyl halides are unreactive',
        detail:
          'The halogen lone pair delocalises into the ring (or the C=C), giving the C–X bond partial double-bond character — so it is shorter and stronger than in an alkyl halide and resists nucleophilic substitution. Expect a direct "aryl halides are less reactive because…" question.',
      },
      {
        topic: 'Polyhalogen compounds — one-line facts',
        detail:
          'Pure recall marks: chloroform (CHCl₃) is stored in dark, completely-filled bottles because light + air oxidise it to poisonous phosgene (COCl₂); CCl₄ is a solvent/old fire-extinguisher; Freon-12 (CCl₂F₂) is a refrigerant banned for ozone depletion; DDT is a persistent organochlorine insecticide; the iodoform (CHI₃) test is positive for ethanol/CH₃CO– and CH₃CH(OH)– groups.',
      },
      {
        topic: 'Elimination (Zaitsev) & distinguishing 1°/2°/3° halides',
        detail:
          'Dehydrohalogenation gives the more-substituted (more stable) alkene as the major product — Zaitsev/Saytzeff rule, e.g. 2-bromobutane → mainly 2-butene. To tell the classes apart, AgNO₃ in ethanol (SN1 conditions) gives the fastest precipitate with 3°, slowest with 1°.',
      },
    ],
    traps: [
      'Reversing the reactivity orders. SN2 is 1° > 2° > 3° (steric); SN1 is 3° > 2° > 1° (carbocation). They are mirror images — getting them swapped is the most common error.',
      'Confusing Finkelstein with Swarts. Finkelstein swaps Cl/Br for I using NaI in acetone; Swarts puts F in using a metal fluoride (AgF/SbF₃). Different halogen, different reagent.',
      'Thinking aryl halides are more reactive because of the aromatic ring — they are LESS reactive, because resonance strengthens and shortens the C–X bond.',
      'Forgetting why chloroform bottles are dark AND full: it is to exclude both light and air, which together convert CHCl₃ to phosgene. A half-empty clear bottle is the wrong answer they bait you with.',
    ],
    faqs: [
      {
        q: 'How many questions come from Haloalkanes and Haloarenes in NEET?',
        a: 'Typically 2–3 questions almost every year — about 4% of the NEET Chemistry paper. Because the chapter is short and the questions are mostly direct recall of named reactions and uses, it is one of the best marks-per-hour chapters in Organic Chemistry.',
      },
      {
        q: 'What is the most important topic in Haloalkanes and Haloarenes for NEET?',
        a: 'The named reactions (Finkelstein, Swarts, Wurtz, Wurtz–Fittig, Sandmeyer, Williamson, Grignard) and the SN1-vs-SN2 distinction. Between them they account for the majority of past-year questions, so learn each named reaction as a reagent → product → condition triplet.',
      },
      {
        q: 'Is Haloalkanes and Haloarenes a Class 11 or Class 12 chapter?',
        a: 'Class 12. It sits in the organic half of the Class 12 NCERT Chemistry book, after the basic organic-chemistry principles you covered in Class 11, and it feeds directly into Alcohols/Phenols/Ethers and Amines.',
      },
      {
        q: 'Why is chloroform stored in dark coloured bottles?',
        a: 'Because in the presence of light and air it is slowly oxidised to phosgene (COCl₂), a highly poisonous gas. Dark, completely-filled bottles exclude both light and air and prevent this. It is a recurring single-fact NEET question.',
      },
    ],
  },

  'biology/locomotion-movement': {
    overview:
      'Locomotion & Movement (NCERT Class 11 Biology, Human Physiology) is one of the highest-return chapters in NEET Zoology — it has averaged roughly 2–3 questions per year (about 2.7 across recent papers) and rarely gets skipped. The questions cluster tightly around the sliding-filament mechanism of muscle contraction, the classification of joints, and a small set of memorised skeleton numbers, so past papers map almost one-to-one onto what gets asked.',
    facts: [
      { label: 'NEET question frequency', value: '~2–3 questions per year (avg ~2.7)' },
      { label: 'NCERT source', value: 'Class 11, Human Physiology unit' },
      { label: 'Top theme', value: 'Sliding-filament theory & sarcomere band changes' },
      { label: 'Best use of time', value: 'High — reliable, recall + one core mechanism' },
    ],
    highYield: [
      {
        topic: 'Sarcomere & sliding-filament band changes',
        detail:
          'The most-repeated idea, asked almost every year. The sarcomere (Z-line to Z-line) is the contractile unit. During contraction the A band length stays CONSTANT, while the I band and the H zone shorten as actin (thin) slides over myosin (thick) toward the centre — the filaments themselves do not shorten. "Which band remains unchanged during contraction?" → A band.',
      },
      {
        topic: 'Cross-bridge cycle & the role of Ca²⁺ and ATP',
        detail:
          'Sequence to lock down: nerve signal → Ca²⁺ released from the sarcoplasmic reticulum → Ca²⁺ binds troponin → tropomyosin shifts and uncovers the myosin-binding sites on actin → myosin head binds and executes the power stroke → ATP binds and lets the head detach, then ATP hydrolysis re-cocks it. No ATP means the head cannot detach — this is the basis of rigor mortis.',
      },
      {
        topic: 'Classification of joints (with examples)',
        detail:
          'A NEET favourite. Ball-and-socket = multiaxial, shoulder and hip; hinge = uniaxial flexion/extension, elbow and knee; pivot = atlas–axis; gliding = carpals; saddle = thumb; fibrous sutures = immovable skull joints; cartilaginous = between vertebrae. Synovial fluid lubricates freely-movable (synovial) joints.',
      },
      {
        topic: 'Skeleton numbers — pure recall marks',
        detail:
          'Memorise the counts they re-ask: 206 bones in the adult (80 axial + 126 appendicular); skull = 22 bones (8 cranial + 14 facial); vertebral column = 26 in the adult (7 cervical + 12 thoracic + 5 lumbar + sacrum + coccyx); 12 pairs of ribs. The pelvic girdle hip bone = ilium + ischium + pubis fused at the acetabulum.',
      },
      {
        topic: 'Muscle types, fibres & disorders',
        detail:
          'Skeletal (striated, voluntary), cardiac (striated, involuntary, myogenic — contracts rhythmically without nerve input), smooth (non-striated, involuntary). Red fibres are rich in myoglobin (aerobic, fatigue-resistant); white fibres rely on glycolysis. Disorders frequently asked: myasthenia gravis (autoimmune, ACh receptors), muscular dystrophy, tetany (low Ca²⁺), gout (uric-acid crystals in joints), osteoporosis (low oestrogen, post-menopausal), arthritis.',
      },
    ],
    traps: [
      'Saying the A band shortens during contraction. It does NOT — only the I band and H zone shorten; the A band (length of the thick filament) is constant.',
      'Confusing tendon and ligament. A tendon joins muscle to bone; a ligament joins bone to bone. NEET swaps these in the options every few years.',
      'Forgetting that ATP is needed for the myosin head to DETACH, not for the power stroke itself. That is exactly why ATP depletion after death causes rigor mortis.',
      'Mixing up the bone counts — adult total 206, skull 22, vertebral column 26 (the column is 33 only before fusion of the sacrum and coccyx).',
    ],
    faqs: [
      {
        q: 'How many questions come from Locomotion and Movement in NEET?',
        a: 'Usually 2–3 questions per year (about 2.7 on average across recent papers), and it is one of the higher-weightage Human Physiology chapters. Because so much of it is recall plus one core mechanism, it is reliable marks if you have drilled the PYQs.',
      },
      {
        q: 'What is the most important topic in Locomotion and Movement for NEET?',
        a: 'The sliding-filament theory of muscle contraction — the sarcomere structure and which bands change. Know that the A band stays constant while the I band and H zone shorten, and the full Ca²⁺ → troponin → tropomyosin → cross-bridge sequence. Joint classification and the skeleton numbers come next.',
      },
      {
        q: 'Which band does not change during muscle contraction?',
        a: 'The A band. During contraction the actin (thin) filaments slide inward over the myosin (thick) filaments, so the I band and the H zone shorten, but the A band — which corresponds to the length of the thick filament — stays the same.',
      },
      {
        q: 'Is Locomotion and Movement a Class 11 or Class 12 chapter?',
        a: 'Class 11, in the Human Physiology unit of NCERT Biology. It pairs naturally with Neural Control & Coordination (the nerve signal that triggers contraction), which is why questions sometimes link the two.',
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
