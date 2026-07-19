import Image from "next/image";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <header className="relative min-h-[100svh] overflow-hidden bg-void text-star">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Earth from orbit over the terminator line"
          fill
          priority
          className="animate-drift object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 starfield opacity-70 mix-blend-screen" />
        <div className="absolute inset-0 space-grid opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-transparent to-void/30" />
        <div className="scanline" />
      </div>

      <nav className="relative z-10 flex items-center justify-between px-6 py-6 font-mono text-[11px] uppercase tracking-[0.22em] text-steel md:px-10 md:py-8">
        <a href="#projects" className="transition-colors hover:text-signal">
          // projects
        </a>
        <a href="#about" className="transition-colors hover:text-signal">
          // about
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-signal"
        >
          // github
        </a>
      </nav>

      <div className="relative z-10 flex min-h-[calc(100svh-5.5rem)] flex-col justify-end px-6 pb-16 pt-10 md:px-10 md:pb-20">
        <p className="animate-rise font-mono text-[11px] tracking-[0.28em] text-signal uppercase">
          SYS.PORTFOLIO // ONLINE
        </p>
        <p className="animate-rise-delay-1 mt-4 font-display text-[clamp(3.1rem,11vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] text-star">
          {site.name}
        </p>
        <div className="mt-8 max-w-xl md:mt-10">
          <h1 className="animate-rise-delay-2 font-display text-[clamp(1.4rem,3.2vw,2.15rem)] font-semibold leading-[1.25] tracking-tight text-star">
            {site.role}
          </h1>
          <p className="animate-rise-delay-3 mt-4 max-w-md text-base font-light leading-relaxed text-steel md:text-lg">
            Mission stack: RAG intelligence, cloud-native systems, and software
            built to survive production gravity.
          </p>
          <div className="animate-rise-delay-3 mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center bg-signal px-6 py-3.5 font-mono text-xs font-medium tracking-[0.16em] text-void uppercase transition-colors hover:bg-signal-dim"
            >
              View projects
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-signal/40 px-6 py-3.5 font-mono text-xs font-medium tracking-[0.16em] text-signal uppercase transition-colors hover:border-signal hover:bg-signal/10"
            >
              Open GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
