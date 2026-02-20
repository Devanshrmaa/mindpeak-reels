import type { ChapterData } from './types';

/* ─── Chapter 7: Gravitation ─── */
const gravitation: ChapterData = {
  name: 'Gravitation',
  slug: 'gravitation',
  topics: [
    {
      name: "Newton's Law of Gravitation",
      slug: 'law-of-gravitation',
      easy: [
        { q: "Newton's law of gravitation states that force is:", o: ['Proportional to product of masses and inversely proportional to r²', 'Proportional to r²', 'Independent of mass', 'Inversely proportional to mass'], a: 0, s: 'F = Gm₁m₂/r².' },
        { q: 'The value of G (gravitational constant) is approximately:', o: ['6.67 × 10⁻¹¹ N·m²/kg²', '9.8 m/s²', '6.67 × 10⁻⁸ N·m²/kg²', '6.67 × 10¹¹ N·m²/kg²'], a: 0, s: 'G = 6.674 × 10⁻¹¹ N·m²/kg².' },
        { q: 'If the distance between two masses is doubled, the gravitational force becomes:', o: ['1/4 of original', '1/2 of original', 'Double', '4 times'], a: 0, s: 'F ∝ 1/r². If r → 2r, F → F/4.' },
        { q: 'Gravitational force is always:', o: ['Attractive', 'Repulsive', 'Zero', 'Can be either'], a: 0, s: 'Gravitational force is always attractive between any two masses.' },
        { q: 'The gravitational force between two unit masses 1 m apart equals:', o: ['G', '1', 'g', '0'], a: 0, s: 'F = G(1)(1)/1² = G.' },
      ],
      medium: [
        { q: 'Three equal masses m are placed at the vertices of an equilateral triangle of side a. The force on each mass is:', o: ['√3 Gm²/a²', 'Gm²/a²', '2Gm²/a²', '3Gm²/a²'], a: 0, s: 'Each mass experiences 2 forces of magnitude Gm²/a² at 60°. Resultant = √(F²+F²+2F²cos60°) = √3·F = √3 Gm²/a².' },
        { q: 'The gravitational field inside a uniform solid sphere at distance r from centre (r < R) is:', o: ['GmMr/R³', 'GM/r²', 'Zero', 'GM/R²'], a: 0, s: 'Inside sphere, only mass within radius r contributes. g = GM\'r/r³ where M\' = M(r/R)³ → g = GMr/R³.' },
        { q: 'The gravitational field inside a uniform spherical shell is:', o: ['Zero everywhere', 'GM/r²', 'Constant but non-zero', 'Varies linearly'], a: 0, s: 'By the shell theorem, the gravitational field inside a uniform shell is zero.' },
        { q: 'If the earth stops rotating, the apparent weight at the equator would:', o: ['Increase', 'Decrease', 'Remain same', 'Become zero'], a: 0, s: 'Currently g_eff = g - ω²R at equator. If rotation stops, g_eff = g (no centrifugal subtraction), so weight increases.' },
        { q: 'Acceleration due to gravity at height h << R from surface is approximately:', o: ['g(1 - 2h/R)', 'g(1 + 2h/R)', 'g(1 - h/R)', 'g'], a: 0, s: 'g_h = g/(1+h/R)² ≈ g(1 - 2h/R) for h << R.' },
      ],
      hard: [
        { q: 'A tunnel is drilled through the earth along a chord at distance d from centre. The time period of oscillation of a ball in this tunnel is:', o: ['Same as through centre: 2π√(R/g)', 'Greater than through centre', 'Less than through centre', 'Depends on d'], a: 0, s: 'T = 2π√(R/g) regardless of the chord, the motion is SHM with same time period for all straight tunnels through a uniform earth.' },
        { q: 'The gravitational PE of a system of 4 equal masses m at corners of a square of side a is:', o: ['-Gm²(4+√2)/a × 2... = -(4+√2)Gm²/a × 2', '-4Gm²/a', '-2Gm²/a', '-6Gm²/a'], a: 0, s: 'There are C(4,2) = 6 pairs. 4 pairs along sides (distance a), 2 pairs along diagonals (distance a√2). U = -4Gm²/a - 2Gm²/(a√2) = -Gm²(4+√2)/a.' },
        { q: 'Two planets have radii R and 2R, densities ρ and ρ/2. The ratio of g on their surfaces is:', o: ['1:2', '1:1', '2:1', '1:4'], a: 0, s: 'g = 4πGρR/3. Planet 1: g₁ = 4πGρR/3. Planet 2: g₂ = 4πG(ρ/2)(2R)/3 = 4πGρR/3 = g₁. Ratio = 1:1.' },
        { q: 'The minimum energy needed to move a mass m from Earth surface to infinity is:', o: ['mgR', '½mgR', '2mgR', 'mgR/4'], a: 0, s: 'Binding energy = -U = GMm/R = gR·m = mgR.' },
        { q: 'A satellite orbits at height R above Earth (earth radius R). Its orbital velocity is:', o: ['√(gR/2)', '√(gR)', '√(2gR)', '√(gR/4)'], a: 0, s: 'At distance 2R from centre: v = √(GM/2R) = √(gR²/2R) = √(gR/2).' },
      ],
    },
    {
      name: 'Orbital Mechanics',
      slug: 'orbital-mechanics',
      easy: [
        { q: "The orbital velocity of a satellite near Earth's surface is approximately:", o: ['7.9 km/s', '11.2 km/s', '3.4 km/s', '1 km/s'], a: 0, s: 'v_o = √(gR) = √(9.8 × 6400000) ≈ 7.9 km/s.' },
        { q: 'A geostationary satellite has a time period of:', o: ['24 hours', '12 hours', '6 hours', '48 hours'], a: 0, s: 'Geostationary orbit has T = 24 hours, matching Earth\'s rotation.' },
        { q: 'The escape velocity from Earth is approximately:', o: ['11.2 km/s', '7.9 km/s', '3.4 km/s', '15 km/s'], a: 0, s: 'v_e = √(2gR) = √2 × v_o ≈ 11.2 km/s.' },
        { q: 'The relation between escape velocity and orbital velocity is:', o: ['v_e = √2 × v_o', 'v_e = 2v_o', 'v_e = v_o', 'v_e = v_o/√2'], a: 0, s: 'v_e = √(2gR) = √2 × √(gR) = √2 × v_o.' },
        { q: 'Total energy of a satellite in orbit is:', o: ['Negative', 'Positive', 'Zero', 'Infinite'], a: 0, s: 'Bound orbit → negative total energy. E = -GMm/(2r).' },
      ],
      medium: [
        { q: "Kepler's third law states that T² is proportional to:", o: ['r³', 'r²', 'r', '1/r'], a: 0, s: "Kepler's third law: T² ∝ r³ (or T² = 4π²r³/GM)." },
        { q: 'The total energy of a satellite of mass m orbiting at radius r is:', o: ['-GMm/(2r)', '-GMm/r', 'GMm/(2r)', 'GMm/r'], a: 0, s: 'KE = GMm/(2r), PE = -GMm/r. Total = -GMm/(2r).' },
        { q: 'If orbital radius is doubled, the orbital velocity:', o: ['Decreases by factor √2', 'Doubles', 'Halves', 'Remains same'], a: 0, s: 'v = √(GM/r). If r → 2r, v → v/√2.' },
        { q: 'A satellite in a circular orbit has KE = K. Its PE is:', o: ['-2K', 'K', '-K', '2K'], a: 0, s: 'For circular orbit: PE = -2·KE. If KE = K, PE = -2K.' },
        { q: 'The minimum energy needed to move a satellite from orbit at radius r to orbit at radius 2r is:', o: ['GMm/(4r)', 'GMm/(2r)', 'GMm/r', 'GMm/(3r)'], a: 0, s: 'E₁ = -GMm/(2r), E₂ = -GMm/(4r). ΔE = -GMm/(4r) + GMm/(2r) = GMm/(4r).' },
      ],
      hard: [
        { q: 'A satellite is in a circular orbit of radius r. To transfer to a circular orbit of radius 4r using Hohmann transfer, the velocity increment at first burn is:', o: ['v₀(√(8/5) - 1) where v₀ = √(GM/r)', 'v₀(√2 - 1)', '2v₀', 'v₀/2'], a: 0, s: 'Hohmann transfer ellipse has a = (r+4r)/2 = 5r/2. At perigee: v₁ = √(GM(2/r - 1/(5r/2))) = √(GM·8/(5r)). Δv = v₁ - v₀ = v₀(√(8/5) - 1).' },
        { q: 'The maximum height reached by a projectile launched at escape velocity at angle 45° from the surface (ignoring rotation) is:', o: ['Infinity', 'R', '2R', 'R/2'], a: 0, s: 'At escape velocity, total energy = 0 regardless of direction. The projectile escapes to infinity along a parabolic path.' },
        { q: 'Two satellites of mass m and 2m orbit at same radius. The ratio of their total energies is:', o: ['1:2', '1:1', '2:1', '1:4'], a: 0, s: 'E = -GMm/(2r). Ratio = m₁/m₂ = 1:2.' },
        { q: 'A body is projected vertically from Earth with velocity v = v_e/2. The maximum height is:', o: ['R/3', 'R/2', 'R', '2R'], a: 0, s: 'Using energy: ½m(v_e/2)² - mgR = -mgR²/(R+h). ½(v_e²/4) = gR/4 → h = R/3.' },
        { q: 'The time period of a satellite at height h from surface in terms of R and g:', o: ['2π√((R+h)³/(gR²))', '2π√(R/g)', '2π(R+h)/g', '2π√(h/g)'], a: 0, s: 'T = 2π√(r³/GM) = 2π√((R+h)³/(gR²)) since GM = gR².' },
      ],
    },
  ],
};

/* ─── Chapter 8: Properties of Matter ─── */
const propertiesOfMatter: ChapterData = {
  name: 'Properties of Matter',
  slug: 'properties-of-matter',
  topics: [
    {
      name: 'Elasticity',
      slug: 'elasticity',
      easy: [
        { q: "Hooke's law states that stress is proportional to:", o: ['Strain', 'Force', 'Length', 'Area'], a: 0, s: "Hooke's law: stress ∝ strain (within elastic limit)." },
        { q: "Young's modulus is defined as:", o: ['Longitudinal stress / Longitudinal strain', 'Volume stress / Volume strain', 'Shear stress / Shear strain', 'Force / Area'], a: 0, s: "Young's modulus Y = (F/A)/(ΔL/L) — ratio of tensile stress to tensile strain." },
        { q: 'The SI unit of stress is:', o: ['Pascal (Pa)', 'Meter', 'Newton', 'Joule'], a: 0, s: 'Stress = Force/Area → N/m² = Pascal.' },
        { q: 'Strain is a:', o: ['Dimensionless quantity', 'Force', 'Energy', 'Pressure'], a: 0, s: 'Strain = ΔL/L (or ΔV/V, etc.) — ratio of same quantities, hence dimensionless.' },
        { q: 'The stress-strain curve for a ductile material shows a region of:', o: ['Plastic deformation before fracture', 'No deformation', 'Only elastic region', 'Immediate fracture'], a: 0, s: 'Ductile materials show elastic region → yield point → plastic deformation → fracture.' },
      ],
      medium: [
        { q: 'A wire of length L and area A is stretched by force F. If L is doubled and area is halved (same material), the extension for the same force becomes:', o: ['4 times', '2 times', 'Same', '8 times'], a: 0, s: 'ΔL = FL/(AY). New: F(2L)/((A/2)Y) = 4FL/(AY) = 4 × original.' },
        { q: 'The elastic PE stored per unit volume is:', o: ['½ × stress × strain', 'stress × strain', 'stress / strain', '½ × force × extension'], a: 0, s: 'Energy density = ½ × stress × strain = ½σε.' },
        { q: 'Bulk modulus is the ratio of:', o: ['Volume stress to volume strain', 'Tensile stress to tensile strain', 'Shear stress to shear strain', 'Force to area'], a: 0, s: 'K = -V(dP/dV) = ΔP/(ΔV/V).' },
        { q: 'The Poisson ratio is physically the ratio of:', o: ['Lateral strain to longitudinal strain', 'Stress to strain', 'Length to diameter', 'Force to area'], a: 0, s: "Poisson's ratio σ = lateral strain / longitudinal strain." },
        { q: "Two wires of same material have lengths in ratio 1:2 and diameters in ratio 2:1. The ratio of extensions under same load is:", o: ['1:8', '1:2', '2:1', '1:4'], a: 0, s: 'ΔL ∝ L/A ∝ L/d². Ratio = (1/4)/(2/1) = 1/8.' },
      ],
      hard: [
        { q: 'A uniform rod of mass m, length L, area A, Young\'s modulus Y hangs vertically from one end. The total extension due to its own weight is:', o: ['mgL/(2AY)', 'mgL/(AY)', '2mgL/(AY)', 'mgL²/(2AY)'], a: 0, s: 'Consider element at distance x from top. Force = mg(L-x)/L. Integration gives ΔL = mgL/(2AY).' },
        { q: 'A wire of length L and radius r is stretched by a force F. The PE stored is:', o: ['F²L/(2πr²Y)', 'FL/(2Y)', 'F²L/(πr²Y)', 'F²/(2AYL)'], a: 0, s: 'U = F²L/(2AY) = F²L/(2πr²Y).' },
        { q: 'If a rod of length L is compressed by ΔL, the energy stored per unit volume is:', o: ['½Y(ΔL/L)²', 'Y(ΔL/L)', '½(ΔL/L)', 'YΔL'], a: 0, s: 'u = ½ × stress × strain = ½ × Y × strain × strain = ½Y(ΔL/L)².' },
        { q: 'A steel wire (Y = 2×10¹¹ Pa) of length 2 m and radius 1 mm supports a 100 kg mass. The extension is:', o: ['≈ 3.1 mm', '≈ 1 mm', '≈ 6 mm', '≈ 0.5 mm'], a: 0, s: 'ΔL = FL/(AY) = 1000×2/(π×10⁻⁶×2×10¹¹) = 2000/(6.28×10⁵) ≈ 3.18×10⁻³ m ≈ 3.1 mm.' },
        { q: 'For an incompressible material, the Poisson ratio is:', o: ['0.5', '0', '1', 'Infinity'], a: 0, s: 'Incompressible → no volume change under stress → σ = 0.5 (maximum value for isotropic materials).' },
      ],
    },
    {
      name: 'Fluid Mechanics',
      slug: 'fluid-mechanics',
      easy: [
        { q: 'Pressure at a depth h in a fluid of density ρ is:', o: ['P = P₀ + ρgh', 'P = ρg/h', 'P = ρh', 'P = gh'], a: 0, s: 'Hydrostatic pressure: P = P₀ + ρgh.' },
        { q: "Pascal's law states that pressure applied to a confined fluid:", o: ['Is transmitted equally in all directions', 'Is absorbed', 'Acts only downward', 'Is halved'], a: 0, s: "Pascal's law: pressure is equally transmitted throughout a confined fluid." },
        { q: 'Archimedes principle states that the buoyant force equals:', o: ['Weight of displaced fluid', 'Weight of object', 'Volume of object', 'Density of fluid'], a: 0, s: 'Buoyancy = weight of fluid displaced = ρ_fluid × V_submerged × g.' },
        { q: 'An object floats in water with 3/4 of its volume submerged. Its density is:', o: ['750 kg/m³', '1000 kg/m³', '500 kg/m³', '1333 kg/m³'], a: 0, s: 'For floating: ρ_obj/ρ_water = V_sub/V_total = 3/4. ρ_obj = 750 kg/m³.' },
        { q: 'A hydraulic press has pistons of area 10 cm² and 100 cm². A force of 10 N on the smaller piston produces a force on the larger piston of:', o: ['100 N', '10 N', '1 N', '1000 N'], a: 0, s: 'F₂/F₁ = A₂/A₁ = 100/10 = 10. F₂ = 100 N.' },
      ],
      medium: [
        { q: "Bernoulli's equation states that along a streamline:", o: ['P + ½ρv² + ρgh = constant', 'P = ρv²', 'P + ρgh = 0', 'v = constant'], a: 0, s: "Bernoulli's principle: P + ½ρv² + ρgh = constant along a streamline." },
        { q: 'The velocity of efflux from a hole at depth h below the surface of a tank is:', o: ['√(2gh)', 'gh', '√(gh)', '2gh'], a: 0, s: "Torricelli's theorem: v = √(2gh), same as free-fall from height h." },
        { q: "The equation of continuity states:", o: ['A₁v₁ = A₂v₂', 'A₁/v₁ = A₂/v₂', 'A₁v₁² = A₂v₂²', 'P₁v₁ = P₂v₂'], a: 0, s: 'For incompressible flow, mass flow rate is constant: Av = constant.' },
        { q: 'Terminal velocity of a sphere falling through a viscous fluid is proportional to:', o: ['r² (radius squared)', 'r', '1/r', 'r³'], a: 0, s: "From Stokes' law: v_t = 2r²(ρ_s - ρ_f)g/(9η) ∝ r²." },
        { q: 'Reynolds number determines:', o: ['Whether flow is laminar or turbulent', 'Pressure', 'Density', 'Temperature'], a: 0, s: 'Re < 2000: laminar, Re > 4000: turbulent. Re = ρvd/η.' },
      ],
      hard: [
        { q: 'A U-tube of cross section A has liquid of density ρ. If the liquid is displaced by x, the period of oscillation is:', o: ['2π√(L/(2g))', '2π√(h/g)', '2π√(L/g)', '2π√(A/g)'], a: 0, s: 'Total liquid length L oscillates: restoring force = 2ρgAx. Mass = ρLA. ω² = 2g/L → T = 2π√(L/(2g)).' },
        { q: 'A cylinder of radius R and length L (density ρ_c < ρ_w) floats vertically in water. When pushed down slightly, the time period is:', o: ['2π√(ρ_c L/(ρ_w g))', '2π√(L/g)', '2π√(L/(2g))', '2π√(ρ_w L/(ρ_c g))'], a: 0, s: 'Restoring force = ρ_w g πR² x. Mass = ρ_c πR² L. T = 2π√(m/(ρ_w gA)) = 2π√(ρ_c L/(ρ_w g)).' },
        { q: 'Water flows through a constriction in a pipe. If the pipe narrows from 4 cm to 2 cm diameter, the velocity ratio is:', o: ['1:4', '1:2', '4:1', '2:1'], a: 0, s: 'A₁v₁ = A₂v₂. A ∝ d². (4²)v₁ = (2²)v₂ → v₂/v₁ = 16/4 = 4. Ratio v₁:v₂ = 1:4.' },
        { q: 'A tank with a hole at height h from bottom is filled to height H. The range of the stream on the ground is:', o: ['2√(h(H-h))', '√(2gH)', '2√(gH)', 'H-h'], a: 0, s: 'Horizontal velocity: v = √(2g(H-h)). Fall height: h. Time to fall: t = √(2h/g). Range = vt = 2√(h(H-h)). Maximum at h = H/2.' },
        { q: 'A venturi meter has inlet area A₁ and throat area A₂. The volume flow rate is:', o: ['A₁A₂√(2ΔP/(ρ(A₁²-A₂²)))', 'A₁√(2ΔP/ρ)', 'A₂√(2ΔP/ρ)', 'A₁A₂ΔP/ρ'], a: 0, s: 'From continuity + Bernoulli: Q = A₁A₂√(2ΔP/(ρ(A₁²-A₂²))).' },
      ],
    },
    {
      name: 'Surface Tension',
      slug: 'surface-tension',
      easy: [
        { q: 'Surface tension is the force per unit:', o: ['Length', 'Area', 'Volume', 'Mass'], a: 0, s: 'Surface tension S = F/L, force per unit length along the surface.' },
        { q: 'The SI unit of surface tension is:', o: ['N/m', 'N/m²', 'N·m', 'Pa'], a: 0, s: 'S = F/L → N/m.' },
        { q: 'Excess pressure inside a soap bubble of radius R is:', o: ['4S/R', '2S/R', 'S/R', '8S/R'], a: 0, s: 'Soap bubble has two surfaces: ΔP = 4S/R. For liquid drop: ΔP = 2S/R.' },
        { q: 'Capillary rise is due to:', o: ['Surface tension', 'Gravity only', 'Viscosity', 'Atmospheric pressure'], a: 0, s: 'Capillarity occurs because of surface tension and adhesive forces with the tube wall.' },
        { q: 'Angle of contact for water-glass is:', o: ['Acute (< 90°)', 'Obtuse (> 90°)', '90°', '180°'], a: 0, s: 'Water wets glass → concave meniscus → acute angle of contact.' },
      ],
      medium: [
        { q: 'The height of liquid rise in a capillary tube of radius r is:', o: ['2Scosθ/(ρgr)', 'S/(ρgr)', '2S/(ρg)', 'ρgr/(2S)'], a: 0, s: 'h = 2Scosθ/(ρgr), balancing surface tension force with weight of risen liquid.' },
        { q: 'Two soap bubbles of radii r and R (r < R) coalesce. The radius of the resulting bubble (in vacuum) is:', o: ['√(r² + R²)', 'r + R', 'R - r', '(rR)/(r+R)'], a: 0, s: 'PV = const. (4S/r)(4πr³/3) + (4S/R)(4πR³/3) = (4S/r_new)(4πr_new³/3). This gives r_new² = r² + R².' },
        { q: 'Work done in blowing a soap bubble of radius R is:', o: ['8πR²S', '4πR²S', '2πR²S', '16πR²S'], a: 0, s: 'Soap bubble has 2 surfaces. W = S × 2 × 4πR² = 8πR²S.' },
        { q: 'If a capillary tube is dipped in mercury, the level inside:', o: ['Falls below the outside level', 'Rises above', 'Remains same', 'Oscillates'], a: 0, s: 'Mercury has obtuse contact angle (>90°) with glass → meniscus is convex → capillary depression.' },
        { q: 'The excess pressure inside a liquid drop of radius R and surface tension S is:', o: ['2S/R', '4S/R', 'S/R', 'S/(2R)'], a: 0, s: 'Liquid drop has one surface: ΔP = 2S/R.' },
      ],
      hard: [
        { q: 'An air bubble of radius r is at depth h in water (surface tension S, density ρ). The radius at the surface assuming isothermal process:', o: ['r(1 + ρgh/P₀)^(1/3)', 'r√(P₀/(P₀+ρgh))', 'r', '2r'], a: 0, s: 'P₁V₁ = P₂V₂. (P₀+ρgh+2S/r)(4πr³/3) = (P₀+2S/r\')(4πr\'³/3). For S effects being small: r\' ≈ r(1+ρgh/P₀)^(1/3).' },
        { q: 'The energy needed to break a liquid drop of radius R into n identical small drops is:', o: ['4πR²S(n^(1/3) - 1)', '4πR²S(n-1)', '4πR²Sn', '4πR²S/n'], a: 0, s: 'Volume conserved: (4/3)πR³ = n(4/3)πr³ → r = R/n^(1/3). ΔA = n·4πr² - 4πR² = 4πR²(n^(1/3)-1). W = SΔA.' },
        { q: 'In a capillary tube of insufficient length l < h (where h = 2Scosθ/(ρgr)), the liquid:', o: ['Rises to the top without overflowing (adjusts meniscus radius)', 'Overflows', 'Does not rise', 'Rises to h anyway'], a: 0, s: 'The liquid rises to the top and adjusts its meniscus radius R\' such that 2Scosθ\'/(ρgR\') = l. It never overflows.' },
        { q: 'Two soap bubbles of radii r₁ and r₂ are connected. Air flows from:', o: ['Smaller to larger bubble', 'Larger to smaller', 'No flow', 'Both collapse'], a: 0, s: 'Smaller bubble has higher excess pressure (4S/r). So air flows from smaller (higher P) to larger (lower P).' },
        { q: 'A thin film of liquid has thickness t and area A. If it is stretched to increase area by ΔA, the force needed is:', o: ['2SΔA/(Δx) where Δx is extension', 'SΔA', 'SA', '2SA'], a: 0, s: 'Film has 2 surfaces. Force = 2S × length. Work = 2SΔA. Force = dW/dx = 2S(ΔA/Δx).' },
      ],
    },
  ],
};

export const mechanicsChapters4: ChapterData[] = [gravitation, propertiesOfMatter];
