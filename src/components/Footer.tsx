import { site } from "@/lib/site";

const linkedInReady =
  site.linkedin.length > "https://www.linkedin.com/in/".length;

export function Footer() {
  return (
    <footer className="border-t border-signal/15 bg-void px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight text-star">
            {site.name}
          </p>
          <p className="mt-2 max-w-sm font-mono text-[11px] tracking-[0.12em] text-steel uppercase">
            {site.role}
          </p>
        </div>
        <div className="flex flex-wrap gap-6 font-mono text-[11px] font-medium tracking-[0.18em] text-steel uppercase">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-signal"
          >
            GitHub
          </a>
          {linkedInReady ? (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-signal"
            >
              LinkedIn
            </a>
          ) : null}
          <a href="#projects" className="transition-colors hover:text-signal">
            Projects
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl font-mono text-[11px] tracking-[0.14em] text-steel/70 uppercase">
        © {new Date().getFullYear()} {site.name} // end_transmission
      </p>
    </footer>
  );
}
