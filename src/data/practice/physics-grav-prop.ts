import type { ChapterData } from './types';

/* ─── Chapter 7: Gravitation ─── */
const gravitation: ChapterData = {
  name: 'Gravitation',
  slug: 'gravitation',
  topics: [
    {
      name: "Newton's Law of Gravitation",
      slug: 'newtons-gravitation',
      easy: [
        { q: 'The gravitational force between two masses is:', o: ['Always attractive', 'Always repulsive', 'Can be both', 'Zero for large distances'], a: 0, s: 'Gravitational force is always attractive between any two masses.' },
        { q: 'If the distance between two masses is doubled, the gravitational force becomes:', o: ['1/4 of original', '1/2 of original', '4 times original', '2 times original'], a: 0, s: 'F ∝ 1/r². If r → 2r, F → F/4.' },
        { q: 'The value of G (gravitational constant) is approximately:', o: ['6.674 × 10⁻¹¹ N·m²/kg²', '9.8 m/s²', '6.674 × 10⁻⁸ N·m²/kg²', '6.674 × 10⁻¹¹ N/kg'], a: 0, s: 'G = 6.674 × 10⁻¹¹ N·m²/kg² (universal gravitational constant).' },
        { q: 'Gravitational force between two bodies depends on:', o: ['Product of their masses', 'Sum of their masses', 'Difference of their masses', 'Ratio of their masses'], a: 0, s: 'F = Gm₁m₂/r² — force depends on the product of masses.' },
        { q: 'G was first measured experimentally by:', o: ['Cavendish', 'Newton', 'Galileo', 'Kepler'], a: 0, s: 'Henry Cavendish measured G using a torsion balance experiment in 1798.' },
      ],
      medium: [
        { q: 'Two spheres of masses m and 4m are separated by distance d. The null point (zero net force) for a test mass is at distance from m:', o: ['d/3', 'd/2', '2d/3', 'd/4'], a: 0, s: 'At null point: Gm/x² = G(4m)/(d-x)² → (d-x)² = 4x² → d-x = 2x → x = d/3.' },
        { q: 'If Earth\'s mass were doubled and radius halved, the value of g would become:', o: ['8g', '4g', '2g', 'g/2'], a: 0, s: 'g = GM/R². If M → 2M and R → R/2: g\' = G(2M)/(R/2)² = 8GM/R² = 8g.' },
        { q: 'The ratio of gravitational acceleration on Moon to Earth is approximately:', o: ['1/6', '1/3', '1/2', '1/9'], a: 0, s: 'g_moon ≈ 1.6 m/s² and g_earth ≈ 9.8 m/s², ratio ≈ 1/6.' },
        { q: 'Gravitational field intensity at a point is defined as:', o: ['Force per unit mass', 'Force per unit charge', 'Energy per unit mass', 'Potential per unit distance'], a: 0, s: 'Gravitational field intensity E = F/m (force experienced by unit test mass).' },
        { q: 'Inside a uniform spherical shell, the gravitational field is:', o: ['Zero everywhere', 'Maximum at center', 'Uniform and non-zero', 'Varies linearly'], a: 0, s: 'By the shell theorem, gravitational field inside a uniform spherical shell is zero.' },
        { q: 'The weight of a body at the center of Earth is:', o: ['Zero', 'Same as surface', 'Maximum', 'Half of surface value'], a: 0, s: 'At center, g = 0 (all mass surrounds symmetrically), so weight = 0.' },
      ],
      hard: [
        { q: 'A tunnel is drilled through Earth along a diameter. A ball dropped into it will:', o: ['Oscillate with SHM', 'Fall to center and stop', 'Accelerate continuously', 'Reach the other end and fly off'], a: 0, s: 'Inside Earth, F ∝ r. This gives SHM with T = 2π√(R/g) ≈ 84.4 minutes.' },
        { q: 'The time period of oscillation through the diametric tunnel is:', o: ['2π√(R/g) ≈ 84.4 min', 'π√(R/g)', '2π√(2R/g)', '2π√(R/2g)'], a: 0, s: 'T = 2π√(R/g) = 2π√(6.4×10⁶/9.8) ≈ 84.4 minutes.' },
        { q: 'Two stars of masses M and 4M are at distance d apart. They revolve about their common center of mass. The ratio of their angular velocities is:', o: ['1:1', '1:4', '4:1', '1:2'], a: 0, s: 'Both stars revolve with the same angular velocity about the common CM. ω₁ = ω₂.' },
        { q: 'The gravitational potential energy of a mass m at height h (h << R) above Earth is approximately:', o: ['mgh', '-GMm/R', 'GMm/R²', '-mgh'], a: 0, s: 'For h << R: U ≈ mgh (taking surface as reference). Precisely: ΔU = mgh.' },
        { q: 'A satellite orbits at height h = R above Earth. Its orbital velocity compared to near-surface orbital velocity is:', o: ['1/√2 times', '1/2 times', '√2 times', '2 times'], a: 0, s: 'v = √(GM/r). At h=R: r=2R, v₂ = √(GM/2R) = v₁/√2.' },
      ],
    },
    {
      name: 'Gravitational Potential & PE',
      slug: 'gravitational-potential',
      easy: [
        { q: 'Gravitational potential at infinity is:', o: ['Zero', 'Infinity', 'Negative infinity', 'Undefined'], a: 0, s: 'By convention, gravitational potential at infinity is taken as zero.' },
        { q: 'Gravitational potential energy of a mass m at distance r from mass M is:', o: ['-GMm/r', 'GMm/r', '-GMm/r²', 'GMm/r²'], a: 0, s: 'PE = -GMm/r (negative because gravity is attractive).' },
        { q: 'The escape velocity from Earth is approximately:', o: ['11.2 km/s', '7.9 km/s', '3.2 km/s', '15.4 km/s'], a: 0, s: 'Escape velocity = √(2gR) ≈ √(2 × 9.8 × 6.4×10⁶) ≈ 11.2 km/s.' },
        { q: 'Escape velocity is independent of:', o: ['Mass of the body', 'Mass of the planet', 'Radius of the planet', 'Gravitational constant'], a: 0, s: 'v_e = √(2GM/R) — it does not depend on the mass of the escaping body.' },
        { q: 'As a satellite moves to a higher orbit, its potential energy:', o: ['Increases (becomes less negative)', 'Decreases', 'Remains same', 'Becomes positive'], a: 0, s: 'PE = -GMm/r. As r increases, PE increases (becomes less negative).' },
      ],
      medium: [
        { q: 'The escape velocity from a planet of mass 2M and radius R/2 compared to Earth (mass M, radius R) is:', o: ['2v_e', '√2 v_e', 'v_e/2', '4v_e'], a: 0, s: 'v_e = √(2GM/R). For new planet: √(2G·2M/(R/2)) = √(8GM/R) = 2√(2GM/R) = 2v_e.' },
        { q: 'The total energy of a satellite in circular orbit is:', o: ['-GMm/2r', 'GMm/2r', '-GMm/r', 'Zero'], a: 0, s: 'KE = GMm/2r, PE = -GMm/r. Total E = KE + PE = -GMm/2r.' },
        { q: 'If a satellite\'s speed is increased to √2 times orbital speed, it will:', o: ['Escape the gravitational field', 'Move to a higher orbit', 'Fall to Earth', 'Remain in same orbit'], a: 0, s: 'v_escape = √2 × v_orbital. At √2 times orbital speed, the satellite just escapes.' },
        { q: 'Gravitational potential on the surface of Earth is:', o: ['-gR', 'gR', '-gR²', 'g/R'], a: 0, s: 'V = -GM/R = -gR (since g = GM/R²).' },
        { q: 'The binding energy of a satellite of mass m in orbit of radius r is:', o: ['GMm/2r', 'GMm/r', 'GMm/2r²', '-GMm/2r'], a: 0, s: 'Binding energy = -Total energy = GMm/2r (the energy needed to free the satellite).' },
      ],
      hard: [
        { q: 'A rocket is launched vertically with speed v = v_e/2. The maximum height reached is:', o: ['R/3', 'R/2', 'R/4', '2R/3'], a: 0, s: 'Using energy conservation: ½m(v_e/2)² = mgh/(1+h/R). Solving: h = R/3.' },
        { q: 'The gravitational self-energy of a uniform sphere of mass M and radius R is:', o: ['-3GM²/5R', '-GM²/2R', '-GM²/R', '-3GM²/10R'], a: 0, s: 'Self-energy = -3GM²/5R, obtained by integrating the energy to assemble the sphere shell by shell.' },
        { q: 'Two spheres of masses m₁ and m₂ are at rest and separated by distance d. Due to mutual gravitation, they meet at a point that divides d in ratio:', o: ['m₂ : m₁', 'm₁ : m₂', '√m₂ : √m₁', 'm₁² : m₂²'], a: 0, s: 'They meet at their CM. Distance from m₁ = m₂d/(m₁+m₂), giving ratio m₂:m₁.' },
        { q: 'The minimum energy required to move a mass m from Earth\'s surface to infinity is:', o: ['mgR', 'mgR/2', '2mgR', 'mg/R'], a: 0, s: 'Energy = GMm/R = gR·m = mgR (since PE on surface is -mgR, need +mgR to make it 0).' },
        { q: 'A particle is projected from the surface with speed v = √(gR). The maximum height is:', o: ['R', 'R/2', 'R/3', '2R'], a: 0, s: 'Using ½mv² - mgR = -mgR²/(R+h): ½gR - gR = -gR²/(R+h). Solving gives h = R.' },
      ],
    },
    {
      name: 'Orbital Mechanics & Satellites',
      slug: 'orbital-mechanics',
      easy: [
        { q: 'A geostationary satellite has a time period of:', o: ['24 hours', '12 hours', '1 hour', '365 days'], a: 0, s: 'A geostationary satellite orbits with the same period as Earth\'s rotation = 24 hours.' },
        { q: 'Orbital velocity of a satellite near Earth\'s surface is approximately:', o: ['7.9 km/s', '11.2 km/s', '3.2 km/s', '1.6 km/s'], a: 0, s: 'v_o = √(gR) = √(9.8 × 6.4×10⁶) ≈ 7.9 km/s.' },
        { q: 'The orbital velocity of a satellite is independent of:', o: ['Mass of the satellite', 'Mass of the planet', 'Radius of the orbit', 'Gravitational constant'], a: 0, s: 'v_o = √(GM/r) — it depends on planet\'s mass and orbit radius, not satellite\'s mass.' },
        { q: 'A geostationary satellite orbits in the:', o: ['Equatorial plane', 'Polar plane', 'Any plane', 'Ecliptic plane'], a: 0, s: 'Geostationary satellites must orbit in the equatorial plane to appear stationary.' },
        { q: 'For a satellite in circular orbit, the relationship between KE and PE is:', o: ['KE = -PE/2', 'KE = PE', 'KE = -PE', 'KE = PE/2'], a: 0, s: 'KE = GMm/2r, PE = -GMm/r. So KE = -PE/2.' },
      ],
      medium: [
        { q: 'The radius of a geostationary orbit is approximately:', o: ['42,164 km', '6,371 km', '35,786 km', '384,400 km'], a: 0, s: 'Geostationary orbit radius from Earth\'s center ≈ 42,164 km (height ≈ 35,786 km above surface).' },
        { q: 'According to Kepler\'s third law, T² is proportional to:', o: ['r³', 'r²', 'r', '1/r²'], a: 0, s: 'Kepler\'s third law: T² ∝ r³ (or T² = 4π²r³/GM).' },
        { q: 'If a satellite orbits at twice the radius of another, the ratio of their time periods is:', o: ['2√2 : 1', '2 : 1', '4 : 1', '8 : 1'], a: 0, s: 'T ∝ r^(3/2). T₂/T₁ = (2r/r)^(3/2) = 2^(3/2) = 2√2.' },
        { q: 'A satellite in an elliptical orbit has:', o: ['Constant angular momentum', 'Constant speed', 'Constant kinetic energy', 'Constant potential energy'], a: 0, s: 'Angular momentum is conserved (no external torque). Speed varies — faster at perigee, slower at apogee.' },
        { q: 'To shift a satellite to a higher orbit, we must:', o: ['Increase its speed at current orbit', 'Decrease its speed', 'Fire retro-rockets', 'Change its direction'], a: 0, s: 'Increasing speed gives excess energy, causing it to spiral out to a higher orbit (Hohmann transfer).' },
        { q: 'The total energy of a satellite in a higher orbit compared to a lower orbit is:', o: ['Greater (less negative)', 'Smaller (more negative)', 'Same', 'Zero'], a: 0, s: 'E = -GMm/2r. Larger r means less negative → greater total energy.' },
      ],
      hard: [
        { q: 'A satellite has orbital speed v and escape speed from that orbit v_e. The relation is:', o: ['v_e = √2 · v', 'v_e = 2v', 'v_e = v', 'v_e = v/√2'], a: 0, s: 'v = √(GM/r) and v_e = √(2GM/r) = √2 · v.' },
        { q: 'The maximum and minimum distances of a comet from the Sun are 1.5 × 10¹² m and 5 × 10¹⁰ m. The speed at the closest point is 6 × 10⁴ m/s. The speed at the farthest point is:', o: ['2 × 10³ m/s', '6 × 10⁴ m/s', '3 × 10⁴ m/s', '1 × 10³ m/s'], a: 0, s: 'By conservation of angular momentum: v₁r₁ = v₂r₂ → v₂ = 6×10⁴ × 5×10¹⁰ / 1.5×10¹² = 2×10³ m/s.' },
        { q: 'An astronaut in an orbiting space station feels weightless because:', o: ['Both astronaut and station are in free fall', 'There is no gravity in space', 'The station shields from gravity', 'Centrifugal force cancels gravity'], a: 0, s: 'Weightlessness occurs because both the astronaut and station are in free fall (same acceleration).' },
        { q: 'The binding energy of a satellite increases when:', o: ['It moves to a lower orbit', 'It moves to a higher orbit', 'Its mass decreases', 'Earth\'s rotation speeds up'], a: 0, s: 'Binding energy = GMm/2r. Lower orbit (smaller r) → larger binding energy.' },
        { q: 'A binary star system has two stars of masses m and 3m separated by distance d. Their common revolution period is:', o: ['2π√(d³/4Gm)', '2π√(d³/Gm)', '2π√(d³/3Gm)', '2π√(d³/16Gm)'], a: 0, s: 'For binary system: T = 2π√(d³/G(m₁+m₂)) = 2π√(d³/4Gm).' },
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
        { q: 'Hooke\'s law states that stress is proportional to strain within the:', o: ['Elastic limit', 'Breaking point', 'Plastic region', 'Yield point'], a: 0, s: 'Hooke\'s law: Stress ∝ Strain, valid only within the elastic limit.' },
        { q: 'Young\'s modulus has the dimension of:', o: ['Stress (Pa)', 'Strain (dimensionless)', 'Force (N)', 'Energy (J)'], a: 0, s: 'Y = Stress/Strain. Since strain is dimensionless, Y has units of stress (Pa).' },
        { q: 'Which material has the highest Young\'s modulus?', o: ['Steel', 'Rubber', 'Glass', 'Wood'], a: 0, s: 'Steel has one of the highest Young\'s moduli among common materials (~200 GPa).' },
        { q: 'Bulk modulus is the ratio of:', o: ['Volumetric stress to volumetric strain', 'Linear stress to linear strain', 'Shear stress to shear strain', 'Tensile stress to tensile strain'], a: 0, s: 'Bulk modulus B = -V(dP/dV) = volumetric stress / volumetric strain.' },
        { q: 'Poisson\'s ratio is the ratio of:', o: ['Lateral strain to longitudinal strain', 'Longitudinal strain to lateral strain', 'Stress to strain', 'Volume change to original volume'], a: 0, s: 'Poisson\'s ratio σ = lateral strain / longitudinal strain.' },
      ],
      medium: [
        { q: 'A wire of length L and cross-sectional area A is stretched by force F. The extension is ΔL. Young\'s modulus is:', o: ['FL/(AΔL)', 'FA/(LΔL)', 'FΔL/(AL)', 'AL/(FΔL)'], a: 0, s: 'Y = (F/A)/(ΔL/L) = FL/(AΔL).' },
        { q: 'Two wires of same material have lengths L and 2L, and diameters d and 2d. The ratio of their extensions under the same force is:', o: ['1:1', '2:1', '1:2', '4:1'], a: 0, s: 'ΔL = FL/(AY). Ratio = (L/A₁)/(2L/A₂) = (L·π(2d)²)/(2L·πd²·4) = 4/(2·4) = 1/2. Wait: A₁=πd²/4, A₂=π(2d)²/4=πd². Ratio = (FL₁/A₁Y)/(FL₂/A₂Y) = (L·πd²)/(πd²/4·2L) = L·4/(2L) = 2:1. Actually (L/(πd²/4))/(2L/(π4d²/4)) = (4L/πd²)/(2L/πd²) = 2:1.' },
        { q: 'The compressibility of a material is:', o: ['Reciprocal of bulk modulus', 'Reciprocal of Young\'s modulus', 'Product of stress and strain', 'Ratio of shear modulus to bulk modulus'], a: 0, s: 'Compressibility = 1/B (reciprocal of bulk modulus).' },
        { q: 'The elastic energy stored per unit volume in a stretched wire is:', o: ['½ × stress × strain', 'stress × strain', '2 × stress × strain', 'stress / strain'], a: 0, s: 'Energy density = ½ × stress × strain = ½ × Y × strain².' },
        { q: 'For an incompressible material, Poisson\'s ratio is:', o: ['0.5', '0', '1', '-1'], a: 0, s: 'For incompressible materials, volume is conserved, giving σ = 0.5.' },
      ],
      hard: [
        { q: 'A copper wire and a steel wire of same length and same extension have cross-sectional areas in the ratio 3:1. The ratio of Young\'s moduli (steel:copper) is:', o: ['3:1', '1:3', '1:1', '9:1'], a: 0, s: 'Same extension, same length: Y = FL/(AΔL). Y_s/Y_c = A_c/A_s = 3/1 = 3:1.' },
        { q: 'A wire stretches by 1 mm under a load. If the wire is of half the radius and double the length, the extension under same load is:', o: ['8 mm', '4 mm', '2 mm', '16 mm'], a: 0, s: 'ΔL = FL/(πr²Y). New: r → r/2, L → 2L. ΔL\' = F·2L/(π(r/2)²Y) = 8FL/(πr²Y) = 8 mm.' },
        { q: 'An elastic rod of length L, area A, and Young\'s modulus Y is rotated about one end with angular velocity ω. The total extension is:', o: ['ρω²L³/(3Y)', 'ρω²L³/(6Y)', 'ρω²L²/(2Y)', 'ρω²L³/(Y)'], a: 0, s: 'By integration of centrifugal stress along the rod: ΔL = ρω²L³/(3Y).' },
        { q: 'The breaking stress of a wire does not depend on:', o: ['Length of the wire', 'Material of the wire', 'Temperature', 'Cross-sectional area'], a: 0, s: 'Breaking stress is a material property — independent of dimensions (length and area).' },
        { q: 'The relationship between Y (Young\'s), B (Bulk), and η (Shear modulus) for isotropic materials is:', o: ['9/Y = 3/η + 1/B', 'Y = 9Bη/(3B+η)', '1/Y = 1/B + 1/η', 'Y = B + η'], a: 1, s: 'For isotropic materials: Y = 9Bη/(3B+η), relating all three elastic moduli.' },
      ],
    },
    {
      name: 'Fluid Statics',
      slug: 'fluid-statics',
      easy: [
        { q: 'Pressure at a depth h in a fluid of density ρ is:', o: ['ρgh + P₀', 'ρgh', 'P₀/ρgh', 'ρg/h'], a: 0, s: 'P = P₀ + ρgh, where P₀ is atmospheric pressure.' },
        { q: 'Pascal\'s law states that:', o: ['Pressure applied to a confined fluid is transmitted equally in all directions', 'Fluid pressure increases with depth', 'Buoyant force equals weight of displaced fluid', 'Fluids cannot sustain shear stress'], a: 0, s: 'Pascal\'s law: pressure change at any point in an enclosed fluid is transmitted undiminished throughout.' },
        { q: 'Archimedes\' principle relates to:', o: ['Buoyant force', 'Viscous force', 'Surface tension', 'Capillary action'], a: 0, s: 'Archimedes\' principle: buoyant force = weight of fluid displaced by the body.' },
        { q: 'An object floats when its density is:', o: ['Less than fluid density', 'Greater than fluid density', 'Equal to fluid density', 'Independent of fluid density'], a: 0, s: 'An object floats if ρ_object < ρ_fluid (density is less than the fluid).' },
        { q: 'Atmospheric pressure is approximately:', o: ['1.013 × 10⁵ Pa', '1.013 × 10³ Pa', '9.8 × 10⁵ Pa', '760 Pa'], a: 0, s: '1 atm = 1.013 × 10⁵ Pa = 760 mm Hg.' },
      ],
      medium: [
        { q: 'A hydraulic press has piston areas A₁ and A₂ (A₂ > A₁). If force F₁ is applied on the smaller piston, force on larger piston is:', o: ['F₁A₂/A₁', 'F₁A₁/A₂', 'F₁(A₂-A₁)', 'F₁√(A₂/A₁)'], a: 0, s: 'By Pascal\'s law: P = F₁/A₁ = F₂/A₂ → F₂ = F₁A₂/A₁.' },
        { q: 'A cube of side L and density ρ_c floats in a liquid of density ρ_l. The depth submerged is:', o: ['L(ρ_c/ρ_l)', 'L(ρ_l/ρ_c)', 'L(1 - ρ_c/ρ_l)', 'L√(ρ_c/ρ_l)'], a: 0, s: 'Floating: ρ_c·L³·g = ρ_l·L²·d·g → d = L(ρ_c/ρ_l).' },
        { q: 'A U-tube contains two immiscible liquids of densities ρ₁ and ρ₂. The heights in equilibrium satisfy:', o: ['ρ₁h₁ = ρ₂h₂', 'h₁ = h₂', 'ρ₁/h₁ = ρ₂/h₂', 'ρ₁h₁² = ρ₂h₂²'], a: 0, s: 'Pressure equilibrium at the interface: ρ₁gh₁ = ρ₂gh₂ → ρ₁h₁ = ρ₂h₂.' },
        { q: 'The apparent weight of a body submerged in a fluid is:', o: ['W - ρ_fluid·V·g', 'W + ρ_fluid·V·g', 'W', 'ρ_fluid·V·g'], a: 0, s: 'Apparent weight = actual weight - buoyant force = W - ρ_f·V·g.' },
        { q: 'A body of density 5000 kg/m³ is weighed in air (W₁) and water (W₂). W₁/W₂ equals:', o: ['5/4', '4/5', '5', '4'], a: 0, s: 'W₂ = W₁(1 - ρ_water/ρ_body) = W₁(1-1/5) = 4W₁/5. So W₁/W₂ = 5/4.' },
      ],
      hard: [
        { q: 'A balloon of volume V is submerged at depth h in water. When released, the net upward force on it is (mass of balloon = m):', o: ['ρ_w·V·g - mg', 'mg - ρ_w·V·g', 'ρ_w·V·g', 'mg'], a: 0, s: 'Net force = Buoyancy - Weight = ρ_w·V·g - mg (acts upward if ρ_w·V > m).' },
        { q: 'A cylinder of height H, area A, and density ρ_c floats vertically in two layers: liquid 1 (density ρ₁, depth d₁) on top of liquid 2 (density ρ₂). The condition for equilibrium is:', o: ['ρ_c·H = ρ₁·d₁ + ρ₂·(H-d₁)', 'ρ_c = ρ₁ + ρ₂', 'ρ_c·H = ρ₁·H', 'ρ₁·d₁ = ρ₂·d₂'], a: 0, s: 'Weight = buoyancy from both layers: ρ_c·A·H·g = ρ₁·A·d₁·g + ρ₂·A·(H-d₁)·g.' },
        { q: 'An ice cube floats in water in a container. When the ice melts completely, the water level:', o: ['Remains the same', 'Rises', 'Falls', 'First rises then falls'], a: 0, s: 'Floating ice displaces water equal to its weight. When it melts, the volume of water equals the displaced volume. Level remains unchanged.' },
        { q: 'The gauge pressure at the bottom of a tank accelerating upward with acceleration a is:', o: ['ρh(g+a)', 'ρhg', 'ρh(g-a)', 'ρha'], a: 0, s: 'Effective gravity becomes g_eff = g+a. Gauge pressure = ρh(g+a).' },
        { q: 'A cylindrical vessel contains a liquid. When rotated with angular velocity ω, the surface becomes:', o: ['Paraboloid', 'Cone', 'Hemisphere', 'Flat'], a: 0, s: 'The free surface of a rotating liquid forms a paraboloid: y = ω²r²/(2g).' },
      ],
    },
    {
      name: 'Fluid Dynamics',
      slug: 'fluid-dynamics',
      easy: [
        { q: 'The equation of continuity states that:', o: ['A₁v₁ = A₂v₂', 'P₁ + ρv₁ = P₂ + ρv₂', 'F = 6πηrv', 'P = ρgh'], a: 0, s: 'Equation of continuity: A₁v₁ = A₂v₂ (for incompressible fluids).' },
        { q: 'Bernoulli\'s theorem is based on conservation of:', o: ['Energy', 'Mass', 'Momentum', 'Angular momentum'], a: 0, s: 'Bernoulli\'s equation (P + ½ρv² + ρgh = constant) is energy conservation per unit volume.' },
        { q: 'Reynolds number determines whether flow is:', o: ['Laminar or turbulent', 'Compressible or incompressible', 'Steady or unsteady', 'Rotational or irrotational'], a: 0, s: 'Reynolds number Re classifies flow: Re < 2000 → laminar, Re > 4000 → turbulent.' },
        { q: 'In streamline flow, the velocity of fluid at a given point:', o: ['Remains constant with time', 'Changes randomly', 'Increases with time', 'Decreases with time'], a: 0, s: 'In streamline (steady) flow, velocity at any point is constant over time.' },
        { q: 'Terminal velocity of a sphere falling through a viscous fluid is reached when:', o: ['Weight equals viscous drag + buoyancy', 'All forces are zero', 'Velocity equals zero', 'Acceleration is maximum'], a: 0, s: 'At terminal velocity: weight = buoyant force + viscous drag force. Net force = 0.' },
      ],
      medium: [
        { q: 'Water flows through a pipe of varying cross-section. Where the pipe narrows, the:', o: ['Velocity increases and pressure decreases', 'Velocity decreases and pressure increases', 'Both velocity and pressure increase', 'Both velocity and pressure decrease'], a: 0, s: 'By continuity: narrower → faster. By Bernoulli: faster → lower pressure.' },
        { q: 'The terminal velocity of a sphere of radius r falling in a fluid of viscosity η is:', o: ['2r²(ρ_s - ρ_f)g/(9η)', '9η/(2r²(ρ_s - ρ_f)g)', '2r(ρ_s - ρ_f)g/(9η)', '6πηrv'], a: 0, s: 'Terminal velocity v_t = 2r²(ρ_s - ρ_f)g/(9η) from Stokes\' law.' },
        { q: 'A venturi meter measures:', o: ['Flow rate of a fluid', 'Viscosity of a fluid', 'Density of a fluid', 'Pressure of a fluid'], a: 0, s: 'Venturi meter uses Bernoulli\'s principle to measure flow rate from pressure difference.' },
        { q: 'If the radius of a pipe is doubled, the rate of flow (using Poiseuille\'s law) becomes:', o: ['16 times', '4 times', '2 times', '8 times'], a: 0, s: 'Q = πPr⁴/(8ηL). Q ∝ r⁴. If r → 2r, Q → 16Q.' },
        { q: 'The coefficient of viscosity has the SI unit:', o: ['Pa·s', 'N/m', 'kg/m²', 'Pa/s'], a: 0, s: 'Viscosity η has SI unit Pascal-second (Pa·s) = kg/(m·s).' },
      ],
      hard: [
        { q: 'Water flows out of a hole at the bottom of a tank of height H. The range of the water jet is maximum when the hole is at height:', o: ['H/2', 'H/3', 'H/4', '2H/3'], a: 0, s: 'Range R = 2√(h(H-h)), maximized when h = H/2 (by AM-GM inequality).' },
        { q: 'The speed of efflux from a small hole at depth h below the surface of a liquid (Torricelli\'s theorem) is:', o: ['√(2gh)', '√(gh)', '2gh', 'gh²'], a: 0, s: 'Torricelli\'s theorem: v = √(2gh), same as a body falling from height h.' },
        { q: 'Two spheres of radii r and 2r fall through a viscous fluid. The ratio of their terminal velocities is:', o: ['1:4', '1:2', '1:8', '2:1'], a: 0, s: 'v_t ∝ r². Ratio = r²/(2r)² = 1/4 = 1:4.' },
        { q: 'A pitot tube on an aircraft measures:', o: ['Airspeed', 'Altitude', 'Air density', 'Air temperature'], a: 0, s: 'A pitot tube measures airspeed by comparing static and stagnation (total) pressures.' },
        { q: 'Magnus effect occurs when:', o: ['A spinning ball curves in flight', 'A fluid becomes turbulent', 'Pressure increases with speed', 'Viscosity depends on temperature'], a: 0, s: 'Magnus effect: a spinning ball creates a pressure difference, causing it to curve (e.g., swing bowling).' },
      ],
    },
    {
      name: 'Surface Tension & Capillarity',
      slug: 'surface-tension',
      easy: [
        { q: 'Surface tension has the dimension of:', o: ['Force per unit length', 'Force per unit area', 'Energy per unit volume', 'Force per unit mass'], a: 0, s: 'Surface tension = F/L → [MT⁻²] (force per unit length).' },
        { q: 'The excess pressure inside a soap bubble of radius R is:', o: ['4T/R', '2T/R', 'T/R', '8T/R'], a: 0, s: 'Soap bubble has two surfaces: ΔP = 4T/R (for liquid drops: 2T/R).' },
        { q: 'A meniscus is concave when the liquid:', o: ['Wets the surface', 'Does not wet the surface', 'Has high viscosity', 'Has low density'], a: 0, s: 'When liquid wets the surface (adhesion > cohesion), the meniscus is concave (e.g., water in glass).' },
        { q: 'Capillary rise is given by h =:', o: ['2T cos θ/(ρgr)', '2T/(ρgr)', 'Tρgr/2', '2ρgr/(T cos θ)'], a: 0, s: 'Capillary rise: h = 2T cos θ/(ρgr), where θ is contact angle.' },
        { q: 'The contact angle for mercury in a glass tube is:', o: ['Greater than 90°', 'Less than 90°', 'Exactly 90°', 'Zero'], a: 0, s: 'Mercury does not wet glass — contact angle > 90° (~140°), causing capillary depression.' },
      ],
      medium: [
        { q: 'If a soap bubble of radius R₁ coalesces with one of radius R₂ to form a bubble of radius R, then (assuming isothermal process):', o: ['R² = R₁² + R₂²', 'R = R₁ + R₂', 'R³ = R₁³ + R₂³', '1/R = 1/R₁ + 1/R₂'], a: 0, s: 'Using 4T/R·(4/3)πR³ = sum of PV for both bubbles: R² = R₁² + R₂².' },
        { q: 'A drop of water breaks into n identical droplets. The work done against surface tension is:', o: ['4πR²T(n^(1/3) - 1)', '4πR²Tn', '4πR²T(n-1)', '4πR²T/n'], a: 0, s: 'Volume conserved: R³ = nr³ → r = R/n^(1/3). Work = T(n·4πr² - 4πR²) = 4πR²T(n^(1/3) - 1).' },
        { q: 'The force needed to detach a circular ring of radius R from the surface of a liquid is:', o: ['4πRT', '2πRT', 'πR²T', '2πR²T'], a: 0, s: 'The ring has inner and outer edges: F = 2(2πR)T = 4πRT.' },
        { q: 'If capillary tube radius is halved, the rise will:', o: ['Double', 'Halve', 'Quadruple', 'Remain same'], a: 0, s: 'h = 2T cos θ/(ρgr). h ∝ 1/r. If r → r/2, h → 2h.' },
        { q: 'Surface energy is numerically equal to:', o: ['Surface tension', 'Pressure', 'Force', 'Viscosity'], a: 0, s: 'Surface tension (force/length) = surface energy (energy/area). Both have same numerical value and units [MT⁻²].' },
      ],
      hard: [
        { q: 'A capillary tube of insufficient length l (l < h, where h is normal capillary rise) is placed vertically in water. The water will:', o: ['Rise to top without overflowing', 'Overflow from the top', 'Rise to height h regardless', 'Not rise at all'], a: 0, s: 'Water rises to the top and adjusts the meniscus curvature (becomes flatter). It does not overflow.' },
        { q: 'The energy required to blow a soap bubble of radius R is:', o: ['8πR²T', '4πR²T', '16πR²T', '2πR²T'], a: 0, s: 'Soap bubble has two surfaces. Energy = T × total area = T × 2(4πR²) = 8πR²T.' },
        { q: 'Two soap bubbles of radii R₁ and R₂ (R₁ > R₂) are connected. Air will flow:', o: ['From smaller to larger bubble', 'From larger to smaller bubble', 'No flow occurs', 'Depends on temperature'], a: 0, s: 'Pressure inside smaller bubble (4T/R₂) > larger (4T/R₁). Air flows from smaller to larger.' },
        { q: 'The angle of contact depends on:', o: ['Nature of solid-liquid pair and surrounding medium', 'Only on the liquid', 'Only on the solid', 'Temperature only'], a: 0, s: 'Contact angle depends on the solid surface, the liquid, and the surrounding medium (all three interfaces).' },
        { q: 'A thin liquid film formed on a rectangular frame of width w is pulled by force F. The surface tension is:', o: ['F/(2w)', 'F/w', '2F/w', 'F/(4w)'], a: 0, s: 'Film has two surfaces. F = T × 2w → T = F/(2w).' },
      ],
    },
  ],
};

export const physGravPropChapters: ChapterData[] = [gravitation, propertiesOfMatter];
