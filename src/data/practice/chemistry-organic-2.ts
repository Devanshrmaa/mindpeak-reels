import type { ChapterData } from './types';

/* ─── Chapter: Aldehydes, Ketones & Carboxylic Acids ─── */
const aldehydesKetones: ChapterData = {
  name: 'Aldehydes, Ketones & Carboxylic Acids',
  slug: 'aldehydes-ketones-carboxylic',
  topics: [
    {
      name: 'Nucleophilic Addition & Named Reactions',
      slug: 'nucleophilic-addition-reactions',
      easy: [
        { q: 'The general formula of aldehydes is:', o: ['RCHO', 'RCOR\'', 'RCOOH', 'ROR\''], a: 0, s: 'Aldehydes have the functional group −CHO: general formula RCHO.' },
        { q: 'Tollen\'s test is positive for:', o: ['Aldehydes', 'Ketones', 'Alcohols', 'Ethers'], a: 0, s: 'Tollen\'s reagent (ammoniacal AgNO₃) gives silver mirror with aldehydes, not ketones.' },
        { q: 'The IUPAC name of CH₃CHO is:', o: ['Ethanal', 'Methanal', 'Propanal', 'Butanal'], a: 0, s: 'CH₃CHO = 2-carbon aldehyde = ethanal.' },
        { q: 'Fehling\'s test distinguishes between:', o: ['Aldehydes and ketones', 'Alcohols and phenols', 'Alkanes and alkenes', 'Acids and bases'], a: 0, s: 'Fehling\'s solution gives red precipitate with aldehydes but not ketones.' },
        { q: 'Formaldehyde is the simplest:', o: ['Aldehyde', 'Ketone', 'Acid', 'Ester'], a: 0, s: 'HCHO (formaldehyde/methanal) is the simplest aldehyde.' },
        { q: 'The carbonyl group (C=O) in aldehydes is at:', o: ['Terminal position', 'Middle of chain', 'Any position', 'Branch point'], a: 0, s: 'In aldehydes, the C=O is always at the terminal carbon (end of chain).' },
      ],
      medium: [
        { q: 'The Cannizzaro reaction occurs with:', o: ['Aldehydes lacking α-hydrogen', 'Ketones', 'Aldehydes with α-hydrogen', 'Carboxylic acids'], a: 0, s: 'Cannizzaro reaction: aldehydes without α-H (e.g., HCHO, C₆H₅CHO) undergo self-oxidation-reduction in NaOH.' },
        { q: 'Aldol condensation requires the carbonyl compound to have:', o: ['α-hydrogen atoms', 'No α-hydrogen', 'A benzene ring', 'Multiple C=O groups'], a: 0, s: 'Aldol condensation needs at least one α-H for enolization and C−C bond formation.' },
        { q: 'The product of Clemmensen reduction of acetophenone is:', o: ['Ethylbenzene', 'Acetaldehyde', 'Benzyl alcohol', 'Toluene'], a: 0, s: 'Clemmensen (Zn-Hg/HCl) reduces C=O to CH₂: C₆H₅COCH₃ → C₆H₅CH₂CH₃ (ethylbenzene).' },
        { q: 'HCN adds to carbonyl compounds to form:', o: ['Cyanohydrins', 'Alcohols', 'Amines', 'Esters'], a: 0, s: 'HCN addition: R₂C=O + HCN → R₂C(OH)(CN) — cyanohydrin.' },
        { q: 'Wolff-Kishner reduction uses:', o: ['NH₂NH₂/KOH (base)', 'Zn-Hg/HCl (acid)', 'NaBH₄', 'LiAlH₄'], a: 0, s: 'Wolff-Kishner: hydrazine + strong base (KOH) in high-boiling solvent reduces C=O to CH₂.' },
        { q: 'The order of reactivity toward nucleophilic addition is:', o: ['HCHO > CH₃CHO > CH₃COCH₃', 'CH₃COCH₃ > CH₃CHO > HCHO', 'All equal', 'CH₃CHO > HCHO > CH₃COCH₃'], a: 0, s: 'Less substitution = less steric hindrance + more electrophilic carbon. HCHO is most reactive.' },
      ],
      hard: [
        { q: 'In crossed aldol condensation between HCHO and CH₃CHO in NaOH, the major product is:', o: ['HOCH₂CH₂CHO (β-hydroxy aldehyde)', 'CH₃CH(OH)CHO', 'HCOOH + CH₃CHO', 'Cannizzaro products'], a: 0, s: 'CH₃CHO provides α-H, HCHO acts as electrophile (no α-H). Product: HOCH₂CH₂CHO.' },
        { q: 'The Wittig reaction converts a carbonyl compound to:', o: ['An alkene', 'An alcohol', 'A carboxylic acid', 'An amine'], a: 0, s: 'Wittig: R₂C=O + Ph₃P=CHR\' → R₂C=CHR\' + Ph₃P=O. Carbonyl → alkene.' },
        { q: 'Benzoin condensation of benzaldehyde in KCN gives:', o: ['C₆H₅CH(OH)COC₆H₅', 'C₆H₅COOH', 'C₆H₅CH₂OH', '(C₆H₅CO)₂'], a: 0, s: 'Benzoin condensation: 2 C₆H₅CHO → C₆H₅CH(OH)COC₆H₅ (catalysed by CN⁻).' },
        { q: 'In the iodoform test, a positive result is given by compounds with the structure:', o: ['CH₃CO− or CH₃CH(OH)−', 'Only RCOCH₃', 'Any alcohol', 'Only CH₃CHO'], a: 0, s: 'Iodoform positive for methyl ketones (RCOCH₃) and secondary alcohols oxidisable to methyl ketones (CH₃CHOH−).' },
        { q: 'The Baeyer-Villiger oxidation of cyclohexanone gives:', o: ['ε-Caprolactone', 'Cyclohexanol', 'Adipic acid', 'Cyclohexene'], a: 0, s: 'Baeyer-Villiger: ketone + peracid → lactone (ester). Cyclohexanone → ε-caprolactone.' },
      ],
    },
  ],
};

/* ─── Chapter: Amines ─── */
const amines: ChapterData = {
  name: 'Amines',
  slug: 'amines',
  topics: [
    {
      name: 'Classification, Preparation & Reactions',
      slug: 'amine-classification-reactions',
      easy: [
        { q: 'Amines are derivatives of:', o: ['Ammonia', 'Methane', 'Water', 'Hydrogen'], a: 0, s: 'Amines: NH₃ where one or more H atoms are replaced by alkyl/aryl groups.' },
        { q: 'The basic nature of amines is due to:', o: ['Lone pair on nitrogen', 'C−N bond', 'Presence of hydrogen', 'Sp³ hybridisation'], a: 0, s: 'The lone pair on N can accept a proton → amines are basic.' },
        { q: 'Primary amines have the general formula:', o: ['RNH₂', 'R₂NH', 'R₃N', 'R₄N⁺'], a: 0, s: 'Primary amine: R−NH₂ (one R group attached to N).' },
        { q: 'The Hinsberg test uses:', o: ['Benzenesulfonyl chloride', 'Tollen\'s reagent', 'Fehling\'s solution', 'KMnO₄'], a: 0, s: 'Hinsberg test: C₆H₅SO₂Cl distinguishes primary, secondary, and tertiary amines.' },
        { q: 'Aniline is a:', o: ['Primary aromatic amine', 'Secondary amine', 'Tertiary amine', 'Quaternary salt'], a: 0, s: 'Aniline = C₆H₅NH₂ — primary aromatic amine.' },
      ],
      medium: [
        { q: 'The correct basicity order among aliphatic amines in aqueous solution is:', o: ['Secondary > Primary > Tertiary', 'Tertiary > Secondary > Primary', 'Primary > Secondary > Tertiary', 'All equal'], a: 0, s: 'In aqueous solution: R₂NH > RNH₂ > R₃N (solvation effects make 2° strongest).' },
        { q: 'Gabriel phthalimide synthesis is used to prepare:', o: ['Primary amines', 'Secondary amines', 'Tertiary amines', 'Quaternary salts'], a: 0, s: 'Gabriel synthesis: potassium phthalimide + RX → pure primary amine (free of 2° and 3° amines).' },
        { q: 'Carbylamine reaction is given by:', o: ['Primary amines', 'Secondary amines', 'Tertiary amines', 'All amines'], a: 0, s: 'Carbylamine test: R−NH₂ + CHCl₃ + KOH → R−NC (isocyanide with foul smell). Only 1° amines.' },
        { q: 'Diazotisation of aniline gives:', o: ['Benzenediazonium chloride', 'Nitrobenzene', 'Azobenzene', 'Benzylamine'], a: 0, s: 'C₆H₅NH₂ + NaNO₂ + HCl → C₆H₅N₂⁺Cl⁻ at 0-5°C (diazotisation).' },
        { q: 'Sandmeyer reaction converts diazonium salt to:', o: ['Aryl halide using Cu₂X₂', 'Phenol', 'Amine', 'Aldehyde'], a: 0, s: 'Sandmeyer: ArN₂⁺ + CuCl/CuBr → ArCl/ArBr. Replaces N₂⁺ with halogen.' },
        { q: 'Aniline does not undergo Friedel-Crafts reaction because:', o: ['NH₂ group forms salt with Lewis acid catalyst', 'It is too reactive', 'It has no ring', 'It is not aromatic'], a: 0, s: 'AlCl₃ + C₆H₅NH₂ → salt (amine-AlCl₃ complex) which deactivates the ring.' },
      ],
      hard: [
        { q: 'In the Hofmann bromamide degradation, an amide RCONH₂ is converted to:', o: ['RNH₂ (amine with one less carbon)', 'RCOOH', 'RCOCH₃', 'RCONHR'], a: 0, s: 'Hofmann degradation: RCONH₂ + Br₂/NaOH → RNH₂ + Na₂CO₃. Product has one less carbon.' },
        { q: 'The coupling reaction of diazonium salt with aniline occurs at:', o: ['Para position of aniline', 'Meta position', 'Ortho position', 'Nitrogen of aniline'], a: 0, s: 'Coupling occurs at the para position of the activated aromatic ring (aniline) in weakly acidic medium.' },
        { q: 'The correct order of basicity is:', o: ['CH₃NH₂ > C₆H₅NH₂ > C₆H₅NHC₆H₅', 'C₆H₅NH₂ > CH₃NH₂ > C₆H₅NHC₆H₅', 'All equal', 'C₆H₅NHC₆H₅ > C₆H₅NH₂ > CH₃NH₂'], a: 0, s: 'Aliphatic > aromatic (lone pair delocalised into ring). More phenyl groups = more delocalisation = less basic.' },
        { q: 'Exhaustive methylation of a 1° amine followed by Hofmann elimination gives:', o: ['An alkene', 'An alcohol', 'A nitrile', 'An amide'], a: 0, s: 'RNH₂ → RN(CH₃)₃⁺OH⁻ → heat → alkene + N(CH₃)₃ + H₂O (Hofmann elimination).' },
      ],
    },
  ],
};

/* ─── Chapter: Polymers ─── */
const polymers: ChapterData = {
  name: 'Polymers',
  slug: 'polymers',
  topics: [
    {
      name: 'Types & Polymerisation',
      slug: 'polymer-types-polymerisation',
      easy: [
        { q: 'Addition polymerisation involves:', o: ['Repeated addition of monomers without loss of small molecules', 'Loss of water between monomers', 'Cross-linking only', 'Hydrolysis'], a: 0, s: 'Addition polymerisation: monomers add without eliminating byproducts (e.g., polyethylene).' },
        { q: 'Nylon-6,6 is an example of:', o: ['Condensation polymer', 'Addition polymer', 'Natural polymer', 'Copolymer of same monomer'], a: 0, s: 'Nylon-6,6: condensation of hexamethylenediamine + adipic acid with loss of H₂O.' },
        { q: 'Natural rubber is a polymer of:', o: ['Isoprene', 'Ethylene', 'Styrene', 'Vinyl chloride'], a: 0, s: 'Natural rubber = cis-1,4-polyisoprene.' },
        { q: 'Bakelite is a:', o: ['Thermosetting plastic', 'Thermoplastic', 'Elastomer', 'Fibre'], a: 0, s: 'Bakelite: cross-linked phenol-formaldehyde resin — cannot be remoulded (thermosetting).' },
        { q: 'PVC stands for:', o: ['Polyvinyl chloride', 'Polyvinyl cyanide', 'Polyvinylidene chloride', 'Polyvinyl carbonate'], a: 0, s: 'PVC = poly(vinyl chloride) = (−CH₂CHCl−)n.' },
      ],
      medium: [
        { q: 'Vulcanisation of rubber involves:', o: ['Cross-linking with sulphur', 'Addition of plasticiser', 'Removal of impurities', 'Depolymerisation'], a: 0, s: 'Vulcanisation: heating rubber with sulphur introduces S−S cross-links → harder, more elastic.' },
        { q: 'Teflon is chemically:', o: ['Polytetrafluoroethylene (PTFE)', 'Polystyrene', 'Polyethylene', 'Polypropylene'], a: 0, s: 'Teflon = PTFE = (−CF₂CF₂−)n. Extremely inert and non-stick.' },
        { q: 'The monomer of Dacron (PET) is:', o: ['Ethylene glycol + Terephthalic acid', 'Caprolactam', 'Adipic acid + Hexamethylenediamine', 'Phenol + Formaldehyde'], a: 0, s: 'PET (Dacron/Terylene) = condensation of ethylene glycol + terephthalic acid.' },
        { q: 'Biodegradable polymer PHBV is used for:', o: ['Packaging and drug delivery', 'Bulletproof vests', 'Electrical insulation', 'Construction'], a: 0, s: 'PHBV (poly-β-hydroxybutyrate-co-β-hydroxyvalerate) is biodegradable, used in packaging & drug delivery.' },
        { q: 'Nylon-6 is obtained by:', o: ['Ring-opening polymerisation of caprolactam', 'Condensation of two monomers', 'Addition of butadiene', 'Free radical polymerisation of styrene'], a: 0, s: 'Nylon-6: caprolactam ring opens and polymerises (single monomer).' },
      ],
      hard: [
        { q: 'The number-average molecular weight of a polymer with 100 chains having masses 1000, 2000, 3000, ... 100000 Da is:', o: ['50500 Da', '100000 Da', '1000 Da', '67000 Da'], a: 0, s: 'M̄n = Σ(NiMi)/ΣNi. Sum of 1000+2000+...+100000 = 100 × 101000/2 = 5050000. M̄n = 5050000/100 = 50500.' },
        { q: 'Ziegler-Natta catalyst is used for:', o: ['Stereospecific polymerisation of alkenes', 'Condensation polymerisation', 'Rubber vulcanisation', 'Depolymerisation'], a: 0, s: 'Ziegler-Natta (TiCl₄ + Al(C₂H₅)₃): produces stereoregular (isotactic) polyalkenes like HDPE and polypropylene.' },
        { q: 'Cross-linked polymers have:', o: ['3D network structure, insoluble', 'Linear chains, soluble', 'Branched chains, partially soluble', 'No covalent bonds between chains'], a: 0, s: 'Cross-linked polymers form 3D networks: insoluble, infusible (e.g., Bakelite, vulcanised rubber).' },
        { q: 'Buna-S rubber is a copolymer of:', o: ['1,3-Butadiene and styrene', 'Isoprene and isobutylene', 'Chloroprene and acrylonitrile', 'Ethylene and propylene'], a: 0, s: 'Buna-S = styrene-butadiene rubber (SBR). "Bu" = butadiene, "S" = styrene.' },
      ],
    },
  ],
};

export const organicExpansionChapters: ChapterData[] = [aldehydesKetones, amines, polymers];
