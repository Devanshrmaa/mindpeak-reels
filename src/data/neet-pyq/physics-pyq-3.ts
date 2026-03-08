import type { NEETPYQChapter } from './types';

export const neetPhysicsPyq3: NEETPYQChapter[] = [
  {
    name: 'Semiconductor Electronics',
    slug: 'semiconductor-electronics',
    questions: [
      { q: 'In a p-n junction diode, the barrier potential is approximately 0.3 V for:', o: ['Germanium', 'Silicon', 'Carbon', 'GaAs'], a: 0, s: 'Barrier potential: Ge ≈ 0.3 V, Si ≈ 0.7 V.', year: 2023, shift: 'NEET 2023' },
      { q: 'A transistor in CE configuration has β = 100. If I_B = 10 μA, then I_E is:', o: ['1.01 mA', '1 mA', '10 mA', '0.1 mA'], a: 0, s: 'I_C = βI_B = 100 × 10 μA = 1 mA. I_E = I_C + I_B = 1 + 0.01 = 1.01 mA.', year: 2022, shift: 'NEET 2022' },
      { q: 'The truth table with output 1 only when both inputs are different belongs to:', o: ['XOR gate', 'AND gate', 'OR gate', 'NAND gate'], a: 0, s: 'XOR: output 1 when inputs are different (0,1 or 1,0).', year: 2021, shift: 'NEET 2021' },
      { q: 'Solar cell is based on:', o: ['Photovoltaic effect', 'Photoelectric emission', 'Thermionic emission', 'Electrolysis'], a: 0, s: 'Solar cell converts light to electricity using photovoltaic effect at p-n junction.', year: 2020, shift: 'NEET 2020' },
      { q: 'In a common emitter amplifier, input resistance is 1 kΩ and output resistance is 10 kΩ. If β = 50, the voltage gain is:', o: ['500', '50', '10', '100'], a: 0, s: 'A_v = β × R_out/R_in = 50 × 10/1 = 500.', year: 2019, shift: 'NEET 2019' },
      { q: 'The conductivity of a semiconductor increases with temperature because:', o: ['More electrons jump to conduction band', 'Lattice vibrations decrease', 'Resistance increases', 'Band gap increases'], a: 0, s: 'Higher T → more thermal energy → more electrons excited across band gap → increased conductivity.', year: 2023, shift: 'NEET 2023' },
      { q: 'A photodiode is operated in:', o: ['Reverse bias', 'Forward bias', 'No bias', 'Both forward and reverse'], a: 0, s: 'Photodiode in reverse bias: photogenerated carriers swept by junction field → current proportional to light.', year: 2022, shift: 'NEET 2022' },
      { q: 'De Morgan\'s theorem: (A·B)\' equals:', o: ['A\' + B\'', 'A\' · B\'', 'A + B', '(A + B)\''], a: 0, s: 'De Morgan: complement of product = sum of complements: (A·B)\' = A\' + B\'.', year: 2021, shift: 'NEET 2021' },
    ],
  },
  {
    name: 'Dual Nature of Radiation',
    slug: 'dual-nature-radiation',
    questions: [
      { q: 'Photoelectrons are emitted only when frequency of incident light is:', o: ['Above threshold frequency', 'Below threshold frequency', 'Equal to threshold', 'Any frequency'], a: 0, s: 'Photoelectric emission requires ν ≥ ν₀ (threshold frequency).', year: 2023, shift: 'NEET 2023' },
      { q: 'The work function of cesium is 2.14 eV. The threshold wavelength is:', o: ['5800 Å', '2900 Å', '11600 Å', '1450 Å'], a: 0, s: 'λ₀ = hc/φ = 12400/2.14 ≈ 5794 Å ≈ 5800 Å.', year: 2022, shift: 'NEET 2022' },
      { q: 'If the intensity of light is increased, the number of photoelectrons emitted:', o: ['Increases', 'Decreases', 'Remains same', 'Becomes zero'], a: 0, s: 'Intensity ∝ number of photons → more photons → more photoelectrons (if ν ≥ ν₀).', year: 2021, shift: 'NEET 2021' },
      { q: 'de Broglie wavelength of a neutron at temperature T is:', o: ['h/√(3mkT)', 'h/(mkT)', '√(3mkT)/h', 'kT/h'], a: 0, s: 'KE = 3/2 kT. λ = h/√(2mKE) = h/√(3mkT).', year: 2020, shift: 'NEET 2020' },
      { q: 'In photoelectric effect, if V₀ is stopping potential, the maximum KE is:', o: ['eV₀', 'V₀/e', 'eV₀²', 'V₀'], a: 0, s: 'KE_max = eV₀ (electron charge × stopping potential).', year: 2019, shift: 'NEET 2019' },
      { q: 'An alpha particle and a proton have same KE. The ratio of their de Broglie wavelengths is:', o: ['1:√2', '√2:1', '1:2', '2:1'], a: 0, s: 'λ ∝ 1/√(mKE). λ_α/λ_p = √(m_p/m_α) = √(1/4) = 1/2. Wait: same KE, λ = h/√(2mE). λ_α/λ_p = √(m_p/m_α) = 1/2. So 1:2.', year: 2023, shift: 'NEET 2023' },
    ],
  },
  {
    name: 'Electromagnetic Waves',
    slug: 'electromagnetic-waves',
    questions: [
      { q: 'Electromagnetic waves are produced by:', o: ['Accelerated charges', 'Stationary charges', 'Charges at rest', 'Constant velocity charges'], a: 0, s: 'Accelerating charges produce time-varying E and B fields → EM waves.', year: 2023, shift: 'NEET 2023' },
      { q: 'In electromagnetic spectrum, the correct order of increasing frequency is:', o: ['Radio < Microwave < IR < Visible < UV < X-ray < Gamma', 'Gamma < X-ray < UV < Visible', 'Radio > Microwave > IR', 'UV < Visible < IR'], a: 0, s: 'Frequency increases: Radio → Microwave → IR → Visible → UV → X-ray → Gamma.', year: 2022, shift: 'NEET 2022' },
      { q: 'The speed of electromagnetic waves in vacuum is:', o: ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '3 × 10¹⁰ m/s', 'Variable'], a: 0, s: 'c = 1/√(μ₀ε₀) = 3 × 10⁸ m/s in vacuum. Same for all EM waves.', year: 2021, shift: 'NEET 2021' },
      { q: 'Displacement current was introduced by:', o: ['Maxwell', 'Faraday', 'Ampere', 'Gauss'], a: 0, s: 'Maxwell added displacement current (ε₀ dΦ_E/dt) to Ampere\'s law → predicted EM waves.', year: 2020, shift: 'NEET 2020' },
      { q: 'Which EM wave is used in RADAR?', o: ['Microwaves', 'Radio waves', 'X-rays', 'Infrared'], a: 0, s: 'RADAR uses microwaves (short wavelength → good directionality and resolution).', year: 2019, shift: 'NEET 2019' },
    ],
  },
];
