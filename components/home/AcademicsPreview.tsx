import React from 'react';
import Link from 'next/link';
import { schoolImages } from '@/config/images-config';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
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
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionHeading subtitle="Our Programmes">ACADEMICS</SectionHeading>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {academicLevels.map((level, index) => {
            const Icon = level.icon;
            return (
              <Card key={index} hover>
                <CardContent>
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <CardTitle>{level.title}</CardTitle>
                  <CardDescription className="mt-3">
                    {level.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
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
