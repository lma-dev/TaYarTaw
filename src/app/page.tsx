"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CircleCheck, Mail, User, Video } from "lucide-react";

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
            <CardContent className="px-8 pt-10 pb-8">
              {/* Avatar */}
              <motion.div
                custom={1}
                variants={scaleIn}
                className="flex justify-center mb-3"
              >
                <motion.div
                  className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-muted ring-2 ring-border"
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <User className="size-10 text-muted-foreground" />
                </motion.div>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                custom={2}
                variants={fadeUp}
                className="text-center mb-4"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">
                  Ashin Nwe Htwe
                </p>
              </motion.div>

              {/* Reservation Badge */}
              <motion.div
                custom={3}
                variants={scaleIn}
                className="flex justify-center mb-8"
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
                    တရားပွဲဖိတ်ကြားလွှာ
                  </Badge>
                </motion.div>
              </motion.div>

              {/* Description */}
              <motion.div custom={4} variants={fadeUp} className="mb-8">
                <p className="text-sm leading-relaxed text-muted-foreground text-center">
                  အပတ်စဉ်ကျင်းပသော တရားပွဲ၌ တရားနာလိုသော ညီအကို မောင်နှမများ အား
                  နိဗ္ဗာန်အကျိုးမျှော်၍ ဖိတ်ကြားအပ်ပါတယ်ခင်ဗျာ
                </p>
              </motion.div>

              {/* Schedule */}
              <motion.div custom={5} variants={fadeUp} className="mb-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 font-medium text-center">
                  အချိန်ဇယား
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <motion.div
                    className="rounded-xl bg-[oklch(0.96_0.005_250)] px-3 py-3 text-center"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-1 font-medium">
                      ဂျပန် (JST)
                    </p>
                    <p className="text-xl font-bold text-foreground tabular-nums">
                      21:45
                    </p>
                  </motion.div>
                  <motion.div
                    className="rounded-xl bg-[oklch(0.96_0.005_250)] px-3 py-3 text-center"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-1 font-medium">
                      မြန်မာ (MMT)
                    </p>
                    <p className="text-xl font-bold text-foreground tabular-nums">
                      19:15
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Separator */}
              <motion.div
                custom={7}
                variants={drawLine}
                className="origin-center"
              >
                <Separator className="my-4 bg-border/60" />
              </motion.div>

              {/* Meeting Links */}
              <motion.div
                custom={8}
                variants={fadeUp}
                className="grid grid-cols-2 gap-2 mb-4"
              >
                <motion.a
                  href="https://meet.google.com/cwd-hxmc-pmh"
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary py-3 px-3"
                  whileHover={{ scale: 1.02, y: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Video className="size-4 text-primary-foreground/70" />
                  <span className="text-sm font-semibold tracking-wide uppercase text-primary-foreground">
                    ကျင်းပရာနေရာ ၁
                  </span>
                </motion.a>
                <motion.a
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-xl border border-border bg-white py-3 px-3"
                  whileHover={{ scale: 1.02, y: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Video className="size-4 text-muted-foreground" />
                  <span className="text-sm font-semibold tracking-wide uppercase text-foreground">
                    ကျင်းပရာနေရာ ၂
                  </span>
                </motion.a>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer branding */}
        <motion.div custom={9} variants={fadeUp} className="mt-6 text-center">
          <p className="text-sm text-muted-foreground/40">
            နွေဦးလွတ်မြောက်ရေး နှင်းဆီ မှ ကျင်းပသည်
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
