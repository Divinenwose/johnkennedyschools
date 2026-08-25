'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '@/config/hero-slides-config';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

const SLIDE_DURATION = 6500;

export const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const total = heroSlides.length;
  const slide = heroSlides[index];

  const goTo = useCallback((i: number) => setIndex(((i % total) + total) % total), [total]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Auto-advance — paused on hover/focus, and skipped entirely for users
  // who prefer reduced motion (autoplay itself, not just the transition,
  // is the concern there).
  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % total), SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPaused, prefersReducedMotion, total]);

  // Pause when the tab isn't visible, so we're not silently cycling (and
  // wasting the transition) in a background tab.
  useEffect(() => {
    const handleVisibility = () => setIsPaused(document.hidden);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  return (
    <section
      className="relative min-h-[92svh] md:min-h-screen flex items-end overflow-hidden bg-navy-950"
      role="region"
      aria-roledescription="carousel"
      aria-label="Homepage highlights"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Background Image — crossfades between slides */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.image}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1 }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* Cinematic scrim: strong from the left/bottom where the text sits,
            fading toward the right so the photograph still reads. */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/20 to-transparent" />
      </div>

      {/* Content */}
      <Container className="relative z-10 w-full pb-20 md:pb-28 pt-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="max-w-2xl"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold-400" aria-hidden="true" />
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-gold-300">
                {slide.eyebrow}
              </p>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] text-ivory-50">
              {slide.headline.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < slide.headline.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>

            {/* Supporting copy */}
            <p className="mt-6 text-base sm:text-lg text-ivory-100/80 leading-relaxed max-w-lg">
              {slide.subtext}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
              <Button href={slide.primaryCta.href} variant="secondary" size="lg" className="w-full sm:w-auto">
                {slide.primaryCta.label}
              </Button>
              <Button href={slide.secondaryCta.href} variant="outlineLight" size="lg" className="w-full sm:w-auto">
                {slide.secondaryCta.label}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="mt-12 flex items-center gap-6">
          <div className="flex items-center gap-2">
            {heroSlides.map((s, i) => (
              <button
                key={s.image}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1} of ${total}`}
                aria-current={i === index}
                className={`h-1.5 transition-all duration-300 ${
                  i === index ? 'w-8 bg-gold-500' : 'w-1.5 bg-ivory-50/40 hover:bg-ivory-50/70'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 ml-auto sm:ml-0">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-9 h-9 flex items-center justify-center border border-ivory-50/30 text-ivory-50 hover:bg-ivory-50 hover:text-navy-900 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="w-9 h-9 flex items-center justify-center border border-ivory-50/30 text-ivory-50 hover:bg-ivory-50 hover:text-navy-900 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Screen-reader-only slide announcement */}
        <span className="sr-only" aria-live="polite">
          {`Slide ${index + 1} of ${total}: ${slide.headline.join(' ')}`}
        </span>
      </Container>
    </section>
  );
};
