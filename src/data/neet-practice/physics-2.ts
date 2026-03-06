import type { NEETChapterData } from './types';

/* ═══════════════════════════════════════════════════
   NEET PHYSICS — Expansion (4 new chapters)
   ═══════════════════════════════════════════════════ */

const electrostatics: NEETChapterData = {
  name: 'Electrostatics',
  slug: 'electrostatics',
  topics: [
    {
      name: 'Coulomb\'s Law & Electric Field',
      slug: 'coulomb-law-field',
      easy: [
        { q: 'Coulomb\'s law is analogous to:', o: ['Ohm\'s law', 'Newton\'s law of gravitation', 'Hooke\'s law', 'Faraday\'s law'], a: 1, s: 'Both are inverse-square laws: F ∝ 1/r². Coulomb: F = kq₁q₂/r². Newton: F = Gm₁m₂/r². Key difference: gravitational force is always attractive, electrostatic can be attractive or repulsive.' },
        { q: 'The SI unit of electric charge is:', o: ['Volt', 'Coulomb', 'Ampere', 'Ohm'], a: 1, s: 'Charge is measured in Coulombs (C). 1 Coulomb = charge of ~6.24 × 10¹⁸ electrons. Elementary charge (e) = 1.6 × 10⁻¹⁹ C. Charge is quantized (q = ne) and conserved.' },
        { q: 'Electric field lines originate from:', o: ['Negative charges', 'Positive charges', 'Both', 'Neither'], a: 1, s: 'Electric field lines start from positive charges and end on negative charges. They never cross each other. Denser lines = stronger field. Tangent at any point gives field direction.' },
        { q: 'Like charges:', o: ['Attract each other', 'Repel each other', 'Have no interaction', 'Neutralize each other'], a: 1, s: 'Fundamental rule: like charges repel, unlike charges attract. Positive-positive repel, negative-negative repel, positive-negative attract. Force direction along the line joining the charges.' },
        { q: 'The electric field inside a conductor at equilibrium is:', o: ['Maximum', 'Uniform', 'Zero', 'Infinite'], a: 2, s: 'Inside a conductor at electrostatic equilibrium, E = 0. Free electrons redistribute until internal field cancels the external field. All excess charge resides on the surface. This is the basis of electrostatic shielding.' },
      ],
      medium: [
        { q: 'The electric field at a point due to a point charge is E. If the distance is doubled, the field becomes:', o: ['E/2', 'E/4', '2E', '4E'], a: 1, s: 'E = kq/r². If r → 2r: E\' = kq/(2r)² = kq/4r² = E/4. Electric field follows inverse-square law, same as Coulomb\'s force.' },
        { q: 'Gauss\'s law relates:', o: ['Charge and current', 'Electric flux through a closed surface to enclosed charge', 'Magnetic field to current', 'Potential to kinetic energy'], a: 1, s: 'Gauss\'s law: ∮E⋅dA = q_enc/ε₀. Total electric flux through any closed surface equals the enclosed charge divided by ε₀. Useful for symmetric charge distributions (sphere, cylinder, plane).' },
        { q: 'Electric potential at a point is defined as:', o: ['Force per unit charge', 'Work done per unit charge in bringing a test charge from infinity', 'Charge per unit area', 'Energy per unit time'], a: 1, s: 'V = W/q₀ = kQ/r. Electric potential is the work done by external force per unit positive test charge to bring it from infinity to that point. Scalar quantity. Unit: Volt (J/C).' },
        { q: 'An equipotential surface is one where:', o: ['Electric field is zero', 'Potential is the same at every point', 'Charges accumulate', 'Field is maximum'], a: 1, s: 'Equipotential surfaces: all points at same potential. No work done moving charge along them. Electric field lines are always perpendicular to equipotential surfaces. Conductor surface is an equipotential at equilibrium.' },
        { q: 'The capacitance of a parallel plate capacitor increases with:', o: ['Increasing plate separation', 'Increasing plate area', 'Decreasing dielectric constant', 'Decreasing plate area'], a: 1, s: 'C = ε₀κA/d. Capacitance increases with: larger plate area (A), smaller separation (d), higher dielectric constant (κ). Inserting dielectric between plates increases capacitance by factor κ.' },
      ],
      hard: [
        { q: 'Two capacitors C₁ and C₂ in series have equivalent capacitance:', o: ['C₁ + C₂', 'C₁C₂/(C₁ + C₂)', 'C₁/C₂', '(C₁ + C₂)/C₁C₂'], a: 1, s: 'Series: 1/C_eq = 1/C₁ + 1/C₂ → C_eq = C₁C₂/(C₁+C₂). In series, charge is same on each capacitor. Parallel: C_eq = C₁ + C₂ (voltages same, charges add).' },
        { q: 'Energy stored in a capacitor is:', o: ['QV', '½QV = ½CV² = Q²/2C', 'QV²', 'Q²V'], a: 1, s: 'U = ½QV = ½CV² = Q²/2C. Energy is stored in the electric field between the plates. Energy density = ½ε₀E² (energy per unit volume in the field).' },
        { q: 'The electric field just outside a charged conductor is:', o: ['Zero', 'σ/ε₀ (perpendicular to surface)', 'σ/2ε₀', 'Parallel to surface'], a: 1, s: 'E = σ/ε₀ just outside the surface (perpendicular). σ = surface charge density. Inside conductor: E = 0. For infinite plane of charge: E = σ/2ε₀ on each side.' },
        { q: 'A dielectric is placed in an electric field. The electric field inside the dielectric is:', o: ['Zero', 'Increased', 'Reduced by factor κ', 'Unchanged'], a: 2, s: 'Dielectric reduces the field: E_dielectric = E_free/κ. Polarization of dielectric creates an opposing internal field. κ (dielectric constant) > 1 always. Vacuum: κ = 1. Water: κ ≈ 80. This is why capacitance increases.' },
        { q: 'The work done in moving a charge in a closed loop in an electrostatic field is:', o: ['Positive', 'Negative', 'Zero', 'Depends on path'], a: 2, s: 'Electrostatic field is conservative: work done in a closed loop = 0. Equivalently: ∮E⋅dl = 0. This is why electric potential is well-defined (path-independent). Contrast with non-conservative induced electric fields.' },
      ],
    },
    {
      name: 'Electric Potential & Capacitance',
      slug: 'potential-capacitance',
      easy: [
        { q: 'The SI unit of capacitance is:', o: ['Ohm', 'Farad', 'Henry', 'Tesla'], a: 1, s: 'Capacitance is measured in Farads (F). C = Q/V. 1 Farad = 1 Coulomb per Volt. Practical units: μF (10⁻⁶), nF (10⁻⁹), pF (10⁻¹²). Named after Michael Faraday.' },
        { q: 'Electric potential is a:', o: ['Vector quantity', 'Scalar quantity', 'Dimensionless', 'Tensor'], a: 1, s: 'Electric potential (V) is a scalar quantity — it has magnitude but no direction. Electric field (E) is a vector. Relationship: E = −dV/dr (field points in direction of decreasing potential).' },
        { q: 'Potential difference between two points A and B is:', o: ['V_A × V_B', 'V_A − V_B', 'V_A + V_B', 'V_A / V_B'], a: 1, s: 'Potential difference V_AB = V_A − V_B = work done per unit charge in moving charge from B to A. Current flows from higher to lower potential (conventional current). 1 Volt = 1 Joule/Coulomb.' },
        { q: 'A capacitor stores energy in the form of:', o: ['Magnetic field', 'Electric field between its plates', 'Heat', 'Chemical energy'], a: 1, s: 'Capacitor stores energy in the electric field between its plates. U = ½CV². When discharged, this energy is released as current. Used in flash units, defibrillators, and electronic circuits.' },
        { q: 'The potential at infinity is taken as:', o: ['Maximum', 'Minimum', 'Zero (by convention)', 'Undefined'], a: 2, s: 'By convention, electric potential at infinity = 0. Potential at any point = work done to bring unit positive charge from infinity to that point. V = kQ/r → 0 as r → ∞.' },
      ],
      medium: [
        { q: 'Electric potential due to a dipole at an axial point varies as:', o: ['1/r', '1/r²', '1/r³', '1/r⁴'], a: 1, s: 'For a dipole: V_axial = kp/(r²) (1/r² dependence). V_equatorial = 0. Electric field of dipole: E ∝ 1/r³ (both axial and equatorial). p = qd is the dipole moment.' },
        { q: 'When a dielectric slab of constant κ is fully inserted between the plates of an isolated charged capacitor:', o: ['Charge increases', 'Voltage increases', 'Voltage decreases to V/κ, capacitance increases to κC', 'Nothing changes'], a: 2, s: 'Isolated capacitor (charge constant Q): C → κC (increases), V = Q/C → V/κ (decreases), E → E/κ (decreases), U = Q²/2C → U/κ (decreases, energy goes into pulling dielectric in).' },
        { q: 'Capacitors in parallel have:', o: ['Same charge', 'Same voltage', 'Same capacitance', 'Different voltages'], a: 1, s: 'Parallel capacitors: same voltage (V) across each, charges add (Q_total = Q₁ + Q₂), C_eq = C₁ + C₂. Series: same charge, voltages add, 1/C_eq = 1/C₁ + 1/C₂.' },
        { q: 'The electric potential at the center of a uniformly charged ring is:', o: ['Zero', 'kQ/R (R = ring radius)', 'kQ/R²', 'Infinity'], a: 1, s: 'At center of ring: all charge elements are at distance R from center. V = kQ/R (scalar sum). But E = 0 at center (vectors cancel by symmetry). On axis at distance x: V = kQ/√(R²+x²).' },
        { q: 'Electrostatic shielding works because:', o: ['Charges cannot exist on conductors', 'Electric field inside a conductor enclosure is zero at equilibrium', 'Magnetic field blocks electric field', 'Dielectrics absorb charges'], a: 1, s: 'Faraday cage: a conductor enclosure shields its interior from external electric fields. Free charges on conductor redistribute to cancel external field inside. Used in electronic shielding, cars during lightning.' },
      ],
      hard: [
        { q: 'A spherical conductor of radius R has charge Q. The electric field at r < R and r > R are:', o: ['E = kQ/r² everywhere', 'E = 0 for r<R; E = kQ/r² for r>R', 'E = kQ/R² everywhere', 'E = kQr/R³ for r<R'], a: 1, s: 'Conducting sphere: E = 0 inside (r<R, by Gauss\'s law — no enclosed charge). E = kQ/r² outside (r>R, behaves like point charge). All charge on surface. V = kQ/R inside (constant), V = kQ/r outside.' },
        { q: 'The force between the plates of a parallel plate capacitor is:', o: ['Zero', 'Q²/(2ε₀A)', 'QE', 'CV²/d'], a: 1, s: 'F = Q²/(2ε₀A) = ½QE = ½ε₀E²A. The factor ½ appears because each plate is in the field of the OTHER plate only (σ/2ε₀), not its own field. This is the electrostatic pressure on the plates.' },
        { q: 'In a Van de Graaff generator, charge accumulates on the outer sphere because:', o: ['Gravity', 'Charge resides on the outer surface of a conductor; inner charge is transferred to outer', 'Magnetic force', 'Chemical reaction'], a: 1, s: 'Principle: charge placed on inner surface of hollow conductor immediately moves to outer surface (by Gauss\'s law). Belt continuously transfers charge to inner sphere → moves to outer surface → potential builds up. Used for accelerating particles.' },
        { q: 'The potential energy of a system of three point charges q at vertices of an equilateral triangle of side a is:', o: ['kq²/a', '3kq²/a', 'kq²/3a', 'Zero'], a: 1, s: 'Three pairs of charges: U = kq²/a + kq²/a + kq²/a = 3kq²/a. For n charges, number of pairs = n(n-1)/2. For 3 equal charges: 3 pairs, each at distance a.' },
        { q: 'The bound charge density on the surface of a dielectric in a uniform field E₀ is:', o: ['Zero', 'σ_b = ε₀(κ-1)E₀/κ', 'σ_b = ε₀E₀', 'σ_b = κε₀E₀'], a: 1, s: 'When dielectric (κ) is placed in external field E₀: polarization P = ε₀(κ-1)E_inside = ε₀(κ-1)E₀/κ. Bound surface charge σ_b = P = ε₀(κ-1)E₀/κ. This reduces the net field inside to E₀/κ.' },
      ],
    },
  ],
};

const currentElectricity: NEETChapterData = {
  name: 'Current Electricity',
  slug: 'current-electricity',
  topics: [
    {
      name: 'Ohm\'s Law & Circuits',
      slug: 'ohm-law-circuits',
      easy: [
        { q: 'Ohm\'s law states that:', o: ['V = I/R', 'V = IR', 'V = I²R', 'V = R/I'], a: 1, s: 'Ohm\'s law: V = IR. Voltage across a conductor is directly proportional to current through it (at constant temperature). R (resistance) is the constant of proportionality. Unit of R: Ohm (Ω).' },
        { q: 'The SI unit of electric current is:', o: ['Volt', 'Ohm', 'Ampere', 'Watt'], a: 2, s: 'Current (I) is measured in Amperes (A). 1 Ampere = 1 Coulomb per second. Current = rate of flow of charge: I = dQ/dt. Conventional current: positive to negative (opposite to electron flow).' },
        { q: 'Resistance of a wire increases with:', o: ['Decreasing length', 'Increasing cross-sectional area', 'Increasing length', 'Decreasing resistivity'], a: 2, s: 'R = ρL/A. Resistance is directly proportional to length (L) and inversely proportional to cross-sectional area (A). ρ (resistivity) depends on material and temperature.' },
        { q: 'In a series circuit, the current is:', o: ['Different through each resistor', 'Same through all resistors', 'Zero', 'Maximum at the last resistor'], a: 1, s: 'Series circuit: same current flows through all components (I₁ = I₂ = I₃). Voltages add: V_total = V₁ + V₂ + V₃. Total resistance: R_total = R₁ + R₂ + R₃.' },
        { q: 'Electric power is given by:', o: ['P = V/I', 'P = VI = I²R = V²/R', 'P = V²I', 'P = IR²'], a: 1, s: 'P = VI = I²R = V²/R. Power = rate of energy dissipation. Unit: Watt (W). 1 kWh (kilowatt-hour) = 3.6 × 10⁶ J = unit of energy used in electricity billing.' },
      ],
      medium: [
        { q: 'In a parallel combination of resistors:', o: ['Current is same through each', 'Voltage is same across each, 1/R_eq = Σ(1/Rᵢ)', 'Resistance adds up', 'Power is divided equally'], a: 1, s: 'Parallel: same voltage across each resistor. Currents add: I_total = I₁ + I₂ + I₃. 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃. R_eq is always less than the smallest individual resistance.' },
        { q: 'The internal resistance of a cell causes:', o: ['No effect', 'Terminal voltage to be less than EMF when current flows', 'Terminal voltage to exceed EMF', 'Current to be infinite'], a: 1, s: 'V_terminal = EMF − Ir (during discharge). Internal resistance (r) causes a voltage drop inside the cell. Higher current → larger voltage drop → lower terminal voltage. At zero current: V = EMF.' },
        { q: 'Kirchhoff\'s junction rule is based on:', o: ['Energy conservation', 'Charge conservation', 'Momentum conservation', 'Ohm\'s law'], a: 1, s: 'KCL (junction/current rule): ΣI_in = ΣI_out at any junction. Based on conservation of charge — charge cannot accumulate at a junction. KVL (loop/voltage rule) is based on conservation of energy.' },
        { q: 'A Wheatstone bridge is balanced when:', o: ['All resistances are equal', 'P/Q = R/S (no current through galvanometer)', 'Maximum current flows', 'Voltage is zero'], a: 1, s: 'Wheatstone bridge: balanced when P/Q = R/S → no current through galvanometer (V_B = V_D). Used for precise resistance measurement. Unbalanced → galvanometer deflects proportional to imbalance.' },
        { q: 'The drift velocity of electrons in a conductor is typically:', o: ['Speed of light', 'Very slow (~mm/s)', 'Speed of sound', 'Zero'], a: 1, s: 'Drift velocity v_d ≈ 0.1-1 mm/s (very slow!). But electric signal travels at ~speed of light because the electric field propagates instantly. I = nAv_d (n = carrier density, A = area).' },
      ],
      hard: [
        { q: 'The temperature coefficient of resistance for metals is:', o: ['Negative', 'Positive (resistance increases with temperature)', 'Zero', 'Variable'], a: 1, s: 'Metals: R = R₀(1 + αΔT), α > 0 (positive temperature coefficient). Resistance increases because lattice vibrations increase, scattering electrons more. Semiconductors: α < 0 (resistance decreases with temperature due to more carriers).' },
        { q: 'In a potentiometer, the null point is obtained when:', o: ['Maximum current flows', 'EMF of cell equals the potential drop across the wire segment', 'Resistance is maximum', 'Temperature is constant'], a: 1, s: 'Potentiometer: at null point, galvanometer shows zero deflection → EMF of test cell = potential drop across length l of wire. E = (V/L)×l. More accurate than voltmeter (no current drawn at balance). Used for comparing EMFs.' },
        { q: 'Mobility of charge carriers is defined as:', o: ['v_d/E (drift velocity per unit electric field)', 'Charge per unit mass', 'Current per unit area', 'Resistance per unit length'], a: 0, s: 'Mobility μ = v_d/E = eτ/m (e = charge, τ = relaxation time, m = mass). Higher mobility → better conductor. Electrons have higher mobility in semiconductors than in metals. Units: m²/(V⋅s).' },
        { q: 'Maximum power is transferred from a source (EMF E, internal resistance r) to external resistance R when:', o: ['R = 0', 'R = r (impedance matching)', 'R → ∞', 'R = 2r'], a: 1, s: 'Maximum power transfer theorem: P_ext = E²R/(R+r)². Maximum when dP/dR = 0 → R = r. P_max = E²/4r. Efficiency at max power = 50%. Used in electronics, audio systems (impedance matching).' },
        { q: 'Kirchhoff\'s voltage law (KVL) states:', o: ['Sum of currents at a junction is zero', 'Sum of potential differences around any closed loop is zero', 'Voltage is always constant', 'Current is always constant'], a: 1, s: 'KVL: ΣV = 0 around any closed loop. Sum of EMFs = sum of IR drops. Based on conservation of energy (electric potential is path-independent in electrostatics). Essential for solving complex circuits.' },
      ],
    },
    {
      name: 'Heating Effects & Electrical Instruments',
      slug: 'heating-effects-instruments',
      easy: [
        { q: 'Joule\'s law of heating states that heat produced is:', o: ['H = V²/R', 'H = I²Rt', 'H = VIt', 'All of the above are equivalent'], a: 3, s: 'Joule\'s law: H = I²Rt = VIt = V²t/R (all equivalent forms). Heat produced is proportional to square of current, resistance, and time. Basis of electric heaters, fuses, and incandescent bulbs.' },
        { q: 'A fuse wire should have:', o: ['High melting point', 'Low melting point and high resistance', 'Low resistance', 'High melting point and low resistance'], a: 1, s: 'Fuse wire: low melting point (melts quickly when current exceeds rated value) and high resistivity (heats up quickly). Made of tin-lead alloy. Protects circuits from overcurrent damage.' },
        { q: 'The unit of electrical energy consumed commercially is:', o: ['Joule', 'Kilowatt-hour (kWh)', 'Watt', 'Ampere-hour'], a: 1, s: '1 kWh = 1 unit of electricity = 1000 W × 3600 s = 3.6 × 10⁶ J. Electricity bill = units consumed × rate per unit. Energy = Power × Time.' },
        { q: 'An ammeter is connected in:', o: ['Parallel with the circuit', 'Series with the circuit', 'Any configuration', 'Not connected to the circuit'], a: 1, s: 'Ammeter: series connection (measures current flowing through it). Has very low resistance (ideally zero) to not affect the circuit. Voltmeter: parallel connection, very high resistance (ideally infinite).' },
        { q: 'Which device converts electrical energy to heat?', o: ['Generator', 'Electric heater', 'Motor', 'Transformer'], a: 1, s: 'Electric heater uses Joule heating (I²R loss): electrical energy → heat energy. Heating element has high resistance (nichrome wire). Used in heaters, toasters, electric irons, geysers.' },
      ],
      medium: [
        { q: 'To convert a galvanometer into an ammeter, we add:', o: ['High resistance in series', 'Low resistance (shunt) in parallel', 'Capacitor in series', 'Inductor in parallel'], a: 1, s: 'Ammeter = galvanometer + low-resistance shunt (S) in parallel. S = I_g×G/(I−I_g). Shunt bypasses most current around sensitive galvanometer. Ammeter resistance ≈ S (very low).' },
        { q: 'To convert a galvanometer into a voltmeter, we add:', o: ['Low resistance in parallel', 'High resistance in series', 'Capacitor', 'Battery'], a: 1, s: 'Voltmeter = galvanometer + high resistance (R) in series. R = V/I_g − G. High series resistance limits current to galvanometer\'s full-scale deflection current. Voltmeter resistance = R + G (very high).' },
        { q: 'Two bulbs rated 60W and 100W at 220V are connected in series to 220V. Which glows brighter?', o: ['100W bulb', '60W bulb', 'Both equally', 'Neither glows'], a: 1, s: 'In series: same current. P = I²R. The bulb with higher resistance dissipates more power. R = V²/P. R₆₀ = 220²/60 > R₁₀₀ = 220²/100. So 60W bulb has higher R → glows brighter in series.' },
        { q: 'The color code of a resistor with bands brown, black, red, gold represents:', o: ['1 kΩ ± 5%', '10 kΩ ± 5%', '100 Ω ± 5%', '1 MΩ ± 5%'], a: 0, s: 'Brown=1, Black=0, Red=×10² → 10 × 100 = 1000 Ω = 1 kΩ. Gold = ±5% tolerance. Color code: Black=0, Brown=1, Red=2, Orange=3, Yellow=4, Green=5, Blue=6, Violet=7, Grey=8, White=9.' },
        { q: 'Specific resistance (resistivity) depends on:', o: ['Length of conductor', 'Area of conductor', 'Material and temperature', 'Shape of conductor'], a: 2, s: 'Resistivity (ρ) is a material property — depends on the material and temperature, NOT on dimensions. ρ = RA/L. Good conductors: ρ ~ 10⁻⁸ Ωm (copper). Insulators: ρ ~ 10¹⁵ Ωm (glass).' },
      ],
      hard: [
        { q: 'The sensitivity of a potentiometer can be increased by:', o: ['Increasing current through the wire', 'Increasing the length of the potentiometer wire', 'Decreasing wire length', 'Using thicker wire'], a: 1, s: 'Sensitivity = ability to measure small potential differences. Longer wire → smaller potential gradient (V/L) → same EMF balanced over larger length → more precise measurement. Also: use lower EMF driver cell.' },
        { q: 'In a balanced Wheatstone bridge, if all four resistances are doubled:', o: ['Bridge becomes unbalanced', 'Bridge remains balanced', 'Current through galvanometer doubles', 'Voltage changes'], a: 1, s: 'Balance condition: P/Q = R/S. If all are doubled: 2P/2Q = 2R/2S → P/Q = R/S. Condition unchanged → bridge remains balanced. The ratios are what matter, not absolute values.' },
        { q: 'EMF of a cell can be measured most accurately by:', o: ['Voltmeter', 'Potentiometer', 'Ammeter and voltmeter', 'Ohmmeter'], a: 1, s: 'Potentiometer measures EMF most accurately because at balance point, NO current is drawn from the test cell → no internal resistance drop → measures true EMF. Voltmeter always draws some current → reads less than EMF.' },
        { q: 'Superconductors have:', o: ['Very high resistance', 'Zero resistance below critical temperature', 'Negative resistance', 'Infinite resistance'], a: 1, s: 'Superconductors: resistance drops to exactly zero below critical temperature (Tc). Perfect conductor — persistent currents flow indefinitely. Also exhibit Meissner effect (expel magnetic fields). Applications: MRI, maglev trains, particle accelerators.' },
        { q: 'The relaxation time in Drude model is related to resistivity by:', o: ['ρ = m/(ne²τ)', 'ρ = ne²τ/m', 'ρ = neτ', 'ρ = τ/ne'], a: 0, s: 'Drude model: ρ = m/(ne²τ). τ = relaxation time (average time between collisions), n = carrier density, e = electron charge, m = electron mass. Higher τ → lower ρ → better conductor. Temperature increases → τ decreases → ρ increases.' },
      ],
    },
  ],
};

const magnetism: NEETChapterData = {
  name: 'Magnetism & Electromagnetic Induction',
  slug: 'magnetism-emi',
  topics: [
    {
      name: 'Magnetic Effects of Current',
      slug: 'magnetic-effects-current',
      easy: [
        { q: 'A current-carrying conductor produces:', o: ['Only electric field', 'Magnetic field around it', 'Gravitational field', 'No field'], a: 1, s: 'Oersted\'s discovery (1820): a current-carrying conductor produces a magnetic field around it. Field direction given by right-hand thumb rule. This links electricity and magnetism.' },
        { q: 'The SI unit of magnetic field (B) is:', o: ['Gauss', 'Tesla', 'Weber', 'Henry'], a: 1, s: 'Magnetic field strength B is measured in Tesla (T). 1 T = 1 Wb/m² = 1 kg/(A⋅s²). 1 T = 10⁴ Gauss. Earth\'s magnetic field ≈ 50 μT. MRI machines: 1.5-3 T.' },
        { q: 'The direction of force on a current-carrying conductor in a magnetic field is given by:', o: ['Right-hand rule', 'Fleming\'s left-hand rule', 'Lenz\'s law', 'Coulomb\'s law'], a: 1, s: 'Fleming\'s left-hand rule: first finger = field (B), second finger = current (I), thumb = force (F). F = BIL sinθ. Force is maximum when conductor is perpendicular to field (θ = 90°), zero when parallel.' },
        { q: 'A solenoid behaves like a:', o: ['Capacitor', 'Bar magnet', 'Resistor', 'Diode'], a: 1, s: 'A solenoid (coil of many turns) creates a nearly uniform magnetic field inside and behaves like a bar magnet. One end is N-pole, other is S-pole. B_inside = μ₀nI (n = turns per unit length).' },
        { q: 'Magnetic field at the center of a circular current loop is:', o: ['Zero', 'B = μ₀I/2R', 'B = μ₀I/R', 'Infinite'], a: 1, s: 'B = μ₀I/2R at the center of a circular loop of radius R carrying current I. For N turns: B = μ₀NI/2R. Field direction: perpendicular to plane of loop (right-hand curl rule).' },
      ],
      medium: [
        { q: 'Biot-Savart law gives the magnetic field due to:', o: ['A moving charge', 'A small current element', 'A permanent magnet', 'An electric dipole'], a: 1, s: 'Biot-Savart law: dB = (μ₀/4π)(Idl × r̂)/r². Gives the magnetic field contribution from an infinitesimal current element Idl at a point distance r away. Vector cross product determines direction.' },
        { q: 'Ampere\'s circuital law states:', o: ['∮B⋅dl = μ₀I_enclosed', '∮E⋅dl = 0', 'F = BIL', 'EMF = −dΦ/dt'], a: 0, s: 'Ampere\'s law: ∮B⋅dl = μ₀I_enc. Line integral of B around a closed loop = μ₀ × current enclosed. Useful for symmetric configurations (infinite wire, solenoid, toroid).' },
        { q: 'A charged particle moving perpendicular to a magnetic field follows:', o: ['Straight line', 'Circular path', 'Parabolic path', 'Elliptical path'], a: 1, s: 'F = qv × B. When v ⊥ B: force is always perpendicular to velocity → centripetal → circular motion. Radius r = mv/qB (cyclotron radius). If v has component along B → helical path.' },
        { q: 'The torque on a current loop in a magnetic field is:', o: ['τ = BINA sinθ', 'τ = BIL', 'τ = μ₀I', 'τ = qvB'], a: 0, s: 'τ = BINA sinθ = M × B (cross product). M = NIA = magnetic moment. Maximum torque when plane of loop is parallel to B (θ=90°). Zero when perpendicular to B (θ=0°). Principle of electric motor and galvanometer.' },
        { q: 'Moving coil galvanometer works on the principle of:', o: ['Electromagnetic induction', 'Torque on a current loop in magnetic field', 'Electrostatic force', 'Thermoelectric effect'], a: 1, s: 'MCG: current through coil in radial magnetic field → torque τ = BINA → coil rotates against spring restoring torque (τ = kφ). At equilibrium: φ = BINA/(k) ∝ I. Radial field ensures uniform scale.' },
      ],
      hard: [
        { q: 'The magnetic field inside a toroid with N turns, mean radius R, carrying current I is:', o: ['B = μ₀NI/2πR', 'B = μ₀NI/L', 'B = μ₀I/2R', 'Zero'], a: 0, s: 'Toroid: B = μ₀NI/2πR inside the toroid (using Ampere\'s law). B = 0 outside and in the central cavity. N = total turns, R = mean radius. Equivalent to a solenoid bent into a circle.' },
        { q: 'Cyclotron frequency is independent of:', o: ['Charge', 'Mass', 'Magnetic field', 'Speed of the particle'], a: 3, s: 'Cyclotron frequency: f = qB/2πm. Independent of speed (velocity) and radius! This is why cyclotron works — particles spiral outward but maintain constant frequency. Breaks down at relativistic speeds (mass increases).' },
        { q: 'The force between two parallel wires carrying currents in the same direction is:', o: ['Repulsive', 'Attractive', 'Zero', 'Perpendicular'], a: 1, s: 'Same direction currents → attractive (wires pull together). Opposite direction → repulsive. F/L = μ₀I₁I₂/2πd. This defines the Ampere: 1A in two infinite parallel wires 1m apart → F = 2×10⁻⁷ N/m.' },
        { q: 'Hall effect is used to determine:', o: ['Resistance', 'Type and density of charge carriers in a conductor', 'Capacitance', 'Inductance'], a: 1, s: 'Hall effect: current-carrying conductor in magnetic field → charge carriers deflect → Hall voltage develops. V_H = BI/(ned). Sign of V_H reveals carrier type (n or p). Used in Hall probes, sensors, and semiconductor characterization.' },
        { q: 'A galvanometer has resistance G and full-scale deflection current I_g. To make an ammeter of range I, the shunt resistance is:', o: ['S = GI/(I−I_g)', 'S = I_gG/(I−I_g)', 'S = G(I−I_g)/I_g', 'S = G/I'], a: 1, s: 'Shunt S in parallel with galvanometer: I_g × G = (I − I_g) × S → S = I_gG/(I − I_g). For large I (I >> I_g): S ≈ I_gG/I (very small). Most current bypasses through shunt.' },
      ],
    },
    {
      name: 'Electromagnetic Induction',
      slug: 'electromagnetic-induction',
      easy: [
        { q: 'Faraday\'s law of electromagnetic induction states that:', o: ['EMF = IR', 'Induced EMF = rate of change of magnetic flux', 'F = BIL', 'V = kQ/r'], a: 1, s: 'Faraday\'s law: EMF = −dΦ/dt. Induced EMF is proportional to the rate of change of magnetic flux through the circuit. Negative sign (Lenz\'s law) indicates the direction opposes the change.' },
        { q: 'Lenz\'s law is a consequence of:', o: ['Charge conservation', 'Conservation of energy', 'Conservation of momentum', 'Ohm\'s law'], a: 1, s: 'Lenz\'s law: induced current opposes the change that causes it. This is conservation of energy — if induced current aided the change, it would create energy from nothing (perpetual motion). The negative sign in Faraday\'s law.' },
        { q: 'An EMF is induced in a coil when:', o: ['Current is constant', 'Magnetic flux through the coil changes', 'Resistance changes', 'Temperature changes'], a: 1, s: 'EMF is induced when magnetic flux (Φ = BA cosθ) through the coil changes. This can happen by: changing B, changing A, changing θ, or moving the coil relative to the field. No change = no EMF.' },
        { q: 'A transformer works on the principle of:', o: ['Electrostatics', 'Mutual induction', 'Self-induction', 'Thermoelectricity'], a: 1, s: 'Transformer: changing current in primary coil → changing magnetic flux → induces EMF in secondary coil (mutual induction). V₂/V₁ = N₂/N₁. Step-up: N₂>N₁. Step-down: N₂<N₁. Works only with AC.' },
        { q: 'Self-inductance is measured in:', o: ['Farad', 'Henry', 'Tesla', 'Ohm'], a: 1, s: 'Self-inductance (L) is measured in Henry (H). L = Φ/I = −EMF/(dI/dt). 1 Henry: 1 Weber of flux per Ampere of current. For a solenoid: L = μ₀n²Al (n = turns/length, A = area, l = length).' },
      ],
      medium: [
        { q: 'In an AC generator, the induced EMF is:', o: ['Constant', 'Sinusoidal: E = E₀ sin(ωt)', 'Square wave', 'Sawtooth'], a: 1, s: 'AC generator: coil rotating in magnetic field. EMF = NBAω sin(ωt) = E₀ sin(ωt). E₀ = NBAω (peak EMF). ω = 2πf. Sinusoidal because flux Φ = BA cos(ωt), and EMF = −dΦ/dt.' },
        { q: 'Eddy currents are:', o: ['Currents in wires only', 'Circulating currents induced in bulk conductors by changing magnetic flux', 'Direct currents', 'Only in semiconductors'], a: 1, s: 'Eddy currents: induced circulating currents in bulk conductors when exposed to changing magnetic fields. Cause heating (I²R losses). Minimized by lamination (thin insulated sheets). Used in induction furnaces, braking systems.' },
        { q: 'The energy stored in an inductor is:', o: ['½LI²', '½CV²', 'LI', 'LI²'], a: 0, s: 'U = ½LI². Energy is stored in the magnetic field of the inductor. Energy density = B²/(2μ₀). Analogous to capacitor energy ½CV² (stored in electric field).' },
        { q: 'Mutual inductance between two coils depends on:', o: ['Current only', 'Number of turns, area, distance, and medium', 'Resistance only', 'Voltage only'], a: 1, s: 'M depends on: geometry (shape, size, orientation), number of turns (N₁, N₂), separation distance, and medium (permeability). M = k√(L₁L₂) where k = coupling coefficient (0≤k≤1). k=1 for perfect coupling.' },
        { q: 'Back EMF in a motor:', o: ['Assists the applied voltage', 'Opposes the applied voltage (Lenz\'s law)', 'Has no effect', 'Increases current'], a: 1, s: 'Motor: rotating coil in magnetic field generates back EMF opposing the applied voltage. V = E_back + IR → I = (V − E_back)/R. At startup: E_back = 0, current is maximum. As motor speeds up, E_back increases, current decreases.' },
      ],
      hard: [
        { q: 'The coefficient of mutual induction between a long solenoid and a coil wound over it is:', o: ['M = μ₀n₁N₂A', 'M = μ₀N₁N₂/L', 'M = μ₀n₁n₂AL', 'M = μ₀I₁I₂/L'], a: 0, s: 'M = μ₀n₁N₂A. n₁ = turns/length of solenoid, N₂ = total turns of outer coil, A = cross-sectional area. Flux through outer coil = B₁ × A × N₂ = μ₀n₁I₁ × A × N₂. M = Φ₂/I₁ = μ₀n₁N₂A.' },
        { q: 'In an LR circuit, the time constant is:', o: ['L/R', 'LR', 'R/L', '√(LC)'], a: 0, s: 'LR circuit time constant: τ = L/R. Current growth: I = (V/R)(1 − e^(−t/τ)). Current decay: I = I₀e^(−t/τ). At t = τ: current reaches 63.2% of maximum (growth) or drops to 36.8% (decay).' },
        { q: 'LC oscillations have frequency:', o: ['f = 1/(2π√LC)', 'f = LC', 'f = 1/LC', 'f = √(LC)/2π'], a: 0, s: 'LC circuit oscillation: f = 1/(2π√LC). Energy oscillates between electric (½CV²) and magnetic (½LI²). Analogous to mass-spring system (SHM). No resistance → undamped oscillations.' },
        { q: 'A metallic ring is placed in a region where magnetic field is increasing. The induced current in the ring:', o: ['Is zero', 'Creates a magnetic field opposing the increase', 'Creates a field aiding the increase', 'Flows radially'], a: 1, s: 'By Lenz\'s law: induced current creates a magnetic field opposing the change (increase) in flux. The induced current\'s field opposes the increasing external field. This is the mechanism behind electromagnetic braking and shielding.' },
        { q: 'The motional EMF in a rod of length L moving with velocity v perpendicular to a uniform magnetic field B is:', o: ['BvL', 'BIL', 'Bv/L', 'BL/v'], a: 0, s: 'Motional EMF: ε = BvL. The rod acts as a source of EMF. Electrons in rod experience force F = qv×B, accumulating at one end. This creates a potential difference. Basis of generators and rail guns.' },
      ],
    },
  ],
};

const optics: NEETChapterData = {
  name: 'Ray Optics & Wave Optics',
  slug: 'optics',
  topics: [
    {
      name: 'Ray Optics — Reflection & Refraction',
      slug: 'ray-optics-reflection-refraction',
      easy: [
        { q: 'The angle of incidence equals the angle of reflection. This is:', o: ['Snell\'s law', 'Law of reflection', 'Brewster\'s law', 'Malus\'s law'], a: 1, s: 'Laws of reflection: (1) angle of incidence = angle of reflection (∠i = ∠r), (2) incident ray, reflected ray, and normal lie in the same plane. Valid for all reflecting surfaces (plane and curved mirrors).' },
        { q: 'Total internal reflection occurs when light travels from:', o: ['Rarer to denser medium', 'Denser to rarer medium at angle > critical angle', 'Any medium to vacuum', 'Vacuum to glass'], a: 1, s: 'TIR conditions: (1) light travels from denser to rarer medium (n₁ > n₂), (2) angle of incidence > critical angle (sin θc = n₂/n₁). Applications: optical fibers, diamonds (high brilliance), prisms.' },
        { q: 'A concave mirror can form:', o: ['Only virtual images', 'Only real images', 'Both real and virtual images', 'No images'], a: 2, s: 'Concave mirror: real, inverted images when object is beyond F. Virtual, erect, magnified image when object is between F and mirror. At F: image at infinity. At C: same-size image at C.' },
        { q: 'Snell\'s law of refraction is:', o: ['n₁ sin i = n₂ sin r', 'n₁ cos i = n₂ cos r', 'n₁/sin i = n₂/sin r', 'sin i = sin r'], a: 0, s: 'Snell\'s law: n₁ sin θ₁ = n₂ sin θ₂. When light enters a denser medium (n₂ > n₁), it bends toward the normal (θ₂ < θ₁). Refractive index n = c/v (ratio of speed of light in vacuum to medium).' },
        { q: 'The power of a lens is measured in:', o: ['Meter', 'Diopter (D)', 'Joule', 'Newton'], a: 1, s: 'Power P = 1/f (f in meters). Unit: Diopter (D). Convex (converging) lens: P > 0. Concave (diverging) lens: P < 0. Higher power = shorter focal length = stronger lens.' },
      ],
      medium: [
        { q: 'Chromatic aberration in lenses is caused by:', o: ['Spherical shape', 'Dispersion — different wavelengths have different refractive indices', 'Diffraction', 'Interference'], a: 1, s: 'Chromatic aberration: different colors (wavelengths) focus at different points because refractive index varies with wavelength (dispersion). Violet focuses closest to lens (highest n), red farthest. Corrected by achromatic doublet.' },
        { q: 'In a compound microscope, the magnification is:', o: ['m₀ × mₑ (objective × eyepiece)', 'f₀/fₑ', 'f₀ + fₑ', 'f₀ − fₑ'], a: 0, s: 'Compound microscope: M = m₀ × mₑ = (L/f₀)(D/fₑ) for normal adjustment. L = tube length, D = least distance of distinct vision (25 cm). Short f₀ and short fₑ give high magnification.' },
        { q: 'A prism disperses white light because:', o: ['Different colors travel at the same speed in glass', 'Different colors have different refractive indices in glass', 'The prism absorbs some colors', 'Diffraction effects'], a: 1, s: 'Dispersion: refractive index of glass depends on wavelength (Cauchy\'s relation). Violet has highest n → bends most. Red has lowest n → bends least. White light → spectrum of colors (VIBGYOR).' },
        { q: 'For a thin lens, the relation between u, v, and f is:', o: ['1/v − 1/u = 1/f', '1/v + 1/u = 1/f', 'v − u = f', 'v + u = f'], a: 0, s: 'Thin lens formula: 1/v − 1/u = 1/f (using sign convention: distances measured from optical center). For mirrors: 1/v + 1/u = 1/f. Magnification m = v/u (lens), m = −v/u (mirror).' },
        { q: 'An astronomical telescope in normal adjustment has magnification:', o: ['f₀ × fₑ', 'f₀/fₑ', 'fₑ/f₀', 'f₀ + fₑ'], a: 1, s: 'Astronomical telescope (normal adjustment — image at infinity): M = −f₀/fₑ. Large objective focal length and small eyepiece focal length give high magnification. Length of telescope = f₀ + fₑ.' },
      ],
      hard: [
        { q: 'The resolving power of a microscope is proportional to:', o: ['Wavelength of light', '2n sin θ / λ (numerical aperture / wavelength)', 'Focal length', 'Magnification'], a: 1, s: 'Resolving power = 1/d_min = 2n sinθ/(1.22λ). n sinθ = numerical aperture (NA). Shorter wavelength and higher NA → better resolution. This is why electron microscopes have higher resolution than optical microscopes.' },
        { q: 'Optical fiber works on the principle of:', o: ['Refraction', 'Total internal reflection', 'Diffraction', 'Polarization'], a: 1, s: 'Optical fiber: light enters core (high n) and undergoes repeated total internal reflection at core-cladding boundary (cladding has lower n). Light is trapped and transmitted over long distances with minimal loss. Used in telecommunications and endoscopy.' },
        { q: 'The minimum deviation through a prism occurs when:', o: ['Angle of incidence is zero', 'The ray passes symmetrically (i = e)', 'Angle of emergence is 90°', 'The prism is very thin'], a: 1, s: 'Minimum deviation (δ_min) when i = e (angle of incidence = angle of emergence) and the ray passes symmetrically through the prism. At this point: r₁ = r₂ = A/2 and n = sin[(A+δ_min)/2] / sin(A/2).' },
        { q: 'Lens maker\'s equation is:', o: ['1/f = (n−1)[1/R₁ − 1/R₂]', '1/f = n[1/R₁ + 1/R₂]', '1/f = 1/R₁ + 1/R₂', 'f = R₁R₂/(R₁−R₂)'], a: 0, s: 'Lensmaker\'s equation: 1/f = (n−1)(1/R₁ − 1/R₂). n = refractive index of lens material. R₁, R₂ = radii of curvature (with sign convention). Connects lens geometry and material to its focal length.' },
        { q: 'Spherical aberration can be reduced by:', o: ['Using white light', 'Using stops/apertures to block marginal rays', 'Increasing lens thickness', 'Using monochromatic light'], a: 1, s: 'Spherical aberration: marginal rays focus closer to lens than paraxial rays (for converging lens). Reduced by: (1) using stops/diaphragms (block marginal rays), (2) using aspheric lenses, (3) using lens combinations, (4) using parabolic mirrors.' },
      ],
    },
    {
      name: 'Wave Optics — Interference & Diffraction',
      slug: 'wave-optics',
      easy: [
        { q: 'Young\'s double slit experiment demonstrates:', o: ['Particle nature of light', 'Wave nature of light (interference)', 'Photoelectric effect', 'Compton scattering'], a: 1, s: 'YDSE: two coherent light sources create an interference pattern (bright and dark fringes) on a screen. Bright fringes: constructive interference (path difference = nλ). Dark: destructive (path difference = (n+½)λ).' },
        { q: 'Constructive interference occurs when path difference is:', o: ['λ/2', 'nλ (integral multiple of wavelength)', '(2n+1)λ/2', 'Zero only'], a: 1, s: 'Constructive: path difference = nλ (n = 0, 1, 2...). Waves arrive in phase → amplitudes add. Destructive: path difference = (n+½)λ → waves arrive out of phase → cancel.' },
        { q: 'Diffraction of light is the:', o: ['Reflection from smooth surface', 'Bending of light around obstacles/through narrow openings', 'Absorption of light', 'Emission of light'], a: 1, s: 'Diffraction: bending of light waves around obstacles or through narrow slits (comparable to wavelength). Evidence of wave nature. Single slit diffraction produces central bright maximum with secondary maxima on sides.' },
        { q: 'Polarization proves that light is:', o: ['A longitudinal wave', 'A transverse wave', 'Not a wave', 'A sound wave'], a: 1, s: 'Polarization can only occur in transverse waves (vibrations perpendicular to direction of propagation). Longitudinal waves (sound) cannot be polarized. Light is an electromagnetic transverse wave (E and B fields oscillate perpendicular to propagation).' },
        { q: 'Fringe width in YDSE is given by:', o: ['β = λD/d', 'β = λd/D', 'β = d/λD', 'β = D/λd'], a: 0, s: 'Fringe width β = λD/d. λ = wavelength, D = distance to screen, d = slit separation. Fringe width increases with: longer wavelength, larger D, smaller d. All fringes have equal width in YDSE.' },
      ],
      medium: [
        { q: 'In single slit diffraction, the first minimum occurs at:', o: ['sin θ = λ/a', 'sin θ = 2λ/a', 'sin θ = λ/2a', 'θ = 0'], a: 0, s: 'Single slit: minima at a sinθ = nλ (n = ±1, ±2...). First minimum at sinθ = λ/a (a = slit width). Central maximum width = 2λD/a (twice the fringe width). Secondary maxima are much dimmer.' },
        { q: 'Brewster\'s angle is the angle at which:', o: ['Total internal reflection occurs', 'Reflected light is completely polarized', 'No reflection occurs', 'Maximum refraction occurs'], a: 1, s: 'At Brewster\'s angle (θ_B): reflected light is completely plane-polarized. tan θ_B = n₂/n₁ (Brewster\'s law). At this angle, reflected and refracted rays are perpendicular (θ_B + θ_r = 90°). For glass (n=1.5): θ_B ≈ 56.3°.' },
        { q: 'Coherent sources are sources that maintain:', o: ['Same amplitude', 'Constant phase difference', 'Same color', 'Same intensity'], a: 1, s: 'Coherent sources maintain a constant phase relationship (same frequency, constant phase difference). Required for sustained interference pattern. YDSE uses a single source split into two (via slits). Lasers are coherent sources.' },
        { q: 'If YDSE is performed in water instead of air, the fringe width:', o: ['Increases', 'Decreases (λ decreases in water)', 'Remains same', 'Becomes zero'], a: 1, s: 'β = λD/d. In water: λ_water = λ_air/n_water (n > 1). So λ decreases → fringe width decreases. Fringe pattern becomes narrower. Same principle applies to any denser medium.' },
        { q: 'Thin film interference creates colors because:', o: ['Light is absorbed', 'Different wavelengths interfere constructively at different thicknesses', 'Light is polarized', 'Diffraction occurs'], a: 1, s: 'Thin films: reflected rays from top and bottom surfaces interfere. Path difference depends on film thickness and angle. Different thicknesses/angles cause different wavelengths to interfere constructively → iridescent colors (oil films, soap bubbles).' },
      ],
      hard: [
        { q: 'In YDSE, if one slit is covered with a thin transparent sheet of thickness t and refractive index μ, the central fringe shifts by:', o: ['(μ−1)tD/d', '(μ+1)tD/d', 'μtD/d', 'tD/μd'], a: 0, s: 'Extra optical path = (μ−1)t. Central fringe shifts to the side of the covered slit. Shift = (μ−1)tD/d. Number of fringes shifted = (μ−1)t/λ. The sheet doesn\'t change fringe width, only shifts the pattern.' },
        { q: 'Resolving power of a telescope is proportional to:', o: ['Focal length', 'Aperture diameter / wavelength (D/λ)', 'Magnification', 'Eyepiece diameter'], a: 1, s: 'Resolving power = 1/θ_min = D/(1.22λ) (Rayleigh criterion). Larger aperture → better resolution. Shorter wavelength → better resolution. This is why large telescopes have large primary mirrors/lenses.' },
        { q: 'Huygens\' principle states that:', o: ['Light is a particle', 'Every point on a wavefront acts as a source of secondary wavelets', 'Light travels in straight lines only', 'Interference is impossible'], a: 1, s: 'Huygens\' principle: every point on a wavefront is a source of secondary spherical wavelets. The new wavefront is the tangential envelope of these wavelets. Explains reflection, refraction, diffraction, and interference.' },
        { q: 'Malus\'s law states that intensity of polarized light through an analyzer is:', o: ['I = I₀ sin²θ', 'I = I₀ cos²θ', 'I = I₀/2', 'I = I₀ tan²θ'], a: 1, s: 'Malus\'s law: I = I₀cos²θ. I₀ = intensity of plane-polarized light, θ = angle between polarizer and analyzer transmission axes. At θ=0°: I=I₀ (maximum). At θ=90°: I=0 (crossed polarizers). At 45°: I=I₀/2.' },
        { q: 'The missing orders in a double slit pattern occur when:', o: ['Slit width equals slit separation', 'Interference maximum coincides with diffraction minimum', 'Light is monochromatic', 'Slits are very narrow'], a: 1, s: 'Missing orders: when an interference maximum (d sinθ = nλ) coincides with a diffraction minimum (a sinθ = mλ). At that angle: n = md/a. Those interference orders are suppressed. Depends on ratio d/a (slit separation to slit width).' },
      ],
    },
  ],
};

export const physicsExpansionChapters: NEETChapterData[] = [
  electrostatics,
  currentElectricity,
  magnetism,
  optics,
];
