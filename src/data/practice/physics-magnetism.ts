import type { ChapterData } from './types';

/* ─── Chapter 14: Magnetism ─── */
const magnetism: ChapterData = {
  name: 'Magnetic Effects of Current & Magnetism',
  slug: 'magnetism',
  topics: [
    {
      name: 'Biot-Savart & Ampere\'s Law',
      slug: 'biot-savart-ampere',
      easy: [
        { q: 'The magnetic field due to a long straight conductor carrying current I at distance r is:', o: ['μ₀I/(2πr)', 'μ₀I/r', 'μ₀I/(4πr²)', 'μ₀Ir'], a: 0, s: 'B = μ₀I/(2πr), using Ampere\'s law or Biot-Savart integration.' },
        { q: 'The SI unit of magnetic field is:', o: ['Tesla (T)', 'Gauss', 'Weber', 'Henry'], a: 0, s: '1 Tesla = 1 Wb/m² = 1 kg/(A·s²). 1 Gauss = 10⁻⁴ T.' },
        { q: 'The magnetic field at the centre of a circular loop of radius R carrying current I is:', o: ['μ₀I/(2R)', 'μ₀I/(2πR)', 'μ₀IR²', 'μ₀I/R²'], a: 0, s: 'B = μ₀I/(2R) at the centre of a single circular loop.' },
        { q: 'Ampere\'s circuital law states:', o: ['∮B·dl = μ₀I_enclosed', 'B = μ₀I/(2πr)', 'F = qv × B', '∮E·dA = q/ε₀'], a: 0, s: '∮B·dl = μ₀I_enc. The line integral of B around a closed path equals μ₀ times enclosed current.' },
        { q: 'The direction of magnetic field around a current-carrying wire is given by:', o: ['Right-hand thumb rule', 'Left-hand rule', 'Lenz\'s law', 'Faraday\'s law'], a: 0, s: 'Right-hand thumb rule: thumb points in current direction, fingers curl in field direction.' },
      ],
      medium: [
        { q: 'The magnetic field inside a solenoid of n turns per unit length carrying current I is:', o: ['μ₀nI', 'μ₀NI', 'μ₀I/(2πr)', 'μ₀NI/L'], a: 0, s: 'B = μ₀nI inside an ideal (infinite) solenoid. Uniform throughout.' },
        { q: 'The magnetic field on the axis of a circular loop at distance x from the centre is:', o: ['μ₀IR²/(2(R²+x²)^(3/2))', 'μ₀I/(2R)', 'μ₀I/(2πx)', 'μ₀IR/x²'], a: 0, s: 'B = μ₀IR²/(2(R²+x²)^(3/2)). At centre (x=0): B = μ₀I/(2R).' },
        { q: 'A toroid of N turns, mean radius R, carrying current I has magnetic field inside:', o: ['μ₀NI/(2πR)', 'μ₀NI/L', 'μ₀I/(2R)', 'Zero'], a: 0, s: 'Using Ampere\'s law: B(2πR) = μ₀NI → B = μ₀NI/(2πR).' },
        { q: 'Two parallel wires carrying currents in the same direction:', o: ['Attract each other', 'Repel each other', 'Have no force', 'Rotate'], a: 0, s: 'Same direction currents attract. Force per unit length: F/L = μ₀I₁I₂/(2πd).' },
        { q: 'The force per unit length between two parallel wires carrying 1A each, separated by 1m, is:', o: ['2 × 10⁻⁷ N/m', '1 N/m', '10⁻⁷ N/m', '4π × 10⁻⁷ N/m'], a: 0, s: 'F/L = μ₀I₁I₂/(2πd) = (4π×10⁻⁷)(1)(1)/(2π×1) = 2×10⁻⁷ N/m. This defines the Ampere.' },
      ],
      hard: [
        { q: 'The magnetic field at the centre of a square loop of side a carrying current I is:', o: ['2√2 μ₀I/(πa)', '4μ₀I/(πa)', 'μ₀I/(2a)', '√2 μ₀I/(πa)'], a: 0, s: 'Each side contributes B = μ₀I/(4π(a/2))(sin45° + sin45°) = μ₀I√2/(2πa). Total = 4 × this = 2√2μ₀I/(πa).' },
        { q: 'The magnetic moment of a current loop of area A carrying current I is:', o: ['IA (or NIA for N turns)', 'I/A', 'IA²', 'I²A'], a: 0, s: 'm = NIA. The magnetic moment equals current times area (times number of turns).' },
        { q: 'The torque on a magnetic dipole of moment m in a field B is:', o: ['m × B = mB sinθ', 'mB cosθ', 'mB', 'm/B'], a: 0, s: 'τ = m × B. Magnitude = mB sinθ. Dipole tends to align with B.' },
        { q: 'The magnetic field due to a semi-infinite straight wire at end point at perpendicular distance d is:', o: ['μ₀I/(4πd)', 'μ₀I/(2πd)', 'μ₀I/(πd)', 'Zero'], a: 0, s: 'Semi-infinite wire: integrate from 0 to ∞. B = μ₀I/(4πd), half of the infinite wire result.' },
        { q: 'A Helmholtz coil arrangement (2 coils of radius R separated by R) produces a nearly uniform field at the centre of magnitude:', o: ['(4/5)^(3/2) × μ₀NI/R', 'μ₀NI/(2R)', '2μ₀NI/R', 'μ₀NI/R'], a: 0, s: 'At midpoint: B = 2 × μ₀NIR²/(2(R²+R²/4)^(3/2)) = (4/5)^(3/2) × μ₀NI/R ≈ 0.7155 μ₀NI/R.' },
      ],
    },
    {
      name: 'Force on Moving Charges & Conductors',
      slug: 'lorentz-force',
      easy: [
        { q: 'The force on a charge q moving with velocity v in a magnetic field B is:', o: ['F = qv × B', 'F = qE', 'F = qvB (always)', 'F = qB/v'], a: 0, s: 'Lorentz magnetic force: F = qv × B. Magnitude F = qvB sinθ.' },
        { q: 'A charged particle moving parallel to a magnetic field experiences:', o: ['No force', 'Maximum force', 'Force along B', 'Deceleration'], a: 0, s: 'F = qvB sinθ. When v ∥ B, θ = 0, F = 0.' },
        { q: 'The magnetic force on a charge does:', o: ['No work (F ⊥ v always)', 'Positive work', 'Negative work', 'Work equal to qvB'], a: 0, s: 'F = qv × B is always perpendicular to v. W = F·v = 0. No work done.' },
        { q: 'A charged particle in a uniform magnetic field (v ⊥ B) moves in a:', o: ['Circle', 'Straight line', 'Parabola', 'Ellipse'], a: 0, s: 'Constant centripetal force → circular motion. r = mv/(qB).' },
        { q: 'The force on a current-carrying conductor of length L in field B is:', o: ['F = IL × B', 'F = ILB (always)', 'F = IL/B', 'F = IB/L'], a: 0, s: 'F = IL × B. Magnitude F = BIL sinθ.' },
      ],
      medium: [
        { q: 'The radius of circular motion of a charged particle (mass m, charge q, velocity v) in field B is:', o: ['mv/(qB)', 'qB/(mv)', 'mv²/(qB)', 'qvB/m'], a: 0, s: 'qvB = mv²/r → r = mv/(qB). Radius proportional to momentum.' },
        { q: 'The time period of a charged particle in a magnetic field is:', o: ['2πm/(qB)', '2πr/v', 'mv/(qB)', '2πqB/m'], a: 0, s: 'T = 2πr/v = 2πm/(qB). Independent of velocity!' },
        { q: 'A cyclotron uses the principle that the time period of circular motion in B is:', o: ['Independent of velocity (for non-relativistic speeds)', 'Proportional to velocity', 'Inversely proportional to velocity', 'Proportional to radius'], a: 0, s: 'T = 2πm/(qB) — independent of v. This allows repeated acceleration at fixed frequency.' },
        { q: 'When a charged particle enters a magnetic field at angle θ to B, it traces a:', o: ['Helix', 'Circle', 'Straight line', 'Parabola'], a: 0, s: 'Component v cosθ along B → uniform motion. v sinθ perpendicular → circular motion. Combined → helix.' },
        { q: 'The force between two parallel current-carrying wires is:', o: ['μ₀I₁I₂L/(2πd)', 'μ₀I₁I₂/(2πd)', 'μ₀I₁I₂/(4πd²)', 'I₁I₂L/d'], a: 0, s: 'F = BIL = (μ₀I₁/(2πd)) × I₂ × L = μ₀I₁I₂L/(2πd).' },
      ],
      hard: [
        { q: 'A velocity selector uses crossed E and B fields. Only particles with velocity ___ pass through undeflected:', o: ['v = E/B', 'v = B/E', 'v = EB', 'v = E²/B'], a: 0, s: 'qE = qvB → v = E/B. Electric and magnetic forces balance.' },
        { q: 'The magnetic moment of a revolving electron (orbit radius r, angular velocity ω) is:', o: ['½eωr²', 'eωr', 'eωr²', 'eω/(2r)'], a: 0, s: 'I = eω/(2π). m = IA = eω/(2π) × πr² = eωr²/2.' },
        { q: 'Hall effect: a current-carrying conductor in a transverse magnetic field develops a voltage due to:', o: ['Accumulation of charges on one side by magnetic force', 'Heating', 'Resistance change', 'Inductance'], a: 0, s: 'Lorentz force pushes charge carriers to one side → charge accumulation → Hall voltage V_H = BId/(nqA).' },
        { q: 'A mass spectrometer separates ions of different masses by:', o: ['Different radii of curvature in a magnetic field', 'Different speeds', 'Different charges', 'Chemical properties'], a: 0, s: 'r = mv/(qB). For ions with same q and velocity, radius ∝ mass. Different masses curve differently.' },
        { q: 'A proton and an alpha particle enter the same magnetic field with the same momentum. The ratio of their radii is:', o: ['2:1', '1:2', '1:1', '4:1'], a: 0, s: 'r = p/(qB). Same p. q_p = e, q_α = 2e. r_p/r_α = q_α/q_p = 2/1. So r_p:r_α = 2:1.' },
      ],
    },
  ],
};

/* ─── Chapter 15: Electromagnetic Induction & AC ─── */
const emiAC: ChapterData = {
  name: 'Electromagnetic Induction & AC',
  slug: 'emi-ac',
  topics: [
    {
      name: "Faraday's Law & EMI",
      slug: 'faradays-law-emi',
      easy: [
        { q: "Faraday's law states that the induced EMF equals:", o: ['The negative rate of change of magnetic flux', 'The magnetic flux', 'The current times resistance', 'The magnetic field strength'], a: 0, s: 'ε = -dΦ/dt. The induced EMF is proportional to the rate of change of flux.' },
        { q: "Lenz's law states that the induced current:", o: ['Opposes the change that caused it', 'Supports the change', 'Is always clockwise', 'Is always zero'], a: 0, s: "Lenz's law: induced current creates a magnetic field that opposes the change in flux." },
        { q: 'Magnetic flux through a surface is:', o: ['Φ = B·A = BA cosθ', 'Φ = B/A', 'Φ = BA sinθ', 'Φ = B²A'], a: 0, s: 'Φ = ∫B·dA. For uniform field: Φ = BA cosθ, where θ is angle between B and area normal.' },
        { q: 'The SI unit of magnetic flux is:', o: ['Weber (Wb)', 'Tesla', 'Henry', 'Volt'], a: 0, s: '1 Weber = 1 T·m² = 1 V·s.' },
        { q: 'An EMF is induced in a loop when:', o: ['The magnetic flux through it changes', 'A constant field passes through it', 'No field is present', 'The loop is stationary in a uniform field'], a: 0, s: 'EMF is induced only when flux changes — by changing B, A, or angle.' },
      ],
      medium: [
        { q: 'A rod of length L moves with velocity v perpendicular to a uniform field B. The induced EMF is:', o: ['BvL', 'BvL²', 'BL/v', 'B²vL'], a: 0, s: 'Motional EMF: ε = BvL (from F = qvB → E = vB → ε = EL = BvL).' },
        { q: 'Self-inductance of a solenoid of N turns, length l, area A is:', o: ['μ₀N²A/l', 'μ₀NA/l', 'μ₀N²A²/l', 'μ₀NI/l'], a: 0, s: 'L = NΦ/I = N(μ₀nIA)/I = μ₀N²A/l where n = N/l.' },
        { q: 'The energy stored in an inductor carrying current I is:', o: ['½LI²', 'LI', 'LI²', '½L/I²'], a: 0, s: 'U = ½LI², analogous to ½CV² for capacitors.' },
        { q: 'Mutual inductance between two coils is defined as:', o: ['M = Φ₂₁/I₁ (flux in coil 2 due to current in coil 1 per unit current)', 'L₁L₂', 'L₁+L₂', 'L₁/L₂'], a: 0, s: 'M = N₂Φ₂₁/I₁. M₁₂ = M₂₁ = M (reciprocity).' },
        { q: 'If the current through an inductor changes at rate dI/dt, the induced EMF is:', o: ['-L(dI/dt)', 'L(dI/dt)', '-LI', 'LI²'], a: 0, s: 'Self-induced EMF: ε = -L(dI/dt). Opposes the change in current.' },
      ],
      hard: [
        { q: 'A circular loop of radius R is in a time-varying field B = B₀sinωt perpendicular to the loop. The induced EMF is:', o: ['πR²B₀ω cosωt', 'πR²B₀sinωt', 'B₀ωR', '2πRB₀sinωt'], a: 0, s: 'Φ = BπR² = πR²B₀sinωt. ε = -dΦ/dt = -πR²B₀ω cosωt. Amplitude = πR²B₀ω.' },
        { q: 'A conducting disc of radius R rotates at angular velocity ω in a perpendicular field B. The EMF between centre and rim is:', o: ['½BωR²', 'BωR', 'BωR²', '2BωR²'], a: 0, s: 'Each element dr at distance r has dε = Bωrdr. ε = ∫₀ᴿ Bωrdr = ½BωR².' },
        { q: 'The time constant of an LR circuit is:', o: ['L/R', 'LR', 'R/L', '√(LC)'], a: 0, s: 'τ = L/R. Current growth: I = (ε/R)(1 - e^(-Rt/L)). Current decay: I = I₀e^(-Rt/L).' },
        { q: 'In a decaying LR circuit, the current drops to 1/e of initial value in time:', o: ['L/R', 'R/L', 'LR', '2L/R'], a: 0, s: 'I = I₀e^(-t/τ) where τ = L/R. At t = τ: I = I₀/e.' },
        { q: 'Eddy currents can be reduced by:', o: ['Using laminated cores', 'Using solid cores', 'Increasing conductivity', 'Increasing the field'], a: 0, s: 'Lamination breaks the conducting path into smaller loops, reducing eddy current magnitude and power loss.' },
      ],
    },
    {
      name: 'Alternating Current',
      slug: 'alternating-current',
      easy: [
        { q: 'The peak value of AC voltage V = V₀sinωt is:', o: ['V₀', 'V₀/√2', 'V₀/2', '2V₀'], a: 0, s: 'V₀ is the peak (amplitude) of the sinusoidal voltage.' },
        { q: 'The rms value of an AC voltage V₀sinωt is:', o: ['V₀/√2', 'V₀', 'V₀/2', '√2V₀'], a: 0, s: 'V_rms = V₀/√2 ≈ 0.707V₀. Similarly, I_rms = I₀/√2.' },
        { q: 'In a purely resistive AC circuit, voltage and current are:', o: ['In phase', '90° out of phase', '180° out of phase', '45° out of phase'], a: 0, s: 'In a resistor, V = IR. Both vary sinusoidally in phase.' },
        { q: 'In a purely capacitive circuit, current:', o: ['Leads voltage by 90°', 'Lags voltage by 90°', 'Is in phase', 'Leads by 180°'], a: 0, s: 'In a capacitor: I = CdV/dt. Current leads voltage by π/2.' },
        { q: 'In a purely inductive circuit, current:', o: ['Lags voltage by 90°', 'Leads voltage by 90°', 'Is in phase', 'Lags by 180°'], a: 0, s: 'In an inductor: V = LdI/dt. Current lags voltage by π/2.' },
      ],
      medium: [
        { q: 'The impedance of a series RLC circuit is:', o: ['√(R² + (ωL - 1/(ωC))²)', 'R + ωL + 1/(ωC)', 'R', 'R² + (ωL)²'], a: 0, s: 'Z = √(R² + (X_L - X_C)²) where X_L = ωL, X_C = 1/(ωC).' },
        { q: 'Resonance in a series RLC circuit occurs when:', o: ['ωL = 1/(ωC)', 'R = 0', 'ω = 0', 'XL = R'], a: 0, s: 'At resonance: X_L = X_C → ωL = 1/(ωC) → ω₀ = 1/√(LC). Z = R (minimum).' },
        { q: 'The power factor of an AC circuit is:', o: ['cosφ where φ is the phase angle', 'sinφ', 'tanφ', 'φ'], a: 0, s: 'Power factor = cosφ = R/Z. P_avg = V_rms I_rms cosφ.' },
        { q: 'The quality factor (Q) of a resonant circuit is:', o: ['ω₀L/R = 1/(ω₀CR)', 'R/(ω₀L)', 'ω₀RC', 'R/L'], a: 0, s: 'Q = ω₀L/R = 1/(R)√(L/C). Higher Q → sharper resonance.' },
        { q: 'A transformer works on the principle of:', o: ['Mutual induction', 'Self-induction', 'Electrostatics', 'Eddy currents'], a: 0, s: 'Transformer: changing current in primary induces EMF in secondary via mutual induction.' },
      ],
      hard: [
        { q: 'In a series RLC circuit at resonance, the voltage across L or C can be:', o: ['Greater than the source voltage (by factor Q)', 'Equal to source voltage', 'Zero', 'Less than source voltage'], a: 0, s: 'V_L = V_C = QV_source at resonance. Q can be >> 1, so V_L >> V_source (voltage magnification).' },
        { q: 'The bandwidth of a series RLC circuit is:', o: ['R/L', 'ω₀/Q', '1/RC', 'ω₀'], a: 0, s: 'Bandwidth Δω = R/L = ω₀/Q. Sharper resonance → smaller bandwidth → higher Q.' },
        { q: 'The average power in an AC circuit is:', o: ['V_rms × I_rms × cosφ', 'V_rms × I_rms', 'V₀I₀', 'V₀I₀ cosφ'], a: 0, s: 'P_avg = V_rms I_rms cosφ = ½V₀I₀ cosφ = I²_rms × R.' },
        { q: 'In a step-up transformer (turns ratio N₂/N₁ > 1):', o: ['Voltage increases, current decreases', 'Both increase', 'Both decrease', 'Voltage decreases'], a: 0, s: 'V₂/V₁ = N₂/N₁ > 1 (voltage up). P₁ = P₂ → I₂ < I₁ (current down).' },
        { q: 'The energy stored in the magnetic field of a solenoid per unit volume is:', o: ['B²/(2μ₀)', 'μ₀B²/2', 'B/μ₀', 'B²μ₀'], a: 0, s: 'u = B²/(2μ₀), magnetic energy density. Compare: u_E = ε₀E²/2 for electric field.' },
      ],
    },
  ],
};

export const magnetismChapters: ChapterData[] = [magnetism, emiAC];
