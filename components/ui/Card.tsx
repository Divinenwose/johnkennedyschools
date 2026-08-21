import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  const baseStyles = 'bg-white rounded-lg shadow-md overflow-hidden';
  const hoverStyles = hover ? 'hover:shadow-lg transition-shadow duration-200' : '';
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const CardImage: React.FC<CardImageProps> = ({ src, alt, className = '' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className = '' }) => {
  return <h3 className={`text-xl font-bold text-gray-900 mb-2 ${className}`}>{children}</h3>;
};

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className = '' }) => {
  return <div className={`text-gray-600 ${className}`}>{children}</div>;
};
