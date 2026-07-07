"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { SunnyStreak } from "@/components/SunnyStreak";

type Project = {
  id: string;
  number: string;
  title: string;
  company: string;
  period?: string;
  tags: string[];
  description: string;
  outcome: string;
  link: string;
  difficulty: string;
  xp: number;
  demo?: string;
};

export function QuestLog({ projects }: { projects: Project[] }) {
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null);

  return (
    <div className="space-y-4">
      {projects.map((p) => {
        const open = openId === p.id;
        return (
          <div key={p.id} className="quest-card">
            <button
              className="quest-header"
              onClick={() => setOpenId(open ? null : p.id)}
              aria-expanded={open}
            >
              <div className="quest-header-left">
                <span className="quest-number">{p.number}</span>
                <div>
                  <div className="quest-title">{p.title}</div>
                  <div className="quest-company">
                    {p.company}
                    {p.period && <span className="quest-period"> · {p.period}</span>}
                  </div>
                </div>
              </div>
              <div className="quest-header-right">
                <span className="quest-difficulty">{p.difficulty}</span>
                <span className="quest-xp">+{p.xp} XP</span>
                <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={18} />
                </motion.span>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="quest-body-wrap"
                >
                  <div className="quest-body">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                    <p className="quest-description">{p.description}</p>
                    {p.demo === "sunnystreak" && <SunnyStreak />}
                    <div className="quest-footer">
                      <div className="quest-outcome">
                        <span className="quest-outcome-check">✓</span> {p.outcome}
                      </div>
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="quest-link">
                          View <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
