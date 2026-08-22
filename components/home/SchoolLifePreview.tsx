import React from 'react';
import Link from 'next/link';
import { schoolImages } from '@/config/images-config';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ImageCard } from '@/components/ui/ImageCard';

export const SchoolLifePreview: React.FC = () => {
  const galleryImages = [
    { image: schoolImages.gallery.learning, alt: 'Students engaged in learning activities', title: 'Learning' },
    { image: schoolImages.gallery.students, alt: 'Students interacting and collaborating', title: 'Community' },
    { image: schoolImages.gallery.classroom, alt: 'Modern classroom environment', title: 'Classroom' },
    { image: schoolImages.gallery.sports, alt: 'Students participating in sports activities', title: 'Sports' },
    { image: schoolImages.gallery.activities, alt: 'Students engaged in creative activities', title: 'Activities' },
    { image: schoolImages.gallery.events, alt: 'School events and celebrations', title: 'Events' },
  ];

  return (
    <section className="py-20 md:py-28 bg-ivory-100">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <SectionHeading subtitle="Beyond the Classroom">Life at John Kennedy</SectionHeading>
          <Link href="/school-life" className="hidden md:block">
            <Button variant="outline" size="sm">
              Explore School Life →
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((item, index) => (
            <ImageCard key={index} image={item.image} alt={item.alt} title={item.title} />
          ))}
        </div>

        <Link href="/school-life" className="md:hidden mt-8 block">
          <Button variant="outline" size="md" className="w-full">
            Explore School Life →
          </Button>
        </Link>
      </Container>
    </section>
  );
};
