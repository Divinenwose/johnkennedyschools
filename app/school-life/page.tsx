import { Reveal } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { ImageCard } from '@/components/ui/ImageCard';
import { schoolImages } from '@/config/images-config';
import { Heart, Trophy, Music, Palette, Users, BookOpen } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'School Life | John Kennedy International Schools',
};

export default function SchoolLifePage() {
  const galleryImages = [
    {
      image: schoolImages.gallery.learning,
      alt: 'Students engaged in collaborative learning',
      title: 'Learning',
      description: 'Interactive classroom experiences',
    },
    {
      image: schoolImages.gallery.students,
      alt: 'Students working together on projects',
      title: 'Community',
      description: 'Building lasting friendships',
    },
    {
      image: schoolImages.gallery.classroom,
      alt: 'Modern classroom with engaged students',
      title: 'Classroom',
      description: 'Supportive learning environment',
    },
    {
      image: schoolImages.gallery.sports,
      alt: 'Students participating in sports activities',
      title: 'Sports',
      description: 'Developing teamwork and fitness',
    },
    {
      image: schoolImages.gallery.activities,
      alt: 'Students engaged in creative activities',
      title: 'Activities',
      description: 'Exploring creative talents',
    },
    {
      image: schoolImages.gallery.events,
      alt: 'School events and celebrations',
      title: 'Events',
      description: 'Celebrating achievements together',
    },
  ];

  const activities = [
    {
      icon: Trophy,
      title: 'Sports',
      description: 'Football, basketball, athletics, and various sports programmes that promote physical fitness, teamwork, and healthy competition.',
    },
    {
      icon: Music,
      title: 'Music & Arts',
      description: 'Music lessons, choir, drama, and visual arts programmes that nurture creativity and artistic expression.',
    },
    {
      icon: Users,
      title: 'Clubs & Societies',
      description: 'Student-led clubs including debate, science, literary, and community service clubs for diverse interests.',
    },
    {
      icon: Heart,
      title: 'Community Service',
      description: 'Opportunities for students to engage in meaningful community service and develop social responsibility.',
    },
    {
      icon: BookOpen,
      title: 'Academic Competitions',
      description: 'Participation in quizzes, spelling bees, science fairs, and other academic competitions.',
    },
    {
      icon: Palette,
      title: 'Cultural Activities',
      description: 'Celebration of cultural diversity through events, performances, and cultural exchange programmes.',
    },
  ];

  return (
    <main>
      <PageHeader
        eyebrow="Beyond the Classroom"
        title="School Life"
        description="A rich and vibrant school life that nurtures talents, builds character, and creates lasting memories."
      />

      {/* Gallery */}
      <Reveal>
      <section className="py-20 md:py-28 bg-ivory-100">
        <Container>
          <SectionHeading subtitle="Our Community">Life at John Kennedy</SectionHeading>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((item, index) => (
              <ImageCard
                key={index}
                image={item.image}
                alt={item.alt}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </section>
      </Reveal>

      {/* Activities — restrained icon + text list, not a shadow-card grid */}
      <Reveal>
      <section className="py-20 md:py-28 bg-ivory-50 border-y border-stone-300">
        <Container>
          <SectionHeading subtitle="Programmes" align="center">Activities & Programmes</SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mt-4">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div key={index} className="flex gap-4">
                  <Icon className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display text-lg text-navy-950 mb-1.5">{activity.title}</h3>
                    <p className="text-charcoal-600 text-sm leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
      </Reveal>

      {/* Sports */}
      <Reveal>
      <section className="py-20 md:py-28 bg-ivory-100">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5]">
                <Image
                  src={schoolImages.sports}
                  alt="Students participating in sports"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <SectionHeading subtitle="Physical Development">Sports & Athletics</SectionHeading>
              <div className="space-y-4 text-charcoal-700 max-w-lg">
                <p className="text-lg leading-relaxed">
                  Our sports programme is designed to promote physical fitness, teamwork,
                  discipline, and healthy competition among students.
                </p>
                <p className="leading-relaxed">
                  Students participate in various sports including football, basketball,
                  athletics, and more. Regular inter-house competitions and sports days provide
                  opportunities for students to showcase their athletic abilities.
                </p>
              </div>
              <ul className="mt-6 space-y-2.5">
                {['Football and Basketball', 'Track and Field Events', 'Inter-house Competitions', 'Annual Sports Day'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3 text-charcoal-700 text-sm">
                      <span className="w-1.5 h-1.5 bg-gold-500 rotate-45 flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </Container>
      </section>
      </Reveal>

      {/* Arts & Culture */}
      <Reveal>
      <section className="py-20 md:py-28 bg-ivory-50 border-y border-stone-300">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <SectionHeading subtitle="Creative Expression">Arts & Culture</SectionHeading>
              <div className="space-y-4 text-charcoal-700 max-w-lg">
                <p className="text-lg leading-relaxed">
                  Our arts and culture programme provides students with opportunities to explore
                  their creative talents and develop appreciation for the arts.
                </p>
                <p className="leading-relaxed">
                  Through music, drama, visual arts, and cultural activities, students develop
                  confidence, creativity, and cultural awareness.
                </p>
              </div>
              <ul className="mt-6 space-y-2.5">
                {['Music Lessons and Choir', 'Drama and Theatre', 'Visual Arts', 'Cultural Celebrations'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-charcoal-700 text-sm">
                    <span className="w-1.5 h-1.5 bg-gold-500 rotate-45 flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative aspect-[4/5]">
                <Image
                  src={schoolImages.activities}
                  alt="Students engaged in arts and cultural activities"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      </Reveal>

      {/* Student Leadership */}
      <Reveal>
      <section className="py-20 md:py-28 bg-ivory-100">
        <Container size="md">
          <SectionHeading subtitle="Building Leaders" align="center">Student Leadership</SectionHeading>

          <div className="divide-y divide-stone-300 mt-4">
            {[
              {
                title: 'Prefect System',
                description:
                  'Students are selected as prefects to develop leadership skills, responsibility, and serve as role models for their peers.',
              },
              {
                title: 'Club Leadership',
                description:
                  'Students lead various clubs and societies, organizing activities and events that develop organizational and management skills.',
              },
              {
                title: 'Student Council',
                description:
                  'A representative student council provides a platform for student voice and participation in school decision-making processes.',
              },
            ].map((item, index) => (
              <div key={index} className="py-8 grid sm:grid-cols-[1fr_2fr] gap-3 sm:gap-8">
                <h3 className="font-display text-xl text-navy-950">{item.title}</h3>
                <p className="text-charcoal-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      </Reveal>

      {/* CTA */}
      <Reveal>
      <section className="py-20 md:py-24 bg-navy-950">
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="font-display text-3xl md:text-4xl text-ivory-50">
                Join Our Vibrant Community
              </h2>
              <p className="mt-3 text-ivory-100/70 leading-relaxed">
                Experience a school life that balances academics with rich extracurricular
                activities for holistic development.
              </p>
            </div>
            <Button href="/admissions" variant="secondary" size="lg">
              Apply for Admission →
            </Button>
          </div>
        </Container>
      </section>
      </Reveal>
    </main>
  );
}
