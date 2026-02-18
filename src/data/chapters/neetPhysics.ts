import { Gauge, Zap, Magnet, Eye, Thermometer, Waves, Atom, Droplets } from 'lucide-react';
import type { ChapterData } from '../chapterData';

/* ═══════════════════════════════════════════════════
   NEET PHYSICS — 15 granular chapter pages
   Mechanics (5) + Heat & Thermo (2) + Electro (3) + Optics (2) + Modern (2) + Waves (1)
   ═══════════════════════════════════════════════════ */

export const neetPhysicsChapters: ChapterData[] = [

  /* ──────── MECHANICS ──────── */
  {
    slug: 'neet-physics-kinematics',
    exam: 'NEET', subject: 'Physics', chapter: 'Kinematics (Motion in 1D & 2D)',
    icon: Gauge,
    weightage: '4-5%', difficulty: 'Moderate', pyqCount: 30,
    description: 'Equations of motion, projectile motion, and relative motion — NEET Mechanics begins here. MindPeak builds kinematics intuition with real-life examples before touching a single equation.',
    topics: ['Distance vs Displacement', 'Speed vs Velocity', 'Equations of Motion (Uniformly Accelerated)', 'Motion Under Gravity', 'Projectile Motion', 'Relative Motion', 'Graphs (s-t, v-t, a-t)'],
    keyFormulas: ['v = u + at', 's = ut + ½at²', 'v² = u² + 2as', 'Range (projectile) = u²sin2θ/g', 'Max height = u²sin²θ/2g', 'Time of flight = 2usinθ/g'],
    commonMistakes: ['Wrong sign convention for upward/downward motion', 'Confusing distance and displacement in return journeys', 'Forgetting that horizontal velocity is constant in projectile motion', 'Wrong graph interpretation'],
    faqs: [
      { q: 'How important is Kinematics for NEET?', a: '4-5% and foundational for all mechanics. Master equations of motion and projectile motion. NCERT + 50 numericals is sufficient. MindPeak starts every NEET Physics batch with kinematics mastery.' },
    ],
  },
  {
    slug: 'neet-physics-laws-of-motion',
    exam: 'NEET', subject: 'Physics', chapter: 'Laws of Motion & Friction',
    icon: Gauge,
    weightage: '4-6%', difficulty: 'Moderate', pyqCount: 35,
    description: 'Newton\'s three laws, free-body diagrams, and friction — the backbone of NEET mechanics. MindPeak\'s systematic FBD approach eliminates guesswork in force-based problems.',
    topics: ['Newton\'s First Law (Inertia)', 'Newton\'s Second Law (F = ma)', 'Newton\'s Third Law (Action-Reaction)', 'Free Body Diagrams', 'Friction (Static & Kinetic)', 'Circular Motion Dynamics', 'Motion on Inclined Plane', 'Connected Bodies & Pulleys'],
    keyFormulas: ['F = ma', 'f_s ≤ μ_s N', 'f_k = μ_k N', 'Centripetal force = mv²/r', 'Acceleration on incline = g sinθ (smooth)'],
    commonMistakes: ['Not drawing complete FBD (missing Normal or friction)', 'Wrong direction of friction force', 'Confusing centripetal and centrifugal forces', 'Wrong constraint relation for pulleys'],
    faqs: [
      { q: 'How to master FBD for NEET?', a: 'Step 1: Isolate the body. Step 2: Draw weight (mg↓). Step 3: Add Normal (perpendicular to surface). Step 4: Add friction (opposing relative motion). Step 5: Add applied forces. Practice 50+ FBDs. MindPeak drills this systematically.' },
    ],
  },
  {
    slug: 'neet-physics-work-energy-power',
    exam: 'NEET', subject: 'Physics', chapter: 'Work, Energy & Power',
    icon: Zap,
    weightage: '4-5%', difficulty: 'Moderate', pyqCount: 30,
    description: 'Work-energy theorem, conservation of energy, and power — conceptual yet scoring NEET chapter. MindPeak teaches energy conservation as a problem-solving shortcut that avoids complex force analysis.',
    topics: ['Work Done by Constant & Variable Forces', 'Kinetic & Potential Energy', 'Work-Energy Theorem', 'Conservation of Mechanical Energy', 'Conservative & Non-Conservative Forces', 'Power (Average & Instantaneous)', 'Collisions (Elastic & Inelastic)', 'Coefficient of Restitution'],
    keyFormulas: ['W = Fd cosθ', 'KE = ½mv²', 'PE = mgh', 'Work-energy: W_net = ΔKE', 'Power = W/t = Fv', 'e = (v₂-v₁)/(u₁-u₂)'],
    commonMistakes: ['Wrong sign of work done (angle > 90° → negative)', 'Forgetting work done by friction in energy conservation', 'Confusing elastic and inelastic collision equations', 'Wrong coefficient of restitution application'],
    faqs: [
      { q: 'When to use energy conservation vs Newton\'s laws?', a: 'Use energy conservation when you care about initial and final states (speed at bottom of slide). Use Newton\'s laws when you need acceleration or force at a specific point. MindPeak teaches both and helps you identify which is faster for each problem type.' },
    ],
  },
  {
    slug: 'neet-physics-gravitation',
    exam: 'NEET', subject: 'Physics', chapter: 'Gravitation',
    icon: Gauge,
    weightage: '3-4%', difficulty: 'Moderate', pyqCount: 25,
    description: 'Universal gravitation, orbital mechanics, and gravitational potential — elegant physics with NEET applications. MindPeak connects gravitation to satellite motion for practical understanding.',
    topics: ['Newton\'s Law of Gravitation', 'Acceleration Due to Gravity (Variation with Height, Depth)', 'Gravitational Potential & PE', 'Escape Velocity', 'Orbital Velocity', 'Kepler\'s Laws', 'Geostationary & Polar Satellites'],
    keyFormulas: ['F = GMm/r²', 'g = GM/R²', 'g at height: g(1-2h/R)', 'g at depth: g(1-d/R)', 'v_escape = √(2gR)', 'v_orbital = √(gR)', 'T² ∝ r³ (Kepler III)'],
    commonMistakes: ['Wrong variation of g formula (height vs depth)', 'Confusing escape and orbital velocity', 'Wrong Kepler\'s law application', 'Forgetting that g varies with latitude'],
    faqs: [
      { q: 'Why is Escape Velocity = √2 × Orbital Velocity?', a: 'Orbital velocity keeps you in circular orbit (v = √gR). Escape velocity needs enough KE to reach infinity (v = √2gR). The √2 factor comes from equating KE = PE at infinity. MindPeak derives both from energy conservation in one beautiful proof.' },
    ],
  },
  {
    slug: 'neet-physics-mechanical-properties',
    exam: 'NEET', subject: 'Physics', chapter: 'Mechanical Properties of Solids & Fluids',
    icon: Droplets,
    weightage: '3-5%', difficulty: 'Moderate', pyqCount: 30,
    description: 'Elasticity, fluid statics, and fluid dynamics — Young\'s modulus, Bernoulli\'s equation, and viscosity in one chapter. MindPeak covers solids and fluids together for efficient NEET preparation.',
    topics: ['Stress, Strain & Hooke\'s Law', 'Young\'s Modulus, Bulk Modulus, Shear Modulus', 'Pressure in Fluids (Pascal\'s Law)', 'Archimedes\' Principle & Buoyancy', 'Bernoulli\'s Theorem', 'Viscosity & Stokes\' Law', 'Surface Tension & Capillarity', 'Terminal Velocity'],
    keyFormulas: ['Stress = F/A', 'Strain = ΔL/L', 'Y = Stress/Strain', 'P = ρgh', 'P₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂² + ρgh₂', 'v_terminal = 2r²(ρ-σ)g/9η'],
    commonMistakes: ['Confusing different types of moduli', 'Wrong application of Bernoulli\'s equation', 'Forgetting conditions for Bernoulli (streamline, incompressible)', 'Wrong direction of buoyant force'],
    faqs: [
      { q: 'Are Mechanical Properties scoring for NEET?', a: 'Yes — mostly formula-based problems. Focus on Young\'s modulus, fluid pressure, Bernoulli\'s equation, and surface tension. MindPeak covers all essential numericals in 4 sessions.' },
    ],
  },

  /* ──────── HEAT & THERMODYNAMICS ──────── */
  {
    slug: 'neet-physics-thermal-properties',
    exam: 'NEET', subject: 'Physics', chapter: 'Thermal Properties of Matter',
    icon: Thermometer,
    weightage: '3-4%', difficulty: 'Easy', pyqCount: 22,
    description: 'Heat transfer, thermal expansion, and calorimetry — formula-based with consistent NEET appearances. MindPeak covers thermal properties with real-world examples (why railway tracks have gaps, etc.).',
    topics: ['Temperature Scales & Conversion', 'Linear, Area & Volume Expansion', 'Specific Heat Capacity & Calorimetry', 'Change of State & Latent Heat', 'Heat Transfer (Conduction, Convection, Radiation)', 'Newton\'s Law of Cooling', 'Stefan\'s Law & Wien\'s Law', 'Thermal Conductivity'],
    keyFormulas: ['ΔL = αLΔT', 'Q = mcΔT', 'Q = mL (latent heat)', 'dQ/dt = KA(T₁-T₂)/L (conduction)', 'P = σAT⁴ (Stefan)', 'λ_max T = b (Wien)'],
    commonMistakes: ['Wrong expansion coefficient (α vs β vs γ)', 'Forgetting latent heat during phase change (no temperature change)', 'Wrong Newton\'s cooling law application', 'Confusing thermal conductivity and heat capacity'],
    faqs: [
      { q: 'How to solve calorimetry problems?', a: 'Heat lost = Heat gained. Account for phase changes (latent heat) separately from temperature changes (specific heat). Always check if phase change occurs before assuming final temperature. MindPeak teaches a systematic heat-balance method.' },
    ],
  },
  {
    slug: 'neet-physics-thermodynamics',
    exam: 'NEET', subject: 'Physics', chapter: 'Thermodynamics',
    icon: Thermometer,
    weightage: '4-5%', difficulty: 'Hard', pyqCount: 30,
    description: 'Laws of thermodynamics, PV diagrams, and heat engines — conceptually deep with 4-5% NEET weightage. MindPeak\'s PV-diagram visualization approach makes thermodynamic processes intuitive.',
    topics: ['Zeroth & First Law', 'Thermodynamic Processes (Isothermal, Adiabatic, Isobaric, Isochoric)', 'PV Diagrams & Work Done', 'Second Law of Thermodynamics', 'Carnot Engine & Efficiency', 'Refrigerator & COP', 'Specific Heats of Gases (Cp, Cv)', 'Degree of Freedom & Equipartition'],
    keyFormulas: ['ΔU = Q - W (First Law)', 'W = ∫PdV', 'Isothermal: W = nRT ln(V₂/V₁)', 'Adiabatic: PV^γ = const', 'η_Carnot = 1 - T₂/T₁', 'Cp - Cv = R'],
    commonMistakes: ['Wrong sign convention for work and heat', 'Confusing isothermal and adiabatic curves on PV diagram', 'Wrong efficiency formula', 'Forgetting that Carnot is maximum possible efficiency'],
    faqs: [
      { q: 'How to read PV diagrams?', a: 'Area under curve = work done. Clockwise cycle = engine (positive work). Counter-clockwise = refrigerator. Steeper curve = adiabatic, flatter = isothermal. MindPeak teaches PV diagram reading with 20+ graph-based problems.' },
    ],
  },

  /* ──────── ELECTROMAGNETISM ──────── */
  {
    slug: 'neet-physics-electrostatics',
    exam: 'NEET', subject: 'Physics', chapter: 'Electrostatics',
    icon: Zap,
    weightage: '5-7%', difficulty: 'Hard', pyqCount: 40,
    description: 'Coulomb\'s law, electric field, potential, capacitors, and Gauss\'s law — highest-weightage NEET Physics chapter. MindPeak\'s visual field-line approach builds deep electrostatic intuition.',
    topics: ['Coulomb\'s Law', 'Electric Field (Point Charge, Dipole)', 'Electric Field Lines', 'Gauss\'s Law & Applications', 'Electric Potential & Potential Energy', 'Equipotential Surfaces', 'Capacitance & Parallel Plate Capacitor', 'Series & Parallel Capacitors', 'Dielectrics'],
    keyFormulas: ['F = kq₁q₂/r²', 'E = kq/r²', 'V = kq/r', 'Gauss: ΦE = q_enc/ε₀', 'C = ε₀A/d', 'U = ½CV² = ½QV = Q²/2C'],
    commonMistakes: ['Wrong direction of electric field at equatorial point of dipole', 'Confusing potential and potential energy', 'Wrong capacitor combination formula (series vs parallel)', 'Forgetting effect of dielectric on capacitance'],
    faqs: [
      { q: 'How important is Electrostatics for NEET?', a: '5-7% — the single most important physics chapter. Master Coulomb\'s law numericals, Gauss\'s law applications, and capacitor combinations. MindPeak dedicates 8 sessions to electrostatics.' },
    ],
  },
  {
    slug: 'neet-physics-current-electricity',
    exam: 'NEET', subject: 'Physics', chapter: 'Current Electricity',
    icon: Zap,
    weightage: '5-6%', difficulty: 'Moderate', pyqCount: 35,
    description: 'Ohm\'s law, Kirchhoff\'s laws, Wheatstone bridge, and potentiometer — circuit-solving skills for NEET. MindPeak\'s circuit-simplification technique handles even complex networks in minutes.',
    topics: ['Current & Drift Velocity', 'Ohm\'s Law & Resistance', 'Series & Parallel Resistors', 'Kirchhoff\'s Laws (KCL & KVL)', 'Wheatstone Bridge', 'Meter Bridge & Potentiometer', 'EMF & Internal Resistance', 'Electrical Power & Energy', 'Colour Code for Resistors'],
    keyFormulas: ['V = IR', 'R_series = R₁+R₂+...', '1/R_parallel = 1/R₁+1/R₂+...', 'Wheatstone: P/Q = R/S (balanced)', 'P = I²R = V²/R = VI', 'EMF: V = E - Ir'],
    commonMistakes: ['Wrong series/parallel identification in complex circuits', 'Forgetting internal resistance of battery', 'Wrong KVL sign convention', 'Wrong potentiometer sensitivity understanding'],
    faqs: [
      { q: 'How to solve complex circuits quickly?', a: 'Step 1: Identify series/parallel combinations. Step 2: If not reducible, use Kirchhoff\'s laws. Step 3: Look for Wheatstone bridge patterns (balanced bridge = open middle). MindPeak teaches a 3-step circuit reduction method.' },
    ],
  },
  {
    slug: 'neet-physics-magnetism',
    exam: 'NEET', subject: 'Physics', chapter: 'Magnetic Effects of Current & Magnetism',
    icon: Magnet,
    weightage: '4-6%', difficulty: 'Moderate', pyqCount: 35,
    description: 'Biot-Savart law, Ampere\'s law, force on current-carrying conductors, and magnetic properties — important NEET Physics chapter. MindPeak\'s right-hand-rule mastery eliminates direction-finding errors.',
    topics: ['Biot-Savart Law', 'Magnetic Field Due to Straight Wire, Circular Loop, Solenoid', 'Ampere\'s Circuital Law', 'Force on Moving Charge (Lorentz Force)', 'Force Between Parallel Currents', 'Torque on Current Loop', 'Moving Coil Galvanometer', 'Magnetic Properties (Dia, Para, Ferro)', 'Earth\'s Magnetism'],
    keyFormulas: ['B = μ₀I/2πr (straight wire)', 'B = μ₀NI/2R (centre of coil)', 'B = μ₀nI (solenoid)', 'F = qvBsinθ', 'F = BILsinθ', 'τ = NBIA sinθ'],
    commonMistakes: ['Wrong direction of magnetic field (right-hand thumb rule)', 'Confusing magnetic field formulas for different configurations', 'Wrong force direction on current-carrying conductor', 'Mixing up diamagnetic, paramagnetic, and ferromagnetic'],
    faqs: [
      { q: 'How to remember all magnetic field formulas?', a: 'Straight wire: μ₀I/2πr, Coil centre: μ₀NI/2R, Solenoid: μ₀nI. Notice the pattern — all have μ₀I. The geometry determines the rest. MindPeak teaches formula derivation so you can reconstruct any forgotten formula.' },
    ],
  },

  /* ──────── OPTICS ──────── */
  {
    slug: 'neet-physics-ray-optics',
    exam: 'NEET', subject: 'Physics', chapter: 'Ray Optics & Optical Instruments',
    icon: Eye,
    weightage: '4-6%', difficulty: 'Moderate', pyqCount: 35,
    description: 'Reflection, refraction, lenses, mirrors, and optical instruments — a high-yield NEET chapter. MindPeak\'s sign-convention mastery and ray-diagram precision ensure error-free optics problem-solving.',
    topics: ['Reflection (Plane & Spherical Mirrors)', 'Mirror Formula & Magnification', 'Refraction & Snell\'s Law', 'Total Internal Reflection', 'Lenses (Thin Lens Formula)', 'Power of Lens & Combination', 'Prism & Dispersion', 'Microscope (Simple & Compound)', 'Telescope (Astronomical & Terrestrial)'],
    keyFormulas: ['1/v + 1/u = 1/f (mirror)', '1/v - 1/u = 1/f (lens)', 'n₁sinθ₁ = n₂sinθ₂ (Snell)', 'sin θ_c = n₂/n₁ (TIR, n₁ > n₂)', 'P = 1/f (in metres)', 'P_combo = P₁ + P₂'],
    commonMistakes: ['Wrong sign convention (mirror vs lens)', 'Confusing real and virtual images', 'Wrong TIR condition (must go from denser to rarer)', 'Wrong magnification formula application'],
    faqs: [
      { q: 'How to avoid sign convention errors?', a: 'Use New Cartesian Convention consistently: direction of incident light = +ve. Object distance (u) is always -ve for real objects. Focal length: -ve for concave mirror, +ve for convex lens. MindPeak drills sign convention until it\'s automatic.' },
    ],
  },
  {
    slug: 'neet-physics-wave-optics',
    exam: 'NEET', subject: 'Physics', chapter: 'Wave Optics',
    icon: Eye,
    weightage: '3-4%', difficulty: 'Hard', pyqCount: 25,
    description: 'Interference, diffraction, and polarization — wave nature of light for NEET. MindPeak teaches Young\'s double-slit experiment with actual fringe-width calculations for confident problem-solving.',
    topics: ['Huygens\' Principle', 'Young\'s Double Slit Experiment (YDSE)', 'Fringe Width & Conditions for Maxima/Minima', 'Coherent & Incoherent Sources', 'Diffraction (Single Slit)', 'Resolving Power', 'Polarization (Malus\'s Law, Brewster\'s Angle)'],
    keyFormulas: ['Fringe width β = λD/d', 'Maxima: d sinθ = nλ', 'Minima: d sinθ = (n+½)λ', 'I = I₀ cos²θ (Malus)', 'tan θ_B = n₂/n₁ (Brewster)'],
    commonMistakes: ['Confusing conditions for maxima and minima', 'Wrong fringe width when medium changes', 'Forgetting that diffraction minima formula differs from interference', 'Wrong Brewster\'s angle calculation'],
    faqs: [
      { q: 'Is Wave Optics difficult for NEET?', a: 'Conceptually challenging but NEET asks standard problems — YDSE fringe width, single-slit diffraction, and Malus\'s law. Master these 3 types with 20 problems. MindPeak uses visual wave animations to build understanding.' },
    ],
  },

  /* ──────── WAVES ──────── */
  {
    slug: 'neet-physics-waves-sound',
    exam: 'NEET', subject: 'Physics', chapter: 'Oscillations & Waves',
    icon: Waves,
    weightage: '4-6%', difficulty: 'Moderate', pyqCount: 35,
    description: 'SHM, wave motion, standing waves, and Doppler effect — combined for NEET Physics efficiency. MindPeak teaches oscillations and waves together since standing waves are superposition of travelling waves.',
    topics: ['Simple Harmonic Motion (SHM)', 'Spring-Mass System', 'Simple Pendulum', 'Wave Motion (Transverse & Longitudinal)', 'Speed of Sound', 'Standing Waves & Harmonics', 'Organ Pipes (Open & Closed)', 'Beats', 'Doppler Effect'],
    keyFormulas: ['x = A sin(ωt + φ)', 'ω = 2π/T = √(k/m)', 'T = 2π√(L/g) (pendulum)', 'v = fλ', 'v = √(T/μ) (string)', 'Beat frequency = |f₁ - f₂|', 'f\' = f(v±v₀)/(v∓v_s) (Doppler)'],
    commonMistakes: ['Wrong phase in SHM equations', 'Confusing harmonics of open and closed pipes', 'Wrong sign in Doppler effect formula', 'Forgetting that velocity is max at mean position in SHM'],
    faqs: [
      { q: 'How to remember open vs closed pipe harmonics?', a: 'Open pipe: ALL harmonics (1st, 2nd, 3rd...). Closed pipe: ODD harmonics only (1st, 3rd, 5th...). Fundamental of closed pipe = half that of same-length open pipe. MindPeak uses visual node-antinode diagrams.' },
    ],
  },

  /* ──────── MODERN PHYSICS ──────── */
  {
    slug: 'neet-physics-dual-nature-atoms',
    exam: 'NEET', subject: 'Physics', chapter: 'Dual Nature of Matter & Atoms',
    icon: Atom,
    weightage: '4-5%', difficulty: 'Moderate', pyqCount: 30,
    description: 'Photoelectric effect, de Broglie wavelength, Bohr model, and X-rays — overlaps with Chemistry but from Physics perspective. MindPeak teaches atomic physics with Chemistry integration for NEET students.',
    topics: ['Photoelectric Effect', 'Einstein\'s Photoelectric Equation', 'de Broglie Hypothesis', 'Bohr\'s Model of Hydrogen Atom', 'Energy Levels & Spectra', 'X-ray Production & Moseley\'s Law'],
    keyFormulas: ['KE_max = hν - φ (photoelectric)', 'λ = h/mv (de Broglie)', 'E_n = -13.6/n² eV', 'r_n = 0.529n² Å', '1/λ = R(1/n₁² - 1/n₂²)'],
    commonMistakes: ['Confusing threshold frequency and work function', 'Wrong transition for specific spectral series', 'Forgetting that KE varies linearly with frequency (not intensity)', 'Wrong de Broglie wavelength for accelerated particles'],
    faqs: [
      { q: 'Does Atoms chapter overlap with Chemistry?', a: 'Significantly! Bohr model and hydrogen spectrum are identical in both subjects. MindPeak teaches them once in an integrated session — saving NEET students precious revision time.' },
    ],
  },
  {
    slug: 'neet-physics-nuclei-semiconductors',
    exam: 'NEET', subject: 'Physics', chapter: 'Nuclei & Semiconductor Electronics',
    icon: Atom,
    weightage: '4-6%', difficulty: 'Moderate', pyqCount: 35,
    description: 'Nuclear physics, radioactivity, and semiconductor devices — combined for NEET efficiency. MindPeak covers nuclear binding energy and diode circuits in focused sessions for maximum marks.',
    topics: ['Nuclear Composition & Size', 'Mass Defect & Binding Energy', 'Radioactive Decay (α, β, γ)', 'Half-Life & Decay Law', 'Nuclear Fission & Fusion', 'Intrinsic & Extrinsic Semiconductors', 'p-n Junction Diode', 'Zener Diode', 'Transistor (npn, pnp)', 'Logic Gates (AND, OR, NOT, NAND, NOR)'],
    keyFormulas: ['N = N₀ e^(-λt)', 't₁/₂ = 0.693/λ', 'BE = Δm × c² = Δm × 931.5 MeV', 'E = mc²', 'Diode: forward bias → current flows', 'Logic: NAND = universal gate'],
    commonMistakes: ['Wrong decay product identification', 'Confusing fission and fusion conditions', 'Wrong forward/reverse bias conditions for diode', 'Wrong truth table for logic gates'],
    faqs: [
      { q: 'Are Logic Gates important for NEET?', a: 'Yes — NEET asks 1-2 questions on logic gates (truth tables, Boolean expressions). AND, OR, NOT, NAND, NOR — learn truth tables and universal gate property. MindPeak covers logic gates in a single 30-minute session.' },
    ],
  },
];
