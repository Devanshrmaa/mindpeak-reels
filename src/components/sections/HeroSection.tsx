/**
 * HeroSection — deliberately a Server Component (no "use client").
 *
 * LCP strategy: the hero BACKGROUND is a CSS background-image, not an <img>.
 * CSS backgrounds are NOT LCP candidates in Chrome's algorithm, so the LCP
 * element becomes the H1 text which is in SSR HTML and paints immediately
 * without waiting for any image download or JS execution.
 *
 * Removed:
 *  - next/image fill (was the LCP candidate → forced /_next/image round-trip)
 *  - .noise::after div (SVG feTurbulence over full viewport = heavy GPU compute)
 *  - blur-[120px] glow div (forced a full-viewport GPU composite layer)
 */
export const HeroSection = () => {
  const lines = [
    { text: 'THE INSTITUTE THAT', gold: false },
    { text: 'TRANSFORMS ASPIRANTS', gold: false },
    { text: 'INTO ACHIEVERS', gold: true },
  ];

  return (
    <header
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      /* CSS background: browser preloads via <link rel="preload"> in <head>,
         paints behind text as soon as CSS is applied — never blocks LCP. */
      style={{
        backgroundImage: 'url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Cheap CSS gradient overlays — no GPU compositing needed */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="absolute inset-0 vignette" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[92vw] lg:max-w-[1200px] mx-auto text-center px-4">
        {/* Pre-headline label */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-primary/40" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
            Personalized JEE & NEET Coaching
          </span>
          <span className="h-px w-8 bg-primary/40" />
        </div>

        {/* Per-line headline reveal */}
        <h1 className="font-display mb-8">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <span
                className={`block leading-[1.05] tracking-[-0.03em] font-black uppercase ${line.gold ? 'text-gradient-gold' : ''}`}
                style={{ fontSize: line.gold ? 'clamp(3rem, 12vw, 9rem)' : 'clamp(2.2rem, 8vw, 6rem)' }}
              >
                {line.text}
              </span>
            </span>
          ))}
        </h1>

        {/* CTA */}
        <div>
          <a
            href="#success-stories"
            className="group relative inline-flex items-center gap-3 px-10 py-4 border border-foreground/20 text-foreground text-[13px] uppercase tracking-[0.2em] btn-outline-fill rounded-full"
          >
            <span className="relative z-10">Explore Our Impact</span>
            <span className="relative z-10 w-5 h-5 rounded-full border border-current grid place-items-center transition-transform duration-500 group-hover:rotate-45">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </span>
          </a>
        </div>

        {/* Trust stats strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            { value: '500+', label: 'Students Mentored' },
            { value: '95%', label: 'Success Rate' },
            { value: 'AIR 42', label: 'Best JEE Rank' },
            { value: '50+', label: 'Under AIR 5,000' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2">
              <span className="text-primary font-display font-bold text-lg sm:text-xl tracking-tight">{stat.value}</span>
              <span className="text-muted-foreground text-[10px] sm:text-[11px] uppercase tracking-[0.12em]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Scroll</span>
        <span className="w-[1px] h-8 bg-gradient-to-b from-foreground/30 to-transparent origin-top animate-pulse" />
      </div>

      {/* Bottom fade for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[3]" />
    </header>
  );
};
