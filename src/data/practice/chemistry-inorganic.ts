import type { ChapterData } from './types';

/* ─── Periodic Table & Chemical Bonding ─── */
const periodicBonding: ChapterData = {
  name: 'Periodic Table & Chemical Bonding',
  slug: 'periodic-table-bonding',
  topics: [
    {
      name: 'Periodic Properties',
      slug: 'periodic-properties',
      easy: [
        { q: 'Ionization energy generally ___ across a period (left to right):', o: ['Increases', 'Decreases', 'Remains constant', 'First increases then decreases'], a: 0, s: 'Across a period: nuclear charge ↑, size ↓ → harder to remove electron → IE increases.' },
        { q: 'Atomic radius generally ___ down a group:', o: ['Increases', 'Decreases', 'Remains constant', 'Fluctuates'], a: 0, s: 'Down a group: new shells added → size increases despite increasing nuclear charge.' },
        { q: 'Electronegativity is highest for:', o: ['Fluorine', 'Oxygen', 'Chlorine', 'Nitrogen'], a: 0, s: 'F is most electronegative element (Pauling scale: 4.0).' },
        { q: 'Noble gases have:', o: ['Completely filled valence shell', 'One empty orbital', 'Unpaired electrons', 'Low ionization energy'], a: 0, s: 'ns²np⁶ (except He: 1s²) → stable, full outer shell → very high IE, inert.' },
        { q: 'Electron affinity is most negative (most energy released) for:', o: ['Halogens (especially Cl)', 'Noble gases', 'Alkali metals', 'Alkaline earth metals'], a: 0, s: 'Cl has highest EA (not F, because F is very small → electron repulsion). Cl: -349 kJ/mol.' },
      ],
      medium: [
        { q: 'The correct order of ionic radii is:', o: ['O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺', 'Al³⁺ > Mg²⁺ > Na⁺ > F⁻ > O²⁻', 'All equal', 'Na⁺ > Mg²⁺ > Al³⁺ > F⁻ > O²⁻'], a: 0, s: 'Isoelectronic (all 10 e⁻): more protons → smaller. Z: 8,9,11,12,13 → O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺.' },
        { q: 'Diagonal relationship exists between:', o: ['Li-Mg, Be-Al, B-Si', 'Li-Na, Be-Mg', 'B-C, N-O', 'Na-K, Mg-Ca'], a: 0, s: 'Diagonal pairs have similar charge/radius ratios → similar properties. Li~Mg, Be~Al, B~Si.' },
        { q: 'Electron affinity of nitrogen is almost zero because:', o: ['Half-filled 2p³ configuration is very stable', 'N is too small', 'N has high IE', 'N is a metal'], a: 0, s: 'N: 2p³ (half-filled) → extra stability. Adding electron destabilizes → very low/positive EA.' },
        { q: 'The element with highest electronegativity in Period 3 is:', o: ['Chlorine', 'Sodium', 'Aluminium', 'Si'], a: 0, s: 'Across Period 3: Na → Cl, EN increases. Cl is most electronegative (excluding noble gas Ar).' },
        { q: 'Lanthanide contraction causes:', o: ['Post-lanthanide elements (Hf, Ta...) to be similar in size to their 4d counterparts', 'Expansion of atoms', 'Increase in size', 'Decrease in nuclear charge'], a: 0, s: '4f electrons are poor shielders → effective nuclear charge increases → Hf ≈ Zr in radius.' },
      ],
      hard: [
        { q: 'The second ionization energy of Na is very high because:', o: ['Removing electron from noble gas core (Ne configuration)', 'Na is large', 'Na is metallic', 'Na has low electronegativity'], a: 0, s: 'Na⁺ has Ne-like configuration (2,8). Removing a 2p electron from a noble gas core requires huge energy.' },
        { q: 'Which has larger radius: Fe²⁺ or Fe³⁺?', o: ['Fe²⁺ (more electrons, less effective nuclear charge per electron)', 'Fe³⁺', 'Both equal', 'Cannot compare'], a: 0, s: 'Fe²⁺ (24e⁻) > Fe³⁺ (23e⁻). Fewer electrons with same nuclear charge → smaller radius for Fe³⁺.' },
        { q: 'Anomalous behaviour of first member of each group is due to:', o: ['Small size, high EN, no d-orbitals', 'Large size', 'Metallic character', 'Low IE'], a: 0, s: 'First member: small size, high charge density, no d-orbitals available for bonding → unique chemistry.' },
        { q: 'The correct order of acidic strength of oxides is:', o: ['Cl₂O₇ > SO₃ > P₂O₅ > Al₂O₃ > MgO > Na₂O', 'Na₂O > MgO > Al₂O₃', 'All equal', 'MgO > SO₃ > Na₂O'], a: 0, s: 'Non-metal oxides are acidic, metal oxides are basic. Acidity increases right across period.' },
        { q: 'Electron gain enthalpy of Cl is more negative than F because:', o: ['F is very small; added electron faces repulsion in compact 2p shell', 'Cl is smaller than F', 'F has more shells', 'Cl is more electronegative'], a: 0, s: 'F: 2p⁵ is compact → electron-electron repulsion → lower EA than Cl (3p⁵, more space).' },
      ],
    },
    {
      name: 'Chemical Bonding & Molecular Structure',
      slug: 'chemical-bonding',
      easy: [
        { q: 'An ionic bond is formed between:', o: ['A metal and a non-metal (large EN difference)', 'Two non-metals', 'Two metals', 'Two noble gases'], a: 0, s: 'Ionic bond: electron transfer from metal to non-metal. Large electronegativity difference (>1.7 typically).' },
        { q: 'The shape of CH₄ according to VSEPR is:', o: ['Tetrahedral', 'Linear', 'Trigonal planar', 'Square planar'], a: 0, s: 'CH₄: 4 bond pairs, 0 lone pairs → tetrahedral geometry (109.5°).' },
        { q: 'sp³ hybridisation gives ___ geometry:', o: ['Tetrahedral', 'Linear', 'Trigonal planar', 'Octahedral'], a: 0, s: 'sp³: 4 equivalent orbitals at 109.5° → tetrahedral.' },
        { q: 'The bond order of N₂ is:', o: ['3 (triple bond)', '2', '1', '4'], a: 0, s: 'N₂: N≡N, bond order = ½(bonding - antibonding) = ½(10-4) = 3.' },
        { q: 'A coordinate (dative) bond involves:', o: ['Both electrons donated by one atom', 'One electron from each', 'No electrons shared', 'Electron transfer'], a: 0, s: 'Coordinate bond: one atom (donor) provides both shared electrons to the acceptor.' },
      ],
      medium: [
        { q: 'The shape of NH₃ is:', o: ['Trigonal pyramidal (due to 1 lone pair)', 'Tetrahedral', 'Trigonal planar', 'Linear'], a: 0, s: 'NH₃: 3 bond pairs + 1 lone pair on N. Electron geometry tetrahedral, molecular shape = trigonal pyramidal (107°).' },
        { q: 'Bond angle decreases in the order:', o: ['CH₄ > NH₃ > H₂O', 'H₂O > NH₃ > CH₄', 'NH₃ > CH₄ > H₂O', 'All same'], a: 0, s: 'CH₄ (109.5°) > NH₃ (107°) > H₂O (104.5°). More lone pairs → more compression.' },
        { q: 'SF₆ has ___ hybridisation and ___ shape:', o: ['sp³d², Octahedral', 'sp³, Tetrahedral', 'sp³d, Trigonal bipyramidal', 'sp², Planar'], a: 0, s: 'SF₆: 6 bond pairs → sp³d² hybridisation → octahedral geometry.' },
        { q: 'Hydrogen bonding is strongest in:', o: ['HF (most electronegative atom)', 'HCl', 'HBr', 'HI'], a: 0, s: 'H-bonding strength ∝ electronegativity. F > O > N. HF has strongest H-bonds among hydrogen halides.' },
        { q: 'The bond order of O₂ is:', o: ['2', '1', '3', '1.5'], a: 0, s: 'O₂: BO = ½(10-6) = 2. It is a double bond with 2 unpaired electrons (paramagnetic).' },
      ],
      hard: [
        { q: 'XeF₄ has ___ shape:', o: ['Square planar', 'Tetrahedral', 'See-saw', 'Octahedral'], a: 0, s: 'XeF₄: 4 bond pairs + 2 lone pairs. sp³d² hybridisation. Lone pairs axial → square planar.' },
        { q: 'The hybridisation of central atom in ClF₃ is:', o: ['sp³d (T-shaped)', 'sp³', 'sp²', 'sp³d²'], a: 0, s: 'ClF₃: 3 bond pairs + 2 lone pairs = 5 electron domains → sp³d → T-shaped (lone pairs equatorial).' },
        { q: 'According to MOT, O₂ is paramagnetic because:', o: ['It has 2 unpaired electrons in π* antibonding orbitals', 'It has no electrons', 'All electrons are paired', 'It has ionic bonds'], a: 0, s: 'O₂ MO config: (σ2s)²(σ*2s)²(σ2p)²(π2p)⁴(π*2p)². Two unpaired e⁻ in π*.' },
        { q: 'Fajan\'s rules predict that covalent character increases when:', o: ['Cation is small and highly charged, anion is large', 'Cation is large', 'Anion is small', 'Both ions are large'], a: 0, s: 'Small, highly charged cation polarizes large anion → distorts electron cloud → more covalent character.' },
        { q: 'The bond order of NO is:', o: ['2.5', '3', '2', '1.5'], a: 0, s: 'NO: 11 valence electrons. BO = ½(8-3) = 2.5. One unpaired electron → paramagnetic.' },
      ],
    },
  ],
};

/* ─── s-Block Elements ─── */
const sBlock: ChapterData = {
  name: 's-Block Elements',
  slug: 's-block-elements',
  topics: [
    {
      name: 'Alkali & Alkaline Earth Metals',
      slug: 'alkali-alkaline-earth',
      easy: [
        { q: 'Which alkali metal is stored in kerosene oil?', o: ['Sodium', 'Lithium (stored in paraffin oil)', 'Potassium', 'Both Na and K'], a: 3, s: 'Both Na and K are reactive metals stored under kerosene/paraffin oil to prevent reaction with air/moisture.' },
        { q: 'Down the alkali metal group, reactivity with water:', o: ['Increases', 'Decreases', 'Remains same', 'First increases then decreases'], a: 0, s: 'Down group 1: IE decreases → easier to lose electron → more reactive with water.' },
        { q: 'The flame colour of sodium is:', o: ['Yellow', 'Crimson red', 'Violet', 'Green'], a: 0, s: 'Na gives golden yellow flame. Li=crimson red, K=violet, Ca=brick red, Ba=apple green.' },
        { q: 'Plaster of Paris is:', o: ['CaSO₄·½H₂O', 'CaSO₄·2H₂O', 'CaCO₃', 'Ca(OH)₂'], a: 0, s: 'Plaster of Paris: calcium sulphate hemihydrate. Sets hard by absorbing water → gypsum.' },
        { q: 'Washing soda is:', o: ['Na₂CO₃·10H₂O', 'NaHCO₃', 'NaOH', 'NaCl'], a: 0, s: 'Washing soda = sodium carbonate decahydrate. Baking soda = NaHCO₃.' },
      ],
      medium: [
        { q: 'Lithium is anomalous in its group due to:', o: ['Small size and high charge density (diagonal with Mg)', 'Large size', 'Low IE', 'Metallic character'], a: 0, s: 'Li is small → high polarizing power → more covalent character. Forms Li₂O (not peroxide). Similar to Mg.' },
        { q: 'Na₂O₂ reacts with water to give:', o: ['NaOH + H₂O₂', 'NaOH only', 'Na₂O + H₂', 'Na + O₂'], a: 0, s: 'Na₂O₂ + 2H₂O → 2NaOH + H₂O₂. Peroxide gives hydrogen peroxide.' },
        { q: 'Dead-burnt plaster is:', o: ['Anhydrous CaSO₄ (heated above 400°C, does not set)', 'CaSO₄·½H₂O', 'CaSO₄·2H₂O', 'CaCO₃'], a: 0, s: 'Overheating gypsum → anhydrous CaSO₄ (dead-burnt). Loses ability to set with water.' },
        { q: 'KO₂ (potassium superoxide) is used in space because:', o: ['It absorbs CO₂ and releases O₂', 'It is a fuel', 'It acts as coolant', 'It absorbs heat'], a: 0, s: '4KO₂ + 2CO₂ → 2K₂CO₃ + 3O₂. Removes CO₂ and generates O₂ simultaneously.' },
        { q: 'BeSO₄ is soluble in water unlike BaSO₄ because:', o: ['Small Be²⁺ has high hydration energy exceeding lattice energy', 'Ba²⁺ is small', 'BeSO₄ has low lattice energy', 'BaSO₄ has high hydration energy'], a: 0, s: 'Solubility ∝ hydration energy/lattice energy. Small Be²⁺ → very high hydration energy → soluble. Large Ba²⁺ → low hydration energy → insoluble BaSO₄.' },
      ],
      hard: [
        { q: 'The thermal stability of carbonates of alkaline earth metals increases as:', o: ['Be < Mg < Ca < Sr < Ba', 'Ba < Sr < Ca < Mg < Be', 'All equal', 'Random'], a: 0, s: 'Larger cation → less polarizing → less distortion of CO₃²⁻ → harder to decompose → more stable.' },
        { q: 'Solvay process is used to manufacture:', o: ['Na₂CO₃ (sodium carbonate)', 'NaOH', 'NaCl', 'NaHCO₃ only'], a: 0, s: 'Solvay process: NaCl + NH₃ + CO₂ + H₂O → NaHCO₃ → heat → Na₂CO₃ + CO₂ + H₂O.' },
        { q: 'Cement contains mainly:', o: ['CaO·SiO₂, CaO·Al₂O₃, CaSO₄·2H₂O', 'Only CaCO₃', 'Only MgO', 'NaCl'], a: 0, s: 'Portland cement: mixture of calcium silicates and aluminates. Setting involves hydration reactions.' },
        { q: 'Which is correct about CaCO₃ → CaO + CO₂?', o: ['Decomposition requires ~840°C; endothermic', 'Exothermic at all temperatures', 'Occurs at room temperature', 'CaCO₃ is not decomposable'], a: 0, s: 'Thermal decomposition of limestone requires high temperature. Industrially done in lime kiln (~900°C).' },
        { q: 'Beryllium chloride has a polymeric structure in solid state because:', o: ['Be is electron-deficient, forms bridged Cl bonds', 'Be is large', 'Cl is small', 'Ionic bonding only'], a: 0, s: 'BeCl₂: Be has only 4 electrons → electron-deficient → forms Cl-bridged polymeric chain. sp³ Be in solid.' },
      ],
    },
  ],
};

/* ─── p-Block Elements ─── */
const pBlock: ChapterData = {
  name: 'p-Block Elements',
  slug: 'p-block-elements',
  topics: [
    {
      name: 'Group 13-18 Elements',
      slug: 'group-13-18',
      easy: [
        { q: 'The most abundant element in Earth\'s crust is:', o: ['Oxygen', 'Silicon', 'Aluminium', 'Iron'], a: 0, s: 'O (46%) > Si (28%) > Al (8%) in Earth\'s crust by mass.' },
        { q: 'Allotropes of carbon include:', o: ['Diamond, graphite, fullerene', 'Diamond only', 'Graphite only', 'Carbon monoxide'], a: 0, s: 'Carbon allotropes: diamond (sp³), graphite (sp²), fullerene, graphene, nanotubes.' },
        { q: 'Nitrogen is relatively inert due to:', o: ['Strong N≡N triple bond (945 kJ/mol)', 'Large size', 'Low electronegativity', 'No valence electrons'], a: 0, s: 'N₂ has very strong triple bond → high bond energy → difficult to break → inert at normal conditions.' },
        { q: 'The most electronegative element is:', o: ['Fluorine', 'Chlorine', 'Oxygen', 'Nitrogen'], a: 0, s: 'F (Pauling EN = 4.0) is the most electronegative element in the periodic table.' },
        { q: 'Ozone (O₃) is an allotrope of:', o: ['Oxygen', 'Nitrogen', 'Carbon', 'Hydrogen'], a: 0, s: 'Ozone: triatomic allotrope of oxygen. O₃ absorbs UV radiation in the stratosphere.' },
      ],
      medium: [
        { q: 'Boron does not form B³⁺ ion because:', o: ['Very high total ionization energy (sum of IE₁+IE₂+IE₃)', 'B is too large', 'B is a metal', 'B has d-orbitals'], a: 0, s: 'B: small size, high total IE to remove 3 electrons. Forms covalent compounds instead.' },
        { q: 'Why does PCl₅ exist but NCl₅ does not?', o: ['P has vacant 3d orbitals for expansion of octet; N does not', 'N is too electronegative', 'Cl is too small', 'N has d-orbitals'], a: 0, s: 'N: no d-orbitals, max covalency = 4. P: has 3d orbitals → can expand octet → PCl₅ exists.' },
        { q: 'Interhalogen compounds are formed because:', o: ['Different halogens can combine due to similar electronegativities', 'Halogens are metals', 'Noble gases are involved', 'Only identical halogens react'], a: 0, s: 'XX\' possible due to similar (but not equal) EN. XY, XY₃, XY₅, XY₇ types exist. Larger atom is central.' },
        { q: 'H₂SO₄ is a strong diprotic acid. It dissociates as:', o: ['H₂SO₄ → H⁺ + HSO₄⁻ (complete), HSO₄⁻ → H⁺ + SO₄²⁻ (partial)', 'Both steps complete', 'Neither step occurs', 'Only second step'], a: 0, s: 'First dissociation: strong (complete). Second: moderate (Ka₂ ≈ 0.012). Strong acid overall.' },
        { q: 'XeF₂ has ___ shape:', o: ['Linear (with 3 lone pairs)', 'Bent', 'Trigonal planar', 'Tetrahedral'], a: 0, s: 'XeF₂: 2 bond pairs + 3 lone pairs = 5 → sp³d → linear (lone pairs equatorial in TBP).' },
      ],
      hard: [
        { q: 'The structure of diborane (B₂H₆) involves:', o: ['3-centre 2-electron (3c-2e) banana bonds', 'Normal covalent bonds only', 'Ionic bonds', 'Van der Waals forces'], a: 0, s: 'B₂H₆: 4 terminal B-H (normal 2c-2e) + 2 bridging H atoms (3c-2e bonds). B is electron-deficient.' },
        { q: 'In contact process, SO₂ is oxidised to SO₃ using catalyst:', o: ['V₂O₅ at ~450°C', 'Pt at 1000°C', 'MnO₂ at room temperature', 'Fe at 500°C'], a: 0, s: 'Contact process: 2SO₂ + O₂ → 2SO₃ (V₂O₅ catalyst, 450°C, 2 atm). Then SO₃ + H₂O → H₂SO₄.' },
        { q: 'Why is SiO₂ a giant covalent solid while CO₂ is a gas?', o: ['Si cannot form stable pπ-pπ double bonds; forms extensive Si-O-Si network', 'CO₂ is ionic', 'SiO₂ has low boiling point', 'C is larger than Si'], a: 0, s: 'C (2p) forms strong pπ-pπ bonds → discrete O=C=O. Si (3p) forms weak pπ bonds → prefers single bonds → network solid.' },
        { q: 'Phosphorus pentachloride exists as [PCl₄]⁺[PCl₆]⁻ in solid state because:', o: ['P can show both +5 and -1 coordination; ionic form is more stable in solid', 'It decomposes', 'Cl is too large', 'P has no d-orbitals'], a: 0, s: 'In solid: one P loses Cl⁻ to become [PCl₄]⁺ (tetrahedral), other gains → [PCl₆]⁻ (octahedral). Ionic lattice.' },
        { q: 'Noble gas compounds are known for:', o: ['Xe (and Kr with F₂) because of low IE and large size', 'He and Ne', 'All noble gases equally', 'None of them'], a: 0, s: 'Xe: low enough IE + large size → can form compounds. XeF₂, XeF₄, XeF₆, XeO₃ known. Kr: only KrF₂.' },
      ],
    },
  ],
};

/* ─── d-Block and f-Block ─── */
const dBlock: ChapterData = {
  name: 'Transition Elements (d & f block)',
  slug: 'd-f-block',
  topics: [
    {
      name: 'Properties of Transition Metals',
      slug: 'transition-metal-properties',
      easy: [
        { q: 'Transition metals show variable oxidation states because:', o: ['Small energy difference between (n-1)d and ns electrons', 'They have large atomic radius', 'They are s-block', 'They have no d-electrons'], a: 0, s: '(n-1)d and ns are close in energy → electrons from both can be used in bonding → multiple oxidation states.' },
        { q: 'Most transition metal compounds are coloured because:', o: ['d-d electronic transitions absorb visible light', 'They are radioactive', 'They absorb UV only', 'They have no electrons'], a: 0, s: 'Partially filled d-orbitals → d-d transitions → absorption in visible spectrum → coloured.' },
        { q: 'Transition metals are good catalysts because:', o: ['Variable oxidation states and ability to form complexes', 'They are soft', 'They are gaseous', 'They dissolve in water'], a: 0, s: 'Variable OS → can participate in redox. Surface adsorption and complex formation help catalysis.' },
        { q: 'The element with highest melting point among transition metals is:', o: ['Tungsten (W)', 'Iron (Fe)', 'Copper (Cu)', 'Gold (Au)'], a: 0, s: 'Tungsten: mp ≈ 3422°C. Strongest metallic bonding among transition metals.' },
        { q: 'KMnO₄ is used as:', o: ['Oxidising agent and disinfectant', 'Reducing agent', 'Fuel', 'Lubricant'], a: 0, s: 'KMnO₄: powerful oxidiser. Mn⁷⁺ → Mn²⁺ (acidic) or MnO₂ (neutral) or MnO₄²⁻ (basic).' },
      ],
      medium: [
        { q: 'Which transition metal has the highest number of oxidation states?', o: ['Mn (Manganese, +2 to +7)', 'Fe', 'Cu', 'Zn'], a: 0, s: 'Mn: +2, +3, +4, +5, +6, +7 (and 0). Maximum OS states, with +7 in MnO₄⁻.' },
        { q: 'Zn is not considered a typical transition element because:', o: ['It has completely filled d-orbitals (3d¹⁰) in all oxidation states', 'It is too reactive', 'It has no metallic character', 'It is a gas'], a: 0, s: 'Zn²⁺: [Ar]3d¹⁰. Full d-shell → no d-d transitions → colourless compounds. Not typical transition behaviour.' },
        { q: 'Crystal field theory explains colour in complexes through:', o: ['Splitting of d-orbitals by ligand field → d-d transitions', 'Bond formation only', 'Ionic interactions', 'Metallic bonding'], a: 0, s: 'Ligands create crystal field → d-orbital splitting (Δ) → electrons absorb light of specific wavelength → complementary colour observed.' },
        { q: 'Potassium dichromate in acidic medium is:', o: ['A strong oxidising agent (Cr₂O₇²⁻ → Cr³⁺)', 'A reducing agent', 'Neutral', 'A catalyst only'], a: 0, s: 'Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O. Orange → green. Powerful oxidiser.' },
        { q: 'Lanthanide contraction is due to:', o: ['Poor shielding by 4f electrons', 'Good shielding', 'Large size of 4f orbitals', 'No 4f electrons'], a: 0, s: '4f orbitals are diffuse, poor shielders → effective nuclear charge increases → gradual decrease in atomic/ionic radii across lanthanides.' },
      ],
      hard: [
        { q: 'In [Fe(CN)₆]³⁻, the oxidation state and magnetic behaviour of Fe is:', o: ['+3, low spin (1 unpaired e⁻, paramagnetic)', '+3, 5 unpaired', '+2, diamagnetic', '+2, paramagnetic'], a: 0, s: 'Fe³⁺: 3d⁵. CN⁻ is strong field → large Δ → t₂g⁵ (1 unpaired electron in octahedral). Low spin.' },
        { q: 'CFSE (Crystal Field Stabilization Energy) is maximum for:', o: ['d³ and d⁸ in octahedral', 'd⁵', 'd¹⁰', 'd⁰'], a: 0, s: 'd³ (t₂g³) and d⁸ (t₂g⁶eg²) have maximum CFSE in octahedral field. Most stable configurations.' },
        { q: 'Spectrochemical series (increasing Δ) is:', o: ['I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < NO₂⁻ < CN⁻ < CO', 'CO < CN⁻ < NH₃ < H₂O < Cl⁻', 'Reverse of above', 'Random'], a: 0, s: 'Weak field (small Δ) → high spin. Strong field (large Δ) → low spin. CO, CN⁻ are strongest.' },
        { q: 'The magnetic moment of a d³ ion is:', o: ['≈ 3.87 BM (√(n(n+2)) with n=3)', '1.73 BM', '5.92 BM', '0 BM'], a: 0, s: 'μ = √(n(n+2)) BM. n=3 unpaired e⁻: μ = √(3×5) = √15 ≈ 3.87 BM.' },
        { q: 'Actinides show more oxidation states than lanthanides because:', o: ['5f, 6d, 7s are closer in energy', '4f and 5d are far apart', 'Actinides are non-radioactive', 'Lanthanides have d-orbitals'], a: 0, s: '5f, 6d, 7s are comparable in energy → electrons from all can participate → more variable OS. Most actinides are radioactive.' },
      ],
    },
  ],
};

/* ─── Coordination Compounds ─── */
const coordination: ChapterData = {
  name: 'Coordination Compounds',
  slug: 'coordination-compounds',
  topics: [
    {
      name: 'IUPAC Naming & Isomerism in Complexes',
      slug: 'complex-naming-isomerism',
      easy: [
        { q: 'The coordination number of Pt in [PtCl₆]²⁻ is:', o: ['6', '4', '2', '8'], a: 0, s: 'CN = number of donor atoms directly bonded to central metal. 6 Cl⁻ around Pt → CN = 6.' },
        { q: 'In [Co(NH₃)₆]³⁺, the oxidation state of Co is:', o: ['+3', '+2', '+6', '0'], a: 0, s: 'NH₃ is neutral. Charge: x + 6(0) = +3 → x = +3.' },
        { q: 'A ligand that donates through 2 donor atoms is called:', o: ['Bidentate', 'Monodentate', 'Tridentate', 'Hexadentate'], a: 0, s: 'Bidentate: 2 donor atoms. Example: ethylenediamine (en), oxalate (C₂O₄²⁻).' },
        { q: 'EDTA is a ___ ligand:', o: ['Hexadentate', 'Monodentate', 'Bidentate', 'Tridentate'], a: 0, s: 'EDTA: 6 donor atoms (2N + 4O) → hexadentate. Forms very stable complexes.' },
        { q: 'The counter ion in K₃[Fe(CN)₆] is:', o: ['K⁺', 'Fe³⁺', 'CN⁻', 'Fe(CN)₆³⁻'], a: 0, s: 'K⁺ is outside the coordination sphere = counter ion. [Fe(CN)₆]³⁻ is the complex ion.' },
      ],
      medium: [
        { q: 'Geometrical isomerism in [MA₂B₂] (square planar) gives:', o: ['cis and trans isomers', 'Only one form', 'Optical isomers', 'Linkage isomers'], a: 0, s: 'Square planar MA₂B₂: cis (adjacent same ligands) and trans (opposite). Example: cisplatin [Pt(NH₃)₂Cl₂].' },
        { q: 'An ambidentate ligand is:', o: ['A ligand that can coordinate through different atoms (e.g., NO₂⁻/ONO⁻)', 'A bidentate ligand', 'A neutral ligand', 'A ligand with no donor atoms'], a: 0, s: 'Ambidentate: can bind through different donor atoms. NO₂⁻: through N (nitro) or O (nitrito). SCN⁻: through S or N.' },
        { q: 'The IUPAC name of [CoCl₂(en)₂]Cl is:', o: ['Dichloridobis(ethylenediamine)cobalt(III) chloride', 'Cobalt dichloride', 'Bis(en)cobalt chloride', 'Chlorobis(en)cobalt(II)'], a: 0, s: 'Ligands alphabetical (dichloro before bis(en)), cobalt(III), chloride counter ion.' },
        { q: 'Chelate effect states that:', o: ['Chelate complexes (with polydentate ligands) are more stable than those with monodentate ligands', 'Monodentate complexes are more stable', 'Both are equal', 'Chelation is unfavourable'], a: 0, s: 'Chelation → more stable (entropy favoured: one chelate displaces multiple monodentate → ΔS > 0).' },
        { q: 'Ionization isomers differ in:', o: ['Which ion is inside vs outside the coordination sphere', 'Geometry', 'Optical activity', 'Ligand bonding atom'], a: 0, s: 'Example: [Co(NH₃)₅Br]SO₄ vs [Co(NH₃)₅SO₄]Br. Same formula, different ion in/out.' },
      ],
      hard: [
        { q: '[Ni(CO)₄] is diamagnetic and tetrahedral. The hybridisation of Ni is:', o: ['sp³', 'dsp²', 'sp³d', 'sp²'], a: 0, s: 'Ni⁰: 3d¹⁰. CO is strong field but Ni has d¹⁰ → no need for pairing → sp³ → tetrahedral, diamagnetic.' },
        { q: 'Werner\'s theory proposed that:', o: ['Metal ions have primary (ionizable) and secondary (coordination) valences', 'Only ionic bonds exist', 'Coordination number is always 4', 'All ligands are monodentate'], a: 0, s: 'Werner: primary valence = oxidation state (ionic). Secondary valence = coordination number (directional bonds to ligands).' },
        { q: 'Trans effect in square planar complexes: the order of trans-directing ability is:', o: ['CO ~ CN⁻ > NO₂⁻ > I⁻ > Br⁻ > Cl⁻ > NH₃ > OH⁻', 'OH⁻ > NH₃ > Cl⁻ > CO', 'All equal', 'Only CN⁻'], a: 0, s: 'Trans effect: ability of a ligand to direct substitution trans to itself. Strong π-acceptors are best trans directors.' },
        { q: 'The stability constant (K_f) of a complex [ML₄] relates to:', o: ['M + 4L ⇌ [ML₄]; K_f = [ML₄]/([M][L]⁴)', 'Dissociation', 'Redox potential', 'Colour'], a: 0, s: 'Formation constant K_f: higher value → more stable complex. K_f = products/reactants.' },
        { q: 'Cisplatin [cis-PtCl₂(NH₃)₂] is used as an anticancer drug while trans-platin is not, because:', o: ['cis-isomer can crosslink DNA strands effectively, trans cannot', 'Trans is more soluble', 'Cis is toxic', 'Both work equally'], a: 0, s: 'cis-Pt binds to two adjacent N atoms on DNA → intrastrand crosslink → prevents replication → anticancer activity. Trans geometry cannot achieve same crosslink.' },
      ],
    },
  ],
};

export const inorganicChemChapters: ChapterData[] = [
  periodicBonding,
  sBlock,
  pBlock,
  dBlock,
  coordination,
];
