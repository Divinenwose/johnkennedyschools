import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'navy' | 'gold' | 'outline' | 'outlineLight';
  className?: string;
}

const variants = {
  navy: 'bg-navy-900 text-ivory-50',
  gold: 'bg-gold-500 text-navy-950',
  outline: 'border border-navy-900/30 text-navy-900',
  outlineLight: 'border border-ivory-50/50 text-ivory-50',
};

const markColor = {
  navy: 'bg-gold-500',
  gold: 'bg-navy-900',
  outline: 'bg-gold-600',
  outlineLight: 'bg-gold-400',
};

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'outline', className = '' }) => {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] ${variants[variant]} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rotate-45 flex-shrink-0 ${markColor[variant]}`} aria-hidden="true" />
      {children}
    </span>
  );
};
