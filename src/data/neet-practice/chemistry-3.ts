import type { NEETChapterData } from './types';

/* ─── Chapter: Biomolecules ─── */
const biomolecules: NEETChapterData = {
  name: 'Biomolecules',
  slug: 'biomolecules',
  topics: [
    {
      name: 'Carbohydrates, Proteins & Enzymes',
      slug: 'carbohydrates-proteins-enzymes',
      easy: [
        { q: 'Glucose is a:', o: ['Monosaccharide (aldohexose)', 'Disaccharide', 'Polysaccharide', 'Amino acid'], a: 0, s: 'Glucose (C₆H₁₂O₆) is an aldohexose — simplest form of sugar (monosaccharide).' },
        { q: 'Sucrose is a disaccharide composed of:', o: ['Glucose and fructose', 'Two glucose units', 'Glucose and galactose', 'Two fructose units'], a: 0, s: 'Sucrose = α-D-glucose + β-D-fructose linked by glycosidic bond.' },
        { q: 'Proteins are polymers of:', o: ['Amino acids', 'Nucleotides', 'Fatty acids', 'Monosaccharides'], a: 0, s: 'Proteins are polypeptides — chains of amino acids linked by peptide bonds.' },
        { q: 'Enzymes are:', o: ['Biological catalysts (mostly proteins)', 'Structural lipids', 'Nucleic acids only', 'Carbohydrates'], a: 0, s: 'Enzymes are biological catalysts that speed reactions without being consumed. Most are proteins.' },
        { q: 'DNA and RNA are polymers of:', o: ['Nucleotides', 'Amino acids', 'Fatty acids', 'Glucose'], a: 0, s: 'Nucleic acids (DNA, RNA) are polynucleotides — each nucleotide = base + sugar + phosphate.' },
        { q: 'Starch is a storage polysaccharide in:', o: ['Plants', 'Animals', 'Bacteria', 'Fungi'], a: 0, s: 'Plants store glucose as starch (amylose + amylopectin). Animals store as glycogen.' },
      ],
      medium: [
        { q: 'The peptide bond is formed between:', o: ['−COOH of one amino acid and −NH₂ of another', 'Two −NH₂ groups', 'Two −COOH groups', '−OH and −NH₂'], a: 0, s: 'Peptide bond: condensation between carboxyl and amino groups → C(O)−NH + H₂O.' },
        { q: 'The primary structure of a protein refers to:', o: ['Sequence of amino acids', 'Alpha helix/beta sheet', '3D folding', 'Subunit assembly'], a: 0, s: 'Primary = amino acid sequence. Secondary = local folding (α-helix, β-sheet). Tertiary = 3D. Quaternary = subunits.' },
        { q: 'Enzymes lower the:', o: ['Activation energy of reactions', 'Free energy of products', 'Equilibrium constant', 'Enthalpy of reaction'], a: 0, s: 'Enzymes reduce activation energy → faster reaction rate. Don\'t change equilibrium or ΔG.' },
        { q: 'Cellulose differs from starch in:', o: ['Type of glycosidic linkage (β-1,4 vs α-1,4)', 'Monomer unit', 'Molecular formula', 'Elemental composition'], a: 0, s: 'Both are glucose polymers. Cellulose: β-1,4 linkages (straight chains). Starch: α-1,4 (helical).' },
        { q: 'The lock and key model of enzyme action was proposed by:', o: ['Emil Fischer', 'Koshland', 'Michaelis', 'Menten'], a: 0, s: 'Fischer (1894): enzyme active site and substrate have complementary shapes like lock and key.' },
        { q: 'Denaturation of proteins involves:', o: ['Loss of secondary, tertiary, and quaternary structure', 'Breaking peptide bonds', 'Change in primary structure', 'Gain of new function'], a: 0, s: 'Denaturation disrupts non-covalent interactions → loss of 3D structure and function. Primary structure intact.' },
      ],
      hard: [
        { q: 'The isoelectric point (pI) of an amino acid is the pH at which:', o: ['The amino acid is electrically neutral (zwitterion)', 'It is fully protonated', 'It is fully deprotonated', 'It precipitates'], a: 0, s: 'At pI, net charge = 0 (equal positive and negative charges). Amino acid exists as zwitterion.' },
        { q: 'Competitive inhibition of an enzyme can be overcome by:', o: ['Increasing substrate concentration', 'Decreasing temperature', 'Adding more inhibitor', 'Changing pH'], a: 0, s: 'Competitive inhibitor competes with substrate for active site. High [S] outcompetes inhibitor → V_max restored.' },
        { q: 'In the Michaelis-Menten equation, K_m is:', o: ['Substrate concentration at half V_max', 'Maximum velocity', 'Enzyme concentration', 'Product concentration'], a: 0, s: 'K_m = [S] when v = V_max/2. Low K_m = high affinity of enzyme for substrate.' },
        { q: 'Ribozymes are:', o: ['RNA molecules with catalytic activity', 'Ribosomal proteins', 'DNA enzymes', 'Lipid catalysts'], a: 0, s: 'Ribozymes are catalytic RNA — e.g., self-splicing introns, peptidyl transferase in ribosomes.' },
      ],
    },
  ],
};

/* ─── Chapter: Chemistry in Everyday Life ─── */
const everydayChemistry: NEETChapterData = {
  name: 'Chemistry in Everyday Life',
  slug: 'chemistry-everyday-life',
  topics: [
    {
      name: 'Drugs, Soaps & Food Chemistry',
      slug: 'drugs-soaps-food',
      easy: [
        { q: 'Aspirin is classified as:', o: ['Analgesic and antipyretic', 'Antibiotic', 'Tranquilizer', 'Antiseptic'], a: 0, s: 'Aspirin (acetylsalicylic acid) relieves pain (analgesic) and reduces fever (antipyretic).' },
        { q: 'Antibiotics kill or inhibit:', o: ['Bacteria', 'Viruses only', 'Fungi only', 'Parasites only'], a: 0, s: 'Antibiotics target bacteria (not effective against viruses). E.g., penicillin, tetracycline.' },
        { q: 'Soaps are sodium/potassium salts of:', o: ['Long-chain fatty acids', 'Mineral acids', 'Amino acids', 'Nucleic acids'], a: 0, s: 'Soap = RCOO⁻Na⁺ where R is a long hydrocarbon chain (e.g., sodium stearate).' },
        { q: 'Detergents work in hard water because:', o: ['Their calcium/magnesium salts are soluble', 'They are stronger bases', 'They have shorter chains', 'They are natural products'], a: 0, s: 'Synthetic detergents form soluble salts with Ca²⁺/Mg²⁺ (unlike soaps which form scum).' },
        { q: 'Artificial sweetener aspartame is:', o: ['A dipeptide derivative', 'A sugar alcohol', 'A monosaccharide', 'An amino acid'], a: 0, s: 'Aspartame = methyl ester of dipeptide (aspartic acid + phenylalanine). ~200× sweeter than sucrose.' },
      ],
      medium: [
        { q: 'Broad-spectrum antibiotics are effective against:', o: ['Both gram-positive and gram-negative bacteria', 'Only gram-positive', 'Only gram-negative', 'Viruses and bacteria'], a: 0, s: 'Broad-spectrum (e.g., tetracycline, chloramphenicol) effective against wide range of bacteria.' },
        { q: 'Antacids neutralise:', o: ['Excess stomach acid (HCl)', 'Bile', 'Pepsin', 'Intestinal juice'], a: 0, s: 'Antacids (e.g., Mg(OH)₂, Al(OH)₃, NaHCO₃) neutralise excess gastric HCl.' },
        { q: 'Biodegradable detergents have:', o: ['Straight-chain hydrocarbons', 'Branched-chain hydrocarbons', 'Aromatic rings', 'Cyclic structures'], a: 0, s: 'Straight-chain detergents are biodegradable (bacteria can break linear chains). Branched resist degradation.' },
        { q: 'Preservatives like sodium benzoate work by:', o: ['Inhibiting microbial growth', 'Adding flavour', 'Adding colour', 'Increasing nutrition'], a: 0, s: 'Preservatives prevent spoilage by inhibiting growth of bacteria, yeast, and moulds.' },
        { q: 'Cimetidine is used to treat:', o: ['Peptic ulcers (H₂ receptor antagonist)', 'Bacterial infections', 'Depression', 'Allergies'], a: 0, s: 'Cimetidine blocks H₂ receptors in stomach → reduces acid secretion → ulcer treatment.' },
      ],
      hard: [
        { q: 'The critical micelle concentration (CMC) of a surfactant is:', o: ['Concentration above which micelles form', 'Maximum solubility', 'Minimum effective concentration', 'Concentration at which it precipitates'], a: 0, s: 'Above CMC, surfactant molecules aggregate into micelles → effective cleaning action begins.' },
        { q: 'Sulpha drugs act by:', o: ['Competitive inhibition of folic acid synthesis in bacteria', 'Destroying cell walls', 'Inhibiting protein synthesis', 'Blocking DNA replication'], a: 0, s: 'Sulphonamides mimic p-aminobenzoic acid (PABA) → competitively inhibit dihydropteroate synthase → block folic acid synthesis.' },
        { q: 'Enzyme inhibitors used as drugs work on the principle of:', o: ['Structural similarity to substrate (molecular mimicry)', 'Increasing enzyme activity', 'Destroying the enzyme', 'Changing pH'], a: 0, s: 'Drug mimics substrate shape → binds active site → blocks enzyme action (e.g., ACE inhibitors for hypertension).' },
      ],
    },
  ],
};

export const neetChemistryExpansion3Chapters: NEETChapterData[] = [biomolecules, everydayChemistry];
