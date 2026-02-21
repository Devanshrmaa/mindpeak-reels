import type { NEETChapterData } from './types';

/* ═══════════════════════════════════════════════════
   NEET PHYSICS Practice Questions
   4 chapters, each with 2 topics, each topic with 5 easy / 6 medium / 5 hard
   ═══════════════════════════════════════════════════ */

/* ──── Chapter 1: Mechanics ──── */
const mechanics: NEETChapterData = {
  name: 'Mechanics',
  slug: 'mechanics',
  topics: [
    {
      name: 'Laws of Motion & Work-Energy',
      slug: 'laws-motion-energy',
      easy: [
        { q: "Newton's first law of motion is also known as the law of:", o: ['Acceleration', 'Inertia', 'Action-Reaction', 'Gravitation'], a: 1, s: "Newton's first law states that a body remains at rest or in uniform motion unless acted upon by an external force. This resistance to change in state is called inertia." },
        { q: 'SI unit of force is:', o: ['Dyne', 'Newton', 'Joule', 'Watt'], a: 1, s: 'Force = mass × acceleration. SI unit: 1 Newton = 1 kg⋅m/s². CGS unit: 1 dyne = 1 g⋅cm/s². 1 N = 10⁵ dynes.' },
        { q: 'Work done by a force is zero when the angle between force and displacement is:', o: ['0°', '45°', '90°', '180°'], a: 2, s: 'W = F⋅d⋅cosθ. When θ = 90°, cos 90° = 0, so W = 0. Example: carrying a bag horizontally — the lifting force is vertical while displacement is horizontal.' },
        { q: 'The momentum of a body of mass 5 kg moving with velocity 4 m/s is:', o: ['20 kg⋅m/s', '1.25 kg⋅m/s', '9 kg⋅m/s', '0.8 kg⋅m/s'], a: 0, s: 'Momentum p = mv = 5 × 4 = 20 kg⋅m/s. Momentum is a vector quantity with the same direction as velocity.' },
        { q: 'Kinetic energy of a body depends on:', o: ['Mass only', 'Velocity only', 'Both mass and velocity', 'Neither'], a: 2, s: 'KE = ½mv². Kinetic energy depends on both mass and velocity (squared). Doubling velocity quadruples KE, while doubling mass only doubles KE.' },
      ],
      medium: [
        { q: "Newton's third law implies:", o: ['Forces always cancel out', 'Action and reaction act on different bodies', 'Forces always produce acceleration', 'Friction is impossible'], a: 1, s: "Action and reaction are equal and opposite but act on DIFFERENT bodies. They don't cancel because they are applied to different objects. Example: Earth pulls apple (gravity); apple pulls Earth (reaction)." },
        { q: 'A block of mass 2 kg is placed on a frictionless surface. A force of 10 N acts on it. The acceleration is:', o: ['10 m/s²', '5 m/s²', '20 m/s²', '2 m/s²'], a: 1, s: 'F = ma → a = F/m = 10/2 = 5 m/s². On a frictionless surface, the entire applied force produces acceleration.' },
        { q: 'In a perfectly inelastic collision:', o: ['Both KE and momentum are conserved', 'Only momentum is conserved; KE is not', 'Only KE is conserved', 'Neither is conserved'], a: 1, s: 'In perfectly inelastic collision, objects stick together. Momentum is always conserved (in absence of external forces). KE is not conserved — some is converted to heat, sound, deformation.' },
        { q: 'The work-energy theorem states:', o: ['Work done = change in potential energy', 'Net work done on a body = change in its kinetic energy', 'Work done = force × time', 'Energy is always conserved'], a: 1, s: 'Work-energy theorem: W_net = ΔKE = ½mv² − ½mu². The net work done by all forces on a body equals the change in its kinetic energy.' },
        { q: 'A body is thrown vertically upward. At the highest point:', o: ['Both velocity and acceleration are zero', 'Velocity is zero but acceleration is g downward', 'Velocity is maximum', 'Acceleration is zero'], a: 1, s: 'At the highest point, velocity is momentarily zero (the body stops before falling back), but acceleration due to gravity (g = 9.8 m/s²) always acts downward throughout the motion.' },
        { q: 'The coefficient of friction depends on:', o: ['Area of contact', 'Nature of surfaces in contact', 'Velocity of the body', 'Shape of the body'], a: 1, s: 'Coefficient of friction (μ) depends on the nature and roughness of the two surfaces in contact. It does NOT depend on area of contact, shape, or velocity (for static/kinetic friction).' },
      ],
      hard: [
        { q: 'Two blocks of mass m₁ and m₂ (m₁ > m₂) are connected by a string over a massless pulley (Atwood machine). The acceleration is:', o: ['(m₁ − m₂)g/(m₁ + m₂)', '(m₁ + m₂)g/(m₁ − m₂)', 'm₁g/m₂', 'g'], a: 0, s: "Atwood machine: Net force = (m₁ − m₂)g, total mass = (m₁ + m₂). By Newton's second law: a = (m₁ − m₂)g/(m₁ + m₂). Tension T = 2m₁m₂g/(m₁ + m₂)." },
        { q: 'A particle moves in a circle of radius R with constant speed v. Its centripetal acceleration is:', o: ['v/R', 'v²/R', 'vR', 'v²R'], a: 1, s: 'Centripetal acceleration a_c = v²/R = ω²R, always directed toward the center of the circular path. The centripetal force F_c = mv²/R provides this acceleration.' },
        { q: 'The escape velocity from Earth does NOT depend on:', o: ['Mass of Earth', 'Radius of Earth', 'Mass of the escaping body', 'Gravitational constant G'], a: 2, s: 'Escape velocity v_e = √(2GM/R). It depends on mass (M) and radius (R) of the planet and G, but NOT on the mass of the escaping body. For Earth, v_e ≈ 11.2 km/s.' },
        { q: 'A spring of spring constant k is stretched by x. The potential energy stored is:', o: ['kx', '½kx', 'kx²', '½kx²'], a: 3, s: 'Elastic potential energy U = ½kx². This is derived from work done against the spring force (F = kx): W = ∫₀ˣ kx dx = ½kx². Energy is proportional to the square of displacement.' },
        { q: 'The moment of inertia of a solid sphere about its diameter is:', o: ['⅖MR²', '⅔MR²', 'MR²', '½MR²'], a: 0, s: 'Moment of inertia of a solid sphere about a diameter: I = ⅖MR². For a hollow sphere: I = ⅔MR². Moment of inertia depends on mass distribution relative to the axis of rotation.' },
      ],
    },
    {
      name: 'Gravitation & Properties of Matter',
      slug: 'gravitation-properties',
      easy: [
        { q: 'The value of acceleration due to gravity (g) on the surface of Earth is approximately:', o: ['8.9 m/s²', '9.8 m/s²', '10.8 m/s²', '6.67 m/s²'], a: 1, s: 'g ≈ 9.8 m/s² on Earth\'s surface. It is derived from g = GM/R², where M = mass of Earth, R = radius of Earth, G = gravitational constant.' },
        { q: 'Surface tension has the SI unit of:', o: ['N/m²', 'N/m', 'N⋅m', 'Pa'], a: 1, s: 'Surface tension is defined as force per unit length acting on the surface of a liquid. SI unit: N/m. It causes liquids to minimize their surface area (e.g., spherical droplets).' },
        { q: "Kepler's third law relates orbital period (T) to:", o: ['Mass of the planet', 'Semi-major axis (a) of the orbit: T² ∝ a³', 'Eccentricity', 'Velocity'], a: 1, s: "Kepler's third law: T² = (4π²/GM)a³, so T² ∝ a³. The square of the orbital period is proportional to the cube of the semi-major axis of the orbit." },
        { q: 'Viscosity is a property of:', o: ['Solids only', 'Fluids (liquids and gases)', 'Gases only', 'Vacuum'], a: 1, s: "Viscosity is the internal friction of a fluid — its resistance to flow. SI unit: Pa⋅s (or N⋅s/m²). Temperature increases → viscosity of liquids decreases but viscosity of gases increases." },
        { q: "Pascal's law states that pressure applied to an enclosed fluid is:", o: ['Absorbed by the fluid', 'Transmitted equally in all directions', 'Transmitted only downward', 'Reduced by the fluid'], a: 1, s: "Pascal's law: pressure applied to an enclosed fluid is transmitted undiminished to every point of the fluid and to the walls of the container. Basis of hydraulic machines." },
      ],
      medium: [
        { q: 'The gravitational potential energy between two masses m₁ and m₂ separated by distance r is:', o: ['Gm₁m₂/r', '−Gm₁m₂/r', 'Gm₁m₂/r²', '−Gm₁m₂/r²'], a: 1, s: 'Gravitational PE: U = −Gm₁m₂/r. It is negative (bound system) and becomes less negative (increases) as r increases. At r → ∞, U → 0.' },
        { q: "The height of a liquid in a capillary tube is given by Jurin's law:", o: ['h = 2Tcosθ/(rρg)', 'h = Tr/(ρg)', 'h = rρg/(2T)', 'h = 2T/(rρg)'], a: 0, s: "Jurin's law: h = 2Tcosθ/(rρg), where T = surface tension, θ = contact angle, r = tube radius, ρ = liquid density, g = acceleration due to gravity. Smaller radius → higher rise." },
        { q: 'A body weighs less at the equator than at the poles because:', o: ['Earth is not perfectly spherical and rotational effect', 'Gravity is less at equator', 'Moon\'s attraction', 'Temperature difference'], a: 0, s: 'At the equator: (1) Earth\'s radius is larger (oblate spheroid), so g is smaller. (2) Centrifugal effect due to Earth\'s rotation reduces apparent weight. Both effects make bodies weigh less at the equator.' },
        { q: "Bernoulli's equation is a statement of conservation of:", o: ['Mass', 'Momentum', 'Energy (per unit volume) for fluid flow', 'Charge'], a: 2, s: "Bernoulli's equation: P + ½ρv² + ρgh = constant along a streamline. It represents conservation of energy per unit volume for an ideal (incompressible, non-viscous) fluid." },
        { q: 'The time period of a satellite orbiting close to Earth\'s surface is approximately:', o: ['24 hours', '84.6 minutes', '12 hours', '30 minutes'], a: 1, s: 'T = 2π√(R/g) ≈ 2π√(6.4×10⁶/9.8) ≈ 5075 s ≈ 84.6 minutes. This is the minimum orbital period for any satellite around Earth.' },
        { q: 'Stokes\' law gives the viscous force on a sphere as:', o: ['F = 6πηrv', 'F = 4πηr²v', 'F = πηrv', 'F = 3πηrv'], a: 0, s: 'Stokes\' law: F = 6πηrv, where η = viscosity, r = radius of sphere, v = velocity. Valid for small, slow-moving spheres in viscous fluid (low Reynolds number). Used to find terminal velocity.' },
      ],
      hard: [
        { q: 'If the radius of Earth were to shrink by 1% (mass unchanged), the value of g at the surface would:', o: ['Decrease by 2%', 'Increase by 2%', 'Remain the same', 'Increase by 1%'], a: 1, s: 'g = GM/R². If R decreases by 1%: g\' = GM/(0.99R)² = g/(0.99)² ≈ g × 1.0203. So g increases by approximately 2%. (Δg/g = −2ΔR/R).' },
        { q: 'The terminal velocity of a sphere falling through a viscous fluid is proportional to:', o: ['r (radius)', 'r² (radius squared)', 'r³', '1/r'], a: 1, s: 'At terminal velocity: weight − buoyancy = viscous drag. (4/3)πr³(ρ−σ)g = 6πηrv_t. Solving: v_t = 2r²(ρ−σ)g/(9η). Terminal velocity ∝ r².' },
        { q: 'An object is at distance r from the center of Earth (r < R, inside Earth). The gravitational acceleration at that point is:', o: ['GM/r²', 'GM/R²', 'GMr/R³', 'Zero'], a: 2, s: 'Inside Earth (uniform density), only the mass enclosed within radius r contributes: g\' = GM\'r/R³ = (4/3)πGρr. So g ∝ r inside Earth (linear increase from center to surface).' },
        { q: 'For a geostationary orbit, the orbital radius from Earth\'s center is approximately:', o: ['6,400 km', '36,000 km', '42,164 km', '384,400 km'], a: 2, s: 'Geostationary orbit: T = 24 hours, same angular velocity as Earth. r = (GMT²/4π²)^(1/3) ≈ 42,164 km from Earth\'s center (about 35,786 km above surface). The satellite appears stationary relative to ground.' },
        { q: 'The excess pressure inside a soap bubble of radius R is:', o: ['2T/R', '4T/R', 'T/R', 'T/2R'], a: 1, s: 'A soap bubble has two surfaces (inner and outer). Excess pressure = 2(2T/R) = 4T/R for a soap bubble. For a liquid drop (single surface): ΔP = 2T/R.' },
      ],
    },
  ],
};

/* ──── Chapter 2: Thermodynamics & Kinetic Theory ──── */
const thermodynamics: NEETChapterData = {
  name: 'Thermodynamics & Kinetic Theory',
  slug: 'thermodynamics',
  topics: [
    {
      name: 'Laws of Thermodynamics',
      slug: 'laws-thermodynamics',
      easy: [
        { q: 'The first law of thermodynamics is a statement of conservation of:', o: ['Mass', 'Energy', 'Momentum', 'Charge'], a: 1, s: 'First law: ΔU = Q − W (or Q = ΔU + W). Heat added to a system equals the change in internal energy plus work done by the system. It is the law of conservation of energy for thermodynamic processes.' },
        { q: 'In an isothermal process, which quantity remains constant?', o: ['Pressure', 'Volume', 'Temperature', 'Entropy'], a: 2, s: 'Isothermal = constant temperature. For an ideal gas: PV = nRT = constant, so PV = constant (Boyle\'s law). Internal energy of an ideal gas depends only on T, so ΔU = 0 in isothermal process.' },
        { q: 'Heat always flows from:', o: ['Low to high temperature', 'High to low temperature (spontaneously)', 'In any direction', 'Only in contact'], a: 1, s: 'The second law of thermodynamics (Clausius statement): heat spontaneously flows from a hotter body to a colder body, never the reverse without external work being done.' },
        { q: 'Specific heat capacity is defined as heat required to raise:', o: ['Temperature of 1 kg by 1°C', 'Temperature of any mass by 10°C', 'Temperature of 1 g by 100°C', 'Temperature of 1 mole by 1°C'], a: 0, s: 'Specific heat capacity (c): heat required to raise the temperature of 1 kg of substance by 1°C (or 1 K). Q = mcΔT. Water has high specific heat: 4186 J/(kg⋅K).' },
        { q: 'The SI unit of heat is:', o: ['Calorie', 'Kelvin', 'Joule', 'Watt'], a: 2, s: 'Heat is a form of energy, so its SI unit is Joule (J). 1 calorie = 4.184 J. Calorie is a non-SI unit still used in nutrition and chemistry.' },
      ],
      medium: [
        { q: 'In an adiabatic process:', o: ['Temperature is constant', 'No heat exchange with surroundings (Q = 0)', 'Pressure is constant', 'Volume is constant'], a: 1, s: 'Adiabatic process: Q = 0 (no heat exchange). First law becomes ΔU = −W. If gas expands adiabatically, it does work at the expense of internal energy, so temperature drops. PVᵞ = constant.' },
        { q: 'The efficiency of a Carnot engine operating between temperatures T₁ (hot) and T₂ (cold) is:', o: ['1 − T₂/T₁', 'T₂/T₁', '1 − T₁/T₂', 'T₁/T₂'], a: 0, s: 'Carnot efficiency η = 1 − T₂/T₁ (temperatures in Kelvin). It is the maximum possible efficiency for any heat engine between these temperatures. η = 100% only if T₂ = 0 K (impossible).' },
        { q: 'The work done by an ideal gas during free expansion is:', o: ['Positive', 'Negative', 'Zero', 'Depends on temperature'], a: 2, s: 'Free expansion: gas expands into vacuum. No external pressure (P_ext = 0), so W = ∫P_ext dV = 0. For an ideal gas, internal energy depends only on T, so ΔU = 0 and Q = 0 (adiabatic). T remains constant.' },
        { q: 'The ratio Cₚ/Cᵥ = γ for a monoatomic ideal gas is:', o: ['1.4', '1.67', '1.33', '1.29'], a: 1, s: 'For monoatomic gas (3 degrees of freedom): Cᵥ = (3/2)R, Cₚ = (5/2)R. γ = Cₚ/Cᵥ = 5/3 ≈ 1.67. For diatomic (5 DOF): γ = 7/5 = 1.4.' },
        { q: 'Entropy of a system increases during:', o: ['Freezing', 'Irreversible processes', 'Isothermal compression', 'Crystallization'], a: 1, s: 'The second law: entropy of an isolated system always increases for irreversible (real) processes. ΔS_universe > 0 for all spontaneous processes. For reversible processes, ΔS_universe = 0.' },
        { q: 'In a cyclic process, the change in internal energy is:', o: ['Positive', 'Negative', 'Zero', 'Equal to work done'], a: 2, s: 'Internal energy is a state function. In a cyclic process, the system returns to its initial state, so ΔU = 0. From first law: Q = W (net heat absorbed = net work done) in a complete cycle.' },
      ],
      hard: [
        { q: 'The mean free path of gas molecules depends on:', o: ['Temperature only', 'Molecular diameter and number density', 'Pressure only', 'Mass of molecules only'], a: 1, s: 'Mean free path λ = 1/(√2 π d² n), where d = molecular diameter, n = number density. Higher density or larger molecules → shorter mean free path. Also λ = kT/(√2 π d² P).' },
        { q: 'The Clausius inequality states:', o: ['∮dQ/T ≤ 0 for all cyclic processes', '∮dQ/T > 0 always', 'ΔS = 0 for all processes', 'Q = W always'], a: 0, s: 'Clausius inequality: ∮(δQ/T) ≤ 0. Equality holds for reversible cyclic processes. For irreversible processes, the integral is negative. This is a mathematical statement of the second law.' },
        { q: 'The Maxwell speed distribution shows that at higher temperatures:', o: ['The peak shifts to lower speeds', 'The peak shifts to higher speeds and distribution broadens', 'Distribution becomes narrower', 'All molecules have the same speed'], a: 1, s: 'At higher temperatures, the Maxwell-Boltzmann distribution peak shifts to higher speeds (v_mp = √(2kT/m) increases) and the curve broadens (wider range of speeds). The peak height decreases.' },
        { q: 'For an ideal gas, the relation between pressure P and kinetic energy per unit volume (E) is:', o: ['P = E', 'P = ⅔E', 'P = ⅓E', 'P = 2E'], a: 1, s: 'From kinetic theory: P = ⅓ρ<v²> = ⅓(N/V)m<v²>. KE per unit volume E = ½ρ<v²>. Therefore P = ⅔E. Also PV = ⅔(total KE) for an ideal gas.' },
        { q: 'The coefficient of performance (COP) of a Carnot refrigerator is:', o: ['T₂/(T₁ − T₂)', 'T₁/(T₁ − T₂)', '1 − T₂/T₁', 'T₁/T₂'], a: 0, s: 'COP of Carnot refrigerator = T₂/(T₁ − T₂) = Q₂/W. Higher COP means less work needed for same cooling. COP can be > 1. As T₁ − T₂ → 0, COP → ∞ (easy to cool when temperature difference is small).' },
      ],
    },
    {
      name: 'Waves & Oscillations',
      slug: 'waves-oscillations',
      easy: [
        { q: 'The time period of a simple pendulum depends on:', o: ['Mass of the bob', 'Length and g', 'Amplitude (for small angles)', 'Color of the bob'], a: 1, s: 'T = 2π√(L/g). Time period depends only on length (L) and acceleration due to gravity (g), NOT on mass or amplitude (for small oscillations). Longer pendulum → longer period.' },
        { q: 'Sound waves are:', o: ['Transverse waves', 'Longitudinal waves', 'Electromagnetic waves', 'Neither'], a: 1, s: 'Sound waves are longitudinal mechanical waves — particles vibrate parallel to the direction of wave propagation, creating compressions and rarefactions. They require a medium to travel.' },
        { q: 'The speed of sound is maximum in:', o: ['Air', 'Water', 'Steel (solids)', 'Vacuum'], a: 2, s: 'Speed of sound: solids > liquids > gases (higher density and elasticity in solids). Steel: ~5000 m/s, Water: ~1500 m/s, Air: ~343 m/s (at 20°C). Sound cannot travel through vacuum.' },
        { q: 'Frequency is measured in:', o: ['Seconds', 'Hertz (Hz)', 'Meters', 'Decibels'], a: 1, s: 'Frequency (f) = number of oscillations per second. SI unit: Hertz (Hz) = 1/s. f = 1/T (reciprocal of time period). Human audible range: 20 Hz to 20,000 Hz.' },
        { q: 'In simple harmonic motion (SHM), the restoring force is:', o: ['Constant', 'Proportional to displacement and directed toward equilibrium', 'Zero', 'Proportional to velocity'], a: 1, s: 'In SHM: F = −kx (Hooke\'s law). The restoring force is proportional to displacement (x) from equilibrium and directed opposite to displacement (toward equilibrium position).' },
      ],
      medium: [
        { q: 'The Doppler effect causes:', o: ['Change in speed of sound', 'Apparent change in frequency when source and observer are in relative motion', 'Change in amplitude', 'Change in wavelength only'], a: 1, s: 'Doppler effect: apparent frequency changes when source and/or observer are in relative motion. Approaching → higher frequency (blue shift); receding → lower frequency (red shift). f\' = f(v ± v₀)/(v ∓ vₛ).' },
        { q: 'Resonance occurs when:', o: ['Damping is maximum', 'Driving frequency equals natural frequency of the system', 'Frequency is zero', 'Amplitude is minimum'], a: 1, s: 'Resonance occurs when the driving frequency matches the natural frequency of the oscillating system. At resonance, amplitude becomes maximum (limited by damping). Energy transfer from driver to oscillator is most efficient.' },
        { q: 'Standing waves are formed by:', o: ['Single wave traveling in one direction', 'Superposition of two waves traveling in opposite directions', 'Circular waves', 'Only longitudinal waves'], a: 1, s: 'Standing waves result from superposition of two identical waves traveling in opposite directions. They have nodes (zero amplitude) and antinodes (maximum amplitude). They don\'t transfer energy.' },
        { q: 'The fundamental frequency of a string fixed at both ends with length L is:', o: ['v/L', 'v/(2L)', '2v/L', 'v/(4L)'], a: 1, s: 'For a string fixed at both ends: fundamental mode has L = λ/2, so λ = 2L. f₁ = v/(2L), where v = √(T/μ) is wave speed. Harmonics: fₙ = nv/(2L), n = 1, 2, 3, ...' },
        { q: 'In SHM, the total energy is:', o: ['Only kinetic', 'Only potential', 'Constant (sum of KE and PE)', 'Zero'], a: 2, s: 'In SHM: E_total = ½kA² = constant. At equilibrium: all KE (½mv²_max). At extremes: all PE (½kA²). KE and PE continuously interchange but total energy remains constant (no damping).' },
        { q: 'Beats are produced when two sound waves have:', o: ['Same frequency', 'Slightly different frequencies', 'Very different frequencies', 'Same amplitude'], a: 1, s: 'Beats occur when two waves of nearly equal frequencies (f₁ and f₂) superpose. Beat frequency = |f₁ − f₂|. The amplitude varies periodically, producing the "wah-wah" effect. Audible when beat frequency < 10 Hz.' },
      ],
      hard: [
        { q: 'The quality (timbre) of sound depends on:', o: ['Frequency only', 'Amplitude only', 'Waveform (number and intensity of harmonics)', 'Speed of sound'], a: 2, s: 'Timbre/quality is determined by the waveform — the combination of fundamental and overtones (harmonics) and their relative intensities. This is why the same note sounds different on different instruments.' },
        { q: 'The velocity of a transverse wave on a string is:', o: ['√(T/μ)', '√(μ/T)', 'T×μ', 'T/μ'], a: 0, s: 'v = √(T/μ), where T = tension in string, μ = linear mass density (mass per unit length). Higher tension → faster wave. Heavier string → slower wave.' },
        { q: 'In a closed organ pipe, the first overtone is the:', o: ['Second harmonic', 'Third harmonic', 'Fourth harmonic', 'Fifth harmonic'], a: 1, s: 'Closed pipe: only odd harmonics exist. Fundamental = 1st harmonic (f₁ = v/4L). First overtone = 3rd harmonic (3f₁). Second overtone = 5th harmonic (5f₁). Pattern: (2n−1)f₁.' },
        { q: 'The energy of a wave is proportional to:', o: ['Amplitude', 'Square of amplitude', 'Frequency', 'Wavelength'], a: 1, s: 'Energy ∝ A² (amplitude squared). For SHM: E = ½kA². For electromagnetic waves: intensity ∝ E₀². Doubling amplitude quadruples the energy.' },
        { q: 'The phase difference between displacement and velocity in SHM is:', o: ['0°', '90° (π/2)', '180° (π)', '270° (3π/2)'], a: 1, s: 'If x = A sin(ωt), then v = dx/dt = Aω cos(ωt) = Aω sin(ωt + π/2). Velocity leads displacement by π/2 (90°). Acceleration leads displacement by π (180°).' },
      ],
    },
  ],
};

/* ──── Chapter 3: Electrostatics & Current Electricity ──── */
const electricity: NEETChapterData = {
  name: 'Electrostatics & Current Electricity',
  slug: 'electricity',
  topics: [
    {
      name: 'Electrostatics & Capacitance',
      slug: 'electrostatics-capacitance',
      easy: [
        { q: "Coulomb's law gives the force between two charges as:", o: ['F = kq₁q₂/r', 'F = kq₁q₂/r²', 'F = kq₁q₂r²', 'F = kq₁q₂r'], a: 1, s: "Coulomb's law: F = kq₁q₂/r², where k = 1/(4πε₀) = 9 × 10⁹ N⋅m²/C². The force is directly proportional to the product of charges and inversely proportional to the square of distance." },
        { q: 'The SI unit of electric charge is:', o: ['Volt', 'Ampere', 'Coulomb', 'Ohm'], a: 2, s: 'Electric charge is measured in Coulombs (C). 1 Coulomb = charge transferred by 1 Ampere of current in 1 second. Electron charge = 1.6 × 10⁻¹⁹ C (elementary charge).' },
        { q: 'Electric field lines emerge from:', o: ['Negative charges', 'Positive charges', 'Both charges', 'Neutral objects'], a: 1, s: 'Electric field lines originate from positive charges and terminate on negative charges. They never cross, are perpendicular to conducting surfaces, and their density indicates field strength.' },
        { q: 'A capacitor stores:', o: ['Current', 'Charge and electrical energy', 'Magnetic energy', 'Heat'], a: 1, s: 'A capacitor stores charge (Q = CV) and electrical energy (U = ½CV² = Q²/2C = ½QV). It consists of two conductors separated by a dielectric (insulator).' },
        { q: 'The electric potential at a point is defined as:', o: ['Force on a unit charge', 'Work done per unit charge in bringing it from infinity', 'Current per unit area', 'Charge per unit area'], a: 1, s: 'Electric potential V = W/q = work done per unit positive charge in bringing it from infinity to that point (against the electric field). SI unit: Volt (V) = J/C.' },
      ],
      medium: [
        { q: 'The capacitance of a parallel plate capacitor with dielectric constant K is:', o: ['C = ε₀A/d', 'C = Kε₀A/d', 'C = KA/d', 'C = ε₀A/(Kd)'], a: 1, s: 'C = Kε₀A/d, where K = dielectric constant, ε₀ = permittivity of free space, A = plate area, d = separation. Inserting a dielectric increases capacitance by factor K.' },
        { q: "Gauss's law states that the total electric flux through a closed surface is:", o: ['Zero always', 'q/ε₀ (charge enclosed divided by ε₀)', 'q × ε₀', 'E × A'], a: 1, s: "Gauss's law: Φ = ∮E⋅dA = q_enclosed/ε₀. The net electric flux through any closed surface equals the total enclosed charge divided by ε₀. Very useful for symmetric charge distributions." },
        { q: 'Two capacitors C₁ and C₂ in series have equivalent capacitance:', o: ['C₁ + C₂', 'C₁C₂/(C₁ + C₂)', 'C₁ − C₂', '(C₁ + C₂)/C₁C₂'], a: 1, s: 'Series: 1/C_eq = 1/C₁ + 1/C₂ → C_eq = C₁C₂/(C₁ + C₂). Charge is same on each. In parallel: C_eq = C₁ + C₂. Voltage is same across each.' },
        { q: 'The electric field inside a conductor in electrostatic equilibrium is:', o: ['Maximum', 'Equal to the surface field', 'Zero', 'Proportional to charge'], a: 2, s: 'Inside a conductor in electrostatic equilibrium, E = 0. All excess charge resides on the surface. The interior is field-free. If there were a field inside, charges would move (contradicting equilibrium).' },
        { q: 'An equipotential surface is:', o: ['A surface where electric field is constant', 'A surface where potential is the same at every point', 'A surface where charge is zero', 'A flat surface only'], a: 1, s: 'On an equipotential surface, V is constant at all points. No work is done in moving a charge along it. Electric field lines are always perpendicular to equipotential surfaces.' },
        { q: 'Electric dipole moment is defined as:', o: ['p = q/d', 'p = q × 2a (charge × separation)', 'p = q²a', 'p = q/2a'], a: 1, s: 'Electric dipole moment p = q × 2a, where q = magnitude of each charge, 2a = separation between charges. It is a vector directed from negative to positive charge. SI unit: C⋅m.' },
      ],
      hard: [
        { q: 'The energy density in an electric field E is:', o: ['½ε₀E', '½ε₀E²', 'ε₀E²', 'ε₀E/2'], a: 1, s: 'Energy per unit volume stored in an electric field: u = ½ε₀E² (in vacuum) or u = ½εE² = ½Kε₀E² (with dielectric). For a parallel plate capacitor: U = ½ε₀E²(Ad).' },
        { q: 'The electric field on the axial line of a short dipole at distance r (r >> 2a) is proportional to:', o: ['1/r', '1/r²', '1/r³', '1/r⁴'], a: 2, s: 'For a short dipole (r >> 2a): E_axial = 2kp/r³, E_equatorial = kp/r³. Both decrease as 1/r³. This is faster than point charge field (1/r²) because the two charges partially cancel.' },
        { q: 'A charged conductor has maximum charge density at:', o: ['Flat surfaces', 'Points and sharp edges', 'The center', 'Everywhere equally'], a: 1, s: 'Charge density (σ) is highest at points, sharp edges, and regions of high curvature on a conductor surface. This is why lightning rods have pointed tips — they facilitate corona discharge.' },
        { q: 'The potential energy of a dipole in a uniform electric field E is:', o: ['U = pE', 'U = −p⋅E = −pE cosθ', 'U = p/E', 'U = pE sinθ'], a: 1, s: 'U = −p⋅E = −pE cosθ, where θ is angle between dipole moment p and field E. Minimum energy (stable): θ = 0° (U = −pE). Maximum energy (unstable): θ = 180° (U = +pE).' },
        { q: 'When a dielectric slab of thickness t and dielectric constant K is placed in a capacitor (plate separation d), the capacitance becomes:', o: ['ε₀A/d', 'ε₀A/(d − t + t/K)', 'ε₀A/(d + t)', 'Kε₀A/d'], a: 1, s: 'C = ε₀A/(d − t + t/K). The dielectric reduces the effective gap. If t = d (completely filled): C = Kε₀A/d. The dielectric partially fills the gap, decreasing the effective separation.' },
      ],
    },
    {
      name: 'Current Electricity',
      slug: 'current-electricity',
      easy: [
        { q: "Ohm's law states:", o: ['V = IR', 'V = I/R', 'V = I²R', 'V = R/I'], a: 0, s: "Ohm's law: V = IR (voltage = current × resistance). It holds for ohmic conductors (metals at constant temperature). R is constant for ohmic materials." },
        { q: 'The SI unit of resistance is:', o: ['Ampere', 'Volt', 'Ohm (Ω)', 'Watt'], a: 2, s: 'Resistance is measured in Ohms (Ω). 1 Ω = 1 V/A. Named after Georg Simon Ohm. Resistance opposes the flow of current.' },
        { q: 'Electric power is given by:', o: ['P = V/I', 'P = VI', 'P = V/R', 'P = IR'], a: 1, s: 'P = VI = I²R = V²/R. Power is the rate of electrical energy consumption. SI unit: Watt (W). 1 kWh (kilowatt-hour) = 3.6 × 10⁶ J.' },
        { q: 'In a series circuit, the current through each component is:', o: ['Different', 'Same', 'Zero', 'Maximum at the first component'], a: 1, s: 'In a series circuit, the same current flows through all components (no branching). Voltage divides among components. Total resistance: R_total = R₁ + R₂ + R₃ + ...' },
        { q: 'The resistivity of a conductor depends on:', o: ['Length', 'Cross-sectional area', 'Material and temperature', 'Both length and area'], a: 2, s: 'Resistivity (ρ) is an intrinsic property of the material. R = ρL/A. Resistivity depends on the material and temperature but NOT on the dimensions of the conductor.' },
      ],
      medium: [
        { q: "Kirchhoff's junction rule (first law) is based on conservation of:", o: ['Energy', 'Charge (current)', 'Momentum', 'Mass'], a: 1, s: "Kirchhoff's junction rule: ΣI_in = ΣI_out at any junction. It is based on conservation of charge — charge cannot accumulate or disappear at a junction. Kirchhoff's loop rule is based on conservation of energy." },
        { q: 'The internal resistance of a cell causes:', o: ['EMF to increase', 'Terminal voltage to be less than EMF when discharging', 'Current to increase', 'No effect'], a: 1, s: 'Terminal voltage V = EMF − Ir (when discharging), where r = internal resistance. The voltage drop across internal resistance reduces the available voltage at the terminals.' },
        { q: 'A Wheatstone bridge is balanced when:', o: ['All resistances are equal', 'P/Q = R/S (ratio of opposite arms are equal)', 'Current is maximum', 'Galvanometer shows maximum deflection'], a: 1, s: 'Wheatstone bridge is balanced when P/Q = R/S. At balance, no current flows through the galvanometer (null deflection). This principle is used for precise resistance measurement.' },
        { q: 'The drift velocity of electrons in a conductor is typically:', o: ['Close to speed of light', 'A few mm/s', 'A few km/s', 'Zero'], a: 1, s: 'Drift velocity is very small — typically ~10⁻⁴ m/s (a few mm/s). However, the electric signal travels at nearly the speed of light because the electric field propagates instantly through the conductor.' },
        { q: 'When resistors R₁ and R₂ are connected in parallel:', o: ['Voltage across each is different', 'Current through each is the same', 'Voltage across each is the same', 'Total resistance increases'], a: 2, s: 'In parallel: voltage is the same across each resistor. Current divides. Total resistance: 1/R_eq = 1/R₁ + 1/R₂. R_eq is always less than the smallest individual resistance.' },
        { q: 'The temperature coefficient of resistance for metals is:', o: ['Negative', 'Positive', 'Zero', 'Infinite'], a: 1, s: 'Metals have a positive temperature coefficient — resistance increases with temperature (due to increased lattice vibrations scattering conduction electrons). Semiconductors have negative coefficient (more carriers at higher T).' },
      ],
      hard: [
        { q: 'The condition for maximum power transfer from a battery (EMF ε, internal resistance r) to an external load R is:', o: ['R >> r', 'R << r', 'R = r', 'R = 2r'], a: 2, s: 'Maximum power transfer theorem: maximum power is delivered to external load when R = r (load resistance equals internal resistance). P_max = ε²/(4r). But efficiency at this point is only 50%.' },
        { q: 'In a potentiometer, the EMF of a cell is balanced at length l. If the EMF of the driver cell is increased:', o: ['Balanced length increases', 'Balanced length decreases', 'No change', 'Balance is not possible'], a: 1, s: 'If driver EMF increases, potential gradient (V/L) increases. The unknown EMF is balanced at a shorter length l\' (since ε = (V/L)×l, and V/L increased, l must decrease for same ε).' },
        { q: 'The equivalent resistance between two diagonally opposite corners of a cube made of 12 identical resistors (each R) is:', o: ['R', '5R/6', 'R/2', '7R/12'], a: 1, s: 'By symmetry, current distributes equally at each junction. Using Kirchhoff\'s laws and symmetry arguments, R_eq = 5R/6 between diagonally opposite corners of a cube of 12 identical resistors.' },
        { q: 'Mobility of charge carriers is defined as:', o: ['Drift velocity per unit electric field (μ = v_d/E)', 'Current per unit area', 'Charge per unit time', 'Resistance per unit length'], a: 0, s: 'Mobility μ = v_d/E (drift velocity per unit electric field). SI unit: m²/(V⋅s). Higher mobility means charge carriers move faster for a given field. Conductivity σ = neμ.' },
        { q: 'The sensitivity of a potentiometer can be increased by:', o: ['Decreasing the length of potentiometer wire', 'Increasing the length of potentiometer wire', 'Increasing the current', 'Using thicker wire'], a: 1, s: 'Sensitivity increases with wire length (L) because potential gradient (k = V/L) decreases — smaller voltage per unit length allows measurement of smaller EMF differences more precisely.' },
      ],
    },
  ],
};

/* ──── Chapter 4: Optics & Modern Physics ──── */
const opticsModern: NEETChapterData = {
  name: 'Optics & Modern Physics',
  slug: 'optics-modern',
  topics: [
    {
      name: 'Ray Optics & Wave Optics',
      slug: 'optics',
      easy: [
        { q: "Snell's law relates:", o: ['Angle of incidence to angle of reflection', 'sin i / sin r = refractive index', 'Focal length to radius of curvature', 'Magnification to object distance'], a: 1, s: "Snell's law: n₁ sin i = n₂ sin r, or sin i/sin r = n₂₁ (refractive index of medium 2 w.r.t. medium 1). At the critical angle, r = 90° and total internal reflection occurs." },
        { q: 'A convex lens converges light rays to a point called:', o: ['Center of curvature', 'Principal focus', 'Optical center', 'Pole'], a: 1, s: 'A convex (converging) lens brings parallel rays to a point called the principal focus (F). Focal length (f) is the distance from the optical center to the focus. f is positive for convex lens.' },
        { q: 'The phenomenon of splitting white light into constituent colors by a prism is called:', o: ['Reflection', 'Diffraction', 'Dispersion', 'Polarization'], a: 2, s: 'Dispersion is the splitting of white light into its component colors (VIBGYOR) by a prism. It occurs because refractive index varies with wavelength — violet has highest n, red has lowest.' },
        { q: 'Total internal reflection occurs when light travels from:', o: ['Rarer to denser medium', 'Denser to rarer medium (angle > critical angle)', 'Any medium to vacuum', 'Vacuum to any medium'], a: 1, s: 'Total internal reflection (TIR) occurs when light travels from a denser to rarer medium at an angle greater than the critical angle. All light is reflected, none is refracted. Used in optical fibres and prisms.' },
        { q: 'The image formed by a plane mirror is:', o: ['Real and inverted', 'Virtual, erect, and laterally inverted', 'Real and enlarged', 'Virtual and diminished'], a: 1, s: 'Plane mirror forms a virtual, erect, laterally inverted image of the same size as the object. Image distance = object distance. The image cannot be caught on a screen.' },
      ],
      medium: [
        { q: 'The lens maker\'s equation is:', o: ['1/f = (n − 1)[1/R₁ − 1/R₂]', '1/f = n(1/R₁ + 1/R₂)', '1/f = 1/R₁ + 1/R₂', 'f = R₁ + R₂'], a: 0, s: 'Lensmaker\'s equation: 1/f = (n − 1)(1/R₁ − 1/R₂), where n = refractive index, R₁, R₂ = radii of curvature of the two surfaces. It relates focal length to lens geometry and material.' },
        { q: "Young's double slit experiment demonstrates:", o: ['Particle nature of light', 'Wave nature of light (interference)', 'Photoelectric effect', 'Compton effect'], a: 1, s: "Young's double slit experiment (1801) showed interference of light — proving its wave nature. Bright fringes (constructive): path difference = nλ. Dark fringes (destructive): path difference = (2n+1)λ/2." },
        { q: 'Power of a lens in diopters is:', o: ['P = f', 'P = 1/f (f in meters)', 'P = f²', 'P = 2f'], a: 1, s: 'Power P = 1/f (with f in meters). SI unit: diopter (D). Convex lens: positive power. Concave lens: negative power. Used in prescriptions for corrective lenses.' },
        { q: 'In single slit diffraction, the angular width of central maximum is:', o: ['λ/a', '2λ/a', 'a/λ', 'λ/(2a)'], a: 1, s: 'Central maximum angular width = 2λ/a, where a = slit width, λ = wavelength. First minimum occurs at sin θ = λ/a. The central maximum is twice as wide as other maxima.' },
        { q: 'Chromatic aberration in lenses is caused by:', o: ['Spherical shape of lens', 'Variation of refractive index with wavelength (dispersion)', 'Manufacturing defects', 'Temperature changes'], a: 1, s: 'Chromatic aberration occurs because n varies with λ (dispersion). Violet light focuses closer than red light. Corrected using achromatic doublet (combination of converging and diverging lenses of different materials).' },
        { q: 'The resolving power of a microscope can be increased by:', o: ['Increasing wavelength', 'Decreasing the numerical aperture', 'Decreasing wavelength and increasing aperture', 'Using a larger eyepiece'], a: 2, s: 'Resolving power ∝ 2n sinθ/λ (numerical aperture/wavelength). Decreasing wavelength (UV, electron beams) and increasing NA (oil immersion) improve resolution. Electron microscopes have much higher resolving power.' },
      ],
      hard: [
        { q: 'The photoelectric effect demonstrates:', o: ['Wave nature of light', 'Particle (quantum) nature of light', 'Diffraction of light', 'Interference of light'], a: 1, s: 'Photoelectric effect (Einstein, 1905): light behaves as particles (photons) with energy E = hf. Electrons are ejected when photon energy exceeds the work function: KE_max = hf − φ. Threshold frequency exists.' },
        { q: 'de Broglie wavelength of a particle with momentum p is:', o: ['λ = hp', 'λ = h/p', 'λ = p/h', 'λ = h²/p'], a: 1, s: 'de Broglie (1924): λ = h/p = h/(mv). Matter has wave-like properties. For an electron accelerated through V volts: λ = h/√(2meV) ≈ 1.226/√V nm. Verified by Davisson-Germer experiment.' },
        { q: 'In Bohr\'s model, the radius of the nth orbit is proportional to:', o: ['n', 'n²', '1/n', '1/n²'], a: 1, s: 'Bohr model: rₙ = n²a₀/Z, where a₀ = 0.529 Å (Bohr radius). So rₙ ∝ n². Energy: Eₙ = −13.6Z²/n² eV (∝ 1/n²). Velocity: vₙ ∝ 1/n.' },
        { q: 'The binding energy per nucleon is maximum for:', o: ['Hydrogen', 'Iron-56 (Fe-56)', 'Uranium-238', 'Helium-4'], a: 1, s: 'Binding energy per nucleon peaks at Fe-56 (~8.8 MeV/nucleon) — making it the most stable nucleus. Lighter nuclei gain stability by fusion; heavier nuclei gain stability by fission (both move toward Fe-56).' },
        { q: 'The half-life of a radioactive substance is the time in which:', o: ['All atoms decay', 'Half of the atoms decay', 'Activity becomes zero', 'Mass doubles'], a: 1, s: 'Half-life (t₁/₂) = time for half the radioactive nuclei to decay. N = N₀(½)^(t/t₁/₂). t₁/₂ = ln2/λ = 0.693/λ, where λ = decay constant. After n half-lives: N = N₀/2ⁿ.' },
      ],
    },
    {
      name: 'Magnetism & Electromagnetic Induction',
      slug: 'magnetism-emi',
      easy: [
        { q: 'A current-carrying conductor in a magnetic field experiences a force given by:', o: ['F = qE', 'F = BIL sinθ', 'F = kq₁q₂/r²', 'F = mg'], a: 1, s: 'Lorentz force on a current-carrying conductor: F = BIL sinθ, where B = magnetic field, I = current, L = length of conductor, θ = angle between I and B. Maximum when θ = 90°.' },
        { q: 'The SI unit of magnetic flux is:', o: ['Tesla', 'Weber (Wb)', 'Henry', 'Gauss'], a: 1, s: 'Magnetic flux Φ = B⋅A⋅cosθ. SI unit: Weber (Wb) = T⋅m². Tesla (T) is the unit of magnetic field (B). 1 Wb = 1 V⋅s. Gauss is CGS unit (1 T = 10⁴ G).' },
        { q: 'A solenoid produces a magnetic field that is:', o: ['Radial', 'Uniform inside, similar to a bar magnet outside', 'Zero everywhere', 'Circular'], a: 1, s: 'A solenoid produces a nearly uniform magnetic field inside (B = μ₀nI, where n = turns per unit length). Outside, it resembles a bar magnet field. Used in electromagnets.' },
        { q: "Faraday's law of electromagnetic induction states that induced EMF is:", o: ['Proportional to magnetic flux', 'Equal to the rate of change of magnetic flux', 'Always zero', 'Proportional to resistance'], a: 1, s: "Faraday's law: EMF = −dΦ/dt. The induced EMF is proportional to the rate of change of magnetic flux through the circuit. The negative sign indicates Lenz's law (opposes the change)." },
        { q: 'An electric motor converts:', o: ['Mechanical to electrical energy', 'Electrical to mechanical energy', 'Heat to electrical energy', 'Chemical to electrical energy'], a: 1, s: 'An electric motor converts electrical energy to mechanical energy using the force on a current-carrying coil in a magnetic field (F = BIL). A generator does the reverse.' },
      ],
      medium: [
        { q: "Lenz's law is based on conservation of:", o: ['Charge', 'Mass', 'Energy', 'Momentum'], a: 2, s: "Lenz's law: the direction of induced current opposes the change causing it. This ensures energy conservation — work must be done against the opposing force to maintain the change in flux." },
        { q: 'The magnetic field at the center of a circular loop carrying current I with radius R is:', o: ['μ₀I/(2R)', 'μ₀I/R', 'μ₀IR', 'μ₀I/(4πR)'], a: 0, s: 'B at center of a circular loop: B = μ₀I/(2R). For N turns: B = μ₀NI/(2R). The field is perpendicular to the plane of the loop (use right-hand rule for direction).' },
        { q: 'Self-inductance of a coil is measured in:', o: ['Farad', 'Henry (H)', 'Weber', 'Tesla'], a: 1, s: 'Self-inductance (L) is measured in Henry (H). 1 H = 1 Wb/A = 1 V⋅s/A. L = NΦ/I. The induced EMF: ε = −L(dI/dt). For a solenoid: L = μ₀n²Al.' },
        { q: 'In an AC circuit with only a pure capacitor:', o: ['Current leads voltage by 90°', 'Voltage leads current by 90°', 'Current and voltage are in phase', 'Current lags voltage by 45°'], a: 0, s: 'In a pure capacitive circuit: current leads voltage by 90° (π/2). I = C(dV/dt). When V is at zero (changing fastest), I is maximum. Capacitive reactance Xc = 1/(ωC).' },
        { q: 'A transformer works on the principle of:', o: ['Self-induction', 'Mutual induction', 'Coulomb\'s law', 'Ohm\'s law'], a: 1, s: 'Transformer works on mutual induction: changing current in primary coil creates changing flux that induces EMF in secondary coil. V₂/V₁ = N₂/N₁. Step-up: N₂ > N₁. Step-down: N₂ < N₁.' },
        { q: 'The resonant frequency of an LC circuit is:', o: ['f = 1/(2π√LC)', 'f = 2πLC', 'f = LC', 'f = 1/LC'], a: 0, s: 'Resonant frequency: f₀ = 1/(2π√LC) or ω₀ = 1/√LC. At resonance in a series RLC circuit: impedance is minimum (= R), current is maximum, and XL = XC.' },
      ],
      hard: [
        { q: 'The displacement current introduced by Maxwell is:', o: ['Actual current flow', 'ε₀ times the rate of change of electric flux (ε₀ dΦE/dt)', 'Current due to moving charges', 'Current in a resistor'], a: 1, s: 'Maxwell\'s displacement current: Id = ε₀(dΦE/dt). It accounts for the changing electric field between capacitor plates (where no actual charges flow), making Ampere\'s law consistent with charge conservation.' },
        { q: 'Eddy currents can be reduced by:', o: ['Increasing conductor thickness', 'Using laminated cores', 'Increasing magnetic field', 'Using solid cores'], a: 1, s: 'Eddy currents are reduced by laminating the core — thin, insulated sheets of metal increase resistance to circulating currents, reducing energy loss (I²R heating) while maintaining magnetic flux path.' },
        { q: 'The quality factor (Q factor) of a series RLC circuit at resonance is:', o: ['R/ωL', 'ωL/R = 1/(ωCR)', 'ωRC', 'L/R'], a: 1, s: 'Q = ω₀L/R = 1/(ω₀CR) = (1/R)√(L/C). Higher Q means sharper resonance peak (more selective), lower bandwidth, and lower energy dissipation. Q is dimensionless.' },
        { q: 'The electromagnetic spectrum in order of increasing frequency is:', o: ['Radio, microwave, IR, visible, UV, X-ray, gamma', 'Gamma, X-ray, UV, visible, IR, microwave, radio', 'IR, radio, visible, UV, X-ray', 'Visible, UV, radio, X-ray, gamma'], a: 0, s: 'Increasing frequency (decreasing wavelength): Radio < Microwave < Infrared < Visible (ROYGBIV) < Ultraviolet < X-rays < Gamma rays. All travel at speed of light c = 3 × 10⁸ m/s in vacuum.' },
        { q: 'Skin effect in AC circuits causes current to flow mainly on the:', o: ['Center of the conductor', 'Surface of the conductor', 'Equally throughout', 'Only through insulation'], a: 1, s: 'Skin effect: at high AC frequencies, current tends to flow near the surface of a conductor due to electromagnetic induction creating opposing currents in the interior. Effective cross-section decreases, increasing resistance.' },
      ],
    },
  ],
};

export const physicsChapters: NEETChapterData[] = [
  mechanics,
  thermodynamics,
  electricity,
  opticsModern,
];
