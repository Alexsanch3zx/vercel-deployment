import Image from "next/image";

export function Hero() {
  return (
    <header className="relative min-h-[100svh] overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Snow-covered mountain ridge under a clear night sky"
          fill
          priority
          className="animate-drift object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />
      </div>

      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <a
          href="#practice"
          className="text-sm tracking-[0.18em] text-fog/80 transition-colors hover:text-white"
        >
          Practice
        </a>
        <a
          href="#work"
          className="text-sm tracking-[0.18em] text-fog/80 transition-colors hover:text-white"
        >
          Work
        </a>
        <a
          href="#inquire"
          className="text-sm tracking-[0.18em] text-fog/80 transition-colors hover:text-white"
        >
          Inquire
        </a>
      </nav>

      <div className="relative z-10 flex min-h-[calc(100svh-5.5rem)] flex-col justify-end px-6 pb-16 pt-10 md:px-10 md:pb-20">
        <p className="animate-rise font-display text-[clamp(4.5rem,18vw,11rem)] font-extrabold leading-[0.85] tracking-[-0.04em]">
          NORTH
        </p>
        <div className="mt-8 max-w-xl md:mt-10">
          <h1 className="animate-rise-delay-1 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.15] tracking-tight">
            Studios for brands that drift north.
          </h1>
          <p className="animate-rise-delay-2 mt-4 max-w-md text-base font-light leading-relaxed text-fog/90 md:text-lg">
            Identity, film, and spatial design for teams chasing clearer
            horizons.
          </p>
          <div className="animate-rise-delay-3 mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center bg-white px-6 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-fog"
            >
              View selected work
            </a>
            <a
              href="#inquire"
              className="inline-flex items-center border border-white/40 px-6 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Start a project
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
