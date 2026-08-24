import React from 'react';
import { admissionsConfig } from '@/config/admissions-config';
import { schoolImages } from '@/config/images-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export const AdmissionsCTA: React.FC = () => {
  if (!admissionsConfig.isOpen) return null;

  return (
    <section className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={schoolImages.students}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.16]"
          aria-hidden="true"
        />
      </div>

      <Container className="relative">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-gold-400" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              {admissionsConfig.announcement.title}
            </p>
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-ivory-50 leading-tight">
            Ready to take the next step?
          </h2>
          <p className="mt-5 text-lg text-ivory-100/75 leading-relaxed max-w-lg">
            {admissionsConfig.announcement.message}. Give your child a foundation built on
            excellence, character, and care.
          </p>
          <div className="mt-9">
            <Button href={admissionsConfig.registrationUrl} variant="secondary" size="lg">
              Register Now →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
