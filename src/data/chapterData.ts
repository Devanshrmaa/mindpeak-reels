import type { LucideIcon } from 'lucide-react';
import {
  Atom, FlaskConical, Calculator, Microscope, Zap, Magnet,
  Waves, Sun, Thermometer, Droplets, Wind, Lightbulb, Gauge,
  Beaker, Flame, Leaf, Heart, Brain, Bug, TreePine, Dna, Eye,
  Target,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CHAPTER DATA — for programmatic chapter-wise SEO pages
   Every chapter generates a dedicated page with:
   - H1 targeting "[Subject] [Chapter] for JEE/NEET"
   - 10+ topics
   - Important formulas / key points
   - Previous year question stats
   - FAQ schema
   ═══════════════════════════════════════════════════════════════ */

export interface ChapterData {
  slug: string;
  exam: 'JEE' | 'NEET';
  subject: string;
  chapter: string;
  icon: LucideIcon;
  weightage: string;         // e.g. "8-10%"
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  pyqCount: number;          // questions in last 10 years
  description: string;       // 2-3 sentences for meta + hero
  topics: string[];          // sub-topics covered
  keyFormulas: string[];     // important formulas / facts
  commonMistakes: string[];  // 3-5 common errors
  faqs: { q: string; a: string }[];
}

export const chapters: ChapterData[] = [
  /* ═══════════ JEE PHYSICS (18 chapters) ═══════════ */
  {
    slug: 'jee-physics-mechanics',
    exam: 'JEE', subject: 'Physics', chapter: 'Mechanics',
    icon: Gauge,
    weightage: '25-30%', difficulty: 'Hard', pyqCount: 180,
    description: 'Mechanics is the highest-weightage topic in JEE Physics, forming 25-30% of the paper. Master kinematics, Newton\'s laws, work-energy, rotational motion, and gravitation with MindPeak\'s 1-on-1 coaching.',
    topics: ['Kinematics in 1D & 2D', 'Newton\'s Laws of Motion', 'Friction & Constraints', 'Work, Energy & Power', 'Center of Mass & Collisions', 'Rotational Motion & Moment of Inertia', 'Gravitation', 'Simple Harmonic Motion', 'Fluid Mechanics'],
    keyFormulas: ['v = u + at', 's = ut + ½at²', 'F = ma', 'W = F·d·cosθ', 'KE = ½mv²', 'PE = mgh', 'τ = Iα', 'T = 2π√(l/g)', 'P = ρgh'],
    commonMistakes: ['Confusing velocity and speed in vector problems', 'Ignoring pseudo forces in non-inertial frames', 'Wrong sign convention in energy conservation', 'Forgetting centripetal acceleration in circular motion', 'Mixing up moment of inertia formulas'],
    faqs: [
      { q: 'How important is Mechanics for JEE Advanced?', a: 'Mechanics is the most important topic — 25-30% of JEE Physics. Mastering it gives you a strong foundation for other topics like waves and thermodynamics. At MindPeak, our mentors spend the first 2 months solidifying mechanics before moving ahead.' },
      { q: 'What is the best way to prepare Mechanics for JEE?', a: 'Start with kinematics, then Newton\'s laws, then energy methods. Solve 50+ problems per sub-topic. Focus on free body diagrams — 80% of mechanics problems become easy once you draw the FBD correctly.' },
      { q: 'Which books are best for JEE Mechanics?', a: 'HC Verma (concepts), DC Pandey (practice), Irodov (advanced). MindPeak provides curated problem sets from all three, ranked by difficulty.' },
      { q: 'How many questions come from Mechanics in JEE?', a: 'Typically 8-10 questions out of 30 in JEE Physics section, making it the single most important chapter group.' },
    ],
  },
  {
    slug: 'jee-physics-electrostatics',
    exam: 'JEE', subject: 'Physics', chapter: 'Electrostatics',
    icon: Zap,
    weightage: '8-10%', difficulty: 'Moderate', pyqCount: 85,
    description: 'Electrostatics covers Coulomb\'s law, electric fields, Gauss\'s theorem, potential, and capacitance. It forms 8-10% of JEE Physics and links directly to current electricity.',
    topics: ['Coulomb\'s Law', 'Electric Field & Field Lines', 'Gauss\'s Theorem', 'Electric Potential & Potential Energy', 'Equipotential Surfaces', 'Capacitors & Dielectrics', 'Energy Stored in Capacitors'],
    keyFormulas: ['F = kq₁q₂/r²', 'E = kq/r²', '∮E·dA = q/ε₀', 'V = kq/r', 'C = ε₀A/d', 'U = ½CV²'],
    commonMistakes: ['Confusing electric field direction with force direction for negative charges', 'Wrong Gaussian surface selection', 'Forgetting to account for dielectric constant', 'Sign errors in potential difference calculations'],
    faqs: [
      { q: 'How important is Electrostatics for JEE?', a: 'Electrostatics carries 8-10% weightage and is a prerequisite for current electricity and electromagnetism. Combined, electricity topics form ~25% of JEE Physics.' },
      { q: 'Is Electrostatics difficult for JEE?', a: 'Moderate difficulty. The key is mastering Gauss\'s law applications and capacitor combinations. With proper 1-on-1 guidance, students typically master it in 2-3 weeks.' },
      { q: 'What are the most important formulas in Electrostatics?', a: 'Coulomb\'s law, Gauss\'s theorem, capacitance formulas, and energy stored in a capacitor. These 6 formulas solve 90% of electrostatics problems.' },
    ],
  },
  {
    slug: 'jee-physics-current-electricity',
    exam: 'JEE', subject: 'Physics', chapter: 'Current Electricity',
    icon: Zap,
    weightage: '6-8%', difficulty: 'Moderate', pyqCount: 70,
    description: 'Current Electricity covers Ohm\'s law, Kirchhoff\'s laws, Wheatstone bridge, and RC circuits. A scoring chapter in JEE with direct formula-based questions.',
    topics: ['Ohm\'s Law & Resistance', 'Kirchhoff\'s Laws', 'Wheatstone Bridge', 'Meter Bridge & Potentiometer', 'RC Circuits', 'Heating Effect of Current', 'EMF & Internal Resistance'],
    keyFormulas: ['V = IR', 'P = I²R = V²/R', 'R = ρl/A', 'KVL: ΣV = 0', 'KCL: ΣI = 0'],
    commonMistakes: ['Wrong current direction assumption in Kirchhoff\'s loops', 'Forgetting internal resistance of battery', 'Confusing series and parallel resistance formulas'],
    faqs: [
      { q: 'Is Current Electricity scoring for JEE?', a: 'Very scoring! Most questions are direct formula applications. Master Kirchhoff\'s laws and you can solve 90% of problems.' },
      { q: 'How to prepare Current Electricity for JEE?', a: 'Start with simple circuits, then move to complex networks. Practice Kirchhoff\'s law problems extensively. MindPeak mentors teach circuit-solving shortcuts.' },
    ],
  },
  {
    slug: 'jee-physics-magnetism',
    exam: 'JEE', subject: 'Physics', chapter: 'Magnetism & Electromagnetic Induction',
    icon: Magnet,
    weightage: '8-10%', difficulty: 'Hard', pyqCount: 90,
    description: 'Magnetic effects of current, electromagnetic induction, and AC circuits form 8-10% of JEE Physics. Conceptually challenging but highly scoring with proper preparation.',
    topics: ['Biot-Savart Law', 'Ampere\'s Circuital Law', 'Force on Moving Charge in B', 'Magnetic Dipole', 'Faraday\'s Law of EMI', 'Lenz\'s Law', 'Self & Mutual Inductance', 'AC Circuits & Resonance'],
    keyFormulas: ['F = qv×B', 'dB = μ₀Idl×r̂/4πr²', 'emf = -dΦ/dt', 'L = μ₀n²Al', 'Xₗ = ωL', 'Xc = 1/ωC'],
    commonMistakes: ['Wrong direction of induced EMF (Lenz\'s law)', 'Confusing magnetic field inside vs outside solenoid', 'Errors in AC phasor diagrams', 'Missing negative sign in Faraday\'s law'],
    faqs: [
      { q: 'Is EMI difficult for JEE Advanced?', a: 'EMI is conceptually challenging but follows clear laws. Most students struggle because they skip the foundational concepts of magnetic flux. With 1-on-1 coaching, we build intuition first, then problem-solving.' },
      { q: 'How many questions come from Magnetism in JEE?', a: 'Typically 3-4 questions combining magnetic effects + EMI + AC circuits. This cluster is worth 8-10% of the physics paper.' },
    ],
  },
  {
    slug: 'jee-physics-optics',
    exam: 'JEE', subject: 'Physics', chapter: 'Optics',
    icon: Eye,
    weightage: '8-10%', difficulty: 'Moderate', pyqCount: 80,
    description: 'Optics covers ray optics (reflection, refraction, lenses) and wave optics (interference, diffraction). Forms 8-10% of JEE Physics with predictable question patterns.',
    topics: ['Reflection & Mirrors', 'Refraction & Snell\'s Law', 'Total Internal Reflection', 'Lenses & Lens Maker\'s Formula', 'Optical Instruments', 'Young\'s Double Slit Experiment', 'Diffraction', 'Polarization'],
    keyFormulas: ['1/v - 1/u = 1/f', 'n₁sinθ₁ = n₂sinθ₂', '1/f = (n-1)(1/R₁ - 1/R₂)', 'dsinθ = nλ', 'β = λD/d'],
    commonMistakes: ['Sign convention errors in mirror/lens formula', 'Confusing real and virtual images', 'Wrong fringe width formula application', 'Forgetting angular resolution in diffraction'],
    faqs: [
      { q: 'Is Optics easy for JEE?', a: 'Optics is moderately easy if you master sign conventions. Ray optics is formula-based (scoring), wave optics needs conceptual understanding. Together they\'re very scoring.' },
      { q: 'How to study Optics for JEE Advanced?', a: 'Master ray optics first (2 weeks), then wave optics (1 week). Practice sign convention rigorously. Solve 30+ YDSE problems — they appear almost every year.' },
    ],
  },
  {
    slug: 'jee-physics-thermodynamics',
    exam: 'JEE', subject: 'Physics', chapter: 'Thermodynamics & Heat',
    icon: Thermometer,
    weightage: '6-8%', difficulty: 'Moderate', pyqCount: 65,
    description: 'Thermodynamics covers laws of thermodynamics, heat transfer, kinetic theory of gases, and thermal expansion. A scoring chapter with 6-8% weightage in JEE.',
    topics: ['Zeroth & First Law of Thermodynamics', 'Heat Engines & Carnot Cycle', 'Entropy', 'Kinetic Theory of Gases', 'Specific Heat & Calorimetry', 'Heat Transfer (Conduction, Convection, Radiation)', 'Thermal Expansion'],
    keyFormulas: ['Q = nCΔT', 'W = PΔV', 'ΔU = Q - W', 'PV = nRT', 'η = 1 - T₂/T₁', 'vrms = √(3RT/M)'],
    commonMistakes: ['Confusing isothermal and adiabatic processes', 'Wrong sign for work done BY vs ON gas', 'Forgetting degrees of freedom in Cv calculation'],
    faqs: [
      { q: 'Is Thermodynamics important for JEE?', a: 'Yes, 6-8% weightage, plus it overlaps with Chemistry. The combined value is ~12%. First law problems are very scoring and predictable.' },
      { q: 'How to prepare Thermodynamics for JEE?', a: 'Understand PV diagrams thoroughly. Practice cyclic process problems. MindPeak mentors use visual PV-diagram mapping to make thermodynamics intuitive.' },
    ],
  },
  {
    slug: 'jee-physics-waves',
    exam: 'JEE', subject: 'Physics', chapter: 'Waves & Sound',
    icon: Waves,
    weightage: '5-7%', difficulty: 'Moderate', pyqCount: 55,
    description: 'Waves covers transverse & longitudinal waves, superposition, standing waves, beats, Doppler effect, and string/pipe harmonics. 5-7% of JEE Physics.',
    topics: ['Wave Motion & Equation', 'Superposition Principle', 'Standing Waves', 'Beats & Doppler Effect', 'Vibrations in Strings', 'Resonance in Pipes', 'Speed of Sound'],
    keyFormulas: ['v = fλ', 'y = A sin(kx - ωt)', 'fbeat = |f₁ - f₂|', 'f\' = f(v±vo)/(v±vs)', 'fn = nv/2L (string)'],
    commonMistakes: ['Wrong sign in Doppler formula for source vs observer', 'Confusing open and closed pipe harmonics', 'Forgetting boundary conditions for standing waves'],
    faqs: [
      { q: 'How important are Waves for JEE?', a: 'Waves carry 5-7% weightage. Doppler effect and standing waves are JEE favourites. Combined with wave optics, the total wave-related content exceeds 12%.' },
      { q: 'Are Waves difficult for JEE?', a: 'Moderate. The math is straightforward but visualization is key. MindPeak uses animations and simulations in 1-on-1 classes to build wave intuition.' },
    ],
  },
  {
    slug: 'jee-physics-modern-physics',
    exam: 'JEE', subject: 'Physics', chapter: 'Modern Physics',
    icon: Atom,
    weightage: '8-10%', difficulty: 'Hard', pyqCount: 85,
    description: 'Modern Physics covers photoelectric effect, atomic models, nuclear physics, X-rays, and semiconductors. High-weightage (8-10%) and frequently tested in JEE Advanced.',
    topics: ['Photoelectric Effect', 'Bohr\'s Atomic Model', 'Hydrogen Spectrum', 'X-Rays', 'Nuclear Physics (Fission & Fusion)', 'Radioactive Decay', 'Semiconductor Devices', 'de Broglie Wavelength'],
    keyFormulas: ['E = hf', 'KE = hf - φ', 'rn = n²a₀/Z', 'En = -13.6Z²/n² eV', 'λ = h/mv', 'N = N₀e^(-λt)', 'E = mc²'],
    commonMistakes: ['Forgetting work function in photoelectric problems', 'Wrong energy level transitions in Bohr model', 'Confusing half-life with decay constant', 'Missing quantum number constraints'],
    faqs: [
      { q: 'Is Modern Physics scoring for JEE?', a: 'Very scoring! Photoelectric effect and Bohr model problems are almost formulaic. Nuclear physics may seem intimidating but follows simple conservation laws.' },
      { q: 'How to prepare Modern Physics for JEE Advanced?', a: 'Focus on photoelectric effect, Bohr model, and radioactivity first. These three sub-topics alone contribute 6-8 marks. Practice numerical problems extensively.' },
    ],
  },

  /* ═══════════ JEE CHEMISTRY — PHYSICAL (6 chapters) ═══════════ */
  {
    slug: 'jee-chemistry-atomic-structure',
    exam: 'JEE', subject: 'Chemistry', chapter: 'Atomic Structure & Periodicity',
    icon: Atom,
    weightage: '5-7%', difficulty: 'Moderate', pyqCount: 55,
    description: 'Atomic structure covers quantum numbers, electronic configuration, periodic trends, and Bohr model. Forms 5-7% of JEE Chemistry and is the foundation for all chemistry topics.',
    topics: ['Bohr Model & Hydrogen Spectrum', 'Quantum Numbers', 'Electronic Configuration', 'Periodic Table Trends', 'Ionization Energy & Electron Affinity', 'Electronegativity & Atomic Radius'],
    keyFormulas: ['E = -13.6Z²/n²', 'r = 0.529n²/Z Å', 'v = 2.18×10⁶ Z/n m/s', 'λ = 1/R(1/n₁² - 1/n₂²)'],
    commonMistakes: ['Wrong order of orbital filling (Aufbau exceptions)', 'Confusing IE and EA trends', 'Forgetting d-block anomalies in electronic configuration'],
    faqs: [
      { q: 'How important is Atomic Structure for JEE?', a: '5-7% direct questions, plus it\'s the foundation for chemical bonding, coordination chemistry, and qualitative analysis. Getting this wrong cascades into other topics.' },
      { q: 'How to master Periodic Trends?', a: 'Understand the WHY behind each trend (shielding, nuclear charge). Don\'t memorize — derive. MindPeak mentors teach trend-derivation techniques that make memorization unnecessary.' },
    ],
  },
  {
    slug: 'jee-chemistry-chemical-bonding',
    exam: 'JEE', subject: 'Chemistry', chapter: 'Chemical Bonding',
    icon: Atom,
    weightage: '6-8%', difficulty: 'Hard', pyqCount: 70,
    description: 'Chemical bonding covers VSEPR theory, hybridization, molecular orbital theory, and intermolecular forces. 6-8% of JEE Chemistry — conceptually deep topic.',
    topics: ['Lewis Structures & Formal Charge', 'VSEPR Theory', 'Hybridization', 'Molecular Orbital Theory', 'Hydrogen Bonding', 'Metallic Bonding', 'Dipole Moment', 'Fajan\'s Rule'],
    keyFormulas: ['Bond Order = (Nb - Na)/2', 'Hybridization = ½(V + M - C + A)', 'μ = q × d'],
    commonMistakes: ['Wrong hybridization prediction for molecules with lone pairs', 'Confusing σ and π bonds in MOT', 'Forgetting back-bonding effects', 'Ignoring resonance in stability comparisons'],
    faqs: [
      { q: 'Is Chemical Bonding difficult for JEE?', a: 'It\'s conceptually challenging but very rewarding. Master VSEPR and MOT, and you can solve any bonding problem. MindPeak\'s 1-on-1 approach allows deep conceptual discussion.' },
      { q: 'Which topics in Chemical Bonding are most important?', a: 'Hybridization, MOT (bond order), and VSEPR geometry prediction are most frequently tested. Practice predicting shapes and bond orders.' },
    ],
  },
  {
    slug: 'jee-chemistry-thermodynamics-equilibrium',
    exam: 'JEE', subject: 'Chemistry', chapter: 'Chemical Thermodynamics & Equilibrium',
    icon: Thermometer,
    weightage: '8-10%', difficulty: 'Moderate', pyqCount: 80,
    description: 'Covers enthalpy, entropy, Gibbs energy, and chemical equilibrium. A highly scoring 8-10% weightage chapter with overlap between Physics and Chemistry.',
    topics: ['Hess\'s Law', 'Enthalpy of Reactions', 'Entropy & Second Law', 'Gibbs Free Energy', 'Equilibrium Constants (Kp, Kc)', 'Le Chatelier\'s Principle', 'Ionic Equilibrium', 'Buffer Solutions', 'Solubility Product'],
    keyFormulas: ['ΔG = ΔH - TΔS', 'Kp = Kc(RT)^Δn', 'ΔG° = -RT ln K', 'pH = -log[H⁺]', 'Henderson equation: pH = pKa + log([A⁻]/[HA])'],
    commonMistakes: ['Confusing ΔH and ΔG signs', 'Wrong equilibrium expression for heterogeneous equilibria', 'Not accounting for dilution in buffer pH'],
    faqs: [
      { q: 'How scoring is Thermodynamics in JEE Chemistry?', a: 'Very scoring — 8-10% with mostly numerical problems. Combined with Physics thermodynamics, it\'s worth ~15% of your total JEE score.' },
      { q: 'How to prepare Equilibrium for JEE?', a: 'Master Kp-Kc interconversion, Le Chatelier applications, and ionic equilibrium numericals. These are repeatedly tested every year.' },
    ],
  },
  {
    slug: 'jee-chemistry-electrochemistry',
    exam: 'JEE', subject: 'Chemistry', chapter: 'Electrochemistry',
    icon: Zap,
    weightage: '4-6%', difficulty: 'Moderate', pyqCount: 45,
    description: 'Electrochemistry covers electrochemical cells, Nernst equation, electrolysis, and corrosion. Scoring 4-6% chapter with direct application questions.',
    topics: ['Galvanic Cells', 'Electrolytic Cells', 'Nernst Equation', 'Conductance & Molar Conductivity', 'Faraday\'s Laws', 'Corrosion', 'Batteries & Fuel Cells'],
    keyFormulas: ['E = E° - (RT/nF)lnQ', 'ΔG° = -nFE°', 'Λm = κ/c', 'w = ZIt (Faraday\'s law)'],
    commonMistakes: ['Wrong sign convention for anode/cathode', 'Confusing galvanic and electrolytic cell conventions', 'Incorrect n value in Nernst equation'],
    faqs: [
      { q: 'Is Electrochemistry important for JEE?', a: 'Yes, 4-6% weightage with predictable Nernst equation and Faraday\'s law problems. Very scoring if you master the sign conventions.' },
    ],
  },
  {
    slug: 'jee-chemistry-organic-basics',
    exam: 'JEE', subject: 'Chemistry', chapter: 'Organic Chemistry — GOC & Reactions',
    icon: FlaskConical,
    weightage: '15-18%', difficulty: 'Hard', pyqCount: 140,
    description: 'General Organic Chemistry, named reactions, and reaction mechanisms form the backbone of JEE Organic Chemistry. The single largest topic at 15-18% of total Chemistry.',
    topics: ['IUPAC Nomenclature', 'Isomerism', 'Electronic Effects (I, M, H)', 'Reaction Mechanisms (SN1, SN2, E1, E2)', 'Named Reactions (Aldol, Cannizzaro, etc.)', 'Hydrocarbons', 'Alcohols, Phenols, Ethers', 'Aldehydes & Ketones', 'Carboxylic Acids & Derivatives', 'Amines', 'Polymers'],
    keyFormulas: ['Degree of unsaturation = (2C+2+N-H-X)/2', 'Markownikoff\'s Rule', 'Saytzeff\'s Rule', 'Anti-Markownikoff (peroxide effect)'],
    commonMistakes: ['Wrong reagent selection for functional group interconversion', 'Confusing SN1 vs SN2 conditions', 'Ignoring stereochemistry in reaction products', 'Forgetting named reaction conditions'],
    faqs: [
      { q: 'How to master Organic Chemistry for JEE?', a: 'Focus on mechanisms, not memorization. Understand WHY reactions happen (nucleophile attacks electrophile). Practice 200+ reaction mechanism problems. MindPeak\'s 1-on-1 approach allows deep mechanism discussions.' },
      { q: 'Which named reactions are most important for JEE?', a: 'Aldol condensation, Cannizzaro, Wolff-Kishner, Clemmensen reduction, Sandmeyer, Friedel-Crafts, Grignard, Wittig, and Hofmann elimination. Master these 10 and you cover 80% of named reaction questions.' },
    ],
  },
  {
    slug: 'jee-chemistry-inorganic',
    exam: 'JEE', subject: 'Chemistry', chapter: 'Inorganic Chemistry',
    icon: Beaker,
    weightage: '18-22%', difficulty: 'Hard', pyqCount: 150,
    description: 'Inorganic Chemistry covers coordination compounds, metallurgy, qualitative analysis, p-block & d-block elements. Largest Chemistry section at 18-22% of JEE paper.',
    topics: ['s-Block Elements', 'p-Block Elements (Groups 13-18)', 'd-Block & f-Block Elements', 'Coordination Compounds', 'Metallurgy', 'Qualitative Salt Analysis', 'Chemical Bonding in Inorganic', 'Environmental Chemistry'],
    keyFormulas: ['Crystal Field Splitting Energy (Δ)', 'CFSE calculations', 'EAN = Z - Oxidation State + 2×(Coordination Number)', 'Magnetic moment μ = √(n(n+2)) BM'],
    commonMistakes: ['Confusing oxidation states in d-block compounds', 'Wrong IUPAC naming of coordination compounds', 'Forgetting diagonal relationships in s-block', 'Ignoring back-bonding in p-block compounds'],
    faqs: [
      { q: 'How to study Inorganic Chemistry for JEE?', a: 'Use NCERT as the primary source — 60% of inorganic questions come directly from NCERT. For coordination compounds, master CFT and isomerism. MindPeak mentors create visual summary sheets for quick revision.' },
      { q: 'Is Inorganic Chemistry just memorization?', a: 'Not entirely. Chemical bonding, coordination chemistry, and metallurgy have strong conceptual components. NCERT + selective memorization of reactions and properties is the winning strategy.' },
    ],
  },

  /* ═══════════ JEE MATHEMATICS (12 chapters) ═══════════ */
  {
    slug: 'jee-maths-algebra',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Algebra',
    icon: Calculator,
    weightage: '20-25%', difficulty: 'Hard', pyqCount: 170,
    description: 'Algebra covers quadratics, complex numbers, sequences & series, matrices, determinants, permutations, combinations, and binomial theorem. The largest JEE Maths topic at 20-25%.',
    topics: ['Quadratic Equations', 'Complex Numbers', 'Sequences & Series (AP, GP, HP)', 'Binomial Theorem', 'Permutations & Combinations', 'Matrices & Determinants', 'Mathematical Induction', 'Logarithms'],
    keyFormulas: ['Quadratic: x = (-b±√(b²-4ac))/2a', 'Sum of AP: n/2(2a+(n-1)d)', 'Sum of GP: a(rⁿ-1)/(r-1)', 'ⁿCr = n!/(r!(n-r)!)', '|A| for 3×3 matrix'],
    commonMistakes: ['Forgetting to check discriminant sign', 'Wrong modulus in complex number problems', 'Convergence conditions in infinite GP', 'Row vs column operations confusion in matrices'],
    faqs: [
      { q: 'How important is Algebra for JEE?', a: 'Algebra is the single largest JEE Maths topic at 20-25%. Complex numbers and matrices are JEE Advanced favourites with conceptually deep problems.' },
      { q: 'How to prepare Algebra for JEE Advanced?', a: 'Master quadratics first (foundation), then complex numbers (geometry + algebra fusion), then PnC + Binomial. Practice 100+ problems per sub-topic.' },
    ],
  },
  {
    slug: 'jee-maths-calculus',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Calculus',
    icon: Calculator,
    weightage: '30-35%', difficulty: 'Hard', pyqCount: 200,
    description: 'Calculus covers limits, continuity, differentiation, integration, differential equations, and application of derivatives/integrals. THE most important JEE Maths topic at 30-35%.',
    topics: ['Limits & Continuity', 'Differentiability', 'Application of Derivatives (Maxima/Minima, Tangents)', 'Indefinite Integration', 'Definite Integration & Properties', 'Area Under Curves', 'Differential Equations'],
    keyFormulas: ['d/dx(xⁿ) = nxⁿ⁻¹', '∫xⁿdx = xⁿ⁺¹/(n+1)', 'L\'Hôpital: lim f/g = lim f\'/g\'', 'Leibniz Rule', 'Integration by Parts: ∫udv = uv - ∫vdu'],
    commonMistakes: ['Forgetting to check continuity before differentiability', 'Wrong substitution in integration', 'Missing constants in indefinite integration', 'Not verifying maxima vs minima in optimization'],
    faqs: [
      { q: 'How important is Calculus for JEE Advanced?', a: 'Calculus is the most important JEE Maths topic — 30-35% weightage. JEE Advanced loves conceptual calculus problems involving limits, definite integration, and area calculations.' },
      { q: 'What is the best approach to learn Calculus?', a: 'Build from limits → continuity → differentiation → integration. Each builds on the previous. Practice graph-based questions extensively. MindPeak\'s 1-on-1 coaching allows step-by-step concept building.' },
    ],
  },
  {
    slug: 'jee-maths-coordinate-geometry',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Coordinate Geometry',
    icon: Target,
    weightage: '15-18%', difficulty: 'Moderate', pyqCount: 120,
    description: 'Coordinate Geometry covers straight lines, circles, parabola, ellipse, and hyperbola. Forms 15-18% of JEE Maths with predictable conic section questions.',
    topics: ['Straight Lines', 'Circles', 'Parabola', 'Ellipse', 'Hyperbola', 'Locus Problems'],
    keyFormulas: ['y - y₁ = m(x - x₁)', 'x² + y² + 2gx + 2fy + c = 0', 'y² = 4ax (parabola)', 'x²/a² + y²/b² = 1 (ellipse)', 'x²/a² - y²/b² = 1 (hyperbola)'],
    commonMistakes: ['Confusing eccentricity values for different conics', 'Wrong parametric coordinates', 'Director circle vs auxiliary circle', 'Sign errors in line-conic intersection'],
    faqs: [
      { q: 'Is Coordinate Geometry scoring for JEE?', a: 'Very scoring! Conic sections (parabola, ellipse, hyperbola) follow standard patterns. Master the standard forms + parametric equations and you can solve 80% of problems.' },
      { q: 'How to prepare Conics for JEE Advanced?', a: 'Learn each conic\'s standard form, parametric form, tangent/normal equations, and focal properties. Then solve mixed problems. MindPeak provides conic-specific problem banks.' },
    ],
  },
  {
    slug: 'jee-maths-trigonometry',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Trigonometry',
    icon: Calculator,
    weightage: '5-8%', difficulty: 'Moderate', pyqCount: 60,
    description: 'Trigonometry covers trigonometric functions, equations, inverse trigonometry, and height & distances. Reliable 5-8% in JEE with scoring formula-based questions.',
    topics: ['Trigonometric Ratios & Identities', 'Trigonometric Equations', 'Inverse Trigonometric Functions', 'Properties of Triangles', 'Height & Distances'],
    keyFormulas: ['sin²θ + cos²θ = 1', 'sin(A±B) = sinAcosB ± cosAsinB', 'sin⁻¹x + cos⁻¹x = π/2', 'Sine Rule: a/sinA = 2R', 'Cosine Rule: c² = a² + b² - 2ab·cosC'],
    commonMistakes: ['Domain/range errors in inverse trig', 'Missing general solutions in trig equations', 'Wrong principal value branch selection'],
    faqs: [
      { q: 'How important is Trigonometry for JEE?', a: 'Directly 5-8% weightage, but trigonometric identities appear throughout calculus and coordinate geometry. Total indirect contribution is ~15%.' },
    ],
  },
  {
    slug: 'jee-maths-probability-statistics',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Probability & Statistics',
    icon: Calculator,
    weightage: '5-7%', difficulty: 'Moderate', pyqCount: 50,
    description: 'Probability covers classical, conditional, Bayes\' theorem, and random variables. Statistics covers mean, variance, and standard deviation. 5-7% of JEE.',
    topics: ['Classical Probability', 'Conditional Probability', 'Bayes\' Theorem', 'Random Variables & Distributions', 'Mean, Median, Mode', 'Variance & Standard Deviation'],
    keyFormulas: ['P(A|B) = P(A∩B)/P(B)', 'Bayes: P(A|B) = P(B|A)P(A)/P(B)', 'E(X) = ΣxP(x)', 'Var(X) = E(X²) - [E(X)]²'],
    commonMistakes: ['Confusing independent and mutually exclusive events', 'Wrong application of Bayes\' theorem', 'Not considering all cases in conditional probability'],
    faqs: [
      { q: 'Is Probability scoring for JEE?', a: 'Yes! Probability questions in JEE Main are usually straightforward. JEE Advanced may test conditional probability and Bayes\' theorem more deeply. Very scoring with practice.' },
    ],
  },
  {
    slug: 'jee-maths-vectors-3d',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Vectors & 3D Geometry',
    icon: Calculator,
    weightage: '8-10%', difficulty: 'Moderate', pyqCount: 75,
    description: 'Vectors and 3D geometry cover dot/cross products, lines, planes, and sphere in 3D. Combined 8-10% weightage with predictable question types.',
    topics: ['Vector Algebra', 'Dot Product & Cross Product', 'Scalar Triple Product', 'Lines in 3D', 'Planes', 'Angle Between Lines/Planes', 'Shortest Distance Between Lines'],
    keyFormulas: ['a·b = |a||b|cosθ', '|a×b| = |a||b|sinθ', 'Plane: ax+by+cz = d', 'Distance from point to plane: |ax₀+by₀+cz₀-d|/√(a²+b²+c²)'],
    commonMistakes: ['Confusing direction ratios and direction cosines', 'Wrong formula for shortest distance between skew lines', 'Sign errors in scalar triple product'],
    faqs: [
      { q: 'Is 3D Geometry important for JEE Advanced?', a: 'Yes, 8-10% combined with vectors. JEE Advanced loves line-plane intersection and shortest distance problems. Very scoring once you master the formulaic approach.' },
    ],
  },

  /* ═══════════ NEET BIOLOGY (15 chapters) ═══════════ */
  {
    slug: 'neet-biology-cell-structure',
    exam: 'NEET', subject: 'Biology', chapter: 'Cell Structure & Function',
    icon: Microscope,
    weightage: '5-7%', difficulty: 'Easy', pyqCount: 60,
    description: 'Cell biology covers cell organelles, cell membrane, cell division (mitosis/meiosis). Foundation chapter for all biology topics. 5-7% of NEET Biology.',
    topics: ['Cell Theory', 'Prokaryotic vs Eukaryotic Cells', 'Cell Organelles', 'Cell Membrane Structure', 'Transport Across Membranes', 'Cell Division (Mitosis & Meiosis)', 'Cell Cycle'],
    keyFormulas: ['Mitosis: 2n → 2n', 'Meiosis: 2n → n', 'Surface area to volume ratio', 'Fluid mosaic model'],
    commonMistakes: ['Confusing functions of similar organelles (SER vs RER)', 'Wrong phases of cell division', 'Mixing up mitosis and meiosis stages'],
    faqs: [
      { q: 'How important is Cell Biology for NEET?', a: '5-7% direct questions, but cell biology concepts appear throughout genetics, ecology, and physiology. It\'s the FOUNDATION — get it right and everything else follows.' },
      { q: 'Which NCERT chapters cover Cell Biology for NEET?', a: 'Class 11: Cell — The Unit of Life, Cell Cycle and Division. Class 12: Related concepts in Molecular Basis of Inheritance. Read NCERT line by line — 90% of NEET questions come from NCERT.' },
    ],
  },
  {
    slug: 'neet-biology-genetics',
    exam: 'NEET', subject: 'Biology', chapter: 'Genetics & Molecular Biology',
    icon: Dna,
    weightage: '12-15%', difficulty: 'Hard', pyqCount: 130,
    description: 'Genetics covers Mendelian inheritance, molecular basis of inheritance, gene expression, and genetic disorders. THE highest-weightage NEET Biology topic at 12-15%.',
    topics: ['Mendelian Genetics', 'Chromosomal Basis of Inheritance', 'Linkage & Crossing Over', 'DNA Structure & Replication', 'Transcription & Translation', 'Gene Expression Regulation', 'Genetic Engineering', 'Genetic Disorders'],
    keyFormulas: ['Monohybrid ratio: 3:1', 'Dihybrid ratio: 9:3:3:1', 'DNA: A=T, G≡C', 'Central Dogma: DNA→RNA→Protein'],
    commonMistakes: ['Wrong phenotypic vs genotypic ratios', 'Confusing codominance with incomplete dominance', 'Errors in pedigree analysis', 'Mixing up transcription and translation directions'],
    faqs: [
      { q: 'How important is Genetics for NEET?', a: 'Genetics is the MOST important NEET Biology topic at 12-15%. Molecular biology + inheritance principles = 15-20 questions. Master this and you secure 40+ marks.' },
      { q: 'How to prepare Genetics for NEET?', a: 'Start with Mendelian genetics, then molecular biology (DNA, RNA), then genetic engineering. Practice pedigree problems daily. MindPeak\'s biology mentors use visual gene mapping techniques.' },
    ],
  },
  {
    slug: 'neet-biology-human-physiology',
    exam: 'NEET', subject: 'Biology', chapter: 'Human Physiology',
    icon: Heart,
    weightage: '15-20%', difficulty: 'Moderate', pyqCount: 160,
    description: 'Human Physiology covers digestion, respiration, circulation, excretion, neural control, and locomotion. The LARGEST NEET Biology section at 15-20% with the most questions.',
    topics: ['Digestion & Absorption', 'Breathing & Gas Exchange', 'Body Fluids & Circulation', 'Excretory Products & Elimination', 'Locomotion & Movement', 'Neural Control & Coordination', 'Chemical Coordination (Hormones)'],
    keyFormulas: ['BMI = weight/height²', 'Cardiac Output = Heart Rate × Stroke Volume', 'Tidal Volume ≈ 500 mL', 'Vital Capacity ≈ 3.5-4.5 L'],
    commonMistakes: ['Confusing hormones and their target organs', 'Wrong sequence of digestion events', 'Mixing up sympathetic and parasympathetic effects', 'Forgetting counter-current mechanism in nephron'],
    faqs: [
      { q: 'How important is Human Physiology for NEET?', a: 'It\'s the BIGGEST section — 15-20% of NEET Biology. Expect 20-25 questions. Master all 7 sub-topics thoroughly from NCERT.' },
      { q: 'How to study Human Physiology for NEET?', a: 'Use diagrams extensively. Draw the heart, nephron, neuron, and digestive system repeatedly until you can reproduce them from memory. NCERT diagrams are gold.' },
    ],
  },
  {
    slug: 'neet-biology-plant-physiology',
    exam: 'NEET', subject: 'Biology', chapter: 'Plant Physiology',
    icon: Leaf,
    weightage: '8-10%', difficulty: 'Moderate', pyqCount: 80,
    description: 'Plant physiology covers photosynthesis, respiration, mineral nutrition, transport in plants, and plant growth. Important 8-10% section for NEET.',
    topics: ['Transport in Plants', 'Mineral Nutrition', 'Photosynthesis (Light & Dark Reactions)', 'Respiration (Glycolysis, Krebs, ETC)', 'Plant Growth & Development', 'Plant Hormones'],
    keyFormulas: ['6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', 'Glycolysis: Glucose → 2 Pyruvate', 'Krebs Cycle: 2 GTP + 6 NADH + 2 FADH₂ per glucose', 'Total ATP: 36-38 per glucose'],
    commonMistakes: ['Confusing C3 and C4 pathways', 'Wrong ATP count from electron transport chain', 'Mixing up photorespiration and dark respiration', 'Confusing auxin, gibberellin, and cytokinin effects'],
    faqs: [
      { q: 'How to prepare Plant Physiology for NEET?', a: 'Focus on photosynthesis (C3 vs C4 vs CAM) and respiration (ATP calculation). Learn plant hormones and their effects. NCERT is sufficient for 95% of questions.' },
    ],
  },
  {
    slug: 'neet-biology-ecology',
    exam: 'NEET', subject: 'Biology', chapter: 'Ecology & Environment',
    icon: TreePine,
    weightage: '8-12%', difficulty: 'Easy', pyqCount: 90,
    description: 'Ecology covers organisms & environment, ecosystems, biodiversity, and environmental issues. Scoring 8-12% section — mostly NCERT-based factual questions.',
    topics: ['Organisms and Populations', 'Ecosystem Structure & Function', 'Biodiversity & Conservation', 'Environmental Issues', 'Population Interactions', 'Ecological Succession', 'Nutrient Cycling'],
    keyFormulas: ['Energy flow: 10% rule', 'Population growth: dN/dt = rN(K-N)/K', 'Shannon-Wiener Index: H = -Σpi ln(pi)'],
    commonMistakes: ['Confusing ecological pyramids (energy vs biomass)', 'Wrong population growth model application', 'Mixing up biodiversity hotspots'],
    faqs: [
      { q: 'Is Ecology scoring for NEET?', a: 'EXTREMELY scoring! 8-12% weightage with mostly factual NCERT-based questions. This is the easiest section to prepare — read NCERT 3 times and you\'ll score full marks.' },
      { q: 'Which NCERT chapters cover Ecology?', a: 'Class 12 chapters 13-16. Read every line, every diagram, every table. NEET ecology questions are verbatim from NCERT text.' },
    ],
  },
  {
    slug: 'neet-biology-reproduction',
    exam: 'NEET', subject: 'Biology', chapter: 'Reproduction',
    icon: Bug,
    weightage: '8-10%', difficulty: 'Moderate', pyqCount: 75,
    description: 'Reproduction covers sexual & asexual reproduction in plants and animals, human reproduction, and reproductive health. 8-10% of NEET with detailed NCERT content.',
    topics: ['Reproduction in Organisms', 'Sexual Reproduction in Flowering Plants', 'Human Reproduction', 'Reproductive Health', 'Gametogenesis', 'Embryo Development', 'Contraception Methods'],
    keyFormulas: ['Menstrual cycle: 28 days', 'Ovulation: Day 14', 'Gestation: 9 months / 280 days'],
    commonMistakes: ['Confusing spermatogenesis and oogenesis stages', 'Wrong hormonal control sequence', 'Mixing up double and triple fusion in plants'],
    faqs: [
      { q: 'How important is Reproduction for NEET?', a: '8-10% weightage with questions from both plant and human reproduction. Read NCERT diagrams of gametogenesis and embryo development very carefully.' },
    ],
  },
  {
    slug: 'neet-biology-evolution',
    exam: 'NEET', subject: 'Biology', chapter: 'Evolution & Biotechnology',
    icon: Dna,
    weightage: '6-8%', difficulty: 'Moderate', pyqCount: 55,
    description: 'Evolution covers origin of life, theories of evolution, and Hardy-Weinberg principle. Biotechnology covers recombinant DNA, genetic engineering, and applications.',
    topics: ['Origin of Life', 'Theories of Evolution (Darwin, Lamarck)', 'Hardy-Weinberg Principle', 'Speciation', 'Recombinant DNA Technology', 'PCR & Gel Electrophoresis', 'Gene Cloning', 'Biotechnology Applications (GMOs, Gene Therapy)'],
    keyFormulas: ['Hardy-Weinberg: p² + 2pq + q² = 1', 'p + q = 1'],
    commonMistakes: ['Confusing analogous and homologous organs', 'Wrong Hardy-Weinberg equilibrium conditions', 'Mixing up restriction enzymes and their cut sites'],
    faqs: [
      { q: 'Is Biotechnology important for NEET?', a: 'Yes, 3-5% direct questions. rDNA technology and applications are frequently tested. Combined with evolution, this cluster is 6-8% of NEET.' },
    ],
  },

  /* ═══════════ NEET PHYSICS (6 key chapters) ═══════════ */
  {
    slug: 'neet-physics-mechanics',
    exam: 'NEET', subject: 'Physics', chapter: 'Mechanics for NEET',
    icon: Gauge,
    weightage: '20-25%', difficulty: 'Moderate', pyqCount: 100,
    description: 'NEET Mechanics covers kinematics, Newton\'s laws, work-energy, rotational motion, and gravitation. 20-25% of NEET Physics — less complex than JEE but still foundational.',
    topics: ['Kinematics', 'Laws of Motion', 'Work, Energy & Power', 'Rotational Motion', 'Gravitation', 'Properties of Matter'],
    keyFormulas: ['v = u + at', 'F = ma', 'KE = ½mv²', 'τ = Iα', 'g = GM/R²'],
    commonMistakes: ['Not converting units consistently', 'Forgetting friction in incline problems', 'Wrong moment of inertia for standard shapes'],
    faqs: [
      { q: 'How is NEET Mechanics different from JEE?', a: 'NEET Mechanics is simpler — focuses on NCERT-level concepts and direct formula applications. JEE requires deeper problem-solving. However, the weightage is similar (20-25%).' },
    ],
  },
  {
    slug: 'neet-physics-electrodynamics',
    exam: 'NEET', subject: 'Physics', chapter: 'Electrodynamics for NEET',
    icon: Zap,
    weightage: '18-22%', difficulty: 'Moderate', pyqCount: 90,
    description: 'NEET Electrodynamics covers electrostatics, current electricity, magnetism, and EMI. Combined 18-22% of NEET Physics — a must-master section.',
    topics: ['Electrostatics', 'Current Electricity', 'Magnetic Effects of Current', 'EMI & AC', 'Electromagnetic Waves'],
    keyFormulas: ['F = kq₁q₂/r²', 'V = IR', 'F = qvB', 'emf = -dΦ/dt'],
    commonMistakes: ['Sign convention errors', 'Wrong circuit simplification', 'Confusing EMI direction'],
    faqs: [
      { q: 'How important is Electricity for NEET?', a: 'Very important — 18-22% of NEET Physics. Current electricity and electrostatics are the most scoring sub-topics with direct formula-based questions.' },
    ],
  },
  {
    slug: 'neet-physics-optics-waves',
    exam: 'NEET', subject: 'Physics', chapter: 'Optics & Waves for NEET',
    icon: Sun,
    weightage: '12-15%', difficulty: 'Moderate', pyqCount: 70,
    description: 'NEET Optics covers ray optics, wave optics, and wave motion. 12-15% of NEET Physics with scoring formula-based questions.',
    topics: ['Ray Optics (Mirrors & Lenses)', 'Wave Optics (YDSE, Diffraction)', 'Wave Motion & Sound', 'Doppler Effect'],
    keyFormulas: ['1/v - 1/u = 1/f', 'n₁sinθ₁ = n₂sinθ₂', 'β = λD/d', 'v = fλ'],
    commonMistakes: ['Sign convention in lens/mirror', 'Confusing real and virtual images', 'Wrong fringe formula'],
    faqs: [
      { q: 'Is Optics scoring for NEET?', a: 'Yes! Ray optics questions are very direct. Master mirror/lens formula with correct sign convention and you can score full marks in this section.' },
    ],
  },

  /* ═══════════ NEET CHEMISTRY (4 key chapters) ═══════════ */
  {
    slug: 'neet-chemistry-organic',
    exam: 'NEET', subject: 'Chemistry', chapter: 'Organic Chemistry for NEET',
    icon: FlaskConical,
    weightage: '25-30%', difficulty: 'Hard', pyqCount: 130,
    description: 'NEET Organic Chemistry covers GOC, hydrocarbons, functional groups, biomolecules, and polymers. The single largest Chemistry section at 25-30% for NEET.',
    topics: ['Basic Organic Chemistry (GOC)', 'Hydrocarbons', 'Haloalkanes & Haloarenes', 'Alcohols, Phenols, Ethers', 'Aldehydes, Ketones & Carboxylic Acids', 'Amines', 'Biomolecules', 'Polymers', 'Chemistry in Everyday Life'],
    keyFormulas: ['Named reactions: Wurtz, Kolbe, Williamson', 'Markownikoff\'s Rule', 'Saytzeff elimination'],
    commonMistakes: ['Wrong reagent for conversions', 'Confusing SN1/SN2 mechanisms', 'Forgetting stereochemistry', 'Mixing up biomolecule classifications'],
    faqs: [
      { q: 'How to study Organic Chemistry for NEET?', a: 'NCERT first, then practice reactions and mechanisms. Focus on named reactions, functional group interconversions, and biomolecules. MindPeak mentors use reaction flowcharts for quick revision.' },
    ],
  },
  {
    slug: 'neet-chemistry-physical',
    exam: 'NEET', subject: 'Chemistry', chapter: 'Physical Chemistry for NEET',
    icon: Beaker,
    weightage: '30-35%', difficulty: 'Moderate', pyqCount: 140,
    description: 'NEET Physical Chemistry covers atomic structure, chemical bonding, thermodynamics, equilibrium, kinetics, and electrochemistry. Largest NEET Chemistry section at 30-35%.',
    topics: ['Atomic Structure', 'Chemical Bonding', 'States of Matter', 'Thermodynamics', 'Equilibrium', 'Redox & Electrochemistry', 'Chemical Kinetics', 'Solutions', 'Surface Chemistry'],
    keyFormulas: ['PV = nRT', 'ΔG = ΔH - TΔS', 'k = Ae^(-Ea/RT)', 'Nernst: E = E° - (RT/nF)lnQ'],
    commonMistakes: ['Unit conversion errors in gas laws', 'Wrong equilibrium expressions', 'Confusing first and second order kinetics'],
    faqs: [
      { q: 'Is Physical Chemistry scoring for NEET?', a: 'Yes! 30-35% of NEET Chemistry. Mostly numerical problems that are straightforward if you know the formulas. Practice 50+ numericals per sub-topic.' },
    ],
  },
  {
    slug: 'neet-chemistry-inorganic',
    exam: 'NEET', subject: 'Chemistry', chapter: 'Inorganic Chemistry for NEET',
    icon: Beaker,
    weightage: '30-35%', difficulty: 'Moderate', pyqCount: 135,
    description: 'NEET Inorganic Chemistry covers periodic table, s/p/d/f block elements, coordination compounds, and metallurgy. NCERT-heavy section at 30-35%.',
    topics: ['Classification of Elements', 's-Block Elements', 'p-Block Elements', 'd and f-Block Elements', 'Coordination Compounds', 'Metallurgy', 'Hydrogen & Its Compounds'],
    keyFormulas: ['CFSE calculations', 'Magnetic moment μ = √(n(n+2)) BM', 'EAN calculation'],
    commonMistakes: ['Confusing oxidation states', 'Wrong IUPAC nomenclature', 'Forgetting diagonal relationships', 'Mixing up d-block anomalies'],
    faqs: [
      { q: 'How to prepare Inorganic Chemistry for NEET?', a: 'NCERT is KING for inorganic. Read every table, every reaction, every exception. 90% of NEET inorganic questions come directly from NCERT text. Use MindPeak\'s visual summary sheets.' },
    ],
  },
];

/** Get all chapter slugs for route generation */
export const CHAPTER_SLUGS = chapters.map(c => c.slug);

/** Get chapter data by slug */
export function getChapterBySlug(slug: string): ChapterData | undefined {
  return chapters.find(c => c.slug === slug);
}
