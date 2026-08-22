'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

// A restrained, once-per-section entrance used across the site — the
// "subtle reveal" pattern, not per-card stagger animation. Whole sections
// arrive quietly as they're scrolled into view; nothing repeats, nothing
// bounces. Fully skipped for users who prefer reduced motion.
export const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0, y = 16 }) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
