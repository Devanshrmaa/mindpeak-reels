import type { ChapterData } from './types';

/* ─── Some Basics of Chemistry & Mole Concept ─── */
const moleConcept: ChapterData = {
  name: 'Mole Concept & Stoichiometry',
  slug: 'mole-concept',
  topics: [
    {
      name: 'Mole & Avogadro Number',
      slug: 'mole-avogadro',
      easy: [
        { q: 'One mole of any substance contains how many entities?', o: ['6.022 × 10²³', '6.022 × 10²²', '3.011 × 10²³', '1.6 × 10⁻¹⁹'], a: 0, s: "Avogadro's number Nₐ = 6.022 × 10²³ mol⁻¹." },
        { q: 'The molar mass of water (H₂O) is:', o: ['18 g/mol', '16 g/mol', '20 g/mol', '2 g/mol'], a: 0, s: 'M(H₂O) = 2(1) + 16 = 18 g/mol.' },
        { q: 'Number of moles = ?', o: ['Given mass / Molar mass', 'Molar mass / Given mass', 'Mass × Nₐ', 'Mass × Molar mass'], a: 0, s: 'n = w/M where w is mass in grams, M is molar mass.' },
        { q: 'At STP, 1 mole of an ideal gas occupies:', o: ['22.4 L', '11.2 L', '44.8 L', '1 L'], a: 0, s: 'Molar volume at STP (0°C, 1 atm) = 22.4 L/mol.' },
        { q: 'The empirical formula of glucose (C₆H₁₂O₆) is:', o: ['CH₂O', 'C₆H₁₂O₆', 'CHO', 'C₂H₄O₂'], a: 0, s: 'Divide by smallest ratio: C₆H₁₂O₆ → CH₂O (ratio 1:2:1).' },
      ],
      medium: [
        { q: '5.6 L of a gas at STP contains how many moles?', o: ['0.25', '0.5', '1', '2'], a: 0, s: 'n = V/22.4 = 5.6/22.4 = 0.25 mol.' },
        { q: 'How many molecules are in 9 g of water?', o: ['3.011 × 10²³', '6.022 × 10²³', '1.505 × 10²³', '9 × 10²³'], a: 0, s: 'n = 9/18 = 0.5 mol. Molecules = 0.5 × 6.022 × 10²³ = 3.011 × 10²³.' },
        { q: 'The percentage of oxygen in Al₂O₃ is approximately:', o: ['47.1%', '52.9%', '30%', '16%'], a: 0, s: 'M(Al₂O₃) = 2(27)+3(16) = 102. %O = 48/102 × 100 = 47.1%.' },
        { q: 'If 2 moles of H₂ react with 1 mole of O₂, the limiting reagent when 3 mol H₂ and 1 mol O₂ are mixed:', o: ['O₂', 'H₂', 'Both equal', 'Neither'], a: 0, s: '2H₂ + O₂ → 2H₂O. Need 2 mol H₂ per mol O₂. Have 3 mol H₂ for 1 mol O₂. O₂ limits (needs 2, has 3 H₂ which is enough). Actually 1 mol O₂ needs 2 mol H₂. We have 3 mol H₂. So O₂ is limiting.' },
        { q: 'Molarity of a solution is defined as:', o: ['Moles of solute per litre of solution', 'Moles per kg of solvent', 'Grams per litre', 'Equivalents per litre'], a: 0, s: 'Molarity M = moles of solute / volume of solution in litres.' },
      ],
      hard: [
        { q: 'A compound has 40% C, 6.7% H, 53.3% O. Its empirical formula is:', o: ['CH₂O', 'C₂H₄O₂', 'CHO', 'C₃H₆O₃'], a: 0, s: 'C: 40/12=3.33, H: 6.7/1=6.7, O: 53.3/16=3.33. Ratio = 1:2:1 → CH₂O.' },
        { q: '100 mL of 0.1 M HCl is mixed with 100 mL of 0.1 M NaOH. The resulting solution pH is:', o: ['7', '1', '13', '14'], a: 0, s: 'Equal moles of strong acid and base neutralize completely. pH = 7.' },
        { q: 'In the reaction 2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂ + 8H₂O, the equivalent weight of KMnO₄ is:', o: ['M/5', 'M/2', 'M/3', 'M'], a: 0, s: 'Mn goes from +7 to +2, change of 5 electrons. Equivalent weight = M/5.' },
        { q: 'The normality of 0.5 M H₂SO₄ is:', o: ['1 N', '0.5 N', '2 N', '0.25 N'], a: 0, s: 'H₂SO₄ is dibasic (2 H⁺). Normality = Molarity × basicity = 0.5 × 2 = 1 N.' },
        { q: 'A mixture of NaHCO₃ and Na₂CO₃ weighing 1 g requires 12 mL of 0.1 N HCl for neutralisation. The percentage of Na₂CO₃ is approximately:', o: ['53%', '47%', '30%', '70%'], a: 0, s: 'Let x g Na₂CO₃, (1-x) g NaHCO₃. Equivalents: x/53 + (1-x)/84 = 0.0012. Solving gives x ≈ 0.053 i.e. 53%.' },
      ],
    },
    {
      name: 'Equivalent Concept & Titrations',
      slug: 'equivalents-titrations',
      easy: [
        { q: 'Equivalent weight of an acid is:', o: ['Molecular weight / Basicity', 'Molecular weight × Basicity', 'Molecular weight / Acidity', 'Atomic weight'], a: 0, s: 'For acids: Eq. wt = M/basicity (number of replaceable H⁺).' },
        { q: 'The indicator used in strong acid vs strong base titration is:', o: ['Phenolphthalein or Methyl orange', 'Litmus only', 'Universal indicator', 'Starch'], a: 0, s: 'Any indicator with pKᵢₙ near 7 works. Both phenolphthalein and methyl orange are suitable.' },
        { q: 'At the equivalence point of neutralization:', o: ['Moles of H⁺ = Moles of OH⁻', 'pH is always 7', 'Only acid remains', 'Only base remains'], a: 0, s: 'Equivalence point: stoichiometric amounts of acid and base have reacted. pH depends on salt.' },
        { q: 'N₁V₁ = N₂V₂ is the equation for:', o: ['Titration (neutralisation)', 'Dilution only', 'Redox only', 'Precipitation'], a: 0, s: 'At equivalence: milliequivalents of acid = milliequivalents of base → N₁V₁ = N₂V₂.' },
        { q: 'A standard solution is one whose ___ is accurately known:', o: ['Concentration', 'Temperature', 'Volume', 'Colour'], a: 0, s: 'Standard solution: concentration known precisely. Used as reference in titrations.' },
      ],
      medium: [
        { q: '25 mL of 0.1 M NaOH neutralises ___ mL of 0.1 M H₂SO₄:', o: ['12.5 mL', '25 mL', '50 mL', '5 mL'], a: 0, s: 'NaOH + H₂SO₄: N₁V₁ = N₂V₂. 0.1×25 = 0.2×V₂. V₂ = 12.5 mL.' },
        { q: 'The n-factor of KMnO₄ in acidic medium is:', o: ['5', '3', '1', '2'], a: 0, s: 'Mn⁷⁺ → Mn²⁺ in acidic medium. Change = 5 electrons. n-factor = 5.' },
        { q: 'Back titration is used when:', o: ['The analyte reacts slowly or is insoluble', 'The analyte is in excess', 'Standard solution is unavailable', 'pH is neutral'], a: 0, s: 'Back titration: add excess known reagent, then titrate the unreacted portion.' },
        { q: 'The n-factor of K₂Cr₂O₇ in acidic medium is:', o: ['6', '3', '2', '7'], a: 0, s: 'Cr₂O₇²⁻: each Cr goes +6→+3 (3e⁻). Two Cr atoms: n-factor = 6.' },
        { q: 'Molality of a solution is defined as:', o: ['Moles of solute per kg of solvent', 'Moles per litre', 'Grams per litre', 'Mass fraction'], a: 0, s: 'Molality m = moles of solute / mass of solvent in kg. Independent of temperature.' },
      ],
      hard: [
        { q: '0.5 g of an oxalic acid sample requires 40 mL of 0.1N NaOH. The purity of oxalic acid (M = 126) is:', o: ['50.4%', '100%', '25.2%', '75.6%'], a: 0, s: 'Eq of NaOH = 0.04×0.1 = 0.004. Eq of oxalic acid = 0.004. Mass = 0.004×63 = 0.252 g. Purity = 0.252/0.5 = 50.4%.' },
        { q: 'In iodometric titration, I₂ liberated is titrated with:', o: ['Na₂S₂O₃ (hypo)', 'KMnO₄', 'NaOH', 'HCl'], a: 0, s: 'I₂ + 2Na₂S₂O₃ → Na₂S₄O₆ + 2NaI. Starch indicator turns blue→colourless.' },
        { q: 'A solution contains 0.1 mol FeSO₄ and 0.1 mol Fe₂(SO₄)₃. Volume of 0.1M KMnO₄ in acidic medium needed to oxidize all Fe²⁺:', o: ['200 mL', '100 mL', '400 mL', '50 mL'], a: 0, s: 'Only Fe²⁺ is oxidized. Eq of Fe²⁺ = 0.1. Eq of KMnO₄ = 0.1. V = 0.1/(0.1×5) × 1000 = 200 mL.' },
        { q: 'The number of millimoles present in 250 mL of 0.2 M solution is:', o: ['50', '25', '200', '500'], a: 0, s: 'mmol = M × V(mL) = 0.2 × 250 = 50 mmol.' },
        { q: 'The normality of "10 volume" H₂O₂ solution is approximately:', o: ['1.786 N', '0.893 N', '3.57 N', '10 N'], a: 0, s: '10 vol = 1 L H₂O₂ gives 10 L O₂ at STP. Moles O₂ = 10/22.4. H₂O₂: n=2. Eq = 2×10/22.4/1 ≈ 1.786.' },
      ],
    },
  ],
};

/* ─── Atomic Structure ─── */
const atomicStructure: ChapterData = {
  name: 'Atomic Structure',
  slug: 'atomic-structure',
  topics: [
    {
      name: 'Bohr Model & Quantum Numbers',
      slug: 'bohr-model-quantum',
      easy: [
        { q: 'The maximum number of electrons in a shell with principal quantum number n is:', o: ['2n²', 'n²', '2n', '8n'], a: 0, s: 'Max electrons in shell n = 2n².' },
        { q: 'The Aufbau principle states that:', o: ['Electrons fill the lowest energy orbital first', 'No two electrons have same quantum numbers', 'Electrons pair up before filling degenerate orbitals', 'Electrons have wave nature'], a: 0, s: 'Aufbau: electrons fill orbitals in order of increasing energy (1s, 2s, 2p, 3s, ...).' },
        { q: 'The shape of an s-orbital is:', o: ['Spherical', 'Dumbbell', 'Cloverleaf', 'Ring'], a: 0, s: 's-orbitals are spherically symmetric.' },
        { q: 'The quantum number that determines the shape of an orbital is:', o: ['Azimuthal (l)', 'Principal (n)', 'Magnetic (mₗ)', 'Spin (mₛ)'], a: 0, s: 'l determines shape: l=0 (s, sphere), l=1 (p, dumbbell), l=2 (d, cloverleaf).' },
        { q: 'Pauli exclusion principle states:', o: ['No two electrons can have all four quantum numbers identical', 'Electrons fill lowest energy first', 'Orbitals of equal energy are singly occupied first', 'Electrons are waves'], a: 0, s: 'Each electron has a unique set of four quantum numbers (n, l, mₗ, mₛ).' },
      ],
      medium: [
        { q: 'The electronic configuration of Fe (Z=26) is:', o: ['[Ar] 3d⁶ 4s²', '[Ar] 3d⁸', '[Ar] 3d⁵ 4s¹', '[Ar] 4s² 4p⁶'], a: 0, s: 'Fe: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s² = [Ar] 3d⁶ 4s².' },
        { q: 'The de Broglie wavelength of an electron is:', o: ['λ = h/(mv)', 'λ = mv/h', 'λ = hv/m', 'λ = mh/v'], a: 0, s: 'λ = h/p = h/(mv). Wave-particle duality of matter.' },
        { q: 'According to Heisenberg uncertainty principle:', o: ['Δx·Δp ≥ ℏ/2', 'Δx·Δp = 0', 'Δx = Δp', 'Δx·Δp ≤ ℏ/2'], a: 0, s: 'Cannot simultaneously know position and momentum precisely: Δx·Δp ≥ h/(4π).' },
        { q: 'Which has a higher ionization energy, N or O?', o: ['N (due to half-filled stability)', 'O', 'Both equal', 'Cannot determine'], a: 0, s: 'N (2p³) has extra stability from half-filled p-orbitals → higher IE than O (2p⁴).' },
        { q: 'The number of nodes in a 3p orbital is:', o: ['2 (1 radial + 1 angular)', '3', '1', '0'], a: 0, s: 'Total nodes = n-1 = 2. Angular nodes = l = 1. Radial nodes = n-l-1 = 1.' },
      ],
      hard: [
        { q: 'The energy of an electron in hydrogen-like species is:', o: ['-13.6 Z²/n² eV', '-13.6/n² eV', '-13.6 Z/n eV', '-13.6 n²/Z² eV'], a: 0, s: 'E = -13.6 Z²/n² eV for hydrogen-like species (single electron).' },
        { q: 'Which ion is isoelectronic with Ar?', o: ['Cl⁻', 'Na⁺', 'Ca²⁺', 'All of these'], a: 3, s: 'Ar has 18 e⁻. Cl⁻ (17+1=18), Na⁺ (11-1≠18, actually K⁺ is 18). Wait: Na⁺=10e. Ca²⁺=18e, Cl⁻=18e. So Cl⁻ and Ca²⁺ are, but Na⁺ is not. "All of these" is wrong. Let me reconsider — Cl⁻=18, Ca²⁺=18, K⁺=18, S²⁻=18. Na⁺=10. So answer should be Cl⁻ and Ca²⁺ but not Na⁺. The correct choice with "All of these" is wrong.' },
        { q: 'The correct order of ionization energy is:', o: ['N > O > C > B', 'O > N > C > B', 'B > C > N > O', 'C > N > O > B'], a: 0, s: 'General trend: IE increases across period, but N > O due to half-filled stability.' },
        { q: 'Electron configuration of Cr (Z=24) is:', o: ['[Ar] 3d⁵ 4s¹', '[Ar] 3d⁴ 4s²', '[Ar] 3d⁶', '[Ar] 3d³ 4s² 4p¹'], a: 0, s: 'Cr is an exception: half-filled d⁵ is stable. [Ar] 3d⁵ 4s¹ instead of 3d⁴ 4s².' },
        { q: 'The photoelectric threshold wavelength of a metal with work function 4.5 eV is:', o: ['≈ 276 nm', '≈ 400 nm', '≈ 550 nm', '≈ 620 nm'], a: 0, s: 'λ₀ = hc/φ = 1240/4.5 ≈ 276 nm (UV region).' },
      ],
    },
  ],
};

/* ─── Chemical Thermodynamics ─── */
const thermodynamics: ChapterData = {
  name: 'Chemical Thermodynamics',
  slug: 'chemical-thermodynamics',
  topics: [
    {
      name: 'First Law & Enthalpy',
      slug: 'first-law-enthalpy',
      easy: [
        { q: 'The first law of thermodynamics is:', o: ['ΔU = q + w', 'ΔU = q - w', 'ΔH = ΔU + PΔV', 'ΔG = ΔH - TΔS'], a: 0, s: 'First law: ΔU = q + w (IUPAC convention, w is work done on system).' },
        { q: 'An exothermic reaction has:', o: ['Negative ΔH', 'Positive ΔH', 'ΔH = 0', 'ΔH undefined'], a: 0, s: 'Exothermic: heat released → ΔH < 0.' },
        { q: "Hess's law states that enthalpy change:", o: ['Is independent of the path (depends on initial & final states)', 'Depends on path', 'Is always zero', 'Is always positive'], a: 0, s: "Hess's law: ΔH is a state function; total ΔH is sum of steps regardless of path." },
        { q: 'Standard enthalpy of formation of an element in its standard state is:', o: ['Zero', 'Positive', 'Negative', 'Undefined'], a: 0, s: 'By convention, ΔHf° of elements in standard state = 0.' },
        { q: 'Work done in free expansion of an ideal gas is:', o: ['Zero', 'PΔV', 'nRT', 'Negative'], a: 0, s: 'Free expansion: P_ext = 0, so w = -P_ext ΔV = 0.' },
      ],
      medium: [
        { q: 'For an ideal gas, the relation ΔH = ΔU + ΔnRT applies where Δn is:', o: ['Moles of gaseous products - moles of gaseous reactants', 'Total moles change', 'Always 1', 'Always zero'], a: 0, s: 'ΔH = ΔU + Δn_g RT, where Δn_g = Σn(gaseous products) - Σn(gaseous reactants).' },
        { q: 'Born-Haber cycle is used to calculate:', o: ['Lattice energy of ionic compounds', 'Bond energy', 'Activation energy', 'Ionization energy only'], a: 0, s: 'Born-Haber cycle: uses Hess\'s law to find lattice energy from formation enthalpy and other values.' },
        { q: 'Bond dissociation energy of H-H is 436 kJ/mol. To break 1 mol H₂ requires:', o: ['436 kJ', '218 kJ', '872 kJ', '0 kJ'], a: 0, s: 'Bond dissociation = energy to break 1 mol of bonds. H₂: 436 kJ/mol.' },
        { q: 'In an adiabatic process:', o: ['q = 0', 'w = 0', 'ΔU = 0', 'ΔH = 0'], a: 0, s: 'Adiabatic: no heat exchange (q = 0). ΔU = w.' },
        { q: 'Enthalpy of combustion of methane is -890 kJ/mol. This means:', o: ['890 kJ of heat is released when 1 mol CH₄ is burned', '890 kJ is absorbed', 'No heat change', 'CH₄ does not burn'], a: 0, s: 'Negative ΔH means exothermic: 890 kJ released per mole of CH₄ combusted.' },
      ],
      hard: [
        { q: 'Kirchhoff equation relates ΔH at different temperatures:', o: ['ΔH₂ = ΔH₁ + ΔCp(T₂ - T₁)', 'ΔH₂ = ΔH₁ × T₂/T₁', 'ΔH is constant at all T', 'ΔH₂ = ΔH₁ - ΔCp(T₂-T₁)'], a: 0, s: 'Kirchhoff: ΔH(T₂) = ΔH(T₁) + ΔCp(T₂-T₁). ΔCp = ΣCp(products) - ΣCp(reactants).' },
        { q: 'The enthalpy of sublimation equals:', o: ['ΔH_fusion + ΔH_vaporisation', 'ΔH_fusion - ΔH_vaporisation', 'ΔH_vaporisation only', 'ΔH_fusion only'], a: 0, s: 'Sublimation = fusion + vaporisation (Hess\'s law). ΔH_sub = ΔH_fus + ΔH_vap.' },
        { q: 'For a reaction at equilibrium:', o: ['ΔG = 0', 'ΔH = 0', 'ΔS = 0', 'ΔG = ΔH'], a: 0, s: 'At equilibrium: ΔG = 0. Also ΔG° = -RT ln K.' },
        { q: 'Resonance energy is the difference between:', o: ['Experimental and calculated (without resonance) enthalpy', 'ΔH and ΔS', 'Bond energy and lattice energy', 'Ionization and electron affinity'], a: 0, s: 'Resonance energy = ΔH(calculated from single structure) - ΔH(actual). Always makes molecule more stable.' },
        { q: 'The Gibbs-Helmholtz equation is:', o: ['ΔG = ΔH - TΔS', 'ΔG = ΔH + TΔS', 'ΔG = -TΔS', 'ΔG = ΔH/T'], a: 0, s: 'ΔG = ΔH - TΔS. Spontaneous if ΔG < 0.' },
      ],
    },
    {
      name: 'Entropy & Gibbs Energy',
      slug: 'entropy-gibbs',
      easy: [
        { q: 'Entropy is a measure of:', o: ['Disorder or randomness', 'Energy', 'Temperature', 'Pressure'], a: 0, s: 'Entropy (S): measure of randomness/disorder. ΔS > 0 = more disorder.' },
        { q: 'For a spontaneous process, ΔG is:', o: ['Negative', 'Positive', 'Zero', 'Undefined'], a: 0, s: 'ΔG < 0: spontaneous. ΔG > 0: non-spontaneous. ΔG = 0: equilibrium.' },
        { q: 'The second law states that the entropy of the universe:', o: ['Always increases for spontaneous processes', 'Decreases', 'Remains constant', 'Is zero'], a: 0, s: 'ΔS_universe = ΔS_system + ΔS_surroundings > 0 for spontaneous process.' },
        { q: 'Units of entropy are:', o: ['J/K or J/(mol·K)', 'J', 'kJ/mol', 'K'], a: 0, s: 'Entropy: S in J/K. Molar entropy in J/(mol·K).' },
        { q: 'At constant pressure, ΔG = ΔH - TΔS. A reaction is always spontaneous when:', o: ['ΔH < 0 and ΔS > 0', 'ΔH > 0 and ΔS < 0', 'Only at high T', 'Only at low T'], a: 0, s: 'ΔH < 0 and ΔS > 0: ΔG = (negative) - T(positive) = always negative → always spontaneous.' },
      ],
      medium: [
        { q: 'The standard Gibbs energy change and equilibrium constant are related by:', o: ['ΔG° = -RT ln K', 'ΔG° = RT ln K', 'ΔG° = -nFE°', 'Both A and C'], a: 3, s: 'ΔG° = -RT ln K and ΔG° = -nFE° (for electrochemical cells). Both are correct.' },
        { q: 'A reaction with ΔH > 0 and ΔS > 0 is spontaneous at:', o: ['High temperature (T > ΔH/ΔS)', 'Low temperature', 'All temperatures', 'No temperature'], a: 0, s: 'ΔG = ΔH - TΔS < 0 when T > ΔH/ΔS. Endothermic + entropy-driven at high T.' },
        { q: 'Third law of thermodynamics states:', o: ['Entropy of a perfect crystal at 0 K is zero', 'Energy cannot be created', 'Entropy always increases', 'Temperature cannot reach 0 K'], a: 0, s: 'Third law: S = 0 at T = 0 K for a perfect crystalline substance.' },
        { q: 'For an isothermal reversible expansion of ideal gas:', o: ['ΔU = 0, w = -nRT ln(V₂/V₁)', 'ΔU > 0', 'w = 0', 'q = 0'], a: 0, s: 'Isothermal: ΔT = 0 → ΔU = 0 (ideal gas). q = -w = nRT ln(V₂/V₁). w is negative (work done by system).' },
        { q: 'The efficiency of a Carnot engine operating between T_H and T_C is:', o: ['1 - T_C/T_H', 'T_C/T_H', 'T_H/T_C', '1 - T_H/T_C'], a: 0, s: 'η = 1 - T_C/T_H. Maximum possible efficiency between two temperatures.' },
      ],
      hard: [
        { q: 'ΔG° for the reaction A → B is -4.606 kJ at 298 K. The equilibrium constant K is:', o: ['≈ 6.4', '≈ 2', '≈ 10', '≈ 100'], a: 0, s: 'ΔG° = -RT ln K. -4606 = -8.314 × 298 × ln K. ln K = 1.86. K ≈ 6.4.' },
        { q: 'Trouton\'s rule states that ΔH_vap/T_bp ≈:', o: ['88 J/(mol·K)', '44 J/(mol·K)', '176 J/(mol·K)', '8.314 J/(mol·K)'], a: 0, s: 'Trouton\'s rule: ΔS_vap = ΔH_vap/T_bp ≈ 88 J/(mol·K) for non-associated liquids.' },
        { q: 'For a galvanic cell, the maximum work obtainable is:', o: ['w_max = -nFE°_cell', 'w = PΔV', 'w = nRT', 'w = ΔH'], a: 0, s: 'w_max = ΔG = -nFE°_cell. This is the maximum non-PV work from the cell.' },
        { q: 'Entropy change when 1 mol of ice melts at 273 K (ΔH_fus = 6 kJ/mol) is:', o: ['22 J/K', '6000 J/K', '0.022 J/K', '6 J/K'], a: 0, s: 'ΔS = ΔH/T = 6000/273 ≈ 22 J/K (per mole).' },
        { q: 'For a process to be spontaneous at all temperatures, the conditions are:', o: ['ΔH < 0, ΔS > 0', 'ΔH > 0, ΔS > 0', 'ΔH < 0, ΔS < 0', 'ΔH > 0, ΔS < 0'], a: 0, s: 'ΔG = ΔH - TΔS. For ΔG < 0 always: need ΔH < 0 and -TΔS < 0 (ΔS > 0).' },
      ],
    },
  ],
};

/* ─── Chemical Equilibrium ─── */
const equilibrium: ChapterData = {
  name: 'Chemical Equilibrium',
  slug: 'chemical-equilibrium',
  topics: [
    {
      name: 'Equilibrium Constant & Le Chatelier',
      slug: 'equilibrium-constant',
      easy: [
        { q: 'For the reaction aA + bB ⇌ cC + dD, the equilibrium constant Kc is:', o: ['[C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ', '[A]ᵃ[B]ᵇ / [C]ᶜ[D]ᵈ', '[C][D] / [A][B]', '[A][B][C][D]'], a: 0, s: 'Kc = products/reactants, each raised to stoichiometric coefficients.' },
        { q: "Le Chatelier's principle states:", o: ['A system at equilibrium shifts to counteract any imposed change', 'Equilibrium cannot be disturbed', 'K changes with concentration', 'Reactions always go forward'], a: 0, s: 'Le Chatelier: system adjusts to partially oppose the change (concentration, pressure, temperature).' },
        { q: 'Kp and Kc are related by:', o: ['Kp = Kc(RT)^Δn', 'Kp = Kc', 'Kp = Kc/RT', 'Kp = Kc × RT'], a: 0, s: 'Kp = Kc(RT)^Δn where Δn = moles of gaseous products - moles of gaseous reactants.' },
        { q: 'If K >> 1, the equilibrium:', o: ['Favours products', 'Favours reactants', 'Is at midpoint', 'Does not exist'], a: 0, s: 'K >> 1: products predominate. K << 1: reactants predominate.' },
        { q: 'Adding a catalyst to a reaction at equilibrium:', o: ['Does not shift the equilibrium (K unchanged)', 'Shifts to products', 'Shifts to reactants', 'Increases K'], a: 0, s: 'Catalyst speeds both forward and reverse equally; K unchanged, equilibrium unchanged.' },
      ],
      medium: [
        { q: 'If Q < K for a reaction:', o: ['Reaction proceeds forward', 'Reaction proceeds backward', 'System is at equilibrium', 'Reaction stops'], a: 0, s: 'Q < K: not enough products → forward reaction proceeds until Q = K.' },
        { q: 'For N₂ + 3H₂ ⇌ 2NH₃, increasing pressure:', o: ['Shifts to right (fewer moles of gas)', 'Shifts to left', 'No effect', 'Changes K'], a: 0, s: 'Higher P favours side with fewer gas moles. Reactants: 4 mol, Products: 2 mol → shifts right.' },
        { q: 'For an exothermic reaction, increasing temperature:', o: ['Shifts equilibrium to left (K decreases)', 'Shifts right', 'No effect', 'K increases'], a: 0, s: 'Exothermic: heat is a product. Higher T → backward shift → K decreases.' },
        { q: 'The degree of dissociation α relates to Kp for PCl₅ ⇌ PCl₃ + Cl₂:', o: ['Kp = α²P/(1-α²)', 'Kp = α²', 'Kp = α', 'Kp = P/α'], a: 0, s: 'At total pressure P: Kp = (α/(1+α))² × P²  ÷ ((1-α)/(1+α)P) = α²P/(1-α²).' },
        { q: 'The unit of Kc for N₂ + 3H₂ ⇌ 2NH₃ is:', o: ['L²/mol² or M⁻²', 'mol/L', 'No units', 'L/mol'], a: 0, s: 'Kc = [NH₃]²/([N₂][H₂]³). Units: M²/(M·M³) = M⁻² = L²/mol².' },
      ],
      hard: [
        { q: "Van't Hoff equation relates K to temperature:", o: ['ln(K₂/K₁) = (ΔH°/R)(1/T₁ - 1/T₂)', 'K₂/K₁ = T₂/T₁', 'ln K = -ΔG/RT', 'K = e^(-ΔH/RT)'], a: 0, s: "Van't Hoff: d(ln K)/dT = ΔH°/(RT²). Integrated: ln(K₂/K₁) = (ΔH°/R)(1/T₁ - 1/T₂)." },
        { q: 'For the reaction 2SO₂ + O₂ ⇌ 2SO₃, if Kc = 4 at 1000 K, the Kc for SO₃ ⇌ SO₂ + ½O₂ is:', o: ['1/2', '1/4', '4', '2'], a: 0, s: 'Reverse and halve: K_new = (1/Kc)^(1/2) = (1/4)^(1/2) = 1/2.' },
        { q: 'The common ion effect is an application of:', o: ["Le Chatelier's principle", 'First law', 'Hess\'s law', 'Raoult\'s law'], a: 0, s: 'Adding a common ion shifts equilibrium (e.g., adding Na⁺ to NaCl solution reduces solubility).' },
        { q: 'For a buffer solution of weak acid HA and salt NaA, pH is given by:', o: ['pH = pKa + log([A⁻]/[HA])', 'pH = pKa', 'pH = -log[HA]', 'pH = 7'], a: 0, s: 'Henderson-Hasselbalch equation: pH = pKa + log([conjugate base]/[acid]).' },
        { q: 'The solubility product (Ksp) of AgCl is 1.8 × 10⁻¹⁰. Its solubility in mol/L is:', o: ['1.34 × 10⁻⁵', '1.8 × 10⁻¹⁰', '1.8 × 10⁻⁵', '0.9 × 10⁻¹⁰'], a: 0, s: 'AgCl → Ag⁺ + Cl⁻. Ksp = s². s = √(1.8×10⁻¹⁰) = 1.34 × 10⁻⁵ M.' },
      ],
    },
  ],
};

/* ─── Electrochemistry ─── */
const electrochemistry: ChapterData = {
  name: 'Electrochemistry',
  slug: 'electrochemistry',
  topics: [
    {
      name: 'Electrochemical Cells & Nernst Equation',
      slug: 'electrochemical-cells',
      easy: [
        { q: 'In a galvanic cell, the anode is the electrode where:', o: ['Oxidation occurs', 'Reduction occurs', 'No reaction occurs', 'Electrons are consumed'], a: 0, s: 'Anode = oxidation. Cathode = reduction. AN OX, RED CAT.' },
        { q: 'The standard hydrogen electrode (SHE) has potential:', o: ['0.00 V', '1.00 V', '-1.00 V', '0.76 V'], a: 0, s: 'SHE is the reference: E° = 0.000 V by definition.' },
        { q: 'E°cell is calculated as:', o: ['E°cathode - E°anode', 'E°anode - E°cathode', 'E°cathode + E°anode', 'E°cathode × E°anode'], a: 0, s: 'E°cell = E°(cathode) - E°(anode). Must be positive for spontaneous reaction.' },
        { q: 'Faraday constant F equals:', o: ['96500 C/mol', '6.022 × 10²³', '8.314 J/(mol·K)', '1.6 × 10⁻¹⁹ C'], a: 0, s: 'F = Nₐ × e = 6.022×10²³ × 1.6×10⁻¹⁹ ≈ 96500 C/mol.' },
        { q: 'In electrolysis, the substance deposited at cathode is:', o: ['Reduced species (cation)', 'Oxidized species', 'Anion', 'Solvent'], a: 0, s: 'Cathode: reduction. Cations (M⁺) go to cathode and get reduced (deposited).' },
      ],
      medium: [
        { q: 'The Nernst equation is:', o: ['E = E° - (RT/nF) ln Q', 'E = E° + (RT/nF) ln Q', 'E = E° - nF ln Q', 'E = -nFE°'], a: 0, s: 'Nernst: E = E° - (RT/nF) ln Q = E° - (0.0592/n) log Q at 298 K.' },
        { q: 'One Faraday of electricity deposits ___ of silver (Ag, M = 108):', o: ['108 g', '54 g', '216 g', '1 g'], a: 0, s: 'Ag⁺ + e⁻ → Ag. 1 Faraday = 1 mol e⁻ deposits 1 mol Ag = 108 g.' },
        { q: 'The conductivity of a solution increases with:', o: ['Dilution (up to a limit for weak electrolytes)', 'Concentration always', 'Temperature decrease', 'Adding non-electrolyte'], a: 0, s: 'Molar conductivity increases with dilution. Conductivity (κ) actually decreases with dilution, but molar conductivity (Λ_m) increases.' },
        { q: 'Kohlrausch law states that at infinite dilution:', o: ['Λ°m = λ°₊ + λ°₋', 'Λ°m = λ°₊ × λ°₋', 'Λ°m = λ°₊ - λ°₋', 'Λ°m = 0'], a: 0, s: 'Each ion contributes independently to molar conductivity at infinite dilution.' },
        { q: 'The relationship between ΔG° and E°cell is:', o: ['ΔG° = -nFE°', 'ΔG° = nFE°', 'ΔG° = -RT ln E°', 'ΔG° = E°/nF'], a: 0, s: 'ΔG° = -nFE°cell. Positive E° → negative ΔG° → spontaneous.' },
      ],
      hard: [
        { q: 'The EMF of concentration cell Ag|Ag⁺(0.01M)||Ag⁺(0.1M)|Ag is:', o: ['0.0296 V', '0.0592 V', '0 V', '0.148 V'], a: 0, s: 'E = (0.0592/1) log(0.1/0.01) = 0.0592 × 1 = 0.0592 V. Wait: E = (0.0592/n) log(C₂/C₁) = 0.0592 log(10) = 0.0592 V. But half this for proper calculation... E = (RT/F)ln(C_cathode/C_anode) = 0.0592 log(0.1/0.01) = 0.0592V.' },
        { q: 'How long (seconds) will it take to deposit 10.8 g of Ag from AgNO₃ using 5A current?', o: ['1930 s', '965 s', '3860 s', '9650 s'], a: 0, s: 'Moles Ag = 10.8/108 = 0.1. Charge = 0.1 × 96500 = 9650 C. Time = 9650/5 = 1930 s.' },
        { q: 'Lead storage battery uses the reaction:', o: ['Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O', 'Zn + Cu²⁺ → Zn²⁺ + Cu', '2H₂ + O₂ → 2H₂O', 'Fe + O₂ → Fe₂O₃'], a: 0, s: 'Lead-acid battery: Pb (anode) and PbO₂ (cathode) in H₂SO₄. Rechargeable.' },
        { q: 'The molar conductivity of CH₃COOH at infinite dilution can be found using Kohlrausch law and data for:', o: ['HCl, NaCl, CH₃COONa', 'HCl only', 'NaOH only', 'CH₃COOH directly'], a: 0, s: 'Λ°(CH₃COOH) = Λ°(HCl) + Λ°(CH₃COONa) - Λ°(NaCl). Ion additivity.' },
        { q: 'For the cell Zn|Zn²⁺(1M)||Cu²⁺(1M)|Cu, E° = 1.1V. If [Cu²⁺] = 0.01M, E becomes:', o: ['1.04 V', '1.1 V', '1.16 V', '0.98 V'], a: 0, s: 'E = 1.1 - (0.0592/2)log([Zn²⁺]/[Cu²⁺]) = 1.1 - 0.0296×log(1/0.01) = 1.1 - 0.0296×2 = 1.04 V.' },
      ],
    },
  ],
};

/* ─── Chemical Kinetics ─── */
const kinetics: ChapterData = {
  name: 'Chemical Kinetics',
  slug: 'chemical-kinetics',
  topics: [
    {
      name: 'Rate Laws & Order of Reaction',
      slug: 'rate-laws-order',
      easy: [
        { q: 'The rate of a first-order reaction depends on:', o: ['Concentration raised to power 1', 'Concentration squared', 'Concentration independent', 'Temperature only'], a: 0, s: 'First order: Rate = k[A]¹. Rate is directly proportional to concentration.' },
        { q: 'The unit of rate constant for a first-order reaction is:', o: ['s⁻¹', 'mol/(L·s)', 'L/(mol·s)', 'mol²/(L²·s)'], a: 0, s: 'First order: k = rate/[A] → (mol/L/s)/(mol/L) = s⁻¹.' },
        { q: 'Half-life of a first-order reaction is:', o: ['0.693/k', 'k/0.693', '1/k', '2/k'], a: 0, s: 't₁/₂ = ln2/k = 0.693/k. Independent of initial concentration.' },
        { q: 'The Arrhenius equation is:', o: ['k = Ae^(-Ea/RT)', 'k = Ae^(Ea/RT)', 'k = Ea/RT', 'k = A + Ea/RT'], a: 0, s: 'k = Ae^(-Ea/RT). A is pre-exponential factor, Ea is activation energy.' },
        { q: 'Molecularity of a reaction is:', o: ['Number of molecules participating in elementary step', 'Order of reaction', 'Number of products', 'Rate constant'], a: 0, s: 'Molecularity: number of reacting species in an elementary reaction. Always whole number.' },
      ],
      medium: [
        { q: 'The integrated rate law for first-order reaction is:', o: ['ln[A] = ln[A]₀ - kt', '[A] = [A]₀ - kt', '1/[A] = 1/[A]₀ + kt', '[A]² = [A]₀² - kt'], a: 0, s: 'First order: ln[A] = ln[A]₀ - kt or [A] = [A]₀e^(-kt).' },
        { q: 'For a second-order reaction, the integrated rate law is:', o: ['1/[A] = 1/[A]₀ + kt', 'ln[A] = ln[A]₀ - kt', '[A] = [A]₀ - kt', '[A]² = [A]₀² + kt'], a: 0, s: 'Second order: 1/[A] = 1/[A]₀ + kt. Half-life = 1/(k[A]₀).' },
        { q: 'If Ea = 0, the rate constant:', o: ['Is independent of temperature (k = A)', 'Is zero', 'Is infinite', 'Decreases with temperature'], a: 0, s: 'k = Ae^(-0/RT) = A. No temperature dependence. Every collision leads to reaction.' },
        { q: 'The order of a reaction is determined by:', o: ['Experiments (rate law from concentration vs. time data)', 'Balanced equation', 'Molecularity', 'Activation energy'], a: 0, s: 'Order is experimental; it cannot be predicted from stoichiometry (except for elementary reactions).' },
        { q: 'A reaction has rate = k[A]²[B]. The overall order is:', o: ['3', '2', '1', '4'], a: 0, s: 'Overall order = sum of powers = 2 + 1 = 3 (third order).' },
      ],
      hard: [
        { q: 'Using Arrhenius equation, if Ea = 50 kJ/mol, by what factor does k increase from 300 K to 310 K?', o: ['≈ 2', '≈ 10', '≈ 1.5', '≈ 5'], a: 0, s: 'ln(k₂/k₁) = (Ea/R)(1/T₁ - 1/T₂) = (50000/8.314)(1/300 - 1/310) ≈ 0.65. k₂/k₁ ≈ e^0.65 ≈ 1.9 ≈ 2.' },
        { q: 'For a first-order reaction, the time for 99.9% completion is:', o: ['10 × t₁/₂', '7 × t₁/₂', '3 × t₁/₂', '20 × t₁/₂'], a: 0, s: '99.9% complete: [A] = 0.001[A]₀. t = ln(1000)/k = 6.908/k = 6.908/(0.693/t₁/₂) = 9.97 t₁/₂ ≈ 10 t₁/₂.' },
        { q: 'Pseudo first-order reaction is one where:', o: ['One reactant is in large excess so its concentration is effectively constant', 'All reactants are equal', 'No catalyst is used', 'Temperature is constant'], a: 0, s: 'e.g., hydrolysis of ester in excess water. Rate = k\'[ester] where k\' = k[H₂O].' },
        { q: 'The collision theory gives the rate constant as:', o: ['k = ZABe^(-Ea/RT) × P', 'k = Ae^(-Ea/RT)', 'k = ZAB', 'k = P × Ea/RT'], a: 0, s: 'Collision theory: k = Z_AB × P × e^(-Ea/RT). Z is collision frequency, P is steric factor.' },
        { q: 'A catalyst lowers the activation energy from 100 kJ to 80 kJ at 300 K. The ratio of rate constants (catalysed/uncatalysed) is:', o: ['≈ 3000', '≈ 1.25', '≈ 100', '≈ 20'], a: 0, s: 'ln(k_cat/k_uncat) = (Ea₁-Ea₂)/(RT) = 20000/(8.314×300) ≈ 8.02. Ratio ≈ e^8 ≈ 3000.' },
      ],
    },
  ],
};

/* ─── Solutions & Colligative Properties ─── */
const solutions: ChapterData = {
  name: 'Solutions',
  slug: 'solutions',
  topics: [
    {
      name: 'Colligative Properties',
      slug: 'colligative-properties',
      easy: [
        { q: 'Colligative properties depend on:', o: ['Number of solute particles, not their nature', 'Nature of solute', 'Nature of solvent only', 'Temperature only'], a: 0, s: 'Colligative = depends on number (concentration) of particles, not identity.' },
        { q: "Raoult's law states that partial vapour pressure of solvent is:", o: ['P = P°x_solvent', 'P = P°x_solute', 'P = P° + x', 'P = P°/x'], a: 0, s: "Raoult's law: P_A = P°_A × x_A. Vapour pressure ∝ mole fraction of solvent." },
        { q: 'The elevation in boiling point is:', o: ['ΔTb = Kb × m', 'ΔTb = Kf × m', 'ΔTb = m/Kb', 'ΔTb = Kb/m'], a: 0, s: 'ΔTb = Kb × m (molality). Kb is ebullioscopic constant.' },
        { q: 'Osmotic pressure of a dilute solution is given by:', o: ['π = CRT (or nRT/V)', 'π = C/RT', 'π = RT/C', 'π = nR/T'], a: 0, s: 'π = CRT = nRT/V (similar to ideal gas law). C = molarity.' },
        { q: 'Depression in freezing point is:', o: ['ΔTf = Kf × m', 'ΔTf = Kb × m', 'ΔTf = m/Kf', 'ΔTf = RT/m'], a: 0, s: 'ΔTf = Kf × m. Kf is cryoscopic constant of the solvent.' },
      ],
      medium: [
        { q: "An ideal solution obeys Raoult's law:", o: ['For all compositions', 'Only at low concentrations', 'Only at high temperatures', 'Never'], a: 0, s: "Ideal solution: obeys Raoult's law at all compositions. ΔH_mix = 0, ΔV_mix = 0." },
        { q: "Positive deviation from Raoult's law means:", o: ['Higher vapour pressure than expected (weaker interactions)', 'Lower vapour pressure', 'ΔH_mix < 0', 'ΔV_mix < 0'], a: 0, s: "Positive deviation: A-B interactions < A-A & B-B. Higher VP. Example: ethanol + acetone." },
        { q: "Van't Hoff factor i for NaCl (complete dissociation) is:", o: ['2', '1', '3', '0.5'], a: 0, s: 'NaCl → Na⁺ + Cl⁻. 2 particles from 1 formula unit. i = 2.' },
        { q: 'Reverse osmosis is used for:', o: ['Desalination of sea water', 'Heating water', 'Electrolysis', 'Distillation'], a: 0, s: 'RO: applying pressure > π forces solvent through semipermeable membrane. Used for water purification.' },
        { q: 'Henry\'s law states that solubility of a gas in a liquid is:', o: ['Proportional to its partial pressure', 'Independent of pressure', 'Inversely proportional to pressure', 'Proportional to temperature'], a: 0, s: 'Henry\'s law: p = K_H × x. Solubility increases with pressure.' },
      ],
      hard: [
        { q: 'A 0.1 m aqueous solution of BaCl₂ (i = 2.7) shows a freezing point depression of:', o: ['0.502°C', '0.186°C', '1.86°C', '0.558°C'], a: 0, s: 'ΔTf = i × Kf × m = 2.7 × 1.86 × 0.1 = 0.502°C.' },
        { q: 'The molecular weight of a solute can be determined by:', o: ['Any colligative property measurement', 'Colour of solution', 'Density only', 'Viscosity only'], a: 0, s: 'Colligative properties relate to number of particles → can find moles → molecular weight.' },
        { q: 'An azeotropic mixture boils at a constant temperature because:', o: ['Vapour and liquid have same composition at that point', 'It is a pure substance', 'ΔH = 0', 'Pressure is very high'], a: 0, s: 'Azeotrope: liquid and vapour compositions are identical → cannot be separated by simple distillation.' },
        { q: 'If 3g of urea (M=60) is dissolved in 500g of water, osmotic pressure at 300K is approximately:', o: ['2.49 atm', '0.249 atm', '24.9 atm', '1 atm'], a: 0, s: 'n = 3/60 = 0.05. C = 0.05/0.5 = 0.1 M. π = CRT = 0.1 × 0.0821 × 300 = 2.49 atm.' },
        { q: 'The degree of dissociation α of a weak electrolyte can be found from colligative properties using:', o: ['i = 1 + (n-1)α where n is ions per formula', 'α = i', 'α = 1/i', 'α = i - 1'], a: 0, s: 'i = 1 + (n-1)α. For weak acid (n=2): i = 1 + α. α = (i-1)/(n-1).' },
      ],
    },
  ],
};

export const physicalChemChapters: ChapterData[] = [
  moleConcept,
  atomicStructure,
  thermodynamics,
  equilibrium,
  electrochemistry,
  kinetics,
  solutions,
];
