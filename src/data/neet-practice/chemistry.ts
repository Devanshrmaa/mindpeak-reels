import type { NEETChapterData } from './types';

/* ═══════════════════════════════════════════════════
   NEET CHEMISTRY Practice Questions
   4 chapters, each with 2 topics, each topic with 5 easy / 6 medium / 5 hard
   ═══════════════════════════════════════════════════ */

/* ──── Chapter 1: Physical Chemistry ──── */
const physicalChem: NEETChapterData = {
  name: 'Physical Chemistry',
  slug: 'physical-chemistry',
  topics: [
    {
      name: 'Atomic Structure & Chemical Bonding',
      slug: 'atomic-structure-bonding',
      easy: [
        { q: 'The maximum number of electrons in an orbital is:', o: ['1', '2', '3', '4'], a: 1, s: 'Each orbital can hold a maximum of 2 electrons with opposite spins (Pauli exclusion principle). An s subshell has 1 orbital (2e⁻), p has 3 orbitals (6e⁻), d has 5 orbitals (10e⁻).' },
        { q: 'The atomic number represents the number of:', o: ['Neutrons', 'Protons', 'Electrons in outermost shell', 'Nucleons'], a: 1, s: 'Atomic number (Z) = number of protons in the nucleus. In a neutral atom, Z also equals the number of electrons. Mass number (A) = protons + neutrons.' },
        { q: 'Ionic bond is formed by:', o: ['Sharing of electrons', 'Transfer of electrons', 'Sharing of protons', 'Transfer of protons'], a: 1, s: 'Ionic bond is formed by complete transfer of electrons from a metal to a non-metal. The resulting ions (cation and anion) are held together by electrostatic attraction. Example: NaCl.' },
        { q: 'The shape of an s-orbital is:', o: ['Dumbbell', 'Spherical', 'Cloverleaf', 'Conical'], a: 1, s: 'An s-orbital has a spherical shape. The probability of finding an electron is the same in all directions at equal distance from the nucleus. 1s is smallest, 2s is larger, etc.' },
        { q: 'Aufbau principle states that electrons fill orbitals in order of:', o: ['Decreasing energy', 'Increasing energy', 'Increasing size', 'Random order'], a: 1, s: 'Aufbau principle: electrons occupy the lowest energy orbital available before filling higher energy orbitals. The filling order follows (n+l) rule: 1s, 2s, 2p, 3s, 3p, 4s, 3d, ...' },
      ],
      medium: [
        { q: 'The quantum numbers for the last electron in sodium (Z=11) are:', o: ['n=3, l=0, ml=0, ms=+½', 'n=3, l=1, ml=0, ms=+½', 'n=2, l=1, ml=0, ms=−½', 'n=3, l=2, ml=0, ms=+½'], a: 0, s: 'Na: 1s² 2s² 2p⁶ 3s¹. The last electron is in 3s: n=3, l=0 (s subshell), ml=0 (only one s orbital), ms=+½.' },
        { q: 'Among LiF, NaF, KF and RbF, which has the highest lattice energy?', o: ['LiF', 'NaF', 'KF', 'RbF'], a: 0, s: 'Lattice energy ∝ (charge product)/(sum of ionic radii). Li⁺ is the smallest cation, so LiF has the shortest interionic distance and highest lattice energy.' },
        { q: 'Hybridization of carbon in ethylene (C₂H₄) is:', o: ['sp', 'sp²', 'sp³', 'sp³d'], a: 1, s: 'In ethylene, each carbon forms one C=C (double bond) and two C-H bonds. C=C consists of one σ and one π bond. Three σ bonds require sp² hybridization with 120° bond angles (trigonal planar).' },
        { q: 'The bond order of O₂ according to MOT is:', o: ['1', '1.5', '2', '3'], a: 2, s: 'O₂ electronic configuration: σ1s² σ*1s² σ2s² σ*2s² σ2p² π2p⁴ π*2p². Bond order = (10-6)/2 = 2. Two unpaired electrons in π* make O₂ paramagnetic.' },
        { q: 'Which molecule has a linear shape?', o: ['H₂O', 'CO₂', 'NH₃', 'SO₂'], a: 1, s: 'CO₂ has sp hybridization with no lone pairs on carbon. Two bonding pairs arrange linearly (180°). H₂O is bent (104.5°), NH₃ is pyramidal (107°), SO₂ is bent (~119°).' },
        { q: 'Dipole moment of a molecule depends on:', o: ['Bond length only', 'Charge separation only', 'Both bond length and charge separation, and geometry', 'Temperature'], a: 2, s: 'Dipole moment μ = q × d (charge × distance). For polyatomic molecules, the net dipole moment is the vector sum of all bond dipoles, so molecular geometry is crucial (e.g., CO₂ has zero net dipole).' },
      ],
      hard: [
        { q: 'The correct order of ionization energies is:', o: ['N > O > F > Ne', 'Ne > F > N > O', 'Ne > F > O > N', 'F > Ne > N > O'], a: 1, s: 'IE order: Ne > F > N > O. Anomaly: N > O because N has a half-filled 2p³ (extra stable). Removing an electron from stable half-filled configuration requires more energy. Noble gas Ne has highest IE.' },
        { q: 'Born-Haber cycle for NaCl involves all EXCEPT:', o: ['Ionization energy of Na', 'Electron affinity of Cl', 'Lattice energy', 'Bond energy of NaCl molecule'], a: 3, s: 'Born-Haber cycle relates lattice energy to other measurable quantities: sublimation of Na, ionization of Na, dissociation of Cl₂, electron affinity of Cl, and enthalpy of formation. Bond energy of NaCl molecule is not a step.' },
        { q: 'The paramagnetic behaviour of O₂ was first explained by:', o: ['Valence Bond Theory', 'VSEPR Theory', 'Molecular Orbital Theory', 'Crystal Field Theory'], a: 2, s: 'VBT predicts O₂ to be diamagnetic (all electrons paired), which is wrong. MOT correctly shows O₂ has 2 unpaired electrons in π*2p orbitals, explaining its paramagnetism.' },
        { q: 'In which of the following does the central atom have two lone pairs?', o: ['NH₃', 'H₂O', 'BF₃', 'CH₄'], a: 1, s: 'H₂O: O has 6 valence electrons. Two bond pairs (with H) + two lone pairs = 4 electron pairs (sp³). The two lone pairs give bent shape with 104.5° angle. NH₃ has one lone pair, BF₃ and CH₄ have none.' },
        { q: 'Fajan\'s rules predict more covalent character when:', o: ['Cation is large and anion is small', 'Cation is small with high charge and anion is large', 'Both ions are large', 'Both ions have low charges'], a: 1, s: 'Fajan\'s rules: covalent character increases with (1) small, highly charged cation (high polarizing power), (2) large, highly charged anion (high polarizability), (3) cation with pseudo-noble-gas configuration.' },
      ],
    },
    {
      name: 'Chemical Equilibrium & Thermodynamics',
      slug: 'equilibrium-thermo',
      easy: [
        { q: 'At equilibrium, the rate of forward reaction is:', o: ['Greater than reverse', 'Less than reverse', 'Equal to reverse', 'Zero'], a: 2, s: 'At chemical equilibrium, rate of forward reaction = rate of backward reaction. Concentrations remain constant but reactions continue to occur (dynamic equilibrium).' },
        { q: 'The first law of thermodynamics is a statement of:', o: ['Conservation of mass', 'Conservation of energy', 'Entropy increase', 'Spontaneity'], a: 1, s: 'First law: ΔU = Q − W. Energy can neither be created nor destroyed, only converted from one form to another. It is the law of conservation of energy.' },
        { q: 'An exothermic reaction has:', o: ['ΔH > 0', 'ΔH < 0', 'ΔH = 0', 'ΔS < 0'], a: 1, s: 'Exothermic reactions release heat to surroundings. ΔH < 0 (negative enthalpy change). Examples: combustion, neutralization, dissolving NaOH in water.' },
        { q: 'Le Chatelier\'s principle applies to:', o: ['Only gaseous reactions', 'Systems at equilibrium', 'Irreversible reactions', 'All chemical reactions'], a: 1, s: 'Le Chatelier\'s principle: If a system at equilibrium is disturbed, it shifts to counteract the disturbance and re-establish equilibrium. Applies only to systems already at equilibrium.' },
        { q: 'The pH of pure water at 25°C is:', o: ['0', '1', '7', '14'], a: 2, s: 'Pure water: [H⁺] = [OH⁻] = 10⁻⁷ M. pH = −log[H⁺] = −log(10⁻⁷) = 7. Pure water is neutral. Kw = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C.' },
      ],
      medium: [
        { q: 'For the reaction 2SO₂ + O₂ ⇌ 2SO₃, increasing pressure will:', o: ['Shift equilibrium to the left', 'Shift equilibrium to the right', 'Have no effect', 'Decrease Kp'], a: 1, s: 'Δn(g) = 2 − (2+1) = −1 (fewer moles of gas on product side). Increasing pressure shifts equilibrium toward fewer moles of gas → toward products (right). Kp doesn\'t change.' },
        { q: 'The entropy of a perfect crystal at absolute zero is:', o: ['Maximum', 'Zero', 'Undefined', 'Negative'], a: 1, s: 'Third law of thermodynamics: The entropy of a perfect crystal at absolute zero (0 K) is exactly zero. At 0 K, there is only one possible microstate (W=1), so S = kB ln(1) = 0.' },
        { q: 'Gibbs free energy change (ΔG) for a spontaneous process at constant T and P is:', o: ['ΔG > 0', 'ΔG < 0', 'ΔG = 0', 'Cannot be determined'], a: 1, s: 'A process is spontaneous at constant T and P when ΔG < 0. ΔG = ΔH − TΔS. At equilibrium, ΔG = 0. Non-spontaneous when ΔG > 0.' },
        { q: 'The pH of a 0.01 M NaOH solution is:', o: ['2', '10', '12', '14'], a: 2, s: 'NaOH is a strong base: [OH⁻] = 0.01 = 10⁻² M. pOH = −log(10⁻²) = 2. pH = 14 − pOH = 14 − 2 = 12.' },
        { q: 'Hess\'s law states that enthalpy change of a reaction:', o: ['Depends on the path', 'Is independent of the path', 'Is always negative', 'Equals zero in a cycle'], a: 1, s: 'Hess\'s law: The total enthalpy change is the same regardless of the path taken (whether in one step or multiple steps). Enthalpy is a state function.' },
        { q: 'The relationship between ΔG° and equilibrium constant K is:', o: ['ΔG° = RT ln K', 'ΔG° = −RT ln K', 'ΔG° = −nFE°', 'Both B and C'], a: 3, s: 'ΔG° = −RT ln K = −nFE° (for electrochemical cells). When K > 1, ΔG° < 0 (spontaneous at standard conditions). When K < 1, ΔG° > 0.' },
      ],
      hard: [
        { q: 'For a buffer solution containing 0.1 M CH₃COOH and 0.1 M CH₃COONa (Ka = 1.8×10⁻⁵), the pH is:', o: ['4.74', '5.74', '3.74', '9.26'], a: 0, s: 'Henderson-Hasselbalch: pH = pKa + log([salt]/[acid]) = −log(1.8×10⁻⁵) + log(0.1/0.1) = 4.74 + 0 = 4.74.' },
        { q: 'Entropy change for an isothermal reversible expansion of an ideal gas is:', o: ['Zero', 'nR ln(V₂/V₁)', 'nCv ln(T₂/T₁)', 'Negative'], a: 1, s: 'For isothermal reversible process: ΔS = Q_rev/T = nRT ln(V₂/V₁)/T = nR ln(V₂/V₁). Since V₂ > V₁ in expansion, ΔS > 0 (entropy increases).' },
        { q: 'The solubility product (Ksp) of AgCl is 1.8×10⁻¹⁰. Its solubility in 0.1 M NaCl is:', o: ['1.8×10⁻⁹ M', '1.34×10⁻⁵ M', '1.8×10⁻¹⁰ M', '1.8×10⁻⁵ M'], a: 0, s: 'AgCl ⇌ Ag⁺ + Cl⁻. In 0.1 M NaCl, [Cl⁻] ≈ 0.1 M (common ion). Ksp = [Ag⁺][Cl⁻] → [Ag⁺] = Ksp/[Cl⁻] = 1.8×10⁻¹⁰/0.1 = 1.8×10⁻⁹ M. Solubility decreases dramatically.' },
        { q: 'For a reaction with ΔH = −40 kJ/mol and ΔS = −100 J/(mol·K), the reaction becomes non-spontaneous above:', o: ['100 K', '200 K', '300 K', '400 K'], a: 3, s: 'ΔG = ΔH − TΔS = 0 at the crossover temperature. T = ΔH/ΔS = −40000/(−100) = 400 K. Above 400 K, the −TΔS term dominates and ΔG becomes positive (non-spontaneous).' },
        { q: 'The van\'t Hoff equation relating K to temperature is:', o: ['d(ln K)/dT = ΔH°/(RT²)', 'ln K = −ΔG°/RT', 'd(ln K)/dP = ΔV/RT', 'K = e^(−Ea/RT)'], a: 0, s: 'Van\'t Hoff equation: d(ln K)/dT = ΔH°/(RT²). For exothermic reactions (ΔH° < 0), K decreases with increasing T. For endothermic (ΔH° > 0), K increases with T.' },
      ],
    },
  ],
};

/* ──── Chapter 2: Organic Chemistry ──── */
const organicChem: NEETChapterData = {
  name: 'Organic Chemistry',
  slug: 'organic-chemistry',
  topics: [
    {
      name: 'General Organic Chemistry & Hydrocarbons',
      slug: 'goc-hydrocarbons',
      easy: [
        { q: 'The IUPAC name of CH₃CH₂OH is:', o: ['Methanol', 'Ethanol', 'Propanol', 'Butanol'], a: 1, s: 'CH₃CH₂OH has a 2-carbon chain with an -OH group. IUPAC name: Ethanol (eth- for 2C, -ol for alcohol). Common name: ethyl alcohol.' },
        { q: 'Isomers have the same:', o: ['Structural formula', 'Molecular formula', 'Physical properties', 'Chemical properties'], a: 1, s: 'Isomers are compounds with the same molecular formula but different structural arrangements. They can have different physical and chemical properties. Example: C₂H₆O can be ethanol or dimethyl ether.' },
        { q: 'The general formula of alkanes is:', o: ['CₙH₂ₙ', 'CₙH₂ₙ₊₂', 'CₙH₂ₙ₋₂', 'CₙHₙ'], a: 1, s: 'Alkanes are saturated hydrocarbons with single bonds only. General formula: CₙH₂ₙ₊₂. Alkenes: CₙH₂ₙ. Alkynes: CₙH₂ₙ₋₂.' },
        { q: 'Homologous series members differ by:', o: ['CH₂', 'CH₃', 'C₂H₂', 'CH'], a: 0, s: 'Members of a homologous series differ by -CH₂- (14 amu). They have the same general formula, functional group, and similar chemical properties. Example: CH₄, C₂H₆, C₃H₈ (alkanes).' },
        { q: '+I (positive inductive) effect is shown by:', o: ['-NO₂', '-Cl', '-CH₃', '-COOH'], a: 2, s: 'Alkyl groups like -CH₃ show +I effect (electron donating). They push electron density through σ bonds. Groups like -NO₂, -Cl, -COOH show −I effect (electron withdrawing).' },
      ],
      medium: [
        { q: 'The most stable carbocation among the following is:', o: ['CH₃⁺', '(CH₃)₂CH⁺', '(CH₃)₃C⁺', 'C₂H₅⁺'], a: 2, s: 'Carbocation stability: 3° > 2° > 1° > methyl. (CH₃)₃C⁺ is tertiary, stabilized by hyperconjugation and +I effect of three methyl groups.' },
        { q: 'Markovnikov\'s rule predicts that in HBr addition to propene, the major product is:', o: ['1-Bromopropane', '2-Bromopropane', 'Both equally', '1,2-Dibromopropane'], a: 1, s: 'Markovnikov\'s rule: H adds to C with more H atoms (less substituted). In propene + HBr: H goes to CH₂, Br goes to CH (middle carbon) → 2-bromopropane (via more stable 2° carbocation).' },
        { q: 'Benzene undergoes electrophilic substitution rather than addition because:', o: ['C-C bonds are very strong', 'Aromatic stabilization is preserved', 'It has no double bonds', 'It has sp³ carbons'], a: 1, s: 'Benzene\'s aromatic stabilization energy (~36 kcal/mol) makes substitution preferred over addition. Addition would destroy aromaticity (delocalized π system), which is energetically unfavorable.' },
        { q: 'Anti-Markovnikov addition of HBr to propene gives:', o: ['2-Bromopropane', '1-Bromopropane', 'Propane', '1,2-Dibromopropane'], a: 1, s: 'Anti-Markovnikov (peroxide effect/Kharasch effect): In presence of peroxides, HBr adds via free radical mechanism. Br adds to less substituted carbon → 1-bromopropane.' },
        { q: 'Ozonolysis of 2-butene gives:', o: ['Formaldehyde only', 'Acetaldehyde (2 molecules)', 'Acetone + formaldehyde', 'Butanal'], a: 1, s: 'CH₃CH=CHCH₃ + O₃ → ozonide → 2CH₃CHO (2 molecules of acetaldehyde) on reductive workup (Zn/H₂O). Each doubly-bonded carbon becomes a carbonyl group.' },
        { q: 'The correct order of acidic strength is:', o: ['Ethane > Ethene > Ethyne', 'Ethyne > Ethene > Ethane', 'Ethene > Ethyne > Ethane', 'All have equal acidity'], a: 1, s: 'Acidity: sp > sp² > sp³ C-H. Ethyne (sp, 50% s) > Ethene (sp², 33% s) > Ethane (sp³, 25% s). More s-character → electrons held closer to nucleus → more acidic.' },
      ],
      hard: [
        { q: 'Friedel-Crafts alkylation of benzene with CH₃Cl/AlCl₃ gives:', o: ['Chlorobenzene', 'Toluene', 'Benzoic acid', 'Aniline'], a: 1, s: 'Friedel-Crafts alkylation: C₆H₆ + CH₃Cl → C₆H₅CH₃ (toluene) + HCl. AlCl₃ generates CH₃⁺ electrophile. Limitation: doesn\'t work with deactivated rings or NH₂ groups.' },
        { q: 'Which of the following shows geometrical isomerism?', o: ['1-Butene', '2-Butene', '2-Methylpropene', 'Propene'], a: 1, s: '2-Butene (CH₃CH=CHCH₃) shows cis-trans (geometrical) isomerism because both doubly-bonded carbons have different substituents. cis-2-Butene and trans-2-Butene exist. 1-Butene has two H on one C.' },
        { q: 'In electrophilic aromatic substitution, -OCH₃ group is:', o: ['Deactivating and meta-directing', 'Activating and ortho-para directing', 'Activating and meta-directing', 'Deactivating and ortho-para directing'], a: 1, s: '-OCH₃ is activating (+M effect donates electron density to ring via lone pair resonance, outweighing weak −I effect). It directs incoming electrophile to ortho and para positions.' },
        { q: 'The number of structural isomers of C₄H₁₀ is:', o: ['1', '2', '3', '4'], a: 1, s: 'C₄H₁₀ has 2 structural isomers: n-butane (CH₃CH₂CH₂CH₃) and isobutane/2-methylpropane ((CH₃)₃CH). These are chain isomers.' },
        { q: 'Lindlar\'s catalyst converts alkynes to:', o: ['Alkanes', 'trans-Alkenes', 'cis-Alkenes', 'Alcohols'], a: 2, s: 'Lindlar\'s catalyst (Pd/CaCO₃ with quinoline/Pb poison) is a partially deactivated catalyst that reduces alkynes to cis-alkenes (syn addition of H₂). Full reduction to alkane is prevented.' },
      ],
    },
    {
      name: 'Biomolecules & Polymers',
      slug: 'biomolecules-polymers',
      easy: [
        { q: 'Glucose has the molecular formula:', o: ['C₅H₁₀O₅', 'C₆H₁₂O₆', 'C₁₂H₂₂O₁₁', 'C₆H₁₀O₅'], a: 1, s: 'Glucose (C₆H₁₂O₆) is a monosaccharide (aldohexose). It is the most common sugar and primary energy source for cells. Fructose has the same formula (isomer) but is a ketohexose.' },
        { q: 'Proteins are polymers of:', o: ['Nucleotides', 'Amino acids', 'Fatty acids', 'Monosaccharides'], a: 1, s: 'Proteins are polypeptides — polymers of amino acids linked by peptide bonds (CO-NH). There are 20 standard amino acids. The sequence of amino acids determines protein structure and function.' },
        { q: 'The monomer of natural rubber is:', o: ['Ethylene', 'Styrene', 'Isoprene', 'Chloroprene'], a: 2, s: 'Natural rubber is cis-1,4-polyisoprene. Isoprene = 2-methyl-1,3-butadiene (CH₂=C(CH₃)-CH=CH₂). Vulcanization (cross-linking with sulfur) improves its properties.' },
        { q: 'DNA contains which sugar?', o: ['Ribose', 'Deoxyribose', 'Glucose', 'Fructose'], a: 1, s: 'DNA (deoxyribonucleic acid) contains 2-deoxyribose sugar (lacking -OH at C2). RNA contains ribose sugar. This difference affects stability — DNA is more stable than RNA.' },
        { q: 'Starch is a polymer of:', o: ['Fructose', 'Glucose', 'Galactose', 'Mannose'], a: 1, s: 'Starch is a polysaccharide made of glucose monomers. It has two components: amylose (linear, α-1,4 linkages) and amylopectin (branched, α-1,4 and α-1,6 linkages).' },
      ],
      medium: [
        { q: 'Nylon-6,6 is a product of:', o: ['Addition polymerization', 'Condensation polymerization of adipic acid and hexamethylenediamine', 'Ring-opening polymerization', 'Copolymerization of ethylene and propylene'], a: 1, s: 'Nylon-6,6 is formed by condensation of adipic acid (6C dicarboxylic acid) and hexamethylenediamine (6C diamine). "6,6" indicates 6 carbons in each monomer. Water is eliminated.' },
        { q: 'The secondary structure of proteins refers to:', o: ['Sequence of amino acids', 'α-helix and β-pleated sheet', 'Overall 3D shape', 'Assembly of subunits'], a: 1, s: 'Secondary structure: local folding stabilized by hydrogen bonds between backbone C=O and N-H groups. α-helix (right-handed coil) and β-sheet (zigzag, parallel/antiparallel strands) are the two types.' },
        { q: 'Sucrose on hydrolysis gives:', o: ['Two glucose molecules', 'Glucose and galactose', 'Glucose and fructose', 'Two fructose molecules'], a: 2, s: 'Sucrose (table sugar) is a disaccharide that hydrolyzes into glucose + fructose. The mixture is called "invert sugar" because the optical rotation changes sign upon hydrolysis.' },
        { q: 'Which of the following is a thermosetting polymer?', o: ['Polythene', 'PVC', 'Bakelite', 'Nylon'], a: 2, s: 'Bakelite (phenol-formaldehyde resin) is thermosetting — once set/hardened, it cannot be resoftened by heating due to extensive cross-linking. Polythene, PVC, and Nylon are thermoplastic.' },
        { q: 'Essential amino acids are those that:', o: ['Body can synthesize', 'Must be obtained from diet', 'Are non-polar', 'Contain sulfur'], a: 1, s: 'Essential amino acids cannot be synthesized by the body and must be obtained through diet. There are ~9 essential amino acids for humans including leucine, isoleucine, valine, tryptophan, etc.' },
        { q: 'Zwitter ion form of an amino acid exists at:', o: ['Acidic pH', 'Isoelectric pH', 'Basic pH', 'Very low pH'], a: 1, s: 'At isoelectric pH (pI), amino acid exists as zwitter ion (H₃N⁺-CHR-COO⁻) with zero net charge. Below pI: cationic form. Above pI: anionic form.' },
      ],
      hard: [
        { q: 'The peptide bond in proteins is:', o: ['C-C bond', 'C-N bond with partial double bond character', 'N-H bond', 'C-O bond'], a: 1, s: 'The peptide bond (CO-NH) has partial double bond character due to resonance between C=O and C-N. This makes it planar and rigid. The six atoms around the peptide bond are coplanar.' },
        { q: 'Enzymes are:', o: ['Mineral catalysts', 'Protein biocatalysts', 'Lipid molecules', 'Nucleic acids'], a: 1, s: 'Enzymes are biological catalysts, mostly proteins (some RNA enzymes called ribozymes exist). They have high specificity (lock-and-key/induced fit model) and work optimally at specific pH and temperature.' },
        { q: 'Which of the following is a reducing sugar?', o: ['Sucrose', 'Maltose', 'Starch', 'Cellulose'], a: 1, s: 'Maltose is a reducing sugar because it has a free anomeric carbon (hemiacetal) that can open and show reducing properties. Sucrose is a non-reducing sugar (both anomeric carbons involved in glycosidic bond).' },
        { q: 'Denaturation of proteins involves:', o: ['Breaking of peptide bonds', 'Loss of primary structure', 'Disruption of secondary and tertiary structures', 'Hydrolysis to amino acids'], a: 2, s: 'Denaturation disrupts the secondary (H-bonds), tertiary (hydrophobic, ionic, disulfide interactions), and quaternary structures while preserving the primary sequence (peptide bonds intact). Caused by heat, pH change, organic solvents.' },
        { q: 'Biodegradable polymers include:', o: ['Polythene', 'PVC', 'PHBV (Poly-β-hydroxybutyrate-co-β-hydroxyvalerate)', 'Teflon'], a: 2, s: 'PHBV is a biodegradable polyester produced by bacteria. It degrades naturally in the environment. Other biodegradable polymers: PLA (polylactic acid), Nylon-2-Nylon-6. Polythene, PVC, Teflon are non-biodegradable.' },
      ],
    },
  ],
};

/* ──── Chapter 3: Inorganic Chemistry ──── */
const inorganicChem: NEETChapterData = {
  name: 'Inorganic Chemistry',
  slug: 'inorganic-chemistry',
  topics: [
    {
      name: 'Periodic Table & Chemical Trends',
      slug: 'periodic-trends',
      easy: [
        { q: 'Elements in the same group of the periodic table have the same number of:', o: ['Protons', 'Neutrons', 'Valence electrons', 'Total electrons'], a: 2, s: 'Elements in the same group have the same number of valence electrons, giving them similar chemical properties. Group 1: 1 valence electron, Group 17: 7 valence electrons.' },
        { q: 'The most electronegative element is:', o: ['Oxygen', 'Fluorine', 'Chlorine', 'Nitrogen'], a: 1, s: 'Fluorine (4.0 on Pauling scale) is the most electronegative element. Electronegativity generally increases left to right across a period and decreases down a group.' },
        { q: 'Alkali metals belong to group:', o: ['1', '2', '13', '17'], a: 0, s: 'Alkali metals (Li, Na, K, Rb, Cs, Fr) belong to Group 1. They have 1 valence electron (ns¹), are highly reactive, and form +1 ions readily.' },
        { q: 'Noble gases are chemically inert because:', o: ['They are very light', 'They have completely filled valence shells', 'They are radioactive', 'They have no electrons'], a: 1, s: 'Noble gases (He, Ne, Ar, Kr, Xe, Rn) have completely filled outer electron shells (ns²np⁶, except He: 1s²). This stable configuration makes them very unreactive.' },
        { q: 'Atomic radius generally decreases across a period because:', o: ['More shells are added', 'Nuclear charge increases with same number of shells', 'Electrons are removed', 'Mass increases'], a: 1, s: 'Across a period, atomic number increases (more protons) but electrons are added to the same shell. Increased effective nuclear charge pulls electrons closer, decreasing atomic radius.' },
      ],
      medium: [
        { q: 'The element with electronic configuration [Ar] 3d⁵ 4s¹ is:', o: ['Vanadium', 'Chromium', 'Manganese', 'Iron'], a: 1, s: 'Chromium (Cr, Z=24) has [Ar] 3d⁵ 4s¹ instead of expected 3d⁴ 4s². Half-filled 3d⁵ provides extra stability. Similarly, Cu is [Ar] 3d¹⁰ 4s¹ (fully filled 3d).' },
        { q: 'Among Na, Mg, Al, and Si, the element with the highest ionization energy is:', o: ['Na', 'Mg', 'Al', 'Si'], a: 3, s: 'IE increases across a period (left to right) due to increasing nuclear charge. Order: Na < Al < Mg < Si. Anomaly: Mg > Al because Mg has a fully filled 2s² (extra stable).' },
        { q: 'Diagonal relationship exists between:', o: ['Li and Na', 'Li and Mg', 'Na and K', 'Be and Ca'], a: 1, s: 'Li and Mg show diagonal relationship: similar charge/size ratio leads to similar properties. Both form nitrides directly, carbonates decompose on heating, and they don\'t form superoxides.' },
        { q: 'Which oxide is amphoteric?', o: ['Na₂O', 'MgO', 'Al₂O₃', 'P₂O₅'], a: 2, s: 'Al₂O₃ is amphoteric — reacts with both acids (→ AlCl₃ + H₂O) and bases (→ NaAlO₂ + H₂O). Na₂O and MgO are basic. P₂O₅ is acidic.' },
        { q: 'Electron affinity is most negative (highest magnitude) for:', o: ['F', 'Cl', 'Br', 'I'], a: 1, s: 'Chlorine has the most negative electron affinity (−349 kJ/mol). Fluorine\'s small size causes electron-electron repulsion in the compact 2p shell, reducing its EA to −328 kJ/mol.' },
        { q: 'Lanthanide contraction is caused by:', o: ['Poor shielding by 4f electrons', 'Expansion of 5d orbitals', 'Increase in atomic number', 'Addition of 6p electrons'], a: 0, s: 'Lanthanide contraction occurs because 4f electrons are poor shielders of nuclear charge. As 4f fills across lanthanides, effective nuclear charge increases, shrinking atomic/ionic radii progressively.' },
      ],
      hard: [
        { q: 'The correct order of second ionization energies is:', o: ['Na > Mg > Al > Si', 'Si > Al > Mg > Na', 'Na > Al > Mg > Si', 'Mg > Na > Si > Al'], a: 0, s: 'For second IE: Na has the highest because removing 2nd electron means breaking into noble gas core (1s²2s²2p⁶ → 2p⁵). IE₂ order: Na >> Mg > Al > Si. Removing from stable core is extremely difficult.' },
        { q: 'The electronegativity of elements in Pauling scale follows:', o: ['F > O > N > Cl', 'F > O > Cl > N', 'F > Cl > O > N', 'O > F > Cl > N'], a: 1, s: 'Pauling electronegativity: F (4.0) > O (3.5) > Cl (3.0) > N (3.0). F and O are in period 2 with small size. Cl is larger but still has high nuclear charge. N equals Cl on this scale.' },
        { q: 'Which statement about transition metals is correct?', o: ['All have coloured ions', 'They show variable oxidation states due to availability of ns and (n-1)d electrons', 'All are diamagnetic', 'They have very low melting points'], a: 1, s: 'Transition metals show variable oxidation states because both ns and (n-1)d electrons have similar energies and can participate in bonding. Not all ions are coloured (d⁰ and d¹⁰ are colourless).' },
        { q: 'The magnetic moment of Fe²⁺ (3d⁶, high spin) is approximately:', o: ['0 BM', '2.83 BM', '4.90 BM', '5.92 BM'], a: 2, s: 'Fe²⁺ in high spin: 3d⁶ → t₂g⁴ eg² (4 unpaired electrons). μ = √(n(n+2)) = √(4×6) = √24 ≈ 4.90 BM. Low spin Fe²⁺ would have 0 unpaired electrons.' },
        { q: 'KMnO₄ in acidic medium acts as:', o: ['A reducing agent (Mn²⁺ → Mn⁷⁺)', 'An oxidizing agent (Mn⁷⁺ → Mn²⁺)', 'A catalyst', 'Neither oxidizing nor reducing'], a: 1, s: 'KMnO₄ in acidic medium: Mn goes from +7 to +2 (gains 5 electrons per Mn). It is a powerful oxidizing agent. MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O. Purple → colorless.' },
      ],
    },
    {
      name: 'Coordination Compounds & Metallurgy',
      slug: 'coordination-metallurgy',
      easy: [
        { q: 'Coordination number refers to the number of:', o: ['Atoms in a molecule', 'Ligand donor atoms bonded to central metal', 'Electrons in outer shell', 'Bonds in a compound'], a: 1, s: 'Coordination number is the number of ligand donor atoms directly bonded to the central metal ion. For [Co(NH₃)₆]³⁺, CN = 6 (six N atoms from six NH₃ molecules).' },
        { q: 'Bauxite is the ore of:', o: ['Iron', 'Copper', 'Aluminium', 'Zinc'], a: 2, s: 'Bauxite (Al₂O₃·2H₂O) is the chief ore of aluminium. Aluminium is extracted by electrolysis of alumina dissolved in cryolite (Hall-Héroult process).' },
        { q: 'A monodentate ligand donates:', o: ['No electron pairs', 'One electron pair', 'Two electron pairs', 'Three electron pairs'], a: 1, s: 'A monodentate ligand has one donor atom that donates one lone pair to the metal. Examples: NH₃ (N donor), Cl⁻, H₂O (O donor), CN⁻ (C donor).' },
        { q: 'In the blast furnace, iron ore is reduced by:', o: ['Hydrogen', 'Carbon monoxide', 'Aluminium', 'Electricity'], a: 1, s: 'In blast furnace: Fe₂O₃ + 3CO → 2Fe + 3CO₂. Carbon monoxide (formed from coke: C + O₂ → CO₂, CO₂ + C → 2CO) acts as the reducing agent at ~700°C.' },
        { q: 'EDTA is an example of a _____ ligand:', o: ['Monodentate', 'Bidentate', 'Tetradentate', 'Hexadentate'], a: 3, s: 'EDTA (ethylenediaminetetraacetic acid) is a hexadentate ligand — it can bind through 2 nitrogen atoms and 4 carboxylate oxygen atoms, forming very stable chelate complexes.' },
      ],
      medium: [
        { q: 'The IUPAC name of [Cr(NH₃)₃Cl₃] is:', o: ['Triamminetrichlorochromium(III)', 'Trichlorotriamminechromium(III)', 'Chromium triammine trichloride', 'Triamminetrichloridochromium(III)'], a: 3, s: 'IUPAC naming rules: ligands in alphabetical order (ammine before chlorido), then metal name with oxidation state. Cr: x + 0(3) + (−1)(3) = 0 → x = +3. Name: triamminetrichloridochromium(III).' },
        { q: 'Crystal field splitting energy (Δ₀) in an octahedral field is:', o: ['Less than in tetrahedral field', 'Greater than in tetrahedral field', 'Equal to tetrahedral', 'Zero'], a: 1, s: 'Δ₀ > Δₜ. In fact, Δₜ ≈ (4/9)Δ₀ for the same metal ion and ligands. Octahedral field is stronger because 6 ligands interact with d orbitals more than 4 ligands in tetrahedral geometry.' },
        { q: 'Which complex is expected to be coloured?', o: ['[Zn(NH₃)₄]²⁺', '[Ti(H₂O)₆]³⁺', '[Sc(H₂O)₆]³⁺', '[Cu⁺(CN)₄]³⁻'], a: 1, s: '[Ti(H₂O)₆]³⁺ has d¹ configuration (one unpaired electron that can undergo d-d transition). Zn²⁺ is d¹⁰, Sc³⁺ is d⁰, Cu⁺ is d¹⁰ — all colourless because no d-d transition possible.' },
        { q: 'In the froth flotation process, which type of ores are concentrated?', o: ['Oxide ores', 'Carbonate ores', 'Sulphide ores', 'Halide ores'], a: 2, s: 'Froth flotation concentrates sulphide ores (e.g., ZnS, PbS, CuFeS₂). Sulphide particles are wetted by oil (hydrophobic) and float with froth, while gangue (hydrophilic) sinks.' },
        { q: 'Spectrochemical series arranges ligands in order of:', o: ['Size', 'Crystal field splitting energy (Δ)', 'Charge', 'Mass'], a: 1, s: 'Spectrochemical series: I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < NO₂⁻ < CN⁻ < CO. Weak field (left) → small Δ → high spin. Strong field (right) → large Δ → low spin.' },
        { q: 'Leaching of gold ore uses:', o: ['NaOH solution', 'NaCN solution', 'HCl solution', 'H₂SO₄ solution'], a: 1, s: 'Gold is leached using dilute NaCN solution in presence of air: 4Au + 8NaCN + 2H₂O + O₂ → 4Na[Au(CN)₂] + 4NaOH. Gold is recovered by cementation with zinc dust (MacArthur-Forrest process).' },
      ],
      hard: [
        { q: 'The complex [Co(en)₂Cl₂]⁺ shows:', o: ['Only geometrical isomerism', 'Only optical isomerism', 'Both geometrical and optical isomerism', 'No isomerism'], a: 2, s: '[Co(en)₂Cl₂]⁺ shows both: geometrical (cis and trans forms) and optical isomerism (cis form has non-superimposable mirror images → d and l forms). Trans form has a plane of symmetry so is optically inactive.' },
        { q: 'In the thermite process, the reducing agent is:', o: ['Carbon', 'Carbon monoxide', 'Aluminium', 'Hydrogen'], a: 2, s: 'Thermite reaction: Fe₂O₃ + 2Al → 2Fe + Al₂O₃ (ΔH very negative). Aluminium acts as the reducing agent (more reactive than Fe). The reaction is highly exothermic (~3000°C). Used for welding railway tracks.' },
        { q: 'Werner\'s theory was the first to explain:', o: ['Covalent bonding', 'The structure and bonding of coordination compounds', 'Ionic bonding', 'Metallic bonding'], a: 1, s: 'Alfred Werner (1893) proposed: metal ions have primary valence (oxidation state, satisfied by anions) and secondary valence (coordination number, satisfied by ligands in spatial arrangement). Won Nobel Prize 1913.' },
        { q: 'Which isomerism is shown by [CoCl(NH₃)₅]SO₄ and [Co(SO₄)(NH₃)₅]Cl?', o: ['Linkage isomerism', 'Ionization isomerism', 'Geometrical isomerism', 'Coordination isomerism'], a: 1, s: 'Ionization isomerism: exchange of ions between coordination sphere and outer sphere. [CoCl(NH₃)₅]SO₄ gives SO₄²⁻ in solution. [Co(SO₄)(NH₃)₅]Cl gives Cl⁻ in solution. Different ions in solution.' },
        { q: 'Ellingham diagram is used to predict:', o: ['Solubility of salts', 'Feasibility of reduction of metal oxides', 'Crystal field splitting', 'Electrochemical potential'], a: 1, s: 'Ellingham diagram plots ΔG° vs temperature for metal oxide formation. A metal can reduce the oxide of another metal whose ΔG° line lies above it. Used to select appropriate reducing agents in metallurgy.' },
      ],
    },
  ],
};

/* ──── Chapter 4: Chemical Kinetics & Electrochemistry ──── */
const kineticsElectro: NEETChapterData = {
  name: 'Chemical Kinetics & Electrochemistry',
  slug: 'kinetics-electrochemistry',
  topics: [
    {
      name: 'Rate Laws & Reaction Kinetics',
      slug: 'rate-laws',
      easy: [
        { q: 'The rate of a chemical reaction generally increases with:', o: ['Decrease in temperature', 'Increase in temperature', 'Decrease in concentration', 'Addition of solvent'], a: 1, s: 'Increasing temperature increases kinetic energy of molecules, leading to more frequent and energetic collisions. Generally, rate doubles for every 10°C rise (Arrhenius equation).' },
        { q: 'A catalyst increases the rate of reaction by:', o: ['Increasing temperature', 'Increasing pressure', 'Lowering activation energy', 'Increasing concentration'], a: 2, s: 'A catalyst provides an alternative reaction pathway with lower activation energy (Ea). More molecules have enough energy to overcome this lower barrier, increasing the reaction rate. Catalyst is not consumed.' },
        { q: 'The SI unit of rate of reaction is:', o: ['mol/L', 'mol/(L·s)', 'L/(mol·s)', 's⁻¹'], a: 1, s: 'Rate = −d[A]/dt = change in concentration per unit time. SI unit: mol L⁻¹ s⁻¹ (or M/s). The unit of rate constant (k) varies with the order of reaction.' },
        { q: 'For a first-order reaction, the half-life is:', o: ['Dependent on initial concentration', 'Independent of initial concentration', 'Inversely proportional to concentration', 'Directly proportional to concentration'], a: 1, s: 'For first-order: t₁/₂ = 0.693/k. Half-life depends only on the rate constant k, not on initial concentration. This is unique to first-order reactions.' },
        { q: 'Order of a reaction can be:', o: ['Only a positive integer', 'Only zero or positive integer', 'Zero, fraction, or integer', 'Only 1 or 2'], a: 2, s: 'Order of reaction is determined experimentally and can be zero, positive integer, negative, or even a fraction. It is NOT related to stoichiometric coefficients. Example: zero-order, first-order, 1.5-order.' },
      ],
      medium: [
        { q: 'The Arrhenius equation is k = Ae^(−Ea/RT). If Ea is doubled at the same temperature, the rate constant:', o: ['Doubles', 'Halves', 'Decreases exponentially', 'Remains unchanged'], a: 2, s: 'In k = Ae^(−Ea/RT), doubling Ea means k = Ae^(−2Ea/RT) = (Ae^(−Ea/RT))^(2/1) approximately — the rate constant decreases exponentially (not just halved). Higher Ea → much slower reaction.' },
        { q: 'For a second-order reaction, the unit of rate constant is:', o: ['s⁻¹', 'mol⁻¹ L s⁻¹', 'mol L⁻¹ s⁻¹', 'mol⁻² L² s⁻¹'], a: 1, s: 'For nth order reaction: unit of k = (mol/L)^(1-n) × s⁻¹. For 2nd order: k has units of L mol⁻¹ s⁻¹ (or mol⁻¹ L s⁻¹ or M⁻¹ s⁻¹).' },
        { q: 'The rate law for a reaction is rate = k[A][B]². The overall order is:', o: ['1', '2', '3', '4'], a: 2, s: 'Overall order = sum of exponents = 1 + 2 = 3 (third order). Order w.r.t. A is 1 (first order), order w.r.t. B is 2 (second order).' },
        { q: 'Molecularity of reaction refers to:', o: ['Number of molecules in total', 'Number of reacting species in the rate-determining step', 'Order of the reaction', 'Number of products'], a: 1, s: 'Molecularity is the number of reacting species (atoms, molecules, ions) that collide simultaneously in the rate-determining elementary step. Always a positive integer (1, 2, or rarely 3). Cannot be zero or fractional.' },
        { q: 'For a zero-order reaction, the rate:', o: ['Depends on concentration', 'Is independent of concentration', 'Increases exponentially', 'Decreases with time'], a: 1, s: 'Zero-order: rate = k (constant). Rate is independent of concentration. [A] = [A]₀ − kt (linear decrease). Half-life: t₁/₂ = [A]₀/(2k). Example: enzyme-catalyzed reactions at saturation.' },
        { q: 'Temperature coefficient of a reaction is defined as:', o: ['Rate at T+10/Rate at T', 'Rate at T/Rate at T+10', 'Ea/RT', 'k₂/k₁ when T₂ − T₁ = 1'], a: 0, s: 'Temperature coefficient = k(T+10)/k(T) ≈ rate(T+10)/rate(T). For most reactions, this value is between 2 and 3, meaning the rate roughly doubles or triples for every 10°C rise.' },
      ],
      hard: [
        { q: 'For a first-order reaction A → B, 75% of A decomposes in 100 minutes. The half-life is:', o: ['25 min', '50 min', '75 min', '100 min'], a: 1, s: '75% decomposed = 25% remaining. For first-order: t = (2.303/k) log([A]₀/[A]). 100 = (2.303/k) log(4) = (2.303/k)(0.602). k = 0.01386 min⁻¹. t₁/₂ = 0.693/0.01386 = 50 min. Also: 75% = 2 half-lives → t₁/₂ = 50 min.' },
        { q: 'Collision theory states that for a reaction to occur, molecules must collide with:', o: ['Any energy and any orientation', 'Sufficient energy and proper orientation', 'Only sufficient energy', 'Only proper orientation'], a: 1, s: 'Collision theory: effective collision requires (1) sufficient kinetic energy ≥ activation energy (Ea) AND (2) proper orientation of colliding molecules. Only a fraction of total collisions are effective.' },
        { q: 'The rate constant for a first-order reaction is 6.93 × 10⁻³ s⁻¹. The time for 90% completion is:', o: ['100 s', '230 s', '333 s', '500 s'], a: 2, s: 't = (2.303/k) × log([A]₀/[A]) = (2.303/6.93×10⁻³) × log(10/1) = (2.303/6.93×10⁻³) × 1 = 332.3 ≈ 333 s.' },
        { q: 'For a reaction with Ea = 50 kJ/mol, the ratio of rate constants at 300 K and 310 K is approximately: (R = 8.314 J/mol·K)', o: ['1.5', '2.0', '1.27', '3.0'], a: 1, s: 'Using ln(k₂/k₁) = (Ea/R)(1/T₁ − 1/T₂) = (50000/8.314)(1/300 − 1/310) = 6014.5 × 1.075×10⁻⁴ ≈ 0.647. k₂/k₁ = e^0.647 ≈ 1.91 ≈ 2.0.' },
        { q: 'Pseudo-first-order reaction occurs when:', o: ['All reactants are in excess', 'One reactant is in large excess, making its concentration effectively constant', 'The reaction is endothermic', 'A catalyst is present'], a: 1, s: 'Pseudo-first-order: a second-order (or higher) reaction where one reactant is in such large excess that its concentration barely changes. Example: hydrolysis of ester in excess water — rate = k\'[ester].' },
      ],
    },
    {
      name: 'Electrochemistry & Redox',
      slug: 'electrochemistry-redox',
      easy: [
        { q: 'In a galvanic cell, chemical energy is converted to:', o: ['Heat energy', 'Electrical energy', 'Mechanical energy', 'Nuclear energy'], a: 1, s: 'A galvanic (voltaic) cell converts chemical energy of spontaneous redox reactions into electrical energy. Example: Daniell cell (Zn-Cu cell). The reverse (electrical → chemical) is an electrolytic cell.' },
        { q: 'Oxidation involves:', o: ['Gain of electrons', 'Loss of electrons', 'Gain of protons', 'Loss of neutrons'], a: 1, s: 'Oxidation is loss of electrons (OIL RIG: Oxidation Is Loss, Reduction Is Gain). The substance that loses electrons is oxidized and acts as a reducing agent.' },
        { q: 'The standard hydrogen electrode (SHE) has a potential of:', o: ['1.0 V', '−1.0 V', '0.0 V', '0.5 V'], a: 2, s: 'SHE is the reference electrode with E° = 0.000 V by convention. It consists of a platinum electrode in contact with 1 M H⁺ solution and H₂ gas at 1 atm, 298 K.' },
        { q: 'Faraday\'s first law of electrolysis states that mass deposited is proportional to:', o: ['Voltage applied', 'Quantity of electricity passed', 'Temperature', 'Concentration'], a: 1, s: 'Faraday\'s 1st law: m = ZIt, where m = mass deposited, Z = electrochemical equivalent, I = current, t = time. Mass deposited ∝ quantity of charge (Q = It).' },
        { q: 'In electrolysis, reduction occurs at the:', o: ['Anode', 'Cathode', 'Both electrodes', 'Neither electrode'], a: 1, s: 'In electrolysis: cathode = negative electrode where reduction (gain of electrons) occurs. Anode = positive electrode where oxidation occurs. Remember: An Ox, Red Cat (Anode Oxidation, Reduction Cathode).' },
      ],
      medium: [
        { q: 'The Nernst equation relates cell EMF to:', o: ['Temperature only', 'Concentration of reactants and products', 'Only standard potential', 'Pressure only'], a: 1, s: 'Nernst equation: E = E° − (RT/nF)ln Q = E° − (0.0591/n)log Q at 298 K. It relates cell EMF to standard potential and reaction quotient Q (ratio of product to reactant concentrations).' },
        { q: 'The EMF of a cell is positive when:', o: ['ΔG is positive', 'ΔG is negative (reaction is spontaneous)', 'ΔG is zero', 'Reaction is non-spontaneous'], a: 1, s: 'E_cell > 0 ⟺ ΔG < 0 (spontaneous). Relationship: ΔG = −nFE. Positive EMF means the cell can do electrical work spontaneously. At equilibrium: E = 0 and ΔG = 0.' },
        { q: 'Molar conductivity at infinite dilution (Λ°m) is related to ionic conductivities by:', o: ['Λ°m = λ°₊ − λ°₋', 'Λ°m = λ°₊ + λ°₋ (Kohlrausch\'s law)', 'Λ°m = λ°₊ × λ°₋', 'Λ°m = λ°₊ / λ°₋'], a: 1, s: 'Kohlrausch\'s law of independent migration of ions: Λ°m = ν₊λ°₊ + ν₋λ°₋, where ν are stoichiometric coefficients and λ° are limiting molar conductivities of individual ions.' },
        { q: 'How many Faradays are required to deposit 1 mole of Cu from CuSO₄?', o: ['1 F', '2 F', '3 F', '4 F'], a: 1, s: 'Cu²⁺ + 2e⁻ → Cu. Each Cu²⁺ requires 2 electrons. 1 mole of electrons = 1 Faraday = 96485 C. So 1 mol Cu requires 2 mol e⁻ = 2 Faraday.' },
        { q: 'Conductivity of electrolytic solutions increases with:', o: ['Decrease in temperature', 'Increase in dilution (up to infinite dilution)', 'Addition of non-electrolyte', 'Decrease in ionic strength'], a: 1, s: 'Molar conductivity (Λm) increases with dilution for both strong and weak electrolytes. For strong: slight increase (less interionic attraction). For weak: large increase (more ionization). Both approach Λ°m at infinite dilution.' },
        { q: 'Corrosion of iron (rusting) is an:', o: ['Oxidation process at cathode', 'Electrochemical process where Fe is oxidized at anodic regions', 'Reduction of iron', 'Chemical reaction with nitrogen'], a: 1, s: 'Rusting is electrochemical corrosion. At anodic spots: Fe → Fe²⁺ + 2e⁻ (oxidation). At cathodic spots: O₂ + 2H₂O + 4e⁻ → 4OH⁻ (reduction). Fe²⁺ is further oxidized to Fe₂O₃·xH₂O (rust).' },
      ],
      hard: [
        { q: 'For the cell Zn|Zn²⁺(0.1 M)||Cu²⁺(1 M)|Cu, if E° = 1.10 V, the EMF at 298 K is:', o: ['1.10 V', '1.07 V', '1.13 V', '1.04 V'], a: 2, s: 'Nernst: E = E° − (0.0591/n)log([Zn²⁺]/[Cu²⁺]) = 1.10 − (0.0591/2)log(0.1/1) = 1.10 − (0.02955)(−1) = 1.10 + 0.0296 ≈ 1.13 V.' },
        { q: 'The equivalent conductivity of 0.1 N acetic acid is 5.2 mho·cm²·equiv⁻¹ and at infinite dilution is 390.7. The degree of dissociation is:', o: ['0.013', '0.13', '1.3', '0.0013'], a: 0, s: 'Degree of dissociation α = Λ_c/Λ°_∞ = 5.2/390.7 = 0.0133 ≈ 0.013 (1.3%). This shows acetic acid is a weak electrolyte with very low dissociation at 0.1 N.' },
        { q: 'In the lead storage battery during discharge:', o: ['PbO₂ is formed at both electrodes', 'PbSO₄ is formed at both electrodes', 'Pb is formed at cathode', 'H₂SO₄ concentration increases'], a: 1, s: 'During discharge: Anode: Pb + SO₄²⁻ → PbSO₄ + 2e⁻. Cathode: PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O. PbSO₄ forms at both electrodes. H₂SO₄ is consumed (density decreases).' },
        { q: 'The standard potential of Ag⁺/Ag is +0.80 V and Cu²⁺/Cu is +0.34 V. In a cell of Ag and Cu:', o: ['Cu is cathode, Ag is anode', 'Ag is cathode, Cu is anode', 'Both are cathodes', 'No current flows'], a: 1, s: 'Higher E° is cathode (reduction): Ag⁺/Ag (+0.80 V) is cathode. Lower E° is anode (oxidation): Cu/Cu²⁺ (+0.34 V). E°cell = E°cathode − E°anode = 0.80 − 0.34 = 0.46 V.' },
        { q: 'Cathodic protection of iron involves:', o: ['Coating with gold', 'Connecting to a more active metal like zinc', 'Heating the iron', 'Coating with copper'], a: 1, s: 'Cathodic protection: connecting iron to a more electropositive (active) metal like zinc. Zinc acts as sacrificial anode (corrodes instead of iron). Iron becomes cathode (protected). Used for underground pipelines, ship hulls.' },
      ],
    },
  ],
};

export const neetChemistryChapters: NEETChapterData[] = [
  physicalChem,
  organicChem,
  inorganicChem,
  kineticsElectro,
];
