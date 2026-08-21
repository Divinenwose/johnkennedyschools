import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  children, 
  subtitle, 
  className = '', 
  align = 'center' 
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  return (
    <div className={`mb-12 ${alignments[align]} ${className}`}>
      {subtitle && (
        <p className="text-amber-500 font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
        {children}
      </h2>
      <div className={`mt-4 w-24 h-1 bg-amber-500 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`} />
    </div>
  );
};
