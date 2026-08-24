'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
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
    window.location.href = admissionsConfig.registrationUrl;
  };

  const handleMaybeLater = () => {
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleMaybeLater}>
      <div className="text-center">
        {/* Image — flush with the modal edges since no title padding wrapper is used */}
        <div className="relative w-full h-48">
          <Image
            src={schoolImages.admissions}
            alt="Students learning at John Kennedy International Schools"
            fill
            sizes="400px"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-4 px-6 pt-6">
          <div className="flex justify-center">
            <Badge variant="gold">{admissionsConfig.popup.title}</Badge>
          </div>

          <h3 className="font-display text-2xl text-navy-950">
            {admissionsConfig.popup.schoolName}
          </h3>

          <p className="text-charcoal-600">{admissionsConfig.popup.message}</p>

          <p className="text-charcoal-800 font-medium">{admissionsConfig.popup.description}</p>
        </div>

        {/* Buttons */}
        <div className="mt-8 px-6 pb-6 space-y-3">
          <Button onClick={handleRegister} variant="primary" size="md" className="w-full">
            Register Now
          </Button>
          <Button onClick={handleMaybeLater} variant="ghost" size="md" className="w-full">
            Maybe Later
          </Button>
        </div>
      </div>
    </Modal>
  );
};
