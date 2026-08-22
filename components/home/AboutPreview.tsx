import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { schoolImages } from '@/config/images-config';
import { statisticsConfig } from '@/config/statistics-config';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Stat } from '@/components/ui/Stat';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-ivory-100">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5]">
              <Image
                src={schoolImages.about}
                alt="Students engaged in learning at John Kennedy International Schools"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <span className="absolute -bottom-4 -right-4 w-20 h-20 border border-gold-500 -z-10 hidden md:block" aria-hidden="true" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <SectionHeading subtitle="About Us">
              Where Excellence Meets Character
            </SectionHeading>

            <div className="space-y-4 text-charcoal-700 max-w-xl">
              <p className="text-lg leading-relaxed">
                At John Kennedy International Schools, we believe education goes beyond
                academics. Our approach combines rigorous academic development with strong
                character formation, preparing students not just for examinations, but for life.
              </p>
              <p className="leading-relaxed">
                We nurture confidence, discipline, and personal growth in every student. Our
                supportive learning environment encourages independent thinking while
                instilling the values of respect, responsibility, and integrity.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-xl border-t border-stone-300 pt-8">
              {statisticsConfig.statistics.map((stat) => (
                <Stat key={stat.id} value={stat.value} label={stat.label} />
              ))}
            </div>

            <Link href="/about" className="inline-block mt-10">
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
