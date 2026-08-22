import React from 'react';
import { schoolConfig } from '@/config/school-config';
import { schoolImages } from '@/config/images-config';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Monitor } from 'lucide-react';
import Image from 'next/image';

export const ResultsPortal: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-ivory-50 border-y border-stone-300">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3]">
              <Image
                src={schoolImages.results}
                alt="Student using computer to access examination results"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <span className="absolute -bottom-4 -left-4 w-16 h-16 border border-gold-500 -z-10 hidden md:block" aria-hidden="true" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <Monitor className="w-9 h-9 text-gold-600 mb-5" strokeWidth={1.5} />

            <SectionHeading subtitle="Quick Access">Check Student Results</SectionHeading>

            <p className="text-charcoal-700 leading-relaxed max-w-lg">
              Access the school&apos;s student result portal quickly and conveniently. View
              academic performance, examination results, and progress reports in real-time.
            </p>

            <div className="mt-8">
              <Button href={schoolConfig.resultPortalUrl} variant="primary" size="lg" external>
                Open Result Portal →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
