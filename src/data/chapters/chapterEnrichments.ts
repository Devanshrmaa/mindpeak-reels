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

  'jee-chemistry-chemical-equilibrium': {
    overview:
      'Chemical Equilibrium is a small but reliable scorer, and the first thing to fix is what "weightage" actually refers to. Almost every article online quotes a combined "Chemical + Ionic Equilibrium" figure (~6–7%, 2 questions) — but those are two separate chapters. This page is Chemical Equilibrium proper: the law of mass action, Kc/Kp, the reaction quotient and Le Chatelier\'s principle. On its own it is about 1 question per JEE Main shift, almost always formula-direct. The pH, buffer and solubility-product material that inflates the "equilibrium" count lives in Ionic Equilibrium, a different (and harder) chapter.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~3–4% of Chemistry (chapter alone)', questions: '~1 per shift', nature: 'Direct: Kp–Kc relation, Q-vs-K direction, Le Chatelier prediction, degree of dissociation' },
      { exam: 'JEE Advanced', weightage: '~2–3% (rarely standalone)', questions: '~1, often fused', nature: 'Linked with thermodynamics (ΔG° = −RT ln K) and ionic equilibrium in one multi-part problem' },
    ],
    correction:
      'The widely-quoted "Equilibrium = 2 questions / 6.6%" figure is for Chemical AND Ionic Equilibrium combined. Chemical Equilibrium by itself (Kc, Kp, Le Chatelier) is closer to 1 question per shift. Read that number correctly so you do not over- or under-invest — the heavy numerical load (pH, buffers, Ksp) is in the separate Ionic Equilibrium chapter.',
    studyOrder: [
      { step: 'Law of mass action and the equilibrium constant', detail: 'Write Kc for homogeneous and heterogeneous equilibria first — and learn the single rule that catches most students: pure solids and pure liquids are left out of the expression. Everything else builds on writing K correctly.' },
      { step: 'Kp, and Kp = Kc(RT)^Δn', detail: 'Δn = (moles of gaseous product) − (moles of gaseous reactant). Get the sign of Δn right and this conversion is a guaranteed mark; get it wrong and the whole numerical collapses.' },
      { step: 'Reaction quotient Q vs K — predicting direction', detail: 'If Q < K the reaction goes forward, if Q > K it goes backward, if Q = K it is at equilibrium. This "which way does it shift" logic is a favourite single-correct question and takes ten seconds once the habit is built.' },
      { step: 'Le Chatelier\'s principle', detail: 'Apply it to changes in concentration, pressure/volume and temperature. The system shifts to oppose the change — toward fewer gas moles under higher pressure, toward the endothermic side on heating. A catalyst changes neither K nor the position of equilibrium.' },
      { step: 'Degree of dissociation (α)', detail: 'Express Kp/Kc in terms of α and initial pressure/concentration for a dissociation like PCl₅ ⇌ PCl₃ + Cl₂. This ties the chapter together and is the most common "show your working" numerical type.' },
    ],
    highYield: [
      {
        topic: 'Kp–Kc relation and the sign of Δn',
        detail:
          'Kp = Kc(RT)^Δn. For N₂ + 3H₂ ⇌ 2NH₃, Δn = 2 − 4 = −2, so Kp = Kc(RT)⁻². Reactions with equal gas moles on both sides (e.g. H₂ + I₂ ⇌ 2HI) have Δn = 0 and Kp = Kc — a frequently-tested special case.',
      },
      {
        topic: 'Degree of dissociation and Kp(α)',
        detail:
          'For a one-into-two gas dissociation A ⇌ B + C at total pressure P, Kp = α²P/(1 − α²). For small α this approximates Kp ≈ α²P, so α ∝ 1/√P — increasing pressure suppresses dissociation, which is Le Chatelier in algebraic form.',
      },
      {
        topic: 'Le Chatelier predictions (qualitative)',
        detail:
          'Increase pressure → shift toward fewer gas moles; add an inert gas at constant volume → no shift (partial pressures unchanged); add inert gas at constant pressure → shift toward more moles; raise temperature → shift in the endothermic direction and change K. These "predict the shift" questions are pure marks.',
      },
      {
        topic: 'ΔG° = −RT ln K (the thermodynamics bridge)',
        detail:
          'Connects equilibrium to thermodynamics: a large positive K means a large negative ΔG° (spontaneous), K = 1 means ΔG° = 0. JEE Advanced loves to ask for K given ΔG° (or vice versa) inside a thermodynamics problem.',
      },
    ],
    traps: [
      'Putting pure solids or liquids into the equilibrium expression. For CaCO₃(s) ⇌ CaO(s) + CO₂(g), Kp = p(CO₂) only — the two solids do not appear.',
      'Thinking a catalyst shifts the equilibrium. A catalyst speeds up forward and backward reactions equally; it changes neither K nor the equilibrium position — only how fast equilibrium is reached.',
      'Getting the sign of Δn wrong in Kp = Kc(RT)^Δn. Count gaseous moles only, products minus reactants — liquids and solids are not counted.',
      'Assuming adding an inert gas always shifts the equilibrium. At constant volume it does nothing (partial pressures unchanged); only at constant pressure (which increases the volume) does it shift the equilibrium toward more gaseous moles.',
    ],
    faqs: [
      {
        q: 'How many questions come from Chemical Equilibrium in JEE Main?',
        a: 'About one question per shift from Chemical Equilibrium specifically (Kc/Kp, Le Chatelier, degree of dissociation). The higher "2 questions / ~6.6%" figure you see online is for Chemical and Ionic Equilibrium counted together — and Ionic Equilibrium (pH, buffers, Ksp) is a separate, more numerical chapter.',
      },
      {
        q: 'Is Chemical Equilibrium easy to score in JEE?',
        a: 'Yes. Most JEE Main questions are formula-direct — apply Kp = Kc(RT)^Δn, compare Q with K to predict direction, or use Le Chatelier qualitatively. The only care needed is leaving solids/liquids out of the expression and getting the sign of Δn right. It is one of the quickest chapters to make exam-ready.',
      },
      {
        q: 'What is the difference between Kc and Kp?',
        a: 'Kc uses molar concentrations, Kp uses partial pressures of the gases. They are related by Kp = Kc(RT)^Δn, where Δn is the change in the number of gaseous moles (products − reactants). When Δn = 0 the two are numerically equal.',
      },
      {
        q: 'Does a catalyst change the equilibrium constant?',
        a: 'No. A catalyst lowers the activation energy for both the forward and backward reactions by the same amount, so it speeds up the approach to equilibrium but leaves the equilibrium constant K and the position of equilibrium unchanged. This is a classic JEE trap question.',
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
      'Application of Derivatives (AOD) is the highest-frequency single chapter in JEE calculus, but it behaves very differently in the two papers. In JEE Main it is 2–3 mostly-direct questions per paper — tangent/normal, where a function increases or decreases, and maxima/minima. In JEE Advanced the same chapter becomes the vehicle for the hard reasoning questions: using LMVT and Rolle\'s theorem to prove inequalities or the existence of a root, and multi-variable optimisation. So the chapter is unskippable, but what you practise should depend on which paper you are targeting.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~6–8% of Maths', questions: '2–3 per paper', nature: 'Direct: tangent/normal slope, monotonic intervals, local/global maxima–minima, simple rate of change' },
      { exam: 'JEE Advanced', weightage: '~3–5% but high-difficulty', questions: '1–2, reasoning-heavy', nature: 'LMVT/Rolle to prove inequalities & root existence, optimisation, derivative as a tool inside other chapters' },
    ],
    correction:
      'Several weightage tables quote AOD as "low" (1–2 questions, ~2–3%) because they read the Advanced count in isolation. That undersells it: derivatives are also the engine behind curve sketching, inequality proofs and the analysis steps inside integration and probability questions. The chapter\'s real footprint — direct plus as-a-tool — is larger than its standalone question count suggests.',
    studyOrder: [
      { step: 'Derivative as rate of change and slope', detail: 'Re-anchor dy/dx as "slope of the tangent" and as a rate. Almost every AOD subtopic is one of these two readings, so make the interpretation automatic before touching applications.' },
      { step: 'Tangent and normal', detail: 'Slope of tangent = dy/dx at the point; normal slope is its negative reciprocal. Learn the tangent-from-an-external-point case separately — it needs an unknown point of contact, which is where students slip.' },
      { step: 'Increasing / decreasing (monotonicity)', detail: 'f′(x) > 0 ⇒ increasing, f′(x) < 0 ⇒ decreasing. Solve f′(x) > 0 as an inequality and read off intervals. This is the bridge to maxima/minima and to Advanced inequality proofs.' },
      { step: 'Maxima and minima', detail: 'First-derivative test (sign change of f′) and second-derivative test (f″ > 0 ⇒ minimum). For a closed interval, always also check the endpoints for the global extremum — the single most common Main mistake.' },
      { step: 'Rolle\'s theorem and LMVT', detail: 'Check continuity and differentiability first, then apply. Rolle (f(a) = f(b)) proves a root of f′; LMVT gives f′(c) = (f(b) − f(a))/(b − a). These power most Advanced inequality and existence questions.' },
      { step: 'Optimisation word problems', detail: 'Translate the situation into f(x) of one variable, set f′(x) = 0, confirm with the second-derivative test. Maximum-area/volume and minimum-cost problems are the recurring Main types.' },
    ],
    highYield: [
      {
        topic: 'Maxima and minima (including closed-interval global extrema)',
        detail:
          'The single most-asked AOD theme in JEE Main. Find critical points from f′(x) = 0, classify with the second-derivative test, and for a closed interval compare those values with f at the endpoints. The global maximum/minimum can sit at an endpoint even when there is an interior critical point.',
      },
      {
        topic: 'Monotonicity via f′(x) sign',
        detail:
          'Determining the intervals where a function increases or decreases, and parameter problems ("find a so that f is increasing for all x"). These reduce to a quadratic/sign inequality in f′ and appear in nearly every paper.',
      },
      {
        topic: 'LMVT and Rolle for inequalities (Advanced)',
        detail:
          'Advanced uses the mean value theorems to prove inequalities such as |sin a − sin b| ≤ |a − b|, or to show an equation has exactly one root in an interval (Rolle on a constructed function). Recognising "prove this inequality" as an MVT problem is the key skill.',
      },
      {
        topic: 'Tangent, normal and angle of intersection',
        detail:
          'Equation of tangent/normal at a point, tangent from an external point (solve for the point of contact), and the angle between two curves (via the slopes at intersection). Direct, formulaic Main marks once the external-point case is practised.',
      },
    ],
    traps: [
      'Forgetting to test the endpoints for the global maximum/minimum on a closed interval — the interior critical point is not always the answer.',
      'Trusting the second-derivative test when f″(c) = 0. It is inconclusive there; fall back to the first-derivative (sign-change) test or higher derivatives.',
      'Applying Rolle\'s theorem or LMVT without first checking continuity on [a, b] and differentiability on (a, b). A function that fails a hypothesis can have no such c, and JEE sets these counterexamples deliberately.',
      'Confusing "tangent at a given point" with "tangent from an external point". The external-point case has an unknown point of contact and usually yields two tangents, not one.',
    ],
    faqs: [
      {
        q: 'How many questions come from Application of Derivatives in JEE Main?',
        a: 'Typically 2–3 questions per paper (about 6–8% of the Maths section), mostly direct: tangent/normal, increasing–decreasing intervals, and maxima/minima. It is consistently one of the highest-frequency calculus chapters in Main.',
      },
      {
        q: 'Is Application of Derivatives important for JEE Advanced?',
        a: 'Yes, but in a different way. Advanced asks fewer standalone AOD questions, yet uses derivatives as the tool for its hardest reasoning — proving inequalities and the existence of roots with LMVT/Rolle, and multi-step optimisation. The chapter is unskippable for Advanced even though its raw question count looks modest.',
      },
      {
        q: 'Which topic in Application of Derivatives is most important?',
        a: 'Maxima and minima — especially global extrema on a closed interval and optimisation word problems — is the most-tested theme in JEE Main. For Advanced, add the mean value theorems (Rolle and LMVT) used to prove inequalities and root existence.',
      },
      {
        q: 'Why is Application of Derivatives considered hard?',
        a: 'The direct Main questions are not hard; the difficulty is in the Advanced applications — recognising that an inequality should be attacked with LMVT, or that a root-existence claim needs Rolle on a cleverly constructed function. Once you map each question type to its tool, the chapter becomes systematic.',
      },
    ],
  },

  'jee-physics-fluid-mechanics': {
    overview:
      'Fluid Mechanics (the NCERT "Mechanical Properties of Fluids" chapter) is a quiet over-performer: in JEE Main it is a 1–2 question, mostly formula-direct scorer, but in JEE Advanced it punches well above its question count. Advanced typically asks just one fluids question, yet it is frequently conceptual and fused — a floating body executing SHM, Bernoulli combined with continuity, or viscous/terminal-velocity reasoning. So the Main strategy is "drill the standard formulas for speed," while the Advanced strategy is "understand the concept well enough to handle it inside another chapter."',
    examSplit: [
      { exam: 'JEE Main', weightage: '~3–4% of Physics', questions: '1–2 per shift', nature: 'Direct: pressure/buoyancy, Bernoulli & Torricelli, Stokes terminal velocity, surface tension & capillarity' },
      { exam: 'JEE Advanced', weightage: 'usually ~1 question but high-value', questions: '~1, conceptual/fused', nature: 'Floating-body SHM, Bernoulli + continuity, viscous flow, excess pressure in drops/bubbles' },
    ],
    correction:
      'You may see "~9% of Advanced is fluids" quoted — that overstates a typical paper, where fluids is usually one question. But do not under-prepare it either: that single Advanced question is often conceptual and fused with SHM or thermodynamics, so it rewards understanding far more than its raw count suggests.',
    studyOrder: [
      { step: 'Pressure and Pascal\'s law', detail: 'Hydrostatic pressure P = P₀ + ρgh, the difference between gauge and absolute pressure, and Pascal\'s law (hydraulic lift). Getting gauge-vs-absolute straight here prevents a whole class of later errors.' },
      { step: 'Buoyancy and floatation', detail: 'Archimedes\' principle: upthrust = weight of displaced fluid. For a floating body the fraction submerged = ρ_body / ρ_fluid. This single ratio answers most floatation questions in one line.' },
      { step: 'Continuity and Bernoulli', detail: 'A₁v₁ = A₂v₂ (continuity) and P + ½ρv² + ρgh = constant (Bernoulli). Always pair them — most Bernoulli questions need continuity to eliminate one velocity. Remember Bernoulli holds only for non-viscous, incompressible, streamline flow.' },
      { step: 'Applications: Venturi and Torricelli', detail: 'Venturi meter (flow rate from a pressure difference) and Torricelli\'s law for efflux, v = √(2gh). These are direct consequences of Bernoulli and recur as Main numericals.' },
      { step: 'Viscosity and Stokes\' law', detail: 'Viscous drag F = 6πηrv and terminal velocity v_t = 2r²(ρ − σ)g/9η for a sphere falling through a fluid. The dependence v_t ∝ r² (not r) is the most-tested point.' },
      { step: 'Surface tension and capillarity', detail: 'Excess pressure inside a drop (2T/r) versus a soap bubble (4T/r, two surfaces), and capillary rise h = 2T cosθ/ρgr. The drop-vs-bubble factor and the 1/r dependence of capillary rise are the recurring questions.' },
    ],
    highYield: [
      {
        topic: 'Bernoulli\'s theorem with continuity',
        detail:
          'The most-tested fluids theme. Combine P + ½ρv² + ρgh = constant with A₁v₁ = A₂v₂ to solve flow-speed and pressure-difference problems (aerofoil lift, Venturi, a tank emptying through a hole). Torricelli\'s v = √(2gh) is just Bernoulli applied to efflux.',
      },
      {
        topic: 'Floatation: fraction submerged',
        detail:
          'A body floating in a fluid has fraction submerged = ρ_body / ρ_fluid. Iceberg-in-water and block-in-two-liquids questions reduce to this ratio. If the body is pushed down and released, it executes SHM about the floating position.',
      },
      {
        topic: 'Terminal velocity (Stokes\' law)',
        detail:
          'v_t = 2r²(ρ − σ)g/9η. The key exam point is v_t ∝ r² — doubling the radius quadruples the terminal velocity. Used for raindrops, ball-bearing-in-glycerine and Millikan-style setups.',
      },
      {
        topic: 'Surface tension: excess pressure and capillary rise',
        detail:
          'Excess pressure = 2T/r for a liquid drop and 4T/r for a soap bubble (two surfaces). Capillary rise h = 2T cosθ/ρgr, so a narrower tube gives a higher rise. The drop-vs-bubble factor of 2 is a classic single-correct trap.',
      },
    ],
    traps: [
      'Applying Bernoulli\'s equation to viscous or turbulent flow. It is valid only for an ideal fluid in steady, streamline, incompressible flow — viscous-flow questions need Stokes\' law or Poiseuille reasoning instead.',
      'Using excess pressure 2T/r for a soap bubble. A bubble has two surfaces, so its excess pressure is 4T/r; a liquid drop (one surface) is 2T/r.',
      'Mixing up gauge and absolute pressure. P = P₀ + ρgh is the absolute pressure; the gauge pressure is just ρgh. Bernoulli and force problems must use a consistent choice.',
      'Thinking terminal velocity scales with radius. Stokes\' law gives v_t ∝ r², so a drop of twice the radius falls four times as fast at terminal velocity.',
    ],
    faqs: [
      {
        q: 'How many questions come from Fluid Mechanics in JEE Main?',
        a: 'Usually 1–2 per shift (about 3–4% of the Physics section), and they are mostly formula-direct: pressure and buoyancy, Bernoulli/Torricelli, terminal velocity from Stokes\' law, and surface tension or capillarity. Steady PYQ practice makes it one of the quicker chapters to lock in.',
      },
      {
        q: 'Is Fluid Mechanics important for JEE Advanced?',
        a: 'More than its question count suggests. Advanced usually asks one fluids question, but it is often conceptual and fused — a floating body oscillating in SHM, Bernoulli combined with continuity, or a viscous-flow/terminal-velocity argument. It rewards genuine understanding rather than plug-and-chug, so do not treat it as optional for Advanced.',
      },
      {
        q: 'Which topic in Fluid Mechanics is most important?',
        a: 'Bernoulli\'s theorem (paired with the equation of continuity) is the single most-tested theme, followed by buoyancy/floatation, terminal velocity via Stokes\' law, and surface tension (excess pressure and capillary rise). Bernoulli and continuity together cover the largest share of questions.',
      },
      {
        q: 'What is the difference between the excess pressure in a drop and a soap bubble?',
        a: 'A liquid drop has a single surface, so its excess pressure is 2T/r. A soap bubble has two surfaces (inner and outer), so its excess pressure is 4T/r — twice that of a drop of the same radius. This factor-of-two distinction is a frequent JEE single-correct trap.',
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
      },
    ],
  },

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

  'jee-physics-work-energy-power': {
    overview:
      'Work, Energy & Power is the chapter that quietly decides more marks than its headline weightage suggests, because the work-energy theorem is a tool you reuse across the whole of mechanics — rotation, SHM, circular motion and collisions all lean on it. As a standalone chapter JEE Main asks 2–3 questions in most shifts (direct: work by a variable force, energy conservation with springs, power, potential-energy curves). JEE Advanced rarely asks a "pure" work-energy question; instead it fuses energy conservation with rolling, springs or a collision into one multi-step problem. The strategy that follows: in Main, drill the standard numerical types for speed; for Advanced, the skill is choosing the energy method over force-and-acceleration to avoid solving differential equations.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~5–7% of Physics', questions: '2–3 per shift', nature: 'Direct: work-energy theorem, spring/gravitational PE conservation, power, PE-curve equilibrium' },
      { exam: 'JEE Advanced', weightage: '~3–5% of Physics', questions: '1–2 (usually fused)', nature: 'Energy conservation combined with rolling, SHM/springs, variable force or collision' },
    ],
    correction:
      'Several weightage pages quote "3.33% / 1–2 questions" for this chapter. That undersells it on two counts: recent JEE Main shift analysis shows 2–3 questions in most shifts, and — more importantly — the work-energy theorem is the fastest route through dozens of questions that are "officially" filed under rotation, circular motion or SHM. Counted honestly as a method, its real footprint on the paper is larger than its chapter percentage.',
    studyOrder: [
      { step: 'Work by constant and variable forces', detail: 'W = F·d for constant force, W = ∫F·dx (the area under an F–x graph) for a variable one. Spring work −½kx² is the most-asked variable-force case. Getting the sign of work (angle between force and displacement) right is the foundation for everything else.' },
      { step: 'Work-energy theorem', detail: 'W_net = ΔKE = ½mv² − ½mu². The single most useful relation in mechanics: it finds final speed without ever computing acceleration. Stress that it uses the NET work of ALL forces, including friction and normal/tension where they do work.' },
      { step: 'Conservative forces and potential energy', detail: 'Gravitational PE = mgh, spring PE = ½kx², and F = −dU/dx. This is the bridge to energy conservation and to reading potential-energy curves.' },
      { step: 'Conservation of mechanical energy', detail: 'When only conservative forces act, KE + PE is constant. When friction or a non-conservative force is present, the correct statement is ΔKE + ΔPE = W_non-conservative — forgetting this term is the classic error.' },
      { step: 'Power and PE curves last', detail: 'Instantaneous power P = F·v = dW/dt, average power = total work / time; then potential-energy curves (stable/unstable equilibrium from dU/dx = 0 and the sign of d²U/dx²). These round out the Main question types.' },
    ],
    highYield: [
      {
        topic: 'Work-energy theorem with friction and springs',
        detail:
          'W_net = ΔKE. The high-frequency setups: a block pushed against a spring (½kx² stored), a block sliding on a rough surface (friction does −μmgd of work), and a body launched up an incline. Write every force\'s work, sum to W_net, set equal to ΔKE.',
      },
      {
        topic: 'Conservation of energy on tracks and vertical circles',
        detail:
          'For a body in a vertical circle (loop, ball on a string), energy conservation plus the centripetal condition gives the minimum speeds: v_top = √(gr) and v_bottom = √(5gr). These two results, with tension = 0 at the top of a string, answer almost every vertical-circle question directly.',
      },
      {
        topic: 'Power: P = F·v',
        detail:
          'Instantaneous power of a force is F·v (dot product). Common questions: power delivered by gravity to a falling body (mgv), a vehicle moving at constant speed against resistance (P = F·v with F the resistive force), and average vs instantaneous power. Watch units — 1 horsepower ≈ 746 W.',
      },
      {
        topic: 'Potential-energy curves and equilibrium',
        detail:
          'From a U(x) graph: force F = −dU/dx (downhill); equilibrium where dU/dx = 0; stable if d²U/dx² > 0 (a minimum, like a valley), unstable if < 0 (a maximum). JEE Main asks "identify the stable equilibrium point" or "find the force from this U(x)" most years.',
      },
    ],
    traps: [
      'Applying conservation of mechanical energy when a non-conservative force acts. If friction is present, KE + PE is NOT conserved — you must write ΔKE + ΔPE = W_friction (a negative number). This is the single most common mistake in the chapter.',
      'Assuming the normal force and tension never do work. They do no work when perpendicular to motion, but in a moving frame or on a moving support (a block on a moving wedge, a person in a lift) they can transfer energy — check the displacement, not a memorised rule.',
      'Forgetting that the work-energy theorem uses NET work. Students compute the work of the applied force only and equate it to ΔKE; friction and gravity must be included.',
      'Mixing up average and instantaneous power. Instantaneous power is F·v at an instant; average power is total work divided by total time. For a body speeding up, these are different numbers.',
    ],
    faqs: [
      {
        q: 'How many questions come from Work, Energy & Power in JEE Main?',
        a: 'About 2–3 questions in most JEE Main shifts (roughly 5–7% of the Physics section). They are mostly direct — the work-energy theorem, energy conservation with springs or gravity, power, and reading potential-energy curves. On top of the standalone questions, the work-energy method is the fastest tool for many questions filed under rotation, circular motion and SHM, so its real value is higher than the chapter percentage.',
      },
      {
        q: 'When should I use the work-energy theorem instead of Newton\'s laws?',
        a: 'Use energy methods when you need a final speed but don\'t care about the time taken or the detailed acceleration — especially with variable forces (springs), curved or complicated paths where only the endpoints matter, or when force-and-acceleration would mean solving a differential equation. Use Newton\'s laws (F = ma) when you specifically need acceleration, time, or the force at a particular instant. JEE Advanced rewards spotting the energy shortcut.',
      },
      {
        q: 'What are the minimum speeds for a vertical circle?',
        a: 'For a body completing a vertical circle on a string or inside a loop, the minimum speed at the top is v_top = √(gr) (where tension/normal force just reaches zero) and, by energy conservation, the minimum speed at the bottom is v_bottom = √(5gr). These two results plus "tension = 0 at the top" solve almost every vertical-circle question.',
      },
      {
        q: 'Is Work, Energy & Power a scoring chapter for JEE?',
        a: 'Yes — in JEE Main it is one of the most reliable scorers because the questions are formula-direct and the work-energy theorem gives quick answers. For JEE Advanced the chapter rarely appears alone, but the energy method it teaches is essential for the multi-concept rotation/SHM/collision problems where Advanced actually lives, so the chapter is unskippable either way.',
      },
    ],
  },

  'jee-chemistry-atomic-structure': {
    overview:
      'Atomic Structure is a foundation chapter that pays back twice: it is directly examined, and its ideas (quantum numbers, electronic configuration, effective nuclear charge) underpin the periodic table, chemical bonding and coordination chemistry. JEE Main asks 2–3 questions a year — quantum-number rules, electronic configurations with their exceptions, hydrogen-spectrum/Rydberg numericals, and the dual-nature relations (de Broglie, photoelectric, Heisenberg) it shares word-for-word with Physics. JEE Advanced asks fewer standalone questions but goes deeper into spectra, node counting and the quantum-number constraints. Because much of it is rule-based recall plus a few standard formulae, it is a high marks-per-hour chapter.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~5–6% of Chemistry', questions: '2–3 per year', nature: 'Direct: quantum numbers, electronic config + exceptions, Rydberg/Bohr numericals, de Broglie/photoelectric' },
      { exam: 'JEE Advanced', weightage: '~2–3% of Chemistry', questions: '1–2 per year', nature: 'Deeper: emission spectra, node counting, quantum-number limits, often fused with periodic properties' },
    ],
    correction:
      'You will see "6–8% / 3–4 questions" and "6.6% / 2 questions" quoted side by side — the spread is real and it comes from double-counting. The dual-nature topics (photoelectric effect, de Broglie wavelength, Heisenberg uncertainty) sit in BOTH the Physics and Chemistry syllabi, so some charts credit them to Chemistry and inflate the figure. The chemistry-specific load (orbitals, configuration, spectra) is about 2–3 questions; learn the shared dual-nature block once and claim the marks in both subjects.',
    studyOrder: [
      { step: 'Bohr model and the hydrogen spectrum', detail: 'r_n ∝ n²/Z, E_n = −13.6 Z²/n² eV, and the Rydberg formula for line positions. Most "wavelength of the n=3→2 line" questions are one substitution. Bohr is exact only for one-electron species (H, He⁺, Li²⁺).' },
      { step: 'Quantum numbers and orbital shapes', detail: 'n, l, m, s and the rules linking them; the shapes of s/p/d orbitals; and node counting — total nodes = n−1, radial = n−l−1, angular = l. This is the gate to electronic configuration.' },
      { step: 'Electronic configuration', detail: 'Aufbau order, Pauli exclusion, Hund\'s rule of maximum multiplicity — then the half-filled/fully-filled stability exceptions (Cr = [Ar]3d⁵4s¹, Cu = [Ar]3d¹⁰4s¹). Crucially, electrons FILL 4s before 3d but are REMOVED from 4s first when forming ions.' },
      { step: 'Dual nature of matter and radiation', detail: 'de Broglie λ = h/mv = h/√(2mKE) = h/√(2mqV); the photoelectric effect (work function, stopping potential, threshold frequency). Shared with Physics — learn it once.' },
      { step: 'Heisenberg uncertainty last', detail: 'Δx·Δp ≥ h/4π. Usually a single direct-substitution question; do it after the rest so the constant and the "≥" are fresh.' },
    ],
    highYield: [
      {
        topic: 'Hydrogen-spectrum / Rydberg and Bohr relations',
        detail:
          '1/λ = R Z² (1/n₁² − 1/n₂²) for line positions; E_n = −13.6 Z²/n² eV for energy levels; r_n ∝ n²/Z. Number of spectral lines when an electron de-excites from level n is n(n−1)/2. These cover the bulk of the numerical questions.',
      },
      {
        topic: 'Quantum numbers and nodes',
        detail:
          'For an orbital: total nodes = n − 1, radial (spherical) nodes = n − l − 1, angular (nodal planes) = l. Maximum electrons in a shell = 2n², in a subshell = 2(2l+1). "How many radial nodes in 3p?" (= 3−1−1 = 1) is a recurring direct ask.',
      },
      {
        topic: 'Electronic configuration and its exceptions',
        detail:
          'Cr is [Ar]3d⁵4s¹ and Cu is [Ar]3d¹⁰4s¹ because half-filled and fully-filled d-subshells are extra stable. For transition-metal ions, remove 4s electrons before 3d (Fe²⁺ = [Ar]3d⁶, not 3d⁴4s²). This single rule is tested almost every year.',
      },
      {
        topic: 'de Broglie and photoelectric numericals',
        detail:
          'λ = h/√(2mKE) = h/√(2mqV) gives the wavelength of an accelerated electron in one step. Photoelectric: KE_max = hν − φ, and stopping potential V₀ relates as eV₀ = hν − φ. Shared verbatim with Physics — these are free marks if you prepared the topic in either subject.',
      },
    ],
    traps: [
      'Removing electrons in filling order instead of removal order when writing ion configurations. Electrons fill 4s before 3d, but for cations the 4s electrons leave FIRST — Fe²⁺ is [Ar]3d⁶, not [Ar]3d⁴4s².',
      'Applying the Bohr model to multi-electron atoms. Bohr\'s formulae (E_n = −13.6 Z²/n², etc.) are exact only for single-electron species: H, He⁺, Li²⁺. Using them for, say, lithium\'s outer electron gives a wrong answer.',
      'Confusing total, radial and angular nodes. Total = n−1, radial = n−l−1, angular = l. Many students quote one when the question asks for another.',
      'Forgetting the Cr and Cu exceptions, or extending them to every element. Only the half-filled (3d⁵) and fully-filled (3d¹⁰) stabilities drive the anomalies — Mo and Ag follow Cr/Cu, but most other elements do not.',
    ],
    faqs: [
      {
        q: 'How many questions come from Atomic Structure in JEE?',
        a: 'About 2–3 questions a year in JEE Main (roughly 5–6% of Chemistry) and 1–2 in JEE Advanced. Published weightages vary from "2" to "4" because the dual-nature topics (photoelectric effect, de Broglie wavelength) overlap with Physics and are sometimes counted twice. The chemistry-specific load is steady at 2–3 questions.',
      },
      {
        q: 'What are the most important topics in Atomic Structure for JEE?',
        a: 'Quantum-number rules and node counting, electronic configuration with the Cr/Cu exceptions and the fill-vs-remove order for ions, the hydrogen-spectrum/Rydberg and Bohr energy formulae, and the de Broglie/photoelectric numericals. Together these account for almost every question the chapter has asked in recent papers.',
      },
      {
        q: 'How does Atomic Structure overlap with Physics?',
        a: 'The photoelectric effect, de Broglie wavelength and Heisenberg uncertainty principle appear, with the same formulae, in both the Physics (Dual Nature / Modern Physics) and Chemistry syllabi. If you prepare them in one subject you have effectively prepared a chunk of the other — a genuine time saving worth planning around.',
      },
      {
        q: 'How do I count the nodes in an orbital?',
        a: 'Total nodes = n − 1, radial (spherical) nodes = n − l − 1, and angular nodes (nodal planes) = l. For example a 3p orbital (n = 3, l = 1) has 1 radial node, 1 angular node and 2 total nodes. Read the question carefully — it usually asks for one specific type.',
      },
    ],
  },

  'jee-maths-vectors': {
    overview:
      'Vectors is best treated as the algebraic engine of the whole geometry block: dot product, cross product and the scalar triple product are the tools you then use to handle lines, planes and 3D geometry. As a standalone chapter JEE Main asks 1–2 questions (often combined with 3D Geometry in the same problem) on the dot/cross product, projection and coplanarity. JEE Advanced almost never asks a "pure vectors" question; it folds vector methods into 3D-geometry problems — shortest distance between lines, foot of perpendicular, plane through three points. Because the operations are mechanical once understood, vectors give a high marks-per-hour return and make the rest of coordinate geometry far easier.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~4–6% of Maths', questions: '1–2 per year', nature: 'Direct: dot/cross product, projection, scalar triple product (coplanarity, volume)' },
      { exam: 'JEE Advanced', weightage: '~4–5% of Maths', questions: '1–2 (usually fused with 3D)', nature: 'Vector methods applied to lines/planes, triple products, geometric identities' },
    ],
    correction:
      'Weightage charts often quote "Vectors & 3D Geometry ≈ 6.3% + 6.6%, about 3–4 questions" — but that is two SEPARATE chapters added together. Vectors on its own is usually 1–2 questions. The reason it still matters far more than that count suggests: every 3D-geometry question (lines, planes, shortest distance) is solved with vector tools, so weak vectors quietly costs you marks in 3D too. Prepare them back-to-back, vectors first.',
    studyOrder: [
      { step: 'Vector basics and the section formula', detail: 'Addition, scalar multiplication, position vectors, and the section formula in vector form. Master collinearity (a, b, c collinear if AB and AC are parallel) before moving on.' },
      { step: 'Dot (scalar) product', detail: 'a·b = |a||b|cosθ. Uses: angle between vectors, the projection of a on b ( = a·b / |b| ), the test for perpendicularity (a·b = 0), and work done. Also the expansion |a ± b|² = |a|² + |b|² ± 2a·b.' },
      { step: 'Cross (vector) product', detail: 'a×b = |a||b|sinθ n̂, with |a×b| = area of the parallelogram (½|a×b| for a triangle). Uses: a vector perpendicular to two others, area, and the test for parallel vectors (a×b = 0). Remember a×b = −b×a.' },
      { step: 'Scalar triple product', detail: '[a b c] = a·(b×c) = the volume of the parallelepiped. It is zero exactly when the three vectors are coplanar — the single most-asked vector idea in JEE. It is cyclic: [a b c] = [b c a] = [c a b].' },
      { step: 'Vector triple product and applications', detail: 'a×(b×c) = (a·c)b − (a·b)c (the "BAC − CAB" rule). Then apply everything to lines and planes — this is the handover to 3D Geometry.' },
    ],
    highYield: [
      {
        topic: 'Scalar triple product: coplanarity and volume',
        detail:
          '[a b c] = a·(b×c), computed as the determinant of the three vectors\' components. It equals the volume of the parallelepiped they span, and [a b c] = 0 ⟺ the vectors are coplanar. "Find λ so that these three vectors are coplanar" is the most frequent vector question in JEE Main.',
      },
      {
        topic: 'Dot product — angle, projection, perpendicularity',
        detail:
          'a·b = |a||b|cosθ. The scalar projection of a onto b is a·b/|b| and the vector projection is (a·b/|b|²)b. Perpendicular vectors have a·b = 0. These appear both directly and as a step inside larger problems.',
      },
      {
        topic: 'Cross product — area and perpendicular direction',
        detail:
          '|a×b| is the area of the parallelogram with sides a and b, so the triangle area is ½|a×b|. a×b is perpendicular to both a and b (direction by the right-hand rule). Used for areas, normals to planes, and torque-style setups.',
      },
      {
        topic: 'Vector form of lines and planes (the 3D handover)',
        detail:
          'Line: r = a + λb. Plane: r·n̂ = d. Shortest distance between skew lines = |(a₂ − a₁)·(b₁×b₂)| / |b₁×b₂| — a scalar triple product in disguise. This is exactly where Advanced uses vectors.',
      },
    ],
    traps: [
      'Treating the cross product as commutative. a×b = −b×a (it anticommutes); swapping the order flips the sign of the result and of any area\'s orientation.',
      'Confusing scalar and vector projection. The scalar projection of a on b is a·b/|b| (a number); the vector projection multiplies that by the unit vector b̂. Read which the question wants.',
      'Using the scalar triple product without respecting its cyclic order. [a b c] = [b c a] = [c a b], but a single swap of two vectors negates it: [a c b] = −[a b c].',
      'Forgetting the cross term in |a + b|². It expands to |a|² + |b|² + 2a·b, not |a|² + |b|²; the 2a·b term is where the angle between the vectors enters.',
    ],
    faqs: [
      {
        q: 'How many questions come from Vectors in JEE Main?',
        a: 'Usually 1–2 questions a year, often combined with 3D Geometry in the same problem. The "3–4 questions" figure you see online is for Vectors AND 3D Geometry counted together (they are separate chapters). Even at 1–2 questions, vectors is worth prioritising because it is the toolkit for every 3D-geometry question.',
      },
      {
        q: 'Should I study Vectors or 3D Geometry first?',
        a: 'Vectors first, then 3D Geometry. Lines, planes, shortest distance and foot-of-perpendicular problems are all solved with the dot product, cross product and scalar triple product. If your vectors are weak, 3D Geometry becomes much harder than it needs to be — so the order genuinely matters.',
      },
      {
        q: 'What is the scalar triple product used for in JEE?',
        a: 'Two things, both common: it gives the volume of the parallelepiped formed by three vectors, and it is zero exactly when the three vectors are coplanar. The most frequent JEE Main vector question is a coplanarity condition — "find the value of λ for which these vectors are coplanar" — solved by setting [a b c] = 0.',
      },
      {
        q: 'Is Vectors an easy chapter to score in JEE?',
        a: 'Yes — the operations (dot, cross, triple product) are mechanical once you understand them, so it is high marks-per-hour and far less error-prone than calculus. The bonus is leverage: the same tools carry straight into 3D Geometry, so the time you invest pays off across two chapters\' worth of questions.',
      },
    ],
  },

  'neet-biology-animal-kingdom': {
    overview:
      'Animal Kingdom is a high-return recall chapter: NEET asks about 2–3 questions from it in most years, and they are almost entirely from NCERT — diagnostic features of a phylum, classify-this-organism, or a comparison of characters. The trap is that students try to memorise every phylum in isolation; the chapter is actually built on a small ladder of classification criteria (organisation → symmetry → germ layers → coelom → segmentation → notochord), and once you fix that ladder, every phylum slots in and the examples become recall. The questions reward accuracy with NCERT wording over reasoning, so it is one of the most scoreable chapters in the Diversity unit.',
    examSplit: [
      { exam: 'NEET (recent avg)', weightage: '~4–6% of Biology', questions: '2–3 per year (~8–12 marks)', nature: 'Mostly NCERT-direct: diagnostic features, classify-the-organism, character comparison' },
      { exam: 'Non-chordate vs chordate', weightage: '—', questions: 'Arthropoda & Chordata most-asked', nature: 'Arthropoda (largest phylum) and vertebrate classes (heart chambers) dominate; example-based MCQs ~60%' },
    ],
    correction:
      'You will see "~13% / 5–6 questions" quoted for Animal Kingdom. That figure is the whole Diversity in the Living World group — Living World, Biological Classification, Plant Kingdom AND Animal Kingdom together. Animal Kingdom on its own is about 2–3 questions in recent NEET papers. It is still worth full attention because it is near-pure recall, but don\'t over-allocate time on the strength of an inflated number.',
    studyOrder: [
      { step: 'Fix the basis of classification first', detail: 'Levels of organisation (cellular → tissue → organ → organ-system) → symmetry (asymmetrical/radial/bilateral) → germ layers (diplo-/triploblastic) → body cavity (acoelomate/pseudocoelomate/coelomate) → segmentation → notochord. Almost every question is one rung of this ladder, so learn it before any phylum.' },
      { step: 'Non-chordate phyla in order', detail: 'Porifera → Cnidaria → Ctenophora → Platyhelminthes → Aschelminthes → Annelida → Arthropoda → Mollusca → Echinodermata → Hemichordata. For each, lock ONE diagnostic feature and two examples — that is what NEET asks.' },
      { step: 'Chordata — the three subphyla', detail: 'The four defining chordate features (notochord, dorsal hollow nerve cord, pharyngeal gill slits, post-anal tail), then Urochordata, Cephalochordata and Vertebrata. The distinction "notochord persists vs replaced by vertebral column" is a favourite.' },
      { step: 'Vertebrate classes and heart chambers', detail: 'Cyclostomata → Chondrichthyes → Osteichthyes → Amphibia → Reptilia → Aves → Mammalia, with heart chambers (fish 2, amphibians & most reptiles 3, crocodile/birds/mammals 4) and oviparous/viviparous status. This block carries the most marks.' },
      { step: 'Example drill last', detail: 'Since ~60% of the marks are example-based ("which of these belongs to Arthropoda"), finish with flashcard recall of the standard NCERT examples for every class and phylum.' },
    ],
    highYield: [
      {
        topic: 'Diagnostic feature per phylum (one line each)',
        detail:
          'Porifera — canal system & spongin; Cnidaria — cnidoblasts, diploblastic, tissue-level; Platyhelminthes — flame cells, acoelomate, dorso-ventrally flat; Aschelminthes — pseudocoelomate, complete gut; Annelida — metameric segmentation, closed circulation; Arthropoda — jointed appendages, open circulation, LARGEST phylum; Mollusca — radula, soft body with shell; Echinodermata — water vascular system, radial adult. NEET lifts these almost verbatim.',
      },
      {
        topic: 'Coelom: acoelomate vs pseudocoelomate vs coelomate',
        detail:
          'Acoelomate (no body cavity) — Platyhelminthes; pseudocoelomate (cavity not lined by mesoderm) — Aschelminthes (roundworms); coelomate (true mesoderm-lined cavity) — Annelida onward. This three-way split is one of the most repeated single-fact questions in the chapter.',
      },
      {
        topic: 'Chordate features and the vertebrate classes',
        detail:
          'All chordates have, at some stage, a notochord, a dorsal hollow nerve cord, pharyngeal gill slits and a post-anal tail. Then class-level recall: cartilaginous vs bony fish, amphibian vs reptile (eggs, skin, heart), Aves and Mammalia features. Heart chambers and oviparity are the most-tested attributes.',
      },
      {
        topic: 'Heart chambers across vertebrates',
        detail:
          'Fishes — 2-chambered; amphibians and most reptiles — 3-chambered; crocodiles, birds and mammals — 4-chambered. The crocodile (a reptile with a 4-chambered heart) is the classic exception NEET loves to test.',
      },
    ],
    traps: [
      'Reversing echinoderm symmetry. Echinoderm LARVAE are bilaterally symmetrical; the ADULTS are radially symmetrical. NEET states it the other way round in distractors to catch fast readers.',
      'Mixing up coelom types: flatworms are acoelomate, roundworms (Aschelminthes) are pseudocoelomate, and earthworms (Annelida) are truly coelomate. Calling a roundworm "coelomate" is a common slip.',
      'Forgetting the crocodile exception. Reptiles are usually 3-chambered, but the crocodile has a 4-chambered heart — yet it is still a reptile, not graded toward birds/mammals.',
      'Assuming all chordates are vertebrates. Urochordata and Cephalochordata are chordates WITHOUT a vertebral column; the notochord is the chordate criterion, not the backbone.',
    ],
    faqs: [
      {
        q: 'How many questions come from Animal Kingdom in NEET?',
        a: 'About 2–3 questions a year in recent NEET papers. The higher "5–6 questions / ~13%" figure you find online refers to the entire Diversity in the Living World unit (Living World, Biological Classification, Plant Kingdom and Animal Kingdom combined). Animal Kingdom alone is 2–3, but because it is near-pure NCERT recall it is among the most dependable marks in Biology.',
      },
      {
        q: 'Which phyla are most important for NEET Animal Kingdom?',
        a: 'Arthropoda (the largest phylum, jointed appendages, open circulation) and Chordata — especially the vertebrate classes and their heart chambers — are the most frequently asked. After those, Annelida (segmentation, closed circulation), Mollusca and Echinodermata recur. But because questions can come from the diagnostic feature of ANY phylum, learn one defining character and two examples for each.',
      },
      {
        q: 'How do I remember the classification of animals for NEET?',
        a: 'Don\'t memorise phyla in isolation — learn the ladder of criteria first: levels of organisation, symmetry, germ layers, body cavity (coelom), segmentation and notochord. Then place each phylum on that ladder with one diagnostic feature and two examples. Almost every NEET question is a single rung of this ladder, so the framework converts memorisation into reasoning.',
      },
      {
        q: 'Is Animal Kingdom a hard chapter for NEET?',
        a: 'It is rated moderate, and it is hard only if you treat it as raw memorisation. The content is large but almost entirely NCERT-direct, with very little reasoning — so accuracy with the exact NCERT wording matters more than cleverness. Build the classification framework, drill the standard examples, and it becomes high, reliable scoring.',
      },
    ],
  },

  'neet-physics-electrostatics': {
    overview:
      'Electrostatics is a high-weight NEET Physics chapter and the gateway to the whole electricity block (Current Electricity, Magnetism, EMI). Counting Electric Charges & Fields together with Electrostatic Potential & Capacitance, NEET draws roughly 3–4 questions a year. The questions split between concept (field lines, Gauss\'s law, why the field inside a conductor is zero) and calculation (Coulomb force with superposition, dipole field/torque, capacitor combinations and energy). It is rated Hard mainly because of the vector addition of fields and the dielectric/capacitor algebra — but the question types repeat, so disciplined practice turns it into a reliable scorer.',
    examSplit: [
      { exam: 'NEET (recent avg)', weightage: '~7–9% of Physics', questions: '3–4 per year (~12–16 marks)', nature: 'Mix of conceptual (field lines, Gauss, conductor) and numerical (Coulomb, dipole, capacitors)' },
      { exam: 'Two NCERT chapters', weightage: '—', questions: 'Charges & Fields ~2 · Potential & Capacitance ~1–2', nature: 'Field/Gauss/Coulomb in the first; potential, capacitor energy & dielectrics in the second' },
    ],
    correction:
      'Several charts quote "~10% / 4–5 questions" for Electrostatics. That number bundles TWO separate NCERT chapters — Electric Charges & Fields AND Electrostatic Potential & Capacitance. Taken as that pair the figure is fair (3–4 questions most years); the charges-and-fields portion alone is closer to 2. Either way it is high-weight, but knowing it is two chapters helps you budget the capacitor/dielectric material properly instead of skimming it.',
    studyOrder: [
      { step: 'Coulomb\'s law and superposition', detail: 'F = kq₁q₂/r² (k = 1/4πε₀), then vector addition of forces from several charges. The skill NEET tests is resolving and adding forces, not the formula itself.' },
      { step: 'Electric field and the dipole', detail: 'E = F/q; field of a point charge, then the dipole: axial E = 2kp/r³, equatorial E = kp/r³, and torque τ = pE sinθ. The 1/r³ dipole dependence (not 1/r²) is a favourite distractor.' },
      { step: 'Field lines, flux and Gauss\'s law', detail: 'Flux Φ = q_enc/ε₀. Use Gauss for symmetric charge distributions: infinite line E = λ/2πε₀r, infinite sheet E = σ/2ε₀, charged conductor surface E = σ/ε₀, and the field inside a conductor = 0.' },
      { step: 'Potential and potential energy', detail: 'V = kq/r (scalar, so add algebraically), potential energy of charge configurations, and the relation E = −dV/dr. Equipotential surfaces are always perpendicular to field lines.' },
      { step: 'Capacitance and dielectrics last', detail: 'C = ε₀A/d, energy U = ½CV² = ½Q²/C, series/parallel combinations, and a dielectric raising capacitance to C′ = KC. This is the second chapter and carries 1–2 questions on its own.' },
    ],
    highYield: [
      {
        topic: 'Coulomb force with superposition',
        detail:
          'F = kq₁q₂/r². Multi-charge problems (a charge at a corner of a square/triangle) need you to add the individual forces as VECTORS. NEET\'s standard setup is three or four charges in a symmetric arrangement — resolve into components and sum.',
      },
      {
        topic: 'Gauss\'s law for standard symmetries',
        detail:
          'Φ = q_enc/ε₀ gives the field instantly for symmetric cases: infinite line λ/2πε₀r, infinite sheet σ/2ε₀, conductor surface σ/ε₀, and zero inside a conductor or inside a uniformly charged spherical SHELL. Knowing which Gaussian surface to choose is the whole skill.',
      },
      {
        topic: 'Electric dipole: field and torque',
        detail:
          'Axial field E = 2kp/r³, equatorial field E = kp/r³ (note both fall as 1/r³, faster than a point charge\'s 1/r²); torque in a uniform field τ = pE sinθ, maximum at 90°; potential energy U = −pE cosθ. Dipole questions appear most years.',
      },
      {
        topic: 'Capacitors: energy, combinations and dielectrics',
        detail:
          'C = ε₀A/d; energy U = ½CV² = ½Q²/C = ½QV. In series, 1/C_eq = Σ1/C and charge is common; in parallel, C_eq = ΣC and voltage is common. A dielectric of constant K raises capacitance to KC. The "energy lost when two capacitors are connected" result is a recurring trap.',
      },
    ],
    traps: [
      'Confusing the field of a sheet with that of a conductor surface. An infinite charged sheet gives E = σ/2ε₀; the surface of a charged conductor gives E = σ/ε₀ — twice as much. The factor of 2 is examined directly.',
      'Assuming the field is zero wherever the potential is zero (or vice versa). At the midpoint between two equal positive charges the field is zero but the potential is not; on the equatorial plane of a dipole the potential is zero but the field is not. They are independent.',
      'Using a 1/r² dependence for a dipole field. A dipole\'s field falls as 1/r³ (both axial and equatorial), faster than a single point charge. Plugging the charge formula into a dipole question is a classic slip.',
      'Forgetting energy is lost when two charged capacitors are connected. Charge is conserved and redistributes to a common potential, but some stored energy is dissipated — so the final energy is LESS than the sum of the initial energies, never equal.',
    ],
    faqs: [
      {
        q: 'How many questions come from Electrostatics in NEET?',
        a: 'Roughly 3–4 questions a year when you count both NCERT chapters — Electric Charges & Fields and Electrostatic Potential & Capacitance — which is what most "10% weightage" figures actually refer to. The charges-and-fields part alone is about 2 questions, and capacitance adds 1–2. It is consistently one of the higher-weight chapters in NEET Physics.',
      },
      {
        q: 'Is Electrostatics hard to score in NEET?',
        a: 'It is rated Hard, mainly because of the vector addition of forces/fields and the capacitor–dielectric algebra. But the question types repeat year to year — Coulomb superposition, dipole field/torque, Gauss-law symmetries, capacitor combinations — so with focused practice on those standard setups it becomes a dependable high scorer rather than a stumbling block.',
      },
      {
        q: 'When should I use Gauss\'s law instead of Coulomb\'s law?',
        a: 'Use Gauss\'s law when the charge distribution is symmetric — an infinite line, an infinite sheet, a sphere or a charged conductor — because you can pick a Gaussian surface where the field is uniform and pull E out of the flux integral. Use Coulomb\'s law (with vector superposition) for a small number of discrete point charges where there is no such symmetry.',
      },
      {
        q: 'Why is the electric field inside a conductor zero?',
        a: 'In electrostatic equilibrium the free charges in a conductor rearrange on its surface until the field they create exactly cancels any external field inside the material — so the net field inside is zero and the whole conductor is at one potential. This is why any charge given to a conductor resides on its outer surface, a fact NEET tests directly.',
      },
    ],
  },

  'jee-chemistry-d-block': {
    overview:
      'd-Block Elements (the transition metals) is one of the most reliable scoring chapters in JEE Inorganic Chemistry because the question types repeat and they are NCERT-rooted: electronic configuration anomalies, variable oxidation states, magnetic moment, colour, and the chemistry of K₂Cr₂O₇ and KMnO₄. In JEE Main it is a steady 1–2 questions almost every year, usually direct and single-fact. In JEE Advanced it appears most years (1–2 questions) and runs deeper — fused with coordination chemistry, redox stoichiometry of the dichromate/permanganate oxidations, and reasoning on why a property trends the way it does. Because the answers are recall plus one short step, it gives a high marks-per-hour return.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~3% of Chemistry', questions: '1–2 per year', nature: 'Direct: Cr/Cu config, ion config, spin-only μ, identify oxidation state/colour, K₂Cr₂O₇/KMnO₄ facts' },
      { exam: 'JEE Advanced', weightage: '~3% of Chemistry', questions: '1–2 per year', nature: 'Conceptual + fused with coordination; redox stoichiometry of MnO₄⁻/Cr₂O₇²⁻, trend reasoning, magnetic/colour origin' },
    ],
    correction:
      'Most weightage pages quote one figure for "d AND f block" together (~2.8%, about 1 question in Main). That bundles two different chapters. The d-block (transition metals) carries nearly all of that weight and the real exam value; the f-block (lanthanides/actinides) is mostly a short recall add-on — lanthanide contraction, the +3 common state, a few oxidation-state facts. Read the combined number as "mostly d-block," and do not under-prepare the transition-metal redox chemistry because the headline figure looks small.',
    studyOrder: [
      { step: 'Electronic configuration and the Cr/Cu exceptions', detail: 'Cr is [Ar]3d⁵4s¹ and Cu is [Ar]3d¹⁰4s¹ (half- and fully-filled stability). For ions, remove the 4s electrons before 3d — so Fe²⁺ is 3d⁶, Fe³⁺ is 3d⁵. Everything downstream (magnetic moment, colour, oxidation state) depends on getting this right first.' },
      { step: 'Trends across the 3d series', detail: 'Atomic/ionic radii (the irregular dip and near-constancy), ionization enthalpy, and why variable oxidation states arise (close 3d/4s energies). These trend questions are pure Main marks.' },
      { step: 'Why coloured and why magnetic', detail: 'Colour comes from d–d transitions, which need a partially filled d-subshell. Magnetic moment is the spin-only value μ = √(n(n+2)) BM from the number of unpaired electrons. Tie the configuration to both properties.' },
      { step: 'Catalytic, interstitial and alloy behaviour', detail: 'Variable oxidation states and the ability to adsorb on the surface explain catalysis; small atoms (H, C, N) trapped in the lattice give interstitial compounds; similar radii give alloys. Short, high-yield recall.' },
      { step: 'K₂Cr₂O₇ and KMnO₄ last', detail: 'Preparation and, above all, their oxidising reactions in acidic and basic medium — with the n-factors. This is the single most examined block in the chapter and ties redox stoichiometry to the inorganic facts.' },
    ],
    highYield: [
      {
        topic: 'Configurations of atoms and ions (remove 4s first)',
        detail:
          'The most frequent Main question. Know the Cr and Cu exceptions, then apply "remove 4s before 3d" for cations: Mn²⁺ = 3d⁵ (μ = 5.92 BM, the maximum for the series), Fe³⁺ = 3d⁵, Cu²⁺ = 3d⁹ (one unpaired, μ = 1.73 BM). A large share of magnetic-moment questions are this one rule plus √(n(n+2)).',
      },
      {
        topic: 'Spin-only magnetic moment',
        detail:
          'μ = √(n(n+2)) BM where n = number of unpaired electrons gives the ladder 0, 1.73, 2.83, 3.87, 4.90, 5.92 BM for n = 0–5. Working backward from a given μ to identify the ion (and hence its oxidation state) is a recurring Advanced ask.',
      },
      {
        topic: 'Origin of colour — d–d transition vs charge transfer',
        detail:
          'Coloured because of d–d transitions requires a partially filled d-subshell. KMnO₄ (Mn is +7, d⁰) and K₂Cr₂O₇ (Cr is +6, d⁰) have NO d electrons yet are intensely coloured — the colour there is ligand-to-metal charge transfer, not a d–d transition. This distinction is examined directly.',
      },
      {
        topic: 'KMnO₄ and K₂Cr₂O₇ as oxidisers',
        detail:
          'In acidic medium MnO₄⁻ → Mn²⁺ (gain of 5 e⁻, n-factor 5) and Cr₂O₇²⁻ → 2Cr³⁺ (gain of 6 e⁻, n-factor 6). In neutral/basic medium MnO₄⁻ → MnO₂ (3 e⁻). Their reactions with Fe²⁺, oxalate, iodide and H₂S, plus the equivalent-weight calculations, are guaranteed marks.',
      },
    ],
    traps: [
      'Removing a 3d electron before a 4s electron when writing an ion configuration. For transition-metal cations the 4s electrons leave first — Fe²⁺ is 3d⁶, not 3d⁴4s².',
      'Saying KMnO₄ and K₂Cr₂O₇ are coloured because of d–d transitions. Both metals are d⁰ in those species; the colour is charge-transfer, and assuming d–d here is a classic trap.',
      'Assuming the highest possible oxidation state is the most stable. Stability depends on the element — Mn(VII) and Cr(VI) are strong oxidisers (not "stable"), while Mn(II) and Fe(III) are the genuinely stable states.',
      'Treating Zn, Cd and Hg as typical transition metals. They are d¹⁰ in both the atom and their common ions, so they show no d–d colour and are diamagnetic — by the strict definition they are not transition elements.',
    ],
    faqs: [
      {
        q: 'How many questions come from d and f block in JEE Main?',
        a: 'The d-block and f-block together are about 1–2 questions per year in JEE Main (often quoted as "~2.8%"). Almost all of that is the d-block (transition metals); the f-block usually contributes at most a single recall fact such as lanthanide contraction. JEE Advanced adds 1–2 more, usually deeper or fused with coordination chemistry.',
      },
      {
        q: 'Why is KMnO₄ coloured if manganese has no d electrons?',
        a: 'In KMnO₄ manganese is in the +7 state, which is d⁰ — so the colour cannot come from a d–d transition. The intense purple is due to a ligand-to-metal charge transfer, where an electron shifts from oxygen to the metal under light. The same explanation applies to the orange of K₂Cr₂O₇ (Cr is +6, also d⁰). This d⁰-but-coloured pair is a favourite JEE trap.',
      },
      {
        q: 'How do you calculate the magnetic moment of a transition metal ion?',
        a: 'First write the ion\'s configuration (remove the 4s electrons before 3d), count the unpaired electrons n, then use the spin-only formula μ = √(n(n+2)) Bohr magnetons. For example Fe²⁺ is 3d⁶ with 4 unpaired electrons, giving μ = √24 ≈ 4.90 BM. Working the formula backward also lets you identify an unknown ion from its measured moment.',
      },
      {
        q: 'Is the d-block important for JEE Advanced?',
        a: 'Yes. Although the headline weightage looks modest, the chapter is high-value because it links to coordination compounds and redox, and the question types repeat: magnetic moment, colour origin, oxidation-state trends, and the permanganate/dichromate oxidations with their stoichiometry. Those are dependable marks in both papers, so it is not a chapter to skip.',
      },
    ],
  },

  'jee-physics-gravitation': {
    overview:
      'Gravitation is one of the best effort-to-reward chapters in JEE Physics: a small, closed set of formulae covers almost everything, and the questions are mostly direct. In JEE Main it is reliably about 1 question per shift (occasionally 2) — Newton\'s law and superposition, variation of g, orbital and escape velocity, satellite energy, and Kepler\'s laws. In JEE Advanced it appears most years, usually fused with energy conservation or SHM (a particle dropped through a tunnel, binary-star systems, satellite energy changes). Because the chapter is compact and formula-driven, MindPeak students typically lock it down in about a week — making it a fast way to bank near-guaranteed marks.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~3–4% of Physics', questions: '~1 per shift (sometimes 2)', nature: 'Formula-direct: g variation, orbital/escape velocity, satellite energy, Kepler ratios' },
      { exam: 'JEE Advanced', weightage: 'Appears most years', questions: '1 (fused)', nature: 'Combined with energy conservation/SHM: tunnel-through-Earth, binary stars, orbit-change energetics' },
    ],
    correction:
      'You will see articles claiming "13 questions in April 2024" or "21 in 2023" for Gravitation. Those numbers add up every question across all shifts of both sessions — not what a single student faces. In your actual paper it is about 1 question (sometimes 2). Use the per-shift figure to plan revision; the all-shifts total is a counting artefact, not the difficulty you will meet.',
    studyOrder: [
      { step: 'Newton\'s law and the superposition principle', detail: 'F = GMm/r² and adding gravitational forces/fields as vectors. Field-due-to-multiple-masses questions are just superposition, so build this habit first.' },
      { step: 'Gravitational field and potential', detail: 'g = GM/r² (field) and V = −GM/r (potential), and the link PE = mV = −GMm/r. Keeping the sign of potential and PE straight is the foundation for every energy question.' },
      { step: 'Variation of g', detail: 'With height g_h = g(1 − 2h/R) for h ≪ R (exact: g·R²/(R+h)²), with depth g_d = g(1 − d/R), and the reduction due to Earth\'s rotation (maximum at the equator, zero at the poles). These three cases are examined directly.' },
      { step: 'Orbital and escape velocity', detail: 'v_orbital = √(GM/r) and v_escape = √(2GM/R), so v_escape = √2 · v_orbital at the surface. Knowing this ratio answers many questions in one line.' },
      { step: 'Satellite energy and Kepler last', detail: 'Total energy of an orbiting satellite E = −GMm/2r (KE = +GMm/2r, PE = −GMm/r, so E = ½ PE = −KE), geostationary specifics, and Kepler\'s laws (areal velocity = L-conservation; T² ∝ r³).' },
    ],
    highYield: [
      {
        topic: 'Escape vs orbital velocity',
        detail:
          'v_orbital = √(GM/r); v_escape = √(2GM/R). At the surface v_escape = √2 · v_orbital ≈ 1.414 × the orbital speed, and Earth\'s escape velocity is about 11.2 km/s. Many questions ("by what factor must speed increase to escape from orbit?") reduce to this √2 relationship.',
      },
      {
        topic: 'Variation of g with height and depth',
        detail:
          'For small height g decreases as g(1 − 2h/R); with depth it decreases as g(1 − d/R), reaching zero at the centre. Note the factor of 2 difference between the height and depth formulae — at the same small distance, going up reduces g twice as fast as going down. This contrast is a favourite single-question test.',
      },
      {
        topic: 'Total energy of a satellite',
        detail:
          'For a circular orbit, KE = +GMm/2r, PE = −GMm/r, and total E = −GMm/2r = ½·PE = −KE. The negative total energy means the satellite is bound; to move to a higher orbit you must ADD energy even though the speed decreases. Orbit-change energetics in Advanced lean on this.',
      },
      {
        topic: 'Kepler\'s laws and geostationary orbits',
        detail:
          'Kepler III, T² ∝ r³, turns most orbit problems into ratios; Kepler II (equal areas in equal times) is angular-momentum conservation, so a planet moves fastest at perihelion. A geostationary satellite has T = 24 h, sits over the equator moving west-to-east, at radius ≈ 42,000 km from Earth\'s centre (~36,000 km altitude).',
      },
    ],
    traps: [
      'Dropping the negative sign on gravitational PE and potential. PE = −GMm/r and V = −GM/r are negative; using a positive value flips the sign of total energy and breaks every bound-orbit calculation.',
      'Confusing orbital velocity with escape velocity. Orbital keeps a satellite in a circle (√(GM/r)); escape lets it leave entirely (√(2GM/R)). They differ by a factor of √2 at the surface — mixing them is the most common error.',
      'Using g(1 − 2h/R) when h is not small compared to R. That linear form is an approximation; for large heights use the exact g·R²/(R+h)². The depth formula g(1 − d/R) is exact (assuming uniform density).',
      'Thinking a satellite speeds up when raised to a higher orbit. A higher orbit has lower orbital speed but greater total energy — you add energy yet the satellite moves slower. This counter-intuitive result is examined directly.',
    ],
    faqs: [
      {
        q: 'How many questions come from Gravitation in JEE Main?',
        a: 'About 1 question per shift, occasionally 2 — roughly 3–4% of the Physics section. If you see claims of "13" or "21" questions, those are totals added across every shift of a session, not what a single candidate faces. For one paper, plan for one fairly direct, formula-based question.',
      },
      {
        q: 'Is Gravitation an easy chapter for JEE?',
        a: 'Yes, relatively. It is rated easy-to-moderate because the formula set is small and most questions are direct substitution — variation of g, escape/orbital velocity, satellite energy, Kepler ratios. It is one of the highest effort-to-reward chapters, which is why it is a smart early target when you want quick, dependable marks.',
      },
      {
        q: 'What is the difference between orbital velocity and escape velocity?',
        a: 'Orbital velocity, √(GM/r), is the speed needed to stay in a circular orbit at radius r. Escape velocity, √(2GM/R), is the minimum speed needed to break free of the gravitational field entirely. At the surface they are related by v_escape = √2 · v_orbital, so Earth\'s ~11.2 km/s escape speed is √2 times the ~7.9 km/s low-orbit speed.',
      },
      {
        q: 'Why is the total energy of a satellite negative?',
        a: 'For a circular orbit the kinetic energy is +GMm/2r and the potential energy is −GMm/r, so the total is −GMm/2r — negative. A negative total energy signals a bound system; the satellite cannot escape unless energy is added to bring the total up to zero. This is also why raising a satellite to a higher orbit requires adding energy even though its speed drops.',
      },
    ],
  },

  'neet-biology-biotechnology-principles': {
    overview:
      'Biotechnology: Principles and Processes is the toolkit chapter of NEET Biotechnology — restriction enzymes, vectors, competent hosts, PCR and the steps of gene cloning. It is rated Hard not because the reasoning is deep but because it is detail-dense: exact recognition sequences, vector marker genes, and PCR temperatures are all directly testable. As a standalone chapter it is usually 1–2 questions a year, and it is near-pure NCERT recall, so the marks are there for anyone who learns the specifics precisely. It is also the foundation for Biotechnology and its Applications (the next chapter), so the effort pays twice.',
    examSplit: [
      { exam: 'This chapter alone', weightage: '~2–3% of Biology', questions: '1–2 per year', nature: 'NCERT-direct: tools (restriction enzymes, vectors), rDNA steps, PCR, gel electrophoresis, bioreactors' },
      { exam: 'Biotechnology unit', weightage: 'Higher combined', questions: '3–4 per year', nature: 'Principles & Processes + Applications (Bt crops, gene therapy, insulin, RNAi) examined together' },
    ],
    correction:
      'Weightage figures for this chapter range from "~3%" to "~8%, 3–4 questions" online. The honest picture: the 3–4-question / ~8% figure is for the whole Biotechnology UNIT — this chapter plus Biotechnology and its Applications. Principles and Processes on its own is usually 1–2 questions a year. It is high-value-per-mark because the answers are exact NCERT recall (enzyme names, temperatures, marker genes), but do not over-invest expecting four questions from this one chapter.',
    studyOrder: [
      { step: 'Principles of biotechnology', detail: 'The two core techniques — genetic engineering (rDNA technology) and maintaining a sterile, contamination-free environment for large-scale culture. Knowing what problem each tool solves makes the rest of the chapter logical rather than a list to memorise.' },
      { step: 'Tools of rDNA technology', detail: 'Restriction enzymes (molecular scissors), vectors (carriers), competent host cells, and DNA ligase (molecular glue). Learn each tool by the job it does before memorising its details — this is the backbone of every question.' },
      { step: 'Restriction enzymes and gel electrophoresis', detail: 'Recognition of palindromic sequences, the staggered cut that leaves "sticky ends", and how electrophoresis separates fragments by size (smaller DNA migrates farther toward the positive anode). EcoRI\'s site (GAATTC) is the standard example.' },
      { step: 'Cloning vectors and selectable markers', detail: 'pBR322 with its ampᴿ and tetᴿ genes, the Ti plasmid of Agrobacterium for plants, and insertional inactivation — how inserting DNA into one marker gene lets you screen for recombinants. The logic here is the chapter\'s favourite question.' },
      { step: 'PCR and downstream processing last', detail: 'The three PCR steps with their temperatures, the role of thermostable Taq polymerase, and the idea that downstream processing (separation, purification, formulation) is needed before a product is sold.' },
    ],
    highYield: [
      {
        topic: 'PCR — the three steps, temperatures and Taq',
        detail:
          'Denaturation (~94 °C, strands separate) → Annealing (~55 °C, primers bind) → Extension (~72 °C, Taq polymerase synthesises the new strand). Taq polymerase is used because it is thermostable, isolated from the bacterium Thermus aquaticus, so it survives the 94 °C step. About 30 cycles give roughly a billion (2³⁰) copies. The temperatures and the source organism are both directly asked.',
      },
      {
        topic: 'Restriction enzymes and sticky ends',
        detail:
          'They recognise specific palindromic sequences (read the same 5′→3′ on both strands) and cut to leave single-stranded overhangs — "sticky ends" — that base-pair with any other DNA cut by the SAME enzyme, which is why a gene and a vector must be cut with the same restriction enzyme. EcoRI cuts at G↓AATTC. Naming follows the source organism (E. coli → Eco).',
      },
      {
        topic: 'Insertional inactivation in pBR322',
        detail:
          'pBR322 carries two antibiotic-resistance genes (ampᴿ and tetᴿ). If foreign DNA is inserted into the tetᴿ gene, recombinants lose tetracycline resistance but keep ampicillin resistance — so they grow on ampicillin but die on tetracycline, distinguishing them from non-recombinants. This two-marker screening logic is the chapter\'s most-tested reasoning.',
      },
      {
        topic: 'Bioreactors and downstream processing',
        detail:
          'The stirred-tank bioreactor (and its sparged air, agitator, and pH/temperature/oxygen control) allows large-volume culture under optimal conditions. After culture, downstream processing — separation, purification and formulation with preservatives, followed by quality control — turns the product into a usable form. These applied details are easy recall marks.',
      },
    ],
    traps: [
      'Mixing up the PCR step temperatures. Denaturation is the hottest (~94 °C), annealing the coolest (~55 °C), extension in between (~72 °C). Reversing annealing and extension is a common slip.',
      'Forgetting that the gene and the vector must be cut by the SAME restriction enzyme. Only then do their sticky ends match and join — using two different enzymes leaves incompatible overhangs.',
      'Getting the insertional-inactivation logic backwards. Recombinants LOSE resistance for the gene the insert disrupts (e.g. become tetracycline-sensitive) — they do not gain it. The recombinant is identified by the resistance it has lost.',
      'Confusing Taq polymerase with ordinary DNA polymerase. Taq is thermostable (from Thermus aquaticus) so it survives the 94 °C denaturation; a normal polymerase would denature and have to be re-added each cycle.',
    ],
    faqs: [
      {
        q: 'How many questions come from Biotechnology Principles and Processes in NEET?',
        a: 'This chapter on its own is usually 1–2 questions a year. The "3–4 questions / ~8%" figure quoted online is for the whole Biotechnology unit — Principles and Processes plus Biotechnology and its Applications. The questions are near-pure NCERT recall (enzyme names, PCR temperatures, vector markers), so they are very scorable if you learn the specifics precisely.',
      },
      {
        q: 'What are the three steps of PCR and their temperatures?',
        a: 'Denaturation at about 94 °C separates the two DNA strands; annealing at about 55 °C lets the primers bind to their complementary sequences; extension at about 72 °C is where the thermostable Taq polymerase synthesises the new strands. Repeating the cycle ~30 times amplifies the DNA roughly a billion-fold. NEET asks both the order and the temperatures directly.',
      },
      {
        q: 'Why must the same restriction enzyme cut both the gene and the vector?',
        a: 'A restriction enzyme cuts at its specific palindromic site to leave single-stranded "sticky ends." Only DNA cut by the same enzyme has complementary sticky ends that can base-pair and be joined by DNA ligase. If the gene and vector were cut by different enzymes, their overhangs would not match and they could not be ligated together.',
      },
      {
        q: 'How does insertional inactivation help select recombinant cells?',
        a: 'In a vector like pBR322 with two resistance genes (ampᴿ and tetᴿ), foreign DNA is inserted into one of them — say tetᴿ. Cells that took up a recombinant plasmid lose tetracycline resistance but keep ampicillin resistance, so they grow on ampicillin yet die on tetracycline. That difference distinguishes recombinant colonies from non-recombinant ones, which keep both resistances.',
      },
    ],
  },

  'jee-chemistry-alcohols-phenols-ethers': {
    overview:
      'Alcohols, Phenols and Ethers is a high-return Organic chapter because its reactions feed directly into the rest of organic chemistry (aldehydes, carboxylic acids, ethers in synthesis), and the question types are consistent: acidity comparison, named reactions, reagent/product prediction, and distinguishing tests. In JEE Main it is a steady 2–3 questions a year, mostly direct. In JEE Advanced it goes mechanism-deep — why phenol is more acidic than ethanol, why a tertiary alcohol reacts fastest in the Lucas test, and multi-step conversions. Phenols carry the most weight (acidity + electrophilic substitution on the ring), then alcohols, then ethers.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~3–5% of Chemistry', questions: '2–3 per year', nature: 'Direct: acidity order, named-reaction product, reagent identification, distinguishing tests' },
      { exam: 'JEE Advanced', weightage: '~4–6% of Chemistry', questions: '1–3 (often fused)', nature: 'Mechanism-based: acidity reasoning, Lucas/SN1-SN2, Reimer–Tiemann/Kolbe products, multi-step conversions' },
    ],
    correction:
      'Some pages quote a single weightage band and a flat topic list without saying where the marks actually sit. The real distribution is uneven: phenols carry the most (their unusual acidity and the electrophilic-substitution chemistry on the aromatic ring), alcohols next (preparation, oxidation, dehydration, the Lucas/Victor Meyer tests), and ethers least (mainly Williamson synthesis and cleavage by HI). Budget revision time accordingly rather than treating the three groups as equal.',
    studyOrder: [
      { step: 'Structure, classification and the acidity logic first', detail: 'Primary/secondary/tertiary alcohols, and the acidity order Phenol > Water > Alcohol. Understanding WHY (phenoxide is resonance-stabilised over the ring; alkyl groups are electron-donating and destabilise alkoxide) is the gate to half the chapter\'s reasoning questions.' },
      { step: 'Preparation of alcohols and phenols', detail: 'Alcohols from alkenes (hydration, hydroboration–oxidation, oxymercuration), carbonyls (reduction, Grignard), and the industrial phenol routes (cumene process). Grignard with different carbonyls to build a target alcohol is a recurring ask.' },
      { step: 'Reactions of alcohols', detail: 'Oxidation (1° → aldehyde → acid; 2° → ketone; 3° resists), acid-catalysed dehydration (Saytzeff product, carbocation rearrangements), esterification, and the Lucas and Victor Meyer tests for distinguishing 1°/2°/3°.' },
      { step: 'Reactions of phenols', detail: 'Electrophilic substitution (–OH is strongly activating, o/p-directing), plus the named reactions: Kolbe (→ salicylic acid), Reimer–Tiemann (→ salicylaldehyde), bromination/nitration, and reaction with FeCl₃ (violet colour test).' },
      { step: 'Ethers last', detail: 'Williamson synthesis (use the less hindered alkyl halide to avoid elimination), and cleavage by HI/HBr (the smaller alkyl group forms the halide). Compact and high-yield once the alcohol/phenol chemistry is solid.' },
    ],
    highYield: [
      {
        topic: 'Acidity order and the reasoning behind it',
        detail:
          'Phenol > Water > Alcohol. Phenol is far more acidic than alcohols because the phenoxide ion delocalises its negative charge into the benzene ring; alcohols are weaker than water because alkyl groups push electron density onto oxygen and destabilise the alkoxide. Electron-withdrawing groups on the ring (–NO₂, especially at o/p) make phenols still more acidic — p-nitrophenol > phenol. This ranking and its causes are asked almost every year.',
      },
      {
        topic: 'Lucas test and Victor Meyer test',
        detail:
          'Lucas reagent (conc. HCl + anhydrous ZnCl₂) distinguishes alcohols by SN1 rate: tertiary reacts immediately (turbidity at once), secondary in about 5 minutes, primary not at room temperature — because the order tracks carbocation stability (3° > 2° > 1°). Victor Meyer\'s test gives red (1°), blue (2°) and colourless (3°) products. These two distinguishing tests are direct marks.',
      },
      {
        topic: 'Kolbe and Reimer–Tiemann reactions of phenol',
        detail:
          'Kolbe\'s reaction: phenol + CO₂ under NaOH/pressure → salicylic acid (ortho-hydroxybenzoic acid), the precursor to aspirin. Reimer–Tiemann: phenol + CHCl₃/NaOH → salicylaldehyde (the –CHO enters ortho). Knowing the product and the ortho selectivity of each is a reliable Advanced ask.',
      },
      {
        topic: 'Williamson ether synthesis and ether cleavage',
        detail:
          'Williamson: an alkoxide (R–O⁻Na⁺) + alkyl halide (R′–X) → R–O–R′ via SN2 — so use the LESS hindered halide (methyl/primary); a tertiary halide eliminates to an alkene instead. Ether cleavage by HI: the bond breaks so the smaller/less hindered group becomes the alkyl iodide (e.g. methyl phenyl ether → phenol + CH₃I, because phenyl–O cannot undergo SN2).',
      },
    ],
    traps: [
      'Saying alcohols are more acidic than water. They are LESS acidic — alkyl groups are electron-donating and destabilise the alkoxide ion. Only phenol (resonance-stabilised phenoxide) beats water in this chapter.',
      'Choosing the wrong alkyl halide in Williamson synthesis. The reaction is SN2, so the alkyl halide must be the less hindered partner; pairing a bulky tertiary halide with an alkoxide gives elimination (alkene), not the ether.',
      'Predicting the wrong product in ether cleavage by HI. With an unsymmetrical ether the smaller/less hindered group leaves as the iodide; with aryl alkyl ethers the aryl–O bond is not cleaved (no SN2 on sp² carbon), so phenol is always one product.',
      'Forgetting carbocation rearrangement in acid-catalysed dehydration. The intermediate carbocation can undergo hydride/methyl shifts to a more stable cation, so the major alkene may not come from the carbon that originally held the –OH (Saytzeff, most-substituted alkene).',
    ],
    faqs: [
      {
        q: 'How many questions come from Alcohols, Phenols and Ethers in JEE?',
        a: 'JEE Main asks about 2–3 questions a year from this chapter (~3–5% of Chemistry), and JEE Advanced typically 1–3, often fused into mechanism or multi-step conversion problems. The marks are weighted toward phenols (acidity and ring substitution), then alcohols, then ethers, so allocate revision in that order rather than treating the three equally.',
      },
      {
        q: 'Why is phenol more acidic than ethanol (or alcohols)?',
        a: 'When phenol loses its –OH proton, the resulting phenoxide ion spreads the negative charge into the benzene ring through resonance, which stabilises it strongly. An alkoxide from an alcohol has no such delocalisation, and the alkyl group actually pushes electron density onto the oxygen, destabilising the negative charge. The more stable the conjugate base, the stronger the acid — so phenol > water > alcohol.',
      },
      {
        q: 'How does the Lucas test distinguish primary, secondary and tertiary alcohols?',
        a: 'Lucas reagent (concentrated HCl with anhydrous ZnCl₂) reacts by an SN1 mechanism, so the rate follows carbocation stability. A tertiary alcohol gives immediate cloudiness (turbidity), a secondary alcohol turns turbid in about 5 minutes, and a primary alcohol shows no reaction at room temperature. The differing speed of the cloudy alkyl-chloride forming is what identifies the class.',
      },
      {
        q: 'Which alkyl halide should be used in Williamson ether synthesis?',
        a: 'The less hindered one — methyl or primary. Williamson synthesis is an SN2 reaction between an alkoxide and an alkyl halide, and SN2 is fastest at unhindered carbons. If you use a bulky tertiary halide, the alkoxide acts as a base instead and you get elimination (an alkene) rather than the ether. So to make a mixed ether, pair the bulky group as the alkoxide and the smaller group as the halide.',
      },
    ],
  },
  'jee-physics-current-electricity': {
    overview:
      'Current Electricity is one of the two or three most dependable scoring chapters in JEE Main Physics — and the reason is that the question types barely change year to year. In JEE Main it carries roughly 8–10% of the Physics section, which works out to 3–4 questions in most shifts, and they are almost all formula-direct: equivalent resistance, Kirchhoff loops, meter-bridge/potentiometer balance, and instrument (galvanometer) conversions. JEE Advanced asks fewer questions (typically 1–2) but fuses them with capacitors in transient circuits or wraps them in an experimental-error or paragraph setting, so the gap most weightage articles miss is that this is a near-guaranteed-marks chapter in Main but a careful-reading chapter in Advanced.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~8–10% of Physics', questions: '3–4 per shift', nature: 'Formula-direct: resistor networks, Kirchhoff, meter bridge, potentiometer, galvanometer conversion' },
      { exam: 'JEE Advanced', weightage: '~4–6% of Physics', questions: '1–2', nature: 'Mixed with capacitors/RC transients, experimental error, or paragraph-linked circuit reasoning' },
    ],
    correction:
      'Most "weightage" pages quote one band (e.g. "9%") and stop. The more useful split is within the chapter: in the last five years the resistor-combination + Kirchhoff cluster alone has carried the largest share of the marks, while EMF/internal-resistance and the potentiometer come next — drift velocity and the microscopic model rarely appear as standalone questions, so do not over-invest there.',
    studyOrder: [
      { step: 'Ohm\'s law, resistivity and the V–I picture', detail: 'Get R = ρL/A, the temperature dependence of resistivity, and the difference between ohmic and non-ohmic behaviour straight first — every later topic assumes it.' },
      { step: 'Series–parallel resistor reduction', detail: 'Drill collapsing a network to one equivalent resistance, including symmetric (Wheatstone-balanced) networks where the bridge resistor carries no current and can be removed. This single skill unlocks the largest block of Main questions.' },
      { step: 'EMF, internal resistance and terminal voltage', detail: 'V = E − Ir, cells in series/parallel, and maximum-power transfer. Mixing up EMF with terminal voltage is a recurring error, so anchor it here.' },
      { step: 'Kirchhoff\'s laws', detail: 'Junction (charge) and loop (energy) rules for multi-loop circuits. Practise assigning loop currents consistently — most "find the current in this branch" questions are one clean application.' },
      { step: 'Meter bridge, Wheatstone bridge and potentiometer', detail: 'These three balance-condition instruments recur every year. Learn why a potentiometer measures EMF with no current drawn (its key advantage over a voltmeter) — that "why" is itself a frequent question.' },
      { step: 'Galvanometer to ammeter/voltmeter conversion', detail: 'Shunt (parallel, low resistance) for an ammeter, high series resistance for a voltmeter. Short, formulaic, and almost always worth a guaranteed mark.' },
    ],
    highYield: [
      {
        topic: 'Equivalent resistance of networks (incl. balanced Wheatstone)',
        detail:
          'The highest-frequency Main type. Spot a balanced Wheatstone bridge (P/Q = R/S) and delete the galvanometer branch; recognise symmetry to fold a cube/ladder network. Most "find R between A and B" questions reduce to one of these tricks.',
      },
      {
        topic: 'Kirchhoff\'s loop and junction rules',
        detail:
          'Carries the joint-largest share of the chapter\'s marks. Write junction equations first to cut the number of unknowns, then loop equations. Be ruthless about sign convention (rise vs drop across cells and resistors).',
      },
      {
        topic: 'Potentiometer and meter bridge',
        detail:
          'Balance length ∝ EMF/potential. Classic asks: comparing two cells\' EMFs, finding internal resistance from balance lengths with and without a shunt, and meter-bridge null-point shifts. The potentiometer\'s "draws no current at balance" property is the conceptual hook.',
      },
      {
        topic: 'EMF, internal resistance and cell combinations',
        detail:
          'Terminal voltage under load, identical cells in series vs parallel, and the maximum-power condition (external R = internal r). Short numericals that reward clean bookkeeping.',
      },
    ],
    traps: [
      'Confusing EMF with terminal voltage. EMF is the cell\'s value on open circuit; terminal voltage V = E − Ir drops the moment current flows. Many wrong answers come from using E where V was needed.',
      'Missing a balanced Wheatstone bridge. If P/Q = R/S the bridge (galvanometer) arm carries no current — students keep it in the network and get a much harder, wrong reduction.',
      'Using a voltmeter\'s reading as the true EMF. A real voltmeter draws a little current, so it reads terminal voltage, not EMF — that is exactly why the potentiometer exists.',
      'Sign errors in Kirchhoff loops. Fix one convention (e.g. potential drops in the direction of assumed current are negative) and apply it to every element in the loop, including the cell.',
    ],
    faqs: [
      {
        q: 'How many questions come from Current Electricity in JEE Main?',
        a: 'Typically 3–4 questions per shift, about 8–10% of the Physics section. They are mostly direct: equivalent resistance of a network, a Kirchhoff multi-loop circuit, a meter-bridge or potentiometer balance, and a galvanometer-conversion numerical. It is one of the most reliable scoring chapters in the paper.',
      },
      {
        q: 'Is Current Electricity easy to score in JEE?',
        a: 'In JEE Main, yes — the question types repeat year to year and are formula-driven, so consistent practice on resistor networks and Kirchhoff almost guarantees marks. In JEE Advanced it is harder because the same ideas are combined with capacitors in transient (RC) circuits or wrapped in experimental-error questions, so read those carefully.',
      },
      {
        q: 'Which topics in Current Electricity are most important for JEE Main?',
        a: 'Series–parallel resistor combinations (including balanced Wheatstone bridges) and Kirchhoff\'s laws carry the largest share, followed by the potentiometer/meter bridge and EMF–internal-resistance problems. Galvanometer-to-ammeter/voltmeter conversion is a short, high-return add-on. Drift velocity and the microscopic model rarely appear alone.',
      },
      {
        q: 'What is the difference between a potentiometer and a voltmeter?',
        a: 'At balance a potentiometer draws no current from the cell it is measuring, so it reads the true EMF; a voltmeter always draws a small current and therefore reads the terminal voltage, which is slightly less than the EMF. That null-deflection advantage is why JEE problems use a potentiometer to compare EMFs and to measure a cell\'s internal resistance.',
      },
    ],
  },

  'jee-maths-trigonometry': {
    overview:
      'Trigonometry behaves very differently in the two papers, which is the part most weightage articles blur. In JEE Main, standalone trigonometry is usually 2–3 questions per shift, but the bulk of those marks come from Trigonometric Equations and Inverse Trigonometric Functions, not from heights-and-distances or solutions-of-triangles, which now appear rarely. In JEE Advanced, trigonometry is almost never a standalone question — instead it is the tool you need inside calculus, complex numbers and coordinate geometry, so weakness here quietly costs you marks in other chapters. The practical takeaway: treat identities as a fluency you build for the whole syllabus, and treat trig equations + inverse trig as the directly examinable core.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~2.5–7% of Maths (source-dependent)', questions: '2–3 per shift', nature: 'Mostly trigonometric equations (general solution) and inverse trig; some ratios/identities' },
      { exam: 'JEE Advanced', weightage: 'Rarely standalone', questions: '~0–1 direct; embedded everywhere', nature: 'A tool inside calculus, complex numbers, vectors and coordinate geometry rather than its own question' },
    ],
    correction:
      'Quoted weightage swings between about 2.5% and 7% across sites because they count differently — some bundle inverse trig and "solutions of triangles" into trigonometry, others split them out. Rather than trust one number, look at where the questions actually fall: in recent JEE Main shifts, Inverse Trigonometric Functions and Trigonometric Equations together carried far more questions than ratios/identities, while Solutions of Triangles contributed close to zero. Prioritise accordingly.',
    studyOrder: [
      { step: 'Ratios, signs and the unit-circle picture', detail: 'Know the values for standard angles, the ASTC sign rule, and how sin/cos behave across quadrants. Everything downstream depends on reading the unit circle quickly.' },
      { step: 'Core identities', detail: 'Pythagorean, sum/difference, double- and half-angle, and product-to-sum. These are not a topic to be "tested" so much as a fluency you reuse in calculus and complex numbers — overlearn them.' },
      { step: 'Trigonometric equations and general solutions', detail: 'The general-solution forms (for sinθ = sinα, cosθ = cosα, tanθ = tanα) and the discipline of checking the domain. This is one of the two directly examinable cores in Main.' },
      { step: 'Inverse trigonometric functions', detail: 'Principal-value ranges, the sum/difference formulae, and the domain conditions that flip a formula\'s constant. The single most question-dense sub-topic in recent Main shifts.' },
      { step: 'Properties of triangles and heights & distances (light pass)', detail: 'Sine/cosine rules and the basic results. Worth a quick revision pass for completeness, but these now appear rarely in Main, so do not spend disproportionate time here.' },
    ],
    highYield: [
      {
        topic: 'Inverse trigonometric functions',
        detail:
          'Highest recent frequency in JEE Main. The traps live in the domain: tan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1−xy)) only when xy < 1, otherwise you add or subtract π. Master the principal-value ranges (e.g. cos⁻¹ ∈ [0, π]) before the formulae.',
      },
      {
        topic: 'Trigonometric equations (general solutions)',
        detail:
          'Write the general solution, then reject roots that violate the stated interval or make a denominator zero. A large fraction of "number of solutions in [0, 2π]" questions are lost by forgetting to discard extraneous roots.',
      },
      {
        topic: 'Identities as a calculus/complex-numbers tool',
        detail:
          'Double-angle and product-to-sum identities recur inside integration, limits and complex-number (Euler/De Moivre) problems. Strength here pays off far outside the trigonometry questions themselves — which is the real reason it is high-yield for JEE.',
      },
    ],
    traps: [
      'Dropping the domain condition in inverse-trig addition formulae. The tan⁻¹ sum formula changes by ±π depending on whether xy < 1 — applying the bare formula everywhere is the most common mistake.',
      'Forgetting principal-value ranges. sin⁻¹, cos⁻¹ and tan⁻¹ have fixed output ranges; an answer outside the range is wrong even if it satisfies the equation.',
      'Keeping extraneous roots in trigonometric equations. Squaring, or multiplying through by a trig term that can be zero, introduces false solutions you must check against the original equation and interval.',
      'Treating heights-and-distances as high-yield. It feels like "real" trigonometry but contributes very few marks in modern JEE Main — over-practising it is a poor use of time relative to inverse trig.',
    ],
    faqs: [
      {
        q: 'How many questions come from Trigonometry in JEE Main?',
        a: 'Usually 2–3 standalone questions per shift, and most of those come from Trigonometric Equations and Inverse Trigonometric Functions rather than from ratios/identities or heights-and-distances. Identities also appear indirectly inside calculus and complex-number questions, so the chapter\'s real footprint is larger than the standalone count suggests.',
      },
      {
        q: 'What is the weightage of Trigonometry in JEE Advanced?',
        a: 'Trigonometry is rarely a standalone question in JEE Advanced. Instead it is a tool you need inside calculus, complex numbers, vectors and coordinate geometry — so its "weightage" is hidden across other chapters. Weakness in trig identities quietly costs Advanced marks in integration and complex numbers rather than in a dedicated trig question.',
      },
      {
        q: 'Why do different websites give different trigonometry weightage for JEE?',
        a: 'Because they count the sub-topics differently — some bundle Inverse Trigonometric Functions and Solutions of Triangles into "trigonometry" while others list them separately, so figures range from about 2.5% to 7%. A more reliable guide than the headline number is where questions actually fall: recently, inverse trig and trig equations dominate, and solutions of triangles barely appears.',
      },
      {
        q: 'Which part of trigonometry should I focus on for JEE Main?',
        a: 'Inverse Trigonometric Functions and Trigonometric Equations — they carry the most directly examinable marks. Build rock-solid fluency with the core identities first (you reuse them across the whole syllabus), then drill inverse-trig domain conditions and the general-solution method for trig equations.',
      },
    ],
  },

  'jee-maths-3d-geometry': {
    overview:
      '3D (Three-Dimensional) Geometry is a high-weightage, high-reliability chapter in JEE Main — and it is unusual in that the question types are short, vector-driven and almost interchangeable year to year, so it converts study time into marks efficiently. In JEE Main it reliably contributes 2–3 questions per shift (across all 2025 shifts it was one of the most-asked Maths chapters), mostly on lines, planes, and the distances/angles between them. In JEE Advanced the same content appears fused with Vectors — shortest distance between skew lines, foot of perpendicular, image of a point in a plane — so the smart move is to study 3D Geometry and Vectors together rather than as separate silos.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~6–12% of Maths', questions: '2–3 per shift', nature: 'Direct: equation of line/plane, distance of point from plane, angle between lines/planes, shortest distance' },
      { exam: 'JEE Advanced', weightage: '~6–8% (with Vectors)', questions: '2–3 (vector + 3D combined)', nature: 'Skew-line shortest distance, foot/image of point, plane through intersection — solved vectorially' },
    ],
    correction:
      'Some sites label 3D Geometry "medium weightage" and quote ~6%; the 2025 papers tell a different story, where it was among the highest-asked Maths chapters (around 12% by one shift-wise count). Treat it as a top-priority, high-return chapter, not a mid-tier one — and do not study it apart from Vectors, because in both papers the cleanest solutions use the vector form of lines and planes.',
    studyOrder: [
      { step: 'Direction cosines and direction ratios', detail: 'l² + m² + n² = 1, and how direction ratios fix a line\'s orientation. Everything else is built on representing a direction as a vector.' },
      { step: 'Equation of a line (vector and Cartesian)', detail: 'r = a + λb and the symmetric Cartesian form. Be fluent converting between them — questions mix the two representations freely.' },
      { step: 'Equation of a plane', detail: 'Normal form, point-normal form, intercept form, and the plane through three points. The normal vector is the object you actually compute with.' },
      { step: 'Angles and distances', detail: 'Angle between two lines (via direction vectors), line and plane, two planes; distance of a point from a plane; distance between parallel planes. This cluster is the bulk of Main questions.' },
      { step: 'Shortest distance, foot and image', detail: 'Shortest distance between skew lines (the scalar-triple-product formula), foot of perpendicular from a point to a line/plane, and the image of a point in a plane. This is where 3D meets Vectors and where Advanced lives.' },
    ],
    highYield: [
      {
        topic: 'Distance of a point from a plane / between parallel planes',
        detail:
          'A one-line formula, |ax₁+by₁+cz₁+d|/√(a²+b²+c²), and one of the most-asked direct types. Parallel-plane distance is the same formula applied with a common normal.',
      },
      {
        topic: 'Angle between lines, line–plane and plane–plane',
        detail:
          'All three reduce to a dot-product between the relevant direction or normal vectors — but watch the line–plane case, where the angle is 90° minus the angle between the line\'s direction and the plane\'s normal. That subtraction is a frequent slip.',
      },
      {
        topic: 'Shortest distance between two skew lines',
        detail:
          '|(a₂−a₁)·(b₁×b₂)| / |b₁×b₂|. High-frequency in both papers. If the scalar triple product in the numerator is zero, the lines are coplanar (intersecting or parallel) — a fact often tested directly.',
      },
      {
        topic: 'Foot of perpendicular and image of a point',
        detail:
          'Parametrise the line/normal, impose perpendicularity (dot product = 0) to find the foot, then double the displacement for the image. The same machinery answers a whole family of Main and Advanced questions.',
      },
    ],
    traps: [
      'Confusing the line–plane angle with the line–normal angle. The angle between a line and a plane is 90° minus the angle between the line\'s direction and the plane\'s normal; using the dot product directly without the subtraction gives the complementary (wrong) angle.',
      'Forgetting to normalise direction vectors when finding an angle. cosθ uses unit vectors — dividing by the magnitudes is not optional.',
      'Misreading skew vs coplanar lines. If (a₂−a₁)·(b₁×b₂) = 0 the lines are coplanar, so the "shortest distance" is zero (they intersect) or a simple parallel-line distance — don\'t blindly apply the skew formula.',
      'Studying 3D Geometry in isolation from Vectors. The fastest solutions to skew-distance, foot-of-perpendicular and image problems are vectorial; learning the two chapters separately doubles the work.',
    ],
    faqs: [
      {
        q: 'How many questions come from 3D Geometry in JEE Main?',
        a: 'Reliably 2–3 questions per shift, and across the 2025 sessions it was among the most-asked Maths chapters. They are mostly direct: equation of a line or plane, distance of a point from a plane, angle between lines/planes, and shortest distance between skew lines. The formulas are short, which makes it an efficient scoring chapter.',
      },
      {
        q: 'Is 3D Geometry high weightage for JEE Main 2026?',
        a: 'Yes. Although a few sites still call it "medium weightage" (~6%), the recent papers put it among the highest-asked Maths chapters, so treat it as a top-priority topic. Pair it with Vectors when you study, because both papers solve 3D questions most cleanly using the vector form of lines and planes.',
      },
      {
        q: 'What are the most important topics in 3D Geometry for JEE?',
        a: 'Distance of a point from a plane, angles between lines/planes, shortest distance between skew lines, and the foot of perpendicular / image of a point in a plane. These four cover the large majority of both JEE Main and JEE Advanced questions.',
      },
      {
        q: 'How do I find the shortest distance between two skew lines?',
        a: 'Use |(a₂−a₁)·(b₁×b₂)| / |b₁×b₂|, where a₁, a₂ are points on the two lines and b₁, b₂ their direction vectors. If the numerator (a scalar triple product) is zero, the lines are coplanar — they either intersect (distance 0) or are parallel, in which case use the parallel-line distance instead.',
      },
    ],
  },

  'jee-chemistry-p-block-15-16': {
    overview:
      'The p-Block (Groups 15 and 16) is a fact- and trend-heavy chapter where JEE Main marks come almost entirely from NCERT lines, not from problem-solving — which is exactly why students who "do chemistry by solving numericals" underperform here. In JEE Main these two groups together typically yield 1–2 direct questions per shift (the whole p-block, groups 13–18, runs to 3–4 questions), and they reward clean recall of oxidation-state trends, oxoacid structures, and preparation reactions. JEE Advanced goes deeper into structure and reasoning — why an oxoacid is a stronger acid, the bonding in interhalogens/oxides, allotrope structures — so the same chapter is "memorise the trends" for Main and "explain the trend" for Advanced.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~4–6% of Chemistry (groups 15–16)', questions: '1–2 per shift', nature: 'NCERT-fact recall: trends, oxidation states, oxoacid/oxide formulae, named preparations' },
      { exam: 'JEE Advanced', weightage: '~5–8% (inorganic block)', questions: '1–3', nature: 'Structure & reasoning: oxoacid acidity order, allotropes, interhalogen shapes, matching/assertion' },
    ],
    correction:
      'Many guides lump "p-block" into a single 6% figure and tell you to "memorise NCERT". The more useful split: Group 15 (especially nitrogen\'s oxoacids/oxides and phosphorus allotropes) and Group 16 (sulfur\'s oxoacids and oxides) are asked more often than Group 14 facts, and the questions cluster on anomalous behaviour of the first element (N and O) and on acid-strength/oxidising-power trends down the group — so target those rather than reading all six groups at uniform depth.',
    studyOrder: [
      { step: 'Periodic trends down each group first', detail: 'Atomic/ionic size, ionisation enthalpy, electronegativity, and metallic character down Group 15 (N→Bi) and Group 16 (O→Po). Almost every question is a consequence of one of these trends, so anchor them before the reactions.' },
      { step: 'Anomalous behaviour of the first element', detail: 'Why nitrogen (no d-orbitals, small size, high electronegativity) and oxygen differ from the rest of their groups — catenation, pπ–pπ multiple bonding, maximum covalency. A perennial favourite for "which statement is correct" questions.' },
      { step: 'Oxidation states and their stability', detail: 'The +3 vs +5 stability trend in Group 15 (inert-pair effect making Bi³⁺ stable) and the −2/+4/+6 picture in Group 16. Map oxidising/reducing tendencies onto these.' },
      { step: 'Oxides and oxoacids', detail: 'Oxoacids of nitrogen (HNO₂, HNO₃) and phosphorus (H₃PO₂, H₃PO₃, H₃PO₄ — with their basicity from the number of P–OH bonds), and of sulfur (H₂SO₃, H₂SO₄, thio- and per-acids). Structures and acid-strength orders are the high-value part.' },
      { step: 'Key preparations and properties', detail: 'NH₃, HNO₃ (Ostwald), allotropes of phosphorus (white/red/black) and sulfur, SO₂/SO₃, and H₂SO₄ (Contact process). Know the conditions and the distinguishing observations.' },
    ],
    highYield: [
      {
        topic: 'Oxoacids of phosphorus and their basicity',
        detail:
          'Basicity equals the number of P–OH (ionisable) bonds, not the number of H atoms: H₃PO₂ is monobasic, H₃PO₃ dibasic, H₃PO₄ tribasic. The P–H bonds in H₃PO₂/H₃PO₃ are not ionisable but make these acids reducing — a classic two-in-one question.',
      },
      {
        topic: 'Acid strength and oxidising-power trends',
        detail:
          'Down Group 16, oxoacid oxidising power and stability shift predictably; across the oxoacids of a single element, acid strength rises with oxidation state (HNO₃ > HNO₂; H₂SO₄ > H₂SO₃). Expect "arrange in order" questions.',
      },
      {
        topic: 'Anomalous behaviour of nitrogen and oxygen',
        detail:
          'Nitrogen forms strong pπ–pπ multiple bonds (N≡N) and shows no catenation tendency like phosphorus; oxygen is a diatomic gas while sulfur catenates into rings/chains. The "first-element anomaly" is one of the most reliably asked ideas in the chapter.',
      },
      {
        topic: 'Allotropes and structures',
        detail:
          'White phosphorus (P₄ tetrahedron, reactive, stored under water) vs red/black; rhombic vs monoclinic sulfur (both S₈ rings). Structure-to-property reasoning ("why is white phosphorus more reactive?") recurs in Advanced.',
      },
    ],
    traps: [
      'Counting all hydrogens as acidic. In H₃PO₂ and H₃PO₃ the P–H hydrogens are NOT ionisable, so basicity is 1 and 2 respectively — using the formula\'s H-count gives the wrong basicity.',
      'Assuming trends are perfectly monotonic. Group 15/16 have well-known irregularities (e.g. the dip at nitrogen/oxygen and the inert-pair effect at the bottom) — exam statements are written precisely to catch a "smooth trend" assumption.',
      'Mixing up the cause of nitrogen\'s anomaly. It is the absence of d-orbitals plus small size and high electronegativity (limiting covalency to 4 and enabling pπ–pπ bonding) — not merely "it is the lightest". The precise reason is what gets tested.',
      'Treating this as a problem-solving chapter. There is almost no calculation here; marks are lost by under-reading NCERT, not by weak maths. Revise the factual lines repeatedly rather than "practising sums".',
    ],
    faqs: [
      {
        q: 'How many questions come from p-block Groups 15 and 16 in JEE Main?',
        a: 'Usually 1–2 direct questions per shift from Groups 15–16 specifically, within an overall p-block (Groups 13–18) contribution of about 3–4 questions. They are NCERT-fact based — trends, oxidation states, oxoacid structures and named preparations — rather than numerical, so accurate recall is what scores.',
      },
      {
        q: 'Is the p-block easy or hard to score in JEE?',
        a: 'For JEE Main it is scorable if you treat it as a recall chapter and revise NCERT trends and reactions repeatedly. It feels hard to students who try to "solve" it like physical chemistry. JEE Advanced is genuinely harder because it asks you to explain the trends — acid-strength orders, allotrope reactivity, interhalogen shapes — rather than just state them.',
      },
      {
        q: 'How do I find the basicity of phosphorus oxoacids?',
        a: 'Count only the P–OH bonds, because only those hydrogens are ionisable. So H₃PO₂ is monobasic (one OH), H₃PO₃ is dibasic (two OH), and H₃PO₄ is tribasic (three OH). The remaining P–H bonds are non-ionisable but make H₃PO₂ and H₃PO₃ good reducing agents — a point JEE likes to combine into one question.',
      },
      {
        q: 'Why does nitrogen behave differently from the other Group 15 elements?',
        a: 'Nitrogen is small, highly electronegative, and has no d-orbitals, so its covalency is limited to four and it forms strong pπ–pπ multiple bonds (as in N≡N). That is why nitrogen exists as a diatomic gas and shows little catenation, whereas phosphorus catenates and forms P₄ — the contrast is a frequently tested "anomalous first element" idea.',
      },
    ],
  },
  'neet-biology-digestion-absorption': {
    overview:
      'Digestion & Absorption is one of the steady, low-risk scorers in NEET\'s Human Physiology unit — in recent papers it gives about 2 questions, and almost all of them are direct NCERT recall. The marks cluster in three places: the enzyme → substrate → product → pH table, where and how each nutrient is absorbed, and the gastrointestinal hormones with a few disorders. Nothing here is numerical, so it rewards a clean enzyme chart and the small finite set of NCERT facts over problem practice — which is why it is a high marks-per-hour chapter.',
    examSplit: [
      { exam: 'Enzymes, glands & secretions', weightage: 'Highest share', questions: '~1 Q/yr', nature: 'Enzyme→substrate→product→optimum pH; salivary/gastric/pancreatic/intestinal juices; bile\'s role' },
      { exam: 'Absorption & assimilation', weightage: 'High', questions: '~0–1 Q/yr', nature: 'Site + mechanism (active/facilitated/passive) for glucose, amino acids, fats (chylomicrons→lacteals), water, vitamins' },
      { exam: 'GI hormones & disorders', weightage: 'Moderate', questions: '~0–1 Q/yr', nature: 'Gastrin, secretin, CCK; jaundice, vomiting, diarrhoea, PEM (kwashiorkor vs marasmus)' },
    ],
    correction:
      'Vedantu-type pages headline "4–6 questions" while weightage sites quote "~2%". The 4–6 figure is the entire Human Physiology unit (digestion + breathing + circulation + excretion + neural + chemical coordination + locomotion), not this chapter; the ~2% is a long-run cumulative share, not a single paper. Prepare Digestion & Absorption as a reliable ~2-mark, mostly-recall chapter — finite facts that repeat, so the payback per hour is high.',
    studyOrder: [
      { step: 'Alimentary canal and glands', detail: 'The layout mouth → oesophagus → stomach (cardiac/fundic/pyloric) → small intestine (duodenum/jejunum/ileum) → large intestine, plus the four layers of the gut wall (serosa, muscularis, sub-mucosa, mucosa). Anatomy and labelling questions come straight from this.' },
      { step: 'The enzyme table', detail: 'The spine of the chapter. For each region learn enzyme → substrate → product → optimum pH. Most direct questions are a single row of this table read back to you.' },
      { step: 'Absorption mechanisms by nutrient', detail: 'Glucose and amino acids by active transport into blood; fructose by facilitated transport; fatty acids and glycerol re-formed into chylomicrons that enter the lacteals (lymph), not blood. The "enters blood vs lymph" point is a NEET favourite.' },
      { step: 'GI hormones and the nutrient-digestion summary', detail: 'Gastrin (→ HCl), secretin (→ bicarbonate), CCK (→ bile + pancreatic enzymes); then a one-line summary of where carbohydrate, protein and fat digestion start and finish.' },
      { step: 'Disorders', detail: 'Jaundice, vomiting, diarrhoea, constipation, indigestion, and protein-energy malnutrition (kwashiorkor vs marasmus). A short recall add-on, frequently a single MCQ.' },
    ],
    highYield: [
      {
        topic: 'Enzyme → substrate → product → pH map',
        detail:
          'Salivary amylase (starch → maltose, pH ~6.8), pepsin (proteins → peptides, acidic pH ~1.8), trypsin/chymotrypsin (proteins → peptides, alkaline pH ~8), pancreatic amylase (starch → maltose), pancreatic lipase (fats → fatty acids + glycerol), intestinal maltase/sucrase/lactase. The single most-asked block in the chapter.',
      },
      {
        topic: 'Where each nutrient is absorbed and how',
        detail:
          'Most absorption is in the small intestine (mainly ileum): glucose and amino acids by active transport into blood; fatty acids → chylomicrons → lacteals (lymph). The large intestine absorbs water and some minerals; the mouth and stomach absorb almost nothing (a little water, alcohol, certain drugs).',
      },
      {
        topic: 'Gastrointestinal hormones',
        detail:
          'Gastrin (from stomach → stimulates HCl), secretin (from duodenum → stimulates bicarbonate-rich pancreatic juice and damps gastric secretion), cholecystokinin/CCK (→ bile release from the gall bladder + pancreatic enzymes). Match-the-hormone questions recur most years.',
      },
      {
        topic: 'Bile and emulsification',
        detail:
          'Bile is made by the liver and stored in the gall bladder and contains NO enzymes; bile salts emulsify fat into tiny micelles to give lipase a larger surface to act on. "Bile contains digestive enzymes" is a deliberate NEET trap.',
      },
    ],
    traps: [
      'Thinking bile digests fat. Bile has no enzymes — bile salts only emulsify fat; pancreatic lipase does the actual chemical digestion. The most common error in this chapter.',
      'Mixing up the optimum pH of stomach vs intestinal enzymes. Pepsin needs an acidic pH (~1.8); trypsin needs an alkaline one (~8). Reversing them is a classic slip.',
      'Assuming digested fat enters the blood directly like glucose. Fatty acids and glycerol are re-formed into triglycerides, packaged as chylomicrons, and enter the lacteals (lymph) first — only glucose and amino acids go straight into blood capillaries.',
      'Confusing the gastrin / secretin / CCK jobs — gastrin → HCl, secretin → bicarbonate, CCK → bile + pancreatic enzymes.',
    ],
    faqs: [
      {
        q: 'How many questions come from Digestion and Absorption in NEET?',
        a: 'In recent NEET papers it averages about 2 questions, almost all direct NCERT recall on enzymes, absorption sites and GI hormones. The "4–6 questions" figure quoted online is for the whole Human Physiology unit, and the "~2%" is a long-run cumulative share — not a single paper\'s count from this chapter.',
      },
      {
        q: 'Which topics in Digestion and Absorption are most important for NEET?',
        a: 'The enzyme → substrate → product → pH table, where and how each nutrient is absorbed (especially fats via chylomicrons and lacteals), and the three GI hormones (gastrin, secretin, CCK). These three clusters account for nearly every question the chapter has set.',
      },
      {
        q: 'What is the easiest way to remember the digestive enzymes?',
        a: 'Group them by where they act: mouth (salivary amylase), stomach (pepsin, plus rennin in infants), pancreas (trypsin, chymotrypsin, pancreatic amylase, lipase, nucleases), small intestine (maltase, sucrase, lactase, peptidases). For each, fix substrate → product → optimum pH — that is exactly the form NEET asks them in.',
      },
      {
        q: 'Does fat get absorbed into the blood like glucose?',
        a: 'No. Digested fat (fatty acids + glycerol) is re-formed into small droplets, coated to make chylomicrons, and absorbed into the lacteals of the lymphatic system — not directly into blood capillaries. Glucose and amino acids, by contrast, are absorbed straight into the blood. This blood-vs-lymph distinction is asked frequently.',
      },
    ],
  },
  'neet-biology-chemical-coordination': {
    overview:
      'Chemical Coordination & Integration is one of the most dependable scorers in NEET Biology — across 2013–2024 it has averaged about 2–3 questions per paper (roughly 2.6), and over half of those come from a small set of hormones. It is almost entirely recall, organised as gland → hormone → function → disorder, with a thin layer of mechanism (peptide vs steroid action). Because the facts are finite and repeat year after year, one well-built hormone table plus the hyper-/hypo-secretion disorders turns this into one of the highest marks-per-hour chapters in the syllabus.',
    examSplit: [
      { exam: 'Pituitary–hypothalamus + the high-frequency hormones', weightage: 'Highest share', questions: '~1–2 Q/yr', nature: 'Anterior vs posterior pituitary, hypothalamic control, ADH, oxytocin, TSH, GH and their disorders' },
      { exam: 'Thyroid, parathyroid, adrenal, pancreas', weightage: 'High', questions: '~1 Q/yr', nature: 'T3/T4 & goitre/cretinism, PTH vs calcitonin (Ca²⁺), cortisol/aldosterone/adrenaline, insulin/glucagon & diabetes' },
      { exam: 'Hormone mechanism & other sources', weightage: 'Moderate', questions: '~0–1 Q/yr', nature: 'Peptide (membrane receptor, second messenger) vs steroid (intracellular, gene action); heart (ANF), kidney (renin/erythropoietin)' },
    ],
    correction:
      'Most sites print a gland–hormone table but never say which hormones are actually asked. Question-archive data (2013–2024) shows ADH, TSH, oxytocin, insulin, glucagon, adrenaline and calcitonin together account for well over half the chapter\'s previous-year questions. Drilling that short list — function, gland, and the disorder of over-/under-secretion — is worth far more than memorising all ~30 hormones equally.',
    studyOrder: [
      { step: 'Hypothalamus–pituitary axis first', detail: 'The hypothalamus controls the anterior pituitary through releasing/inhibiting hormones via the hypophyseal portal system, but it MAKES ADH and oxytocin, which are merely stored and released by the posterior pituitary. This anterior-vs-posterior distinction is the single most-tested idea in the chapter.' },
      { step: 'Anterior pituitary tropic hormones', detail: 'GH (gigantism/acromegaly/dwarfism), TSH, ACTH, FSH, LH, prolactin. Learn the target gland of each — that is how the matching questions are framed.' },
      { step: 'Thyroid, parathyroid and the calcium pair', detail: 'T3/T4 and iodine → goitre; hypothyroid cretinism (child) / myxoedema (adult); Graves\' (hyper). Then PTH raises blood Ca²⁺ and calcitonin lowers it — the antagonistic pair.' },
      { step: 'Adrenal and pancreas', detail: 'Cortisol (glucocorticoid, anti-stress), aldosterone (mineralocorticoid, Na⁺/water), adrenaline (emergency "fight-or-flight"); insulin lowers and glucagon raises blood glucose. Note the name trap: diabetes mellitus = insulin problem, diabetes insipidus = ADH problem.' },
      { step: 'Mechanism and other endocrine tissues', detail: 'Peptide hormones act via membrane receptors and a second messenger (cAMP); steroid/thyroid hormones enter the cell and act on genes. Add the non-classical sources: heart (ANF, lowers BP), kidney (renin, erythropoietin), GI hormones.' },
    ],
    highYield: [
      {
        topic: 'The seven most-asked hormones',
        detail:
          'ADH, TSH, oxytocin, insulin, glucagon, adrenaline and calcitonin make up the majority of previous-year questions. For each, fix gland → function → disorder. This is the single highest-return list in the chapter.',
      },
      {
        topic: 'Anterior vs posterior pituitary',
        detail:
          'The anterior pituitary (adenohypophysis) makes and secretes GH/TSH/ACTH/FSH/LH/prolactin under hypothalamic releasing hormones; the posterior pituitary (neurohypophysis) makes nothing — it only stores and releases the hypothalamus-made ADH and oxytocin. The most frequent single question.',
      },
      {
        topic: 'Antagonistic hormone pairs',
        detail:
          'Insulin ↓ vs glucagon ↑ (blood glucose), and PTH ↑ vs calcitonin ↓ (blood Ca²⁺). NEET loves asking the "which raises / which lowers" direction, so fix the arrows.',
      },
      {
        topic: 'Peptide vs steroid hormone action',
        detail:
          'Peptide/protein hormones (insulin, glucagon, ADH) are water-soluble, bind membrane receptors and trigger a second messenger (cAMP); steroid (cortisol, sex hormones) and thyroid hormones are lipid-soluble, enter the cell and switch genes on/off. A near-annual mechanism question.',
      },
    ],
    traps: [
      'Saying the posterior pituitary "produces" ADH and oxytocin. It synthesises no hormone — both are made in the hypothalamus and only stored/released here. The most common error in the chapter.',
      'Confusing diabetes mellitus (insulin deficiency, high blood sugar, glucose in urine) with diabetes insipidus (ADH deficiency, large volumes of dilute urine). Same word "diabetes", completely different hormone.',
      'Reversing PTH and calcitonin — PTH raises blood calcium, calcitonin lowers it.',
      'Assuming all hormones use the same mechanism. Steroid and thyroid hormones act on genes inside the cell; peptide hormones act through membrane receptors and a second messenger. The receptor location flips between the two classes.',
    ],
    faqs: [
      {
        q: 'How many questions come from Chemical Coordination and Integration in NEET?',
        a: 'On average about 2–3 questions per paper (roughly 2.6 across 2013–2024), almost all direct recall on glands, hormones and disorders. Because more than half come from a handful of hormones (ADH, TSH, oxytocin, insulin, glucagon, adrenaline, calcitonin), it is one of the highest marks-per-hour chapters in NEET Biology.',
      },
      {
        q: 'Which hormones are most important for NEET?',
        a: 'ADH, TSH, oxytocin, insulin, glucagon, adrenaline and calcitonin appear most often. For each, learn the gland that secretes it, its function, and the disorder caused by over- or under-secretion — that triplet is exactly how NEET frames the questions.',
      },
      {
        q: 'What is the difference between the anterior and posterior pituitary?',
        a: 'The anterior pituitary (adenohypophysis) actually synthesises and secretes GH, TSH, ACTH, FSH, LH and prolactin, controlled by hypothalamic releasing hormones through a portal blood system. The posterior pituitary (neurohypophysis) synthesises nothing — it only stores and releases ADH and oxytocin, which are made in the hypothalamus. This is the chapter\'s most repeated question.',
      },
      {
        q: 'Is diabetes mellitus the same as diabetes insipidus?',
        a: 'No, and NEET uses the similar names as a trap. Diabetes mellitus is caused by a lack (or ineffectiveness) of insulin and shows high blood glucose and glucose in urine. Diabetes insipidus is caused by a lack of ADH (vasopressin) and shows large volumes of dilute urine, with normal blood sugar.',
      },
    ],
  },
  'neet-chemistry-solutions': {
    overview:
      'Solutions is one of the most predictable scorers in NEET Physical Chemistry — about 2–3 questions a paper (~4% of Chemistry), and the marks sit overwhelmingly in colligative-property numericals. The conceptual frame is small: four colligative properties, all proportional to the number of solute particles, with the van\'t Hoff factor (i) correcting for dissociation or association. Because the formulas are few and the question types repeat, it rewards drilling a handful of numerical patterns and getting the value of i right every time — which is exactly where most students drop the mark.',
    examSplit: [
      { exam: 'Colligative properties (numericals)', weightage: 'Highest share', questions: '~1–2 Q/yr', nature: 'ΔTb, ΔTf, osmotic pressure π, relative lowering of vapour pressure; solve for molar mass or i' },
      { exam: 'Van\'t Hoff factor & abnormal molar mass', weightage: 'High', questions: '~1 Q/yr', nature: 'i for dissociation (NaCl, BaCl₂, K₄[Fe(CN)₆]) and association (benzoic acid in benzene); degree of dissociation/association' },
      { exam: 'Raoult\'s law, Henry\'s law & solution types', weightage: 'Moderate', questions: '~0–1 Q/yr', nature: 'Ideal vs non-ideal (positive/negative deviation), azeotropes, Henry\'s law (gas solubility, KH)' },
    ],
    correction:
      'Pages quote "~4%, 2–3 questions" and stop there. The hidden truth is where the marks actually fall: nearly every question reduces to one of the four colligative formulas, and the single biggest source of lost marks is the van\'t Hoff factor i — students either forget to include it or compute it wrongly for electrolytes. Treat Solutions as a "get i right, then plug in" chapter, not a theory chapter.',
    studyOrder: [
      { step: 'Concentration terms', detail: 'Molality (mol/kg — temperature-independent, the one colligative formulas use), mole fraction, molarity, ppm. Make the molality calculation reflexive; many numericals fail at this first step.' },
      { step: 'Raoult\'s law and vapour pressure', detail: 'p = x·p° for each component; relative lowering of vapour pressure equals the mole fraction of solute. This is also the bridge to ideal vs non-ideal solutions.' },
      { step: 'The four colligative properties', detail: 'Relative lowering of VP, elevation of boiling point ΔTb = i·Kb·m, depression of freezing point ΔTf = i·Kf·m, osmotic pressure π = i·C·R·T. Learn them as one family — all proportional to particle count.' },
      { step: 'Van\'t Hoff factor i', detail: 'i = 1 + (n−1)α for dissociation (α = degree of dissociation, n = particles per formula unit) and i = 1 + (1/n − 1)α for association. Fix the standard values: NaCl → 2, BaCl₂/CaCl₂ → 3, K₄[Fe(CN)₆] → 5, glucose/urea → 1, benzoic acid dimerising in benzene → ~0.5.' },
      { step: 'Abnormal molar mass and deviations', detail: 'When i ≠ 1 the experimentally found molar mass is "abnormal"; i = normal molar mass / abnormal molar mass. Then positive vs negative deviation from Raoult\'s law and azeotropes.' },
    ],
    highYield: [
      {
        topic: 'The four colligative formulas with i',
        detail:
          'ΔTb = i·Kb·m, ΔTf = i·Kf·m, π = i·C·R·T, and relative lowering of VP = i·(mole fraction of solute). Every numerical is one of these rearranged — usually to find the molar mass of the solute or the value of i.',
      },
      {
        topic: 'Van\'t Hoff factor values',
        detail:
          'i > 1 for solutes that dissociate (NaCl 2, BaCl₂ 3, Al₂(SO₄)₃ 5), i < 1 for solutes that associate (benzoic/acetic acid dimerising in benzene ≈ 0.5), i = 1 for non-electrolytes (glucose, urea). Picking i correctly is the step that decides the answer.',
      },
      {
        topic: 'Osmotic pressure as the "best" colligative property',
        detail:
          'π = iCRT is preferred for finding molar masses of large molecules (proteins, polymers) because the values are measurable at room temperature and it uses molarity directly. A frequent reasoning MCQ.',
      },
      {
        topic: 'Henry\'s law and gas solubility',
        detail:
          'Solubility of a gas ∝ its partial pressure (p = KH·x); a higher KH means lower solubility, and solubility falls as temperature rises. This explains why a soda bottle fizzes on opening and why divers get the bends — favourite application MCQs.',
      },
    ],
    traps: [
      'Forgetting the van\'t Hoff factor i for electrolytes — NaCl gives 2 particles, so ΔTf is doubled. Leaving i out (or applying it to glucose, where i = 1) is the single most common error in the chapter.',
      'Using molarity where the formula needs molality. ΔTb and ΔTf use molality (mol solute / kg solvent), which doesn\'t change with temperature; only osmotic pressure uses molarity.',
      'Treating association like dissociation. Benzoic acid in benzene dimerises, so i < 1 and the colligative effect is smaller, not larger — the sign of (i − 1) flips.',
      'Confusing Kb/Kf with the actual temperature change. Kb and Kf are per-molal constants of the solvent; the observed ΔT equals Kb (or Kf) multiplied by i and m.',
    ],
    faqs: [
      {
        q: 'How many questions come from Solutions in NEET?',
        a: 'About 2–3 questions per paper (roughly 4% of the Chemistry section), and most are numerical. The bulk come from the four colligative properties and the van\'t Hoff factor, with a few conceptual questions on Raoult\'s law, Henry\'s law and ideal vs non-ideal solutions.',
      },
      {
        q: 'Which topics in Solutions are most important for NEET?',
        a: 'Colligative-property numericals (boiling-point elevation, freezing-point depression, osmotic pressure) and the van\'t Hoff factor / abnormal molar mass. Together these are the majority of the chapter\'s questions, so master the four formulas and the value of i for common electrolytes first.',
      },
      {
        q: 'What is the van\'t Hoff factor and why does it matter?',
        a: 'It is the ratio of the actual number of particles in solution to the formula units dissolved (i = observed colligative effect / expected effect). For dissociating solutes i > 1 (NaCl ≈ 2, BaCl₂ ≈ 3), for associating solutes i < 1 (benzoic acid in benzene ≈ 0.5), and for non-electrolytes i = 1. Every colligative formula is multiplied by i, so getting it wrong is the most common way to lose the mark.',
      },
      {
        q: 'Why is molality used instead of molarity in colligative formulas?',
        a: 'Molality is moles of solute per kilogram of solvent, which doesn\'t change with temperature, whereas molarity (per litre of solution) changes as the solution expands or contracts on heating. Since boiling-point elevation and freezing-point depression involve temperature changes, molality keeps the concentration fixed; only osmotic pressure, measured at a constant temperature, uses molarity.',
      },
    ],
  },
  'neet-physics-laws-of-motion': {
    overview:
      'Laws of Motion is the backbone chapter of NEET mechanics. As a standalone topic it gives about 2–3 questions a paper, but its real footprint is far larger: the free-body-diagram (FBD) skill it teaches is the fast route through circular motion, work-energy and rotation questions too. Sources that quote "~2%, 1 question" are counting only the questions tagged to this chapter; the FBD method itself is reused across a much bigger share of the Physics section. The chapter is half concept (Newton\'s three laws, friction) and half technique (drawing the FBD and writing F = ma per body) — and the technique is what separates fast solvers from slow ones.',
    examSplit: [
      { exam: 'Newton\'s laws, FBD & connected bodies', weightage: 'Highest share', questions: '~1–2 Q/yr', nature: 'F = ma per body, pulleys/Atwood, blocks in contact, tension, apparent weight in a lift' },
      { exam: 'Friction', weightage: 'High', questions: '~1 Q/yr', nature: 'Static vs kinetic (fs ≤ μsN, fk = μkN), angle of repose, block on incline, friction direction' },
      { exam: 'Circular dynamics & pseudo-forces', weightage: 'Moderate', questions: '~0–1 Q/yr', nature: 'Banking of roads (with/without friction), conical pendulum, motion in non-inertial frames' },
    ],
    correction:
      'pw-type notes quote "2% weightage, about 1 question a year" and stop. That undercounts the chapter\'s value: as a tagged topic it is closer to 2–3 questions, and the FBD technique you learn here is reused across circular motion, work-energy and rotational mechanics — so the hours spent here pay back across roughly a quarter of the Physics paper, not just one question.',
    studyOrder: [
      { step: 'The three laws, properly understood', detail: 'Inertia (first law), F = ma as the working tool (second law), and action–reaction as forces on DIFFERENT bodies (third law). The third-law "different bodies" point is itself a common conceptual question.' },
      { step: 'The free-body-diagram method', detail: 'For each body draw weight (mg ↓), normal (⊥ to surface), tension, friction, and applied forces, then write ΣF = ma along chosen axes. Make this a fixed routine — most mistakes are a missing or mis-directed force, not the algebra.' },
      { step: 'Friction', detail: 'Static friction is self-adjusting up to a maximum (fs ≤ μsN); kinetic friction is roughly constant (fk = μkN) with μk < μs; tan(angle of repose) = μs. The "friction adjusts to prevent motion until it can\'t" idea drives most friction MCQs.' },
      { step: 'Connected bodies and the lift problem', detail: 'Atwood machine, blocks joined by strings or over pulleys (find the common acceleration first, then the tension), and apparent weight in an accelerating lift, N = m(g ± a). High-frequency numerical types.' },
      { step: 'Circular dynamics and pseudo-forces', detail: 'Centripetal requirement mv²/r supplied by a real force (tension/friction/normal component), banking of roads (vmax = √(rg·tanθ) without friction), and pseudo-forces in non-inertial frames. The hardest sub-topic — do it last.' },
    ],
    highYield: [
      {
        topic: 'Free-body diagrams and connected bodies',
        detail:
          'The dominant question type. For pulley/contact problems, find the common acceleration of the system first, then isolate one body for the tension or contact force. Getting the FBD right is about 80% of the solution.',
      },
      {
        topic: 'Friction essentials',
        detail:
          'fs ≤ μsN (self-adjusting), fk = μkN (constant), μk < μs, and tan(angle of repose) = μs. On an incline a block stays put until tanθ exceeds μs. The most common friction trap is assuming friction always equals μN even when the body is not sliding.',
      },
      {
        topic: 'Apparent weight in a lift',
        detail:
          'N = m(g + a) when accelerating up, N = m(g − a) when accelerating down, and N = 0 in free fall (weightlessness). A near-guaranteed conceptual question somewhere in mechanics.',
      },
      {
        topic: 'Banking of roads',
        detail:
          'The safe-speed condition. Without friction vmax = √(rg·tanθ); adding friction raises the maximum speed. Pair it with the conical pendulum, which uses the same "horizontal component supplies the centripetal force" logic.',
      },
    ],
    traps: [
      'Treating action and reaction as forces on the same body that "cancel". They act on different bodies, so they never cancel in a single body\'s FBD; only forces on the SAME body sum to zero in equilibrium. The most common conceptual error.',
      'Using friction = μN when the body is stationary. Static friction is only as large as needed (up to μsN); on a body that is not about to slide it equals the applied force, not μsN.',
      'Calling centripetal force a new, separate force. It is the NET inward force supplied by real forces (tension, friction, a component of normal or gravity) — not an extra force to add to the FBD.',
      'Forgetting the direction of kinetic friction. It opposes the relative sliding direction, which on a driven wheel or a block on a moving belt can be opposite to what intuition suggests.',
    ],
    faqs: [
      {
        q: 'How many questions come from Laws of Motion in NEET?',
        a: 'As a tagged chapter it is about 2–3 questions per paper, mostly on free-body diagrams, friction and connected bodies. But its real weight is larger: the FBD technique you learn here is reused across circular motion, work-energy and rotation, so it influences far more than the handful of questions labelled "Laws of Motion".',
      },
      {
        q: 'Which topics in Laws of Motion are most important for NEET?',
        a: 'Free-body diagrams with connected bodies (pulleys, blocks in contact, lift problems), friction (static vs kinetic, angle of repose, block on incline) and circular dynamics (banking of roads, conical pendulum). Friction and FBD-based Newton\'s-second-law questions together are the majority of the chapter.',
      },
      {
        q: 'Is Laws of Motion hard for NEET?',
        a: 'It is moderate. The concepts (three laws, friction) are simple to state; the difficulty is purely technique — drawing a complete free-body diagram and writing F = ma for each body correctly. Once the FBD routine is automatic, most questions become quick, which is why it is worth over-practising early.',
      },
      {
        q: 'What is the difference between static and kinetic friction?',
        a: 'Static friction acts on a body that is not yet sliding and self-adjusts from zero up to a maximum of μsN to prevent motion; kinetic friction acts once the body is sliding and stays roughly constant at μkN. Since μk < μs, it takes more force to start an object moving than to keep it moving — a frequently tested idea.',
      },
    ],
  },

  /* ───────────── NEET Chemistry — GOC & Hydrocarbons ─────────────
     The single biggest non-branded page on the site: 972 impressions in the
     28 days to 2026-08-29, of which ~778 come from "goc full form" and its
     variants at position ~9 with ZERO clicks. The page is 5,500 words and
     mentions "full form" exactly once, buried in an FAQ, so a searcher asking
     what GOC stands for gets no visible answer. The overview below therefore
     opens with the expansion in plain words before any weightage talk.
     Weightage figures verified Sept 2026 against published 2020–2024 NEET
     chapter analyses; the pattern correction against NTA's 2025 change. */
  'neet-chemistry-organic-basics': {
    overview:
      'GOC stands for General Organic Chemistry — the foundation block of organic chemistry covering IUPAC nomenclature, electronic effects (inductive, mesomeric, hyperconjugation), isomerism, and the stability of reaction intermediates (carbocations, carbanions, free radicals). Paired here with Hydrocarbons (alkanes, alkenes, alkynes, aromatics), it is where every other organic chapter gets its vocabulary. Published chapter analyses put this pair at roughly 6–7% of the NEET Chemistry paper — about 3–4 of its 45 questions — but that figure badly understates it, because GOC is not really a topic you are tested on once. Organic chemistry supplies roughly 17–18 of the 45 Chemistry questions, and almost every one of them silently assumes GOC: you cannot decide a reaction product without knowing which intermediate is more stable, and you cannot read the question without IUPAC naming. Treat the 3–4 "GOC questions" as the visible tip and the chapter as the entry fee for a third of the paper.',
    examSplit: [
      { exam: 'NEET — GOC + Hydrocarbons directly', weightage: '~6–7% of Chemistry', questions: '~3–4 per year', nature: 'IUPAC naming, isomer counting, stability ordering, hydrocarbon named reactions' },
      { exam: 'NEET — organic overall (GOC-dependent)', weightage: '~35–40% of Chemistry', questions: '~17–18 per year', nature: 'Every organic question assumes GOC fluency; Hydrocarbons alone averages ~4.9% (2020–2024)' },
      { exam: 'Depth needed', weightage: '—', questions: '—', nature: 'NCERT-level. NEET does not ask JEE-Advanced mechanism depth — do not over-study reaction mechanisms at the cost of nomenclature and stability' },
    ],
    correction:
      'Many chapter-weightage articles still describe the Chemistry section as "50 questions, attempt 45". That pattern is gone. From NEET 2025 the NTA removed the optional Section B, so all 180 questions are compulsory — Physics 45, Chemistry 45, Botany 45, Zoology 45, for 720 marks in 180 minutes at +4 / −1. The practical consequence for a GOC-heavy revision plan is that you can no longer skip your four weakest organic questions: there is nothing optional left to drop, so breadth across the chapter now matters more than it did before 2025.',
    studyOrder: [
      { step: 'IUPAC nomenclature first', detail: 'Not because it carries the most marks, but because you cannot read the other questions without it. Learn the parent-chain rule, the priority order of functional groups, and numbering for lowest locants. Naming appears directly in roughly a fifth to a quarter of GOC questions and indirectly in nearly all of them.' },
      { step: 'Electronic effects (+I/−I, +M/−M, hyperconjugation)', detail: 'These are the causes; everything downstream is an effect. Fix which groups donate and which withdraw, and by which mechanism. Almost every "arrange in order of stability / acidity / basicity" question is one of these effects applied consistently.' },
      { step: 'Stability of intermediates', detail: 'Carbocations (3° > 2° > 1°, with resonance beating hyperconjugation), carbanions (reverse of carbocations), and free radicals. This is the step that converts electronic effects into predicted products, and it is the highest-value single idea in the chapter.' },
      { step: 'Isomerism — structural, then stereo', detail: 'Chain, position, functional, metamerism and tautomerism first; then geometrical (cis/trans, E/Z) and optical (chirality, R/S, counting stereoisomers as 2ⁿ). Isomer-counting questions are among the most common in the chapter and are pure practice.' },
      { step: 'Hydrocarbon reactions last', detail: 'Alkanes, alkenes, alkynes and aromatics. Only now, because Markownikoff, peroxide effect and electrophilic aromatic substitution all reduce to "which intermediate is more stable" plus "which group directs where" — the two things you just learned.' },
    ],
    highYield: [
      {
        topic: 'Stability ordering of carbocations, carbanions and free radicals',
        detail:
          'The most reused idea in the chapter. Carbocation stability rises with alkyl substitution (hyperconjugation) and jumps sharply with resonance — allyl and benzyl beat 3° alkyl. Carbanion stability runs the opposite way (1° > 2° > 3°) and is boosted by electron-withdrawing groups. Get this ordering automatic and a large share of organic questions across the whole paper become one-step.',
      },
      {
        topic: 'IUPAC nomenclature and functional-group priority',
        detail:
          'Pick the parent chain containing the principal functional group, number for the lowest locant set, and cite substituents alphabetically. The recurring trap is priority order — carboxylic acid > ester > amide > nitrile > aldehyde > ketone > alcohol > amine — which decides both the suffix and the numbering direction.',
      },
      {
        topic: 'Isomer counting, including stereoisomers',
        detail:
          'Structural isomer counting for a given molecular formula, and optical isomers via 2ⁿ for n unlike chiral centres (with meso forms subtracted where a plane of symmetry exists). These are asked as direct "how many isomers" questions and reward practice rather than theory.',
      },
      {
        topic: 'Markownikoff, anti-Markownikoff and directing effects',
        detail:
          'HBr adds Markownikoff (H to the carbon already carrying more H) because it goes through the more stable carbocation; add peroxide and the free-radical route flips it — and only for HBr, not HCl or HI. In aromatics, −OH/−NH₂/alkyl are o,p-directing activators while −NO₂/−CN/−COOH are m-directing deactivators. Both rules are stability arguments wearing different clothes.',
      },
    ],
    traps: [
      'Ranking carbanion stability the same way as carbocation stability. They run in opposite directions: alkyl groups stabilise a carbocation and destabilise a carbanion, so 3° is the most stable cation but the least stable anion.',
      'Applying the peroxide (anti-Markownikoff) effect to HCl or HI. It works only for HBr — the H–Cl bond is too strong and the H–I bond too weak for the radical chain to propagate. Questions test this exception directly.',
      'Getting the IUPAC numbering direction from the substituents instead of the principal functional group. The functional group with the highest priority fixes the suffix and gets the lowest locant; substituent positions are settled afterwards.',
      'Counting optical isomers as 2ⁿ without checking for meso forms. A molecule with a plane of symmetry has fewer stereoisomers than the formula predicts — the classic tartaric-acid case.',
      'Treating hyperconjugation and resonance as interchangeable. Resonance is the stronger stabilising effect; when a question pits an allyl or benzyl system against a 3° alkyl one, resonance wins.',
    ],
    faqs: [
      {
        q: 'How many questions come from GOC and Hydrocarbons in NEET?',
        a: 'Directly, about 3–4 questions a year — roughly 6–7% of the 45-question Chemistry paper, with Hydrocarbons alone averaging close to 4.9% across the 2020–2024 papers. That number understates the chapter badly, though: organic chemistry supplies about 17–18 of the 45 Chemistry questions, and essentially all of them assume GOC fluency for nomenclature, electronic effects and intermediate stability.',
      },
      {
        q: 'Is GOC hard for NEET?',
        a: 'It is rated hard mainly because it is cumulative rather than because any single idea is difficult. Nomenclature, electronic effects, intermediate stability and isomerism each build on the previous one, so a gap early on breaks everything downstream and the chapter feels impossible. Studied in that order it is one of the highest marks-per-hour chapters in organic chemistry, because the same few ideas keep reappearing.',
      },
      {
        q: 'How much of the NEET Chemistry paper is organic chemistry?',
        a: 'Roughly 35–40% — about 17–18 of the 45 questions, spread across GOC, Hydrocarbons, Haloalkanes, Alcohols/Phenols/Ethers, Aldehydes/Ketones/Carboxylic Acids, Amines and Biomolecules. Since NEET 2025 removed the optional Section B, all of those questions are compulsory, so weak spots in organic can no longer be skipped.',
      },
    ],
  },
};

/** Returns the curated enrichment for a chapter slug, or undefined if none exists. */
export function getChapterEnrichment(slug: string): ChapterEnrichment | undefined {
  return ENRICHMENTS[slug];
}
