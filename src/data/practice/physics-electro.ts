import type { ChapterData } from './types';

/* ─── Chapter 12: Electrostatics ─── */
const electrostatics: ChapterData = {
  name: 'Electrostatics',
  slug: 'electrostatics',
  topics: [
    {
      name: "Coulomb's Law & Electric Field",
      slug: 'coulombs-law-electric-field',
      easy: [
        { q: "Coulomb's law states that the force between two charges is:", o: ['Proportional to product of charges and inversely proportional to r²', 'Proportional to r²', 'Independent of charges', 'Inversely proportional to charges'], a: 0, s: 'F = kq₁q₂/r². Similar to Newton\'s gravitation but with charges.' },
        { q: 'The SI unit of electric charge is:', o: ['Coulomb (C)', 'Volt', 'Ampere', 'Ohm'], a: 0, s: '1 Coulomb is the SI unit of charge.' },
        { q: 'Electric field at a point is defined as:', o: ['Force per unit positive test charge', 'Force per unit mass', 'Charge per unit area', 'Potential per unit length'], a: 0, s: 'E = F/q₀ where q₀ is a small positive test charge.' },
        { q: 'The electric field due to a point charge q at distance r is:', o: ['kq/r²', 'kq/r', 'kq²/r²', 'kqr²'], a: 0, s: 'E = kq/r² = q/(4πε₀r²), directed radially outward for +q.' },
        { q: 'Like charges:', o: ['Repel each other', 'Attract each other', 'Have no interaction', 'Cancel each other'], a: 0, s: 'Like charges repel, unlike charges attract.' },
      ],
      medium: [
        { q: 'The electric field at the centre of a uniformly charged ring of radius R and charge Q is:', o: ['Zero', 'kQ/R²', 'kQ/(2R²)', '2kQ/R²'], a: 0, s: 'By symmetry, the fields from all elements cancel at the centre. E = 0.' },
        { q: 'The electric field on the axis of a uniformly charged ring (charge Q, radius R) at distance x from centre is:', o: ['kQx/(R²+x²)^(3/2)', 'kQ/x²', 'kQ/R²', 'kQR/(R²+x²)'], a: 0, s: 'E_x = kQx/(R²+x²)^(3/2). Maximum at x = R/√2.' },
        { q: 'The electric field due to an infinite line charge (linear density λ) at distance r is:', o: ['λ/(2πε₀r)', 'λ/(4πε₀r²)', 'λ/(ε₀)', 'λr/(2ε₀)'], a: 0, s: 'Using Gauss law with cylindrical surface: E = λ/(2πε₀r) ∝ 1/r.' },
        { q: 'Two equal and opposite charges separated by a small distance form a:', o: ['Dipole', 'Quadrupole', 'Monopole', 'Octupole'], a: 0, s: 'An electric dipole consists of two equal and opposite charges separated by distance 2a.' },
        { q: 'The electric field due to an infinite plane sheet of charge density σ is:', o: ['σ/(2ε₀)', 'σ/ε₀', 'σ/(4πε₀)', '2σ/ε₀'], a: 0, s: 'Using Gauss law with pillbox: E = σ/(2ε₀), uniform and perpendicular to the sheet.' },
      ],
      hard: [
        { q: 'The electric field at a point on the axis of a uniformly charged disc (radius R, surface charge σ) at distance x is:', o: ['(σ/2ε₀)(1 - x/√(R²+x²))', 'σ/(2ε₀)', 'σx/(ε₀R)', 'kσπR²/x²'], a: 0, s: 'E = (σ/2ε₀)[1 - x/√(R²+x²)]. For x>>R → kQ/x², for x→0 → σ/(2ε₀).' },
        { q: 'The torque on a dipole of moment p in a uniform field E is:', o: ['p × E = pE sinθ', 'pE cosθ', 'pE', 'p/E'], a: 0, s: 'τ = p × E. Magnitude τ = pE sinθ. The dipole tends to align with the field.' },
        { q: 'The PE of a dipole in a uniform electric field is:', o: ['-p·E = -pE cosθ', 'pE sinθ', 'pE', '-pE sinθ'], a: 0, s: 'U = -p·E = -pE cosθ. Minimum when aligned (θ=0), maximum when anti-aligned (θ=π).' },
        { q: 'A conducting sphere of radius R has charge Q. The electric field just outside is:', o: ['σ/ε₀ = Q/(4πε₀R²)', 'Q/(4πε₀R)', 'Zero', 'σ/(2ε₀)'], a: 0, s: 'Just outside conductor: E = σ/ε₀ = Q/(4πε₀R²). Inside conductor E = 0.' },
        { q: 'The force between two parallel infinite plane sheets with charge densities +σ and -σ is:', o: ['σ²/(2ε₀) per unit area', 'σ²/ε₀', 'Zero', 'σ/(2ε₀)'], a: 0, s: 'Force per unit area = σ²/(2ε₀). Field of one sheet acts on the other. F/A = σ × E_other = σ × σ/(2ε₀).' },
      ],
    },
    {
      name: 'Gauss Law',
      slug: 'gauss-law',
      easy: [
        { q: "Gauss's law states that the electric flux through a closed surface equals:", o: ['q_enclosed/ε₀', 'q_enclosed × ε₀', 'E × A', 'Zero always'], a: 0, s: '∮E·dA = q_enc/ε₀.' },
        { q: 'Electric flux is defined as:', o: ['∫E·dA', 'E × q', 'E/A', 'q/ε₀'], a: 0, s: 'Φ = ∫E·dA = ∫E cosθ dA.' },
        { q: 'The SI unit of electric flux is:', o: ['N·m²/C (or V·m)', 'C/m²', 'N/C', 'V/m'], a: 0, s: 'Φ = E·A → (N/C)(m²) = N·m²/C = V·m.' },
        { q: 'The electric flux through a closed surface enclosing no charge is:', o: ['Zero', 'ε₀', 'Infinite', '1'], a: 0, s: 'Gauss law: Φ = q_enc/ε₀ = 0/ε₀ = 0.' },
        { q: "Gauss's law is most useful for calculating fields with:", o: ['High symmetry (spherical, cylindrical, planar)', 'Any arbitrary shape', 'Point charges only', 'Only conductors'], a: 0, s: 'Gauss law is powerful when symmetry allows E to be taken out of the integral.' },
      ],
      medium: [
        { q: 'A charge Q is at the centre of a cube. The flux through one face is:', o: ['Q/(6ε₀)', 'Q/ε₀', 'Q/(4ε₀)', 'Zero'], a: 0, s: 'Total flux = Q/ε₀. By symmetry, each of the 6 faces gets Q/(6ε₀).' },
        { q: 'The electric field inside a uniformly charged non-conducting sphere (total charge Q, radius R) at distance r from centre is:', o: ['Qr/(4πε₀R³)', 'Q/(4πε₀r²)', 'Zero', 'Q/(4πε₀R²)'], a: 0, s: 'Enclosed charge q\' = Q(r/R)³. E = q\'/(4πε₀r²) = Qr/(4πε₀R³). E ∝ r inside.' },
        { q: 'For a conducting sphere with charge Q, the electric field inside is:', o: ['Zero', 'Q/(4πε₀r²)', 'Q/(4πε₀R²)', 'Qr/(4πε₀R³)'], a: 0, s: 'Inside a conductor, E = 0 always. Charges reside on the surface.' },
        { q: 'A spherical shell of inner radius a and outer radius b has charge Q on it. A point charge q is at the centre. The field for r > b is:', o: ['(q+Q)/(4πε₀r²)', 'q/(4πε₀r²)', 'Q/(4πε₀r²)', 'Zero'], a: 0, s: 'For r > b, total enclosed charge is q + Q. E = (q+Q)/(4πε₀r²).' },
        { q: 'The electric field between two concentric conducting shells (inner charge +Q on radius a, outer charge -Q on radius b) for a < r < b:', o: ['Q/(4πε₀r²)', 'Zero', '(Q)/(4πε₀b²)', 'Q/(4πε₀a²)'], a: 0, s: 'Gaussian surface at r (a<r<b) encloses +Q. E = Q/(4πε₀r²).' },
      ],
      hard: [
        { q: 'A long cylinder of radius R has volume charge density ρ = ρ₀(r/R). The electric field at distance r < R is:', o: ['ρ₀r²/(3ε₀R)', 'ρ₀r/(2ε₀)', 'ρ₀R/(2ε₀)', 'ρ₀r²/(2ε₀R)'], a: 0, s: 'Q_enc = ∫₀ʳ ρ₀(r\'/R)(2πr\'L)dr\' = 2πρ₀L r³/(3R). E(2πrL) = Q_enc/ε₀ → E = ρ₀r²/(3ε₀R).' },
        { q: 'A sphere of radius R has charge density ρ = ρ₀(1-r/R). The maximum electric field occurs at:', o: ['r = 2R/3', 'r = R', 'r = R/2', 'r = 0'], a: 0, s: 'E(r) = (ρ₀/(3ε₀))(r - 3r²/(4R)) for r < R. dE/dr = 0 gives 1 - 3r/(2R) = 0 → r = 2R/3.' },
        { q: 'A charge q is placed at one corner of a cube. The flux through the opposite face is:', o: ['q/(24ε₀)', 'q/(8ε₀)', 'q/(6ε₀)', 'q/(48ε₀)'], a: 0, s: 'Place 8 cubes sharing that corner. Total flux = q/ε₀. Each cube: q/(8ε₀). Of 6 faces, only 3 opposite faces see flux. By symmetry: q/(8ε₀ × 3) = q/(24ε₀).' },
        { q: 'An infinite slab of thickness 2d has uniform charge density ρ. The electric field at distance x from the centre (x < d) is:', o: ['ρx/ε₀', 'ρd/ε₀', 'ρx/(2ε₀)', 'ρd/(2ε₀)'], a: 0, s: 'Gaussian pillbox: E(2A) = ρ(2x)A/ε₀ → E = ρx/ε₀.' },
        { q: 'A non-conducting sphere has a spherical cavity. If the sphere has uniform charge density ρ, the field inside the cavity is:', o: ['Uniform: ρd/(3ε₀) where d is the vector from sphere centre to cavity centre', 'Zero', 'Varies with position', 'ρR/(3ε₀)'], a: 0, s: 'By superposition (full sphere minus cavity sphere): E_cavity = ρd/(3ε₀), uniform throughout the cavity.' },
      ],
    },
    {
      name: 'Electric Potential & Capacitance',
      slug: 'potential-capacitance',
      easy: [
        { q: 'Electric potential at a point is the:', o: ['Work done per unit charge bringing a test charge from infinity', 'Force per unit charge', 'Charge per unit area', 'Energy per unit volume'], a: 0, s: 'V = W/q = -∫E·dr from infinity to the point.' },
        { q: 'The SI unit of electric potential is:', o: ['Volt (V)', 'Coulomb', 'Newton', 'Ampere'], a: 0, s: '1 Volt = 1 Joule/Coulomb.' },
        { q: 'Capacitance of a parallel plate capacitor is:', o: ['ε₀A/d', 'εA²/d', 'ε₀d/A', 'A/(ε₀d²)'], a: 0, s: 'C = ε₀A/d for vacuum between plates of area A separated by distance d.' },
        { q: 'Capacitors in parallel have equivalent capacitance:', o: ['C₁ + C₂', 'C₁C₂/(C₁+C₂)', '1/(C₁+C₂)', 'C₁ - C₂'], a: 0, s: 'Parallel: C_eq = C₁ + C₂ (same voltage, charges add).' },
        { q: 'The energy stored in a capacitor is:', o: ['½CV²', 'CV', 'CV²', '½C/V'], a: 0, s: 'U = ½CV² = ½Q²/C = ½QV.' },
      ],
      medium: [
        { q: 'The potential due to a point charge q at distance r is:', o: ['kq/r', 'kq/r²', 'kq²/r', 'kqr'], a: 0, s: 'V = kq/r = q/(4πε₀r). Potential is scalar.' },
        { q: 'Equipotential surfaces are always:', o: ['Perpendicular to electric field lines', 'Parallel to field lines', 'At 45° to field lines', 'Randomly oriented'], a: 0, s: 'No work is done moving along an equipotential → E ⊥ equipotential surface.' },
        { q: 'When a dielectric of constant K is inserted in a capacitor (battery connected):', o: ['C increases by K, V stays same, Q increases by K', 'C decreases', 'V increases', 'Q decreases'], a: 0, s: 'Battery maintains V. C → KC. Q = CV → KQ (increases by K).' },
        { q: 'Two capacitors 3μF and 6μF in series have equivalent capacitance:', o: ['2μF', '9μF', '4.5μF', '1μF'], a: 0, s: '1/C = 1/3 + 1/6 = 3/6 = 1/2. C = 2μF.' },
        { q: 'The potential at the surface of a conducting sphere of radius R and charge Q is:', o: ['kQ/R', 'kQ/R²', 'Zero', 'kQR'], a: 0, s: 'V = kQ/R at the surface and everywhere inside (uniform).' },
      ],
      hard: [
        { q: 'The capacitance of a spherical capacitor (inner radius a, outer radius b) is:', o: ['4πε₀ab/(b-a)', '4πε₀(b-a)', 'ε₀A/d', '4πε₀a'], a: 0, s: 'C = 4πε₀ab/(b-a). For b→∞: C = 4πε₀a (isolated sphere).' },
        { q: 'A capacitor C is charged to V and disconnected. A dielectric K is then inserted. The energy:', o: ['Decreases by factor K', 'Increases by K', 'Stays same', 'Becomes zero'], a: 0, s: 'Q is constant. C → KC. U = Q²/(2C) → Q²/(2KC) = U/K. Energy decreases.' },
        { q: 'The force between plates of a parallel plate capacitor with charge Q is:', o: ['Q²/(2ε₀A)', 'Q²/(ε₀A)', 'QE', 'Q²/(4ε₀A)'], a: 0, s: 'F = Q²/(2ε₀A) = σ²A/(2ε₀). Each plate is in the field of the other: E_other = σ/(2ε₀).' },
        { q: 'The energy density (energy per unit volume) in an electric field E is:', o: ['½ε₀E²', 'ε₀E²', '½ε₀E', 'ε₀E/2'], a: 0, s: 'u = ½ε₀E² (in vacuum). Energy stored per unit volume in the field.' },
        { q: 'A conducting sphere of radius R₁ is connected by a wire to a distant sphere of radius R₂. The charge distribution satisfies:', o: ['σ₁R₁ = σ₂R₂ (potentials equal)', 'σ₁ = σ₂', 'Q₁ = Q₂', 'E₁ = E₂'], a: 0, s: 'Connected → same potential: kQ₁/R₁ = kQ₂/R₂ → σ₁R₁ = σ₂R₂. Smaller sphere has higher surface charge density.' },
      ],
    },
  ],
};

/* ─── Chapter 13: Current Electricity ─── */
const currentElectricity: ChapterData = {
  name: 'Current Electricity',
  slug: 'current-electricity',
  topics: [
    {
      name: "Ohm's Law & Resistance",
      slug: 'ohms-law-resistance',
      easy: [
        { q: "Ohm's law states:", o: ['V = IR', 'V = I/R', 'V = IR²', 'V = I²R'], a: 0, s: 'V = IR, the voltage across a conductor is proportional to current.' },
        { q: 'The SI unit of resistance is:', o: ['Ohm (Ω)', 'Volt', 'Ampere', 'Watt'], a: 0, s: 'Resistance in Ohms: Ω = V/A.' },
        { q: 'Resistors in series have equivalent resistance:', o: ['R₁ + R₂', 'R₁R₂/(R₁+R₂)', '1/(R₁+R₂)', 'R₁ - R₂'], a: 0, s: 'Series: R_eq = R₁ + R₂ (currents same, voltages add).' },
        { q: 'Resistors in parallel have equivalent resistance:', o: ['R₁R₂/(R₁+R₂)', 'R₁ + R₂', 'R₁R₂', '(R₁+R₂)/2'], a: 0, s: 'Parallel: 1/R_eq = 1/R₁ + 1/R₂ → R_eq = R₁R₂/(R₁+R₂).' },
        { q: 'The resistance of a wire is proportional to:', o: ['Length and inversely proportional to cross-sectional area', 'Area', 'Volume', 'Only temperature'], a: 0, s: 'R = ρL/A. Longer wire = more R, thicker wire = less R.' },
      ],
      medium: [
        { q: 'A wire of resistance R is stretched to double its length. Its new resistance is:', o: ['4R', '2R', 'R', 'R/2'], a: 0, s: 'Volume constant: L → 2L, A → A/2. R\' = ρ(2L)/(A/2) = 4ρL/A = 4R.' },
        { q: 'Current density J is:', o: ['I/A (current per unit area)', 'Charge per unit volume', 'Charge per unit length', 'Electric field per unit length'], a: 0, s: 'J = I/A = nev_d (in terms of drift velocity).' },
        { q: 'The drift velocity of electrons in a wire carrying current I (cross section A, n electrons per unit volume) is:', o: ['I/(neA)', 'I/A', 'neA', 'I×neA'], a: 0, s: 'I = neAv_d → v_d = I/(neA). Typically very small (~mm/s).' },
        { q: 'The temperature coefficient of resistance for metals is:', o: ['Positive (R increases with T)', 'Negative', 'Zero', 'Undefined'], a: 0, s: 'Metals: α > 0. R = R₀(1 + αΔT). Resistance increases with temperature.' },
        { q: 'The power dissipated in a resistor is:', o: ['I²R = V²/R = IV', 'IR', 'V/I', 'I/R'], a: 0, s: 'P = IV = I²R = V²/R.' },
      ],
      hard: [
        { q: 'A wire has resistance R. It is cut into n equal pieces and connected in parallel. The new resistance is:', o: ['R/n²', 'R/n', 'nR', 'R'], a: 0, s: 'Each piece: R/n. In parallel: R_eq = (R/n)/n = R/n².' },
        { q: 'The resistivity of a semiconductor:', o: ['Decreases with increasing temperature', 'Increases with temperature', 'Remains constant', 'First increases then decreases'], a: 0, s: 'Semiconductors: more charge carriers at higher T → resistivity decreases (negative temperature coefficient).' },
        { q: 'In a balanced Wheatstone bridge (P/Q = R/S):', o: ['No current flows through the galvanometer', 'Maximum current flows through galvanometer', 'All current flows through galvanometer', 'The bridge burns out'], a: 0, s: 'When P/Q = R/S, the bridge is balanced and no current flows through the galvanometer arm.' },
        { q: 'The internal resistance of a cell can be determined by measuring:', o: ['EMF and terminal voltage under load', 'Only EMF', 'Only current', 'Cell mass'], a: 0, s: 'V = E - Ir → r = (E-V)/I. Measure E (open circuit) and V (under load with known I).' },
        { q: 'In a potentiometer, the sensitivity increases by:', o: ['Increasing the length of the wire', 'Decreasing the wire length', 'Increasing the current', 'Using thicker wire'], a: 0, s: 'Longer wire → smaller potential gradient → can measure smaller voltages → higher sensitivity.' },
      ],
    },
    {
      name: "Kirchhoff's Laws & Circuits",
      slug: 'kirchhoffs-laws',
      easy: [
        { q: "Kirchhoff's current law (KCL) states:", o: ['Sum of currents at a junction = 0', 'Sum of voltages in a loop = 0', 'Current = Voltage/Resistance', 'Power = I²R'], a: 0, s: 'KCL: ΣI = 0 at any junction. Current in = current out (charge conservation).' },
        { q: "Kirchhoff's voltage law (KVL) states:", o: ['Sum of potential differences in a closed loop = 0', 'Sum of currents = 0', 'V = IR', 'P = IV'], a: 0, s: 'KVL: ΣV = 0 around any closed loop (energy conservation).' },
        { q: 'EMF of a cell is:', o: ['Work done per unit charge by the cell', 'Current through the cell', 'Resistance of the cell', 'Power of the cell'], a: 0, s: 'EMF (ε) = work done per unit charge by the cell\'s internal mechanism.' },
        { q: 'Terminal voltage of a cell under load is:', o: ['V = ε - Ir', 'V = ε', 'V = ε + Ir', 'V = Ir'], a: 0, s: 'V = ε - Ir, where r is internal resistance and I is current.' },
        { q: 'In a Wheatstone bridge, balance condition is:', o: ['P/Q = R/S', 'P+Q = R+S', 'PQ = RS', 'P-Q = R-S'], a: 0, s: 'P/Q = R/S → no current through galvanometer.' },
      ],
      medium: [
        { q: 'Two cells of EMF ε₁ and ε₂ (internal resistances r₁, r₂) in parallel give equivalent EMF:', o: ['(ε₁r₂ + ε₂r₁)/(r₁ + r₂)', '(ε₁ + ε₂)/2', 'ε₁ + ε₂', 'ε₁ε₂/(ε₁+ε₂)'], a: 0, s: 'Parallel cells: ε_eq = (ε₁r₂ + ε₂r₁)/(r₁+r₂), r_eq = r₁r₂/(r₁+r₂).' },
        { q: 'Maximum power is transferred to an external resistance R when:', o: ['R equals internal resistance r', 'R = 0', 'R = ∞', 'R = 2r'], a: 0, s: 'Maximum power transfer theorem: P_max when R = r.' },
        { q: 'A meter bridge is a practical form of:', o: ['Wheatstone bridge', 'Potentiometer', 'Galvanometer', 'Ammeter'], a: 0, s: 'Meter bridge uses a 1m wire as two arms of a Wheatstone bridge.' },
        { q: 'In a circuit with 2 cells in series (same polarity), the total EMF is:', o: ['ε₁ + ε₂', 'ε₁ - ε₂', 'ε₁ε₂', '(ε₁+ε₂)/2'], a: 0, s: 'Series aiding: EMFs add. ε_total = ε₁ + ε₂, r_total = r₁ + r₂.' },
        { q: 'A galvanometer can be converted to a voltmeter by adding:', o: ['High resistance in series', 'Low resistance in parallel', 'High resistance in parallel', 'Low resistance in series'], a: 0, s: 'Voltmeter needs high resistance: add large R in series with galvanometer.' },
      ],
      hard: [
        { q: 'In a network, the number of independent KCL equations for n nodes is:', o: ['n - 1', 'n', 'n + 1', '2n'], a: 0, s: 'For n nodes, only n-1 independent KCL equations (the nth is redundant).' },
        { q: 'An infinite ladder network has each series element R and each shunt element R. The equivalent resistance is:', o: ['R(1+√5)/2', 'R', '2R', 'R/2'], a: 0, s: 'Let R_eq = x. Then x = R + R·x/(R+x). Solving: x² - Rx - R² = 0 → x = R(1+√5)/2 (golden ratio × R).' },
        { q: 'The sensitivity of a potentiometer is defined as:', o: ['Smallest potential difference that can be measured', 'Maximum current', 'Total EMF', 'Wire resistance'], a: 0, s: 'Sensitivity = smallest measurable PD. A longer wire with smaller potential gradient gives higher sensitivity.' },
        { q: 'A cell of EMF 2V and internal resistance 1Ω is connected to two 2Ω resistors in parallel. The current from the cell is:', o: ['1 A', '2 A', '0.5 A', '4 A'], a: 0, s: 'R_ext = 2×2/(2+2) = 1Ω. I = ε/(R_ext + r) = 2/(1+1) = 1 A.' },
        { q: 'In a Wheatstone bridge, if P = 100Ω, Q = 200Ω, R = 150Ω, then for balance S =:', o: ['300 Ω', '150 Ω', '100 Ω', '75 Ω'], a: 0, s: 'P/Q = R/S → 100/200 = 150/S → S = 300 Ω.' },
      ],
    },
  ],
};

export const electroChapters: ChapterData[] = [electrostatics, currentElectricity];
