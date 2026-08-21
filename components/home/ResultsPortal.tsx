import React from 'react';
import { schoolConfig } from '@/config/school-config';
import { schoolImages } from '@/config/images-config';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Monitor } from 'lucide-react';

export const ResultsPortal: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={schoolImages.results}
              alt="Student using computer to access results"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-900 rounded-lg -z-10 hidden md:block" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg flex items-center justify-center">
              <Monitor className="w-8 h-8 text-amber-500" />
            </div>

            <SectionHeading subtitle="Quick Access" align="left">
              CHECK STUDENT RESULTS
            </SectionHeading>

            <p className="text-lg text-gray-700 leading-relaxed">
              Access the school's student result portal quickly and conveniently. 
              View academic performance, examination results, and progress reports 
              in real-time.
            </p>

            <Button
              href={schoolConfig.resultPortalUrl}
              variant="primary"
              size="lg"
              external
            >
              Open Result Portal →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
