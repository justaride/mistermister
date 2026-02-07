import { MISTERS } from "../data/misters";
import { MisterCard } from "./MisterCard";

export function MisterGrid() {
  return (
    <section className="grid-paper border-y-2 border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-10 font-display text-4xl tracking-wide md:text-5xl">
          MEET THE MISTERS
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {MISTERS.map((mister, i) => (
            <MisterCard key={mister.id} mister={mister} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
