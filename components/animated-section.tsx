"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

const variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  id,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={clsx("section-anchor w-full", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25, margin: "-80px" }}
      transition={{
        delay,
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}
