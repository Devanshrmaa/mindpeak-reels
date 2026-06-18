import { Calculator, Target, Sigma, BarChart3, Lightbulb, Shapes, Triangle } from 'lucide-react';
import type { ChapterData } from '../chapterData';

/* ═══════════════════════════════════════════════════
   JEE MATHEMATICS — 23 granular chapter pages
   Algebra (8) + Calculus (6) + Coordinate (3) + Trig (2) + Vectors/3D/Prob (4)
   ═══════════════════════════════════════════════════ */

export const jeeMathsChapters: ChapterData[] = [

  /* ──────── ALGEBRA ──────── */
  {
    slug: 'jee-maths-sets-relations-functions',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Sets, Relations & Functions',
    icon: Shapes,
    weightage: '3-4%', difficulty: 'Moderate', pyqCount: 35,
    description: 'Domain, range, types of functions, composition, and inverse — the language of mathematics. MindPeak begins JEE Maths preparation here because every other chapter uses function terminology.',
    topics: ['Types of Sets & Venn Diagrams', 'Types of Relations (Reflexive, Symmetric, Transitive, Equivalence)', 'Domain & Range', 'Types of Functions (Injective, Surjective, Bijective)', 'Composition of Functions', 'Inverse Functions', 'Even & Odd Functions', 'Periodic Functions'],
    keyFormulas: ['f: A→B injective ⟺ f(a₁)=f(a₂) ⟹ a₁=a₂', 'f(f⁻¹(x)) = x (bijective)', 'Period of sin/cos = 2π, tan = π', 'n(A∪B) = n(A) + n(B) - n(A∩B)'],
    commonMistakes: ['Confusing injective (one-one) with surjective (onto)', 'Wrong domain when composition involves restricted domains', 'Forgetting that inverse exists only for bijective functions', 'Wrong period for transformed functions'],
    faqs: [
      { q: 'How important is this chapter for JEE?', a: '3-4% directly, but function concepts appear in calculus, trigonometry, and coordinate geometry. MindPeak treats this as foundational — 5 sessions ensure you never struggle with domain/range again.' },
    ],
  },
  {
    slug: 'jee-maths-complex-numbers',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Complex Numbers',
    icon: Calculator,
    weightage: '4-5%', difficulty: 'Moderate', pyqCount: 45,
    description: 'Argand plane, modulus-argument, De Moivre\'s theorem, and roots of unity — a JEE Advanced favourite. MindPeak\'s geometric interpretation of complex numbers makes problems visual and intuitive.',
    topics: ['Argand Plane & Modulus-Argument Form', 'Algebra of Complex Numbers', 'Conjugate & Properties', 'De Moivre\'s Theorem', 'Cube Roots & nth Roots of Unity', 'Rotation in Complex Plane', 'Geometry Using Complex Numbers', 'Loci in Complex Plane'],
    keyFormulas: ['|z₁z₂| = |z₁||z₂|', 'arg(z₁z₂) = arg(z₁) + arg(z₂)', '(cosθ + isinθ)ⁿ = cos(nθ) + isin(nθ)', 'Cube roots of unity: 1, ω, ω² (1+ω+ω²=0)', '|z-z₁| = |z-z₂| → perpendicular bisector'],
    commonMistakes: ['Wrong argument for negative real numbers (arg = π, not 0)', 'Forgetting principal argument range (-π, π]', 'Wrong application of rotation formula', 'Confusing |z|² with z·z̄'],
    faqs: [
      { q: 'Is Complex Numbers important for JEE Advanced?', a: 'Extremely important! JEE Advanced asks 2-3 questions involving geometry in complex plane, roots of unity, and loci. MindPeak\'s approach combines algebra with Argand-plane geometry for complete mastery.' },
    ],
  },
  {
    slug: 'jee-maths-quadratic-equations',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Quadratic Equations',
    icon: Calculator,
    weightage: '3-5%', difficulty: 'Moderate', pyqCount: 40,
    description: 'Roots, discriminant, Vieta\'s formulas, and location of roots — a staple JEE topic connecting algebra with graphs. MindPeak\'s graphical approach to quadratics makes inequality and location-of-roots problems systematic.',
    topics: ['Roots & Discriminant', 'Nature of Roots', 'Vieta\'s Formulas (Sum & Product)', 'Quadratic Function Graph', 'Location of Roots', 'Common Roots of Two Quadratics', 'Higher Degree Equations', 'Descartes\' Rule of Signs'],
    keyFormulas: ['x = (-b ± √(b²-4ac))/2a', 'Sum of roots = -b/a, Product = c/a', 'D > 0 → real distinct, D = 0 → equal, D < 0 → complex', 'Both roots > k ⟺ D≥0, f(k)>0, -b/2a>k'],
    commonMistakes: ['Wrong conditions for location of roots (forgetting all 3 conditions)', 'Not checking discriminant non-negative first', 'Wrong application of Vieta\'s for higher degree', 'Sign error in common roots condition'],
    faqs: [
      { q: 'What are the most tested problem types?', a: 'Location of roots (both roots in an interval), common roots, and quadratic inequality are JEE favourites. MindPeak teaches a graphical method that makes these problems solvable in under 2 minutes.' },
    ],
  },
  {
    slug: 'jee-maths-sequences-series',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Sequences & Series (AP, GP, HP)',
    icon: Sigma,
    weightage: '4-6%', difficulty: 'Moderate', pyqCount: 50,
    description: 'Arithmetic, geometric, and harmonic progressions plus summation techniques — a high-weightage JEE topic. MindPeak\'s formula-derivation approach means students can reconstruct any forgotten formula in the exam.',
    topics: ['Arithmetic Progression (AP)', 'Geometric Progression (GP)', 'Harmonic Progression (HP)', 'AM, GM, HM Relationship', 'Sum of Special Series (Σn², Σn³)', 'Arithmetico-Geometric Series', 'Method of Differences', 'Telescoping Series', 'Infinite GP Sum'],
    keyFormulas: ['AP: aₙ = a + (n-1)d, Sₙ = n/2(2a+(n-1)d)', 'GP: aₙ = arⁿ⁻¹, Sₙ = a(rⁿ-1)/(r-1)', 'S∞ = a/(1-r) (|r|<1)', 'AM ≥ GM ≥ HM', 'Σn² = n(n+1)(2n+1)/6', 'Σn³ = [n(n+1)/2]²'],
    commonMistakes: ['Wrong formula for sum of first n terms of GP when r=1', 'Forgetting condition |r|<1 for infinite GP', 'Wrong application of AM-GM inequality', 'Errors in method of differences for non-standard series'],
    faqs: [
      { q: 'How to handle non-standard series in JEE Advanced?', a: 'Use (1) method of differences for polynomial general terms, (2) telescoping for cancellation, (3) AGP method for products of AP and GP terms. MindPeak teaches all 3 techniques with 20 practice problems each.' },
    ],
  },
  {
    slug: 'jee-maths-permutations-combinations',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Permutations & Combinations',
    icon: Calculator,
    weightage: '5-7%', difficulty: 'Hard', pyqCount: 55,
    description: 'Counting principles, arrangements, selections, and distribution — one of the most challenging JEE topics. MindPeak\'s categorization method breaks every PnC problem into one of 12 standard types.',
    topics: ['Fundamental Counting Principle', 'Permutations (nPr)', 'Combinations (nCr)', 'Permutations with Repetition', 'Circular Permutations', 'Division & Distribution', 'Derangements', 'Inclusion-Exclusion Principle', 'Multinomial Theorem'],
    keyFormulas: ['nPr = n!/(n-r)!', 'nCr = n!/r!(n-r)!', 'Circular arrangement: (n-1)!', 'Derangements: D(n) = n!(1-1/1!+1/2!-...+(-1)ⁿ/n!)', 'Stars & Bars: C(n+r-1, r-1)'],
    commonMistakes: ['Not accounting for identical objects', 'Wrong formula for distribution (distinguishable vs identical)', 'Overcounting in cases with restrictions', 'Confusing when to use P vs C'],
    faqs: [
      { q: 'How to improve at PnC?', a: 'Categorize problems: (1) arrangement vs selection, (2) with/without repetition, (3) with/without restrictions, (4) distribution. MindPeak provides a decision tree that maps every problem to its type within 30 seconds.' },
    ],
  },
  {
    slug: 'jee-maths-binomial-theorem',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Binomial Theorem',
    icon: Calculator,
    weightage: '3-5%', difficulty: 'Moderate', pyqCount: 40,
    description: 'Binomial expansion, general term, middle term, and properties of binomial coefficients — a JEE favourite for clever manipulation questions. MindPeak\'s pattern-based approach handles even the trickiest binomial coefficient identities.',
    topics: ['Binomial Expansion for Positive Integer', 'General Term T(r+1)', 'Middle Term', 'Greatest Term & Coefficient', 'Properties of Binomial Coefficients', 'Multinomial Theorem', 'Binomial for Negative/Fractional Index', 'Divisibility & Remainder Using Binomial'],
    keyFormulas: ['(x+y)ⁿ = Σ C(n,r)xⁿ⁻ʳyʳ', 'T(r+1) = C(n,r)xⁿ⁻ʳyʳ', 'Middle term: T(n/2+1) if n even', 'ΣC(n,r) = 2ⁿ', 'ΣC(n,r)(-1)ʳ = 0'],
    commonMistakes: ['Wrong general term index (T(r+1), not T(r))', 'Forgetting two middle terms when n is odd', 'Wrong sign in greatest term calculation', 'Errors in applying binomial for fractional index'],
    faqs: [
      { q: 'What types of Binomial Theorem problems does JEE Advanced ask?', a: 'Sum of binomial coefficients with constraints, remainder/divisibility problems, and approximation using first few terms. MindPeak covers 30+ problem types with difficulty-graded practice sets.' },
    ],
  },
  {
    slug: 'jee-maths-matrices-determinants',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Matrices & Determinants',
    icon: Calculator,
    weightage: '5-7%', difficulty: 'Hard', pyqCount: 60,
    description: 'Matrix operations, adjoint, inverse, system of equations, and determinant properties — a JEE Advanced powerhouse chapter. MindPeak\'s structured approach to matrix problems ensures students handle even multi-concept questions confidently.',
    topics: ['Types of Matrices', 'Matrix Operations & Properties', 'Transpose, Symmetric & Skew-Symmetric', 'Determinant Calculation (Sarrus, Cofactor)', 'Properties of Determinants', 'Adjoint & Inverse', 'System of Linear Equations (Cramer\'s Rule)', 'Rank of Matrix', 'Cayley-Hamilton Theorem'],
    keyFormulas: ['A⁻¹ = adj(A)/|A|', '|AB| = |A||B|', '|kA| = kⁿ|A| (n×n matrix)', 'Cramer: x = Dₓ/D', 'Cayley-Hamilton: A satisfies its characteristic equation'],
    commonMistakes: ['Wrong cofactor sign pattern', 'Forgetting that |kA| = kⁿ|A| (not k|A|)', 'Wrong determinant row/column operations (R↔C confusion)', 'Not checking consistency before solving system of equations'],
    faqs: [
      { q: 'How important is Matrices for JEE Advanced?', a: '5-7% with conceptually deep questions. Expect questions on system of equations (consistent/inconsistent/infinite solutions), Cayley-Hamilton, and determinant properties. MindPeak dedicates 8+ sessions to build matrix mastery.' },
    ],
  },
  {
    slug: 'jee-maths-mathematical-reasoning',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Mathematical Reasoning & Induction',
    icon: Lightbulb,
    weightage: '1-2%', difficulty: 'Easy', pyqCount: 15,
    description: 'Principle of Mathematical Induction and logical statements — a JEE Main chapter with 1-2% easy marks. MindPeak covers this in a single session for guaranteed marks.',
    topics: ['Statements & Logical Connectives', 'Negation, Converse, Contrapositive', 'Principle of Mathematical Induction', 'Tautology & Contradiction', 'Quantifiers (For All, There Exists)'],
    keyFormulas: ['PMI: (1) Verify P(1), (2) Assume P(k), (3) Prove P(k+1)', 'Contrapositive of p→q is ¬q→¬p', 'Negation of ∀x P(x) is ∃x ¬P(x)'],
    commonMistakes: ['Not clearly stating induction hypothesis', 'Wrong negation of compound statements', 'Confusing converse and contrapositive'],
    faqs: [
      { q: 'Is Mathematical Reasoning asked in JEE Advanced?', a: 'Rarely. Focus on JEE Main where 1 question on logical statements or PMI appears. Quick marks with minimal preparation.' },
    ],
  },

  /* ──────── CALCULUS ──────── */
  {
    slug: 'jee-maths-limits-continuity',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Limits & Continuity',
    icon: Target,
    weightage: '4-5%', difficulty: 'Moderate', pyqCount: 45,
    description: 'Limit evaluation, L\'Hôpital\'s rule, sandwich theorem, and continuity conditions — the gateway to calculus. MindPeak ensures students master limits before touching derivatives, building unshakeable calculus foundations.',
    topics: ['Limit Definition & Notation', 'Algebraic Limits', 'Trigonometric Limits', 'Exponential & Logarithmic Limits', 'L\'Hôpital\'s Rule', 'Sandwich Theorem', '1^∞ Form', 'Continuity at a Point', 'Types of Discontinuity', 'Intermediate Value Theorem'],
    keyFormulas: ['lim(x→0) sinx/x = 1', 'lim(x→0) (eˣ-1)/x = 1', 'lim(x→0) (1+x)^(1/x) = e', '1^∞ form: lim e^{(f-1)g}', 'L\'Hôpital: 0/0 or ∞/∞ → f\'/g\''],
    commonMistakes: ['Applying L\'Hôpital without checking 0/0 or ∞/∞ form', 'Wrong 1^∞ form evaluation', 'Forgetting one-sided limits for continuity check', 'Wrong limit for piecewise functions'],
    faqs: [
      { q: 'What are the most tested limit types?', a: '0/0 form (factorize or L\'Hôpital), 1^∞ form (e method), and limits involving floor/fractional part functions. MindPeak covers 50+ limit varieties with systematic solving strategies.' },
    ],
  },
  {
    slug: 'jee-maths-differentiation',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Differentiation',
    icon: Target,
    weightage: '3-5%', difficulty: 'Moderate', pyqCount: 40,
    description: 'Derivatives from first principles, chain rule, implicit differentiation, and higher-order derivatives — the core of calculus. MindPeak teaches differentiation as a skill to be automated through 200+ practice problems.',
    topics: ['First Principles', 'Product & Quotient Rule', 'Chain Rule', 'Implicit Differentiation', 'Parametric Differentiation', 'Logarithmic Differentiation', 'Higher Order Derivatives', 'Differentiation of Determinants', 'Leibniz Theorem (nth Derivative)'],
    keyFormulas: ['d/dx(xⁿ) = nxⁿ⁻¹', 'd/dx(eˣ) = eˣ', 'd/dx(ln x) = 1/x', 'Chain: dy/dx = dy/du · du/dx', 'Leibniz: (uv)⁽ⁿ⁾ = Σ C(n,r)u⁽ⁿ⁻ʳ⁾v⁽ʳ⁾'],
    commonMistakes: ['Forgetting chain rule in composite functions', 'Wrong implicit differentiation (not differentiating y terms with dy/dx)', 'Errors in logarithmic differentiation', 'Wrong formula application for parametric derivatives'],
    faqs: [
      { q: 'How much practice is enough for differentiation?', a: 'Differentiation should be automatic — like multiplication. Practice until you can differentiate any function in under 30 seconds. MindPeak assigns 200+ differentiation drills across all types.' },
    ],
  },
  {
    slug: 'jee-maths-application-of-derivatives',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Application of Derivatives',
    icon: BarChart3,
    weightage: '6-8%', difficulty: 'Hard', pyqCount: 65,
    description: 'Tangent/normal, maxima/minima, Rolle\'s theorem, LMVT, and monotonicity — the highest-weightage calculus chapter. MindPeak\'s graphical approach to AOD makes even the trickiest optimization problems manageable.',
    topics: ['Rate of Change', 'Tangent & Normal', 'Increasing/Decreasing Functions', 'Maxima & Minima (First & Second Derivative Test)', 'Global vs Local Extrema', 'Rolle\'s Theorem', 'Lagrange Mean Value Theorem (LMVT)', 'Curve Sketching', 'Optimization Problems'],
    keyFormulas: ['Slope of tangent = dy/dx at point', 'f\'(x) > 0 → increasing', 'Rolle: f(a)=f(b) ⟹ ∃c: f\'(c)=0', 'LMVT: f\'(c) = (f(b)-f(a))/(b-a)', 'Second derivative test: f\'\'(c)>0 → minima'],
    commonMistakes: ['Not checking endpoints for global extrema on closed interval', 'Wrong application of LMVT (forgetting continuity/differentiability conditions)', 'Confusing local and global extrema', 'Incomplete analysis of increasing/decreasing intervals'],
    faqs: [
      { q: 'How to handle optimization word problems?', a: 'Step 1: Identify the quantity to optimize. Step 2: Express as f(x) with one variable. Step 3: Find f\'(x)=0. Step 4: Verify using the second derivative test. MindPeak provides 40+ graded optimization problems.' },
      { q: 'Are LMVT and Rolle\'s Theorem important for Advanced?', a: 'Critical! JEE Advanced uses LMVT to prove inequalities and Rolle\'s to prove existence of roots. These become simple once you visualize the geometric meaning. MindPeak\'s graphical teaching makes these theorems intuitive.' },
    ],
  },
  {
    slug: 'jee-maths-indefinite-integration',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Indefinite Integration',
    icon: Sigma,
    weightage: '5-7%', difficulty: 'Hard', pyqCount: 55,
    description: 'Integration techniques — substitution, by parts, partial fractions, and special integrals. JEE Advanced loves tricky integrals. MindPeak teaches a decision tree: given any integrand, which technique to use.',
    topics: ['Basic Integration Formulas', 'Integration by Substitution', 'Integration by Parts (ILATE)', 'Partial Fractions', 'Trigonometric Substitutions', 'Integrals Involving √(ax²+bx+c)', 'Special Integrals (Euler Substitution)', 'Reduction Formulas', 'Integration of Rational Functions'],
    keyFormulas: ['∫xⁿ dx = xⁿ⁺¹/(n+1) + C', '∫eˣ dx = eˣ + C', 'By parts: ∫u dv = uv - ∫v du', 'ILATE: Inverse → Log → Algebraic → Trig → Exponential', '∫eˣ(f+f\') dx = eˣf + C'],
    commonMistakes: ['Wrong ILATE priority', 'Missing +C in indefinite integrals', 'Incomplete partial fraction decomposition', 'Wrong substitution for trigonometric integrals'],
    faqs: [
      { q: 'How to decide which integration technique to use?', a: 'MindPeak teaches a flowchart: (1) Direct formula? → use it. (2) Can substitute? → substitute. (3) Product of different types? → by parts. (4) Rational function? → partial fractions. (5) Contains √quadratic? → trig substitution. This flowchart covers 95% of JEE problems.' },
    ],
  },
  {
    slug: 'jee-maths-definite-integration',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Definite Integration & Area Under Curves',
    icon: BarChart3,
    weightage: '6-8%', difficulty: 'Hard', pyqCount: 60,
    description: 'Definite integral properties, Leibniz rule, area under curves, and Walli\'s formula — JEE Advanced powerhouse. MindPeak combines definite integration with area problems for a unified understanding.',
    topics: ['Fundamental Theorem of Calculus', 'Properties of Definite Integrals', 'King Property: ∫f(x)dx = ∫f(a+b-x)dx', 'Even/Odd Function Properties', 'Leibniz Rule (Differentiation Under Integral)', 'Walli\'s Formula', 'Area Under Curves', 'Area Between Two Curves', 'Estimation of Definite Integrals'],
    keyFormulas: ['∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx', 'f(x) even: ∫₋ₐᵃ f(x)dx = 2∫₀ᵃ f(x)dx', 'f(x) odd: ∫₋ₐᵃ f(x)dx = 0', 'Leibniz: d/dx ∫ₐ^{g(x)} f(t)dt = f(g(x))g\'(x)', 'Area = ∫|f(x)-g(x)|dx'],
    commonMistakes: ['Wrong application of King property', 'Forgetting absolute value in area calculation', 'Wrong limits of integration for area between curves', 'Not using symmetry to simplify'],
    faqs: [
      { q: 'What is the King Property and why is it important?', a: '∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx. It simplifies integrals where f(x)+f(a-x) is constant. Used in 30%+ of JEE Advanced definite integral questions. MindPeak drills this property until it becomes second nature.' },
      { q: 'What is the weightage of definite integration in JEE Main vs JEE Advanced?', a: 'Calculus is the largest block in JEE Main Mathematics — about 25% of the section — and definite integration plus area under curves is one of its biggest single topics (roughly 2–3 questions a year, comparable to functions). In JEE Advanced, integral calculus is even heavier at around 15–16% with 5–6 questions, and definite integration is the part Advanced loves most because it can be made property-based rather than computational. The key difference: JEE Main mostly asks you to evaluate an integral or find an area; JEE Advanced often hands you an integral that has no clean antiderivative at all and expects you to crack it with symmetry, the King property, periodicity, or Leibniz\'s rule. Roughly 60 PYQs map to this chapter.' },
      { q: 'Which definite-integral properties are tested most in JEE Advanced?', a: 'In rough order of appearance: (1) the King property ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a−x)dx — it shows up in around a third of Advanced definite-integral questions; (2) even/odd and periodicity (∫₋ₐᵃ of an odd function is 0; ∫ over n periods = n × one period); (3) Leibniz\'s rule when the limits are functions of x; (4) Wallis\'s formula for ∫₀^{π/2} sinⁿx or cosⁿx; (5) recognising a limit of a sum as a definite integral (Riemann sum). Honest split: area under curves and direct evaluation are where Main marks live, while the pure property games above are an Advanced specialty — if you are Main-focused and short on time, master King property + even/odd + area, and treat Wallis and series-as-integral as Advanced extensions.' },
      { q: 'How do I solve a JEE definite integral when normal integration does not work?', a: 'Use this decision sequence before reaching for an antiderivative: (1) Check symmetry — is the function odd over a symmetric interval (answer 0) or even (double the half-integral)? (2) Is it periodic — can you reduce the limits to one period? (3) Try the King property: replace x with (a+b−x); if f(x)+f(a+b−x) collapses to a constant, you are done in two lines. (4) Are the limits themselves functions of x? Then differentiate using Leibniz instead of integrating. (5) Is it ∫sinⁿ/cosⁿ over [0, π/2]? Use Wallis. (6) Is it a limit of a sum as n→∞? Convert to ∫₀¹ f(x)dx. Most JEE Advanced definite integrals are designed so that one of these six moves cracks them without ever finding the antiderivative — that is the skill being tested.' },
    ],
  },
  {
    slug: 'jee-maths-differential-equations',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Differential Equations',
    icon: Calculator,
    weightage: '4-5%', difficulty: 'Hard', pyqCount: 45,
    description: 'First-order ODEs — variable separable, linear, homogeneous, and exact. MindPeak\'s identification flowchart helps students classify any ODE within 30 seconds and apply the correct solving technique.',
    topics: ['Order & Degree', 'Variable Separable', 'Homogeneous Differential Equations', 'Linear Differential Equations (dy/dx + Py = Q)', 'Integrating Factor', 'Formation of Differential Equations', 'Applications (Growth, Decay, Geometry)', 'Orthogonal Trajectories'],
    keyFormulas: ['Variable separable: ∫f(y)dy = ∫g(x)dx', 'Homogeneous: substitution y = vx', 'Linear: IF = e^{∫P dx}, y·IF = ∫Q·IF dx', 'Formation: eliminate arbitrary constants'],
    commonMistakes: ['Wrong identification of equation type', 'Forgetting integrating factor for linear ODE', 'Not converting to standard form before solving', 'Wrong substitution for homogeneous equations'],
    faqs: [
      { q: 'How to classify a differential equation quickly?', a: 'MindPeak flowchart: (1) Can separate variables? → separate. (2) Homogeneous (f(tx,ty) = tⁿf(x,y))? → substitute y=vx. (3) Linear (dy/dx + Py = Q)? → use IF. (4) Bernoulli? → reduce to linear. This covers all JEE-level ODEs.' },
    ],
  },

  /* ──────── COORDINATE GEOMETRY ──────── */
  {
    slug: 'jee-maths-straight-lines',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Straight Lines',
    icon: Triangle,
    weightage: '3-4%', difficulty: 'Moderate', pyqCount: 35,
    description: 'Slope, equations of lines, angle between lines, distance formulas, and family of lines — the beginning of coordinate geometry. MindPeak builds a strong straight-line foundation for circles and conics.',
    topics: ['Slope & Inclination', 'Various Forms of Line Equation', 'Angle Between Two Lines', 'Distance of Point From Line', 'Concurrent Lines', 'Family of Lines', 'Pair of Straight Lines', 'Homogeneous Equation of Pair of Lines'],
    keyFormulas: ['y-y₁ = m(x-x₁) (point-slope)', 'x/a + y/b = 1 (intercept)', 'Distance = |ax₁+by₁+c|/√(a²+b²)', 'tanθ = |m₁-m₂|/(1+m₁m₂)', 'Pair: ax²+2hxy+by² = 0, tanθ = 2√(h²-ab)/(a+b)'],
    commonMistakes: ['Wrong sign in distance formula', 'Forgetting perpendicular condition m₁m₂ = -1', 'Wrong angle between lines (acute vs obtuse)', 'Not using family of lines for concurrency problems'],
    faqs: [
      { q: 'Is the chapter on Pair of Straight Lines important?', a: 'Yes for JEE Advanced. Homogeneous equations, angle between pair, and joint equation appear in 1-2 questions. MindPeak covers this thoroughly with 15+ practice problems on pair of lines.' },
    ],
  },
  {
    slug: 'jee-maths-circles',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Circles',
    icon: Shapes,
    weightage: '4-5%', difficulty: 'Moderate', pyqCount: 45,
    description: 'Equation of circle, tangent, normal, radical axis, and family of circles — beautiful geometry with algebra. MindPeak teaches circles with geometric insight first, then algebraic formulation.',
    topics: ['General & Standard Equation', 'Parametric Form', 'Position of Point w.r.t. Circle', 'Tangent & Normal', 'Length of Tangent', 'Pair of Tangents from External Point', 'Chord of Contact', 'Director Circle', 'Radical Axis & Radical Centre', 'Family of Circles (Coaxial System)'],
    keyFormulas: ['(x-h)²+(y-k)² = r²', 'Tangent: xx₁+yy₁ = r² (at point)', 'Length of tangent = √(S₁)', 'Radical axis: S₁ - S₂ = 0', 'Director circle: x²+y² = 2r²'],
    commonMistakes: ['Wrong centre/radius from general equation (forgetting to complete square)', 'Wrong tangent formula for external point', 'Confusing radical axis and common chord', 'Forgetting director circle for tangent pair problems'],
    faqs: [
      { q: 'What is the Radical Axis and why does it matter?', a: 'The radical axis is the locus of points with equal power w.r.t. two circles (S₁-S₂=0). It\'s perpendicular to the line joining centres. Used in family of circles and coaxial systems. MindPeak teaches radical axis through 10 progressive problems.' },
    ],
  },
  {
    slug: 'jee-maths-conic-sections',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Conic Sections (Parabola, Ellipse, Hyperbola)',
    icon: Shapes,
    weightage: '7-10%', difficulty: 'Hard', pyqCount: 80,
    description: 'Parabola, ellipse, and hyperbola — the crown jewel of coordinate geometry carrying 7-10% in JEE. MindPeak dedicates 15+ sessions to conics, covering every property with geometric visualization.',
    topics: ['Parabola (Standard Forms, Tangent, Normal)', 'Focal Chord & Parametric Equations (Parabola)', 'Ellipse (Standard Equations, Eccentricity)', 'Tangent & Normal (Ellipse)', 'Director Circle & Auxiliary Circle', 'Hyperbola (Standard Equations)', 'Rectangular Hyperbola', 'Asymptotes', 'Conjugate Hyperbola', 'Chord of Contact for All Conics'],
    keyFormulas: ['Parabola: y²=4ax, parametric (at², 2at)', 'Ellipse: x²/a²+y²/b²=1, e=c/a', 'Hyperbola: x²/a²-y²/b²=1, e=c/a', 'Tangent: y=mx+a/m (parabola)', 'Tangent: y=mx±√(a²m²+b²) (ellipse)'],
    commonMistakes: ['Confusing standard forms for horizontal vs vertical conics', 'Wrong eccentricity formula', 'Wrong focal distance relationship', 'Forgetting reflection property of parabola', 'Mixing up transverse and conjugate axis'],
    faqs: [
      { q: 'What is the weightage of conic sections in JEE Main and JEE Advanced?', a: 'In JEE Main, conic sections (parabola, ellipse, hyperbola) typically contribute 2–3 questions worth 8–12 marks — roughly 7–10% of the Maths section, making it a top-5 chapter by marks. In JEE Advanced, coordinate geometry is one of the heaviest blocks: usually 2–4 questions across both papers, and conics dominate it. Parabola is the single most-asked conic in Advanced (focal-chord and tangent/normal properties), followed by hyperbola; ellipse appears more often in Main. 80+ PYQs in the last decade come from this chapter.' },
      { q: 'Should I prioritise parabola over ellipse and hyperbola for JEE Advanced?', a: 'Master parabola first: its parametric form (at², 2at), focal-chord results, and tangent/normal properties power the majority of Advanced conic questions, including comprehension and matrix-match formats. But Advanced loves mixing conics — a parabola problem often resolves through an auxiliary-circle or director-circle property — so partial preparation leaks marks. A good split: ~60% of conics time on parabola + hyperbola for Advanced, with ellipse standard results at instant recall for Main.' },
      { q: 'Conics seem overwhelming — how to study?', a: 'Study one conic at a time: Parabola first (simplest), then Ellipse, then Hyperbola. For each: learn standard form, parametric form, tangent/normal, and focal properties. MindPeak structures conic preparation over 15 sessions with progressive difficulty.' },
      { q: 'Which conic is asked most in JEE Advanced?', a: 'Parabola and Hyperbola are JEE Advanced favourites. Ellipse is more common in JEE Main. MindPeak ensures equal mastery of all three with exam-specific problem sets.' },
    ],
  },

  /* ──────── TRIGONOMETRY ──────── */
  {
    slug: 'jee-maths-trigonometry',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Trigonometric Functions & Equations',
    icon: Triangle,
    weightage: '4-6%', difficulty: 'Moderate', pyqCount: 50,
    description: 'Trigonometric identities, equations, and graphs — fundamental to JEE Mathematics. MindPeak\'s identity-derivation approach means students never need to memorize — they can derive any formula in seconds.',
    topics: ['Trigonometric Ratios & Identities', 'Compound Angle Formulas', 'Multiple Angle Formulas', 'Sum-to-Product & Product-to-Sum', 'Trigonometric Equations (General Solutions)', 'Properties of Triangles', 'Sine & Cosine Rules', 'Heights & Distances', 'Conditional Identities'],
    keyFormulas: ['sin(A±B) = sinAcosB ± cosAsinB', 'cos2A = cos²A - sin²A = 2cos²A-1', 'General: sinθ=sinα ⟹ θ=nπ+(-1)ⁿα', 'Sine rule: a/sinA = b/sinB = c/sinC = 2R', 'Cosine rule: c² = a²+b²-2ab·cosC'],
    commonMistakes: ['Missing solutions in trigonometric equations', 'Wrong general solution formula', 'Forgetting restrictions on inverse trig domains', 'Wrong application of sine/cosine rule'],
    faqs: [
      { q: 'How to solve trigonometric equations efficiently?', a: 'Convert to single trig function → use standard general solution. For complex equations, use substitution (t = tan(x/2)). MindPeak teaches a systematic approach that works for 95% of JEE trig equations.' },
    ],
  },
  {
    slug: 'jee-maths-inverse-trigonometry',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Inverse Trigonometric Functions',
    icon: Triangle,
    weightage: '3-4%', difficulty: 'Moderate', pyqCount: 35,
    description: 'Domain, range, graphs, and properties of inverse trig functions — connects trigonometry with calculus. MindPeak\'s visual graph-based teaching makes inverse trig properties intuitive rather than memorized.',
    topics: ['Principal Value Branch', 'Graphs of Inverse Trig Functions', 'Properties (sin⁻¹x + cos⁻¹x = π/2)', 'Simplification of Expressions', 'Equations Involving Inverse Trig', 'Addition Formulas (tan⁻¹a + tan⁻¹b)', 'Conversion Between Inverse Functions'],
    keyFormulas: ['sin⁻¹x + cos⁻¹x = π/2', 'tan⁻¹x + cot⁻¹x = π/2', 'tan⁻¹a + tan⁻¹b = tan⁻¹((a+b)/(1-ab))', '2tan⁻¹x = sin⁻¹(2x/(1+x²)) = cos⁻¹((1-x²)/(1+x²))'],
    commonMistakes: ['Wrong principal value range', 'Forgetting sign constraints in addition formula', 'Wrong simplification of composite inverse trig', 'Not checking domain validity'],
    faqs: [
      { q: 'Why are students confused by Inverse Trig?', a: 'Because principal value ranges are different for each function. MindPeak\'s approach: memorize just sin⁻¹ and tan⁻¹ ranges, derive the rest. Graph visualization eliminates confusion about where each function is valid.' },
    ],
  },

  /* ──────── VECTORS, 3D & PROBABILITY ──────── */
  {
    slug: 'jee-maths-vectors',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Vectors',
    icon: Target,
    weightage: '3-5%', difficulty: 'Moderate', pyqCount: 40,
    description: 'Dot product, cross product, scalar triple product, and vector equations — beautiful geometry made algebraic. MindPeak teaches vectors geometrically first, then introduces algebraic tools.',
    topics: ['Vector Addition & Scalar Multiplication', 'Dot Product & Applications', 'Cross Product & Applications', 'Scalar Triple Product', 'Vector Triple Product', 'Section Formula in 3D', 'Collinearity & Coplanarity', 'Projection of Vectors', 'Area of Triangle & Parallelogram'],
    keyFormulas: ['a⃗·b⃗ = |a||b|cosθ', 'a⃗×b⃗ = |a||b|sinθ n̂', '[a⃗ b⃗ c⃗] = a⃗·(b⃗×c⃗)', 'Area of △ = ½|a⃗×b⃗|', 'Projection of a⃗ on b⃗ = a⃗·b⃗/|b⃗|'],
    commonMistakes: ['Confusing dot and cross product applications', 'Wrong direction of cross product (right-hand rule)', 'Forgetting scalar triple product = 0 means coplanar', 'Sign errors in determinant form of triple product'],
    faqs: [
      { q: 'How are Vectors connected to 3D Geometry?', a: 'Vectors provide the algebraic toolkit for all 3D geometry: line equations (r⃗=a⃗+λb⃗), plane equations (r⃗·n⃗=d), and distance/angle calculations. MindPeak teaches them together for seamless problem-solving.' },
    ],
  },
  {
    slug: 'jee-maths-3d-geometry',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Three-Dimensional Geometry',
    icon: Shapes,
    weightage: '5-7%', difficulty: 'Hard', pyqCount: 55,
    description: 'Lines and planes in 3D space — equations, angles, distances, and intersections. MindPeak\'s visual 3D approach (with physical models) makes spatial geometry tangible and problem-solving systematic.',
    topics: ['Direction Cosines & Ratios', 'Equation of Line in 3D (Cartesian & Vector)', 'Equation of Plane', 'Angle Between Lines, Planes, Line-Plane', 'Distance: Point to Line, Point to Plane', 'Shortest Distance Between Skew Lines', 'Intersection of Line and Plane', 'Family of Planes', 'Image of Point in Plane'],
    keyFormulas: ['Line: r⃗=a⃗+λb⃗', 'Plane: r⃗·n⃗=d', 'Angle between planes: cosθ=|n⃗₁·n⃗₂|/(|n⃗₁||n⃗₂|)', 'Distance point to plane: |ax₀+by₀+cz₀-d|/√(a²+b²+c²)', 'Shortest distance = |[a⃗₂-a⃗₁ b⃗₁ b⃗₂]|/|b⃗₁×b⃗₂|'],
    commonMistakes: ['Confusing direction ratios and direction cosines', 'Wrong formula for shortest distance between skew lines', 'Not checking if lines are parallel before applying skew-line formula', 'Wrong plane equation through 3 points'],
    faqs: [
      { q: 'Is 3D Geometry important for JEE Advanced?', a: 'Very important — 5-7% with beautiful conceptual questions. Shortest distance between skew lines, foot of perpendicular, and image of point in plane are JEE Advanced classics. MindPeak dedicates 8 sessions to 3D geometry mastery.' },
    ],
  },
  {
    slug: 'jee-maths-probability',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Probability',
    icon: BarChart3,
    weightage: '5-7%', difficulty: 'Moderate', pyqCount: 55,
    description: 'Classical, conditional, Bayes\' theorem, and probability distributions — consistent JEE appearances. MindPeak teaches probability through real-world modeling, making abstract concepts concrete and memorable.',
    topics: ['Classical Probability', 'Addition & Multiplication Theorems', 'Conditional Probability P(A|B)', 'Bayes\' Theorem', 'Independent Events', 'Bernoulli Trials & Binomial Distribution', 'Mean & Variance of Binomial Distribution', 'Geometric Probability'],
    keyFormulas: ['P(A∪B) = P(A)+P(B)-P(A∩B)', 'P(A|B) = P(A∩B)/P(B)', 'Bayes: P(Aᵢ|B) = P(B|Aᵢ)P(Aᵢ)/ΣP(B|Aⱼ)P(Aⱼ)', 'Binomial: P(X=r) = C(n,r)pʳqⁿ⁻ʳ', 'Mean = np, Variance = npq'],
    commonMistakes: ['Confusing independent and mutually exclusive events', 'Wrong application of Bayes\' theorem', 'Not using complement (P(at least 1) = 1 - P(none))', 'Wrong identification of Bernoulli trial conditions'],
    faqs: [
      { q: 'How to approach Probability for JEE?', a: 'Master: (1) Sample space counting (use PnC), (2) Conditional probability, (3) Bayes\' theorem, (4) Binomial distribution. 80% of JEE probability questions use these four concepts. MindPeak provides 50+ graded probability problems.' },
    ],
  },
  {
    slug: 'jee-maths-statistics',
    exam: 'JEE', subject: 'Mathematics', chapter: 'Statistics',
    icon: BarChart3,
    weightage: '2-3%', difficulty: 'Easy', pyqCount: 20,
    description: 'Mean, median, mode, variance, and standard deviation — formula-based with easy marks. MindPeak covers statistics in 2 sessions for guaranteed JEE Main marks.',
    topics: ['Mean (AM for Grouped & Ungrouped Data)', 'Median & Mode', 'Variance & Standard Deviation', 'Effect of Change of Origin & Scale', 'Combined Mean & Variance', 'Coefficient of Variation'],
    keyFormulas: ['σ² = Σ(xᵢ-x̄)²/n = (Σxᵢ²/n) - x̄²', 'Combined mean: x̄₁₂ = (n₁x̄₁+n₂x̄₂)/(n₁+n₂)', 'σ(aX+b) = |a|σ(X)', 'CV = (σ/x̄) × 100%'],
    commonMistakes: ['Wrong variance formula (forgetting the -x̄² term)', 'Not applying change of origin correctly', 'Confusing population and sample variance', 'Wrong combined variance formula'],
    faqs: [
      { q: 'Is Statistics asked beyond JEE Main?', a: 'JEE Main asks 1-2 straightforward questions. JEE Advanced rarely asks directly but may include in comprehension. Easy marks with minimal effort. MindPeak includes it in the quick-wins revision module.' },
    ],
  },
];
