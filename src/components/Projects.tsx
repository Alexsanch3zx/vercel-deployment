import Image from "next/image";
import { site } from "@/lib/site";

export function Projects() {
  return (
    <section id="projects" className="relative bg-void text-star">
      <div className="pointer-events-none absolute inset-0 space-grid opacity-40" />
      <div className="reveal relative px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] font-medium tracking-[0.28em] text-signal uppercase">
            // selected_missions
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] tracking-tight">
            Systems deployed beyond the atmosphere of demos.
          </h2>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl space-y-24 px-6 pb-28 md:space-y-32 md:px-10">
        {site.projects.map((project, index) => (
          <article
            key={project.id}
            className={`reveal grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
              index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden border border-signal/15 bg-panel">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover opacity-80 transition-transform duration-[1.4s] ease-out hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] text-signal uppercase">
                MISSION_0{index + 1}
              </div>
            </div>
            <div>
              <p className="font-mono text-[11px] font-medium tracking-[0.22em] text-signal uppercase">
                {project.client}
              </p>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                {project.name}
              </h3>
              <p className="mt-4 text-lg font-medium leading-snug text-star">
                {project.tagline}
              </p>
              <p className="mt-4 max-w-md text-base font-light leading-relaxed text-steel">
                {project.description}
              </p>
              <ul className="mt-5 max-w-md space-y-2.5">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm font-light leading-relaxed text-steel"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 bg-signal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-[11px] leading-relaxed tracking-[0.06em] text-signal-dim">
                {project.stack.join("  /  ")}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
