'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { admissionsConfig } from '@/config/admissions-config';
import { schoolImages } from '@/config/images-config';

export const AdmissionsPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem(admissionsConfig.popup.localStorageKey);
    
    if (!hasSeenPopup && admissionsConfig.isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, admissionsConfig.popup.delay);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(admissionsConfig.popup.localStorageKey, 'true');
  };

  const handleRegister = () => {
    localStorage.setItem(admissionsConfig.popup.localStorageKey, 'true');
    window.open(admissionsConfig.registrationUrl, '_blank');
  };

  const handleMaybeLater = () => {
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleMaybeLater}>
      <div className="text-center">
        {/* Image */}
        <div className="mb-6 rounded-lg overflow-hidden">
          <img
            src={schoolImages.admissions}
            alt="Students learning"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            {admissionsConfig.popup.title}
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900">
            {admissionsConfig.popup.schoolName}
          </h3>
          
          <p className="text-gray-600">
            {admissionsConfig.popup.message}
          </p>
          
          <p className="text-gray-700 font-medium">
            {admissionsConfig.popup.description}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 space-y-3">
          <Button
            onClick={handleRegister}
            variant="primary"
            size="md"
            className="w-full"
          >
            Register Now
          </Button>
          <Button
            onClick={handleMaybeLater}
            variant="ghost"
            size="md"
            className="w-full"
          >
            Maybe Later
          </Button>
        </div>
      </div>
    </Modal>
  );
};
