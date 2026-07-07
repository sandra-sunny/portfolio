"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun } from "lucide-react";
import { siteContent } from "@/lib/content";

const STORAGE_KEY = "sunnystreak-log";
const copy = siteContent.game.sunnystreak;

function dayKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function loadLog(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

// Consecutive logged days ending today, or ending yesterday if today
// hasn't been logged yet (so the streak isn't shown as broken mid-day).
function calcStreak(log: Set<string>): number {
  const d = new Date();
  if (!log.has(dayKey(d))) d.setDate(d.getDate() - 1);
  let streak = 0;
  while (log.has(dayKey(d))) {
    streak++;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}

function lastSevenDays(): Date[] {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d;
  });
}

function message(streak: number, todayLogged: boolean): string {
  if (streak === 0) return copy.msgZero;
  if (!todayLogged) return copy.msgKeepAlive;
  if (streak === 1) return copy.msgOne;
  if (streak >= 7) return copy.msgWeek.replace("{n}", String(streak));
  return copy.msgBuilding.replace("{n}", String(streak));
}

export function SunnyStreak() {
  const [log, setLog] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);
  const [justLogged, setJustLogged] = useState(false);

  useEffect(() => {
    setLog(loadLog());
    setMounted(true);
  }, []);

  const today = dayKey(new Date());
  const todayLogged = log.has(today);
  const streak = calcStreak(log);

  const logToday = () => {
    if (todayLogged) return;
    const next = new Set(log).add(today);
    setLog(next);
    setJustLogged(true);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
    } catch {
      // private browsing etc. — the streak just won't survive a reload
    }
  };

  return (
    <div className="streak-card">
      <div className="streak-kicker mono">{copy.kicker}</div>
      <div className="streak-title">{copy.title}</div>
      <p className="streak-intro">{copy.intro}</p>

      <div className="streak-week" aria-hidden={!mounted}>
        {lastSevenDays().map((d) => {
          const key = dayKey(d);
          const lit = mounted && log.has(key);
          const isToday = key === today;
          return (
            <div key={key} className="streak-day">
              <div className={`streak-cell${lit ? " lit" : ""}${isToday ? " today" : ""}`}>
                {lit && (
                  <motion.span
                    initial={justLogged && isToday ? { scale: 0, rotate: -90 } : false}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="streak-sun"
                  >
                    <Sun size={16} strokeWidth={2.5} />
                  </motion.span>
                )}
              </div>
              <span className="streak-day-label mono">
                {d.toLocaleDateString("en-US", { weekday: "narrow" })}
              </span>
            </div>
          );
        })}
        <div className="streak-count mono">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={mounted ? streak : "x"}
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {mounted ? streak : 0}
            </motion.span>
          </AnimatePresence>
          <span className="streak-count-label">{copy.countLabel}</span>
        </div>
      </div>

      <div className="streak-footer">
        <button
          className="btn-game streak-btn"
          onClick={logToday}
          disabled={!mounted || todayLogged}
        >
          {mounted && todayLogged ? copy.buttonDone : copy.button}
        </button>
        <p className="streak-msg" aria-live="polite">
          {mounted ? message(streak, todayLogged) : copy.msgZero}
        </p>
      </div>
    </div>
  );
}
