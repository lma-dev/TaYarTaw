"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Calendar, HelpCircle, Mail, MessageSquare, Video } from "lucide-react";
import { PetalFall } from "@/components/petal-fall";
import { BodhiTree } from "@/components/bodhi-tree";
import { BuddhaIcon } from "@/components/buddha-icon";
import data from "./data.json";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 * i,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.12 * i,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const drawLine = {
  hidden: { scaleX: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    transition: {
      delay: 0.12 * i,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const pulseGlow = {
  boxShadow: [
    "0 0 0 0 oklch(0.65 0.15 145 / 0)",
    "0 0 0 8px oklch(0.65 0.15 145 / 0.15)",
    "0 0 0 0 oklch(0.65 0.15 145 / 0)",
  ],
  transition: {
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export default function InvitationPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[oklch(0.95_0.005_250)] px-4 py-12">
      {/* Animated background orbs */}
      <motion.div
        className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[oklch(0.90_0.03_250)] opacity-30 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[oklch(0.88_0.025_280)] opacity-20 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bodhi tree — the tree of enlightenment, resting behind the card */}
      <motion.div
        className="pointer-events-none fixed inset-x-0 top-0 z-0 flex justify-center"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 0.22, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <BodhiTree className="w-[min(880px,150vw)]" />
      </motion.div>

      {/* Gently drifting lotus petals & Bodhi leaves */}
      <PetalFall />

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[480px]"
      >
        <motion.div
          custom={0}
          variants={fadeUp}
          whileHover={{ scale: 1.01, y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <Card className="border-0 bg-white shadow-2xl shadow-black/8 rounded-2xl overflow-hidden ring-0">
            <CardContent className="px-7 pt-8 pb-7">
              {/* Avatar */}
              <motion.div
                custom={1}
                variants={scaleIn}
                className="flex justify-center mb-2.5"
              >
                <motion.div
                  className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-linear-to-b from-amber-50 to-orange-50 ring-2 ring-amber-200/70"
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <BuddhaIcon className="size-16" />
                </motion.div>
              </motion.div>

              {/* Subtitle & Monastery */}
              <motion.div
                custom={2}
                variants={fadeUp}
                className="text-center mb-3"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">
                  {data.subtitle}
                </p>
                <p className="text-[11px] text-muted-foreground/70 mt-0.5">
                  {data.subtitleDetail}
                </p>
                <p className="text-[11px] text-muted-foreground/60 mt-0.5">
                  {data.monastery}
                </p>
              </motion.div>

              {/* Reservation Badge */}
              <motion.div
                custom={3}
                variants={scaleIn}
                className="flex justify-center mb-5"
              >
                <motion.div
                  className="rounded-full"
                  animate={{ boxShadow: pulseGlow.boxShadow }}
                  transition={pulseGlow.transition}
                >
                  <Badge
                    variant="outline"
                    className="gap-1.5 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium rounded-full"
                  >
                    <Mail className="size-4 text-green-500" />
                    {data.badgeText}
                  </Badge>
                </motion.div>
              </motion.div>

              {/* Date */}
              <motion.div custom={4} variants={fadeUp} className="mb-3">
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="size-4 text-muted-foreground" />
                  <p className="text-sm font-semibold text-foreground">
                    {data.day} ({data.date})
                  </p>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div custom={5} variants={fadeUp} className="mb-3">
                <p className="text-sm leading-relaxed text-muted-foreground text-center">
                  {data.description}
                </p>
              </motion.div>

              {/* Invitation */}
              <motion.div custom={6} variants={fadeUp} className="mb-5">
                <p className="text-sm leading-relaxed text-muted-foreground text-center">
                  {data.invitation}
                </p>
              </motion.div>

              {/* Schedule */}
              <motion.div custom={7} variants={fadeUp} className="mb-5">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 font-medium text-center">
                  {data.scheduleLabel}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {data.schedule.map((item) => (
                    <motion.div
                      key={item.label}
                      className="rounded-xl bg-[oklch(0.96_0.005_250)] px-3 py-2.5 text-center"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-0.5 font-medium">
                        {item.label}
                      </p>
                      <p className="text-xl font-bold text-foreground tabular-nums">
                        {item.time}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Separator */}
              <motion.div
                custom={8}
                variants={drawLine}
                className="origin-center"
              >
                <Separator className="my-3 bg-border/60" />
              </motion.div>

              {/* Meeting Links */}
              <motion.div custom={9} variants={fadeUp} className="mb-3">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 font-medium text-center">
                  {data.meetingLinksTitle}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {data.meetingLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      className={
                        link.primary
                          ? "flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 px-4"
                          : "flex items-center justify-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 py-2.5 px-4"
                      }
                      whileHover={{ scale: 1.02, y: -1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <Video
                        className={
                          link.primary
                            ? "size-4 text-white/80"
                            : "size-4 text-emerald-600"
                        }
                      />
                      <span
                        className={
                          link.primary
                            ? "text-sm font-semibold text-white"
                            : "text-sm font-semibold text-emerald-700"
                        }
                      >
                        {link.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Feedback Form */}
              <motion.div custom={10} variants={fadeUp}>
                <motion.a
                  href={data.feedbackForm.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-border bg-[oklch(0.96_0.005_250)] py-2.5 px-4"
                  whileHover={{ scale: 1.02, y: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <MessageSquare className="size-4 text-muted-foreground" />
                  <span className="text-xs font-medium tracking-wide text-muted-foreground">
                    {data.feedbackForm.label}
                  </span>
                </motion.a>
              </motion.div>

              {/* Guide Link */}
              <motion.div custom={11} variants={fadeUp} className="mt-3">
                <a
                  href="/guide"
                  className="flex items-center justify-center gap-1.5 py-1 text-[11px] text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                >
                  <HelpCircle className="size-3" />
                  ဝင်ရောက်နည်း လမ်းညွှန်
                </a>
              </motion.div>

            </CardContent>
          </Card>
        </motion.div>

      </motion.div>
    </main>
  );
}
