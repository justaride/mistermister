import { MISTERS } from "../data/misters";

export function Footer() {
  return (
    <footer className="border-t-2 border-border bg-fg text-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center border-2 border-bg/20 font-display text-xl">
            MM
          </span>
          <div className="flex flex-col">
            <span className="font-mono text-xs text-bg/60">
              &copy; {new Date().getFullYear()} Mister Mister
            </span>
            <span className="font-mono text-[10px] text-bg/40">
              Laget i Norge
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {MISTERS.filter((m) => m.status !== "coming-soon").map((m) => (
            <a
              key={m.id}
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-bg/60 transition-colors hover:text-bg"
            >
              {m.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
