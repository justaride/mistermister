export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <svg
            width="40"
            height="40"
            viewBox="0 0 128 128"
            className="select-none"
            role="img"
            aria-label="Mister Mister"
          >
            <circle
              cx="64"
              cy="64"
              r="54"
              fill="rgb(var(--card))"
              stroke="rgb(var(--border))"
              strokeWidth="6"
            />
            <text
              x="64"
              y="78"
              textAnchor="middle"
              fontSize="42"
              fontWeight="bold"
              fontFamily="var(--font-display)"
              fill="rgb(var(--fg))"
            >
              MM
            </text>
          </svg>
          <span className="font-display text-2xl tracking-wide">
            MISTER MISTER
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
          <span className="hidden font-mono text-xs font-bold tracking-widest text-muted sm:inline">
            UNIVERSE PORTAL
          </span>
        </div>
      </div>
      <div className="border-b-2 border-border" />
    </header>
  );
}
