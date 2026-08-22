import { Reveal } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { schoolImages } from '@/config/images-config';
import { BookOpen, Brain, TrendingUp, Users, Target, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Academics | John Kennedy International Schools',
};

export default function AcademicsPage() {
  const programmes = [
    {
      icon: BookOpen,
      title: 'Nursery Education',
      description:
        'Foundational learning in a nurturing environment where young minds develop creativity, communication skills, and social confidence.',
      features: [
        'Play-based learning approach',
        'Early literacy and numeracy',
        'Creative arts and music',
        'Social and emotional development',
        'Small class sizes for personalized attention',
      ],
      image: schoolImages.nursery,
    },
    {
      icon: Brain,
      title: 'Junior Secondary',
      description:
        'Strong academic foundation with emphasis on critical thinking, practical learning, and character development.',
      features: [
        'Comprehensive core subjects',
        'STEM integration',
        'Project-based learning',
        'Character education programmes',
        'Sports and extracurricular activities',
      ],
      image: schoolImages.classroom,
    },
    {
      icon: TrendingUp,
      title: 'Senior Secondary',
      description:
        'Rigorous examination preparation, higher education readiness, career awareness, and independent thinking skills.',
      features: [
        'WAEC/NECO preparation',
        'Career guidance and counselling',
        'Advanced subject options',
        'Leadership opportunities',
        'University preparation support',
      ],
      image: schoolImages.college,
    },
  ];

  const approach = [
    {
      icon: Users,
      title: 'Student-Centered Learning',
      description:
        'Our teaching approach focuses on the individual needs and learning styles of each student, ensuring personalized attention and support.',
    },
    {
      icon: Target,
      title: 'Practical Application',
      description:
        'We emphasize hands-on learning, real-world applications, and practical skills that prepare students for life beyond the classroom.',
    },
    {
      icon: Award,
      title: 'Continuous Assessment',
      description:
        'Regular evaluations and feedback help track progress and identify areas for improvement, ensuring academic growth.',
    },
  ];

  return (
    <main>
      <PageHeader
        eyebrow="Our Curriculum"
        title="Academic Programmes"
        description="A comprehensive educational approach designed to nurture academic excellence and character development, from nursery through senior secondary."
      />

      {/* Academic Programmes — alternating editorial panels, not cards */}
      <Reveal>
      <section className="py-20 md:py-28 bg-ivory-100">
        <Container>
          <div className="space-y-20 md:space-y-28">
            {programmes.map((programme, index) => {
              const Icon = programme.icon;
              const reversed = index % 2 === 1;
              return (
                <div
                  key={index}
                  className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                >
                  <div className={`lg:col-span-6 ${reversed ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={programme.image}
                        alt={`${programme.title} learning environment`}
                        fill
                        sizes="(min-width: 1024px) 50vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className={`lg:col-span-6 ${reversed ? 'lg:order-1' : ''}`}>
                    <Icon className="w-8 h-8 text-gold-600 mb-4" strokeWidth={1.5} />
                    <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-3">
                      {programme.title}
                    </h3>
                    <p className="text-charcoal-700 leading-relaxed mb-6 max-w-lg">
                      {programme.description}
                    </p>
                    <ul className="space-y-2.5">
                      {programme.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-charcoal-700 text-sm">
                          <span className="w-1.5 h-1.5 bg-gold-500 rotate-45 mt-1.5 flex-shrink-0" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
      </Reveal>

      {/* Learning Methodology */}
      <Reveal>
      <section className="py-20 md:py-28 bg-ivory-50 border-y border-stone-300">
        <Container>
          <SectionHeading subtitle="How We Teach" align="center">Learning Methodology</SectionHeading>

          <div className="grid md:grid-cols-3 gap-10 mt-4">
            {approach.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index}>
                  <Icon className="w-7 h-7 text-gold-600 mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-lg text-navy-950 mb-2">{item.title}</h3>
                  <p className="text-charcoal-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
      </Reveal>

      {/* Academic Support */}
      <Reveal>
      <section className="py-20 md:py-28 bg-ivory-100">
        <Container size="md">
          <SectionHeading subtitle="Student Success" align="center">Academic Support</SectionHeading>

          <div className="divide-y divide-stone-300 mt-4">
            {[
              {
                title: 'Remedial Classes',
                description:
                  'Additional support is available for students who need extra help in specific subjects, ensuring no student is left behind.',
              },
              {
                title: 'Study Skills Development',
                description:
                  'We teach effective study techniques, time management, and organizational skills to help students become independent learners.',
              },
              {
                title: 'Library and Resources',
                description:
                  'Our well-stocked library and digital resources provide students with access to a wealth of information for research and self-study.',
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

      {/* Co-curricular */}
      <Reveal>
      <section className="py-20 md:py-28 bg-ivory-50 border-y border-stone-300">
        <Container>
          <SectionHeading subtitle="Beyond Academics" align="center">Co-Curricular Development</SectionHeading>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mt-4">
            {[
              {
                title: 'Sports and Athletics',
                description:
                  'Physical education and sports programmes promote teamwork, discipline, and physical fitness. Students participate in various sports activities and competitions.',
              },
              {
                title: 'Arts and Culture',
                description:
                  'Creative expression through music, drama, and visual arts helps students develop creativity, confidence, and appreciation for the arts.',
              },
              {
                title: 'Clubs and Societies',
                description:
                  'Various student clubs provide opportunities for leadership, skill development, and pursuing personal interests outside the regular curriculum.',
              },
              {
                title: 'Community Service',
                description:
                  'Engagement in community service projects teaches students the value of giving back and develops empathy and social responsibility.',
              },
            ].map((item, index) => (
              <div key={index} className="border-l-2 border-gold-500 pl-6">
                <h3 className="font-display text-lg text-navy-950 mb-2">{item.title}</h3>
                <p className="text-charcoal-700 text-sm leading-relaxed">{item.description}</p>
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
                Prepare Your Child for Success
              </h2>
              <p className="mt-3 text-ivory-100/70 leading-relaxed">
                Our academic programmes are designed to equip students with the knowledge,
                skills, and character needed for future success.
              </p>
            </div>
            <Link href="/admissions">
              <Button variant="secondary" size="lg">
                Apply for Admission →
              </Button>
            </Link>
          </div>
        </Container>
      </section>
      </Reveal>
    </main>
  );
}
