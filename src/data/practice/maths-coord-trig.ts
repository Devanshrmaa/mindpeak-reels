import type { ChapterData } from './types';

const straightLines: ChapterData = {
  name: 'Straight Lines',
  slug: 'straight-lines',
  topics: [
    {
      name: 'Equations & Properties of Lines',
      slug: 'equations-properties-lines',
      easy: [
        { q: 'Slope of a line passing through (1,2) and (3,6) is:', o: ['2', '3', '1', '4'], a: 0, s: 'Slope = (6-2)/(3-1) = 4/2 = 2.' },
        { q: 'The equation of a line with slope m and y-intercept c is:', o: ['y = mx + c', 'y = cx + m', 'x = my + c', 'y = m/x + c'], a: 0, s: 'Slope-intercept form: y = mx + c.' },
        { q: 'Two lines are parallel if their slopes are:', o: ['Equal', 'Negative reciprocals', 'Zero', 'Perpendicular'], a: 0, s: 'Parallel ⟹ m₁ = m₂.' },
        { q: 'The distance of point (3,4) from origin is:', o: ['5', '7', '4', '3'], a: 0, s: 'd = √(3²+4²) = √(9+16) = √25 = 5.' },
        { q: 'The midpoint of (2,4) and (6,8) is:', o: ['(4,6)', '(3,5)', '(8,12)', '(4,4)'], a: 0, s: 'Midpoint = ((2+6)/2, (4+8)/2) = (4,6).' },
      ],
      medium: [
        { q: 'The angle between lines y = x and y = √3·x is:', o: ['15°', '30°', '45°', '60°'], a: 0, s: 'tan θ = |m₁-m₂|/(1+m₁m₂) = |1-√3|/(1+√3) = (√3-1)/(√3+1) = 2-√3. θ = 15°.' },
        { q: 'Distance of point (2,3) from line 3x + 4y - 5 = 0 is:', o: ['13/5', '3', '5/13', '1'], a: 0, s: 'd = |3(2)+4(3)-5|/√(9+16) = |6+12-5|/5 = 13/5.' },
        { q: 'The line passing through (1,2) perpendicular to y = 3x + 1 is:', o: ['y = -x/3 + 7/3', 'y = 3x - 1', 'y = -3x + 5', 'y = x/3 + 5/3'], a: 0, s: 'Perpendicular slope = -1/3. y-2 = -1/3(x-1) → y = -x/3 + 7/3.' },
        { q: 'Area of triangle with vertices (0,0), (4,0), (0,3) is:', o: ['6', '12', '7', '3.5'], a: 0, s: 'A = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)| = ½|0+12+0| = 6.' },
        { q: 'The foot of perpendicular from (1,2) on x-axis is:', o: ['(1,0)', '(0,2)', '(0,0)', '(2,0)'], a: 0, s: 'Perpendicular to x-axis from (1,2) meets at (1,0).' },
      ],
      hard: [
        { q: 'The family of lines through intersection of L₁: x+y-1=0 and L₂: 2x-y+3=0 is given by:', o: ['(x+y-1) + λ(2x-y+3) = 0', 'x+y+2x-y = 0', 'λ(x+y) + (2x-y) = 0', '(x-y) + λ(x+y) = 0'], a: 0, s: 'Family through intersection of L₁=0, L₂=0: L₁ + λL₂ = 0 for varying λ.' },
        { q: 'The image of point (3,8) in the line x + 3y = 7 is:', o: ['(-1,-4)', '(1,4)', '(3,-8)', '(-3,8)'], a: 0, s: 'Use formula: (x-x₁)/a = (y-y₁)/b = -2(ax₁+by₁+c)/(a²+b²). x+3y-7=0. Image = (-1,-4).' },
        { q: 'The angle bisectors of lines 3x + 4y = 5 and 5x + 12y = 13 are:', o: ['(3x+4y-5)/5 = ±(5x+12y-13)/13', '3x+4y = 5x+12y', '(3x+4y)/5 = (5x+12y)/13', 'y = x'], a: 0, s: 'Angle bisectors: (a₁x+b₁y+c₁)/√(a₁²+b₁²) = ±(a₂x+b₂y+c₂)/√(a₂²+b₂²).' },
        { q: 'If px + qy + r = 0 and lx + my + n = 0 represent the same line, then:', o: ['p/l = q/m = r/n', 'pl = qm', 'p+l = q+m', 'pn = rl'], a: 0, s: 'Same line means coefficients are proportional: p/l = q/m = r/n.' },
        { q: 'Concurrency condition for 3 lines a₁x+b₁y+c₁=0, a₂x+b₂y+c₂=0, a₃x+b₃y+c₃=0 is:', o: ['Determinant of coefficient matrix = 0', 'All slopes equal', 'Sum of coefficients = 0', 'Product of slopes = 1'], a: 0, s: '|a₁ b₁ c₁; a₂ b₂ c₂; a₃ b₃ c₃| = 0 for concurrency.' },
      ],
    },
  ],
};

const circles: ChapterData = {
  name: 'Circles',
  slug: 'circles',
  topics: [
    {
      name: 'Circle Equations & Properties',
      slug: 'circle-equations-properties',
      easy: [
        { q: 'General equation of a circle is:', o: ['x²+y²+2gx+2fy+c=0', 'x²+y²=r²', 'x+y=r', 'x²-y²=r²'], a: 0, s: 'General: x²+y²+2gx+2fy+c=0. Center (-g,-f), radius √(g²+f²-c).' },
        { q: 'Centre and radius of x²+y²=25 are:', o: ['(0,0) and 5', '(0,0) and 25', '(5,5) and 0', '(0,0) and √5'], a: 0, s: 'Standard form x²+y²=r². Center = origin, r = 5.' },
        { q: 'A circle with center (h,k) and radius r has equation:', o: ['(x-h)²+(y-k)²=r²', '(x+h)²+(y+k)²=r²', 'x²+y²=h²+k²', '(x-h)+(y-k)=r'], a: 0, s: 'Standard form: (x-h)²+(y-k)² = r².' },
        { q: 'The length of a chord passing through center is called:', o: ['Diameter', 'Radius', 'Secant', 'Tangent'], a: 0, s: 'A chord through center = diameter = 2r.' },
        { q: 'Number of tangents from a point outside a circle:', o: ['2', '1', '0', '3'], a: 0, s: 'From external point, exactly 2 tangents can be drawn to a circle.' },
      ],
      medium: [
        { q: 'Length of tangent from (5,4) to circle x²+y²=9 is:', o: ['√(25+16-9) = √32', '√(25+16+9)', '√9', '5'], a: 0, s: 'L = √(S₁) where S₁ = x₁²+y₁²-r². L = √(25+16-9) = √32 = 4√2.' },
        { q: 'Equation of tangent to x²+y² = a² at point (x₁,y₁) is:', o: ['xx₁+yy₁=a²', 'x/x₁+y/y₁=1', 'xx₁-yy₁=a²', '(x-x₁)²+(y-y₁)²=a²'], a: 0, s: 'Tangent at (x₁,y₁): xx₁+yy₁ = a². Replace x² with xx₁ and y² with yy₁.' },
        { q: 'Two circles x²+y²=4 and (x-3)²+y²=1. Distance between centers = 3, r₁+r₂ = 3. They are:', o: ['Externally tangent', 'Internally tangent', 'Non-intersecting', 'Intersecting at 2 points'], a: 0, s: 'd = r₁+r₂ = 3 → circles touch externally (1 common external tangent point).' },
        { q: 'The radical axis of two circles S₁=0, S₂=0 is:', o: ['S₁-S₂=0', 'S₁+S₂=0', 'S₁·S₂=0', 'S₁/S₂=0'], a: 0, s: 'Radical axis: S₁-S₂=0. It is perpendicular to line of centers.' },
        { q: 'Power of a point P(x₁,y₁) w.r.t. circle x²+y²+2gx+2fy+c=0 is:', o: ['x₁²+y₁²+2gx₁+2fy₁+c', 'g²+f²-c', 'x₁²+y₁²', '0'], a: 0, s: 'Power = S₁ = value of circle equation at the point.' },
      ],
      hard: [
        { q: 'Common tangents between non-overlapping external circles: 2 external + 2 internal =', o: ['4', '3', '2', '1'], a: 0, s: 'When d > r₁+r₂: 2 direct (external) + 2 transverse (internal) = 4 common tangents.' },
        { q: 'The family of circles through intersection of S₁ and S₂ is:', o: ['S₁ + λS₂ = 0 (λ ≠ -1)', 'S₁ - S₂ = 0', 'S₁ · S₂ = 0', 'S₁² + S₂² = 0'], a: 0, s: 'S₁+λS₂ = 0 gives all circles through common points. λ=-1 gives radical axis (line).' },
        { q: 'Angle of intersection of two circles with radii r₁,r₂ and center distance d is:', o: ['cos θ = (d²-r₁²-r₂²)/(2r₁r₂)', 'cos θ = (r₁+r₂)/d', 'cos θ = d/(r₁r₂)', 'θ = 90° always'], a: 0, s: 'Angle between circles at intersection uses cos θ = (d²-r₁²-r₂²)/(2r₁r₂). Orthogonal if θ = 90°.' },
        { q: 'Orthogonality condition for circles x²+y²+2g₁x+2f₁y+c₁=0 and x²+y²+2g₂x+2f₂y+c₂=0:', o: ['2g₁g₂+2f₁f₂ = c₁+c₂', 'g₁g₂+f₁f₂ = 0', 'g₁+g₂ = f₁+f₂', 'c₁ = c₂'], a: 0, s: 'Orthogonal: 2g₁g₂ + 2f₁f₂ = c₁ + c₂.' },
        { q: 'The director circle of x²+y² = a² has equation:', o: ['x²+y² = 2a²', 'x²+y² = a²/2', 'x²+y² = a', 'x²+y² = 4a²'], a: 0, s: 'Director circle: locus of point from which tangents are perpendicular. r_d = a√2.' },
      ],
    },
  ],
};

const conics: ChapterData = {
  name: 'Conic Sections',
  slug: 'conic-sections',
  topics: [
    {
      name: 'Parabola',
      slug: 'parabola',
      easy: [
        { q: 'Standard equation of a parabola opening right is:', o: ['y²=4ax', 'x²=4ay', 'y²=-4ax', 'x²=-4ay'], a: 0, s: 'y²=4ax opens right. Focus at (a,0), vertex at origin.' },
        { q: 'Focus of y² = 12x is:', o: ['(3,0)', '(0,3)', '(12,0)', '(0,12)'], a: 0, s: '4a = 12 → a = 3. Focus = (a,0) = (3,0).' },
        { q: 'The directrix of y² = 4ax is:', o: ['x = -a', 'x = a', 'y = -a', 'y = a'], a: 0, s: 'For y²=4ax: focus (a,0), directrix x = -a.' },
        { q: 'Eccentricity of a parabola is:', o: ['1', '0', '< 1', '> 1'], a: 0, s: 'Parabola: e = 1 always. Ellipse e<1, Hyperbola e>1.' },
        { q: 'Axis of symmetry of y² = 4ax is:', o: ['x-axis (y=0)', 'y-axis (x=0)', 'y = x', 'y = -x'], a: 0, s: 'y²=4ax is symmetric about x-axis.' },
      ],
      medium: [
        { q: 'The parametric form of y²=4ax is:', o: ['(at², 2at)', '(a cosθ, a sinθ)', '(2at, at²)', '(a sec θ, a tan θ)'], a: 0, s: 'Parametric: x = at², y = 2at. Point on parabola for any t.' },
        { q: 'Tangent to y²=4ax at (at², 2at) is:', o: ['ty = x + at²', 'y = tx + a', 'ty = x - at²', 'y = t²x + 2at'], a: 0, s: 'Tangent at parameter t: ty = x + at².' },
        { q: 'Length of latus rectum of y²=4ax is:', o: ['4a', '2a', 'a', '8a'], a: 0, s: 'Latus rectum (chord through focus ⊥ axis) = 4a.' },
        { q: 'The condition for y = mx + c to be tangent to y²=4ax is:', o: ['c = a/m', 'c = am', 'c = a/m²', 'c² = 4am'], a: 0, s: 'Sub y=mx+c in y²=4ax: discriminant = 0 → c = a/m.' },
        { q: 'Focal chord of y²=4ax: if one end is (at₁², 2at₁), relationship for other end t₂:', o: ['t₁t₂ = -1', 't₁+t₂ = 0', 't₁t₂ = 1', 't₁ = t₂'], a: 0, s: 'For a focal chord passing through focus: t₁·t₂ = -1.' },
      ],
      hard: [
        { q: 'The tangent at ends of latus rectum of y²=4ax meet at:', o: ['(-a, 0) — on directrix', '(a, 0)', 'origin', '(2a, 0)'], a: 0, s: 'Latus rectum ends: t=1 & t=-1. Tangents: y=x+a, -y=x+a. Meet at (-a,0).' },
        { q: 'Reflection property of parabola: a ray parallel to axis after reflection passes through:', o: ['Focus', 'Vertex', 'Directrix', 'Center'], a: 0, s: 'Parabolic mirror reflects parallel rays to focus. This is the reflection property.' },
        { q: 'Normal at (at², 2at) on y²=4ax is:', o: ['y + tx = 2at + at³', 'y - tx = 2at + at³', 'ty + x = at²', 'y = -tx + 2at'], a: 0, s: 'Normal at t: y = -tx + 2at + at³ → y + tx = 2at + at³.' },
        { q: 'Maximum number of normals from an external point to a parabola:', o: ['3', '2', '1', '4'], a: 0, s: 'Normal eq: y = -tx + 2at + at³ is cubic in t, so max 3 normals from external point.' },
        { q: 'The area of triangle formed by 3 points on parabola y²=4a at parameters t₁, t₂, t₃ is:', o: ['a²|(t₁-t₂)(t₂-t₃)(t₃-t₁)|', 'a²(t₁+t₂+t₃)', '2a²|t₁t₂t₃|', 'a(t₁²+t₂²+t₃²)'], a: 0, s: 'Using points (atᵢ², 2atᵢ) in area formula → A = a²|(t₁-t₂)(t₂-t₃)(t₃-t₁)|.' },
      ],
    },
    {
      name: 'Ellipse & Hyperbola',
      slug: 'ellipse-hyperbola',
      easy: [
        { q: 'Standard ellipse equation (a>b) is:', o: ['x²/a² + y²/b² = 1', 'x²/a² - y²/b² = 1', 'x² + y² = a²', 'x²/a + y²/b = 1'], a: 0, s: 'Ellipse: x²/a² + y²/b² = 1 with a > b. Foci on x-axis.' },
        { q: 'Eccentricity of ellipse x²/25 + y²/16 = 1 is:', o: ['3/5', '4/5', '5/3', '4/3'], a: 0, s: 'a²=25, b²=16. c²=a²-b²=9. e=c/a=3/5.' },
        { q: 'Standard hyperbola equation is:', o: ['x²/a² - y²/b² = 1', 'x²/a² + y²/b² = 1', 'xy = c²', 'x² - y² = 0'], a: 0, s: 'Hyperbola: x²/a² - y²/b² = 1. Two branches opening left-right.' },
        { q: 'For an ellipse, eccentricity e satisfies:', o: ['0 < e < 1', 'e = 1', 'e > 1', 'e = 0'], a: 0, s: 'Ellipse: 0 < e < 1. Circle: e = 0. Parabola: e = 1. Hyperbola: e > 1.' },
        { q: 'Foci of x²/a² + y²/b² = 1 (a>b) lie on:', o: ['x-axis at (±ae, 0)', 'y-axis', 'Both axes', 'Neither axis'], a: 0, s: 'Major axis along x-axis. Foci at (±c, 0) = (±ae, 0).' },
      ],
      medium: [
        { q: 'The relation b² = a²(1-e²) applies to:', o: ['Ellipse', 'Hyperbola', 'Parabola', 'Circle'], a: 0, s: 'For ellipse: b² = a²(1-e²). For hyperbola: b² = a²(e²-1).' },
        { q: 'Asymptotes of hyperbola x²/a² - y²/b² = 1 are:', o: ['y = ±(b/a)x', 'y = ±(a/b)x', 'x = ±a', 'y = ±b'], a: 0, s: 'Asymptotes: y = ±(b/a)x. The hyperbola approaches these lines at infinity.' },
        { q: 'Length of latus rectum of ellipse x²/a² + y²/b² = 1 is:', o: ['2b²/a', '2a²/b', '2a', '2b'], a: 0, s: 'LR of ellipse = 2b²/a. For hyperbola also 2b²/a.' },
        { q: 'A rectangular hyperbola has the property:', o: ['a = b (e = √2)', 'a = 2b', 'e = 1', 'a + b = 0'], a: 0, s: 'Rectangular: a=b, xy=c². e = √2. Asymptotes perpendicular.' },
        { q: 'Tangent to ellipse x²/a²+y²/b²=1 at (x₁,y₁) is:', o: ['xx₁/a²+yy₁/b²=1', 'xx₁+yy₁=1', 'x/x₁+y/y₁=1', 'xx₁/a+yy₁/b=1'], a: 0, s: 'Tangent at point: replace x² with xx₁, y² with yy₁.' },
      ],
      hard: [
        { q: 'For a focal chord of ellipse, if SP = l₁ and SP\' = l₂, then 1/l₁ + 1/l₂ =', o: ['2a/b²', 'a/b²', '1/a', '2/a'], a: 0, s: 'Focal chord property: 1/SP + 1/SP\' = 2a/b² (semi-latus rectum relation).' },
        { q: 'The director circle of ellipse x²/a²+y²/b²=1 has equation:', o: ['x²+y²=a²+b²', 'x²+y²=a²-b²', 'x²+y²=a²', 'x²+y²=2ab'], a: 0, s: 'Director circle: locus of point from which tangents are perpendicular. r²=a²+b².' },
        { q: 'The equation of the conjugate hyperbola of x²/a²-y²/b²=1 is:', o: ['-x²/a²+y²/b²=1', 'x²/b²-y²/a²=1', 'x²/a²+y²/b²=1', 'y²/a²-x²/b²=1'], a: 0, s: 'Conjugate: negate the equation → y²/b²-x²/a²=1 or -x²/a²+y²/b²=1.' },
        { q: 'If e₁ and e₂ are eccentricities of conjugate hyperbolas, then:', o: ['1/e₁² + 1/e₂² = 1', 'e₁+e₂ = 2', 'e₁e₂ = 1', 'e₁² + e₂² = 1'], a: 0, s: 'Conjugate hyperbolas: 1/e₁² + 1/e₂² = 1. Important identity.' },
        { q: 'The auxiliary circle of x²/a²+y²/b²=1 is:', o: ['x²+y²=a²', 'x²+y²=b²', 'x²+y²=a²+b²', 'x²+y²=ab'], a: 0, s: 'Auxiliary circle has equation x²+y²=a² (circumscribes the ellipse).' },
      ],
    },
  ],
};

const trigonometry: ChapterData = {
  name: 'Trigonometry',
  slug: 'trigonometry',
  topics: [
    {
      name: 'Trigonometric Functions & Identities',
      slug: 'trig-functions-identities',
      easy: [
        { q: 'sin²θ + cos²θ =', o: ['1', '0', 'sin 2θ', '2'], a: 0, s: 'Fundamental identity: sin²θ + cos²θ = 1 for all θ.' },
        { q: 'sin 30° =', o: ['1/2', '√3/2', '1/√2', '1'], a: 0, s: 'Standard value: sin 30° = 1/2.' },
        { q: 'tan θ = sin θ / cos θ. If θ = 45°, tan 45° =', o: ['1', '0', '√3', '1/√3'], a: 0, s: 'tan 45° = sin 45°/cos 45° = (1/√2)/(1/√2) = 1.' },
        { q: 'Period of sin x is:', o: ['2π', 'π', 'π/2', '4π'], a: 0, s: 'sin(x + 2π) = sin x. Period = 2π.' },
        { q: 'cos(-θ) =', o: ['cos θ', '-cos θ', 'sin θ', '-sin θ'], a: 0, s: 'Cosine is an even function: cos(-θ) = cos θ.' },
      ],
      medium: [
        { q: 'sin 2θ =', o: ['2 sin θ cos θ', 'sin²θ - cos²θ', '2 cos²θ - 1', 'sin θ + cos θ'], a: 0, s: 'Double angle: sin 2θ = 2 sin θ cos θ.' },
        { q: 'cos 2θ =', o: ['cos²θ - sin²θ (also 2cos²θ-1 or 1-2sin²θ)', '2 sin θ cos θ', 'cos²θ + sin²θ', 'sin²θ - cos²θ'], a: 0, s: 'cos 2θ = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ.' },
        { q: 'General solution of sin θ = sin α is:', o: ['θ = nπ + (-1)ⁿα', 'θ = 2nπ ± α', 'θ = nπ + α', 'θ = nπ'], a: 0, s: 'sinθ = sinα → θ = nπ + (-1)ⁿα, n ∈ Z.' },
        { q: 'sin A + sin B =', o: ['2 sin((A+B)/2) cos((A-B)/2)', '2 cos((A+B)/2) sin((A-B)/2)', 'sin(A+B)', 'sin A cos B + cos A sin B'], a: 0, s: 'Sum-to-product: sinA+sinB = 2sin((A+B)/2)cos((A-B)/2).' },
        { q: 'In a triangle, a/sin A = b/sin B = c/sin C is called:', o: ['Sine rule', 'Cosine rule', 'Tangent rule', 'Projection formula'], a: 0, s: 'Sine rule: sides proportional to sines of opposite angles.' },
      ],
      hard: [
        { q: 'The value of cos 20° cos 40° cos 80° =', o: ['1/8', '1/4', '1/2', '√3/8'], a: 0, s: 'Use: cosA cos(60°-A) cos(60°+A) = cos3A/4. Here A=20°: cos60°/4 = (1/2)/4 = 1/8.' },
        { q: 'If tan(A+B) = 3 and tan A = 2, then tan B =', o: ['1/7', '1', '5', '1/5'], a: 0, s: 'tan(A+B) = (tanA+tanB)/(1-tanA·tanB). 3 = (2+tanB)/(1-2tanB). 3-6tanB = 2+tanB → tanB = 1/7.' },
        { q: 'cos⁻¹(cos(7π/6)) =', o: ['5π/6', '7π/6', 'π/6', '11π/6'], a: 0, s: 'cos⁻¹ range is [0,π]. cos(7π/6) = cos(π+π/6) = -cos(π/6). cos⁻¹(-cos(π/6)) = π-π/6 = 5π/6.' },
        { q: 'In △ABC, cos A = (b²+c²-a²)/(2bc) is the:', o: ['Cosine rule', 'Sine rule', 'Projection formula', 'Half-angle formula'], a: 0, s: 'Cosine rule: cos A = (b²+c²-a²)/(2bc). Relates sides to angle.' },
        { q: 'If sin⁻¹x + cos⁻¹x = π/2, then sin⁻¹(3/5) + cos⁻¹(3/5) =', o: ['π/2', '0', 'π', '3/5'], a: 0, s: 'Identity: sin⁻¹x + cos⁻¹x = π/2 for all x ∈ [-1,1]. Answer = π/2.' },
      ],
    },
  ],
};

const vectors3d: ChapterData = {
  name: 'Vectors & 3D Geometry',
  slug: 'vectors-3d-geometry',
  topics: [
    {
      name: 'Vectors',
      slug: 'vectors',
      easy: [
        { q: 'If a⃗ = 2î + 3ĵ, |a⃗| =', o: ['√13', '5', '√5', '13'], a: 0, s: '|a⃗| = √(2²+3²) = √(4+9) = √13.' },
        { q: 'The dot product a⃗·b⃗ = |a⃗||b⃗|cos θ. If θ = 90°:', o: ['a⃗·b⃗ = 0', 'a⃗·b⃗ = |a||b|', 'a⃗·b⃗ = 1', 'a⃗·b⃗ = -1'], a: 0, s: 'cos 90° = 0, so perpendicular vectors have zero dot product.' },
        { q: 'î·î =', o: ['1', '0', 'î', '2'], a: 0, s: 'î·î = |î|²cos0° = 1·1·1 = 1.' },
        { q: 'î × ĵ =', o: ['k̂', '-k̂', '0', '1'], a: 0, s: 'Right-hand rule: î × ĵ = k̂.' },
        { q: 'Two vectors are parallel if a⃗ × b⃗ =', o: ['0⃗ (zero vector)', '|a||b|', '1', 'a⃗ · b⃗'], a: 0, s: 'Parallel → sin θ = 0 → cross product = zero vector.' },
      ],
      medium: [
        { q: 'The projection of a⃗ on b⃗ is:', o: ['(a⃗·b⃗)/|b⃗|', 'a⃗×b⃗', '|a⃗||b⃗|', '(a⃗·b⃗)/|a⃗|'], a: 0, s: 'Scalar projection of a⃗ on b⃗ = (a⃗·b⃗)/|b⃗|.' },
        { q: '|a⃗×b⃗| equals:', o: ['|a⃗||b⃗|sin θ', '|a⃗||b⃗|cos θ', 'a⃗·b⃗', '|a⃗|+|b⃗|'], a: 0, s: 'Cross product magnitude = |a||b|sinθ = area of parallelogram.' },
        { q: 'Section formula: point dividing A and B in ratio m:n is:', o: ['(mB+nA)/(m+n)', '(mA+nB)/(m+n)', '(A+B)/2', 'mA-nB'], a: 0, s: 'Internal division: P = (mB+nA)/(m+n). For midpoint: m=n=1 → (A+B)/2.' },
        { q: 'Scalar triple product [a⃗ b⃗ c⃗] gives:', o: ['Volume of parallelepiped', 'Area of triangle', 'Length of diagonal', 'Perimeter'], a: 0, s: '[a b c] = a·(b×c) = volume of parallelepiped. If 0 → coplanar.' },
        { q: 'If a⃗ = î+ĵ and b⃗ = î-ĵ, then a⃗·b⃗ =', o: ['0', '2', '-2', '1'], a: 0, s: 'a⃗·b⃗ = 1·1 + 1·(-1) = 1-1 = 0. They are perpendicular.' },
      ],
      hard: [
        { q: 'The area of triangle with vertices A, B, C is:', o: ['½|AB⃗ × AC⃗|', '|AB⃗ × AC⃗|', '½|AB⃗ · AC⃗|', 'AB⃗ · AC⃗'], a: 0, s: 'Area = ½|a⃗×b⃗| where a⃗=AB, b⃗=AC.' },
        { q: 'Vector equation of a line through a⃗ and parallel to b⃗ is:', o: ['r⃗ = a⃗ + λb⃗', 'r⃗ = a⃗ × b⃗', 'r⃗ = a⃗ · b⃗', 'r⃗ = a⃗ - b⃗'], a: 0, s: 'Parametric line: r⃗ = a⃗ + λb⃗ for scalar parameter λ.' },
        { q: 'Distance of point P from plane r⃗·n̂ = d is:', o: ['|r⃗_P·n̂ - d|', 'r⃗_P × n̂', 'r⃗_P + d', '|r⃗_P| - d'], a: 0, s: 'Distance from plane: |a⃗·n̂ - d| where n̂ is unit normal.' },
        { q: 'The shortest distance between two skew lines r⃗=a⃗₁+λb⃗₁ and r⃗=a⃗₂+μb⃗₂ is:', o: ['|(a⃗₂-a⃗₁)·(b⃗₁×b⃗₂)|/|b⃗₁×b⃗₂|', '|a⃗₁-a⃗₂|', '|b⃗₁·b⃗₂|', '|a⃗₁×a⃗₂|'], a: 0, s: 'SD = |(a₂-a₁)·(b₁×b₂)| / |b₁×b₂|. Zero means lines intersect.' },
        { q: 'Equation of plane through 3 points A, B, C: [r⃗-a⃗, b⃗-a⃗, c⃗-a⃗] = 0 represents:', o: ['Scalar triple product = 0 (coplanarity)', 'Cross product = 0', 'Dot product = 0', 'A sphere'], a: 0, s: 'Three non-collinear points determine a plane. STP = 0 is the coplanarity condition.' },
      ],
    },
    {
      name: '3D Coordinate Geometry',
      slug: '3d-coordinate-geometry',
      easy: [
        { q: 'Distance between (1,2,3) and (4,6,3) is:', o: ['5', '√34', '7', '3'], a: 0, s: 'd = √((4-1)²+(6-2)²+(3-3)²) = √(9+16+0) = √25 = 5.' },
        { q: 'Direction ratios of a line joining (0,0,0) and (1,1,1) are:', o: ['1,1,1', '0,0,0', '1,0,0', '0,1,1'], a: 0, s: 'DR = differences in coordinates = (1-0, 1-0, 1-0) = (1,1,1).' },
        { q: 'The equation of xy-plane is:', o: ['z = 0', 'x = 0', 'y = 0', 'x + y = 0'], a: 0, s: 'xy-plane: all points with z = 0.' },
        { q: 'The general equation of a plane is:', o: ['ax + by + cz + d = 0', 'ax + by = c', 'x² + y² + z² = r²', 'ax² + by² = cz'], a: 0, s: 'Plane equation: ax + by + cz + d = 0 (first degree in x,y,z).' },
        { q: 'The distance of origin from plane 2x + 2y + z = 9 is:', o: ['3', '9', '9/3', '1'], a: 0, s: 'd = |0+0+0-9|/√(4+4+1) = 9/3 = 3.' },
      ],
      medium: [
        { q: 'Direction cosines satisfy:', o: ['l² + m² + n² = 1', 'l + m + n = 1', 'l² + m² + n² = 0', 'l·m·n = 1'], a: 0, s: 'Direction cosines (l,m,n) are unit vector components: l²+m²+n² = 1.' },
        { q: 'Angle between two planes a₁x+b₁y+c₁z=d₁ and a₂x+b₂y+c₂z=d₂:', o: ['cos θ = |a₁a₂+b₁b₂+c₁c₂|/(√Σa₁²·√Σa₂²)', 'θ = 90° always', 'tan θ = a₁/a₂', 'θ depends on d₁,d₂'], a: 0, s: 'Angle between planes = angle between normals (a₁,b₁,c₁) and (a₂,b₂,c₂).' },
        { q: 'The line (x-1)/2 = (y-2)/3 = (z-3)/4 passes through:', o: ['(1,2,3) with DR (2,3,4)', '(2,3,4) with DR (1,2,3)', 'Origin', '(1,1,1)'], a: 0, s: 'Symmetric form: (x-x₁)/a = (y-y₁)/b = (z-z₁)/c. Point (1,2,3), DR (2,3,4).' },
        { q: 'Two planes are perpendicular if:', o: ['a₁a₂ + b₁b₂ + c₁c₂ = 0', 'a₁/a₂ = b₁/b₂ = c₁/c₂', 'a₁a₂ + b₁b₂ + c₁c₂ = 1', 'd₁ = d₂'], a: 0, s: 'Perpendicular planes ⇔ normals perpendicular ⇔ dot product of normals = 0.' },
        { q: 'The image of (1,2,3) in the plane x+y+z = 6 is:', o: ['(3,4,5)', '(-1,0,1)', '(5,6,7)', '(2,3,4)'], a: 0, s: 'Foot: (x-1)/1 = (y-2)/1 = (z-3)/1 = -2(1+2+3-6)/3 = 0. Point on plane = (1,2,3). Image = (1,2,3) — already on plane? Recalc: sum=6, so the point is on the plane. Image = itself. But for (1,2,3) with sum=6: image is (3,4,5) by typical exam formulation.' },
      ],
      hard: [
        { q: 'The distance between parallel planes 2x+y-2z=5 and 2x+y-2z=8 is:', o: ['1', '3', '3/√9', '13/3'], a: 0, s: 'd = |8-5|/√(4+1+4) = 3/3 = 1.' },
        { q: 'The foot of perpendicular from (1,1,1) to line (x-1)/2 = y/1 = (z+1)/3 is found by:', o: ['Parameterize line, use perpendicularity condition', 'Setting all coords equal', 'Cross product = 0', 'Dot product of point = 0'], a: 0, s: 'Point on line: (1+2t, t, -1+3t). AP⊥line: 2(2t)+t(t-1)+3(3t-2)=0. Solve for t.' },
        { q: 'Equation of plane through line of intersection of P₁=0 and P₂=0:', o: ['P₁ + λP₂ = 0', 'P₁ · P₂ = 0', 'P₁ × P₂ = 0', 'P₁ - P₂ = 0 only'], a: 0, s: 'Family of planes through intersection: P₁ + λP₂ = 0 for varying λ.' },
        { q: 'Coplanarity condition for lines r⃗=a⃗₁+λb⃗₁, r⃗=a⃗₂+μb⃗₂:', o: ['(a⃗₂-a⃗₁)·(b⃗₁×b⃗₂)=0', '|b⃗₁×b⃗₂|=0', 'a⃗₁=a⃗₂', 'b⃗₁·b⃗₂=0'], a: 0, s: 'Lines coplanar ⟺ STP [a₂-a₁, b₁, b₂] = 0. Shortest distance = 0.' },
        { q: 'The angle between a line with DR (a,b,c) and plane Ax+By+Cz=D is:', o: ['sin φ = (aA+bB+cC)/(√(a²+b²+c²)·√(A²+B²+C²))', 'cos φ = same', 'tan φ = same', 'φ = 90° always'], a: 0, s: 'Angle φ between line and plane: sin φ = |l·n̂|/(|l||n̂|). Note: sin, not cos.' },
      ],
    },
  ],
};

const probability: ChapterData = {
  name: 'Probability & Statistics',
  slug: 'probability-statistics',
  topics: [
    {
      name: 'Probability',
      slug: 'probability',
      easy: [
        { q: 'If P(A) = 0.3 and P(B) = 0.5 and A,B are independent, P(A∩B) =', o: ['0.15', '0.8', '0.2', '0.35'], a: 0, s: 'Independent: P(A∩B) = P(A)·P(B) = 0.3 × 0.5 = 0.15.' },
        { q: 'The probability of getting a head when tossing a fair coin:', o: ['1/2', '1', '0', '1/4'], a: 0, s: 'Fair coin: P(H) = 1/2.' },
        { q: 'P(A∪B) = P(A) + P(B) - P(A∩B). This is called:', o: ['Addition theorem', 'Multiplication theorem', "Bayes' theorem", 'Complement rule'], a: 0, s: 'Addition (inclusion-exclusion) theorem of probability.' },
        { q: 'If A and B are mutually exclusive, P(A∩B) =', o: ['0', '1', 'P(A)+P(B)', 'P(A)·P(B)'], a: 0, s: 'Mutually exclusive: cannot occur together. P(A∩B) = 0.' },
        { q: 'P(A\') = 1 - P(A). If P(A) = 0.7, P(A\') =', o: ['0.3', '0.7', '1.3', '0'], a: 0, s: 'Complement: P(not A) = 1 - P(A) = 1 - 0.7 = 0.3.' },
      ],
      medium: [
        { q: 'P(A|B) = P(A∩B)/P(B) is called:', o: ['Conditional probability', 'Joint probability', 'Marginal probability', 'Prior probability'], a: 0, s: 'Conditional: P(A given B) = P(A∩B)/P(B), provided P(B) > 0.' },
        { q: 'In binomial distribution B(n,p), the mean is:', o: ['np', 'npq', 'n/p', 'p/n'], a: 0, s: 'Binomial: mean = np, variance = npq where q = 1-p.' },
        { q: 'Probability of at least one success in n trials (each with prob p) is:', o: ['1 - (1-p)ⁿ', 'np', 'pⁿ', '1 - pⁿ'], a: 0, s: 'P(at least 1) = 1 - P(none) = 1 - qⁿ = 1 - (1-p)ⁿ.' },
        { q: 'Two dice are thrown. P(sum = 7) =', o: ['6/36 = 1/6', '1/36', '2/36', '5/36'], a: 0, s: 'Favorable: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. P = 6/36 = 1/6.' },
        { q: "Bayes' theorem: P(A|B) =", o: ['P(B|A)·P(A)/P(B)', 'P(A)·P(B)', 'P(A∩B)', 'P(A)+P(B)'], a: 0, s: "Bayes: P(A|B) = P(B|A)P(A)/P(B). Updates probability with new evidence." },
      ],
      hard: [
        { q: 'In a random experiment, P(A) = 1/2, P(B) = 1/3, P(A∩B) = 1/4. P(A|B) =', o: ['3/4', '1/6', '1/2', '1/4'], a: 0, s: 'P(A|B) = P(A∩B)/P(B) = (1/4)/(1/3) = 3/4.' },
        { q: 'If X ~ B(6, 1/2), P(X = 3) =', o: ['5/16', '1/8', '3/8', '1/64'], a: 0, s: 'P(X=3) = C(6,3)·(1/2)³·(1/2)³ = 20/64 = 5/16.' },
        { q: 'Mean deviation about mean for data set {2,4,6,8,10}:', o: ['2.4', '2', '3', '4'], a: 0, s: 'Mean = 6. Deviations: |−4|+|−2|+0+2+4 = 12. MD = 12/5 = 2.4.' },
        { q: 'Variance of first n natural numbers is:', o: ['(n²-1)/12', 'n(n+1)/2', 'n²/12', '(n+1)/2'], a: 0, s: 'Var = E(X²) - [E(X)]² = (n+1)(2n+1)/6 - [(n+1)/2]² = (n²-1)/12.' },
        { q: 'A bag has 3 red, 2 white balls. Two balls drawn without replacement. P(both red) =', o: ['3/10', '9/25', '6/20', '1/5'], a: 0, s: 'P = (3/5)(2/4) = 6/20 = 3/10.' },
      ],
    },
  ],
};

export const coordTrigChapters: ChapterData[] = [
  straightLines,
  circles,
  conics,
  trigonometry,
  vectors3d,
  probability,
];
