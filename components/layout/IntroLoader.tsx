'use client';

import { useEffect } from 'react';

const INTRO_SEEN_KEY = 'jkis-intro-v2-seen';
const INTRO_COMPLETE_KEY = 'jkis-intro-v2-complete';
const INTRO_DURATION = 7000;

export function IntroLoader() {
  useEffect(() => {
    const overlay = document.getElementById('site-intro-overlay');

    if (!overlay) return;

    if (sessionStorage.getItem(INTRO_COMPLETE_KEY)) {
      document.documentElement.classList.add('intro-seen');
      overlay.style.display = 'none';
      return;
    }

    sessionStorage.setItem(INTRO_SEEN_KEY, '1');
    document.documentElement.style.overflow = 'hidden';

    const fill = overlay.querySelector<HTMLElement>('.intro-progress-fill');
    const walker = document.getElementById('intro-walker');
    const track = overlay.querySelector<HTMLElement>('.intro-progress-track');
    const value = document.getElementById('intro-progress-value');
    const startedAt = Date.now();
    const progressTimer = window.setInterval(() => {
      const progress = Math.min((Date.now() - startedAt) / INTRO_DURATION, 1);
      const percent = Math.round(progress * 100);

      if (fill) fill.style.width = `${percent}%`;
      if (value) value.textContent = `Loading ${percent}%`;
      if (walker && track) {
        walker.style.left = `${progress * track.clientWidth}px`;
      }

      if (progress >= 1) window.clearInterval(progressTimer);
    }, 50);

    const finishTimer = window.setTimeout(() => {
      sessionStorage.setItem(INTRO_COMPLETE_KEY, '1');
      overlay.classList.add('intro-fade-out');
      document.documentElement.style.overflow = '';

      window.setTimeout(() => {
        overlay.style.display = 'none';
        window.dispatchEvent(new Event('jkis-intro-complete'));
      }, 650);
    }, INTRO_DURATION);

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(finishTimer);
      document.documentElement.style.overflow = '';
    };
  }, []);

  return null;
}