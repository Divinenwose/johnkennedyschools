import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  image?: string;
  overlay?: 'standard' | 'diagonal' | 'deep';
}

const overlayStyles = {
  // Bottom-weighted + left-weighted scrim — matches the homepage Hero
  standard: [
    'bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40',
    'bg-gradient-to-r from-navy-950/90 via-navy-950/40 to-transparent',
  ],
  // Corner-weighted scrim, for images with strong center-frame subjects
  diagonal: [
    'bg-gradient-to-tr from-navy-950/95 via-navy-950/55 to-navy-950/15',
    'bg-gradient-to-b from-navy-950/50 via-transparent to-navy-950/60',
  ],
  // Heavier overall wash, for busier/brighter source photographs
  deep: [
    'bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/55',
    'bg-gradient-to-r from-navy-950/80 via-navy-950/50 to-navy-950/20',
  ],
};

// Shared editorial header band for interior pages — quieter than the
// homepage hero, but drawn from the same navy/gold system (and, with an
// image supplied, the same cinematic overlay treatment) so every page
// still reads as one institution.
export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  description,
  children,
  image,
  overlay = 'standard',
}) => {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-40 pb-16 md:pt-44 md:pb-20">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            aria-hidden="true"
          />
          <div className={`absolute inset-0 ${overlayStyles[overlay][0]}`} />
          <div className={`absolute inset-0 ${overlayStyles[overlay][1]}`} />
        </div>
      )}
      <Container className="relative">
        <div className="max-w-2xl">
          {eyebrow && (
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold-400" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">{eyebrow}</p>
            </div>
          )}
          <h1 className="font-display text-4xl md:text-5xl text-ivory-50 leading-[1.1]">{title}</h1>
          {description && (
            <p className="mt-5 text-lg text-ivory-100/75 leading-relaxed">{description}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
};
