import React from 'react';
import { Container } from '@/components/ui/Container';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

// Shared editorial header band for interior pages — quieter than the
// homepage hero, but drawn from the same navy/gold system so every page
// still reads as one institution.
export const PageHeader: React.FC<PageHeaderProps> = ({ eyebrow, title, description, children }) => {
  return (
    <section className="bg-navy-950 pt-40 pb-16 md:pt-44 md:pb-20">
      <Container>
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
