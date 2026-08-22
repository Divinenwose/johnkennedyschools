import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { BookOpen, Brain, TrendingUp } from 'lucide-react';

export const AcademicsPreview: React.FC = () => {
  const academicLevels = [
    {
      icon: BookOpen,
      title: 'Nursery Education',
      description: 'Foundational learning with creativity, communication, and social development in a nurturing environment.',
    },
    {
      icon: Brain,
      title: 'Junior Secondary',
      description: 'Strong academic foundation with critical thinking, practical learning, and character development.',
    },
    {
      icon: TrendingUp,
      title: 'Senior Secondary',
      description: 'Examination preparation, higher education readiness, career awareness, and independent thinking.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-ivory-100">
      <Container>
        <SectionHeading subtitle="Our Programmes">A Clear Academic Pathway</SectionHeading>

        <div className="grid md:grid-cols-3 border-t border-stone-300">
          {academicLevels.map((level, index) => {
            const Icon = level.icon;
            return (
              <div
                key={index}
                className={`py-8 px-2 md:px-8 ${index !== 0 ? 'md:border-l border-stone-300' : ''} border-b md:border-b-0`}
              >
                <span className="font-display text-3xl text-gold-500/50">0{index + 1}</span>
                <Icon className="w-7 h-7 text-navy-800 mt-4 mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-navy-950 mb-2">{level.title}</h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">{level.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <Link href="/academics">
            <Button variant="primary" size="md">
              Explore Our Academic Programmes →
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
