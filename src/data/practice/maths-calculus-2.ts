import type { ChapterData } from './types';

/* ─── Chapter: Application of Derivatives ─── */
const applicationDerivatives: ChapterData = {
  name: 'Application of Derivatives',
  slug: 'application-derivatives',
  topics: [
    {
      name: 'Maxima, Minima & Rate of Change',
      slug: 'maxima-minima-rate-change',
      easy: [
        { q: 'If f\'(x) = 0 and f\'\'(x) > 0, then x is a point of:', o: ['Local minimum', 'Local maximum', 'Inflection', 'Neither'], a: 0, s: 'f\'(x) = 0 (critical point) and f\'\'(x) > 0 → concave up → local minimum.' },
        { q: 'The rate of change of area of a circle with respect to radius is:', o: ['2πr', 'πr²', 'πr', '2πr²'], a: 0, s: 'A = πr² → dA/dr = 2πr.' },
        { q: 'A function is increasing if:', o: ['f\'(x) > 0', 'f\'(x) < 0', 'f\'(x) = 0', 'f\'\'(x) > 0'], a: 0, s: 'f\'(x) > 0 in an interval means f is strictly increasing there.' },
        { q: 'The slope of the tangent to y = x² at x = 3 is:', o: ['6', '9', '3', '12'], a: 0, s: 'dy/dx = 2x. At x = 3: slope = 6.' },
        { q: 'The equation of tangent to y = x³ at (1,1) is:', o: ['y = 3x − 2', 'y = x', 'y = 3x', 'y = 3x + 1'], a: 0, s: 'dy/dx = 3x². At (1,1): slope = 3. Tangent: y − 1 = 3(x − 1) → y = 3x − 2.' },
      ],
      medium: [
        { q: 'The minimum value of f(x) = x² − 4x + 7 is:', o: ['3', '7', '0', '4'], a: 0, s: 'f(x) = (x−2)² + 3. Minimum at x = 2, value = 3.' },
        { q: 'The radius of a sphere increases at 2 cm/s. The rate of increase of volume when r = 5 cm is:', o: ['200π cm³/s', '100π cm³/s', '50π cm³/s', '400π cm³/s'], a: 0, s: 'V = 4/3πr³ → dV/dt = 4πr²(dr/dt) = 4π(25)(2) = 200π cm³/s.' },
        { q: 'The point on y = x² nearest to (0, 5) is:', o: ['(±√(9/2), 9/2)', '(0, 0)', '(1, 1)', '(2, 4)'], a: 0, s: 'Minimise D² = x² + (x² − 5)². dD²/dx = 2x + 2(x²−5)(2x) = 0 → x(1 + 2x² − 10) = 0. x = 0 (max) or x² = 9/2.' },
        { q: 'If x + y = 10, the maximum value of xy is:', o: ['25', '20', '30', '10'], a: 0, s: 'y = 10 − x. P = x(10−x) = 10x − x². P\'= 10 − 2x = 0 → x = 5. P_max = 25.' },
        { q: 'Rolle\'s theorem requires f(a) = f(b) and guarantees:', o: ['∃c ∈ (a,b) with f\'(c) = 0', 'f is constant on [a,b]', 'f has maximum at endpoints', 'f\'\'(c) = 0 somewhere'], a: 0, s: 'Rolle\'s: if f is continuous on [a,b], differentiable on (a,b), f(a) = f(b) → ∃c: f\'(c) = 0.' },
        { q: 'The mean value theorem states f\'(c) equals:', o: ['[f(b) − f(a)]/(b − a)', 'f(b) − f(a)', '[f(a) + f(b)]/2', 'f(a)f(b)/(b−a)'], a: 0, s: 'MVT: ∃c ∈ (a,b) such that f\'(c) = [f(b) − f(a)]/(b − a).' },
      ],
      hard: [
        { q: 'A rectangular box with square base and open top has surface area 108 cm². The maximum volume is:', o: ['108 cm³', '54 cm³', '216 cm³', '72 cm³'], a: 0, s: 'S = x² + 4xh = 108. V = x²h = x²(108 − x²)/(4x) = x(108 − x²)/4. V\'= (108 − 3x²)/4 = 0 → x² = 36 → x = 6, h = 3. V = 108.' },
        { q: 'The function f(x) = x³ − 3x has a local maximum at:', o: ['x = −1', 'x = 1', 'x = 0', 'x = 3'], a: 0, s: 'f\'(x) = 3x² − 3 = 0 → x = ±1. f\'\'(x) = 6x. f\'\'(−1) = −6 < 0 → local max at x = −1.' },
        { q: 'The shortest distance from the origin to the curve xy = 4 is:', o: ['2√2', '4', '2', '√2'], a: 0, s: 'D² = x² + y² = x² + 16/x². d(D²)/dx = 2x − 32/x³ = 0 → x⁴ = 16 → x = 2. D = √(4+4) = 2√2.' },
        { q: 'If f(x) = sin x − x, then for x > 0, f(x) is:', o: ['Negative', 'Positive', 'Zero', 'Oscillating'], a: 0, s: 'f\'(x) = cos x − 1 ≤ 0 for all x (cos x ≤ 1). f(0) = 0 and f is decreasing → f(x) < 0 for x > 0.' },
        { q: 'A cone has fixed slant height l. The semi-vertical angle for maximum volume is:', o: ['tan⁻¹(√2)', '45°', '30°', '60°'], a: 0, s: 'V = (π/3)r²h = (π/3)(l sinθ)²(l cosθ). dV/dθ = 0 → tanθ = √2 → θ = tan⁻¹(√2).' },
      ],
    },
  ],
};

/* ─── Chapter: Area Under Curves ─── */
const areaUnderCurves: ChapterData = {
  name: 'Area Under Curves',
  slug: 'area-under-curves',
  topics: [
    {
      name: 'Definite Integration for Areas',
      slug: 'definite-integration-areas',
      easy: [
        { q: 'The area under y = x from x = 0 to x = 4 is:', o: ['8', '4', '16', '2'], a: 0, s: '∫₀⁴ x dx = [x²/2]₀⁴ = 16/2 = 8.' },
        { q: 'The area under y = x² from x = 0 to x = 3 is:', o: ['9', '27', '3', '18'], a: 0, s: '∫₀³ x² dx = [x³/3]₀³ = 27/3 = 9.' },
        { q: 'The area of the region bounded by y = 0, x = 0, and y = 4 − x is:', o: ['8', '4', '16', '2'], a: 0, s: 'Triangle with vertices (0,0), (4,0), (0,4). Area = ½ × 4 × 4 = 8.' },
        { q: 'Area enclosed by the circle x² + y² = r² is:', o: ['πr²', '2πr', 'πr', '4πr²'], a: 0, s: 'Area of circle = πr².' },
        { q: 'The area bounded by y = |x| and y = 3 is:', o: ['9', '3', '6', '12'], a: 0, s: 'Triangle from x = −3 to x = 3 between y = |x| and y = 3. Area = ½ × 6 × 3 = 9.' },
      ],
      medium: [
        { q: 'The area bounded by y = x² and y = x is:', o: ['1/6', '1/3', '1/2', '1/4'], a: 0, s: 'Intersection: x² = x → x = 0, 1. ∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6.' },
        { q: 'Area of the ellipse x²/a² + y²/b² = 1 is:', o: ['πab', '2πab', 'πa²b²', '4ab'], a: 0, s: 'Area of ellipse = πab (generalisation of circle area πr²).' },
        { q: 'The area between y = sin x and x-axis from 0 to π is:', o: ['2', '1', 'π', '0'], a: 0, s: '∫₀π sin x dx = [−cos x]₀π = −(−1) − (−1) = 1 + 1 = 2.' },
        { q: 'The area bounded by y² = 4x and y = 2x is:', o: ['1/3', '2/3', '1', '4/3'], a: 0, s: 'Intersection: (2x)² = 4x → 4x² = 4x → x = 0, 1. ∫₀¹ (√(4x) − 2x) dx = ∫₀¹ (2√x − 2x) dx = [4x^(3/2)/3 − x²]₀¹ = 4/3 − 1 = 1/3.' },
        { q: 'The area between y = eˣ, x-axis, x = 0, and x = 1 is:', o: ['e − 1', 'e', '1', 'e + 1'], a: 0, s: '∫₀¹ eˣ dx = [eˣ]₀¹ = e − 1.' },
      ],
      hard: [
        { q: 'The area enclosed between y² = 4ax and x² = 4ay is:', o: ['16a²/3', '8a²/3', '4a²/3', '32a²/3'], a: 0, s: 'Intersection at (0,0) and (4a,4a). Area = ∫₀⁴ᵃ (2√(ax) − x²/(4a)) dx = 16a²/3.' },
        { q: 'The area bounded by y = x³ − x and the x-axis is:', o: ['1/2', '1/4', '1', '0'], a: 0, s: 'y = x(x²−1) = 0 at x = −1, 0, 1. Area = |∫₋₁⁰(x³−x)dx| + |∫₀¹(x³−x)dx| = 1/4 + 1/4 = 1/2.' },
        { q: 'The area of the region {(x,y): x² + y² ≤ 1 ≤ x + y} is:', o: ['(π − 2)/4', 'π/4', '(π + 2)/4', 'π/2'], a: 0, s: 'Area inside unit circle but above x + y = 1. This is a lens-shaped region. Area = π/4 − 1/2 = (π − 2)/4.' },
        { q: 'The area between y = ln x, x-axis, and x = e is:', o: ['1', 'e', 'e − 1', '2'], a: 0, s: '∫₁ᵉ ln x dx = [x ln x − x]₁ᵉ = (e − e) − (0 − 1) = 1.' },
      ],
    },
  ],
};

export const calculusExpansionChapters: ChapterData[] = [applicationDerivatives, areaUnderCurves];
