import type { NEETChapterData } from './types';

/* ═══════════════════════════════════════════════════
   NEET BIOLOGY — BOTANY Expansion (4 new chapters)
   ═══════════════════════════════════════════════════ */

const photosynthesis: NEETChapterData = {
  name: 'Photosynthesis in Higher Plants',
  slug: 'photosynthesis',
  topics: [
    {
      name: 'Light Reactions & Photosystems',
      slug: 'light-reactions',
      easy: [
        { q: 'Photosynthesis takes place in which organelle?', o: ['Mitochondria', 'Chloroplast', 'Ribosome', 'Nucleus'], a: 1, s: 'Photosynthesis occurs in chloroplasts, specifically in the thylakoid membranes (light reactions) and stroma (Calvin cycle).' },
        { q: 'The oxygen released during photosynthesis comes from:', o: ['CO₂', 'H₂O', 'Glucose', 'Chlorophyll'], a: 1, s: 'Oxygen is released from the photolysis (splitting) of water molecules during the light reactions. This was proved by Ruben and Kamen using ¹⁸O-labeled water.' },
        { q: 'Which pigment is essential for photosynthesis?', o: ['Xanthophyll', 'Carotenoid', 'Chlorophyll a', 'Phycocyanin'], a: 2, s: 'Chlorophyll a is the primary photosynthetic pigment and the reaction centre pigment. All other pigments (chlorophyll b, carotenoids, xanthophylls) are accessory pigments.' },
        { q: 'PS-I has a reaction centre with absorption peak at:', o: ['680 nm', '700 nm', '660 nm', '720 nm'], a: 1, s: 'PS-I reaction centre is P700 (absorbs at 700 nm). PS-II reaction centre is P680 (absorbs at 680 nm). PS-II is involved in water splitting.' },
        { q: 'The site of light reactions in chloroplast is:', o: ['Stroma', 'Thylakoid membrane', 'Outer membrane', 'Inner membrane'], a: 1, s: 'Light reactions occur in the thylakoid membrane where photosystems, electron transport chain, and ATP synthase are located.' },
      ],
      medium: [
        { q: 'Non-cyclic photophosphorylation produces:', o: ['ATP only', 'NADPH only', 'Both ATP and NADPH', 'Neither'], a: 2, s: 'Non-cyclic photophosphorylation involves both PS-I and PS-II. It produces ATP (via chemiosmosis), NADPH (terminal electron acceptor NADP⁺), and O₂ (from water splitting).' },
        { q: 'In the Z-scheme, the first electron donor is:', o: ['NADPH', 'Water', 'Ferredoxin', 'Plastocyanin'], a: 1, s: 'Water is the first electron donor — it is split by the oxygen-evolving complex of PS-II, releasing electrons, H⁺ ions, and O₂. The electrons replace those lost by P680.' },
        { q: 'Chemiosmosis in chloroplasts is driven by:', o: ['NADPH gradient', 'Proton gradient across thylakoid membrane', 'Oxygen gradient', 'ATP gradient'], a: 1, s: 'H⁺ ions accumulate inside the thylakoid lumen during water splitting and electron transport. This proton gradient drives ATP synthesis through ATP synthase (CF₀-CF₁ complex).' },
        { q: 'Which molecule is the terminal electron acceptor in PS-I?', o: ['O₂', 'NADP⁺', 'Cytochrome', 'Water'], a: 1, s: 'NADP⁺ is reduced to NADPH by the enzyme NADP reductase, accepting electrons from ferredoxin at the end of the PS-I electron transport chain.' },
        { q: 'Cyclic photophosphorylation involves:', o: ['PS-I and PS-II', 'Only PS-I', 'Only PS-II', 'Neither'], a: 1, s: 'Cyclic photophosphorylation involves only PS-I. Electrons from PS-I return to it via cytochrome b6f complex, generating only ATP (no NADPH, no O₂). Important when more ATP is needed.' },
      ],
      hard: [
        { q: 'The quantum yield of photosynthesis is approximately:', o: ['1/8', '1/4', '1/2', '1/16'], a: 0, s: 'Quantum yield = O₂ evolved per photon absorbed ≈ 1/8. Minimum 8 photons (4 per photosystem × 2 photosystems) are needed to fix one CO₂ and release one O₂ (Emerson & Arnold).' },
        { q: 'Emerson enhancement effect demonstrates:', o: ['One photosystem is enough', 'Two photosystems work in series', 'Light is not needed for photosynthesis', 'O₂ inhibits photosynthesis'], a: 1, s: 'Emerson showed that red light (>680 nm, PS-I) + far-red light together give a higher photosynthesis rate than the sum of individual rates — proving two photosystems work cooperatively.' },
        { q: 'In C₃ plants, the first stable product of CO₂ fixation is:', o: ['Oxaloacetate (OAA)', '3-phosphoglyceric acid (3-PGA)', 'Ribulose bisphosphate', 'Phosphoenolpyruvate'], a: 1, s: 'In the Calvin cycle, CO₂ is fixed by RuBisCO onto RuBP (5C) to form an unstable 6C compound that immediately splits into two molecules of 3-PGA (3C) — the first stable product.' },
        { q: 'The oxygen-evolving complex contains which metal ion?', o: ['Iron', 'Magnesium', 'Manganese', 'Copper'], a: 2, s: 'The oxygen-evolving complex (OEC) of PS-II contains a Mn₄CaO₅ cluster (4 manganese atoms + 1 calcium). It catalyzes the oxidation of 2H₂O → O₂ + 4H⁺ + 4e⁻ (Kok cycle).' },
        { q: 'If CO₂ is completely removed from the atmosphere, which Calvin cycle intermediate will accumulate?', o: ['3-PGA', 'G3P', 'RuBP', 'NADPH'], a: 2, s: 'Without CO₂, RuBisCO cannot fix CO₂ onto RuBP. RuBP continues to be regenerated but is not consumed, so it accumulates. 3-PGA formation stops, so G3P also decreases.' },
      ],
    },
    {
      name: 'Calvin Cycle & C₄ Pathway',
      slug: 'calvin-cycle-c4',
      easy: [
        { q: 'The Calvin cycle occurs in:', o: ['Thylakoids', 'Stroma', 'Cytoplasm', 'Nucleus'], a: 1, s: 'The Calvin cycle (dark reactions/light-independent reactions) occurs in the stroma of the chloroplast where RuBisCO and other enzymes are present.' },
        { q: 'RuBisCO stands for:', o: ['Ribulose bisphosphate carboxylase-oxygenase', 'Ribose biphosphate carboxylase', 'Ribulose monophosphate oxidase', 'Ribose carboxylase'], a: 0, s: 'RuBisCO (Ribulose-1,5-bisphosphate carboxylase/oxygenase) is the most abundant enzyme on Earth. It catalyzes both carboxylation (Calvin cycle) and oxygenation (photorespiration).' },
        { q: 'C₄ plants fix CO₂ first into a:', o: ['3-carbon compound', '4-carbon compound', '5-carbon compound', '6-carbon compound'], a: 1, s: 'In C₄ plants, CO₂ is first fixed by PEP carboxylase in mesophyll cells to form OAA (oxaloacetate, a 4C compound), which is then converted to malate or aspartate.' },
        { q: 'Which of the following is a C₄ plant?', o: ['Rice', 'Wheat', 'Sugarcane', 'Potato'], a: 2, s: 'Sugarcane, maize, sorghum, and many tropical grasses are C₄ plants. They have Kranz anatomy and show no photorespiration. Rice, wheat, and potato are C₃ plants.' },
        { q: 'How many turns of the Calvin cycle are needed to produce one glucose?', o: ['3', '6', '12', '1'], a: 1, s: 'Each turn fixes 1 CO₂. Glucose (C₆H₁₂O₆) requires 6 CO₂, so 6 turns. Each turn uses 3 ATP + 2 NADPH. Total: 18 ATP + 12 NADPH for one glucose.' },
      ],
      medium: [
        { q: 'Kranz anatomy is characteristic of:', o: ['C₃ plants', 'C₄ plants', 'CAM plants', 'All plants'], a: 1, s: 'Kranz anatomy (wreath-like arrangement) features large bundle sheath cells with thick walls and chloroplasts surrounding the vascular bundles. Found in C₄ plants for spatial separation of CO₂ fixation.' },
        { q: 'Photorespiration is absent in C₄ plants because:', o: ['They lack RuBisCO', 'CO₂ concentration is high in bundle sheath cells', 'They fix CO₂ at night', 'They have no chloroplasts'], a: 1, s: 'C₄ plants use PEP carboxylase (no oxygenase activity) in mesophyll cells to concentrate CO₂ in bundle sheath cells. High CO₂ concentration suppresses RuBisCO\'s oxygenase activity.' },
        { q: 'In CAM plants, CO₂ fixation occurs:', o: ['During the day only', 'At night only', 'At night (initial fixation) and during the day (Calvin cycle)', 'Continuously'], a: 2, s: 'CAM plants (e.g., cacti, pineapple) open stomata at night to fix CO₂ into malate (stored in vacuoles). During the day, stomata close, malate releases CO₂ for the Calvin cycle — temporal separation.' },
        { q: 'The enzyme responsible for CO₂ fixation in C₄ mesophyll cells is:', o: ['RuBisCO', 'PEP carboxylase', 'Pyruvate kinase', 'Hexokinase'], a: 1, s: 'PEP carboxylase (PEPcase) in mesophyll cells fixes CO₂ onto PEP to form OAA. PEPcase has high affinity for CO₂ and no oxygenase activity, making it efficient even at low CO₂.' },
        { q: 'Photorespiration is also called:', o: ['C₂ cycle', 'C₃ cycle', 'Hatch-Slack pathway', 'TCA cycle'], a: 0, s: 'Photorespiration is called the C₂ cycle because it produces phosphoglycolate (2C). It involves chloroplast, peroxisome, and mitochondria. It wastes fixed carbon and energy without producing ATP.' },
      ],
      hard: [
        { q: 'The compensation point in photosynthesis is when:', o: ['Photosynthesis rate equals zero', 'Photosynthesis rate equals respiration rate', 'Respiration rate is zero', 'Maximum photosynthesis occurs'], a: 1, s: 'At compensation point, net gas exchange is zero — CO₂ fixed by photosynthesis equals CO₂ released by respiration. Above this light intensity, net photosynthesis occurs.' },
        { q: 'How many ATP molecules are consumed in regeneration of RuBP in one turn of the Calvin cycle?', o: ['1', '2', '3', '0'], a: 0, s: 'Per turn: carboxylation uses 0 ATP, reduction uses 2 ATP (converting 3-PGA to G3P) + 2 NADPH, regeneration uses 1 ATP (converting Ru5P to RuBP). Total = 3 ATP per turn.' },
        { q: 'In C₄ pathway, the 4-carbon compound transported to bundle sheath cells is:', o: ['OAA only', 'Malate or aspartate (depending on species)', 'PEP', 'Pyruvate'], a: 1, s: 'OAA formed in mesophyll cells is converted to either malate (NADP-ME type C₄ plants like maize) or aspartate (NAD-ME type). This is transported to bundle sheath cells via plasmodesmata.' },
        { q: 'The net ATP requirement for fixing 6 CO₂ via C₄ pathway compared to C₃ is:', o: ['Same — 18 ATP', 'More — 30 ATP', 'Less — 12 ATP', 'More — 24 ATP'], a: 1, s: 'C₃: 18 ATP for 6 CO₂. C₄: 18 ATP (Calvin cycle) + 12 ATP (2 ATP per CO₂ for PEP regeneration from pyruvate) = 30 ATP. The extra cost avoids photorespiratory losses.' },
        { q: 'Blackman\'s law of limiting factors applies to photosynthesis. At high light but low CO₂:', o: ['Light is limiting', 'CO₂ is limiting', 'Temperature is limiting', 'Water is limiting'], a: 1, s: 'According to Blackman\'s law, the rate of a process is limited by the factor in shortest supply (the limiting factor). At high light intensity but low CO₂, CO₂ concentration limits photosynthesis.' },
      ],
    },
  ],
};

const plantPhysiology: NEETChapterData = {
  name: 'Plant Physiology — Transport & Mineral Nutrition',
  slug: 'plant-transport-nutrition',
  topics: [
    {
      name: 'Water Transport & Transpiration',
      slug: 'water-transport-transpiration',
      easy: [
        { q: 'Transpiration occurs mainly through:', o: ['Roots', 'Stomata', 'Bark', 'Flowers'], a: 1, s: 'About 90-95% of transpiration occurs through stomata on leaves (stomatal transpiration). Cuticular and lenticular transpiration account for the remaining 5-10%.' },
        { q: 'Root pressure is maximum during:', o: ['Afternoon', 'Night and early morning', 'Noon', 'Evening'], a: 1, s: 'Root pressure is highest at night and early morning when transpiration is low. It causes guttation — water droplets appearing at leaf margins through hydathodes.' },
        { q: 'Xylem transports:', o: ['Food from leaves to roots', 'Water and minerals from roots to leaves', 'Hormones only', 'Gases only'], a: 1, s: 'Xylem conducts water and dissolved minerals upward (ascent of sap) from roots to aerial parts. Phloem transports organic food (sucrose) bidirectionally.' },
        { q: 'The force mainly responsible for ascent of sap in tall trees is:', o: ['Root pressure', 'Transpiration pull', 'Capillarity', 'Osmosis'], a: 1, s: 'Transpiration pull (cohesion-tension theory by Dixon and Joly) is the main force for ascent of sap. Water molecules form a continuous column due to cohesion and adhesion.' },
        { q: 'Plasmolysis occurs when a cell is placed in:', o: ['Hypotonic solution', 'Isotonic solution', 'Hypertonic solution', 'Pure water'], a: 2, s: 'In a hypertonic solution, water moves out of the cell by osmosis. The protoplasm shrinks and pulls away from the cell wall — this is plasmolysis. It is reversible (deplasmolysis).' },
      ],
      medium: [
        { q: 'Which pathway of water movement involves cell walls and intercellular spaces?', o: ['Symplast', 'Apoplast', 'Transmembrane', 'Vacuolar'], a: 1, s: 'Apoplast pathway: water moves through cell walls, intercellular spaces, and xylem vessels without crossing any membrane. Blocked at the endodermis by the Casparian strip (suberin).' },
        { q: 'The Casparian strip is found in:', o: ['Epidermis', 'Endodermis', 'Cortex', 'Pericycle'], a: 1, s: 'Casparian strip is a band of suberin in the radial and transverse walls of endodermal cells. It blocks the apoplast pathway, forcing water through the symplast (selective transport).' },
        { q: 'Water potential of pure water at standard conditions is:', o: ['Positive', 'Negative', 'Zero', 'Infinity'], a: 2, s: 'Water potential (Ψ) of pure water at atmospheric pressure and standard temperature is zero (by convention). Adding solutes makes it negative. Water moves from higher to lower Ψ.' },
        { q: 'Guard cells differ from other epidermal cells in having:', o: ['No nucleus', 'Chloroplasts', 'No cell wall', 'No vacuole'], a: 1, s: 'Guard cells are the only epidermal cells with chloroplasts. They also have unevenly thickened walls (inner wall thick, outer wall thin), which causes stomatal opening when turgid.' },
        { q: 'Guttation is caused by:', o: ['Transpiration pull', 'Root pressure', 'Active transport', 'Imbibition'], a: 1, s: 'Guttation is the exudation of water droplets from hydathodes (water stomata) at leaf margins, driven by positive root pressure when transpiration is low (humid nights).' },
      ],
      hard: [
        { q: 'If a cell has Ψs = −0.8 MPa and Ψp = 0.3 MPa, its water potential is:', o: ['−0.5 MPa', '−1.1 MPa', '+0.5 MPa', '−0.3 MPa'], a: 0, s: 'Ψ = Ψs + Ψp = −0.8 + 0.3 = −0.5 MPa. Water potential equals the sum of solute potential (always negative) and pressure potential (usually positive in turgid cells).' },
        { q: 'Active absorption of water by roots involves:', o: ['Osmosis only', 'Metabolic energy of root cells', 'Transpiration pull', 'Capillarity'], a: 1, s: 'Active absorption requires metabolic energy from root cells (as proposed by Thimann). Root pressure is an example. However, passive absorption (driven by transpiration pull) accounts for ~98% of water uptake.' },
        { q: 'Antitranspirants work by:', o: ['Increasing transpiration', 'Partially closing stomata', 'Increasing root pressure', 'Removing cuticle'], a: 1, s: 'Antitranspirants (e.g., ABA, PMA, silicone emulsions) reduce water loss by causing partial stomatal closure or forming a film over stomata. Used in drought conditions to conserve water.' },
        { q: 'The cohesion-tension theory of ascent of sap requires:', o: ['High humidity', 'Continuous water column in xylem', 'Open stomata at night', 'Root pressure only'], a: 1, s: 'Dixon-Joly theory requires: (1) transpiration creating tension, (2) continuous water column maintained by cohesion between water molecules and adhesion to xylem walls, (3) xylem vessels as rigid tubes.' },
        { q: 'Munch\'s mass flow hypothesis explains:', o: ['Ascent of sap', 'Translocation in phloem', 'Transpiration', 'Root pressure'], a: 1, s: 'Munch\'s pressure flow (mass flow) hypothesis: sucrose loading in source (leaf) creates high osmotic pressure → water enters phloem → turgor pushes sieve tube contents toward sink (root/fruit) where sucrose is unloaded.' },
      ],
    },
    {
      name: 'Mineral Nutrition',
      slug: 'mineral-nutrition',
      easy: [
        { q: 'Macronutrients are needed by plants in:', o: ['Trace amounts', 'Large quantities', 'Not needed at all', 'Only during flowering'], a: 1, s: 'Macronutrients (C, H, O, N, P, K, S, Ca, Mg) are needed in concentrations >10 mmol/kg. Micronutrients (Fe, Mn, Zn, Cu, Mo, B, Cl, Ni) are needed in trace amounts (<10 mmol/kg).' },
        { q: 'Nitrogen fixation is the conversion of:', o: ['NH₃ to NO₃⁻', 'N₂ to NH₃', 'NO₃⁻ to N₂', 'NH₃ to N₂'], a: 1, s: 'Nitrogen fixation converts atmospheric N₂ (inert) into ammonia (NH₃), a usable form. Done by Rhizobium (symbiotic), Azotobacter (free-living), and cyanobacteria. Enzyme: nitrogenase.' },
        { q: 'Chlorosis (yellowing of leaves) is caused by deficiency of:', o: ['Phosphorus', 'Nitrogen or Magnesium', 'Boron', 'Molybdenum'], a: 1, s: 'Chlorosis results from insufficient chlorophyll. N (component of chlorophyll) and Mg (central atom of chlorophyll) deficiency cause chlorosis. Fe deficiency causes interveinal chlorosis.' },
        { q: 'The symbiotic nitrogen-fixing bacterium in legume root nodules is:', o: ['Azotobacter', 'Rhizobium', 'Nitrosomonas', 'E. coli'], a: 1, s: 'Rhizobium forms a symbiotic association with legume roots, creating root nodules. It fixes N₂ → NH₃ using nitrogenase enzyme, receiving organic acids from the plant in return.' },
        { q: 'Which element is a constituent of chlorophyll?', o: ['Iron', 'Manganese', 'Magnesium', 'Zinc'], a: 2, s: 'Magnesium (Mg²⁺) is the central metal atom in the chlorophyll molecule (porphyrin ring). Its deficiency directly reduces chlorophyll synthesis, causing chlorosis.' },
      ],
      medium: [
        { q: 'Nitrogenase enzyme requires:', o: ['Aerobic conditions', 'Anaerobic conditions', 'High temperature', 'Acidic pH'], a: 1, s: 'Nitrogenase is irreversibly inhibited by O₂. In Rhizobium root nodules, leghemoglobin scavenges O₂, maintaining anaerobic conditions around nitrogenase while allowing aerobic respiration for energy.' },
        { q: 'Hydroponics is the technique of growing plants in:', o: ['Soil without water', 'Nutrient solution without soil', 'Sand only', 'Air only'], a: 1, s: 'Hydroponics (soilless culture) grows plants in a defined mineral nutrient solution. Essential element studies use this technique — removing one element at a time to observe deficiency symptoms.' },
        { q: 'Denitrification is carried out by:', o: ['Rhizobium', 'Pseudomonas', 'Nitrosomonas', 'Azotobacter'], a: 1, s: 'Denitrification: NO₃⁻ → N₂ (back to atmosphere). Carried out by Pseudomonas and Thiobacillus under anaerobic conditions. It depletes soil nitrogen, opposite of nitrogen fixation.' },
        { q: 'Which of the following is a criterion for essentiality of an element (Arnon\'s criteria)?', o: ['The element must be present in all plants', 'The organism cannot complete its life cycle without the element', 'The element must be organic', 'It should be needed in large quantities'], a: 1, s: 'Arnon\'s criteria: (1) essential for completing life cycle, (2) its function cannot be replaced by another element, (3) it must be directly involved in plant metabolism (not just improving soil).' },
        { q: 'Molybdenum is required for:', o: ['Photosynthesis', 'Nitrogen metabolism (nitrate reductase)', 'Cell wall formation', 'Chlorophyll synthesis'], a: 1, s: 'Mo is a cofactor of nitrate reductase (NO₃⁻ → NO₂⁻) and nitrogenase (N₂ → NH₃). Mo deficiency leads to nitrogen deficiency symptoms even when soil N is adequate.' },
      ],
      hard: [
        { q: 'Leg-hemoglobin in root nodules is:', o: ['An enzyme that fixes nitrogen', 'An O₂ scavenger that protects nitrogenase', 'A storage protein', 'A transport protein for malate'], a: 1, s: 'Leghemoglobin is a pink-colored, oxygen-binding protein in legume root nodules. The globin part is coded by the plant, heme by Rhizobium. It maintains low free O₂ concentration to protect O₂-sensitive nitrogenase.' },
        { q: 'The overall reaction of biological nitrogen fixation is:', o: ['N₂ + 3H₂ → 2NH₃', 'N₂ + 8H⁺ + 8e⁻ + 16ATP → 2NH₃ + H₂ + 16ADP + 16Pi', 'N₂ + 6H₂O → 2NH₃ + 3O₂', 'N₂ + 2H₂O → NH₄OH + NH₃'], a: 1, s: 'Biological N₂ fixation by nitrogenase: N₂ + 8H⁺ + 8e⁻ + 16ATP → 2NH₃ + H₂ + 16ADP + 16Pi. It requires 16 ATP per N₂ fixed — extremely energy-expensive. The obligatory H₂ evolution wastes 2 electrons.' },
        { q: 'Critical concentration of an essential element is:', o: ['Maximum concentration for growth', 'Concentration below which growth is retarded', 'Average concentration in all plants', 'Toxic concentration'], a: 1, s: 'Critical concentration is the minimum tissue concentration of an element below which growth is retarded (deficiency symptoms appear). Above this, further increase doesn\'t improve growth significantly.' },
        { q: 'Which micronutrient is involved in water splitting during photosynthesis?', o: ['Zinc', 'Manganese', 'Copper', 'Boron'], a: 1, s: 'Manganese (Mn²⁺) is part of the oxygen-evolving complex (Mn₄CaO₅ cluster) in PS-II. It catalyzes the photolysis of water: 2H₂O → O₂ + 4H⁺ + 4e⁻. Mn deficiency causes disintegration of chloroplasts.' },
        { q: 'In the nitrogen cycle, nitrification is the process of:', o: ['N₂ → NH₃', 'NH₃ → NO₃⁻ (via NO₂⁻)', 'NO₃⁻ → N₂', 'NH₃ → amino acids'], a: 1, s: 'Nitrification: NH₃/NH₄⁺ → NO₂⁻ (by Nitrosomonas) → NO₃⁻ (by Nitrobacter). It is an aerobic, chemolithotrophic process. Nitrifying bacteria use the energy released for CO₂ fixation.' },
      ],
    },
  ],
};

const reproduction: NEETChapterData = {
  name: 'Reproduction in Flowering Plants',
  slug: 'plant-reproduction',
  topics: [
    {
      name: 'Flower Structure & Pollination',
      slug: 'flower-pollination',
      easy: [
        { q: 'The male reproductive part of a flower is:', o: ['Pistil', 'Stamen', 'Petal', 'Sepal'], a: 1, s: 'Stamen (androecium) is the male part consisting of anther (produces pollen) and filament. Pistil (gynoecium) is the female part with stigma, style, and ovary.' },
        { q: 'Pollination by wind is called:', o: ['Entomophily', 'Anemophily', 'Hydrophily', 'Zoophily'], a: 1, s: 'Anemophily = wind pollination (e.g., grasses, maize). Features: light/non-sticky pollen, feathery stigma, no nectar/scent. Entomophily = insect pollination. Hydrophily = water pollination.' },
        { q: 'A bisexual flower has:', o: ['Only stamens', 'Only pistils', 'Both stamens and pistils', 'Neither'], a: 2, s: 'Bisexual (perfect/hermaphrodite) flowers contain both male (stamens) and female (pistils) organs. Examples: rose, lily, mustard. Unisexual flowers have only one type.' },
        { q: 'Self-pollination occurs when pollen is transferred to:', o: ['Stigma of the same flower or same plant', 'Stigma of a different plant', 'Stigma of a different species', 'Soil'], a: 0, s: 'Self-pollination: pollen transfer to the stigma of the same flower (autogamy) or another flower on the same plant (geitonogamy). Cross-pollination (xenogamy): between different plants.' },
        { q: 'The ovule develops into:', o: ['Fruit', 'Seed', 'Pollen', 'Embryo sac'], a: 1, s: 'After fertilization, the ovule develops into a seed (containing embryo + endosperm + seed coat). The ovary develops into a fruit.' },
      ],
      medium: [
        { q: 'Microsporogenesis produces:', o: ['Megaspores', 'Microspores (pollen grains)', 'Seeds', 'Embryos'], a: 1, s: 'Microsporogenesis: meiosis of microspore mother cells (2n) in anthers → microspore tetrads → individual microspores (n) → pollen grains. Each pollen grain has two cells: vegetative and generative.' },
        { q: 'Triple fusion in angiosperms produces:', o: ['Zygote', 'Primary endosperm nucleus (PEN)', 'Suspensor', 'Embryo'], a: 1, s: 'Triple fusion: one sperm (n) fuses with two polar nuclei (n+n) = PEN (3n). This develops into the endosperm, providing nutrition to the developing embryo. Unique to angiosperms.' },
        { q: 'The embryo sac in angiosperms is:', o: ['7-celled, 8-nucleate', '8-celled, 7-nucleate', '6-celled, 7-nucleate', '8-celled, 8-nucleate'], a: 0, s: 'Mature embryo sac (Polygonum type): 7 cells with 8 nuclei. Cells: 1 egg + 2 synergids (micropylar) + 3 antipodals (chalazal) + 1 central cell (2 polar nuclei).' },
        { q: 'Apomixis is:', o: ['Pollination by ants', 'Seed production without fertilization', 'Cross-pollination', 'Vegetative propagation by leaves'], a: 1, s: 'Apomixis: asexual reproduction through seeds without fertilization. The embryo develops from the diploid egg (diplospory) or nucellar cells (adventive embryony). Seeds are genetically identical to parent.' },
        { q: 'Parthenocarpy produces fruits:', o: ['With seeds', 'Without seeds', 'Without ovary', 'With multiple embryos'], a: 1, s: 'Parthenocarpy: fruit development without fertilization → seedless fruits (e.g., banana). Can be induced by auxin/gibberellin spraying. Different from apomixis (seed without fertilization).' },
      ],
      hard: [
        { q: 'Self-incompatibility (SI) in plants is controlled by:', o: ['S-gene with multiple alleles', 'Environmental factors', 'Cytoplasmic inheritance', 'Y-chromosome'], a: 0, s: 'Self-incompatibility is a genetic mechanism preventing self-fertilization. Controlled by the S-locus with multiple alleles. If pollen S-allele matches pistil S-allele, pollen tube growth is inhibited.' },
        { q: 'Polyembryony occurs in:', o: ['Mango and Citrus', 'Rice and Wheat', 'Maize and Sugarcane', 'Pea and Bean'], a: 0, s: 'Polyembryony: multiple embryos in a single seed. In Citrus and Mango, extra embryos arise from nucellus cells (adventive embryony). Only one is zygotic; others are nucellar (clones of parent).' },
        { q: 'Pollen-pistil interaction involves:', o: ['Chemical recognition between pollen coat and stigma surface', 'Random pollen tube growth', 'No specificity', 'Temperature sensing'], a: 0, s: 'Pollen-pistil interaction involves chemical signaling: pollen coat proteins interact with stigma surface proteins/lipids. Compatible pollen hydrates and germinates; incompatible pollen is rejected (SI mechanism).' },
        { q: 'The filiform apparatus is found in:', o: ['Antipodal cells', 'Synergid cells', 'Egg cell', 'Central cell'], a: 1, s: 'Filiform apparatus: finger-like projections at the micropylar end of synergid cells. It guides the pollen tube into the embryo sac. Synergids also secrete chemical attractants for pollen tube guidance.' },
        { q: 'Emasculation in plant breeding refers to:', o: ['Removing sepals', 'Removing anthers from a bisexual flower before maturity', 'Removing the stigma', 'Adding hormones'], a: 1, s: 'Emasculation: removal of anthers from bisexual flowers of the female parent before pollen maturity. This prevents self-pollination, allowing controlled cross-pollination with desired male parent pollen.' },
      ],
    },
    {
      name: 'Embryo Development & Seed Formation',
      slug: 'embryo-seed',
      easy: [
        { q: 'The seed coat develops from:', o: ['Ovary wall', 'Integuments of the ovule', 'Endosperm', 'Embryo'], a: 1, s: 'Seed coat (testa and tegmen) develops from the outer and inner integuments of the ovule, respectively. It protects the embryo and endosperm from desiccation and mechanical damage.' },
        { q: 'Endosperm in angiosperms is:', o: ['Haploid (n)', 'Diploid (2n)', 'Triploid (3n)', 'Tetraploid (4n)'], a: 2, s: 'Endosperm is triploid (3n), formed by triple fusion — one sperm nucleus (n) + two polar nuclei (n+n) = primary endosperm nucleus (3n). It provides nutrition to the developing embryo.' },
        { q: 'A dicot embryo consists of:', o: ['One cotyledon', 'Two cotyledons', 'Three cotyledons', 'No cotyledons'], a: 1, s: 'Dicot embryo: two cotyledons + embryonic axis (epicotyl with plumule above, hypocotyl with radicle below). Monocot: one cotyledon (scutellum in cereals) + coleoptile + coleorhiza.' },
        { q: 'Fruit develops from:', o: ['Calyx', 'Ovary', 'Thalamus', 'Androecium'], a: 1, s: 'True fruit develops from the ovary wall (pericarp). False fruit involves other floral parts — e.g., apple (thalamus), strawberry (receptacle). Ovary wall → pericarp (epicarp + mesocarp + endocarp).' },
        { q: 'Dormancy in seeds is broken by:', o: ['Darkness', 'Gibberellic acid', 'ABA', 'High CO₂'], a: 1, s: 'Gibberellic acid (GA₃) breaks seed dormancy by inducing α-amylase and other hydrolytic enzymes. ABA promotes dormancy. Other methods: stratification (cold treatment), scarification, light (phytochrome).' },
      ],
      medium: [
        { q: 'In maize, the edible part is:', o: ['Seed coat', 'Endosperm', 'Cotyledon', 'Pericarp'], a: 1, s: 'In cereals (maize, rice, wheat), the edible part is primarily endosperm — starchy storage tissue. The grain is a caryopsis where pericarp and seed coat are fused.' },
        { q: 'Nucellus persists in the seed and is called:', o: ['Perisperm', 'Endosperm', 'Tegmen', 'Hilum'], a: 0, s: 'Perisperm is the residual nucellus tissue that persists in some seeds (e.g., black pepper, coffee, beet). It serves as an additional food storage tissue alongside or instead of endosperm.' },
        { q: 'The suspensor in embryo development helps in:', o: ['Photosynthesis', 'Pushing the embryo into endosperm and nutrient absorption', 'Pollen tube guidance', 'Seed coat formation'], a: 1, s: 'Suspensor pushes the developing embryo proper into the endosperm for nutrition. The basal cell of the suspensor (closest to micropyle) is the largest and most active in nutrient absorption.' },
        { q: 'In albuminous seeds, the food is stored in:', o: ['Cotyledons', 'Endosperm', 'Perisperm', 'Seed coat'], a: 1, s: 'Albuminous (endospermic) seeds retain endosperm at maturity (e.g., wheat, maize, castor). Ex-albuminous seeds consume endosperm during development; food stored in cotyledons (e.g., pea, gram).' },
        { q: 'The micropyle of the seed allows:', o: ['Pollination', 'Entry of water during germination', 'Gas exchange only', 'Seed dispersal'], a: 1, s: 'The micropyle persists as a small pore in the seed coat. It allows water to enter during germination (imbibition), initiating the growth of the embryo.' },
      ],
      hard: [
        { q: 'Free nuclear endosperm development involves:', o: ['Nuclear divisions without cell wall formation initially', 'Immediate cellularization', 'No nuclear division', 'Fusion of cells'], a: 0, s: 'In free nuclear endosperm (most common type), the PEN undergoes repeated mitotic divisions without cytokinesis → multinucleate syncytium. Cell walls form later (centripetally). Example: coconut liquid endosperm.' },
        { q: 'Coconut water is an example of:', o: ['Cellular endosperm', 'Free nuclear endosperm in liquid form', 'Nucellus', 'Embryonic fluid'], a: 1, s: 'Coconut water is the liquid free nuclear endosperm (cytoplasm with thousands of free nuclei). The white coconut meat is the cellular endosperm that forms later by cellularization at the periphery.' },
        { q: 'Double fertilization was discovered by:', o: ['Mendel', 'Nawaschin', 'Darwin', 'De Vries'], a: 1, s: 'Sergei Nawaschin (1898) discovered double fertilization in Lilium and Fritillaria. Two sperms: one fuses with egg (syngamy → zygote), other with polar nuclei (triple fusion → PEN). Unique to angiosperms.' },
        { q: 'Xenia is the effect of pollen on:', o: ['Embryo', 'Endosperm', 'Seed coat', 'Fruit'], a: 1, s: 'Xenia: the immediate effect of pollen on endosperm characters. Since endosperm is triploid (1 sperm + 2 polar nuclei), paternal genes can influence endosperm traits (color, composition). Example: maize kernel color.' },
        { q: 'The basal cell of the two-celled proembryo gives rise to:', o: ['Embryo proper', 'Suspensor', 'Endosperm', 'Seed coat'], a: 1, s: 'The zygote divides transversely: terminal (small) cell → embryo proper, basal (large) cell → suspensor. Suspensor is temporary, anchoring the embryo and facilitating nutrient transfer from endosperm.' },
      ],
    },
  ],
};

const ecology: NEETChapterData = {
  name: 'Ecology & Environment',
  slug: 'ecology-environment',
  topics: [
    {
      name: 'Ecosystem Structure & Function',
      slug: 'ecosystem-structure',
      easy: [
        { q: 'The biotic component of an ecosystem includes:', o: ['Sunlight', 'Water', 'Plants and animals', 'Temperature'], a: 2, s: 'Biotic components include all living organisms: producers (plants), consumers (animals), and decomposers (fungi, bacteria). Abiotic components include light, temperature, water, soil, minerals.' },
        { q: 'Producers in an ecosystem are:', o: ['Herbivores', 'Carnivores', 'Green plants and algae', 'Decomposers'], a: 2, s: 'Producers (autotrophs) synthesize organic matter from inorganic substances using solar energy (photosynthesis) or chemical energy (chemosynthesis). They form the base of every food chain.' },
        { q: 'The 10% law of energy transfer was given by:', o: ['Odum', 'Lindeman', 'Tansley', 'Haeckel'], a: 1, s: 'Lindeman (1942) proposed the 10% law: only about 10% of energy is transferred from one trophic level to the next. The rest is lost as heat through respiration. This limits food chain length.' },
        { q: 'A food web is:', o: ['A single linear food chain', 'Interconnected food chains in an ecosystem', 'A type of ecosystem', 'A nutrient cycle'], a: 1, s: 'A food web is a network of interconnected food chains showing multiple feeding relationships. It provides ecosystem stability — if one species declines, predators can switch to alternative prey.' },
        { q: 'Decomposers include:', o: ['Green plants', 'Fungi and bacteria', 'Herbivores', 'Carnivores'], a: 1, s: 'Decomposers (saprotrophs) break down dead organic matter (detritus) into simpler inorganic substances, recycling nutrients. Key decomposers: fungi (primary) and bacteria. Essential for nutrient cycling.' },
      ],
      medium: [
        { q: 'Net primary productivity (NPP) equals:', o: ['GPP + Respiration', 'GPP − Respiration', 'Respiration only', 'GPP × 2'], a: 1, s: 'NPP = GPP − R. GPP (Gross Primary Productivity) = total photosynthesis. NPP = biomass available for consumers after plant respiration. Globally, NPP is highest in tropical rainforests.' },
        { q: 'An inverted pyramid of biomass is found in:', o: ['Grassland ecosystem', 'Aquatic ecosystem (pond)', 'Forest ecosystem', 'Desert ecosystem'], a: 1, s: 'In aquatic ecosystems, phytoplankton (producers) have less biomass at any moment than zooplankton (consumers) because phytoplankton reproduce rapidly. The pyramid of biomass is inverted.' },
        { q: 'Ecological succession on bare rock is called:', o: ['Hydrosere', 'Xerosere', 'Psammosere', 'Halosere'], a: 1, s: 'Xerosere = primary succession on bare rock: lichens (pioneer) → mosses → herbs → shrubs → climax forest. Hydrosere = succession in water. Psammosere = on sand. Halosere = in saline environments.' },
        { q: 'Detritus food chain begins with:', o: ['Living plants', 'Dead organic matter', 'Sunlight', 'Carnivores'], a: 1, s: 'Detritus food chain: dead organic matter → detritivores (earthworms) → decomposers (fungi, bacteria). In forest ecosystems, 80-90% of energy flows through the detritus pathway.' },
        { q: 'Pioneer species in primary succession on land is:', o: ['Ferns', 'Lichens', 'Grasses', 'Trees'], a: 1, s: 'Lichens are the first colonizers (pioneers) on bare rock. They secrete acids that weather rock → soil formation. Succession: lichen → moss → herb → shrub → tree (climax community).' },
      ],
      hard: [
        { q: 'The pyramid of energy is always:', o: ['Inverted', 'Upright', 'Spindle-shaped', 'Variable'], a: 1, s: 'The pyramid of energy is ALWAYS upright — each trophic level has less energy than the one below (10% law). Unlike biomass/number pyramids, energy pyramids cannot be inverted because energy dissipates as heat.' },
        { q: 'In ecological succession, the climax community is:', o: ['The first community', 'A stable, self-perpetuating community in equilibrium', 'Always a forest', 'Temporary'], a: 1, s: 'Climax community: the final, stable stage of ecological succession that is in equilibrium with the environment. It is self-perpetuating unless disturbed. Type depends on climate (e.g., grassland, forest, tundra).' },
        { q: 'Stratification in a forest ecosystem refers to:', o: ['Soil layers', 'Vertical layering of vegetation', 'Horizontal distribution of species', 'Temperature gradient'], a: 1, s: 'Stratification = vertical layering: emergent layer → canopy → understory → shrub layer → herb layer → forest floor. Each layer has characteristic species adapted to specific light, humidity, and temperature conditions.' },
        { q: 'Secondary productivity is the rate of:', o: ['Photosynthesis by producers', 'Organic matter formation by consumers', 'Decomposition', 'Nutrient cycling'], a: 1, s: 'Secondary productivity = rate of energy storage at consumer trophic levels. Consumers cannot produce new organic matter from inorganic — they assimilate and convert food. It is always less than primary productivity.' },
        { q: 'Phosphorus cycle differs from carbon and nitrogen cycles in that:', o: ['It has a gaseous phase', 'It lacks a gaseous phase (sedimentary cycle)', 'It is faster', 'It involves the atmosphere'], a: 1, s: 'Phosphorus cycle is a sedimentary cycle — no significant gaseous phase. Phosphorus cycles between rocks/sediments, soil, water, and organisms. Weathering of phosphate rocks is the primary input. It is often the limiting nutrient.' },
      ],
    },
    {
      name: 'Biodiversity & Conservation',
      slug: 'biodiversity-conservation',
      easy: [
        { q: 'The term "biodiversity" was popularized by:', o: ['Darwin', 'Edward Wilson', 'Linnaeus', 'Mendel'], a: 1, s: 'Edward O. Wilson popularized the term "biodiversity" (biological diversity). It encompasses genetic diversity, species diversity, and ecological (ecosystem) diversity.' },
        { q: 'In-situ conservation means:', o: ['Conservation in zoos', 'Conservation in natural habitats', 'Conservation in seed banks', 'Conservation in labs'], a: 1, s: 'In-situ conservation: protecting species in their natural habitats (e.g., national parks, wildlife sanctuaries, biosphere reserves). Ex-situ: outside natural habitat (zoos, botanical gardens, seed banks).' },
        { q: 'The Red Data Book contains:', o: ['Extinct species only', 'List of endangered species', 'All known species', 'Medicinal plants'], a: 1, s: 'Red Data Book (IUCN Red List) documents endangered, vulnerable, and threatened species worldwide. Categories: Extinct, Critically Endangered, Endangered, Vulnerable, Near Threatened, Least Concern.' },
        { q: 'A biodiversity hotspot must have:', o: ['Low species count', 'High endemism and high threat of habitat loss', 'No human activity', 'Only animal diversity'], a: 1, s: 'Biodiversity hotspot criteria (Norman Myers): (1) ≥1,500 endemic vascular plant species, (2) ≥70% original habitat lost. There are 36 hotspots globally. India has 4 hotspots.' },
        { q: 'Which of the following is an example of ex-situ conservation?', o: ['National park', 'Botanical garden', 'Biosphere reserve', 'Sacred grove'], a: 1, s: 'Ex-situ conservation: botanical gardens, zoological parks, seed banks, cryopreservation, tissue culture. In-situ: national parks, sanctuaries, biosphere reserves, sacred groves.' },
      ],
      medium: [
        { q: 'Species-area relationship follows:', o: ['Linear equation', 'Log S = log C + Z × log A', 'Exponential decay', 'No pattern'], a: 1, s: 'Alexander von Humboldt: S = CA^Z (species richness increases with area). Log S = log C + Z log A. Z (slope) ≈ 0.1-0.3 for small areas within a continent; ≈ 0.6-1.2 for island biogeography.' },
        { q: 'The main cause of biodiversity loss today is:', o: ['Pollution', 'Habitat fragmentation and loss', 'Over-exploitation', 'Climate change'], a: 1, s: 'Habitat loss and fragmentation is the #1 driver of biodiversity loss (HIPPO: Habitat loss > Invasive species > Pollution > Population growth > Over-exploitation). Tropical deforestation is the biggest concern.' },
        { q: 'India\'s biodiversity hotspots include:', o: ['Western Ghats and Indo-Burma', 'Thar Desert and Sundarbans', 'Deccan Plateau and Gangetic Plain', 'Himalayan glaciers and Rann of Kutch'], a: 0, s: 'India has 4 biodiversity hotspots: (1) Western Ghats & Sri Lanka, (2) Indo-Burma, (3) Himalaya, (4) Sundaland (Andaman & Nicobar extension). These contain high endemism with significant habitat loss.' },
        { q: 'Rivet popper hypothesis for biodiversity was given by:', o: ['Paul Ehrlich', 'Edward Wilson', 'Robert May', 'David Tilman'], a: 0, s: 'Paul Ehrlich\'s rivet popper hypothesis: species in an ecosystem are like rivets in an airplane wing. Losing some (extinction) may not be immediately noticeable, but eventually the system collapses catastrophically.' },
        { q: 'Endemic species are:', o: ['Found everywhere', 'Confined to a specific geographic region', 'Always endangered', 'Invasive species'], a: 1, s: 'Endemic species are restricted to a particular geographic area and found nowhere else naturally. Examples: lemurs (Madagascar), kiwi (New Zealand), lion-tailed macaque (Western Ghats). High endemism = high conservation priority.' },
      ],
      hard: [
        { q: 'According to Robert May, the global species diversity is approximately:', o: ['1 million', '7 million', '100 million', '500,000'], a: 1, s: 'Robert May estimated ~7 million species globally. Currently ~1.5 million are described. Tropics harbor the most (latitudinal gradient). Many undiscovered species exist, especially among insects and microorganisms.' },
        { q: 'The Evil Quartet of biodiversity loss includes all EXCEPT:', o: ['Habitat loss', 'Over-exploitation', 'Alien species invasions', 'Acid rain'], a: 3, s: 'Jared Diamond\'s Evil Quartet: (1) Habitat loss and fragmentation, (2) Over-exploitation, (3) Alien species invasions, (4) Co-extinctions (cascading). Acid rain is a form of pollution but not part of this specific framework.' },
        { q: 'Latitudinal gradient in species diversity shows:', o: ['Diversity increases toward poles', 'Diversity increases toward equator', 'No pattern', 'Diversity is uniform globally'], a: 1, s: 'Species diversity increases from poles to equator (latitudinal gradient). Reasons: (1) longer evolutionary time in tropics, (2) more solar energy → more productivity, (3) stable climate → more niche specialization.' },
        { q: 'Bioprospecting involves:', o: ['Destroying biodiversity', 'Exploring molecular, genetic resources of biodiversity for commercially valuable products', 'Counting species', 'Creating national parks'], a: 1, s: 'Bioprospecting: systematic search for novel chemical compounds, genes, and organisms from biodiversity for pharmaceutical, agricultural, or industrial applications. Must follow Nagoya Protocol (access and benefit sharing).' },
        { q: 'The total number of biodiversity hotspots in the world is:', o: ['25', '36', '34', '40'], a: 1, s: '36 biodiversity hotspots are recognized globally (updated from Norman Myers\' original 25 in 2000). Together they cover 2.5% of Earth\'s land surface but contain ~60% of all terrestrial species.' },
      ],
    },
  ],
};

const cellBiology: NEETChapterData = {
  name: 'Cell Biology & Biomolecules',
  slug: 'cell-biology-biomolecules',
  topics: [
    {
      name: 'Cell Structure & Organelles',
      slug: 'cell-structure-organelles',
      easy: [
        { q: 'The powerhouse of the cell is:', o: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi body'], a: 2, s: 'Mitochondria are called the powerhouse because they produce ATP through oxidative phosphorylation (aerobic respiration). They have double membranes — inner membrane has cristae with ATP synthase.' },
        { q: 'Which organelle is involved in protein synthesis?', o: ['Lysosome', 'Ribosome', 'Vacuole', 'Centrosome'], a: 1, s: 'Ribosomes are the sites of protein synthesis (translation). They consist of rRNA and proteins. 70S in prokaryotes; 80S in eukaryotes. Free ribosomes make cytoplasmic proteins; bound ribosomes make secretory proteins.' },
        { q: 'The cell wall of plant cells is mainly composed of:', o: ['Chitin', 'Cellulose', 'Peptidoglycan', 'Keratin'], a: 1, s: 'Plant cell wall: primary wall (cellulose + hemicellulose + pectin) and secondary wall (cellulose + lignin). Fungal cell wall: chitin. Bacterial cell wall: peptidoglycan (murein).' },
        { q: 'Lysosomes contain:', o: ['DNA', 'Hydrolytic enzymes', 'Chlorophyll', 'Starch'], a: 1, s: 'Lysosomes (discovered by de Duve) contain ~50 hydrolytic enzymes (acid hydrolases) that work at pH ~5. They digest worn-out organelles (autophagy) and engulfed material (heterophagy). Called "suicide bags" of the cell.' },
        { q: 'The fluid mosaic model of cell membrane was proposed by:', o: ['Watson & Crick', 'Singer & Nicolson', 'Schleiden & Schwann', 'Robert Hooke'], a: 1, s: 'Singer and Nicolson (1972) proposed the fluid mosaic model: lipid bilayer (fluid, with lateral movement) with proteins embedded as a mosaic (integral and peripheral proteins). Cholesterol modulates fluidity.' },
      ],
      medium: [
        { q: 'Rough endoplasmic reticulum differs from smooth ER in having:', o: ['Lipid droplets', 'Ribosomes on its surface', 'DNA', 'Chloroplasts'], a: 1, s: 'RER has ribosomes attached to its cytoplasmic surface → involved in protein synthesis and processing. SER lacks ribosomes → involved in lipid synthesis, detoxification, and calcium storage.' },
        { q: 'Mitochondria and chloroplasts have their own:', o: ['Cell wall', 'DNA and ribosomes (70S)', 'Lysosomes', 'Centrioles'], a: 1, s: 'Both are semi-autonomous organelles with circular DNA and 70S ribosomes (similar to prokaryotes). This supports the endosymbiotic theory — they evolved from engulfed prokaryotes.' },
        { q: 'The Golgi complex functions in:', o: ['DNA replication', 'Packaging, modification, and transport of proteins', 'Photosynthesis', 'Cell division'], a: 1, s: 'Golgi apparatus (dictyosomes in plants): cis face receives from ER, trans face dispatches. Functions: glycosylation, phosphorylation, sorting, packaging into vesicles, lysosome formation, cell plate formation.' },
        { q: 'Prokaryotic cells lack:', o: ['DNA', 'Ribosomes', 'Membrane-bound organelles', 'Cell wall'], a: 2, s: 'Prokaryotes lack membrane-bound organelles (no nucleus, mitochondria, ER, Golgi, etc.). They have 70S ribosomes, circular DNA in nucleoid, cell wall (peptidoglycan), and may have plasmids, flagella, pili.' },
        { q: 'The function of the centrosome in animal cells is:', o: ['Protein synthesis', 'Organizing the mitotic spindle', 'Energy production', 'Secretion'], a: 1, s: 'Centrosome (containing two centrioles) is the main microtubule-organizing center (MTOC). During cell division, it organizes the mitotic spindle. Most plant cells lack centrosomes but form spindles using other MTOCs.' },
      ],
      hard: [
        { q: 'The inner membrane of mitochondria is rich in:', o: ['Cholesterol', 'Cardiolipin', 'Cellulose', 'Pectin'], a: 1, s: 'Inner mitochondrial membrane is rich in cardiolipin (diphosphatidylglycerol) — making it impermeable to ions. It has no cholesterol (unlike plasma membrane). Contains ETC complexes and ATP synthase in cristae.' },
        { q: 'Signal hypothesis for protein targeting to ER was proposed by:', o: ['Singer & Nicolson', 'Blobel & Sabatini', 'Watson & Crick', 'Palade'], a: 1, s: 'Blobel and Sabatini (1971) proposed the signal hypothesis: secretory proteins have an N-terminal signal peptide that directs the ribosome to the ER membrane. Signal is cleaved after translocation. Blobel won Nobel Prize (1999).' },
        { q: 'Peroxisomes are important in plant cells for:', o: ['Photosynthesis', 'Photorespiration', 'Nitrogen fixation', 'Starch synthesis'], a: 1, s: 'In plant cells, peroxisomes are involved in photorespiration — they convert glycolate (from RuBisCO oxygenase activity) to glyoxylate. Also contain catalase for H₂O₂ detoxification. In animals: fatty acid β-oxidation.' },
        { q: 'Nucleolus is the site of:', o: ['mRNA synthesis', 'rRNA synthesis and ribosomal subunit assembly', 'tRNA synthesis', 'DNA replication'], a: 1, s: 'Nucleolus (within the nucleus) is the site of rRNA transcription and ribosomal subunit assembly. rRNA genes are located at nucleolar organizing regions (NORs) on specific chromosomes. Disappears during cell division.' },
        { q: 'The cytoskeleton includes all EXCEPT:', o: ['Microfilaments (actin)', 'Microtubules (tubulin)', 'Intermediate filaments', 'Cristae'], a: 3, s: 'Cytoskeleton: microfilaments (actin, 7nm), intermediate filaments (keratin/vimentin, 10nm), microtubules (tubulin, 25nm). Cristae are folds of the inner mitochondrial membrane, NOT part of the cytoskeleton.' },
      ],
    },
    {
      name: 'Biomolecules & Enzymes',
      slug: 'biomolecules-enzymes',
      easy: [
        { q: 'Enzymes are:', o: ['Lipids', 'Carbohydrates', 'Biological catalysts (mostly proteins)', 'Nucleic acids'], a: 2, s: 'Enzymes are biological catalysts that speed up reactions without being consumed. Most are proteins; some are RNA (ribozymes). They lower activation energy and are highly specific.' },
        { q: 'The monomer of proteins is:', o: ['Nucleotide', 'Amino acid', 'Monosaccharide', 'Fatty acid'], a: 1, s: 'Proteins are polymers of amino acids linked by peptide bonds (−CO−NH−). 20 standard amino acids exist. Sequence of amino acids = primary structure. Protein folding → secondary, tertiary, quaternary structures.' },
        { q: 'DNA is a polymer of:', o: ['Amino acids', 'Nucleotides', 'Monosaccharides', 'Fatty acids'], a: 1, s: 'DNA (deoxyribonucleic acid) is a polymer of deoxyribonucleotides. Each nucleotide = deoxyribose sugar + phosphate group + nitrogenous base (A, T, G, or C). Two antiparallel strands form a double helix.' },
        { q: 'Sucrose is a disaccharide composed of:', o: ['Glucose + Glucose', 'Glucose + Fructose', 'Glucose + Galactose', 'Fructose + Fructose'], a: 1, s: 'Sucrose = glucose + fructose (joined by glycosidic bond). Maltose = glucose + glucose. Lactose = galactose + glucose. Sucrose is a non-reducing sugar (no free anomeric carbon).' },
        { q: 'The secondary structure of protein includes:', o: ['Amino acid sequence', 'α-helix and β-pleated sheet', 'Quaternary associations', 'Disulfide bridges between polypeptides'], a: 1, s: 'Secondary structure: local folding patterns stabilized by hydrogen bonds. α-helix (coiled) and β-sheet (zigzag). Primary = sequence. Tertiary = 3D shape. Quaternary = multiple polypeptide assembly.' },
      ],
      medium: [
        { q: 'Competitive inhibition of an enzyme can be overcome by:', o: ['Increasing inhibitor concentration', 'Increasing substrate concentration', 'Decreasing temperature', 'Adding cofactors'], a: 1, s: 'Competitive inhibitor resembles substrate and competes for the active site. High substrate concentration out-competes the inhibitor. Vmax remains same, but Km increases (apparent lower affinity).' },
        { q: 'The lock and key model of enzyme action was proposed by:', o: ['Koshland', 'Emil Fischer', 'Michaelis & Menten', 'Lineweaver & Burk'], a: 1, s: 'Emil Fischer (1894): enzyme active site has a rigid shape complementary to the substrate (like a lock and key). Koshland (1958) modified this with the induced fit model — active site changes shape upon substrate binding.' },
        { q: 'Denaturation of a protein involves:', o: ['Breaking peptide bonds', 'Loss of 3D structure without breaking primary structure', 'Hydrolysis to amino acids', 'Increasing molecular weight'], a: 1, s: 'Denaturation: loss of secondary, tertiary, and quaternary structure due to heat, pH change, or chemicals. Primary structure (peptide bonds) remains intact. Protein loses biological activity. May be reversible (renaturation).' },
        { q: 'Km (Michaelis constant) of an enzyme represents:', o: ['Maximum velocity', 'Substrate concentration at half Vmax', 'Inhibitor concentration', 'Enzyme concentration'], a: 1, s: 'Km = substrate concentration at which reaction velocity is half of Vmax. Low Km = high enzyme-substrate affinity. High Km = low affinity (more substrate needed to reach half-maximal rate).' },
        { q: 'Allosteric enzymes have:', o: ['Only one binding site', 'Regulatory sites separate from the active site', 'No substrate specificity', 'Linear kinetics'], a: 1, s: 'Allosteric enzymes have regulatory (allosteric) sites in addition to the catalytic active site. Allosteric modulators bind to these sites, causing conformational changes that activate or inhibit the enzyme (sigmoidal kinetics).' },
      ],
      hard: [
        { q: 'A ribozyme is:', o: ['A protein enzyme', 'An RNA molecule with catalytic activity', 'A ribosomal protein', 'A DNA enzyme'], a: 1, s: 'Ribozymes are catalytic RNA molecules. Examples: self-splicing introns (Group I/II), RNase P, hammerhead ribozyme, peptidyl transferase (rRNA in ribosome). Supports the RNA World hypothesis.' },
        { q: 'Isoenzymes (isozymes) are:', o: ['Identical enzymes from different species', 'Different molecular forms of the same enzyme catalyzing the same reaction', 'Inactive enzymes', 'Coenzymes'], a: 1, s: 'Isozymes are multiple forms of an enzyme that catalyze the same reaction but differ in amino acid sequence, kinetics, and regulation. Example: LDH has 5 isozymes (LDH1-5) with different tissue distributions.' },
        { q: 'Holoenzyme consists of:', o: ['Apoenzyme only', 'Apoenzyme + cofactor', 'Cofactor only', 'Substrate + enzyme'], a: 1, s: 'Holoenzyme = apoenzyme (protein part, catalytically inactive alone) + cofactor (non-protein part: metal ion or coenzyme). Only the holoenzyme is catalytically active.' },
        { q: 'The amino acid tryptophan serves as a precursor for:', o: ['Adrenaline', 'Niacin (Vitamin B₃) and serotonin', 'Vitamin C', 'Thyroid hormones'], a: 1, s: 'Tryptophan → niacin (vitamin B₃) → NAD⁺/NADP⁺. Tryptophan → serotonin (neurotransmitter) → melatonin (pineal hormone). It is an essential amino acid obtained from diet.' },
        { q: 'Glycosidic bond links:', o: ['Amino acids', 'Nucleotides', 'Monosaccharides', 'Fatty acids to glycerol'], a: 2, s: 'Glycosidic bond forms between the anomeric carbon of one monosaccharide and a hydroxyl group of another (with loss of H₂O). Types: α-glycosidic (starch) and β-glycosidic (cellulose). Ester bond links fatty acids to glycerol.' },
      ],
    },
  ],
};

export const botanyExpansionChapters: NEETChapterData[] = [
  photosynthesis,
  plantPhysiology,
  reproduction,
  ecology,
  cellBiology,
];
