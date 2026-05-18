(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/formulaSheetData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FORMULA_SLUGS",
    ()=>FORMULA_SLUGS,
    "allFormulaSheets",
    ()=>allFormulaSheets,
    "getFormulaSheet",
    ()=>getFormulaSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/examYears.ts [app-client] (ecmascript)");
;
/* ═══════════════════════════════════════════════════════════════
   JEE CHEMISTRY — ~130 formulas across 10 chapters
   ═══════════════════════════════════════════════════════════════ */ const jeeChemistryFormulas = {
    slug: 'jee-chemistry-formulas',
    exam: 'JEE',
    subject: 'Chemistry',
    title: `JEE Chemistry Formula Sheet ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} — 130+ Formulas, All Chapters | MindPeak`,
    description: `Complete JEE Chemistry formula sheet with 130+ formulas — Physical Chemistry equations, Organic named reactions & mechanisms, Inorganic Chemistry trends. Free PDF download from MindPeak Institute.`,
    heroHeading: 'JEE Chemistry',
    heroHighlight: 'Formula Sheet',
    heroParagraph: 'The most comprehensive JEE Chemistry formula collection — 130+ formulas across Physical, Organic & Inorganic Chemistry. Each formula tagged by exam frequency so you know what to prioritize.',
    totalFormulas: 132,
    chapters: [
        {
            name: 'Mole Concept & Stoichiometry',
            formulas: [
                {
                    name: 'Moles',
                    expression: 'n = mass / M = molecules / Nₐ = volume(STP) / 22.4L',
                    freq: 'must-know'
                },
                {
                    name: 'Avogadro\'s Number',
                    expression: 'Nₐ = 6.022 × 10²³ mol⁻¹',
                    freq: 'must-know'
                },
                {
                    name: 'Molarity',
                    expression: 'M = moles of solute / volume of solution (L)',
                    freq: 'must-know'
                },
                {
                    name: 'Molality',
                    expression: 'm = moles of solute / mass of solvent (kg)',
                    freq: 'high'
                },
                {
                    name: 'Normality',
                    expression: 'N = equivalents / volume (L) = M × n-factor',
                    freq: 'high'
                },
                {
                    name: 'Mole Fraction',
                    expression: 'χₐ = nₐ / (nₐ + n_b)',
                    freq: 'high'
                },
                {
                    name: 'ppm',
                    expression: 'ppm = (mass of solute / mass of solution) × 10⁶',
                    freq: 'medium'
                },
                {
                    name: 'Equivalent Weight',
                    expression: 'E = Molecular Weight / n-factor',
                    freq: 'high'
                },
                {
                    name: 'Limiting Reagent',
                    expression: 'Compare moles / stoichiometric coefficient',
                    note: 'Smallest ratio = limiting reagent',
                    freq: 'must-know'
                },
                {
                    name: '% Yield',
                    expression: '% yield = (actual yield / theoretical yield) × 100',
                    freq: 'medium'
                },
                {
                    name: 'Vapour Density',
                    expression: 'VD = M / 2',
                    note: 'For gases',
                    freq: 'medium'
                },
                {
                    name: 'Gay-Lussac\'s Law of Combining Volumes',
                    expression: 'V₁/n₁ = V₂/n₂ (at same T, P)',
                    freq: 'medium'
                }
            ]
        },
        {
            name: 'Atomic Structure',
            formulas: [
                {
                    name: 'de Broglie Wavelength',
                    expression: 'λ = h / mv = h / p',
                    freq: 'must-know'
                },
                {
                    name: 'Bohr Radius',
                    expression: 'rₙ = 0.529 × n² / Z Å',
                    freq: 'must-know'
                },
                {
                    name: 'Bohr Energy',
                    expression: 'Eₙ = −13.6 Z² / n² eV',
                    freq: 'must-know'
                },
                {
                    name: 'Bohr Velocity',
                    expression: 'vₙ = 2.18 × 10⁶ × Z / n m/s',
                    freq: 'high'
                },
                {
                    name: 'Bohr Frequency',
                    expression: 'νₙ = 6.58 × 10¹⁵ × Z² / n³ Hz',
                    freq: 'medium'
                },
                {
                    name: 'Rydberg Formula',
                    expression: '1/λ = RZ²(1/n₁² − 1/n₂²)',
                    note: 'R = 1.097 × 10⁷ m⁻¹',
                    freq: 'must-know'
                },
                {
                    name: 'Heisenberg Uncertainty',
                    expression: 'Δx · Δp ≥ h / 4π',
                    freq: 'high'
                },
                {
                    name: 'Photoelectric Effect',
                    expression: 'E = hν = hc/λ = KE + φ',
                    freq: 'must-know'
                },
                {
                    name: 'Number of Spectral Lines',
                    expression: 'Lines = n(n−1)/2',
                    note: 'From nth level to ground',
                    freq: 'high'
                },
                {
                    name: 'Magnetic Quantum Number Range',
                    expression: 'mₗ = −l to +l',
                    note: '2l+1 orbitals per subshell',
                    freq: 'high'
                },
                {
                    name: 'Max Electrons per Shell',
                    expression: '2n²',
                    freq: 'must-know'
                },
                {
                    name: 'Nodes',
                    expression: 'Radial nodes = n − l − 1; Angular nodes = l; Total = n − 1',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Chemical Thermodynamics',
            formulas: [
                {
                    name: 'First Law',
                    expression: 'ΔU = q + w',
                    note: 'IUPAC sign convention',
                    freq: 'must-know'
                },
                {
                    name: 'Enthalpy',
                    expression: 'H = U + PV',
                    freq: 'must-know'
                },
                {
                    name: 'Gibbs Free Energy',
                    expression: 'ΔG = ΔH − TΔS',
                    freq: 'must-know'
                },
                {
                    name: 'Gibbs & Equilibrium',
                    expression: 'ΔG° = −RT ln K = −2.303RT log K',
                    freq: 'must-know'
                },
                {
                    name: 'Gibbs & Cell EMF',
                    expression: 'ΔG° = −nFE°_cell',
                    freq: 'must-know'
                },
                {
                    name: 'Work (Reversible Isothermal)',
                    expression: 'w = −nRT ln(V₂/V₁) = −2.303nRT log(V₂/V₁)',
                    freq: 'must-know'
                },
                {
                    name: 'Work (Irreversible)',
                    expression: 'w = −P_ext(V₂ − V₁)',
                    freq: 'high'
                },
                {
                    name: 'Heat Capacity (Cp − Cv)',
                    expression: 'Cp − Cv = nR',
                    note: 'For ideal gas',
                    freq: 'must-know'
                },
                {
                    name: 'Hess\'s Law',
                    expression: 'ΔH_rxn = Σ ΔH_f(products) − Σ ΔH_f(reactants)',
                    freq: 'must-know'
                },
                {
                    name: 'Kirchhoff\'s Equation',
                    expression: 'ΔH₂ − ΔH₁ = ΔCp(T₂ − T₁)',
                    freq: 'high'
                },
                {
                    name: 'Bond Energy',
                    expression: 'ΔH = Σ BE(reactants) − Σ BE(products)',
                    freq: 'high'
                },
                {
                    name: 'Trouton\'s Rule',
                    expression: 'ΔS_vap ≈ 88 J/mol·K',
                    note: 'For non-associated liquids',
                    freq: 'medium'
                },
                {
                    name: 'Entropy Change',
                    expression: 'ΔS = q_rev / T = nCp ln(T₂/T₁) + nR ln(V₂/V₁)',
                    freq: 'high'
                },
                {
                    name: 'Spontaneity Criteria',
                    expression: 'ΔG < 0 → spontaneous; ΔG = 0 → equilibrium',
                    freq: 'must-know'
                }
            ]
        },
        {
            name: 'Chemical Equilibrium',
            formulas: [
                {
                    name: 'Equilibrium Constant (Kc)',
                    expression: 'Kc = [Products]^coefficients / [Reactants]^coefficients',
                    freq: 'must-know'
                },
                {
                    name: 'Kp & Kc Relation',
                    expression: 'Kp = Kc(RT)^Δn',
                    note: 'Δn = moles gas products − reactants',
                    freq: 'must-know'
                },
                {
                    name: 'Reaction Quotient',
                    expression: 'Q vs K: Q < K → forward; Q > K → backward',
                    freq: 'must-know'
                },
                {
                    name: 'Degree of Dissociation',
                    expression: 'α = √(Kp / (Kp + P)) for A ⇌ B + C',
                    freq: 'high'
                },
                {
                    name: 'Van\'t Hoff Equation',
                    expression: 'ln(K₂/K₁) = (ΔH°/R)(1/T₁ − 1/T₂)',
                    freq: 'high'
                },
                {
                    name: 'Le Chatelier\'s Principle',
                    expression: 'System shifts to oppose imposed change',
                    note: 'T↑, P↑, concentration changes',
                    freq: 'must-know'
                },
                {
                    name: 'Kw (Water)',
                    expression: 'Kw = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C',
                    freq: 'must-know'
                },
                {
                    name: 'Henderson-Hasselbalch',
                    expression: 'pH = pKa + log([A⁻]/[HA])',
                    freq: 'must-know'
                },
                {
                    name: 'Buffer Capacity',
                    expression: 'β = ΔB / ΔpH',
                    note: 'Max when pH = pKa',
                    freq: 'medium'
                },
                {
                    name: 'Solubility Product',
                    expression: 'Ksp = [Aⁿ⁺]^m × [Bᵐ⁻]^n for AmBn',
                    freq: 'must-know'
                },
                {
                    name: 'Common Ion Effect',
                    expression: 'Solubility decreases with common ion',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Chemical Kinetics',
            formulas: [
                {
                    name: 'Rate Law',
                    expression: 'Rate = k[A]^m[B]^n',
                    note: 'm,n from experiment, not stoichiometry',
                    freq: 'must-know'
                },
                {
                    name: 'Zero Order',
                    expression: '[A] = [A]₀ − kt; t½ = [A]₀/2k',
                    freq: 'must-know'
                },
                {
                    name: 'First Order',
                    expression: 'k = (2.303/t)log([A]₀/[A]); t½ = 0.693/k',
                    freq: 'must-know'
                },
                {
                    name: 'Second Order',
                    expression: '1/[A] = 1/[A]₀ + kt; t½ = 1/(k[A]₀)',
                    freq: 'high'
                },
                {
                    name: 'Arrhenius Equation',
                    expression: 'k = Ae^(−Ea/RT)',
                    freq: 'must-know'
                },
                {
                    name: 'Arrhenius (Two Temp)',
                    expression: 'log(k₂/k₁) = (Ea/2.303R)(1/T₁ − 1/T₂)',
                    freq: 'must-know'
                },
                {
                    name: 'Temperature Coefficient',
                    expression: 'μ = k(T+10)/k(T) ≈ 2–3',
                    freq: 'medium'
                },
                {
                    name: 'Pseudo First Order',
                    expression: 'Rate = k\'[A] where k\' = k[B]₀',
                    note: 'When [B] >> [A]',
                    freq: 'high'
                },
                {
                    name: 'nth Order Half-Life',
                    expression: 't½ ∝ [A]₀^(1−n)',
                    note: 'General relationship',
                    freq: 'high'
                },
                {
                    name: 'Catalyst Effect',
                    expression: 'Ea(catalyzed) < Ea(uncatalyzed); k increases',
                    freq: 'must-know'
                }
            ]
        },
        {
            name: 'Electrochemistry',
            formulas: [
                {
                    name: 'Nernst Equation',
                    expression: 'E = E° − (0.0592/n)log Q',
                    note: 'At 25°C',
                    freq: 'must-know'
                },
                {
                    name: 'Cell EMF',
                    expression: 'E°_cell = E°_cathode − E°_anode',
                    freq: 'must-know'
                },
                {
                    name: 'Faraday\'s 1st Law',
                    expression: 'w = ZIt = (M × I × t)/(n × F)',
                    freq: 'must-know'
                },
                {
                    name: 'Faraday\'s 2nd Law',
                    expression: 'w₁/w₂ = E₁/E₂',
                    note: 'Same charge passed',
                    freq: 'high'
                },
                {
                    name: 'Faraday\'s Constant',
                    expression: 'F = 96485 C/mol ≈ 96500 C/mol',
                    freq: 'must-know'
                },
                {
                    name: 'Conductance',
                    expression: 'G = 1/R = κ × A/l',
                    freq: 'high'
                },
                {
                    name: 'Molar Conductivity',
                    expression: 'Λm = κ × 1000/M',
                    note: 'M = molarity',
                    freq: 'must-know'
                },
                {
                    name: 'Kohlrausch\'s Law',
                    expression: 'Λ°m = ν₊λ°₊ + ν₋λ°₋',
                    freq: 'must-know'
                },
                {
                    name: 'Λm at Dilution (Weak)',
                    expression: 'α = Λm / Λ°m',
                    note: 'Degree of dissociation',
                    freq: 'high'
                },
                {
                    name: 'Debye-Hückel-Onsager',
                    expression: 'Λm = Λ°m − b√c',
                    note: 'For strong electrolytes',
                    freq: 'medium'
                },
                {
                    name: 'Lead Storage Battery',
                    expression: 'Pb + PbO₂ + 2H₂SO₄ ⇌ 2PbSO₄ + 2H₂O',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Solutions & Colligative Properties',
            formulas: [
                {
                    name: 'Raoult\'s Law',
                    expression: 'P = P°ₐxₐ + P°_bx_b',
                    freq: 'must-know'
                },
                {
                    name: 'Relative Lowering of VP',
                    expression: '(P° − P)/P° = χ_solute = n₂/(n₁ + n₂)',
                    freq: 'must-know'
                },
                {
                    name: 'Elevation in BP',
                    expression: 'ΔTb = Kb × m × i',
                    freq: 'must-know'
                },
                {
                    name: 'Depression in FP',
                    expression: 'ΔTf = Kf × m × i',
                    freq: 'must-know'
                },
                {
                    name: 'Osmotic Pressure',
                    expression: 'π = iCRT = inRT/V',
                    freq: 'must-know'
                },
                {
                    name: 'Van\'t Hoff Factor',
                    expression: 'i = 1 + (n−1)α',
                    note: 'α = degree of dissociation',
                    freq: 'must-know'
                },
                {
                    name: 'Kb Formula',
                    expression: 'Kb = RT²bM₁ / (1000 × ΔH_vap)',
                    freq: 'medium'
                },
                {
                    name: 'Kf Formula',
                    expression: 'Kf = RT²fM₁ / (1000 × ΔH_fus)',
                    freq: 'medium'
                },
                {
                    name: 'Henry\'s Law',
                    expression: 'P = KH × χ',
                    note: 'For gas solubility',
                    freq: 'high'
                },
                {
                    name: 'Ideal vs Non-ideal',
                    expression: 'ΔH_mix = 0, ΔV_mix = 0 for ideal',
                    freq: 'high'
                },
                {
                    name: 'Positive Deviation',
                    expression: 'P_total > P°ₐxₐ + P°_bx_b',
                    note: 'A-B weaker than A-A, B-B',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Organic Chemistry — Reactions & Mechanisms',
            formulas: [
                {
                    name: 'Degree of Unsaturation',
                    expression: 'DoU = (2C + 2 + N − H − X) / 2',
                    freq: 'must-know'
                },
                {
                    name: 'Markovnikov\'s Rule',
                    expression: 'H adds to C with more H atoms (HX addition)',
                    freq: 'must-know'
                },
                {
                    name: 'Anti-Markovnikov',
                    expression: 'HBr + peroxide → anti-Markovnikov addition',
                    note: 'Kharasch effect',
                    freq: 'must-know'
                },
                {
                    name: 'SN1 Rate',
                    expression: 'Rate = k[substrate]; 3° > 2° > 1°',
                    freq: 'must-know'
                },
                {
                    name: 'SN2 Rate',
                    expression: 'Rate = k[substrate][nucleophile]; methyl > 1° > 2°',
                    note: 'Walden inversion',
                    freq: 'must-know'
                },
                {
                    name: 'E1 vs E2',
                    expression: 'E1: unimolecular, carbocation; E2: bimolecular, anti-periplanar',
                    freq: 'high'
                },
                {
                    name: 'Saytzeff Rule',
                    expression: 'More substituted alkene is major product',
                    freq: 'must-know'
                },
                {
                    name: 'Hofmann Rule',
                    expression: 'Less substituted alkene with bulky base/quaternary N',
                    freq: 'high'
                },
                {
                    name: 'Acidity Order (Functional Groups)',
                    expression: 'RCOOH > ArOH > ROH > HC≡CH > NH₃ > RH',
                    freq: 'must-know'
                },
                {
                    name: 'Basicity Order (Amines, gas)',
                    expression: '3° > 2° > 1° > NH₃ (in gas phase)',
                    freq: 'high'
                },
                {
                    name: 'Basicity Order (Amines, aq)',
                    expression: '2° > 1° > 3° > NH₃ (in water)',
                    note: 'Solvation + steric effects',
                    freq: 'high'
                },
                {
                    name: 'Inductive Effect Order',
                    expression: '−NO₂ > −CN > −COOH > −F > −Cl > −Br > −I (−I)',
                    freq: 'high'
                },
                {
                    name: '+M Groups',
                    expression: '−NH₂ > −NHR > −OH > −OR > −NHCOR (activating)',
                    freq: 'high'
                },
                {
                    name: '−M Groups',
                    expression: '−NO₂ > −CN > −CHO > −COR > −COOH (deactivating)',
                    freq: 'high'
                },
                {
                    name: 'Aldol Condensation',
                    expression: 'R-CHO + R-CHO → β-hydroxy aldehyde → α,β-unsaturated aldehyde',
                    freq: 'high'
                },
                {
                    name: 'Cannizzaro Reaction',
                    expression: '2HCHO → CH₃OH + HCOONa (with NaOH)',
                    note: 'No α-H aldehydes',
                    freq: 'high'
                },
                {
                    name: 'Grignard Reaction',
                    expression: 'RMgX + HCHO → 1° alcohol; RCHO → 2°; R₂CO → 3°',
                    freq: 'must-know'
                },
                {
                    name: 'Tollen\'s Test',
                    expression: 'RCHO + 2Ag(NH₃)₂⁺ → RCOO⁻ + 2Ag↓ (silver mirror)',
                    freq: 'high'
                },
                {
                    name: 'Fehling\'s Test',
                    expression: 'RCHO + 2Cu²⁺ → RCOO⁻ + Cu₂O↓ (red ppt)',
                    note: 'Not for aromatic aldehydes',
                    freq: 'high'
                },
                {
                    name: 'Ozonolysis',
                    expression: 'C=C + O₃ → carbonyl fragments',
                    note: 'Reductive: Zn/H₂O; Oxidative: H₂O₂',
                    freq: 'must-know'
                }
            ]
        },
        {
            name: 'Organic Chemistry — Named Reactions',
            formulas: [
                {
                    name: 'Wurtz Reaction',
                    expression: '2RX + 2Na → R-R + 2NaX',
                    note: 'Coupling of alkyl halides',
                    freq: 'high'
                },
                {
                    name: 'Friedel-Crafts Alkylation',
                    expression: 'ArH + RX → ArR (with AlCl₃)',
                    freq: 'must-know'
                },
                {
                    name: 'Friedel-Crafts Acylation',
                    expression: 'ArH + RCOCl → ArCOR (with AlCl₃)',
                    note: 'No rearrangement',
                    freq: 'must-know'
                },
                {
                    name: 'Kolbe\'s Reaction',
                    expression: 'ArO⁻Na⁺ + CO₂ → ArOH-COOH (salicylic acid)',
                    freq: 'high'
                },
                {
                    name: 'Reimer-Tiemann Reaction',
                    expression: 'ArOH + CHCl₃/NaOH → ArOH-CHO (salicylaldehyde)',
                    freq: 'high'
                },
                {
                    name: 'Williamson Synthesis',
                    expression: 'RO⁻ + R\'X → ROR\' (ether synthesis)',
                    freq: 'must-know'
                },
                {
                    name: 'Sandmeyer Reaction',
                    expression: 'ArN₂⁺ + CuX → ArX (X = Cl, Br, CN)',
                    freq: 'must-know'
                },
                {
                    name: 'Gattermann Reaction',
                    expression: 'ArN₂⁺ + Cu/HCl → ArCl',
                    freq: 'medium'
                },
                {
                    name: 'Balz-Schiemann',
                    expression: 'ArN₂⁺BF₄⁻ →Δ ArF + N₂ + BF₃',
                    freq: 'high'
                },
                {
                    name: 'Clemmensen Reduction',
                    expression: 'C=O → CH₂ (Zn-Hg/HCl)',
                    note: 'Acidic conditions',
                    freq: 'must-know'
                },
                {
                    name: 'Wolff-Kishner Reduction',
                    expression: 'C=O → CH₂ (NH₂NH₂/KOH)',
                    note: 'Basic conditions',
                    freq: 'must-know'
                },
                {
                    name: 'Hell-Volhard-Zelinsky',
                    expression: 'RCOOH + Br₂/P → α-bromo acid',
                    freq: 'high'
                },
                {
                    name: 'Rosenmund Reduction',
                    expression: 'RCOCl + H₂/Pd-BaSO₄ → RCHO',
                    note: 'Partial reduction',
                    freq: 'high'
                },
                {
                    name: 'Stephen Reduction',
                    expression: 'RCN + SnCl₂/HCl → RCHO',
                    freq: 'medium'
                }
            ]
        },
        {
            name: 'Inorganic Chemistry — Coordination & Bonding',
            formulas: [
                {
                    name: 'Magnetic Moment',
                    expression: 'μ = √(n(n+2)) BM',
                    note: 'n = unpaired electrons',
                    freq: 'must-know'
                },
                {
                    name: 'Crystal Field Splitting',
                    expression: 'Δ_oct > Δ_tet; Δ_tet = 4/9 Δ_oct',
                    freq: 'must-know'
                },
                {
                    name: 'Spectrochemical Series',
                    expression: 'I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < NO₂⁻ < CN⁻ < CO',
                    freq: 'must-know'
                },
                {
                    name: 'EAN Rule',
                    expression: 'EAN = Z − OS + 2(CN)',
                    note: 'Effective atomic number',
                    freq: 'high'
                },
                {
                    name: 'CFSE (Octahedral)',
                    expression: 'CFSE = (−0.4t₂g + 0.6eg)Δ_oct + pairing energy',
                    freq: 'high'
                },
                {
                    name: 'Coordination Number',
                    expression: 'CN = number of donor atoms bonded to metal',
                    freq: 'must-know'
                },
                {
                    name: 'Lattice Energy',
                    expression: 'U ∝ (Z⁺ × Z⁻) / (r⁺ + r⁻)',
                    note: 'Born-Landé equation',
                    freq: 'high'
                },
                {
                    name: 'Born-Haber Cycle',
                    expression: 'ΔH_f = S + IE + ½D − EA − U',
                    note: 'For ionic compounds',
                    freq: 'must-know'
                },
                {
                    name: 'Fajan\'s Rules',
                    expression: 'Small cation + large anion → more covalent',
                    freq: 'must-know'
                },
                {
                    name: 'Hybridization Formula',
                    expression: 'H = ½(V + M − C + A)',
                    note: 'V=valence, M=monovalent, C=charge, A=attached',
                    freq: 'high'
                },
                {
                    name: 'Bond Order',
                    expression: 'BO = (Nb − Na) / 2',
                    note: 'From MOT',
                    freq: 'must-know'
                },
                {
                    name: 'Dipole Moment',
                    expression: 'μ = q × d (in Debye)',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Surface Chemistry & Solid State',
            formulas: [
                {
                    name: 'Freundlich Adsorption',
                    expression: 'x/m = kP^(1/n)',
                    note: '1/n between 0 and 1',
                    freq: 'high'
                },
                {
                    name: 'Langmuir Adsorption',
                    expression: 'P/(x/m) = 1/(ab) + P/a',
                    freq: 'high'
                },
                {
                    name: 'Gold Number',
                    expression: 'mg of protective colloid for colour change in 10mL gold sol',
                    freq: 'medium'
                },
                {
                    name: 'FCC Packing Efficiency',
                    expression: '74%',
                    note: '4 atoms per unit cell; r = a/(2√2)',
                    freq: 'must-know'
                },
                {
                    name: 'BCC Packing Efficiency',
                    expression: '68%',
                    note: '2 atoms per unit cell; r = √3a/4',
                    freq: 'must-know'
                },
                {
                    name: 'SC Packing Efficiency',
                    expression: '52.4%',
                    note: '1 atom per unit cell; r = a/2',
                    freq: 'high'
                },
                {
                    name: 'Density of Unit Cell',
                    expression: 'ρ = ZM / (a³Nₐ)',
                    note: 'Z = atoms per cell',
                    freq: 'must-know'
                },
                {
                    name: 'Bragg\'s Law',
                    expression: 'nλ = 2d sin θ',
                    freq: 'high'
                },
                {
                    name: 'Void Radius (Octahedral)',
                    expression: 'r_void / r_sphere = 0.414',
                    freq: 'high'
                },
                {
                    name: 'Void Radius (Tetrahedral)',
                    expression: 'r_void / r_sphere = 0.225',
                    freq: 'high'
                },
                {
                    name: 'Schottky Defect',
                    expression: 'Equal cation + anion vacancies; density decreases',
                    freq: 'high'
                },
                {
                    name: 'Frenkel Defect',
                    expression: 'Ion displaced to interstitial; density unchanged',
                    freq: 'high'
                }
            ]
        }
    ],
    faqs: [
        {
            q: 'Which JEE Chemistry formulas are most important?',
            a: 'Physical Chemistry formulas (Nernst equation, rate laws, thermodynamics relations, colligative properties) carry the most numerical marks — typically 30-35% of Chemistry. Organic named reactions are equally important. Focus on "must-know" tagged formulas first.'
        },
        {
            q: 'How many formulas do I need to memorise for JEE Chemistry?',
            a: 'Approximately 100-130 key formulas across Physical, Organic, and Inorganic Chemistry. Our formula sheet covers all frequently tested ones with exam frequency tags. Quality of understanding matters more than quantity — understand derivations for Physical Chemistry.'
        },
        {
            q: 'How should I revise Chemistry formulas before JEE?',
            a: 'Use spaced repetition: review every 3 days. Cover the formula, recall it, then verify. Practice 5 numerical problems per Physical Chemistry formula. For Organic, practice mechanism writing. For Inorganic, create comparison tables.'
        },
        {
            q: 'Are these formulas enough for JEE Advanced?',
            a: 'Yes — this sheet covers all standard formulas needed for both JEE Main and Advanced. For Advanced, focus more on application and multi-concept problems rather than additional formulas. MindPeak mentors help you master application through 1-on-1 problem solving.'
        },
        {
            q: 'What is the weightage of Physical vs Organic vs Inorganic in JEE?',
            a: 'In JEE Main: Physical ~33%, Organic ~33%, Inorganic ~33%. In JEE Advanced: Physical ~35-40%, Organic ~30-35%, Inorganic ~25-30%. Physical Chemistry is formula-heavy and most scoring if you master the equations.'
        },
        {
            q: 'How to remember Organic Chemistry named reactions?',
            a: 'Group reactions by type: oxidation, reduction, coupling, rearrangement. Practice writing mechanisms, not just products. Use flashcards with reaction conditions. Our mentors recommend the "reaction matrix" approach — linking reagents to transformations.'
        }
    ],
    proTips: [
        'Physical Chemistry carries 30-35% marks — master Thermodynamics, Electrochemistry, and Equilibrium formulas first.',
        'For Organic Chemistry, don\'t just memorize — understand WHY a reaction happens (nucleophilic attack, leaving group stability).',
        'Create a "formula + 3 problems" revision card for each key formula.',
        'Inorganic Chemistry is more about trends than formulas — build comparison tables for periodic properties.',
        'Color-code formulas by chapter in your notebook: Physical = blue, Organic = green, Inorganic = red.'
    ]
};
/* ═══════════════════════════════════════════════════════════════
   JEE PHYSICS — ~120 formulas across 10 chapters
   ═══════════════════════════════════════════════════════════════ */ const jeePhysicsFormulas = {
    slug: 'jee-physics-formulas',
    exam: 'JEE',
    subject: 'Physics',
    title: `JEE Physics Formula Sheet ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} — 120+ Formulas, All Chapters PDF | MindPeak`,
    description: `Complete JEE Physics formula sheet with 120+ formulas — Mechanics, Electrodynamics, Optics, Thermodynamics, Modern Physics. Free PDF from MindPeak Institute.`,
    heroHeading: 'JEE Physics',
    heroHighlight: 'Formula Sheet',
    heroParagraph: 'The most comprehensive JEE Physics formula collection — 120+ formulas across Mechanics, Electrodynamics, Waves, Optics & Modern Physics. Exam frequency tags included.',
    totalFormulas: 124,
    chapters: [
        {
            name: 'Kinematics',
            formulas: [
                {
                    name: 'Equations of Motion',
                    expression: 'v = u + at; s = ut + ½at²; v² = u² + 2as',
                    freq: 'must-know'
                },
                {
                    name: 'Relative Velocity',
                    expression: 'v_AB = v_A − v_B',
                    freq: 'must-know'
                },
                {
                    name: 'Projectile Range',
                    expression: 'R = u²sin2θ / g',
                    note: 'Max at θ = 45°',
                    freq: 'must-know'
                },
                {
                    name: 'Projectile Max Height',
                    expression: 'H = u²sin²θ / 2g',
                    freq: 'must-know'
                },
                {
                    name: 'Time of Flight',
                    expression: 'T = 2u sinθ / g',
                    freq: 'must-know'
                },
                {
                    name: 'Projectile on Incline',
                    expression: 'R = 2u²sinα·cos(α+β) / (g·cos²β)',
                    freq: 'medium'
                },
                {
                    name: 'River Crossing (min time)',
                    expression: 't = d/v_swim',
                    note: 'Drift = (v_river/v_swim)×d',
                    freq: 'high'
                },
                {
                    name: 'Circular Motion (Centripetal)',
                    expression: 'a_c = v²/r = ω²r',
                    freq: 'must-know'
                }
            ]
        },
        {
            name: 'Newton\'s Laws & Friction',
            formulas: [
                {
                    name: 'Newton\'s 2nd Law',
                    expression: 'F = ma = dp/dt',
                    freq: 'must-know'
                },
                {
                    name: 'Friction',
                    expression: 'f ≤ μN; f_kinetic = μ_k N',
                    freq: 'must-know'
                },
                {
                    name: 'Pseudo Force',
                    expression: 'F_pseudo = −ma_frame',
                    note: 'In non-inertial frame',
                    freq: 'high'
                },
                {
                    name: 'Pulley (Atwood)',
                    expression: 'a = (m₁ − m₂)g / (m₁ + m₂); T = 2m₁m₂g / (m₁ + m₂)',
                    freq: 'must-know'
                },
                {
                    name: 'Banking Angle',
                    expression: 'tan θ = v²/(rg)',
                    note: 'Without friction',
                    freq: 'high'
                },
                {
                    name: 'Spring Force',
                    expression: 'F = −kx (Hooke\'s Law)',
                    freq: 'must-know'
                },
                {
                    name: 'Impulse',
                    expression: 'J = FΔt = Δp',
                    freq: 'must-know'
                },
                {
                    name: 'Conical Pendulum',
                    expression: 'T = 2π√(L cosθ / g)',
                    freq: 'medium'
                }
            ]
        },
        {
            name: 'Work, Energy & Power',
            formulas: [
                {
                    name: 'Work Done',
                    expression: 'W = F·d·cosθ = ∫F·ds',
                    freq: 'must-know'
                },
                {
                    name: 'Kinetic Energy',
                    expression: 'KE = ½mv²',
                    freq: 'must-know'
                },
                {
                    name: 'Gravitational PE',
                    expression: 'U = −GMm/r (from infinity); U = mgh (near surface)',
                    freq: 'must-know'
                },
                {
                    name: 'Spring PE',
                    expression: 'U = ½kx²',
                    freq: 'must-know'
                },
                {
                    name: 'Power',
                    expression: 'P = W/t = F·v',
                    freq: 'must-know'
                },
                {
                    name: 'Coefficient of Restitution',
                    expression: 'e = −(v₂ − v₁)/(u₂ − u₁)',
                    note: '0 ≤ e ≤ 1',
                    freq: 'must-know'
                },
                {
                    name: 'Elastic Collision (1D)',
                    expression: 'v₁ = [(m₁−m₂)u₁ + 2m₂u₂]/(m₁+m₂)',
                    freq: 'must-know'
                }
            ]
        },
        {
            name: 'Rotational Motion & Gravitation',
            formulas: [
                {
                    name: 'Torque',
                    expression: 'τ = r × F = Iα',
                    freq: 'must-know'
                },
                {
                    name: 'Angular Momentum',
                    expression: 'L = Iω = mvr (for particle)',
                    freq: 'must-know'
                },
                {
                    name: 'Moment of Inertia (Disc)',
                    expression: 'I = ½MR²',
                    freq: 'must-know'
                },
                {
                    name: 'MOI (Solid Sphere)',
                    expression: 'I = ⅖MR²',
                    freq: 'must-know'
                },
                {
                    name: 'MOI (Hollow Sphere)',
                    expression: 'I = ⅔MR²',
                    freq: 'high'
                },
                {
                    name: 'MOI (Rod, center)',
                    expression: 'I = ML²/12',
                    freq: 'must-know'
                },
                {
                    name: 'Parallel Axis Theorem',
                    expression: 'I = I_cm + Md²',
                    freq: 'must-know'
                },
                {
                    name: 'Rolling (No Slip)',
                    expression: 'v = Rω; a = Rα',
                    freq: 'must-know'
                },
                {
                    name: 'KE of Rolling Body',
                    expression: 'KE = ½mv²(1 + k²/R²)',
                    note: 'k = radius of gyration',
                    freq: 'must-know'
                },
                {
                    name: 'Newton\'s Gravity',
                    expression: 'F = GMm/r²',
                    freq: 'must-know'
                },
                {
                    name: 'Orbital Velocity',
                    expression: 'v₀ = √(GM/r) = √(gR)',
                    note: 'For near-surface orbit',
                    freq: 'must-know'
                },
                {
                    name: 'Escape Velocity',
                    expression: 'vₑ = √(2gR) = √(2GM/R)',
                    freq: 'must-know'
                },
                {
                    name: 'Kepler\'s 3rd Law',
                    expression: 'T² ∝ a³',
                    freq: 'must-know'
                },
                {
                    name: 'g at Height h',
                    expression: 'g\' = g(1 − 2h/R)',
                    note: 'For h << R',
                    freq: 'high'
                },
                {
                    name: 'g at Depth d',
                    expression: 'g\' = g(1 − d/R)',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Thermodynamics & Kinetic Theory',
            formulas: [
                {
                    name: 'Ideal Gas Law',
                    expression: 'PV = nRT',
                    freq: 'must-know'
                },
                {
                    name: 'KE of Gas Molecule',
                    expression: 'KE = (3/2)kT per molecule',
                    freq: 'must-know'
                },
                {
                    name: 'RMS Speed',
                    expression: 'v_rms = √(3RT/M) = √(3kT/m)',
                    freq: 'must-know'
                },
                {
                    name: 'Most Probable Speed',
                    expression: 'v_mp = √(2RT/M)',
                    freq: 'high'
                },
                {
                    name: 'Mean Speed',
                    expression: 'v_mean = √(8RT/πM)',
                    freq: 'high'
                },
                {
                    name: 'First Law',
                    expression: 'ΔU = Q − W',
                    freq: 'must-know'
                },
                {
                    name: 'Isothermal Work',
                    expression: 'W = nRT ln(V₂/V₁)',
                    freq: 'must-know'
                },
                {
                    name: 'Adiabatic Process',
                    expression: 'PV^γ = constant; TV^(γ−1) = constant',
                    freq: 'must-know'
                },
                {
                    name: 'Carnot Efficiency',
                    expression: 'η = 1 − T_cold/T_hot',
                    freq: 'must-know'
                },
                {
                    name: 'Entropy',
                    expression: 'ΔS = Q_rev/T',
                    freq: 'high'
                },
                {
                    name: 'Stefan\'s Law',
                    expression: 'P = σAT⁴',
                    note: 'σ = 5.67 × 10⁻⁸ W/m²K⁴',
                    freq: 'must-know'
                },
                {
                    name: 'Newton\'s Law of Cooling',
                    expression: 'dT/dt = −k(T − T_s)',
                    freq: 'high'
                },
                {
                    name: 'Wien\'s Law',
                    expression: 'λ_max T = b',
                    note: 'b = 2.898 × 10⁻³ m·K',
                    freq: 'high'
                },
                {
                    name: 'Thermal Conductivity',
                    expression: 'Q/t = kA(T₁ − T₂)/L',
                    freq: 'must-know'
                }
            ]
        },
        {
            name: 'SHM & Waves',
            formulas: [
                {
                    name: 'SHM Displacement',
                    expression: 'x = A sin(ωt + φ)',
                    freq: 'must-know'
                },
                {
                    name: 'SHM Period (Spring)',
                    expression: 'T = 2π√(m/k)',
                    freq: 'must-know'
                },
                {
                    name: 'SHM Period (Pendulum)',
                    expression: 'T = 2π√(L/g)',
                    freq: 'must-know'
                },
                {
                    name: 'SHM Velocity',
                    expression: 'v = ω√(A² − x²)',
                    freq: 'must-know'
                },
                {
                    name: 'SHM Energy',
                    expression: 'E = ½kA² = ½mω²A²',
                    freq: 'must-know'
                },
                {
                    name: 'Wave Speed',
                    expression: 'v = fλ = ω/k',
                    freq: 'must-know'
                },
                {
                    name: 'String Wave Speed',
                    expression: 'v = √(T/μ)',
                    note: 'T = tension, μ = linear mass density',
                    freq: 'must-know'
                },
                {
                    name: 'Beat Frequency',
                    expression: 'f_beat = |f₁ − f₂|',
                    freq: 'must-know'
                },
                {
                    name: 'Doppler Effect',
                    expression: 'f\' = f(v ± v_observer)/(v ∓ v_source)',
                    freq: 'must-know'
                },
                {
                    name: 'Standing Wave (Both Ends Fixed)',
                    expression: 'f_n = nv/2L',
                    note: 'n = 1, 2, 3...',
                    freq: 'must-know'
                },
                {
                    name: 'Resonance (Open Pipe)',
                    expression: 'f_n = nv/2L (all harmonics)',
                    freq: 'high'
                },
                {
                    name: 'Resonance (Closed Pipe)',
                    expression: 'f_n = nv/4L (odd harmonics only)',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Electrostatics & Capacitors',
            formulas: [
                {
                    name: 'Coulomb\'s Law',
                    expression: 'F = kq₁q₂/r²',
                    note: 'k = 9 × 10⁹ Nm²/C²',
                    freq: 'must-know'
                },
                {
                    name: 'Electric Field',
                    expression: 'E = kQ/r² = F/q₀',
                    freq: 'must-know'
                },
                {
                    name: 'Gauss\'s Law',
                    expression: '∮E·dA = Q_enc/ε₀',
                    freq: 'must-know'
                },
                {
                    name: 'E (Infinite Plane)',
                    expression: 'E = σ/2ε₀',
                    freq: 'must-know'
                },
                {
                    name: 'E (Between Parallel Plates)',
                    expression: 'E = σ/ε₀',
                    freq: 'must-know'
                },
                {
                    name: 'Electric Potential',
                    expression: 'V = kQ/r',
                    freq: 'must-know'
                },
                {
                    name: 'Potential Energy',
                    expression: 'U = kq₁q₂/r',
                    freq: 'must-know'
                },
                {
                    name: 'Capacitance (Parallel Plate)',
                    expression: 'C = ε₀A/d; with dielectric: C = Kε₀A/d',
                    freq: 'must-know'
                },
                {
                    name: 'Capacitors in Series',
                    expression: '1/C_eq = 1/C₁ + 1/C₂ + ...',
                    freq: 'must-know'
                },
                {
                    name: 'Capacitors in Parallel',
                    expression: 'C_eq = C₁ + C₂ + ...',
                    freq: 'must-know'
                },
                {
                    name: 'Energy in Capacitor',
                    expression: 'U = ½CV² = Q²/2C = ½QV',
                    freq: 'must-know'
                },
                {
                    name: 'Electric Dipole Moment',
                    expression: 'p = qd',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Current Electricity & Magnetism',
            formulas: [
                {
                    name: 'Ohm\'s Law',
                    expression: 'V = IR',
                    freq: 'must-know'
                },
                {
                    name: 'Resistance',
                    expression: 'R = ρL/A',
                    freq: 'must-know'
                },
                {
                    name: 'Power',
                    expression: 'P = VI = I²R = V²/R',
                    freq: 'must-know'
                },
                {
                    name: 'Kirchhoff\'s Laws',
                    expression: 'ΣI = 0 (junction); ΣV = 0 (loop)',
                    freq: 'must-know'
                },
                {
                    name: 'Wheatstone Bridge',
                    expression: 'R₁/R₂ = R₃/R₄ (balanced)',
                    freq: 'must-know'
                },
                {
                    name: 'EMF & Internal Resistance',
                    expression: 'V = ε − Ir',
                    freq: 'must-know'
                },
                {
                    name: 'Biot-Savart Law',
                    expression: 'dB = (μ₀/4π)(Idl × r̂)/r²',
                    freq: 'must-know'
                },
                {
                    name: 'B (Infinite Wire)',
                    expression: 'B = μ₀I/2πr',
                    freq: 'must-know'
                },
                {
                    name: 'B (Center of Coil)',
                    expression: 'B = μ₀NI/2R',
                    freq: 'must-know'
                },
                {
                    name: 'B (Solenoid)',
                    expression: 'B = μ₀nI',
                    note: 'n = turns/length',
                    freq: 'must-know'
                },
                {
                    name: 'Force on Current',
                    expression: 'F = BIL sinθ',
                    freq: 'must-know'
                },
                {
                    name: 'Force on Charge',
                    expression: 'F = qv × B = qvB sinθ',
                    freq: 'must-know'
                },
                {
                    name: 'Faraday\'s Law',
                    expression: 'EMF = −dΦ/dt = −NdΦ/dt',
                    freq: 'must-know'
                },
                {
                    name: 'Self Inductance',
                    expression: 'V = −L(dI/dt); Energy = ½LI²',
                    freq: 'must-know'
                },
                {
                    name: 'Impedance (RLC)',
                    expression: 'Z = √(R² + (XL − XC)²)',
                    freq: 'must-know'
                },
                {
                    name: 'Resonant Frequency',
                    expression: 'f₀ = 1/(2π√LC)',
                    freq: 'must-know'
                },
                {
                    name: 'Transformer',
                    expression: 'V_s/V_p = N_s/N_p = I_p/I_s',
                    freq: 'must-know'
                }
            ]
        },
        {
            name: 'Optics',
            formulas: [
                {
                    name: 'Snell\'s Law',
                    expression: 'n₁ sinθ₁ = n₂ sinθ₂',
                    freq: 'must-know'
                },
                {
                    name: 'Critical Angle',
                    expression: 'sinθ_c = n₂/n₁',
                    note: 'For n₁ > n₂',
                    freq: 'must-know'
                },
                {
                    name: 'Mirror Formula',
                    expression: '1/v + 1/u = 1/f',
                    freq: 'must-know'
                },
                {
                    name: 'Lens Formula',
                    expression: '1/v − 1/u = 1/f',
                    freq: 'must-know'
                },
                {
                    name: 'Lens Maker\'s',
                    expression: '1/f = (n−1)(1/R₁ − 1/R₂)',
                    freq: 'must-know'
                },
                {
                    name: 'Magnification',
                    expression: 'm = −v/u (mirror); m = v/u (lens)',
                    freq: 'must-know'
                },
                {
                    name: 'Power of Lens',
                    expression: 'P = 1/f (in diopters, f in meters)',
                    freq: 'high'
                },
                {
                    name: 'YDSE Fringe Width',
                    expression: 'β = λD/d',
                    freq: 'must-know'
                },
                {
                    name: 'Single Slit Min',
                    expression: 'a sinθ = nλ',
                    note: 'n = 1, 2, 3...',
                    freq: 'high'
                },
                {
                    name: 'Brewster\'s Angle',
                    expression: 'tan θ_B = n₂/n₁',
                    freq: 'high'
                },
                {
                    name: 'Resolving Power',
                    expression: 'θ_min = 1.22λ/D (Rayleigh)',
                    freq: 'medium'
                }
            ]
        },
        {
            name: 'Modern Physics',
            formulas: [
                {
                    name: 'Photoelectric Effect',
                    expression: 'KE_max = hν − φ = eV₀',
                    freq: 'must-know'
                },
                {
                    name: 'de Broglie Wavelength',
                    expression: 'λ = h/p = h/mv',
                    freq: 'must-know'
                },
                {
                    name: 'Bohr Model Energy',
                    expression: 'Eₙ = −13.6Z²/n² eV',
                    freq: 'must-know'
                },
                {
                    name: 'Bohr Model Radius',
                    expression: 'rₙ = 0.529n²/Z Å',
                    freq: 'must-know'
                },
                {
                    name: 'Half-Life',
                    expression: 't½ = 0.693/λ; N = N₀e^(−λt)',
                    freq: 'must-know'
                },
                {
                    name: 'Activity',
                    expression: 'A = λN = A₀e^(−λt)',
                    freq: 'must-know'
                },
                {
                    name: 'Mass-Energy',
                    expression: 'E = mc²',
                    freq: 'must-know'
                },
                {
                    name: 'Binding Energy per Nucleon',
                    expression: 'BE/A = [Zm_p + Nm_n − M]c²/A',
                    freq: 'high'
                },
                {
                    name: 'Q-value',
                    expression: 'Q = (m_reactants − m_products)c²',
                    freq: 'high'
                },
                {
                    name: 'X-ray Cutoff Wavelength',
                    expression: 'λ_min = hc/eV',
                    freq: 'high'
                },
                {
                    name: 'Moseley\'s Law',
                    expression: '√ν = a(Z − b)',
                    note: 'For characteristic X-rays',
                    freq: 'high'
                }
            ]
        }
    ],
    faqs: [
        {
            q: 'Is this JEE Physics formula sheet sufficient for JEE Main?',
            a: 'Yes — it covers all 120+ formulas from NCERT and standard reference books like HC Verma and DC Pandey. Understanding derivations and applications is equally important. MindPeak\'s 1-on-1 coaching ensures you can apply every formula in exam conditions.'
        },
        {
            q: 'How to use formula sheets effectively for JEE revision?',
            a: 'Revise the formula sheet every 3-4 days using active recall. Don\'t just read — cover the formula and try to recall it. Practice 5 problems per formula to build application skills. Our mentors create personalised revision schedules.'
        },
        {
            q: 'Which Physics chapters have the most formulas?',
            a: 'Mechanics (Kinematics + NLM + WEP + Rotation) has ~40 formulas and ~35% JEE weightage. Electrodynamics (Electrostatics + Current + Magnetism) has ~30 formulas with ~30% weightage. These two blocks cover 65% of JEE Physics.'
        },
        {
            q: 'How to handle formula confusion during the exam?',
            a: 'Build "formula clusters" — group related formulas together (e.g., all SHM formulas). During revision, practice switching between related formulas quickly. MindPeak mentors use timed formula drills to build exam-speed recall.'
        },
        {
            q: 'Are derivations important for JEE?',
            a: 'For JEE Main, direct formula application suffices in most cases. For JEE Advanced, understanding derivations helps solve novel problems. Focus on key derivations: Kepler\'s laws, Gauss\'s law applications, Bernoulli\'s equation, and Bohr model.'
        },
        {
            q: 'Should I make my own formula sheet?',
            a: 'Yes! Making your own sheet is the best revision technique. Use our sheet as a reference, then create your own condensed version. The act of writing helps memory. MindPeak students score 15-20% higher on formula recall tests after creating personal sheets.'
        }
    ],
    proTips: [
        'Mechanics alone carries ~35% weightage — master Kinematics, NLM, WEP, and Rotation formulas first.',
        'Always check units after plugging into a formula — wrong unit conversion is the #1 error in Physics.',
        'For Electrodynamics, draw the circuit/field diagram BEFORE applying any formula.',
        'Modern Physics formulas are the easiest marks — learn them perfectly for guaranteed 8-12 marks.',
        'Create a "formula chain" for each chapter: connect formulas that lead into each other.'
    ]
};
/* ═══════════════════════════════════════════════════════════════
   JEE MATHEMATICS — ~120 formulas across 10 chapters
   ═══════════════════════════════════════════════════════════════ */ const jeeMathsFormulas = {
    slug: 'jee-maths-formulas',
    exam: 'JEE',
    subject: 'Mathematics',
    title: `JEE Mathematics Formula Sheet ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} — 120+ Formulas, All Chapters | MindPeak`,
    description: `Complete JEE Maths formula sheet — Calculus, Algebra, Coordinate Geometry, Trigonometry, Vectors & 3D, Probability. 120+ formulas with exam frequency tags.`,
    heroHeading: 'JEE Mathematics',
    heroHighlight: 'Formula Sheet',
    heroParagraph: 'Every important JEE Mathematics formula from Calculus, Algebra, Coordinate Geometry, Trigonometry, Vectors & 3D Geometry — organized chapter-wise with exam frequency tags.',
    totalFormulas: 122,
    chapters: [
        {
            name: 'Algebra — Quadratics & Progressions',
            formulas: [
                {
                    name: 'Quadratic Formula',
                    expression: 'x = (−b ± √(b²−4ac)) / 2a',
                    freq: 'must-know'
                },
                {
                    name: 'Discriminant',
                    expression: 'D = b² − 4ac',
                    note: 'D>0: real roots, D=0: equal, D<0: complex',
                    freq: 'must-know'
                },
                {
                    name: 'Sum of Roots',
                    expression: 'α + β = −b/a',
                    freq: 'must-know'
                },
                {
                    name: 'Product of Roots',
                    expression: 'αβ = c/a',
                    freq: 'must-know'
                },
                {
                    name: 'AP nth Term',
                    expression: 'aₙ = a + (n−1)d',
                    freq: 'must-know'
                },
                {
                    name: 'AP Sum',
                    expression: 'Sₙ = n/2[2a + (n−1)d] = n/2(a + l)',
                    freq: 'must-know'
                },
                {
                    name: 'GP nth Term',
                    expression: 'aₙ = arⁿ⁻¹',
                    freq: 'must-know'
                },
                {
                    name: 'GP Sum (Finite)',
                    expression: 'Sₙ = a(rⁿ−1)/(r−1)',
                    freq: 'must-know'
                },
                {
                    name: 'GP Sum (Infinite)',
                    expression: 'S∞ = a/(1−r)',
                    note: '|r| < 1',
                    freq: 'must-know'
                },
                {
                    name: 'AM-GM Inequality',
                    expression: 'AM ≥ GM: (a+b)/2 ≥ √(ab)',
                    freq: 'must-know'
                },
                {
                    name: 'Sum of Squares',
                    expression: 'Σn² = n(n+1)(2n+1)/6',
                    freq: 'high'
                },
                {
                    name: 'Sum of Cubes',
                    expression: 'Σn³ = [n(n+1)/2]²',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Algebra — Complex Numbers & Matrices',
            formulas: [
                {
                    name: 'Euler\'s Formula',
                    expression: 'e^(iθ) = cosθ + i sinθ',
                    freq: 'must-know'
                },
                {
                    name: 'Modulus',
                    expression: '|z| = √(x² + y²)',
                    freq: 'must-know'
                },
                {
                    name: 'Argument',
                    expression: 'arg(z) = tan⁻¹(y/x)',
                    freq: 'must-know'
                },
                {
                    name: 'Roots of Unity',
                    expression: 'zⁿ = 1 → z = e^(2πik/n)',
                    note: 'k = 0, 1, ..., n−1',
                    freq: 'high'
                },
                {
                    name: 'Triangle Inequality',
                    expression: '||z₁| − |z₂|| ≤ |z₁ + z₂| ≤ |z₁| + |z₂|',
                    freq: 'must-know'
                },
                {
                    name: 'Matrix Inverse (2×2)',
                    expression: 'A⁻¹ = (1/det A)[d, −b; −c, a]',
                    freq: 'must-know'
                },
                {
                    name: 'Determinant (3×3)',
                    expression: 'Expand along any row/column',
                    freq: 'must-know'
                },
                {
                    name: 'Cramer\'s Rule',
                    expression: 'x = Dₓ/D, y = Dᵧ/D, z = D_z/D',
                    freq: 'high'
                },
                {
                    name: 'Cayley-Hamilton',
                    expression: 'Every matrix satisfies its characteristic equation',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Permutations, Combinations & Binomial',
            formulas: [
                {
                    name: 'Permutation',
                    expression: 'ⁿPᵣ = n!/(n−r)!',
                    freq: 'must-know'
                },
                {
                    name: 'Combination',
                    expression: 'ⁿCᵣ = n!/[r!(n−r)!]',
                    freq: 'must-know'
                },
                {
                    name: 'Circular Permutation',
                    expression: '(n−1)!',
                    freq: 'high'
                },
                {
                    name: 'Derangement',
                    expression: 'Dₙ = n![1 − 1/1! + 1/2! − 1/3! + ...]',
                    freq: 'high'
                },
                {
                    name: 'Binomial Theorem',
                    expression: '(a+b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ',
                    freq: 'must-know'
                },
                {
                    name: 'General Term',
                    expression: 'T(r+1) = ⁿCᵣ · aⁿ⁻ʳ · bʳ',
                    freq: 'must-know'
                },
                {
                    name: 'Middle Term',
                    expression: 'T(n/2 + 1) if n even; T((n+1)/2) & T((n+3)/2) if n odd',
                    freq: 'high'
                },
                {
                    name: 'Multinomial',
                    expression: 'Coefficient of x^a y^b z^c = n!/(a!b!c!)',
                    note: 'a+b+c = n',
                    freq: 'medium'
                },
                {
                    name: 'Stars & Bars',
                    expression: 'Non-negative integer solutions of x₁+...+xₖ=n: ⁿ⁺ᵏ⁻¹Cₖ₋₁',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Trigonometry',
            formulas: [
                {
                    name: 'Pythagorean Identity',
                    expression: 'sin²θ + cos²θ = 1',
                    freq: 'must-know'
                },
                {
                    name: 'sec-tan Identity',
                    expression: '1 + tan²θ = sec²θ',
                    freq: 'must-know'
                },
                {
                    name: 'Compound Angle (sin)',
                    expression: 'sin(A±B) = sinA cosB ± cosA sinB',
                    freq: 'must-know'
                },
                {
                    name: 'Compound Angle (cos)',
                    expression: 'cos(A±B) = cosA cosB ∓ sinA sinB',
                    freq: 'must-know'
                },
                {
                    name: 'Double Angle',
                    expression: 'sin2A = 2sinA cosA; cos2A = cos²A − sin²A',
                    freq: 'must-know'
                },
                {
                    name: 'Half Angle',
                    expression: 'sin²(A/2) = (1−cosA)/2; cos²(A/2) = (1+cosA)/2',
                    freq: 'must-know'
                },
                {
                    name: 'Sum-to-Product',
                    expression: 'sinC + sinD = 2sin((C+D)/2)cos((C−D)/2)',
                    freq: 'high'
                },
                {
                    name: 'Product-to-Sum',
                    expression: '2sinA cosB = sin(A+B) + sin(A−B)',
                    freq: 'high'
                },
                {
                    name: 'Sine Rule',
                    expression: 'a/sinA = b/sinB = c/sinC = 2R',
                    freq: 'must-know'
                },
                {
                    name: 'Cosine Rule',
                    expression: 'c² = a² + b² − 2ab cosC',
                    freq: 'must-know'
                },
                {
                    name: 'Area of Triangle',
                    expression: 'Δ = ½ab sinC = √(s(s−a)(s−b)(s−c))',
                    freq: 'must-know'
                },
                {
                    name: 'Inverse Trig',
                    expression: 'sin⁻¹x + cos⁻¹x = π/2; tan⁻¹x + cot⁻¹x = π/2',
                    freq: 'must-know'
                }
            ]
        },
        {
            name: 'Coordinate Geometry — Straight Lines & Circles',
            formulas: [
                {
                    name: 'Distance Formula',
                    expression: 'd = √((x₂−x₁)² + (y₂−y₁)²)',
                    freq: 'must-know'
                },
                {
                    name: 'Section Formula',
                    expression: '(mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n)',
                    freq: 'must-know'
                },
                {
                    name: 'Slope-Intercept',
                    expression: 'y = mx + c',
                    freq: 'must-know'
                },
                {
                    name: 'Angle Between Lines',
                    expression: 'tanθ = |(m₁−m₂)/(1+m₁m₂)|',
                    freq: 'must-know'
                },
                {
                    name: 'Distance from Point to Line',
                    expression: 'd = |ax₁ + by₁ + c| / √(a² + b²)',
                    freq: 'must-know'
                },
                {
                    name: 'Circle General',
                    expression: 'x² + y² + 2gx + 2fy + c = 0; center(−g,−f), r=√(g²+f²−c)',
                    freq: 'must-know'
                },
                {
                    name: 'Length of Tangent',
                    expression: 'L = √(x₁² + y₁² + 2gx₁ + 2fy₁ + c)',
                    freq: 'high'
                },
                {
                    name: 'Radical Axis',
                    expression: 'S₁ − S₂ = 0',
                    freq: 'high'
                },
                {
                    name: 'Family of Circles',
                    expression: 'S + λL = 0',
                    note: 'Circles through intersection points',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Coordinate Geometry — Conics',
            formulas: [
                {
                    name: 'Parabola Standard',
                    expression: 'y² = 4ax; focus(a,0), directrix x = −a',
                    freq: 'must-know'
                },
                {
                    name: 'Ellipse Standard',
                    expression: 'x²/a² + y²/b² = 1; e = √(1−b²/a²)',
                    freq: 'must-know'
                },
                {
                    name: 'Hyperbola Standard',
                    expression: 'x²/a² − y²/b² = 1; e = √(1+b²/a²)',
                    freq: 'must-know'
                },
                {
                    name: 'Tangent to Parabola',
                    expression: 'y = mx + a/m',
                    freq: 'must-know'
                },
                {
                    name: 'Tangent to Ellipse',
                    expression: 'y = mx ± √(a²m²+b²)',
                    freq: 'must-know'
                },
                {
                    name: 'Eccentricity Relation',
                    expression: 'e₁e₂ = 1 for conjugate hyperbolas',
                    freq: 'high'
                },
                {
                    name: 'Focal Chord (Parabola)',
                    expression: 'Length = 4a cosec²θ',
                    freq: 'high'
                },
                {
                    name: 'Latus Rectum (Ellipse)',
                    expression: 'LR = 2b²/a',
                    freq: 'must-know'
                }
            ]
        },
        {
            name: 'Vectors & 3D Geometry',
            formulas: [
                {
                    name: 'Dot Product',
                    expression: 'a⃗ · b⃗ = |a||b|cosθ = a₁b₁ + a₂b₂ + a₃b₃',
                    freq: 'must-know'
                },
                {
                    name: 'Cross Product',
                    expression: '|a⃗ × b⃗| = |a||b|sinθ',
                    freq: 'must-know'
                },
                {
                    name: 'Scalar Triple Product',
                    expression: '[a⃗ b⃗ c⃗] = a⃗ · (b⃗ × c⃗)',
                    note: 'Volume of parallelepiped',
                    freq: 'must-know'
                },
                {
                    name: 'Projection',
                    expression: 'proj = (a⃗ · b⃗)/|b⃗|',
                    freq: 'must-know'
                },
                {
                    name: 'Distance Between Skew Lines',
                    expression: 'd = |[a⃗₂−a⃗₁, b⃗₁, b⃗₂]| / |b⃗₁ × b⃗₂|',
                    freq: 'high'
                },
                {
                    name: 'Plane Equation',
                    expression: 'ax + by + cz = d; normal = (a, b, c)',
                    freq: 'must-know'
                },
                {
                    name: 'Distance Point to Plane',
                    expression: 'd = |ax₁ + by₁ + cz₁ − d| / √(a²+b²+c²)',
                    freq: 'must-know'
                },
                {
                    name: 'Line in 3D',
                    expression: '(x−x₁)/a = (y−y₁)/b = (z−z₁)/c',
                    freq: 'must-know'
                },
                {
                    name: 'Angle Between Planes',
                    expression: 'cosθ = |n⃗₁ · n⃗₂| / (|n⃗₁||n⃗₂|)',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Calculus — Limits & Differentiation',
            formulas: [
                {
                    name: 'L\'Hôpital\'s Rule',
                    expression: 'lim f(x)/g(x) = lim f\'(x)/g\'(x)',
                    note: 'For 0/0 or ∞/∞',
                    freq: 'must-know'
                },
                {
                    name: 'Standard Limit',
                    expression: 'lim (sinx/x) = 1; lim ((1+1/n)^n) = e',
                    freq: 'must-know'
                },
                {
                    name: 'Power Rule',
                    expression: 'd/dx(xⁿ) = nxⁿ⁻¹',
                    freq: 'must-know'
                },
                {
                    name: 'Product Rule',
                    expression: '(uv)\' = u\'v + uv\'',
                    freq: 'must-know'
                },
                {
                    name: 'Quotient Rule',
                    expression: '(u/v)\' = (u\'v − uv\')/v²',
                    freq: 'must-know'
                },
                {
                    name: 'Chain Rule',
                    expression: 'dy/dx = dy/du · du/dx',
                    freq: 'must-know'
                },
                {
                    name: 'Logarithmic Diff',
                    expression: 'd/dx(ln x) = 1/x; d/dx(eˣ) = eˣ',
                    freq: 'must-know'
                },
                {
                    name: 'Trig Derivatives',
                    expression: 'd/dx(sinx) = cosx; d/dx(cosx) = −sinx; d/dx(tanx) = sec²x',
                    freq: 'must-know'
                },
                {
                    name: 'Rolle\'s Theorem',
                    expression: 'f(a)=f(b) → ∃c ∈ (a,b): f\'(c)=0',
                    freq: 'high'
                },
                {
                    name: 'LMVT',
                    expression: 'f\'(c) = [f(b)−f(a)]/(b−a)',
                    freq: 'high'
                },
                {
                    name: 'Maxima/Minima',
                    expression: 'f\'(x) = 0 and f\'\'(x) > 0 → minima; f\'\'(x) < 0 → maxima',
                    freq: 'must-know'
                }
            ]
        },
        {
            name: 'Calculus — Integration & Differential Equations',
            formulas: [
                {
                    name: 'Integration by Parts',
                    expression: '∫u·v dx = u∫v dx − ∫(u\'∫v dx)dx',
                    note: 'ILATE rule',
                    freq: 'must-know'
                },
                {
                    name: 'Substitution',
                    expression: '∫f(g(x))g\'(x)dx = ∫f(t)dt',
                    freq: 'must-know'
                },
                {
                    name: 'Definite Integral',
                    expression: '∫ₐᵇ f(x)dx = F(b) − F(a)',
                    freq: 'must-know'
                },
                {
                    name: 'Area Under Curve',
                    expression: 'A = ∫ₐᵇ |f(x)| dx',
                    freq: 'must-know'
                },
                {
                    name: 'Area Between Curves',
                    expression: 'A = ∫ₐᵇ |f(x) − g(x)| dx',
                    freq: 'must-know'
                },
                {
                    name: 'King\'s Property',
                    expression: '∫₀ᵃ f(x)dx = ∫₀ᵃ f(a−x)dx',
                    freq: 'must-know'
                },
                {
                    name: 'Walli\'s Formula',
                    expression: '∫₀^(π/2) sinⁿx dx = [(n−1)!!/(n!!)] × (π/2 or 1)',
                    freq: 'high'
                },
                {
                    name: 'Linear DE',
                    expression: 'dy/dx + P(x)y = Q(x); IF = e^(∫P dx)',
                    freq: 'must-know'
                },
                {
                    name: 'Variable Separable',
                    expression: 'f(y)dy = g(x)dx',
                    freq: 'must-know'
                },
                {
                    name: 'Homogeneous DE',
                    expression: 'Put y = vx → separable',
                    freq: 'high'
                },
                {
                    name: 'Leibniz Rule',
                    expression: 'd/dx ∫ₐ⁽ˣ⁾ᵇ⁽ˣ⁾ f(t)dt = f(b(x))b\'(x) − f(a(x))a\'(x)',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Probability & Statistics',
            formulas: [
                {
                    name: 'Addition Rule',
                    expression: 'P(A∪B) = P(A) + P(B) − P(A∩B)',
                    freq: 'must-know'
                },
                {
                    name: 'Conditional Probability',
                    expression: 'P(A|B) = P(A∩B)/P(B)',
                    freq: 'must-know'
                },
                {
                    name: 'Bayes\' Theorem',
                    expression: 'P(A|B) = P(B|A)P(A)/P(B)',
                    freq: 'must-know'
                },
                {
                    name: 'Binomial Distribution',
                    expression: 'P(X=r) = ⁿCᵣ pʳ qⁿ⁻ʳ',
                    note: 'q = 1−p',
                    freq: 'must-know'
                },
                {
                    name: 'Binomial Mean & Variance',
                    expression: 'μ = np; σ² = npq',
                    freq: 'must-know'
                },
                {
                    name: 'Mean',
                    expression: 'x̄ = Σxᵢ/n',
                    freq: 'must-know'
                },
                {
                    name: 'Variance',
                    expression: 'σ² = Σ(xᵢ − x̄)²/n = Σxᵢ²/n − x̄²',
                    freq: 'must-know'
                },
                {
                    name: 'Standard Deviation',
                    expression: 'σ = √(variance)',
                    freq: 'must-know'
                },
                {
                    name: 'Total Probability',
                    expression: 'P(A) = ΣP(A|Bᵢ)P(Bᵢ)',
                    freq: 'high'
                }
            ]
        }
    ],
    faqs: [
        {
            q: 'How many formulas in JEE Maths?',
            a: 'JEE Mathematics has approximately 120-150 key formulas. Calculus alone has 40+. Our curated sheet covers all frequently tested ones with exam frequency tags.'
        },
        {
            q: 'Is memorising formulas enough for JEE Maths?',
            a: 'No — JEE tests application, not recall. You need to practice 200+ problems using each formula to build problem-solving intuition. MindPeak mentors focus on building this application skill through 1-on-1 practice sessions.'
        },
        {
            q: 'Which Maths chapters are most formula-heavy?',
            a: 'Calculus (Limits, Differentiation, Integration, DE) has the most formulas (~40) and carries 30-35% weightage. Coordinate Geometry (Lines, Circles, Conics) has ~25 formulas with 20% weightage.'
        },
        {
            q: 'How to remember trigonometric identities?',
            a: 'Start with the 3 Pythagorean identities. Derive compound angle formulas from Euler\'s formula. Practice converting between sum-to-product and product-to-sum forms. Creating a "trig tree" diagram helps visual learners.'
        },
        {
            q: 'Are these formulas enough for JEE Advanced?',
            a: 'Yes — this sheet covers all standard formulas. JEE Advanced tests deeper application and multi-step reasoning rather than obscure formulas. Focus on understanding when and how to combine formulas.'
        },
        {
            q: 'Should I learn proofs for JEE?',
            a: 'For JEE Main, proofs are rarely asked directly. For JEE Advanced, understanding key proofs (Rolle\'s theorem, LMVT, properties of determinants) helps solve unfamiliar problems. MindPeak mentors highlight which proofs to master.'
        }
    ],
    proTips: [
        'Calculus carries 30-35% marks — master Integration techniques and Differential Equations first.',
        'For Coordinate Geometry, always draw a rough figure before applying formulas.',
        'Learn the AM-GM, Cauchy-Schwarz, and Triangle inequalities — they appear in unexpected places.',
        'Probability + PnC together carry ~10% marks but are easy to score with formula mastery.',
        'Create a "formula connection map" — how quadratic formula connects to discriminant, roots, and graph.'
    ]
};
/* ═══════════════════════════════════════════════════════════════
   NEET BIOLOGY — ~70 formulas/key facts across 8 chapters
   ═══════════════════════════════════════════════════════════════ */ const neetBiologyFormulas = {
    slug: 'neet-biology-formulas',
    exam: 'NEET',
    subject: 'Biology',
    title: `NEET Biology Important Facts & Formulas ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} — All Chapters | MindPeak`,
    description: `Complete NEET Biology formulas, key facts & important values — Human Physiology, Genetics, Ecology, Cell Biology. 70+ key facts for NEET ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]}.`,
    heroHeading: 'NEET Biology',
    heroHighlight: 'Key Facts & Formulas',
    heroParagraph: 'All 70+ important NEET Biology facts, values, and formulas organized chapter-wise — Human Physiology, Genetics, Ecology, Biotechnology. Each tagged by exam frequency.',
    totalFormulas: 72,
    chapters: [
        {
            name: 'Human Physiology — Circulation & Respiration',
            formulas: [
                {
                    name: 'Cardiac Output',
                    expression: 'CO = SV × HR ≈ 5 L/min',
                    note: 'SV ≈ 70mL, HR ≈ 72/min',
                    freq: 'must-know'
                },
                {
                    name: 'Vital Capacity',
                    expression: 'VC = ERV + TV + IRV ≈ 4500 mL',
                    freq: 'must-know'
                },
                {
                    name: 'Tidal Volume',
                    expression: 'TV ≈ 500 mL per breath',
                    freq: 'must-know'
                },
                {
                    name: 'Residual Volume',
                    expression: 'RV ≈ 1100–1200 mL',
                    freq: 'high'
                },
                {
                    name: 'Total Lung Capacity',
                    expression: 'TLC = VC + RV ≈ 5700–6000 mL',
                    freq: 'high'
                },
                {
                    name: 'Blood Composition',
                    expression: 'Plasma 55% + Formed Elements 45%',
                    freq: 'must-know'
                },
                {
                    name: 'RBC Count',
                    expression: 'Males: 5–5.5 million/mm³; Females: 4.5–5 million/mm³',
                    freq: 'must-know'
                },
                {
                    name: 'WBC Count',
                    expression: '6000–8000/mm³',
                    freq: 'high'
                },
                {
                    name: 'Platelet Count',
                    expression: '1.5–3.5 lakhs/mm³',
                    freq: 'high'
                },
                {
                    name: 'BP Normal',
                    expression: '120/80 mmHg (systolic/diastolic)',
                    freq: 'must-know'
                },
                {
                    name: 'Heart Sounds',
                    expression: 'Lub (AV valves close); Dub (semilunar valves close)',
                    freq: 'high'
                },
                {
                    name: 'Bohr Effect',
                    expression: 'Higher CO₂/H⁺ → lower O₂ affinity of Hb',
                    freq: 'must-know'
                }
            ]
        },
        {
            name: 'Human Physiology — Excretion & Digestion',
            formulas: [
                {
                    name: 'GFR',
                    expression: '125 mL/min = 180 L/day',
                    freq: 'must-know'
                },
                {
                    name: 'Urine Volume',
                    expression: '≈ 1.5 L/day (99% reabsorbed)',
                    freq: 'must-know'
                },
                {
                    name: 'pH of Blood',
                    expression: '7.35–7.45',
                    freq: 'must-know'
                },
                {
                    name: 'pH of Stomach',
                    expression: '1.5–3.5 (HCl)',
                    freq: 'must-know'
                },
                {
                    name: 'pH of Saliva',
                    expression: '6.5–7.5',
                    freq: 'high'
                },
                {
                    name: 'Dental Formula (Adult)',
                    expression: '2123/2123 = 32 teeth',
                    freq: 'must-know'
                },
                {
                    name: 'Small Intestine Length',
                    expression: '≈ 6 meters (duodenum + jejunum + ileum)',
                    freq: 'high'
                },
                {
                    name: 'Large Intestine Length',
                    expression: '≈ 1.5 meters',
                    freq: 'medium'
                }
            ]
        },
        {
            name: 'Genetics & Molecular Biology',
            formulas: [
                {
                    name: 'Monohybrid F2 Ratio',
                    expression: '3:1 phenotypic, 1:2:1 genotypic',
                    freq: 'must-know'
                },
                {
                    name: 'Dihybrid F2 Ratio',
                    expression: '9:3:3:1 phenotypic',
                    freq: 'must-know'
                },
                {
                    name: 'Test Cross',
                    expression: 'Dominant phenotype × homozygous recessive',
                    freq: 'must-know'
                },
                {
                    name: 'Incomplete Dominance',
                    expression: '1:2:1 phenotypic in F2',
                    freq: 'must-know'
                },
                {
                    name: 'Codominance',
                    expression: '1:2:1 with all 3 phenotypes expressed',
                    note: 'e.g., ABO blood group',
                    freq: 'must-know'
                },
                {
                    name: 'Hardy-Weinberg',
                    expression: 'p² + 2pq + q² = 1; p + q = 1',
                    freq: 'must-know'
                },
                {
                    name: 'Chargaff\'s Rule',
                    expression: 'A = T, G = C; A+G = T+C (purines = pyrimidines)',
                    freq: 'must-know'
                },
                {
                    name: 'Central Dogma',
                    expression: 'DNA → RNA → Protein',
                    freq: 'must-know'
                },
                {
                    name: 'Genetic Code',
                    expression: '64 codons: 61 sense + 3 stop (UAA, UAG, UGA)',
                    freq: 'must-know'
                },
                {
                    name: 'Start Codon',
                    expression: 'AUG (Methionine)',
                    freq: 'must-know'
                },
                {
                    name: 'DNA Replication',
                    expression: 'Semi-conservative, 5\' → 3\' direction',
                    freq: 'must-know'
                },
                {
                    name: 'Map Distance',
                    expression: '1 cM = 1% recombination frequency',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Ecology',
            formulas: [
                {
                    name: '10% Energy Rule',
                    expression: 'Each trophic level = 10% of previous',
                    freq: 'must-know'
                },
                {
                    name: 'Logistic Growth',
                    expression: 'dN/dt = rN(K−N)/K',
                    note: 'K = carrying capacity',
                    freq: 'must-know'
                },
                {
                    name: 'Exponential Growth',
                    expression: 'dN/dt = rN → Nt = N₀eʳᵗ',
                    freq: 'must-know'
                },
                {
                    name: 'Species-Area Relationship',
                    expression: 'log S = log C + Z·log A',
                    note: 'Z = 0.1–0.2 (mainland), Z ≈ 0.6 (islands)',
                    freq: 'must-know'
                },
                {
                    name: 'Shannon Diversity Index',
                    expression: 'H\' = −Σ(pᵢ × ln pᵢ)',
                    note: 'Higher = more diverse',
                    freq: 'must-know'
                },
                {
                    name: 'Net Primary Productivity',
                    expression: 'NPP = GPP − Respiration',
                    freq: 'must-know'
                },
                {
                    name: 'Birth Rate',
                    expression: 'b = B/N per capita',
                    freq: 'high'
                },
                {
                    name: 'Death Rate',
                    expression: 'd = D/N per capita',
                    freq: 'high'
                },
                {
                    name: 'Growth Rate',
                    expression: 'r = (b − d)',
                    freq: 'high'
                },
                {
                    name: 'Species Richness',
                    expression: 'Number of species in a community',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Cell Biology',
            formulas: [
                {
                    name: 'Cell Cycle Duration',
                    expression: 'G1 + S + G2 + M ≈ 24 hrs (typical)',
                    freq: 'must-know'
                },
                {
                    name: 'S Phase',
                    expression: 'DNA replication: 2n → 4n DNA content',
                    freq: 'must-know'
                },
                {
                    name: 'Mitosis Result',
                    expression: '2n → 2n (2 identical cells)',
                    freq: 'must-know'
                },
                {
                    name: 'Meiosis Result',
                    expression: '2n → n (4 haploid cells)',
                    freq: 'must-know'
                },
                {
                    name: 'ATP per Glucose (Aerobic)',
                    expression: '36–38 ATP (theoretical max)',
                    freq: 'must-know'
                },
                {
                    name: 'Glycolysis ATP',
                    expression: 'Net 2 ATP + 2 NADH per glucose',
                    note: 'In cytoplasm',
                    freq: 'must-know'
                },
                {
                    name: 'Krebs Cycle',
                    expression: '2 ATP + 6 NADH + 2 FADH₂ per glucose',
                    note: 'In mitochondria',
                    freq: 'must-know'
                },
                {
                    name: 'RQ (Carbohydrate)',
                    expression: 'RQ = CO₂/O₂ = 1.0',
                    freq: 'high'
                },
                {
                    name: 'RQ (Fat)',
                    expression: 'RQ ≈ 0.7',
                    freq: 'high'
                },
                {
                    name: 'Photosynthesis Equation',
                    expression: '6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O',
                    freq: 'must-know'
                }
            ]
        },
        {
            name: 'Plant Physiology',
            formulas: [
                {
                    name: 'Water Potential',
                    expression: 'Ψ = Ψs + Ψp',
                    note: 'Ψs = solute potential (always −ve)',
                    freq: 'must-know'
                },
                {
                    name: 'Transpiration Pull',
                    expression: 'Main force for water ascent in xylem',
                    freq: 'must-know'
                },
                {
                    name: 'Photosynthesis (Light Reaction)',
                    expression: '12H₂O + 12NADP⁺ → 12NADPH + 6O₂',
                    note: 'In thylakoids',
                    freq: 'high'
                },
                {
                    name: 'Calvin Cycle',
                    expression: '3CO₂ → 1 G3P; 6 turns → 1 glucose',
                    note: 'In stroma',
                    freq: 'must-know'
                },
                {
                    name: 'C4 Pathway',
                    expression: 'Spatial separation: mesophyll (PEP) + bundle sheath (RuBisCO)',
                    freq: 'must-know'
                },
                {
                    name: 'Photorespiration',
                    expression: 'RuBisCO fixes O₂ instead of CO₂ → no ATP gain',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Reproduction',
            formulas: [
                {
                    name: 'Menstrual Cycle',
                    expression: '28 days: Follicular (1-13) + Ovulation (14) + Luteal (15-28)',
                    freq: 'must-know'
                },
                {
                    name: 'Sperm Count (Normal)',
                    expression: '≈ 200–300 million per ejaculate',
                    freq: 'high'
                },
                {
                    name: 'Gestation Period',
                    expression: '≈ 9 months (266 days / 38 weeks)',
                    freq: 'must-know'
                },
                {
                    name: 'Embryo Implantation',
                    expression: 'Day 6-7 after fertilization (blastocyst stage)',
                    freq: 'high'
                },
                {
                    name: 'hCG Detection',
                    expression: 'Detectable in urine by 2 weeks post-conception',
                    freq: 'high'
                },
                {
                    name: 'Megasporogenesis',
                    expression: '1 MMC → 4 megaspores → 1 functional',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Biotechnology & Evolution',
            formulas: [
                {
                    name: 'PCR Steps',
                    expression: 'Denaturation (94°C) → Annealing (55-65°C) → Extension (72°C)',
                    freq: 'must-know'
                },
                {
                    name: 'Restriction Enzyme Cut',
                    expression: 'Palindromic sequences (e.g., EcoRI: GAATTC)',
                    freq: 'must-know'
                },
                {
                    name: 'Gel Electrophoresis',
                    expression: 'Smaller fragments migrate faster → towards anode (+)',
                    freq: 'must-know'
                },
                {
                    name: 'Age of Earth',
                    expression: '≈ 4.5 billion years',
                    freq: 'high'
                },
                {
                    name: 'Miller-Urey (Gases)',
                    expression: 'CH₄ + NH₃ + H₂ + H₂O → amino acids',
                    freq: 'high'
                },
                {
                    name: 'Natural Selection Types',
                    expression: 'Stabilizing, Directional, Disruptive',
                    freq: 'must-know'
                }
            ]
        }
    ],
    faqs: [
        {
            q: 'Does NEET Biology have formulas?',
            a: 'While Biology is more conceptual, there are ~70 important quantitative facts (cardiac output, GFR, ATP counts, ecological formulas) directly tested in NEET. Our sheet covers all such facts.'
        },
        {
            q: 'How to revise Biology before NEET exam?',
            a: 'Use this facts sheet for quick revision 1 week before exam. Combine with NCERT re-reading and diagram practice. Focus on Human Physiology values and Genetics ratios — they\'re directly tested.'
        },
        {
            q: 'Which Biology chapters are most important for NEET?',
            a: 'Human Physiology (~20%), Genetics & Molecular Biology (~18%), Ecology (~12%), and Plant Physiology (~12%) together carry ~62% of Biology marks. Master these chapters first.'
        },
        {
            q: 'How many questions come from NCERT directly?',
            a: 'Approximately 85-90% of NEET Biology questions can be answered directly from NCERT textbooks. Our formula sheet extracts the key quantitative facts from NCERT chapters.'
        },
        {
            q: 'Should I study Biology diagrams for NEET?',
            a: 'Yes! Diagram-based questions are common (heart structure, nephron, flower parts, DNA replication). Practice labeling diagrams without references. MindPeak mentors provide diagram practice worksheets.'
        },
        {
            q: 'How to handle assertion-reasoning questions in Biology?',
            a: 'Read both statements independently first. Check if the reason correctly explains the assertion. Common trap: both true but reason doesn\'t explain assertion. Practice with previous year assertion-reasoning questions.'
        }
    ],
    proTips: [
        'Human Physiology carries ~20% marks — memorize all numerical values (CO, GFR, blood counts, pH values).',
        'Genetics ratios (3:1, 9:3:3:1, 1:2:1) appear in almost every NEET paper — practice 50+ ratio problems.',
        'Ecology formulas (logistic growth, Shannon index, species-area) are easy marks if you know them.',
        'Create "NCERT sentence flashcards" — many NEET questions are direct NCERT sentences rephrased.',
        'Practice labeling 20 key diagrams without looking: heart, nephron, neuron, flower, DNA, mitosis.'
    ]
};
/* ═══════════════════════════════════════════════════════════════
   NEET PHYSICS — ~80 formulas
   ═══════════════════════════════════════════════════════════════ */ const neetPhysicsFormulas = {
    slug: 'neet-physics-formulas',
    exam: 'NEET',
    subject: 'Physics',
    title: `NEET Physics Formula Sheet ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} — 80+ Formulas, All Chapters | MindPeak`,
    description: `Complete NEET Physics formula sheet with 80+ formulas — Mechanics, Electrodynamics, Optics, Modern Physics. Chapter-wise revision for NEET UG ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]}.`,
    heroHeading: 'NEET Physics',
    heroHighlight: 'Formula Sheet',
    heroParagraph: 'All 80+ important NEET Physics formulas — simpler than JEE but equally important for scoring 170+/180 in Physics. Each formula tagged by exam frequency.',
    totalFormulas: 82,
    chapters: [
        {
            name: 'Kinematics & NLM',
            formulas: [
                {
                    name: 'Equations of Motion',
                    expression: 'v = u + at; s = ut + ½at²; v² = u² + 2as',
                    freq: 'must-know'
                },
                {
                    name: 'Projectile Range',
                    expression: 'R = u²sin2θ/g',
                    freq: 'must-know'
                },
                {
                    name: 'Newton\'s 2nd Law',
                    expression: 'F = ma = dp/dt',
                    freq: 'must-know'
                },
                {
                    name: 'Friction',
                    expression: 'f = μN',
                    freq: 'must-know'
                },
                {
                    name: 'Impulse',
                    expression: 'J = FΔt = Δp',
                    freq: 'high'
                },
                {
                    name: 'Circular Motion',
                    expression: 'a = v²/r; F = mv²/r',
                    freq: 'must-know'
                },
                {
                    name: 'Banking',
                    expression: 'tanθ = v²/rg',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Work, Energy & Gravitation',
            formulas: [
                {
                    name: 'Work Done',
                    expression: 'W = Fd cosθ',
                    freq: 'must-know'
                },
                {
                    name: 'KE',
                    expression: 'KE = ½mv²',
                    freq: 'must-know'
                },
                {
                    name: 'PE (Gravity)',
                    expression: 'U = mgh (near surface); U = −GMm/r',
                    freq: 'must-know'
                },
                {
                    name: 'Power',
                    expression: 'P = W/t = Fv',
                    freq: 'must-know'
                },
                {
                    name: 'Escape Velocity',
                    expression: 'vₑ = √(2gR)',
                    freq: 'must-know'
                },
                {
                    name: 'Orbital Velocity',
                    expression: 'v₀ = √(gR)',
                    freq: 'must-know'
                },
                {
                    name: 'Kepler\'s 3rd Law',
                    expression: 'T² ∝ R³',
                    freq: 'must-know'
                },
                {
                    name: 'g at Height',
                    expression: 'g\' = g/(1+h/R)² ≈ g(1−2h/R)',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Properties of Matter',
            formulas: [
                {
                    name: 'Young\'s Modulus',
                    expression: 'Y = Stress/Strain = (F/A)/(ΔL/L)',
                    freq: 'must-know'
                },
                {
                    name: 'Bulk Modulus',
                    expression: 'B = −V(dP/dV)',
                    freq: 'high'
                },
                {
                    name: 'Surface Tension',
                    expression: 'T = F/L; P_excess = 2T/R (drop), 4T/R (bubble)',
                    freq: 'must-know'
                },
                {
                    name: 'Viscosity (Stokes)',
                    expression: 'F = 6πηrv',
                    freq: 'must-know'
                },
                {
                    name: 'Terminal Velocity',
                    expression: 'v_t = 2r²(ρ−σ)g/9η',
                    freq: 'must-know'
                },
                {
                    name: 'Bernoulli\'s',
                    expression: 'P + ½ρv² + ρgh = constant',
                    freq: 'must-know'
                },
                {
                    name: 'Continuity Equation',
                    expression: 'A₁v₁ = A₂v₂',
                    freq: 'must-know'
                },
                {
                    name: 'Capillary Rise',
                    expression: 'h = 2T cosθ/(ρgr)',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Thermodynamics & Waves',
            formulas: [
                {
                    name: 'Ideal Gas Law',
                    expression: 'PV = nRT',
                    freq: 'must-know'
                },
                {
                    name: 'First Law',
                    expression: 'ΔU = Q − W',
                    freq: 'must-know'
                },
                {
                    name: 'SHM',
                    expression: 'x = A sin(ωt + φ); T = 2π/ω',
                    freq: 'must-know'
                },
                {
                    name: 'Pendulum',
                    expression: 'T = 2π√(L/g)',
                    freq: 'must-know'
                },
                {
                    name: 'Spring',
                    expression: 'T = 2π√(m/k)',
                    freq: 'must-know'
                },
                {
                    name: 'Wave Speed',
                    expression: 'v = fλ',
                    freq: 'must-know'
                },
                {
                    name: 'Beat Frequency',
                    expression: 'f_beat = |f₁ − f₂|',
                    freq: 'must-know'
                },
                {
                    name: 'Doppler Effect',
                    expression: 'f\' = f(v ± v₀)/(v ∓ vₛ)',
                    freq: 'must-know'
                },
                {
                    name: 'Open Pipe Frequency',
                    expression: 'f = nv/2L',
                    freq: 'high'
                },
                {
                    name: 'Closed Pipe Frequency',
                    expression: 'f = nv/4L (odd harmonics)',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Electrostatics & Current',
            formulas: [
                {
                    name: 'Coulomb\'s Law',
                    expression: 'F = kq₁q₂/r²',
                    freq: 'must-know'
                },
                {
                    name: 'Electric Field',
                    expression: 'E = kQ/r²',
                    freq: 'must-know'
                },
                {
                    name: 'Potential',
                    expression: 'V = kQ/r',
                    freq: 'must-know'
                },
                {
                    name: 'Capacitance',
                    expression: 'C = Q/V = ε₀A/d',
                    freq: 'must-know'
                },
                {
                    name: 'Ohm\'s Law',
                    expression: 'V = IR',
                    freq: 'must-know'
                },
                {
                    name: 'Power',
                    expression: 'P = VI = I²R = V²/R',
                    freq: 'must-know'
                },
                {
                    name: 'Kirchhoff\'s Laws',
                    expression: 'ΣI = 0; ΣV = 0',
                    freq: 'must-know'
                },
                {
                    name: 'Wheatstone Bridge',
                    expression: 'P/Q = R/S (balanced)',
                    freq: 'must-know'
                },
                {
                    name: 'Meter Bridge',
                    expression: 'R = S × l/(100−l)',
                    freq: 'high'
                },
                {
                    name: 'Potentiometer',
                    expression: 'E₁/E₂ = l₁/l₂',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Magnetism & EMI',
            formulas: [
                {
                    name: 'Biot-Savart',
                    expression: 'dB = (μ₀/4π)(Idl sinθ)/r²',
                    freq: 'must-know'
                },
                {
                    name: 'B (Long Wire)',
                    expression: 'B = μ₀I/2πr',
                    freq: 'must-know'
                },
                {
                    name: 'B (Solenoid)',
                    expression: 'B = μ₀nI',
                    freq: 'must-know'
                },
                {
                    name: 'Force on Charge',
                    expression: 'F = qvB sinθ',
                    freq: 'must-know'
                },
                {
                    name: 'Cyclotron Radius',
                    expression: 'r = mv/qB',
                    freq: 'must-know'
                },
                {
                    name: 'Faraday\'s Law',
                    expression: 'EMF = −NdΦ/dt',
                    freq: 'must-know'
                },
                {
                    name: 'Self Inductance',
                    expression: 'EMF = −LdI/dt',
                    freq: 'high'
                },
                {
                    name: 'Transformer',
                    expression: 'Vₛ/Vₚ = Nₛ/Nₚ',
                    freq: 'must-know'
                },
                {
                    name: 'Impedance',
                    expression: 'Z = √(R² + (XL−XC)²)',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Optics',
            formulas: [
                {
                    name: 'Snell\'s Law',
                    expression: 'n₁ sinθ₁ = n₂ sinθ₂',
                    freq: 'must-know'
                },
                {
                    name: 'Mirror Formula',
                    expression: '1/v + 1/u = 1/f',
                    freq: 'must-know'
                },
                {
                    name: 'Lens Formula',
                    expression: '1/v − 1/u = 1/f',
                    freq: 'must-know'
                },
                {
                    name: 'Magnification',
                    expression: 'm = −v/u (mirror); v/u (lens)',
                    freq: 'must-know'
                },
                {
                    name: 'Lens Power',
                    expression: 'P = 1/f (diopters)',
                    freq: 'must-know'
                },
                {
                    name: 'Lens Combination',
                    expression: '1/f = 1/f₁ + 1/f₂; P = P₁ + P₂',
                    freq: 'must-know'
                },
                {
                    name: 'YDSE',
                    expression: 'β = λD/d',
                    freq: 'must-know'
                }
            ]
        },
        {
            name: 'Modern Physics & Semiconductors',
            formulas: [
                {
                    name: 'Photoelectric Effect',
                    expression: 'KE = hν − φ = eV₀',
                    freq: 'must-know'
                },
                {
                    name: 'de Broglie',
                    expression: 'λ = h/mv',
                    freq: 'must-know'
                },
                {
                    name: 'Bohr Energy',
                    expression: 'Eₙ = −13.6/n² eV (for H)',
                    freq: 'must-know'
                },
                {
                    name: 'Half-Life',
                    expression: 'N = N₀(½)^(t/t½); t½ = 0.693/λ',
                    freq: 'must-know'
                },
                {
                    name: 'Mass Defect',
                    expression: 'Δm = [Zm_p + Nm_n] − M_nucleus',
                    freq: 'must-know'
                },
                {
                    name: 'Binding Energy',
                    expression: 'BE = Δm × 931.5 MeV',
                    freq: 'must-know'
                },
                {
                    name: 'Einstein\'s Equation',
                    expression: 'E = mc²',
                    freq: 'must-know'
                },
                {
                    name: 'Diode Equation (Forward)',
                    expression: 'I = I₀(e^(V/ηVT) − 1)',
                    note: 'VT ≈ 26mV at room temp',
                    freq: 'medium'
                },
                {
                    name: 'Logic Gates',
                    expression: 'AND: A·B; OR: A+B; NOT: Ā; NAND: (A·B)̄',
                    freq: 'must-know'
                }
            ]
        }
    ],
    faqs: [
        {
            q: 'Is NEET Physics formula-based?',
            a: 'Yes — NEET Physics is mostly formula application. Unlike JEE, problems are straightforward and test direct formula substitution. Master the formulas and you can score 160+ out of 180.'
        },
        {
            q: 'How many formulas are there in NEET Physics?',
            a: 'Approximately 80-100 key formulas across all chapters. Our sheet covers the 82 most frequently tested ones with exam frequency tags to help you prioritize.'
        },
        {
            q: 'Which Physics chapters are most important for NEET?',
            a: 'Mechanics (~30%), Electrodynamics (~25%), and Optics+Modern Physics (~20%) together carry ~75% of Physics marks. Focus on these three blocks first.'
        },
        {
            q: 'Is NEET Physics easier than JEE Physics?',
            a: 'Yes — NEET Physics tests direct application while JEE tests multi-concept reasoning. The same formula set works for both, but NEET questions rarely combine multiple concepts in one problem.'
        },
        {
            q: 'How to score 170+ in NEET Physics?',
            a: 'Master all 82 formulas in this sheet, practice 500+ MCQs, focus on Properties of Matter and Modern Physics (easy scoring chapters), and solve 10 years of PYQs. MindPeak mentors provide personalized weak-area analysis.'
        }
    ],
    proTips: [
        'NEET Physics is 90% direct formula application — master formula → plug in values → get answer.',
        'Properties of Matter (surface tension, viscosity, elasticity) is the easiest scoring chapter — don\'t skip it.',
        'Modern Physics formulas are straightforward — guaranteed 15-20 marks if you know them perfectly.',
        'Always draw a diagram for Optics problems — it prevents sign convention errors.',
        'Practice dimensional analysis to verify your answers — wrong dimensions = wrong formula application.'
    ]
};
/* ═══════════════════════════════════════════════════════════════
   NEET CHEMISTRY — ~115 formulas across 10 chapters
   Aligned with NCERT Class 11 & 12 Chemistry for NEET UG
   ═══════════════════════════════════════════════════════════════ */ const neetChemistryFormulas = {
    slug: 'neet-chemistry-formulas',
    exam: 'NEET',
    subject: 'Chemistry',
    title: `NEET Chemistry Formula Sheet ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$examYears$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURRENT_EXAM_YEAR"]} — 115+ Formulas, All Chapters | MindPeak`,
    description: `Complete NEET Chemistry formula sheet with 115+ formulas — Physical Chemistry equations, Organic reaction mechanisms, Inorganic Chemistry trends & periodic properties. NCERT-aligned. Free PDF download.`,
    heroHeading: 'NEET Chemistry',
    heroHighlight: 'Formula Sheet',
    heroParagraph: 'The most comprehensive NEET Chemistry formula collection — 115+ NCERT-aligned formulas across Physical, Organic & Inorganic Chemistry. Each formula tagged by NEET exam frequency so you focus on what matters most.',
    totalFormulas: 115,
    chapters: [
        {
            name: 'Some Basic Concepts of Chemistry',
            formulas: [
                {
                    name: 'Moles',
                    expression: 'n = mass / M = molecules / Nₐ = volume(STP) / 22.4L',
                    freq: 'must-know'
                },
                {
                    name: 'Avogadro\'s Number',
                    expression: 'Nₐ = 6.022 × 10²³ mol⁻¹',
                    freq: 'must-know'
                },
                {
                    name: 'Molarity',
                    expression: 'M = moles of solute / volume of solution (L)',
                    freq: 'must-know'
                },
                {
                    name: 'Molality',
                    expression: 'm = moles of solute / mass of solvent (kg)',
                    freq: 'high'
                },
                {
                    name: 'Normality',
                    expression: 'N = equivalents / volume (L) = M × n-factor',
                    freq: 'high'
                },
                {
                    name: 'Mole Fraction',
                    expression: 'χₐ = nₐ / (nₐ + n_b)',
                    freq: 'high'
                },
                {
                    name: 'Equivalent Weight',
                    expression: 'E = Molecular Weight / n-factor',
                    freq: 'high'
                },
                {
                    name: 'ppm',
                    expression: 'ppm = (mass of solute / mass of solution) × 10⁶',
                    freq: 'medium'
                },
                {
                    name: '% Composition',
                    expression: '% = (mass of element in 1 mol / molar mass) × 100',
                    freq: 'must-know'
                },
                {
                    name: 'Empirical Formula',
                    expression: 'Simplest whole-number ratio of atoms',
                    note: 'Divide by smallest mole value',
                    freq: 'must-know'
                },
                {
                    name: 'Limiting Reagent',
                    expression: 'Compare moles / stoichiometric coefficient — smallest ratio limits',
                    freq: 'must-know'
                }
            ]
        },
        {
            name: 'Atomic Structure & Periodicity',
            formulas: [
                {
                    name: 'Bohr Radius',
                    expression: 'rₙ = 0.529 × n² / Z Å',
                    freq: 'must-know'
                },
                {
                    name: 'Bohr Energy',
                    expression: 'Eₙ = −13.6 Z² / n² eV',
                    freq: 'must-know'
                },
                {
                    name: 'de Broglie Wavelength',
                    expression: 'λ = h / mv = h / p',
                    freq: 'must-know'
                },
                {
                    name: 'Photoelectric Effect',
                    expression: 'E = hν = hc/λ = KE + φ',
                    freq: 'must-know'
                },
                {
                    name: 'Rydberg Formula',
                    expression: '1/λ = RZ²(1/n₁² − 1/n₂²)',
                    note: 'R = 1.097 × 10⁷ m⁻¹',
                    freq: 'must-know'
                },
                {
                    name: 'Heisenberg Uncertainty',
                    expression: 'Δx · Δp ≥ h / 4π',
                    freq: 'high'
                },
                {
                    name: 'Max Electrons per Shell',
                    expression: '2n²',
                    freq: 'must-know'
                },
                {
                    name: 'Number of Spectral Lines',
                    expression: 'Lines = n(n−1)/2',
                    freq: 'high'
                },
                {
                    name: 'Nodes',
                    expression: 'Radial = n − l − 1; Angular = l; Total = n − 1',
                    freq: 'high'
                },
                {
                    name: 'Ionisation Energy Trend',
                    expression: 'IE increases across period, decreases down group',
                    note: 'Exceptions: Be>B, N>O',
                    freq: 'must-know'
                },
                {
                    name: 'Electronegativity (Pauling)',
                    expression: 'EN increases across period, decreases down group',
                    note: 'F is most electronegative (4.0)',
                    freq: 'must-know'
                },
                {
                    name: 'Electron Affinity',
                    expression: 'EA: Cl > F > Br > I',
                    note: 'F anomaly due to small size',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Chemical Bonding & Molecular Structure',
            formulas: [
                {
                    name: 'Bond Order (MOT)',
                    expression: 'BO = (Nb − Na) / 2',
                    freq: 'must-know'
                },
                {
                    name: 'Dipole Moment',
                    expression: 'μ = q × d (in Debye)',
                    freq: 'high'
                },
                {
                    name: 'Formal Charge',
                    expression: 'FC = V − L − B/2',
                    note: 'V=valence, L=lone pair, B=bonding electrons',
                    freq: 'must-know'
                },
                {
                    name: 'Hybridization Formula',
                    expression: 'H = ½(V + M − C + A)',
                    note: 'V=valence electrons, M=monovalent atoms, C=charge, A=anion charge',
                    freq: 'high'
                },
                {
                    name: 'Fajan\'s Rules',
                    expression: 'Small cation + large anion → more covalent character',
                    freq: 'must-know'
                },
                {
                    name: 'Born-Haber Cycle',
                    expression: 'ΔH_f = S + IE + ½D − EA − U',
                    note: 'For lattice energy calculation',
                    freq: 'high'
                },
                {
                    name: 'Lattice Energy',
                    expression: 'U ∝ (Z⁺ × Z⁻) / (r⁺ + r⁻)',
                    freq: 'high'
                },
                {
                    name: 'Bond Length Order',
                    expression: 'Triple < Double < Single',
                    note: 'Bond strength: Triple > Double > Single',
                    freq: 'must-know'
                },
                {
                    name: 'VSEPR Geometry',
                    expression: 'sp=linear, sp²=trigonal, sp³=tetrahedral, sp³d=TBP, sp³d²=octahedral',
                    freq: 'must-know'
                },
                {
                    name: 'Magnetic Moment',
                    expression: 'μ = √(n(n+2)) BM',
                    note: 'n = unpaired electrons',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Thermodynamics & Thermochemistry',
            formulas: [
                {
                    name: 'First Law',
                    expression: 'ΔU = q + w',
                    note: 'IUPAC: w = work done on system',
                    freq: 'must-know'
                },
                {
                    name: 'Enthalpy',
                    expression: 'H = U + PV; ΔH = ΔU + ΔnₘRT',
                    freq: 'must-know'
                },
                {
                    name: 'Gibbs Free Energy',
                    expression: 'ΔG = ΔH − TΔS',
                    freq: 'must-know'
                },
                {
                    name: 'Spontaneity',
                    expression: 'ΔG < 0 → spontaneous; ΔG = 0 → equilibrium; ΔG > 0 → non-spontaneous',
                    freq: 'must-know'
                },
                {
                    name: 'Hess\'s Law',
                    expression: 'ΔH_rxn = Σ ΔH_f(products) − Σ ΔH_f(reactants)',
                    freq: 'must-know'
                },
                {
                    name: 'Bond Energy Method',
                    expression: 'ΔH = Σ BE(reactants) − Σ BE(products)',
                    freq: 'high'
                },
                {
                    name: 'Heat Capacity',
                    expression: 'q = nCΔT; Cp − Cv = R (per mole, ideal gas)',
                    freq: 'must-know'
                },
                {
                    name: 'Work (Isothermal Reversible)',
                    expression: 'w = −nRT ln(V₂/V₁) = −2.303nRT log(V₂/V₁)',
                    freq: 'high'
                },
                {
                    name: 'Entropy Change',
                    expression: 'ΔS = q_rev / T',
                    freq: 'must-know'
                },
                {
                    name: 'Gibbs & Equilibrium',
                    expression: 'ΔG° = −RT ln K = −2.303RT log K',
                    freq: 'high'
                },
                {
                    name: 'Gibbs & Cell EMF',
                    expression: 'ΔG° = −nFE°_cell',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Chemical Equilibrium & Ionic Equilibrium',
            formulas: [
                {
                    name: 'Equilibrium Constant (Kc)',
                    expression: 'Kc = [Products]^coeff / [Reactants]^coeff',
                    freq: 'must-know'
                },
                {
                    name: 'Kp & Kc Relation',
                    expression: 'Kp = Kc(RT)^Δn',
                    note: 'Δn = gaseous moles products − reactants',
                    freq: 'must-know'
                },
                {
                    name: 'Reaction Quotient',
                    expression: 'Q < K → forward; Q > K → backward; Q = K → equilibrium',
                    freq: 'must-know'
                },
                {
                    name: 'Le Chatelier\'s Principle',
                    expression: 'System shifts to oppose imposed change (T, P, conc.)',
                    freq: 'must-know'
                },
                {
                    name: 'pH',
                    expression: 'pH = −log[H⁺]; pOH = −log[OH⁻]; pH + pOH = 14 (at 25°C)',
                    freq: 'must-know'
                },
                {
                    name: 'Kw',
                    expression: 'Kw = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C',
                    freq: 'must-know'
                },
                {
                    name: 'Henderson-Hasselbalch (Acid Buffer)',
                    expression: 'pH = pKa + log([salt]/[acid])',
                    freq: 'must-know'
                },
                {
                    name: 'Henderson-Hasselbalch (Base Buffer)',
                    expression: 'pOH = pKb + log([salt]/[base])',
                    freq: 'high'
                },
                {
                    name: 'Degree of Dissociation (Weak Acid)',
                    expression: 'α = √(Ka/C) when α << 1',
                    freq: 'high'
                },
                {
                    name: 'Solubility Product',
                    expression: 'Ksp = [Aⁿ⁺]^m × [Bᵐ⁻]^n for AmBn',
                    freq: 'must-know'
                },
                {
                    name: 'Common Ion Effect',
                    expression: 'Solubility decreases when a common ion is added',
                    freq: 'high'
                },
                {
                    name: 'Hydrolysis Constant',
                    expression: 'Kh = Kw / Ka (for salt of weak acid + strong base)',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Chemical Kinetics & Electrochemistry',
            formulas: [
                {
                    name: 'Rate Law',
                    expression: 'Rate = k[A]^m[B]^n',
                    note: 'Orders from experiment',
                    freq: 'must-know'
                },
                {
                    name: 'Zero Order',
                    expression: '[A] = [A]₀ − kt; t½ = [A]₀ / 2k',
                    freq: 'must-know'
                },
                {
                    name: 'First Order',
                    expression: 'k = (2.303/t)log([A]₀/[A]); t½ = 0.693/k',
                    freq: 'must-know'
                },
                {
                    name: 'Arrhenius Equation',
                    expression: 'k = Ae^(−Ea/RT)',
                    freq: 'must-know'
                },
                {
                    name: 'Arrhenius (Two Temp)',
                    expression: 'log(k₂/k₁) = (Ea/2.303R)(1/T₁ − 1/T₂)',
                    freq: 'must-know'
                },
                {
                    name: 'Nernst Equation',
                    expression: 'E = E° − (0.0592/n)log Q at 25°C',
                    freq: 'must-know'
                },
                {
                    name: 'Cell EMF',
                    expression: 'E°_cell = E°_cathode − E°_anode',
                    freq: 'must-know'
                },
                {
                    name: 'Faraday\'s 1st Law',
                    expression: 'w = ZIt = (MIt)/(nF)',
                    freq: 'must-know'
                },
                {
                    name: 'Molar Conductivity',
                    expression: 'Λm = κ × 1000 / M',
                    note: 'M = molarity',
                    freq: 'must-know'
                },
                {
                    name: 'Kohlrausch\'s Law',
                    expression: 'Λ°m = ν₊λ°₊ + ν₋λ°₋',
                    freq: 'must-know'
                },
                {
                    name: 'Degree of Dissociation (Conductivity)',
                    expression: 'α = Λm / Λ°m',
                    freq: 'high'
                },
                {
                    name: 'Faraday\'s Constant',
                    expression: 'F = 96485 C/mol ≈ 96500 C/mol',
                    freq: 'must-know'
                }
            ]
        },
        {
            name: 'Solutions & Colligative Properties',
            formulas: [
                {
                    name: 'Raoult\'s Law',
                    expression: 'Pₐ = P°ₐ × χₐ',
                    freq: 'must-know'
                },
                {
                    name: 'Relative Lowering of VP',
                    expression: '(P° − P)/P° = χ_solute',
                    freq: 'must-know'
                },
                {
                    name: 'Elevation in Boiling Point',
                    expression: 'ΔTb = i × Kb × m',
                    freq: 'must-know'
                },
                {
                    name: 'Depression in Freezing Point',
                    expression: 'ΔTf = i × Kf × m',
                    freq: 'must-know'
                },
                {
                    name: 'Osmotic Pressure',
                    expression: 'π = iCRT',
                    freq: 'must-know'
                },
                {
                    name: 'Van\'t Hoff Factor',
                    expression: 'i = 1 + (n−1)α for dissociation; i = 1 − (1−1/n)α for association',
                    freq: 'must-know'
                },
                {
                    name: 'Henry\'s Law',
                    expression: 'P = KH × χ',
                    note: 'For gas solubility in liquids',
                    freq: 'high'
                },
                {
                    name: 'Ideal Solution',
                    expression: 'ΔH_mix = 0, ΔV_mix = 0; obeys Raoult\'s law',
                    freq: 'high'
                },
                {
                    name: 'Positive Deviation',
                    expression: 'P_total > Raoult\'s; A-B interactions weaker',
                    note: 'e.g., ethanol + acetone',
                    freq: 'high'
                },
                {
                    name: 'Negative Deviation',
                    expression: 'P_total < Raoult\'s; A-B interactions stronger',
                    note: 'e.g., CHCl₃ + acetone',
                    freq: 'high'
                },
                {
                    name: 'Molecular Weight from Colligative',
                    expression: 'M₂ = (Kb × w₂ × 1000) / (ΔTb × w₁)',
                    note: 'Similarly for Kf',
                    freq: 'must-know'
                }
            ]
        },
        {
            name: 'Organic Chemistry — General & Reactions',
            formulas: [
                {
                    name: 'Degree of Unsaturation',
                    expression: 'DoU = (2C + 2 + N − H − X) / 2',
                    freq: 'must-know'
                },
                {
                    name: 'Markovnikov\'s Rule',
                    expression: 'H adds to C with more H (electrophilic addition of HX)',
                    freq: 'must-know'
                },
                {
                    name: 'Anti-Markovnikov (Peroxide Effect)',
                    expression: 'HBr + ROOR → anti-Markovnikov product',
                    note: 'Only for HBr',
                    freq: 'high'
                },
                {
                    name: 'SN1 Mechanism',
                    expression: 'Rate = k[substrate]; 3° > 2° > 1° (via carbocation)',
                    freq: 'must-know'
                },
                {
                    name: 'SN2 Mechanism',
                    expression: 'Rate = k[substrate][nucleophile]; CH₃ > 1° > 2° (Walden inversion)',
                    freq: 'must-know'
                },
                {
                    name: 'Saytzeff Rule',
                    expression: 'More substituted alkene = major product in elimination',
                    freq: 'must-know'
                },
                {
                    name: 'Acidity Order',
                    expression: 'RCOOH > ArOH > H₂CO₃ > ROH > H₂O > HC≡CH > NH₃',
                    freq: 'must-know'
                },
                {
                    name: 'Inductive Effect (−I Order)',
                    expression: '−NO₂ > −CN > −COOH > −F > −Cl > −Br > −I > −OH > −OR',
                    freq: 'high'
                },
                {
                    name: '+M Effect Groups',
                    expression: '−NH₂ > −OH > −OR > −NHCOR > −F > −Cl > −Br',
                    note: 'Activating, o/p directing',
                    freq: 'high'
                },
                {
                    name: '−M Effect Groups',
                    expression: '−NO₂ > −CN > −CHO > −COR > −COOH > −COOR',
                    note: 'Deactivating, m directing',
                    freq: 'high'
                },
                {
                    name: 'Hyperconjugation',
                    expression: 'Stability: 3° > 2° > 1° carbocation (no. of α-H atoms)',
                    freq: 'must-know'
                },
                {
                    name: 'Aldol Condensation',
                    expression: '2 R-CHO → β-hydroxy aldehyde → α,β-unsaturated aldehyde (−H₂O)',
                    freq: 'high'
                },
                {
                    name: 'Cannizzaro Reaction',
                    expression: '2HCHO + NaOH → CH₃OH + HCOONa',
                    note: 'No α-H aldehydes only',
                    freq: 'high'
                }
            ]
        },
        {
            name: 'Organic Chemistry — Named Reactions for NEET',
            formulas: [
                {
                    name: 'Wurtz Reaction',
                    expression: '2RX + 2Na → R-R + 2NaX (dry ether)',
                    freq: 'must-know'
                },
                {
                    name: 'Wurtz-Fittig Reaction',
                    expression: 'RX + ArX + 2Na → Ar-R + 2NaX',
                    freq: 'high'
                },
                {
                    name: 'Friedel-Crafts Alkylation',
                    expression: 'ArH + RCl → ArR + HCl (AlCl₃ catalyst)',
                    freq: 'must-know'
                },
                {
                    name: 'Friedel-Crafts Acylation',
                    expression: 'ArH + RCOCl → ArCOR + HCl (AlCl₃)',
                    freq: 'must-know'
                },
                {
                    name: 'Kolbe\'s Reaction',
                    expression: 'PhO⁻Na⁺ + CO₂ → salicylic acid (125°C, 4-7 atm)',
                    freq: 'must-know'
                },
                {
                    name: 'Reimer-Tiemann Reaction',
                    expression: 'PhOH + CHCl₃ + NaOH → salicylaldehyde',
                    freq: 'must-know'
                },
                {
                    name: 'Williamson Ether Synthesis',
                    expression: 'R-O⁻ + R\'X → R-O-R\' (SN2)',
                    freq: 'must-know'
                },
                {
                    name: 'Sandmeyer Reaction',
                    expression: 'ArN₂⁺ + CuX → ArX (X = Cl, Br, CN)',
                    freq: 'must-know'
                },
                {
                    name: 'Clemmensen Reduction',
                    expression: 'C=O → CH₂ (Zn-Hg/conc. HCl)',
                    note: 'Acidic conditions',
                    freq: 'must-know'
                },
                {
                    name: 'Wolff-Kishner Reduction',
                    expression: 'C=O → CH₂ (NH₂NH₂ / KOH / ethylene glycol)',
                    note: 'Basic conditions',
                    freq: 'must-know'
                },
                {
                    name: 'Rosenmund Reduction',
                    expression: 'RCOCl + H₂/Pd-BaSO₄ → RCHO',
                    note: 'Partial reduction to aldehyde',
                    freq: 'high'
                },
                {
                    name: 'Hell-Volhard-Zelinsky',
                    expression: 'RCOOH + Br₂/P → α-bromo carboxylic acid',
                    freq: 'high'
                },
                {
                    name: 'Hofmann Bromamide Reaction',
                    expression: 'RCONH₂ + Br₂/NaOH → RNH₂ + Na₂CO₃',
                    note: 'One carbon lost',
                    freq: 'must-know'
                },
                {
                    name: 'Gabriel Phthalimide Synthesis',
                    expression: 'Phthalimide + KOH + RX → primary amine',
                    note: '1° amines only',
                    freq: 'high'
                },
                {
                    name: 'Carbylamine Reaction (Isocyanide Test)',
                    expression: 'RNH₂ + CHCl₃ + 3KOH → RNC + 3KCl + 3H₂O',
                    note: 'Test for 1° amines',
                    freq: 'must-know'
                },
                {
                    name: 'Tollen\'s Test (Silver Mirror)',
                    expression: 'RCHO + 2[Ag(NH₃)₂]⁺ → RCOO⁻ + 2Ag↓',
                    note: 'Aldehydes give silver mirror',
                    freq: 'must-know'
                },
                {
                    name: 'Fehling\'s Test',
                    expression: 'RCHO + 2Cu²⁺(tartrate) → RCOO⁻ + Cu₂O↓ (red ppt)',
                    note: 'Not for aromatic aldehydes',
                    freq: 'high'
                },
                {
                    name: 'Iodoform Reaction',
                    expression: 'CH₃CO-R + 3I₂ + 4NaOH → CHI₃↓ + RCOONa',
                    note: 'For methyl ketones & ethanol',
                    freq: 'must-know'
                }
            ]
        },
        {
            name: 'Inorganic Chemistry — Periodic Trends & Coordination',
            formulas: [
                {
                    name: 'Atomic Radius Trend',
                    expression: 'Decreases across period; increases down group',
                    freq: 'must-know'
                },
                {
                    name: 'Ionic Radius',
                    expression: 'Cation < parent atom; Anion > parent atom',
                    note: 'Isoelectronic: more protons → smaller',
                    freq: 'must-know'
                },
                {
                    name: 'Metallic Character',
                    expression: 'Increases down group; decreases across period',
                    freq: 'must-know'
                },
                {
                    name: 'Oxidising Power (Halogens)',
                    expression: 'F₂ > Cl₂ > Br₂ > I₂',
                    freq: 'must-know'
                },
                {
                    name: 'Reducing Power (Halide Ions)',
                    expression: 'I⁻ > Br⁻ > Cl⁻ > F⁻',
                    freq: 'must-know'
                },
                {
                    name: 'Thermal Stability of Carbonates',
                    expression: 'BeCO₃ < MgCO₃ < CaCO₃ < SrCO₃ < BaCO₃',
                    note: 'Increases down group',
                    freq: 'high'
                },
                {
                    name: 'Crystal Field Splitting',
                    expression: 'Δ_oct > Δ_tet; Δ_tet ≈ 4/9 Δ_oct',
                    freq: 'high'
                },
                {
                    name: 'Spectrochemical Series',
                    expression: 'I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < CN⁻ < CO',
                    freq: 'must-know'
                },
                {
                    name: 'EAN Rule',
                    expression: 'EAN = Z − OS + 2(CN)',
                    note: 'Effective atomic number',
                    freq: 'medium'
                },
                {
                    name: 'Coordination Number',
                    expression: 'CN = total number of donor atoms bonded to central metal',
                    freq: 'must-know'
                },
                {
                    name: 'CFSE (Octahedral)',
                    expression: 'CFSE = (−0.4n_t₂g + 0.6n_eg)Δ_oct',
                    freq: 'high'
                },
                {
                    name: 'Isomers in Coordination Compounds',
                    expression: 'Geometrical (cis-trans) + Optical (mirror image) + Ionisation + Linkage',
                    freq: 'high'
                }
            ]
        }
    ],
    faqs: [
        {
            q: 'How many Chemistry formulas should I memorise for NEET?',
            a: 'You need approximately 100-120 key formulas across Physical, Organic, and Inorganic Chemistry. Physical Chemistry formulas (thermodynamics, kinetics, electrochemistry, solutions) are most numerical. Organic named reactions and Inorganic periodic trends are equally critical. Focus on "must-know" tagged formulas first — they cover 70-80% of NEET Chemistry questions.'
        },
        {
            q: 'Which Chemistry topic has the highest weightage in NEET?',
            a: 'Organic Chemistry consistently carries 30-35% weightage in NEET, followed by Physical Chemistry (28-32%) and Inorganic Chemistry (25-30%). Within Organic, GOC, reaction mechanisms, and named reactions are most tested. In Physical Chemistry, equilibrium, thermodynamics, and electrochemistry dominate.'
        },
        {
            q: 'Is NCERT enough for NEET Chemistry?',
            a: 'NCERT is the Bible for NEET Chemistry — 85-90% of questions come directly from NCERT textbooks. Master every example, in-text question, and back-exercise in NCERT Class 11 and 12 Chemistry. Supplement with formula sheets and PYQ practice for the remaining 10-15%.'
        },
        {
            q: 'How to remember Organic Chemistry named reactions for NEET?',
            a: 'Group reactions by type: oxidation reactions (KMnO₄, K₂Cr₂O₇), reduction reactions (Clemmensen, Wolff-Kishner, Rosenmund), substitution reactions (Sandmeyer, Wurtz), and test reactions (Tollen\'s, Fehling\'s, iodoform). Write each reaction 5 times, then practice PYQs. Use our formula sheet for quick revision.'
        },
        {
            q: 'What is the best revision strategy for NEET Chemistry formulas?',
            a: 'Use spaced repetition: Day 1 (learn), Day 3 (revise), Day 7 (test), Day 14 (final check). For Physical Chemistry, solve 3-5 numerical problems per formula. For Organic Chemistry, write mechanisms. For Inorganic Chemistry, create periodic trend comparison tables. Revise this formula sheet weekly before NEET.'
        },
        {
            q: 'How does NEET Chemistry differ from JEE Chemistry?',
            a: 'NEET Chemistry is more NCERT-focused and straightforward compared to JEE. NEET rarely asks multi-concept problems or tricky numericals. However, NEET Inorganic Chemistry requires more detailed memorisation of reactions, properties, and exceptions. NEET also includes environmental chemistry and everyday life chemistry topics not emphasised in JEE.'
        }
    ],
    proTips: [
        'NEET Chemistry is 85-90% NCERT — read every line, example, and footnote in Class 11 & 12 NCERT.',
        'Physical Chemistry in NEET is formula-based: memorise the formula, plug in values, get the answer.',
        'Organic named reactions appear in 8-10 questions every year — master all reactions in this sheet.',
        'Inorganic Chemistry is the easiest scoring area if you revise periodic trends and group properties weekly.',
        'For equilibrium problems, always check if the question asks for Kc or Kp — common error source.',
        'Electrochemistry: remember the sign convention — reduction at cathode (positive terminal of galvanic cell).',
        'Solutions chapter guarantees 3-4 questions — master colligative property formulas and Van\'t Hoff factor.',
        'Use Tollen\'s vs Fehling\'s vs Iodoform to distinguish aldehydes, ketones, and methyl carbonyl compounds.'
    ]
};
const allFormulaSheets = [
    jeePhysicsFormulas,
    jeeChemistryFormulas,
    jeeMathsFormulas,
    neetBiologyFormulas,
    neetPhysicsFormulas,
    neetChemistryFormulas
];
const FORMULA_SLUGS = allFormulaSheets.map(_c = (f)=>f.slug);
_c1 = FORMULA_SLUGS;
function getFormulaSheet(slug) {
    return allFormulaSheets.find((f)=>f.slug === slug);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "FORMULA_SLUGS$allFormulaSheets.map");
__turbopack_context__.k.register(_c1, "FORMULA_SLUGS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_data_formulaSheetData_ts_985af9cd._.js.map