import React from 'react';
import Image from 'next/image';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  const baseStyles = 'bg-ivory-50 border border-stone-300 overflow-hidden';
  const hoverStyles = hover ? 'transition-colors duration-200 hover:border-navy-800/40' : '';

  return <div className={`${baseStyles} ${hoverStyles} ${className}`}>{children}</div>;
};

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
}

export const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  className = '',
  aspect = 'aspect-[4/3]',
}) => {
  return (
    <div className={`relative overflow-hidden ${aspect} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
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
  return (
    <h3 className={`font-display text-xl font-semibold text-navy-950 mb-2 ${className}`}>
      {children}
    </h3>
  );
};

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className = '' }) => {
  return <div className={`text-charcoal-600 leading-relaxed ${className}`}>{children}</div>;
};
