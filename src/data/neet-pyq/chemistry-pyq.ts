import type { NEETPYQChapter } from './types';

/* ═══════════════════════════════════════════════════
   NEET CHEMISTRY PYQs (2015-2024)
   10 chapter clusters: Physical (4) + Organic (3) + Inorganic (3)
   Questions are NEET-specific (NCERT-based, single correct)
   ═══════════════════════════════════════════════════ */

export const neetChemistryPyq: NEETPYQChapter[] = [

  /* ═══ PHYSICAL CHEMISTRY ═══ */

  /* ──── 1. Atomic Structure & Chemical Bonding ──── */
  {
    name: 'Atomic Structure & Chemical Bonding',
    slug: 'atomic-structure-bonding',
    questions: [
      { q: 'The maximum number of electrons in a subshell with azimuthal quantum number l = 3 is:', o: ['6', '10', '14', '18'], a: 2, s: 'Maximum electrons in a subshell = 2(2l+1). For l = 3 (f subshell): 2(2×3+1) = 2(7) = 14 electrons.', year: 2023, shift: 'NEET 2023' },
      { q: 'The shape of sp³ hybrid orbitals is:', o: ['Linear', 'Trigonal planar', 'Tetrahedral', 'Square planar'], a: 2, s: 'sp³ hybridization produces 4 hybrid orbitals arranged tetrahedrally with bond angles of 109.5°. Examples: CH₄, NH₃ (with lone pair), H₂O (with 2 lone pairs).', year: 2022, shift: 'NEET 2022' },
      { q: 'The correct order of bond energy is:', o: ['N≡N > O=O > F-F', 'F-F > O=O > N≡N', 'O=O > N≡N > F-F', 'O=O > F-F > N≡N'], a: 0, s: 'Bond energy: N≡N (945 kJ/mol) > O=O (498 kJ/mol) > F-F (155 kJ/mol). Triple bond is strongest. F-F is weak due to lone pair-lone pair repulsion between small F atoms.', year: 2021, shift: 'NEET 2021' },
      { q: 'The number of nodes in 3p orbital is:', o: ['1', '2', '3', '0'], a: 1, s: 'Total nodes = n − 1 = 3 − 1 = 2. Radial nodes = n − l − 1 = 3 − 1 − 1 = 1. Angular nodes = l = 1. Total = 1 + 1 = 2 nodes.', year: 2020, shift: 'NEET 2020' },
      { q: 'Which molecule is paramagnetic?', o: ['N₂', 'CO', 'O₂', 'F₂'], a: 2, s: 'O₂ is paramagnetic because it has 2 unpaired electrons in π*2p orbitals (MOT). Bond order = (10-6)/2 = 2. N₂, CO, F₂ are diamagnetic (all electrons paired).', year: 2019, shift: 'NEET 2019' },
      { q: 'The Bohr model of hydrogen atom gives the energy of electron in nth orbit as:', o: ['E = −13.6/n eV', 'E = −13.6/n² eV', 'E = −13.6n² eV', 'E = 13.6/n² eV'], a: 1, s: 'For hydrogen (Z=1): Eₙ = −13.6Z²/n² = −13.6/n² eV. Negative sign indicates electrons are bound. Energy increases (becomes less negative) with increasing n.', year: 2018, shift: 'NEET 2018' },
      { q: 'Which of the following has the highest electron affinity?', o: ['F', 'Cl', 'Br', 'I'], a: 1, s: 'Chlorine has the highest electron affinity (−349 kJ/mol), not fluorine. Fluorine\'s small size causes electron-electron repulsion in the 2p orbitals, reducing its affinity (−328 kJ/mol).', year: 2017, shift: 'NEET 2017' },
      { q: 'The VSEPR shape of XeF₂ is:', o: ['Bent', 'Linear', 'Trigonal planar', 'T-shaped'], a: 1, s: 'XeF₂ has sp³d hybridization with 3 lone pairs and 2 bonding pairs (trigonal bipyramidal electron geometry). The molecular shape is linear (F—Xe—F at 180°).', year: 2016, shift: 'NEET 2016' },
      { q: 'Hydrogen bond is strongest in:', o: ['HF', 'HCl', 'HBr', 'HI'], a: 0, s: 'Hydrogen bonding is strongest in HF because fluorine is the most electronegative element and smallest in size, creating the strongest H···F hydrogen bonds. HF has highest boiling point among hydrogen halides.', year: 2024, shift: 'NEET 2024' },
      { q: 'The de Broglie wavelength of an electron accelerated through potential V is:', o: ['h/√(2meV)', '√(2meV)/h', 'h/2meV', '2meV/h'], a: 0, s: 'KE = eV = p²/(2m) → p = √(2meV). λ = h/p = h/√(2meV). This is the principle behind electron microscopy — small λ gives high resolution.', year: 2015, shift: 'NEET 2015' },
    ],
  },

  /* ──── 2. Chemical Equilibrium & Ionic Equilibrium ──── */
  {
    name: 'Equilibrium',
    slug: 'equilibrium',
    questions: [
      { q: 'The pH of a 0.001 M HCl solution is:', o: ['1', '2', '3', '4'], a: 2, s: 'HCl is a strong acid: [H⁺] = 0.001 = 10⁻³ M. pH = −log[H⁺] = −log(10⁻³) = 3.', year: 2023, shift: 'NEET 2023' },
      { q: 'For the reaction N₂ + 3H₂ ⇌ 2NH₃, the relationship between Kp and Kc is:', o: ['Kp = Kc(RT)⁻²', 'Kp = Kc(RT)²', 'Kp = Kc', 'Kp = Kc(RT)'], a: 0, s: 'Kp = Kc(RT)^Δn. Δn = 2 − (1+3) = −2. So Kp = Kc(RT)⁻² = Kc/(RT)².', year: 2022, shift: 'NEET 2022' },
      { q: 'Le Chatelier\'s principle predicts that increasing pressure shifts equilibrium toward:', o: ['Side with more moles of gas', 'Side with fewer moles of gas', 'No effect', 'Reverse reaction always'], a: 1, s: 'Increasing pressure favours the side with fewer moles of gas (system tries to reduce pressure). For N₂ + 3H₂ ⇌ 2NH₃: forward reaction is favoured (4 moles → 2 moles).', year: 2021, shift: 'NEET 2021' },
      { q: 'The pH of a buffer solution prepared from weak acid HA and its sodium salt NaA is given by:', o: ['pH = pKa + log([HA]/[A⁻])', 'pH = pKa + log([A⁻]/[HA])', 'pH = pKa − log([A⁻]/[HA])', 'pH = pKb + log([A⁻]/[HA])'], a: 1, s: 'Henderson-Hasselbalch equation: pH = pKa + log([A⁻]/[HA]) = pKa + log([salt]/[acid]). For basic buffer: pOH = pKb + log([salt]/[base]).', year: 2020, shift: 'NEET 2020' },
      { q: 'Ionic product of water (Kw) at 25°C is:', o: ['10⁻⁷', '10⁻¹⁴', '10⁻²', '10⁻¹'], a: 1, s: 'Kw = [H⁺][OH⁻] = 10⁻⁷ × 10⁻⁷ = 10⁻¹⁴ at 25°C. Kw increases with temperature because water dissociation is endothermic.', year: 2019, shift: 'NEET 2019' },
      { q: 'If Ksp of AgCl is 1.6 × 10⁻¹⁰, the solubility of AgCl in pure water is:', o: ['1.26 × 10⁻⁵ M', '4 × 10⁻⁵ M', '1.6 × 10⁻¹⁰ M', '1.6 × 10⁻⁵ M'], a: 0, s: 'AgCl ⇌ Ag⁺ + Cl⁻. Ksp = s × s = s². s = √(Ksp) = √(1.6 × 10⁻¹⁰) = 1.26 × 10⁻⁵ M.', year: 2018, shift: 'NEET 2018' },
      { q: 'A catalyst affects the equilibrium by:', o: ['Shifting equilibrium to the right', 'Shifting equilibrium to the left', 'Reaching equilibrium faster (no shift)', 'Increasing products'], a: 2, s: 'A catalyst speeds up both forward and reverse reactions equally, so equilibrium is reached faster but the equilibrium constant (K) and position of equilibrium are unchanged.', year: 2017, shift: 'NEET 2017' },
      { q: 'The conjugate base of H₂SO₄ is:', o: ['HSO₄⁻', 'SO₄²⁻', 'H₃O⁺', 'OH⁻'], a: 0, s: 'Conjugate base is formed when an acid donates a proton. H₂SO₄ → H⁺ + HSO₄⁻. So HSO₄⁻ is the conjugate base of H₂SO₄.', year: 2016, shift: 'NEET 2016' },
      { q: 'For an exothermic reaction at equilibrium, increasing temperature will:', o: ['Shift equilibrium forward', 'Shift equilibrium backward', 'No effect', 'Increase Kp'], a: 1, s: 'For exothermic reaction (ΔH < 0): increasing temperature shifts equilibrium backward (toward reactants) to absorb excess heat. K decreases with temperature (Le Chatelier).', year: 2024, shift: 'NEET 2024' },
      { q: 'Common ion effect causes:', o: ['Increase in solubility', 'Decrease in solubility', 'No change in solubility', 'Increase in Ksp'], a: 1, s: 'Common ion effect: adding a common ion shifts the solubility equilibrium backward, decreasing solubility. E.g., adding NaCl to AgCl decreases AgCl solubility because Cl⁻ is common.', year: 2015, shift: 'NEET 2015' },
    ],
  },

  /* ──── 3. Chemical Kinetics & Electrochemistry ──── */
  {
    name: 'Chemical Kinetics & Electrochemistry',
    slug: 'kinetics-electrochemistry',
    questions: [
      { q: 'The half-life of a first-order reaction is 20 minutes. The rate constant is:', o: ['0.0347 min⁻¹', '0.693 min⁻¹', '0.05 min⁻¹', '3.47 min⁻¹'], a: 0, s: 'For first-order: t₁/₂ = 0.693/k → k = 0.693/20 = 0.0347 min⁻¹. Half-life is independent of initial concentration for first-order reactions.', year: 2023, shift: 'NEET 2023' },
      { q: 'The EMF of a cell is 0.76 V. If the cell reaction involves transfer of 2 electrons, ΔG° is: (F = 96500 C/mol)', o: ['−146.7 kJ/mol', '−73.4 kJ/mol', '146.7 kJ/mol', '73.4 kJ/mol'], a: 0, s: 'ΔG° = −nFE° = −2 × 96500 × 0.76 = −146,680 J ≈ −146.7 kJ/mol. Negative ΔG° confirms the reaction is spontaneous.', year: 2022, shift: 'NEET 2022' },
      { q: 'The unit of rate constant for a second-order reaction is:', o: ['s⁻¹', 'mol⁻¹L s⁻¹', 'mol L⁻¹ s⁻¹', 'mol⁻²L² s⁻¹'], a: 1, s: 'For nth order: units of k = (mol/L)^(1-n) × s⁻¹. For 2nd order: k = (mol/L)⁻¹ × s⁻¹ = L mol⁻¹ s⁻¹ = mol⁻¹ L s⁻¹.', year: 2021, shift: 'NEET 2021' },
      { q: 'In a galvanic cell, the cathode is:', o: ['Positive electrode', 'Negative electrode', 'Always zinc', 'Always copper'], a: 0, s: 'In a galvanic (voltaic) cell: cathode is positive (reduction occurs here — electrons flow toward it). Anode is negative (oxidation occurs). Reverse in electrolytic cell.', year: 2020, shift: 'NEET 2020' },
      { q: 'The Arrhenius equation is:', o: ['k = Ae⁻ᴱᵃ/ᴿᵀ', 'k = A + Ea/RT', 'k = Ea/RT', 'k = AeEa/RT'], a: 0, s: 'Arrhenius equation: k = Ae^(−Ea/RT), where A = pre-exponential factor, Ea = activation energy, R = gas constant, T = temperature in K. Higher T or lower Ea → larger k.', year: 2019, shift: 'NEET 2019' },
      { q: 'How many faradays of electricity are needed to deposit 1 mole of Cu from CuSO₄ solution?', o: ['1', '2', '3', '4'], a: 1, s: 'Cu²⁺ + 2e⁻ → Cu. Each Cu²⁺ requires 2 electrons. So 1 mole Cu needs 2 moles of electrons = 2 Faraday of electricity (1F = 96500 C).', year: 2018, shift: 'NEET 2018' },
      { q: 'Rate of reaction is defined as:', o: ['Change in concentration per unit time', 'Change in concentration per unit volume', 'Change in temperature per unit time', 'Change in pressure only'], a: 0, s: 'Rate = −d[R]/dt = +d[P]/dt. It is the change in concentration of reactant (decrease) or product (increase) per unit time. Units: mol L⁻¹ s⁻¹.', year: 2017, shift: 'NEET 2017' },
      { q: 'Standard hydrogen electrode (SHE) has a potential of:', o: ['1.0 V', '−1.0 V', '0.0 V', '0.5 V'], a: 2, s: 'SHE is the reference electrode with E° = 0.000 V by definition. It consists of Pt electrode in 1 M H⁺ solution with H₂ gas at 1 atm at 298 K.', year: 2016, shift: 'NEET 2016' },
      { q: 'The order of a reaction is determined by:', o: ['Stoichiometry', 'Molecularity', 'Experiment only', 'Theoretical calculation'], a: 2, s: 'The order of a reaction is always determined experimentally (from rate law). It cannot be deduced from the balanced equation. Molecularity is theoretical but order must be measured.', year: 2024, shift: 'NEET 2024' },
      { q: 'Kohlrausch\'s law states that:', o: ['Conductivity increases with concentration', 'At infinite dilution, molar conductivity = sum of individual ionic conductivities', 'Resistance is independent of temperature', 'Conductance equals current'], a: 1, s: 'Kohlrausch\'s law: Λ°m = λ°_+ + λ°_−. At infinite dilution, each ion contributes independently to the total molar conductivity. Used to find Λ°m of weak electrolytes.', year: 2015, shift: 'NEET 2015' },
    ],
  },

  /* ──── 4. Solutions & Solid State ──── */
  {
    name: 'Solutions & Solid State',
    slug: 'solutions-solid-state',
    questions: [
      { q: 'Elevation of boiling point is a _____ property.', o: ['Intensive', 'Colligative', 'Chemical', 'Magnetic'], a: 1, s: 'Colligative properties depend on the number of solute particles, not their nature. The four colligative properties: relative lowering of vapour pressure, boiling point elevation, freezing point depression, osmotic pressure.', year: 2023, shift: 'NEET 2023' },
      { q: 'The coordination number in FCC crystal structure is:', o: ['4', '6', '8', '12'], a: 3, s: 'In FCC (face-centred cubic), each atom touches 12 nearest neighbours: 4 in same layer, 4 in layer above, 4 in layer below. Coordination number = 12.', year: 2022, shift: 'NEET 2022' },
      { q: 'Osmotic pressure (π) of a solution is given by:', o: ['π = MRT', 'π = nRT/V = CRT', 'π = MR/T', 'π = nT/RV'], a: 1, s: 'Van\'t Hoff equation: π = CRT = (n/V)RT, where C = molar concentration, R = gas constant, T = temperature in K. Similar to ideal gas equation.', year: 2021, shift: 'NEET 2021' },
      { q: 'Raoult\'s law states that for an ideal solution:', o: ['Partial vapour pressure = mole fraction × vapour pressure of pure component', 'Partial pressure = concentration × RT', 'Vapour pressure is independent of composition', 'Boiling point is constant'], a: 0, s: 'Raoult\'s law: P_A = x_A × P°_A. The partial vapour pressure of each component equals its mole fraction times its pure vapour pressure. Ideal solutions obey this at all compositions.', year: 2020, shift: 'NEET 2020' },
      { q: 'Number of atoms per unit cell in BCC is:', o: ['1', '2', '4', '6'], a: 1, s: 'BCC: 8 corners × 1/8 + 1 centre = 1 + 1 = 2 atoms per unit cell. FCC: 8×1/8 + 6×1/2 = 4. Simple cubic: 8×1/8 = 1.', year: 2019, shift: 'NEET 2019' },
      { q: 'Freezing point depression ΔTf is given by:', o: ['ΔTf = Kf × m', 'ΔTf = Kb × m', 'ΔTf = Kf/m', 'ΔTf = m/Kf'], a: 0, s: 'ΔTf = Kf × m, where Kf = cryoscopic constant (molal freezing point depression constant) and m = molality of solution. For electrolytes: ΔTf = i × Kf × m (i = van\'t Hoff factor).', year: 2018, shift: 'NEET 2018' },
      { q: 'Schottky defect is observed in crystals with:', o: ['High coordination number', 'Low coordination number', 'Similar sizes of cation and anion', 'Very different sized ions'], a: 2, s: 'Schottky defect occurs when an equal number of cations and anions are missing from lattice sites. Found in highly ionic compounds with similar cation/anion sizes (NaCl, KCl, CsCl). Decreases density.', year: 2017, shift: 'NEET 2017' },
      { q: 'Henry\'s law constant for a gas is high when:', o: ['Gas is very soluble', 'Gas is less soluble', 'Temperature is low', 'Pressure is very high'], a: 1, s: 'Henry\'s law: p = K_H × x. Higher K_H means lower solubility (more pressure needed to dissolve same amount). K_H increases with temperature (gases become less soluble at higher T).', year: 2016, shift: 'NEET 2016' },
      { q: 'Packing efficiency of FCC is:', o: ['52.4%', '68%', '74%', '90%'], a: 2, s: 'FCC (CCP) packing efficiency = (4 × 4/3 πr³)/(16√2 r³) × 100 = 74%. BCC = 68%. Simple cubic = 52.4%. HCP also = 74%.', year: 2024, shift: 'NEET 2024' },
      { q: 'An ideal solution obeys:', o: ['Henry\'s law only', 'Raoult\'s law over entire range', 'Dalton\'s law only', 'None of the above'], a: 1, s: 'An ideal solution obeys Raoult\'s law at all concentrations and compositions. ΔH_mix = 0, ΔV_mix = 0 for ideal solutions. Examples: benzene+toluene, hexane+heptane.', year: 2015, shift: 'NEET 2015' },
    ],
  },

  /* ═══ ORGANIC CHEMISTRY ═══ */

  /* ──── 5. General Organic Chemistry & Hydrocarbons ──── */
  {
    name: 'GOC & Hydrocarbons',
    slug: 'goc-hydrocarbons',
    questions: [
      { q: 'The IUPAC name of CH₃-CH=CH-CH₃ is:', o: ['2-Butene', '1-Butene', '2-Butyne', 'Butane'], a: 0, s: 'CH₃-CH=CH-CH₃ is but-2-ene (2-butene). The double bond is between C2 and C3 in a 4-carbon chain. Numbering gives the lowest locant to the double bond.', year: 2023, shift: 'NEET 2023' },
      { q: 'Markovnikov\'s rule applies to the addition of HBr to:', o: ['Symmetrical alkenes', 'Unsymmetrical alkenes', 'Alkynes only', 'Alkanes'], a: 1, s: 'Markovnikov\'s rule: In addition of HX to unsymmetrical alkenes, H adds to the carbon with more H atoms (more substituted carbocation is more stable). Anti-Markovnikov occurs with peroxides.', year: 2022, shift: 'NEET 2022' },
      { q: 'The correct order of stability of carbocations is:', o: ['1° > 2° > 3°', '3° > 2° > 1°', '2° > 3° > 1°', '1° > 3° > 2°'], a: 1, s: 'Carbocation stability: 3° > 2° > 1° > methyl. More alkyl groups stabilize the positive charge through hyperconjugation and inductive effect (+I effect).', year: 2021, shift: 'NEET 2021' },
      { q: 'Benzene undergoes _____ reactions preferentially:', o: ['Addition', 'Substitution (electrophilic)', 'Elimination', 'Rearrangement'], a: 1, s: 'Benzene undergoes electrophilic aromatic substitution (EAS) rather than addition because substitution preserves the aromatic stabilization (36 kcal/mol resonance energy). Examples: nitration, halogenation, Friedel-Crafts.', year: 2020, shift: 'NEET 2020' },
      { q: 'The inductive effect of CH₃ group is:', o: ['+I (electron donating)', '−I (electron withdrawing)', 'No effect', '+M effect'], a: 0, s: 'CH₃ (and all alkyl groups) show +I effect (electron-donating inductive effect). They push electrons toward the attached carbon, stabilizing positive charges and destabilizing negative charges.', year: 2019, shift: 'NEET 2019' },
      { q: 'Saytzeff\'s rule predicts the major product of elimination as:', o: ['Less substituted alkene', 'More substituted alkene', 'Terminal alkene', 'Cyclic product'], a: 1, s: 'Saytzeff\'s (Zaitsev\'s) rule: In E1 and E2 elimination, the more substituted (more stable) alkene is the major product. β-hydrogen from the carbon with fewer H atoms is preferentially removed.', year: 2018, shift: 'NEET 2018' },
      { q: 'Toluene is more reactive than benzene toward electrophilic substitution because:', o: ['CH₃ is electron-withdrawing', 'CH₃ is electron-donating (activating)', 'Toluene is larger', 'Toluene has no resonance'], a: 1, s: 'CH₃ is an activating group (+I and hyperconjugation) that increases electron density on the benzene ring, making it more reactive toward electrophiles. It is ortho-para directing.', year: 2017, shift: 'NEET 2017' },
      { q: 'Ozone reacts with alkenes to form:', o: ['Alcohols', 'Ozonides → aldehydes/ketones on reductive workup', 'Acids', 'Ethers'], a: 1, s: 'Ozonolysis: Alkene + O₃ → ozonide → reductive workup (Zn/H₂O or Me₂S) → aldehydes/ketones. Oxidative workup (H₂O₂) gives carboxylic acids. Used to determine position of double bond.', year: 2016, shift: 'NEET 2016' },
      { q: 'Which type of isomerism is shown by CH₃CH₂OH and CH₃OCH₃?', o: ['Chain isomerism', 'Position isomerism', 'Functional group isomerism', 'Metamerism'], a: 2, s: 'CH₃CH₂OH (ethanol, alcohol) and CH₃OCH₃ (dimethyl ether) have the same molecular formula (C₂H₆O) but different functional groups — this is functional group isomerism.', year: 2024, shift: 'NEET 2024' },
      { q: 'Wurtz reaction involves:', o: ['Na + alkyl halide → alkane', 'Zn + alkyl halide → alkene', 'Grignard reagent + water → alkane', 'Decarboxylation of sodium salt'], a: 0, s: 'Wurtz reaction: 2R-X + 2Na → R-R + 2NaX (dry ether). Two alkyl halides couple via sodium metal to form a higher alkane. Only gives even-carbon products from same R-X.', year: 2015, shift: 'NEET 2015' },
    ],
  },

  /* ──── 6. Alcohols, Aldehydes, Ketones & Carboxylic Acids ──── */
  {
    name: 'Oxygen-Containing Functional Groups',
    slug: 'oxygen-functional-groups',
    questions: [
      { q: 'Lucas test is used to distinguish between:', o: ['Alkenes and alkynes', 'Primary, secondary, and tertiary alcohols', 'Aldehydes and ketones', 'Acids and esters'], a: 1, s: 'Lucas test (ZnCl₂/HCl): 3° alcohol → immediate turbidity. 2° alcohol → turbidity in 5-10 min. 1° alcohol → no turbidity at room temperature. Based on SN1 reactivity.', year: 2023, shift: 'NEET 2023' },
      { q: 'Tollen\'s reagent (ammoniacal silver nitrate) is reduced by:', o: ['Ketones', 'Aldehydes', 'Both aldehydes and ketones', 'Neither'], a: 1, s: 'Tollen\'s reagent ([Ag(NH₃)₂]⁺) is reduced only by aldehydes (not ketones) to give silver mirror: RCHO + 2Ag⁺ + 2OH⁻ → RCOO⁻ + 2Ag↓ + H₂O. Known as silver mirror test.', year: 2022, shift: 'NEET 2022' },
      { q: 'Aldol condensation involves:', o: ['Two molecules of aldehyde/ketone with α-hydrogen in dilute base', 'Acid + alcohol', 'Aldehyde + amine', 'Ketone + halide'], a: 0, s: 'Aldol condensation: Two aldehyde/ketone molecules with α-hydrogens react in dilute NaOH to form β-hydroxy aldehyde/ketone (aldol). On heating, dehydration gives α,β-unsaturated carbonyl compound.', year: 2021, shift: 'NEET 2021' },
      { q: 'The correct order of acid strength is:', o: ['CH₃COOH > ClCH₂COOH > Cl₂CHCOOH', 'Cl₂CHCOOH > ClCH₂COOH > CH₃COOH', 'ClCH₂COOH > Cl₂CHCOOH > CH₃COOH', 'CH₃COOH > Cl₂CHCOOH > ClCH₂COOH'], a: 1, s: 'More Cl atoms → stronger −I effect → more stabilization of carboxylate anion → stronger acid. Cl₃CCOOH > Cl₂CHCOOH > ClCH₂COOH > CH₃COOH.', year: 2020, shift: 'NEET 2020' },
      { q: 'Dehydration of ethanol at 170°C with conc. H₂SO₄ gives:', o: ['Diethyl ether', 'Ethylene', 'Acetaldehyde', 'Acetic acid'], a: 1, s: 'At 170°C: ethanol undergoes intramolecular dehydration → ethylene (CH₂=CH₂). At 140°C: intermolecular dehydration → diethyl ether (C₂H₅OC₂H₅). Temperature determines the product.', year: 2019, shift: 'NEET 2019' },
      { q: 'Fehling\'s solution test is positive for:', o: ['Acetone', 'Acetaldehyde', 'Benzaldehyde', 'Acetophenone'], a: 1, s: 'Fehling\'s test is positive for aliphatic aldehydes (red ppt of Cu₂O). Acetaldehyde (CH₃CHO) gives positive result. Aromatic aldehydes (benzaldehyde), ketones, and acetophenone give negative results.', year: 2018, shift: 'NEET 2018' },
      { q: 'Esterification is a reaction between:', o: ['Two acids', 'Acid and base', 'Carboxylic acid and alcohol', 'Ester and water'], a: 2, s: 'Esterification: RCOOH + R\'OH ⇌ RCOOR\' + H₂O (acid catalyst). Fischer esterification uses H₂SO₄ or HCl as catalyst. It is a reversible, nucleophilic acyl substitution reaction.', year: 2017, shift: 'NEET 2017' },
      { q: 'Cannizzaro reaction is given by:', o: ['Aldehydes with α-hydrogen', 'Aldehydes without α-hydrogen', 'Ketones', 'Carboxylic acids'], a: 1, s: 'Cannizzaro reaction: Aldehydes WITHOUT α-hydrogen (like HCHO, C₆H₅CHO) undergo self-disproportionation in concentrated NaOH → one molecule is oxidized to acid, other reduced to alcohol.', year: 2016, shift: 'NEET 2016' },
      { q: 'The product of reaction of ethanol with Na metal is:', o: ['Sodium ethanoate', 'Sodium ethoxide + H₂', 'Ethane', 'Diethyl ether'], a: 1, s: '2C₂H₅OH + 2Na → 2C₂H₅ONa (sodium ethoxide) + H₂↑. This reaction shows the weakly acidic nature of alcohols (pKa ~16). More acidic alcohols react more vigorously.', year: 2024, shift: 'NEET 2024' },
      { q: 'Acetic acid reacts with NaHCO₃ to produce:', o: ['CO₂ gas', 'H₂ gas', 'O₂ gas', 'No gas'], a: 0, s: 'CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂↑. The brisk effervescence of CO₂ is a simple test for carboxylic acids. Phenols do not react with NaHCO₃.', year: 2015, shift: 'NEET 2015' },
    ],
  },

  /* ──── 7. Amines, Polymers & Biomolecules ──── */
  {
    name: 'Amines, Polymers & Biomolecules',
    slug: 'amines-polymers-biomolecules',
    questions: [
      { q: 'The correct order of basicity of amines in aqueous solution is:', o: ['1° > 2° > 3°', '2° > 1° > 3°', '2° > 3° > 1°', '3° > 2° > 1°'], a: 1, s: 'In aqueous solution: 2° > 1° > 3° for simple aliphatic amines. 3° amines have steric hindrance to solvation (hydration of ammonium salt), reducing effective basicity in water.', year: 2023, shift: 'NEET 2023' },
      { q: 'Nylon-6,6 is a polymer of:', o: ['Caprolactam', 'Adipic acid and hexamethylenediamine', 'Glycine', 'Terephthalic acid and ethylene glycol'], a: 1, s: 'Nylon-6,6 is a condensation polymer of adipic acid (HOOC-(CH₂)₄-COOH) and hexamethylenediamine (H₂N-(CH₂)₆-NH₂). The "6,6" refers to 6 carbons in each monomer. Nylon-6 is from caprolactam.', year: 2022, shift: 'NEET 2022' },
      { q: 'Which test distinguishes primary amines from secondary and tertiary?', o: ['Lassaigne test', 'Carbylamine (isocyanide) test', 'Hinsberg test', 'Lucas test'], a: 1, s: 'Carbylamine test: Only primary amines react with CHCl₃ + KOH to form foul-smelling isocyanides (carbylamines). R-NH₂ + CHCl₃ + 3KOH → R-NC + 3KCl + 3H₂O.', year: 2021, shift: 'NEET 2021' },
      { q: 'The carbohydrate that is a disaccharide is:', o: ['Glucose', 'Fructose', 'Sucrose', 'Starch'], a: 2, s: 'Sucrose (table sugar) is a disaccharide composed of glucose + fructose linked by α-1,β-2 glycosidic bond. Glucose and fructose are monosaccharides. Starch is a polysaccharide.', year: 2020, shift: 'NEET 2020' },
      { q: 'Bakelite is an example of:', o: ['Addition polymer', 'Condensation polymer (thermosetting)', 'Elastomer', 'Fibre'], a: 1, s: 'Bakelite is a thermosetting condensation polymer of phenol and formaldehyde. Once set, it cannot be reshaped by heating. Used in electrical switches, handles, and cookware handles.', year: 2019, shift: 'NEET 2019' },
      { q: 'The secondary structure of proteins refers to:', o: ['Amino acid sequence', 'α-helix and β-pleated sheet', 'Overall 3D shape', 'Subunit assembly'], a: 1, s: 'Secondary structure: local folding patterns — α-helix (right-handed coil, H-bonds between i and i+4 residues) and β-pleated sheet (H-bonds between adjacent chains). Stabilized by hydrogen bonds.', year: 2018, shift: 'NEET 2018' },
      { q: 'Aniline reacts with HNO₂ at 0-5°C to form:', o: ['Nitroaniline', 'Benzenediazonium chloride', 'Phenol', 'Benzamide'], a: 1, s: 'Diazotization: C₆H₅NH₂ + NaNO₂ + HCl → C₆H₅N₂⁺Cl⁻ (benzenediazonium chloride) at 0-5°C. Above 5°C, diazonium salt decomposes. Used in synthesis of azo dyes and phenol.', year: 2017, shift: 'NEET 2017' },
      { q: 'Zwitter ion is formed by:', o: ['Carboxylic acids', 'Amino acids', 'Amines', 'Phenols'], a: 1, s: 'Amino acids exist as zwitter ions (dipolar ions) at physiological pH: H₃N⁺-CHR-COO⁻. The amino group is protonated (+) and carboxyl group is deprotonated (−), giving zero net charge at isoelectric pH.', year: 2016, shift: 'NEET 2016' },
      { q: 'Natural rubber is a polymer of:', o: ['Styrene', 'Isoprene (2-methyl-1,3-butadiene)', 'Chloroprene', 'Butadiene'], a: 1, s: 'Natural rubber is cis-1,4-polyisoprene. Isoprene (CH₂=C(CH₃)-CH=CH₂) polymerizes to form the elastic polymer. Vulcanization (cross-linking with S) improves its properties.', year: 2024, shift: 'NEET 2024' },
      { q: 'DNA and RNA differ in that:', o: ['DNA has uracil, RNA has thymine', 'DNA has deoxyribose sugar, RNA has ribose', 'DNA is single-stranded, RNA is double-stranded', 'DNA has only purines'], a: 1, s: 'DNA has deoxyribose sugar + thymine base; RNA has ribose sugar + uracil base. DNA is usually double-stranded (double helix); RNA is usually single-stranded.', year: 2015, shift: 'NEET 2015' },
    ],
  },

  /* ═══ INORGANIC CHEMISTRY ═══ */

  /* ──── 8. Periodic Table & Chemical Bonding Trends ──── */
  {
    name: 'Periodic Table & Trends',
    slug: 'periodic-trends',
    questions: [
      { q: 'The element with the highest electronegativity is:', o: ['Oxygen', 'Fluorine', 'Chlorine', 'Nitrogen'], a: 1, s: 'Fluorine has the highest electronegativity (4.0 on Pauling scale) in the periodic table. Electronegativity generally increases across a period and decreases down a group.', year: 2023, shift: 'NEET 2023' },
      { q: 'The correct order of ionization energy is:', o: ['Li < Be < B < C', 'Li < B < Be < C', 'B < Li < Be < C', 'Be < B < C < Li'], a: 1, s: 'IE order: Li < B < Be < C. Anomaly: Be > B because Be has fully-filled 2s² (extra stable), so removing an electron from Be requires more energy than from B (2p¹).', year: 2022, shift: 'NEET 2022' },
      { q: 'Which of the following oxides is amphoteric?', o: ['Na₂O', 'Al₂O₃', 'SO₃', 'CO₂'], a: 1, s: 'Al₂O₃ is amphoteric — it reacts with both acids (Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O) and bases (Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O). Other amphoteric oxides: ZnO, PbO, SnO.', year: 2021, shift: 'NEET 2021' },
      { q: 'In the periodic table, atomic radius generally:', o: ['Increases across a period', 'Decreases across a period (left to right)', 'Remains constant across a period', 'Increases then decreases'], a: 1, s: 'Atomic radius decreases across a period (left to right) because nuclear charge increases while electrons are added to the same shell, resulting in greater effective nuclear charge pulling electrons closer.', year: 2020, shift: 'NEET 2020' },
      { q: 'The element with electronic configuration [Ar] 3d¹⁰ 4s¹ is:', o: ['Zinc', 'Copper', 'Nickel', 'Gallium'], a: 1, s: 'Copper (Cu, Z=29) has the configuration [Ar] 3d¹⁰ 4s¹ (not 3d⁹ 4s²) because fully-filled 3d¹⁰ is more stable. This is an exception to the Aufbau principle.', year: 2019, shift: 'NEET 2019' },
      { q: 'Noble gases have very high ionization energy because:', o: ['They are metals', 'They have completely filled electron shells (stable octet)', 'They have large atomic radius', 'They are radioactive'], a: 1, s: 'Noble gases have completely filled valence shells (ns²np⁶), making them extremely stable. Removing an electron from such a stable configuration requires very high energy.', year: 2018, shift: 'NEET 2018' },
      { q: 'Diagonal relationship exists between:', o: ['Na and Ca', 'Li and Mg', 'K and Ca', 'Be and B'], a: 1, s: 'Diagonal relationship: Li-Mg, Be-Al, B-Si have similar properties due to similar charge/size ratio (polarizing power). Li and Mg both form nitrides, oxides, and their carbonates decompose on heating.', year: 2017, shift: 'NEET 2017' },
      { q: 'Which of the following has the largest atomic radius?', o: ['Na', 'Mg', 'Al', 'K'], a: 3, s: 'K has the largest atomic radius among these: K > Na > Mg > Al. K is in the next period (4th) while others are in the 3rd period. Within period 3: Na > Mg > Al (nuclear charge effect).', year: 2016, shift: 'NEET 2016' },
      { q: 'Electron affinity is most negative (highest) for:', o: ['Fluorine', 'Chlorine', 'Bromine', 'Iodine'], a: 1, s: 'Chlorine has the most negative (highest magnitude) electron affinity (−349 kJ/mol). Fluorine\'s small size causes interelectronic repulsion, reducing its EA to −328 kJ/mol.', year: 2024, shift: 'NEET 2024' },
      { q: 'Lanthanide contraction causes the atomic radii of 5d transition metals to be:', o: ['Much larger than 4d', 'Similar to 4d metals', 'Much smaller than 4d', 'Equal to 3d metals'], a: 1, s: 'Lanthanide contraction: poor shielding by 4f electrons causes 5d elements to have similar radii as 4d elements. Zr ≈ Hf, Nb ≈ Ta, Mo ≈ W — making them hard to separate.', year: 2015, shift: 'NEET 2015' },
    ],
  },

  /* ──── 9. Coordination Compounds & d-Block Elements ──── */
  {
    name: 'Coordination Compounds & d-Block',
    slug: 'coordination-d-block',
    questions: [
      { q: 'The coordination number of [Co(NH₃)₆]³⁺ is:', o: ['3', '6', '4', '2'], a: 1, s: 'Coordination number = number of ligand donor atoms directly bonded to the central metal. Each NH₃ is monodentate → 6 NH₃ molecules → CN = 6.', year: 2023, shift: 'NEET 2023' },
      { q: 'Which transition metal ion is coloured?', o: ['Sc³⁺ (3d⁰)', 'Zn²⁺ (3d¹⁰)', 'Cu²⁺ (3d⁹)', 'Ti⁴⁺ (3d⁰)'], a: 2, s: 'Cu²⁺ (3d⁹) is coloured (blue) because it has unpaired d electrons that can undergo d-d transitions by absorbing visible light. d⁰ and d¹⁰ configurations are colourless.', year: 2022, shift: 'NEET 2022' },
      { q: 'EDTA is a _____ ligand.', o: ['Monodentate', 'Bidentate', 'Hexadentate', 'Tetradentate'], a: 2, s: 'EDTA (ethylenediaminetetraacetic acid) is a hexadentate ligand — it binds through 2 nitrogen atoms and 4 carboxylate oxygen atoms (total 6 donor atoms).', year: 2021, shift: 'NEET 2021' },
      { q: 'The IUPAC name of [Pt(NH₃)₂Cl₂] is:', o: ['Diamminedichloroplatinum(II)', 'Dichlorodiammineplatinum(II)', 'Platinum diammine dichloride', 'Platinichloride'], a: 0, s: 'IUPAC naming: ligands in alphabetical order (ammine before chloro) + metal name with oxidation state. Pt is +2 (2NH₃ neutral, 2Cl⁻ give −2). Name: diamminedichloridoplatinum(II) or diamminedichloroplatinum(II).', year: 2020, shift: 'NEET 2020' },
      { q: 'The magnetic moment of Fe²⁺ (3d⁶, high spin octahedral) is:', o: ['0 BM', '√8 BM', '√24 BM', '√35 BM'], a: 2, s: 'Fe²⁺ (3d⁶) in high spin: 4 unpaired electrons (t₂g⁴ eg²). μ = √(n(n+2)) = √(4×6) = √24 ≈ 4.9 BM.', year: 2019, shift: 'NEET 2019' },
      { q: 'KMnO₄ acts as a strong _____ agent.', o: ['Reducing', 'Oxidizing', 'Catalytic', 'Complexing'], a: 1, s: 'KMnO₄ (potassium permanganate) is a strong oxidizing agent. Mn is in +7 state (highest), readily gains electrons → gets reduced. Used in titrations (self-indicator, purple to colourless).', year: 2018, shift: 'NEET 2018' },
      { q: 'Crystal field splitting energy (Δ) in octahedral complex is:', o: ['Greater than in tetrahedral', 'Less than in tetrahedral', 'Equal to tetrahedral', 'Zero'], a: 0, s: 'Δ_oct > Δ_tet. In fact, Δ_tet ≈ (4/9)Δ_oct for the same metal and ligands. This is why octahedral complexes are more common (greater CFSE stabilization).', year: 2017, shift: 'NEET 2017' },
      { q: 'Interstitial compounds of transition metals are characterized by:', o: ['High melting points and hardness', 'Low melting points', 'Solubility in water', 'Softness'], a: 0, s: 'Interstitial compounds form when small atoms (H, C, N, B) occupy voids in metal lattices. They have very high melting points, extreme hardness, metallic lustre, and chemical inertness. E.g., TiC, steel.', year: 2016, shift: 'NEET 2016' },
      { q: 'Isomerism shown by [Co(NH₃)₅Br]SO₄ and [Co(NH₃)₅SO₄]Br is:', o: ['Geometrical isomerism', 'Optical isomerism', 'Ionization isomerism', 'Linkage isomerism'], a: 2, s: 'Ionization isomerism: exchange of ions between coordination sphere and ionization sphere. [Co(NH₃)₅Br]SO₄ gives SO₄²⁻ ions, while [Co(NH₃)₅SO₄]Br gives Br⁻ ions in solution.', year: 2024, shift: 'NEET 2024' },
      { q: 'Transition metals show variable oxidation states because of:', o: ['Large atomic size', 'Availability of both ns and (n−1)d electrons for bonding', 'Noble gas configuration', 'Low ionization energy only'], a: 1, s: 'Transition metals have both ns and (n-1)d electrons with similar energies that can be involved in bonding, leading to multiple oxidation states. Inner electrons also participate in bonding.', year: 2015, shift: 'NEET 2015' },
    ],
  },

  /* ──── 10. p-Block Elements & s-Block Elements ──── */
  {
    name: 'p-Block & s-Block Elements',
    slug: 'p-block-s-block',
    questions: [
      { q: 'Plaster of Paris is chemically:', o: ['CaSO₄·2H₂O', 'CaSO₄·½H₂O', '2CaSO₄·H₂O', 'CaSO₄'], a: 1, s: 'Plaster of Paris = CaSO₄·½H₂O (calcium sulphate hemihydrate). When mixed with water: CaSO₄·½H₂O + 1½H₂O → CaSO₄·2H₂O (gypsum). This setting makes it useful for casts.', year: 2023, shift: 'NEET 2023' },
      { q: 'Which allotrope of carbon is the hardest natural substance?', o: ['Graphite', 'Fullerene', 'Diamond', 'Carbon nanotube'], a: 2, s: 'Diamond is the hardest natural substance (10 on Mohs scale). Each carbon is sp³ hybridized with 4 covalent bonds in a 3D tetrahedral network, making it extremely rigid.', year: 2022, shift: 'NEET 2022' },
      { q: 'Bleaching powder is:', o: ['Ca(OCl)₂', 'CaOCl₂ (calcium oxychloride)', 'CaCl₂', 'Ca(OH)₂'], a: 1, s: 'Bleaching powder = CaOCl₂ or Ca(OCl)Cl (calcium hypochlorite-chloride). Made by passing Cl₂ over Ca(OH)₂. The OCl⁻ (hypochlorite) part is the active bleaching agent.', year: 2021, shift: 'NEET 2021' },
      { q: 'Ozone (O₃) is a/an:', o: ['Allotrope of oxygen', 'Isotope of oxygen', 'Isobar of oxygen', 'Compound of oxygen'], a: 0, s: 'Ozone (O₃) is an allotrope of oxygen. Allotropes are different structural forms of the same element. O₂ (dioxygen) and O₃ (trioxygen/ozone) are allotropes of oxygen.', year: 2020, shift: 'NEET 2020' },
      { q: 'The strongest reducing agent among alkali metals is:', o: ['Na', 'K', 'Li', 'Cs'], a: 2, s: 'In aqueous solution, Li is the strongest reducing agent (most negative E° = −3.04 V) due to its highest hydration energy. Despite having the highest IE among alkali metals, its high hydration energy compensates.', year: 2019, shift: 'NEET 2019' },
      { q: 'Which oxide of nitrogen is called "laughing gas"?', o: ['NO', 'NO₂', 'N₂O', 'N₂O₃'], a: 2, s: 'N₂O (nitrous oxide) is called "laughing gas" because it produces euphoria and mild anesthesia when inhaled. It was one of the first anesthetics used in dentistry.', year: 2018, shift: 'NEET 2018' },
      { q: 'Baking soda is:', o: ['Na₂CO₃', 'NaHCO₃', 'NaOH', 'NaCl'], a: 1, s: 'Baking soda = NaHCO₃ (sodium bicarbonate/sodium hydrogen carbonate). It releases CO₂ when heated or mixed with acid, causing bread/cake to rise. Na₂CO₃ is washing soda.', year: 2017, shift: 'NEET 2017' },
      { q: 'Which of the following is a noble gas compound?', o: ['XeF₂', 'NeF₂', 'ArF₂', 'HeF₂'], a: 0, s: 'XeF₂ is a real noble gas compound (xenon difluoride). Xe is large enough and has low enough IE to form compounds with highly electronegative F and O. He, Ne, Ar do not form stable compounds.', year: 2016, shift: 'NEET 2016' },
      { q: 'The number of P-O-P bridges in P₄O₁₀ is:', o: ['4', '6', '8', '10'], a: 1, s: 'P₄O₁₀ has a cage structure with 6 P-O-P bridges (each bridge connects two P atoms through an oxygen). It also has 4 terminal P=O bonds (one per P). Total: 6 bridging + 4 terminal oxygens = 10.', year: 2024, shift: 'NEET 2024' },
      { q: 'Portland cement contains:', o: ['CaO + SiO₂ + Al₂O₃', 'CaSO₄ + SiO₂', 'CaCO₃ only', 'MgO + CaO'], a: 0, s: 'Portland cement is a mixture of calcium silicates and aluminates: CaO (60-70%), SiO₂ (20-25%), Al₂O₃ (5-10%), Fe₂O₃ (2-3%). Setting involves hydration of these compounds.', year: 2015, shift: 'NEET 2015' },
    ],
  },
];
