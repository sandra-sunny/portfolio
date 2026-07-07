"use client";
import { motion } from "framer-motion";
import { Blocks, Sigma, Building2, GraduationCap, ChefHat, Rocket, Flag } from "lucide-react";

const ICONS: Record<string, typeof Flag> = {
  Blocks,
  Sigma,
  Building2,
  GraduationCap,
  ChefHat,
  Rocket,
};

type Stop = {
  kind: "milestone" | "checkpoint" | "side";
  location?: string;
  title?: string;
  icon?: string;
  highlight?: boolean;
  text: string;
};

export function StoryPath({ stops }: { stops: Stop[] }) {
  let sideToggle = 0;

  return (
    <div className="journey">
      <div className="journey-trail" aria-hidden="true" />

      {stops.map((stop, i) => {
        if (stop.kind === "checkpoint") {
          return (
            <motion.div
              key={i}
              className="journey-checkpoint"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <Flag size={16} aria-hidden="true" />
              <span>{stop.text}</span>
            </motion.div>
          );
        }

        const Icon = ICONS[stop.icon ?? ""] ?? Flag;
        const right = sideToggle++ % 2 === 1;
        const classes = [
          "journey-item",
          right ? "journey-item-right" : "",
          stop.kind === "side" ? "journey-item-side" : "",
        ].join(" ");

        return (
          <motion.div
            key={i}
            className={classes}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.35 }}
          >
            <div className={`journey-node ${stop.highlight ? "journey-node-highlight" : ""}`}>
              <Icon size={20} aria-hidden="true" />
            </div>
            <div className={`journey-card ${stop.highlight ? "journey-card-highlight" : ""}`}>
              <div className="journey-location">{stop.location}</div>
              <div className="journey-title">{stop.title}</div>
              <p className="journey-text">{stop.text}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
