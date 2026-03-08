import type { PYQChapter } from './types';

export const mathsPyq4: PYQChapter[] = [
  {
    name: 'Determinants',
    slug: 'determinants',
    questions: [
      { q: 'If A is a 3×3 matrix with |A| = 5, then |3A| is:', o: ['135', '15', '45', '125'], a: 0, s: '|kA| = kⁿ|A| for n×n. |3A| = 3³ × 5 = 135.', year: 2023, shift: 'Jan 24 Shift 1', exam: 'main' },
      { q: 'The value of |1 1 1; 1 2 3; 1 3 6| is:', o: ['1', '0', '2', '−1'], a: 0, s: 'Expand: 1(12−9) − 1(6−3) + 1(3−2) = 3 − 3 + 1 = 1.', year: 2022, shift: 'Jun 24 Shift 2', exam: 'main' },
      { q: 'If A is a skew-symmetric matrix of order 3, then det(A) is:', o: ['0', '1', '−1', 'Any value'], a: 0, s: 'For skew-symmetric of odd order: det(A) = det(−Aᵀ) = (−1)³det(A) = −det(A) → det(A) = 0.', year: 2021, shift: 'Feb 24 Shift 1', exam: 'main' },
      { q: 'If A² = I (A is involutory), then A⁻¹ is:', o: ['A', 'A²', 'I', '−A'], a: 0, s: 'A² = I → A·A = I → A⁻¹ = A.', year: 2020, shift: 'Jan 7 Shift 2', exam: 'main' },
      { q: 'For a homogeneous system AX = 0 to have non-trivial solution:', o: ['det(A) = 0', 'det(A) ≠ 0', 'det(A) > 0', 'det(A) = 1'], a: 0, s: 'Non-trivial solution exists iff coefficient matrix is singular (det = 0).', year: 2023, shift: 'Jan 29 Shift 2', exam: 'main' },
      { q: 'adj(adj(A)) for a 3×3 matrix A with |A| = 4 equals:', o: ['4A', '16A', '64A', 'A'], a: 0, s: 'adj(adj(A)) = |A|^(n−2) × A = 4^(3−2) × A = 4A for 3×3.', year: 2022, shift: 'Jul 25 Shift 1', exam: 'main' },
      { q: 'If A is a non-singular matrix, then |adj(A)| is:', o: ['|A|^(n−1)', '|A|', '|A|²', '1'], a: 0, s: '|adj(A)| = |A|^(n−1) for an n×n matrix.', year: 2019, shift: 'Jan 9 Shift 1', exam: 'main' },
      { q: 'The rank of matrix [[1,2,3],[2,4,6],[3,6,9]] is:', o: ['1', '2', '3', '0'], a: 0, s: 'Rows are proportional (R₂ = 2R₁, R₃ = 3R₁). Rank = 1.', year: 2021, shift: 'Mar 16 Shift 2', exam: 'main' },
    ],
  },
  {
    name: 'Statistics',
    slug: 'statistics',
    questions: [
      { q: 'The mean of first n natural numbers is:', o: ['(n+1)/2', 'n/2', 'n(n+1)/2', '(n−1)/2'], a: 0, s: 'Mean = Σk/n = n(n+1)/(2n) = (n+1)/2.', year: 2023, shift: 'Jan 25 Shift 2', exam: 'main' },
      { q: 'If variance of x₁, x₂, ..., xₙ is σ², then variance of 2x₁+3, 2x₂+3, ..., 2xₙ+3 is:', o: ['4σ²', '2σ²', 'σ²', '4σ²+3'], a: 0, s: 'Var(aX+b) = a²Var(X) = 4σ².', year: 2022, shift: 'Jun 25 Shift 1', exam: 'main' },
      { q: 'The mean deviation about mean for 3, 7, 11, 15, 19 is:', o: ['4.8', '3', '5', '11'], a: 0, s: 'Mean = 55/5 = 11. MD = (8+4+0+4+8)/5 = 24/5 = 4.8.', year: 2021, shift: 'Feb 25 Shift 2', exam: 'main' },
      { q: 'If the mean is 6 and variance is 4, the coefficient of variation is:', o: ['33.33%', '66.67%', '25%', '50%'], a: 0, s: 'CV = (σ/mean)×100 = (2/6)×100 = 33.33%.', year: 2020, shift: 'Jan 8 Shift 1', exam: 'main' },
      { q: 'The variance of 6, 8, 10, 12, 14 is:', o: ['8', '10', '4', '16'], a: 0, s: 'Mean = 10. Var = [(16+4+0+4+16)]/5 = 40/5 = 8.', year: 2023, shift: 'Jan 30 Shift 2', exam: 'main' },
      { q: 'For two groups with n₁ = n₂ = 5 and same mean, the combined variance is:', o: ['Average of the two variances', 'Sum of variances', 'Product of variances', 'Difference of variances'], a: 0, s: 'When n₁ = n₂ and means are equal: combined variance = (σ₁² + σ₂²)/2.', year: 2019, shift: 'Apr 10 Shift 2', exam: 'main' },
    ],
  },
  {
    name: 'Area Under Curves',
    slug: 'area-under-curves',
    questions: [
      { q: 'Area bounded by y = x², x-axis, x = 1 and x = 3 is:', o: ['26/3', '9', '8', '10'], a: 0, s: '∫₁³ x² dx = [x³/3]₁³ = 27/3 − 1/3 = 26/3.', year: 2023, shift: 'Jan 31 Shift 1', exam: 'main' },
      { q: 'The area of the region bounded by y = |x−1| and y = 1 is:', o: ['1', '2', '1/2', '4'], a: 0, s: 'V-shape vertex at (1,0). y = 1 intersects at x = 0 and x = 2. Area = ½ × 2 × 1 = 1.', year: 2022, shift: 'Jul 26 Shift 2', exam: 'main' },
      { q: 'The area between y² = 4x and x² = 4y is:', o: ['16/3', '8/3', '4', '32/3'], a: 0, s: 'Intersection at (0,0) and (4,4). Area = ∫₀⁴ (2√x − x²/4) dx = [4x^(3/2)/3 − x³/12]₀⁴ = 32/3 − 16/3 = 16/3.', year: 2021, shift: 'Mar 17 Shift 1', exam: 'main' },
      { q: 'Area under y = sin x from 0 to π is:', o: ['2', '1', 'π', '0'], a: 0, s: '∫₀π sin x dx = [−cos x]₀π = 1+1 = 2.', year: 2020, shift: 'Jan 9 Shift 2', exam: 'main' },
      { q: 'The area enclosed by y = eˣ, x = 0, x = 1, and x-axis is:', o: ['e − 1', 'e', '1', 'e + 1'], a: 0, s: '∫₀¹ eˣ dx = e − 1.', year: 2023, shift: 'Jan 25 Shift 1', exam: 'main' },
    ],
  },
];
