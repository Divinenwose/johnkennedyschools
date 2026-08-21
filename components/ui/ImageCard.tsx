import React from 'react';

interface ImageCardProps {
  image: string;
  alt: string;
  title: string;
  description?: string;
  className?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ 
  image, 
  alt, 
  title, 
  description, 
  className = '' 
}) => {
  return (
    <div className={`group relative overflow-hidden rounded-lg shadow-md ${className}`}>
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        {description && (
          <p className="text-gray-200 text-sm">{description}</p>
        )}
      </div>
    </div>
  );
};
