import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  href,
  external = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-blue-900 text-white hover:bg-blue-800 focus:ring-blue-900',
    secondary: 'bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500',
    outline: 'border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white focus:ring-blue-900',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const buttonClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={buttonClassName}
        {...(props as any)}
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
