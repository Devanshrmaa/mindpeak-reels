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
};

/** Returns the curated enrichment for a chapter slug, or undefined if none exists. */
export function getChapterEnrichment(slug: string): ChapterEnrichment | undefined {
  return ENRICHMENTS[slug];
}
