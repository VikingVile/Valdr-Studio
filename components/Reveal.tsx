"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

const animation = {
  duration: 0.75,
  ease: [0.22, 1, 0.36, 1] as const,
};

const variants = {
  up: {
    hidden: { opacity: 0, y: 45 },
    show: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -45 },
    show: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0 },
  },
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.22 }}
      variants={variants[direction]}
      transition={{ ...animation, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
