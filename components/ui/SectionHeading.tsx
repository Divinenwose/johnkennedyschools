import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  tone?: 'default' | 'light';
  size?: 'md' | 'lg';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  subtitle,
  className = '',
  align = 'left',
  tone = 'default',
  size = 'lg',
}) => {
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const headingColor = tone === 'light' ? 'text-ivory-50' : 'text-navy-950';
  const subtitleColor = tone === 'light' ? 'text-gold-300' : 'text-gold-600';
  const ruleColor = tone === 'light' ? 'bg-gold-400' : 'bg-gold-500';
  const headingSize = size === 'lg' ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl';

  return (
    <div className={`mb-10 flex flex-col ${alignments[align]} ${className}`}>
      {subtitle && (
        <p className={`font-sans font-semibold text-xs uppercase tracking-[0.2em] mb-3 ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
      <h2 className={`font-display font-semibold leading-[1.1] ${headingSize} ${headingColor}`}>
        {children}
      </h2>
      <span className={`mt-5 w-12 h-[3px] ${ruleColor}`} aria-hidden="true" />
    </div>
  );
};
