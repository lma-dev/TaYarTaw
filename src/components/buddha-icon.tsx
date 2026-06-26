type Props = { className?: string };

/** A serene seated Buddha in meditation, with a soft golden halo. */
export function BuddhaIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden
    >
      <defs>
        <radialGradient id="buddha-halo" cx="50%" cy="38%" r="58%">
          <stop offset="0%" stopColor="oklch(0.94 0.12 92)" stopOpacity="0.95" />
          <stop offset="65%" stopColor="oklch(0.86 0.11 82)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="oklch(0.86 0.11 82)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="buddha-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.82 0.13 78)" />
          <stop offset="100%" stopColor="oklch(0.60 0.12 58)" />
        </linearGradient>
      </defs>

      {/* halo */}
      <circle cx="50" cy="42" r="34" fill="url(#buddha-halo)" />

      {/* robed body */}
      <path
        d="M50 49 C 33 49 24 67 22 86 C 22 90 25 92 30 92 L 70 92 C 75 92 78 90 78 86 C 76 67 67 49 50 49 Z"
        fill="url(#buddha-gold)"
      />
      {/* crossed legs base */}
      <ellipse cx="50" cy="89" rx="31" ry="7.5" fill="url(#buddha-gold)" />
      {/* hands resting in lap (dhyana mudra) */}
      <path
        d="M37 85 Q50 79 63 85 Q57 90 50 90 Q43 90 37 85 Z"
        fill="oklch(0 0 0 / 0.12)"
      />

      {/* head */}
      <ellipse cx="50" cy="37" rx="13" ry="15" fill="url(#buddha-gold)" />
      {/* ushnisha (crown of wisdom) */}
      <circle cx="50" cy="19" r="5.5" fill="url(#buddha-gold)" />
      <circle cx="50" cy="14.2" r="2.3" fill="url(#buddha-gold)" />
      {/* urna */}
      <circle cx="50" cy="36" r="1.3" fill="oklch(1 0 0 / 0.55)" />
    </svg>
  );
}
