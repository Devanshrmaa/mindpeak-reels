import type { ChapterData } from './types';

/* ─── Sets, Relations & Functions ─── */
const setsRelations: ChapterData = {
  name: 'Sets, Relations & Functions',
  slug: 'sets-relations-functions',
  topics: [
    {
      name: 'Sets & Venn Diagrams',
      slug: 'sets-venn',
      easy: [
        { q: 'If A = {1,2,3} and B = {2,3,4}, then A ∪ B is:', o: ['{1,2,3,4}', '{2,3}', '{1,4}', '{1,2,3,4,5}'], a: 0, s: 'A ∪ B = all elements in A or B = {1,2,3,4}.' },
        { q: 'A ∩ B for sets A = {1,2,3} and B = {2,3,4} is:', o: ['{2,3}', '{1,2,3,4}', '{1,4}', '∅'], a: 0, s: 'A ∩ B = common elements = {2,3}.' },
        { q: 'The number of subsets of a set with n elements is:', o: ['2ⁿ', 'n²', 'n!', '2n'], a: 0, s: 'Each element either in or out of subset → 2ⁿ subsets.' },
        { q: 'The empty set is a subset of:', o: ['Every set', 'No set', 'Only itself', 'Only universal set'], a: 0, s: '∅ ⊆ A for all sets A. The empty set is a subset of every set.' },
        { q: 'n(A ∪ B) = n(A) + n(B) - n(A ∩ B) is called:', o: ['Inclusion-exclusion principle', 'De Morgan law', 'Distributive law', 'Complement law'], a: 0, s: 'Inclusion-exclusion avoids double-counting elements in A ∩ B.' },
      ],
      medium: [
        { q: 'De Morgan\'s law states:', o: ['(A ∪ B)\' = A\' ∩ B\' and (A ∩ B)\' = A\' ∪ B\'', '(A∪B)\' = A\'∪B\'', 'A∪B = A∩B', 'A\' = A'], a: 0, s: 'Complement of union = intersection of complements, and vice versa.' },
        { q: 'A relation R on set A is an equivalence relation if it is:', o: ['Reflexive, symmetric, and transitive', 'Only reflexive', 'Only symmetric', 'Reflexive and symmetric only'], a: 0, s: 'Equivalence relation: reflexive (aRa), symmetric (aRb→bRa), transitive (aRb,bRc→aRc).' },
        { q: 'A function f: A → B is one-one (injective) if:', o: ['f(a₁) = f(a₂) ⟹ a₁ = a₂', 'Every element in B has a preimage', 'f is a constant', 'f(a) = a'], a: 0, s: 'Injective: distinct inputs give distinct outputs. No two elements map to the same image.' },
        { q: 'A function is onto (surjective) if:', o: ['Range = codomain (every element in B has a preimage)', 'It is one-one', 'It is constant', 'Domain = codomain'], a: 0, s: 'Surjective: for every b ∈ B, ∃ a ∈ A such that f(a) = b.' },
        { q: 'The number of functions from set A (|A|=m) to set B (|B|=n) is:', o: ['nᵐ', 'mⁿ', 'mn', 'm+n'], a: 0, s: 'Each of m elements has n choices → total functions = nᵐ.' },
      ],
      hard: [
        { q: 'The number of onto functions from A (|A|=n) to B (|B|=2) is:', o: ['2ⁿ - 2', '2ⁿ', 'n²', 'n!'], a: 0, s: 'Total functions = 2ⁿ. Non-onto = 2 (all to first or all to second). Onto = 2ⁿ - 2.' },
        { q: 'A relation that is reflexive, antisymmetric and transitive is called:', o: ['Partial order', 'Equivalence relation', 'Function', 'Empty relation'], a: 0, s: 'Partial order: reflexive, antisymmetric (aRb and bRa → a=b), transitive.' },
        { q: 'The number of equivalence relations on a set with 3 elements is:', o: ['5 (Bell number B₃)', '8', '3', '6'], a: 0, s: 'Bell numbers: B₁=1, B₂=2, B₃=5. Corresponds to partitions of the set.' },
        { q: 'If f: R→R is defined by f(x)=x², then f is:', o: ['Neither one-one nor onto', 'One-one and onto', 'One-one but not onto', 'Onto but not one-one'], a: 0, s: 'f(-1)=f(1)=1 → not one-one. Negative reals have no preimage → not onto. Neither.' },
        { q: 'For invertible function, f must be:', o: ['Bijective (both one-one and onto)', 'Only one-one', 'Only onto', 'Constant'], a: 0, s: 'Inverse exists ⟺ f is bijective. f⁻¹(f(x)) = x and f(f⁻¹(y)) = y.' },
      ],
    },
  ],
};

/* ─── Complex Numbers ─── */
const complexNumbers: ChapterData = {
  name: 'Complex Numbers',
  slug: 'complex-numbers',
  topics: [
    {
      name: 'Algebra of Complex Numbers',
      slug: 'complex-algebra',
      easy: [
        { q: 'The value of i² is:', o: ['-1', '1', 'i', '-i'], a: 0, s: 'i = √(-1), so i² = -1. i³ = -i, i⁴ = 1.' },
        { q: 'The modulus of z = 3 + 4i is:', o: ['5', '7', '1', '25'], a: 0, s: '|z| = √(3² + 4²) = √25 = 5.' },
        { q: 'The conjugate of z = 2 + 3i is:', o: ['2 - 3i', '2 + 3i', '-2 + 3i', '-2 - 3i'], a: 0, s: 'Conjugate z̄ = a - bi when z = a + bi. Reflects over real axis.' },
        { q: 'If z₁ = 1+i and z₂ = 1-i, then z₁ + z₂ =', o: ['2', '2i', '0', '1+i'], a: 0, s: '(1+i) + (1-i) = 2. Imaginary parts cancel.' },
        { q: 'i⁴ⁿ for any positive integer n equals:', o: ['1', '-1', 'i', '-i'], a: 0, s: 'i⁴ = 1, so i⁴ⁿ = (i⁴)ⁿ = 1ⁿ = 1.' },
      ],
      medium: [
        { q: 'The argument of z = -1 + i is:', o: ['3π/4 (135°)', 'π/4', '-π/4', 'π'], a: 0, s: 'z is in 2nd quadrant. θ = π - tan⁻¹(1/1) = π - π/4 = 3π/4.' },
        { q: 'Euler\'s formula states:', o: ['e^(iθ) = cosθ + i sinθ', 'e^(iθ) = cosθ - i sinθ', 'e^(iθ) = sinθ + i cosθ', 'e^(iθ) = 1'], a: 0, s: 'Euler: e^(iθ) = cosθ + i sinθ. Beautiful connection between exponential and trigonometric.' },
        { q: 'The square roots of i are:', o: ['±(1+i)/√2', '±1', '±i', '±(1-i)/√2'], a: 0, s: 'Let z² = i. z = (1+i)/√2 or -(1+i)/√2. Verify: ((1+i)/√2)² = (1+2i-1)/2 = i ✓.' },
        { q: 'If |z| = 1, then z lies on:', o: ['Unit circle', 'Real axis', 'Imaginary axis', 'A line'], a: 0, s: '|z| = 1 means x² + y² = 1 → unit circle centred at origin.' },
        { q: 'z · z̄ equals:', o: ['|z|²', 'z²', '2Re(z)', '2Im(z)'], a: 0, s: 'z·z̄ = (a+bi)(a-bi) = a² + b² = |z|².' },
      ],
      hard: [
        { q: 'The cube roots of unity are:', o: ['1, ω, ω² where ω = (-1+i√3)/2', '1, -1, i', '1, i, -i', '1, 2, 3'], a: 0, s: 'z³ = 1 → z = 1, ω = e^(2πi/3), ω² = e^(4πi/3). ω³ = 1 and 1+ω+ω² = 0.' },
        { q: 'De Moivre\'s theorem states:', o: ['(cosθ + i sinθ)ⁿ = cos(nθ) + i sin(nθ)', '(cosθ + sinθ)ⁿ = cosnθ', 'sinⁿθ = sin(nθ)', 'cosⁿθ = cos(nθ)'], a: 0, s: 'De Moivre: [e^(iθ)]ⁿ = e^(inθ) → (cosθ + isinθ)ⁿ = cos(nθ) + isin(nθ).' },
        { q: 'If z₁, z₂, z₃ form an equilateral triangle inscribed in |z|=r, then z₁²+z₂²+z₃² equals:', o: ['z₁z₂ + z₂z₃ + z₃z₁', '0', '3r²', 'z₁+z₂+z₃'], a: 0, s: 'For equilateral triangle on circle: z₁+z₂+z₃ = 0 (centroid at origin). Then z₁²+z₂²+z₃² = -2(z₁z₂+z₂z₃+z₃z₁)... Actually z₁²+z₂²+z₃² = (z₁+z₂+z₃)²-2Σz₁z₂ = -2Σz₁z₂, and also z₁²+z₂²+z₃² = z₁z₂+z₂z₃+z₃z₁ for equilateral.' },
        { q: 'The locus of z satisfying |z-1| = |z+1| is:', o: ['Imaginary axis (x = 0)', 'Real axis', 'Circle', 'Hyperbola'], a: 0, s: '|z-1| = |z+1| means equidistant from (1,0) and (-1,0) → perpendicular bisector = y-axis.' },
        { q: 'The nth roots of a complex number z₀ = re^(iθ) are:', o: ['r^(1/n) × e^(i(θ+2kπ)/n) for k=0,1,...,n-1', 'z₀/n', 'nz₀', 'z₀ⁿ'], a: 0, s: 'n equally spaced points on circle of radius r^(1/n). Angles: (θ+2kπ)/n.' },
      ],
    },
  ],
};

/* ─── Quadratic Equations ─── */
const quadratics: ChapterData = {
  name: 'Quadratic Equations',
  slug: 'quadratic-equations',
  topics: [
    {
      name: 'Roots & Nature of Quadratics',
      slug: 'quadratic-roots',
      easy: [
        { q: 'The roots of ax² + bx + c = 0 are given by:', o: ['x = (-b ± √(b²-4ac))/(2a)', 'x = -b/a', 'x = c/a', 'x = (-b ± √b)/(2a)'], a: 0, s: 'Quadratic formula: x = (-b ± √D)/(2a) where D = b² - 4ac.' },
        { q: 'If discriminant D > 0, the roots are:', o: ['Real and distinct', 'Real and equal', 'Complex', 'No roots'], a: 0, s: 'D > 0: two distinct real roots. D = 0: equal roots. D < 0: complex roots.' },
        { q: 'Sum of roots of ax² + bx + c = 0 is:', o: ['-b/a', 'b/a', 'c/a', '-c/a'], a: 0, s: 'By Vieta\'s: α + β = -b/a. Product αβ = c/a.' },
        { q: 'Product of roots of ax² + bx + c = 0 is:', o: ['c/a', '-c/a', 'b/a', '-b/a'], a: 0, s: 'Vieta\'s formulas: αβ = c/a.' },
        { q: 'If both roots of a quadratic are positive, then:', o: ['Sum > 0 and product > 0', 'Sum < 0', 'Product < 0', 'D < 0'], a: 0, s: 'Both positive: α+β > 0 (sum) and αβ > 0 (product).' },
      ],
      medium: [
        { q: 'The quadratic x² - 5x + 6 = 0 has roots:', o: ['2 and 3', '1 and 6', '-2 and -3', '5 and 1'], a: 0, s: 'x² - 5x + 6 = (x-2)(x-3) = 0. Roots: 2 and 3.' },
        { q: 'For the equation x² + px + q = 0 to have real roots:', o: ['p² - 4q ≥ 0', 'p² + 4q ≥ 0', 'p ≥ 0', 'q ≤ 0'], a: 0, s: 'D = p² - 4(1)(q) = p² - 4q ≥ 0 for real roots.' },
        { q: 'If α and β are roots, the equation with roots 1/α and 1/β is:', o: ['cx² + bx + a = 0', 'ax² + bx + c = 0', 'ax² - bx + c = 0', 'bx² + ax + c = 0'], a: 0, s: 'Replace x by 1/x in ax²+bx+c=0: a/x²+b/x+c=0 → cx²+bx+a=0.' },
        { q: 'The condition for one root to be zero is:', o: ['c = 0', 'b = 0', 'a = 0', 'D = 0'], a: 0, s: 'Product of roots = c/a. If one root = 0, product = 0 → c = 0.' },
        { q: 'If α and β are roots of x²-3x+2=0, then α²+β² =', o: ['5', '9', '4', '3'], a: 0, s: 'α+β=3, αβ=2. α²+β² = (α+β)² - 2αβ = 9-4 = 5.' },
      ],
      hard: [
        { q: 'For the quadratic f(x) = ax²+bx+c with a>0, f(x)>0 for all x iff:', o: ['D < 0 (no real roots)', 'D > 0', 'D = 0', 'a < 0'], a: 0, s: 'a > 0 and D < 0: parabola opens up and never touches x-axis → always positive.' },
        { q: 'If one root of ax²+bx+c=0 is square of the other, then:', o: ['b³ + a²c + ac² = 3abc', 'b² = 4ac', 'a = c', 'b = 0'], a: 0, s: 'Let roots be α, α². α+α² = -b/a, α³ = c/a. Eliminating α gives b³+a²c+ac²=3abc.' },
        { q: 'Common root condition: equations a₁x²+b₁x+c₁=0 and a₂x²+b₂x+c₂=0 have a common root when:', o: ['(a₁c₂-a₂c₁)² = (a₁b₂-a₂b₁)(b₁c₂-b₂c₁)', '(a₁/a₂) = (b₁/b₂)', 'D₁ = D₂', 'a₁ = a₂'], a: 0, s: 'Condition for exactly one common root. If (a₁/a₂) = (b₁/b₂) = (c₁/c₂), both roots common.' },
        { q: 'The number of real solutions of |x|² - 5|x| + 6 = 0 is:', o: ['4', '2', '0', '1'], a: 0, s: 'Let t = |x| ≥ 0. t² - 5t + 6 = 0 → t = 2,3. Each gives x = ±t → 4 solutions: ±2, ±3.' },
        { q: 'If roots of x²-2px+q=0 differ by 2, then:', o: ['p² = q + 1', 'p² = q', 'p = q+1', 'p² = 4q'], a: 0, s: '(α-β)² = (α+β)² - 4αβ = 4p² - 4q = 4. So p² - q = 1 → p² = q + 1.' },
      ],
    },
  ],
};

/* ─── Permutations & Combinations ─── */
const permComb: ChapterData = {
  name: 'Permutations & Combinations',
  slug: 'permutations-combinations',
  topics: [
    {
      name: 'Counting Principles',
      slug: 'counting-principles',
      easy: [
        { q: 'n! (n factorial) is defined as:', o: ['n × (n-1) × ... × 2 × 1', 'n × n', 'n + (n-1) + ... + 1', '2ⁿ'], a: 0, s: 'n! = product of all positive integers up to n. 0! = 1 by convention.' },
        { q: 'ⁿPᵣ (permutations) equals:', o: ['n!/(n-r)!', 'n!/r!', 'n!/(r!(n-r)!)', 'nʳ'], a: 0, s: 'ⁿPᵣ = n!/(n-r)! = arrangements of r items from n.' },
        { q: 'ⁿCᵣ (combinations) equals:', o: ['n!/(r!(n-r)!)', 'n!/(n-r)!', 'nʳ', 'rⁿ'], a: 0, s: 'ⁿCᵣ = n!/(r!(n-r)!). Order doesn\'t matter in combinations.' },
        { q: 'The value of ⁵C₂ is:', o: ['10', '20', '5', '60'], a: 0, s: '⁵C₂ = 5!/(2!3!) = 120/(2×6) = 10.' },
        { q: 'ⁿC₀ + ⁿC₁ + ... + ⁿCₙ equals:', o: ['2ⁿ', 'n!', 'nⁿ', 'n²'], a: 0, s: 'Sum of binomial coefficients = 2ⁿ (set x=1 in (1+x)ⁿ).' },
      ],
      medium: [
        { q: 'Number of ways to arrange n objects with p identical of one kind, q of another is:', o: ['n!/(p!q!)', 'n!', 'ⁿCₚ', 'p!q!'], a: 0, s: 'Multinomial: n!/(p!q!...) to avoid counting identical arrangements.' },
        { q: 'The number of diagonals of an n-sided polygon is:', o: ['n(n-3)/2', 'n(n-1)/2', 'n²', 'ⁿC₂'], a: 0, s: 'Total lines joining vertices = ⁿC₂. Subtract n sides: ⁿC₂ - n = n(n-1)/2 - n = n(n-3)/2.' },
        { q: 'In how many ways can 8 people be seated around a circular table?', o: ['7! = 5040', '8! = 40320', '8', '7'], a: 0, s: 'Circular permutation: (n-1)! = 7! = 5040. Fix one person, arrange rest.' },
        { q: 'The number of words (with or without meaning) from LETTER using all letters is:', o: ['360', '720', '120', '180'], a: 0, s: 'LETTER: 6 letters with T×2, E×2. Ways = 6!/(2!2!) = 720/4 = 180. Wait: L,E,T,T,E,R → 6!/(2!×2!) = 180.' },
        { q: 'ⁿCᵣ = ⁿCₙ₋ᵣ is the ___ property:', o: ['Symmetry property', 'Pascal\'s rule', 'Binomial theorem', 'Addition rule'], a: 0, s: 'Choosing r items from n is same as choosing which n-r to leave out.' },
      ],
      hard: [
        { q: 'The number of derangements (permutations with no fixed point) of n objects is:', o: ['n! × Σ(-1)ᵏ/k! for k=0 to n', 'n!', '(n-1)!', 'n!/2'], a: 0, s: 'Derangement Dₙ = n!(1 - 1/1! + 1/2! - 1/3! + ... + (-1)ⁿ/n!). By inclusion-exclusion.' },
        { q: 'The number of ways to distribute n identical balls into r distinct boxes is:', o: ['ⁿ⁺ʳ⁻¹Cᵣ₋₁ (stars and bars)', 'nʳ', 'rⁿ', 'ⁿCᵣ'], a: 0, s: 'Stars and bars: C(n+r-1, r-1) = C(n+r-1, n).' },
        { q: 'The number of non-negative integer solutions of x+y+z = 10 is:', o: ['66 (¹²C₂)', '100', '10', '30'], a: 0, s: 'Stars and bars: C(10+3-1, 3-1) = C(12,2) = 66.' },
        { q: 'If ⁿCᵣ = ⁿCᵣ₊₂, then r equals:', o: ['(n-2)/2', 'n/2', 'n-2', 'n-1'], a: 0, s: 'ⁿCᵣ = ⁿCₛ ⟹ r+s = n. So r + (r+2) = n → r = (n-2)/2.' },
        { q: 'The coefficient of x⁵ in (1+x)¹⁰ is:', o: ['252', '210', '120', '10'], a: 0, s: '¹⁰C₅ = 10!/(5!5!) = 252.' },
      ],
    },
  ],
};

/* ─── Binomial Theorem ─── */
const binomial: ChapterData = {
  name: 'Binomial Theorem',
  slug: 'binomial-theorem',
  topics: [
    {
      name: 'Binomial Expansion & Properties',
      slug: 'binomial-expansion',
      easy: [
        { q: 'The (r+1)th term in (a+b)ⁿ is:', o: ['ⁿCᵣ aⁿ⁻ʳ bʳ', 'ⁿCᵣ aʳ bⁿ⁻ʳ', 'aⁿbʳ', 'ⁿPᵣ aⁿ⁻ʳ bʳ'], a: 0, s: 'General term T(r+1) = ⁿCᵣ aⁿ⁻ʳ bʳ, r = 0,1,...,n.' },
        { q: 'The number of terms in (a+b)ⁿ is:', o: ['n+1', 'n', '2n', 'n²'], a: 0, s: 'Expansion has terms for r = 0 to n → n+1 terms.' },
        { q: '(1+1)ⁿ = 2ⁿ gives:', o: ['Sum of all binomial coefficients = 2ⁿ', 'Product of coefficients', 'Alternating sum', 'Zero'], a: 0, s: 'Put x=1 in (1+x)ⁿ: Σ ⁿCᵣ = 2ⁿ.' },
        { q: 'The middle term of (a+b)⁶ is:', o: ['4th term (T₄)', '3rd term', '5th term', '6th term'], a: 0, s: 'n=6 (even): middle term is T(n/2+1) = T₄. ⁶C₃ a³b³ = 20a³b³.' },
        { q: '(1+x)² = 1 + 2x + x² is an example of binomial expansion with n =', o: ['2', '1', '3', '4'], a: 0, s: '(1+x)² = ²C₀ + ²C₁x + ²C₂x² = 1 + 2x + x².' },
      ],
      medium: [
        { q: 'The coefficient of x³ in (1+x)⁸ is:', o: ['56', '28', '70', '8'], a: 0, s: '⁸C₃ = 8!/(3!5!) = 56.' },
        { q: 'In (x+1/x)¹⁰, the term independent of x is:', o: ['¹⁰C₅ = 252', '¹⁰C₃', '¹⁰C₇', '1'], a: 0, s: 'T(r+1) = ¹⁰Cᵣ x¹⁰⁻ʳ (1/x)ʳ = ¹⁰Cᵣ x¹⁰⁻²ʳ. For x⁰: 10-2r=0 → r=5. Coefficient = ¹⁰C₅ = 252.' },
        { q: 'ⁿC₀ - ⁿC₁ + ⁿC₂ - ... + (-1)ⁿ ⁿCₙ equals:', o: ['0', '2ⁿ', '1', 'n'], a: 0, s: 'Put x=-1 in (1+x)ⁿ: (1-1)ⁿ = 0. Alternating sum of binomial coefficients = 0.' },
        { q: 'The greatest binomial coefficient in (1+x)²ⁿ is:', o: ['²ⁿCₙ', '²ⁿC₁', '²ⁿC₂ₙ', '1'], a: 0, s: 'Middle term has the largest coefficient. ²ⁿCₙ is the maximum.' },
        { q: 'Pascal\'s triangle rule: ⁿCᵣ =', o: ['ⁿ⁻¹Cᵣ₋₁ + ⁿ⁻¹Cᵣ', 'ⁿ⁻¹Cᵣ₋₁ - ⁿ⁻¹Cᵣ', '2 × ⁿ⁻¹Cᵣ', 'ⁿ⁻¹Cᵣ₋₁ × ⁿ⁻¹Cᵣ'], a: 0, s: 'Pascal\'s rule: each entry = sum of two entries above it in Pascal\'s triangle.' },
      ],
      hard: [
        { q: 'The sum ⁿC₁ + 2·ⁿC₂ + 3·ⁿC₃ + ... + n·ⁿCₙ equals:', o: ['n·2ⁿ⁻¹', '2ⁿ', 'n!', 'n²ⁿ'], a: 0, s: 'Σr·ⁿCᵣ = n·Σⁿ⁻¹Cᵣ₋₁ = n·2ⁿ⁻¹. Using r·ⁿCᵣ = n·ⁿ⁻¹Cᵣ₋₁.' },
        { q: 'The remainder when 7¹⁰⁰ is divided by 4 is:', o: ['1', '3', '0', '2'], a: 0, s: '7 ≡ -1 (mod 4). 7¹⁰⁰ = (-1)¹⁰⁰ = 1 (mod 4). Remainder = 1.' },
        { q: '(1+x)ⁿ for negative/fractional n is an ___ series:', o: ['Infinite series (valid for |x| < 1)', 'Finite polynomial', 'Constant', 'Empty'], a: 0, s: 'Generalised binomial theorem: infinite series valid for |x| < 1 when n is not a positive integer.' },
        { q: 'The greatest term in (1+x)ⁿ for x > 0 occurs when r satisfies:', o: ['(n+1)x/(1+x) ≥ r ≥ (n+1)x/(1+x) - 1', 'r = n', 'r = 0', 'r = n/2 always'], a: 0, s: 'T(r+1)/Tᵣ = (n-r+1)x/r. Greatest term where ratio crosses 1.' },
        { q: 'Multinomial theorem: (x₁+x₂+...+xₖ)ⁿ has ___ terms:', o: ['ⁿ⁺ᵏ⁻¹Cₖ₋₁', 'nᵏ', 'kⁿ', 'n!'], a: 0, s: 'Number of terms = C(n+k-1, k-1) by stars-and-bars on exponents summing to n.' },
      ],
    },
  ],
};

/* ─── Matrices & Determinants ─── */
const matrices: ChapterData = {
  name: 'Matrices & Determinants',
  slug: 'matrices-determinants',
  topics: [
    {
      name: 'Matrix Operations & Determinants',
      slug: 'matrix-operations',
      easy: [
        { q: 'A matrix of order m×n has:', o: ['m rows and n columns', 'n rows and m columns', 'm×n rows', 'm+n elements'], a: 0, s: 'm×n: m rows, n columns. Total elements = mn.' },
        { q: 'The determinant of a 2×2 matrix [[a,b],[c,d]] is:', o: ['ad - bc', 'ad + bc', 'ab - cd', 'ac - bd'], a: 0, s: 'det = ad - bc for 2×2 matrix.' },
        { q: 'An identity matrix has:', o: ['1s on diagonal, 0s elsewhere', 'All 1s', 'All 0s', '0s on diagonal'], a: 0, s: 'I = diag(1,1,...,1). AI = IA = A for any conformable A.' },
        { q: 'If A is m×n and B is n×p, then AB is:', o: ['m×p', 'n×n', 'm×n', 'p×m'], a: 0, s: 'Matrix multiplication: (m×n)(n×p) = m×p. Number of columns of A must equal rows of B.' },
        { q: 'A square matrix A is singular if:', o: ['det(A) = 0', 'det(A) ≠ 0', 'A = I', 'A is diagonal'], a: 0, s: 'Singular: det = 0, no inverse exists. Non-singular: det ≠ 0, inverse exists.' },
      ],
      medium: [
        { q: '(AB)ᵀ equals:', o: ['BᵀAᵀ', 'AᵀBᵀ', 'AB', '(AB)⁻¹'], a: 0, s: 'Transpose of product: (AB)ᵀ = BᵀAᵀ. Order reverses.' },
        { q: 'Cramer\'s rule solves Ax = b using:', o: ['Determinants: xᵢ = det(Aᵢ)/det(A)', 'Eigenvalues', 'Row reduction only', 'Guessing'], a: 0, s: 'Cramer: xᵢ = |Aᵢ|/|A| where Aᵢ has ith column replaced by b.' },
        { q: 'det(kA) for n×n matrix A equals:', o: ['kⁿ det(A)', 'k det(A)', 'det(A)', 'k² det(A)'], a: 0, s: 'Scaling each row by k → kⁿ factor. det(kA) = kⁿ det(A).' },
        { q: 'A matrix A is orthogonal if:', o: ['AᵀA = AAᵀ = I', 'A = Aᵀ', 'A = -Aᵀ', 'A² = I'], a: 0, s: 'Orthogonal: A⁻¹ = Aᵀ. Preserves lengths and angles. det(A) = ±1.' },
        { q: 'If A is a skew-symmetric matrix of odd order, then det(A) =', o: ['0', '1', '-1', 'Undefined'], a: 0, s: 'Skew-symmetric: Aᵀ = -A. det(A) = det(Aᵀ) = det(-A) = (-1)ⁿdet(A). If n odd: det(A) = -det(A) → det(A) = 0.' },
      ],
      hard: [
        { q: 'Cayley-Hamilton theorem states that every square matrix satisfies:', o: ['Its own characteristic equation', 'Any polynomial', 'det(A) = 0', 'A = A⁻¹'], a: 0, s: 'If char. eq. is λ² - tr(A)λ + det(A) = 0, then A² - tr(A)·A + det(A)·I = 0.' },
        { q: 'A⁻¹ = adj(A)/det(A) where adj(A) is the:', o: ['Transpose of cofactor matrix', 'Cofactor matrix', 'Minor matrix', 'Determinant matrix'], a: 0, s: 'Adjugate (adjoint) = transpose of matrix of cofactors. A·adj(A) = det(A)·I.' },
        { q: 'Rank of a matrix is:', o: ['Maximum number of linearly independent rows (or columns)', 'Number of rows', 'Determinant', 'Trace'], a: 0, s: 'Rank = dimension of column space = dimension of row space. Determines system of equations solution.' },
        { q: 'If A is idempotent (A² = A), then eigenvalues of A are:', o: ['0 or 1', '1 only', '0 only', 'Any real number'], a: 0, s: 'A²x = Ax → λ²x = λx → λ(λ-1) = 0 → λ = 0 or 1.' },
        { q: 'For n×n matrix: det(adj A) =', o: ['[det(A)]ⁿ⁻¹', 'det(A)', 'n·det(A)', '[det(A)]²'], a: 0, s: 'A·adj(A) = det(A)·I. Taking det: det(A)·det(adj A) = [det(A)]ⁿ. So det(adj A) = [det(A)]ⁿ⁻¹.' },
      ],
    },
  ],
};

/* ─── Sequences & Series ─── */
const sequences: ChapterData = {
  name: 'Sequences & Series',
  slug: 'sequences-series',
  topics: [
    {
      name: 'AP, GP & Special Series',
      slug: 'ap-gp-series',
      easy: [
        { q: 'The nth term of an AP with first term a and common difference d is:', o: ['a + (n-1)d', 'a × rⁿ⁻¹', 'a + nd', 'a × dⁿ'], a: 0, s: 'AP: aₙ = a + (n-1)d. Linear sequence.' },
        { q: 'Sum of first n terms of an AP is:', o: ['n/2 × [2a + (n-1)d]', 'n × a', 'a × n²', 'n(n+1)/2 always'], a: 0, s: 'Sₙ = n/2 × [2a + (n-1)d] = n/2 × (first + last).' },
        { q: 'The nth term of a GP with first term a and common ratio r is:', o: ['arⁿ⁻¹', 'a + (n-1)r', 'a × n × r', 'a/rⁿ'], a: 0, s: 'GP: aₙ = arⁿ⁻¹. Each term is r times the previous.' },
        { q: 'Sum to infinity of a GP with |r| < 1 is:', o: ['a/(1-r)', 'a/(1+r)', 'ar/(1-r)', '∞'], a: 0, s: 'S∞ = a/(1-r) when |r| < 1. Converges to finite sum.' },
        { q: '1 + 2 + 3 + ... + n = ', o: ['n(n+1)/2', 'n²', 'n(n-1)/2', '2n'], a: 0, s: 'Sum of first n natural numbers = n(n+1)/2.' },
      ],
      medium: [
        { q: 'If a, b, c are in AP, then:', o: ['2b = a + c', 'b² = ac', 'a + b = c', 'ab = c'], a: 0, s: 'AP condition: middle term = arithmetic mean. 2b = a + c.' },
        { q: 'If a, b, c are in GP, then:', o: ['b² = ac', '2b = a+c', 'a+c = 2b', 'b = a+c'], a: 0, s: 'GP condition: b/a = c/b → b² = ac. Geometric mean.' },
        { q: '1² + 2² + 3² + ... + n² = ', o: ['n(n+1)(2n+1)/6', 'n²(n+1)/4', 'n(n+1)/2', 'n³/3'], a: 0, s: 'Sum of squares formula: Σk² = n(n+1)(2n+1)/6.' },
        { q: 'Harmonic mean of a and b is:', o: ['2ab/(a+b)', '(a+b)/2', '√(ab)', 'a+b'], a: 0, s: 'HM = 2ab/(a+b). AM ≥ GM ≥ HM for positive numbers.' },
        { q: 'Sum of n terms of GP with first term a and ratio r ≠ 1 is:', o: ['a(rⁿ-1)/(r-1)', 'arⁿ', 'na', 'a(1-rⁿ)'], a: 0, s: 'Sₙ = a(rⁿ-1)/(r-1) = a(1-rⁿ)/(1-r). Both forms correct.' },
      ],
      hard: [
        { q: 'AM-GM inequality states:', o: ['(a+b)/2 ≥ √(ab) for a,b > 0, equality iff a=b', '(a+b)/2 ≤ √(ab)', 'AM = GM always', 'GM > AM'], a: 0, s: 'AM ≥ GM with equality iff all numbers are equal. Fundamental inequality.' },
        { q: '1³ + 2³ + 3³ + ... + n³ = ', o: ['[n(n+1)/2]²', 'n²(n+1)/4', 'n(n+1)(2n+1)/6', 'n⁴/4'], a: 0, s: 'Sum of cubes = (sum of natural numbers)². Σk³ = [n(n+1)/2]².' },
        { q: 'The sum Σ(1/(k(k+1))) for k=1 to n equals:', o: ['n/(n+1)', '1/(n+1)', 'n', 'ln(n)'], a: 0, s: 'Telescoping: 1/(k(k+1)) = 1/k - 1/(k+1). Sum = 1 - 1/(n+1) = n/(n+1).' },
        { q: 'An arithmetico-geometric series has general term:', o: ['(a + (n-1)d)·rⁿ⁻¹', 'a·rⁿ + d', '(a+d)ⁿ', 'a + drⁿ'], a: 0, s: 'AGP: product of AP and GP terms. Sum found by multiplying by r and subtracting.' },
        { q: 'If Sₙ = 3n² + 5n, the common difference of the AP is:', o: ['6', '3', '5', '8'], a: 0, s: 'aₙ = Sₙ - Sₙ₋₁ = 3n²+5n - 3(n-1)²-5(n-1) = 6n+2. d = a₂-a₁ = (14-8) = 6. Or d = coefficient of n² × 2 = 6.' },
      ],
    },
  ],
};

export const algebraChapters: ChapterData[] = [
  setsRelations,
  complexNumbers,
  quadratics,
  permComb,
  binomial,
  matrices,
  sequences,
];
