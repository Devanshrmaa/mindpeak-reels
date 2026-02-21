import type { NEETChapterData } from './types';

/* ═══════════════════════════════════════════════════
   NEET BIOLOGY — ZOOLOGY Practice Questions
   4 chapters, each with 2 topics, each topic with 5 easy / 6 medium / 5 hard
   ═══════════════════════════════════════════════════ */

/* ──── Chapter 1: Animal Diversity & Structural Organisation ──── */
const animalDiversity: NEETChapterData = {
  name: 'Animal Diversity & Structural Organisation',
  slug: 'animal-diversity',
  topics: [
    {
      name: 'Animal Kingdom Classification',
      slug: 'animal-classification',
      easy: [
        { q: 'Which phylum includes organisms with a water vascular system?', o: ['Arthropoda', 'Mollusca', 'Echinodermata', 'Annelida'], a: 2, s: 'Echinodermata (starfish, sea urchins) have a unique water vascular system (ambulacral system) used for locomotion, respiration, and food capture.' },
        { q: 'Insects belong to which phylum?', o: ['Annelida', 'Mollusca', 'Arthropoda', 'Chordata'], a: 2, s: 'Insects are the largest class of phylum Arthropoda. Key features: chitinous exoskeleton, jointed appendages, segmented body (head, thorax, abdomen), 3 pairs of legs, and usually wings.' },
        { q: 'Nematocysts are characteristic of which phylum?', o: ['Porifera', 'Cnidaria (Coelenterata)', 'Platyhelminthes', 'Annelida'], a: 1, s: 'Nematocysts (cnidocysts) are stinging cells unique to Cnidaria (Hydra, jellyfish, corals). They contain a coiled thread that can be discharged to inject toxins for defense and prey capture.' },
        { q: 'Which of the following is a characteristic of chordates?', o: ['Exoskeleton', 'Notochord at some stage of life', 'Radial symmetry', 'Open circulatory system'], a: 1, s: 'All chordates possess a notochord (at least during embryonic development), dorsal hollow nerve cord, pharyngeal gill slits, and post-anal tail. In vertebrates, the notochord is replaced by the vertebral column.' },
        { q: 'Sponges (Porifera) lack:', o: ['Cells', 'Pores', 'True tissues', 'Canal system'], a: 2, s: 'Porifera lack true tissues and organs (they are at the cellular level of organization). They have specialized cells (choanocytes, amoebocytes) but no organized tissue layers.' },
      ],
      medium: [
        { q: 'The coelom of arthropods is called:', o: ['True coelom', 'Pseudocoelom', 'Haemocoel', 'Enterocoelom'], a: 2, s: 'Arthropods have a haemocoel — the body cavity is filled with haemolymph (blood). The true coelom is reduced and modified. Haemocoel is part of their open circulatory system.' },
        { q: 'Bilateral symmetry is first seen in which phylum?', o: ['Cnidaria', 'Platyhelminthes', 'Porifera', 'Echinodermata'], a: 1, s: 'Bilateral symmetry first appears in Platyhelminthes (flatworms). Porifera are asymmetric, Cnidaria show radial symmetry. Echinoderms show radial symmetry as adults but bilateral as larvae.' },
        { q: 'Metamorphosis of a butterfly involves:', o: ['Incomplete metamorphosis', 'Complete metamorphosis (egg → larva → pupa → adult)', 'No metamorphosis', 'Direct development'], a: 1, s: 'Butterflies undergo holometabolous (complete) metamorphosis: egg → larva (caterpillar) → pupa (chrysalis) → adult (imago). Grasshoppers undergo hemimetabolous (incomplete) metamorphosis (no pupa stage).' },
        { q: 'Which class of vertebrates are truly viviparous?', o: ['Reptilia', 'Aves', 'Mammalia', 'Amphibia'], a: 2, s: 'Most mammals are truly viviparous — they give birth to live young nourished through a placenta. Exceptions: monotremes (platypus) are oviparous. Some reptiles and fish show ovoviviparity.' },
        { q: 'Tube feet are characteristic of:', o: ['Annelids', 'Arthropods', 'Echinoderms', 'Molluscs'], a: 2, s: 'Tube feet (podia) are part of the water vascular system unique to echinoderms. They function in locomotion, feeding, and gas exchange, powered by hydraulic pressure.' },
        { q: 'The larval stage of a frog is called:', o: ['Nymph', 'Tadpole', 'Caterpillar', 'Planula'], a: 1, s: 'Frog larvae are tadpoles — aquatic, gill-breathing, with tails for swimming. During metamorphosis, they develop lungs, legs, and absorb the tail to become terrestrial adults (amphibians).' },
      ],
      hard: [
        { q: 'Deuterostomes differ from protostomes in that:', o: ['Blastopore becomes the mouth', 'Blastopore becomes the anus', 'They lack a coelom', 'Cleavage is always spiral'], a: 1, s: 'In deuterostomes (echinoderms, chordates), the blastopore becomes the anus and mouth forms secondarily. In protostomes (annelids, arthropods, molluscs), blastopore becomes the mouth.' },
        { q: 'Which of the following organisms shows bioluminescence?', o: ['Earthworm', 'Ctenophore', 'Leech', 'Tapeworm'], a: 1, s: 'Ctenophores (comb jellies) show bioluminescence — they produce light through luciferin-luciferase biochemical reaction. They are often confused with cnidarians but lack nematocysts.' },
        { q: 'Enterocoelomates are animals whose coelom forms from:', o: ['Splitting of mesoderm (schizocoely)', 'Outpocketing of archenteron (enterocoely)', 'Ectoderm invagination', 'Blastocoel persistence'], a: 1, s: 'In enterocoelomates (deuterostomes: echinoderms, chordates), the coelom forms by outpocketing of the gut (archenteron) — enterocoely. Protostomes form coelom by schizocoely (splitting of mesodermal mass).' },
        { q: 'Torsion is a developmental process unique to:', o: ['Bivalves', 'Gastropods', 'Cephalopods', 'Echinoderms'], a: 1, s: 'Torsion is a 180° twisting of the visceral mass and mantle relative to the head-foot in gastropod larvae. It brings the mantle cavity, gills, and anus forward above the head.' },
        { q: 'The flame cells are excretory structures found in:', o: ['Annelids', 'Platyhelminthes', 'Arthropods', 'Nematodes'], a: 1, s: 'Flame cells (protonephridia) are the excretory organs of Platyhelminthes (flatworms). They have a tuft of beating cilia (resembling a flame) that wafts fluid through tubules for osmoregulation.' },
      ],
    },
    {
      name: 'Human Anatomy Basics',
      slug: 'human-anatomy',
      easy: [
        { q: 'The largest organ of the human body is:', o: ['Liver', 'Skin', 'Brain', 'Lungs'], a: 1, s: 'Skin is the largest organ, covering about 1.5-2 m² in adults. It weighs about 3.6 kg. The liver is the largest internal organ. Skin has three layers: epidermis, dermis, and hypodermis.' },
        { q: 'Red blood cells (RBCs) are produced in:', o: ['Liver', 'Spleen', 'Red bone marrow', 'Lymph nodes'], a: 2, s: 'In adults, RBCs are produced in red bone marrow (hematopoiesis). In the fetus, the liver and spleen also produce blood cells. RBCs live about 120 days before being broken down in the spleen.' },
        { q: 'The basic structural unit of the nervous system is:', o: ['Nephron', 'Neuron', 'Myocyte', 'Hepatocyte'], a: 1, s: 'Neuron is the structural and functional unit of the nervous system. It consists of a cell body (soma), dendrites (receive signals), and an axon (transmits signals). Neurons are excitable cells.' },
        { q: 'How many pairs of ribs are there in humans?', o: ['10', '12', '14', '24'], a: 1, s: '12 pairs of ribs (24 total): 7 true ribs (attached to sternum directly), 3 false ribs (attached indirectly), and 2 floating ribs (not attached to sternum).' },
        { q: 'The functional unit of the kidney is:', o: ['Neuron', 'Nephron', 'Alveolus', 'Villus'], a: 1, s: 'Nephron is the structural and functional unit of the kidney. Each kidney has about 1 million nephrons. Each nephron has a glomerulus, Bowman\'s capsule, tubular system (PCT, loop of Henle, DCT).' },
      ],
      medium: [
        { q: 'Tendons connect:', o: ['Bone to bone', 'Muscle to bone', 'Muscle to muscle', 'Bone to cartilage'], a: 1, s: 'Tendons are dense regular connective tissue connecting skeletal muscle to bone. They are made of parallel collagen fibres (white, inelastic). Ligaments connect bone to bone (slightly elastic).' },
        { q: 'The sinoatrial (SA) node is located in:', o: ['Left atrium', 'Right atrium', 'Left ventricle', 'Right ventricle'], a: 1, s: 'The SA node (pacemaker) is located in the wall of the right atrium near the opening of the superior vena cava. It generates electrical impulses that initiate each heartbeat (~72 bpm).' },
        { q: 'Haversian system is the structural unit of:', o: ['Cartilage', 'Compact bone (osteon)', 'Skeletal muscle', 'Blood'], a: 1, s: 'Haversian system (osteon) is the basic structural unit of compact bone. It consists of concentric lamellae around a central Haversian canal containing blood vessels and nerves, with osteocytes in lacunae.' },
        { q: 'The part of the brain that controls balance and coordination is:', o: ['Cerebrum', 'Cerebellum', 'Medulla oblongata', 'Hypothalamus'], a: 1, s: 'Cerebellum controls balance, coordination, posture, and fine motor movements. It receives input from muscles, joints, and vestibular system. Damage causes ataxia (lack of coordination).' },
        { q: 'Type I alveolar cells function in:', o: ['Surfactant production', 'Gas exchange', 'Phagocytosis', 'Mucus secretion'], a: 1, s: 'Type I alveolar cells (pneumocytes) are thin, flat cells forming the alveolar wall for gas exchange. Type II cells produce surfactant (reduces surface tension). Alveolar macrophages phagocytose pathogens.' },
        { q: 'Peristalsis moves food through the:', o: ['Respiratory tract only', 'Alimentary canal', 'Urinary tract only', 'Blood vessels'], a: 1, s: 'Peristalsis is wave-like contractions of smooth muscle in the alimentary canal (esophagus, stomach, intestines) that push food forward. It is controlled by the enteric nervous system (involuntary).' },
      ],
      hard: [
        { q: 'The juxtaglomerular apparatus (JGA) is formed by:', o: ['PCT and efferent arteriole', 'DCT and afferent arteriole', 'Loop of Henle and collecting duct', 'Bowman\'s capsule and PCT'], a: 1, s: 'JGA is at the junction of DCT and the afferent arteriole of the same nephron. It contains juxtaglomerular cells (secrete renin), macula densa (sense NaCl), and lacis cells. It regulates GFR and blood pressure.' },
        { q: 'The countercurrent mechanism in the kidney is found in:', o: ['Glomerulus', 'Bowman\'s capsule', 'Loop of Henle and vasa recta', 'PCT only'], a: 2, s: 'Countercurrent mechanism operates in the loop of Henle and vasa recta, creating a concentration gradient in the medulla. Descending limb is permeable to water; ascending limb actively pumps out NaCl.' },
        { q: 'Saltatory conduction occurs in:', o: ['All neurons', 'Only myelinated neurons', 'Only unmyelinated neurons', 'Muscle fibres'], a: 1, s: 'Saltatory conduction ("jumping") occurs only in myelinated neurons. Action potentials jump from one node of Ranvier to the next, bypassing myelinated segments. This greatly increases speed (up to 120 m/s vs 1 m/s).' },
        { q: 'Which of the following is NOT a function of the liver?', o: ['Bile production', 'Gluconeogenesis', 'RBC production in adults', 'Detoxification'], a: 2, s: 'In adults, the liver does NOT produce RBCs (that role belongs to red bone marrow). The fetal liver produces RBCs. The adult liver produces bile, stores glycogen, synthesizes proteins, and detoxifies chemicals.' },
        { q: 'The cardiac output is defined as:', o: ['Heart rate × blood pressure', 'Stroke volume × heart rate', 'Blood pressure × blood volume', 'Stroke volume / heart rate'], a: 1, s: 'Cardiac output (CO) = Stroke volume (SV) × Heart rate (HR). Normal CO ≈ 70 mL × 72 bpm ≈ 5 L/min. It represents the total volume of blood pumped by a ventricle per minute.' },
      ],
    },
  ],
};

/* ──── Chapter 2: Human Physiology ──── */
const humanPhysiology: NEETChapterData = {
  name: 'Human Physiology',
  slug: 'human-physiology',
  topics: [
    {
      name: 'Digestion, Breathing & Circulation',
      slug: 'digestion-breathing-circulation',
      easy: [
        { q: 'Hydrochloric acid in the stomach is secreted by:', o: ['Chief cells', 'Parietal (oxyntic) cells', 'Goblet cells', 'G cells'], a: 1, s: 'Parietal (oxyntic) cells of gastric glands secrete HCl (pH ~1.5-2) and intrinsic factor (for vitamin B₁₂ absorption). Chief cells secrete pepsinogen. G cells secrete gastrin hormone.' },
        { q: 'The exchange of gases in the lungs occurs in:', o: ['Bronchi', 'Bronchioles', 'Alveoli', 'Trachea'], a: 2, s: 'Gas exchange occurs across the thin alveolar wall and capillary wall (respiratory membrane). O₂ diffuses from alveoli to blood, CO₂ from blood to alveoli. About 300 million alveoli provide huge surface area.' },
        { q: 'The normal blood pressure for a healthy adult is approximately:', o: ['120/80 mmHg', '140/100 mmHg', '100/60 mmHg', '160/110 mmHg'], a: 0, s: '120/80 mmHg (systolic/diastolic). Systolic = pressure during ventricular contraction. Diastolic = pressure during relaxation. Hypertension: consistently >140/90 mmHg.' },
        { q: 'Trypsin is secreted by:', o: ['Stomach', 'Liver', 'Pancreas (as trypsinogen)', 'Salivary glands'], a: 2, s: 'Trypsinogen (inactive) is secreted by the pancreas. It is activated to trypsin by enterokinase in the duodenum. Trypsin is a protease that digests proteins at pH 7-8.' },
        { q: 'Hemoglobin is found in:', o: ['WBCs', 'Platelets', 'RBCs', 'Plasma'], a: 2, s: 'Hemoglobin is the oxygen-carrying pigment in RBCs. Each RBC contains about 280 million hemoglobin molecules. Each hemoglobin has 4 heme groups, each binding one O₂ molecule.' },
      ],
      medium: [
        { q: 'The correct pathway of air in the respiratory system is:', o: ['Nose → pharynx → larynx → trachea → bronchi → bronchioles → alveoli', 'Nose → larynx → pharynx → trachea → alveoli → bronchi', 'Nose → trachea → pharynx → bronchi → alveoli', 'Nose → pharynx → trachea → larynx → bronchi → alveoli'], a: 0, s: 'Air pathway: Nose → pharynx → larynx (voice box) → trachea (windpipe) → bronchi → bronchioles → alveolar ducts → alveolar sacs → alveoli.' },
        { q: 'The cardiac cycle consists of:', o: ['Atrial systole, ventricular systole, and joint diastole', 'Only systole', 'Only diastole', 'Two systoles only'], a: 0, s: 'Cardiac cycle (0.8 s): atrial systole (0.1 s) → ventricular systole (0.3 s) → joint diastole (0.4 s). During joint diastole, both atria and ventricles relax and heart fills with blood.' },
        { q: 'Bile does NOT contain enzymes but helps in digestion by:', o: ['Killing bacteria', 'Emulsifying fats into smaller droplets', 'Digesting proteins', 'Absorbing water'], a: 1, s: 'Bile salts emulsify large fat globules into smaller micelles, increasing surface area for lipase action. Bile also neutralizes acidic chyme from the stomach and aids in fat-soluble vitamin absorption.' },
        { q: 'Oxygen dissociation curve of hemoglobin is:', o: ['Linear', 'Sigmoidal (S-shaped)', 'Hyperbolic', 'Exponential'], a: 1, s: 'The oxygen-hemoglobin dissociation curve is sigmoidal due to cooperative binding: binding of one O₂ increases affinity for subsequent O₂ molecules (positive cooperativity).' },
        { q: 'Which of the following produces surfactant in the lungs?', o: ['Type I pneumocytes', 'Type II pneumocytes', 'Alveolar macrophages', 'Clara cells'], a: 1, s: 'Type II pneumocytes (great alveolar cells) produce pulmonary surfactant — a phospholipid mixture (mainly DPPC) that reduces surface tension in alveoli, preventing collapse during expiration.' },
        { q: 'The enzyme that initiates digestion of starch in the mouth is:', o: ['Pepsin', 'Trypsin', 'Salivary amylase (ptyalin)', 'Lipase'], a: 2, s: 'Salivary amylase (ptyalin) begins starch digestion in the mouth at pH ~6.8, breaking it into maltose and dextrins. Action stops in the acidic stomach. Pancreatic amylase continues starch digestion in the duodenum.' },
      ],
      hard: [
        { q: 'The Bohr effect describes how:', o: ['Temperature affects O₂ binding', 'Increased CO₂ and H⁺ decrease hemoglobin\'s O₂ affinity', 'Exercise increases lung capacity', 'Altitude affects breathing'], a: 1, s: 'Bohr effect: increased CO₂/H⁺ (lower pH) shifts the O₂ dissociation curve to the right, reducing Hb-O₂ affinity, promoting O₂ release at active tissues. This ensures more O₂ delivery where it is needed most.' },
        { q: 'Chloride shift in blood involves:', o: ['Cl⁻ moving into RBCs as HCO₃⁻ moves out', 'Cl⁻ moving out of RBCs', 'Na⁺ entering RBCs', 'K⁺ leaving RBCs'], a: 0, s: 'Chloride shift (Hamburger phenomenon): CO₂ in RBCs → H₂CO₃ → H⁺ + HCO₃⁻. HCO₃⁻ exits RBCs to plasma via band 3 protein; Cl⁻ enters to maintain electrical neutrality.' },
        { q: 'The migrating myoelectric complex (MMC) in the GI tract:', o: ['Occurs during feeding', 'Is a pattern of smooth muscle contractions during fasting', 'Only occurs in the stomach', 'Is controlled by somatic nerves'], a: 1, s: 'MMC is a cyclical pattern of electromechanical contractions in the GI tract during fasting (interdigestive period), sweeping undigested material and bacteria distally ("intestinal housekeeper"). Regulated by motilin hormone.' },
        { q: 'The Frank-Starling law states that:', o: ['Heart rate is constant', 'Cardiac output increases with increased venous return', 'Blood pressure determines heart rate', 'Stroke volume is fixed'], a: 1, s: 'Frank-Starling law: the greater the stretch of ventricular myocardium (due to increased venous return/preload), the greater the force of contraction and stroke volume. The heart pumps whatever volume it receives.' },
        { q: 'Residual volume of the lung is normally about:', o: ['500 mL', '1200 mL', '3000 mL', '5800 mL'], a: 1, s: 'Residual volume (RV) ≈ 1100-1200 mL — air remaining after maximal expiration. It prevents lung collapse (atelectasis). RV cannot be measured by spirometry; requires body plethysmography or gas dilution.' },
      ],
    },
    {
      name: 'Excretion & Endocrine System',
      slug: 'excretion-endocrine',
      easy: [
        { q: 'The main nitrogenous waste product excreted by humans is:', o: ['Uric acid', 'Ammonia', 'Urea', 'Creatinine'], a: 2, s: 'Humans are ureotelic — they excrete mainly urea (synthesized in the liver via the urea cycle from ammonia). Urea is less toxic than ammonia and requires less water for excretion.' },
        { q: 'Which hormone increases blood glucose levels?', o: ['Insulin', 'Glucagon', 'Melatonin', 'Calcitonin'], a: 1, s: 'Glucagon (from α-cells of islets of Langerhans) increases blood glucose by stimulating glycogenolysis and gluconeogenesis in the liver. It is the hyperglycemic hormone (antagonist of insulin).' },
        { q: 'The master endocrine gland is:', o: ['Thyroid', 'Pituitary gland', 'Pineal gland', 'Adrenal gland'], a: 1, s: 'The pituitary gland (hypophysis) is the master gland because it secretes hormones that control other endocrine glands: TSH → thyroid, ACTH → adrenal cortex, FSH/LH → gonads, GH → growth.' },
        { q: 'Urine is stored in the:', o: ['Kidney', 'Ureter', 'Urinary bladder', 'Urethra'], a: 2, s: 'Urine produced by the kidneys travels through ureters to the urinary bladder, where it is stored until micturition (voiding). The bladder can hold about 300-500 mL of urine.' },
        { q: 'Insulin is produced by:', o: ['α-cells of pancreas', 'β-cells of islets of Langerhans', 'Liver cells', 'Adrenal medulla'], a: 1, s: 'Insulin is produced by β-cells of the islets of Langerhans in the pancreas. It is a hypoglycemic hormone that lowers blood glucose by promoting glucose uptake and glycogen synthesis.' },
      ],
      medium: [
        { q: 'ADH (antidiuretic hormone) acts primarily on:', o: ['Proximal convoluted tubule', 'Distal convoluted tubule and collecting duct', 'Glomerulus', 'Loop of Henle only'], a: 1, s: 'ADH (vasopressin) increases water permeability of DCT and collecting duct by inserting aquaporin-2 channels. This increases water reabsorption, producing concentrated urine. Deficiency → diabetes insipidus.' },
        { q: 'The thyroid gland requires which element for hormone synthesis?', o: ['Calcium', 'Iron', 'Iodine', 'Zinc'], a: 2, s: 'Iodine is essential for synthesis of thyroid hormones T₃ (triiodothyronine) and T₄ (thyroxine). Iodine deficiency causes goitre (thyroid enlargement) and cretinism in children.' },
        { q: 'Aldosterone acts on the kidney to:', o: ['Decrease sodium reabsorption', 'Increase sodium reabsorption and potassium excretion', 'Decrease urine volume', 'Increase GFR'], a: 1, s: 'Aldosterone (mineralocorticoid from adrenal cortex) increases Na⁺ reabsorption and K⁺ secretion in the DCT and collecting duct. This retains water (follows Na⁺), increasing blood volume and pressure.' },
        { q: 'The normal GFR (Glomerular Filtration Rate) is approximately:', o: ['25 mL/min', '125 mL/min', '500 mL/min', '5 mL/min'], a: 1, s: 'GFR ≈ 125 mL/min or 180 L/day. About 99% of filtrate is reabsorbed; only 1-1.5 L is excreted as urine daily. GFR is regulated by JGA and autoregulation.' },
        { q: 'Which hormone is called the "fight or flight" hormone?', o: ['Cortisol', 'Insulin', 'Adrenaline (epinephrine)', 'Thyroxine'], a: 2, s: 'Adrenaline (epinephrine) from adrenal medulla triggers fight-or-flight: increased heart rate, blood pressure, glucose release, bronchodilation, pupil dilation — preparing body for emergency response.' },
        { q: 'Counter-current mechanism in the loop of Henle helps in:', o: ['Reabsorption of glucose', 'Concentration of urine', 'Filtration of blood', 'Secretion of hormones'], a: 1, s: 'The counter-current mechanism between descending and ascending limbs of loop of Henle creates an osmotic gradient in the renal medulla, enabling production of concentrated urine (essential for water conservation).' },
      ],
      hard: [
        { q: 'Renin-Angiotensin-Aldosterone System (RAAS) is activated by:', o: ['High blood pressure', 'Low blood pressure / low Na⁺ at macula densa', 'High glucose levels', 'High potassium levels'], a: 1, s: 'RAAS is activated when JG cells detect low blood pressure or macula densa detects low NaCl: Renin → Angiotensinogen → Angiotensin I → (ACE) → Angiotensin II → vasoconstriction + aldosterone secretion → ↑BP.' },
        { q: 'Atrial natriuretic peptide (ANP) is released when:', o: ['Blood volume is low', 'Blood volume is high (atrial stretch)', 'Blood glucose is high', 'Calcium levels are low'], a: 1, s: 'ANP is released by atrial myocytes when atria are stretched (high blood volume). It inhibits Na⁺ reabsorption, promotes natriuresis and diuresis, vasodilates, and inhibits renin and aldosterone — lowering blood pressure.' },
        { q: 'The hypothalamo-hypophyseal portal system connects:', o: ['Hypothalamus to anterior pituitary', 'Hypothalamus to posterior pituitary', 'Pituitary to thyroid', 'Pituitary to adrenal'], a: 0, s: 'The hypothalamo-hypophyseal portal system carries releasing/inhibiting hormones from hypothalamus directly to anterior pituitary via portal blood vessels, regulating its hormone secretion (GnRH, TRH, CRH, GHRH, etc.).' },
        { q: 'Calcitonin and parathyroid hormone have _____ effects on blood calcium:', o: ['Similar (both increase Ca²⁺)', 'Antagonistic (calcitonin decreases, PTH increases Ca²⁺)', 'No effect on Ca²⁺', 'Synergistic'], a: 1, s: 'Calcitonin (from thyroid C-cells) lowers blood Ca²⁺ by inhibiting osteoclasts and promoting Ca²⁺ deposition in bones. PTH (from parathyroid) raises blood Ca²⁺ by stimulating osteoclasts, renal reabsorption, and vitamin D activation.' },
        { q: 'In the nephron, which segment is impermeable to water?', o: ['Descending limb of Henle', 'Ascending limb of Henle', 'PCT', 'Collecting duct with ADH'], a: 1, s: 'The ascending limb of loop of Henle is impermeable to water but actively transports NaCl out. This creates the medullary osmotic gradient. The descending limb is permeable to water but not to solutes.' },
      ],
    },
  ],
};

/* ──── Chapter 3: Human Reproduction & Health ──── */
const humanReproduction: NEETChapterData = {
  name: 'Human Reproduction & Health',
  slug: 'human-reproduction-health',
  topics: [
    {
      name: 'Reproductive System & Development',
      slug: 'reproduction-development',
      easy: [
        { q: 'Fertilization in humans normally occurs in:', o: ['Uterus', 'Ampulla of fallopian tube', 'Ovary', 'Vagina'], a: 1, s: 'Fertilization typically occurs in the ampullary-isthmic junction of the fallopian tube (oviduct). The zygote then travels to the uterus over 3-4 days, undergoing cleavage divisions.' },
        { q: 'The number of chromosomes in human gametes is:', o: ['46', '23', '44', '22'], a: 1, s: 'Human gametes (sperm and egg) are haploid with 23 chromosomes (22 autosomes + 1 sex chromosome). Somatic cells are diploid with 46 chromosomes (44 autosomes + 2 sex chromosomes).' },
        { q: 'Menstrual cycle in human females is approximately:', o: ['14 days', '28 days', '7 days', '42 days'], a: 1, s: 'The menstrual cycle is approximately 28 days: menstrual phase (days 1-5), follicular phase (days 6-13), ovulation (day 14), luteal phase (days 15-28). Regulated by FSH, LH, estrogen, progesterone.' },
        { q: 'The placenta connects:', o: ['Mother to father', 'Embryo/fetus to uterine wall', 'Two fetuses', 'Ovary to uterus'], a: 1, s: 'Placenta is a temporary organ connecting the developing fetus to the uterine wall. It provides nutrients and O₂, removes wastes, and produces hormones (hCG, hPL, estrogen, progesterone).' },
        { q: 'Which hormone triggers ovulation?', o: ['FSH', 'LH surge', 'Progesterone', 'Prolactin'], a: 1, s: 'A surge of LH (luteinizing hormone) from the anterior pituitary triggers ovulation — rupture of mature Graafian follicle and release of the secondary oocyte on approximately day 14 of the cycle.' },
      ],
      medium: [
        { q: 'Spermatogenesis produces _____ sperms from one primary spermatocyte:', o: ['1', '2', '4', '8'], a: 2, s: 'One primary spermatocyte undergoes meiosis I → 2 secondary spermatocytes → meiosis II → 4 spermatids → spermiogenesis → 4 spermatozoa. In oogenesis, one primary oocyte → 1 egg + 3 polar bodies.' },
        { q: 'The acrosome reaction involves:', o: ['Release of enzymes to penetrate egg coats', 'Midpiece energy production', 'Tail movement', 'Nuclear condensation'], a: 0, s: 'During acrosome reaction, the acrosome (modified Golgi) at the sperm tip releases hydrolytic enzymes (hyaluronidase, acrosin) that digest the corona radiata and zona pellucida of the egg, enabling penetration.' },
        { q: 'Implantation of the blastocyst occurs:', o: ['Immediately after fertilization', 'About 6-7 days after fertilization', 'After 1 month', 'In the fallopian tube'], a: 1, s: 'Implantation occurs about 6-7 days after fertilization. The blastocyst (with trophoblast outer layer) embeds in the endometrium of the posterior uterine wall. Trophoblast cells invade the endometrium.' },
        { q: 'During pregnancy, which hormone maintains the corpus luteum in early stages?', o: ['FSH', 'LH', 'hCG (human chorionic gonadotropin)', 'Oxytocin'], a: 2, s: 'hCG (from trophoblast/placenta) maintains the corpus luteum during early pregnancy (first trimester), ensuring continued progesterone production. After 3 months, the placenta takes over progesterone production. hCG is detected in pregnancy tests.' },
        { q: 'The three germ layers formed during gastrulation are:', o: ['Endoderm, mesoderm, ectoderm', 'Epidermis, dermis, hypodermis', 'Cortex, medulla, pelvis', 'Spongy, compact, cartilage'], a: 0, s: 'Gastrulation forms three germ layers: ectoderm (skin, nervous system), mesoderm (muscles, bones, blood, kidneys), endoderm (gut lining, liver, lungs, thyroid). This is a critical developmental event.' },
        { q: 'Colostrum is important for the newborn because it contains:', o: ['High fat content', 'Antibodies (IgA) for passive immunity', 'Vitamins only', 'Growth hormone'], a: 1, s: 'Colostrum (first milk, 2-3 days postpartum) is rich in IgA antibodies, providing passive immunity to the newborn. It also contains lymphocytes, lactoferrin, and growth factors.' },
      ],
      hard: [
        { q: 'The correct sequence of spermatogenesis is:', o: ['Spermatogonia → spermatids → spermatocytes → spermatozoa', 'Spermatogonia → primary spermatocytes → secondary spermatocytes → spermatids → spermatozoa', 'Spermatids → spermatogonia → spermatocytes → spermatozoa', 'Spermatozoa → spermatids → spermatocytes → spermatogonia'], a: 1, s: 'Spermatogenesis: Spermatogonia (2n, mitosis) → primary spermatocytes (2n, meiosis I) → secondary spermatocytes (n, meiosis II) → spermatids (n) → spermiogenesis → spermatozoa (n). Takes about 74 days.' },
        { q: 'The zona pellucida hardens after fertilization to prevent polyspermy through:', o: ['Cortical reaction', 'Acrosomal reaction', 'Capacitation', 'Sperm chemotaxis'], a: 0, s: 'Cortical reaction: after sperm entry, cortical granules in the egg release enzymes that modify zona pellucida glycoproteins (zona reaction), hardening it and blocking additional sperm (prevents polyspermy).' },
        { q: 'Ectopic pregnancy most commonly occurs in:', o: ['Ovary', 'Fallopian tube', 'Cervix', 'Peritoneal cavity'], a: 1, s: 'Most ectopic pregnancies (~95%) occur in the fallopian tube (tubal pregnancy). The embryo implants outside the uterus, which is dangerous as the tube can rupture, causing life-threatening hemorrhage.' },
        { q: 'Sertoli cells in the testes function to:', o: ['Produce testosterone', 'Nourish and support developing sperm', 'Store sperm', 'Produce LH'], a: 1, s: 'Sertoli cells (nurse/sustentacular cells) in seminiferous tubules nourish developing spermatogenic cells, form the blood-testis barrier, secrete inhibin (negative feedback on FSH), and produce androgen-binding protein.' },
        { q: 'The spiral arteries of the endometrium are important because:', o: ['They supply the myometrium', 'Their constriction causes menstruation', 'They produce hormones', 'They filter blood'], a: 1, s: 'Spiral arteries supply the functional layer of endometrium. At the end of the luteal phase (falling progesterone), they constrict → ischemia → tissue necrosis → menstrual bleeding. They also supply the placenta during pregnancy.' },
      ],
    },
    {
      name: 'Human Health & Immunity',
      slug: 'health-immunity',
      easy: [
        { q: 'Vaccination provides which type of immunity?', o: ['Natural passive', 'Artificial active', 'Natural active', 'Artificial passive'], a: 1, s: 'Vaccination provides artificial active immunity — antigens (weakened/killed pathogens) are introduced, stimulating the immune system to produce antibodies and memory cells for future protection.' },
        { q: 'The causative organism of AIDS is:', o: ['Bacteria', 'HIV (Human Immunodeficiency Virus)', 'Fungus', 'Protozoan'], a: 1, s: 'HIV is a retrovirus (RNA virus) that infects CD4⁺ T helper cells, leading to their progressive depletion. When CD4⁺ count drops below 200/μL, opportunistic infections occur — this stage is AIDS.' },
        { q: 'Antibodies are produced by:', o: ['T cells', 'B cells (plasma cells)', 'Red blood cells', 'Platelets'], a: 1, s: 'B lymphocytes, upon activation, differentiate into plasma cells that produce and secrete antibodies (immunoglobulins). Each antibody is specific to one antigen (antigen-antibody specificity).' },
        { q: 'Malaria is transmitted by:', o: ['Housefly', 'Female Anopheles mosquito', 'Male mosquito', 'Contaminated water'], a: 1, s: 'Malaria is transmitted by the bite of infected female Anopheles mosquito. Plasmodium (protozoan) is injected as sporozoites from mosquito salivary glands into human blood.' },
        { q: 'Which type of immunity is present from birth?', o: ['Acquired immunity', 'Innate (natural) immunity', 'Artificial immunity', 'Adaptive immunity'], a: 1, s: 'Innate immunity is non-specific, present from birth, and provides the first line of defense: skin, mucous membranes, phagocytes, NK cells, complement, interferons. It doesn\'t improve with repeated exposure.' },
      ],
      medium: [
        { q: 'Cell-mediated immunity is primarily carried out by:', o: ['B lymphocytes', 'T lymphocytes', 'Neutrophils', 'Basophils'], a: 1, s: 'T lymphocytes mediate cell-mediated immunity (CMI): cytotoxic T cells kill infected cells, helper T cells activate other immune cells, and memory T cells provide long-term protection. Important against intracellular pathogens and cancer.' },
        { q: 'An autoimmune disease is characterized by:', o: ['Immune system attacking foreign antigens', 'Immune system attacking self-antigens/tissues', 'Weakened immune system', 'Allergic reaction to food'], a: 1, s: 'In autoimmune diseases, the immune system fails to distinguish self from non-self and attacks the body\'s own tissues. Examples: rheumatoid arthritis (joints), Type 1 diabetes (β-cells), lupus (multiple organs).' },
        { q: 'DPT vaccine provides protection against:', o: ['Diphtheria, Plague, Tetanus', 'Diphtheria, Pertussis, Tetanus', 'Dengue, Polio, Typhoid', 'Diphtheria, Pneumonia, Tuberculosis'], a: 1, s: 'DPT/DTaP vaccine provides active immunity against Diphtheria (Corynebacterium), Pertussis/whooping cough (Bordetella pertussis), Tetanus (Clostridium tetani). Given in childhood immunization schedule.' },
        { q: 'Type I hypersensitivity (allergy) is mediated by:', o: ['IgG', 'IgE', 'IgM', 'IgA'], a: 1, s: 'Type I (immediate) hypersensitivity is mediated by IgE antibodies. IgE binds to mast cell receptors; re-exposure to allergen cross-links IgE → mast cell degranulation → histamine release → allergic symptoms.' },
        { q: 'Widal test is used to diagnose:', o: ['Malaria', 'Typhoid fever', 'Tuberculosis', 'AIDS'], a: 1, s: 'Widal test detects antibodies (agglutinins) against Salmonella typhi O and H antigens in patient serum for diagnosis of typhoid fever. A rising titre is significant for diagnosis.' },
        { q: 'Interferons are produced by:', o: ['Only B cells', 'Virus-infected cells (various cell types)', 'Only macrophages', 'Only T cells'], a: 1, s: 'Interferons (IFN-α, β, γ) are cytokines produced by virus-infected cells. They signal neighboring uninfected cells to activate antiviral defenses, inhibiting viral replication. Part of innate immune response.' },
      ],
      hard: [
        { q: 'MHC class I molecules present antigens to:', o: ['B cells', 'CD8⁺ cytotoxic T cells', 'CD4⁺ helper T cells', 'Natural killer cells only'], a: 1, s: 'MHC class I molecules (on all nucleated cells) present intracellular (endogenous) antigens to CD8⁺ cytotoxic T cells. MHC class II (on APCs) present extracellular antigens to CD4⁺ helper T cells.' },
        { q: 'The complement system enhances immunity by:', o: ['Producing antibodies', 'Opsonization, membrane attack complex (MAC), and inflammation', 'Making T cells', 'Producing interferons'], a: 1, s: 'Complement system (C1-C9 proteins) enhances innate and adaptive immunity through: opsonization (C3b coating for phagocytosis), MAC formation (C5b-C9 creates pores in pathogen membranes), and inflammation (C3a, C5a as anaphylatoxins).' },
        { q: 'Passive immunity differs from active immunity in that:', o: ['It involves memory cells', 'It provides immediate but temporary protection without memory', 'It lasts longer than active immunity', 'It requires antigen exposure'], a: 1, s: 'Passive immunity involves transfer of pre-formed antibodies (no active immune response by recipient). It provides immediate protection but is temporary (weeks). No memory cells are formed. Examples: maternal IgG, antiserum injection.' },
        { q: 'The life cycle of Plasmodium in humans involves:', o: ['Only asexual reproduction', 'Only sexual reproduction', 'Asexual reproduction (schizogony) in liver and blood', 'Sexual reproduction in blood'], a: 2, s: 'In humans, Plasmodium undergoes asexual reproduction: liver schizogony (in hepatocytes) and erythrocytic schizogony (in RBCs). Sexual reproduction (gamogony and sporogony) occurs in the mosquito vector.' },
        { q: 'Clonal selection theory states that:', o: ['All T cells are identical', 'Each lymphocyte has a specific receptor; antigen selects and expands that specific clone', 'Antigens create new receptors', 'Only macrophages respond to antigens'], a: 1, s: 'Clonal selection theory: each lymphocyte (B/T cell) pre-exists with a unique receptor. When an antigen binds its matching receptor, that specific lymphocyte is selected, activated, and clonally expanded (proliferates) to mount a specific response.' },
      ],
    },
  ],
};

/* ──── Chapter 4: Ecology & Environment ──── */
const ecology: NEETChapterData = {
  name: 'Ecology & Environment',
  slug: 'ecology-environment',
  topics: [
    {
      name: 'Ecosystem & Biodiversity',
      slug: 'ecosystem-biodiversity',
      easy: [
        { q: 'The 10% law of energy transfer was given by:', o: ['Odum', 'Lindeman', 'Tansley', 'Haeckel'], a: 1, s: 'Lindeman (1942) proposed the 10% law: only about 10% of energy is transferred from one trophic level to the next. The remaining 90% is lost as heat through respiration at each level.' },
        { q: 'Primary producers in most ecosystems are:', o: ['Herbivores', 'Decomposers', 'Green plants (autotrophs)', 'Carnivores'], a: 2, s: 'Primary producers (autotrophs) use photosynthesis to convert inorganic carbon (CO₂) to organic molecules. They form the base of the food chain. In aquatic ecosystems, phytoplankton are primary producers.' },
        { q: 'The number of individuals per unit area is called:', o: ['Biomass', 'Population density', 'Standing crop', 'Carrying capacity'], a: 1, s: 'Population density = number of individuals per unit area (or volume). It can be measured by direct counting, quadrat methods, or mark-recapture methods.' },
        { q: 'Which of the following is a greenhouse gas?', o: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'], a: 2, s: 'CO₂ is a major greenhouse gas that absorbs and re-emits infrared radiation, trapping heat in the atmosphere. Other GHGs: methane (CH₄), N₂O, CFCs, water vapor.' },
        { q: 'Decomposers are also called:', o: ['Producers', 'Consumers', 'Saprotrophs', 'Autotrophs'], a: 2, s: 'Decomposers (saprotrophs/saprophytes) break down dead organic matter, recycling nutrients back to the ecosystem. Examples: bacteria and fungi. They are essential for nutrient cycling.' },
      ],
      medium: [
        { q: 'An ecological pyramid that is always upright is the pyramid of:', o: ['Numbers', 'Biomass', 'Energy', 'All of the above'], a: 2, s: 'The pyramid of energy is always upright because energy decreases at each trophic level (10% law). Pyramids of numbers and biomass can be inverted (e.g., tree ecosystem for numbers, aquatic for biomass).' },
        { q: 'The term "ecosystem" was coined by:', o: ['Odum', 'Tansley', 'Haeckel', 'Warming'], a: 1, s: 'A.G. Tansley (1935) coined the term "ecosystem" — a functional unit of nature comprising living organisms (biotic community) and their non-living environment (abiotic factors) interacting as a system.' },
        { q: 'Eutrophication is caused by:', o: ['Deforestation', 'Excess nutrients (N, P) leading to algal bloom', 'Acid rain', 'UV radiation'], a: 1, s: 'Eutrophication: excessive nutrients (nitrogen, phosphorus from fertilizers/sewage) in water bodies → algal bloom → algal death → bacterial decomposition → O₂ depletion → fish kills. Creates dead zones.' },
        { q: 'In ecological succession, the first colonizers are called:', o: ['Climax community', 'Pioneer species', 'Seral community', 'Apex predators'], a: 1, s: 'Pioneer species are the first organisms to colonize a bare/disturbed area (primary succession). Examples: lichens and mosses on rocks. They modify the habitat, making it suitable for later species.' },
        { q: 'Biomagnification refers to:', o: ['Increase in population size', 'Increasing concentration of toxins at higher trophic levels', 'Increase in biomass', 'Growth of organisms'], a: 1, s: 'Biomagnification: non-biodegradable toxins (DDT, heavy metals, PCBs) accumulate and increase in concentration at each successive trophic level. Top predators have highest concentrations.' },
        { q: 'The ozone layer is primarily found in the:', o: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'], a: 1, s: 'The ozone layer (O₃) is concentrated in the stratosphere (15-35 km altitude). It absorbs harmful UV-B and UV-C radiation from the sun, protecting life on Earth. CFCs cause ozone depletion.' },
      ],
      hard: [
        { q: 'The species-area relationship is expressed as:', o: ['S = CA^z (log S = log C + z log A)', 'S = A/C', 'S = A × z', 'S = log A only'], a: 0, s: 'Species-area relationship (Alexander von Humboldt): log S = log C + z × log A, or S = CA^z. S = species richness, A = area, C = y-intercept, z = regression coefficient (slope, typically 0.1-0.3 for continental areas).' },
        { q: 'Net primary productivity (NPP) equals:', o: ['GPP + Respiration', 'GPP − Respiration', 'Respiration only', 'GPP × Respiration'], a: 1, s: 'NPP = GPP − R. Gross Primary Productivity (GPP) is total carbon fixed by photosynthesis. Net Primary Productivity is what remains after subtracting autotrophic respiration. NPP is available for consumers.' },
        { q: 'The Red Queen hypothesis explains:', o: ['Why species go extinct', 'Why species must continuously evolve to maintain fitness relative to co-evolving species', 'Why invasive species succeed', 'Why mutations are random'], a: 1, s: 'Red Queen hypothesis (Van Valen): species must continuously adapt and evolve not just to gain advantage but to maintain their fitness relative to other co-evolving organisms (like predator-prey arms race). "It takes all the running you can do, to keep in the same place."' },
        { q: 'In the carbon cycle, the largest reservoir of carbon is:', o: ['Atmosphere', 'Oceans (dissolved inorganic carbon + sediments)', 'Living organisms', 'Fossil fuels'], a: 1, s: 'The oceans are the largest active carbon reservoir (~38,000 Gt C as dissolved inorganic carbon). Sedimentary rocks hold even more (long-term reservoir). Atmosphere has ~800 Gt C. Living biomass ~550 Gt C.' },
        { q: 'Keystone species are important because:', o: ['They are the most abundant', 'Their removal causes disproportionate changes in ecosystem structure', 'They are always top predators', 'They are pioneer species'], a: 1, s: 'Keystone species have a disproportionately large effect on their ecosystem relative to their abundance. Their removal causes significant changes in biodiversity and ecosystem function. Example: sea otters, wolves in Yellowstone.' },
      ],
    },
    {
      name: 'Environmental Issues & Conservation',
      slug: 'environment-conservation',
      easy: [
        { q: 'The Montreal Protocol addresses:', o: ['Climate change', 'Ozone layer depletion (CFC reduction)', 'Biodiversity loss', 'Water pollution'], a: 1, s: 'Montreal Protocol (1987) is an international treaty to phase out ozone-depleting substances (ODS) like CFCs, halons, and carbon tetrachloride. It is considered the most successful environmental treaty.' },
        { q: 'Ex-situ conservation includes:', o: ['National parks', 'Wildlife sanctuaries', 'Zoos and botanical gardens', 'Biosphere reserves'], a: 2, s: 'Ex-situ conservation: protecting species outside their natural habitat — zoos, botanical gardens, seed banks (e.g., Svalbard), captive breeding. In-situ conservation: national parks, sanctuaries, biosphere reserves.' },
        { q: 'Which of the following is a biodiversity hotspot in India?', o: ['Thar Desert', 'Western Ghats', 'Indo-Gangetic plain', 'Deccan Plateau'], a: 1, s: 'Western Ghats is one of 36 global biodiversity hotspots. A hotspot must have ≥1500 endemic plant species and have lost ≥70% of original habitat. India has 4 hotspots: Western Ghats, Himalayas, Indo-Burma, Sundaland.' },
        { q: 'BOD (Biochemical Oxygen Demand) is a measure of:', o: ['Air pollution', 'Organic pollution in water', 'Soil fertility', 'Noise intensity'], a: 1, s: 'BOD measures the amount of O₂ consumed by microorganisms to decompose organic matter in water. High BOD indicates high organic pollution (sewage, industrial waste). Clean water: BOD < 5 mg/L.' },
        { q: 'Deforestation leads to:', o: ['Increased biodiversity', 'Soil erosion and loss of habitat', 'Decreased CO₂ levels', 'Increased rainfall'], a: 1, s: 'Deforestation causes: soil erosion, loss of biodiversity and habitat, increased CO₂ (less carbon fixation), desertification, disrupted water cycle, and climate change.' },
      ],
      medium: [
        { q: 'The Kyoto Protocol (1997) aimed to reduce:', o: ['Ozone-depleting substances', 'Greenhouse gas emissions', 'Plastic waste', 'Nuclear waste'], a: 1, s: 'Kyoto Protocol set binding targets for industrialized countries to reduce greenhouse gas emissions (CO₂, CH₄, N₂O, HFCs, PFCs, SF₆) by about 5% below 1990 levels during 2008-2012.' },
        { q: 'Biological magnification of DDT is highest in:', o: ['Primary producers', 'Primary consumers', 'Secondary consumers', 'Top-level carnivores'], a: 3, s: 'Non-biodegradable pesticides like DDT undergo biomagnification — concentration increases at each trophic level. Highest concentration is in top-level carnivores (e.g., raptors). This caused eggshell thinning in birds of prey.' },
        { q: 'IUCN Red List categories for threatened species include:', o: ['Common, Rare, Abundant', 'Vulnerable (VU), Endangered (EN), Critically Endangered (CR)', 'Type I, II, III', 'Alpha, Beta, Gamma'], a: 1, s: 'IUCN Red List threat categories (in order): Least Concern → Near Threatened → Vulnerable (VU) → Endangered (EN) → Critically Endangered (CR) → Extinct in the Wild → Extinct.' },
        { q: 'Integrated pest management (IPM) involves:', o: ['Using only chemical pesticides', 'Combining biological, cultural, and minimal chemical control methods', 'Using only genetic modification', 'Ignoring pest damage'], a: 1, s: 'IPM combines biological control (predators, parasitoids), cultural practices (crop rotation), mechanical methods (traps), and judicious chemical use as a last resort. It minimizes environmental damage and pesticide resistance.' },
        { q: 'Acid rain has pH less than:', o: ['7.0', '5.6', '6.5', '4.0'], a: 1, s: 'Normal rain has pH ~5.6 (slightly acidic due to dissolved CO₂). Acid rain has pH < 5.6, caused by SO₂ and NOₓ from fossil fuel combustion forming H₂SO₄ and HNO₃. It damages aquatic ecosystems, soil, and buildings.' },
        { q: 'Sacred groves are an example of:', o: ['Ex-situ conservation', 'In-situ conservation by local communities', 'Biosphere reserves', 'Captive breeding'], a: 1, s: 'Sacred groves are forest patches protected by local communities for religious/cultural reasons. They are examples of community-based in-situ conservation and preserve unique biodiversity.' },
      ],
      hard: [
        { q: 'The concept of biodiversity was popularized by:', o: ['Charles Darwin', 'Edward O. Wilson', 'Rachel Carson', 'Paul Ehrlich'], a: 1, s: 'Edward O. Wilson (1988) popularized the term "biodiversity" and is often called the "father of biodiversity." Rachel Carson\'s "Silent Spring" (1962) highlighted pesticide dangers. Ehrlich studied population ecology.' },
        { q: 'Rivet popper hypothesis by Paul Ehrlich compares species loss in an ecosystem to:', o: ['Removing rivets from an airplane wing', 'Cutting branches of a tree', 'Removing bricks from a wall', 'Draining water from a lake'], a: 0, s: 'Rivet popper hypothesis: losing species is like popping rivets from an airplane wing — initially no apparent effect, but beyond a threshold, the wing (ecosystem) collapses. Each species plays a role in ecosystem integrity.' },
        { q: 'Bioremediation uses:', o: ['Chemicals to clean pollutants', 'Microorganisms to degrade/detoxify pollutants', 'Physical methods (filtering)', 'Thermal treatment'], a: 1, s: 'Bioremediation uses living organisms (bacteria, fungi, plants) to detoxify or remove pollutants from contaminated environments. Examples: Pseudomonas for oil spills, phytoremediation using plants for heavy metals.' },
        { q: 'Chipko movement (1973) was related to:', o: ['Wildlife protection', 'Forest conservation (preventing tree felling)', 'Water conservation', 'Air pollution'], a: 1, s: 'Chipko movement was a forest conservation movement in Garhwal Himalayas (1973) where villagers hugged trees to prevent commercial felling. Led by Sunderlal Bahuguna and others. "Chipko" means "to embrace/hug."' },
        { q: 'The Ramsar Convention deals with:', o: ['Endangered species trade', 'Conservation of wetlands of international importance', 'Climate change', 'Marine pollution'], a: 1, s: 'Ramsar Convention (1971, Iran) is an international treaty for conservation and sustainable use of wetlands. India has 75+ Ramsar sites including Chilika Lake, Keoladeo, Loktak Lake, and Sambhar Lake.' },
      ],
    },
  ],
};

export const zoologyChapters: NEETChapterData[] = [
  animalDiversity,
  humanPhysiology,
  humanReproduction,
  ecology,
];
