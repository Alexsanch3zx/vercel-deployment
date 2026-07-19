const practices = [
  {
    title: "Identity",
    copy: "Systems built to hold still while the world keeps moving — marks, type, and voice with room to breathe.",
  },
  {
    title: "Film",
    copy: "Short-form and campaign motion that favors atmosphere over noise. Quiet frames, lasting signals.",
  },
  {
    title: "Space",
    copy: "Installations and brand environments shaped like weather — layered light, texture, and pause.",
  },
];

export function Practice() {
  return (
    <section
      id="practice"
      className="reveal border-t border-mist/60 bg-paper px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium tracking-[0.2em] text-glacier uppercase">
          Practice
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] tracking-tight text-ink">
          Three disciplines. One northern bearing.
        </h2>
        <p className="mt-5 max-w-lg text-base font-light leading-relaxed text-ink-soft md:text-lg">
          NORTH partners with founders and creative directors who want work that
          feels elemental — not louder.
        </p>

        <ul className="mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-10">
          {practices.map((item) => (
            <li key={item.title} className="border-t border-mist pt-6">
              <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-4 text-base font-light leading-relaxed text-ink-soft">
                {item.copy}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
