import type { NEETChapterData } from './types';

/* ─── Chapter: Plant Growth & Development ─── */
const plantGrowth: NEETChapterData = {
  name: 'Plant Growth & Development',
  slug: 'plant-growth-development',
  topics: [
    {
      name: 'Growth Regulators & Photoperiodism',
      slug: 'growth-regulators-photoperiodism',
      easy: [
        { q: 'Auxins are primarily produced in:', o: ['Shoot tips', 'Roots', 'Leaves', 'Flowers'], a: 0, s: 'Auxins (e.g., IAA) are synthesised mainly in shoot apical meristems and young leaves.' },
        { q: 'Gibberellins promote:', o: ['Stem elongation', 'Leaf abscission', 'Dormancy', 'Stomatal closure'], a: 0, s: 'Gibberellins cause stem elongation, bolting in rosette plants, and seed germination.' },
        { q: 'Abscisic acid is also called:', o: ['Stress hormone', 'Growth hormone', 'Ripening hormone', 'Rooting hormone'], a: 0, s: 'ABA accumulates under stress conditions (drought, cold) → stress hormone.' },
        { q: 'Ethylene is a:', o: ['Gaseous hormone promoting fruit ripening', 'Solid hormone', 'Liquid hormone', 'Growth promoter only'], a: 0, s: 'Ethylene is the only gaseous plant hormone — promotes fruit ripening and senescence.' },
        { q: 'Cytokinins promote:', o: ['Cell division', 'Cell elongation only', 'Dormancy', 'Abscission'], a: 0, s: 'Cytokinins (e.g., zeatin) primarily promote cell division (cytokinesis).' },
        { q: 'Photoperiodism was first studied in:', o: ['Tobacco (Maryland Mammoth)', 'Rice', 'Wheat', 'Maize'], a: 0, s: 'Garner & Allard (1920) discovered photoperiodism using Maryland Mammoth tobacco.' },
      ],
      medium: [
        { q: 'A short-day plant flowers when the dark period is:', o: ['Longer than critical night length', 'Shorter than critical night length', 'Equal to day length', 'Absent'], a: 0, s: 'SDP requires uninterrupted dark period ≥ critical night length. Actually measures night length, not day.' },
        { q: 'Bolting (rapid elongation of internodes before flowering) is induced by:', o: ['Gibberellic acid', 'Abscisic acid', 'Ethylene', 'Cytokinins'], a: 0, s: 'GA causes bolting in rosette plants (e.g., cabbage) — dramatic internode elongation before flowering.' },
        { q: 'Apical dominance is caused by:', o: ['High auxin concentration from apical bud', 'High cytokinin in roots', 'Low gibberellin', 'Ethylene'], a: 0, s: 'Auxin from apex inhibits lateral bud growth (apical dominance). Removal of apex allows branching.' },
        { q: 'Vernalisation is the cold treatment required for:', o: ['Flowering in some plants', 'Seed germination only', 'Fruit development', 'Leaf fall'], a: 0, s: 'Vernalisation: prolonged cold exposure (2-5°C) promotes flowering in biennials and winter varieties.' },
        { q: 'Phytochrome is a:', o: ['Photoreceptor pigment involved in photoperiodism', 'Photosynthetic pigment', 'Respiratory enzyme', 'Structural protein'], a: 0, s: 'Phytochrome exists as Pr (red-absorbing) and Pfr (far-red-absorbing) — mediates photoperiodic responses.' },
        { q: 'Senescence is accelerated by:', o: ['Abscisic acid and ethylene', 'Auxins and gibberellins', 'Cytokinins', 'Gibberellins only'], a: 0, s: 'ABA and ethylene promote senescence, while cytokinins delay it (Richmond-Lang effect).' },
      ],
      hard: [
        { q: 'The triple response of ethylene in etiolated seedlings includes all EXCEPT:', o: ['Promotion of root elongation', 'Inhibition of stem elongation', 'Radial swelling of stem', 'Horizontal growth'], a: 0, s: 'Triple response: (1) inhibited stem elongation, (2) radial swelling, (3) horizontal growth. Not root elongation.' },
        { q: 'In the signalling pathway, auxin perception involves:', o: ['TIR1 receptor leading to Aux/IAA degradation', 'G-protein coupled receptors', 'Tyrosine kinases', 'Ion channels only'], a: 0, s: 'Auxin binds TIR1 (F-box protein) → promotes ubiquitination and degradation of Aux/IAA repressors → ARF activation.' },
        { q: 'Florigen, the flowering hormone, is now identified as:', o: ['FT protein', 'Gibberellic acid', 'A type of auxin', 'Phytochrome'], a: 0, s: 'FT (FLOWERING LOCUS T) protein, produced in leaves and transported to shoot apex, is the long-sought florigen.' },
        { q: 'Seed dormancy can be broken by all of the following EXCEPT:', o: ['Abscisic acid treatment', 'Stratification', 'Scarification', 'Gibberellic acid treatment'], a: 0, s: 'ABA promotes dormancy. Stratification (cold), scarification (mechanical), and GA break dormancy.' },
      ],
    },
  ],
};

/* ─── Chapter: Ecology & Environment ─── */
const ecology: NEETChapterData = {
  name: 'Ecology & Environment',
  slug: 'ecology-environment',
  topics: [
    {
      name: 'Ecosystems & Biodiversity',
      slug: 'ecosystems-biodiversity',
      easy: [
        { q: 'The study of interactions between organisms and their environment is called:', o: ['Ecology', 'Evolution', 'Genetics', 'Taxonomy'], a: 0, s: 'Ecology (coined by Haeckel) studies organism-environment interactions.' },
        { q: 'Primary producers in an ecosystem are:', o: ['Autotrophs (green plants)', 'Herbivores', 'Decomposers', 'Carnivores'], a: 0, s: 'Primary producers are autotrophs that fix solar energy through photosynthesis.' },
        { q: 'The 10% law of energy transfer was given by:', o: ['Lindeman', 'Odum', 'Tansley', 'Haeckel'], a: 0, s: 'Lindeman (1942): only ~10% of energy transfers from one trophic level to the next.' },
        { q: 'Which biome has the highest biodiversity?', o: ['Tropical rainforest', 'Tundra', 'Desert', 'Taiga'], a: 0, s: 'Tropical rainforests harbour the greatest species diversity on Earth.' },
        { q: 'Decomposers belong to which trophic level?', o: ['They act at all trophic levels', 'First', 'Second', 'Third'], a: 0, s: 'Decomposers break down dead matter from all trophic levels — not confined to one.' },
      ],
      medium: [
        { q: 'In ecological succession, the final stable community is called:', o: ['Climax community', 'Pioneer community', 'Seral stage', 'Ecotone'], a: 0, s: 'Climax community is the stable, self-perpetuating final stage of succession.' },
        { q: 'The pyramid of energy is always:', o: ['Upright', 'Inverted', 'Spindle-shaped', 'Variable'], a: 0, s: 'Energy pyramid is always upright because energy decreases at each trophic level (2nd law of thermodynamics).' },
        { q: 'An inverted pyramid of biomass is observed in:', o: ['Aquatic ecosystems (e.g., English Channel)', 'Grassland', 'Forest', 'Desert'], a: 0, s: 'In open ocean, phytoplankton biomass < zooplankton biomass at any instant (rapid turnover).' },
        { q: 'Species richness generally increases toward:', o: ['The equator', 'The poles', 'Higher altitudes', 'Higher latitudes'], a: 0, s: 'Latitudinal diversity gradient: species richness increases from poles to equator.' },
        { q: 'The relationship between species richness (S) and area (A) is described by:', o: ['S = cAᶻ (species-area relationship)', 'S = A/c', 'S = log(A)', 'S = A²'], a: 0, s: 'Species-area relationship: log S = log c + z·log A (power law S = cAᶻ).' },
        { q: 'An ecotone is:', o: ['Transition zone between two ecosystems', 'Centre of an ecosystem', 'A type of biome', 'An organism\'s niche'], a: 0, s: 'Ecotone: boundary/transition zone between adjacent ecosystems (e.g., mangrove between land and sea).' },
      ],
      hard: [
        { q: 'The concept of "ecological niche" includes:', o: ['Both habitat and functional role of an organism', 'Only physical space occupied', 'Only food consumed', 'Only predators avoided'], a: 0, s: 'Niche = habitat + functional role (what it eats, when active, how it interacts). Hutchinson\'s n-dimensional hypervolume.' },
        { q: 'Gross primary productivity (GPP) minus respiration (R) equals:', o: ['Net primary productivity (NPP)', 'Secondary productivity', 'Standing crop', 'Biomass'], a: 0, s: 'NPP = GPP − R. NPP is the organic matter available for consumers.' },
        { q: 'r-selected species are characterised by:', o: ['High reproductive rate, short lifespan, small body size', 'Low reproductive rate, long lifespan', 'K-strategists', 'Large body, few offspring'], a: 0, s: 'r-selected: many offspring, little parental care, rapid maturation, short life (e.g., insects, bacteria).' },
        { q: 'The Red Queen hypothesis explains:', o: ['Arms race between co-evolving species', 'Island biogeography', 'Continental drift effects', 'Genetic drift'], a: 0, s: 'Red Queen (Van Valen): species must constantly evolve to maintain fitness relative to co-evolving species.' },
      ],
    },
  ],
};

/* ─── Chapter: Biotechnology ─── */
const biotechnology: NEETChapterData = {
  name: 'Biotechnology: Principles & Processes',
  slug: 'biotechnology-principles',
  topics: [
    {
      name: 'Recombinant DNA & PCR',
      slug: 'recombinant-dna-pcr',
      easy: [
        { q: 'Restriction enzymes are also called:', o: ['Molecular scissors', 'Molecular glue', 'Molecular motors', 'Molecular chaperones'], a: 0, s: 'Restriction endonucleases cut DNA at specific sequences — called molecular scissors.' },
        { q: 'The enzyme DNA ligase:', o: ['Joins DNA fragments', 'Cuts DNA', 'Copies DNA', 'Unwinds DNA'], a: 0, s: 'DNA ligase joins Okazaki fragments and seals nicks — molecular glue of genetic engineering.' },
        { q: 'PCR stands for:', o: ['Polymerase Chain Reaction', 'Protein Chain Reaction', 'Phosphate Carbon Reaction', 'Plasmid Cloning Reaction'], a: 0, s: 'PCR = Polymerase Chain Reaction, invented by Kary Mullis.' },
        { q: 'The most commonly used vector in genetic engineering is:', o: ['Plasmid', 'Chromosome', 'Ribosome', 'Mitochondria'], a: 0, s: 'Plasmids (especially pBR322, pUC) are the most common cloning vectors.' },
        { q: 'Taq polymerase is used in PCR because it is:', o: ['Heat-stable', 'Cold-stable', 'Cheap', 'Fast only'], a: 0, s: 'Taq polymerase from Thermus aquaticus is thermostable — survives denaturation temperatures in PCR.' },
      ],
      medium: [
        { q: 'In insertional inactivation, a recombinant clone is identified by:', o: ['Loss of antibiotic resistance when gene is inserted in resistance gene', 'Blue colour on X-gal plates', 'Increased antibiotic resistance', 'Colony size'], a: 0, s: 'Insert disrupts antibiotic resistance gene → recombinants lose resistance (insertional inactivation).' },
        { q: 'The three steps of each PCR cycle are:', o: ['Denaturation, Annealing, Extension', 'Transcription, Translation, Folding', 'Ligation, Transformation, Selection', 'Cutting, Joining, Screening'], a: 0, s: 'PCR cycle: (1) Denaturation (94°C), (2) Annealing (50-65°C), (3) Extension (72°C).' },
        { q: 'Gel electrophoresis separates DNA fragments based on:', o: ['Size (molecular weight)', 'Charge only', 'Shape only', 'Colour'], a: 0, s: 'DNA fragments migrate through agarose gel; smaller fragments move faster → separation by size.' },
        { q: 'EcoRI recognises the sequence:', o: ['GAATTC', 'GGATCC', 'AAGCTT', 'CTGCAG'], a: 0, s: 'EcoRI cuts at G↓AATTC, generating sticky ends with 5\' AATT overhangs.' },
        { q: 'Blue-white screening uses:', o: ['lacZ gene and X-gal', 'Antibiotic resistance', 'Fluorescence', 'Radioactive probes'], a: 0, s: 'Insert disrupts lacZ → no β-galactosidase → can\'t cleave X-gal → white colony (recombinant).' },
      ],
      hard: [
        { q: 'The origin of replication (ori) in a vector is important because:', o: ['It controls copy number and allows autonomous replication', 'It provides antibiotic resistance', 'It has the insert site', 'It encodes the selectable marker'], a: 0, s: 'ori is essential for the vector to replicate independently in the host cell. It also determines copy number.' },
        { q: 'RNA interference (RNAi) involves:', o: ['dsRNA silencing complementary mRNA', 'DNA amplification', 'Protein degradation', 'Chromosome condensation'], a: 0, s: 'RNAi: double-stranded RNA is processed by Dicer into siRNA → RISC complex degrades complementary mRNA.' },
        { q: 'Cry proteins from Bacillus thuringiensis are:', o: ['Insecticidal crystal proteins activated in alkaline insect gut', 'Herbicides', 'Fungicides', 'Growth hormones'], a: 0, s: 'Cry proteins (pro-toxins) are solubilised in alkaline insect midgut → active toxin → kills pest.' },
        { q: 'A genomic library differs from a cDNA library in that:', o: ['Genomic library contains introns, cDNA library does not', 'cDNA library has introns', 'Both are identical', 'Genomic library has only exons'], a: 0, s: 'Genomic: fragments of entire genome (introns + exons). cDNA: made from mRNA → no introns.' },
      ],
    },
  ],
};

export const botanyExpansion3Chapters: NEETChapterData[] = [plantGrowth, ecology, biotechnology];
