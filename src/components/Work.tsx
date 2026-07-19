import Image from "next/image";

const projects = [
  {
    name: "Ridge Collective",
    discipline: "Identity",
    summary: "A modular mark system for an alpine hospitality group.",
    image: "/work-ridge.jpg",
    alt: "Sharp mountain peaks rising above clouds",
  },
  {
    name: "Fjord Edit",
    discipline: "Film",
    summary: "A six-minute brand film shot across Norwegian coastlines.",
    image: "/work-fjord.jpg",
    alt: "Calm lake reflecting forested hills at dusk",
  },
  {
    name: "Fog Atelier",
    discipline: "Space",
    summary: "Pop-up gallery path designed around drifting light and mist.",
    image: "/work-fog.jpg",
    alt: "Fog rolling through a green forest valley",
  },
];

export function Work() {
  return (
    <section id="work" className="bg-ink text-white">
      <div className="reveal px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium tracking-[0.2em] text-mist uppercase">
            Selected work
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] tracking-tight">
            Work that keeps a compass.
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-20 px-6 pb-28 md:space-y-28 md:px-10">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className={`reveal grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
              index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-[1.4s] ease-out hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-sm font-medium tracking-[0.18em] text-mist uppercase">
                {project.discipline}
              </p>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                {project.name}
              </h3>
              <p className="mt-4 max-w-sm text-base font-light leading-relaxed text-fog/85">
                {project.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
