import type { NEETChapterData } from './types';

/* ═══════════════════════════════════════════════════
   NEET BIOLOGY — BOTANY Practice Questions
   4 chapters, each with 2 topics, each topic with 5 easy / 6 medium / 5 hard
   ═══════════════════════════════════════════════════ */

/* ──── Chapter 1: Plant Diversity & Morphology ──── */
const plantDiversity: NEETChapterData = {
  name: 'Plant Diversity & Morphology',
  slug: 'plant-diversity-morphology',
  topics: [
    {
      name: 'Plant Kingdom Classification',
      slug: 'plant-kingdom',
      easy: [
        { q: 'Which division of plants is known as "amphibians of the plant kingdom"?', o: ['Pteridophyta', 'Bryophyta', 'Gymnosperms', 'Angiosperms'], a: 1, s: 'Bryophytes are called amphibians of the plant kingdom because they live on land but need water for reproduction (transfer of male gametes).' },
        { q: 'Gymnosperms differ from angiosperms in that they lack:', o: ['Seeds', 'Fruits', 'Roots', 'Leaves'], a: 1, s: 'Gymnosperms have "naked seeds" — they lack fruits. Seeds are not enclosed in an ovary wall. Angiosperms (flowering plants) produce fruits from the ovary.' },
        { q: 'Alternation of generations is found in:', o: ['All plants', 'Only bryophytes', 'Only pteridophytes', 'Only angiosperms'], a: 0, s: 'All plants show alternation of generations — alternating between a diploid sporophyte and a haploid gametophyte generation. The dominant generation varies across groups.' },
        { q: 'Which of the following is a non-vascular plant?', o: ['Fern', 'Moss', 'Pine', 'Rose'], a: 1, s: 'Mosses (Bryophyta) are non-vascular — they lack xylem and phloem. Ferns (Pteridophyta), pines (Gymnosperms), and roses (Angiosperms) are all vascular plants.' },
        { q: 'Heterospory is first observed in:', o: ['Bryophytes', 'Pteridophytes', 'Gymnosperms', 'Angiosperms'], a: 1, s: 'Heterospory (production of two types of spores — microspores and megaspores) first evolved in pteridophytes like Selaginella and Salvinia.' },
      ],
      medium: [
        { q: 'In bryophytes, the dominant generation is:', o: ['Sporophyte', 'Gametophyte', 'Both are equal', 'Depends on species'], a: 1, s: 'In bryophytes, the gametophyte (n) is the dominant, independent, photosynthetic generation. The sporophyte (2n) is dependent on the gametophyte for nutrition.' },
        { q: 'Sori are reproductive structures found in:', o: ['Mosses', 'Ferns', 'Gymnosperms', 'Fungi'], a: 1, s: 'Sori are clusters of sporangia found on the underside of fern fronds. They are covered by a protective indusium and produce spores by meiosis.' },
        { q: 'Double fertilization is a unique feature of:', o: ['Bryophytes', 'Gymnosperms', 'Angiosperms', 'Pteridophytes'], a: 2, s: 'Double fertilization occurs only in angiosperms: one sperm fuses with egg (→ zygote), another fuses with two polar nuclei (→ triploid endosperm). Discovered by Nawaschin.' },
        { q: 'Archegonia and antheridia are found in:', o: ['Angiosperms only', 'Bryophytes and pteridophytes', 'Gymnosperms only', 'Algae only'], a: 1, s: 'Archegonia (female) and antheridia (male) are multicellular sex organs found in bryophytes, pteridophytes, and some gymnosperms. Angiosperms have lost these structures.' },
        { q: 'The plant body of a moss is:', o: ['Differentiated into root, stem, and leaves', 'Thallus-like without differentiation', 'Differentiated into stem and leaf-like structures with rhizoids', 'A sporophyte dependent on gametophyte'], a: 2, s: 'Moss gametophyte has stem-like axis, leaf-like appendages, and rhizoids (not true roots). It lacks true vascular tissues but has a leafy appearance.' },
        { q: 'Which of the following is a gymnosperm?', o: ['Pinus', 'Funaria', 'Dryopteris', 'Hibiscus'], a: 0, s: 'Pinus (pine) is a gymnosperm with naked seeds in cones. Funaria is a bryophyte (moss), Dryopteris is a pteridophyte (fern), and Hibiscus is an angiosperm.' },
      ],
      hard: [
        { q: 'In the life cycle of a fern, the prothallus is:', o: ['Sporophyte, diploid', 'Gametophyte, haploid', 'Sporophyte, haploid', 'Gametophyte, diploid'], a: 1, s: 'The prothallus is the small, heart-shaped, haploid gametophyte of ferns. It is independent, photosynthetic, and bears antheridia and archegonia on its underside.' },
        { q: 'Xylem vessels are absent in:', o: ['Angiosperms', 'Gymnosperms', 'Pteridophytes', 'Both gymnosperms and pteridophytes'], a: 1, s: 'Gymnosperms lack vessels in xylem (except Gnetales). They have tracheids only. Angiosperms have both vessels and tracheids. Some primitive angiosperms also lack vessels.' },
        { q: 'The female gametophyte of angiosperms is called:', o: ['Megaspore mother cell', 'Embryo sac', 'Archegonium', 'Nucellus'], a: 1, s: 'The embryo sac is the female gametophyte of angiosperms. It develops from the megaspore and typically contains 7 cells and 8 nuclei (Polygonum type).' },
        { q: 'Which pteridophyte is known as a "living fossil"?', o: ['Adiantum', 'Psilotum', 'Dryopteris', 'Selaginella'], a: 1, s: 'Psilotum is considered a living fossil because it resembles the earliest vascular plants (Rhynia). It lacks true roots and leaves, having only rhizomes and scale-like enations.' },
        { q: 'Protonema is a juvenile stage in the life cycle of:', o: ['Fern', 'Moss', 'Pine', 'Marchantia'], a: 1, s: 'Protonema is the filamentous, juvenile stage of the moss gametophyte. It develops from the germinating spore and gives rise to the leafy gametophore by budding.' },
      ],
    },
    {
      name: 'Plant Morphology & Anatomy',
      slug: 'morphology-anatomy',
      easy: [
        { q: 'The edible part of a mango is:', o: ['Pericarp (mesocarp)', 'Endosperm', 'Seed', 'Thalamus'], a: 0, s: 'In mango, the edible part is the fleshy mesocarp (middle layer of pericarp). The outer epicarp is the skin, and the inner endocarp is the hard stone surrounding the seed.' },
        { q: 'Phloem is responsible for:', o: ['Water transport', 'Food transport', 'Gaseous exchange', 'Support'], a: 1, s: 'Phloem transports organic food (sucrose) from source (leaves) to sink (roots, fruits, seeds). This process is called translocation. Xylem transports water and minerals.' },
        { q: 'Stomata are mainly found on:', o: ['Upper surface of dorsiventral leaves', 'Lower surface of dorsiventral leaves', 'Roots', 'Bark'], a: 1, s: 'In dorsiventral (dicot) leaves, stomata are mainly on the lower epidermis (hypostomatic). This reduces water loss from direct sunlight. Isobilateral (monocot) leaves have them on both surfaces.' },
        { q: 'Tap root system is characteristic of:', o: ['Monocots', 'Dicots', 'Both monocots and dicots', 'Bryophytes'], a: 1, s: 'Dicots typically have a tap root system with a primary root that grows vertically and gives off lateral branches. Monocots have a fibrous root system.' },
        { q: 'Collenchyma provides:', o: ['Flexibility and mechanical support', 'Food storage', 'Water transport', 'Photosynthesis'], a: 0, s: 'Collenchyma is a living tissue that provides flexible mechanical support to growing parts of plants. It has unevenly thickened cell walls with pectin and cellulose.' },
      ],
      medium: [
        { q: 'Casparian strips are found in:', o: ['Epidermis', 'Endodermis', 'Pericycle', 'Cortex'], a: 1, s: 'Casparian strips are bands of suberin on the radial and tangential walls of endodermal cells. They force water and minerals to pass through the symplast, regulating ion uptake.' },
        { q: 'The vascular bundle in monocot stem is:', o: ['Open and collateral', 'Closed and scattered', 'Open and bicollateral', 'Closed and arranged in a ring'], a: 1, s: 'Monocot stems have closed vascular bundles (no cambium, so no secondary growth) scattered throughout the ground tissue. Dicot stems have open bundles arranged in a ring.' },
        { q: 'Palisade mesophyll is responsible for:', o: ['Gas exchange', 'Maximum photosynthesis', 'Water storage', 'Structural support'], a: 1, s: 'Palisade mesophyll cells are elongated, tightly packed cells in the upper portion of the leaf. They contain the most chloroplasts and carry out maximum photosynthesis.' },
        { q: 'Secondary growth in dicot stems is due to:', o: ['Apical meristem', 'Vascular cambium and cork cambium', 'Intercalary meristem', 'Protoderm'], a: 1, s: 'Secondary growth (increase in girth) is due to lateral meristems: vascular cambium (produces secondary xylem and phloem) and cork cambium (produces bark).' },
        { q: 'Companion cells are associated with:', o: ['Vessels', 'Sieve tubes', 'Tracheids', 'Fibres'], a: 1, s: 'Companion cells are closely associated with sieve tube elements in phloem of angiosperms. They provide metabolic support (ATP, proteins) to the enucleate sieve tubes.' },
        { q: 'The Kranz anatomy is characteristic of:', o: ['C₃ plants', 'C₄ plants', 'CAM plants', 'All plants'], a: 1, s: 'Kranz anatomy (wreath-like arrangement of bundle sheath cells with chloroplasts around vascular bundles) is characteristic of C₄ plants like maize, sugarcane, and sorghum.' },
      ],
      hard: [
        { q: 'Passage cells in the endodermis are found opposite to:', o: ['Phloem', 'Xylem (protoxylem)', 'Pith', 'Cortex'], a: 1, s: 'Passage cells are thin-walled endodermal cells without Casparian strip thickening, found opposite protoxylem poles. They allow passage of water from cortex to vascular cylinder.' },
        { q: 'In a dorsiventral leaf, the arrangement from upper to lower surface is:', o: ['Upper epidermis → palisade → spongy → lower epidermis', 'Upper epidermis → spongy → palisade → lower epidermis', 'Palisade on both sides with spongy in middle', 'Random arrangement'], a: 0, s: 'Dorsiventral leaf (dicot): upper epidermis → palisade mesophyll (2-3 layers, tightly packed) → spongy mesophyll (loosely arranged with air spaces) → lower epidermis with stomata.' },
        { q: 'Heartwood differs from sapwood in that:', o: ['It conducts water', 'It is darker and contains deposited tannins and resins', 'It has living cells', 'It is the outer wood'], a: 1, s: 'Heartwood (duramen) is the inner, older, non-functional wood. It is darker due to deposition of tannins, resins, oils, and gums. Sapwood (alburnum) is outer, lighter, and conducts water.' },
        { q: 'Transfusion tissue is found in leaves of:', o: ['Ferns', 'Pinus (gymnosperms)', 'Dicots', 'Monocots'], a: 1, s: 'Transfusion tissue is a specialized tissue in gymnosperm (Pinus) needles surrounding the vascular bundle. It consists of tracheids and parenchyma cells that help in lateral transport.' },
        { q: 'Which tissue has lignified walls and is dead at maturity?', o: ['Collenchyma', 'Sclerenchyma', 'Chlorenchyma', 'Aerenchyma'], a: 1, s: 'Sclerenchyma cells have heavily lignified, thick secondary walls and are dead at maturity. They provide rigid mechanical support. Includes fibres (elongated) and sclereids (short, irregular).' },
      ],
    },
  ],
};

/* ──── Chapter 2: Cell Biology & Biomolecules ──── */
const cellBiology: NEETChapterData = {
  name: 'Cell Biology & Biomolecules',
  slug: 'cell-biology-biomolecules',
  topics: [
    {
      name: 'Cell Structure & Organelles',
      slug: 'cell-organelles',
      easy: [
        { q: 'The powerhouse of the cell is:', o: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi body'], a: 1, s: 'Mitochondria are called the powerhouse because they produce ATP through oxidative phosphorylation (aerobic respiration). They have their own DNA and ribosomes.' },
        { q: 'Which organelle is involved in protein synthesis?', o: ['Lysosome', 'Ribosome', 'Smooth ER', 'Vacuole'], a: 1, s: 'Ribosomes are the sites of protein synthesis (translation). They read mRNA and join amino acids by peptide bonds. Found free in cytoplasm or attached to rough ER.' },
        { q: 'Cell wall is absent in:', o: ['Plant cells', 'Bacterial cells', 'Animal cells', 'Fungal cells'], a: 2, s: 'Animal cells lack a cell wall. They have only a cell membrane (plasma membrane). Plant cells have cellulose walls, bacteria have peptidoglycan, fungi have chitin walls.' },
        { q: 'The Golgi apparatus is involved in:', o: ['DNA replication', 'Packaging and secretion of proteins', 'Photosynthesis', 'ATP production'], a: 1, s: 'Golgi apparatus (dictyosomes in plants) modifies, packages, and sorts proteins and lipids for transport or secretion. It forms vesicles, lysosomes, and cell plate during cell division.' },
        { q: 'Prokaryotic cells differ from eukaryotic cells in lacking:', o: ['DNA', 'Ribosomes', 'Membrane-bound nucleus', 'Cell membrane'], a: 2, s: 'Prokaryotes lack a membrane-bound nucleus (DNA is in a nucleoid region), and generally lack membrane-bound organelles like mitochondria, ER, and Golgi. They have 70S ribosomes.' },
      ],
      medium: [
        { q: 'The fluid mosaic model of cell membrane was proposed by:', o: ['Watson and Crick', 'Singer and Nicolson', 'Schleiden and Schwann', 'Robertson'], a: 1, s: 'Singer and Nicolson (1972) proposed the fluid mosaic model: a phospholipid bilayer with embedded integral and peripheral proteins that can move laterally (fluid) in a mosaic pattern.' },
        { q: 'Smooth endoplasmic reticulum is the site of:', o: ['Protein synthesis', 'Lipid synthesis and detoxification', 'DNA replication', 'Photosynthesis'], a: 1, s: 'SER synthesizes lipids, steroids (including hormones in endocrine cells), and is involved in detoxification of drugs and poisons (especially in liver cells). It lacks ribosomes.' },
        { q: '9+2 arrangement of microtubules is found in:', o: ['Centrioles', 'Cilia and flagella', 'Spindle fibres', 'Chromosomes'], a: 1, s: 'Cilia and flagella have a 9+2 axoneme pattern: 9 peripheral doublets + 2 central singlets, held by nexin and radial spokes. Centrioles and basal bodies have 9+0 (9 triplets, no central).' },
        { q: 'Lysosomes are formed from:', o: ['Rough ER', 'Golgi apparatus', 'Smooth ER', 'Mitochondria'], a: 1, s: 'Lysosomes are formed by budding from the trans face of the Golgi apparatus. Their hydrolytic enzymes are synthesized in rough ER, processed in Golgi, and packaged into lysosomes.' },
        { q: 'The semi-autonomous organelles of the cell are:', o: ['Ribosomes and lysosomes', 'Mitochondria and chloroplasts', 'ER and Golgi', 'Nucleus and ribosome'], a: 1, s: 'Mitochondria and chloroplasts are semi-autonomous because they have their own circular DNA, 70S ribosomes, and can self-replicate. They evolved from endosymbiotic prokaryotes.' },
        { q: 'Which cell organelle is known as the suicide bag?', o: ['Ribosome', 'Lysosome', 'Peroxisome', 'Centrosome'], a: 1, s: 'Lysosomes are called "suicide bags" because they can release their digestive enzymes (acid hydrolases) into the cell cytoplasm, causing autolysis (self-destruction) during cellular damage.' },
      ],
      hard: [
        { q: 'The signal hypothesis for protein targeting to ER was proposed by:', o: ['Singer and Nicolson', 'Blobel and Sabatini', 'Watson and Crick', 'De Duve'], a: 1, s: 'Blobel and Sabatini (1971) proposed the signal hypothesis: proteins destined for secretion have an N-terminal signal peptide that directs the ribosome to ER membrane via SRP (signal recognition particle).' },
        { q: 'In a eukaryotic cell, the 80S ribosome consists of:', o: ['40S + 40S subunits', '60S + 40S subunits', '50S + 30S subunits', '60S + 20S subunits'], a: 1, s: 'Eukaryotic (80S) ribosomes have a 60S large subunit (28S + 5.8S + 5S rRNA) and a 40S small subunit (18S rRNA). Prokaryotic 70S ribosomes have 50S + 30S subunits.' },
        { q: 'Polyribosomes (polysomes) are:', o: ['Multiple ribosomes translating the same mRNA simultaneously', 'Ribosomes in the nucleus', 'Ribosomes bound to DNA', 'Free ribosomes in the cytoplasm only'], a: 0, s: 'Polyribosomes are clusters of ribosomes simultaneously translating the same mRNA molecule, producing multiple copies of the same polypeptide. This increases the efficiency of translation.' },
        { q: 'The cis and trans faces of the Golgi apparatus are respectively also called:', o: ['Forming face and maturing face', 'Maturing face and forming face', 'Entry and exit faces', 'Both A and C'], a: 3, s: 'Cis face = forming face = entry face (receives vesicles from ER). Trans face = maturing face = exit face (sends vesicles to plasma membrane or lysosomes).' },
        { q: 'Tonoplast is the membrane that bounds the:', o: ['Nucleus', 'Chloroplast', 'Vacuole', 'Mitochondria'], a: 2, s: 'Tonoplast is the single membrane that surrounds the central vacuole in plant cells. It regulates transport of ions and molecules between cytoplasm and vacuolar sap.' },
      ],
    },
    {
      name: 'Biomolecules & Enzymes',
      slug: 'biomolecules-enzymes',
      easy: [
        { q: 'The monomer of proteins is:', o: ['Nucleotide', 'Amino acid', 'Fatty acid', 'Glucose'], a: 1, s: 'Proteins are polymers of amino acids joined by peptide bonds (CO-NH). There are 20 standard amino acids. The sequence of amino acids determines protein structure and function.' },
        { q: 'Which of the following is a polysaccharide?', o: ['Glucose', 'Sucrose', 'Cellulose', 'Fructose'], a: 2, s: 'Cellulose is a polysaccharide — a polymer of β-D-glucose units linked by β(1→4) glycosidic bonds. Glucose and fructose are monosaccharides. Sucrose is a disaccharide.' },
        { q: 'Enzymes are chemically:', o: ['Lipids', 'Carbohydrates', 'Proteins', 'Nucleic acids'], a: 2, s: 'Most enzymes are proteins (globular proteins). They act as biological catalysts that speed up reactions by lowering activation energy. A few catalytic RNAs (ribozymes) also exist.' },
        { q: 'DNA is made up of which type of sugar?', o: ['Ribose', 'Deoxyribose', 'Glucose', 'Fructose'], a: 1, s: 'DNA contains deoxyribose sugar (lacks the -OH group at the 2\' carbon). RNA contains ribose sugar. This difference makes DNA more chemically stable than RNA.' },
        { q: 'Which bond joins two amino acids?', o: ['Glycosidic bond', 'Peptide bond', 'Hydrogen bond', 'Phosphodiester bond'], a: 1, s: 'Peptide bond (CO-NH) is a covalent bond formed by condensation between the carboxyl group of one amino acid and the amino group of the next, releasing water.' },
      ],
      medium: [
        { q: 'The lock and key model of enzyme action was proposed by:', o: ['Koshland', 'Emil Fischer', 'Michaelis and Menten', 'Buchner'], a: 1, s: 'Emil Fischer (1894) proposed the lock and key model: enzyme\'s active site (lock) is complementary in shape to the substrate (key). Koshland proposed the induced fit model.' },
        { q: 'Competitive inhibition of an enzyme can be overcome by:', o: ['Increasing inhibitor concentration', 'Increasing substrate concentration', 'Decreasing temperature', 'Adding coenzymes'], a: 1, s: 'In competitive inhibition, the inhibitor competes with substrate for the active site. Increasing substrate concentration outcompetes the inhibitor, restoring enzyme activity (Vmax unchanged, Km increases).' },
        { q: 'The primary structure of a protein is determined by:', o: ['Hydrogen bonds', 'Sequence of amino acids', 'Disulfide bonds', 'Hydrophobic interactions'], a: 1, s: 'Primary structure is the linear sequence of amino acids in a polypeptide chain, held together by peptide bonds. It determines all higher levels of protein folding.' },
        { q: 'Which of the following is a reducing sugar?', o: ['Sucrose', 'Maltose', 'Cellulose', 'Starch'], a: 1, s: 'Maltose is a reducing sugar because it has a free anomeric carbon (hemiacetal) that can reduce Benedict\'s/Fehling\'s reagent. Sucrose is non-reducing (both anomeric carbons are involved in the glycosidic bond).' },
        { q: 'The Km value of an enzyme represents:', o: ['Maximum velocity', 'Substrate concentration at half Vmax', 'Inhibitor concentration', 'Enzyme concentration'], a: 1, s: 'Km (Michaelis constant) is the substrate concentration at which the reaction velocity is half of Vmax. A low Km indicates high enzyme-substrate affinity.' },
        { q: 'Phospholipids are amphipathic because they have:', o: ['Two fatty acid tails only', 'A hydrophilic head and hydrophobic tails', 'All polar groups', 'All non-polar groups'], a: 1, s: 'Phospholipids are amphipathic: a polar hydrophilic phosphate head (interacts with water) and two non-polar hydrophobic fatty acid tails (avoids water). This property drives membrane formation.' },
      ],
      hard: [
        { q: 'Allosteric enzymes differ from simple enzymes in that they:', o: ['Have only one binding site', 'Have additional regulatory sites besides the active site', 'Do not follow Michaelis-Menten kinetics', 'Both B and C'], a: 3, s: 'Allosteric enzymes have regulatory (allosteric) sites in addition to active sites. Binding of modulators changes enzyme conformation. They show sigmoidal kinetics, not Michaelis-Menten hyperbolic curves.' },
        { q: 'Chargaff\'s rule states that in DNA:', o: ['A+T = G+C always', 'A = T and G = C', 'A = G and T = C', 'Purines = Pyrimidines × 2'], a: 1, s: 'Chargaff\'s rule: A pairs with T and G pairs with C, so their molar ratios are equal (A=T, G=C). Consequently, total purines = total pyrimidines (A+G = T+C).' },
        { q: 'The tertiary structure of a protein is stabilized by:', o: ['Peptide bonds only', 'Hydrogen bonds, disulfide bonds, ionic bonds, and hydrophobic interactions', 'Only disulfide bonds', 'Van der Waals forces only'], a: 1, s: 'Tertiary structure (3D folding) is stabilized by multiple non-covalent interactions: hydrogen bonds, ionic (salt bridges), hydrophobic interactions, and covalent disulfide bonds between cysteine residues.' },
        { q: 'Ribozymes are:', o: ['Ribosomal proteins with enzymatic activity', 'RNA molecules with catalytic activity', 'Modified ribosomes', 'Enzymes that degrade RNA'], a: 1, s: 'Ribozymes are RNA molecules that act as enzymes (catalytic RNA). Examples include self-splicing introns, RNase P, and the peptidyl transferase activity of the ribosome (23S rRNA).' },
        { q: 'The isoelectric point (pI) of an amino acid is the pH at which:', o: ['It is most soluble', 'It has no net charge and does not migrate in an electric field', 'It is most reactive', 'It denatures'], a: 1, s: 'At the isoelectric point (pI), the amino acid exists as a zwitterion with zero net charge. It does not migrate in an electric field. At pH < pI, it is positively charged; at pH > pI, negatively charged.' },
      ],
    },
  ],
};

/* ──── Chapter 3: Plant Physiology ──── */
const plantPhysiology: NEETChapterData = {
  name: 'Plant Physiology',
  slug: 'plant-physiology',
  topics: [
    {
      name: 'Photosynthesis',
      slug: 'photosynthesis',
      easy: [
        { q: 'The site of light reactions in photosynthesis is:', o: ['Stroma', 'Thylakoid membrane', 'Cytoplasm', 'Inner membrane'], a: 1, s: 'Light reactions occur in the thylakoid membrane of chloroplasts where photosystems PS I and PS II, electron transport chain, and ATP synthase are located.' },
        { q: 'The final electron acceptor in the light reactions is:', o: ['Water', 'NADP⁺', 'O₂', 'CO₂'], a: 1, s: 'NADP⁺ is the final electron acceptor in the light reactions (at PS I), getting reduced to NADPH. Water is the electron donor (at PS II), releasing O₂.' },
        { q: 'The dark reactions of photosynthesis occur in:', o: ['Thylakoid membrane', 'Stroma', 'Cytoplasm', 'Nucleus'], a: 1, s: 'Dark reactions (Calvin cycle/light-independent reactions) occur in the stroma of chloroplasts, where CO₂ is fixed into glucose using ATP and NADPH from light reactions.' },
        { q: 'Which pigment is primarily responsible for photosynthesis?', o: ['Carotenoids', 'Xanthophyll', 'Chlorophyll a', 'Chlorophyll b'], a: 2, s: 'Chlorophyll a is the primary photosynthetic pigment and the reaction centre pigment. Other pigments (Chl b, carotenoids, xanthophylls) are accessory pigments that transfer energy to Chl a.' },
        { q: 'The net equation of photosynthesis is:', o: ['6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6CO₂', 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O', '6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂'], a: 3, s: 'The correct balanced equation: 6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂ (12 water molecules are used, 6 are released). O₂ comes from photolysis of water.' },
      ],
      medium: [
        { q: 'RuBisCO is the enzyme that fixes CO₂ in:', o: ['C₃ cycle (Calvin cycle)', 'C₄ pathway (Hatch-Slack)', 'CAM pathway only', 'All three pathways'], a: 0, s: 'RuBisCO (Ribulose bisphosphate carboxylase/oxygenase) fixes CO₂ in the Calvin cycle (C₃ pathway) by combining CO₂ with RuBP to form 2 molecules of 3-PGA (3-phosphoglycerate).' },
        { q: 'In C₄ plants, the primary CO₂ acceptor is:', o: ['RuBP', 'PEP (phosphoenolpyruvate)', 'OAA', 'Pyruvate'], a: 1, s: 'In C₄ plants (mesophyll cells), PEP carboxylase fixes CO₂ with PEP to form OAA (4-carbon compound). This is then converted to malate/aspartate and shuttled to bundle sheath cells.' },
        { q: 'Cyclic photophosphorylation involves only:', o: ['PS II', 'PS I', 'Both PS I and PS II', 'Neither PS I nor PS II'], a: 1, s: 'Cyclic photophosphorylation involves only PS I (P700). Electrons from PS I are recycled back to PS I via the ETC, generating ATP but not NADPH. No O₂ is evolved and no NADP⁺ is reduced.' },
        { q: 'The CO₂ compensation point is the concentration at which:', o: ['Photosynthesis equals zero', 'Photosynthesis equals respiration', 'Respiration equals zero', 'Maximum photosynthesis occurs'], a: 1, s: 'At the CO₂ compensation point, the rate of CO₂ fixation by photosynthesis equals the rate of CO₂ release by respiration. Net gas exchange is zero. C₄ plants have a lower compensation point.' },
        { q: 'Photorespiration occurs in C₃ plants because RuBisCO also fixes:', o: ['N₂', 'O₂', 'H₂O', 'CO'], a: 1, s: 'RuBisCO has both carboxylase and oxygenase activity. In C₃ plants at high O₂/low CO₂, it fixes O₂ (oxygenase), producing phosphoglycolate → glycolate pathway → CO₂ loss. This wasteful process is photorespiration.' },
        { q: 'Emerson effect demonstrates the enhancement of photosynthesis by:', o: ['High light intensity', 'Using both far-red and red light together', 'Increasing CO₂', 'High temperature'], a: 1, s: 'Emerson effect: using far-red (>680 nm, PS I) and shorter red light (~680 nm, PS II) together gives a photosynthesis rate greater than the sum of individual rates. This proved two photosystems work together.' },
      ],
      hard: [
        { q: 'In the Z-scheme of non-cyclic electron flow, the sequence is:', o: ['PS II → PQ → Cyt b6f → PC → PS I → Fd → NADP⁺', 'PS I → PS II → PQ → Cyt → NADP⁺', 'PS II → PS I → PQ → Fd → NADP⁺', 'Water → PS I → PS II → NADP⁺'], a: 0, s: 'Z-scheme: H₂O → PS II (P680) → Pheophytin → PQ → Cyt b6f → Plastocyanin (PC) → PS I (P700) → Ferredoxin (Fd) → NADP⁺ reductase → NADPH. Water is split at PS II releasing O₂.' },
        { q: 'The quantum yield of photosynthesis is approximately:', o: ['1/8 or 0.125', '1/4 or 0.25', '1/2 or 0.5', '1/10 or 0.1'], a: 0, s: 'Quantum yield = molecules O₂ evolved per photon absorbed ≈ 1/8. Minimum 8 photons are needed to evolve 1 O₂ molecule (4 from PS II + 4 from PS I for 4 electrons from 2H₂O).' },
        { q: 'Bundle sheath cells in C₄ plants lack:', o: ['Chloroplasts', 'PS II (functional grana)', 'Mitochondria', 'Ribosomes'], a: 1, s: 'Bundle sheath chloroplasts in C₄ plants have reduced/absent grana (and thus lack functional PS II). They have only stromal lamellae with PS I. This ensures O₂ is not produced near RuBisCO, preventing photorespiration.' },
        { q: 'The enzyme that regenerates PEP from pyruvate in C₄ mesophyll cells is:', o: ['PEP carboxylase', 'Pyruvate orthophosphate dikinase', 'RuBisCO', 'Malate dehydrogenase'], a: 1, s: 'Pyruvate orthophosphate dikinase converts pyruvate back to PEP in mesophyll cells using 2 ATP equivalents. This enzyme is unique to C₄ and CAM plants and is a major energy cost of C₄ photosynthesis.' },
        { q: 'CAM photosynthesis differs from C₄ in that spatial separation is replaced by:', o: ['Chemical separation', 'Temporal separation (day/night)', 'No separation', 'Nuclear separation'], a: 1, s: 'In CAM plants, CO₂ fixation (by PEP carboxylase → malate) occurs at night (stomata open), and decarboxylation + Calvin cycle occurs during the day (stomata closed). This is temporal separation vs spatial separation in C₄ plants.' },
      ],
    },
    {
      name: 'Plant Transport & Mineral Nutrition',
      slug: 'transport-nutrition',
      easy: [
        { q: 'Water absorption by roots occurs mainly by:', o: ['Active transport', 'Osmosis', 'Diffusion of solutes', 'Pinocytosis'], a: 1, s: 'Water absorption by roots occurs mainly by osmosis — movement of water from a region of higher water potential (soil) to lower water potential (root cells) through selectively permeable membranes.' },
        { q: 'Transpiration is the loss of water primarily through:', o: ['Roots', 'Stomata', 'Cuticle only', 'Lenticels only'], a: 1, s: 'About 90-95% of transpiration occurs through stomata (stomatal transpiration). Small amounts occur through the cuticle (cuticular) and lenticels (lenticular transpiration).' },
        { q: 'Which element is a macronutrient for plants?', o: ['Iron', 'Nitrogen', 'Zinc', 'Copper'], a: 1, s: 'Nitrogen is a macronutrient required in large quantities (>10 mmol/kg). Other macronutrients: C, H, O, P, S, K, Ca, Mg. Iron, Zinc, Copper are micronutrients (needed in trace amounts).' },
        { q: 'The cohesion-tension theory explains:', o: ['Phloem transport', 'Ascent of sap in xylem', 'Mineral absorption', 'Root pressure'], a: 1, s: 'Cohesion-tension theory (Dixon and Joly) explains the ascent of sap: transpiration creates tension (negative pressure), pulling water up due to cohesive forces between water molecules in continuous water column.' },
        { q: 'Nitrogen fixation is the conversion of:', o: ['NH₃ to NO₃⁻', 'N₂ to NH₃/NH₄⁺', 'NO₃⁻ to N₂', 'NH₄⁺ to NO₂⁻'], a: 1, s: 'Nitrogen fixation converts atmospheric N₂ gas to ammonia (NH₃/NH₄⁺). Done by nitrogenase enzyme in nitrogen-fixing bacteria like Rhizobium (symbiotic) and Azotobacter (free-living).' },
      ],
      medium: [
        { q: 'Guttation occurs through:', o: ['Stomata', 'Hydathodes', 'Lenticels', 'Cuticle'], a: 1, s: 'Guttation is the exudation of liquid water from hydathodes (special pores) at leaf tips and margins, driven by root pressure. It occurs at night when transpiration is low and humidity is high.' },
        { q: 'The pressure flow hypothesis explains transport in:', o: ['Xylem', 'Phloem', 'Both xylem and phloem', 'Neither'], a: 1, s: 'Münch\'s pressure flow (mass flow) hypothesis explains phloem transport: sucrose loading at source creates high turgor pressure, and unloading at sink creates low pressure, driving sieve tube flow from source to sink.' },
        { q: 'Which micronutrient is essential for nitrogen fixation?', o: ['Zinc', 'Molybdenum', 'Copper', 'Boron'], a: 1, s: 'Molybdenum (Mo) is a component of nitrogenase enzyme complex, which catalyzes N₂ fixation. It is also part of nitrate reductase. Deficiency impairs nitrogen metabolism.' },
        { q: 'The symbiotic nitrogen-fixing bacterium in legume root nodules is:', o: ['Azotobacter', 'Rhizobium', 'Azospirillum', 'Clostridium'], a: 1, s: 'Rhizobium is a symbiotic N₂-fixing bacterium that forms root nodules in leguminous plants. It converts N₂ to NH₃ using nitrogenase; the plant provides carbohydrates and anaerobic conditions (leghemoglobin).' },
        { q: 'Plasmolysis occurs when a plant cell is placed in:', o: ['Hypotonic solution', 'Hypertonic solution', 'Isotonic solution', 'Distilled water'], a: 1, s: 'In a hypertonic solution, water moves out of the cell by exosmosis. The protoplast shrinks and pulls away from the cell wall — this is plasmolysis. It is reversible (deplasmolysis in hypotonic solution).' },
        { q: 'Active transport of ions requires:', o: ['Only concentration gradient', 'ATP energy and carrier proteins', 'Osmotic pressure', 'No energy'], a: 1, s: 'Active transport moves ions/molecules against their concentration gradient, requiring metabolic energy (ATP) and specific carrier (transporter) proteins. Example: uptake of mineral ions by root hair cells.' },
      ],
      hard: [
        { q: 'Leghemoglobin in root nodules functions as:', o: ['N₂ carrier', 'O₂ scavenger to maintain anaerobic conditions', 'Electron donor', 'CO₂ carrier'], a: 1, s: 'Leghemoglobin (a pink/red protein) binds free O₂ in root nodules, maintaining the low O₂ (microaerobic) environment needed by the O₂-sensitive nitrogenase enzyme for N₂ fixation.' },
        { q: 'The water potential of pure water at standard temperature and pressure is:', o: ['−1 bar', '+1 bar', 'Zero (0 bar/MPa)', 'Infinity'], a: 2, s: 'Water potential (Ψ) of pure water at STP = 0 (by convention). Addition of solutes decreases Ψ (makes it negative). Water moves from higher to lower water potential.' },
        { q: 'Cation exchange capacity (CEC) of soil is important for:', o: ['Water retention', 'Mineral nutrient availability to roots', 'Soil aeration', 'Microbial growth only'], a: 1, s: 'CEC is the ability of soil particles (clay, humus) to hold cation nutrients (K⁺, Ca²⁺, Mg²⁺, NH₄⁺) on their negatively charged surfaces. High CEC means better nutrient retention and availability for root absorption.' },
        { q: 'Aquaporins are:', o: ['Enzymes that split water', 'Channel proteins for facilitated water transport', 'Pumps that actively transport water', 'Proteins that fix nitrogen'], a: 1, s: 'Aquaporins are integral membrane proteins that form water-selective channels, greatly facilitating osmotic water movement across cell membranes. They increase membrane permeability to water without allowing ion passage.' },
        { q: 'Mycorrhiza helps plants in absorption of:', o: ['Water only', 'Phosphorus primarily', 'Nitrogen only', 'Carbon dioxide'], a: 1, s: 'Mycorrhizal fungi form symbiotic associations with plant roots and greatly enhance phosphorus (P) absorption because their hyphae extend far beyond the root depletion zone. They also help with water and micronutrient uptake.' },
      ],
    },
  ],
};

/* ──── Chapter 4: Genetics & Evolution ──── */
const geneticsEvolution: NEETChapterData = {
  name: 'Genetics & Evolution',
  slug: 'genetics-evolution',
  topics: [
    {
      name: 'Mendelian Genetics & Molecular Biology',
      slug: 'mendelian-molecular',
      easy: [
        { q: 'The law of segregation is also known as:', o: ['Law of independent assortment', 'Law of purity of gametes', 'Law of dominance', 'Law of inheritance'], a: 1, s: 'Mendel\'s first law (Law of Segregation) = Law of Purity of Gametes: the two alleles of a gene segregate during gamete formation, so each gamete receives only one allele.' },
        { q: 'A test cross involves crossing with:', o: ['A hybrid individual', 'A homozygous dominant', 'A homozygous recessive', 'Another F₁ individual'], a: 2, s: 'A test cross crosses the individual of unknown genotype with a homozygous recessive (aa). If all offspring are dominant phenotype → parent is AA. If 1:1 ratio → parent is Aa.' },
        { q: 'DNA replication is:', o: ['Conservative', 'Semi-conservative', 'Dispersive', 'Non-conservative'], a: 1, s: 'DNA replication is semi-conservative (Meselson and Stahl, 1958): each daughter DNA has one original (parental) strand and one newly synthesized strand.' },
        { q: 'The central dogma of molecular biology is:', o: ['DNA → RNA → Protein', 'RNA → DNA → Protein', 'Protein → RNA → DNA', 'DNA → Protein → RNA'], a: 0, s: 'Central dogma: DNA → (transcription) → RNA → (translation) → Protein. Information flows from nucleic acids to proteins. Reverse transcription (RNA → DNA) occurs in retroviruses.' },
        { q: 'In a monohybrid cross Aa × Aa, the phenotypic ratio is:', o: ['1:2:1', '3:1', '9:3:3:1', '1:1'], a: 1, s: 'Aa × Aa gives genotypes: 1AA : 2Aa : 1aa. Since A is dominant, phenotypic ratio is 3 dominant : 1 recessive = 3:1.' },
      ],
      medium: [
        { q: 'Incomplete dominance results in a phenotypic ratio of:', o: ['3:1', '1:2:1', '9:3:3:1', '1:1'], a: 1, s: 'In incomplete dominance, heterozygotes show an intermediate phenotype. F₂ ratio is 1:2:1 (both phenotypic and genotypic). Example: red × white snapdragons give pink F₁.' },
        { q: 'Transcription in eukaryotes is carried out by:', o: ['DNA polymerase', 'RNA polymerase', 'Reverse transcriptase', 'Ligase'], a: 1, s: 'RNA polymerase synthesizes mRNA from a DNA template during transcription. Eukaryotes have RNA Pol I (rRNA), II (mRNA), and III (tRNA, 5S rRNA). Prokaryotes have a single RNA polymerase.' },
        { q: 'A codon consists of:', o: ['2 nucleotides', '3 nucleotides (triplet)', '4 nucleotides', '1 nucleotide'], a: 1, s: 'A codon is a sequence of 3 consecutive nucleotides (triplet) on mRNA that codes for a specific amino acid. There are 64 codons: 61 sense codons + 3 stop codons (UAA, UAG, UGA).' },
        { q: 'Sex-linked recessive traits like colour blindness and haemophilia are more common in:', o: ['Females', 'Males', 'Both equally', 'Neither sex specifically'], a: 1, s: 'Males are more affected by X-linked recessive traits because they have only one X chromosome (XY). A single recessive allele on X is expressed. Females (XX) need two copies to be affected (carrier with one).' },
        { q: 'Post-transcriptional modifications of mRNA in eukaryotes include:', o: ['5\' capping, 3\' polyadenylation, splicing', 'Methylation of all bases', 'Addition of introns', 'Removal of exons'], a: 0, s: 'Pre-mRNA undergoes: 5\' capping (7-methylguanosine), 3\' polyadenylation (poly-A tail for stability), and splicing (removal of introns, joining of exons by spliceosome).' },
        { q: 'The wobble hypothesis explains why:', o: ['All codons are essential', 'One tRNA can recognize more than one codon', 'mRNA is unstable', 'Ribosomes can read backwards'], a: 1, s: 'Wobble hypothesis (Crick): the 3rd base of a codon can form non-standard base pairs with the 1st base (anticodon) of tRNA, allowing one tRNA to recognize multiple synonymous codons (degeneracy).' },
      ],
      hard: [
        { q: 'In epistasis, a 9:3:3:1 ratio is modified to 9:3:4 in:', o: ['Complementary interaction', 'Recessive epistasis', 'Dominant epistasis', 'Duplicate recessive'], a: 1, s: 'In recessive epistasis (e.g., coat colour in Labrador dogs): aa genotype masks expression of B locus. Ratio: 9 A_B_ : 3 A_bb : 4 (3 aaB_ + 1 aabb) = 9:3:4.' },
        { q: 'Okazaki fragments are formed during synthesis of:', o: ['Leading strand', 'Lagging strand', 'Both strands', 'mRNA'], a: 1, s: 'Okazaki fragments are short DNA segments (100-200 bp in eukaryotes) synthesized on the lagging strand in the 5\'→3\' direction (opposite to fork movement). DNA ligase joins them. Leading strand is synthesized continuously.' },
        { q: 'The operon model was proposed by:', o: ['Watson and Crick', 'Jacob and Monod', 'Beadle and Tatum', 'Hershey and Chase'], a: 1, s: 'Jacob and Monod (1961) proposed the operon concept using the lac operon in E. coli. An operon has a promoter, operator, structural genes, and is regulated by a repressor protein.' },
        { q: 'Hardy-Weinberg equilibrium requires all of the following EXCEPT:', o: ['Large population', 'Random mating', 'Natural selection', 'No mutation'], a: 2, s: 'Hardy-Weinberg equilibrium (p² + 2pq + q² = 1) requires: large population, random mating, no mutation, no migration, and NO natural selection. Any of these disruptions causes evolution.' },
        { q: 'The template strand is also called the:', o: ['Coding strand', 'Sense strand', 'Antisense strand', 'Non-template strand'], a: 2, s: 'Template strand = antisense strand (3\'→5\' direction). RNA polymerase reads it to synthesize mRNA. Coding strand = sense strand = non-template strand (has same sequence as mRNA, with T instead of U).' },
      ],
    },
    {
      name: 'Evolution & Adaptation',
      slug: 'evolution-adaptation',
      easy: [
        { q: 'Who proposed the theory of natural selection?', o: ['Lamarck', 'Charles Darwin', 'Hugo de Vries', 'Mendel'], a: 1, s: 'Charles Darwin proposed the theory of evolution by natural selection in "On the Origin of Species" (1859). Organisms with favorable variations survive and reproduce more (survival of the fittest).' },
        { q: 'Homologous organs indicate:', o: ['Convergent evolution', 'Divergent evolution', 'Parallel evolution', 'No evolution'], a: 1, s: 'Homologous organs (same origin, different function) indicate divergent evolution from a common ancestor. Example: forelimbs of human, whale, bat, horse — all have same basic bone pattern.' },
        { q: 'Analogous organs have:', o: ['Same origin, same function', 'Different origin, similar function', 'Same origin, different function', 'No functional similarity'], a: 1, s: 'Analogous organs have different embryonic origin but similar function (convergent evolution). Example: wings of birds and insects — different structures adapted for flight independently.' },
        { q: 'The first life on Earth originated in:', o: ['Land', 'Water (oceans)', 'Air', 'Ice'], a: 1, s: 'Life originated in primordial oceans/water about 3.5 billion years ago. The reducing atmosphere and energy sources (lightning, UV) formed simple organic molecules (Oparin-Haldane hypothesis).' },
        { q: 'Vestigial organs are:', o: ['Fully functional organs', 'Organs with reduced function, remnants of ancestors', 'Newly evolved organs', 'Organs found only in plants'], a: 1, s: 'Vestigial organs are degenerate/rudimentary organs that were functional in ancestors but have reduced or no function now. Examples: human appendix, wisdom teeth, nictitating membrane.' },
      ],
      medium: [
        { q: 'Genetic drift has a greater effect in:', o: ['Large populations', 'Small populations', 'All populations equally', 'Only in plants'], a: 1, s: 'Genetic drift (random changes in allele frequency) has a greater effect in small populations (founder effect, bottleneck effect) because sampling errors are more significant. Large populations are buffered against drift.' },
        { q: 'Reproductive isolation is essential for:', o: ['Variation within a species', 'Speciation (formation of new species)', 'Adaptation only', 'Migration'], a: 1, s: 'Reproductive isolation (pre-zygotic and post-zygotic barriers) prevents gene flow between populations, allowing them to diverge genetically and eventually become separate species (speciation).' },
        { q: 'Industrial melanism in peppered moths is an example of:', o: ['Genetic drift', 'Directional natural selection', 'Stabilizing selection', 'Disruptive selection'], a: 1, s: 'Industrial melanism: dark (melanic) peppered moths increased in polluted areas of Britain due to directional selection — dark moths were better camouflaged on soot-covered trees, avoiding bird predation.' },
        { q: 'Adaptive radiation refers to:', o: ['Radiation-induced mutations', 'Evolution of different species from a common ancestor into different ecological niches', 'Convergent evolution', 'Extinction of species'], a: 1, s: 'Adaptive radiation: a single ancestral species diversifies into many species adapted to different ecological niches. Classic example: Darwin\'s finches on Galápagos — different beak shapes for different food sources.' },
        { q: 'Founder effect is a type of:', o: ['Natural selection', 'Mutation', 'Genetic drift', 'Gene flow'], a: 2, s: 'Founder effect is a type of genetic drift: when a small group from a larger population colonizes a new area. The small sample may not represent the original population\'s allele frequencies, leading to different evolution.' },
        { q: 'Which of the following provides the most concrete evidence for evolution?', o: ['Embryology', 'Fossil record', 'Biogeography', 'Molecular phylogeny'], a: 1, s: 'The fossil record provides direct, historical evidence of past life forms and their transitions. It shows a chronological sequence of organisms from simple to complex and documents transitional forms.' },
      ],
      hard: [
        { q: 'Punctuated equilibrium theory proposes that:', o: ['Evolution occurs at a constant rate', 'Long periods of stasis are punctuated by rapid speciation events', 'Only gradualism occurs', 'Evolution stopped long ago'], a: 1, s: 'Punctuated equilibrium (Gould & Eldredge): species remain stable (stasis) for long periods, then undergo rapid evolutionary change during speciation. Contrasts with phyletic gradualism (slow, constant change).' },
        { q: 'Sympatric speciation occurs when:', o: ['Populations are geographically isolated', 'New species evolve within the same geographical area', 'Only allopatric mechanisms work', 'There is no reproductive isolation'], a: 1, s: 'Sympatric speciation occurs without geographic isolation — through polyploidy (especially in plants), habitat differentiation, or temporal isolation within the same area. Common in plants via allopolyploidy.' },
        { q: 'Which of the following is an example of pre-zygotic reproductive isolation?', o: ['Hybrid sterility', 'Hybrid inviability', 'Temporal isolation (different breeding seasons)', 'Hybrid breakdown'], a: 2, s: 'Pre-zygotic barriers prevent mating or fertilization: temporal (different timing), habitat (different niches), behavioral (different courtship), mechanical (incompatible structures), gametic isolation. Post-zygotic barriers act after fertilization.' },
        { q: 'The concept of "survival of the fittest" was coined by:', o: ['Charles Darwin', 'Alfred Wallace', 'Herbert Spencer', 'Thomas Huxley'], a: 2, s: 'Herbert Spencer coined "survival of the fittest" after reading Darwin\'s work. Darwin later adopted the phrase in later editions of Origin of Species. It means organisms best adapted to their environment survive and reproduce.' },
        { q: 'Molecular clock hypothesis is based on:', o: ['Rate of morphological change', 'Constant rate of neutral mutations in DNA/protein sequences', 'Fossil dating', 'Rate of speciation'], a: 1, s: 'Molecular clock: neutral DNA/protein mutations accumulate at a roughly constant rate over time. By counting sequence differences between species, divergence time can be estimated (calibrated with fossil dates).' },
      ],
    },
  ],
};

export const botanyChapters: NEETChapterData[] = [
  plantDiversity,
  cellBiology,
  plantPhysiology,
  geneticsEvolution,
];
