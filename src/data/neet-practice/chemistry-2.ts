import type { NEETChapterData } from './types';

/* ═══════════════════════════════════════════════════
   NEET CHEMISTRY — Expansion (4 new chapters)
   ═══════════════════════════════════════════════════ */

const electrochemistry: NEETChapterData = {
  name: 'Electrochemistry',
  slug: 'electrochemistry',
  topics: [
    {
      name: 'Electrochemical Cells',
      slug: 'electrochemical-cells',
      easy: [
        { q: 'What is the function of a salt bridge in an electrochemical cell?', o: ['Completes the circuit by allowing ion flow', 'Increases voltage', 'Prevents oxidation', 'Stores charge'], a: 0, s: 'A salt bridge maintains electrical neutrality by allowing ions to flow between half-cells, completing the circuit.' },
        { q: 'In a Daniell cell, which metal acts as the anode?', o: ['Zinc', 'Copper', 'Iron', 'Silver'], a: 0, s: 'Zinc is oxidised at the anode (Zn → Zn²⁺ + 2e⁻) in a Daniell cell.' },
        { q: 'The standard electrode potential of hydrogen electrode is:', o: ['0 V', '1.23 V', '−0.76 V', '0.34 V'], a: 0, s: 'By convention, the Standard Hydrogen Electrode (SHE) is assigned a potential of exactly 0 V.' },
      ],
      medium: [
        { q: 'Calculate EMF of cell: Zn|Zn²⁺(1M)||Cu²⁺(1M)|Cu. E°(Zn²⁺/Zn)=−0.76V, E°(Cu²⁺/Cu)=+0.34V', o: ['1.10 V', '0.42 V', '−1.10 V', '0.76 V'], a: 0, s: 'E°cell = E°cathode − E°anode = 0.34 − (−0.76) = 1.10 V.' },
        { q: 'According to Nernst equation, EMF of a cell depends on:', o: ['Concentration of ions', 'Temperature only', 'Pressure only', 'Volume of solution'], a: 0, s: 'Nernst equation: E = E° − (RT/nF)lnQ shows EMF depends on ion concentrations via Q.' },
        { q: 'Which of the following has the highest reduction potential?', o: ['F₂/F⁻', 'Cl₂/Cl⁻', 'Br₂/Br⁻', 'I₂/I⁻'], a: 0, s: 'Fluorine has the highest reduction potential (+2.87 V) making it the strongest oxidising agent.' },
      ],
      hard: [
        { q: 'The molar conductivity of 0.025 M methanoic acid is 46.1 S cm²/mol. Its degree of dissociation (α) given λ°=404.2 is:', o: ['11.4%', '22.8%', '46.1%', '5.7%'], a: 0, s: 'α = Λm/Λ°m = 46.1/404.2 = 0.114 = 11.4%.' },
        { q: 'For the cell reaction 2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂, if E°cell = 0.236V, the standard Gibbs energy change is:', o: ['−45.55 kJ/mol', '−22.77 kJ/mol', '+45.55 kJ/mol', '−91.1 kJ/mol'], a: 0, s: 'ΔG° = −nFE° = −2 × 96485 × 0.236 = −45,556 J ≈ −45.55 kJ/mol.' },
        { q: 'In the electrolysis of aqueous NaCl, the product at the cathode is:', o: ['H₂ gas', 'Na metal', 'Cl₂ gas', 'NaOH'], a: 0, s: 'At cathode, water is reduced preferentially: 2H₂O + 2e⁻ → H₂ + 2OH⁻ because Na has very negative reduction potential.' },
      ],
    },
    {
      name: 'Batteries & Corrosion',
      slug: 'batteries-corrosion',
      easy: [
        { q: 'Lead storage battery is an example of:', o: ['Secondary cell', 'Primary cell', 'Fuel cell', 'Concentration cell'], a: 0, s: 'Lead storage battery is rechargeable (secondary cell) — the reaction can be reversed by passing current.' },
        { q: 'Rusting of iron requires:', o: ['Both oxygen and moisture', 'Only oxygen', 'Only moisture', 'Neither oxygen nor moisture'], a: 0, s: 'Rusting is an electrochemical process requiring both O₂ and H₂O.' },
        { q: 'In a dry cell, the anode is made of:', o: ['Zinc', 'Carbon', 'Manganese', 'Lead'], a: 0, s: 'The zinc casing acts as the anode and gets oxidised during discharge.' },
      ],
      medium: [
        { q: 'In a hydrogen-oxygen fuel cell, the reaction at the cathode is:', o: ['O₂ + 2H₂O + 4e⁻ → 4OH⁻', 'H₂ → 2H⁺ + 2e⁻', 'O₂ → 2O²⁻', 'H₂O → H₂ + ½O₂'], a: 0, s: 'At cathode in alkaline medium: O₂ + 2H₂O + 4e⁻ → 4OH⁻ (reduction of oxygen).' },
        { q: 'Galvanisation is coating iron with:', o: ['Zinc', 'Tin', 'Copper', 'Chromium'], a: 0, s: 'Zinc coating protects iron via cathodic protection — Zn is more reactive and corrodes preferentially.' },
        { q: 'The efficiency of a fuel cell is typically:', o: ['70-80%', '25-30%', '40-50%', '95-100%'], a: 0, s: 'Fuel cells convert chemical energy directly to electrical energy with ~70-80% efficiency, much higher than heat engines.' },
      ],
      hard: [
        { q: 'During charging of a lead storage battery, PbSO₄ on the positive plate is converted to:', o: ['PbO₂', 'Pb', 'PbO', 'Pb₃O₄'], a: 0, s: 'During charging: PbSO₄ + 2H₂O → PbO₂ + SO₄²⁻ + 4H⁺ + 2e⁻ at the positive plate.' },
        { q: 'Which type of corrosion occurs when two dissimilar metals are in contact?', o: ['Galvanic corrosion', 'Pitting corrosion', 'Stress corrosion', 'Uniform corrosion'], a: 0, s: 'Galvanic corrosion occurs when two metals with different electrode potentials form a galvanic couple — the more active metal corrodes.' },
        { q: 'In nickel-cadmium cell, the overall cell reaction involves:', o: ['Cd + 2NiO(OH) + 2H₂O → Cd(OH)₂ + 2Ni(OH)₂', 'Cd → Cd²⁺ + 2e⁻ only', 'NiO₂ → Ni²⁺ + O₂', 'CdO + NiO → CdNiO₂'], a: 0, s: 'Ni-Cd battery: Cd is oxidised and NiO(OH) is reduced. Both products are insoluble hydroxides, making it rechargeable.' },
      ],
    },
  ],
};

const solidState: NEETChapterData = {
  name: 'The Solid State',
  slug: 'solid-state',
  topics: [
    {
      name: 'Crystal Structures',
      slug: 'crystal-structures',
      easy: [
        { q: 'The number of atoms per unit cell in BCC structure is:', o: ['2', '1', '4', '6'], a: 0, s: 'BCC: 8 corners × 1/8 + 1 body centre = 1 + 1 = 2 atoms per unit cell.' },
        { q: 'Which of the following is an amorphous solid?', o: ['Glass', 'NaCl', 'Diamond', 'Quartz'], a: 0, s: 'Glass lacks long-range order and is an amorphous solid, unlike crystalline NaCl or diamond.' },
        { q: 'The coordination number of atoms in FCC is:', o: ['12', '8', '6', '4'], a: 0, s: 'In FCC, each atom touches 12 nearest neighbours — 4 in same layer, 4 above, 4 below.' },
      ],
      medium: [
        { q: 'The packing efficiency of FCC structure is:', o: ['74%', '68%', '52.4%', '90%'], a: 0, s: 'FCC packing efficiency = (4 × 4/3 πr³)/(16√2 r³) × 100 = 74%.' },
        { q: 'In NaCl crystal structure, the coordination number of Na⁺ is:', o: ['6', '4', '8', '12'], a: 0, s: 'Each Na⁺ is surrounded by 6 Cl⁻ ions in an octahedral arrangement.' },
        { q: 'Schottky defect decreases the density because:', o: ['Equal number of cations and anions are missing', 'Only cations are missing', 'Only anions are missing', 'Extra atoms occupy interstitial sites'], a: 0, s: 'Schottky defect = paired vacancy of cation + anion → fewer atoms in same volume → lower density.' },
      ],
      hard: [
        { q: 'If the edge length of NaCl unit cell is 564 pm, the nearest Na⁺–Cl⁻ distance is:', o: ['282 pm', '564 pm', '399 pm', '141 pm'], a: 0, s: 'In NaCl (rock salt), nearest distance = a/2 = 564/2 = 282 pm.' },
        { q: 'A metallic crystal has a density of 2.7 g/cm³, atomic mass 27 g/mol, and edge length 405 pm. The structure is:', o: ['FCC', 'BCC', 'Simple cubic', 'HCP'], a: 0, s: 'n = ρ × a³ × Nₐ / M = 2.7 × (4.05×10⁻⁸)³ × 6.022×10²³ / 27 ≈ 4. FCC has 4 atoms per unit cell.' },
        { q: 'F-centres in alkali halide crystals are:', o: ['Electrons trapped in anion vacancies', 'Cation vacancies', 'Interstitial atoms', 'Dislocations'], a: 0, s: 'F-centres (Farbenzentren) are anion vacancies occupied by electrons, giving colour to the crystal.' },
      ],
    },
    {
      name: 'Defects & Properties',
      slug: 'defects-properties',
      easy: [
        { q: 'Frenkel defect is common in:', o: ['AgBr', 'NaCl', 'KCl', 'CsCl'], a: 0, s: 'AgBr shows Frenkel defect because Ag⁺ is small enough to fit into interstitial sites.' },
        { q: 'Ferromagnetic substances become paramagnetic above:', o: ['Curie temperature', 'Néel temperature', 'Boiling point', 'Debye temperature'], a: 0, s: 'Above Curie temperature, thermal energy overcomes the alignment of magnetic domains.' },
        { q: 'Piezoelectric crystals lack:', o: ['Centre of symmetry', 'Planes of symmetry', 'Axes of symmetry', 'Unit cells'], a: 0, s: 'Piezoelectricity requires absence of a centre of symmetry so mechanical stress creates charge separation.' },
      ],
      medium: [
        { q: 'n-type semiconductors are formed by doping Si with:', o: ['Phosphorus', 'Boron', 'Aluminium', 'Gallium'], a: 0, s: 'P (group 15) has 5 valence electrons — 4 bond with Si, 1 is free → n-type (negative charge carriers).' },
        { q: 'In stoichiometric defects, the electrical neutrality is:', o: ['Maintained', 'Destroyed', 'Doubled', 'Halved'], a: 0, s: 'Stoichiometric defects (Schottky, Frenkel) maintain electrical neutrality — equal positive and negative charge is removed/displaced.' },
        { q: 'Which of the following shows both Schottky and Frenkel defects?', o: ['AgBr', 'NaCl', 'ZnS', 'CsCl'], a: 0, s: 'AgBr is unique in showing both defects due to intermediate size of Ag⁺ ion.' },
      ],
      hard: [
        { q: 'The number of tetrahedral voids per atom in CCP arrangement is:', o: ['2', '1', '4', '8'], a: 0, s: 'In CCP, tetrahedral voids = 2n where n is number of atoms. So per atom = 2.' },
        { q: 'If a compound has a ZnS type structure with S²⁻ at FCC positions, what fraction of tetrahedral voids are occupied by Zn²⁺?', o: ['50%', '25%', '100%', '12.5%'], a: 0, s: 'FCC has 4 S²⁻, so 8 tetrahedral voids. ZnS has 4 Zn²⁺, so 4/8 = 50% occupied.' },
        { q: 'Non-stoichiometric cuprous oxide (Cu₂O) conducts because:', o: ['Some Cu⁺ is oxidised to Cu²⁺ creating holes', 'Extra electrons are present', 'Cu atoms are in interstitial sites', 'O²⁻ ions are mobile'], a: 0, s: 'Metal deficiency creates Cu²⁺ ions; the electron hole on Cu²⁺ allows p-type conductivity.' },
      ],
    },
  ],
};

const surfaceChemistry: NEETChapterData = {
  name: 'Surface Chemistry',
  slug: 'surface-chemistry',
  topics: [
    {
      name: 'Adsorption',
      slug: 'adsorption',
      easy: [
        { q: 'Physical adsorption is also called:', o: ['Physisorption', 'Chemisorption', 'Absorption', 'Desorption'], a: 0, s: 'Physical adsorption involves weak van der Waals forces and is called physisorption.' },
        { q: 'Adsorption is generally:', o: ['Exothermic', 'Endothermic', 'Neither', 'Isothermal'], a: 0, s: 'Adsorption decreases surface energy and entropy → ΔG must be negative → since ΔS is negative, ΔH must be negative (exothermic).' },
        { q: 'Freundlich adsorption isotherm relates:', o: ['Amount adsorbed to pressure at constant T', 'Temperature to pressure', 'Volume to temperature', 'Concentration to temperature'], a: 0, s: 'Freundlich isotherm: x/m = kP^(1/n), relating mass of adsorbate per unit adsorbent to pressure at constant temperature.' },
      ],
      medium: [
        { q: 'Chemisorption has high enthalpy because it involves:', o: ['Chemical bond formation', 'Van der Waals forces', 'Hydrogen bonding', 'Capillary action'], a: 0, s: 'Chemisorption involves formation of chemical bonds between adsorbate and surface → enthalpy of adsorption is 80-240 kJ/mol.' },
        { q: 'According to Langmuir isotherm, at very high pressure:', o: ['Surface is fully covered (monolayer)', 'Adsorption increases indefinitely', 'Desorption dominates', 'Multilayer forms'], a: 0, s: 'Langmuir assumed monolayer coverage — at high P, all sites are occupied and adsorption plateaus.' },
        { q: 'Which of the following increases physisorption?', o: ['Decrease in temperature', 'Increase in temperature', 'Decrease in surface area', 'Decrease in pressure'], a: 0, s: 'Physisorption is exothermic, so by Le Chatelier\'s principle, lowering temperature favours adsorption.' },
      ],
      hard: [
        { q: 'In BET theory of adsorption, the assumption different from Langmuir is:', o: ['Multilayer adsorption can occur', 'Only monolayer forms', 'Adsorption is endothermic', 'All sites are equivalent'], a: 0, s: 'BET (Brunauer–Emmett–Teller) theory extends Langmuir by allowing multilayer adsorption on the surface.' },
        { q: 'The Freundlich exponent 1/n typically has values:', o: ['Between 0 and 1', 'Greater than 1', 'Exactly 1', 'Negative'], a: 0, s: '1/n between 0 and 1 indicates favorable adsorption. At 1/n = 1, adsorption is linear (Henry\'s law).' },
        { q: 'Activated charcoal adsorbs acetic acid from solution. This is an example of:', o: ['Adsorption from solution', 'Chemisorption', 'Negative adsorption', 'Absorption'], a: 0, s: 'Charcoal adsorbs organic molecules like acetic acid from solution via physisorption — used in water purification.' },
      ],
    },
    {
      name: 'Colloids & Emulsions',
      slug: 'colloids-emulsions',
      easy: [
        { q: 'The size range of colloidal particles is:', o: ['1 nm to 1000 nm', 'Less than 1 nm', 'Greater than 1000 nm', '1 cm to 10 cm'], a: 0, s: 'Colloidal particles range from 1 nm (10⁻⁹ m) to 1000 nm (10⁻⁶ m = 1 μm).' },
        { q: 'Tyndall effect is shown by:', o: ['Colloidal solutions', 'True solutions', 'Pure solvents', 'Suspensions only'], a: 0, s: 'Tyndall effect (scattering of light) is characteristic of colloids due to particle size comparable to light wavelength.' },
        { q: 'Milk is an example of:', o: ['Emulsion', 'Sol', 'Gel', 'Aerosol'], a: 0, s: 'Milk is an oil-in-water emulsion where fat droplets are dispersed in aqueous medium.' },
      ],
      medium: [
        { q: 'Hardy-Schulze rule states that coagulating power of an ion depends on:', o: ['Valency of the ion', 'Size of the ion', 'Mass of the ion', 'Colour of the ion'], a: 0, s: 'Greater the valency of the flocculating ion, greater its coagulating power. Al³⁺ > Ba²⁺ > Na⁺.' },
        { q: 'Peptization is the process of:', o: ['Converting precipitate to colloidal sol', 'Coagulation of colloid', 'Filtering a colloid', 'Crystallising from solution'], a: 0, s: 'Peptization converts a fresh precipitate into a colloidal sol by adding an electrolyte (peptizing agent).' },
        { q: 'Which of the following is a lyophilic colloid?', o: ['Starch solution', 'Gold sol', 'Fe(OH)₃ sol', 'As₂S₃ sol'], a: 0, s: 'Starch is lyophilic (solvent-loving) — it forms stable colloids readily and reversibly.' },
      ],
      hard: [
        { q: 'Electrophoresis demonstrates that colloidal particles carry:', o: ['Electric charge', 'Magnetic moment', 'Zero charge', 'Nuclear spin'], a: 0, s: 'In electrophoresis, charged colloidal particles migrate towards oppositely charged electrode, proving they carry electric charge.' },
        { q: 'The Helmholtz double layer in colloids consists of:', o: ['Fixed layer and diffuse layer of ions', 'Two layers of colloidal particles', 'Solvent and solute layers', 'Two immiscible liquids'], a: 0, s: 'Helmholtz double layer: fixed ionic layer (Stern layer) on particle surface + diffuse layer of counter-ions in solution.' },
        { q: 'Delta (Δ) formation in river deltas is due to:', o: ['Coagulation of colloidal clay by sea water electrolytes', 'Filtration', 'Evaporation', 'Sedimentation by gravity alone'], a: 0, s: 'River water carries colloidal clay; sea water electrolytes (NaCl, MgCl₂) cause coagulation → deposition at river mouth.' },
      ],
    },
  ],
};

const coordination: NEETChapterData = {
  name: 'Coordination Compounds',
  slug: 'coordination-compounds',
  topics: [
    {
      name: 'Nomenclature & Isomerism',
      slug: 'nomenclature-isomerism',
      easy: [
        { q: 'The IUPAC name of [Co(NH₃)₆]Cl₃ is:', o: ['Hexaamminecobalt(III) chloride', 'Cobalt hexaammine chloride', 'Trichlorohexaamminecobalt', 'Hexaamminecobalt chloride'], a: 0, s: 'IUPAC: ligands (alphabetical) + metal + oxidation state in Roman numerals + anion.' },
        { q: 'The coordination number of Pt in [PtCl₆]²⁻ is:', o: ['6', '4', '2', '8'], a: 0, s: 'Six Cl⁻ ligands are directly bonded to Pt, so coordination number = 6.' },
        { q: 'Which type of isomerism is shown by [Co(NH₃)₅Br]SO₄ and [Co(NH₃)₅SO₄]Br?', o: ['Ionisation isomerism', 'Linkage isomerism', 'Geometric isomerism', 'Optical isomerism'], a: 0, s: 'These compounds differ in which ion is inside the coordination sphere vs. counter ion — ionisation isomerism.' },
      ],
      medium: [
        { q: 'Linkage isomerism is possible when the ligand is:', o: ['Ambidentate', 'Bidentate', 'Monodentate only', 'Polydentate'], a: 0, s: 'Ambidentate ligands (like NO₂⁻/ONO⁻, SCN⁻/NCS⁻) can coordinate through different atoms → linkage isomerism.' },
        { q: 'The geometry of [Ni(CN)₄]²⁻ is:', o: ['Square planar', 'Tetrahedral', 'Octahedral', 'Linear'], a: 0, s: 'CN⁻ is a strong field ligand causing pairing → dsp² hybridisation → square planar geometry.' },
        { q: 'EDTA is a ______ ligand:', o: ['Hexadentate', 'Bidentate', 'Monodentate', 'Tridentate'], a: 0, s: 'EDTA coordinates through 2 N atoms and 4 O atoms = 6 donor atoms → hexadentate.' },
      ],
      hard: [
        { q: 'The number of geometric isomers of [Co(NH₃)₃Cl₃] is:', o: ['2 (fac and mer)', '3', '4', '1'], a: 0, s: 'MA₃B₃ octahedral complex has 2 geometric isomers: facial (fac) where three identical ligands occupy one triangular face, and meridional (mer).' },
        { q: 'Which complex would show optical isomerism?', o: ['[Co(en)₃]³⁺', '[Co(NH₃)₆]³⁺', '[PtCl₄]²⁻', '[Ni(CO)₄]'], a: 0, s: '[Co(en)₃]³⁺ has D₃ symmetry with no plane of symmetry → exists as non-superimposable mirror images (Δ and Λ).' },
        { q: 'Crystal Field Stabilisation Energy (CFSE) for d⁶ in strong octahedral field is:', o: ['−24Dq + 2P', '−4Dq', '−12Dq', '−24Dq'], a: 0, s: 'd⁶ strong field: t₂g⁶ eg⁰ → CFSE = 6(−4Dq) + 0(6Dq) = −24Dq, plus 2 pairing energies (2P) for forced pairing.' },
      ],
    },
    {
      name: 'Bonding & Applications',
      slug: 'bonding-applications',
      easy: [
        { q: 'In Crystal Field Theory, d-orbitals split into:', o: ['t₂g and eg sets', 'sp and pd sets', 's and p orbitals', 'σ and π bonds'], a: 0, s: 'In octahedral field, five d-orbitals split into lower t₂g (dxy, dyz, dxz) and higher eg (dx²−y², dz²).' },
        { q: 'Haemoglobin contains which metal ion?', o: ['Fe²⁺', 'Cu²⁺', 'Zn²⁺', 'Co²⁺'], a: 0, s: 'Haemoglobin has Fe²⁺ in a porphyrin ring (heme group) that binds O₂ for transport.' },
        { q: 'Chelate complexes are generally more stable because of:', o: ['Chelate effect (entropy)', 'Smaller size', 'Lower charge', 'Weak bonding'], a: 0, s: 'Chelate effect: polydentate ligands release more monodentate ligands → entropy increase → greater stability.' },
      ],
      medium: [
        { q: 'Spectrochemical series arranges ligands in order of:', o: ['Increasing crystal field splitting', 'Decreasing atomic number', 'Increasing size', 'Decreasing electronegativity'], a: 0, s: 'Spectrochemical series: I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < NO₂⁻ < CN⁻ < CO.' },
        { q: 'Cisplatin [PtCl₂(NH₃)₂] is used as:', o: ['Anti-cancer drug', 'Antibiotic', 'Painkiller', 'Anaesthetic'], a: 0, s: 'cis-[PtCl₂(NH₃)₂] (cisplatin) cross-links DNA strands, preventing replication — used in cancer chemotherapy.' },
        { q: 'For d⁴ high spin octahedral complex, the number of unpaired electrons is:', o: ['4', '2', '0', '3'], a: 0, s: 'd⁴ high spin (weak field): t₂g³ eg¹ → all 4 electrons unpaired (Hund\'s rule).' },
      ],
      hard: [
        { q: 'The magnetic moment of [CoF₆]³⁻ is 4.89 BM. The number of unpaired electrons is:', o: ['4', '3', '5', '2'], a: 0, s: 'μ = √(n(n+2)) BM. For n=4: √(4×6) = √24 = 4.89 BM. Co³⁺ is d⁶; F⁻ is weak field → t₂g⁴ eg² → 4 unpaired.' },
        { q: 'In [Fe(CN)₆]⁴⁻, iron has oxidation state +2 and is:', o: ['Diamagnetic (0 unpaired)', 'Paramagnetic (2 unpaired)', 'Paramagnetic (4 unpaired)', 'Ferromagnetic'], a: 0, s: 'Fe²⁺ is d⁶. CN⁻ is strong field → all 6 electrons pair in t₂g⁶ eg⁰ → diamagnetic.' },
        { q: 'The stability constant of [Cu(NH₃)₄]²⁺ is 10¹². This means:', o: ['The complex is highly stable', 'The complex readily dissociates', 'NH₃ is a weak ligand', 'Cu²⁺ prefers water'], a: 0, s: 'High stability constant (Kf = 10¹²) means equilibrium strongly favours complex formation → very stable.' },
      ],
    },
  ],
};

export const neetChemistryExpansionChapters: NEETChapterData[] = [
  electrochemistry,
  solidState,
  surfaceChemistry,
  coordination,
];
