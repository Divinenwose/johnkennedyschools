import React from 'react';
import { schoolConfig } from '@/config/school-config';
import { schoolImages } from '@/config/images-config';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardImage, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MapPin } from 'lucide-react';

export const Campuses: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading subtitle="Our Locations">OUR CAMPUSES</SectionHeading>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Nursery Campus */}
          <Card hover>
            <CardImage src={schoolImages.nursery} alt="Nursery Campus" />
            <CardContent>
              <CardTitle>NURSERY</CardTitle>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                {schoolConfig.campuses.nursery.name}
              </h3>
              <CardDescription className="mb-4">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="whitespace-pre-line">
                    {schoolConfig.campuses.nursery.address}
                  </span>
                </div>
              </CardDescription>
              <div className="text-gray-600 mb-6">
                Foundational learning in a nurturing environment where young minds 
                develop creativity, confidence, and social skills.
              </div>
              <Button variant="outline" size="md" className="w-full">
                View Location
              </Button>
            </CardContent>
          </Card>

          {/* College Campus */}
          <Card hover>
            <CardImage src={schoolImages.college} alt="College Campus" />
            <CardContent>
              <CardTitle>COLLEGE</CardTitle>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                {schoolConfig.campuses.college.name}
              </h3>
              <CardDescription className="mb-4">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="whitespace-pre-line">
                    {schoolConfig.campuses.college.address}
                  </span>
                </div>
              </CardDescription>
              <div className="text-gray-600 mb-6">
                Comprehensive secondary education with strong academic foundation, 
                character development, and preparation for higher education.
              </div>
              <Button variant="outline" size="md" className="w-full">
                View Location
              </Button>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};
