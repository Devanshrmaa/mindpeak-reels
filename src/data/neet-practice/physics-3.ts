import type { NEETChapterData } from './types';

/* ─── Chapter: Semiconductor Electronics ─── */
const semiconductors: NEETChapterData = {
  name: 'Semiconductor Electronics',
  slug: 'semiconductor-electronics',
  topics: [
    {
      name: 'Diodes, Transistors & Logic Gates',
      slug: 'diodes-transistors-logic-gates',
      easy: [
        { q: 'In a p-n junction diode, the depletion region is formed due to:', o: ['Diffusion of charge carriers across the junction', 'External voltage', 'Temperature increase', 'Light exposure'], a: 0, s: 'Electrons from n-side and holes from p-side diffuse across junction → recombine → depletion region.' },
        { q: 'A diode conducts when it is:', o: ['Forward biased', 'Reverse biased', 'Unbiased', 'At zero temperature'], a: 0, s: 'Forward bias: p-side positive → reduces barrier → current flows.' },
        { q: 'An LED emits light when:', o: ['Electrons recombine with holes at the junction', 'Current is reversed', 'Temperature rises', 'Resistance increases'], a: 0, s: 'LED: forward-biased p-n junction → electron-hole recombination releases photons.' },
        { q: 'The output of an AND gate is 1 only when:', o: ['All inputs are 1', 'Any input is 1', 'All inputs are 0', 'Inputs are different'], a: 0, s: 'AND gate: Y = A·B. Output 1 only when A = 1 AND B = 1.' },
        { q: 'The output of a NOT gate is:', o: ['Complement of input', 'Same as input', 'Always 1', 'Always 0'], a: 0, s: 'NOT gate inverts: input 0 → output 1, input 1 → output 0.' },
        { q: 'Silicon has how many valence electrons?', o: ['4', '3', '5', '2'], a: 0, s: 'Silicon (Group 14) has 4 valence electrons — forms covalent bonds with 4 neighbours.' },
      ],
      medium: [
        { q: 'In an n-type semiconductor, majority charge carriers are:', o: ['Electrons', 'Holes', 'Protons', 'Neutrons'], a: 0, s: 'n-type: doped with pentavalent impurity → extra electrons are majority carriers.' },
        { q: 'A Zener diode is used as a:', o: ['Voltage regulator', 'Amplifier', 'Oscillator', 'Rectifier only'], a: 0, s: 'Zener diode in reverse bias maintains constant voltage across it → voltage regulation.' },
        { q: 'In a common-emitter transistor amplifier, the current gain β is:', o: ['I_C/I_B', 'I_E/I_B', 'I_B/I_C', 'I_C/I_E'], a: 0, s: 'β (or h_FE) = I_C/I_B (ratio of collector to base current).' },
        { q: 'A full-wave rectifier uses:', o: ['Two diodes or four diodes (bridge)', 'One diode only', 'No diodes', 'Three diodes'], a: 0, s: 'Full-wave: centre-tapped (2 diodes) or bridge (4 diodes) rectifies both half-cycles.' },
        { q: 'The NAND gate is called a universal gate because:', o: ['Any logic gate can be constructed using only NAND gates', 'It is the simplest', 'It uses least power', 'It has highest speed'], a: 0, s: 'NAND (and NOR) are universal — any Boolean function can be implemented with NAND gates alone.' },
        { q: 'In a transistor, the base region is:', o: ['Thin and lightly doped', 'Thick and heavily doped', 'Thick and lightly doped', 'Thin and heavily doped'], a: 0, s: 'Base is thin and lightly doped so most carriers from emitter reach collector.' },
      ],
      hard: [
        { q: 'The voltage gain of a common-emitter amplifier is:', o: ['−β(R_C/R_B) or −g_m × R_C', 'β only', 'R_C only', 'Always 1'], a: 0, s: 'Voltage gain A_v = −β(R_C/R_B) = −g_m R_C. Negative sign indicates phase inversion.' },
        { q: 'In a photodiode, increasing light intensity:', o: ['Increases reverse saturation current', 'Decreases reverse current', 'Has no effect', 'Increases forward current only'], a: 0, s: 'Photodiode operates in reverse bias — light generates electron-hole pairs → increases reverse current.' },
        { q: 'De Morgan\'s theorem states:', o: ['(A+B)\' = A\'·B\' and (A·B)\' = A\'+B\'', '(A+B)\' = A\'+B\'', 'A·B = A+B', 'A\' = A'], a: 0, s: 'De Morgan: complement of OR = AND of complements; complement of AND = OR of complements.' },
        { q: 'A solar cell is essentially a:', o: ['p-n junction operating without external bias', 'Forward-biased diode', 'Zener diode', 'Photoconductive cell'], a: 0, s: 'Solar cell = p-n junction. Light creates e-h pairs at junction → built-in field separates them → voltage (no external bias needed).' },
      ],
    },
  ],
};

/* ─── Chapter: Dual Nature of Radiation & Matter ─── */
const dualNature: NEETChapterData = {
  name: 'Dual Nature of Radiation & Matter',
  slug: 'dual-nature-radiation',
  topics: [
    {
      name: 'Photoelectric Effect & de Broglie',
      slug: 'photoelectric-de-broglie',
      easy: [
        { q: 'The photoelectric effect demonstrates:', o: ['Particle nature of light', 'Wave nature of light', 'Dual nature of matter', 'Diffraction of light'], a: 0, s: 'Photoelectric effect can only be explained by considering light as particles (photons).' },
        { q: 'The work function of a metal is:', o: ['Minimum energy needed to eject an electron', 'Maximum kinetic energy of photoelectron', 'Energy of incident photon', 'Threshold wavelength'], a: 0, s: 'Work function (φ) = minimum energy required to remove an electron from the metal surface.' },
        { q: 'Einstein\'s photoelectric equation is:', o: ['KE_max = hν − φ', 'KE_max = hν + φ', 'KE_max = φ − hν', 'KE_max = hν/φ'], a: 0, s: 'KE_max = hν − φ. Photon energy = work function + maximum kinetic energy.' },
        { q: 'de Broglie wavelength of a particle is:', o: ['λ = h/p', 'λ = p/h', 'λ = hp', 'λ = h²/p'], a: 0, s: 'de Broglie: λ = h/mv = h/p. All matter has wave properties.' },
        { q: 'Below the threshold frequency, photoelectrons:', o: ['Are not emitted regardless of intensity', 'Are emitted slowly', 'Are emitted with low energy', 'Are emitted in fewer numbers'], a: 0, s: 'Below threshold frequency, photon energy < work function → no emission, regardless of light intensity.' },
      ],
      medium: [
        { q: 'If the frequency of incident light is doubled, the maximum KE of photoelectrons:', o: ['More than doubles (increases by hν)', 'Exactly doubles', 'Remains same', 'Halves'], a: 0, s: 'KE₁ = hν − φ. KE₂ = 2hν − φ = 2KE₁ + φ. More than doubles (since φ > 0).' },
        { q: 'The stopping potential is independent of:', o: ['Intensity of light', 'Frequency of light', 'Work function', 'Nature of metal'], a: 0, s: 'Stopping potential depends on frequency and work function, NOT on intensity.' },
        { q: 'The de Broglie wavelength of an electron accelerated through V volts is:', o: ['1.227/√V nm', '1.227V nm', '1.227/V nm', '√V/1.227 nm'], a: 0, s: 'λ = h/√(2meV) = 1.227/√V nm (for electrons).' },
        { q: 'If the KE of a particle is doubled, its de Broglie wavelength:', o: ['Decreases by factor √2', 'Doubles', 'Halves', 'Remains same'], a: 0, s: 'λ = h/√(2mKE). KE → 2KE: λ → λ/√2.' },
        { q: 'The graph of stopping potential vs frequency is a straight line with slope:', o: ['h/e', 'e/h', 'h', 'e'], a: 0, s: 'eV₀ = hν − φ → V₀ = (h/e)ν − φ/e. Slope = h/e.' },
      ],
      hard: [
        { q: 'An electron and a proton have the same de Broglie wavelength. The ratio of their kinetic energies is:', o: ['m_p/m_e', 'm_e/m_p', '1', '(m_p/m_e)²'], a: 0, s: 'λ = h/√(2mKE) same → 2m_e KE_e = 2m_p KE_p → KE_e/KE_p = m_p/m_e.' },
        { q: 'In Davisson-Germer experiment, electrons showed:', o: ['Diffraction pattern confirming wave nature', 'Photoelectric emission', 'Compton scattering', 'Pair production'], a: 0, s: 'Davisson-Germer: electrons diffracted by nickel crystal → confirmed de Broglie hypothesis.' },
        { q: 'The Compton wavelength shift Δλ depends on:', o: ['Scattering angle only (not on incident wavelength)', 'Incident wavelength only', 'Both angle and wavelength', 'Neither'], a: 0, s: 'Δλ = (h/m_e c)(1 − cos θ). Depends only on scattering angle θ, not on incident wavelength.' },
        { q: 'If a photon and an electron have the same wavelength, which has more energy?', o: ['Photon', 'Electron', 'Both same', 'Cannot determine'], a: 0, s: 'Photon: E = hc/λ. Electron: E = p²/(2m) = h²/(2mλ²). For typical λ, photon energy >> electron energy.' },
      ],
    },
  ],
};

export const physicsExpansion3Chapters: NEETChapterData[] = [semiconductors, dualNature];
