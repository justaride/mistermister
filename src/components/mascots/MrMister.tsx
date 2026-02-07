import { motion } from "framer-motion";
import { clsx } from "clsx";

type MrMisterProps = {
  size?: number;
  className?: string;
  animated?: boolean;
};

const idle = {
  y: [0, -2, 0],
  transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" as const },
};

const ping = {
  scale: [1, 1.3, 1],
  opacity: [1, 0.6, 1],
  transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" as const },
};

export function MrMister({
  size = 120,
  className,
  animated = true,
}: MrMisterProps) {
  const shouldAnimate =
    animated && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="MrMister hub mascot"
      className={clsx("select-none", className)}
      animate={shouldAnimate ? idle : undefined}
    >
      {/* Antenna */}
      <line
        x1="50"
        y1="8"
        x2="50"
        y2="18"
        stroke="rgb(var(--fg))"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <motion.circle
        cx="50"
        cy="6"
        r="4"
        fill="rgb(var(--warn))"
        stroke="rgb(var(--fg))"
        strokeWidth="2"
        animate={shouldAnimate ? ping : undefined}
      />

      {/* Star antenna tips */}
      <line
        x1="42"
        y1="4"
        x2="46"
        y2="8"
        stroke="rgb(var(--fg))"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="58"
        y1="4"
        x2="54"
        y2="8"
        stroke="rgb(var(--fg))"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Body */}
      <rect
        x="25"
        y="20"
        width="50"
        height="55"
        rx="8"
        fill="rgb(var(--card))"
        stroke="rgb(var(--fg))"
        strokeWidth="3"
      />

      {/* Screen face */}
      <rect
        x="30"
        y="25"
        width="40"
        height="35"
        rx="4"
        fill="rgb(var(--bg))"
        stroke="rgb(var(--fg))"
        strokeWidth="2"
      />

      {/* Eyes */}
      <ellipse cx="40" cy="40" rx="5" ry="6" fill="rgb(var(--fg))" />
      <ellipse cx="60" cy="40" rx="5" ry="6" fill="rgb(var(--fg))" />

      {/* Eye highlights */}
      <circle cx="42" cy="38" r="1.5" fill="rgb(var(--card))" />
      <circle cx="62" cy="38" r="1.5" fill="rgb(var(--card))" />

      {/* Friendly smile */}
      <path
        d="M38,50 Q50,58 62,50"
        fill="none"
        stroke="rgb(var(--fg))"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Badge - MM */}
      <rect x="38" y="62" width="24" height="10" rx="2" fill="rgb(var(--fg))" />
      <text
        x="50"
        y="70"
        fontSize="6"
        fontWeight="bold"
        fontFamily="var(--font-mono)"
        fill="rgb(var(--warn))"
        textAnchor="middle"
      >
        MM
      </text>

      {/* Arms */}
      <g>
        <rect
          x="12"
          y="38"
          width="15"
          height="8"
          rx="3"
          fill="rgb(var(--card))"
          stroke="rgb(var(--fg))"
          strokeWidth="2"
        />
        <circle
          cx="14"
          cy="42"
          r="4"
          fill="rgb(var(--card))"
          stroke="rgb(var(--fg))"
          strokeWidth="2"
        />
      </g>
      <g>
        <rect
          x="73"
          y="38"
          width="15"
          height="8"
          rx="3"
          fill="rgb(var(--card))"
          stroke="rgb(var(--fg))"
          strokeWidth="2"
        />
        <circle
          cx="86"
          cy="42"
          r="4"
          fill="rgb(var(--card))"
          stroke="rgb(var(--fg))"
          strokeWidth="2"
        />
      </g>

      {/* Legs */}
      <rect
        x="32"
        y="75"
        width="12"
        height="10"
        rx="2"
        fill="rgb(var(--card))"
        stroke="rgb(var(--fg))"
        strokeWidth="2"
      />
      <rect
        x="56"
        y="75"
        width="12"
        height="10"
        rx="2"
        fill="rgb(var(--card))"
        stroke="rgb(var(--fg))"
        strokeWidth="2"
      />

      {/* Feet */}
      <rect x="30" y="85" width="16" height="6" rx="2" fill="rgb(var(--fg))" />
      <rect x="54" y="85" width="16" height="6" rx="2" fill="rgb(var(--fg))" />
    </motion.svg>
  );
}
