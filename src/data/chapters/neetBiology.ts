import { Leaf, Microscope, Bug, Heart, Brain, Dna, TreePine, Sprout } from 'lucide-react';
import type { ChapterData } from '../chapterData';

/* ═══════════════════════════════════════════════════
   NEET BIOLOGY — 34 granular chapter pages
   Botany (17) + Zoology (17)
   ═══════════════════════════════════════════════════ */

export const neetBiologyChapters: ChapterData[] = [

  /* ──────── CLASS 11 BOTANY / DIVERSITY ──────── */
  {
    slug: 'neet-biology-living-world-classification',
    exam: 'NEET', subject: 'Biology', chapter: 'The Living World & Biological Classification',
    icon: TreePine,
    weightage: '3-4%', difficulty: 'Easy', pyqCount: 20,
    description: 'Taxonomy, nomenclature, five kingdoms, and characteristics of living organisms — NCERT-based factual chapter. MindPeak\'s mnemonic-based approach ensures 100% retention for classification.',
    topics: ['Characteristics of Living Organisms', 'Taxonomic Hierarchy', 'Binomial Nomenclature', 'Five Kingdom Classification (Whittaker)', 'Kingdom Monera (Bacteria, Cyanobacteria)', 'Kingdom Protista', 'Kingdom Fungi', 'Viruses, Viroids & Lichens'],
    keyFormulas: ['Taxonomic hierarchy: Kingdom→Phylum→Class→Order→Family→Genus→Species', 'Kings Play Chess On Fine Green Silk (mnemonic)'],
    commonMistakes: ['Confusing Protista and Fungi characteristics', 'Wrong classification of organisms at kingdom level', 'Mixing up archaebacteria and eubacteria examples'],
    faqs: [
      { q: 'How important is Classification for NEET?', a: '3-4% with purely NCERT-based questions. Read NCERT twice, make comparison tables for kingdoms. MindPeak provides colour-coded kingdom comparison charts for quick revision.' },
    ],
  },
  {
    slug: 'neet-biology-animal-kingdom',
    exam: 'NEET', subject: 'Biology', chapter: 'Animal Kingdom',
    icon: Bug,
    weightage: '4-5%', difficulty: 'Moderate', pyqCount: 35,
    description: 'Phylum-wise classification from Porifera to Chordata — one of NEET\'s highest-weightage biology chapters. MindPeak\'s visual phylum comparison and example-based learning makes this vast chapter manageable.',
    topics: ['Basis of Classification (Symmetry, Coelom, Segmentation)', 'Phylum Porifera', 'Phylum Cnidaria', 'Phylum Ctenophora & Platyhelminthes', 'Phylum Aschelminthes (Nematoda)', 'Phylum Annelida', 'Phylum Arthropoda', 'Phylum Mollusca', 'Phylum Echinodermata', 'Phylum Hemichordata & Chordata', 'Classes of Vertebrata'],
    keyFormulas: ['Diploblastic: 2 germ layers (Cnidaria)', 'Triploblastic: 3 germ layers (Platyhelminthes onwards)', 'Acoelomate → Pseudocoelomate → Coelomate'],
    commonMistakes: ['Confusing examples between closely related phyla', 'Wrong type of coelom for different phyla', 'Mixing up characteristics of arthropod classes', 'Wrong classification of borderline organisms'],
    faqs: [
      { q: 'How to remember so many phyla and examples?', a: 'Focus on UNIQUE features: Porifera=pores, Cnidaria=cnidocytes, Annelida=segments, Arthropoda=jointed legs. Learn 3-4 examples per phylum. MindPeak provides visual flashcards with one killer feature per phylum.' },
      { q: 'Which phyla are most tested?', a: 'Arthropoda, Chordata (vertebrate classes), and Annelida are NEET favourites. Focus on characteristic features and common examples from these phyla.' },
    ],
  },
  {
    slug: 'neet-biology-plant-morphology-anatomy',
    exam: 'NEET', subject: 'Biology', chapter: 'Plant Morphology & Anatomy',
    icon: Leaf,
    weightage: '4-5%', difficulty: 'Moderate', pyqCount: 35,
    description: 'Root, stem, leaf morphology plus tissue systems and secondary growth — a diagram-heavy NEET favourite. MindPeak\'s labelled-diagram practice sessions ensure students can identify structures on sight.',
    topics: ['Root System (Tap & Fibrous)', 'Stem Modifications', 'Leaf Morphology & Venation', 'Inflorescence Types', 'Flower Structure & Floral Formula', 'Fruit & Seed Structure', 'Simple & Complex Tissues', 'Meristematic Tissues', 'Anatomy of Dicot & Monocot Root/Stem/Leaf', 'Secondary Growth'],
    keyFormulas: ['Floral formula notation: K(5) C(5) A(5) G(2)', 'Vascular bundle: Xylem (water) + Phloem (food)', 'Open VB: cambium present (dicot), Closed VB: no cambium (monocot)'],
    commonMistakes: ['Confusing dicot and monocot anatomical features', 'Wrong floral formula components', 'Mixing up stem and root modifications', 'Wrong tissue type identification'],
    faqs: [
      { q: 'How to study Plant Anatomy for NEET?', a: 'Draw diagrams — there\'s no shortcut. Draw T.S. of dicot root, monocot root, dicot stem, monocot stem, dicot leaf at least 3 times each. MindPeak provides blank diagram worksheets for active practice.' },
    ],
  },
  {
    slug: 'neet-biology-structural-organisation-animals',
    exam: 'NEET', subject: 'Biology', chapter: 'Structural Organisation in Animals',
    icon: Microscope,
    weightage: '2-3%', difficulty: 'Easy', pyqCount: 18,
    description: 'Epithelial, connective, muscular, and nervous tissues plus organ systems of earthworm, cockroach, and frog. MindPeak\'s diagram-focused approach covers all NCERT figures for quick revision.',
    topics: ['Epithelial Tissue Types', 'Connective Tissue Types', 'Muscular Tissue (Skeletal, Smooth, Cardiac)', 'Nervous Tissue', 'Earthworm Morphology & Anatomy', 'Cockroach Morphology & Anatomy', 'Frog Morphology & Anatomy'],
    keyFormulas: ['4 types of epithelial: squamous, cuboidal, columnar, ciliated', 'Connective: areolar, adipose, tendon, ligament, cartilage, bone, blood'],
    commonMistakes: ['Confusing types of epithelial tissue', 'Wrong organ identification in cockroach anatomy', 'Mixing up tendons (bone-muscle) and ligaments (bone-bone)', 'Wrong tissue type for specific organs'],
    faqs: [
      { q: 'Is Cockroach anatomy important for NEET?', a: 'NCERT has detailed cockroach morphology and anatomy. NEET asks 1-2 questions from this. Focus on Malpighian tubules, tracheal system, and digestive system. MindPeak includes this in diagram-heavy revision sessions.' },
    ],
  },

  /* ──────── CELL BIOLOGY ──────── */
  {
    slug: 'neet-biology-cell-unit-of-life',
    exam: 'NEET', subject: 'Biology', chapter: 'Cell: The Unit of Life',
    icon: Microscope,
    weightage: '4-5%', difficulty: 'Moderate', pyqCount: 35,
    description: 'Cell structure, organelles, prokaryotic vs eukaryotic cells — one of NEET\'s most important foundational chapters. MindPeak\'s organelle-function mapping makes cell biology intuitive and exam-ready.',
    topics: ['Cell Theory', 'Prokaryotic vs Eukaryotic Cells', 'Cell Membrane (Fluid Mosaic Model)', 'Cell Wall', 'Endomembrane System (ER, Golgi, Lysosomes)', 'Mitochondria', 'Plastids (Chloroplast)', 'Ribosomes', 'Cytoskeleton', 'Nucleus & Nucleolus', 'Centrosome & Cilia'],
    keyFormulas: ['Fluid Mosaic Model: Singer & Nicolson (1972)', 'Mitochondria: powerhouse of cell (ATP)', 'ER: Rough (ribosomes) / Smooth (lipid synthesis)', 'Lysosomes: suicidal bags (acid hydrolases)'],
    commonMistakes: ['Confusing functions of smooth vs rough ER', 'Wrong number of membranes (single vs double membrane organelles)', 'Mixing up 70S (prokaryotic) and 80S (eukaryotic) ribosomes', 'Wrong organelle for specific functions'],
    faqs: [
      { q: 'Which organelles are most tested in NEET?', a: 'Mitochondria, chloroplast, ER, Golgi, and lysosomes. Know their structure, function, and membrane type. NCERT diagrams are essential. MindPeak uses organelle comparison tables for systematic revision.' },
    ],
  },
  {
    slug: 'neet-biology-biomolecules',
    exam: 'NEET', subject: 'Biology', chapter: 'Biomolecules',
    icon: Dna,
    weightage: '3-4%', difficulty: 'Moderate', pyqCount: 25,
    description: 'Carbohydrates, proteins, lipids, nucleic acids, and enzymes — the chemistry of life. MindPeak connects biomolecule structure to function for deep understanding beyond rote memorization.',
    topics: ['Carbohydrates (Mono-, Di-, Polysaccharides)', 'Proteins (Amino Acids, Peptide Bond, Protein Structure)', 'Lipids (Fatty Acids, Phospholipids)', 'Nucleic Acids (DNA & RNA Structure)', 'Enzyme Classification & Mechanism', 'Factors Affecting Enzyme Activity', 'Cofactors & Coenzymes', 'Primary & Secondary Metabolites'],
    keyFormulas: ['Protein structure: Primary (1°) → Secondary (2°: α-helix, β-sheet) → Tertiary (3°) → Quaternary (4°)', 'Enzyme: E + S → ES → E + P', 'DNA: A=T (2 H-bonds), G≡C (3 H-bonds)'],
    commonMistakes: ['Confusing reducing and non-reducing sugars', 'Wrong level of protein structure', 'Mixing up competitive and non-competitive inhibition', 'Wrong enzyme classification'],
    faqs: [
      { q: 'Is Biomolecules in Biology different from Chemistry?', a: 'Partially overlapping but Biology focuses on biological function (enzymes, protein structure, metabolic roles) while Chemistry focuses on chemical properties. MindPeak teaches both together for NEET + JEE students.' },
    ],
  },
  {
    slug: 'neet-biology-cell-division',
    exam: 'NEET', subject: 'Biology', chapter: 'Cell Cycle & Cell Division',
    icon: Dna,
    weightage: '4-5%', difficulty: 'Moderate', pyqCount: 30,
    description: 'Mitosis, meiosis, and cell cycle regulation — fundamental to genetics and reproduction. MindPeak teaches cell division with chromosome tracking through every stage for visual clarity.',
    topics: ['Cell Cycle Phases (G1, S, G2, M)', 'Mitosis Stages (PMAT)', 'Cytokinesis', 'Meiosis I & II', 'Crossing Over & Recombination', 'Significance of Mitosis & Meiosis', 'Differences Between Mitosis & Meiosis'],
    keyFormulas: ['Mitosis: 2n → 2n (46 → 46 in humans)', 'Meiosis: 2n → n (46 → 23 in humans)', 'Cell cycle: G1→S (DNA replication)→G2→M', 'Crossing over occurs in Pachytene (Prophase I)'],
    commonMistakes: ['Confusing stages of Prophase I (Leptotene to Diakinesis)', 'Wrong chromosome number after meiosis I vs II', 'Mixing up events of mitosis and meiosis II', 'Forgetting that crossing over produces recombinants'],
    faqs: [
      { q: 'How to differentiate Meiosis I from Meiosis II?', a: 'Meiosis I is reductional (2n→n, homologs separate). Meiosis II is equational (n→n, sister chromatids separate — like mitosis). MindPeak uses chromosome-tracking diagrams through every stage.' },
    ],
  },

  /* ──────── PLANT PHYSIOLOGY ──────── */
  {
    slug: 'neet-biology-transport-in-plants',
    exam: 'NEET', subject: 'Biology', chapter: 'Transport in Plants',
    icon: Sprout,
    weightage: '3-4%', difficulty: 'Moderate', pyqCount: 22,
    description: 'Water potential, osmosis, transpiration, and translocation — the physics of plant life. MindPeak connects these concepts to real-world plant behavior for intuitive understanding.',
    topics: ['Diffusion & Facilitated Diffusion', 'Osmosis & Water Potential', 'Plasmolysis', 'Imbibition', 'Long Distance Transport (Xylem & Phloem)', 'Root Pressure & Transpiration Pull', 'Transpiration (Stomatal, Cuticular, Lenticular)', 'Translocation of Sugars (Münch Hypothesis)', 'Guttation'],
    keyFormulas: ['Ψw = Ψs + Ψp (Water potential)', 'Cohesion-tension theory for ascent of sap', 'Transpiration pull > root pressure for tall trees'],
    commonMistakes: ['Confusing diffusion vs osmosis', 'Wrong water potential calculation', 'Mixing up root pressure and transpiration pull mechanisms', 'Forgetting that translocation is bidirectional in phloem'],
    faqs: [
      { q: 'Is Transport in Plants scoring for NEET?', a: 'Yes — NCERT-based conceptual questions. Focus on water potential, transpiration types, and translocation mechanism. 3-4% with 3-4 hours of preparation.' },
    ],
  },
  {
    slug: 'neet-biology-mineral-nutrition',
    exam: 'NEET', subject: 'Biology', chapter: 'Mineral Nutrition',
    icon: Sprout,
    weightage: '2-3%', difficulty: 'Easy', pyqCount: 15,
    description: 'Essential elements, deficiency symptoms, and nitrogen fixation — NCERT factual chapter. MindPeak covers mineral nutrition with deficiency-symptom association tables for quick recall.',
    topics: ['Essential Macro & Micronutrients', 'Criteria for Essentiality', 'Deficiency Symptoms', 'Hydroponics', 'Nitrogen Cycle', 'Biological Nitrogen Fixation', 'Nitrogenase Enzyme', 'Mycorrhiza & Root Nodules'],
    keyFormulas: ['Macronutrients: C, H, O, N, P, K, Ca, Mg, S', 'Micronutrients: Fe, Mn, Cu, Mo, Zn, B, Cl, Ni', 'N₂ fixation: N₂ + 8H⁺ + 8e⁻ + 16ATP → 2NH₃ + H₂ + 16ADP'],
    commonMistakes: ['Confusing macro and micronutrient deficiency symptoms', 'Wrong element for specific deficiency (e.g., chlorosis)', 'Mixing up symbiotic and free-living nitrogen fixers'],
    faqs: [
      { q: 'How to remember mineral deficiency symptoms?', a: 'Group symptoms: chlorosis (N, Mg, Fe, Mn), necrosis (Ca, Mg), stunted growth (N, P), interveinal chlorosis (Mg, Fe). MindPeak provides a colour-coded deficiency chart.' },
    ],
  },
  {
    slug: 'neet-biology-photosynthesis',
    exam: 'NEET', subject: 'Biology', chapter: 'Photosynthesis in Higher Plants',
    icon: Leaf,
    weightage: '4-6%', difficulty: 'Hard', pyqCount: 35,
    description: 'Light reactions, Calvin cycle, C3/C4/CAM pathways, and photorespiration — one of NEET\'s most conceptually rich biology chapters. MindPeak\'s step-by-step pathway tracing makes photosynthesis logical, not just memorized.',
    topics: ['Photosynthetic Pigments (Chlorophyll a, b, Carotenoids)', 'Light Reactions (Photosystem I & II)', 'Cyclic & Non-Cyclic Photophosphorylation', 'Calvin Cycle (C3 Pathway)', 'C4 Pathway (Hatch-Slack)', 'CAM Pathway', 'Photorespiration', 'Factors Affecting Photosynthesis', 'Chemiosmotic Hypothesis'],
    keyFormulas: ['6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O', 'Light reaction: 12H₂O + 12NADP⁺ + 18ADP → 12NADPH + 18ATP + 6O₂', 'Calvin: 3CO₂ → 1 G3P (uses 9ATP + 6NADPH)', 'RuBisCO: both carboxylase and oxygenase activity'],
    commonMistakes: ['Confusing PSI and PSII (PSII = P680, PSI = P700)', 'Wrong ATP/NADPH ratios in Calvin cycle', 'Mixing up C3 and C4 initial CO₂ acceptors', 'Forgetting that O₂ comes from water, not CO₂'],
    faqs: [
      { q: 'How to remember PSI vs PSII?', a: 'PSII was discovered second but acts first (P680, splits water). PSI acts second (P700, reduces NADP⁺). "Second discovered, first to act." MindPeak uses Z-scheme diagrams that make electron flow crystal clear.' },
      { q: 'Why is C4 pathway important for NEET?', a: 'NEET loves comparing C3 vs C4: (1) initial acceptor (RuBP vs PEP), (2) first product (PGA vs OAA), (3) CO₂ fixation enzyme (RuBisCO vs PEPCase), (4) photorespiration (yes vs minimal). Must-know comparison.' },
    ],
  },
  {
    slug: 'neet-biology-plant-respiration',
    exam: 'NEET', subject: 'Biology', chapter: 'Respiration in Plants',
    icon: Leaf,
    weightage: '3-4%', difficulty: 'Moderate', pyqCount: 22,
    description: 'Glycolysis, Krebs cycle, ETC, and fermentation — the energy currency of cells. MindPeak teaches respiration alongside photosynthesis for a unified understanding of plant metabolism.',
    topics: ['Glycolysis (EMP Pathway)', 'Pyruvate Oxidation', 'TCA / Krebs Cycle', 'Electron Transport Chain & Oxidative Phosphorylation', 'Fermentation (Alcoholic & Lactic Acid)', 'Respiratory Quotient (RQ)', 'Amphibolic Pathways'],
    keyFormulas: ['Glycolysis: Glucose → 2 Pyruvate + 2ATP + 2NADH', 'Krebs: 1 Acetyl CoA → 3NADH + 1FADH₂ + 1GTP + 2CO₂', 'Total ATP per glucose: 36-38 (theoretical)', 'RQ = CO₂ evolved / O₂ consumed'],
    commonMistakes: ['Wrong ATP count for different stages', 'Confusing products of glycolysis vs Krebs cycle', 'Wrong RQ values for different substrates', 'Forgetting that glycolysis occurs in cytoplasm, Krebs in matrix'],
    faqs: [
      { q: 'How is plant respiration different from animal?', a: 'The basic pathway (glycolysis → Krebs → ETC) is the same. Plants also respire — not just photosynthesize! Differences: plants have alternative oxidase pathway, no specialized respiratory organ. MindPeak covers both together.' },
    ],
  },
  {
    slug: 'neet-biology-plant-growth-development',
    exam: 'NEET', subject: 'Biology', chapter: 'Plant Growth & Development',
    icon: Sprout,
    weightage: '3-4%', difficulty: 'Moderate', pyqCount: 22,
    description: 'Plant hormones, photoperiodism, vernalization, and growth phases — concept-based NEET chapter. MindPeak\'s hormone-function table ensures students never confuse auxin, gibberellin, and cytokinin effects.',
    topics: ['Phases of Growth (Meristematic, Elongation, Maturation)', 'Growth Rate & Growth Curves', 'Plant Hormones (Auxin, Gibberellin, Cytokinin, Ethylene, ABA)', 'Photoperiodism (SDP, LDP, DNP)', 'Vernalization', 'Seed Dormancy', 'Phytochrome System'],
    keyFormulas: ['Auxin: cell elongation, apical dominance', 'Gibberellin: stem elongation, bolting', 'Cytokinin: cell division, delay senescence', 'Ethylene: fruit ripening', 'ABA: stress hormone, stomatal closure'],
    commonMistakes: ['Confusing auxin effects with gibberellin effects', 'Wrong hormone for specific plant responses', 'Mixing up short-day and long-day plants', 'Forgetting that phytochrome is the photoperiodism receptor'],
    faqs: [
      { q: 'How to remember all plant hormones?', a: 'Associate each with ONE key function: Auxin=elongation, Gibberellin=growth, Cytokinin=division, Ethylene=ripening, ABA=inhibition. Then learn additional effects. MindPeak provides a 5-hormone comparison chart.' },
    ],
  },

  /* ──────── HUMAN PHYSIOLOGY ──────── */
  {
    slug: 'neet-biology-digestion-absorption',
    exam: 'NEET', subject: 'Biology', chapter: 'Digestion & Absorption',
    icon: Heart,
    weightage: '3-4%', difficulty: 'Moderate', pyqCount: 25,
    description: 'Alimentary canal, digestive glands, enzymes, and absorption — a diagram-intensive NEET topic. MindPeak\'s enzyme-substrate mapping makes digestive physiology systematic and exam-ready.',
    topics: ['Alimentary Canal Structure', 'Digestive Glands (Salivary, Gastric, Pancreatic, Liver)', 'Enzymes & Their Substrates', 'Digestion in Mouth, Stomach, Small Intestine', 'Absorption in Small & Large Intestine', 'Peristalsis', 'Hormonal Control (Gastrin, Secretin, CCK)', 'Disorders (Jaundice, Vomiting, Diarrhoea)'],
    keyFormulas: ['Salivary amylase: starch → maltose (pH 6.8)', 'Pepsin: protein → peptides (pH 1.5-2)', 'Trypsin: proteins → peptides (pH 7.5-8)', 'Bile salts: emulsification of fats'],
    commonMistakes: ['Wrong enzyme-substrate pairing', 'Confusing pH conditions for different enzymes', 'Wrong site of action for pancreatic vs gastric enzymes', 'Mixing up absorption mechanisms'],
    faqs: [
      { q: 'How to remember digestive enzymes?', a: 'Group by organ: Mouth (amylase), Stomach (pepsin, lipase), Pancreas (trypsin, amylase, lipase), Intestine (peptidases, maltase). Know substrate, product, and optimum pH for each. MindPeak provides a digestive enzyme chart organized by location.' },
    ],
  },
  {
    slug: 'neet-biology-breathing-gas-exchange',
    exam: 'NEET', subject: 'Biology', chapter: 'Breathing & Exchange of Gases',
    icon: Heart,
    weightage: '3-4%', difficulty: 'Moderate', pyqCount: 22,
    description: 'Respiratory organs, mechanism of breathing, oxygen transport, and CO₂ transport — NCERT-focused physiology chapter. MindPeak\'s O₂ dissociation curve analysis makes gas exchange concepts clear.',
    topics: ['Respiratory Organs (Human)', 'Mechanism of Breathing (Inspiration & Expiration)', 'Lung Volumes & Capacities', 'Exchange of Gases (Diffusion)', 'Transport of O₂ (Haemoglobin)', 'Oxygen Dissociation Curve', 'Transport of CO₂', 'Regulation of Respiration', 'Disorders (Asthma, Emphysema)'],
    keyFormulas: ['TV = 500 mL, IRV = 2500 mL, ERV = 1000 mL, RV = 1200 mL', 'VC = TV + IRV + ERV = 4000 mL', 'TLC = VC + RV = 5200 mL', 'HbO₂ → Hb + O₂ (at tissues)'],
    commonMistakes: ['Confusing lung volumes and capacities', 'Wrong factors shifting O₂ dissociation curve', 'Mixing up internal and external respiration', 'Wrong partial pressure values'],
    faqs: [
      { q: 'What is the Bohr effect?', a: 'Increased CO₂ / decreased pH shifts O₂ dissociation curve RIGHT → easier O₂ release at tissues. This ensures active tissues (with more CO₂) get more O₂. MindPeak uses animated curve demonstrations.' },
    ],
  },
  {
    slug: 'neet-biology-body-fluids-circulation',
    exam: 'NEET', subject: 'Biology', chapter: 'Body Fluids & Circulation',
    icon: Heart,
    weightage: '4-5%', difficulty: 'Moderate', pyqCount: 30,
    description: 'Blood composition, heart anatomy, cardiac cycle, ECG, and blood groups — a high-yield NEET chapter. MindPeak\'s cardiac cycle timing diagram is the most efficient way to learn this topic.',
    topics: ['Blood Composition (Plasma, RBC, WBC, Platelets)', 'Blood Groups (ABO & Rh)', 'Coagulation of Blood', 'Heart Anatomy (4 Chambers)', 'Cardiac Cycle & Cardiac Output', 'ECG (Electrocardiogram)', 'Double Circulation', 'Blood Pressure (Systolic/Diastolic)', 'Lymphatic System', 'Disorders (Hypertension, CAD)'],
    keyFormulas: ['Cardiac output = Stroke volume × Heart rate', 'Normal BP: 120/80 mmHg', 'ECG: P wave (atrial depolarization), QRS (ventricular), T (ventricular repolarization)', 'Cardiac cycle: 0.8 sec (atrial systole 0.1s, ventricular systole 0.3s, relaxation 0.4s)'],
    commonMistakes: ['Wrong chamber identification in heart anatomy', 'Confusing arteries and veins (function vs structure)', 'Wrong ECG wave interpretation', 'Mixing up ABO blood group antigens and antibodies'],
    faqs: [
      { q: 'How to interpret ECG waves?', a: 'P = atrial contraction, QRS = ventricular contraction, T = ventricular relaxation. Longer QRS = abnormal ventricular conduction. MindPeak teaches ECG reading with real waveform analysis.' },
    ],
  },
  {
    slug: 'neet-biology-excretory-system',
    exam: 'NEET', subject: 'Biology', chapter: 'Excretory Products & Elimination',
    icon: Heart,
    weightage: '3-4%', difficulty: 'Moderate', pyqCount: 25,
    description: 'Kidney structure, nephron types, urine formation, and osmoregulation — diagram-heavy and conceptually important. MindPeak\'s nephron flowchart traces fluid composition from Bowman\'s capsule to collecting duct.',
    topics: ['Modes of Excretion (Ammonotelic, Ureotelic, Uricotelic)', 'Human Excretory System', 'Kidney Structure', 'Nephron Types (Cortical & Juxtamedullary)', 'Urine Formation (Filtration, Reabsorption, Secretion)', 'Counter-Current Mechanism', 'Regulation of Kidney Function (ADH, Aldosterone)', 'Micturition', 'Disorders (Uremia, Kidney Stones)'],
    keyFormulas: ['GFR = 125 mL/min (about 180 L/day)', 'Urine output: ~1.5 L/day (99% reabsorbed)', 'ADH: increases water reabsorption', 'Aldosterone: increases Na⁺ reabsorption'],
    commonMistakes: ['Confusing cortical and juxtamedullary nephron characteristics', 'Wrong order of urine formation steps', 'Mixing up ADH and aldosterone functions', 'Wrong location for different reabsorption processes'],
    faqs: [
      { q: 'How does the counter-current mechanism work?', a: 'Loop of Henle and vasa recta run in opposite directions, maintaining an osmotic gradient in the medulla. This concentrates urine. Juxtamedullary nephrons (with long loops) are key. MindPeak uses animated diagrams showing ion/water movement at each segment.' },
    ],
  },
  {
    slug: 'neet-biology-locomotion-movement',
    exam: 'NEET', subject: 'Biology', chapter: 'Locomotion & Movement',
    icon: Heart,
    weightage: '3-4%', difficulty: 'Moderate', pyqCount: 22,
    description: 'Skeletal system, joints, muscles, and mechanism of contraction — the sliding filament theory is a NEET staple. MindPeak\'s step-by-step contraction sequence makes the molecular mechanism clear.',
    topics: ['Types of Movement', 'Skeletal Muscle Structure', 'Sliding Filament Theory', 'Mechanism of Muscle Contraction', 'Role of Ca²⁺ and ATP', 'Types of Joints (Fibrous, Cartilaginous, Synovial)', 'Axial & Appendicular Skeleton', 'Disorders (Myasthenia Gravis, Osteoporosis, Arthritis)'],
    keyFormulas: ['Sarcomere: Z→M→Z (A band, I band, H zone)', 'Contraction: Ca²⁺ released → Tropomyosin moves → Actin-Myosin cross bridge', 'ATP needed: for cross-bridge cycling AND Ca²⁺ pumping back'],
    commonMistakes: ['Confusing A band and I band changes during contraction', 'Wrong sequence of muscle contraction events', 'Mixing up types of joints with examples', 'Forgetting that A band length doesn\'t change (actin slides)'],
    faqs: [
      { q: 'What changes during muscle contraction?', a: 'I band and H zone DECREASE (actin slides in). A band stays SAME. Sarcomere shortens. Remember: "I Hate Shorter" — I and H get shorter. MindPeak uses before/after sarcomere diagrams.' },
    ],
  },
  {
    slug: 'neet-biology-neural-control',
    exam: 'NEET', subject: 'Biology', chapter: 'Neural Control & Coordination',
    icon: Brain,
    weightage: '4-5%', difficulty: 'Hard', pyqCount: 32,
    description: 'Nervous system, neuron structure, synaptic transmission, brain anatomy, and sensory organs — one of NEET\'s most detailed chapters. MindPeak\'s brain-map diagram covers all regions and functions systematically.',
    topics: ['Neuron Structure & Types', 'Generation of Nerve Impulse', 'Synapse & Synaptic Transmission', 'Central Nervous System (Brain & Spinal Cord)', 'Brain Regions (Cerebrum, Cerebellum, Medulla)', 'Peripheral Nervous System', 'Reflex Arc & Reflex Action', 'Eye Structure & Vision', 'Ear Structure & Hearing/Balance'],
    keyFormulas: ['Resting potential: -70mV', 'Action potential: Na⁺ influx (depolarization) → K⁺ efflux (repolarization)', 'Neurotransmitter: Acetylcholine at NMJ', 'Retina: Rods (dim light) + Cones (colour)'],
    commonMistakes: ['Confusing sympathetic and parasympathetic responses', 'Wrong brain region-function mapping', 'Mixing up rods and cones functions', 'Wrong sequence of nerve impulse generation'],
    faqs: [
      { q: 'How to remember brain regions?', a: 'Cerebrum=thinking, Cerebellum=coordination/balance, Medulla=vital functions (breathing, heartbeat), Hypothalamus=body temperature/hunger/thirst. MindPeak provides a labelled brain diagram with function associations.' },
    ],
  },
  {
    slug: 'neet-biology-chemical-coordination',
    exam: 'NEET', subject: 'Biology', chapter: 'Chemical Coordination & Integration',
    icon: Brain,
    weightage: '4-5%', difficulty: 'Moderate', pyqCount: 30,
    description: 'Endocrine glands, hormones, and their functions — a table-heavy NEET chapter. MindPeak\'s gland-hormone-function mapping table covers all NCERT hormones in one visual reference.',
    topics: ['Endocrine Glands (Pituitary, Thyroid, Parathyroid, Adrenal, Pancreas, Gonads)', 'Hypothalamus & Pituitary Axis', 'Thyroid Hormones (T3, T4)', 'Parathyroid Hormone & Calcitonin', 'Adrenal Hormones (Cortisol, Aldosterone, Adrenaline)', 'Pancreatic Hormones (Insulin & Glucagon)', 'Reproductive Hormones', 'Mechanism of Hormone Action', 'Disorders (Diabetes, Goitre, Cushing\'s)'],
    keyFormulas: ['Insulin: lowers blood glucose', 'Glucagon: raises blood glucose', 'T3/T4: BMR regulation', 'PTH: increases blood Ca²⁺', 'Calcitonin: decreases blood Ca²⁺'],
    commonMistakes: ['Confusing hormones of anterior and posterior pituitary', 'Wrong hormone-disorder association', 'Mixing up cortisol and aldosterone functions', 'Wrong mechanism of action (lipophilic vs hydrophilic hormones)'],
    faqs: [
      { q: 'How many hormones do I need to remember?', a: 'NCERT covers about 30 hormones. Focus on gland → hormone → function → disorder. MindPeak provides a complete hormone table organized by gland that covers all NEET-relevant hormones on one page.' },
    ],
  },

  /* ──────── REPRODUCTION ──────── */
  {
    slug: 'neet-biology-reproduction-organisms',
    exam: 'NEET', subject: 'Biology', chapter: 'Reproduction in Organisms',
    icon: Sprout,
    weightage: '2-3%', difficulty: 'Easy', pyqCount: 15,
    description: 'Asexual and sexual reproduction overview — a short NCERT-based introductory chapter. MindPeak covers this in one session as a prelude to the detailed chapters on plant and human reproduction.',
    topics: ['Asexual Reproduction (Binary Fission, Budding, Fragmentation, Vegetative Propagation)', 'Sexual Reproduction Phases', 'Pre-fertilization Events', 'Fertilization (External & Internal)', 'Post-fertilization Events', 'Parthenogenesis'],
    keyFormulas: ['Asexual: clone (genetically identical)', 'Sexual: involves gamete formation, fusion, meiosis', 'Fertilization types: External (aquatic), Internal (terrestrial)'],
    commonMistakes: ['Confusing types of asexual reproduction with examples', 'Wrong classification of organisms by reproduction type', 'Mixing up vegetative propagation methods'],
    faqs: [
      { q: 'Is this chapter tested directly in NEET?', a: '1-2 direct questions. Focus on types of asexual reproduction and basic sexual reproduction terminology. Quick marks — MindPeak covers it in the overview session before diving into detailed reproduction chapters.' },
    ],
  },
  {
    slug: 'neet-biology-sexual-reproduction-plants',
    exam: 'NEET', subject: 'Biology', chapter: 'Sexual Reproduction in Flowering Plants',
    icon: Sprout,
    weightage: '4-5%', difficulty: 'Moderate', pyqCount: 30,
    description: 'Flower structure, microsporogenesis, megasporogenesis, pollination, and embryo development — a high-yield NEET chapter. MindPeak\'s step-by-step development diagrams make embryology visual and logical.',
    topics: ['Flower Structure (Androecium & Gynoecium)', 'Microsporogenesis & Pollen Grain', 'Megasporogenesis & Embryo Sac', 'Pollination Types (Self, Cross, Agents)', 'Double Fertilization', 'Endosperm Development', 'Embryo Development (Dicot & Monocot)', 'Seed & Fruit Formation', 'Apomixis & Polyembryony'],
    keyFormulas: ['Microspore mother cell (2n) → 4 microspores (n) → pollen grain', 'Megaspore mother cell (2n) → 4 megaspores → 1 survives → 7-celled embryo sac', 'Double fertilization: sperm + egg = zygote (2n), sperm + polar nuclei = endosperm (3n)'],
    commonMistakes: ['Confusing microsporogenesis and megasporogenesis details', 'Wrong ploidy of embryo sac cells', 'Mixing up types of endosperm development', 'Forgetting that double fertilization is unique to angiosperms'],
    faqs: [
      { q: 'What is Double Fertilization?', a: 'Unique to angiosperms: (1) syngamy = sperm + egg → zygote (2n), (2) triple fusion = sperm + 2 polar nuclei → endosperm (3n). Both events occur simultaneously. NEET tests this every year. MindPeak uses animated diagrams.' },
    ],
  },
  {
    slug: 'neet-biology-human-reproduction',
    exam: 'NEET', subject: 'Biology', chapter: 'Human Reproduction',
    icon: Heart,
    weightage: '4-5%', difficulty: 'Moderate', pyqCount: 30,
    description: 'Male and female reproductive systems, gametogenesis, menstrual cycle, and embryonic development — core NEET chapter. MindPeak\'s timeline-based approach to the menstrual cycle makes hormonal changes intuitive.',
    topics: ['Male Reproductive System', 'Female Reproductive System', 'Spermatogenesis', 'Oogenesis', 'Menstrual Cycle (Phases & Hormones)', 'Fertilization & Implantation', 'Embryonic Development', 'Pregnancy & Placenta', 'Parturition & Lactation'],
    keyFormulas: ['Menstrual cycle: 28 days (Menstrual→Follicular→Ovulatory→Luteal)', 'FSH: follicle development, LH surge: ovulation', 'hCG: pregnancy hormone from trophoblast', 'Placenta: produces hCG, hPL, estrogen, progesterone'],
    commonMistakes: ['Confusing FSH and LH functions', 'Wrong phase alignment in menstrual cycle', 'Mixing up spermatogenesis and oogenesis timelines', 'Wrong hormonal sequence during pregnancy'],
    faqs: [
      { q: 'How to master the menstrual cycle?', a: 'Draw the timeline: Day 1-5 (menstruation), 6-13 (follicular, estrogen rises), 14 (LH surge → ovulation), 15-28 (luteal, progesterone rises). If no fertilization → corpus luteum degenerates → cycle repeats. MindPeak uses a 4-phase diagram with hormone curves.' },
    ],
  },
  {
    slug: 'neet-biology-reproductive-health',
    exam: 'NEET', subject: 'Biology', chapter: 'Reproductive Health',
    icon: Heart,
    weightage: '2-3%', difficulty: 'Easy', pyqCount: 15,
    description: 'Contraception, IVF, STDs, and population control — factual NCERT chapter with easy marks. MindPeak covers reproductive health with comparison tables for contraceptive methods.',
    topics: ['Population Explosion & Birth Control', 'Contraceptive Methods (Natural, Barrier, Hormonal, IUD, Surgical)', 'Assisted Reproductive Technologies (IVF, ZIFT, GIFT, ICSI)', 'Sexually Transmitted Diseases', 'Infertility Causes & Solutions'],
    keyFormulas: ['IVF: In Vitro Fertilization (test tube baby)', 'ZIFT: Zygote Intra Fallopian Transfer', 'GIFT: Gamete Intra Fallopian Transfer', 'ICSI: Intracytoplasmic Sperm Injection'],
    commonMistakes: ['Confusing IVF, ZIFT, and GIFT procedures', 'Wrong classification of contraceptive methods', 'Mixing up STD causative agents'],
    faqs: [
      { q: 'Which ART techniques are most tested?', a: 'IVF, ZIFT, and GIFT — know the differences: IVF is fusion outside body + embryo transfer to uterus, ZIFT is zygote to fallopian tube, GIFT is gamete to fallopian tube. NEET asks 1-2 questions on ARTs.' },
    ],
  },

  /* ──────── GENETICS & EVOLUTION ──────── */
  {
    slug: 'neet-biology-inheritance-variation',
    exam: 'NEET', subject: 'Biology', chapter: 'Principles of Inheritance & Variation',
    icon: Dna,
    weightage: '5-7%', difficulty: 'Hard', pyqCount: 40,
    description: 'Mendelian genetics, linkage, sex determination, and genetic disorders — the highest-weightage biology chapter in NEET. MindPeak\'s cross-solving methodology ensures students can solve any genetics problem systematically.',
    topics: ['Mendel\'s Laws (Dominance, Segregation, Independent Assortment)', 'Monohybrid & Dihybrid Crosses', 'Incomplete Dominance & Codominance', 'Multiple Alleles (Blood Groups)', 'Linkage & Recombination', 'Chromosomal Theory of Inheritance', 'Sex Determination (XX-XY, ZW-ZZ)', 'Sex-Linked Inheritance', 'Pedigree Analysis', 'Chromosomal Disorders (Down\'s, Turner\'s, Klinefelter\'s)'],
    keyFormulas: ['Monohybrid: 3:1 (F2)', 'Dihybrid: 9:3:3:1 (F2)', 'Test cross: unknown × recessive', 'Incomplete dominance: 1:2:1', 'Blood groups: Iᴬ Iᴬ or Iᴬ i = A, Iᴮ Iᴮ or Iᴮ i = B, Iᴬ Iᴮ = AB, ii = O'],
    commonMistakes: ['Wrong gamete formation in dihybrid cross', 'Confusing incomplete dominance with codominance', 'Wrong pedigree analysis interpretation', 'Mixing up autosomal and sex-linked inheritance patterns'],
    faqs: [
      { q: 'How to approach pedigree analysis?', a: 'Step 1: Check if trait is dominant or recessive. Step 2: Check if autosomal or sex-linked. Step 3: Assign genotypes. Rules: affected female + unaffected male → can\'t be X-dominant. MindPeak provides a pedigree analysis flowchart.' },
      { q: 'Why is this chapter so high-weightage?', a: '5-7% because genetics is conceptual AND problem-solving. NEET asks numerical crosses, pedigree analysis, and disorder identification. MindPeak dedicates 10+ sessions to build genetics mastery.' },
    ],
  },
  {
    slug: 'neet-biology-molecular-inheritance',
    exam: 'NEET', subject: 'Biology', chapter: 'Molecular Basis of Inheritance',
    icon: Dna,
    weightage: '5-6%', difficulty: 'Hard', pyqCount: 35,
    description: 'DNA structure, replication, transcription, translation, and regulation — the central dogma of molecular biology. MindPeak\'s step-by-step molecular diagrams make gene expression mechanisms crystal clear.',
    topics: ['DNA Structure (Watson-Crick Model)', 'DNA Packaging (Nucleosome)', 'DNA Replication (Semi-Conservative)', 'Transcription (Prokaryotic & Eukaryotic)', 'mRNA Processing (Splicing)', 'Genetic Code Properties', 'Translation (Protein Synthesis)', 'Lac Operon', 'Human Genome Project', 'DNA Fingerprinting'],
    keyFormulas: ['Central dogma: DNA → RNA → Protein', 'Chargaff\'s rule: A=T, G=C', 'Replication: semi-conservative (Meselson-Stahl)', 'Start codon: AUG (Met), Stop: UAA, UAG, UGA', 'Operon: Promoter + Operator + Structural genes'],
    commonMistakes: ['Confusing template and coding strand', 'Wrong direction of replication (leading vs lagging)', 'Mixing up transcription and translation details', 'Wrong lac operon regulation (inducer is allolactose, not lactose)'],
    faqs: [
      { q: 'How to remember the Genetic Code?', a: 'Start with: AUG = start (Met), 3 stops (UAA=Ochre, UAG=Amber, UGA=Opal). Genetic code is universal (few exceptions), non-overlapping, degenerate (multiple codons for same AA), and unambiguous. MindPeak provides a colour-coded codon table.' },
    ],
  },
  {
    slug: 'neet-biology-evolution',
    exam: 'NEET', subject: 'Biology', chapter: 'Evolution',
    icon: Dna,
    weightage: '3-4%', difficulty: 'Moderate', pyqCount: 22,
    description: 'Origin of life, Darwin\'s theory, Hardy-Weinberg principle, and evidence of evolution — a conceptual NEET chapter. MindPeak teaches evolution chronologically for logical understanding.',
    topics: ['Origin of Life (Oparin-Haldane Hypothesis)', 'Miller-Urey Experiment', 'Biological Evolution (Darwin\'s Theory)', 'Natural Selection Types', 'Hardy-Weinberg Principle', 'Genetic Drift & Founder Effect', 'Homologous & Analogous Organs', 'Adaptive Radiation', 'Human Evolution Timeline'],
    keyFormulas: ['Hardy-Weinberg: p² + 2pq + q² = 1 (genotype frequencies)', 'p + q = 1 (allele frequencies)', 'Natural selection: directional, stabilizing, disruptive'],
    commonMistakes: ['Confusing homologous and analogous organs', 'Wrong Hardy-Weinberg equilibrium conditions', 'Mixing up genetic drift and natural selection', 'Wrong timeline of human evolution'],
    faqs: [
      { q: 'How important is Hardy-Weinberg for NEET?', a: 'Numericals on allele/genotype frequency calculation using p²+2pq+q²=1 are tested regularly. Practice 10+ problems. MindPeak includes HW problems in the genetics problem set.' },
    ],
  },

  /* ──────── BIOLOGY IN HUMAN WELFARE ──────── */
  {
    slug: 'neet-biology-human-health-diseases',
    exam: 'NEET', subject: 'Biology', chapter: 'Human Health & Diseases',
    icon: Heart,
    weightage: '4-5%', difficulty: 'Moderate', pyqCount: 30,
    description: 'Diseases, immunity types, AIDS, cancer, and drugs — a factual high-yield NEET chapter. MindPeak\'s disease-pathogen-symptom mapping table covers all NCERT diseases efficiently.',
    topics: ['Common Diseases (Typhoid, Malaria, Amoebiasis, Filariasis, Ascariasis)', 'Pathogen Types (Bacteria, Virus, Protozoa, Helminth)', 'Immunity Types (Innate & Adaptive)', 'Humoral & Cell-Mediated Immunity', 'Vaccination & Immunization', 'AIDS (HIV Life Cycle)', 'Cancer Types & Causes', 'Drugs & Alcohol Abuse'],
    keyFormulas: ['Innate: non-specific, present from birth', 'Adaptive: specific, acquired after exposure', 'B cells → antibodies (humoral)', 'T cells → cell-mediated', 'HIV attacks helper T cells (CD4+)'],
    commonMistakes: ['Wrong pathogen for specific diseases', 'Confusing innate and adaptive immunity components', 'Mixing up active and passive immunity', 'Wrong vector for vector-borne diseases'],
    faqs: [
      { q: 'How to remember all diseases and pathogens?', a: 'Group by pathogen type: Bacterial (typhoid, cholera), Viral (AIDS, dengue), Protozoan (malaria, amoebiasis), Helminth (filariasis, ascariasis). Learn causative organism, symptoms, and vector. MindPeak provides a disease comparison table.' },
    ],
  },
  {
    slug: 'neet-biology-food-production-microbes',
    exam: 'NEET', subject: 'Biology', chapter: 'Food Production & Microbes in Human Welfare',
    icon: Leaf,
    weightage: '3-4%', difficulty: 'Easy', pyqCount: 20,
    description: 'Animal husbandry, plant breeding, biofortification, and industrial microbiology — NCERT factual content with consistent NEET appearances. MindPeak covers this in 2 focused sessions.',
    topics: ['Animal Husbandry (Dairy, Poultry, Fisheries, Apiculture)', 'Plant Breeding Steps', 'Biofortification', 'Single Cell Protein', 'Microbes in Household Products (Curd, Bread, Toddy)', 'Industrial Products (Antibiotics, Chemicals, Enzymes)', 'Biogas Production', 'Sewage Treatment', 'Biocontrol & Biofertilizers'],
    keyFormulas: ['Curd: Lactobacillus', 'Bread: Saccharomyces cerevisiae', 'Penicillin: Penicillium notatum', 'Biogas: Methanobacterium', 'BGA & Rhizobium: biofertilizers'],
    commonMistakes: ['Wrong microorganism for specific products', 'Confusing biocontrol and biofertilizer organisms', 'Mixing up primary and secondary sewage treatment', 'Wrong steps of plant breeding'],
    faqs: [
      { q: 'Are microbe-product associations tested directly?', a: 'Yes — NEET asks "which microorganism produces X" questions. Know: Lactobacillus (curd), Saccharomyces (bread/wine), Penicillium (penicillin), Streptomyces (streptomycin), Methanobacterium (biogas). MindPeak\'s microbe-product chart covers all NCERT associations.' },
    ],
  },

  /* ──────── BIOTECHNOLOGY ──────── */
  {
    slug: 'neet-biology-biotechnology-principles',
    exam: 'NEET', subject: 'Biology', chapter: 'Biotechnology: Principles & Processes',
    icon: Dna,
    weightage: '3-4%', difficulty: 'Hard', pyqCount: 25,
    description: 'Restriction enzymes, vectors, PCR, and gene cloning — the tools of genetic engineering. MindPeak\'s step-by-step gene-cloning workflow makes biotechnology logical and process-oriented.',
    topics: ['Principles of Biotechnology', 'Restriction Enzymes (EcoRI, HindIII)', 'Gel Electrophoresis', 'Cloning Vectors (pBR322, Ti plasmid)', 'Competent Host Cells', 'PCR (Polymerase Chain Reaction)', 'Gene Cloning Steps', 'Selectable Markers (Insertional Inactivation)', 'Bioreactors'],
    keyFormulas: ['Restriction enzymes: recognize palindromic sequences', 'PCR: Denaturation (94°C) → Annealing (55°C) → Extension (72°C)', 'Taq polymerase: thermostable (from Thermus aquaticus)', 'pBR322: ampᴿ and tetᴿ markers'],
    commonMistakes: ['Wrong restriction enzyme recognition sequences', 'Confusing cloning vector features', 'Missing PCR step temperatures', 'Wrong identification of selectable markers'],
    faqs: [
      { q: 'How to understand PCR?', a: 'PCR amplifies DNA in 3 steps: (1) Denature at 94°C (separate strands), (2) Anneal at 55°C (primers bind), (3) Extend at 72°C (Taq polymerase copies). 30 cycles = 2³⁰ copies = ~1 billion copies! MindPeak uses visual PCR animations.' },
    ],
  },
  {
    slug: 'neet-biology-biotechnology-applications',
    exam: 'NEET', subject: 'Biology', chapter: 'Biotechnology & its Applications',
    icon: Dna,
    weightage: '2-3%', difficulty: 'Moderate', pyqCount: 18,
    description: 'Transgenic organisms, gene therapy, Bt cotton, and GMOs — applications of biotechnology concepts. MindPeak connects these to real-world examples for memorable learning.',
    topics: ['Bt Cotton & Bt Toxin Mechanism', 'RNA Interference (RNAi)', 'Gene Therapy (ADA Deficiency)', 'Transgenic Animals', 'Genetically Modified Organisms (GMOs)', 'Biopiracy & Bioethics', 'Golden Rice', 'Insulin Production (rDNA Technology)'],
    keyFormulas: ['Bt toxin: inactive protoxin → active in insect gut (alkaline pH)', 'Gene therapy: introduce functional gene to treat genetic defect', 'ADA deficiency: first gene therapy target', 'Insulin: pro-insulin → A chain + B chain (remove C peptide)'],
    commonMistakes: ['Wrong mechanism of Bt toxin action', 'Confusing gene therapy approaches', 'Mixing up transgenic organism examples', 'Wrong insulin production steps'],
    faqs: [
      { q: 'How does Bt Cotton work?', a: 'Bt gene from Bacillus thuringiensis is inserted into cotton. Plant produces Bt toxin (Cry protein) as inactive protoxin. When insect eats it, alkaline gut pH activates toxin → pores in gut → insect dies. MindPeak explains this with step-by-step mechanism diagrams.' },
    ],
  },

  /* ──────── ECOLOGY ──────── */
  {
    slug: 'neet-biology-organisms-populations',
    exam: 'NEET', subject: 'Biology', chapter: 'Organisms & Populations',
    icon: TreePine,
    weightage: '3-4%', difficulty: 'Moderate', pyqCount: 22,
    description: 'Population attributes, growth models, and species interactions — ecology foundation for NEET. MindPeak connects ecological concepts to real-world examples like lockdown pollution reduction.',
    topics: ['Organism & Environment', 'Abiotic Factors (Temperature, Water, Light, Soil)', 'Adaptations', 'Population Attributes (Density, Birth Rate, Death Rate)', 'Population Growth Models (Exponential & Logistic)', 'Age Structure & Population Pyramids', 'Species Interactions (Mutualism, Competition, Predation, Parasitism, Commensalism, Amensalism)'],
    keyFormulas: ['Exponential: dN/dt = rN', 'Logistic: dN/dt = rN(K-N)/K', 'K = carrying capacity, r = intrinsic rate of increase', 'Population density: N/Area or N/Volume'],
    commonMistakes: ['Confusing exponential and logistic growth curve shapes', 'Wrong species interaction classification', 'Mixing up +/- notation for different interactions', 'Wrong interpretation of age pyramids'],
    faqs: [
      { q: 'How to remember species interactions?', a: 'Use +/-/0 notation: Mutualism (+,+), Competition (-,-), Predation (+,-), Parasitism (+,-), Commensalism (+,0), Amensalism (-,0). MindPeak provides an interaction matrix with examples for each type.' },
    ],
  },
  {
    slug: 'neet-biology-ecosystem',
    exam: 'NEET', subject: 'Biology', chapter: 'Ecosystem',
    icon: TreePine,
    weightage: '3-4%', difficulty: 'Moderate', pyqCount: 22,
    description: 'Energy flow, food chains, ecological pyramids, and biogeochemical cycles — conceptual ecology for NEET. MindPeak uses real ecosystem data to make energy flow calculations meaningful.',
    topics: ['Ecosystem Structure (Biotic & Abiotic)', 'Productivity (GPP, NPP)', 'Energy Flow (10% Rule)', 'Food Chain & Food Web', 'Ecological Pyramids (Number, Biomass, Energy)', 'Ecological Succession (Primary & Secondary)', 'Nutrient Cycling', 'Carbon & Phosphorus Cycles', 'Ecosystem Services'],
    keyFormulas: ['NPP = GPP - Respiration', '10% energy transfer rule (Lindeman)', 'Energy pyramid: always upright', 'Biomass pyramid: inverted in ocean (phytoplankton < zooplankton)', 'Succession: Pioneer → Seral stages → Climax community'],
    commonMistakes: ['Confusing GPP and NPP', 'Wrong pyramid shape for different ecosystems', 'Mixing up primary and secondary succession', 'Wrong nutrient cycle details'],
    faqs: [
      { q: 'What is the 10% rule?', a: 'Only 10% of energy transfers to the next trophic level (Lindeman\'s law). So if producers have 1000 kcal, herbivores get 100, carnivores get 10. This is why food chains rarely exceed 4-5 levels. MindPeak illustrates with energy flow diagrams.' },
    ],
  },
  {
    slug: 'neet-biology-biodiversity-conservation',
    exam: 'NEET', subject: 'Biology', chapter: 'Biodiversity & Conservation',
    icon: TreePine,
    weightage: '3-4%', difficulty: 'Easy', pyqCount: 22,
    description: 'Biodiversity types, threats, hotspots, and conservation strategies — conceptual yet factual NEET chapter. MindPeak covers biodiversity with India-specific examples and case studies.',
    topics: ['Types of Biodiversity (Genetic, Species, Ecological)', 'Patterns of Biodiversity', 'Species-Area Relationship', 'Importance of Biodiversity', 'Loss of Biodiversity (Causes)', 'Biodiversity Hotspots', 'Red Data Book & IUCN', 'Conservation Strategies (In-Situ & Ex-Situ)', 'Biosphere Reserves & National Parks'],
    keyFormulas: ['Species-Area: log S = log C + Z log A', 'Z value: 0.1-0.2 (small area), 0.6-1.2 (large area)', 'India: 4 biodiversity hotspots', 'IUCN categories: Extinct, Endangered, Vulnerable, etc.'],
    commonMistakes: ['Wrong Z value range for species-area relationship', 'Confusing in-situ and ex-situ conservation methods', 'Wrong hotspot locations', 'Mixing up National Park and Wildlife Sanctuary rules'],
    faqs: [
      { q: 'What are India\'s biodiversity hotspots?', a: 'India has 4 hotspots: (1) Western Ghats & Sri Lanka, (2) Indo-Burma, (3) Himalaya, (4) Sundaland. A hotspot has >1500 endemic plant species AND has lost >70% of original habitat. MindPeak covers biodiversity with map-based learning.' },
    ],
  },
  {
    slug: 'neet-biology-environmental-issues',
    exam: 'NEET', subject: 'Biology', chapter: 'Environmental Issues',
    icon: TreePine,
    weightage: '2-3%', difficulty: 'Easy', pyqCount: 15,
    description: 'Pollution, ozone depletion, global warming, and waste management. Note: this chapter was removed from the NEET syllabus in the NCERT rationalisation (2024–25 onward) and is no longer examinable — these notes are retained for board (Class 12) study. MindPeak connects environmental issues to current events for engaging and memorable learning.',
    topics: ['Air Pollution & Control', 'Water Pollution (BOD, Eutrophication)', 'Solid Waste Management', 'Radioactive Waste', 'Greenhouse Effect & Global Warming', 'Ozone Depletion', 'Deforestation', 'Waste Water Treatment', 'Integrated Organic Farming', 'Case Study: Chipko Movement'],
    keyFormulas: ['BOD: Biochemical Oxygen Demand (higher = more polluted)', 'Eutrophication: nutrient enrichment → algal bloom → O₂ depletion', 'Ozone: CFCs → Cl + O₃ → ClO + O₂', 'Greenhouse gases: CO₂, CH₄, N₂O, CFCs'],
    commonMistakes: ['Confusing BOD and COD', 'Wrong greenhouse gas contributions', 'Mixing up primary and secondary pollutants', 'Wrong ozone depletion mechanism details'],
    faqs: [
      { q: 'Is Environmental Issues still in the NEET syllabus?', a: 'No. The chapter was removed in the NCERT rationalisation and is not part of the current NEET syllabus (2024–25 onward). It is retained here for board (Class 12) preparation only. For NEET, redirect your Ecology time to Organisms & Populations, Ecosystem, and Biodiversity & Conservation, which remain examinable and contribute roughly 8–10 questions a year. Always verify against the latest official NMC syllabus.' },
    ],
  },
];
