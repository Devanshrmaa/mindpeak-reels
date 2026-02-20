import type { ChapterData } from './types';

const limits: ChapterData = {
  name: 'Limits & Continuity',
  slug: 'limits-continuity',
  topics: [
    {
      name: 'Limits & Indeterminate Forms',
      slug: 'limits-indeterminate',
      easy: [
        { q: 'lim(x→2) (x² - 4)/(x - 2) =', o: ['4', '0', '∞', '2'], a: 0, s: 'Factor: (x+2)(x-2)/(x-2) = x+2. Limit = 4.' },
        { q: 'lim(x→0) sin(x)/x =', o: ['1', '0', '∞', 'Does not exist'], a: 0, s: 'Standard limit: lim sin(x)/x = 1 as x→0.' },
        { q: 'A function f is continuous at x=a if:', o: ['lim(x→a) f(x) = f(a)', 'f(a) exists', 'Limit exists', 'f is defined near a'], a: 0, s: 'Continuity: f(a) defined, limit exists, and limit = f(a).' },
        { q: 'lim(x→∞) 1/x =', o: ['0', '1', '∞', '-1'], a: 0, s: 'As x grows larger, 1/x approaches 0.' },
        { q: 'lim(x→0) (eˣ - 1)/x =', o: ['1', '0', 'e', '∞'], a: 0, s: 'Standard limit: lim(eˣ-1)/x = 1 as x→0.' },
      ],
      medium: [
        { q: 'lim(x→0) (1 + x)^(1/x) =', o: ['e', '1', '∞', '0'], a: 0, s: 'This is the definition of e ≈ 2.718.' },
        { q: 'lim(x→0) tan(x)/x =', o: ['1', '0', '∞', '-1'], a: 0, s: 'tan(x)/x = (sin(x)/x)·(1/cos(x)) → 1·1 = 1.' },
        { q: 'lim(x→0) (1 - cos x)/x² =', o: ['1/2', '1', '0', '2'], a: 0, s: 'Using 1-cosx = 2sin²(x/2). lim 2sin²(x/2)/x² = 2·(1/4) = 1/2.' },
        { q: "L'Hôpital's rule applies when the limit is of the form:", o: ['0/0 or ∞/∞', '0/1', '1/0', 'Any form'], a: 0, s: "L'Hôpital: for 0/0 or ∞/∞ indeterminate forms, lim f/g = lim f'/g'." },
        { q: 'lim(x→∞) (3x² + 2x)/(5x² - 1) =', o: ['3/5', '∞', '0', '2/5'], a: 0, s: 'Divide by x²: (3 + 2/x)/(5 - 1/x²) → 3/5 as x→∞.' },
      ],
      hard: [
        { q: 'lim(x→0) (x - sin x)/x³ =', o: ['1/6', '0', '1/2', '1'], a: 0, s: "By L'Hôpital (3 times) or Taylor: sinx = x - x³/6 + ... So (x-sinx)/x³ → 1/6." },
        { q: 'lim(x→0) (aˣ - 1)/x =', o: ['ln a', 'a', '1', '0'], a: 0, s: 'Standard: lim(aˣ-1)/x = ln(a). Special case: a=e gives 1.' },
        { q: 'lim(n→∞) (1 + 1/n)^n =', o: ['e', '1', '∞', '0'], a: 0, s: 'Definition of Euler number e ≈ 2.71828.' },
        { q: 'lim(x→0) [x]/x where [x] is floor function does not exist because:', o: ['Left limit ≠ Right limit', 'Both limits are ∞', 'Function is defined at 0', 'Limit is 1'], a: 0, s: 'From right: [x]=0 for 0<x<1 → 0/x → 0. From left: [x]=-1 for -1<x<0 → -1/x → ∞. Different one-sided limits.' },
        { q: 'lim(x→0⁺) x^x =', o: ['1', '0', '∞', 'e'], a: 0, s: 'x^x = e^(xlnx). xlnx → 0 as x→0⁺ (since x→0 faster than lnx→-∞). So x^x → e⁰ = 1.' },
      ],
    },
  ],
};

const derivatives: ChapterData = {
  name: 'Differentiation',
  slug: 'differentiation',
  topics: [
    {
      name: 'Derivatives & Rules',
      slug: 'derivatives-rules',
      easy: [
        { q: 'd/dx(xⁿ) =', o: ['nxⁿ⁻¹', 'xⁿ⁻¹', 'nxⁿ', '(n+1)xⁿ⁺¹'], a: 0, s: 'Power rule: d/dx(xⁿ) = nxⁿ⁻¹.' },
        { q: 'd/dx(sin x) =', o: ['cos x', '-cos x', 'sin x', '-sin x'], a: 0, s: 'Derivative of sin x = cos x.' },
        { q: 'd/dx(eˣ) =', o: ['eˣ', 'xeˣ⁻¹', 'eˣ⁻¹', 'xeˣ'], a: 0, s: 'eˣ is its own derivative.' },
        { q: "The product rule states d/dx(uv) =", o: ["u'v + uv'", "u'v'", "u'v - uv'", "(uv)'"], a: 0, s: "Product rule: (uv)' = u'v + uv'." },
        { q: 'd/dx(ln x) =', o: ['1/x', 'ln x', 'x', 'eˣ'], a: 0, s: 'd/dx(ln x) = 1/x for x > 0.' },
      ],
      medium: [
        { q: 'd/dx(tan x) =', o: ['sec²x', 'sec x tan x', 'cos²x', '-csc²x'], a: 0, s: 'd/dx(tan x) = sec²x.' },
        { q: "Chain rule: d/dx[f(g(x))] =", o: ["f'(g(x))·g'(x)", "f'(g(x))", "f(g'(x))", "f'(x)·g'(x)"], a: 0, s: "Chain rule: differentiate outer, multiply by derivative of inner." },
        { q: 'd/dx(x²sin x) by product rule =', o: ['2x sin x + x²cos x', '2x cos x', 'x²cos x', '2x sin x'], a: 0, s: "u=x², v=sinx. u'v + uv' = 2x sinx + x²cosx." },
        { q: 'If y = sin⁻¹(x), then dy/dx =', o: ['1/√(1-x²)', '-1/√(1-x²)', '1/√(1+x²)', 'sin⁻¹(x)/x'], a: 0, s: 'd/dx(sin⁻¹x) = 1/√(1-x²) for |x| < 1.' },
        { q: "Quotient rule: d/dx(u/v) =", o: ["(u'v - uv')/v²", "(u'v + uv')/v²", "u'/v'", "(uv' - u'v)/v²"], a: 0, s: "(u/v)' = (u'v - uv')/v²." },
      ],
      hard: [
        { q: 'If y = xˣ, then dy/dx =', o: ['xˣ(ln x + 1)', 'x·xˣ⁻¹', 'xˣ ln x', 'eˣ'], a: 0, s: 'y = xˣ → ln y = x ln x → (1/y)dy/dx = lnx + 1 → dy/dx = xˣ(lnx + 1).' },
        { q: 'The nth derivative of eᵃˣ is:', o: ['aⁿeᵃˣ', 'neᵃˣ', 'eⁿᵃˣ', 'aⁿeˣ'], a: 0, s: 'Each differentiation brings out factor a: dⁿ/dxⁿ(eᵃˣ) = aⁿeᵃˣ.' },
        { q: 'If f(x) = |x|, then f\'(0) is:', o: ['Does not exist', '0', '1', '-1'], a: 0, s: 'Left derivative = -1, right derivative = +1. Not equal → f\'(0) DNE.' },
        { q: 'For implicit differentiation of x² + y² = 25, dy/dx =', o: ['-x/y', 'x/y', '-y/x', '2x'], a: 0, s: '2x + 2y(dy/dx) = 0 → dy/dx = -x/y.' },
        { q: 'd/dx(tan⁻¹(x)) =', o: ['1/(1+x²)', '1/√(1-x²)', 'sec²x', '-1/(1+x²)'], a: 0, s: 'd/dx(tan⁻¹x) = 1/(1+x²).' },
      ],
    },
    {
      name: 'Applications of Derivatives',
      slug: 'applications-derivatives',
      easy: [
        { q: 'The slope of tangent to y = f(x) at x = a is:', o: ["f'(a)", 'f(a)', '1/f\'(a)', 'f(a)/a'], a: 0, s: "Slope of tangent = value of derivative at that point." },
        { q: 'If f\'(x) > 0 on an interval, f is:', o: ['Increasing', 'Decreasing', 'Constant', 'Undefined'], a: 0, s: 'Positive derivative → function is strictly increasing.' },
        { q: 'At a local maximum, f\'(x) =', o: ['0 (critical point)', '> 0', '< 0', '∞'], a: 0, s: "At extrema: f'(x) = 0 (necessary condition for differentiable f)." },
        { q: 'Rate of change of area of circle w.r.t. radius is:', o: ['2πr', 'πr²', 'πr', '2r'], a: 0, s: 'A = πr². dA/dr = 2πr.' },
        { q: 'The equation of tangent to y = x² at (1,1) is:', o: ['y = 2x - 1', 'y = x', 'y = x²', 'y = 2x'], a: 0, s: "y' = 2x. At x=1: slope = 2. y-1 = 2(x-1) → y = 2x-1." },
      ],
      medium: [
        { q: 'For maxima, the second derivative test requires:', o: ["f'(c) = 0 and f''(c) < 0", "f'(c) = 0 and f''(c) > 0", "f''(c) = 0", "f'(c) > 0"], a: 0, s: "f'(c)=0, f''(c)<0 → local max. f''(c)>0 → local min." },
        { q: "Rolle's theorem requires:", o: ['f continuous on [a,b], differentiable on (a,b), f(a)=f(b)', 'Only continuity', 'Only differentiability', 'f(a)≠f(b)'], a: 0, s: "Rolle's: all three conditions needed. Then ∃c∈(a,b) with f'(c)=0." },
        { q: 'The maximum value of f(x) = x(1-x) on [0,1] is:', o: ['1/4', '1/2', '1', '0'], a: 0, s: "f'(x) = 1-2x = 0 → x = 1/2. f(1/2) = 1/2 × 1/2 = 1/4." },
        { q: 'If a spherical balloon inflates at 4π cm³/s, rate of radius increase when r = 2 cm is:', o: ['1/4 cm/s', '1 cm/s', '1/2 cm/s', 'π cm/s'], a: 0, s: 'V = 4πr³/3. dV/dt = 4πr²(dr/dt). 4π = 4π(4)(dr/dt). dr/dt = 1/4 cm/s.' },
        { q: 'LMVT states: if f is continuous on [a,b] and differentiable on (a,b), then:', o: ["∃c∈(a,b): f'(c) = [f(b)-f(a)]/(b-a)", "f'(c) = 0", "f is constant", "f has a maximum"], a: 0, s: "Lagrange MVT: derivative at some c equals the average rate of change." },
      ],
      hard: [
        { q: 'The minimum value of f(x) = eˣ + e⁻ˣ is:', o: ['2', '1', '0', 'e'], a: 0, s: "f'(x) = eˣ - e⁻ˣ = 0 → eˣ = e⁻ˣ → x=0. f(0) = 1+1 = 2. f''(0)=2>0 → min." },
        { q: 'The function f(x) = x³ - 3x has point of inflection at:', o: ['x = 0', 'x = 1', 'x = -1', 'x = √3'], a: 0, s: "f''(x) = 6x = 0 → x = 0. Sign change of f'' confirms inflection at x = 0." },
        { q: 'The shortest distance from origin to curve y = eˣ/√2 is:', o: ['1', '1/√2', '√2', '1/2'], a: 0, s: 'D² = x² + e²ˣ/2. d(D²)/dx = 2x + e²ˣ. At min: 2x + e²ˣ = 0. At x = -1/2: check numerically → D = 1.' },
        { q: 'A rectangle inscribed in a circle of radius r has maximum area:', o: ['2r²', 'r²', 'πr²', '4r²'], a: 0, s: 'Maximum when rectangle is square with diagonal 2r. Side = r√2. Area = 2r².' },
        { q: 'Using Newton\'s approximation, the root near x₀ is:', o: ['x₁ = x₀ - f(x₀)/f\'(x₀)', 'x₁ = x₀ + f(x₀)', 'x₁ = f(x₀)', 'x₁ = x₀/f\'(x₀)'], a: 0, s: "Newton-Raphson: xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ). Iterative root-finding." },
      ],
    },
  ],
};

const integrals: ChapterData = {
  name: 'Integration',
  slug: 'integration',
  topics: [
    {
      name: 'Indefinite Integrals',
      slug: 'indefinite-integrals',
      easy: [
        { q: '∫xⁿ dx (n ≠ -1) =', o: ['xⁿ⁺¹/(n+1) + C', 'nxⁿ⁻¹ + C', 'xⁿ + C', 'xⁿ⁺¹ + C'], a: 0, s: 'Reverse of power rule: ∫xⁿdx = xⁿ⁺¹/(n+1) + C.' },
        { q: '∫cos x dx =', o: ['sin x + C', '-sin x + C', 'cos x + C', 'tan x + C'], a: 0, s: 'd/dx(sinx) = cosx, so ∫cosx dx = sinx + C.' },
        { q: '∫eˣ dx =', o: ['eˣ + C', 'xeˣ + C', 'eˣ/x + C', 'eˣ⁺¹ + C'], a: 0, s: 'eˣ is its own integral: ∫eˣdx = eˣ + C.' },
        { q: '∫(1/x) dx =', o: ['ln|x| + C', '1/x² + C', '-1/x + C', 'x ln x + C'], a: 0, s: '∫(1/x)dx = ln|x| + C. Note the absolute value.' },
        { q: '∫sec²x dx =', o: ['tan x + C', 'sec x + C', '-cot x + C', 'sin x + C'], a: 0, s: 'd/dx(tanx) = sec²x, so ∫sec²x dx = tanx + C.' },
      ],
      medium: [
        { q: '∫sin²x dx =', o: ['x/2 - sin(2x)/4 + C', '-cos²x + C', 'sin³x/3 + C', 'x - sinx cosx + C'], a: 0, s: 'Use identity: sin²x = (1-cos2x)/2. ∫ = x/2 - sin2x/4 + C.' },
        { q: '∫eˣ(f(x) + f\'(x)) dx =', o: ['eˣf(x) + C', 'eˣf\'(x) + C', 'f(x) + C', 'eˣ + f(x) + C'], a: 0, s: 'd/dx(eˣf(x)) = eˣf(x) + eˣf\'(x) = eˣ(f+f\'). So ∫eˣ(f+f\')dx = eˣf(x) + C.' },
        { q: '∫1/(x²+a²) dx =', o: ['(1/a)tan⁻¹(x/a) + C', 'tan⁻¹(x) + C', 'ln(x²+a²) + C', 'x/(x²+a²) + C'], a: 0, s: 'Standard: ∫1/(x²+a²)dx = (1/a)tan⁻¹(x/a) + C.' },
        { q: '∫1/√(a²-x²) dx =', o: ['sin⁻¹(x/a) + C', 'cos⁻¹(x/a) + C', 'tan⁻¹(x/a) + C', 'ln|x + √(a²-x²)| + C'], a: 0, s: 'Standard: ∫1/√(a²-x²)dx = sin⁻¹(x/a) + C.' },
        { q: 'Integration by parts formula is:', o: ['∫u dv = uv - ∫v du', '∫u dv = uv + ∫v du', '∫u dv = u\'v\'', '∫u dv = uv'], a: 0, s: 'IBP: ∫u dv = uv - ∫v du. Choose u by LIATE rule.' },
      ],
      hard: [
        { q: '∫x eˣ dx =', o: ['eˣ(x-1) + C', 'xeˣ + C', 'eˣ(x+1) + C', 'x²eˣ/2 + C'], a: 0, s: 'IBP: u=x, dv=eˣdx. = xeˣ - ∫eˣdx = xeˣ - eˣ + C = eˣ(x-1) + C.' },
        { q: '∫1/(x²-a²) dx =', o: ['(1/2a)ln|(x-a)/(x+a)| + C', '(1/a)tan⁻¹(x/a) + C', 'ln(x²-a²) + C', 'sin⁻¹(x/a) + C'], a: 0, s: 'Partial fractions: 1/(x²-a²) = 1/(2a)[1/(x-a) - 1/(x+a)]. Integrate to get log form.' },
        { q: '∫√(a²-x²) dx =', o: ['(x/2)√(a²-x²) + (a²/2)sin⁻¹(x/a) + C', 'sin⁻¹(x/a) + C', '-√(a²-x²) + C', '(2/3)(a²-x²)^(3/2) + C'], a: 0, s: 'Use trig substitution x = asinθ. Result has both algebraic and inverse trig parts.' },
        { q: '∫dx/(1 + eˣ) =', o: ['x - ln(1+eˣ) + C', 'ln(1+eˣ) + C', '-e⁻ˣ + C', 'ln(eˣ) + C'], a: 0, s: '∫1/(1+eˣ)dx = ∫(1+eˣ-eˣ)/(1+eˣ)dx = ∫dx - ∫eˣ/(1+eˣ)dx = x - ln(1+eˣ) + C.' },
        { q: '∫tan x dx =', o: ['-ln|cos x| + C', 'ln|sin x| + C', 'sec²x + C', '-cot x + C'], a: 0, s: '∫tanx dx = ∫sinx/cosx dx = -ln|cosx| + C = ln|secx| + C.' },
      ],
    },
    {
      name: 'Definite Integrals & Area',
      slug: 'definite-integrals-area',
      easy: [
        { q: '∫₀¹ x² dx =', o: ['1/3', '1/2', '1', '2/3'], a: 0, s: '[x³/3]₀¹ = 1/3 - 0 = 1/3.' },
        { q: 'The fundamental theorem of calculus states ∫ₐᵇ f(x)dx =', o: ['F(b) - F(a) where F\'=f', 'f(b) - f(a)', 'F(a) - F(b)', 'f(b) + f(a)'], a: 0, s: 'FTC: ∫ₐᵇ f(x)dx = F(b) - F(a) where F is antiderivative of f.' },
        { q: '∫₀^π sin x dx =', o: ['2', '0', '1', 'π'], a: 0, s: '[-cosx]₀^π = -cosπ - (-cos0) = 1 + 1 = 2.' },
        { q: 'Area under y = f(x), x-axis, from a to b (f≥0) is:', o: ['∫ₐᵇ f(x)dx', 'f(b)-f(a)', 'b-a', '∫ₐᵇ f\'(x)dx'], a: 0, s: 'Area = ∫ₐᵇ f(x)dx when f(x) ≥ 0 on [a,b].' },
        { q: '∫₋₁¹ x³ dx =', o: ['0', '1/4', '1/2', '-1/4'], a: 0, s: 'x³ is odd function. ∫₋ₐᵃ (odd function) dx = 0.' },
      ],
      medium: [
        { q: 'If f(x) is even, ∫₋ₐᵃ f(x)dx =', o: ['2∫₀ᵃ f(x)dx', '0', '∫₀ᵃ f(x)dx', 'Cannot determine'], a: 0, s: 'Even: f(-x)=f(x). ∫₋ₐᵃ = 2∫₀ᵃ by symmetry.' },
        { q: 'King\'s property: ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx. Using this, ∫₀^(π/2) sinx/(sinx+cosx) dx =', o: ['π/4', 'π/2', '1', '0'], a: 0, s: 'I = ∫₀^(π/2) sinx/(sinx+cosx)dx. By King: I = ∫₀^(π/2) cosx/(cosx+sinx)dx. 2I = ∫₀^(π/2) 1 dx = π/2 → I = π/4.' },
        { q: 'Area between y = x² and y = x from 0 to 1 is:', o: ['1/6', '1/3', '1/2', '1/4'], a: 0, s: '∫₀¹ (x - x²)dx = [x²/2 - x³/3]₀¹ = 1/2 - 1/3 = 1/6.' },
        { q: '∫₀^(2π) |sin x| dx =', o: ['4', '0', '2', '2π'], a: 0, s: '|sinx| is non-negative. ∫₀^π sinx dx = 2. By symmetry, over [0,2π]: 2×2 = 4.' },
        { q: 'Leibniz rule: d/dx ∫₀ˣ f(t)dt =', o: ['f(x)', "∫₀ˣ f'(t)dt", 'f(0)', 'xf(x)'], a: 0, s: 'By FTC Part 1: d/dx ∫₀ˣ f(t)dt = f(x).' },
      ],
      hard: [
        { q: 'Wallis formula: ∫₀^(π/2) sin^n(x) dx for n even = (n-1)!!/(n!!)) · π/2. For n=4:', o: ['3π/16', 'π/4', '3/8', '3π/8'], a: 0, s: '∫₀^(π/2) sin⁴x dx = (3·1)/(4·2) · π/2 = 3/8 · π/2 = 3π/16.' },
        { q: 'Area enclosed by ellipse x²/a² + y²/b² = 1 is:', o: ['πab', 'π(a+b)', '2πab', 'πa²b²'], a: 0, s: 'y = b√(1-x²/a²). A = 4∫₀ᵃ b√(1-x²/a²)dx = πab.' },
        { q: '∫₀^∞ e⁻ˣ dx =', o: ['1', '∞', '0', 'e'], a: 0, s: '[-e⁻ˣ]₀^∞ = 0-(-1) = 1. Improper integral converges to 1.' },
        { q: 'The integral ∫₀¹ ln(x) dx =', o: ['-1', '0', '1', '∞'], a: 0, s: 'IBP: ∫lnx dx = xlnx - x. [xlnx-x]₀¹ = (0-1) - lim(xlnx-x) = -1-0 = -1.' },
        { q: 'Volume of revolution of y = f(x) about x-axis from a to b (disc method) is:', o: ['π∫ₐᵇ [f(x)]² dx', '2π∫ₐᵇ f(x)dx', '∫ₐᵇ f(x)dx', 'π[f(b)]²-π[f(a)]²'], a: 0, s: 'Disc: V = π∫ₐᵇ y² dx. Cross-section area = πy².' },
      ],
    },
  ],
};

const diffEq: ChapterData = {
  name: 'Differential Equations',
  slug: 'differential-equations',
  topics: [
    {
      name: 'Formation & Solution of ODEs',
      slug: 'ode-solutions',
      easy: [
        { q: 'The order of the DE d²y/dx² + dy/dx + y = 0 is:', o: ['2', '1', '3', '0'], a: 0, s: 'Order = highest derivative present = 2.' },
        { q: 'The degree of the DE (dy/dx)³ + y = x is:', o: ['3', '1', '2', 'Not defined'], a: 0, s: 'Degree = power of highest order derivative = 3 (after making polynomial).' },
        { q: 'The solution of dy/dx = x is:', o: ['y = x²/2 + C', 'y = x + C', 'y = 2x + C', 'y = x²'], a: 0, s: 'Separate and integrate: y = ∫x dx = x²/2 + C.' },
        { q: 'A separable DE is of the form:', o: ['dy/dx = f(x)g(y)', 'dy/dx = x + y', 'dy/dx = xy + x²', 'd²y/dx² = f(x)'], a: 0, s: 'Separable: variables can be separated to each side. dy/g(y) = f(x)dx.' },
        { q: 'The number of arbitrary constants in the general solution of an nth order ODE is:', o: ['n', '1', '0', '2n'], a: 0, s: 'General solution has n arbitrary constants for nth order ODE.' },
      ],
      medium: [
        { q: 'A linear first-order ODE is of the form:', o: ['dy/dx + P(x)y = Q(x)', 'dy/dx = y²', 'dy/dx = xy²', 'd²y/dx² + y = 0'], a: 0, s: 'Linear 1st order: dy/dx + P(x)y = Q(x). Solved by integrating factor.' },
        { q: 'The integrating factor for dy/dx + P(x)y = Q(x) is:', o: ['e^(∫P(x)dx)', 'P(x)', '1/P(x)', 'e^P'], a: 0, s: 'IF = e^(∫Pdx). Multiply through: d/dx(y·IF) = Q·IF.' },
        { q: 'The DE dy/dx = y/x is solved to give:', o: ['y = Cx', 'y = x + C', 'y = C/x', 'y = Ceˣ'], a: 0, s: 'dy/y = dx/x. ln|y| = ln|x| + lnC → y = Cx.' },
        { q: 'The DE dy/dx = eˣ⁺ʸ can be written as:', o: ['dy/dx = eˣ·eʸ (separable)', 'dy/dx = e^(x+y) (non-separable)', 'A linear DE', 'A homogeneous DE'], a: 0, s: 'eˣ⁺ʸ = eˣ·eʸ → separable: e⁻ʸdy = eˣdx → -e⁻ʸ = eˣ + C.' },
        { q: 'A homogeneous DE dy/dx = f(y/x) is solved by substitution:', o: ['y = vx (where v = y/x)', 'y = eˣ', 'x = vy', 'y = x + v'], a: 0, s: 'Put y = vx → dy/dx = v + xdv/dx. Reduces to separable in x and v.' },
      ],
      hard: [
        { q: 'The DE (x² + y²)dx + 2xy dy = 0 is exact because:', o: ['∂M/∂y = ∂N/∂x (both equal 2y)', '∂M/∂x = ∂N/∂y', 'M = N', 'It is separable'], a: 0, s: 'M = x²+y², N = 2xy. ∂M/∂y = 2y = ∂N/∂x = 2y. Exact!' },
        { q: 'The solution of dy/dx + y = eˣ using IF is:', o: ['y = eˣ/2 + Ce⁻ˣ', 'y = eˣ + C', 'y = Ce⁻ˣ', 'y = eˣ/2'], a: 0, s: 'IF = eˣ. d(yeˣ)/dx = e²ˣ. yeˣ = e²ˣ/2 + C. y = eˣ/2 + Ce⁻ˣ.' },
        { q: 'The orthogonal trajectories of y = cx² are:', o: ['x² + 2y² = k (ellipses)', 'y = kx²', 'y = k/x', 'y² + x² = k'], a: 0, s: 'y = cx² → c = y/x². dy/dx = 2cx = 2y/x. OT: dy/dx = -x/(2y) → x² + 2y² = k.' },
        { q: 'The general solution of d²y/dx² - y = 0 is:', o: ['y = Aeˣ + Be⁻ˣ', 'y = Asinx + Bcosx', 'y = (A+Bx)eˣ', 'y = Ae²ˣ + Be⁻²ˣ'], a: 0, s: 'Characteristic eq: m²-1 = 0 → m = ±1. y = Aeˣ + Be⁻ˣ.' },
        { q: 'Clairaut\'s equation y = xy\' + f(y\') has:', o: ['General solution y = cx + f(c) and a singular solution', 'Only one solution', 'No solution', 'Only particular solutions'], a: 0, s: 'Clairaut: GS is y = cx + f(c) (family of lines). Singular solution is envelope.' },
      ],
    },
  ],
};

export const calculusChapters: ChapterData[] = [
  limits,
  derivatives,
  integrals,
  diffEq,
];
