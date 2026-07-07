"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export function XPBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="xp-track">
      <motion.div className="xp-fill" style={{ scaleX }} />
    </div>
  );
}
