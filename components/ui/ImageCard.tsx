import React from 'react';
import Image from 'next/image';

interface ImageCardProps {
  image: string;
  alt: string;
  title: string;
  description?: string;
  className?: string;
  priority?: boolean;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  image,
  alt,
  title,
  description,
  className = '',
  priority = false,
}) => {
  return (
    <div className={`group relative overflow-hidden aspect-[4/5] ${className}`}>
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, 50vw"
        priority={priority}
        className="object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="block w-6 h-px bg-gold-400 mb-2" aria-hidden="true" />
        <h3 className="font-display text-lg text-ivory-50 leading-snug">{title}</h3>
        {description && <p className="text-ivory-100/80 text-sm mt-1">{description}</p>}
      </div>
    </div>
  );
};
