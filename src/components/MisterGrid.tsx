import { MISTERS } from "../data/misters";
import { MisterCard } from "./MisterCard";

export function MisterGrid() {
  return (
    <section id="services" className="grid-paper border-y-2 border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-3 font-display text-4xl tracking-wide md:text-5xl">
          SERVICES & BUILDS
        </h2>
        <p className="mb-10 max-w-3xl border-l-4 border-warn pl-4 font-mono text-sm text-muted">
          From strategic overview to production-ready workflows, each Mister
          represents a delivery capability you can plug into your operating
          model.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {MISTERS.map((mister, i) => (
            <MisterCard key={mister.id} mister={mister} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
