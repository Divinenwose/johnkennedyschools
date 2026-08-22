'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { admissionsConfig } from '@/config/admissions-config';

export const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(admissionsConfig.announcement.localStorageKey);
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(admissionsConfig.announcement.localStorageKey, 'true');
  };

  if (!isVisible || !admissionsConfig.isOpen) return null;

  return (
    <div className="bg-navy-950 text-ivory-100 border-b border-gold-500/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-2.5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-1.5 h-1.5 bg-gold-500 rotate-45 flex-shrink-0" aria-hidden="true" />
            <p className="text-xs sm:text-sm truncate">
              <span className="font-semibold text-ivory-50">{admissionsConfig.announcement.title}</span>
              <span className="hidden sm:inline text-ivory-100/70">
                {' '}
                — {admissionsConfig.announcement.message}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href={admissionsConfig.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-semibold text-gold-400 hover:text-gold-300 underline underline-offset-4 decoration-gold-500/40 transition-colors whitespace-nowrap"
            >
              {admissionsConfig.announcement.cta} →
            </a>
            <button
              onClick={handleDismiss}
              className="p-1 text-ivory-100/50 hover:text-ivory-50 transition-colors"
              aria-label="Dismiss announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
