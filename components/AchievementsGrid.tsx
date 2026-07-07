"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, TrendingUp, FlaskConical, Trophy, Crown, Award, GraduationCap, Vote, Accessibility, Zap } from "lucide-react";

const ICONS: Record<string, typeof Trophy> = {
  Users,
  TrendingUp,
  FlaskConical,
  Crown,
  Award,
  GraduationCap,
  Vote,
  Accessibility,
  Zap,
};

type Win = { stat: string; label: string; detail: string; icon: string };

export function AchievementsGrid({ wins }: { wins: Win[] }) {
  const [toasts, setToasts] = useState<{ id: number; label: string }[]>([]);
  const [seen, setSeen] = useState<Set<number>>(new Set());

  const unlock = useCallback(
    (i: number, label: string) => {
      if (seen.has(i)) return;
      setSeen((prev) => new Set(prev).add(i));
      const id = Date.now() + i;
      setToasts((t) => [...t, { id, label }]);
      setTimeout(() => {
        setToasts((t) => t.filter((x) => x.id !== id));
      }, 2600);
    },
    [seen]
  );

  return (
    <>
      <div className="toast-stack">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              className="achievement-toast"
            >
              <Trophy size={16} />
              <span>Achievement Unlocked: {t.label}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {wins.map((w, i) => {
          const Icon = ICONS[w.icon] ?? Trophy;
          return (
            <motion.div
              key={i}
              className="achievement-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              onViewportEnter={() => unlock(i, w.label)}
              transition={{ duration: 0.4 }}
            >
              <div className="achievement-icon">
                <Icon size={22} />
              </div>
              <div>
                <div className="achievement-stat">{w.stat}</div>
                <div className="achievement-label">{w.label}</div>
                <p className="achievement-detail">{w.detail}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
