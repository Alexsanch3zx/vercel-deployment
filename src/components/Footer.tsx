export function Footer() {
  return (
    <footer className="border-t border-mist/40 bg-paper px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight text-ink">
            NORTH
          </p>
          <p className="mt-2 text-sm font-light text-ink-soft">
            Creative studio · Built to deploy on Vercel
          </p>
        </div>
        <p className="text-sm font-light text-ink-soft">
          © {new Date().getFullYear()} NORTH Studio
        </p>
      </div>
    </footer>
  );
}
