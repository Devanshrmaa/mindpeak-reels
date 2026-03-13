import Image from 'next/image';

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
    >
      {/* Keep the LCP image static and eager so it can paint in the first frame. */}
      <div className="absolute inset-[-20px]">
        <Image
          src="/images/hero-bg.jpg"
          alt="MindPeak Institute hero background"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={70}
          className="object-cover"
        />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
          <div className="absolute inset-0 vignette" />
        </div>
      </div>

      {/* Noise grain overlay */}
      <div className="absolute inset-0 noise pointer-events-none z-[1]" />

      {/* Radial glow behind content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[2]">
        <div className="w-[min(800px,90vw)] h-[min(600px,70vh)] rounded-full bg-primary/[0.04] blur-[120px]" />
      </div>

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
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60">Scroll</span>
        <span className="w-[1px] h-8 bg-gradient-to-b from-foreground/30 to-transparent origin-top animate-pulse" />
      </div>

      {/* Bottom fade for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[3]" />
    </header>
  );
};
