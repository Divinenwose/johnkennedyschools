import React from 'react';
import { testimonialsConfig } from '@/config/testimonials-config';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardContent } from '@/components/ui/Card';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading subtitle="Parent Voices">TESTIMONIALS</SectionHeading>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsConfig.testimonials.map((testimonial) => (
            <Card key={testimonial.id} hover>
              <CardContent>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full flex items-center justify-center">
                      <Quote className="w-8 h-8 text-amber-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 italic mb-4">
                      "{testimonial.testimonial}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
