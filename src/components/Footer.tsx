import { MISTERS } from "../data/misters";

export function Footer() {
  return (
    <footer id="contact" className="border-t-2 border-border bg-fg text-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8">
        <div className="flex flex-col gap-3 border-2 border-bg/20 bg-bg/5 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-display text-2xl tracking-wide text-bg">
              READY TO BUILD?
            </p>
            <p className="font-mono text-xs text-bg/70">
              Contact us for services and consultancy. Bring your challenge,
              data reality, and timeline. We will map a practical delivery
              path.
            </p>
          </div>
          <a
            href="mailto:hello@mistermister.no"
            className="inline-flex w-fit items-center border-2 border-bg bg-accent px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-fg transition-transform hover:-translate-y-0.5"
          >
            Contact for Consultancy
          </a>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
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
      </div>
    </footer>
  );
}
