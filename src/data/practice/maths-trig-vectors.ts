import type { ChapterData } from './types';

/* ─── Trigonometry ─── */
const trigonometry: ChapterData = {
  name: 'Trigonometry',
  slug: 'trigonometry',
  topics: [
    {
      name: 'Ratios, Identities & Equations',
      slug: 'trig-identities-equations',
      easy: [
        { q: 'sin²θ + cos²θ equals:', o: ['1', '0', 'sin2θ', '2'], a: 0, s: 'Pythagorean identity: sin²θ + cos²θ = 1 for all θ.' },
        { q: 'sin(90° - θ) equals:', o: ['cosθ', 'sinθ', '-cosθ', 'tanθ'], a: 0, s: 'Complementary angle: sin(90°-θ) = cosθ.' },
        { q: 'The value of sin 30° is:', o: ['1/2', '√3/2', '1', '0'], a: 0, s: 'sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3.' },
        { q: 'tan θ = sin θ / cos θ. If sin θ = 3/5 and θ is in first quadrant, cos θ =', o: ['4/5', '3/5', '5/3', '3/4'], a: 0, s: 'cos²θ = 1 - sin²θ = 1 - 9/25 = 16/25. cosθ = 4/5 (positive in Q1).' },
        { q: 'The period of sin x is:', o: ['2π', 'π', 'π/2', '4π'], a: 0, s: 'sin(x+2π) = sinx. Period = 2π.' },
      ],
      medium: [
        { q: 'sin(A+B) =', o: ['sinA cosB + cosA sinB', 'sinA sinB + cosA cosB', 'sinA cosB - cosA sinB', 'sinA + sinB'], a: 0, s: 'Compound angle formula for sine addition.' },
        { q: 'cos 2θ can be written as:', o: ['cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ (all correct)', 'sin²θ + cos²θ', '2sinθcosθ', 'cos²θ + sin²θ'], a: 0, s: 'Three equivalent forms of cos2θ. Choose based on what simplifies best.' },
        { q: '2 sinA cosA =', o: ['sin 2A', 'cos 2A', 'sin²A', '2 sin A'], a: 0, s: 'Double angle: sin2A = 2sinAcosA.' },
        { q: 'General solution of sin x = 0 is:', o: ['x = nπ, n ∈ Z', 'x = 2nπ', 'x = (2n+1)π/2', 'x = nπ/2'], a: 0, s: 'sinx = 0 at x = 0, ±π, ±2π, ... → x = nπ.' },
        { q: 'The range of sin⁻¹(x) is:', o: ['[-π/2, π/2]', '[0, π]', '(-π, π)', '[0, 2π]'], a: 0, s: 'Principal value branch of sin⁻¹: domain [-1,1], range [-π/2, π/2].' },
      ],
      hard: [
        { q: 'sin⁻¹x + cos⁻¹x = (for |x| ≤ 1):', o: ['π/2', 'π', '0', '1'], a: 0, s: 'Complementary inverse trig identity: sin⁻¹x + cos⁻¹x = π/2.' },
        { q: 'In triangle ABC, a/sinA = b/sinB = c/sinC = 2R. This is:', o: ['Sine rule (R = circumradius)', 'Cosine rule', 'Projection rule', 'Area formula'], a: 0, s: 'Sine rule relates sides and angles via circumradius R.' },
        { q: 'cos A = (b²+c²-a²)/(2bc) is:', o: ['Cosine rule', 'Sine rule', 'Projection rule', 'Stewart\'s theorem'], a: 0, s: 'Cosine rule: a² = b² + c² - 2bc cosA → cosA = (b²+c²-a²)/(2bc).' },
        { q: 'tan⁻¹(1) + tan⁻¹(2) + tan⁻¹(3) =', o: ['π', 'π/2', '3π/4', '0'], a: 0, s: 'tan⁻¹1=π/4. tan⁻¹2+tan⁻¹3: use formula, since 2×3>1, sum = π+tan⁻¹((2+3)/(1-6))=π-π/4=3π/4. Total=π/4+3π/4=π.' },
        { q: 'The maximum value of a sinθ + b cosθ is:', o: ['√(a²+b²)', 'a+b', '|a|+|b|', 'a²+b²'], a: 0, s: 'a sinθ + b cosθ = √(a²+b²) sin(θ+φ). Max = √(a²+b²).' },
      ],
    },
    {
      name: 'Properties of Triangles',
      slug: 'properties-triangles',
      easy: [
        { q: 'Sum of angles of a triangle is:', o: ['180° (π)', '360°', '90°', '270°'], a: 0, s: 'A + B + C = 180° = π radians.' },
        { q: 'Area of triangle = ½ × base × height. Using sides a, b and included angle C:', o: ['½ab sinC', '½ab cosC', 'ab sinC', '½abc'], a: 0, s: 'Area = ½ × a × b × sinC. Uses two sides and included angle.' },
        { q: 'The circumradius R of a triangle with side a opposite angle A is:', o: ['a/(2sinA)', 'a sinA/2', '2a/sinA', 'a sinA'], a: 0, s: 'From sine rule: a/sinA = 2R → R = a/(2sinA).' },
        { q: 'For an equilateral triangle with side a, each angle is:', o: ['60°', '90°', '45°', '120°'], a: 0, s: 'All angles equal: 180°/3 = 60°.' },
        { q: 'In a right triangle, c² = a² + b² where c is:', o: ['Hypotenuse', 'Shortest side', 'Median', 'Altitude'], a: 0, s: 'Pythagoras theorem: hypotenuse² = sum of squares of other two sides.' },
      ],
      medium: [
        { q: 'Hero\'s formula: Area = √(s(s-a)(s-b)(s-c)) where s =', o: ['(a+b+c)/2 (semi-perimeter)', 'a+b+c', '(a+b+c)/3', 'abc/2'], a: 0, s: 's = semi-perimeter = (a+b+c)/2. Works when all three sides are known.' },
        { q: 'The inradius r of a triangle is:', o: ['Area/s (where s = semi-perimeter)', 's/Area', 'a/(2sinA)', 'Area × s'], a: 0, s: 'Area = r × s → r = Area/s. Incircle touches all three sides.' },
        { q: 'In triangle ABC, if A = 90°, then a² =', o: ['b² + c²', 'b² - c²', '2bc', 'bc'], a: 0, s: 'Right triangle with right angle at A: a (hypotenuse) → a² = b² + c².' },
        { q: 'The median from vertex A to side BC has length:', o: ['½√(2b²+2c²-a²)', '(b+c)/2', 'a/2', '√(b²+c²)'], a: 0, s: 'Apollonius theorem/median length formula: mₐ = ½√(2b²+2c²-a²).' },
        { q: 'tan(A/2) = r/(s-a) where r is inradius. This is called:', o: ['Half-angle formula', 'Cosine rule', 'Stewart\'s theorem', 'Projection formula'], a: 0, s: 'Half-angle formulas relate angles to sides via r, s, and s-a, s-b, s-c.' },
      ],
      hard: [
        { q: 'The nine-point circle radius equals:', o: ['R/2 (half the circumradius)', 'R', '2R', 'r'], a: 0, s: 'Nine-point circle passes through midpoints of sides, feet of altitudes, midpoints of AH, BH, CH. Radius = R/2.' },
        { q: 'Euler\'s formula for distance between circumcentre O and incentre I: OI² =', o: ['R² - 2Rr', 'R² + r²', 'R² - r²', '2Rr'], a: 0, s: 'Euler\'s formula: OI² = R(R-2r). So R ≥ 2r (Euler\'s inequality).' },
        { q: 'In a triangle, r₁ (exradius opposite to A) equals:', o: ['Area/(s-a)', 'Area/s', 'Area/(s-b)', 'a/(2sinA)'], a: 0, s: 'Exradius: r₁ = Δ/(s-a), r₂ = Δ/(s-b), r₃ = Δ/(s-c).' },
        { q: 'The Stewart\'s theorem states for cevian AD of length d to side BC = a, with BD=m, DC=n:', o: ['b²m + c²n - a·m·n = a·d²', 'a²+b²=c²', 'd = √(bc)', 'mn = a²'], a: 0, s: 'Stewart\'s: b²m + c²n - amn = ad². Generalises median/altitude formulas.' },
        { q: 'For an isosceles triangle with equal sides b=c, the circumradius R =', o: ['a/(2sinA)', 'b/(2sinB)', 'c/(2sinC)', 'All equal (sine rule)'], a: 3, s: 'By sine rule a/(2sinA)=b/(2sinB)=c/(2sinC)=2R. All give same R.' },
      ],
    },
  ],
};

/* ─── Vectors ─── */
const vectors: ChapterData = {
  name: 'Vectors',
  slug: 'vectors',
  topics: [
    {
      name: 'Vector Algebra & Products',
      slug: 'vector-products',
      easy: [
        { q: 'The magnitude of vector ā = 3î + 4ĵ is:', o: ['5', '7', '1', '25'], a: 0, s: '|ā| = √(3²+4²) = √25 = 5.' },
        { q: 'The unit vector in the direction of ā is:', o: ['ā/|ā|', 'ā × |ā|', '|ā|/ā', 'ā²'], a: 0, s: 'Unit vector â = ā/|ā|. Has magnitude 1.' },
        { q: 'If ā = 2î + 3ĵ and b̄ = î - ĵ, then ā + b̄ =', o: ['3î + 2ĵ', 'î + 4ĵ', '3î + 4ĵ', '2î - ĵ'], a: 0, s: 'Add components: (2+1)î + (3-1)ĵ = 3î + 2ĵ.' },
        { q: 'The zero vector has:', o: ['Magnitude 0 and arbitrary direction', 'Magnitude 1', 'Only î direction', 'No properties'], a: 0, s: 'Zero vector 0̄: magnitude 0. Direction is undefined/arbitrary.' },
        { q: 'Position vector of point P(x,y,z) is:', o: ['xî + yĵ + zk̂', 'x+y+z', '(x,y,z)', 'xyzk̂'], a: 0, s: 'Position vector: OP̄ = xî + yĵ + zk̂ from origin O to point P.' },
      ],
      medium: [
        { q: 'ā · b̄ (dot product) equals:', o: ['|ā||b̄|cosθ', '|ā||b̄|sinθ', 'ā × b̄', '|ā+b̄|'], a: 0, s: 'Scalar (dot) product: ā·b̄ = |ā||b̄|cosθ. Result is a scalar.' },
        { q: 'ā × b̄ (cross product) has magnitude:', o: ['|ā||b̄|sinθ', '|ā||b̄|cosθ', '|ā||b̄|', '|ā+b̄|'], a: 0, s: '|ā×b̄| = |ā||b̄|sinθ. Result is a vector perpendicular to both.' },
        { q: 'Two vectors are perpendicular if:', o: ['ā · b̄ = 0', 'ā × b̄ = 0', 'ā = b̄', '|ā| = |b̄|'], a: 0, s: 'ā·b̄ = |ā||b̄|cos90° = 0. Zero dot product means perpendicular.' },
        { q: 'Two vectors are parallel if:', o: ['ā × b̄ = 0̄', 'ā · b̄ = 0', 'ā = b̄', '|ā × b̄| = |ā||b̄|'], a: 0, s: 'ā×b̄ = 0̄ (zero vector). sinθ = 0 → θ = 0° or 180° → parallel.' },
        { q: 'The projection of ā on b̄ is:', o: ['(ā·b̄)/|b̄|', 'ā×b̄', '|ā|/|b̄|', 'ā·b̄'], a: 0, s: 'Scalar projection = (ā·b̄)/|b̄| = |ā|cosθ.' },
      ],
      hard: [
        { q: 'Scalar triple product [ā b̄ c̄] = ā·(b̄×c̄) represents:', o: ['Volume of parallelepiped', 'Area of parallelogram', 'Length of diagonal', 'Perimeter'], a: 0, s: 'Scalar triple product = volume of parallelepiped formed by three vectors.' },
        { q: 'If [ā b̄ c̄] = 0, the vectors are:', o: ['Coplanar', 'Perpendicular', 'Unit vectors', 'Collinear'], a: 0, s: 'Zero scalar triple product → vectors lie in same plane (coplanar).' },
        { q: 'Vector triple product: ā×(b̄×c̄) =', o: ['(ā·c̄)b̄ - (ā·b̄)c̄', '(ā·b̄)c̄ - (ā·c̄)b̄', 'ā(b̄·c̄)', '(b̄×c̄)×ā'], a: 0, s: 'BAC-CAB rule: ā×(b̄×c̄) = (ā·c̄)b̄ - (ā·b̄)c̄.' },
        { q: 'The area of triangle with vertices A, B, C is:', o: ['½|AB̄ × AC̄|', '|AB̄ × AC̄|', '½|AB̄ · AC̄|', 'AB̄ · AC̄'], a: 0, s: 'Area = ½|cross product| of two edge vectors. Parallelogram area / 2.' },
        { q: 'Work done = F̄ · d̄ is an application of:', o: ['Dot product', 'Cross product', 'Triple product', 'Addition'], a: 0, s: 'Work = force · displacement × cosθ = F̄·d̄. Physical application of dot product.' },
      ],
    },
  ],
};

/* ─── 3D Geometry ─── */
const geometry3D: ChapterData = {
  name: '3D Geometry',
  slug: 'three-d-geometry',
  topics: [
    {
      name: 'Lines & Planes in 3D',
      slug: 'lines-planes-3d',
      easy: [
        { q: 'The distance between points (1,2,3) and (4,6,3) is:', o: ['5', '7', '3', '25'], a: 0, s: '√((4-1)²+(6-2)²+(3-3)²) = √(9+16+0) = √25 = 5.' },
        { q: 'Direction ratios of line joining (1,0,0) and (0,1,0) are:', o: ['-1, 1, 0', '1, 1, 0', '0, 0, 1', '1, 0, 1'], a: 0, s: 'DR = (0-1, 1-0, 0-0) = (-1, 1, 0). Or proportional (1, -1, 0).' },
        { q: 'The equation of x-axis in 3D is:', o: ['y = 0, z = 0', 'x = 0, z = 0', 'x = 0, y = 0', 'x = y = z'], a: 0, s: 'x-axis: all points with y = 0 and z = 0. x varies freely.' },
        { q: 'The general equation of a plane is:', o: ['ax + by + cz + d = 0', 'ax + by = c', 'x + y + z = 0', 'ax² + by² = c'], a: 0, s: 'Plane: linear equation in x, y, z. Normal vector is (a, b, c).' },
        { q: 'The distance from origin to plane ax+by+cz+d=0 is:', o: ['|d|/√(a²+b²+c²)', 'd', '|d|/(a+b+c)', 'a+b+c+d'], a: 0, s: 'Point-to-plane distance with point (0,0,0): |d|/√(a²+b²+c²).' },
      ],
      medium: [
        { q: 'The equation of line through (x₁,y₁,z₁) with direction ratios (a,b,c) is:', o: ['(x-x₁)/a = (y-y₁)/b = (z-z₁)/c', 'ax+by+cz = 0', 'x/a + y/b + z/c = 1', '(x+x₁)/a = (y+y₁)/b'], a: 0, s: 'Cartesian (symmetric) form of line in 3D.' },
        { q: 'Two planes are parallel if their normal vectors are:', o: ['Parallel (proportional)', 'Perpendicular', 'Equal', 'Zero'], a: 0, s: 'Parallel planes: normals n̄₁ ∥ n̄₂, i.e., n̄₁ = kn̄₂.' },
        { q: 'Angle between two planes is the angle between their:', o: ['Normal vectors', 'Direction ratios', 'Intercepts', 'Centre points'], a: 0, s: 'Dihedral angle = angle between normals. cosθ = |n̄₁·n̄₂|/(|n̄₁||n̄₂|).' },
        { q: 'The intercept form of a plane is:', o: ['x/a + y/b + z/c = 1', 'ax + by + cz = 1', 'x + y + z = abc', 'xa + yb + zc = 0'], a: 0, s: 'Intercepts a, b, c on x, y, z axes respectively.' },
        { q: 'A line is perpendicular to a plane if it is parallel to the plane\'s:', o: ['Normal vector', 'Any line in the plane', 'Intercept', 'Equation'], a: 0, s: 'Line ⊥ plane iff line ∥ normal to plane.' },
      ],
      hard: [
        { q: 'The shortest distance between two skew lines is found using:', o: ['|(ā₂-ā₁)·(b̄₁×b̄₂)|/|b̄₁×b̄₂|', '|ā₁-ā₂|', '|b̄₁-b̄₂|', '|ā₁×ā₂|'], a: 0, s: 'Skew lines: non-intersecting, non-parallel. SD uses cross product of direction vectors.' },
        { q: 'The equation of plane through three non-collinear points uses:', o: ['Determinant form with (x-x₁, y-y₁, z-z₁) rows', 'x+y+z = sum', 'Distance formula', 'Only two points needed'], a: 0, s: 'Form vectors from points, cross product gives normal, then use point-normal form.' },
        { q: 'The image of point P in a plane is found by:', o: ['Drawing perpendicular from P to plane and extending equal distance beyond', 'Reflecting in origin', 'Rotating 180°', 'Using the normal only'], a: 0, s: 'Foot of perpendicular F, then image P\' such that F is midpoint of PP\'.' },
        { q: 'The condition for coplanarity of two lines ā₁+λb̄₁ and ā₂+μb̄₂ is:', o: ['[ā₂-ā₁, b̄₁, b̄₂] = 0', 'b̄₁ = b̄₂', 'ā₁ = ā₂', '|b̄₁×b̄₂| = 0'], a: 0, s: 'Coplanar lines: scalar triple product of (ā₂-ā₁), b̄₁, b̄₂ = 0.' },
        { q: 'Distance from point (x₁,y₁,z₁) to plane ax+by+cz+d=0 is:', o: ['|ax₁+by₁+cz₁+d|/√(a²+b²+c²)', 'ax₁+by₁+cz₁', '(a+b+c)/d', '√(x₁²+y₁²+z₁²)'], a: 0, s: 'Point-to-plane distance formula. Generalisation of 2D point-to-line distance.' },
      ],
    },
  ],
};

/* ─── Probability & Statistics ─── */
const probability: ChapterData = {
  name: 'Probability',
  slug: 'probability',
  topics: [
    {
      name: 'Classical & Conditional Probability',
      slug: 'probability-theory',
      easy: [
        { q: 'The probability of getting head in a fair coin toss is:', o: ['1/2', '1', '0', '1/4'], a: 0, s: 'Fair coin: P(H) = P(T) = 1/2.' },
        { q: 'If P(A) = 0.3, then P(not A) =', o: ['0.7', '0.3', '1.3', '0'], a: 0, s: 'P(A\') = 1 - P(A) = 1 - 0.3 = 0.7.' },
        { q: 'Probability always lies between:', o: ['0 and 1 (inclusive)', '-1 and 1', '0 and ∞', '-∞ and ∞'], a: 0, s: '0 ≤ P(E) ≤ 1 for any event E.' },
        { q: 'The probability of getting 6 on a fair die is:', o: ['1/6', '1/2', '1/3', '6'], a: 0, s: 'Fair die: 6 equally likely outcomes. P(6) = 1/6.' },
        { q: 'If A and B are mutually exclusive, P(A∪B) =', o: ['P(A) + P(B)', 'P(A) × P(B)', 'P(A) + P(B) - P(A∩B)', '0'], a: 0, s: 'Mutually exclusive: A∩B = ∅. P(A∪B) = P(A) + P(B).' },
      ],
      medium: [
        { q: 'P(A∪B) = P(A) + P(B) - P(A∩B) is called:', o: ['Addition theorem', 'Multiplication theorem', 'Bayes\' theorem', 'Complement rule'], a: 0, s: 'Addition rule: accounts for double-counting of A∩B.' },
        { q: 'P(A|B) = P(A∩B)/P(B) is:', o: ['Conditional probability of A given B', 'Joint probability', 'Marginal probability', 'Prior probability'], a: 0, s: 'Conditional probability: given B has occurred, probability of A.' },
        { q: 'A and B are independent if:', o: ['P(A∩B) = P(A)·P(B)', 'P(A∪B) = P(A)+P(B)', 'P(A|B) = P(B)', 'P(A) = P(B)'], a: 0, s: 'Independence: occurrence of one doesn\'t affect the other. P(A∩B)=P(A)P(B).' },
        { q: 'In binomial distribution B(n,p), the mean is:', o: ['np', 'npq', 'n/p', 'p/n'], a: 0, s: 'Mean = np. Variance = npq where q = 1-p.' },
        { q: 'The number of ways to choose 3 items from 10 is ¹⁰C₃ =', o: ['120', '720', '30', '1000'], a: 0, s: '¹⁰C₃ = 10!/(3!7!) = 720/6 = 120.' },
      ],
      hard: [
        { q: 'Bayes\' theorem: P(Aᵢ|B) =', o: ['P(B|Aᵢ)P(Aᵢ) / ΣP(B|Aⱼ)P(Aⱼ)', 'P(Aᵢ∩B)', 'P(B)/P(Aᵢ)', 'P(Aᵢ)+P(B)'], a: 0, s: 'Bayes: posterior = likelihood × prior / evidence. Updates probability given new data.' },
        { q: 'Variance of binomial B(n,p) is:', o: ['npq (where q=1-p)', 'np', 'np²', 'n²pq'], a: 0, s: 'Var = npq. Standard deviation = √(npq).' },
        { q: 'If X follows Poisson(λ), then P(X=k) =', o: ['e⁻λ λᵏ/k!', 'λᵏ/k!', 'e⁻λ', 'λᵏeλ'], a: 0, s: 'Poisson PMF: P(X=k) = e⁻λ λᵏ/k! for k=0,1,2,... Mean = Variance = λ.' },
        { q: 'The birthday problem: minimum people for >50% chance of shared birthday ≈', o: ['23', '50', '183', '365'], a: 0, s: '23 people: P(at least 2 share) ≈ 50.7%. Counter-intuitive but proven.' },
        { q: 'Total probability theorem: P(B) = ΣP(B|Aᵢ)·P(Aᵢ) where A₁,...,Aₙ are:', o: ['Mutually exclusive and exhaustive (partition)', 'Independent', 'Equal', 'Any events'], a: 0, s: 'Total probability: Aᵢ form partition of sample space. Used as denominator in Bayes.' },
      ],
    },
  ],
};

/* ─── Statistics ─── */
const statistics: ChapterData = {
  name: 'Statistics',
  slug: 'statistics',
  topics: [
    {
      name: 'Measures of Central Tendency & Dispersion',
      slug: 'central-tendency-dispersion',
      easy: [
        { q: 'The mean of 2, 4, 6, 8, 10 is:', o: ['6', '5', '30', '10'], a: 0, s: 'Mean = (2+4+6+8+10)/5 = 30/5 = 6.' },
        { q: 'The median of 3, 1, 4, 1, 5 (sorted: 1,1,3,4,5) is:', o: ['3', '1', '4', '2'], a: 0, s: 'Odd number (5): median = middle value = 3rd value = 3.' },
        { q: 'The mode of 1, 2, 2, 3, 3, 3, 4 is:', o: ['3', '2', '1', '4'], a: 0, s: 'Mode = most frequent value = 3 (appears 3 times).' },
        { q: 'Range of data set is:', o: ['Maximum - Minimum', 'Mean - Median', 'Sum/n', 'Sum of squares'], a: 0, s: 'Range = max - min. Simplest measure of spread.' },
        { q: 'Arithmetic mean of first n natural numbers is:', o: ['(n+1)/2', 'n/2', 'n(n+1)/2', 'n²'], a: 0, s: 'Sum = n(n+1)/2. Mean = sum/n = (n+1)/2.' },
      ],
      medium: [
        { q: 'Variance of a data set is:', o: ['Mean of squared deviations from mean', 'Mean of deviations', 'Square of mean', 'Sum of data/n'], a: 0, s: 'Variance σ² = Σ(xᵢ-x̄)²/n. Measures spread around mean.' },
        { q: 'Standard deviation is:', o: ['√(Variance)', 'Variance²', 'Mean deviation', 'Range/2'], a: 0, s: 'SD = √(Var). Same units as the data. σ = √(Σ(xᵢ-x̄)²/n).' },
        { q: 'Variance of data {a, a, a, ..., a} (all same) is:', o: ['0', 'a', 'a²', '1'], a: 0, s: 'All values equal → no deviation from mean → variance = 0.' },
        { q: 'If each data value is multiplied by k, variance becomes:', o: ['k² times original', 'k times original', 'original', 'k + original'], a: 0, s: 'Var(kX) = k²·Var(X). SD(kX) = |k|·SD(X).' },
        { q: 'Coefficient of variation (CV) = (SD/Mean) × 100 measures:', o: ['Relative variability', 'Absolute spread', 'Central tendency', 'Correlation'], a: 0, s: 'CV compares variability across datasets with different means/units.' },
      ],
      hard: [
        { q: 'Shortcut formula for variance: σ² = (Σxᵢ²)/n - x̄² means:', o: ['Mean of squares minus square of mean', 'Square of mean minus mean of squares', '(Σxᵢ)²/n', 'Σ(xᵢ-x̄)'], a: 0, s: 'σ² = E(X²) - [E(X)]². Computationally easier than definition.' },
        { q: 'If data is shifted by constant c (each xᵢ → xᵢ + c), variance:', o: ['Remains unchanged', 'Increases by c', 'Increases by c²', 'Becomes 0'], a: 0, s: 'Var(X+c) = Var(X). Shifting doesn\'t change spread.' },
        { q: 'For combined mean of two groups (n₁, x̄₁) and (n₂, x̄₂):', o: ['(n₁x̄₁+n₂x̄₂)/(n₁+n₂)', '(x̄₁+x̄₂)/2', 'x̄₁·x̄₂', '(n₁+n₂)/(x̄₁+x̄₂)'], a: 0, s: 'Weighted mean: combined x̄ = (n₁x̄₁+n₂x̄₂)/(n₁+n₂).' },
        { q: 'Chebyshev\'s inequality states: at least 1-1/k² fraction of data lies within:', o: ['k standard deviations of mean', 'k units of mean', 'k × median', 'k × mode'], a: 0, s: 'Chebyshev: P(|X-μ| < kσ) ≥ 1-1/k². Holds for any distribution.' },
        { q: 'The mean deviation about mean is always ___ than standard deviation:', o: ['Less than or equal to', 'Greater than', 'Equal to', 'Unrelated to'], a: 0, s: 'MD ≤ SD always. Equality only when all non-zero deviations are equal.' },
      ],
    },
  ],
};

export const trigVectorsChapters: ChapterData[] = [
  trigonometry,
  vectors,
  geometry3D,
  probability,
  statistics,
];
