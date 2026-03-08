import type { ChapterData } from './types';

/* ─── Chapter: Determinants ─── */
const determinants: ChapterData = {
  name: 'Determinants',
  slug: 'determinants',
  topics: [
    {
      name: 'Properties & Evaluation',
      slug: 'determinant-properties-evaluation',
      easy: [
        { q: 'The determinant of a 2×2 matrix [[a,b],[c,d]] is:', o: ['ad − bc', 'ab − cd', 'ac − bd', 'ad + bc'], a: 0, s: 'det([[a,b],[c,d]]) = ad − bc.' },
        { q: 'If all elements of a row are zero, the determinant is:', o: ['0', '1', 'Undefined', '−1'], a: 0, s: 'A row of zeros makes the determinant zero.' },
        { q: 'Interchanging two rows of a determinant:', o: ['Changes its sign', 'Doubles it', 'Has no effect', 'Makes it zero'], a: 0, s: 'Swapping two rows multiplies the determinant by −1.' },
        { q: 'If two rows of a determinant are identical, the determinant is:', o: ['0', '1', '2', 'Undefined'], a: 0, s: 'Two identical rows → swapping gives −D = D → 2D = 0 → D = 0.' },
        { q: 'det(kA) for an n×n matrix A equals:', o: ['kⁿ det(A)', 'k det(A)', 'det(A)/k', 'k² det(A)'], a: 0, s: 'det(kA) = kⁿ det(A) for an n×n matrix (k multiplied to each of n rows).' },
      ],
      medium: [
        { q: 'If A is a 3×3 matrix with det(A) = 5, then det(3A) is:', o: ['135', '15', '45', '125'], a: 0, s: 'det(3A) = 3³ × det(A) = 27 × 5 = 135.' },
        { q: 'The value of |1 a a²; 1 b b²; 1 c c²| (Vandermonde) is:', o: ['(b−a)(c−a)(c−b)', '(a−b)(b−c)(c−a)', 'abc', 'a+b+c'], a: 0, s: 'Vandermonde determinant = (b−a)(c−a)(c−b).' },
        { q: 'If det(A) = 4 and det(B) = 3, then det(AB) is:', o: ['12', '7', '1', '64'], a: 0, s: 'det(AB) = det(A) × det(B) = 4 × 3 = 12.' },
        { q: 'det(A⁻¹) equals:', o: ['1/det(A)', 'det(A)', '−det(A)', 'det(A)²'], a: 0, s: 'AA⁻¹ = I → det(A)det(A⁻¹) = 1 → det(A⁻¹) = 1/det(A).' },
        { q: 'Adding a multiple of one row to another row:', o: ['Does not change the determinant', 'Doubles the determinant', 'Changes the sign', 'Makes it zero'], a: 0, s: 'R_i → R_i + kR_j preserves the determinant value.' },
        { q: 'If A is orthogonal (AᵀA = I), det(A) is:', o: ['±1', '0', '1 only', 'Any value'], a: 0, s: 'det(AᵀA) = det(I) → det(A)² = 1 → det(A) = ±1.' },
      ],
      hard: [
        { q: 'The determinant |sin²A sin²B sin²C; cos²A cos²B cos²C; 1 1 1| where A+B+C = π is:', o: ['0', '1', 'sinAsinBsinC', 'cosAcosBcosC'], a: 0, s: 'R₁ + R₂ = [1,1,1] = R₃. Two identical rows → determinant = 0.' },
        { q: 'If the system ax+by=0, cx+dy=0 has a non-trivial solution, then:', o: ['ad − bc = 0', 'ad + bc = 0', 'a + d = 0', 'b + c = 0'], a: 0, s: 'Non-trivial solution for homogeneous system ⟺ det = 0 → ad − bc = 0.' },
        { q: 'For a skew-symmetric matrix of odd order, the determinant is:', o: ['0', '1', '−1', 'Undefined'], a: 0, s: 'Aᵀ = −A → det(A) = det(−A) = (−1)ⁿ det(A). For odd n: det(A) = −det(A) → det(A) = 0.' },
        { q: 'The cofactor of element a₁₂ in a 3×3 matrix is:', o: ['(−1)¹⁺² × M₁₂', '(−1)¹⁺¹ × M₁₂', 'M₁₂', '−M₁₂'], a: 0, s: 'Cofactor C_ij = (−1)^(i+j) × M_ij. For a₁₂: (−1)³ × M₁₂ = −M₁₂.' },
        { q: 'Cramer\'s rule can solve a system of n equations in n unknowns when:', o: ['The coefficient determinant is non-zero', 'The coefficient determinant is zero', 'The system is homogeneous', 'n ≤ 2'], a: 0, s: 'Cramer\'s rule: x_i = D_i/D where D ≠ 0 (unique solution exists).' },
      ],
    },
  ],
};

/* ─── Chapter: Statistics & Mathematical Reasoning ─── */
const statistics: ChapterData = {
  name: 'Statistics & Mathematical Reasoning',
  slug: 'statistics-reasoning',
  topics: [
    {
      name: 'Mean, Variance & Standard Deviation',
      slug: 'mean-variance-sd',
      easy: [
        { q: 'The arithmetic mean of 2, 4, 6, 8, 10 is:', o: ['6', '5', '7', '30'], a: 0, s: 'Mean = (2+4+6+8+10)/5 = 30/5 = 6.' },
        { q: 'Variance is the mean of:', o: ['Squares of deviations from mean', 'Deviations from mean', 'Data values', 'Absolute deviations'], a: 0, s: 'Variance σ² = Σ(xᵢ − x̄)²/n = mean of squared deviations.' },
        { q: 'Standard deviation is:', o: ['Square root of variance', 'Square of variance', 'Mean of data', 'Range of data'], a: 0, s: 'SD = √(Variance).' },
        { q: 'If all values in a dataset are equal, the variance is:', o: ['0', '1', 'Equal to the value', 'Undefined'], a: 0, s: 'All values same → all deviations = 0 → variance = 0.' },
        { q: 'The median of 3, 7, 1, 5, 9 is:', o: ['5', '3', '7', '25'], a: 0, s: 'Sorted: 1,3,5,7,9. Middle value = 5.' },
      ],
      medium: [
        { q: 'If the mean of n observations is x̄ and each observation is increased by k, the new mean is:', o: ['x̄ + k', 'x̄ × k', 'x̄', 'x̄ − k'], a: 0, s: 'Adding k to each: new mean = x̄ + k.' },
        { q: 'If each observation is multiplied by k, the new variance is:', o: ['k²σ²', 'kσ²', 'σ²', 'k²σ'], a: 0, s: 'Variance of kX = k² × Var(X).' },
        { q: 'The mean deviation about the mean for data 4, 7, 8, 9, 10, 12, 13, 17 is:', o: ['3', '2.5', '4', '10'], a: 0, s: 'Mean = 80/8 = 10. MD = Σ|xᵢ − 10|/8 = (6+3+2+1+0+2+3+7)/8 = 24/8 = 3.' },
        { q: 'Coefficient of variation (CV) is:', o: ['(σ/x̄) × 100', 'σ × x̄', 'x̄/σ', 'σ²/x̄'], a: 0, s: 'CV = (standard deviation / mean) × 100%. Measures relative dispersion.' },
        { q: 'The variance of the first n natural numbers is:', o: ['(n² − 1)/12', 'n(n+1)/2', 'n²/12', '(n−1)/12'], a: 0, s: 'Var = E(X²) − [E(X)]² = (n+1)(2n+1)/6 − [(n+1)/2]² = (n²−1)/12.' },
      ],
      hard: [
        { q: 'If two groups have n₁, n₂ observations with means x̄₁, x̄₂ and variances σ₁², σ₂², the combined variance is:', o: ['[n₁(σ₁²+d₁²)+n₂(σ₂²+d₂²)]/(n₁+n₂) where dᵢ = x̄ᵢ − x̄', 'σ₁² + σ₂²', '(σ₁² + σ₂²)/2', 'n₁σ₁² + n₂σ₂²'], a: 0, s: 'Combined variance uses within-group and between-group components: σ² = [n₁(σ₁² + d₁²) + n₂(σ₂² + d₂²)]/(n₁+n₂).' },
        { q: 'If the variance of x₁, x₂, ..., xₙ is σ², the variance of ax₁+b, ax₂+b, ..., axₙ+b is:', o: ['a²σ²', 'a²σ² + b', 'aσ²', '(a+b)²σ²'], a: 0, s: 'Var(aX + b) = a²Var(X) = a²σ². Adding b shifts mean but doesn\'t change spread.' },
        { q: 'For a frequency distribution, if Σfᵢ = 30, Σfᵢxᵢ = 120, Σfᵢxᵢ² = 600, then variance is:', o: ['4', '16', '2', '20'], a: 0, s: 'σ² = Σfᵢxᵢ²/N − (Σfᵢxᵢ/N)² = 600/30 − (120/30)² = 20 − 16 = 4.' },
        { q: 'The statement "If p then q" is logically equivalent to:', o: ['If not q then not p (contrapositive)', 'If q then p (converse)', 'If not p then not q (inverse)', 'p and q'], a: 0, s: 'p → q ≡ ¬q → ¬p (contrapositive). Converse and inverse are NOT equivalent.' },
      ],
    },
  ],
};

export const algebraExpansionChapters: ChapterData[] = [determinants, statistics];
