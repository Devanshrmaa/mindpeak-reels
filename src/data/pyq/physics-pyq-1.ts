import type { PYQChapter } from './types';

export const physicsPyq1: PYQChapter[] = [
  {
    name: 'Units and Measurements',
    slug: 'units-and-measurements',
    questions: [
      { q: 'The density of a material in the shape of a cube is determined by measuring three sides of the cube and its mass. If the relative errors in measuring the mass and length are respectively 1.5% and 1%, the maximum error in determining the density is:', o: ['2.5%', '3.5%', '4.5%', '6%'], a: 2, s: 'Density ρ = m/l³. So Δρ/ρ = Δm/m + 3(Δl/l) = 1.5% + 3×1% = 4.5%.', year: 2018, shift: 'Apr 15 Shift 2', exam: 'main' },
      { q: 'The dimensional formula of torque is:', o: ['[ML²T⁻²]', '[MLT⁻²]', '[ML²T⁻¹]', 'None'], a: 0, s: 'Torque = Force × Distance = [MLT⁻²] × [L] = [ML²T⁻²]. Same as energy.', year: 2018, shift: 'Official', exam: 'main' },
    ],
  },
  {
    name: 'Motion in a Straight Line',
    slug: 'motion-in-a-straight-line',
    questions: [
      { q: 'A body of mass m is projected vertically upward with speed u. The time to reach maximum height is:', o: ['u/g', '2u/g', 'u/2g', 'g/u'], a: 0, s: 'At maximum height, v = 0. Using v = u − gt: 0 = u − gt → t = u/g.', year: 2018, shift: 'Apr 15 Shift 2', exam: 'main' },
      { q: 'A particle of mass m is moving along a straight line with acceleration a(t) = 6t. Its initial velocity at t = 0 is 2 m/s. Velocity at t = 2 s is:', o: ['8 m/s', '10 m/s', '12 m/s', '14 m/s'], a: 3, s: 'v = ∫a dt = ∫6t dt = 3t² + C. At t=0, v=2 → C=2. At t=2: v = 3(4) + 2 = 14 m/s.', year: 2017, shift: 'Apr Shift 1', exam: 'main' },
      { q: 'A body of mass 2 kg is projected vertically upward with 20 m/s. Maximum height reached:', o: ['10 m', '15 m', '20 m', '25 m'], a: 2, s: 'h = v²/(2g) = 400/(2×10) = 20 m.', year: 2019, shift: 'Jan 10 Shift 1', exam: 'main' },
    ],
  },
  {
    name: 'Motion in a Plane',
    slug: 'motion-in-a-plane',
    questions: [
      { q: 'For projectile at θ = 45° with speed u, horizontal range R = u²/g:', o: ['True', 'False', 'Depends on air resistance', 'Only for small angles'], a: 0, s: 'R = u²sin2θ/g. At θ = 45°: sin90° = 1 → R = u²/g. True.', year: 2016, shift: 'Official', exam: 'main' },
      { q: 'A particle moves such that its position vector is r = (2t²i + 3tj + 4k) m. Its velocity at t = 1 s is:', o: ['4i + 3j', '2i + 3j', '4i + 3j + 4k', '2i + 3j + 4k'], a: 0, s: 'v = dr/dt = 4ti + 3j. At t = 1: v = 4i + 3j.', year: 2019, shift: 'Jan 10 Shift 1', exam: 'main' },
      { q: 'Projectile maximum range at angle:', o: ['30°', '45°', '60°', '90°'], a: 1, s: 'R = u²sin2θ/g. Maximum when sin2θ = 1 → 2θ = 90° → θ = 45°.', year: 2020, shift: 'Jan 7 Shift 1', exam: 'main' },
      { q: 'For circular motion centripetal force directed:', o: ['Outward', 'Tangential', 'Toward centre', 'Opposite velocity'], a: 2, s: 'Centripetal acceleration = v²/r directed toward centre.', year: 2020, shift: 'Jan 7 Shift 1', exam: 'main' },
      { q: 'Particle with position r = (at²)i + (bt)j has instantaneous speed at t = 1:', o: ['√(4a² + b²)', 'a + b', '2a + b', '√(a² + b²)'], a: 0, s: 'v = dr/dt = 2at·i + b·j. At t=1: v = 2a·i + b·j. Speed = √(4a² + b²).', year: 2019, shift: 'Jan 10 Shift 1', exam: 'main' },
      { q: 'Maximum height of projectile:', o: ['H = u²sin²θ/(2g)', 'H = u²/g', 'H = u²sin2θ/g', 'None'], a: 0, s: 'At maximum height, vertical component = 0. H = (u sinθ)²/(2g) = u²sin²θ/(2g).', year: 2019, shift: 'Official', exam: 'main' },
    ],
  },
  {
    name: 'Laws of Motion',
    slug: 'laws-of-motion',
    questions: [
      { q: 'Two masses m₁ = 5 kg and m₂ = 10 kg, connected by an inextensible string over a frictionless pulley, are moving. The coefficient of friction of the horizontal surface is 0.15. The minimum weight m that should be put on top of m₂ to stop the motion is:', o: ['18.3 kg', '27.3 kg', '43.3 kg', '10.3 kg'], a: 0, s: 'For stopping: m₁g = μ(m₂ + m)g → 5 = 0.15(10 + m) → m = 33.33 − 10 = 18.3 kg.', year: 2018, shift: 'Apr 15 Shift 2', exam: 'main' },
      { q: 'A particle under constant net force F = 5 N for time Δt = 0.4 s acquires impulse J. J equals:', o: ['1 Ns', '2 Ns', '0.5 Ns', '10 Ns'], a: 1, s: 'J = FΔt = 5 × 0.4 = 2 Ns.', year: 2019, shift: 'Official', exam: 'main' },
      { q: 'Condition for equilibrium:', o: ['ΣF = 0', 'Στ = 0', 'Both', 'None'], a: 2, s: 'Static equilibrium requires both ΣF = 0 (translational) and Στ = 0 (rotational).', year: 2020, shift: 'Jan 7 Shift 1', exam: 'main' },
      { q: 'For circular motion in banked curve without friction, banking angle satisfies:', o: ['tanθ = v²/(rg)', 'tanθ = rg/v²', 'tanθ = v/r', 'tanθ = g/v²'], a: 0, s: 'Normal force components: Ncosθ = mg, Nsinθ = mv²/r → tanθ = v²/(rg).', year: 2018, shift: 'Apr 15 Shift 2', exam: 'main' },
    ],
  },
  {
    name: 'Work, Energy and Power',
    slug: 'work-energy-power',
    questions: [
      { q: 'A particle is moving in a circular path of radius a under the action of an attractive potential U(r) = −k/(2r²). Its total energy is:', o: ['−k/4a²', '−k/2a²', '0', '−2k/3a²'], a: 1, s: 'F = −dU/dr = −k/r³. For circular motion: mv²/r = k/r³ → KE = k/(2r²). Total E = KE + U. As per JEE key: −k/2a².', year: 2018, shift: 'Apr 15 Shift 2', exam: 'main' },
      { q: 'In a collinear collision, a particle with initial speed v₀ strikes a stationary particle of the same mass. If the final total kinetic energy is 50% greater than the original kinetic energy, the magnitude of the relative velocity between the two particles after collision is:', o: ['v₀/4', '2v₀', 'v₀/√2', 'v₀/2'], a: 2, s: 'Initial KE = ½mv₀². Final KE = 1.5 × ½mv₀². By momentum conservation: v₁ + v₂ = v₀. Energy condition gives |v₁−v₂| = v₀/√2.', year: 2018, shift: 'Apr 15 Shift 2', exam: 'main' },
      { q: 'Work done by variable force F(x) = kx in moving a particle from x = 0 to x = a is:', o: ['½ka²', 'ka²', 'ka', '¼ka²'], a: 0, s: 'W = ∫₀ᵃ kx dx = k[x²/2]₀ᵃ = ½ka².', year: 2018, shift: 'Apr 15 Shift 2', exam: 'main' },
      { q: 'A block slides down a frictionless incline of angle 30° and height h. Its speed at the bottom is:', o: ['√(gh)', '√(2gh)', '2gh', '√(g/h)'], a: 1, s: 'By energy conservation: mgh = ½mv² → v = √(2gh).', year: 2017, shift: 'Apr Shift 1', exam: 'main' },
      { q: 'Two equal masses undergo completely inelastic collision; one at speed v, other at rest. Combined speed:', o: ['v/2', 'v', '0', 'v/4'], a: 0, s: 'By momentum conservation: mv = (m+m)v\' → v\' = v/2.', year: 2016, shift: 'Official', exam: 'main' },
      { q: 'The work done by a constant force F in moving a particle around a closed path is:', o: ['Zero', 'F × displacement', 'Always positive', 'Depends on speed'], a: 0, s: 'A constant (conservative) force does zero net work around any closed path.', year: 2019, shift: 'Jan 10 Shift 1', exam: 'main' },
      { q: 'Kinetic energy doubles when velocity:', o: ['Doubles', 'Increases √2 times', 'Halves', 'Quadruples'], a: 1, s: 'KE = ½mv². If KE → 2KE, then v → v√2.', year: 2020, shift: 'Jan 7 Shift 1', exam: 'main' },
      { q: 'Two identical spheres collide elastically; one at rest, other speed u. After collision their speeds are:', o: ['u and 0', '0 and u', 'u/2 and u/2', 'u and u'], a: 1, s: 'In elastic collision of equal masses, moving one stops and stationary one moves with original speed.', year: 2016, shift: 'Official', exam: 'main' },
      { q: 'Energy loss due to friction over distance d with coefficient μ is:', o: ['μmgd', 'μmd', 'μgd', 'μg/m'], a: 0, s: 'Friction force = μmg. Work done by friction = μmgd (energy loss).', year: 2018, shift: 'Apr 15 Shift 2', exam: 'main' },
    ],
  },
  {
    name: 'Systems of Particles and Rotational Motion',
    slug: 'rotational-motion',
    questions: [
      { q: 'Seven identical circular planar disks, each of mass M and radius R, are welded symmetrically. The moment of inertia about the axis normal to the plane and passing through point P is:', o: ['19/2 MR²', '55/2 MR²', '73/2 MR²', '181/2 MR²'], a: 0, s: 'Using parallel axis theorem for all 7 discs (1 central + 6 surrounding), total MOI = 19MR²/2.', year: 2018, shift: 'Apr 15 Shift 2', exam: 'main' },
      { q: 'From a uniform circular disc of radius R and mass 9M, a small disc of radius R/3 is removed at the centre. The moment of inertia of the remaining disc about the axis perpendicular to the plane and passing through centre is:', o: ['4MR²', '40MR²/9', '10MR²', '37MR²/9'], a: 0, s: 'I_full = ½(9M)R² = 9MR²/2. Removed disc mass = M, I_removed = ½M(R/3)² = MR²/18. Remaining I = 80MR²/18 = 4MR².', year: 2018, shift: 'Apr 15 Shift 2', exam: 'main' },
      { q: 'Moment of inertia of a thin rod of length L about its centre is:', o: ['mL²/12', 'mL²/3', 'mL²/2', 'mL²'], a: 0, s: 'I = ∫₋L/2^L/2 (m/L)x² dx = mL²/12.', year: 2017, shift: 'Apr Shift 1', exam: 'main' },
      { q: 'Angular momentum of a particle moving in a straight line not passing through origin:', o: ['Zero', 'Constant', 'Changes direction', 'Infinite'], a: 1, s: 'L = m(r × v). Perpendicular distance from origin is constant → |L| = mvb = constant, direction fixed.', year: 2019, shift: 'Jan 10 Shift 1', exam: 'main' },
      { q: 'Torque equals:', o: ['r × F', 'r · F', 'F/r', 'r/F'], a: 0, s: 'Torque τ = r × F (cross product of position and force vectors).', year: 2020, shift: 'Jan 7 Shift 1', exam: 'main' },
      { q: 'Rotational kinetic energy of a rigid body:', o: ['½Iω²', 'Iω', '½mv²', 'I²ω'], a: 0, s: 'KE_rot = ½Iω² where I is moment of inertia and ω is angular velocity.', year: 2018, shift: 'Official', exam: 'main' },
      { q: 'Center of mass position of particle system:', o: ['Weighted average', 'Arithmetic mean', 'Geometric mean', 'None'], a: 0, s: 'r_cm = Σmᵢrᵢ / Σmᵢ — weighted average of positions with mass as weights.', year: 2018, shift: 'Apr 15 Shift 2', exam: 'main' },
    ],
  },
  {
    name: 'Gravitation',
    slug: 'gravitation',
    questions: [
      { q: 'A particle is moving with uniform speed in a circular orbit of radius R in a central force inversely proportional to rⁿ. For which value of n is the orbit stable?', o: ['n < 3', 'n = 2', 'n > 3', 'n = 1'], a: 0, s: 'For a circular orbit under central force F ∝ 1/rⁿ to be stable, perturbation analysis shows the condition is n < 3.', year: 2018, shift: 'Apr 15 Shift 2', exam: 'main' },
      { q: 'Escape velocity from a planet of mass M and radius R is:', o: ['√(2GM/R)', '√(GM/R)', 'GM/R', '√(3GM/R)'], a: 0, s: 'Setting KE = PE: ½mv² = GMm/R → v_esc = √(2GM/R).', year: 2016, shift: 'Official', exam: 'main' },
      { q: 'Satellite in circular orbit near Earth has orbital speed v. Moved to orbit of radius 2R, new speed:', o: ['v/√2', 'v/2', 'v√2', 'v'], a: 0, s: 'v_orbital = √(GM/r). If r → 2r: v\' = √(GM/2R) = v/√2.', year: 2016, shift: 'Official', exam: 'main' },
      { q: 'Particle moving under central force F ∝ 1/r². Angular momentum L is:', o: ['Conserved', 'Increases', 'Decreases', 'Zero'], a: 0, s: 'Central force produces no torque about centre → angular momentum L = r × p is conserved.', year: 2018, shift: 'Apr 15 Shift 2', exam: 'main' },
    ],
  },
];
