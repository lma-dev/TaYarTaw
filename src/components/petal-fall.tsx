"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Drift = {
  id: number;
  kind: "petal" | "leaf";
  left: number; // vw start position
  size: number; // px
  duration: number; // s — slow & peaceful
  delay: number; // s — staggered entry
  sway: number; // px horizontal drift amplitude
  rotate: number; // total rotation (deg)
  color: string;
  opacity: number;
};

// Soft lotus tones (pinks & gold) for petals.
const PETAL_COLORS = [
  "oklch(0.80 0.13 18)", // rose pink
  "oklch(0.83 0.12 28)", // coral pink
  "oklch(0.76 0.14 10)", // deeper petal pink
  "oklch(0.86 0.11 80)", // warm gold
];

// Bodhi leaf greens & gold.
const LEAF_COLORS = [
  "oklch(0.66 0.12 150)", // leaf green
  "oklch(0.72 0.11 145)", // fresh green
  "oklch(0.78 0.11 130)", // gold-green
];

// Deterministic so server and client render identically (no hydration mismatch).
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeDrift(count: number): Drift[] {
  const rand = mulberry32(20260626);
  return Array.from({ length: count }, (_, id) => {
    const isLeaf = id % 3 === 0; // ~1 in 3 is a Bodhi leaf
    const dir = id % 2 === 0 ? 1 : -1;
    return {
      id,
      kind: isLeaf ? "leaf" : "petal",
      left: rand() * 100,
      size: (isLeaf ? 22 : 26) + rand() * 22, // 22–48px
      duration: 11 + rand() * 9, // 11–20s
      delay: rand() * 18, // spread across the cycle
      sway: 30 + rand() * 60,
      rotate: dir * (140 + rand() * 220),
      color: isLeaf
        ? LEAF_COLORS[id % LEAF_COLORS.length]
        : PETAL_COLORS[id % PETAL_COLORS.length],
      opacity: 0.55 + rand() * 0.35, // 0.55–0.9
    };
  });
}

function PetalShape({ size, color }: { size: number; color: string }) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 20 28"
      fill="none"
      style={{ filter: "drop-shadow(0 2px 4px oklch(0 0 0 / 0.08))" }}
    >
      {/* almond-shaped lotus petal */}
      <path d="M10 0C15 7 18 17 10 28C2 17 5 7 10 0Z" fill={color} />
      {/* soft inner highlight */}
      <path d="M10 3C13 9 14.5 17 10 25C8 18 8 10 10 3Z" fill="oklch(1 0 0 / 0.28)" />
    </svg>
  );
}

function LeafShape({ size, color }: { size: number; color: string }) {
  return (
    <svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 24 30"
      fill="none"
      style={{ filter: "drop-shadow(0 2px 4px oklch(0 0 0 / 0.08))" }}
    >
      {/* heart-shaped Bodhi leaf with a long drip-tip */}
      <path
        d="M12 29 C 10 22 3 19 2 12 C 1 6 6 2 9 5 C 10.5 6.5 12 8 12 8 C 12 8 13.5 6.5 15 5 C 18 2 23 6 22 12 C 21 19 14 22 12 29 Z"
        fill={color}
      />
      {/* central vein */}
      <path d="M12 8 L12 27" stroke="oklch(0 0 0 / 0.14)" strokeWidth="0.7" />
    </svg>
  );
}

export function PetalFall({ count = 18 }: { count?: number }) {
  const reduceMotion = useReducedMotion();
  const items = useMemo(() => makeDrift(count), [count]);

  if (reduceMotion) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {items.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-0"
          style={{ left: `${p.left}vw` }}
          initial={{ y: "-12vh", x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: "114vh",
            x: [0, p.sway, -p.sway * 0.6, p.sway * 0.4, 0],
            rotate: p.rotate,
            opacity: [0, p.opacity, p.opacity, p.opacity, 0],
          }}
          transition={{
            y: { duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" },
            rotate: { duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" },
            x: { duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {p.kind === "leaf" ? (
            <LeafShape size={p.size} color={p.color} />
          ) : (
            <PetalShape size={p.size} color={p.color} />
          )}
        </motion.div>
      ))}
    </div>
  );
}
