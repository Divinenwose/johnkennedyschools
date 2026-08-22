import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Award, Heart, Users, BookOpen, Shield, Target } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const featured = {
    icon: Award,
    title: 'Academic Excellence',
    description:
      'Rigorous academic programmes that challenge and inspire students to achieve their highest potential — the foundation everything else here is built on.',
  };

  const reasons = [
    {
      icon: Shield,
      title: 'Character & Discipline',
      description: 'Strong emphasis on character development, discipline, and moral values that last a lifetime.',
    },
    {
      icon: Heart,
      title: 'Holistic Development',
      description: 'A balanced approach nurturing intellectual, physical, emotional, and social growth.',
    },
    {
      icon: Users,
      title: 'Dedicated Educators',
      description: "Experienced and passionate teachers committed to each student's success and well-being.",
    },
    {
      icon: BookOpen,
      title: 'Supportive Environment',
      description: 'Safe, inclusive, and supportive learning where every student feels valued.',
    },
    {
      icon: Target,
      title: 'Future Ready',
      description: 'Preparing students with the skills and knowledge needed for a changing world.',
    },
  ];

  const FeaturedIcon = featured.icon;

  return (
    <section className="py-20 md:py-28 bg-ivory-50 border-y border-stone-300">
      <Container>
        <SectionHeading subtitle="Our Advantages">Why Families Choose John Kennedy</SectionHeading>

        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-12">
          {/* Featured reason — asymmetric anchor, not a matching card */}
          <div className="lg:col-span-5">
            <FeaturedIcon className="w-10 h-10 text-gold-600 mb-6" strokeWidth={1.25} />
            <h3 className="font-display text-3xl text-navy-950 leading-tight mb-4">
              {featured.title}
            </h3>
            <p className="text-charcoal-700 leading-relaxed max-w-sm">{featured.description}</p>
          </div>

          {/* Remaining reasons — a tighter, quieter list */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-8 lg:border-l lg:border-stone-300 lg:pl-16">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="flex gap-3.5">
                  <Icon className="w-5 h-5 text-navy-800 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-display text-base text-navy-950 mb-1.5">{reason.title}</h4>
                    <p className="text-charcoal-600 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
