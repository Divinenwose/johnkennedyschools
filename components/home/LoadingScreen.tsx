'use client';

import React, { useEffect, useState } from 'react';
import { GraduationCap } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    const timeout = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex flex-col items-center justify-center transition-opacity duration-500 ${progress === 100 ? 'opacity-0' : 'opacity-100'
        }`}
    >
      <div className="text-center space-y-6">
        {/* Logo placeholder */}
        <div className="flex items-center justify-center">
          <img
            src="/images/logo.png"
            alt="John Kennedy International Schools"
            className="w-24 h-24 md:w-32 md:h-32 object-contain animate-pulse"
          />
        </div>

        {/* School Name */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide">
            JOHN KENNEDY
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-500 tracking-wide">
            INTERNATIONAL SCHOOLS
          </h2>
        </div>

        {/* Tagline */}
        <div className="space-y-1 text-white/80">
          <p className="text-lg md:text-xl font-light">Excellence.</p>
          <p className="text-lg md:text-xl font-light">Character.</p>
          <p className="text-lg md:text-xl font-light">Knowledge.</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mt-8">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/60 text-sm mt-2">Loading...</p>
        </div>
      </div>
    </div>
  );
};
