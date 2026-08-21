import React from 'react';
import { admissionsConfig } from '@/config/admissions-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const AdmissionsCTA: React.FC = () => {
  if (!admissionsConfig.isOpen) return null;

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <Container>
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            READY TO TAKE THE NEXT STEP?
          </h2>
          <p className="text-lg md:text-xl text-gray-200">
            Applications for the next academic session are now open.
          </p>
          <Button
            href={admissionsConfig.registrationUrl}
            variant="secondary"
            size="lg"
            external
          >
            Register Now →
          </Button>
        </div>
      </Container>
    </section>
  );
};
