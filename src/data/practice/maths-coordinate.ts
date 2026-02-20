import type { ChapterData } from './types';

/* ─── Straight Lines ─── */
const straightLines: ChapterData = {
  name: 'Straight Lines',
  slug: 'straight-lines',
  topics: [
    {
      name: 'Equations & Properties of Lines',
      slug: 'line-equations',
      easy: [
        { q: 'The slope of a line passing through (1,2) and (3,6) is:', o: ['2', '4', '1', '3'], a: 0, s: 'Slope = (y₂-y₁)/(x₂-x₁) = (6-2)/(3-1) = 4/2 = 2.' },
        { q: 'The equation of a line with slope m and y-intercept c is:', o: ['y = mx + c', 'y = cx + m', 'y = x + mc', 'mx + cy = 1'], a: 0, s: 'Slope-intercept form: y = mx + c.' },
        { q: 'Two parallel lines have:', o: ['Equal slopes', 'Product of slopes = -1', 'Equal intercepts', 'Perpendicular slopes'], a: 0, s: 'Parallel lines: m₁ = m₂. Same slope, different intercepts.' },
        { q: 'Two perpendicular lines satisfy:', o: ['m₁ × m₂ = -1', 'm₁ = m₂', 'm₁ + m₂ = 0', 'm₁ × m₂ = 1'], a: 0, s: 'Perpendicular: product of slopes = -1.' },
        { q: 'The x-intercept of y = 2x - 4 is:', o: ['2', '4', '-4', '-2'], a: 0, s: 'Set y = 0: 0 = 2x - 4 → x = 2.' },
      ],
      medium: [
        { q: 'The distance from point (x₁,y₁) to line ax+by+c=0 is:', o: ['|ax₁+by₁+c|/√(a²+b²)', '|ax₁+by₁|/√(a²+b²)', 'ax₁+by₁+c', '√(a²+b²)'], a: 0, s: 'Point-to-line distance formula. Always non-negative due to absolute value.' },
        { q: 'The angle between lines y = m₁x + c₁ and y = m₂x + c₂ is:', o: ['tan⁻¹|(m₁-m₂)/(1+m₁m₂)|', 'tan⁻¹(m₁+m₂)', 'm₁-m₂', 'tan⁻¹(m₁m₂)'], a: 0, s: 'tanθ = |(m₁-m₂)/(1+m₁m₂)|. Acute angle between the lines.' },
        { q: 'The point of intersection of 2x+y=5 and x-y=1 is:', o: ['(2,1)', '(1,2)', '(3,1)', '(1,3)'], a: 0, s: 'Add: 3x = 6 → x = 2. Then y = 5-2(2) = 1. Point (2,1).' },
        { q: 'The equation of line through (1,2) with slope 3 is:', o: ['y - 2 = 3(x - 1) or y = 3x - 1', 'y = 2x + 3', 'y = x + 2', '3x + y = 5'], a: 0, s: 'Point-slope form: y - y₁ = m(x - x₁) → y - 2 = 3(x-1) → y = 3x - 1.' },
        { q: 'The family of lines through intersection of L₁=0 and L₂=0 is:', o: ['L₁ + λL₂ = 0', 'L₁ × L₂ = 0', 'L₁ - L₂ = 0', 'L₁/L₂ = 0'], a: 0, s: 'Any line through intersection: L₁ + λL₂ = 0 for parameter λ.' },
      ],
      hard: [
        { q: 'The image of point (a,b) in the line y = x is:', o: ['(b,a)', '(-a,-b)', '(a,-b)', '(-b,a)'], a: 0, s: 'Reflection in y=x swaps coordinates: (a,b) → (b,a).' },
        { q: 'The area of triangle with vertices (x₁,y₁), (x₂,y₂), (x₃,y₃) is:', o: ['½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|', '½(b×h)', 'x₁y₂ - x₂y₁', '√(s(s-a)(s-b)(s-c))'], a: 0, s: 'Coordinate geometry formula using determinant. Both forms are correct but determinant form uses coordinates directly.' },
        { q: 'The pair of lines ax²+2hxy+by²=0 are perpendicular when:', o: ['a + b = 0', 'ab = h²', 'a = b', 'h = 0'], a: 0, s: 'Sum of slopes m₁+m₂ = -2h/b, product m₁m₂ = a/b. Perpendicular: m₁m₂ = -1 → a/b = -1 → a+b = 0.' },
        { q: 'The foot of perpendicular from (α,β) to line ax+by+c=0 is given by:', o: ['(x-α)/a = (y-β)/b = -(aα+bβ+c)/(a²+b²)', '(α,0)', '(0,β)', 'Cannot be determined'], a: 0, s: 'Standard formula for foot of perpendicular. Direction ratios of perpendicular are (a,b).' },
        { q: 'The bisectors of angles between lines a₁x+b₁y+c₁=0 and a₂x+b₂y+c₂=0 are:', o: ['(a₁x+b₁y+c₁)/√(a₁²+b₁²) = ±(a₂x+b₂y+c₂)/√(a₂²+b₂²)', 'a₁x+b₁y = a₂x+b₂y', 'c₁ = c₂', 'Parallel lines'], a: 0, s: 'Angular bisectors: locus of points equidistant from both lines. + gives one, - gives the other.' },
      ],
    },
  ],
};

/* ─── Circles ─── */
const circles: ChapterData = {
  name: 'Circles',
  slug: 'circles',
  topics: [
    {
      name: 'Equation & Properties of Circles',
      slug: 'circle-equations',
      easy: [
        { q: 'The equation of a circle with centre (h,k) and radius r is:', o: ['(x-h)² + (y-k)² = r²', 'x² + y² = r', '(x+h)² + (y+k)² = r²', 'x²+y² = r²'], a: 0, s: 'Standard form. Centre (h,k), radius r.' },
        { q: 'The centre of x² + y² - 4x + 6y - 12 = 0 is:', o: ['(2,-3)', '(-2,3)', '(4,-6)', '(-4,6)'], a: 0, s: 'General form x²+y²+2gx+2fy+c=0 → centre (-g,-f). Here g=-2, f=3, centre (2,-3).' },
        { q: 'The radius of x² + y² = 25 is:', o: ['5', '25', '√5', '625'], a: 0, s: 'x²+y²=25 → centre (0,0), radius = √25 = 5.' },
        { q: 'A circle passes through the origin if constant term c in x²+y²+2gx+2fy+c=0 is:', o: ['0', '1', '-1', 'r²'], a: 0, s: 'Substituting (0,0): 0+0+0+0+c=0 → c=0.' },
        { q: 'The length of a diameter is:', o: ['2r (twice the radius)', 'r', 'πr', 'r²'], a: 0, s: 'Diameter = 2 × radius. Longest chord of the circle.' },
      ],
      medium: [
        { q: 'The equation of tangent to x²+y²=a² at point (x₁,y₁) is:', o: ['xx₁ + yy₁ = a²', 'x₁/x + y₁/y = a²', 'x+y = a', 'x²+y₁² = a²'], a: 0, s: 'Replace x² by xx₁ and y² by yy₁ in circle equation.' },
        { q: 'Length of tangent from external point (x₁,y₁) to circle x²+y²+2gx+2fy+c=0 is:', o: ['√(x₁²+y₁²+2gx₁+2fy₁+c)', 'x₁²+y₁²+c', '√(g²+f²-c)', 'r'], a: 0, s: 'Length = √(S₁) where S₁ = value of circle equation at (x₁,y₁).' },
        { q: 'Two circles x²+y²+2g₁x+2f₁y+c₁=0 and x²+y²+2g₂x+2f₂y+c₂=0 are orthogonal when:', o: ['2g₁g₂ + 2f₁f₂ = c₁ + c₂', 'g₁=g₂', 'c₁=c₂', 'r₁=r₂'], a: 0, s: 'Orthogonality condition: tangents at intersection point are perpendicular.' },
        { q: 'The power of a point P(x₁,y₁) w.r.t. circle S is:', o: ['S₁ = x₁²+y₁²+2gx₁+2fy₁+c', 'r²', 'Distance from centre', '0'], a: 0, s: 'Power = S₁. If S₁ > 0: external, S₁ = 0: on circle, S₁ < 0: internal.' },
        { q: 'The radical axis of two circles S₁=0 and S₂=0 is:', o: ['S₁ - S₂ = 0 (a straight line)', 'S₁ + S₂ = 0', 'S₁ × S₂ = 0', 'A circle'], a: 0, s: 'Radical axis: locus of equal power w.r.t. both circles. Always a straight line.' },
      ],
      hard: [
        { q: 'The common tangent(s) to two non-intersecting circles have:', o: ['4 common tangents (2 direct + 2 transverse)', '2 tangents', '1 tangent', '0 tangents'], a: 0, s: 'When circles are external to each other (d > r₁+r₂): 4 common tangents.' },
        { q: 'The equation of the circle with endpoints of diameter at (x₁,y₁) and (x₂,y₂) is:', o: ['(x-x₁)(x-x₂) + (y-y₁)(y-y₂) = 0', 'x²+y² = (x₁²+x₂²)/2', '(x-x₁)²+(y-y₁)² = r²', 'Cannot determine'], a: 0, s: 'Diameter form: any point P on circle makes 90° angle at the diameter endpoints. (x-x₁)(x-x₂)+(y-y₁)(y-y₂)=0.' },
        { q: 'The family of circles through intersection of S₁=0 and S₂=0 is:', o: ['S₁ + λS₂ = 0', 'S₁ × S₂ = 0', 'S₁ - S₂ = 0', 'S₁/S₂ = 0'], a: 0, s: 'S₁ + λS₂ = 0 gives all circles through the intersection points (except S₂ itself for λ→∞).' },
        { q: 'The chord of contact from (x₁,y₁) to x²+y²=a² is:', o: ['xx₁ + yy₁ = a²', 'x₁x + y₁y = 1', 'x²+y² = x₁²+y₁²', 'x/x₁ + y/y₁ = 1'], a: 0, s: 'Chord of contact: same as tangent equation T=0, i.e., xx₁+yy₁=a².' },
        { q: 'The director circle of x²+y²=a² has equation:', o: ['x²+y² = 2a²', 'x²+y² = a²/2', 'x²+y² = a', 'x²+y² = 4a²'], a: 0, s: 'Director circle: locus of point from which two perpendicular tangents are drawn. Radius = a√2.' },
      ],
    },
  ],
};

/* ─── Conic Sections: Parabola ─── */
const parabola: ChapterData = {
  name: 'Parabola',
  slug: 'parabola',
  topics: [
    {
      name: 'Equation & Properties of Parabola',
      slug: 'parabola-properties',
      easy: [
        { q: 'The standard equation of a parabola opening rightward is:', o: ['y² = 4ax', 'x² = 4ay', 'y² = -4ax', 'x² = -4ay'], a: 0, s: 'y²=4ax: vertex at origin, focus at (a,0), directrix x=-a.' },
        { q: 'The focus of y² = 12x is:', o: ['(3,0)', '(12,0)', '(0,3)', '(6,0)'], a: 0, s: '4a = 12 → a = 3. Focus at (a,0) = (3,0).' },
        { q: 'The directrix of y² = 4ax is:', o: ['x = -a', 'x = a', 'y = -a', 'y = a'], a: 0, s: 'Directrix is perpendicular to axis, on opposite side of focus: x = -a.' },
        { q: 'The vertex of y² = 4ax is:', o: ['(0,0)', '(a,0)', '(0,a)', '(-a,0)'], a: 0, s: 'Standard parabola has vertex at the origin.' },
        { q: 'The length of latus rectum of y² = 4ax is:', o: ['4a', '2a', 'a', '8a'], a: 0, s: 'Latus rectum: focal chord perpendicular to axis. Length = 4a.' },
      ],
      medium: [
        { q: 'The parametric equations of y² = 4ax are:', o: ['x = at², y = 2at', 'x = a cosθ, y = a sinθ', 'x = 2at, y = at²', 'x = at, y = 2at'], a: 0, s: 'Parameter t: x = at², y = 2at. Verify: (2at)² = 4a(at²) ✓.' },
        { q: 'The equation of tangent to y²=4ax at point (at²,2at) is:', o: ['ty = x + at²', 'y = tx + a', 'ty = x - at²', 'y = 2tx'], a: 0, s: 'Tangent at parameter t: ty = x + at². Slope = 1/t.' },
        { q: 'The equation of normal at (at², 2at) on y²=4ax is:', o: ['y + tx = 2at + at³', 'y = tx + a', 'ty = -x + at²', 'y - tx = 0'], a: 0, s: 'Normal: perpendicular to tangent. Slope = -t. y - 2at = -t(x - at²).' },
        { q: 'A focal chord of y²=4ax passes through:', o: ['Focus (a,0)', 'Vertex (0,0)', 'Directrix', 'Centre'], a: 0, s: 'Focal chord: any chord passing through the focus.' },
        { q: 'The tangent at the vertex of y²=4ax is:', o: ['x = 0 (y-axis)', 'y = 0', 'x = a', 'y = a'], a: 0, s: 'At vertex (0,0), tangent is perpendicular to axis: x = 0.' },
      ],
      hard: [
        { q: 'For a focal chord with endpoints at t₁ and t₂ on y²=4ax, t₁t₂ =', o: ['-1', '1', '0', 'a'], a: 0, s: 'Condition for focal chord: t₁t₂ = -1. Key property.' },
        { q: 'Tangent at one end and normal at other end of focal chord meet on:', o: ['Directrix', 'Axis', 'At focus', 'Latus rectum'], a: 0, s: 'The tangent at one end of a focal chord meets the normal at the other end, on the directrix.' },
        { q: 'The reflection property: a ray parallel to axis reflects off parabola and passes through:', o: ['Focus', 'Vertex', 'Directrix', 'Centre'], a: 0, s: 'Parabolic mirror: all parallel rays converge at focus. Used in satellite dishes, headlights.' },
        { q: 'The chord of contact from external point (h,k) to y²=4ax is:', o: ['ky = 2a(x+h)', 'hx+ky=4a', 'k²=4ah', 'ky=4ax'], a: 0, s: 'Chord of contact: T = 0 → ky = 2a(x+h).' },
        { q: 'Number of normals that can be drawn from an external point to a parabola is:', o: ['At most 3', '2', '1', '4'], a: 0, s: 'Normal equation gives cubic in t → at most 3 normals from external point (at most 1 from internal).' },
      ],
    },
  ],
};

/* ─── Conic Sections: Ellipse ─── */
const ellipse: ChapterData = {
  name: 'Ellipse',
  slug: 'ellipse',
  topics: [
    {
      name: 'Equation & Properties of Ellipse',
      slug: 'ellipse-properties',
      easy: [
        { q: 'Standard equation of ellipse with a > b is:', o: ['x²/a² + y²/b² = 1', 'x²/a² - y²/b² = 1', 'x²+y² = a²', 'xy = a²'], a: 0, s: 'Ellipse: sum of distances from two foci is constant = 2a.' },
        { q: 'The eccentricity of an ellipse satisfies:', o: ['0 < e < 1', 'e = 1', 'e > 1', 'e = 0'], a: 0, s: 'Ellipse: 0 < e < 1. Circle: e=0. Parabola: e=1. Hyperbola: e>1.' },
        { q: 'The foci of x²/25 + y²/16 = 1 are at:', o: ['(±3, 0)', '(±5, 0)', '(±4, 0)', '(0, ±3)'], a: 0, s: 'a²=25, b²=16. c²=a²-b²=9. c=3. Foci at (±3,0).' },
        { q: 'The length of the major axis of x²/a²+y²/b²=1 (a>b) is:', o: ['2a', 'a', '2b', 'a+b'], a: 0, s: 'Major axis along x-axis, length = 2a.' },
        { q: 'The relationship b² = a²(1-e²) holds for:', o: ['Ellipse', 'Parabola', 'Hyperbola', 'Circle and line'], a: 0, s: 'For ellipse: b² = a² - c² = a²(1 - c²/a²) = a²(1-e²).' },
      ],
      medium: [
        { q: 'The equation of tangent to x²/a²+y²/b²=1 at (x₁,y₁) is:', o: ['xx₁/a² + yy₁/b² = 1', 'x/x₁ + y/y₁ = 1', 'xx₁ + yy₁ = 1', 'x₁y + y₁x = ab'], a: 0, s: 'Replace x² by xx₁ and y² by yy₁: xx₁/a² + yy₁/b² = 1.' },
        { q: 'The tangent y = mx + c touches ellipse x²/a²+y²/b²=1 if:', o: ['c² = a²m² + b²', 'c = am + b', 'c² = a²+b²m²', 'cm = a'], a: 0, s: 'Condition for tangency: c = ±√(a²m²+b²). So c² = a²m²+b².' },
        { q: 'The auxiliary circle of x²/a²+y²/b²=1 is:', o: ['x²+y² = a²', 'x²+y² = b²', 'x²+y² = a²+b²', 'x²+y² = ab'], a: 0, s: 'Auxiliary circle: circle on major axis as diameter. x²+y²=a².' },
        { q: 'The parametric form of x²/a²+y²/b²=1 is:', o: ['x = a cosθ, y = b sinθ', 'x = a sinθ, y = b cosθ', 'x = aθ, y = bθ', 'x = a tanθ, y = b secθ'], a: 0, s: 'Eccentric angle θ: x=acosθ, y=bsinθ. Verify: cos²θ+sin²θ=1 ✓.' },
        { q: 'Latus rectum of ellipse x²/a²+y²/b²=1 has length:', o: ['2b²/a', '2a²/b', '2a', '2b'], a: 0, s: 'Latus rectum = 2b²/a. Focal chord perpendicular to major axis.' },
      ],
      hard: [
        { q: 'The area of ellipse x²/a²+y²/b²=1 is:', o: ['πab', 'π(a+b)', '2πab', 'πa²b²'], a: 0, s: 'Area = πab. Special case: circle (a=b=r) gives πr².' },
        { q: 'The director circle of ellipse x²/a²+y²/b²=1 has equation:', o: ['x²+y² = a²+b²', 'x²+y² = a²-b²', 'x²+y² = ab', 'x²+y² = 2a²'], a: 0, s: 'Director circle: locus from which 2 perpendicular tangents → x²+y²=a²+b².' },
        { q: 'For the ellipse, the sum of focal distances from any point P is:', o: ['2a (constant)', '2b', '2c', 'a+b'], a: 0, s: 'Definition: PF₁+PF₂ = 2a for any point P on the ellipse. This is the string property.' },
        { q: 'The normal to ellipse at (acosθ, bsinθ) is:', o: ['ax/cosθ - by/sinθ = a²-b²', 'ax cosθ + by sinθ = 1', 'x cosθ + y sinθ = 1', 'ax sinθ + by cosθ = 0'], a: 0, s: 'Normal at parametric point: ax/cosθ - by/sinθ = a²-b².' },
        { q: 'The reflection property of an ellipse: a ray from one focus reflects off the ellipse and passes through:', o: ['The other focus', 'The centre', 'The vertex', 'Outside'], a: 0, s: 'Elliptic reflection: ray from F₁ reflects to F₂. Used in whispering galleries.' },
      ],
    },
  ],
};

/* ─── Conic Sections: Hyperbola ─── */
const hyperbola: ChapterData = {
  name: 'Hyperbola',
  slug: 'hyperbola',
  topics: [
    {
      name: 'Equation & Properties of Hyperbola',
      slug: 'hyperbola-properties',
      easy: [
        { q: 'Standard equation of hyperbola is:', o: ['x²/a² - y²/b² = 1', 'x²/a² + y²/b² = 1', 'x² - y² = a', 'xy = a²'], a: 0, s: 'Hyperbola: difference of distances from foci is constant = 2a.' },
        { q: 'The eccentricity of a hyperbola satisfies:', o: ['e > 1', '0 < e < 1', 'e = 1', 'e = 0'], a: 0, s: 'Hyperbola: e > 1. More eccentric = flatter shape.' },
        { q: 'The foci of x²/16 - y²/9 = 1 are at:', o: ['(±5, 0)', '(±4, 0)', '(±3, 0)', '(0, ±5)'], a: 0, s: 'a²=16, b²=9. c²=a²+b²=25. c=5. Foci at (±5,0).' },
        { q: 'The transverse axis of x²/a²-y²/b²=1 has length:', o: ['2a', 'a', '2b', 'a+b'], a: 0, s: 'Transverse axis along x-axis, between vertices, length = 2a.' },
        { q: 'For hyperbola, b² = c² - a², i.e.:', o: ['b² = a²(e²-1)', 'b² = a²(1-e²)', 'b = a', 'b² = a²+c²'], a: 0, s: 'c²=a²+b². b²=c²-a²=a²e²-a²=a²(e²-1).' },
      ],
      medium: [
        { q: 'The asymptotes of x²/a²-y²/b²=1 are:', o: ['y = ±(b/a)x', 'y = ±(a/b)x', 'x = ±a', 'y = ±b'], a: 0, s: 'Asymptotes: lines that the hyperbola approaches. y = ±(b/a)x.' },
        { q: 'A rectangular hyperbola has:', o: ['a = b (asymptotes perpendicular)', 'a = 2b', 'e = √2', 'Both A and C'], a: 3, s: 'Rectangular: a=b, asymptotes y=±x (perpendicular), e=√(1+b²/a²)=√2. Both A and C correct.' },
        { q: 'The equation xy = c² represents:', o: ['Rectangular hyperbola with asymptotes along axes', 'Circle', 'Parabola', 'Ellipse'], a: 0, s: 'xy = c² is rectangular hyperbola rotated 45°. Asymptotes are x=0 and y=0 (the axes).' },
        { q: 'Tangent to x²/a²-y²/b²=1 at (x₁,y₁) is:', o: ['xx₁/a² - yy₁/b² = 1', 'xx₁/a² + yy₁/b² = 1', 'x₁/x + y₁/y = 1', 'x/a + y/b = 1'], a: 0, s: 'Replace x² by xx₁ and y² by yy₁: xx₁/a²-yy₁/b²=1.' },
        { q: 'The difference of focal distances |PF₁-PF₂| for point P on hyperbola is:', o: ['2a', '2b', '2c', 'a+b'], a: 0, s: 'Definition of hyperbola: |PF₁-PF₂| = 2a (constant).' },
      ],
      hard: [
        { q: 'The conjugate hyperbola of x²/a²-y²/b²=1 is:', o: ['-x²/a² + y²/b² = 1 (or y²/b²-x²/a²=1)', 'x²/a²+y²/b²=1', 'x²/b²-y²/a²=1', 'xy=ab'], a: 0, s: 'Conjugate: swap signs. Transverse axis becomes conjugate and vice versa.' },
        { q: 'The director circle of hyperbola x²/a²-y²/b²=1 (a>b) has equation:', o: ['x²+y² = a²-b²', 'x²+y² = a²+b²', 'x²+y² = 2a²', 'No real circle if a < b'], a: 0, s: 'Director circle: x²+y²=a²-b². Exists only if a > b.' },
        { q: 'The parametric form of x²/a²-y²/b²=1 is:', o: ['x = a secθ, y = b tanθ', 'x = a cosθ, y = b sinθ', 'x = a coshθ, y = b sinhθ', 'Both A and C'], a: 3, s: 'Both work: x=asecθ,y=btanθ (trig) or x=acoshθ,y=bsinhθ (hyperbolic). Both A and C.' },
        { q: 'The angle between asymptotes of x²/a²-y²/b²=1 is:', o: ['2tan⁻¹(b/a)', 'tan⁻¹(b/a)', '90°', '45°'], a: 0, s: 'Each asymptote makes tan⁻¹(b/a) with transverse axis. Angle between them = 2tan⁻¹(b/a).' },
        { q: 'A chord of hyperbola that subtends a right angle at the centre lies on:', o: ['The director circle', 'The asymptotes', 'The axes', 'An auxiliary circle'], a: 0, s: 'Pair of tangents from a point on director circle subtend 90° at centre.' },
      ],
    },
  ],
};

export const coordinateChapters: ChapterData[] = [
  straightLines,
  circles,
  parabola,
  ellipse,
  hyperbola,
];
