/**
 * Hand-written, per-chapter editorial enrichments for the highest-value JEE chapter
 * pages that rank for "weightage"/"how many questions" queries but currently sit in
 * "Crawled – currently not indexed" (per seo-reports/index-state-2026-06-10.csv) and
 * for the striking-distance weightage cluster in keyword-opportunities-2026-06-10.md.
 *
 * WHY THIS IS NOT A TEMPLATE:
 * The chapter page (`ChapterPage.tsx`) is heavily auto-generated — it quotes a single
 * vague weightage band and produces generic FAQs by swapping the chapter name. Doing
 * that for all 149 chapters is exactly the scaled-content pattern that earned the
 * March 2026 penalty. The SERP leaders (pw.live, collegedunia, vedantu) have the same
 * gap: they quote ONE percentage and never split JEE Main vs JEE Advanced, never give
 * a study order, and several still list topics the NTA deleted in 2024. Each entry
 * below is researched for ONE chapter — real per-paper question counts split across
 * Main and Advanced, the sub-topics that actually repeat, an honest study sequence,
 * and (where it applies) a correction the top results get wrong. The page renders the
 * block ONLY for chapters with a curated entry. Seed deliberately and slowly.
 *
 * Sources verified June 2026 against pw.live, collegedunia, esaral, vedantu and
 * examside PYQ archives, and cross-checked against the NTA JEE Main 2024 syllabus
 * reduction (carried forward to 2025–2026).
 */

export interface ChapterEnrichment {
  /** One short paragraph: the real Main-vs-Advanced picture + why it matters. */
  overview: string;
  /** Main-vs-Advanced split — the table every competitor omits. */
  examSplit: { exam: string; weightage: string; questions: string; nature: string }[];
  /** Honest correction the top SERP results get wrong (optional). */
  correction?: string;
  /** What to study, in order, with the reason each step comes when it does. */
  studyOrder: { step: string; detail: string }[];
  /** High-yield sub-topics in priority order (most-asked first). */
  highYield: { topic: string; detail: string }[];
  /** Specific mistakes students repeatedly make. */
  traps: string[];
  /** FAQs phrased in the searcher's own words. */
  faqs: { q: string; a: string }[];
}

const ENRICHMENTS: Record<string, ChapterEnrichment> = {
  'jee-physics-rotational-motion': {
    overview:
      'Rotational Motion is the highest-yield single chapter in JEE Physics mechanics, and the question count is different in the two papers — which is the part most weightage articles skip. In JEE Main it is reliably 2–3 questions per shift (occasionally three), and the questions are formula-direct: moment of inertia, torque, rolling, angular-momentum conservation. In JEE Advanced it has appeared in every paper from 2009 to 2023 (2–4 questions) but the questions fuse rolling constraints, angular impulse and collisions into one multi-step problem. The strategy that follows from this split: in Main, drill standard numerical types for speed; for Advanced, practise the multi-concept combinations.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~4–8% of Physics', questions: '2–3 per shift', nature: 'Single-correct + numerical; direct MoI, torque, rolling, L-conservation' },
      { exam: 'JEE Advanced', weightage: '~4–5% of Physics', questions: '2–4 (in every paper 2009–2023)', nature: 'Multi-concept: rolling + collision, angular impulse, variable MoI, paragraph-linked' },
    ],
    studyOrder: [
      { step: 'Moment of inertia first', detail: 'You cannot solve anything else without it. Memorise I for the standard bodies (ring MR², disc ½MR², solid sphere ⅖MR², hollow sphere ⅔MR², rod ML²/12 about centre) and the parallel- and perpendicular-axis theorems. About 30% of all rotation questions are won or lost on picking the correct I.' },
      { step: 'Torque and angular acceleration (τ = Iα)', detail: 'The rotational analogue of F = ma. Build the habit of writing the linear equation (F = ma) and the rotational equation (τ = Iα) together for every rigid-body problem.' },
      { step: 'Angular momentum and its conservation', detail: 'L = Iω. The conservation case (no external torque) drives the most-asked Main question type — disc-drop, man-on-turntable, contracting system.' },
      { step: 'Rolling without slipping', detail: 'The condition v = Rω (and a = Rα) plus the energy split ½mv² + ½Iω². This is the single highest-frequency theme across both papers.' },
      { step: 'Combined / advanced problems', detail: 'Only after the above: rolling on an incline, toppling, collision-then-rotation, and angular impulse. These are where JEE Advanced lives.' },
    ],
    highYield: [
      {
        topic: 'Moment of inertia of standard bodies + axis theorems',
        detail:
          'Highest frequency in JEE Main. Know I for ring/disc/sphere/rod cold, then apply the parallel-axis theorem (I = I_cm + Md²) and perpendicular-axis theorem (for laminae). A large share of "find I about this axis" questions are one theorem applied to a standard body.',
      },
      {
        topic: 'Rolling without slipping on a plane and an incline',
        detail:
          'For a body rolling down an incline, a = g·sinθ / (1 + I/MR²) — so a solid sphere (I/MR² = 2/5) beats a disc (1/2) beats a ring (1) to the bottom. The fraction of energy that is rotational is (I/MR²)/(1 + I/MR²). These two results answer most rolling questions directly.',
      },
      {
        topic: 'Conservation of angular momentum',
        detail:
          'When external torque is zero, Iω is constant. Classic Main setups: a disc dropped onto a rotating disc (find common ω), a person pulling masses inward on a turntable, an insect walking on a rotating ring. Set I₁ω₁ = I₂ω₂ and solve.',
      },
      {
        topic: 'Torque, equilibrium and toppling',
        detail:
          'Net torque about a chosen pivot. Toppling-vs-sliding questions (which happens first as force/angle increases) and ladder/beam equilibrium recur in Main. Choosing the pivot at an unknown force eliminates it from the equation.',
      },
    ],
    traps: [
      'Using the moment of inertia about the wrong axis. The parallel-axis theorem is needed the moment the axis is not through the centre of mass — forgetting the Md² term is the most common slip.',
      'Treating rolling and pure rotation the same. In rolling, both ½mv² (translational) and ½Iω² (rotational) carry energy, linked by v = Rω. Dropping either term gives the wrong answer.',
      'Getting the direction of friction wrong in rolling. On an incline, friction acts up the slope for a body rolling down without slipping (it provides the torque); assuming it opposes motion of the centre of mass flips the sign.',
      'Writing only the linear OR only the rotational equation. Rigid-body problems almost always need F = ma AND τ = Iα together, plus the rolling constraint to close the system.',
    ],
    faqs: [
      {
        q: 'How many questions come from Rotational Motion in JEE Main and Advanced?',
        a: 'JEE Main asks about 2–3 questions per shift (roughly 4–8% of the Physics section), and they are mostly direct numericals on moment of inertia, torque, rolling and angular-momentum conservation. JEE Advanced has carried 2–4 questions in every paper from 2009 to 2023 (~4–5%), but there the questions combine several concepts at once.',
      },
      {
        q: 'Is Rotational Motion important for JEE Advanced?',
        a: 'Yes — it is one of the highest-frequency chapters and has appeared in every JEE Advanced paper for over a decade. The difference from Main is depth: Advanced fuses rolling constraints, collisions and angular impulse into single multi-step problems, so the chapter is unskippable for a serious Advanced attempt.',
      },
      {
        q: 'Which topic in Rotational Motion is most important?',
        a: 'Moment of inertia (with the parallel- and perpendicular-axis theorems) and rolling without slipping. Almost every question reduces to picking the right I and, for rolling, using v = Rω with the energy split ½mv² + ½Iω². Master those two and most of the chapter follows.',
      },
      {
        q: 'Is Rotational Motion hard?',
        a: 'It is rated Hard mainly because it requires solving the linear equation (F = ma) and the rotational equation (τ = Iα) simultaneously, with the correct moment of inertia and the rolling constraint. Once you make writing all three a habit, the chapter becomes systematic — and it is then one of the most reliable scorers.',
      },
    ],
  },

  'jee-chemistry-coordination-compounds': {
    overview:
      'Coordination Compounds is one of the most dependable scoring chapters in JEE Inorganic Chemistry because the question types repeat: nomenclature, isomerism, magnetic moment, hybridisation/geometry and crystal field theory. JEE Main asks about 2–3 questions almost every year and they are mostly direct, single-fact or one-step. JEE Advanced asks a similar count but goes deeper — crystal field stabilisation energy, isomer counting, and organometallics (metal carbonyls, the 18-electron/EAN rule, synergic bonding). Because the chapter is rule-based rather than reaction-heavy, it gives a high marks-per-hour return.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~3% of Chemistry', questions: '2–3 per year', nature: 'Direct: IUPAC naming, isomer type, spin-only magnetic moment, oxidation/coordination number' },
      { exam: 'JEE Advanced', weightage: '~5% of Chemistry', questions: '2–3 per year', nature: 'Deeper CFT/CFSE, isomer counting, magnetic behaviour, organometallics & metal carbonyls' },
    ],
    correction:
      'Some weightage pages quote "~9.9%" for this chapter in JEE Main. That figure conflates the whole inorganic block; the chapter on its own is closer to 3% (about 2–3 questions). It is high-yield, but treat the inflated number with caution.',
    studyOrder: [
      { step: 'Terminology and Werner\'s theory', detail: 'Ligand, denticity, coordination number, oxidation state of the metal. Getting the oxidation number right is the gate to magnetic moment and CFT, so do this first.' },
      { step: 'IUPAC nomenclature', detail: 'Practise naming 25–30 complexes (ligand alphabetical order, prefixes, charge). Pure marks in Main and a prerequisite for everything else.' },
      { step: 'Isomerism', detail: 'Structural (linkage, ionisation, coordination, hydrate) and stereo (geometrical, optical). Learn to COUNT isomers for given formulae — a recurring Advanced ask.' },
      { step: 'VBT → CFT', detail: 'Use VBT for hybridisation and geometry, then CFT for colour, magnetic moment and stability. CFT is the higher-value tool for Advanced.' },
      { step: 'Magnetic moment and the spectrochemical series', detail: 'Spin-only moment μ = √(n(n+2)) BM, strong- vs weak-field ligands, low- vs high-spin. This ties the whole chapter together.' },
    ],
    highYield: [
      {
        topic: 'Spin-only magnetic moment, μ = √(n(n+2)) BM',
        detail:
          'Count unpaired electrons after deciding high- vs low-spin (set by the ligand on the spectrochemical series), then plug in. n = 0,1,2,3,4,5 gives μ ≈ 0, 1.73, 2.83, 3.87, 4.90, 5.92 BM — worth memorising the ladder for instant answers.',
      },
      {
        topic: 'Hybridisation → geometry → magnetic behaviour',
        detail:
          'd²sp³ (inner-orbital, low-spin) vs sp³d² (outer-orbital, high-spin) for octahedral; dsp² for square planar (e.g. [Ni(CN)₄]²⁻, diamagnetic); sp³ for tetrahedral. A single question often chains ligand strength → pairing → geometry → paramagnetism.',
      },
      {
        topic: 'Crystal field splitting & CFSE',
        detail:
          'Octahedral splits d into t₂g (lower) and e_g (higher) by Δ₀; tetrahedral is inverted and smaller (Δ_t = 4/9 Δ₀). CFSE = (−0.4·n_t2g + 0.6·n_eg)Δ₀. Strong-field ligands (CN⁻, CO) force pairing; weak-field (I⁻, Br⁻) do not. Core to Advanced.',
      },
      {
        topic: 'Isomerism — identify and count',
        detail:
          'Geometrical (cis/trans, fac/mer), optical (non-superimposable mirror images, common in [M(AA)₃] chelates), and structural (linkage e.g. –NO₂/–ONO, ionisation, coordination). Advanced loves "how many isomers does [Ma₂b₂c₂] show".',
      },
    ],
    traps: [
      'Naming the metal complex with ligands in the wrong order — IUPAC uses alphabetical order of ligand names (ignoring multiplying prefixes), not size or charge.',
      'Forgetting that strong-field ligands cause electron pairing (low spin) before applying μ = √(n(n+2)). The ligand on the spectrochemical series decides the unpaired count, not just the d-electron total.',
      'Confusing geometrical and optical isomerism. Geometrical is about spatial arrangement (cis/trans); optical is about chirality (mirror images). A complex can show one, both, or neither.',
      'Using octahedral splitting logic for tetrahedral complexes. Tetrahedral splitting is inverted (e below t₂) and only ~4/9 as large, so tetrahedral complexes are almost always high-spin.',
    ],
    faqs: [
      {
        q: 'How many questions come from Coordination Compounds in JEE?',
        a: 'About 2–3 questions per year in both JEE Main (~3% of Chemistry) and JEE Advanced (~5%). In Main they are mostly direct — naming, isomer type, magnetic moment; in Advanced they go deeper into CFT/CFSE, isomer counting and organometallics.',
      },
      {
        q: 'Is Coordination Compounds a scoring chapter for JEE?',
        a: 'Yes, it is one of the best marks-per-hour chapters in Inorganic Chemistry because the question types repeat and are rule-based rather than reaction-memorisation. Lock down nomenclature, magnetic moment and CFT and you reliably bank 2–3 questions.',
      },
      {
        q: 'Is CFT or VBT more important for JEE?',
        a: 'Both are used, but CFT is the higher-value tool — it explains colour, magnetic behaviour and relative stability quantitatively, and JEE Advanced tests CFSE and the spectrochemical series directly. VBT is still needed for hybridisation and predicting geometry, so learn VBT first and then CFT.',
      },
      {
        q: 'What is the fastest way to find the magnetic moment of a complex?',
        a: 'Find the metal oxidation state, get its d-electron count, decide high- or low-spin from the ligand (strong-field ligands like CN⁻/CO force pairing), count the unpaired electrons n, then use μ = √(n(n+2)) BM. Memorising the n = 0–5 ladder (0, 1.73, 2.83, 3.87, 4.90, 5.92 BM) makes it instant.',
      },
    ],
  },

  'jee-physics-modern-physics': {
    overview:
      'Modern Physics is, taken as a block, the highest-scoring region of JEE Physics — and that is the framing single-percentage articles miss. This page covers the dual-nature and atomic part (photoelectric effect, Bohr model, hydrogen spectrum, X-rays, de Broglie, uncertainty); together with Nuclear Physics and Semiconductors it forms a cluster that contributes roughly 4–5 questions to a JEE Main paper. The reason it is called "scoring" is honest: the questions are mostly formula-direct, so a student who memorises a handful of relations and transition rules can bank 12–18 marks reliably. JEE Advanced asks fewer but more layered questions (e.g. photoelectric combined with circuit/stopping potential, or nucleus + energetics).',
    examSplit: [
      { exam: 'JEE Main', weightage: 'Modern-physics block ~10–13% of Physics', questions: '2–3 from this chapter (4–5 across the whole block)', nature: 'Formula-direct: photoelectric, Bohr transitions, de Broglie, X-ray cutoff' },
      { exam: 'JEE Advanced', weightage: '~5–7% of Physics', questions: '1–3', nature: 'Layered: photoelectric + stopping potential, Bohr energetics, multi-step nuclear/atomic' },
    ],
    correction:
      'Treat "Modern Physics = one chapter" loosely. JEE Main counts dual nature, atoms, and nuclei (and separately semiconductors) — the high block weightage you see quoted is the sum of these, not this page alone. Note also that "Communication Systems" was removed from the JEE Main syllabus in the 2024 reduction, so older guides that still include it are out of date.',
    studyOrder: [
      { step: 'Photoelectric effect', detail: 'Einstein\'s equation KE_max = hf − φ, threshold frequency, and stopping potential. The most-asked single topic and the foundation for the rest.' },
      { step: 'Bohr model and hydrogen spectrum', detail: 'E_n = −13.6 Z²/n² eV, radius r_n = n²a₀/Z, and the Lyman/Balmer/Paschen series. Transition-energy questions are a guaranteed appearance.' },
      { step: 'de Broglie wavelength & dual nature', detail: 'λ = h/mv (and λ = h/√(2mKE), λ = 12.27/√V Å for electrons accelerated through V volts). Quick, formula-direct marks.' },
      { step: 'X-rays', detail: 'Continuous vs characteristic spectra, the cutoff wavelength λ_min = hc/eV, and Moseley\'s law. Small but reliable.' },
      { step: 'Heisenberg uncertainty', detail: 'ΔxΔp ≥ ℏ/2 — usually a one-line conceptual or estimate question; do it last.' },
    ],
    highYield: [
      {
        topic: 'Photoelectric effect — equation and stopping potential',
        detail:
          'KE_max = hf − φ = h(f − f₀); the stopping potential V₀ satisfies eV₀ = KE_max, so a V₀-vs-f graph is a straight line of slope h/e. Questions ask for work function, threshold wavelength, or how V₀/current change with intensity and frequency — intensity raises current, frequency raises KE_max.',
      },
      {
        topic: 'Bohr model energy levels and transitions',
        detail:
          'E_n = −13.6 Z²/n² eV. The energy of a transition is the difference of two levels; the emitted wavelength comes from 1/λ = RZ²(1/n₁² − 1/n₂²). Know the series (Lyman → UV, n→1; Balmer → visible, n→2; Paschen → IR, n→3) and that ionisation energy of H is 13.6 eV.',
      },
      {
        topic: 'de Broglie wavelength',
        detail:
          'λ = h/p = h/√(2mKE). For an electron accelerated through V volts, λ = 12.27/√V Å. Direct substitution questions, often paired with the Davisson–Germer experiment as the experimental proof of matter waves.',
      },
      {
        topic: 'X-ray cutoff wavelength and Moseley\'s law',
        detail:
          'The minimum wavelength of continuous X-rays depends only on the tube voltage: λ_min = hc/eV. Characteristic lines follow Moseley\'s law √f ∝ (Z − b). A compact, recurring source of one mark.',
      },
    ],
    traps: [
      'Forgetting the work function in photoelectric problems — the kinetic energy is hf MINUS φ, not hf. Energy below the threshold frequency ejects no electrons however intense the light.',
      'Mixing up which quantity increases with intensity vs frequency. Higher intensity increases photocurrent (more photons); higher frequency increases the maximum kinetic energy (and stopping potential), not the current.',
      'Identifying the wrong series for a hydrogen transition. Transitions ending at n = 1 are Lyman (UV), at n = 2 Balmer (visible), at n = 3 Paschen (IR). Reading the final level wrong flips the answer.',
      'Dropping the Z² factor when the question is about a hydrogen-like ion (He⁺, Li²⁺). Energy scales as Z² and radius as 1/Z relative to hydrogen.',
    ],
    faqs: [
      {
        q: 'Is Modern Physics the most scoring chapter for JEE?',
        a: 'For most students, yes. As a block (dual nature + atoms + nuclei, plus semiconductors separately) it contributes about 4–5 questions to a JEE Main paper, and the questions are largely formula-direct — photoelectric, Bohr transitions, de Broglie, X-ray cutoff. A focused student can reliably score 12–18 marks here.',
      },
      {
        q: 'How many questions come from Modern Physics in JEE Main?',
        a: 'This chapter (photoelectric, Bohr model, X-rays, de Broglie) gives about 2–3 questions; the full modern-physics block, including nuclei and semiconductors, is usually 4–5 questions — among the highest in the Physics section.',
      },
      {
        q: 'What should I study first in Modern Physics for JEE?',
        a: 'Start with the photoelectric effect (KE_max = hf − φ and stopping potential), then the Bohr model and hydrogen spectrum (E_n = −13.6 Z²/n² and the transition series), then de Broglie wavelength and X-rays. That order matches both how the topics build on each other and how often they are asked.',
      },
      {
        q: 'Is the Communication Systems chapter still in the JEE syllabus?',
        a: 'No. Communication Systems was removed from the JEE Main syllabus in the 2024 reduction and that syllabus has been carried forward, so you should not spend time on it. Modern Physics proper — dual nature, atoms, nuclei and semiconductors — remains fully in the syllabus.',
      },
    ],
  },

  'jee-maths-probability': {
    overview:
      'Probability is a guaranteed appearance in JEE Maths, but the syllabus changed in a way most online weightage pages have not caught up with. In JEE Main you can expect about 1–2 questions; with Statistics the combined area is roughly 6–10% of the paper. The questions now centre on classical and conditional probability, independence, total probability and Bayes\' theorem, plus counting via permutations and combinations. JEE Advanced weights probability more heavily and almost always tests conditional probability and Bayes in a multi-event setting. The single most useful thing to know before you study this chapter is which topics were removed.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~6–10% with Statistics', questions: '1–2 per paper', nature: 'Classical, conditional, independence, total probability, Bayes; P&C-based counting' },
      { exam: 'JEE Advanced', weightage: 'High — among the most weighted Maths areas', questions: '~1–2', nature: 'Conditional probability and Bayes in layered multi-event problems' },
    ],
    correction:
      'Bernoulli trials and the Binomial distribution (and therefore "mean = np, variance = npq") were REMOVED from the JEE Main Mathematics syllabus in the 2024 reduction, and that syllabus carries forward to 2025–2026. Many weightage articles — and a lot of old question banks — still list them. Do not waste time on binomial-distribution problems for Main; focus on conditional probability and Bayes\' theorem instead.',
    studyOrder: [
      { step: 'Counting (permutations & combinations) first', detail: 'Almost every classical-probability question reduces to counting favourable and total outcomes. Weak P&C is the real reason students lose probability marks, so fix it before anything else.' },
      { step: 'Classical probability and the addition rule', detail: 'P(A∪B) = P(A) + P(B) − P(A∩B); the complement trick P(at least one) = 1 − P(none). These close most direct questions.' },
      { step: 'Independence vs mutual exclusivity', detail: 'Independent: P(A∩B) = P(A)P(B). Mutually exclusive: P(A∩B) = 0. Mixing these up is the most common conceptual error in the chapter.' },
      { step: 'Conditional probability and total probability', detail: 'P(A|B) = P(A∩B)/P(B), then the law of total probability over a partition. This is the gateway to Bayes.' },
      { step: 'Bayes\' theorem', detail: 'The highest-value topic in both Main and Advanced now. Practise the "which urn / which machine / which test result" style until the setup is automatic.' },
    ],
    highYield: [
      {
        topic: 'Bayes\' theorem and total probability',
        detail:
          'The most-tested probability idea in current JEE. Given prior probabilities of several causes and the conditional probability of an effect under each, find the posterior P(cause | effect). Drawing a tree of the partition before plugging into the formula prevents almost every mistake.',
      },
      {
        topic: 'Conditional probability and independence',
        detail:
          'P(A|B) = P(A∩B)/P(B). Test independence with P(A∩B) = P(A)P(B); never assume it. Questions frequently disguise independence inside a multi-stage experiment (e.g. drawing with/without replacement).',
      },
      {
        topic: 'Classical probability with P&C counting',
        detail:
          'Most "find the probability that…" questions are really counting problems: favourable outcomes ÷ total outcomes, both computed with permutations/combinations. Arrangement, selection, and at-least-one (via complement) are the recurring patterns.',
      },
      {
        topic: 'Addition theorem and the complement trick',
        detail:
          'P(A∪B) = P(A) + P(B) − P(A∩B) extends to three events with inclusion–exclusion. For "at least one" situations, 1 − P(none) is almost always faster than summing cases.',
      },
    ],
    traps: [
      'Confusing independent events with mutually exclusive events. Mutually exclusive means they cannot both happen (P(A∩B) = 0); independent means one does not affect the other (P(A∩B) = P(A)P(B)). Two events with non-zero probability cannot be both.',
      'Spending time on Bernoulli trials / binomial distribution for JEE Main — these were deleted from the syllabus in 2024 and are no longer asked in Main.',
      'Setting up Bayes\' theorem without a clear partition. List the mutually exclusive, exhaustive causes first, attach their prior probabilities, then the conditionals — a tree diagram makes the denominator (total probability) fall out correctly.',
      'Forgetting the complement on "at least one" questions and trying to sum every case instead of using 1 − P(none).',
    ],
    faqs: [
      {
        q: 'How many questions come from Probability in JEE Main?',
        a: 'About 1–2 questions per paper; combined with Statistics the area is roughly 6–10% of JEE Maths. The questions focus on classical and conditional probability, independence, total probability and Bayes\' theorem, with counting done via permutations and combinations.',
      },
      {
        q: 'Is the Binomial distribution still in the JEE Main syllabus?',
        a: 'No. Bernoulli trials and the Binomial distribution were removed from the JEE Main Mathematics syllabus in the 2024 reduction, and that syllabus continues for 2025–2026. So "mean = np, variance = npq" type questions are no longer asked in Main — many websites still list them, but they are out of date. Put that time into conditional probability and Bayes.',
      },
      {
        q: 'Which probability topics are most important for JEE now?',
        a: 'Bayes\' theorem and conditional probability are the highest-value topics in both Main and Advanced, followed by independence and classical probability built on solid permutations-and-combinations counting. JEE Advanced in particular almost always tests Bayes in a multi-event setting.',
      },
      {
        q: 'Why do I keep getting probability questions wrong?',
        a: 'Two reasons dominate: weak counting (most classical questions are really P&C problems in disguise) and confusing independent with mutually exclusive events. Fix the counting, learn to test independence with P(A∩B) = P(A)P(B), and draw a partition tree before using Bayes — these three habits remove most errors.',
      },
    ],
  },

  'jee-chemistry-electrochemistry': {
    overview:
      'Electrochemistry is one of the most predictable scorers in Physical Chemistry because the same four question types recur: the Nernst equation, cell EMF (E°cell), electrolysis with Faraday\'s laws, and conductance/Kohlrausch. In JEE Main it is reliably about one question per shift, and they are formula-direct — plug into the equation and read off the answer. In JEE Advanced it appears once or twice and is usually fused with thermodynamics (ΔG° = −nFE°) and equilibrium (E° = (0.0591/n)logK), so a single Advanced question can hop between EMF, ΔG° and the equilibrium constant. Because the chapter is rule- and formula-based rather than reaction-memorisation, it gives a high marks-per-hour return.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~3–4% of Chemistry', questions: '~1 per shift', nature: 'Formula-direct: Nernst, E°cell, electrolysis (w = ZIt), molar conductivity & Kohlrausch' },
      { exam: 'JEE Advanced', weightage: '~2–3% of Chemistry', questions: '1–2 per year', nature: 'Fused with thermodynamics & equilibrium: concentration cells, ΔG°↔E°↔K, multi-step' },
    ],
    correction:
      'Many weightage tables fold this into a single "Physical Chemistry" band or pair it with redox; on its own the chapter is about one question per JEE Main shift. One genuine accuracy point the SERP rarely states: at 298 K the Nernst factor is 0.0591/n only when you use log base 10. If you write the equation with ln, the factor is 0.0257/n — mixing the two is the single most common numerical error in this chapter.',
    studyOrder: [
      { step: 'Redox & electrode potential basics', detail: 'Sign convention, the standard hydrogen electrode (SHE) as the zero reference, and reading the electrochemical series. Getting anode/cathode and the sign of E° right is the gate to everything else.' },
      { step: 'Galvanic cell & E°cell', detail: 'Cell notation, E°cell = E°cathode − E°anode, and spontaneity (E°cell > 0 ⇒ ΔG° < 0). Direct Main marks.' },
      { step: 'Nernst equation', detail: 'E = E° − (0.0591/n)logQ at 298 K, and its two bridges: E° = (0.0591/n)logK and ΔG° = −nFE°. This trio is the most-asked Main numerical and the core of Advanced.' },
      { step: 'Electrolysis & Faraday\'s laws', detail: 'Moles of electrons = It/F (F = 96500 C), mass deposited = (equivalent weight × It)/96500, and predicting products at each electrode. Pure numerical marks.' },
      { step: 'Conductance & Kohlrausch', detail: 'Specific vs molar conductivity (Λm = κ×1000/M), Λ°m from Kohlrausch\'s law (essential for weak electrolytes), and degree of dissociation α = Λm/Λ°m. Least-asked but recurs.' },
    ],
    highYield: [
      {
        topic: 'Nernst equation at 298 K',
        detail:
          'E = E° − (0.0591/n)logQ. Memorise 0.0591/n for n = 1, 2, 3 (≈ 0.0591, 0.0296, 0.0197). For a concentration cell E° = 0, so E = (0.0591/n)log([conc]_high/[conc]_low) — a frequent one-line question.',
      },
      {
        topic: 'The ΔG°–E°cell–K bridge',
        detail:
          'ΔG° = −nFE° and E° = (0.0591/n)logK link the three quantities. A worked check: E°cell = +0.295 V with n = 2 gives logK = (2 × 0.295)/0.0591 = 10, so K = 10¹⁰. Advanced loves to give one of these three and ask for another.',
      },
      {
        topic: 'Faraday\'s laws of electrolysis',
        detail:
          'Charge Q = It; moles of electrons = Q/96500. Mass deposited = (M/n) × (It/96500), where n is electrons per ion (Cu²⁺ → 2, Al³⁺ → 3). "How long to deposit x grams" and "compare masses across cells in series (same Q)" are the standard asks.',
      },
      {
        topic: 'Conductivity & Kohlrausch\'s law',
        detail:
          'Molar conductivity Λm = κ × 1000/molarity. For weak electrolytes Λ°m cannot be measured directly — get it by Kohlrausch\'s law (sum of limiting ionic conductivities), then α = Λm/Λ°m gives the degree of dissociation.',
      },
    ],
    traps: [
      'Mixing the log and ln forms of the Nernst equation. At 298 K the 0.0591/n factor already absorbs 2.303RT/F and goes with log₁₀; with ln the factor is 0.0257/n. Using 0.0591 with ln (or vice versa) is the commonest slip.',
      'Using the wrong n. n is the number of electrons transferred in the balanced cell reaction, not the number of ions or species. Cu → Cu²⁺ is n = 2.',
      'Anode/cathode sign confusion. In a galvanic cell the anode is negative; in an electrolytic cell the anode is positive — but oxidation is at the anode in both. Decide oxidation/reduction first, label the sign after.',
      'Reading electrode potentials backwards. A more positive standard reduction potential means a stronger oxidising agent (greater tendency to be reduced), i.e. a weaker tendency to be oxidised.',
    ],
    faqs: [
      {
        q: 'How many questions come from Electrochemistry in JEE Main and Advanced?',
        a: 'About one question per shift in JEE Main (~3–4% of Chemistry) — across the January and April 2025 sessions there were roughly 9–14 Electrochemistry questions in each session counting all shifts. JEE Advanced asks 1–2, usually fused with thermodynamics or equilibrium.',
      },
      {
        q: 'Is Electrochemistry a scoring chapter for JEE?',
        a: 'Yes — the question types repeat (Nernst, E°cell, electrolysis, conductivity) and most are formula-direct numericals. If you lock down the Nernst/ΔG°/K trio and Faraday\'s laws, you bank roughly one question per shift with little risk.',
      },
      {
        q: 'What is the most common mistake in Electrochemistry numericals?',
        a: 'Mixing the log and ln forms of the Nernst equation and using the wrong n. At 298 K use E = E° − (0.0591/n)logQ with log base 10, and let n be the electrons transferred in the balanced cell reaction.',
      },
      {
        q: 'How is Electrochemistry linked to Thermodynamics in JEE?',
        a: 'Through ΔG° = −nFE° and E° = (0.0591/n)logK. JEE Advanced frequently gives an E° and asks for the equilibrium constant K or ΔG° (or the reverse), so practise moving freely between EMF, free energy and K.',
      },
    ],
  },

  'jee-chemistry-chemical-kinetics': {
    overview:
      'Chemical Kinetics is a small chapter with an outsized hit-rate: the first-order integrated rate law, half-life, the Arrhenius equation and order-vs-molecularity recur almost every JEE Main shift. In Main it is reliably about one formula-direct question per shift. In JEE Advanced it usually contributes one question, more often graph-based (identify the order from a plot) or mechanism-based (rate-determining step, pseudo-first-order). The chapter rewards a small, well-drilled formula set far more than it rewards heavy theory.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~3–4% of Chemistry', questions: '~1 per shift', nature: 'Direct: first-order integrated rate law, half-life, Arrhenius two-temperature form, units of k' },
      { exam: 'JEE Advanced', weightage: '~2–3% of Chemistry', questions: '0–2 (typically 1)', nature: 'Graph-to-order, reaction mechanism / rate-determining step, pseudo-first-order' },
    ],
    correction:
      'Older guides treat collision theory and full mechanism derivations as heavy topics. For JEE Main the bankable questions are the first-order integrated rate law, half-life and the Arrhenius two-temperature form — not collision-theory derivations. Don\'t over-invest in mechanism theory unless you are specifically targeting JEE Advanced.',
    studyOrder: [
      { step: 'Rate, rate law, order vs molecularity', detail: 'Order is experimental (the power of concentration in the rate law); molecularity is mechanistic (species in an elementary step). The units of k change with order — a recurring direct question.' },
      { step: 'Integrated rate laws (zero & first order)', detail: 'k = (2.303/t)log([A]₀/[A]) for first order; [A] = [A]₀ − kt for zero order. The first-order form is the single most-asked numerical.' },
      { step: 'Half-life', detail: 't½ = 0.693/k (first order, independent of concentration); t½ = [A]₀/2k (zero order). The concentration-independence of first-order half-life is a favourite conceptual test.' },
      { step: 'Arrhenius equation', detail: 'k = Ae^(−Ea/RT); the two-temperature log form gives Ea from two rate constants, and a plot of ln k vs 1/T has slope −Ea/R.' },
      { step: 'Pseudo-first-order & mechanisms', detail: 'Last — relevant mainly to JEE Advanced (acid hydrolysis of esters, inversion of sucrose; rate-determining step in a multi-step mechanism).' },
    ],
    highYield: [
      {
        topic: 'First-order integrated rate law & half-life',
        detail:
          'k = (2.303/t)log([A]₀/[A]); t½ = 0.693/k, independent of starting concentration. Radioactive-decay questions are first-order kinetics in disguise, so the same formulas apply.',
      },
      {
        topic: 'Arrhenius two-temperature form',
        detail:
          'log(k₂/k₁) = (Ea/2.303R)(1/T₁ − 1/T₂). Used to find Ea from two rate constants, or to find how much the rate changes for a given temperature rise (the classic "rate doubles per 10 K" question).',
      },
      {
        topic: 'Units of the rate constant',
        detail:
          'Zero order: mol L⁻¹ s⁻¹; first order: s⁻¹; second order: L mol⁻¹ s⁻¹. "Given the units of k, state the order" is a free mark — and a rate constant in s⁻¹ instantly tells you the reaction is first order.',
      },
      {
        topic: 'Graphical identification of order',
        detail:
          'First order: ln[A] vs t is a straight line (slope −k). Zero order: [A] vs t is linear. Matching a given plot to its order (and reading k from the slope) is a recurring Main and Advanced ask.',
      },
    ],
    traps: [
      'Assuming half-life always depends on concentration. First order: t½ is constant; zero order: t½ ∝ [A]₀; second order: t½ ∝ 1/[A]₀. Applying the first-order rule to a zero-order reaction is the classic error.',
      'Confusing order and molecularity. Order is experimental and can be zero or fractional; molecularity comes from an elementary step, is a whole number, and cannot exceed three. An overall reaction has order but no single molecularity.',
      'Switching inconsistently between ln and 2.303 log in the integrated and Arrhenius forms. Pick one convention and keep the 2.303 factor wherever you use log₁₀.',
      'Forgetting that k\'s units encode the order — so you can verify your assumed order against the units given in the problem.',
    ],
    faqs: [
      {
        q: 'How many questions come from Chemical Kinetics in JEE?',
        a: 'Roughly one per shift in JEE Main (~3–4% of Chemistry; the January and April 2025 sessions each carried about 12–13 across all shifts). JEE Advanced usually asks one, more often graph- or mechanism-based.',
      },
      {
        q: 'Is Chemical Kinetics a scoring chapter?',
        a: 'Yes — one of the most reliable single-question scorers. The first-order integrated rate law, half-life and the Arrhenius equation repeat almost every year and are pure formula application, so the marks-per-hour return is high.',
      },
      {
        q: 'What is the difference between order and molecularity in JEE?',
        a: 'Order is the experimentally determined sum of the powers of concentration in the rate law (can be 0, fractional, etc.). Molecularity is the number of species colliding in a single elementary step (a whole number ≤ 3). An overall multi-step reaction has an order but no single molecularity.',
      },
      {
        q: 'Does first-order half-life depend on concentration?',
        a: 'No. For a first-order reaction t½ = 0.693/k is independent of the starting concentration — that is why radioactive decay (always first order) has a fixed half-life. Zero- and second-order half-lives do depend on the initial concentration.',
      },
    ],
  },

  'jee-maths-complex-numbers': {
    overview:
      'Complex Numbers is a JEE Advanced favourite because it merges algebra with geometry — and that is precisely the angle weightage tables miss by lumping it with Quadratic Equations. In JEE Main it is about 1–2 questions, mostly direct: modulus-argument, conjugate properties, cube roots of unity and simple loci. In JEE Advanced it is 2–3 questions, and there it stops being algebra and becomes a geometry tool — rotation, loci that turn into conics in the Argand plane, and roots of unity inside summations. The practical lesson: don\'t under-prepare it for Advanced based on the modest Main count.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~3–4% alone (the "Complex Numbers & Quadratic Equations" unit is ~7–9% combined)', questions: '1–2 per year', nature: 'Direct: modulus-argument, conjugate properties, cube roots of unity, basic locus' },
      { exam: 'JEE Advanced', weightage: 'High for a single chapter — among the most reliable 2–3 question topics', questions: '2–3 per year', nature: 'Geometric: rotation, loci as conics, nth roots of unity, fused with coordinate geometry' },
    ],
    correction:
      'Most "weightage" tables report a combined "Complex Numbers & Quadratic Equations" figure (~7–9% / ~3 questions in JEE Main). Complex Numbers on its own is about 1–2 Main questions — but it punches well above that in JEE Advanced, where it is one of the most dependable 2–3 question chapters. Reading only the Main number leads students to under-prepare it for Advanced.',
    studyOrder: [
      { step: 'Algebra & conjugate', detail: 'Powers of i, addition/multiplication, and the conjugate/modulus properties — especially |z|² = z·z̄. This arithmetic must be automatic before anything geometric.' },
      { step: 'Modulus-argument (polar) form', detail: 'z = r(cosθ + i sinθ) = re^{iθ}, with the principal argument in (−π, π]. The argument of a negative real number is π (not 0) — a perennial trap to settle here.' },
      { step: 'De Moivre\'s theorem & roots of unity', detail: '(cosθ + i sinθ)ⁿ = cos nθ + i sin nθ; for cube roots of unity 1 + ω + ω² = 0 and ω³ = 1. The n nth-roots lie equally spaced on the unit circle — learn the geometric picture, not just the algebra.' },
      { step: 'Rotation & geometry', detail: 'Multiplying by e^{iα} rotates a point; (z₂ − z₀)/(z₁ − z₀) encodes both the angle and the ratio of lengths. This is the single most powerful Advanced tool.' },
      { step: 'Loci in the Argand plane', detail: '|z − z₁| = |z − z₂| is a perpendicular bisector, |z − z₁| + |z − z₂| = k is an ellipse, and arg conditions give rays/arcs. This is where complex numbers meet coordinate geometry.' },
    ],
    highYield: [
      {
        topic: 'Cube roots of unity (ω)',
        detail:
          'ω³ = 1, 1 + ω + ω² = 0, and ω̄ = ω². These three facts simplify a large class of expressions and summations and are the most common single appearance in JEE Main.',
      },
      {
        topic: 'The rotation formula',
        detail:
          'To rotate z₁ about z₀ by angle θ (anticlockwise), z₂ − z₀ = (z₁ − z₀)e^{iθ}. It converts geometry problems — proving points form an equilateral triangle or a square — into a single algebraic equation. Pure Advanced gold.',
      },
      {
        topic: 'Modulus-argument & De Moivre',
        detail:
          'Computing (1 + i)ⁿ, finding the nth roots of a complex number, and using the triangle inequality |z₁ + z₂| ≤ |z₁| + |z₂| (with equality conditions) to find the maximum/minimum of a modulus.',
      },
      {
        topic: 'Loci as conics',
        detail:
          'Translating |z − a| = |z − b| (perpendicular bisector), |z − a|/|z − b| = k (Apollonius circle), and arg((z − a)/(z − b)) = constant (an arc) into Cartesian curves — the bridge between this chapter and coordinate geometry that Advanced exploits.',
      },
    ],
    traps: [
      'Taking the argument of a negative real number as 0. arg(−5) = π (principal value in (−π, π]). Getting the quadrant of the argument wrong is the number-one error in the chapter.',
      'Writing |z|² = z² instead of |z|² = z·z̄. For z = a + ib, |z|² = a² + b² while z² = a² − b² + 2abi — completely different.',
      'Misapplying the rotation formula: anticlockwise is positive, and you must subtract the centre of rotation z₀ from both points before multiplying by e^{iθ}.',
      'Assuming the nth roots of unity "spread out from 0". They sit equally spaced on the unit circle starting at 1, separated by 2π/n — and their sum is 0.',
    ],
    faqs: [
      {
        q: 'How many questions come from Complex Numbers in JEE Main and Advanced?',
        a: 'Most weightage tables combine "Complex Numbers & Quadratic Equations" (~7–9%, about 3 questions in JEE Main). Complex Numbers alone is roughly 1–2 in Main, but 2–3 in JEE Advanced, where it is used as a geometry tool — so it matters more for Advanced than the Main count suggests.',
      },
      {
        q: 'Is Complex Numbers important for JEE Advanced?',
        a: 'Yes — it is one of the most reliable 2–3 question chapters. Advanced rarely tests plain algebra; it tests complex numbers as geometry (rotation, loci as conics, roots of unity in summations). Skipping it surrenders guaranteed Advanced marks.',
      },
      {
        q: 'What is the rotation formula and why does it matter?',
        a: 'To rotate z₁ about a point z₀ by angle θ anticlockwise, z₂ − z₀ = (z₁ − z₀)e^{iθ}. It turns "prove these points form an equilateral triangle / square" problems into a single equation — the highest-leverage tool in the chapter for JEE Advanced.',
      },
      {
        q: 'What is the most common mistake in Complex Numbers?',
        a: 'Getting the argument\'s quadrant wrong — especially taking the argument of a negative real number as 0 instead of π. Always plot z in the correct quadrant of the Argand plane and keep the principal argument in (−π, π].',
      },
    ],
  },

  'jee-physics-electromagnetic-induction': {
    overview:
      'Electromagnetic Induction (EMI) is the conceptually hardest of the electricity chapters and one of JEE Advanced\'s favourites for creative problems. In JEE Main it is about 1–2 questions, mostly motional EMF, flux-change and LR-circuit time-constant numericals. In JEE Advanced it is 1–2, where EMI fuses with mechanics (a rod sliding on rails until magnetic braking gives terminal velocity), with circuits, and with alternating current. The physics is short but demands tracking flux change, induced-current direction and the resulting force at the same time — which is why it feels hard.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~3–4% alone (EMI + Alternating Current together is the ~12–15% figure often quoted)', questions: '1–2 per year', nature: 'Direct: Faraday/Lenz flux change, motional EMF (Blv), self-inductance, LR time constant' },
      { exam: 'JEE Advanced', weightage: '~5–7% within the wider electromagnetism block', questions: '1–2 per year', nature: 'Creative: rod-on-rails with terminal velocity, mutual inductance, EMI + AC, energy methods' },
    ],
    correction:
      'The "12–15% / 3–4 questions" figure you see online is Electromagnetic Induction AND Alternating Current counted together. EMI on its own is closer to ~3–4% (1–2 JEE Main questions). It is still high-value, because the same ideas feed directly into AC and because JEE Advanced reuses them inside multi-step problems.',
    studyOrder: [
      { step: 'Magnetic flux & Faraday\'s law', detail: 'Φ = B·A·cosθ and emf = −dΦ/dt. The first move in every problem is to identify which of B, A or θ is changing.' },
      { step: 'Lenz\'s law (direction)', detail: 'Induced effects oppose the CHANGE in flux. Build direction discipline here before attempting numericals.' },
      { step: 'Motional EMF', detail: 'emf = Blv for a rod cutting field lines, plus the force/power/heat bookkeeping: retarding force F = BIL, dissipated power P = Fv = I²R.' },
      { step: 'Self & mutual inductance', detail: 'L = NΦ/I, energy stored U = ½LI², and mutual inductance M for coupled coils. The emf is −L dI/dt (self) or −M dI/dt (mutual).' },
      { step: 'LR circuits → bridge to AC', detail: 'Growth/decay I = I₀(1 − e^(−t/τ)) with τ = L/R, then connect to inductive reactance X_L = ωL as the entry point to Alternating Current.' },
    ],
    highYield: [
      {
        topic: 'The rod-on-rails problem',
        detail:
          'A rod of length l moving at speed v gives emf = Blv, current I = Blv/R and a retarding force F = B²l²v/R. Setting net force to zero gives terminal velocity — e.g. on a vertical/inclined rail, v_term = mgR/(B²l²) (use the component along the rail). This one setup spans Main and Advanced.',
      },
      {
        topic: 'Faraday + Lenz, and the rotating coil',
        detail:
          'emf magnitude = |dΦ/dt|, direction from Lenz. A coil of N turns rotating at ω gives emf = NBAω sin(ωt), peak value NBAω — the natural bridge from EMI into Alternating Current.',
      },
      {
        topic: 'LR-circuit transients',
        detail:
          'τ = L/R; the current reaches about 63% of its final value in one time constant, and the energy stored is ½LI². "Time to reach x% of the steady current" is a standard Main numerical.',
      },
      {
        topic: 'Self & mutual inductance',
        detail:
          'A solenoid has L = μ₀n²(Al); induced emf = −L dI/dt; coupled coils have M = k√(L₁L₂) with coupling coefficient k ≤ 1. These drive transformer-adjacent and coupled-coil questions.',
      },
    ],
    traps: [
      'Getting the induced-current direction wrong. Lenz\'s law opposes the CHANGE in flux, not the flux itself: increasing flux ⇒ induced field opposes it; decreasing flux ⇒ induced field supports it.',
      'Using emf = Blv when v is not perpendicular to both the rod and B. Only the component of velocity that actually cuts field lines counts.',
      'Confusing self- and mutual-inductance emfs: −L dI/dt is the back-emf in the same coil, −M dI/dt is the emf induced in the other coil.',
      'Using the wrong time constant. For an LR circuit τ = L/R (not RC). During growth the current lags: the inductor behaves like an open circuit at t = 0 (I = 0) and like a plain wire as t → ∞.',
    ],
    faqs: [
      {
        q: 'How many questions come from Electromagnetic Induction in JEE Main and Advanced?',
        a: 'EMI alone is about 1–2 in JEE Main (~3–4% of Physics). The "12–15% / 3–4 question" figure quoted online is Electromagnetic Induction AND Alternating Current combined. In JEE Advanced expect 1–2 EMI questions, usually fused with mechanics or circuits.',
      },
      {
        q: 'Why is Electromagnetic Induction considered hard?',
        a: 'Because it combines a sign rule (Lenz\'s law), calculus (emf = −dΦ/dt) and often mechanics (a rod accelerating until magnetic braking produces terminal velocity). The physics is short, but you must track the flux change, the induced-current direction and the resulting force all at once.',
      },
      {
        q: 'What is the most important EMI problem type for JEE?',
        a: 'The conducting rod sliding on rails in a magnetic field. From emf = Blv you get current Blv/R, a retarding force B²l²v/R, and a terminal velocity when the net force is zero — one setup that appears, with variations, in both Main and Advanced.',
      },
      {
        q: 'How do I get the direction of the induced current right every time?',
        a: 'Apply Lenz\'s law in order: first decide whether the flux through the loop is increasing or decreasing, then the induced current flows so its own magnetic field opposes that change, and finally fix the actual direction with the right-hand rule.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NEET chapter pages — high-weight, "Crawled – currently not indexed"
  // (seo-reports/index-state-2026-06-10.csv). NEET has ONE paper, so the table
  // below carries the sub-topic / year reality instead of a Main-vs-Advanced
  // split. SERP leaders (collegedunia, pw.live, medicneet, testbook) quote one
  // weightage % and a topic list but never give the sub-topic question share,
  // the NCERT-vs-over-study honesty, comparison rules, or the traps. Researched
  // per chapter June 2026; cross-checked against the NEET 2024 NCERT-rationalised
  // syllabus. Seed slowly — not a 34-chapter template.
  // ─────────────────────────────────────────────────────────────────────────

  'neet-biology-human-health-diseases': {
    overview:
      'Human Health & Disease is a pure-NCERT, factual chapter that reliably gives 3–4 questions in NEET (about 4–5% of the 180-mark Biology section, ~16 marks). The part most weightage articles skip is WHERE inside the chapter the marks sit: Immunity is by far the highest-asked sub-block, followed by the disease–pathogen–vector table, and then one near-guaranteed direct question from AIDS, Cancer or Drugs & Alcohol Abuse. Because almost every question is lifted from NCERT lines, this is one of the best marks-per-hour chapters in Biology — the skill is recall accuracy, not problem-solving.',
    examSplit: [
      { exam: 'Immunity', weightage: 'Highest sub-share', questions: '~1–2 Q/yr', nature: 'Innate vs adaptive, antibody structure (H₂L₂), active vs passive, primary vs secondary response, vaccines' },
      { exam: 'Diseases & pathogens', weightage: 'Frequent', questions: '~1 Q/yr', nature: 'Pathogen → disease → vector matching; one-line symptoms straight from the NCERT table' },
      { exam: 'AIDS · Cancer · Drugs', weightage: '1 Q most years', questions: '~1 Q/yr', nature: 'HIV/CD4 & ELISA, proto-oncogene→oncogene & metastasis, source plants of heroin/cannabis/cocaine — direct recall' },
    ],
    correction:
      'Some sites quote "~10% weightage" for this chapter. That figure is for the whole "Biology in Human Welfare / Human Physiology overlap" grouping, not the chapter. On its own, Human Health & Disease is ~4–5% — a dependable 3–4 questions, no more. Prepare it for accuracy, not for volume.',
    studyOrder: [
      { step: 'Immunity first', detail: 'It is the highest-yield sub-topic AND the only conceptual part. Lock innate (non-specific, no memory) vs adaptive (specific, with memory), the antibody H₂L₂ structure and the five classes (IgG, IgA, IgM, IgE, IgD), and active vs passive immunity before anything else.' },
      { step: 'The disease–pathogen–vector table', detail: 'Make ONE table: disease → causative organism → vector/mode → one diagnostic symptom. NEET asks "match the following" and "which is caused by a protozoan" almost every year. This is rote, so build the table once and revise it.' },
      { step: 'AIDS', detail: 'HIV is a retrovirus that attacks helper T-lymphocytes (CD4⁺); diagnosed by ELISA; spreads through blood/sexual contact/mother-to-child, NOT casual contact. Short, high-return.' },
      { step: 'Cancer', detail: 'Proto-oncogene → oncogene, benign (no metastasis) vs malignant (metastasis), contact inhibition loss, carcinogens (physical/chemical/biological). A few NCERT lines, often one direct question.' },
      { step: 'Drugs & alcohol abuse last', detail: 'Pure recall: source plant and active principle for opioids (Papaver somniferum), cannabinoids (Cannabis sativa) and cocaine (Erythroxylum coca). Quick to revise on the last lap.' },
    ],
    highYield: [
      {
        topic: 'Immunity types & antibody structure',
        detail:
          'Antibody = 2 heavy + 2 light chains (H₂L₂). Innate immunity is non-specific (skin, phagocytes, interferons, inflammation) with NO memory; adaptive is specific and has memory. Active immunity = your body makes the antibodies (vaccine/infection, slow but lasting); passive = ready-made antibodies given to you (colostrum, anti-tetanus serum, fast but temporary). Primary vs secondary response (faster, stronger second time) is a NEET favourite.',
      },
      {
        topic: 'Disease–pathogen–vector recall',
        detail:
          'Malaria (Plasmodium, female Anopheles), Filariasis (Wuchereria, Culex), Typhoid (Salmonella typhi, Widal test), Pneumonia (Streptococcus pneumoniae / Haemophilus influenzae), Amoebiasis (Entamoeba histolytica, houseflies as carrier), Ascariasis (Ascaris), Ringworm (Microsporum/Trichophyton/Epidermophyton). Know the group (bacterial/viral/protozoan/helminth/fungal) for each.',
      },
      {
        topic: 'AIDS & cancer one-liners',
        detail:
          'HIV: retrovirus → reverse transcriptase → viral DNA into host → attacks helper T-cells (CD4⁺) → immunity collapses; ELISA for diagnosis. Cancer: malignant tumours show metastasis and loss of contact inhibition; oncogenic transformation comes from cellular proto-oncogenes. These exact facts recur as single-statement MCQs.',
      },
      {
        topic: 'Drugs of abuse — source & action',
        detail:
          'Opioids (heroin/smack = diacetylmorphine, from latex of Papaver somniferum) → depressant, bind CNS receptors. Cannabinoids (from inflorescences of Cannabis sativa: marijuana, hashish, ganja) → affect cardiovascular system. Cocaine (from Erythroxylum coca) → dopamine interference, potent stimulant. NEET asks the plant-to-drug match directly.',
      },
    ],
    traps: [
      'Active vs passive immunity reversed. Passive = ready-made antibodies handed to you (colostrum, anti-venom, anti-tetanus serum); active = your own body produces them after a vaccine or infection. The "fast-acting but no memory" option is always passive.',
      'B-cells vs T-cells: B-cells drive humoral (antibody-mediated) immunity; T-cells drive cell-mediated immunity. Mixing these is the single most common immunity error.',
      'Innate immunity has no memory. Only adaptive immunity remembers (which is why the secondary response is faster). Any option crediting innate immunity with "memory" is wrong.',
      'In malaria the infective stage entering humans from the mosquito is the sporozoite, and the recurring fever is caused by haemozoin released when infected RBCs rupture — not by the mosquito bite itself.',
    ],
    faqs: [
      {
        q: 'How many questions come from Human Health and Disease in NEET?',
        a: 'About 3–4 questions most years (roughly 4–5% of the Biology section, ~16 marks). Immunity contributes the largest share, followed by the disease–pathogen table and one direct question from AIDS, cancer or drug abuse. It is almost entirely NCERT-based, so it is a high-accuracy scoring chapter.',
      },
      {
        q: 'Which topic in Human Health and Disease is most important for NEET?',
        a: 'Immunity — it is both the highest-asked sub-topic and the only conceptual one. Master innate vs adaptive, antibody structure, active vs passive immunity, and the primary vs secondary response. After that, the disease–pathogen–vector table is the next most reliable source of marks.',
      },
      {
        q: 'Is NCERT enough for Human Health and Disease for NEET?',
        a: 'Yes. This chapter is one of the most NCERT-faithful in Biology — the disease table, immunity section and drug source-plants are lifted line-for-line. Read NCERT twice, build the disease and immunity comparison tables yourself, and practise PYQs; extra reference books add little here.',
      },
      {
        q: 'What is the difference between active and passive immunity for NEET?',
        a: 'Active immunity is produced by your own body in response to an antigen (a vaccine or an actual infection) — it develops slowly but lasts long and generates memory. Passive immunity is the transfer of ready-made antibodies from outside (mother\'s colostrum, anti-tetanus serum, anti-venom) — it acts immediately but is short-lived and has no memory.',
      },
    ],
  },

  'neet-chemistry-coordination-compounds': {
    overview:
      'Coordination Compounds is a high-yield but tightly bounded chapter for NEET: expect 1–2 questions almost every year (~3–4% of Chemistry), and they are direct, NCERT-level — IUPAC naming, isomer type, spin-only magnetic moment, and crystal field colour/magnetism. The reason it feels "hard" is that the question types are rule-based and stack on each other (oxidation state → hybridisation → spin → magnetism), so a small gap early breaks the whole chain. Get the chain right and it becomes one of the best marks-per-hour chapters in Inorganic Chemistry.',
    examSplit: [
      { exam: 'NEET', weightage: '~3–4% of Chemistry', questions: '1–2 per year', nature: 'Direct, NCERT-line: IUPAC name, isomer type, spin-only μ, CFT colour & magnetism, bonding in carbonyls' },
      { exam: 'Depth needed', weightage: '—', questions: '—', nature: 'NCERT-level only — NEET does NOT push CFSE numericals or heavy organometallics the way JEE Advanced does; do not over-study' },
    ],
    correction:
      'Some chapter-weightage charts list Coordination Compounds at ~9% for NEET. That over-counts — it is closer to 3–4% (1–2 questions). It is genuinely high-yield per hour, but plan your revision around 1–2 questions, and resist going down the JEE-Advanced CFSE rabbit hole.',
    studyOrder: [
      { step: 'Werner\'s theory & terminology', detail: 'Ligand, denticity, coordination number, and the oxidation state of the central metal. Getting the oxidation state right is the gate to magnetic moment and CFT, so nail it first (remember neutral ligands like NH₃, H₂O, CO contribute 0).' },
      { step: 'IUPAC nomenclature', detail: 'Ligands named alphabetically (ignoring di/tri prefixes), then the metal with its oxidation state in roman numerals; anionic complexes take the "-ate" suffix. Practise naming ~25 complexes — these are pure recall marks in NEET.' },
      { step: 'Isomerism', detail: 'Structural (linkage –NO₂/–ONO, ionisation, coordination, hydrate) and stereo (geometrical cis/trans, optical). NEET usually asks you to identify the TYPE rather than count, so focus on recognising each from a formula.' },
      { step: 'VBT → geometry', detail: 'Hybridisation predicts shape: d²sp³ (inner-orbital, low-spin) vs sp³d² (outer-orbital, high-spin) for octahedral, dsp² for square planar, sp³ for tetrahedral.' },
      { step: 'CFT — colour & magnetism last', detail: 'Octahedral d-splitting into t₂g/e_g, the spectrochemical series (weak I⁻…strong CN⁻, CO), and colour from d–d transitions. This ties hybridisation, spin and magnetic moment together.' },
    ],
    highYield: [
      {
        topic: 'Spin-only magnetic moment μ = √(n(n+2)) BM',
        detail:
          'The most-asked numeric in the chapter. First decide high- vs low-spin from the ligand on the spectrochemical series (CN⁻/CO strong → pairing → low spin; H₂O/F⁻/Cl⁻ weak → high spin), then count unpaired electrons. The ladder is worth memorising: n = 0,1,2,3,4,5 → μ ≈ 0, 1.73, 2.83, 3.87, 4.90, 5.92 BM.',
      },
      {
        topic: 'IUPAC nomenclature',
        detail:
          'Pure recall marks. Cation named before anion; within the complex, ligands in alphabetical order (multiplying prefixes di/tri don\'t affect alphabetising), then the metal with oxidation state in roman numerals; anionic complex ends in "-ate" (e.g. ferrate, cuprate). NEET asks both "name this" and "which formula matches this name".',
      },
      {
        topic: 'Isomerism — identify the type',
        detail:
          'Linkage (–SCN vs –NCS, –NO₂ vs –ONO), ionisation ([Co(NH₃)₅Br]SO₄ vs [Co(NH₃)₅SO₄]Br give different precipitate tests), geometrical (cis/trans in MA₄B₂, MA₂B₂), and optical (non-superimposable mirror images, common in tris-chelates). NEET typically wants you to name the isomerism shown, not count isomers.',
      },
      {
        topic: 'VBT/CFT geometry & magnetism chain',
        detail:
          '[Ni(CN)₄]²⁻ is dsp², square planar and diamagnetic; [NiCl₄]²⁻ is sp³, tetrahedral and paramagnetic — same Ni²⁺ (d⁸), opposite answers because of ligand strength. Recognising this ligand → geometry → spin → magnetism chain answers most "predict the magnetic behaviour" MCQs.',
      },
    ],
    traps: [
      'Counting unpaired electrons before checking the ligand. A strong-field ligand pairs electrons first: [Fe(CN)₆]³⁻ is low-spin (1 unpaired) while [FeF₆]³⁻ is high-spin (5 unpaired) — same Fe³⁺ (d⁵), opposite magnetic moment.',
      'Naming ligands by size or charge instead of alphabetically. IUPAC alphabetises ligand names and ignores the di/tri multiplying prefixes when ordering.',
      'Forgetting that neutral ligands (NH₃, H₂O, CO) add nothing to the metal\'s oxidation state — a common slip when computing the central-atom oxidation number.',
      'Applying octahedral splitting logic to tetrahedral complexes. Tetrahedral splitting is inverted (e below t₂) and only ~4/9 as large, so tetrahedral complexes are almost always high-spin.',
    ],
    faqs: [
      {
        q: 'How many questions come from Coordination Compounds in NEET?',
        a: 'Usually 1–2 questions per year (~3–4% of the Chemistry section). They are direct and NCERT-level — IUPAC naming, isomer type, spin-only magnetic moment, or a crystal-field colour/magnetism fact. It is high marks-per-hour because the question types repeat.',
      },
      {
        q: 'How do I calculate magnetic moment for NEET coordination compounds?',
        a: 'Use the spin-only formula μ = √(n(n+2)) Bohr Magnetons, where n is the number of unpaired electrons. First fix high- vs low-spin from the ligand (strong-field CN⁻/CO cause pairing → fewer unpaired; weak-field H₂O/F⁻ don\'t), count the unpaired electrons, then plug in. Memorise the ladder 0, 1.73, 2.83, 3.87, 4.90, 5.92 BM for n = 0–5.',
      },
      {
        q: 'Is crystal field theory important for NEET?',
        a: 'Yes, but only at NCERT level — you need octahedral vs tetrahedral splitting, the spectrochemical series, high- vs low-spin, and how these explain colour and magnetism. NEET does not ask the detailed CFSE numericals or organometallic depth that JEE Advanced does, so don\'t over-invest there.',
      },
      {
        q: 'Is Coordination Compounds hard to score in NEET?',
        a: 'It is rated conceptually hard, but it is reliably scoring because the same question types repeat. The trick is the chain: oxidation state → hybridisation/geometry → high- or low-spin → magnetic moment. Lock IUPAC naming, the μ = √(n(n+2)) calculation and the spectrochemical series, and you bank the chapter\'s 1–2 questions.',
      },
    ],
  },

  'neet-physics-current-electricity': {
    overview:
      'Current Electricity is one of the highest-weight and most reliably scoring chapters in NEET Physics: 3–4 questions in most years (~8–10% of the Physics section, ~12–16 marks). The questions are mostly formula-direct — Ohm\'s law, series/parallel combinations, Kirchhoff\'s rules, Wheatstone/meter bridge and potentiometer — so it rewards speed and clean circuit-reduction over heavy derivation. Together with Electrostatics, Magnetism and EMI it forms the "electricity & magnetism" block that decides a large slice of the Physics rank.',
    examSplit: [
      { exam: 'NEET (3-yr avg)', weightage: '~8–10% of Physics', questions: '3–4 per year (~12–16 marks)', nature: 'Mostly formula-direct circuit problems + 1–2 conceptual (drift velocity, instruments)' },
      { exam: 'Recent trend', weightage: '—', questions: '2023: ~5 · 2024: ~3 · 2025: ~3', nature: 'Stable high-weight scorer; rarely drops below 3 questions' },
    ],
    correction:
      'Potentiometer and meter bridge are still in the NEET syllabus and questions appear most years — don\'t skip them assuming they were cut. What did thin out across the wider electricity grouping is overlap with Electrostatics/EMI; treat Current Electricity as its own 3–4-question chapter, not as part of one blended "25% electricity" figure some charts quote.',
    studyOrder: [
      { step: 'Ohm\'s law, resistivity & drift velocity', detail: 'V = IR, R = ρl/A, and the microscopic picture I = neAv_d with v_d = eEτ/m. Build the link between the macroscopic and microscopic forms — NEET asks a conceptual drift-velocity question most years.' },
      { step: 'Combinations of resistors & cells', detail: 'Series/parallel reduction, and cells in series/parallel with emf and internal resistance: terminal voltage V = emf − Ir while discharging. Most numericals start by reducing the network cleanly.' },
      { step: 'Kirchhoff\'s laws', detail: 'KCL (junction rule, charge conservation) and KVL (loop rule, energy conservation). The skill is sign convention — fix a loop direction and stick to it for every element.' },
      { step: 'Wheatstone & meter bridge', detail: 'Balanced bridge condition P/Q = R/S with NO current through the galvanometer. The meter bridge is just a Wheatstone bridge used to find an unknown resistance from balancing lengths.' },
      { step: 'Potentiometer last', detail: 'Why it beats a voltmeter (draws no current at balance, so it reads true emf), and its uses: comparing emfs, finding internal resistance, measuring small potential differences.' },
    ],
    highYield: [
      {
        topic: 'Kirchhoff\'s laws + Wheatstone bridge',
        detail:
          'KCL: sum of currents into a junction = 0; KVL: sum of potential changes around a loop = 0. At Wheatstone balance, P/Q = R/S and the galvanometer carries no current — so you cannot include that arm\'s resistance in the balanced-state equation. This pair drives the most common numerical type.',
      },
      {
        topic: 'Cells: emf vs terminal voltage & internal resistance',
        detail:
          'Terminal voltage V = emf − Ir when a cell discharges (so V < emf), and V = emf + Ir while charging. Cells in series add emfs; in parallel the combined internal resistance drops. Maximum power is delivered to the external load when external R equals internal r.',
      },
      {
        topic: 'Drift velocity & microscopic Ohm\'s law',
        detail:
          'I = neAv_d, v_d = eEτ/m, resistivity ρ = m/(ne²τ). Drift velocity is tiny (~mm/s) even though the bulb lights instantly, because the electric field is established along the whole wire almost immediately — a recurring conceptual MCQ.',
      },
      {
        topic: 'Potentiometer vs meter bridge',
        detail:
          'Potentiometer: a uniform wire with constant potential gradient, draws zero current at balance, so it measures TRUE emf and compares two cells\' emfs or finds internal resistance. Meter bridge: a Wheatstone bridge on a 1 m wire to find an unknown resistance via the balancing-length ratio. Know which instrument does which.',
      },
    ],
    traps: [
      'Treating the potentiometer like a voltmeter. At balance it draws no current, so it reads the cell\'s true emf — a voltmeter draws current and reads the (lower) terminal voltage. This "why is a potentiometer more accurate" question appears repeatedly.',
      'Including the galvanometer arm in a balanced Wheatstone/meter bridge. At balance no current flows through it, so it plays no part in the P/Q = R/S relation.',
      'Confusing the charging and discharging cases: terminal voltage is less than emf when the cell supplies current (V = emf − Ir) but greater than emf when it is being charged (V = emf + Ir).',
      'Assuming a larger drift velocity means a faster-lighting bulb. The bulb lights almost instantly because the field propagates near light-speed along the wire; drift velocity itself is only of the order of millimetres per second.',
    ],
    faqs: [
      {
        q: 'How many questions come from Current Electricity in NEET?',
        a: 'Typically 3–4 questions per year (about 8–10% of the Physics section, ~12–16 marks). The recent trend is roughly 5 in 2023 and 3 each in 2024 and 2025 — it rarely drops below three, which makes it one of the highest-weight, most dependable chapters in NEET Physics.',
      },
      {
        q: 'Is Current Electricity easy to score in NEET?',
        a: 'Yes — most questions are formula-direct (Ohm\'s law, series/parallel, Kirchhoff, bridge and potentiometer), so with clean circuit-reduction practice it is fast, high-return marks. A couple of conceptual questions (drift velocity, why a potentiometer beats a voltmeter) reward understanding over plug-and-chug.',
      },
      {
        q: 'Which topics in Current Electricity are most important for NEET?',
        a: 'Kirchhoff\'s laws with the Wheatstone/meter bridge, cells with emf and internal resistance, the potentiometer, and the drift-velocity/microscopic-Ohm\'s-law concept. Together these cover almost every question the chapter has asked in recent NEET papers.',
      },
      {
        q: 'What is the difference between a potentiometer and a voltmeter in NEET?',
        a: 'A potentiometer draws no current from the cell at the balance point, so it measures the cell\'s true emf and can compare emfs or find internal resistance. A voltmeter has finite resistance and draws some current, so it reads the terminal voltage (which is less than the emf when the cell supplies current). That is why the potentiometer is treated as the more accurate instrument.',
      },
    ],
  },

  'jee-physics-ray-optics': {
    overview:
      'Ray Optics is one of the most formula-driven, dependable scorers in JEE Physics — but the weightage numbers quoted online are misleading because almost every article reports "Optics" as Ray Optics + Wave Optics combined across both the January and April sessions and all shifts (those "12–24 questions a year" figures). Taken alone, Ray Optics is reliably 2–3 questions per shift in JEE Main, and they are direct: mirror/lens formula, magnification, prism, total internal reflection, lens combinations. In JEE Advanced it carries ~6–7% but the questions fuse refraction at several surfaces, lens-and-mirror systems and instrument optics into one multi-step setup. The whole chapter rests on one disciplined habit — the Cartesian sign convention — so the marks come down to bookkeeping, not insight.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~5–7% of Physics', questions: '2–3 per shift', nature: 'Direct: mirror & lens formula, magnification, prism δ_min, TIR, lens combinations, power' },
      { exam: 'JEE Advanced', weightage: '~6–7% of Physics', questions: '1–2 per paper', nature: 'Multi-surface refraction, lens+mirror combination, silvered lens, optical-instrument depth' },
    ],
    correction:
      'Most "optics weightage" pages quote 12–24 questions per year. That is Ray Optics AND Wave Optics added together across both the January and April sessions and every shift — not one chapter in one paper. For a single shift, plan for about 2–3 Ray Optics questions, and count Wave Optics (YDSE, diffraction, polarisation) separately.',
    studyOrder: [
      { step: 'Sign convention first', detail: 'Lock the Cartesian convention before any numericals: all distances measured from the pole/optical centre, positive in the direction of incident light. Roughly half of all wrong optics answers are a dropped or flipped sign, not a concept error.' },
      { step: 'Plane and spherical mirrors', detail: '1/v + 1/u = 1/f with f = R/2, plus magnification m = −v/u. Read off image character (real/virtual, erect/inverted, magnified) from the sign of v and m.' },
      { step: 'Refraction, Snell\'s law → TIR', detail: 'n₁sinθ₁ = n₂sinθ₂, then critical angle sinC = 1/n and total internal reflection (optical fibre, mirage, apparent depth = real depth / n). High frequency in Main.' },
      { step: 'Spherical surface → lens maker → thin lens', detail: 'Build the lens results from the single-surface formula n₂/v − n₁/u = (n₂−n₁)/R; this is what Advanced tests when the lens sits in a medium other than air.' },
      { step: 'Prism, dispersion and combinations', detail: 'A + δ = i + e, δ_min when i = e (giving the refractive-index formula), then lens+lens and lens+mirror (silvered lens) systems where the image of one element is the object of the next.' },
      { step: 'Optical instruments last', detail: 'Microscope and telescope magnification — formulaic marks once the lens work is solid.' },
    ],
    highYield: [
      {
        topic: 'Mirror & lens formula with magnification',
        detail:
          'The single most-asked Main type. 1/v − 1/u = 1/f (lens) or 1/v + 1/u = 1/f (mirror) plus m = −v/u gives image position, size and nature in two lines — if the signs are right.',
      },
      {
        topic: 'Total internal reflection & apparent depth',
        detail:
          'sinC = 1/n drives optical-fibre and prism-of-TIR questions; apparent depth = real depth / n explains the "coin in water looks raised" and glass-slab shift problems.',
      },
      {
        topic: 'Lens combinations & the silvered lens',
        detail:
          'For lenses in contact P = P₁ + P₂ + …; for a silvered lens treat it as lens–mirror–lens, so P = 2P_lens + P_mirror because light passes the lens twice. A recurring Advanced separator.',
      },
      {
        topic: 'Prism: minimum deviation & dispersion',
        detail:
          'n = sin((A + δ_min)/2) / sin(A/2) at minimum deviation; dispersive power and the achromatic-combination condition appear in both papers.',
      },
    ],
    traps: [
      'Sign-convention slips — the #1 error. Mixing the mirror relation (1/v + 1/u) with the lens relation (1/v − 1/u), or forgetting that a real object\'s u is negative, flips the answer.',
      'Calling every convex lens "converging in all media". A lens converges only when it is denser than its surroundings; the same convex lens diverges light when placed in a denser medium — a classic Advanced trick.',
      'Using apparent/real depth with the wrong refractive index when light goes denser-to-rarer versus rarer-to-denser.',
      'Forgetting that for a silvered lens the light passes through the lens twice, so the lens power must be counted twice (P = 2P_lens + P_mirror).',
    ],
    faqs: [
      {
        q: 'How many questions come from Ray Optics in JEE Main and Advanced?',
        a: 'In JEE Main, plan for about 2–3 Ray Optics questions per shift (~5–7% of Physics), mostly direct formula problems. JEE Advanced carries roughly 1–2 (~6–7%), but they are multi-step — refraction at several surfaces, lens-and-mirror combinations, or optical-instrument depth in one question. The "12–24 questions a year" figures online add Ray Optics and Wave Optics together across both sessions and all shifts, so do not read them as one chapter.',
      },
      {
        q: 'Is Ray Optics a scoring chapter for JEE?',
        a: 'Yes — it is one of the most reliable scorers because the question types are standard (mirror, lens, prism, TIR, combinations) and almost every problem is a direct formula application. The catch is the Cartesian sign convention: master that first and the chapter becomes near-automatic marks.',
      },
      {
        q: 'What is the most important topic in Ray Optics for JEE?',
        a: 'The mirror and thin-lens formulas with magnification, total internal reflection, and lens combinations (including the silvered lens). These cover the large majority of Main questions and are the building blocks Advanced fuses together.',
      },
      {
        q: 'Is Ray Optics enough, or do I need Wave Optics too?',
        a: 'They are separate chapters and both are tested. Ray Optics (mirrors, lenses, prisms) is more formulaic and usually higher-frequency in Main; Wave Optics (YDSE, diffraction, polarisation) needs more conceptual work. Prepare both — together "Optics" is one of the larger blocks in the paper, which is exactly why the combined weightage figures look so big.',
      },
    ],
  },

  'jee-maths-application-of-derivatives': {
    overview:
      'Application of Derivatives (AOD) is the highest-yield single chapter in JEE differential calculus, and the most over-stated one online — several "weightage" pages quote 10–12 questions, which is the whole differential-calculus block (limits + continuity + differentiability + differentiation + AOD), not this chapter. Alone, AOD is about 2–3 questions in JEE Main and they are direct: maxima/minima, tangents/normals, monotonicity. In JEE Advanced the count is smaller (1–2) but far deeper — Rolle\'s theorem and the Lagrange MVT are used to PROVE inequalities and the existence of roots, and optimisation is dressed up in geometry. The whole chapter is built on one idea, the sign of the first derivative, so the strategy is to make derivative-sign reasoning automatic.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~6–8% of Maths', questions: '2–3 per year', nature: 'Direct: maxima/minima, tangent & normal, increasing/decreasing, rate of change' },
      { exam: 'JEE Advanced', weightage: '~3–4% of Maths', questions: '1–2 per year', nature: 'Proof-style: Rolle/LMVT for inequalities & root existence, geometric optimisation, curve sketching' },
    ],
    correction:
      'Some pages list "10–12 questions" for Application of Derivatives. That number is the entire differential-calculus block (limits, continuity, differentiability, differentiation and AOD combined). AOD on its own is closer to 2–3 questions in JEE Main — still high-yield, but do not over-budget time based on the inflated figure.',
    studyOrder: [
      { step: 'Derivative as slope and rate', detail: 'Tangent and normal (slope = dy/dx at the point; normal slope = −1/(dy/dx)) and related-rates problems. Fast, direct Main marks and the base for everything after.' },
      { step: 'Monotonicity (increasing/decreasing)', detail: 'f′(x) > 0 ⇒ increasing, < 0 ⇒ decreasing on an interval. Practise finding the exact intervals and feeding them into inequality and parameter problems — this is the workhorse skill of the chapter.' },
      { step: 'Maxima and minima', detail: 'Critical points from f′(x) = 0 (and where f′ does not exist), then the first- or second-derivative test. Then the step students skip: on a closed interval, ALSO check the endpoints for the global extremum.' },
      { step: 'Optimisation (word problems)', detail: 'Translate the quantity into one variable, differentiate, and verify. The recurring setups (max-volume box, shortest distance, least cost) repeat almost verbatim across years.' },
      { step: 'Rolle\'s theorem and LMVT', detail: 'Geometric meaning first (a horizontal tangent / a tangent parallel to the chord), then their use in Advanced to prove inequalities and show a root exists. Always check continuity on [a,b] and differentiability on (a,b) before applying.' },
    ],
    highYield: [
      {
        topic: 'Maxima/minima and global extrema on a closed interval',
        detail:
          'The single most-asked AOD type in Main. After the derivative test, compare critical-point values WITH the endpoint values to get the global max/min — the step that quietly decides the answer.',
      },
      {
        topic: 'Tangents, normals and the angle between curves',
        detail:
          'Slope from dy/dx, equation of tangent/normal, and the orthogonal-curves condition (product of slopes = −1). Direct and frequent.',
      },
      {
        topic: 'Monotonicity to prove inequalities',
        detail:
          'To show f(x) ≥ g(x), define h = f − g, show h′ ≥ 0 and h(a) = 0. This single technique answers a large share of Advanced inequality questions.',
      },
      {
        topic: 'LMVT / Rolle for existence and bounds',
        detail:
          'f′(c) = (f(b) − f(a))/(b − a) bounds differences; Rolle guarantees a root of f′ between two roots of f. The go-to tools when a question says "show that there exists…".',
      },
    ],
    traps: [
      'Forgetting endpoints on a closed interval — the most common reason a "maxima/minima" answer is wrong. f′(x) = 0 finds local extrema; the global extremum on [a,b] can sit at an endpoint.',
      'Applying Rolle/LMVT without checking the hypotheses. If f is not continuous on [a,b] or not differentiable on (a,b) (e.g. |x| at 0), the conclusion does not hold — Advanced loves this.',
      'Confusing local and global extrema, and assuming f′(c) = 0 always means an extremum (it can be an inflection — the second-derivative test or a sign change settles it).',
      'Reading "increasing at a point" as "increasing on an interval". Monotonicity is an interval property; check f′ across the whole interval, not at one point.',
    ],
    faqs: [
      {
        q: 'How many questions come from Application of Derivatives in JEE Main and Advanced?',
        a: 'AOD alone is about 2–3 questions in JEE Main (~6–8% of Maths), mostly direct maxima/minima, tangent/normal and monotonicity. JEE Advanced usually has 1–2, but they are proof-style — using Rolle\'s theorem or the LMVT for inequalities and root existence. The "10–12 questions" figure some sites quote is the entire differential-calculus block, not this chapter.',
      },
      {
        q: 'Is Application of Derivatives important for JEE Advanced?',
        a: 'Yes — even though the count is small, the chapter is unskippable for Advanced because Rolle\'s theorem, the Lagrange MVT and monotonicity are the standard tools for the "prove this inequality" and "show a root exists" questions that appear most years. The depth, not the number of questions, is what matters.',
      },
      {
        q: 'Which topic in Application of Derivatives is most important?',
        a: 'Maxima and minima (including checking endpoints for the global extremum on a closed interval) and using the sign of f′ for monotonicity. Tangents/normals are reliable Main marks, and monotonicity-based inequality proofs are the key Advanced skill.',
      },
      {
        q: 'Why is Application of Derivatives considered hard?',
        a: 'Because the same idea — the sign of the first derivative — is applied to many different question shapes (optimisation, inequalities, root existence, curve behaviour), and Advanced wraps it in proofs that need hypothesis-checking. Once derivative-sign reasoning and the endpoint/hypothesis checks become automatic, it turns into one of the most dependable scoring chapters.',
      },
    ],
  },

  'jee-chemistry-chemical-equilibrium': {
    overview:
      'Chemical Equilibrium is a high-return Physical Chemistry chapter because the question types are few and repeat: writing Kc/Kp, the Kp = Kc(RT)^Δn conversion, Le Chatelier shifts, and degree-of-dissociation numericals. The figure you see online — "6.6%, ~2 questions" — almost always reports Chemical AND Ionic Equilibrium together; the gaseous-equilibrium chapter on its own is closer to 1 question per shift in JEE Main, and it is direct. JEE Advanced asks fewer but deeper questions, often fusing equilibrium with thermodynamics (ΔG° = −RT ln K) or simultaneous equilibria. Because it is rule- and formula-based rather than memory-heavy, it is one of the better marks-per-hour chapters in the physical block.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~3–4% of Chemistry', questions: '~1 per shift', nature: 'Direct: Kc/Kp expression, Kp–Kc conversion, Le Chatelier shift, degree of dissociation' },
      { exam: 'JEE Advanced', weightage: '~3–4% of Chemistry', questions: '~1 per paper', nature: 'Deeper: ΔG°↔K link, simultaneous/heterogeneous equilibria, multi-step degree-of-dissociation' },
    ],
    correction:
      'The widely quoted "6.6% / 2 questions" weightage is Chemical Equilibrium and Ionic Equilibrium counted together. They are separate chapters here: this page is gaseous/chemical equilibrium (Kc, Kp, Le Chatelier); pH, buffers and solubility product live in Ionic Equilibrium. Budget your time per chapter, not for the combined figure.',
    studyOrder: [
      { step: 'The equilibrium state and Kc', detail: 'Law of mass action, writing Kc for homogeneous reactions, and the rule that pure solids and liquids are left OUT of the expression. Getting the expression right is the gate to everything else.' },
      { step: 'Kp and the Kp = Kc(RT)^Δn link', detail: 'Δn = (moles of gaseous products) − (moles of gaseous reactants). The sign of Δn decides whether Kp is larger or smaller than Kc — a favourite one-mark check; Kp = Kc when Δn = 0.' },
      { step: 'Reaction quotient Q and direction', detail: 'Compare Q with K: Q < K shifts forward, Q > K shifts backward, Q = K is equilibrium. Conceptually clean and frequently tested.' },
      { step: 'Le Chatelier\'s principle', detail: 'The system opposes the imposed change. Pressure increase → side with fewer gas moles; temperature increase → endothermic direction; adding a reactant → forward. A catalyst does NOT shift equilibrium — it only speeds both directions equally.' },
      { step: 'Degree of dissociation and numericals', detail: 'Set up an ICE-style table, express equilibrium amounts in α, and solve. For small α, α ≈ √(Kc/C). This is where most of the actual marks sit.' },
    ],
    highYield: [
      {
        topic: 'Writing Kc/Kp and the Kp = Kc(RT)^Δn conversion',
        detail:
          'The most frequent Main type. Δn counts gases only, and Kp = Kc when Δn = 0. Expect one clean conversion question most years.',
      },
      {
        topic: 'Le Chatelier predictions',
        detail:
          'Effect of pressure, temperature, concentration and inert gas (at constant volume vs constant pressure) on the position of equilibrium. The inert-gas-at-constant-pressure case is the standard trick.',
      },
      {
        topic: 'Degree of dissociation numericals',
        detail:
          'Vapour-density and "α at a given pressure" problems for reactions like PCl₅ ⇌ PCl₃ + Cl₂ or N₂O₄ ⇌ 2NO₂. The ICE table plus α ≈ √(Kc/C) solves most.',
      },
      {
        topic: 'ΔG° = −RT ln K (the equilibrium–thermodynamics bridge)',
        detail:
          'Links spontaneity to K (K > 1 ⇒ ΔG° negative). The classic Advanced fusion of this chapter with thermodynamics.',
      },
    ],
    traps: [
      'Including pure solids or liquids in the Kc/Kp expression — they are taken as unit activity and must be left out (the #1 equilibrium error).',
      'Thinking a catalyst shifts the equilibrium or changes K. It changes neither; it only shortens the time taken to reach the same equilibrium.',
      'Assuming an inert gas "always shifts equilibrium". At constant volume it does nothing; only at constant pressure (which expands the volume) does it shift toward more gas moles.',
      'Confusing the reaction quotient Q with the equilibrium constant K — Q uses the current (non-equilibrium) concentrations and only equals K at equilibrium.',
    ],
    faqs: [
      {
        q: 'What is the weightage of Chemical Equilibrium in JEE Main and Advanced?',
        a: 'On its own, gaseous Chemical Equilibrium is about 1 question per shift in JEE Main (~3–4% of Chemistry), and they are direct — Kc/Kp, the Kp = Kc(RT)^Δn conversion, Le Chatelier and degree of dissociation. JEE Advanced asks roughly 1 deeper question, often linking equilibrium to thermodynamics. The "6.6% / 2 questions" you read elsewhere counts Chemical AND Ionic Equilibrium together.',
      },
      {
        q: 'Is Chemical Equilibrium a scoring chapter for JEE?',
        a: 'Yes — it is one of the higher marks-per-hour Physical Chemistry chapters because the question types are limited and formula-based. Lock the Kc/Kp rules, Le Chatelier, and the degree-of-dissociation setup and you cover almost everything asked.',
      },
      {
        q: 'What is the difference between Chemical Equilibrium and Ionic Equilibrium in JEE?',
        a: 'Chemical (gaseous) Equilibrium covers Kc, Kp, the Kp–Kc relation, Le Chatelier and degree of dissociation. Ionic Equilibrium covers acids/bases, pH, buffers, hydrolysis and solubility product (Ksp). They are separate chapters, and the combined "~7%" weightage online refers to both together.',
      },
      {
        q: 'Does a catalyst change the equilibrium constant?',
        a: 'No. A catalyst speeds up the forward and backward reactions equally, so the system reaches the same equilibrium faster — but the position of equilibrium and the value of K are unchanged. Only a change in temperature changes K.',
      },
    ],
  },

  'neet-biology-body-fluids-circulation': {
    overview:
      'Body Fluids & Circulation is one of the most dependable scorers in NEET Biology\'s Human Physiology unit — over the last decade it has averaged roughly 2 questions per year from this chapter (the "7–9 questions" figure you see online is the 15-year cumulative total, not a single year). The questions are NCERT-line-direct and cluster in four areas: blood composition and blood groups, the heart and cardiac cycle, ECG, and double circulation with disorders. Almost everything is recall plus a few standard numbers (cardiac cycle = 0.8 s, cardiac output = stroke volume × heart rate), which is why it rewards a clean facts-and-tables revision over problem-solving.',
    examSplit: [
      { exam: 'Blood, groups & coagulation', weightage: 'Highest share', questions: '~1 Q/yr', nature: 'Plasma vs serum, RBC/WBC/platelet facts, ABO–Rh antigens & antibodies, clotting cascade' },
      { exam: 'Heart, cardiac cycle & ECG', weightage: 'High', questions: '~1 Q/yr', nature: 'Chamber & valve identification, cycle timings & pressures, ECG wave meanings, cardiac output' },
      { exam: 'Double circulation, vessels & disorders', weightage: 'Moderate', questions: '~0–1 Q/yr', nature: 'Pulmonary vs systemic, artery vs vein, lymph, hypertension/CAD/angina/heart failure' },
    ],
    correction:
      'Several sites headline "7–9 questions, 15–19 marks" for this chapter. That is the 15-year (2009–2024) cumulative count — about 112 questions over 15 years, i.e. roughly 2 per year in recent NEET papers. Prepare it as a high-yield ~2-mark chapter, not a 9-question giant.',
    studyOrder: [
      { step: 'Blood and its components', detail: 'Plasma (and plasma vs serum — serum lacks clotting factors), formed elements (mammalian RBCs are enucleate; WBC granulocytes vs agranulocytes; platelets). The most frequently asked block.' },
      { step: 'Blood groups and coagulation', detail: 'ABO antigens/antibodies and the universal donor/recipient logic, Rh factor and erythroblastosis foetalis, then the clotting cascade (thromboplastin → prothrombin→thrombin → fibrinogen→fibrin, needing Ca²⁺). High recall value.' },
      { step: 'Heart anatomy and the cardiac cycle', detail: 'Four chambers, valves (tricuspid, bicuspid/mitral, semilunar), the SA-node pacemaker → AV node → bundle of His → Purkinje conduction path, and the 0.8 s cycle with pressure changes and heart sounds ("lub" = AV valves close, "dub" = semilunar valves close).' },
      { step: 'ECG and cardiac output', detail: 'P (atrial depolarisation), QRS (ventricular depolarisation), T (ventricular repolarisation); cardiac output = stroke volume × heart rate (~5 L/min at rest). Standard one-markers.' },
      { step: 'Double circulation, lymph and disorders', detail: 'Pulmonary vs systemic circuits, why mammals have complete double circulation, lymph as the link between blood and tissue fluid, then hypertension (140/90), CAD, angina and heart failure.' },
    ],
    highYield: [
      {
        topic: 'ABO/Rh blood groups — antigens, antibodies, donor/recipient',
        detail:
          'O is the universal donor, AB the universal recipient; antibodies in plasma are opposite to the antigen on the RBC (group A has anti-B). Rh⁻ mother / Rh⁺ foetus → erythroblastosis foetalis. A near-guaranteed recall question.',
      },
      {
        topic: 'Cardiac cycle timing, sounds and conduction system',
        detail:
          '0.8 s cycle (atrial systole 0.1 s, ventricular systole 0.3 s, joint diastole 0.4 s); SA node as pacemaker; "lub" (AV valves) and "dub" (semilunar valves). Pressure/volume reasoning is the NEET favourite.',
      },
      {
        topic: 'ECG wave interpretation',
        detail:
          'P = atrial depolarisation, QRS = ventricular depolarisation (atrial repolarisation is hidden within it), T = ventricular repolarisation. Matching wave → event is asked almost every year somewhere in the unit.',
      },
      {
        topic: 'Blood composition facts & numbers',
        detail:
          'Plasma ~55% (90–92% water), formed elements ~45%; RBC lifespan 120 days, made in red bone marrow, destroyed in the spleen ("graveyard of RBCs"); cardiac output ~5 L/min.',
      },
    ],
    traps: [
      'Mixing up ABO antigens and antibodies — the antigen sits on the RBC, the antibody is in the plasma, and they are "opposite" (group A has anti-B). Reversing them is the classic blood-group error.',
      'Defining arteries and veins by oxygen content instead of direction. Arteries carry blood AWAY from the heart — but the pulmonary artery carries deoxygenated blood and the pulmonary vein carries oxygenated blood. Define by direction, not oxygen.',
      'Calling "dub" the first heart sound. "Lub" (first) is the AV valves closing at the start of ventricular systole; "dub" (second) is the semilunar valves closing.',
      'Listing atrial repolarisation as a separate ECG wave — it is masked within the QRS complex, not a distinct deflection.',
    ],
    faqs: [
      {
        q: 'How many questions come from Body Fluids and Circulation in NEET?',
        a: 'In recent NEET papers it averages about 2 questions a year from this chapter, and they are direct, NCERT-based recall. The "7–9 questions / 15–19 marks" figures online are 15-year cumulative totals (~112 questions across 2009–2024), not a single year\'s count.',
      },
      {
        q: 'Which topics in Body Fluids and Circulation are most important for NEET?',
        a: 'Blood composition and ABO/Rh blood groups, the cardiac cycle (timing, heart sounds, conduction system), ECG wave interpretation, and double circulation with the common disorders. These four clusters account for almost every question the chapter has asked.',
      },
      {
        q: 'Is Body Fluids and Circulation easy to score in NEET?',
        a: 'Yes — it is one of the more scoring Human Physiology chapters because nearly all of it is recall plus a few standard numbers (cardiac cycle 0.8 s, cardiac output = stroke volume × heart rate, BP 120/80). Clean tables for blood groups, ECG waves and the conduction path turn it into fast, reliable marks.',
      },
      {
        q: 'What is the difference between the "lub" and "dub" heart sounds?',
        a: '"Lub" (the first heart sound) is produced when the atrioventricular valves (tricuspid and bicuspid) close at the start of ventricular systole. "Dub" (the second sound) is produced when the semilunar valves (aortic and pulmonary) close at the end of ventricular systole. NEET often asks which valves cause which sound.',
  'jee-physics-thermodynamics': {
    overview:
      'Heat & Thermodynamics is one of the highest-yield blocks in JEE Physics, but the single chapter and the whole block are different numbers — which most weightage articles blur. As a standalone chapter (first law, the four processes, heat engines, heat transfer) it gives about 1–2 questions per JEE Main shift, almost always formula-direct: apply ΔU = Q − W, read work off a PV diagram, or compute Carnot efficiency. In JEE Advanced it appears in most papers (1–3 questions) and is usually fused with the kinetic theory of gases — a single problem that asks for work in a process and then the change in internal energy via degrees of freedom. The fastest marks come from nailing the process table (what is zero in each of isothermal/adiabatic/isobaric/isochoric) cold.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~5–7% of Physics', questions: '1–2 per shift', nature: 'Direct: first law, PV-diagram work, Carnot efficiency, conduction/radiation' },
      { exam: 'JEE Advanced', weightage: '~6% of Physics', questions: '1–3 (in most papers)', nature: 'Fused with kinetic theory: process + degrees of freedom, cyclic-process efficiency, multi-step' },
    ],
    correction:
      'The "thermodynamics is ~15% of JEE" figure you see online is the whole Heat & Thermodynamics unit — this chapter PLUS Kinetic Theory of Gases and Thermal Properties of Matter — not thermodynamics alone, which is closer to 5–7%. Separately, this is Physics thermodynamics (gas processes, PV work, engines); the Chemistry chapter of the same name is about enthalpy, entropy and Gibbs energy and is examined independently — don\'t assume studying one covers the other.',
    studyOrder: [
      { step: 'Sign convention + first law', detail: 'ΔU = Q − W with the physics convention (W = work done BY the gas, positive when the gas expands). Getting this sign right is the single biggest source of lost marks in the chapter, so fix it before anything else.' },
      { step: 'The four processes as a table', detail: 'Isothermal (ΔU = 0, Q = W = nRT ln(V₂/V₁)), adiabatic (Q = 0, ΔU = −W, PVᵞ = const), isobaric (W = PΔV, Q = nC_pΔT), isochoric (W = 0, Q = nC_vΔU). Memorise which quantity is zero in each — that one fact answers most Main questions.' },
      { step: 'C_p, C_v and γ', detail: 'C_p − C_v = R, γ = C_p/C_v (monatomic 5/3, diatomic 7/5). Use the right specific heat for the right process — C_p for constant pressure, C_v for constant volume and for ΔU in ANY process.' },
      { step: 'PV diagrams & cyclic processes', detail: 'Area under the curve = work for that path; area enclosed by a cycle = net work; efficiency η = W_net/Q_in. Work is path-dependent, so the same end-states can give different W.' },
      { step: 'Carnot, second law & heat transfer last', detail: 'Carnot efficiency η = 1 − T_c/T_h (temperatures in kelvin), refrigerator COP = T_c/(T_h − T_c); then heat transfer — conduction dQ/dt = kAΔT/L (thermal resistance L/kA, add in series/parallel like electrical resistance), Stefan P = σAT⁴ and Newton\'s law of cooling.' },
    ],
    highYield: [
      {
        topic: 'First law applied to the four processes',
        detail:
          'The highest-frequency Main type: identify the process, set the zero quantity, and apply ΔU = Q − W. For an ideal gas ΔU = nC_vΔT in EVERY process (not just isochoric) because U depends only on temperature — a fact that unlocks half the questions.',
      },
      {
        topic: 'Work from a PV diagram & cyclic efficiency',
        detail:
          'Work done = area under the P–V curve; for a closed cycle the net work is the enclosed area (positive if clockwise). Efficiency η = net work / heat absorbed. Two-process and three-process cycles are a recurring Main + Advanced pattern.',
      },
      {
        topic: 'Adiabatic relations',
        detail:
          'PVᵞ = constant, TVᵞ⁻¹ = constant, P^(1−ᵞ)Tᵞ = constant. In an adiabatic expansion the gas does work at the expense of internal energy, so it cools. Mixing up the adiabatic and isothermal curves (adiabatic is steeper) is a classic trap.',
      },
      {
        topic: 'Carnot engine & heat conduction',
        detail:
          'η = 1 − T_c/T_h is the maximum efficiency any engine between those temperatures can have — a favourite conceptual MCQ. For conduction, treat L/kA as a thermal resistance: rods in series add resistances, in parallel add conductances, exactly like circuits.',
      },
    ],
    traps: [
      'Sign of work. In the physics convention W is the work done BY the gas (positive on expansion) and ΔU = Q − W; the chemistry convention writes ΔU = Q + W with W done ON the gas. Mixing the two flips the answer.',
      'Using the wrong specific heat. Heat in an isobaric process needs C_p; in an isochoric process C_v. But ΔU = nC_vΔT for an ideal gas in ANY process — students wrongly restrict C_v to constant-volume only.',
      'Treating an adiabatic process with isothermal formulas. Q = 0 (not ΔU = 0) in adiabatic; use PVᵞ = const, and the temperature changes. The adiabatic curve on a PV diagram is steeper than the isothermal.',
      'Forgetting temperatures must be in kelvin in η = 1 − T_c/T_h. Plugging in Celsius gives a nonsensical efficiency.',
    ],
    faqs: [
      {
        q: 'What is the weightage of thermodynamics in JEE Main and JEE Advanced?',
        a: 'As a standalone chapter, Physics Thermodynamics is about 5–7% of the Main paper — roughly 1–2 questions per shift, mostly direct (first law, PV-diagram work, Carnot efficiency, conduction). In JEE Advanced it carries about 6% and appears in most papers (1–3 questions), usually fused with the kinetic theory of gases. The much-quoted "~15%" is the entire Heat & Thermodynamics unit, which also includes Kinetic Theory and Thermal Properties of Matter — not thermodynamics by itself.',
      },
      {
        q: 'Is JEE physics thermodynamics the same as chemistry thermodynamics?',
        a: 'No — they are separate chapters examined independently. Physics thermodynamics is about gases: the first law, PV diagrams, work in different processes, heat engines and heat transfer. Chemistry thermodynamics is about reactions: enthalpy, entropy, Gibbs free energy and spontaneity. The first law and the sign of work overlap conceptually, but the question types are different, so prepare both.',
      },
      {
        q: 'Which thermodynamics topics are most important for JEE Main?',
        a: 'The first law applied to the four processes (isothermal, adiabatic, isobaric, isochoric), work from a PV diagram, the C_p/C_v/γ relations, and Carnot efficiency. Memorising which quantity is zero in each process, plus ΔU = nC_vΔT for any process, answers the majority of Main questions. Heat transfer (conduction, Stefan\'s law, Newton\'s cooling) usually adds one more direct question.',
      },
      {
        q: 'Why do I keep getting the sign of work wrong in thermodynamics?',
        a: 'Because two conventions exist. Physics uses ΔU = Q − W where W is work done BY the gas (positive when it expands); chemistry uses ΔU = Q + W where W is work done ON the gas. Pick the physics convention for JEE Physics, write it the same way every time, and read "gas expands → gas does positive work → its internal energy falls unless heat is supplied".',
      },
    ],
  },

  'jee-chemistry-hydrocarbons': {
    overview:
      'Hydrocarbons is a deceptively high-return organic chapter: the headline weightage is only ~3.3% (about 2 questions per JEE Main shift), but it sits on top of General Organic Chemistry, so the reasoning it tests — carbocation stability, acidity order, directing effects in aromatic substitution — reappears all through organic. In JEE Main the questions are mostly product prediction and reagent identification (Markovnikov vs anti-Markovnikov, ozonolysis, Friedel–Crafts). In JEE Advanced hydrocarbons rarely stand alone; they are woven into multi-step synthesis and mechanism questions where the same EAS and addition rules decide the answer. Treat it as the chapter where GOC concepts become marks.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~3–4% of Chemistry (~2 Q)', questions: '~2 per shift on average', nature: 'Direct: product of addition/EAS, reagent ID, acidity order, ozonolysis' },
      { exam: 'JEE Advanced', weightage: 'Threaded through Organic', questions: '1–2 (rarely stand-alone)', nature: 'Multi-step synthesis, mechanism, directing-effect chains, isomer counting' },
    ],
    correction:
      'The "only 3.3%, low priority" reading undersells it. Hydrocarbons and General Organic Chemistry are repeatedly flagged as the highest-scoring organic combination because the rules learned here (stability, acidity, directing effects) carry into alcohols, carbonyls and amines. The marks are not just in the 2 hydrocarbon questions — they are in every organic question those rules unlock.',
    studyOrder: [
      { step: 'GOC foundation first', detail: 'Inductive, resonance and hyperconjugation effects, and the stability order of carbocations/carbanions/free radicals. Without this, every hydrocarbon reaction is rote memorisation; with it, products become predictable.' },
      { step: 'Alkanes', detail: 'Preparation (Wurtz, Kolbe electrolysis, decarboxylation) and free-radical halogenation with its selectivity (3° > 2° > 1° H). Conformations of ethane/butane occasionally appear.' },
      { step: 'Alkenes & alkynes (addition)', detail: 'Markovnikov and the peroxide (anti-Markovnikov) effect, hydroboration–oxidation, ozonolysis, and the acidity of terminal alkynes. This is the densest source of Main questions.' },
      { step: 'Aromatic hydrocarbons & EAS', detail: 'Benzene, electrophilic aromatic substitution (nitration, halogenation, Friedel–Crafts alkylation/acylation) and the directing/activating effects that decide where the next group goes.' },
      { step: 'Aromaticity & isomerism last', detail: 'Hückel\'s 4n+2 rule (counting π electrons correctly, including in ions), and structural/geometrical isomerism for "how many isomers" questions.' },
    ],
    highYield: [
      {
        topic: 'Markovnikov, anti-Markovnikov & addition products',
        detail:
          'Markovnikov: the H adds to the carbon with more H\'s (so the positive charge sits on the more stable carbocation). Anti-Markovnikov (peroxide/Kharasch effect) reverses this — but ONLY for HBr, never HCl or HI, because only the HBr step is energetically favourable as a radical chain.',
      },
      {
        topic: 'Electrophilic aromatic substitution + directing effects',
        detail:
          'o/p-directors are activating groups (−OH, −NH₂, −R, halogens are o/p-directing but deactivating); m-directors are deactivating (−NO₂, −COOH, −CN, −SO₃H). Friedel–Crafts fails on strongly deactivated rings (e.g. nitrobenzene) — a frequently tested limitation.',
      },
      {
        topic: 'Acidity order of terminal C–H',
        detail:
          'Terminal alkyne H is acidic (sp carbon, ~25% s-character) so HC≡CH > H₂C=CH₂ > H₃C–CH₃ in acidity; this is why terminal alkynes react with Na/NaNH₂ to give acetylides. More s-character ⇒ more acidic is the principle behind the whole order.',
      },
      {
        topic: 'Ozonolysis & oxidative cleavage',
        detail:
          'Ozonolysis cleaves C=C to two carbonyls (reductive work-up gives aldehydes/ketones, oxidative gives acids). Working backward from the carbonyl products to the original alkene is a classic Main question type.',
      },
    ],
    traps: [
      'Applying the anti-Markovnikov (peroxide) effect to HCl or HI. It works only with HBr; with HCl/HI the addition stays Markovnikov regardless of peroxide.',
      'Calling halogens meta-directors. Halogens are deactivating (they slow the ring) but still o/p-DIRECTING because of their lone-pair resonance donation — a favourite catch.',
      'Miscounting π electrons for aromaticity. Hückel\'s rule (4n+2) must be applied to the planar cyclic conjugated π system, including the charge in ions (cyclopentadienyl anion is aromatic, cation is not).',
      'Confusing Saytzeff and Hofmann elimination. The more substituted (Saytzeff) alkene is the major product under most conditions; bulky bases (e.g. t-BuOK) flip it to the less substituted Hofmann product.',
    ],
    faqs: [
      {
        q: 'How many questions come from Hydrocarbons in JEE Main?',
        a: 'About 2 per shift on average (~3–3.3% of the Chemistry paper). The questions are usually direct — predicting the product of an addition or aromatic-substitution reaction, identifying a reagent, ordering acidity, or working backward from ozonolysis products. Low headline weightage, but the underlying rules carry into the rest of organic chemistry.',
      },
      {
        q: 'Is Hydrocarbons a scoring chapter for JEE?',
        a: 'Yes, provided you build the General Organic Chemistry base first. Once carbocation stability, acidity trends and directing effects are second nature, hydrocarbon questions become predictable product-prediction marks — and the same reasoning then scores you marks across alcohols, carbonyls and amines. It is consistently rated one of the highest-return organic chapters for exactly this reason.',
      },
      {
        q: 'Does the anti-Markovnikov rule apply to all hydrogen halides?',
        a: 'No — only to HBr in the presence of peroxides (the Kharasch / peroxide effect). With HCl and HI the addition follows Markovnikov\'s rule even if peroxide is present, because only the HBr radical chain is energetically favourable. This "HBr only" point is one of the most frequently tested traps in the chapter.',
      },
      {
        q: 'Which is more acidic — alkane, alkene or alkyne?',
        a: 'Alkyne > alkene > alkane for the terminal C–H. The reason is s-character: the sp carbon of a terminal alkyne holds its bonding electrons closer to the nucleus, stabilising the negative charge left behind, so the H comes off more easily. This is why terminal alkynes form acetylides with sodium or sodamide while alkenes and alkanes do not.',
      },
    ],
  },

  'neet-biology-photosynthesis': {
    overview:
      'Photosynthesis in Higher Plants is one of NEET Biology\'s most concept-dense Botany chapters, and almost every question is NCERT-line-direct: the location of each step, the products of the light reaction, the C3 vs C4 contrast, and the dual nature of RuBisCO. As a standalone chapter it contributes about 1–2 questions most years (~2–4 marks), but it underpins Respiration and the wider Plant Physiology unit, so the concepts pay off beyond their own question count. The students who lose marks here do so on precise wording (which photosystem splits water, where the Calvin cycle runs) rather than on difficult reasoning.',
    examSplit: [
      { exam: 'This chapter alone', weightage: '~2–4% of Biology', questions: '1–2 per year (~2–4 marks)', nature: 'NCERT-direct: location of steps, light-reaction products, C3/C4 contrast, RuBisCO' },
      { exam: 'Plant Physiology unit', weightage: 'Higher combined', questions: 'Several per year across chapters', nature: 'Photosynthesis + Respiration + Mineral Nutrition + Plant Growth examined together' },
    ],
    correction:
      'Weightage figures for this chapter range from "~1%" to "~5–6%" online because some count the chapter alone and others count the whole Plant Physiology unit. The honest picture: the chapter on its own is usually 1–2 questions a year, but it is high-value-per-mark because the answers are direct NCERT recall — easy to lock down and hard to lose if you know the exact lines.',
    studyOrder: [
      { step: 'Pigments & where it happens', detail: 'Chlorophyll a (primary pigment / reaction centre), chlorophyll b and carotenoids (accessory pigments that also protect against photo-oxidation). Light reaction in the thylakoid membranes; Calvin cycle (dark reaction) in the stroma. Fixing these locations first prevents the most common mistakes.' },
      { step: 'Light reaction & the Z-scheme', detail: 'PS II (P680) acts first and splits water (photolysis → O₂, the O₂ comes from water, not CO₂); electrons flow PS II → PS I (P700) → NADP⁺. Discovered second, acts first — that is the PS II/PS I trick.' },
      { step: 'Photophosphorylation', detail: 'Non-cyclic (both photosystems, makes ATP + NADPH + O₂) versus cyclic (PS I only, makes ATP only — no NADPH, no O₂). The chemiosmotic hypothesis: ATP synthesis is driven by the proton gradient across the thylakoid membrane.' },
      { step: 'Calvin cycle (C3) with its numbers', detail: 'Three phases — carboxylation (RuBisCO fixes CO₂ onto RuBP), reduction, regeneration. Per glucose: 6 CO₂, 18 ATP and 12 NADPH; the first stable product is 3-PGA (a 3-carbon acid), which is why it is the C3 pathway.' },
      { step: 'C4, CAM & photorespiration last', detail: 'C4 (Kranz anatomy, PEPcase fixes CO₂ to OAA in mesophyll, RuBisCO works in bundle-sheath cells, no photorespiration); CAM (same biochemistry, separated in TIME — stomata open at night). Photorespiration is RuBisCO\'s oxygenase activity at high O₂/low CO₂, wasteful in C3 plants.' },
    ],
    highYield: [
      {
        topic: 'C3 vs C4 vs CAM comparison',
        detail:
          'C3: acceptor RuBP, first product 3-PGA (3C), enzyme RuBisCO, photorespiration present. C4: acceptor PEP, first product OAA (4C), enzyme PEPcase (then RuBisCO in bundle sheath), Kranz anatomy, no photorespiration, more efficient in heat. CAM: like C4 biochemically but CO₂ fixed at night and released to the Calvin cycle by day — spatial (C4) vs temporal (CAM) separation is the line NEET loves.',
      },
      {
        topic: 'Light reaction: location, photolysis & products',
        detail:
          'Splitting of water is associated with PS II on the inner side of the thylakoid membrane; it releases O₂, protons and electrons. Non-cyclic flow yields ATP, NADPH and O₂; cyclic flow (only PS I) yields ATP alone. The oxygen evolved in photosynthesis comes entirely from water.',
      },
      {
        topic: 'RuBisCO\'s dual nature',
        detail:
          'RuBisCO (the most abundant enzyme in the world) is both a carboxylase and an oxygenase. It normally favours CO₂, but when O₂ is high and CO₂ low it fixes O₂ instead, starting photorespiration — which consumes energy and releases CO₂ with no sugar or ATP gain. C4 plants avoid this by concentrating CO₂ around RuBisCO.',
      },
      {
        topic: 'Limiting factors (Blackman\'s law)',
        detail:
          'At any moment the factor in shortest supply (light, CO₂, temperature, water) caps the rate — Blackman\'s law of limiting factors. The red-drop effect and Emerson\'s enhancement effect (two wavelengths together exceed the sum of each alone) are direct NEET recall points about the two photosystems.',
      },
    ],
    traps: [
      'Reversing PS I and PS II. PS II (P680) acts FIRST and splits water; PS I (P700) acts second and reduces NADP⁺. "Discovered second, acts first" fixes the order.',
      'Saying the evolved O₂ comes from CO₂. It comes from the photolysis of water — proven by isotope experiments — not from carbon dioxide.',
      'Confusing C4 and CAM separation. C4 separates the two carboxylations in SPACE (mesophyll vs bundle sheath); CAM separates them in TIME (night vs day). Both first fix CO₂ into the 4-carbon OAA.',
      'Forgetting RuBisCO works in the bundle-sheath cells of C4 plants, not the mesophyll — and that bundle-sheath chloroplasts often lack grana. The mesophyll uses PEP carboxylase.',
    ],
    faqs: [
      {
        q: 'What is the weightage of Photosynthesis in Higher Plants in NEET?',
        a: 'The chapter on its own is usually 1–2 questions per year (about 2–4 marks, ~2–4% of Biology). You will see higher figures (5–6%) quoted online, but those count the whole Plant Physiology unit. It is a high-value chapter per mark because the questions are direct NCERT recall — location of each step, products of the light reaction, the C3/C4 contrast and RuBisCO.',
      },
      {
        q: 'What is the difference between C3, C4 and CAM plants for NEET?',
        a: 'C3 plants fix CO₂ directly with RuBisCO onto RuBP, giving the 3-carbon 3-PGA, and suffer photorespiration. C4 plants (Kranz anatomy) first fix CO₂ with PEP carboxylase into the 4-carbon OAA in mesophyll cells, then release it to RuBisCO in bundle-sheath cells — concentrating CO₂ so there is no photorespiration. CAM plants do the same chemistry as C4 but separate it in time, fixing CO₂ at night when stomata open (an adaptation of desert succulents).',
      },
      {
        q: 'Where does the oxygen released in photosynthesis come from?',
        a: 'From water, not carbon dioxide. During the light reaction, photosystem II drives the photolysis (splitting) of water, releasing O₂, protons and electrons. Isotope-labelling experiments confirmed the evolved oxygen carries the oxygen of water — a fact NEET tests almost every cycle.',
      },
      {
        q: 'Why is RuBisCO important and what is photorespiration?',
        a: 'RuBisCO is the enzyme that fixes CO₂ in the Calvin cycle and is the most abundant protein on Earth. It can also bind O₂: when oxygen is high and CO₂ low, it acts as an oxygenase and starts photorespiration, a wasteful pathway that consumes energy and releases CO₂ without making sugar or ATP. C4 plants minimise this by pumping CO₂ around RuBisCO, which is why they are more efficient in hot, bright conditions.',
      },
    ],
  },

  'neet-physics-ray-optics': {
    overview:
      'Ray Optics & Optical Instruments is among the highest-weight and most dependable scorers in NEET Physics: about 3 questions most years (~5–6% of the section, ~12 marks), and they are overwhelmingly formula-direct — mirror/lens equation, magnification, Snell\'s law, total internal reflection, lens power and the prism/instrument formulas. The only thing standing between a prepared student and full marks here is the sign convention: get the New Cartesian convention automatic and the chapter becomes near-guaranteed marks. It pairs with Wave Optics, but the two are separate chapters and should not be conflated when you plan your revision.',
    examSplit: [
      { exam: 'NEET (3-yr avg)', weightage: '~5–6% of Physics', questions: '~3 per year (~12 marks)', nature: 'Formula-direct: mirror/lens equation, TIR, prism, lens combination, instruments' },
      { exam: 'Recent trend', weightage: '—', questions: '2023: 3 · 2024: 2 · 2025: 2', nature: 'Consistently 2–3 questions; one of the most reliable Physics scorers' },
    ],
    correction:
      'The "optics is ~12%" figure combines Ray Optics AND Wave Optics. Ray Optics alone is about 3 questions (~5–6%); Wave Optics adds roughly 1 more. Plan them separately — Ray Optics is high-yield and mostly numerical, while Wave Optics (interference/diffraction) is smaller and more conceptual.',
    studyOrder: [
      { step: 'Sign convention first', detail: 'New Cartesian convention: measure everything from the pole, distances along the incident light are positive. For a real object u is negative; concave mirror and convex lens have negative and positive focal length respectively. Locking this in before any formula is what makes the rest error-free.' },
      { step: 'Mirrors', detail: 'Mirror formula 1/v + 1/u = 1/f and magnification m = −v/u = h\'/h. Practise real-vs-virtual image cases for concave and convex mirrors until the sign of m tells you the image nature instantly.' },
      { step: 'Refraction, Snell & TIR', detail: 'n₁ sinθ₁ = n₂ sinθ₂; critical angle sinθ_c = n₂/n₁ (light must go from denser to rarer for TIR). Apparent depth = real depth / n, and the shift through a glass slab, are recurring direct questions.' },
      { step: 'Lenses', detail: 'Lens formula 1/v − 1/u = 1/f, lensmaker\'s 1/f = (n−1)(1/R₁ − 1/R₂), power P = 1/f (in metres, dioptres), and lenses in contact P = P₁ + P₂. The combination-power question appears almost every year.' },
      { step: 'Prism & optical instruments last', detail: 'Prism: A + δ = i + e, minimum deviation n = sin((A+δ_m)/2)/sin(A/2), and dispersion. Then microscope and telescope magnifying power and the idea of resolving power.' },
    ],
    highYield: [
      {
        topic: 'Mirror & lens equations with magnification',
        detail:
          'The core numerical engine: 1/v + 1/u = 1/f (mirror), 1/v − 1/u = 1/f (lens), with m = −v/u (mirror) and m = v/u (lens). Most direct questions are one substitution with correct signs; the sign of m then gives erect/inverted and real/virtual without a ray diagram.',
      },
      {
        topic: 'Total internal reflection & critical angle',
        detail:
          'TIR needs light travelling from a denser to a rarer medium at an angle beyond the critical angle, sinθ_c = n_rarer/n_denser. It explains optical fibres, the sparkle of diamond (high n ⇒ small θ_c) and the mirage — all favourite NEET applications.',
      },
      {
        topic: 'Lens power, lensmaker & combination',
        detail:
          'P = 1/f (dioptres, f in metres); for thin lenses in contact P = P₁ + P₂ + …, so a converging and diverging lens can combine to a net power. The lensmaker\'s equation links focal length to the radii of curvature and refractive index — useful for "what happens to f when the lens is put in water" questions.',
      },
      {
        topic: 'Prism, dispersion & instruments',
        detail:
          'Prism: A + δ = i + e; at minimum deviation i = e and the ray passes symmetrically. Dispersive power ω = (n_v − n_r)/(n_y − 1). For instruments, compound microscope M ≈ (L/f_o)(D/f_e) and astronomical telescope (normal adjustment) M = f_o/f_e with length f_o + f_e — direct formula questions.',
      },
    ],
    traps: [
      'Sign-convention slips. The New Cartesian convention must be applied to every quantity; a single wrong sign (especially u for a real object, which is negative) flips the whole answer. This is the number-one cause of lost marks in the chapter.',
      'Applying TIR in the wrong direction. Total internal reflection happens only when light goes from a denser to a rarer medium (e.g. glass to air), never the reverse — and only beyond the critical angle.',
      'Confusing the mirror and lens magnification signs (m = −v/u for mirrors but m = v/u for lenses) and forgetting that the sign of m encodes whether the image is erect or inverted.',
      'Forgetting power adds with sign in a lens combination: a convex (+) and concave (−) lens in contact give P₁ + P₂, which can be net converging or diverging depending on magnitudes.',
    ],
    faqs: [
      {
        q: 'How many questions come from Ray Optics in NEET?',
        a: 'About 3 in a typical year (~5–6% of the Physics section, ~12 marks). Recent papers ran roughly 3 in 2023 and 2 each in 2024 and 2025, so 2–3 is the reliable range. It is one of the highest-weight Physics chapters and, because the questions are mostly formula-direct, one of the easiest places to secure full marks.',
      },
      {
        q: 'Is Ray Optics or the whole of Optics 12% of NEET Physics?',
        a: 'The ~12% figure is Ray Optics and Wave Optics combined. Ray Optics on its own is about 3 questions (~5–6%); Wave Optics adds roughly one more. They are separate chapters — Ray Optics is larger and numerical (mirrors, lenses, TIR, prism, instruments), while Wave Optics (interference, diffraction) is smaller and more conceptual — so revise them separately rather than as one block.',
      },
      {
        q: 'How do I stop making sign-convention mistakes in optics?',
        a: 'Adopt the New Cartesian convention and apply it mechanically: take the pole/optical centre as origin, distances measured along the incident light as positive. For a real object u is always negative; a concave mirror\'s focal length is negative, a convex lens\'s is positive. Write the formula, substitute with signs, and let the sign of the answer tell you whether the image is real/virtual and erect/inverted — never guess the nature first.',
      },
      {
        q: 'What is total internal reflection and where is it asked in NEET?',
        a: 'Total internal reflection occurs when light travelling in a denser medium hits the boundary with a rarer medium at an angle larger than the critical angle (sinθ_c = n_rarer/n_denser), so all the light reflects back. NEET asks it through applications — optical fibres, the brilliance of diamond (large refractive index gives a small critical angle), and the mirage — as well as direct critical-angle calculations.',
      },
    ],
  },
};

/** Returns the curated enrichment for a chapter slug, or undefined if none exists. */
export function getChapterEnrichment(slug: string): ChapterEnrichment | undefined {
  return ENRICHMENTS[slug];
}
