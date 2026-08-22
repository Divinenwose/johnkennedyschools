import React from 'react';

interface StatProps {
  value: string;
  label: string;
  tone?: 'default' | 'light';
  className?: string;
}

export const Stat: React.FC<StatProps> = ({ value, label, tone = 'default', className = '' }) => {
  const valueColor = tone === 'light' ? 'text-ivory-50' : 'text-navy-950';
  const labelColor = tone === 'light' ? 'text-ivory-100/70' : 'text-charcoal-600';
  const ruleColor = tone === 'light' ? 'bg-gold-400' : 'bg-gold-500';

  return (
    <div className={className}>
      <span className={`block w-8 h-px mb-3 ${ruleColor}`} aria-hidden="true" />
      <p className={`font-display text-4xl md:text-5xl font-semibold ${valueColor}`}>{value}</p>
      <p className={`mt-1 text-sm uppercase tracking-[0.12em] ${labelColor}`}>{label}</p>
    </div>
  );
};
