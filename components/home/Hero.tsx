'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { schoolImages } from '@/config/images-config';
import { schoolConfig } from '@/config/school-config';
import { admissionsConfig } from '@/config/admissions-config';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[92svh] md:min-h-screen flex items-end overflow-hidden bg-navy-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={schoolImages.hero}
          alt="Students at John Kennedy International Schools"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Cinematic scrim: strong from the left/bottom where the text sits,
            fading toward the right so the photograph still reads. */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 md:pb-24 pt-40">
        <motion.div
          className="max-w-2xl"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow: identity, established first */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-gold-400" aria-hidden="true" />
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-gold-300">
              {schoolConfig.name}
            </p>
          </div>

          {/* Headline — the school's own tagline, preserved */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] text-ivory-50">
            {schoolConfig.tagline.split('. ').map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 ? '.' : ''}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>

          {/* Supporting copy */}
          <p className="mt-6 text-base sm:text-lg text-ivory-100/80 leading-relaxed max-w-lg">
            A nurturing, disciplined academic community in Surulere, Lagos —
            preparing confident, capable students from nursery through
            secondary school for a changing world.
          </p>

          {/* Admissions, integrated naturally rather than as a separate shout */}
          {admissionsConfig.isOpen && (
            <div className="mt-8 inline-flex items-center gap-2 text-xs sm:text-sm">
              <span className="w-1.5 h-1.5 bg-gold-500 rotate-45 flex-shrink-0" aria-hidden="true" />
              <span className="text-ivory-50 font-medium">{admissionsConfig.popup.title}</span>
              <span className="text-ivory-100/60 hidden sm:inline">— {admissionsConfig.announcement.message}</span>
            </div>
          )}

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button href={admissionsConfig.registrationUrl} variant="secondary" size="lg" external>
              Apply Now
            </Button>
            <Button href="/about" variant="outlineLight" size="lg">
              Explore Our School
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
