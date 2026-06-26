type Props = { className?: string };

// A single Bodhi leaf — heart-shaped with the characteristic long drip-tip.
function BodhiLeaf({
  x,
  y,
  scale,
  rotate,
}: {
  x: number;
  y: number;
  scale: number;
  rotate: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <path
        d="M0 14 C -1.5 9 -7 7.5 -8 4 C -9 0 -5 -2.5 -3 -0.5 C -1.5 1 0 2 0 2 C 0 2 1.5 1 3 -0.5 C 5 -2.5 9 0 8 4 C 7 7.5 1.5 9 0 14 Z"
        fill="url(#bodhi-leaf)"
      />
    </g>
  );
}

/** A peaceful Bodhi tree silhouette — the tree under which the Buddha awakened. */
export function BodhiTree({ className }: Props) {
  return (
    <svg
      viewBox="0 0 400 540"
      preserveAspectRatio="xMidYMin meet"
      className={className}
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="bodhi-canopy" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.74 0.11 150)" />
          <stop offset="100%" stopColor="oklch(0.56 0.10 152)" />
        </linearGradient>
        <linearGradient id="bodhi-leaf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.12 145)" />
          <stop offset="100%" stopColor="oklch(0.62 0.11 150)" />
        </linearGradient>
        <linearGradient id="bodhi-trunk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.56 0.06 62)" />
          <stop offset="100%" stopColor="oklch(0.42 0.05 50)" />
        </linearGradient>
      </defs>

      {/* trunk */}
      <path
        d="M184 540 C 180 440 188 330 196 246 L 205 246 C 213 330 221 440 217 540 Z"
        fill="url(#bodhi-trunk)"
      />
      {/* branches reaching into the canopy */}
      <g
        stroke="url(#bodhi-trunk)"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M200 258 C 160 236 128 214 108 178" />
        <path d="M200 258 C 244 232 282 216 302 180" />
        <path d="M200 268 C 196 222 196 182 200 150" />
        <path d="M150 220 C 132 206 120 196 108 178" />
        <path d="M252 220 C 270 206 284 196 302 180" />
      </g>

      {/* canopy — overlapping foliage for an organic crown */}
      <g fill="url(#bodhi-canopy)">
        <circle cx="200" cy="120" r="108" />
        <circle cx="112" cy="150" r="68" />
        <circle cx="288" cy="150" r="68" />
        <circle cx="150" cy="86" r="66" />
        <circle cx="250" cy="86" r="66" />
        <circle cx="200" cy="58" r="58" />
        <circle cx="82" cy="172" r="44" />
        <circle cx="318" cy="172" r="44" />
        <circle cx="200" cy="190" r="74" />
      </g>

      {/* a few distinct heart-shaped leaves along the canopy edge */}
      <g opacity="0.9">
        <BodhiLeaf x={70} y={196} scale={3.4} rotate={-28} />
        <BodhiLeaf x={130} y={232} scale={3.0} rotate={-12} />
        <BodhiLeaf x={200} y={250} scale={3.6} rotate={4} />
        <BodhiLeaf x={272} y={232} scale={3.0} rotate={16} />
        <BodhiLeaf x={332} y={196} scale={3.4} rotate={30} />
        <BodhiLeaf x={250} y={40} scale={2.6} rotate={18} />
        <BodhiLeaf x={150} y={40} scale={2.6} rotate={-18} />
      </g>
    </svg>
  );
}
