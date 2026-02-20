import type { ChapterData } from './types';

/* ─── Chapter 9: Thermodynamics & KTG ─── */
const thermodynamics: ChapterData = {
  name: 'Thermodynamics',
  slug: 'thermodynamics',
  topics: [
    {
      name: 'Zeroth & First Law',
      slug: 'first-law-thermodynamics',
      easy: [
        { q: 'The first law of thermodynamics is a statement of:', o: ['Conservation of energy', 'Conservation of mass', 'Conservation of momentum', 'Entropy increase'], a: 0, s: 'First law: ΔU = Q - W (energy is conserved).' },
        { q: 'In an isothermal process, the temperature:', o: ['Remains constant', 'Increases', 'Decreases', 'Oscillates'], a: 0, s: 'Isothermal = constant temperature. ΔT = 0.' },
        { q: 'In an adiabatic process:', o: ['No heat is exchanged (Q = 0)', 'No work is done', 'Temperature is constant', 'Pressure is constant'], a: 0, s: 'Adiabatic: Q = 0. The system is thermally insulated.' },
        { q: 'Work done in an isobaric process is:', o: ['PΔV', 'VΔP', 'PV', 'Zero'], a: 0, s: 'At constant pressure: W = PΔV = P(V₂ - V₁).' },
        { q: 'Internal energy of an ideal gas depends only on:', o: ['Temperature', 'Pressure', 'Volume', 'All three'], a: 0, s: 'For an ideal gas, U depends only on T: U = nCᵥT.' },
      ],
      medium: [
        { q: 'For an ideal gas in an isothermal process: PV = constant. The work done is:', o: ['nRT ln(V₂/V₁)', 'PΔV', 'nCᵥΔT', 'Zero'], a: 0, s: 'W = ∫PdV = ∫(nRT/V)dV = nRT ln(V₂/V₁).' },
        { q: 'In an adiabatic process for an ideal gas, PVᵞ = constant. The work done is:', o: ['(P₁V₁ - P₂V₂)/(γ-1)', 'PΔV', 'nRT ln(V₂/V₁)', 'Zero'], a: 0, s: 'W = (P₁V₁ - P₂V₂)/(γ-1) = nCᵥ(T₁-T₂).' },
        { q: 'The slope of an adiabatic curve on a PV diagram compared to an isothermal is:', o: ['Steeper (γ times)', 'Same', 'Less steep', 'Horizontal'], a: 0, s: 'Adiabatic: dP/dV = -γP/V. Isothermal: dP/dV = -P/V. Adiabatic is γ times steeper.' },
        { q: 'In a cyclic process, the change in internal energy is:', o: ['Zero', 'Maximum', 'Minimum', 'Undefined'], a: 0, s: 'Cyclic: system returns to initial state. ΔU = 0. Net work = net heat.' },
        { q: 'One mole of an ideal gas at temperature T has internal energy:', o: ['(f/2)RT where f = degrees of freedom', 'RT', 'PV', '3RT'], a: 0, s: 'U = (f/2)nRT for n = 1. For monoatomic f=3: U = 3RT/2.' },
      ],
      hard: [
        { q: 'In a polytropic process PVⁿ = const, the specific heat is:', o: ['Cᵥ(γ-n)/(1-n)', 'Cᵥ', 'Cₚ', 'Cᵥγ/(γ-1)'], a: 0, s: 'C = Cᵥ(γ-n)/(1-n). For n=0 (isobaric): C = Cᵥγ = Cₚ. For n=γ (adiabatic): C = 0. For n=1 (isothermal): C = ∞.' },
        { q: 'An ideal gas undergoes free expansion (into vacuum). After expansion:', o: ['T, U unchanged; P, V change', 'T increases', 'T decreases', 'U increases'], a: 0, s: 'Free expansion: W = 0, Q = 0 → ΔU = 0. For ideal gas, U = f(T) only, so T unchanged.' },
        { q: 'A monoatomic ideal gas (1 mol) at 300K expands adiabatically to double volume. The final temperature is:', o: ['300/2^(2/3) ≈ 189 K', '150 K', '300 K', '600 K'], a: 0, s: 'TV^(γ-1) = const. γ = 5/3. T₂ = T₁(V₁/V₂)^(2/3) = 300/2^(2/3) ≈ 189 K.' },
        { q: 'The work done by an ideal gas going from state A to B via two different paths:', o: ['Can be different for each path', 'Is always the same', 'Is zero for both', 'Depends only on temperatures'], a: 0, s: 'Work is path-dependent (not a state function). W = ∫PdV depends on the path taken.' },
        { q: 'In an adiabatic process, if volume is halved, pressure of a diatomic gas changes by factor:', o: ['2^(7/5) ≈ 2.64', '2', '4', '2^(5/3)'], a: 0, s: 'PVᵞ = const. γ = 7/5. P₂ = P₁(V₁/V₂)ᵞ = P₁(2)^(7/5) ≈ 2.64P₁.' },
      ],
    },
    {
      name: 'Second Law & Heat Engines',
      slug: 'second-law-heat-engines',
      easy: [
        { q: 'Efficiency of a Carnot engine between temperatures T₁ (hot) and T₂ (cold) is:', o: ['1 - T₂/T₁', 'T₂/T₁', '1 - T₁/T₂', 'T₁/T₂'], a: 0, s: 'η_Carnot = 1 - T_cold/T_hot = 1 - T₂/T₁.' },
        { q: 'According to the second law of thermodynamics:', o: ['Heat cannot spontaneously flow from cold to hot body', 'Energy is always conserved', 'Entropy can decrease', 'All processes are reversible'], a: 0, s: 'Clausius statement: heat flows from hot to cold spontaneously; reverse requires work.' },
        { q: 'A Carnot engine operating between 600K and 300K has efficiency:', o: ['50%', '100%', '25%', '75%'], a: 0, s: 'η = 1 - 300/600 = 1 - 0.5 = 50%.' },
        { q: 'The entropy of the universe in any natural process:', o: ['Increases or remains same', 'Decreases', 'Remains exactly same', 'Becomes zero'], a: 0, s: 'Second law: ΔS_universe ≥ 0 (equality for reversible processes).' },
        { q: 'A refrigerator:', o: ['Transfers heat from cold to hot using work input', 'Creates cold', 'Destroys heat', 'Works without energy input'], a: 0, s: 'Refrigerator uses work to pump heat from cold reservoir to hot reservoir.' },
      ],
      medium: [
        { q: 'The coefficient of performance (COP) of a Carnot refrigerator between T_cold and T_hot is:', o: ['T_cold/(T_hot - T_cold)', '1 - T_cold/T_hot', 'T_hot/T_cold', 'T_hot - T_cold'], a: 0, s: 'COP = Q_cold/W = T_cold/(T_hot - T_cold).' },
        { q: 'An engine absorbs 1000 J from hot reservoir and rejects 600 J. Its efficiency is:', o: ['40%', '60%', '100%', '16.7%'], a: 0, s: 'η = 1 - Q₂/Q₁ = 1 - 600/1000 = 40%.' },
        { q: 'Which process has the maximum entropy change for heating from T₁ to T₂?', o: ['All reversible processes give ΔS = nCₚln(T₂/T₁) for constant P', 'Isothermal', 'Adiabatic', 'Isochoric'], a: 0, s: 'ΔS = ∫dQ_rev/T. At constant pressure: ΔS = nCₚln(T₂/T₁). Entropy is a state function, so it\'s path-independent.' },
        { q: 'Two Carnot engines are in series: first between 600K and 400K, second between 400K and 300K. Combined efficiency:', o: ['50%', '33%', '25%', '58%'], a: 0, s: 'Equivalent to single engine: 1 - 300/600 = 50%. OR η₁ = 1/3, η₂ = 1/4. Combined: 1 - (1-η₁)(1-η₂) = 1 - 2/3 × 3/4 = 1 - 1/2 = 50%.' },
        { q: 'The entropy change when 1 kg of ice at 0°C melts to water at 0°C (L = 3.33 × 10⁵ J/kg) is:', o: ['≈ 1220 J/K', '≈ 333 J/K', '≈ 610 J/K', '0 J/K'], a: 0, s: 'ΔS = Q/T = mL/T = 1 × 3.33×10⁵/273 ≈ 1220 J/K.' },
      ],
      hard: [
        { q: 'The entropy of mixing two ideal gases (n₁ moles and n₂ moles) initially at same T and P is:', o: ['-R(n₁ln(x₁) + n₂ln(x₂)) where xᵢ = nᵢ/(n₁+n₂)', 'Zero', 'n₁Rln(V)', 'R(n₁+n₂)'], a: 0, s: 'Entropy of mixing = -nR Σxᵢ ln(xᵢ) where xᵢ are mole fractions. Always positive since ln(xᵢ) < 0.' },
        { q: 'A heat engine takes Q₁ at T₁ and rejects Q₂ at T₂. For it to be reversible:', o: ['Q₁/T₁ = Q₂/T₂', 'Q₁ = Q₂', 'Q₁T₁ = Q₂T₂', 'Q₁/Q₂ = T₂/T₁'], a: 0, s: 'Reversible engine (Carnot): ΔS = 0 → Q₁/T₁ = Q₂/T₂.' },
        { q: 'An irreversible engine between 800K and 300K absorbs 1000 J. The maximum possible work is:', o: ['625 J', '1000 J', '700 J', '500 J'], a: 0, s: 'Max work = Carnot work = Q₁(1 - T₂/T₁) = 1000(1 - 300/800) = 1000(5/8) = 625 J.' },
        { q: 'The Clausius inequality states:', o: ['∮dQ/T ≤ 0', '∮dQ/T = 0 always', '∮dQ/T ≥ 0', '∮dQ = 0'], a: 0, s: '∮dQ/T ≤ 0 for any cyclic process. Equality holds for reversible cycles.' },
        { q: 'The entropy change of n moles of ideal gas going from (P₁,V₁,T₁) to (P₂,V₂,T₂) is:', o: ['nCᵥln(T₂/T₁) + nRln(V₂/V₁)', 'nCₚln(T₂/T₁)', 'Zero', 'nRln(P₂/P₁)'], a: 0, s: 'ΔS = nCᵥln(T₂/T₁) + nRln(V₂/V₁) = nCₚln(T₂/T₁) - nRln(P₂/P₁). State function, path independent.' },
      ],
    },
    {
      name: 'Kinetic Theory of Gases',
      slug: 'kinetic-theory-gases',
      easy: [
        { q: 'The average kinetic energy of a gas molecule is proportional to:', o: ['Absolute temperature', 'Pressure', 'Volume', 'Density'], a: 0, s: 'KE_avg = (3/2)kT, directly proportional to absolute temperature.' },
        { q: 'The rms speed of gas molecules is:', o: ['√(3kT/m)', '3kT/m', 'kT/m', '√(kT/m)'], a: 0, s: 'v_rms = √(3kT/m) = √(3RT/M) where M is molar mass.' },
        { q: 'At absolute zero temperature, the kinetic energy of gas molecules is:', o: ['Zero (classically)', 'Maximum', 'Undefined', 'Infinite'], a: 0, s: 'Classically, KE = (3/2)kT = 0 at T = 0K.' },
        { q: 'The pressure exerted by an ideal gas is due to:', o: ['Collisions of molecules with container walls', 'Gravity', 'Intermolecular attraction', 'Chemical reactions'], a: 0, s: 'Gas pressure arises from molecular collisions with walls, transferring momentum.' },
        { q: 'For an ideal gas, PV = nRT. R is called:', o: ['Universal gas constant', 'Boltzmann constant', 'Avogadro number', 'Specific heat'], a: 0, s: 'R = 8.314 J/(mol·K), the universal gas constant.' },
      ],
      medium: [
        { q: 'The ratio v_rms : v_avg : v_mp for a gas is:', o: ['√3 : √(8/π) : √2', '1 : 1 : 1', '3 : 2 : 1', '√3 : √2 : 1'], a: 0, s: 'v_rms = √(3kT/m), v_avg = √(8kT/(πm)), v_mp = √(2kT/m). Ratio ≈ 1.73 : 1.60 : 1.41.' },
        { q: 'Degrees of freedom for a diatomic molecule at room temperature:', o: ['5', '3', '6', '7'], a: 0, s: 'At room temperature: 3 translational + 2 rotational = 5. Vibrational modes are frozen out.' },
        { q: 'The mean free path of gas molecules increases with:', o: ['Decrease in pressure', 'Increase in pressure', 'Decrease in temperature', 'Increase in molecular size'], a: 0, s: 'λ = kT/(√2 πd²P). Mean free path ∝ 1/P and ∝ T.' },
        { q: 'For a monoatomic ideal gas, Cₚ/Cᵥ (γ) is:', o: ['5/3', '7/5', '4/3', '3/2'], a: 0, s: 'Monoatomic: f=3. Cᵥ = 3R/2, Cₚ = 5R/2. γ = 5/3.' },
        { q: 'Maxwell-Boltzmann distribution gives the probability of finding molecules with:', o: ['A given speed', 'A given position', 'A given mass', 'A given charge'], a: 0, s: 'Maxwell-Boltzmann distribution f(v) describes the probability of molecular speeds.' },
      ],
      hard: [
        { q: 'The mean free path of an O₂ molecule (d = 3.6 × 10⁻¹⁰ m) at STP is approximately:', o: ['≈ 7 × 10⁻⁸ m', '≈ 7 × 10⁻⁵ m', '≈ 7 × 10⁻¹⁰ m', '≈ 7 × 10⁻³ m'], a: 0, s: 'λ = kT/(√2 πd²P) = (1.38×10⁻²³ × 273)/(√2 π × (3.6×10⁻¹⁰)² × 101325) ≈ 7×10⁻⁸ m.' },
        { q: 'At high temperatures, a diatomic gas has γ =:', o: ['9/7', '7/5', '5/3', '4/3'], a: 0, s: 'At high T, vibrational modes activate: f = 3+2+2 = 7. Cᵥ = 7R/2, Cₚ = 9R/2. γ = 9/7.' },
        { q: 'The rms speed of H₂ molecules at 300K (M = 2×10⁻³ kg/mol) is:', o: ['≈ 1930 m/s', '≈ 500 m/s', '≈ 3860 m/s', '≈ 960 m/s'], a: 0, s: 'v_rms = √(3RT/M) = √(3 × 8.314 × 300/(2×10⁻³)) = √(3,741,300) ≈ 1934 m/s.' },
        { q: 'In the Maxwell speed distribution, the fraction of molecules with speed between v and v+dv is proportional to:', o: ['v²e^(-mv²/2kT)', 've^(-mv²/2kT)', 'e^(-mv²/2kT)', 'v³e^(-mv²/2kT)'], a: 0, s: 'f(v)dv ∝ v²e^(-mv²/(2kT))dv. The v² factor comes from the shell in velocity space.' },
        { q: 'The pressure of a gas in terms of energy density (E/V) is:', o: ['P = (2/3)(E/V)', 'P = E/V', 'P = (1/3)(E/V)', 'P = 2(E/V)'], a: 0, s: 'P = (1/3)ρ<v²> = (2/3)(½ρ<v²>) = (2/3)(E/V) for translational KE.' },
      ],
    },
  ],
};

/* ─── Chapter 10: Heat Transfer & Thermal Properties ─── */
const heatTransfer: ChapterData = {
  name: 'Heat Transfer',
  slug: 'heat-transfer',
  topics: [
    {
      name: 'Calorimetry & Thermal Expansion',
      slug: 'calorimetry-thermal-expansion',
      easy: [
        { q: 'The SI unit of specific heat is:', o: ['J/(kg·K)', 'J/K', 'cal/g', 'W/m'], a: 0, s: 'Specific heat = energy per unit mass per unit temperature change: J/(kg·K).' },
        { q: 'When two bodies at different temperatures are mixed (no heat loss), at equilibrium:', o: ['Heat lost by hot = heat gained by cold', 'Both reach room temperature', 'Total volume is conserved', 'Pressure equalises'], a: 0, s: 'Calorimetry principle: Q_lost = Q_gained (energy conservation).' },
        { q: 'Linear expansion of a rod is given by:', o: ['ΔL = LαΔT', 'ΔL = L/(αΔT)', 'ΔL = α/L', 'ΔL = LΔT'], a: 0, s: 'ΔL = LαΔT where α is coefficient of linear expansion.' },
        { q: 'The coefficient of volume expansion β is related to linear expansion α by:', o: ['β = 3α', 'β = α', 'β = 2α', 'β = α²'], a: 0, s: 'For isotropic solids: β ≈ 3α.' },
        { q: 'Latent heat is the heat needed to:', o: ['Change phase without temperature change', 'Raise temperature by 1°C', 'Compress a gas', 'Melt any solid'], a: 0, s: 'Latent heat = energy for phase transition at constant temperature.' },
      ],
      medium: [
        { q: '100 g of water at 80°C is mixed with 200 g at 20°C. The equilibrium temperature is:', o: ['40°C', '50°C', '60°C', '30°C'], a: 0, s: '100(80-T) = 200(T-20) → 8000-100T = 200T-4000 → 300T = 12000 → T = 40°C.' },
        { q: 'A bimetallic strip bends when heated because:', o: ['The two metals have different expansion coefficients', 'One metal melts', 'They have different masses', 'They have different colours'], a: 0, s: 'Different α values cause differential expansion, making the strip curve.' },
        { q: 'A pendulum clock gains time in winter because:', o: ['The pendulum contracts, decreasing period', 'The pendulum expands', 'Gravity changes', 'Temperature has no effect'], a: 0, s: 'T = 2π√(L/g). In winter, L decreases → T decreases → clock runs fast (gains time).' },
        { q: 'The density of a liquid at temperature T compared to T₀ is:', o: ['ρ = ρ₀/(1+βΔT)', 'ρ = ρ₀(1+βΔT)', 'ρ = ρ₀βΔT', 'ρ remains same'], a: 0, s: 'V = V₀(1+βΔT), m is constant. ρ = m/V = ρ₀/(1+βΔT).' },
        { q: 'Steam at 100°C causes more severe burns than water at 100°C because:', o: ['Steam releases additional latent heat on condensing', 'Steam is hotter', 'Steam has more mass', 'Steam has higher specific heat'], a: 0, s: 'Steam gives up latent heat (2260 kJ/kg) when condensing, in addition to heat released during cooling.' },
      ],
      hard: [
        { q: 'A steel tape measures correctly at 20°C (α = 12×10⁻⁶/°C). At 40°C, it reads 100 m for a distance. The true distance is:', o: ['100.024 m', '100 m', '99.976 m', '100.048 m'], a: 0, s: 'At higher T, tape expands. Each marking is farther apart. True = measured × (1+αΔT) = 100(1+12×10⁻⁶×20) = 100.024 m.' },
        { q: '10 g of ice at -10°C is mixed with 10 g of water at 50°C. (c_ice = 0.5 cal/g°C, L_f = 80 cal/g). The final temperature is:', o: ['0°C with some ice remaining', '10°C', '25°C', '0°C all melted'], a: 0, s: 'Heat to warm ice to 0°C: 10×0.5×10 = 50 cal. Heat to melt ice: needs 800 cal. Heat available from water: 10×1×50 = 500 cal. After warming ice: 500-50 = 450 cal left. Can melt 450/80 ≈ 5.6 g of ice. Not all ice melts → T = 0°C.' },
        { q: 'A hollow sphere with outer radius R₂ and inner radius R₁ has steady state heat conduction. The temperature distribution is proportional to:', o: ['1/r', 'r', 'r²', 'ln(r)'], a: 0, s: 'For spherical steady conduction: T(r) = A + B/r. Temperature varies as 1/r (not linearly).' },
        { q: 'Anomalous expansion of water occurs between:', o: ['0°C and 4°C', '0°C and 100°C', '4°C and 10°C', '-10°C and 0°C'], a: 0, s: 'Water has maximum density at 4°C. Between 0°C and 4°C, heating causes contraction (anomalous).' },
        { q: 'A solid at temperature T is heated. The increment in moment of inertia is approximately:', o: ['2αΔT × I₀', 'αΔT × I₀', '3αΔT × I₀', 'α²ΔT² × I₀'], a: 0, s: 'I ∝ R² (or similar). ΔI/I = 2(ΔR/R) = 2αΔT. So ΔI = 2αΔT × I₀.' },
      ],
    },
    {
      name: 'Conduction, Convection & Radiation',
      slug: 'heat-transfer-modes',
      easy: [
        { q: 'Heat transfer by conduction occurs through:', o: ['Direct contact (molecular vibrations)', 'Fluid motion', 'Electromagnetic waves', 'Phase changes'], a: 0, s: 'Conduction: heat flows via molecular vibrations/collisions in solids.' },
        { q: 'The rate of heat conduction through a slab is given by:', o: ['Q/t = KA(T₁-T₂)/L', 'Q = mCΔT', 'Q = σAT⁴', 'Q = hAΔT'], a: 0, s: "Fourier's law: dQ/dt = KA(dT/dx) for slab: Q/t = KA(T₁-T₂)/L." },
        { q: 'A perfect black body has emissivity:', o: ['1', '0', '0.5', 'Infinity'], a: 0, s: 'Black body absorbs all radiation: emissivity ε = absorptivity = 1.' },
        { q: 'Stefan-Boltzmann law states that radiated power is proportional to:', o: ['T⁴', 'T', 'T²', 'T³'], a: 0, s: 'P = σεAT⁴. Radiated power ∝ T⁴.' },
        { q: "Wien's displacement law relates the peak wavelength to:", o: ['Temperature: λ_max T = constant', 'Pressure', 'Volume', 'Intensity'], a: 0, s: "Wien's law: λ_max × T = b ≈ 2.898 × 10⁻³ m·K." },
      ],
      medium: [
        { q: 'Two rods of same dimensions but thermal conductivities K₁ and K₂ are connected in series. The equivalent conductivity is:', o: ['2K₁K₂/(K₁+K₂)', 'K₁+K₂', '(K₁+K₂)/2', 'K₁K₂'], a: 0, s: 'In series: L_eq/K_eq = L₁/K₁ + L₂/K₂. For same length: 2L/K_eq = L/K₁ + L/K₂ → K_eq = 2K₁K₂/(K₁+K₂).' },
        { q: 'Newton\'s law of cooling states that rate of cooling is proportional to:', o: ['Excess temperature above surroundings', 'Absolute temperature', 'T⁴', 'Mass of body'], a: 0, s: 'dT/dt ∝ (T - T_surroundings) for small temperature differences.' },
        { q: 'The surface temperature of the Sun is about 6000K. The peak emission wavelength is approximately:', o: ['483 nm (visible)', '100 nm', '1000 nm', '10000 nm'], a: 0, s: "λ_max = b/T = 2.898×10⁻³/6000 ≈ 4.83×10⁻⁷ m = 483 nm (visible light)." },
        { q: 'A body at temperature T₁ in surroundings at T₂ radiates net power:', o: ['σεA(T₁⁴ - T₂⁴)', 'σεAT₁⁴', 'σεA(T₁ - T₂)', 'σεA(T₁² - T₂²)'], a: 0, s: 'Net radiated power = σεA(T₁⁴ - T₂⁴).' },
        { q: 'If the temperature of a body is doubled, the radiated energy becomes:', o: ['16 times', '2 times', '4 times', '8 times'], a: 0, s: 'E ∝ T⁴. If T → 2T: E → 16E.' },
      ],
      hard: [
        { q: 'A composite wall has two layers of equal thickness but conductivities K and 2K. The temperature at the interface, if outer faces are at T₁ and T₂:', o: ['(2T₁ + T₂)/3', '(T₁+T₂)/2', '(T₁+2T₂)/3', 'T₁T₂/(T₁+T₂)'], a: 0, s: 'Heat flow: KA(T₁-Tᵢ)/L = 2KA(Tᵢ-T₂)/L → T₁-Tᵢ = 2(Tᵢ-T₂) → T₁-Tᵢ = 2Tᵢ-2T₂ → 3Tᵢ = T₁+2T₂ → Tᵢ = (T₁+2T₂)/3. Wait: if T₁ side has K, then K(T₁-T)/L = 2K(T-T₂)/L → T₁-T = 2T-2T₂ → T = (T₁+2T₂)/3. But if T₁ is hotter side with K first: Tᵢ = (T₁+2T₂)/3.' },
        { q: 'A sphere of radius R at initial temperature T₁ cools by radiation in vacuum (surroundings at T₂). The initial rate of temperature change is:', o: ['3σε(T₁⁴-T₂⁴)/(ρcR)', '4σεT₁³/(ρcR)', 'σε(T₁-T₂)/R', 'σεT₁⁴/(ρcR)'], a: 0, s: 'dT/dt = -P/(mc) = -σε4πR²(T₁⁴-T₂⁴)/((4/3)πR³ρc) = -3σε(T₁⁴-T₂⁴)/(ρcR).' },
        { q: 'The temperature of a body decreases from 70°C to 60°C in 5 min, surroundings at 30°C. The time to cool from 60°C to 50°C is:', o: ['≈ 7 min', '5 min', '10 min', '3 min'], a: 0, s: 'Newton\'s cooling: avg excess 35°C for first interval, 25°C for second. Rate ∝ excess. t₂ = 5×35/25 = 7 min.' },
        { q: 'A cylindrical rod with one end at T₁ and other insulated loses heat from its lateral surface. The temperature distribution satisfies:', o: ['d²T/dx² = (hP/(KA))(T - T_s) — a form of fin equation', 'dT/dx = constant', 'T = constant', 'd²T/dx² = 0'], a: 0, s: 'This is the heat fin equation. With lateral losses, temperature decays exponentially along the length.' },
        { q: 'Two bodies (equal mass, specific heats c₁ and c₂) at T₁ and T₂ exchange heat. The entropy change of the universe:', o: ['Is positive', 'Is zero', 'Is negative', 'Cannot be determined'], a: 0, s: 'Irreversible heat exchange → ΔS_universe > 0. ΔS = m·c₁·ln(Tf/T₁) + m·c₂·ln(Tf/T₂) > 0.' },
      ],
    },
  ],
};

/* ─── Chapter 11: SHM & Waves ─── */
const shmWaves: ChapterData = {
  name: 'Simple Harmonic Motion & Waves',
  slug: 'shm-waves',
  topics: [
    {
      name: 'Simple Harmonic Motion',
      slug: 'simple-harmonic-motion',
      easy: [
        { q: 'The acceleration in SHM is proportional to:', o: ['Displacement (and opposite in direction)', 'Velocity', 'Time', 'Force'], a: 0, s: 'SHM: a = -ω²x. Acceleration ∝ displacement, directed towards equilibrium.' },
        { q: 'The time period of a simple pendulum is:', o: ['2π√(L/g)', '2π√(g/L)', '2πL/g', '2πg/L'], a: 0, s: 'T = 2π√(L/g), independent of mass and amplitude (for small oscillations).' },
        { q: 'At the mean position of SHM, the:', o: ['Velocity is maximum, acceleration is zero', 'Velocity is zero', 'Acceleration is maximum', 'Both are zero'], a: 0, s: 'At mean position: x=0 → a = -ω²(0) = 0, and v = ωA (maximum).' },
        { q: 'At the extreme position of SHM:', o: ['Velocity is zero, acceleration is maximum', 'Velocity is maximum', 'Both are zero', 'Both are maximum'], a: 0, s: 'At extremes: x = ±A → v = 0, a = -ω²A (maximum magnitude).' },
        { q: 'The displacement in SHM is given by:', o: ['x = A sin(ωt + φ)', 'x = At²', 'x = v₀t', 'x = A/t'], a: 0, s: 'x = A sin(ωt + φ) or A cos(ωt + φ), sinusoidal variation with time.' },
      ],
      medium: [
        { q: 'The velocity of a particle in SHM at displacement x is:', o: ['ω√(A² - x²)', 'ωA', 'ωx', 'ω(A-x)'], a: 0, s: 'v = ω√(A² - x²). At x=0: v=ωA (max). At x=A: v=0.' },
        { q: 'A spring-mass system has k = 100 N/m and m = 1 kg. The time period is:', o: ['2π/10 ≈ 0.63 s', '2π s', '10 s', '1 s'], a: 0, s: 'T = 2π√(m/k) = 2π√(1/100) = 2π/10 ≈ 0.63 s.' },
        { q: 'Two springs of constants k₁ and k₂ in parallel have equivalent constant:', o: ['k₁ + k₂', 'k₁k₂/(k₁+k₂)', '(k₁+k₂)/2', '1/(k₁+k₂)'], a: 0, s: 'Parallel springs: k_eq = k₁ + k₂ (forces add).' },
        { q: 'The total energy of SHM is:', o: ['½kA² = ½mω²A²', '½mv²', '½kx²', 'mgA'], a: 0, s: 'E = ½kA² = constant. At any point: E = ½kx² + ½mv².' },
        { q: 'A body executes SHM with period T. The time to go from x = 0 to x = A/2 is:', o: ['T/12', 'T/4', 'T/8', 'T/6'], a: 0, s: 'x = A sin(ωt). A/2 = A sin(ωt₁) → sin(ωt₁) = ½ → ωt₁ = π/6 → t₁ = T/12.' },
      ],
      hard: [
        { q: 'A pendulum of length L is in a lift accelerating upward at a. The time period is:', o: ['2π√(L/(g+a))', '2π√(L/(g-a))', '2π√(L/g)', '2π√(L/a)'], a: 0, s: 'Effective g_eff = g + a (pseudo force adds to gravity). T = 2π√(L/g_eff) = 2π√(L/(g+a)).' },
        { q: 'Two SHMs of same amplitude A and frequencies ω and 2ω are superposed. The resulting motion is:', o: ['Periodic but not SHM', 'SHM with frequency ω', 'SHM with frequency 2ω', 'Not periodic'], a: 0, s: 'Sum of SHMs with different frequencies is periodic (period = 2π/ω) but not simple harmonic.' },
        { q: 'The time period of a physical pendulum (compound) is:', o: ['2π√(I/(mgd))', '2π√(L/g)', '2π√(m/k)', '2π√(d/g)'], a: 0, s: 'T = 2π√(I/(mgd)) where I = moment of inertia about pivot, d = distance of COM from pivot.' },
        { q: 'A particle executes SHM. The fraction of total energy that is kinetic when displacement is A/2:', o: ['3/4', '1/2', '1/4', '7/8'], a: 0, s: 'KE/E = 1 - x²/A² = 1 - 1/4 = 3/4.' },
        { q: 'Two identical springs (k each) support a mass m, one from above and one from below. The time period is:', o: ['2π√(m/(2k))', '2π√(m/k)', 'π√(m/k)', '2π√(2m/k)'], a: 0, s: 'Both springs contribute restoring force: effective k = 2k. T = 2π√(m/(2k)).' },
      ],
    },
    {
      name: 'Wave Motion',
      slug: 'wave-motion',
      easy: [
        { q: 'The speed of a transverse wave on a string is:', o: ['√(T/μ) where T is tension, μ is linear density', '√(B/ρ)', 'fλ', 'ωk'], a: 0, s: 'v = √(T/μ), depends on tension and mass per unit length.' },
        { q: 'The relation between wave speed, frequency and wavelength is:', o: ['v = fλ', 'v = f/λ', 'v = λ/f', 'v = f²λ'], a: 0, s: 'Fundamental wave equation: v = fλ.' },
        { q: 'Sound waves in air are:', o: ['Longitudinal', 'Transverse', 'Both', 'Neither'], a: 0, s: 'Sound in air: particles oscillate along the direction of wave propagation → longitudinal.' },
        { q: 'The principle of superposition states that when waves overlap:', o: ['The resultant displacement is the sum of individual displacements', 'They cancel completely', 'They amplify always', 'They stop'], a: 0, s: 'Superposition: y_net = y₁ + y₂ + ... (algebraic sum).' },
        { q: 'A wave y = A sin(kx - ωt) travels in the:', o: ['Positive x-direction', 'Negative x-direction', 'y-direction', 'z-direction'], a: 0, s: 'y = A sin(kx - ωt) → wave moves in +x direction. (kx + ωt → moves in -x direction).' },
      ],
      medium: [
        { q: 'The fundamental frequency of a string of length L, tension T, and mass per unit length μ is:', o: ['(1/2L)√(T/μ)', '(1/L)√(T/μ)', '(1/4L)√(T/μ)', '2L√(T/μ)'], a: 0, s: 'For fixed-fixed string: f₁ = v/(2L) = (1/2L)√(T/μ).' },
        { q: 'Beats are produced when two waves of slightly different frequencies interfere. Beat frequency equals:', o: ['|f₁ - f₂|', 'f₁ + f₂', 'f₁f₂', '(f₁+f₂)/2'], a: 0, s: 'Beat frequency = |f₁ - f₂|, the difference in frequencies.' },
        { q: 'In a closed organ pipe, only ___ harmonics are present:', o: ['Odd', 'Even', 'All', 'None'], a: 0, s: 'Closed pipe: one end node, one end antinode. Only odd harmonics: f, 3f, 5f, ...' },
        { q: 'The Doppler effect for sound when source moves towards a stationary observer gives apparent frequency:', o: ['f\' = f × v/(v - vₛ)', 'f\' = f × (v - vₛ)/v', 'f\' = f × v/(v + vₛ)', 'f\' = f'], a: 0, s: 'Source approaching: f\' = f(v/(v-vₛ)) > f (higher pitch).' },
        { q: 'Standing waves are formed by superposition of:', o: ['Two identical waves traveling in opposite directions', 'Two waves of different frequencies', 'A wave with no reflection', 'Only longitudinal waves'], a: 0, s: 'Standing wave = superposition of two waves of same frequency and amplitude traveling in opposite directions.' },
      ],
      hard: [
        { q: 'The speed of sound in a gas is:', o: ['√(γP/ρ) = √(γRT/M)', '√(P/ρ)', '√(T/ρ)', '√(B/ρ)'], a: 0, s: 'Newton-Laplace: v = √(γP/ρ). Using ideal gas: v = √(γRT/M).' },
        { q: 'Two open organ pipes produce 5 beats/s. One pipe is 50 cm long, the other is slightly longer. The speed of sound is 330 m/s. The length of the other pipe is:', o: ['≈ 50.76 cm', '51 cm', '55 cm', '49 cm'], a: 0, s: 'f₁ = 330/(2×0.5) = 330 Hz. f₂ = 325 Hz. L₂ = 330/(2×325) = 0.5077 m ≈ 50.77 cm.' },
        { q: 'A source of frequency 1000 Hz moves towards a wall at 10 m/s (v_sound = 340 m/s). The beat frequency heard by the source is:', o: ['≈ 60 Hz', '30 Hz', '20 Hz', '10 Hz'], a: 0, s: 'Frequency heard at wall: f\'= 1000×340/330 ≈ 1030.3. Reflected wave acts as source at 1030.3 Hz approaching observer (who moves at 10 m/s towards it): f" = 1030.3×350/340 ≈ 1060.9. Beats = 1060.9 - 1000 ≈ 60 Hz.' },
        { q: 'A string vibrating in its 3rd harmonic has nodes at positions:', o: ['0, L/3, 2L/3, L', '0, L/2, L', '0, L/4, L/2, 3L/4, L', '0, L'], a: 0, s: '3rd harmonic has 3 half-wavelengths in L. Nodes at 0, L/3, 2L/3, L (4 nodes, 3 antinodes).' },
        { q: 'The intensity of sound is proportional to:', o: ['(Amplitude)² × (frequency)²', 'Amplitude', 'Frequency', 'Wavelength'], a: 0, s: 'I ∝ A²ω² = A²(2πf)². Intensity depends on square of both amplitude and frequency.' },
      ],
    },
  ],
};

export const thermoWavesChapters: ChapterData[] = [thermodynamics, heatTransfer, shmWaves];
