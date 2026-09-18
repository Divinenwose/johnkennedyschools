'use client';

import { useEffect } from 'react';

const INTRO_SEEN_KEY = 'jkis-intro-v2-seen';
const INTRO_COMPLETE_KEY = 'jkis-intro-v2-complete';
const INTRO_DURATION = 7000;

// Muted gold at 0% progress, brightening toward this vivid gold at 100% —
// interpolated each tick so the fill's *color*, not just its width,
// visibly shows how far along loading is.
const FILL_COLOR_START = { r: 150, g: 121, b: 47 }; // --gold-600
const FILL_COLOR_END = { r: 231, g: 210, b: 158 }; // --gold-300

function lerpColor(from: typeof FILL_COLOR_START, to: typeof FILL_COLOR_START, t: number) {
  const r = Math.round(from.r + (to.r - from.r) * t);
  const g = Math.round(from.g + (to.g - from.g) * t);
  const b = Math.round(from.b + (to.b - from.b) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

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
    const value = document.getElementById('intro-progress-value');
    const startedAt = Date.now();
    const progressTimer = window.setInterval(() => {
      const progress = Math.min((Date.now() - startedAt) / INTRO_DURATION, 1);
      const percent = Math.round(progress * 100);

      if (fill) {
        fill.style.width = `${percent}%`;
        const color = lerpColor(FILL_COLOR_START, FILL_COLOR_END, progress);
        fill.style.setProperty('--intro-fill-color', color);
        fill.style.setProperty('--intro-fill-glow', color);
      }
      if (value) value.textContent = `Loading ${percent}%`;

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