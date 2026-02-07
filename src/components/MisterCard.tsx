import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Mister } from "../data/misters";
import { MrMaps } from "./mascots/MrMaps";
import { MrNews } from "./mascots/MrNews";
import { MrPresentations } from "./mascots/MrPresentations";
import { MrRemote } from "./mascots/MrRemote";
import type { ComponentType } from "react";

const MASCOT_MAP: Record<
  string,
  ComponentType<{ size?: number; className?: string }>
> = {
  maps: MrMaps,
  news: MrNews,
  presentations: MrPresentations,
  remote: MrRemote,
};

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  live: { label: "LIVE", color: "bg-accent text-fg" },
  beta: { label: "BETA", color: "bg-warn text-fg" },
  "coming-soon": { label: "COMING SOON", color: "bg-muted/30 text-muted" },
};

type Props = {
  mister: Mister;
  index: number;
};

export function MisterCard({ mister, index }: Props) {
  const Mascot = MASCOT_MAP[mister.id];
  const status = STATUS_LABELS[mister.status];
  const isClickable = mister.status !== "coming-soon";

  const Tag = isClickable ? "a" : "div";
  const linkProps = isClickable
    ? {
        href: mister.url,
        target: "_blank" as const,
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Tag
        {...linkProps}
        className="group block border-2 border-border border-l-4 bg-card p-6 transition-all hover:-translate-y-1"
        style={{
          borderLeftColor: mister.accent,
          boxShadow: "4px 4px 0px 0px rgba(17,24,39,1)",
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {Mascot && <Mascot size={64} />}
            <div>
              <h3 className="font-display text-xl tracking-wide">
                {mister.name.toUpperCase()}
              </h3>
              <span
                className={`inline-block mt-1 px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest ${status.color}`}
              >
                {status.label}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-4 font-mono text-sm leading-relaxed text-muted">
          {mister.description}
        </p>

        <div
          className="mt-4 border border-border bg-bg/50 px-3 py-2"
          style={{ borderLeftColor: mister.accent, borderLeftWidth: 3 }}
        >
          <p className="font-typewriter text-xs italic text-fg/70">
            &ldquo;{mister.personality}&rdquo;
          </p>
        </div>

        {isClickable && (
          <div
            className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-bold transition-colors group-hover:underline"
            style={{ color: mister.accent }}
          >
            Besøk {mister.name.split(" ")[1]} <ArrowRight className="h-3 w-3" />
          </div>
        )}
      </Tag>
    </motion.div>
  );
}
