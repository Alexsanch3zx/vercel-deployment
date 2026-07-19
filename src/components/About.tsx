import { site } from "@/lib/site";

export function About() {
  return (
    <section
      id="about"
      className="reveal relative border-t border-signal/15 bg-void-soft px-6 py-24 md:px-10 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 space-grid opacity-30" />
      <div className="relative mx-auto max-w-6xl">
        <p className="font-mono text-[11px] font-medium tracking-[0.28em] text-signal uppercase">
          // telemetry
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] tracking-tight text-star">
          Built for orbital conditions — production, not slides.
        </h2>
        <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-steel md:text-xl">
          {site.summary}
        </p>
        <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-steel">
          Studying Computer Science and Psychology at Trinity College in
          Hartford — focused on human-centered AI and cloud systems you can
          actually ship.
        </p>
        <p className="mt-8 font-mono text-[11px] font-medium tracking-[0.2em] text-signal uppercase">
          LOC // {site.location}
        </p>
      </div>
    </section>
  );
}
