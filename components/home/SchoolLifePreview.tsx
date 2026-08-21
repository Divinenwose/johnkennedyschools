import React from 'react';
import Link from 'next/link';
import { schoolImages } from '@/config/images-config';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ImageCard } from '@/components/ui/ImageCard';

export const SchoolLifePreview: React.FC = () => {
  const galleryImages = [
    {
      image: schoolImages.gallery.learning,
      alt: "Students engaged in learning activities",
      title: "Learning",
    },
    {
      image: schoolImages.gallery.students,
      alt: "Students interacting and collaborating",
      title: "Community",
    },
    {
      image: schoolImages.gallery.classroom,
      alt: "Modern classroom environment",
      title: "Classroom",
    },
    {
      image: schoolImages.gallery.sports,
      alt: "Students participating in sports activities",
      title: "Sports",
    },
    {
      image: schoolImages.gallery.activities,
      alt: "Students engaged in creative activities",
      title: "Activities",
    },
    {
      image: schoolImages.gallery.events,
      alt: "School events and celebrations",
      title: "Events",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionHeading subtitle="Beyond the Classroom">SCHOOL LIFE</SectionHeading>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {galleryImages.map((item, index) => (
            <ImageCard
              key={index}
              image={item.image}
              alt={item.alt}
              title={item.title}
            />
          ))}
        </div>

        <div className="text-center">
          <Link href="/school-life">
            <Button variant="primary" size="md">
              Explore School Life →
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
