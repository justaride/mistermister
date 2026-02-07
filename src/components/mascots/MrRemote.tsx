import { motion } from 'framer-motion'
import { clsx } from 'clsx'

type Props = { size?: number; className?: string; animated?: boolean }

const idle = {
  y: [0, -2, 0],
  transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' as const },
}

const ping = {
  scale: [1, 1.3, 1],
  opacity: [1, 0.6, 1],
  transition: { duration: 1.2, repeat: Infinity, ease: 'easeInOut' as const },
}

export function MrRemote({ size = 64, className, animated = true }: Props) {
  const shouldAnimate = animated && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Mister Remote mascot"
      className={clsx('select-none', className)}
      animate={shouldAnimate ? idle : undefined}
    >
      {/* WiFi antenna */}
      <line x1="50" y1="10" x2="50" y2="18" stroke="rgb(var(--fg))" strokeWidth="3" strokeLinecap="round" />
      <motion.g animate={shouldAnimate ? ping : undefined}>
        <circle cx="50" cy="8" r="3" fill="#FFB000" stroke="rgb(var(--fg))" strokeWidth="2" />
      </motion.g>
      {/* WiFi arcs */}
      <path d="M42,8 Q50,2 58,8" fill="none" stroke="#FFB000" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <path d="M36,5 Q50,-3 64,5" fill="none" stroke="#FFB000" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

      {/* Body */}
      <rect x="25" y="20" width="50" height="55" rx="8" fill="rgb(var(--card))" stroke="rgb(var(--fg))" strokeWidth="3" />

      {/* Screen */}
      <rect x="30" y="25" width="40" height="35" rx="4" fill="rgb(var(--bg))" stroke="rgb(var(--fg))" strokeWidth="2" />

      {/* Eyes - half-lidded, waiting */}
      <ellipse cx="40" cy="40" rx="5" ry="4" fill="rgb(var(--fg))" />
      <ellipse cx="60" cy="40" rx="5" ry="4" fill="rgb(var(--fg))" />
      <circle cx="42" cy="39" r="1.5" fill="rgb(var(--card))" />
      <circle cx="62" cy="39" r="1.5" fill="rgb(var(--card))" />

      {/* Mouth - neutral line */}
      <path d="M40,50 L60,50" fill="none" stroke="rgb(var(--fg))" strokeWidth="2.5" strokeLinecap="round" />

      {/* Badge */}
      <rect x="35" y="62" width="30" height="10" rx="2" fill="rgb(var(--fg))" />
      <text x="50" y="70" fontSize="4.5" fontWeight="bold" fontFamily="var(--font-mono)" fill="#FFB000" textAnchor="middle">
        REMOTE
      </text>

      {/* Arms */}
      <rect x="12" y="38" width="15" height="8" rx="3" fill="rgb(var(--card))" stroke="rgb(var(--fg))" strokeWidth="2" />
      <circle cx="14" cy="42" r="4" fill="rgb(var(--card))" stroke="rgb(var(--fg))" strokeWidth="2" />
      <rect x="73" y="38" width="15" height="8" rx="3" fill="rgb(var(--card))" stroke="rgb(var(--fg))" strokeWidth="2" />
      <circle cx="86" cy="42" r="4" fill="rgb(var(--card))" stroke="rgb(var(--fg))" strokeWidth="2" />

      {/* Legs + feet */}
      <rect x="32" y="75" width="12" height="10" rx="2" fill="rgb(var(--card))" stroke="rgb(var(--fg))" strokeWidth="2" />
      <rect x="56" y="75" width="12" height="10" rx="2" fill="rgb(var(--card))" stroke="rgb(var(--fg))" strokeWidth="2" />
      <rect x="30" y="85" width="16" height="6" rx="2" fill="rgb(var(--fg))" />
      <rect x="54" y="85" width="16" height="6" rx="2" fill="rgb(var(--fg))" />
    </motion.svg>
  )
}
