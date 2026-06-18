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
};

/** Returns the curated enrichment for a chapter slug, or undefined if none exists. */
export function getChapterEnrichment(slug: string): ChapterEnrichment | undefined {
  return ENRICHMENTS[slug];
}
