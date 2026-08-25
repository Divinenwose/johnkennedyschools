import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outlineLight' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  external?: boolean;
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-[2px]';

const variants = {
  // Deep navy — the workhorse CTA
  primary: 'bg-navy-900 text-ivory-50 hover:bg-navy-800',
  // Gold — reserved for the single most important action on a screen
  secondary: 'bg-gold-500 text-navy-950 hover:bg-gold-400',
  // Navy outline on light backgrounds
  outline: 'border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-ivory-50',
  // Light outline for use over photography / dark sections
  outlineLight: 'border border-ivory-50/70 text-ivory-50 hover:bg-ivory-50 hover:text-navy-900',
  ghost: 'text-charcoal-700 hover:text-navy-900',
};

const sizes = {
  sm: 'px-3.5 py-2 text-[11px] uppercase tracking-wider',
  md: 'px-6 py-3 text-sm uppercase tracking-widest',
  lg: 'px-8 py-4 text-sm uppercase tracking-[0.15em]',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  href,
  external = false,
  className = '',
  ...props
}) => {
  const buttonClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={buttonClassName}
        {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
};
