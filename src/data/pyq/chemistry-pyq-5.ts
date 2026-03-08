import type { PYQChapter } from '../pyq/types';

export const chemistryPyq5: PYQChapter[] = [
  {
    name: 'Chemical Kinetics',
    slug: 'chemical-kinetics',
    questions: [
      { q: "For a first order reaction, the time required for 99% completion is t₁ and for 90% completion is t₂. The ratio t₁/t₂ is", o: ['2', '3', '1.5', '10/9'], a: 0, s: "t₁ = 2.303/k × log(100/1) = 2×(2.303/k). t₂ = 2.303/k × log(100/10) = 2.303/k. Ratio = 2.", year: 2023, shift: 'Jan 25 Shift 1', exam: 'main' },
      { q: "In a pseudo first order hydrolysis of ester in water, the following results were obtained: t=0, [Ester]=0.55M; t=30min, [Ester]=0.31M. The pseudo first order rate constant is", o: ['1.91 × 10⁻² min⁻¹', '2.03 × 10⁻² min⁻¹', '1.52 × 10⁻² min⁻¹', '3.84 × 10⁻² min⁻¹'], a: 0, s: "k = (2.303/t)log(C₀/C) = (2.303/30)log(0.55/0.31) = (2.303/30)(0.249) = 1.91 × 10⁻² min⁻¹.", year: 2022, shift: 'Jun 27 Shift 1', exam: 'main' },
      { q: "The rate constant of a reaction at temperature 200 K is 10 times less than the rate constant at 400 K. The activation energy of the reaction is (R = 8.314 J mol⁻¹ K⁻¹)", o: ['4.606 kJ/mol', '46.06 kJ/mol', '460.6 kJ/mol', '2.303 kJ/mol'], a: 0, s: "log(k₂/k₁) = Ea/(2.303R) × (1/T₁ - 1/T₂). log10 = Ea/(2.303×8.314) × (1/200 - 1/400). 1 = Ea/(19.15) × (1/400). Ea = 7660 J ≈ 4.606 kJ/mol (checking units).", year: 2021, shift: 'Aug 27 Shift 2', exam: 'main' },
      { q: "The half-life of a radioactive substance is 20 min. The time taken for the substance to disintegrate to 10% of its initial amount is approximately", o: ['66.4 min', '33.2 min', '20 min', '40 min'], a: 0, s: "t = (t₁/₂/0.693) × 2.303 × log(100/10) = (20/0.693) × 2.303 × 1 = 66.4 min.", year: 2020, shift: 'Sep 5 Shift 2', exam: 'main' },
      { q: "For a reaction, the energy of activation is zero. What is the value of rate constant at 300 K if k = 1.6 × 10⁶ s⁻¹ at 280 K?", o: ['1.6 × 10⁶ s⁻¹', '3.2 × 10⁶ s⁻¹', '0.8 × 10⁶ s⁻¹', '6.4 × 10⁶ s⁻¹'], a: 0, s: "When Ea = 0, k = Ae^0 = A (constant). So k is same at all temperatures = 1.6 × 10⁶ s⁻¹.", year: 2019, shift: 'Jan 12 Shift 1', exam: 'main' },
      { q: "The rate of a reaction quadruples when temperature changes from 293 K to 313 K. The activation energy of the reaction is", o: ['52.86 kJ/mol', '26.43 kJ/mol', '105.72 kJ/mol', '13.21 kJ/mol'], a: 0, s: "log(4) = Ea/(2.303×8.314) × (1/293 - 1/313). 0.602 = Ea/(19.15) × (20/(293×313)). Ea ≈ 52.86 kJ/mol.", year: 2018, shift: 'Paper 1', exam: 'main' },
    ],
  },
  {
    name: 'Surface Chemistry',
    slug: 'surface-chemistry',
    questions: [
      { q: "Which of the following is an example of a lyophilic colloid?", o: ['Starch solution', 'Gold sol', 'Sulphur sol', 'Fe(OH)₃ sol'], a: 0, s: "Starch in water forms a lyophilic (solvent loving) colloid. Gold, sulphur, and Fe(OH)₃ sols are lyophobic.", year: 2023, shift: 'Jan 30 Shift 2', exam: 'main' },
      { q: "Which of the following statements is NOT correct for physical adsorption?", o: ['It is irreversible', 'It is not specific', 'Enthalpy of adsorption is low', 'It is due to van der Waals forces'], a: 0, s: "Physical adsorption is reversible, not irreversible. It is non-specific, has low enthalpy, and is caused by van der Waals forces.", year: 2022, shift: 'Jul 28 Shift 1', exam: 'main' },
      { q: "The Tyndall effect is observed in", o: ['Colloidal solutions', 'True solutions', 'Pure solvents', 'Electrolyte solutions'], a: 0, s: "Tyndall effect (scattering of light by colloidal particles) is characteristic of colloidal solutions due to particle sizes in the 1-1000 nm range.", year: 2021, shift: 'Mar 17 Shift 1', exam: 'main' },
      { q: "Peptization means", o: ['Conversion of a precipitate into colloidal sol', 'Coagulation of a sol', 'Removal of a dispersion medium', 'Chemical decomposition'], a: 0, s: "Peptization is the process of converting a freshly prepared precipitate into a colloidal solution by adding a suitable electrolyte (peptizing agent).", year: 2020, shift: 'Jan 8 Shift 1', exam: 'main' },
      { q: "Hardy-Schulze rule is related to", o: ['Coagulation', 'Peptization', 'Dialysis', 'Electrophoresis'], a: 0, s: "Hardy-Schulze rule states that the coagulating power of an ion is directly proportional to the valency of the coagulating ion.", year: 2019, shift: 'Apr 9 Shift 1', exam: 'main' },
    ],
  },
  {
    name: 'Coordination Compounds',
    slug: 'coordination-compounds',
    questions: [
      { q: "The IUPAC name of [Pt(NH₃)₂Cl(NO₂)] is", o: ['Diamminechloridonitrito-N-platinum(II)', 'Diamminechloronitroplatinum(II)', 'Diaminechloronitroplatinate(II)', 'Platinumdiamminechloridonitrite'], a: 0, s: "Pt²⁺ with 2 NH₃ (ammine), 1 Cl⁻ (chlorido), 1 NO₂⁻ (nitrito-N). IUPAC: Diamminechloridonitrito-N-platinum(II).", year: 2023, shift: 'Feb 1 Shift 1', exam: 'main' },
      { q: "Which of the following complex ions is expected to absorb visible light?", o: ['[Ti(H₂O)₆]³⁺', '[Sc(H₂O)₆]³⁺', '[Zn(NH₃)₄]²⁺', '[Cu(CN)₄]³⁻'], a: 0, s: "[Ti(H₂O)₆]³⁺ has d¹ configuration allowing d-d transition, which absorbs visible light. Sc³⁺ is d⁰, Zn²⁺ is d¹⁰, Cu⁺ is d¹⁰ — no d-d transitions possible.", year: 2022, shift: 'Jun 25 Shift 1', exam: 'main' },
      { q: "The spin-only magnetic moment of [MnBr₄]²⁻ is 5.9 BM. The geometry of the complex ion is", o: ['Tetrahedral', 'Square planar', 'Octahedral', 'Linear'], a: 0, s: "μ = 5.9 BM indicates 5 unpaired electrons (Mn²⁺, d⁵, high spin). Br⁻ is a weak field ligand, so tetrahedral geometry for 4-coordinate complex.", year: 2021, shift: 'Feb 24 Shift 2', exam: 'main' },
      { q: "How many geometrical isomers are possible for the complex [Co(NH₃)₃Cl₃]?", o: ['2', '3', '4', '1'], a: 0, s: "[Co(NH₃)₃Cl₃] is octahedral with formula Ma₃b₃. It has 2 geometrical isomers: fac (facial) and mer (meridional).", year: 2020, shift: 'Sep 2 Shift 2', exam: 'main' },
      { q: "The EAN (Effective Atomic Number) of metal in [Co(NH₃)₆]³⁺ is", o: ['36', '27', '33', '30'], a: 0, s: "Co³⁺ has 24 electrons. 6 NH₃ donate 12 electrons. EAN = 24 + 12 = 36 (Kr configuration).", year: 2019, shift: 'Jan 10 Shift 1', exam: 'main' },
    ],
  },
];
