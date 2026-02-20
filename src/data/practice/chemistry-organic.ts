import type { ChapterData } from './types';

/* ─── GOC & Isomerism ─── */
const gocIsomerism: ChapterData = {
  name: 'General Organic Chemistry',
  slug: 'general-organic-chemistry',
  topics: [
    {
      name: 'IUPAC Nomenclature & Isomerism',
      slug: 'iupac-isomerism',
      easy: [
        { q: 'The IUPAC name of CH₃CH₂OH is:', o: ['Ethanol', 'Methanol', 'Propanol', 'Ethanal'], a: 0, s: '2-carbon chain with -OH → ethanol.' },
        { q: 'Structural isomers have the same ___ but different ___:', o: ['Molecular formula, structural formula', 'Structural formula, molecular formula', 'Molecular weight, colour', 'Name, formula'], a: 0, s: 'Same molecular formula, different connectivity of atoms → structural isomers.' },
        { q: 'The IUPAC name of CH₃COCH₃ is:', o: ['Propan-2-one', 'Propanal', 'Propan-1-one', 'Acetone only'], a: 0, s: 'Ketone group on C-2 of 3-carbon chain → propan-2-one (common name: acetone).' },
        { q: 'Geometrical isomerism requires:', o: ['Restricted rotation and different groups on each carbon of the double bond', 'Free rotation', 'Same groups on double bond', 'Only single bonds'], a: 0, s: 'Cis-trans (E-Z) isomerism: restricted rotation (C=C or ring) + different substituents.' },
        { q: 'Homologous series members differ by:', o: ['CH₂ unit', 'One atom', 'One electron', 'A functional group'], a: 0, s: 'Successive members of a homologous series differ by a -CH₂- unit (14 amu).' },
      ],
      medium: [
        { q: 'The number of structural isomers of C₄H₁₀ is:', o: ['2 (n-butane & isobutane)', '3', '4', '1'], a: 0, s: 'C₄H₁₀: n-butane (straight chain) and 2-methylpropane (isobutane).' },
        { q: 'A chiral carbon has:', o: ['4 different groups attached', '3 different groups', '2 same groups', 'No hydrogen'], a: 0, s: 'Chiral centre: sp³ carbon bonded to 4 different substituents → optical activity.' },
        { q: 'Enantiomers are:', o: ['Non-superimposable mirror images', 'Superimposable mirror images', 'Structural isomers', 'Same compound'], a: 0, s: 'Enantiomers: mirror images that cannot be superimposed. Same physical properties except optical rotation.' },
        { q: 'The hybridisation of carbon in C=C is:', o: ['sp²', 'sp³', 'sp', 'sp³d'], a: 0, s: 'Double bond: sp² hybridisation. 3 sigma bonds + 1 pi bond, 120° bond angles.' },
        { q: 'Inductive effect is:', o: ['Permanent polarisation along a sigma bond chain', 'Temporary effect', 'Through pi bonds only', 'Same as resonance'], a: 0, s: 'Inductive effect: electron displacement along σ-bonds due to electronegativity differences. Decreases with distance.' },
      ],
      hard: [
        { q: 'The number of stereoisomers for a compound with 2 different chiral centres is:', o: ['4 (2²)', '2', '3', '8'], a: 0, s: 'With n chiral centres (all different): max 2ⁿ stereoisomers. n=2 → 4.' },
        { q: 'Hyperconjugation involves:', o: ['σ C-H bond electrons delocalizing into adjacent empty p-orbital', 'π bond breaking', 'Ionic bonding', 'Hydrogen bonding'], a: 0, s: 'Hyperconjugation: σ(C-H) electrons donate into adjacent empty or partially filled p orbital. Stabilizes carbocations.' },
        { q: 'The correct stability order of carbocations is:', o: ['3° > 2° > 1° > CH₃⁺', 'CH₃⁺ > 1° > 2° > 3°', '1° > 2° > 3°', 'All equal'], a: 0, s: 'More alkyl groups → more hyperconjugation and induction → more stable carbocation.' },
        { q: 'Resonance effect is the electron displacement through:', o: ['Conjugated π system', 'σ bonds only', 'Space (no bonds)', 'Ionic bonds'], a: 0, s: 'Resonance (+R/-R): delocalization of π electrons through conjugated system.' },
        { q: 'A meso compound has chiral centres but is optically inactive because:', o: ['It has an internal plane of symmetry', 'It has no chiral centres', 'It is achiral', 'It is racemic'], a: 0, s: 'Meso: has chiral centres but internal symmetry plane makes it optically inactive (self-mirror image).' },
      ],
    },
  ],
};

/* ─── Hydrocarbons ─── */
const hydrocarbons: ChapterData = {
  name: 'Hydrocarbons',
  slug: 'hydrocarbons',
  topics: [
    {
      name: 'Alkanes, Alkenes & Alkynes',
      slug: 'alkanes-alkenes-alkynes',
      easy: [
        { q: 'The general formula of alkanes is:', o: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙH₂ₙ₋₂', 'CₙHₙ'], a: 0, s: 'Alkanes (saturated): CₙH₂ₙ₊₂. Single bonds only.' },
        { q: 'Alkenes contain:', o: ['At least one C=C double bond', 'Only single bonds', 'Triple bonds', 'Aromatic ring'], a: 0, s: 'Alkenes: CₙH₂ₙ. Contain at least one carbon-carbon double bond.' },
        { q: 'The reaction of alkanes with halogens in presence of light is called:', o: ['Free radical halogenation', 'Addition', 'Elimination', 'Polymerisation'], a: 0, s: 'Alkanes undergo substitution (free radical mechanism) with halogens in UV light.' },
        { q: 'Markovnikov\'s rule states that in HX addition to alkene:', o: ['H adds to carbon with more H atoms', 'X adds to carbon with more H', 'H adds randomly', 'Only anti-Markovnikov occurs'], a: 0, s: 'Markovnikov: H adds to C with more H (less substituted); X adds to more substituted C.' },
        { q: 'Alkynes have the general formula:', o: ['CₙH₂ₙ₋₂', 'CₙH₂ₙ', 'CₙH₂ₙ₊₂', 'CₙHₙ'], a: 0, s: 'Alkynes: CₙH₂ₙ₋₂. Contain at least one C≡C triple bond.' },
      ],
      medium: [
        { q: 'Ozonolysis of an alkene gives:', o: ['Aldehydes/ketones (cleavage at C=C)', 'Alcohols', 'Acids only', 'Amines'], a: 0, s: 'O₃ followed by Zn/H₂O cleaves C=C → carbonyl compounds (aldehydes/ketones).' },
        { q: 'Anti-Markovnikov addition (peroxide effect) applies to:', o: ['HBr only (not HCl or HI)', 'HCl', 'HI', 'All HX'], a: 0, s: 'Kharasch effect (peroxide effect) works only with HBr. Radical mechanism.' },
        { q: 'Baeyer\'s test (cold dilute KMnO₄) is positive for:', o: ['Unsaturated compounds (alkenes, alkynes)', 'Alkanes', 'Saturated compounds', 'Ethers'], a: 0, s: 'KMnO₄ decolorization = test for unsaturation. Alkenes/alkynes decolorize it.' },
        { q: 'Lindlar\'s catalyst is used to:', o: ['Reduce alkynes to cis-alkenes', 'Reduce alkynes to alkanes', 'Oxidize alkenes', 'Reduce alkenes to alkanes'], a: 0, s: 'Lindlar catalyst (Pd/CaCO₃/Pb): partial hydrogenation of alkyne → cis (Z) alkene.' },
        { q: 'Wurtz reaction is:', o: ['2RX + 2Na → R-R + 2NaX', 'Dehydration', 'Oxidation', 'Dehydrohalogenation'], a: 0, s: 'Wurtz: coupling of two alkyl halides with sodium to form higher alkane.' },
      ],
      hard: [
        { q: 'Saytzeff\'s (Zaitsev\'s) rule predicts that elimination gives:', o: ['More substituted alkene as major product', 'Less substituted alkene', 'Equal mixture', 'Only terminal alkene'], a: 0, s: 'Zaitsev: β-elimination favours more substituted (more stable) alkene product.' },
        { q: 'Na/liq. NH₃ reduction of alkynes gives:', o: ['Trans-alkene', 'Cis-alkene', 'Alkane', 'No reaction'], a: 0, s: 'Birch-type reduction: Na/liq.NH₃ → trans (E) alkene. Compare with Lindlar → cis.' },
        { q: 'Terminal alkynes are acidic because:', o: ['sp C-H has more s-character (50%) making it more electronegative', 'They are bases', 'C≡C is weak', 'H is ionic'], a: 0, s: 'sp hybrid: 50% s-character → holds electrons tightly → C-H more acidic than sp² or sp³.' },
        { q: 'Kolbe electrolysis of sodium acetate gives:', o: ['Ethane', 'Methane', 'Ethanol', 'Acetic acid'], a: 0, s: '2CH₃COO⁻ → CH₃-CH₃ + 2CO₂ + 2e⁻. Decarboxylative coupling.' },
        { q: 'The stability order of alkenes is:', o: ['More substituted > less substituted', 'Less substituted > more', 'All equal', 'Only terminal are stable'], a: 0, s: 'Hyperconjugation and steric effects make more substituted alkenes thermodynamically more stable.' },
      ],
    },
    {
      name: 'Aromatic Compounds',
      slug: 'aromatic-compounds',
      easy: [
        { q: 'Benzene has the molecular formula:', o: ['C₆H₆', 'C₆H₁₂', 'C₆H₅OH', 'C₆H₅NH₂'], a: 0, s: 'Benzene: C₆H₆. Aromatic hydrocarbon with alternating single and double bonds (delocalized).' },
        { q: "Huckel's rule for aromaticity requires:", o: ['(4n+2) π electrons', '4n π electrons', 'Any number of π electrons', 'No π electrons'], a: 0, s: 'Aromatic: planar, cyclic, conjugated, (4n+2) π electrons. n=1→6 π e⁻ (benzene).' },
        { q: 'Benzene mainly undergoes:', o: ['Electrophilic substitution', 'Addition', 'Elimination', 'Free radical substitution'], a: 0, s: 'Benzene: aromatic stability preserved through substitution rather than addition.' },
        { q: 'Friedel-Crafts alkylation uses:', o: ['AlCl₃ as Lewis acid catalyst', 'NaOH', 'KMnO₄', 'H₂SO₄ only'], a: 0, s: 'FC alkylation: ArH + RCl + AlCl₃ → ArR + HCl. AlCl₃ generates electrophile R⁺.' },
        { q: 'Phenol is more reactive than benzene because:', o: ['OH group activates the ring by +M effect', 'OH deactivates the ring', 'OH has no effect', 'Phenol is not aromatic'], a: 0, s: '-OH is ortho/para directing activating group. Lone pair delocalises into ring (+M effect).' },
      ],
      medium: [
        { q: '-NO₂ group on benzene is:', o: ['Deactivating, meta-directing', 'Activating, ortho/para-directing', 'Deactivating, ortho/para-directing', 'Activating, meta-directing'], a: 0, s: '-NO₂ is electron-withdrawing (-M and -I) → deactivates ring → directs to meta position.' },
        { q: 'Birch reduction of benzene gives:', o: ['1,4-cyclohexadiene', 'Cyclohexane', 'Cyclohexene', 'No reaction'], a: 0, s: 'Na/NH₃(l)/ROH: partial reduction of benzene → 1,4-cyclohexadiene.' },
        { q: 'Which is more stable: benzene or cyclohexatriene (hypothetical)?', o: ['Benzene (by 150 kJ/mol resonance energy)', 'Cyclohexatriene', 'Both equal', 'Cannot compare'], a: 0, s: 'Benzene hydrogenation releases 150 kJ/mol less than expected → resonance stabilization energy.' },
        { q: 'Toluene on oxidation with KMnO₄ gives:', o: ['Benzoic acid', 'Benzaldehyde', 'Benzyl alcohol', 'No reaction'], a: 0, s: 'Vigorous oxidation of side chain: C₆H₅CH₃ → C₆H₅COOH (benzoic acid).' },
        { q: '-NH₂ group on benzene is:', o: ['Activating, ortho/para-directing', 'Deactivating, meta-directing', 'No effect', 'Deactivating, ortho/para-directing'], a: 0, s: '-NH₂ has +M effect (lone pair donation) → activates ring → o/p directing.' },
      ],
      hard: [
        { q: 'In electrophilic aromatic substitution, the rate-determining step is:', o: ['Formation of arenium ion (sigma complex)', 'Loss of proton', 'Attack of electrophile on catalyst', 'Formation of pi complex'], a: 0, s: 'RDS: electrophile attacks ring → arenium ion (carbocation intermediate). Loss of H⁺ is fast.' },
        { q: 'Aniline does not undergo Friedel-Crafts reaction because:', o: ['NH₂ coordinates with Lewis acid AlCl₃ deactivating it', 'Aniline is not aromatic', 'NH₂ is deactivating', 'Ring is too electron-rich'], a: 0, s: 'The lone pair on N forms a complex with AlCl₃, making nitrogen +ve (deactivating salt).' },
        { q: 'The directing effect of -CHO group is:', o: ['Meta-directing (deactivating)', 'Ortho/para-directing', 'No directing effect', 'Only para-directing'], a: 0, s: '-CHO is electron-withdrawing by -M and -I effects → deactivating, meta-directing.' },
        { q: 'Gattermann-Koch reaction introduces ___ group on benzene:', o: ['-CHO (aldehyde)', '-COOH', '-OH', '-NH₂'], a: 0, s: 'C₆H₆ + CO + HCl → C₆H₅CHO (in presence of AlCl₃/CuCl). Formylation.' },
        { q: 'Haworth synthesis is used to prepare:', o: ['Naphthalene derivatives', 'Benzene', 'Alkanes', 'Phenol'], a: 0, s: 'Haworth synthesis: builds second ring onto benzene → naphthalene via acylation, reduction, cyclization.' },
      ],
    },
  ],
};

/* ─── Alcohols, Phenols & Ethers ─── */
const alcoholsPhenols: ChapterData = {
  name: 'Alcohols, Phenols & Ethers',
  slug: 'alcohols-phenols-ethers',
  topics: [
    {
      name: 'Reactions of Alcohols & Phenols',
      slug: 'reactions-alcohols-phenols',
      easy: [
        { q: 'The functional group in alcohols is:', o: ['-OH (hydroxyl)', '-CHO', '-COOH', '-NH₂'], a: 0, s: 'Alcohols: R-OH. Hydroxyl group bonded to saturated carbon.' },
        { q: 'Lucas test distinguishes between:', o: ['1°, 2°, and 3° alcohols', 'Aldehydes and ketones', 'Acids and bases', 'Alkanes and alkenes'], a: 0, s: 'Lucas reagent (ZnCl₂/conc. HCl): 3° reacts immediately, 2° in 5 min, 1° only on heating.' },
        { q: 'Dehydration of ethanol with conc. H₂SO₄ at 170°C gives:', o: ['Ethylene (CH₂=CH₂)', 'Diethyl ether', 'Acetaldehyde', 'Acetic acid'], a: 0, s: 'At 170°C: intramolecular dehydration → ethene. At 140°C: intermolecular → diethyl ether.' },
        { q: 'Phenol is more acidic than ethanol because:', o: ['Phenoxide ion is resonance-stabilised', 'Ethanol is more stable', 'Phenol has no OH', 'Phenol is a base'], a: 0, s: 'Phenoxide ion: negative charge delocalised over aromatic ring → more stable → more acidic.' },
        { q: 'Williamson synthesis is used to prepare:', o: ['Ethers (R-O-R\')', 'Alcohols', 'Alkanes', 'Esters'], a: 0, s: 'R-O⁻Na⁺ + R\'X → R-O-R\' + NaX. SN2 reaction → ether synthesis.' },
      ],
      medium: [
        { q: 'The order of reactivity of alcohols with HBr (SN1) is:', o: ['3° > 2° > 1°', '1° > 2° > 3°', 'All equal', '2° > 3° > 1°'], a: 0, s: '3° carbocation most stable → forms fastest → highest reactivity in SN1.' },
        { q: 'Kolbe reaction of phenol gives:', o: ['Salicylic acid (o-hydroxybenzoic acid)', 'Benzaldehyde', 'Aniline', 'Toluene'], a: 0, s: 'PhONa + CO₂ (125°C, 4-7 atm) → o-HOC₆H₄COONa → salicylic acid.' },
        { q: 'Reimer-Tiemann reaction of phenol gives:', o: ['Salicylaldehyde (o-hydroxybenzaldehyde)', 'Benzoic acid', 'Phenyl ether', 'Aspirin'], a: 0, s: 'Phenol + CHCl₃ + NaOH → salicylaldehyde. Electrophilic :CCl₂ attacks ortho position.' },
        { q: 'Victor Meyer test is used to distinguish:', o: ['1°, 2°, and 3° alcohols', 'Only 1° and 2°', 'Alcohols and phenols', 'Ethers and alcohols'], a: 0, s: '1° → red colour, 2° → blue, 3° → no colour with HNO₂ then NaOH/excess.' },
        { q: 'Phenol gives a violet colour with:', o: ['FeCl₃ solution', 'NaOH', 'HCl', 'H₂SO₄'], a: 0, s: 'FeCl₃ test for phenols: Fe³⁺ forms coloured complex with phenolic -OH. Violet/blue/green colour.' },
      ],
      hard: [
        { q: 'Fries rearrangement converts:', o: ['Phenyl ester → hydroxy aryl ketone (using AlCl₃)', 'Ketone → alcohol', 'Ether → alcohol', 'Ester → acid'], a: 0, s: 'ArOCOR + AlCl₃ → o/p-HO-Ar-COR. Acyl group migrates from O to ring.' },
        { q: 'Claisen rearrangement of allyl phenyl ether gives:', o: ['o-Allylphenol', 'p-Allylphenol', 'Phenol + allyl alcohol', 'No reaction'], a: 0, s: 'Claisen: [3,3]-sigmatropic rearrangement. Allyl group moves from O to ortho position.' },
        { q: 'Pinacol-pinacolone rearrangement involves:', o: ['1,2-shift in 1,2-diol to form ketone', 'Ring expansion', 'Oxidation', 'Reduction'], a: 0, s: 'Pinacol (1,2-diol) + H⁺ → loss of H₂O → 1,2-methyl shift → pinacolone (ketone).' },
        { q: 'In Zeisel method, ethers are cleaved by:', o: ['Conc. HI', 'Conc. HCl', 'NaOH', 'KMnO₄'], a: 0, s: 'R-O-R\' + HI → RI + R\'OH. The alkyl iodide is measured to determine methoxy/ethoxy groups.' },
        { q: 'Cumene process is used for industrial production of:', o: ['Phenol and acetone', 'Benzene and toluene', 'Ethanol', 'Diethyl ether'], a: 0, s: 'Cumene (isopropylbenzene) + O₂ → cumene hydroperoxide → phenol + acetone (acid cleavage).' },
      ],
    },
  ],
};

/* ─── Aldehydes, Ketones & Carboxylic Acids ─── */
const carbonyls: ChapterData = {
  name: 'Aldehydes, Ketones & Carboxylic Acids',
  slug: 'aldehydes-ketones-acids',
  topics: [
    {
      name: 'Reactions of Carbonyl Compounds',
      slug: 'carbonyl-reactions',
      easy: [
        { q: 'Aldehydes give a positive silver mirror test because they are:', o: ['Reducing agents (get oxidised)', 'Oxidising agents', 'Neutral', 'Acids'], a: 0, s: "Tollen's test: RCHO + 2Ag(NH₃)₂⁺ → RCOO⁻ + 2Ag (silver mirror). Aldehydes reduce Ag⁺." },
        { q: "Fehling's test is positive for:", o: ['Aldehydes (not aromatic)', 'Ketones', 'Ethers', 'Amines'], a: 0, s: "Fehling's test: aliphatic aldehydes reduce Cu²⁺ → Cu₂O (red precipitate). Ketones don't react." },
        { q: 'The product of aldol condensation of acetaldehyde is:', o: ['3-hydroxybutanal (aldol)', 'Acetic acid', 'Ethanol', 'Butane'], a: 0, s: '2CH₃CHO → CH₃CH(OH)CH₂CHO (aldol). Base-catalyzed α-carbon nucleophilic addition.' },
        { q: 'Cannizzaro reaction is given by aldehydes that:', o: ['Have no α-hydrogen', 'Have α-hydrogen', 'Are ketones', 'Are acids'], a: 0, s: 'No α-H aldehydes (formaldehyde, benzaldehyde): one molecule oxidised, other reduced. Disproportionation.' },
        { q: 'Wolff-Kishner reduction converts:', o: ['C=O to CH₂ (using N₂H₄/KOH)', 'C=C to C-C', 'C-O to C-OH', 'COOH to CHO'], a: 0, s: 'WK reduction: RCOR\' → RCH₂R\' using hydrazine/base. Clemmensen uses Zn-Hg/HCl.' },
      ],
      medium: [
        { q: 'Nucleophilic addition to carbonyl follows the order:', o: ['HCHO > CH₃CHO > CH₃COCH₃ (less steric hindrance = faster)', 'Ketones > aldehydes', 'All equal', 'HCHO is slowest'], a: 0, s: 'Less steric hindrance and more δ⁺ on carbonyl carbon → faster nucleophilic addition.' },
        { q: 'Grignard reagent (RMgX) reacts with formaldehyde to give:', o: ['Primary alcohol', 'Secondary alcohol', 'Tertiary alcohol', 'Ketone'], a: 0, s: 'HCHO + RMgX → RCH₂OH (1° alcohol). Other aldehydes give 2°, ketones give 3° alcohol.' },
        { q: 'Iodoform test is positive for:', o: ['Methyl ketones and secondary carbinols (CH₃CO- or CH₃CHOH-)', 'All aldehydes', 'All alcohols', 'Carboxylic acids'], a: 0, s: 'CH₃CO- (or CH₃CHOH- which oxidizes to it) gives CHI₃ (yellow precipitate) with I₂/NaOH.' },
        { q: 'Beckmann rearrangement converts:', o: ['Oxime to amide', 'Amide to amine', 'Ketone to ester', 'Alcohol to ether'], a: 0, s: 'Ketoxime + acid → rearrangement → substituted amide (N-acyl). Anti-periplanar migration.' },
        { q: 'Wittig reaction converts:', o: ['Aldehyde/ketone to alkene using Ph₃P=CHR', 'Alkene to aldehyde', 'Acid to alcohol', 'Ester to acid'], a: 0, s: 'Phosphorus ylide + C=O → C=C + Ph₃P=O. Highly specific alkene synthesis.' },
      ],
      hard: [
        { q: 'Perkin reaction combines:', o: ['Aromatic aldehyde + acid anhydride → α,β-unsaturated acid', 'Two ketones', 'Alcohol + acid', 'Two alkyl halides'], a: 0, s: 'ArCHO + (RCO)₂O → ArCH=CRCOOH. Condensation in presence of sodium salt of acid.' },
        { q: 'Knoevenagel condensation is:', o: ['Aldehyde + active methylene compound (like malonic ester)', 'Two aldehydes', 'Ketone + amine', 'Acid + alcohol'], a: 0, s: 'RCHO + CH₂(COOR\')₂ → RCH=C(COOR\')₂. Modified aldol with active methylene compounds.' },
        { q: 'Reformatsky reaction uses:', o: ['Zn + α-bromo ester + aldehyde → β-hydroxy ester', 'Grignard reagent', 'Na in ether', 'LiAlH₄'], a: 0, s: 'BrCH₂COOR + Zn → organozinc + RCHO → β-hydroxy ester. Milder than Grignard.' },
        { q: 'Hell-Volhard-Zelinsky reaction is α-halogenation of:', o: ['Carboxylic acids (using X₂/P)', 'Ketones', 'Aldehydes', 'Amines'], a: 0, s: 'RCOOH + Br₂/P → RCHBrCOOH. P converts acid to acyl halide, enabling α-bromination.' },
        { q: 'Tischenko reaction is:', o: ['Disproportionation of aldehyde to ester (using Al(OEt)₃)', 'Cannizzaro reaction', 'Aldol condensation', 'Wittig reaction'], a: 0, s: '2RCHO → RCOOCH₂R. One molecule oxidised, other reduced. Catalysed by aluminium alkoxide.' },
      ],
    },
  ],
};

/* ─── Amines ─── */
const amines: ChapterData = {
  name: 'Amines',
  slug: 'amines',
  topics: [
    {
      name: 'Properties & Reactions of Amines',
      slug: 'amine-reactions',
      easy: [
        { q: 'The basic strength order of amines in aqueous solution is:', o: ['2° > 1° > 3° > NH₃ (approx, due to solvation effects)', '3° > 2° > 1°', '1° > 2° > 3°', 'All equal'], a: 0, s: 'In water: solvation matters. 2° is most basic. Gas phase: 3° > 2° > 1° (pure induction).' },
        { q: 'Primary amines react with HNO₂ (NaNO₂ + HCl) to give:', o: ['Diazonium salt (ArN₂⁺Cl⁻) for aromatic; N₂ gas for aliphatic', 'Nitro compound', 'No reaction', 'Amide'], a: 0, s: 'Aromatic 1° amines: form stable diazonium salt. Aliphatic: unstable diazonium → N₂ + alcohol.' },
        { q: 'Hinsberg test uses ___ to distinguish 1°, 2°, 3° amines:', o: ['Benzenesulfonyl chloride', 'FeCl₃', 'NaOH', 'Br₂'], a: 0, s: '1° amine → soluble in NaOH. 2° amine → insoluble precipitate. 3° amine → no reaction.' },
        { q: 'Gabriel phthalimide synthesis is used to prepare:', o: ['Primary amines', 'Secondary amines', 'Tertiary amines', 'Quaternary ammonium salts'], a: 0, s: 'Phthalimide K salt + RX → N-alkylphthalimide → hydrolysis → RNH₂ (pure 1° amine).' },
        { q: 'Hofmann bromamide reaction converts:', o: ['Amide → 1° amine (with one less carbon)', 'Amine → amide', 'Acid → ester', 'Ester → acid'], a: 0, s: 'RCONH₂ + Br₂ + NaOH → RNH₂ + Na₂CO₃. Amine has one fewer carbon than parent acid.' },
      ],
      medium: [
        { q: 'Carbylamine (isocyanide) test is positive for:', o: ['Primary amines only', 'Secondary amines', 'Tertiary amines', 'All amines'], a: 0, s: 'RNH₂ + CHCl₃ + 3KOH → RNC (foul smell). Only 1° amines give this test.' },
        { q: 'The coupling reaction of diazonium salt with phenol gives:', o: ['Azo dye (coloured compound)', 'Aniline', 'Benzene', 'Chlorobenzene'], a: 0, s: 'ArN₂⁺ + ArOH → Ar-N=N-ArOH (azo compound). Used in dye industry.' },
        { q: 'Sandmeyer reaction replaces -N₂⁺ with:', o: ['-Cl, -Br, or -CN (using CuCl, CuBr, or CuCN)', '-OH only', '-H only', '-NO₂'], a: 0, s: 'ArN₂⁺ + CuX → ArX + N₂. X = Cl, Br, CN. For ArOH: boil with water.' },
        { q: 'Aniline does not give Friedel-Crafts reaction because:', o: ['-NH₂ forms salt with AlCl₃ (Lewis acid catalyst)', 'Aniline is not aromatic', '-NH₂ is deactivating', 'Ring is too stable'], a: 0, s: 'C₆H₅NH₂ + AlCl₃ → C₆H₅NH₂·AlCl₃ (salt). Nitrogen donates lone pair to Lewis acid.' },
        { q: 'Hofmann elimination of quaternary ammonium hydroxide gives:', o: ['Less substituted alkene (anti-Zaitsev)', 'More substituted alkene', 'Alcohol', 'No reaction'], a: 0, s: 'Hofmann rule: bulky base → less substituted alkene (kinetic product). Opposite of Zaitsev.' },
      ],
      hard: [
        { q: 'p-Toluenesulfonyl chloride reacts with 1° amine to give a product that is:', o: ['Soluble in NaOH (acidic N-H)', 'Insoluble', 'Gaseous', 'Coloured'], a: 0, s: '1° amine + ArSO₂Cl → ArSO₂NHR (sulfonamide). Has acidic N-H → dissolves in NaOH.' },
        { q: 'Schiemann (Balz-Schiemann) reaction converts diazonium salt to:', o: ['Aryl fluoride (using HBF₄)', 'Aryl chloride', 'Phenol', 'Aryl iodide'], a: 0, s: 'ArN₂⁺BF₄⁻ → ArF + N₂ + BF₃. Important route to aryl fluorides.' },
        { q: 'Mannich reaction involves:', o: ['Formaldehyde + amine + compound with active H → β-amino carbonyl', 'Two amines', 'Acid + amine', 'Only ketones'], a: 0, s: 'HCHO + R₂NH + RCH₂COR\' → RCH(CH₂NR₂)COR\' (Mannich base). Aminomethylation.' },
        { q: 'Diazotization is carried out at 0-5°C because:', o: ['Diazonium salts decompose above 5°C', 'Reaction does not occur at higher T', 'HNO₂ is unstable at all temperatures', 'Amine is volatile'], a: 0, s: 'ArN₂⁺ is unstable above ~5°C → decomposes to phenol/N₂. Low T preserves it for further reactions.' },
        { q: 'Rearrangements during Curtius, Hofmann, and Lossen reactions all involve migration of:', o: ['R group from C to N (forming isocyanate intermediate)', 'N to C', 'H from C to O', 'O to N'], a: 0, s: 'All three: RCON₃/RCONH₂/RCONHOH → R-N=C=O (isocyanate) via 1,2-shift of R from C to N.' },
      ],
    },
  ],
};

export const organicChemChapters: ChapterData[] = [
  gocIsomerism,
  hydrocarbons,
  alcoholsPhenols,
  carbonyls,
  amines,
];
