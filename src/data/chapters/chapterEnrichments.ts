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

  'jee-physics-gravitation': {
    overview:
      'Gravitation is a compact, dependable scorer that most weightage articles describe in JEE Main terms only. In Main it is 1–2 mostly-direct questions per shift — variation of g, escape and orbital velocity, satellite energy and Kepler\'s laws. In Advanced it appears less often but more deeply: gravitation fused with SHM (the classic tunnel-through-the-earth problem), with energy conservation, or with rotational ideas. The formulas are few and the question types repeat, which is why a focused week usually makes this chapter exam-ready.',
    examSplit: [
      { exam: 'JEE Main', weightage: '~3–5% of Physics', questions: '1–2 per shift', nature: 'Direct: g with height/depth, escape vs orbital velocity, satellite energy, Kepler\'s third law' },
      { exam: 'JEE Advanced', weightage: '~3–4%, fused', questions: '~1, multi-concept', nature: 'Gravitation + SHM (tunnel through earth), orbital energy/transfer, field & potential of distributions' },
    ],
    correction:
      'You will see "5–7%, 4–5 questions" quoted (e.g. 4 in 2023, 4 in 2024, 5 in 2025). That count is aggregated across all shifts/sessions of a year, not what one student faces. In a single JEE Main paper, expect 1–2 Gravitation questions — plan your prep time against that, not the inflated annual total.',
    studyOrder: [
      { step: 'Newton\'s law, gravitational field and potential', detail: 'F = GMm/r², field g = GM/r², and potential V = −GM/r. Fix the sign convention now (potential and potential energy are negative, zero at infinity) — most chapter errors trace back to a dropped minus sign.' },
      { step: 'Variation of g', detail: 'With height: g_h = g(1 − 2h/R) for h ≪ R; with depth: g_d = g(1 − d/R); plus the effect of Earth\'s rotation (g is least at the equator). The height and depth formulas look alike but are not — mixing them up is the classic trap.' },
      { step: 'Escape and orbital velocity', detail: 'v_orbital = √(GM/r) for a circular orbit, v_escape = √(2GM/R). The neat relation v_escape = √2 · v_orbital (at the surface) is a frequent one-line question, and escape velocity is independent of the projectile\'s mass and direction.' },
      { step: 'Satellite energy', detail: 'For a circular orbit: KE = +GMm/2r, PE = −GMm/r, total E = −GMm/2r. So total energy is negative (bound) and equal to −KE. Binding energy = GMm/2r. These three lines answer most satellite-energy questions.' },
      { step: 'Kepler\'s laws', detail: 'Law of orbits (ellipse), law of areas (areal velocity constant = angular-momentum conservation), and T² ∝ r³. Most Kepler questions are ratio problems built on T² ∝ r³ or on equal-area reasoning at perigee/apogee.' },
    ],
    highYield: [
      {
        topic: 'Satellite energy relations',
        detail:
          'For a circular orbit, E = −GMm/2r, KE = −E, PE = 2E. Questions ask for the energy needed to move a satellite to a higher orbit (ΔE = GMm/2 · (1/r₁ − 1/r₂)) or for the binding energy. Knowing E = −KE closes almost all of them.',
      },
      {
        topic: 'Variation of g with height and depth',
        detail:
          'g_h = g(1 − 2h/R) near the surface (and g(R/(R+h))² in general); g_d = g(1 − d/R). At the centre of the Earth g = 0. The factor of 2 in the height formula versus its absence in the depth formula is the most-tested distinction.',
      },
      {
        topic: 'Escape vs orbital velocity',
        detail:
          'v_orbital = √(GM/r), v_escape = √(2GM/R), so v_escape = √2 · v_orbital at the surface (≈ 11.2 km/s for Earth). Escape velocity does not depend on the mass or launch direction of the body — a recurring conceptual question.',
      },
      {
        topic: 'Kepler\'s third law and areal velocity',
        detail:
          'T² ∝ r³ (or a³ for an ellipse) drives the ratio problems; conservation of areal velocity (r²ω = constant) gives the speed ratio at perigee and apogee (v_p · r_p = v_a · r_a). These two ideas cover the Kepler questions.',
      },
    ],
    traps: [
      'Dropping the negative sign in gravitational PE/potential. Gravitational potential energy is −GMm/r (zero at infinity, more negative closer in); a positive PE is almost always a sign error.',
      'Swapping the height and depth formulas for g: it is g(1 − 2h/R) for height but g(1 − d/R) for depth — the factor of 2 only appears with height.',
      'Thinking escape velocity depends on the mass or direction of the object. It depends only on the planet (√(2GM/R)); the launch angle and projectile mass do not matter.',
      'Forgetting that a satellite\'s total energy is negative and equals −KE. Treating PE as positive, or total energy as KE + |PE|, gives the wrong binding energy.',
    ],
    faqs: [
      {
        q: 'How many questions come from Gravitation in JEE Main?',
        a: 'Usually 1–2 per shift (about 3–5% of the Physics section). The "4–5 questions a year" figure quoted online aggregates across all sessions and shifts — in your single paper, plan for one or two, most of them direct numericals on g-variation, escape/orbital velocity, satellite energy and Kepler\'s laws.',
      },
      {
        q: 'Is Gravitation important for JEE Advanced?',
        a: 'It appears less frequently than mechanics heavyweights, but when it does, Advanced goes deeper — fusing gravitation with SHM (a body dropped through a tunnel in the Earth executes SHM), with orbital-energy and orbit-transfer problems, or with field/potential of mass distributions. It is worth a solid pass for Advanced even though it is not the highest-frequency chapter.',
      },
      {
        q: 'Is Gravitation easy to score in JEE?',
        a: 'Yes — it has few formulas and the question types repeat, so it is one of the fastest chapters to make exam-ready. The care points are sign conventions in potential energy and not mixing up the height and depth formulas for g.',
      },
      {
        q: 'What is the relation between escape velocity and orbital velocity?',
        a: 'At the planet\'s surface, escape velocity = √2 × orbital velocity, because v_orbital = √(GM/R) and v_escape = √(2GM/R). For Earth that gives about 11.2 km/s escape versus about 7.9 km/s for a low orbit. Escape velocity is independent of the body\'s mass and launch direction.',
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
};

/** Returns the curated enrichment for a chapter slug, or undefined if none exists. */
export function getChapterEnrichment(slug: string): ChapterEnrichment | undefined {
  return ENRICHMENTS[slug];
}
