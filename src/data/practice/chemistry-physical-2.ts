import type { ChapterData } from './types';

/* ─── Chapter: Chemical Thermodynamics (Expansion) ─── */
const chemThermo: ChapterData = {
  name: 'Chemical Thermodynamics',
  slug: 'chemical-thermodynamics',
  topics: [
    {
      name: 'Enthalpy & Hess\'s Law',
      slug: 'enthalpy-hess-law',
      easy: [
        { q: 'Enthalpy change at constant pressure equals:', o: ['Heat exchanged (q_p)', 'Work done', 'Internal energy change', 'Free energy change'], a: 0, s: 'At constant pressure, ΔH = q_p (heat exchanged at constant pressure).' },
        { q: 'An exothermic reaction has:', o: ['Negative ΔH', 'Positive ΔH', 'ΔH = 0', 'ΔH = ∞'], a: 0, s: 'Exothermic: heat is released → products have lower enthalpy → ΔH < 0.' },
        { q: 'Hess\'s law states that enthalpy change depends on:', o: ['Initial and final states only', 'Path of the reaction', 'Temperature only', 'Pressure only'], a: 0, s: 'Hess\'s law: ΔH is a state function — independent of path, depends only on initial and final states.' },
        { q: 'Standard enthalpy of formation of an element in its standard state is:', o: ['Zero', 'Positive', 'Negative', 'Undefined'], a: 0, s: 'By convention, ΔH°_f of elements in their standard state = 0.' },
        { q: 'The enthalpy of combustion is always:', o: ['Negative', 'Positive', 'Zero', 'Variable'], a: 0, s: 'Combustion releases heat → exothermic → ΔH < 0 always.' },
      ],
      medium: [
        { q: 'Given: C(s) + O₂(g) → CO₂(g), ΔH = −393.5 kJ and CO(g) + ½O₂(g) → CO₂(g), ΔH = −283 kJ. The ΔH for C(s) + ½O₂(g) → CO(g) is:', o: ['−110.5 kJ', '−676.5 kJ', '+110.5 kJ', '−283 kJ'], a: 0, s: 'By Hess\'s law: ΔH₁ = ΔH₂ + ΔH₃. −393.5 = ΔH₃ + (−283) → ΔH₃ = −110.5 kJ.' },
        { q: 'The enthalpy of neutralisation of a strong acid with a strong base is approximately:', o: ['−57.1 kJ/mol', '−13.7 kJ/mol', '−100 kJ/mol', '−28.5 kJ/mol'], a: 0, s: 'H⁺ + OH⁻ → H₂O, ΔH ≈ −57.1 kJ/mol for strong acid-base neutralisation.' },
        { q: 'For the reaction N₂ + 3H₂ → 2NH₃, if ΔH = −92.4 kJ, the enthalpy of formation of NH₃ is:', o: ['−46.2 kJ/mol', '−92.4 kJ/mol', '−184.8 kJ/mol', '+46.2 kJ/mol'], a: 0, s: 'ΔH°_f(NH₃) = −92.4/2 = −46.2 kJ/mol.' },
        { q: 'Bond energy of H−H is 436 kJ/mol and Cl−Cl is 242 kJ/mol. If H−Cl bond energy is 431 kJ/mol, ΔH for H₂ + Cl₂ → 2HCl is:', o: ['−184 kJ', '−862 kJ', '+184 kJ', '−92 kJ'], a: 0, s: 'ΔH = ΣBE(reactants) − ΣBE(products) = (436 + 242) − 2(431) = 678 − 862 = −184 kJ.' },
        { q: 'Kirchhoff\'s equation relates ΔH at two temperatures using:', o: ['ΔCp', 'ΔV', 'ΔS', 'ΔG'], a: 0, s: 'Kirchhoff: ΔH₂ − ΔH₁ = ΔCp(T₂ − T₁).' },
        { q: 'Lattice energy can be determined using:', o: ['Born-Haber cycle', 'Haber process', 'Carnot cycle', 'Krebs cycle'], a: 0, s: 'Born-Haber cycle uses Hess\'s law to determine lattice energy of ionic crystals.' },
      ],
      hard: [
        { q: 'The resonance energy of benzene can be calculated from the difference between:', o: ['Calculated ΔH (Kekulé) and observed ΔH of hydrogenation', 'ΔH of combustion and ΔH of formation', 'Bond energies of C−C and C=C', 'Ionisation energy and electron affinity'], a: 0, s: 'Resonance energy = ΔH_calc(Kekulé structure hydrogenation) − ΔH_observed. The difference shows extra stability.' },
        { q: 'For the reaction 2A + B → C, ΔH = −100 kJ. If ΔH_f(A) = 50 kJ/mol and ΔH_f(B) = −30 kJ/mol, ΔH_f(C) is:', o: ['−30 kJ/mol', '−100 kJ/mol', '+70 kJ/mol', '+30 kJ/mol'], a: 0, s: 'ΔH_rxn = ΔH_f(C) − [2ΔH_f(A) + ΔH_f(B)] → −100 = ΔH_f(C) − [100 + (−30)] → ΔH_f(C) = −100 + 70 = −30 kJ/mol.' },
        { q: 'At what temperature does the reaction become spontaneous if ΔH = +40 kJ and ΔS = +100 J/K?', o: ['Above 400 K', 'Below 400 K', 'At all temperatures', 'Never spontaneous'], a: 0, s: 'ΔG = ΔH − TΔS < 0 → T > ΔH/ΔS = 40000/100 = 400 K.' },
        { q: 'The integral heat of solution of NaOH is −42.6 kJ/mol. If 2 mol NaOH dissolves in large volume of water, heat released is:', o: ['85.2 kJ', '42.6 kJ', '21.3 kJ', '170.4 kJ'], a: 0, s: 'Integral heat = −42.6 kJ/mol. For 2 mol: 2 × 42.6 = 85.2 kJ released.' },
      ],
    },
    {
      name: 'Entropy & Gibbs Energy',
      slug: 'entropy-gibbs-energy',
      easy: [
        { q: 'Entropy is a measure of:', o: ['Disorder or randomness', 'Energy', 'Temperature', 'Pressure'], a: 0, s: 'Entropy measures the degree of disorder or randomness of a system.' },
        { q: 'For a spontaneous process, ΔG is:', o: ['Negative', 'Positive', 'Zero', 'Infinite'], a: 0, s: 'Spontaneous process: ΔG < 0 (Gibbs energy decreases).' },
        { q: 'The relationship between ΔG, ΔH, and ΔS is:', o: ['ΔG = ΔH − TΔS', 'ΔG = ΔH + TΔS', 'ΔG = TΔS − ΔH', 'ΔG = ΔH/TΔS'], a: 0, s: 'Gibbs-Helmholtz equation: ΔG = ΔH − TΔS.' },
        { q: 'At equilibrium, ΔG equals:', o: ['Zero', 'Minimum', 'Maximum', 'ΔH'], a: 0, s: 'At equilibrium: ΔG = 0 → no driving force for either direction.' },
        { q: 'The third law of thermodynamics states that entropy at 0 K is:', o: ['Zero for a perfect crystal', 'Maximum', 'Infinite', 'Undefined'], a: 0, s: '3rd law: entropy of a perfect crystalline substance at absolute zero is zero.' },
      ],
      medium: [
        { q: 'For the melting of ice at 0°C (ΔH = 6.01 kJ/mol), ΔS is:', o: ['22 J/(mol·K)', '6.01 J/(mol·K)', '44 J/(mol·K)', '273 J/(mol·K)'], a: 0, s: 'ΔS = ΔH/T = 6010/273 ≈ 22 J/(mol·K).' },
        { q: 'A reaction with ΔH > 0 and ΔS > 0 is spontaneous at:', o: ['High temperatures', 'Low temperatures', 'All temperatures', 'No temperature'], a: 0, s: 'ΔG = ΔH − TΔS. Both positive → ΔG < 0 only when TΔS > ΔH (high T).' },
        { q: 'The standard free energy change ΔG° is related to K_eq by:', o: ['ΔG° = −RT ln K', 'ΔG° = RT ln K', 'ΔG° = −RT/K', 'ΔG° = K/RT'], a: 0, s: 'ΔG° = −RT ln K_eq. Large K → negative ΔG° → spontaneous.' },
        { q: 'For vaporisation of water at 100°C and 1 atm:', o: ['ΔG = 0', 'ΔG < 0', 'ΔG > 0', 'ΔS = 0'], a: 0, s: 'At boiling point (equilibrium between liquid and vapour): ΔG = 0.' },
        { q: 'If ΔH = −50 kJ and ΔS = −100 J/K, the reaction is spontaneous at:', o: ['T < 500 K', 'T > 500 K', 'All temperatures', 'Never'], a: 0, s: 'ΔG = −50000 − T(−100) = −50000 + 100T. ΔG < 0 when T < 500 K.' },
      ],
      hard: [
        { q: 'For an ideal gas expanding isothermally from V₁ to V₂, ΔS_system is:', o: ['nR ln(V₂/V₁)', 'nR ln(V₁/V₂)', 'nCv ln(V₂/V₁)', '0'], a: 0, s: 'ΔS = qrev/T = nRT ln(V₂/V₁)/T = nR ln(V₂/V₁).' },
        { q: 'The efficiency of a Carnot engine operating between 500 K and 300 K is:', o: ['40%', '60%', '50%', '80%'], a: 0, s: 'η = 1 − T_cold/T_hot = 1 − 300/500 = 0.4 = 40%.' },
        { q: 'For the reaction A → B, if ΔG° = −5.7 kJ at 298 K, the equilibrium constant K is approximately:', o: ['10', '100', '1', '0.1'], a: 0, s: 'ΔG° = −RT ln K → −5700 = −8.314 × 298 × ln K → ln K = 2.3 → K ≈ 10.' },
        { q: 'The Clausius inequality states that for any cyclic process:', o: ['∮ δq/T ≤ 0', '∮ δq/T = 0', '∮ δq/T ≥ 0', '∮ δq/T = 1'], a: 0, s: 'Clausius inequality: ∮(δq/T) ≤ 0. Equal to 0 for reversible, negative for irreversible.' },
      ],
    },
  ],
};

/* ─── Chapter: Electrochemistry ─── */
const electrochemistry: ChapterData = {
  name: 'Electrochemistry',
  slug: 'electrochemistry',
  topics: [
    {
      name: 'Electrochemical Cells & EMF',
      slug: 'electrochemical-cells-emf',
      easy: [
        { q: 'In a galvanic cell, oxidation occurs at the:', o: ['Anode', 'Cathode', 'Salt bridge', 'Electrolyte'], a: 0, s: 'In galvanic cells, oxidation occurs at the anode (negative terminal).' },
        { q: 'The salt bridge in a galvanic cell maintains:', o: ['Electrical neutrality', 'Temperature', 'Concentration', 'Volume'], a: 0, s: 'Salt bridge maintains electrical neutrality by allowing ion flow between half-cells.' },
        { q: 'The standard hydrogen electrode has an assigned potential of:', o: ['0.00 V', '1.00 V', '−1.00 V', '0.50 V'], a: 0, s: 'SHE is assigned E° = 0.00 V as the reference electrode.' },
        { q: 'A substance with more positive E° value is a:', o: ['Stronger oxidising agent', 'Stronger reducing agent', 'Weaker oxidising agent', 'Neither'], a: 0, s: 'Higher E° = greater tendency for reduction = stronger oxidising agent.' },
        { q: 'The unit of cell potential (EMF) is:', o: ['Volt', 'Ampere', 'Ohm', 'Coulomb'], a: 0, s: 'EMF is measured in Volts (V).' },
      ],
      medium: [
        { q: 'For the Daniel cell: Zn|Zn²⁺||Cu²⁺|Cu, if E°(Zn²⁺/Zn) = −0.76V and E°(Cu²⁺/Cu) = +0.34V, the cell EMF is:', o: ['1.10 V', '0.42 V', '−1.10 V', '−0.42 V'], a: 0, s: 'E°_cell = E°_cathode − E°_anode = 0.34 − (−0.76) = 1.10 V.' },
        { q: 'Nernst equation at 298 K for a cell is E = E° − (0.059/n) log Q. If n = 2 and Q = 100, E = E° −:', o: ['0.059 V', '0.118 V', '0.0295 V', '0.059/2 V'], a: 0, s: 'E = E° − (0.059/2) × log(100) = E° − (0.0295)(2) = E° − 0.059 V.' },
        { q: 'The relationship between ΔG° and E°_cell is:', o: ['ΔG° = −nFE°', 'ΔG° = nFE°', 'ΔG° = −FE°/n', 'ΔG° = E°/nF'], a: 0, s: 'ΔG° = −nFE° where n = moles of electrons, F = 96485 C/mol.' },
        { q: 'During charging of a lead storage battery:', o: ['PbSO₄ converts back to Pb and PbO₂', 'Pb converts to PbSO₄', 'H₂SO₄ concentration decreases', 'Voltage decreases'], a: 0, s: 'Charging reverses the discharge reaction: PbSO₄ → Pb at anode, PbSO₄ → PbO₂ at cathode.' },
        { q: 'Molar conductivity of a solution at infinite dilution can be calculated using:', o: ['Kohlrausch\'s law', 'Faraday\'s law', 'Nernst equation', 'Raoult\'s law'], a: 0, s: 'Kohlrausch: Λ°_m = ν₊λ°₊ + ν₋λ°₋ (sum of individual ionic conductivities at ∞ dilution).' },
      ],
      hard: [
        { q: 'If E°_cell = 0.5 V and n = 2 at 298 K, the equilibrium constant K is approximately:', o: ['5.2 × 10¹⁶', '5.2 × 10⁸', '5.2 × 10⁴', '5.2 × 10²'], a: 0, s: 'log K = nE°/0.059 = 2(0.5)/0.059 = 16.95 → K ≈ 10¹⁶·⁹⁵ ≈ 5.2 × 10¹⁶.' },
        { q: 'Faraday\'s second law states that masses of substances deposited by the same charge are proportional to:', o: ['Their equivalent weights', 'Their molecular weights', 'Their atomic numbers', 'Their densities'], a: 0, s: 'Faraday\'s 2nd law: m₁/m₂ = E₁/E₂ (ratio of equivalent weights).' },
        { q: 'The conductivity of a 0.1M KCl solution is 0.0129 S/cm. If cell constant is 1.5 cm⁻¹, the measured conductance is:', o: ['0.0086 S', '0.01935 S', '0.0129 S', '0.0043 S'], a: 0, s: 'κ = G × cell constant → G = κ / cell constant = 0.0129/1.5 = 0.0086 S.' },
        { q: 'In a concentration cell with electrodes of the same metal dipped in solutions of concentrations C₁ and C₂ (C₁ > C₂), the EMF is:', o: ['(RT/nF) ln(C₁/C₂)', '(RT/nF) ln(C₂/C₁)', 'E° − (RT/nF) ln(C₁/C₂)', '0'], a: 0, s: 'For concentration cell: E° = 0. EMF = (RT/nF) ln(C₁/C₂) where C₁ > C₂.' },
      ],
    },
  ],
};

export const thermoElectrochemChapters: ChapterData[] = [chemThermo, electrochemistry];
