import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { Award, Heart, Users, BookOpen, Shield, Target } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Rigorous academic programmes that challenge and inspire students to achieve their highest potential.',
    },
    {
      icon: Shield,
      title: 'Character & Discipline',
      description: 'Strong emphasis on character development, discipline, and moral values that last a lifetime.',
    },
    {
      icon: Heart,
      title: 'Holistic Development',
      description: 'Balanced approach nurturing intellectual, physical, emotional, and social growth.',
    },
    {
      icon: Users,
      title: 'Dedicated Educators',
      description: 'Experienced and passionate teachers committed to each student\'s success and well-being.',
    },
    {
      icon: BookOpen,
      title: 'Supportive Environment',
      description: 'Safe, inclusive, and supportive learning environment where every student feels valued.',
    },
    {
      icon: Target,
      title: 'Future Ready',
      description: 'Preparing students with skills and knowledge needed for success in a rapidly changing world.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading subtitle="Our Advantages">WHY CHOOSE JOHN KENNEDY?</SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card key={index} hover>
                <CardContent>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-amber-500" />
                  </div>
                  <CardTitle>{reason.title}</CardTitle>
                  <CardDescription className="mt-3">
                    {reason.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
