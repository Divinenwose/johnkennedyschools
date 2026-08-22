import React from 'react';
import { schoolConfig } from '@/config/school-config';
import { schoolImages } from '@/config/images-config';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

export const Campuses: React.FC = () => {
  const campuses = [
    {
      label: 'Nursery',
      name: schoolConfig.campuses.nursery.name,
      address: schoolConfig.campuses.nursery.address,
      image: schoolImages.nursery,
      description:
        'Foundational learning in a nurturing environment where young minds develop creativity, confidence, and social skills.',
    },
    {
      label: 'College',
      name: schoolConfig.campuses.college.name,
      address: schoolConfig.campuses.college.address,
      image: schoolImages.college,
      description:
        'Comprehensive secondary education with strong academic foundation, character development, and preparation for higher education.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-ivory-50 border-y border-stone-300">
      <Container>
        <SectionHeading subtitle="Our Locations">Two Campuses, One Standard</SectionHeading>

        <div className="grid md:grid-cols-2 gap-10">
          {campuses.map((campus, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src={campus.image}
                  alt={campus.name}
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.03]"
                />
                <span className="absolute top-4 left-4 bg-navy-950 text-ivory-50 text-[10px] font-semibold uppercase tracking-[0.16em] px-3 py-1.5">
                  {campus.label}
                </span>
              </div>

              <h3 className="font-display text-xl text-navy-950 mb-2">{campus.name}</h3>

              <div className="flex items-start gap-2 text-charcoal-600 text-sm mb-3">
                <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                <span className="whitespace-pre-line">{campus.address}</span>
              </div>

              <p className="text-charcoal-600 text-sm leading-relaxed mb-5">{campus.description}</p>

              <Button variant="outline" size="sm">
                View Location
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
