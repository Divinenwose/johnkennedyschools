import React from 'react';
import Link from 'next/link';
import { schoolImages } from '@/config/images-config';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={schoolImages.about}
              alt="Students engaged in learning activities"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-500 rounded-lg -z-10 hidden md:block" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <SectionHeading subtitle="About Us" align="left">
              WHERE EXCELLENCE MEETS CHARACTER
            </SectionHeading>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                At John Kennedy International Schools, we believe education goes beyond academics. 
                Our approach combines rigorous academic development with strong character formation, 
                preparing students not just for examinations, but for life.
              </p>
              <p className="text-lg leading-relaxed">
                We nurture confidence, discipline, and personal growth in every student. Our supportive 
                learning environment encourages independent thinking while instilling the values of 
                respect, responsibility, and integrity.
              </p>
              <p className="text-lg leading-relaxed">
                With a focus on future readiness, we equip our students with the knowledge, skills, 
                and character needed to thrive in an ever-changing world.
              </p>
            </div>

            <Link href="/about">
              <Button variant="primary" size="md">
                Discover Our School →
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
