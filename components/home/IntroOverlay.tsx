'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

const SESSION_KEY = 'jkis-intro-seen';

// A brief, non-blocking entrance flourish — NOT the old full-page loading
// gate. Real content underneath renders and hydrates immediately; this is
// a thin decorative layer on top that fades out on its own after ~1s, and
// only ever plays once per browser tab session. Skipped entirely for
// users who prefer reduced motion.
export const IntroOverlay: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const alreadySeen = sessionStorage.getItem(SESSION_KEY);
    if (alreadySeen) return;

    setVisible(true);
    sessionStorage.setItem(SESSION_KEY, 'true');

    const timer = setTimeout(() => setVisible(false), 1000);
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950 pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src="/images/logo.png" alt="" width={56} height={56} className="object-contain" />
            <span className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-300">
              John Kennedy International Schools
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
