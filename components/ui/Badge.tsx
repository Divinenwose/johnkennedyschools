import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-blue-900 text-white',
    secondary: 'bg-gray-100 text-gray-800',
    accent: 'bg-amber-500 text-white',
    outline: 'border-2 border-blue-900 text-blue-900',
  };
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
