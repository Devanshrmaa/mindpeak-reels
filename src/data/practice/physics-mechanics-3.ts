import type { ChapterData } from './types';

/* ─── Chapter 5: Centre of Mass & Collisions ─── */
const centreMassCollisions: ChapterData = {
  name: 'Centre of Mass & Collisions',
  slug: 'centre-of-mass',
  topics: [
    {
      name: 'Centre of Mass',
      slug: 'centre-of-mass-basics',
      easy: [
        { q: 'The centre of mass of two equal masses separated by distance d is at:', o: ['Midpoint (d/2 from each)', 'At one of the masses', 'd/3 from one mass', 'd/4 from one mass'], a: 0, s: 'For equal masses, COM is at the midpoint.' },
        { q: 'The centre of mass of a uniform semicircular ring of radius R is at:', o: ['2R/π from centre', 'R/2 from centre', 'R/π from centre', 'At the centre'], a: 0, s: 'For a semicircular ring, ȳ = 2R/π above the centre of the diameter.' },
        { q: 'The centre of mass of a system of particles depends on:', o: ['Masses and positions of particles', 'Only masses', 'Only positions', 'Velocities of particles'], a: 0, s: 'COM = Σmᵢrᵢ/Σmᵢ, depending on both masses and positions.' },
        { q: 'If no external force acts, the centre of mass of a system:', o: ['Moves with constant velocity', 'Accelerates', 'Remains at origin', 'Oscillates'], a: 0, s: 'Without external forces, the COM maintains its velocity (could be zero or constant non-zero).' },
        { q: 'Two masses 1 kg and 3 kg are at x = 0 and x = 4 m. The COM is at:', o: ['x = 3 m', 'x = 2 m', 'x = 1 m', 'x = 4 m'], a: 0, s: 'x_cm = (1×0 + 3×4)/(1+3) = 12/4 = 3 m.' },
      ],
      medium: [
        { q: 'A uniform disc of radius R has a circular hole of radius R/2 cut at a distance R/2 from centre. The COM shifts by:', o: ['R/6 from original centre', 'R/4', 'R/2', 'R/3'], a: 0, s: 'Mass of disc ∝ R². Removed mass ∝ (R/2)² = R²/4. Shift = (m_hole × d)/(m_disc - m_hole) = (¼ × R/2)/(1-¼) = R/8 ÷ 3/4 = R/6.' },
        { q: 'A 60 kg person stands on one end of a 4 m boat (40 kg) on still water. If the person walks to the other end, the boat moves:', o: ['2.4 m', '4 m', '1.6 m', '0 m'], a: 0, s: 'COM stays fixed. Person moves 4 m. Δx_boat = m_person × 4/(m_person + m_boat) = 60×4/100 = 2.4 m (opposite direction).' },
        { q: 'The velocity of COM of two particles of mass 2 kg (v = 3 m/s) and 4 kg (v = −1 m/s) is:', o: ['⅓ m/s', '1 m/s', '2 m/s', '0 m/s'], a: 0, s: 'v_cm = (2×3 + 4×(-1))/(2+4) = (6-4)/6 = 2/6 = ⅓ m/s.' },
        { q: 'The COM of a uniform triangular lamina is at:', o: ['Centroid (⅓ of median from base)', 'At the apex', 'At the midpoint of base', 'At the incentre'], a: 0, s: 'The COM of a uniform triangular lamina is at its centroid, which is ⅓ of the way from each side.' },
        { q: 'A shell explodes into two pieces mid-air. The centre of mass:', o: ['Continues on its original parabolic path', 'Stops immediately', 'Takes a new path', 'Falls straight down'], a: 0, s: 'Internal forces don\'t change COM motion. The COM continues on the original trajectory.' },
      ],
      hard: [
        { q: 'A uniform solid hemisphere of radius R has its COM at:', o: ['3R/8 from flat face', 'R/2 from flat face', 'R/4 from flat face', '3R/4 from flat face'], a: 0, s: 'For a solid hemisphere: ȳ = 3R/8 from the flat face, derived by integration.' },
        { q: 'Two blocks m₁ = 2 kg and m₂ = 4 kg on a smooth surface are connected by a spring. m₁ is given velocity 6 m/s. The maximum PE stored in the spring is:', o: ['24 J', '36 J', '12 J', '48 J'], a: 0, s: 'In COM frame: v₁_cm = 6 - 2 = 4, v₂_cm = -2. KE_cm = ½(2)(4²) + ½(4)(2²) = 16+8 = 24 J. Wait: v_cm = 2(6)/6 = 2. v₁\' = 4, v₂\' = -2. KE_rel = ½μv_rel² = ½(4/3)(6²) = 24 J. Max PE = 24 J when relative velocity = 0.' },
        { q: 'A uniform rod of length L and mass M lies on a smooth surface. An impulse J is applied at one end perpendicular to the rod. The velocity of the centre is:', o: ['J/M', '2J/M', 'J/(2M)', '3J/M'], a: 0, s: 'Impulse on COM: J = Mv_cm → v_cm = J/M. The impulse also creates angular velocity ω = 6J/(ML) but COM velocity is simply J/M.' },
        { q: 'A ball of mass m moving at velocity v hits a stationary ball of mass 2m. If the collision is perfectly inelastic, the velocity of the combined mass is:', o: ['v/3', 'v/2', '2v/3', 'v'], a: 0, s: 'Conservation of momentum: mv = 3m·v_f → v_f = v/3.' },
        { q: 'A rocket of mass M ejects mass dm at relative velocity u. The change in rocket velocity dv is given by the Tsiolkovsky equation as:', o: ['dv = -u(dm/M)', 'dv = u·dm', 'dv = u/m', 'dv = -u·m·dm'], a: 0, s: 'From conservation of momentum: Mdv = -u·dm → dv = -u(dm/M). Integrating gives Δv = u·ln(M₀/M_f).' },
      ],
    },
    {
      name: 'Collisions',
      slug: 'collisions',
      easy: [
        { q: 'In a perfectly elastic collision:', o: ['Both momentum and KE are conserved', 'Only momentum is conserved', 'Only KE is conserved', 'Neither is conserved'], a: 0, s: 'Elastic collision: both momentum and kinetic energy are conserved.' },
        { q: 'In a perfectly inelastic collision, the bodies:', o: ['Stick together', 'Bounce apart', 'Break into pieces', 'Pass through each other'], a: 0, s: 'Perfectly inelastic = maximum KE loss. Bodies stick and move together.' },
        { q: 'Coefficient of restitution for a perfectly elastic collision is:', o: ['1', '0', '0.5', 'Infinity'], a: 0, s: 'e = 1 for elastic, e = 0 for perfectly inelastic.' },
        { q: 'A ball hits a wall and bounces back with the same speed. The collision is:', o: ['Perfectly elastic', 'Perfectly inelastic', 'Partially inelastic', 'Not a collision'], a: 0, s: 'Same speed after bounce means e = 1 → perfectly elastic.' },
        { q: 'In any collision, the quantity always conserved is:', o: ['Momentum', 'Kinetic energy', 'Potential energy', 'Speed'], a: 0, s: 'Momentum is always conserved in all collisions (assuming no external forces).' },
      ],
      medium: [
        { q: 'A 2 kg ball moving at 4 m/s collides head-on elastically with a 2 kg stationary ball. After collision:', o: ['First stops, second moves at 4 m/s', 'Both move at 2 m/s', 'First moves at 4 m/s, second stays', 'Both move at 4 m/s'], a: 0, s: 'In elastic head-on collision between equal masses, velocities are exchanged.' },
        { q: 'A ball dropped from height h bounces to height h/4. The coefficient of restitution is:', o: ['0.5', '0.25', '0.75', '1/√2'], a: 0, s: 'e = √(h₂/h₁) = √(h/4 / h) = √(1/4) = 0.5.' },
        { q: 'In an oblique elastic collision with a stationary equal mass, the two bodies move at:', o: ['90° to each other', '180° to each other', '45° to each other', '0° to each other'], a: 0, s: 'In 2D elastic collision between equal masses (one stationary), they always scatter at 90°.' },
        { q: 'A 1 kg ball at 10 m/s collides with a 4 kg ball at rest. If e = 0.5, the velocity of 1 kg ball after collision is:', o: ['-2 m/s', '0 m/s', '2 m/s', '-4 m/s'], a: 0, s: 'Using v₁ = ((m₁-em₂)u₁)/(m₁+m₂) = (1-0.5×4)(10)/(1+4) = (1-2)(10)/5 = -10/5 = -2 m/s.' },
        { q: 'A bullet of 50 g embeds in a 950 g block on a smooth surface. The bullet was at 200 m/s. The block velocity after collision:', o: ['10 m/s', '200 m/s', '100 m/s', '20 m/s'], a: 0, s: 'Perfectly inelastic: 0.05(200) = 1.0(v) → v = 10 m/s.' },
        { q: 'In a head-on elastic collision, a light particle hitting a heavy stationary particle will:', o: ['Bounce back with nearly same speed', 'Stop', 'Pass through', 'Move forward faster'], a: 0, s: 'When m₁ << m₂: v₁ ≈ -u₁ (bounces back), v₂ ≈ 0 (barely moves).' },
      ],
      hard: [
        { q: 'A ball bounces repeatedly from the floor, losing energy each time with e = 0.8. After how many bounces does it reach less than half its original height?', o: ['4', '3', '5', '2'], a: 0, s: 'hₙ = e²ⁿ·h₀. Need e²ⁿ < 0.5 → 0.8²ⁿ < 0.5 → 2n·ln(0.8) < ln(0.5) → n > ln(0.5)/(2ln(0.8)) ≈ 0.693/(2×0.223) ≈ 1.55. So n=2 gives h = 0.8⁴h = 0.4096h < 0.5h. After n=2 bounces.' },
        { q: 'A neutron (mass m) collides head-on elastically with a nucleus of mass 12m at rest. The fraction of KE transferred is:', o: ['48/169 ≈ 28.4%', '12/13', '1/13', '144/169'], a: 0, s: 'Fraction transferred = 4m₁m₂/(m₁+m₂)² = 4(m)(12m)/(13m)² = 48m²/169m² = 48/169 ≈ 28.4%.' },
        { q: 'A bullet of mass m passes through a pendulum bob of mass M and emerges with velocity v/2 (initial velocity v). The bob rises to height:', o: ['m²v²/(8Mg(M+m)·... )', 'v²/(8g)', 'm²v²/(8M²g)', 'v²/(2g)'], a: 2, s: 'By momentum: mv = M·V_bob + m(v/2) → V_bob = mv/(2M). Height: h = V²/(2g) = m²v²/(8M²g).' },
        { q: 'In a 2D elastic collision, a ball at velocity v hits an identical stationary ball at impact parameter b (glancing). The angle between their velocities after collision is:', o: ['90°', '180°', '45°', 'Depends on b'], a: 0, s: 'For elastic collision between identical masses, regardless of impact parameter, the scattered particles always move at 90° to each other.' },
        { q: 'A ball is dropped from height H above a heavy plate moving up at velocity v. The ball bounces to a height of:', o: ['(√(2gH) + 2v)²/(2g)', '(v + √(2gH))²/(2g)', 'H + v²/g', '4H'], a: 1, s: 'Ball velocity just before hitting plate = √(2gH) downward. In plate frame: ball approaches at √(2gH) + v, bounces at same speed. In ground frame: ball velocity = (√(2gH) + v) + v = √(2gH) + 2v upward. Height = (√(2gH)+2v)²/(2g).' },
      ],
    },
  ],
};

/* ─── Chapter 6: Rotational Motion ─── */
const rotationalMotion: ChapterData = {
  name: 'Rotational Motion',
  slug: 'rotational-motion',
  topics: [
    {
      name: 'Moment of Inertia',
      slug: 'moment-of-inertia',
      easy: [
        { q: 'Moment of inertia is the rotational analogue of:', o: ['Mass', 'Force', 'Velocity', 'Acceleration'], a: 0, s: 'In rotation, I (moment of inertia) plays the role that mass plays in linear motion.' },
        { q: 'The moment of inertia of a thin ring of mass M and radius R about its axis is:', o: ['MR²', '½MR²', '⅔MR²', '¼MR²'], a: 0, s: 'For a ring, all mass is at distance R from the axis, so I = MR².' },
        { q: 'The parallel axis theorem states I = I_cm + :', o: ['Md²', 'Md', 'M/d²', 'M²d'], a: 0, s: 'I = I_cm + Md², where d is the distance between the parallel axes.' },
        { q: 'The SI unit of moment of inertia is:', o: ['kg·m²', 'kg/m²', 'N·m²', 'kg·m'], a: 0, s: 'I = Σmr² → unit is kg·m².' },
        { q: 'The moment of inertia of a solid disc about its axis is:', o: ['½MR²', 'MR²', '⅔MR²', '¼MR²'], a: 0, s: 'For a uniform solid disc: I = ½MR² about the axis through centre perpendicular to plane.' },
      ],
      medium: [
        { q: 'The moment of inertia of a solid sphere about its diameter is:', o: ['⅖MR²', '⅔MR²', '½MR²', 'MR²'], a: 0, s: 'For a solid sphere: I = ⅖MR² about any diameter.' },
        { q: 'A uniform rod of length L and mass M has moment of inertia about one end:', o: ['ML²/3', 'ML²/12', 'ML²/2', 'ML²'], a: 0, s: 'I_cm = ML²/12. Using parallel axis: I_end = ML²/12 + M(L/2)² = ML²/12 + ML²/4 = ML²/3.' },
        { q: 'The radius of gyration of a disc about its axis is:', o: ['R/√2', 'R', 'R/2', '√2R'], a: 0, s: 'I = Mk² = ½MR² → k = R/√2.' },
        { q: 'The perpendicular axis theorem applies to:', o: ['Planar (2D) bodies only', 'All bodies', 'Only spheres', 'Only rods'], a: 0, s: 'Perpendicular axis theorem: Iz = Ix + Iy, valid only for flat (planar) bodies.' },
        { q: 'The moment of inertia of a ring about its diameter is:', o: ['½MR²', 'MR²', '¼MR²', '2MR²'], a: 0, s: 'By perpendicular axis theorem: I_axis = 2I_diameter → I_dia = MR²/2.' },
      ],
      hard: [
        { q: 'A disc of mass M has a hole of radius R/2 drilled at its edge. The moment of inertia about the axis through centre of original disc:', o: ['13MR²/32', '½MR²', 'MR²/4', '7MR²/16'], a: 0, s: 'Original disc: I₁ = ½MR². Removed disc (mass M/4, radius R/2): I_removed = ½(M/4)(R/2)² + (M/4)(R/2)² = MR²/32 + MR²/16 = 3MR²/32. Result: ½MR² - 3MR²/32 = 16MR²/32 - 3MR²/32 = 13MR²/32.' },
        { q: 'The moment of inertia of a uniform hollow sphere about its diameter is:', o: ['⅔MR²', '⅖MR²', 'MR²', '½MR²'], a: 0, s: 'For a thin hollow sphere (shell): I = ⅔MR² about any diameter.' },
        { q: 'A square lamina of side a and mass M has moment of inertia about an axis through its centre perpendicular to the plane:', o: ['Ma²/6', 'Ma²/12', 'Ma²/3', 'Ma²/4'], a: 0, s: 'For a square lamina: Ix = Iy = Ma²/12. By perpendicular axis: Iz = Ix + Iy = Ma²/6.' },
        { q: 'Two identical rods of mass M and length L are joined at their ends to form an L-shape. The moment of inertia about the junction point (perpendicular to plane):', o: ['⅔ML²', 'ML²/3', 'ML²', '2ML²/3'], a: 0, s: 'Each rod about its end: ML²/3. The two rods are perpendicular. Total = ML²/3 + ML²/3 = 2ML²/3.' },
        { q: 'The moment of inertia of a cone of mass M, radius R, height H about its axis is:', o: ['3MR²/10', 'MR²/4', 'MR²/3', '½MR²'], a: 0, s: 'For a solid cone about its axis: I = 3MR²/10, derived by integration over thin discs.' },
      ],
    },
    {
      name: 'Torque & Angular Momentum',
      slug: 'torque-angular-momentum',
      easy: [
        { q: 'Torque is defined as:', o: ['r × F', 'r · F', 'F/r', 'r/F'], a: 0, s: 'Torque τ = r × F, the cross product of position vector and force.' },
        { q: 'The SI unit of torque is:', o: ['N·m', 'J', 'N/m', 'kg·m/s'], a: 0, s: 'Torque = N·m. Note: dimensionally same as energy but physically different.' },
        { q: 'Angular momentum of a particle is:', o: ['L = r × p', 'L = r · p', 'L = p/r', 'L = r × v'], a: 0, s: 'Angular momentum L = r × p = r × mv.' },
        { q: 'For rotational equilibrium, the net torque must be:', o: ['Zero', 'Maximum', 'Equal to weight', 'Infinite'], a: 0, s: 'For a body to be in rotational equilibrium: Στ = 0.' },
        { q: 'The direction of torque is:', o: ['Perpendicular to both r and F', 'Along r', 'Along F', 'At 45° to r'], a: 0, s: 'Cross product r × F is perpendicular to both r and F (right-hand rule).' },
      ],
      medium: [
        { q: 'A 3 m rod (mass 6 kg) is pivoted at one end. A 2 kg mass hangs from the other end. The torque about the pivot due to these weights (g=10 m/s²) is:', o: ['150 N·m', '90 N·m', '60 N·m', '120 N·m'], a: 0, s: 'Rod torque: 6(10)(1.5) = 90 N·m. Mass torque: 2(10)(3) = 60 N·m. Total = 150 N·m.' },
        { q: 'A disc of moment of inertia 2 kg·m² has angular velocity 10 rad/s. Its angular momentum is:', o: ['20 kg·m²/s', '5 kg·m²/s', '12 kg·m²/s', '0.2 kg·m²/s'], a: 0, s: 'L = Iω = 2 × 10 = 20 kg·m²/s.' },
        { q: 'A torque of 10 N·m acts on a wheel of I = 5 kg·m². The angular acceleration is:', o: ['2 rad/s²', '50 rad/s²', '0.5 rad/s²', '15 rad/s²'], a: 0, s: 'τ = Iα → α = τ/I = 10/5 = 2 rad/s².' },
        { q: 'Conservation of angular momentum applies when:', o: ['Net external torque is zero', 'Net external force is zero', 'Total energy is constant', 'Always'], a: 0, s: 'dL/dt = τ_ext. If τ_ext = 0, then L = constant.' },
        { q: 'An ice skater spins faster when arms are pulled in because:', o: ['Angular momentum is conserved, I decreases so ω increases', 'KE is conserved', 'Force increases', 'Mass decreases'], a: 0, s: 'L = Iω = constant. When I decreases (arms in), ω must increase.' },
      ],
      hard: [
        { q: 'A disc of mass M and radius R rotates at ω. A ring of mass m and radius R is gently placed on it. The final angular velocity is:', o: ['Mω/(M + 2m)', 'Mω/(M + m)', 'ω', '(M+m)ω/M'], a: 0, s: 'I_disc = ½MR², I_ring = mR². Conservation: ½MR²ω = (½MR² + mR²)ω_f → ω_f = M/(M + 2m) × ω.' },
        { q: 'A rod of length L pivoted at one end is released from horizontal. The angular velocity when vertical is:', o: ['√(3g/L)', '√(2g/L)', '√(g/L)', '√(6g/L)'], a: 0, s: 'Energy: mg(L/2) = ½(ML²/3)ω² → ω² = 3g/L → ω = √(3g/L).' },
        { q: 'A uniform rod of mass M and length L falls freely from height h. It rotates about its COM with angular velocity ω. The velocity of one tip relative to ground combines:', o: ['Translational + ωL/2', 'Only translational', 'Only rotational', 'ω²L'], a: 0, s: 'Tip velocity = v_cm (translational) ± ωL/2 (rotational). The two add vectorially.' },
        { q: 'A turntable of I = 10 kg·m² rotates at 2 rev/s. A 5 kg monkey walks from edge (R=2m) to centre. The final angular velocity is:', o: ['6 rev/s', '4 rev/s', '3 rev/s', '2.5 rev/s'], a: 0, s: 'Initial: (10 + 5×4)×2 = 30×2 = 60. Final: I = 10 + 0 = 10. ω_f = 60/10 = 6 rev/s.' },
        { q: 'A bullet of mass m traveling at v embeds horizontally in a rod (mass M, length L) pivoted at one end, hitting the free end. The angular velocity just after is:', o: ['mvL/(ML²/3 + mL²)', '3mv/((M+3m)L)', 'mv/(ML)', '3mv/(ML)'], a: 0, s: 'L_initial = mvL. I_final = ML²/3 + mL². ω = mvL/(ML²/3 + mL²) = 3mv/((M+3m)L).' },
      ],
    },
    {
      name: 'Rolling Motion',
      slug: 'rolling-motion',
      easy: [
        { q: 'In pure rolling, the velocity of the contact point with the ground is:', o: ['Zero', 'v', '2v', 'v/2'], a: 0, s: 'In pure rolling, the bottom-most point has zero velocity: v - Rω = 0.' },
        { q: 'The condition for pure rolling is:', o: ['v = Rω', 'v = R/ω', 'v > Rω', 'v < Rω'], a: 0, s: 'For rolling without slipping: v_cm = Rω.' },
        { q: 'A rolling body has:', o: ['Both translational and rotational KE', 'Only translational KE', 'Only rotational KE', 'No KE'], a: 0, s: 'Total KE = ½mv² + ½Iω², combining both motions.' },
        { q: 'The topmost point of a rolling wheel has velocity:', o: ['2v (twice the center velocity)', 'v', '0', '3v'], a: 0, s: 'Top point: v_cm + Rω = v + v = 2v.' },
        { q: 'Friction in pure rolling on flat ground does:', o: ['No work', 'Positive work', 'Negative work', 'Maximum work'], a: 0, s: 'In pure rolling, the contact point has zero velocity, so friction does no work (F·d = 0).' },
      ],
      medium: [
        { q: 'A solid sphere rolls down an incline of angle θ without slipping. Its acceleration is:', o: ['5gsinθ/7', 'gsinθ', '2gsinθ/3', '3gsinθ/5'], a: 0, s: 'For rolling: a = gsinθ/(1 + I/(mR²)) = gsinθ/(1 + 2/5) = 5gsinθ/7.' },
        { q: 'A solid cylinder and a hollow cylinder of same mass and radius roll down an incline. Which reaches first?', o: ['Solid cylinder', 'Hollow cylinder', 'Both together', 'Depends on mass'], a: 0, s: 'Solid has I = ½MR² (factor ½) vs hollow I = MR² (factor 1). Solid has higher acceleration → reaches first.' },
        { q: 'The total kinetic energy of a solid sphere rolling with velocity v is:', o: ['7/10 mv²', '½mv²', 'mv²', '½mv² + ½Iω²'], a: 0, s: 'KE = ½mv² + ½(⅖mR²)(v/R)² = ½mv² + ⅕mv² = 7/10 mv².' },
        { q: 'The minimum coefficient of friction for a solid sphere to roll without slipping on an incline of angle θ is:', o: ['(2/7)tanθ', 'tanθ', '(2/5)tanθ', '(1/3)tanθ'], a: 0, s: 'For solid sphere: μ_min = (2/7)tanθ. Derived from f = ma_rolling and f ≤ μN.' },
        { q: 'A disc rolls without slipping with velocity v. The ratio of rotational KE to total KE is:', o: ['1/3', '1/2', '2/3', '1/4'], a: 0, s: 'KE_rot = ½(½mR²)(v/R)² = ¼mv². KE_total = ½mv² + ¼mv² = ¾mv². Ratio = (¼)/(¾) = 1/3.' },
      ],
      hard: [
        { q: 'A sphere of mass m and radius r rolls up an incline of angle θ with initial velocity v₀. The distance it travels before stopping is:', o: ['7v₀²/(10gsinθ)', 'v₀²/(2gsinθ)', '5v₀²/(7gsinθ)', '2v₀²/(5gsinθ)'], a: 0, s: 'Using energy: 7/10 mv₀² = mgdsinθ → d = 7v₀²/(10gsinθ).' },
        { q: 'A solid sphere rolling at v₀ hits a step of height h (h < R). The minimum v₀ to climb the step (assuming angular momentum is conserved about step edge) is:', o: ['√(10gh(2R-h)/(7R²))', '√(2gh)', '√(10gh/7)', '√(gh)'], a: 0, s: 'Angular momentum about step corner is conserved during collision. Then energy conservation to climb. The expression involves both h and R.' },
        { q: 'A uniform ball is projected on a rough surface with v₀ (translational) and no spin. It starts pure rolling after time:', o: ['2v₀/(7μg)', 'v₀/(μg)', 'v₀/(3μg)', '5v₀/(7μg)'], a: 0, s: 'Friction decelerates translation: v = v₀ - μgt. Friction spins up: ω = 5μgt/(2R). Pure rolling when v = Rω: v₀ - μgt = 5μgt/2 → t = 2v₀/(7μg).' },
        { q: 'A rolling disc hits a step of height R/4. The minimum velocity to climb the step:', o: ['√(gR)', '√(2gR)', '√(gR/2)', '2√(gR)'], a: 0, s: 'Using angular momentum conservation about step edge and energy conservation to clear the step gives v_min ≈ √(gR).' },
        { q: 'A solid cylinder of mass M and radius R rolls without slipping inside a hollow cylinder of radius 2R. The time period of small oscillations is:', o: ['2π√(3R/g)', '2π√(R/g)', '2π√(2R/g)', '2π√(6R/g)'], a: 0, s: 'For rolling inside, effective length = 2R - R = R. With rolling constraint (factor 3/2): T = 2π√(3R/(2g))... Actually for solid cylinder rolling inside, T = 2π√(3R/g) using energy method with I = ½MR².' },
      ],
    },
  ],
};

export const mechanicsChapters3: ChapterData[] = [centreMassCollisions, rotationalMotion];
