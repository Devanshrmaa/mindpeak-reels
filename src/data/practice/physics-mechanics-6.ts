import type { ChapterData } from './types';

/* ─── Chapter: Satellite Motion & Orbital Mechanics ─── */
const satelliteMotion: ChapterData = {
  name: 'Satellite Motion & Orbital Mechanics',
  slug: 'satellite-orbital-mechanics',
  topics: [
    {
      name: 'Orbital Velocity & Period',
      slug: 'orbital-velocity-period',
      easy: [
        { q: 'The orbital velocity of a satellite close to Earth\'s surface is approximately:', o: ['7.9 km/s', '11.2 km/s', '3.1 km/s', '15 km/s'], a: 0, s: 'v₀ = √(gR) = √(9.8 × 6.4 × 10⁶) ≈ 7.9 km/s.' },
        { q: 'The time period of a geostationary satellite is:', o: ['24 hours', '12 hours', '1 hour', '365 days'], a: 0, s: 'Geostationary satellite orbits Earth once in 24 hours, matching Earth\'s rotation.' },
        { q: 'Escape velocity from Earth is approximately:', o: ['11.2 km/s', '7.9 km/s', '3.1 km/s', '15 km/s'], a: 0, s: 'v_e = √(2gR) = √2 × v₀ ≈ 11.2 km/s.' },
        { q: 'The ratio of escape velocity to orbital velocity is:', o: ['√2', '2', '1/√2', '1/2'], a: 0, s: 'v_e/v₀ = √(2gR)/√(gR) = √2.' },
        { q: 'A geostationary satellite orbits in the:', o: ['Equatorial plane', 'Polar plane', 'Any inclined plane', 'Along the meridian'], a: 0, s: 'Geostationary satellites orbit in the equatorial plane at ~35,786 km altitude.' },
      ],
      medium: [
        { q: 'If the radius of Earth doubles (mass unchanged), the escape velocity will:', o: ['Decrease by factor √2', 'Increase by factor √2', 'Double', 'Halve'], a: 0, s: 'v_e = √(2GM/R). R → 2R: v_e → v_e/√2.' },
        { q: 'The total energy of an orbiting satellite of mass m at radius r is:', o: ['-GMm/(2r)', '-GMm/r', 'GMm/(2r)', 'GMm/r'], a: 0, s: 'E = KE + PE = GMm/(2r) − GMm/r = −GMm/(2r).' },
        { q: 'If a satellite\'s orbital radius is doubled, its time period becomes:', o: ['2√2 times', '2 times', '√2 times', '4 times'], a: 0, s: 'T ∝ r³/². If r → 2r, T → 2³/² = 2√2 times.' },
        { q: 'Two satellites orbit Earth at radii r and 4r. The ratio of their orbital speeds is:', o: ['2:1', '1:2', '4:1', '1:4'], a: 0, s: 'v ∝ 1/√r. v₁/v₂ = √(4r/r) = 2.' },
        { q: 'The minimum energy needed to move a satellite from orbit r to orbit 2r is:', o: ['GMm/(4r)', 'GMm/(2r)', 'GMm/r', '3GMm/(4r)'], a: 0, s: 'E₁ = −GMm/(2r), E₂ = −GMm/(4r). ΔE = GMm/(2r) − GMm/(4r) = GMm/(4r).' },
        { q: 'For a satellite in circular orbit, the kinetic energy equals:', o: ['Negative of total energy', 'Total energy', 'Half the potential energy', 'Twice the total energy'], a: 0, s: 'KE = GMm/(2r) = −E (negative of total energy). Also KE = −PE/2.' },
      ],
      hard: [
        { q: 'A satellite in circular orbit at height h has speed v. To escape from this orbit, the minimum additional speed needed is:', o: ['v(√2 − 1)', 'v', 'v√2', 'v/√2'], a: 0, s: 'Escape speed from orbit = v√2. Additional speed = v√2 − v = v(√2 − 1).' },
        { q: 'If Earth suddenly shrinks to half its radius (mass same), a satellite orbiting at radius 2R from centre will:', o: ['Continue in the same orbit', 'Fall to new surface', 'Escape to infinity', 'Orbit at radius R'], a: 0, s: 'Orbit depends on mass and distance from centre, not Earth\'s radius. Orbit unchanged.' },
        { q: 'An astronaut in an orbiting satellite feels weightless because:', o: ['Both astronaut and satellite have same acceleration', 'Gravity is zero', 'Centrifugal force cancels gravity', 'Air resistance is zero'], a: 0, s: 'Both have same free-fall acceleration (centripetal = gravitational). Normal force = 0.' },
        { q: 'The orbital velocity of a satellite at height h above Earth (radius R, mass M) is:', o: ['√(GM/(R+h))', '√(GM/R)', '√(gR²/(R+h))', 'Both A and C'], a: 3, s: 'v = √(GM/(R+h)). Also GM = gR², so v = √(gR²/(R+h)). Both are correct.' },
      ],
    },
    {
      name: 'Kepler\'s Laws',
      slug: 'keplers-laws',
      easy: [
        { q: 'Kepler\'s first law states that planets move in:', o: ['Elliptical orbits with Sun at one focus', 'Circular orbits', 'Parabolic paths', 'Hyperbolic orbits'], a: 0, s: 'Kepler\'s 1st law: planets orbit in ellipses with the Sun at one focus.' },
        { q: 'Kepler\'s second law (law of areas) implies conservation of:', o: ['Angular momentum', 'Linear momentum', 'Energy', 'Mass'], a: 0, s: 'Equal areas in equal times → areal velocity constant → angular momentum conserved.' },
        { q: 'According to Kepler\'s third law, T² is proportional to:', o: ['r³', 'r²', 'r', 'r⁴'], a: 0, s: 'T² ∝ r³ (cube of semi-major axis).' },
        { q: 'A planet moves fastest when it is:', o: ['Closest to the Sun (perihelion)', 'Farthest from the Sun', 'At average distance', 'At quadrature'], a: 0, s: 'By Kepler\'s 2nd law: closer → must sweep same area → moves faster.' },
        { q: 'If the distance between a planet and Sun doubles, the time period becomes:', o: ['2√2 times', '2 times', '4 times', '8 times'], a: 0, s: 'T ∝ r³/². r → 2r: T → 2³/² = 2√2 times.' },
      ],
      medium: [
        { q: 'Two planets have orbital radii r₁ and r₂ around the Sun. The ratio of their time periods T₁/T₂ is:', o: ['(r₁/r₂)³/²', '(r₁/r₂)²', 'r₁/r₂', '(r₁/r₂)¹/²'], a: 0, s: 'T ∝ r³/² → T₁/T₂ = (r₁/r₂)³/².' },
        { q: 'If Earth\'s orbital radius were 4 times its current value, the year would be:', o: ['8 years', '4 years', '2 years', '16 years'], a: 0, s: 'T ∝ r³/². r → 4r: T → 4³/² = 8 times = 8 years.' },
        { q: 'The areal velocity of a planet is constant. This means:', o: ['The gravitational force is central', 'The orbit is circular', 'Speed is constant', 'Acceleration is constant'], a: 0, s: 'Constant areal velocity ↔ no torque about Sun ↔ central force (directed toward Sun).' },
        { q: 'For an elliptical orbit with semi-major axis a and eccentricity e, the perihelion distance is:', o: ['a(1 − e)', 'a(1 + e)', 'a/e', 'ae'], a: 0, s: 'Perihelion = a(1 − e), Aphelion = a(1 + e).' },
        { q: 'The gravitational PE of a planet at distance r from the Sun (mass M) is:', o: ['−GMm/r', 'GMm/r', '−GMm/r²', 'GMm/r²'], a: 0, s: 'Gravitational PE = −GMm/r (negative, as zero reference at infinity).' },
      ],
      hard: [
        { q: 'A comet has perihelion distance r_p and aphelion distance r_a. Its speed at perihelion v_p is related to speed at aphelion v_a by:', o: ['v_p/v_a = r_a/r_p', 'v_p/v_a = r_p/r_a', 'v_p = v_a', 'v_p/v_a = (r_a/r_p)²'], a: 0, s: 'Conservation of angular momentum: mv_p × r_p = mv_a × r_a → v_p/v_a = r_a/r_p.' },
        { q: 'If a planet\'s orbit has eccentricity e = 0.5, the ratio of max speed to min speed is:', o: ['3', '2', '1.5', '4'], a: 0, s: 'v_max/v_min = r_a/r_p = (1+e)/(1−e) = 1.5/0.5 = 3.' },
        { q: 'The time period of a satellite orbiting a planet of density ρ at a distance just above the surface is:', o: ['√(3π/(Gρ))', '√(3π/(ρg))', '2π√(R/g)', '2πR/v'], a: 0, s: 'T = 2π√(R³/(GM)) = 2π√(R³/(G × 4/3πR³ρ)) = 2π√(3/(4πGρ)) = √(3π/(Gρ)).' },
        { q: 'A binary star system has two stars of masses m₁ and m₂ orbiting their common centre of mass with period T. Their separation d is given by:', o: ['d³ = G(m₁+m₂)T²/(4π²)', 'd² = G(m₁+m₂)T²/(4π²)', 'd³ = Gm₁m₂T²/(4π²)', 'd = GT²(m₁+m₂)'], a: 0, s: 'Kepler\'s third law for binary: d³ = G(m₁+m₂)T²/(4π²).' },
      ],
    },
  ],
};

export const satelliteKeplerChapters: ChapterData[] = [satelliteMotion];
