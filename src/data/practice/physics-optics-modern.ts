import type { ChapterData } from './types';

/* ─── Chapter 16: Ray & Wave Optics ─── */
const optics: ChapterData = {
  name: 'Optics',
  slug: 'optics',
  topics: [
    {
      name: 'Reflection & Mirrors',
      slug: 'reflection-mirrors',
      easy: [
        { q: 'The angle of incidence equals the angle of reflection. This is the law of:', o: ['Reflection', 'Refraction', 'Diffraction', 'Polarisation'], a: 0, s: 'Law of reflection: ∠i = ∠r, with incident ray, reflected ray and normal in the same plane.' },
        { q: 'The focal length of a concave mirror of radius of curvature R is:', o: ['R/2', 'R', '2R', 'R/4'], a: 0, s: 'f = R/2 for spherical mirrors.' },
        { q: 'A real image formed by a concave mirror is:', o: ['Inverted', 'Erect', 'Virtual', 'Same size always'], a: 0, s: 'Real images from concave mirrors are inverted. Virtual images (object inside f) are erect.' },
        { q: 'The mirror formula is:', o: ['1/v + 1/u = 1/f', '1/v - 1/u = 1/f', 'v + u = f', 'vu = f²'], a: 0, s: '1/v + 1/u = 1/f with appropriate sign conventions.' },
        { q: 'A plane mirror forms an image that is:', o: ['Virtual, erect, same size, laterally inverted', 'Real', 'Inverted', 'Magnified'], a: 0, s: 'Plane mirror: virtual, erect, same-size, laterally inverted image at same distance behind.' },
      ],
      medium: [
        { q: 'An object is placed at 2f from a concave mirror. The image is at:', o: ['2f (same position, inverted, same size)', 'f', 'Infinity', 'Between f and 2f'], a: 0, s: 'At 2f: 1/(2f) + 1/u = 1/f → v = 2f. Image is real, inverted, same size.' },
        { q: 'The magnification of a mirror is:', o: ['-v/u', 'v/u', 'u/v', '-u/v'], a: 0, s: 'm = -v/u. Negative for inverted (real), positive for erect (virtual).' },
        { q: 'Two plane mirrors at 60° form ___ images of an object placed between them:', o: ['5', '3', '6', '4'], a: 0, s: 'n = 360/θ - 1 = 360/60 - 1 = 5 images.' },
        { q: 'A convex mirror always forms:', o: ['Virtual, erect, diminished image', 'Real image', 'Magnified image', 'Inverted image'], a: 0, s: 'Convex mirror: virtual, erect, diminished image for all object positions.' },
        { q: 'The image of an object placed between f and the pole of a concave mirror is:', o: ['Virtual, erect, magnified', 'Real, inverted', 'Virtual, diminished', 'At infinity'], a: 0, s: 'Object inside focal point → virtual, erect, magnified image behind the mirror.' },
      ],
      hard: [
        { q: 'A concave mirror of focal length f produces a real image n times the size of the object. The object distance is:', o: ['f(n+1)/n', 'f(n-1)/n', '(n+1)f', 'nf'], a: 0, s: 'm = -n (inverted). v = nu. 1/v + 1/u = 1/f → 1/(nu) + 1/u = 1/f → (n+1)/(nu) = 1/f → u = f(n+1)/n.' },
        { q: 'An object moves towards a convex mirror from infinity. The image moves:', o: ['Away from mirror (from focus towards pole)', 'Towards mirror', 'Stays fixed', 'Moves to infinity'], a: 0, s: 'As object moves from ∞ to mirror, image moves from F (virtual) towards the mirror but never reaches pole.' },
        { q: 'The velocity of the image in a concave mirror when object moves with velocity v₀ along the principal axis:', o: ['-v²/(u²) × v₀', 'v₀', '-v₀', 'v₀f/(u-f)'], a: 0, s: 'dv/dt = -(v/u)² × du/dt. Image velocity = (v/u)² × object velocity (with sign).' },
        { q: 'A point source is at the centre of curvature of a concave mirror. The image is:', o: ['At the centre of curvature itself (real, inverted, same size)', 'At focus', 'At infinity', 'Virtual'], a: 0, s: 'Object at C → image at C. Size same, inverted.' },
        { q: 'A heavy concave mirror of f = 10 cm is placed on the floor facing up, filled with water (μ = 4/3) to a height of 5 cm. The effective focal length of the system:', o: ['≈ 7.5 cm', '10 cm', '5 cm', '15 cm'], a: 0, s: 'The system acts as mirror + water slab. Effective f involves refraction at water surface and reflection at mirror. P = 2P_water + P_mirror.' },
      ],
    },
    {
      name: 'Refraction & Lenses',
      slug: 'refraction-lenses',
      easy: [
        { q: "Snell's law of refraction is:", o: ['n₁sinθ₁ = n₂sinθ₂', 'n₁cosθ₁ = n₂cosθ₂', 'sinθ₁ = sinθ₂', 'n₁θ₁ = n₂θ₂'], a: 0, s: "Snell's law: n₁sinθ₁ = n₂sinθ₂ at the interface." },
        { q: 'Total internal reflection occurs when light goes from:', o: ['Denser to rarer medium at angle > critical angle', 'Rarer to denser medium', 'At any angle', 'Only in vacuum'], a: 0, s: 'TIR: from denser to rarer medium when θ > θ_c, where sinθ_c = n₂/n₁.' },
        { q: 'The lens formula is:', o: ['1/v - 1/u = 1/f', '1/v + 1/u = 1/f', 'v - u = f', 'vu = f'], a: 0, s: 'For thin lenses: 1/v - 1/u = 1/f (with sign convention).' },
        { q: 'Power of a lens is:', o: ['P = 1/f (in metres) with unit dioptre', 'P = f', 'P = f²', 'P = 1/f²'], a: 0, s: 'P = 1/f (metres). 1 dioptre = 1/m. Converging lens: P > 0.' },
        { q: 'A convex lens converges parallel rays to its:', o: ['Focus', 'Centre', 'Edge', 'Behind the lens at 2f'], a: 0, s: 'Parallel rays converge at the focal point of a convex (converging) lens.' },
      ],
      medium: [
        { q: 'The critical angle for glass (n = 1.5) to air is:', o: ['≈ 41.8°', '30°', '45°', '60°'], a: 0, s: 'sinθ_c = 1/n = 1/1.5 = 2/3. θ_c = sin⁻¹(2/3) ≈ 41.8°.' },
        { q: "The lensmaker's equation is:", o: ['1/f = (n-1)(1/R₁ - 1/R₂)', '1/f = n/R', '1/f = (1/R₁ + 1/R₂)', 'f = R₁R₂/(R₁-R₂)'], a: 0, s: "Lensmaker's equation: 1/f = (μ-1)(1/R₁ - 1/R₂) for a thin lens in air." },
        { q: 'Two thin lenses of focal lengths f₁ and f₂ in contact have combined focal length:', o: ['f₁f₂/(f₁+f₂)', 'f₁+f₂', 'f₁f₂', 'f₁-f₂'], a: 0, s: '1/f = 1/f₁ + 1/f₂ → f = f₁f₂/(f₁+f₂).' },
        { q: 'A prism of angle A and refractive index n produces minimum deviation δ_m. The relation is:', o: ['n = sin((A+δ_m)/2)/sin(A/2)', 'n = sinA/sinδ', 'n = δ_m/A', 'n = A/δ_m'], a: 0, s: 'At minimum deviation: n = sin((A+δ_m)/2)/sin(A/2).' },
        { q: 'Refraction through a rectangular glass slab causes:', o: ['Lateral displacement but no deviation', 'Angular deviation', 'No displacement', 'Total internal reflection'], a: 0, s: 'Emergent ray is parallel to incident ray but laterally displaced.' },
      ],
      hard: [
        { q: 'A fish in water (n = 4/3) at depth d appears at depth ___ to an observer directly above:', o: ['3d/4', 'd', '4d/3', 'd/2'], a: 0, s: 'Apparent depth = real depth / n = d/(4/3) = 3d/4. Objects appear closer.' },
        { q: 'Chromatic aberration in a lens occurs because:', o: ['Refractive index varies with wavelength', 'Lens is thick', 'Light is polarised', 'Temperature changes'], a: 0, s: 'Different wavelengths (colours) are focused at different points due to dispersion (n depends on λ).' },
        { q: 'An achromatic doublet uses lenses of different materials to correct for:', o: ['Chromatic aberration', 'Spherical aberration', 'Coma', 'Distortion'], a: 0, s: 'Achromatic doublet: ω₁/f₁ + ω₂/f₂ = 0, where ω is dispersive power. Corrects chromatic aberration.' },
        { q: 'A plano-convex lens (n = 1.5, R = 20 cm) has focal length:', o: ['40 cm', '20 cm', '10 cm', '30 cm'], a: 0, s: '1/f = (1.5-1)(1/∞ - 1/(-20)) = 0.5 × 1/20 = 1/40. f = 40 cm.' },
        { q: 'For a thin lens, if the object distance equals the image distance, then each equals:', o: ['2f', 'f', '3f', '4f'], a: 0, s: 'When |u| = |v|: magnification = 1 (inverted). u = -2f, v = 2f satisfies 1/2f - 1/(-2f) = 1/f.' },
      ],
    },
    {
      name: 'Wave Optics',
      slug: 'wave-optics',
      easy: [
        { q: "Young's double slit experiment demonstrates:", o: ['Interference of light', 'Diffraction', 'Polarisation', 'Refraction'], a: 0, s: "YDSE produces interference fringes, demonstrating the wave nature of light." },
        { q: 'Constructive interference occurs when path difference is:', o: ['nλ (integer multiple of wavelength)', '(n+½)λ', 'λ/4', 'Zero only'], a: 0, s: 'Constructive: Δx = nλ (n = 0,1,2,...). Waves add up.' },
        { q: 'Destructive interference occurs when path difference is:', o: ['(2n+1)λ/2', 'nλ', 'λ/4', '2λ'], a: 0, s: 'Destructive: Δx = (2n+1)λ/2 = (n+½)λ. Waves cancel.' },
        { q: 'Diffraction is the bending of light around:', o: ['Obstacles or apertures', 'Lenses', 'Mirrors', 'Prisms'], a: 0, s: 'Diffraction: bending/spreading of waves around edges of obstacles or through narrow openings.' },
        { q: 'Polarisation proves that light is:', o: ['A transverse wave', 'A longitudinal wave', 'A particle', 'Not a wave'], a: 0, s: 'Only transverse waves can be polarised. Light polarisation confirms its transverse wave nature.' },
      ],
      medium: [
        { q: 'In YDSE, the fringe width is:', o: ['λD/d', 'λd/D', 'D/(λd)', 'λ/(Dd)'], a: 0, s: 'β = λD/d where D is screen distance, d is slit separation.' },
        { q: 'In single slit diffraction, the first minimum occurs at:', o: ['sinθ = λ/a', 'sinθ = λ/(2a)', 'sinθ = 2λ/a', 'θ = 0'], a: 0, s: 'Single slit: minima at a sinθ = nλ. First minimum: sinθ = λ/a.' },
        { q: "Brewster's angle for glass (n = 1.5) is:", o: ['≈ 56.3°', '45°', '30°', '60°'], a: 0, s: "tanθ_B = n = 1.5. θ_B = tan⁻¹(1.5) ≈ 56.3°." },
        { q: 'An oil film on water appears coloured due to:', o: ['Thin film interference', 'Refraction', 'Diffraction', 'Scattering'], a: 0, s: 'Thin film: light reflected from top and bottom surfaces interferes. Different thicknesses enhance different colours.' },
        { q: 'In YDSE, if white light is used, the central fringe is:', o: ['White', 'Red', 'Blue', 'Violet'], a: 0, s: 'At central maximum, path difference = 0 for all wavelengths → constructive for all → white fringe.' },
      ],
      hard: [
        { q: 'In YDSE, if the experiment is performed in water (n = 4/3), the fringe width:', o: ['Decreases by factor 3/4', 'Increases', 'Stays same', 'Becomes zero'], a: 0, s: 'In medium: λ\' = λ/n. β\' = λ\'D/d = βn = 3β/4. Fringe width decreases.' },
        { q: 'The resolving power of a microscope increases with:', o: ['Shorter wavelength and larger aperture', 'Longer wavelength', 'Smaller aperture', 'Higher magnification alone'], a: 0, s: 'Resolution ∝ 1/λ and ∝ aperture. Shorter λ and larger aperture give better resolution.' },
        { q: 'In a diffraction grating with N slits, the intensity of principal maxima is proportional to:', o: ['N²', 'N', '1/N', 'N³'], a: 0, s: 'Each slit contributes amplitude A. Principal max: amplitude = NA → intensity ∝ N².' },
        { q: "Malus's law states that when polarised light passes through an analyser at angle θ:", o: ['I = I₀cos²θ', 'I = I₀sinθ', 'I = I₀sin²θ', 'I = I₀/cosθ'], a: 0, s: "Malus's law: I = I₀cos²θ. At θ = 90°, I = 0 (crossed polarisers)." },
        { q: 'The angular width of the central maximum in single slit diffraction is:', o: ['2λ/a', 'λ/a', 'λ/(2a)', '4λ/a'], a: 0, s: 'First minima at ±λ/a. Angular width of central max = 2λ/a.' },
      ],
    },
  ],
};

/* ─── Chapter 17: Modern Physics ─── */
const modernPhysics: ChapterData = {
  name: 'Modern Physics',
  slug: 'modern-physics',
  topics: [
    {
      name: 'Photoelectric Effect & Dual Nature',
      slug: 'photoelectric-effect',
      easy: [
        { q: 'The photoelectric effect demonstrates that light behaves as:', o: ['Particles (photons)', 'Only waves', 'Sound', 'Neither'], a: 0, s: 'Photoelectric effect proves particle nature of light. Each photon has energy E = hf.' },
        { q: "Einstein's photoelectric equation is:", o: ['hf = φ + KE_max', 'hf = KE_max', 'hf = φ', 'hf = eV'], a: 0, s: 'hf = W₀ + KE_max, where W₀ (= hf₀) is the work function.' },
        { q: 'The threshold frequency is the minimum frequency below which:', o: ['No photoelectrons are emitted', 'Maximum electrons are emitted', 'Electrons are absorbed', 'Current is maximum'], a: 0, s: 'Below threshold frequency f₀: photon energy < work function → no emission.' },
        { q: 'The stopping potential is independent of:', o: ['Intensity of light', 'Frequency of light', 'Work function', 'Photon energy'], a: 0, s: 'Stopping potential depends on frequency (photon energy), not intensity.' },
        { q: 'The de Broglie wavelength of a particle is:', o: ['λ = h/p = h/(mv)', 'λ = mv/h', 'λ = h/E', 'λ = mc/h'], a: 0, s: 'de Broglie hypothesis: λ = h/p = h/(mv). Wave-particle duality.' },
      ],
      medium: [
        { q: 'A photon of wavelength 400 nm has energy:', o: ['≈ 3.1 eV', '≈ 1.6 eV', '≈ 6.2 eV', '≈ 0.8 eV'], a: 0, s: 'E = hc/λ = (6.63×10⁻³⁴ × 3×10⁸)/(400×10⁻⁹) = 4.97×10⁻¹⁹ J ≈ 3.1 eV.' },
        { q: 'The de Broglie wavelength of an electron accelerated through V volts is:', o: ['λ = 1.226/√V nm', 'λ = h/(eV)', 'λ = eV/h', 'λ = √V nm'], a: 0, s: 'KE = eV, p = √(2meV). λ = h/p = h/√(2meV) ≈ 1.226/√V nm.' },
        { q: 'If the intensity of light is doubled (keeping frequency same), the photoelectric current:', o: ['Doubles', 'Stays same', 'Halves', 'Becomes zero'], a: 0, s: 'More intensity → more photons → more photoelectrons → more current. KE_max stays same.' },
        { q: 'The work function of a metal is 2 eV. The threshold wavelength is:', o: ['620 nm', '400 nm', '310 nm', '800 nm'], a: 0, s: 'λ₀ = hc/W₀ = 1240/2 = 620 nm.' },
        { q: "Davisson-Germer experiment confirmed:", o: ['Wave nature of electrons', 'Particle nature of light', 'Nuclear fission', 'Radioactivity'], a: 0, s: 'Electron diffraction from nickel crystal confirmed de Broglie hypothesis.' },
      ],
      hard: [
        { q: 'An electron and a proton have the same kinetic energy. The ratio of their de Broglie wavelengths is:', o: ['√(m_p/m_e)', '√(m_e/m_p)', '1', 'm_p/m_e'], a: 0, s: 'λ = h/√(2mKE). λ_e/λ_p = √(m_p/m_e) ≈ √1836 ≈ 42.8.' },
        { q: 'The momentum of a photon of wavelength λ is:', o: ['h/λ', 'hλ', 'mc', 'h/(mc)'], a: 0, s: 'E = pc (for photon). p = E/c = hf/c = h/λ.' },
        { q: 'In Compton scattering, the change in wavelength at 90° scattering is:', o: ['h/(m_ec) ≈ 0.0024 nm', '0', 'h/(2m_ec)', '2h/(m_ec)'], a: 0, s: 'Δλ = h/(m_ec)(1-cosθ). At 90°: Δλ = h/(m_ec) = Compton wavelength ≈ 0.00243 nm.' },
        { q: 'The photoelectric effect has a saturation current because:', o: ['All emitted electrons are collected at sufficiently high voltage', 'Work function limits it', 'Electrons recombine', 'Resistance increases'], a: 0, s: 'At saturation: all photoelectrons reach the anode. Further increasing voltage doesn\'t increase current.' },
        { q: 'If the de Broglie wavelength of a particle equals its Compton wavelength, its velocity is:', o: ['c/√2', 'c', 'c/2', '2c'], a: 0, s: 'λ_dB = h/(mv) = h/(mc) = λ_C. Then v = c. But relativistically: λ = h/(γmv). γmv = mc → γv = c. v²/(1-v²/c²) = c² → v = c/√2.' },
      ],
    },
    {
      name: 'Atoms & Nuclei',
      slug: 'atoms-nuclei',
      easy: [
        { q: "In Bohr's model of hydrogen, the energy of the nth level is:", o: ['-13.6/n² eV', '13.6n² eV', '-13.6n eV', '13.6/n eV'], a: 0, s: 'E_n = -13.6/n² eV. Ground state (n=1): -13.6 eV.' },
        { q: 'The radius of the nth Bohr orbit is:', o: ['n²a₀ where a₀ ≈ 0.529 Å', 'na₀', 'a₀/n', 'a₀/n²'], a: 0, s: 'r_n = n²a₀. Bohr radius a₀ = 0.529 Å.' },
        { q: 'Radioactive decay follows:', o: ['N = N₀e^(-λt)', 'N = N₀ + λt', 'N = N₀λ', 'N = N₀/t'], a: 0, s: 'Exponential decay: N = N₀e^(-λt). λ is the decay constant.' },
        { q: 'Half-life is the time for:', o: ['Half the nuclei to decay', 'All nuclei to decay', 'One nucleus to decay', 'Activity to become zero'], a: 0, s: 't₁/₂ = ln2/λ = 0.693/λ. After t₁/₂, N = N₀/2.' },
        { q: 'Alpha particles are:', o: ['Helium nuclei (²He⁴)', 'Electrons', 'Photons', 'Neutrons'], a: 0, s: 'Alpha particle = ⁴₂He nucleus (2 protons + 2 neutrons).' },
      ],
      medium: [
        { q: 'The wavelength of the first line of the Lyman series of hydrogen is:', o: ['≈ 122 nm', '≈ 656 nm', '≈ 91 nm', '≈ 365 nm'], a: 0, s: '1/λ = R(1/1² - 1/2²) = R(3/4). λ = 4/(3R) ≈ 4/(3×1.097×10⁷) ≈ 1.215×10⁻⁷ m ≈ 122 nm.' },
        { q: 'Mass defect is defined as:', o: ['Difference between sum of individual nucleon masses and actual nuclear mass', 'Mass of nucleus', 'Mass of electron', 'Atomic mass'], a: 0, s: 'Δm = Zm_p + Nm_n - M_nucleus. This mass appears as binding energy: E = Δmc².' },
        { q: 'Binding energy per nucleon is maximum for:', o: ['Iron (Fe-56)', 'Uranium', 'Hydrogen', 'Helium'], a: 0, s: 'BE/A peaks at Fe-56 (≈ 8.8 MeV/nucleon). Lighter elements fuse, heavier ones fission towards Fe.' },
        { q: 'In beta-minus decay:', o: ['A neutron converts to proton, electron and antineutrino', 'A proton converts to neutron', 'Alpha particle is emitted', 'Gamma ray is emitted'], a: 0, s: 'β⁻: n → p + e⁻ + ν̄. Atomic number increases by 1, mass number unchanged.' },
        { q: 'After 3 half-lives, the fraction of radioactive atoms remaining is:', o: ['1/8', '1/4', '1/3', '1/6'], a: 0, s: 'After n half-lives: N/N₀ = (1/2)ⁿ = (1/2)³ = 1/8.' },
      ],
      hard: [
        { q: 'The ratio of the shortest wavelengths of Lyman and Balmer series is:', o: ['1:4', '1:2', '4:1', '2:1'], a: 0, s: 'Lyman limit: 1/λ_L = R(1-0) = R, λ_L = 1/R. Balmer limit: 1/λ_B = R(1/4-0) = R/4, λ_B = 4/R. Ratio = 1:4.' },
        { q: 'In nuclear fission of U-235, the energy released per fission is approximately:', o: ['200 MeV', '2 MeV', '20 MeV', '2000 MeV'], a: 0, s: 'U-235 fission releases roughly 200 MeV per nucleus, mostly as KE of fission fragments.' },
        { q: 'The Q-value of a nuclear reaction is:', o: ['(Sum of initial masses - sum of final masses) × c²', 'KE of products', 'Mass of reactants', 'Momentum of products'], a: 0, s: 'Q = (Σm_initial - Σm_final)c². Q > 0 → exothermic, Q < 0 → endothermic.' },
        { q: 'In the Bohr model, the angular momentum of electron in the nth orbit is:', o: ['nℏ = nh/(2π)', 'h/n', 'n²h', 'nh'], a: 0, s: 'Bohr\'s quantisation: L = mvr = nℏ = nh/(2π). n = 1,2,3,...' },
        { q: 'The activity of a radioactive sample of N atoms (decay constant λ) is:', o: ['A = λN = N₀λe^(-λt)', 'A = N/λ', 'A = N²λ', 'A = λ/N'], a: 0, s: 'Activity A = dN/dt = λN. Units: Becquerel (1 decay/s) or Curie (3.7×10¹⁰ decays/s).' },
      ],
    },
    {
      name: 'Semiconductor Devices',
      slug: 'semiconductor-devices',
      easy: [
        { q: 'In a p-type semiconductor, the majority carriers are:', o: ['Holes', 'Electrons', 'Protons', 'Neutrons'], a: 0, s: 'p-type: doped with trivalent (acceptor) impurity. Majority carriers = holes.' },
        { q: 'In an n-type semiconductor, the majority carriers are:', o: ['Electrons', 'Holes', 'Protons', 'Ions'], a: 0, s: 'n-type: doped with pentavalent (donor) impurity. Majority carriers = electrons.' },
        { q: 'A p-n junction diode allows current mainly in:', o: ['Forward bias', 'Reverse bias', 'Both equally', 'Neither'], a: 0, s: 'Forward bias: depletion layer narrows, current flows easily. Reverse bias: high resistance.' },
        { q: 'The depletion region in a p-n junction contains:', o: ['Immobile ions (no free carriers)', 'Free electrons', 'Free holes', 'Nothing'], a: 0, s: 'Depletion region: carriers have diffused away, leaving fixed donor/acceptor ions.' },
        { q: 'A Zener diode is used as a:', o: ['Voltage regulator', 'Current amplifier', 'Oscillator', 'Rectifier only'], a: 0, s: 'Zener diode operates in reverse breakdown: maintains constant voltage → voltage regulation.' },
      ],
      medium: [
        { q: 'In a full-wave rectifier, the output frequency is:', o: ['2 × input frequency', 'Same as input', 'Half of input', '4 × input'], a: 0, s: 'Full-wave: both halves of AC are rectified. Output ripple frequency = 2f_input.' },
        { q: 'The current gain β of a transistor in CE configuration is:', o: ['I_C/I_B', 'I_B/I_C', 'I_E/I_B', 'I_C/I_E'], a: 0, s: 'β = I_C/I_B. Typically 50-300 for common transistors.' },
        { q: 'In a common emitter amplifier, the phase difference between input and output is:', o: ['180° (inverted)', '0°', '90°', '270°'], a: 0, s: 'CE amplifier: output is inverted (180° phase shift) with respect to input.' },
        { q: 'An LED emits light when:', o: ['Electrons and holes recombine across the junction in forward bias', 'Current flows in reverse', 'Temperature increases', 'Magnetic field is applied'], a: 0, s: 'Forward bias: electron-hole recombination releases energy as photons.' },
        { q: 'A photodiode is operated in:', o: ['Reverse bias', 'Forward bias', 'No bias', 'Breakdown region'], a: 0, s: 'Photodiode: reverse biased. Light generates electron-hole pairs → photocurrent proportional to light intensity.' },
      ],
      hard: [
        { q: 'The relation between α (CB current gain) and β (CE current gain) is:', o: ['β = α/(1-α)', 'β = 1-α', 'β = 1/α', 'β = α²'], a: 0, s: 'α = I_C/I_E = β/(1+β). Therefore β = α/(1-α).' },
        { q: 'In a NAND gate, the output is LOW only when:', o: ['All inputs are HIGH', 'Any input is LOW', 'All inputs are LOW', 'No inputs'], a: 0, s: 'NAND = NOT AND. Output = 0 only when all inputs = 1.' },
        { q: 'Boolean expression for XOR gate (A,B) is:', o: ['A⊕B = A̅B + AB̅', 'A+B', 'A·B', 'A̅+B̅'], a: 0, s: 'XOR: output HIGH when inputs differ. A⊕B = A̅B + AB̅.' },
        { q: 'The energy gap of silicon at room temperature is approximately:', o: ['1.1 eV', '0.7 eV', '3.0 eV', '0.3 eV'], a: 0, s: 'Si band gap ≈ 1.1 eV. Ge ≈ 0.7 eV. GaAs ≈ 1.4 eV.' },
        { q: 'A solar cell works on the principle of:', o: ['Photovoltaic effect (p-n junction under illumination)', 'Thermoelectric effect', 'Piezoelectric effect', 'Photoconductive effect only'], a: 0, s: 'Solar cell: photovoltaic effect. Light generates e-h pairs at junction → voltage without external bias.' },
      ],
    },
  ],
};

export const opticsModernChapters: ChapterData[] = [optics, modernPhysics];
