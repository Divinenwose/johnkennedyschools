'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { admissionsConfig } from '@/config/admissions-config';
import { Button } from '@/components/ui/Button';

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
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between w-full">
            <div className="flex items-center space-x-4">
              <span className="text-2xl">🎓</span>
              <div className="flex items-center space-x-6">
                <span className="font-semibold">
                  {admissionsConfig.announcement.title}
                </span>
                <span className="text-white/80">
                  {admissionsConfig.announcement.message}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                href={admissionsConfig.registrationUrl}
                variant="secondary"
                size="sm"
                external
              >
                {admissionsConfig.announcement.cta} →
              </Button>
              <button
                onClick={handleDismiss}
                className="p-1 hover:bg-white/10 rounded transition-colors"
                aria-label="Dismiss announcement"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between w-full">
            <div className="flex items-center space-x-2">
              <span className="text-xl">🎓</span>
              <span className="font-semibold text-sm">
                NEXT SESSION ENROLLMENT IS OPEN
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                href={admissionsConfig.registrationUrl}
                variant="secondary"
                size="sm"
                external
                className="px-3 py-1 text-sm"
              >
                {admissionsConfig.announcement.cta} →
              </Button>
              <button
                onClick={handleDismiss}
                className="p-1 hover:bg-white/10 rounded transition-colors"
                aria-label="Dismiss announcement"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
