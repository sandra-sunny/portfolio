"use client";
import { motion } from "framer-motion";

type Skill = { category: string; level: number; items: string[] };

const MAX_LEVEL = 5;

export function StatSheet({ skills }: { skills: Skill[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {skills.map((sk, i) => (
        <div key={i} className="stat-sheet-card">
          <div className="stat-sheet-header">
            <span>{sk.category}</span>
            <span className="stat-sheet-level">LV.{sk.level}</span>
          </div>

          <div className="pip-row">
            {Array.from({ length: MAX_LEVEL }, (_, p) => (
              <motion.span
                key={p}
                className={`pip ${p < sk.level ? "filled" : ""}`}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.25, delay: i * 0.08 + p * 0.07 }}
              />
            ))}
          </div>

          <ul className="stat-sheet-list">
            {sk.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
