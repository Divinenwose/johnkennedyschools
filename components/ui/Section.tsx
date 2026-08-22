import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  tone?: 'ivory' | 'ivory-alt' | 'navy' | 'white';
  id?: string;
  spacing?: 'default' | 'tight' | 'loose';
}

const tones = {
  ivory: 'bg-ivory-100 text-charcoal-900',
  'ivory-alt': 'bg-ivory-200 text-charcoal-900',
  navy: 'bg-navy-950 text-ivory-50',
  white: 'bg-ivory-50 text-charcoal-900',
};

const spacings = {
  default: 'py-20 md:py-28',
  tight: 'py-12 md:py-16',
  loose: 'py-24 md:py-36',
};

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  tone = 'ivory',
  id,
  spacing = 'default',
}) => {
  return (
    <section id={id} className={`${tones[tone]} ${spacings[spacing]} ${className}`}>
      {children}
    </section>
  );
};
