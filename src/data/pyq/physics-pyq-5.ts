import type { PYQChapter } from './types';

export const physicsPyq5: PYQChapter[] = [
  {
    name: 'Semiconductor Electronics',
    slug: 'semiconductor-electronics',
    questions: [
      { q: 'In a p-n junction, the width of depletion region:', o: ['Increases with reverse bias', 'Decreases with reverse bias', 'Is not affected by bias', 'Is zero at equilibrium'], a: 0, s: 'Reverse bias pulls majority carriers away from junction → depletion region widens.', year: 2023, shift: 'Jan 24 Shift 1', exam: 'main' },
      { q: 'The current gain β of a transistor is 50. If the base current is 20 μA, the collector current is:', o: ['1 mA', '2 mA', '0.5 mA', '0.1 mA'], a: 0, s: 'I_C = βI_B = 50 × 20 × 10⁻⁶ = 1 × 10⁻³ A = 1 mA.', year: 2022, shift: 'Jan 25 Shift 2', exam: 'main' },
      { q: 'Which gate gives output 1 when all inputs are 0?', o: ['NOR', 'AND', 'OR', 'NAND'], a: 0, s: 'NOR: output is 1 only when all inputs are 0 (complement of OR).', year: 2023, shift: 'Jan 29 Shift 1', exam: 'main' },
      { q: 'A Zener diode is used in:', o: ['Voltage regulation', 'Amplification', 'Oscillation', 'Modulation'], a: 0, s: 'Zener diode operates in reverse breakdown → maintains constant voltage across it.', year: 2021, shift: 'Feb 25 Shift 1', exam: 'main' },
      { q: 'In an npn transistor, the collector current is controlled by:', o: ['Base current', 'Collector voltage', 'Emitter voltage', 'Collector resistance'], a: 0, s: 'Small base current controls large collector current: I_C = βI_B.', year: 2020, shift: 'Jan 7 Shift 1', exam: 'main' },
      { q: 'The Boolean expression for NAND gate is:', o: ['(A·B)\'', 'A·B', 'A+B', '(A+B)\''], a: 0, s: 'NAND = NOT(AND) = (A·B)\'.', year: 2022, shift: 'Jun 25 Shift 1', exam: 'main' },
      { q: 'Pure silicon at room temperature has equal number of:', o: ['Electrons and holes', 'Only electrons', 'Only holes', 'Protons and electrons'], a: 0, s: 'Intrinsic semiconductor: every electron excited to CB leaves a hole in VB → n_e = n_h.', year: 2019, shift: 'Jan 9 Shift 2', exam: 'main' },
      { q: 'In a full-wave rectifier, the output frequency is:', o: ['2f (twice input frequency)', 'f', 'f/2', '4f'], a: 0, s: 'Full-wave rectifies both halves → 2 pulses per input cycle → output frequency = 2f.', year: 2023, shift: 'Jan 31 Shift 2', exam: 'main' },
      { q: 'The energy gap of silicon is approximately:', o: ['1.1 eV', '0.7 eV', '3.0 eV', '5.5 eV'], a: 0, s: 'Silicon: E_g ≈ 1.1 eV. Germanium: ≈ 0.7 eV. Diamond: ≈ 5.5 eV.', year: 2021, shift: 'Mar 16 Shift 1', exam: 'main' },
      { q: 'An LED is made of:', o: ['Direct band gap semiconductors like GaAs', 'Silicon', 'Germanium', 'Conductors'], a: 0, s: 'LEDs use direct band gap materials (GaAs, GaP) where electron-hole recombination emits photons efficiently.', year: 2022, shift: 'Jul 25 Shift 2', exam: 'main' },
    ],
  },
  {
    name: 'Dual Nature of Radiation',
    slug: 'dual-nature-radiation',
    questions: [
      { q: 'The photoelectric effect was explained by:', o: ['Einstein', 'Bohr', 'Planck', 'de Broglie'], a: 0, s: 'Einstein (1905) explained photoelectric effect using quantum theory of light → Nobel Prize 1921.', year: 2023, shift: 'Jan 24 Shift 2', exam: 'main' },
      { q: 'If the work function of a metal is 2 eV and light of energy 5 eV falls on it, the maximum KE of photoelectron is:', o: ['3 eV', '7 eV', '2 eV', '5 eV'], a: 0, s: 'KE_max = hν − φ = 5 − 2 = 3 eV.', year: 2022, shift: 'Jun 24 Shift 1', exam: 'main' },
      { q: 'The de Broglie wavelength of a particle with momentum p is:', o: ['h/p', 'p/h', 'hp', 'h²/p'], a: 0, s: 'λ = h/p = h/(mv). De Broglie relation.', year: 2021, shift: 'Feb 24 Shift 2', exam: 'main' },
      { q: 'In photoelectric effect, the stopping potential depends on:', o: ['Frequency of incident light', 'Intensity of light', 'Distance of source', 'Area of surface'], a: 0, s: 'Stopping potential V₀ = (hν − φ)/e. Depends on frequency, not intensity.', year: 2020, shift: 'Jan 8 Shift 2', exam: 'main' },
      { q: 'The threshold wavelength for photoelectric effect for a metal with work function 4.14 eV is approximately:', o: ['300 nm', '600 nm', '200 nm', '400 nm'], a: 0, s: 'λ₀ = hc/φ = (6.63 × 10⁻³⁴ × 3 × 10⁸)/(4.14 × 1.6 × 10⁻¹⁹) ≈ 300 nm.', year: 2023, shift: 'Jan 30 Shift 1', exam: 'main' },
      { q: 'An electron is accelerated through 100 V. Its de Broglie wavelength is approximately:', o: ['0.123 nm', '1.23 nm', '0.0123 nm', '12.3 nm'], a: 0, s: 'λ = 1.227/√V nm = 1.227/√100 = 1.227/10 ≈ 0.123 nm.', year: 2019, shift: 'Apr 9 Shift 1', exam: 'main' },
      { q: 'The graph of KE_max vs frequency in photoelectric effect is a straight line with:', o: ['Slope = h (Planck\'s constant)', 'Slope = e', 'Slope = φ', 'Zero slope'], a: 0, s: 'KE_max = hν − φ. Plotting KE vs ν: slope = h, y-intercept = −φ.', year: 2022, shift: 'Jul 26 Shift 1', exam: 'main' },
      { q: 'Matter waves were experimentally confirmed by:', o: ['Davisson and Germer', 'Hertz', 'Compton', 'Millikan'], a: 0, s: 'Davisson-Germer experiment (1927): electron diffraction from Ni crystal confirmed matter waves.', year: 2021, shift: 'Mar 17 Shift 2', exam: 'main' },
    ],
  },
  {
    name: 'Communication Systems',
    slug: 'communication-systems',
    questions: [
      { q: 'In amplitude modulation, the bandwidth is:', o: ['2f_m (twice the modulating frequency)', 'f_m', 'f_c', 'f_c + f_m'], a: 0, s: 'AM bandwidth = 2f_m (upper sideband − lower sideband).', year: 2023, shift: 'Jan 25 Shift 1', exam: 'main' },
      { q: 'The range of ground wave propagation depends on:', o: ['Frequency and conductivity of Earth\'s surface', 'Ionosphere height', 'Satellite position', 'Modulation index'], a: 0, s: 'Ground wave: signal follows Earth\'s surface. Range depends on frequency (lower better) and ground conductivity.', year: 2022, shift: 'Jun 26 Shift 2', exam: 'main' },
      { q: 'Sky wave propagation uses reflection from:', o: ['Ionosphere', 'Troposphere', 'Stratosphere', 'Mesosphere'], a: 0, s: 'Sky wave: radio waves reflected by ionosphere (specifically F-layer) back to Earth for long-distance communication.', year: 2020, shift: 'Jan 9 Shift 1', exam: 'main' },
      { q: 'For television signals, the propagation method used is:', o: ['Space wave (line of sight)', 'Ground wave', 'Sky wave', 'All of these'], a: 0, s: 'TV uses VHF/UHF → cannot be reflected by ionosphere or follow ground curve → space wave (line of sight).', year: 2021, shift: 'Feb 26 Shift 1', exam: 'main' },
      { q: 'The modulation index in AM must be:', o: ['Between 0 and 1 for distortion-free transmission', 'Greater than 1', 'Exactly 1 always', 'Negative'], a: 0, s: 'Modulation index m = A_m/A_c. For distortion-free AM: 0 ≤ m ≤ 1.', year: 2019, shift: 'Jan 10 Shift 2', exam: 'main' },
    ],
  },
];
