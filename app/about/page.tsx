import { Reveal } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { schoolImages } from '@/config/images-config';
import { Target, Heart, Shield, Users, Lightbulb, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | John Kennedy International Schools',
};


const boardOfDirectors = [
  { name: 'Mrs Patricia Nnaemeka', title: 'Proprietress', image: '/images/board/pat.jpeg' },
  { name: 'Mr. Obiajulu Nnaemeka', title: 'Executive Director', image: '/images/board/obi.jpeg' },
  { name: 'Mrs. Mercy Nnaemeka', title: 'Executive Director', image: '/images/board/mercy.jpeg' },
  { name: 'Mr. Chukwuka Nnaemeka', title: 'Executive Director', image: '/images/board/chu.jpeg' },
  { name: 'Mr Chibuike Nnaemeka', title: 'Executive Director', image: '/images/board/chubby.jpeg' },
  { name: 'Mr. Olu Olagbuji', title: 'Coordinator', image: '/images/board/olu.jpeg' },
];

type BoardMember = (typeof boardOfDirectors)[number];

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function BoardMemberCard({ name, title, image }: BoardMember) {
  return (
    <div className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-navy-950">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-4xl text-gold-500/70">
              {getInitials(name)}
            </span>
            <span
              className="absolute inset-4 border border-gold-500/20"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="font-display text-lg text-navy-950">{name}</h3>
        <p className="text-charcoal-600 text-sm mt-0.5">{title}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const coreValues = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in academics, character development, and personal growth.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We foster honesty, trust, and ethical behavior in all aspects of school life.',
    },
    {
      icon: Heart,
      title: 'Respect',
      description: 'We value every individual and promote mutual respect among students, staff, and parents.',
    },
    {
      icon: Users,
      title: 'Responsibility',
      description: 'We encourage students to take ownership of their actions and contribute to their community.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace creative thinking and modern approaches to education.',
    },
    {
      icon: Target,
      title: 'Discipline',
      description: 'We maintain structured environments that promote focus, self-control, and achievement.',
    },
  ];

  return (
    <main>
      <PageHeader
        eyebrow="Our Story"
        title="About John Kennedy International Schools"
        description="Discover our commitment to excellence, character development, and preparing students for a bright future."
        image={schoolImages.pageHeroes.about}
        overlay="standard"
      />

      {/* Introduction — editorial, not a card grid */}
      <Reveal>
        <section className="py-20 md:py-28 bg-ivory-100">
          <Container>
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={schoolImages.about}
                    alt="Students engaged in learning at John Kennedy International Schools"
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                  <span className="absolute -bottom-4 -left-4 w-20 h-20 border border-gold-500 -z-10 hidden md:block" aria-hidden="true" />
                </div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <SectionHeading subtitle="Welcome">Where Purpose Meets Potential</SectionHeading>
                <div className="space-y-4 text-charcoal-700 max-w-xl">
                  <p className="text-lg leading-relaxed">
                    At John Kennedy International Schools, we believe that education is the
                    foundation for a successful and fulfilling life. Our institution is
                    dedicated to providing exceptional education that nurtures not just
                    academic excellence, but also character, discipline, and personal growth.
                  </p>
                  <p className="leading-relaxed">
                    Located in the heart of Surulere, Lagos, our school offers a supportive
                    learning environment where students are encouraged to explore their
                    potential, develop critical thinking skills, and become confident,
                    responsible individuals ready to make positive contributions to society.
                  </p>
                  <p className="leading-relaxed">
                    Our commitment to excellence extends beyond the classroom. We focus on
                    holistic development, ensuring that every student receives the guidance
                    and support needed to thrive academically, socially, and emotionally.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </Reveal>

      {/* Mission & Vision — asymmetric, typography-led, not identical icon cards */}
      <Reveal>
        <section className="py-20 md:py-28 bg-ivory-50 border-y border-stone-300">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <h3 className="font-display text-2xl text-navy-950 mt-4 mb-4">Our Mission</h3>
                <p className="text-charcoal-700 leading-relaxed">
                  To provide a holistic education that is capable of making all children assets rather than liabilities; by providing a relevant curriculum through the wisdom of God.
                </p>
              </div>
              <div>
                <h3 className="font-display text-2xl text-navy-950 mt-4 mb-4">Our Vision</h3>
                <p className="text-charcoal-700 leading-relaxed">
                  We have the vision of raising children to become responsible adults by running a school that lays emphasis on morals, values, fear of God, self reliance in addition to academic excellence.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </Reveal>

      {/* Core Values */}
      <Reveal>
        <section className="py-20 md:py-28 bg-ivory-100">
          <Container>
            <SectionHeading subtitle="What We Stand For" align="center" className="items-center">
              Core Values
            </SectionHeading>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mt-4">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <Icon className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" strokeWidth={1.5} />
                    <div>
                      <h3 className="font-display text-lg text-navy-950 mb-1.5">{value.title}</h3>
                      <p className="text-charcoal-600 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      </Reveal>

      {/* Learning Environment — editorial list, not repeated white cards */}
      <Reveal>
        <section className="py-20 md:py-28 bg-ivory-50 border-y border-stone-300">
          <Container size="md">
            <SectionHeading subtitle="Our Approach" align="center" className="items-center">
              The Learning Environment
            </SectionHeading>

            <div className="divide-y divide-stone-300 mt-4">
              {[
                {
                  title: 'Safe and Nurturing',
                  description:
                    'We provide a safe, secure, and nurturing environment where students feel valued, respected, and motivated to learn. Our facilities are designed to support both academic and personal development.',
                },
                {
                  title: 'Modern Facilities',
                  description:
                    'Our campuses are equipped with modern learning resources, well-maintained classrooms, and facilities that support comprehensive education including sports, arts, and technology.',
                },
                {
                  title: 'Experienced Educators',
                  description:
                    "Our team of dedicated and experienced educators are committed to each student's success. They provide personalized attention, guidance, and support to help every child reach their full potential.",
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

      {/* Board of Directors */}
      <Reveal>
        <section className="py-20 md:py-28 bg-ivory-100">
          <Container>
            <SectionHeading subtitle="Governance" align="center" className="items-center">
              Board of Directors
            </SectionHeading>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-4">
              {boardOfDirectors.map((member, index) => (
                <BoardMemberCard key={index} {...member} />
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
                <h2 className="font-display text-3xl md:text-4xl text-ivory-50">Join Our Community</h2>
                <p className="mt-3 text-ivory-100/70 leading-relaxed">
                  Be part of a school that values excellence, character, and the future of your child.
                </p>
              </div>
              <Link href="/admissions">
                <Button variant="secondary" size="lg">
                  Learn About Admissions →
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </Reveal>
    </main>
  );
}