import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MrMister } from "./mascots/MrMister";

const MESSAGES = [
  "Velkommen til HQ!",
  "Velg en Mister...",
  "Alle er her for å hjelpe.",
  "Klar til å utforske?",
];

const CYCLE_MS = 6000;

export function HeroSection() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setMsgIndex((i) => (i + 1) % MESSAGES.length);
    }, CYCLE_MS);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-6xl px-4 py-16 md:py-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h1 className="font-display text-5xl leading-tight tracking-wide md:text-6xl lg:text-7xl">
            VELKOMMEN TIL
            <br />
            <span className="text-warn">MISTER-UNIVERSET</span>
          </h1>
          <p className="max-w-md border-l-4 border-accent pl-4 font-mono text-sm text-muted">
            Portalen til alle Mister-apper. Kartlegging, nyheter, presentasjoner
            og fjernkontroll — samlet på ett sted.
          </p>
        </div>

        <div
          className="flex flex-col items-center gap-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="relative border-2 border-border bg-card p-4 rotate-[-0.5deg]"
            style={{ boxShadow: "3px 3px 0 var(--color-border)" }}
          >
            <div className="absolute -top-2.5 left-3 border border-border bg-warn px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-fg">
              HQ Dispatch
            </div>

            <div className="mb-3 min-h-[2rem]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={msgIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="font-typewriter text-sm text-fg"
                >
                  {MESSAGES[msgIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <MrMister size={180} />
          </div>

          <div className="flex gap-1.5">
            {MESSAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setMsgIndex(i)}
                className={`h-2 w-2 rounded-full border border-border transition-colors ${
                  i === msgIndex ? "bg-warn" : "bg-muted/30"
                }`}
                aria-label={`Melding ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
