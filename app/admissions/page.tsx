import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { schoolConfig } from '@/config/school-config';
import { admissionsConfig } from '@/config/admissions-config';
import { schoolImages } from '@/config/images-config';
import { FileText, CheckCircle, Calendar, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Admissions | John Kennedy International Schools',
};

export default function AdmissionsPage() {
  const admissionSteps = [
    {
      icon: FileText,
      title: 'Make an Enquiry',
      description: 'Contact us to express interest and learn more about our admission process and available spaces.',
    },
    {
      icon: MapPin,
      title: 'Select Campus',
      description: "Choose between our Nursery or College campus based on your child's age and educational needs.",
    },
    {
      icon: FileText,
      title: 'Complete Registration',
      description: 'Fill out the registration form and submit required documents for review.',
    },
    {
      icon: Calendar,
      title: 'Attend Assessment',
      description: 'Schedule and attend an assessment or interview to determine appropriate placement.',
    },
    {
      icon: CheckCircle,
      title: 'Complete Admission',
      description: 'Receive admission offer, complete enrollment process, and prepare for the new session.',
    },
  ];

  const faqs = [
    {
      question: 'How do I apply for admission?',
      answer:
        'To apply, contact us through the enquiry form or call our office. We will guide you through the registration process and provide information about available spaces.',
    },
    {
      question: 'Which campuses are available?',
      answer:
        'We have two campuses: Nursery Campus for early years education and College Campus for secondary education. Both are located in Aguda, Surulere, Lagos.',
    },
    {
      question: 'How do I contact the school?',
      answer: `You can reach us by phone at ${schoolConfig.contact.phones[0]} or ${schoolConfig.contact.phones[1]}, or visit our campuses in person during school hours.`,
    },
    {
      question: 'Where is the school located?',
      answer: `Our Nursery Campus is at ${schoolConfig.campuses.nursery.address}. Our College Campus is at ${schoolConfig.campuses.college.address}.`,
    },
    {
      question: 'How can I register?',
      answer:
        'Registration can be completed online through our registration portal or in person at either campus.',
    },
  ];

  if (!admissionsConfig.isOpen) {
    return (
      <main className="py-32">
        <Container>
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h1 className="font-display text-4xl text-navy-950">Admissions Currently Closed</h1>
            <p className="text-lg text-charcoal-700">
              Admissions are not currently open. Please check back later or contact us for more information.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <PageHeader
        eyebrow="Join Our Community"
        title="Admissions"
        description="Give your child a strong foundation for the future. Join the John Kennedy International Schools community."
      >
        <Button href={admissionsConfig.registrationUrl} variant="secondary" size="lg" external>
          Register Now →
        </Button>
      </PageHeader>

      {/* Nursery Admissions */}
      <section className="py-20 md:py-28 bg-ivory-100">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5]">
                <Image
                  src={schoolImages.nursery}
                  alt="Nursery campus learning environment"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <SectionHeading subtitle="Early Years">Nursery Admissions</SectionHeading>
              <div className="space-y-4 text-charcoal-700 max-w-lg">
                <p className="text-lg leading-relaxed">
                  Our Nursery programme provides a nurturing environment for young learners to
                  develop foundational skills, creativity, and social confidence.
                </p>
                <p className="leading-relaxed">
                  We focus on play-based learning, early literacy, numeracy, and character
                  development in a safe and supportive setting.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0" />
                  <span className="text-charcoal-700 text-sm">{schoolConfig.campuses.nursery.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold-600 flex-shrink-0" />
                  <span className="text-charcoal-700 text-sm">{schoolConfig.contact.phones[0]}</span>
                </div>
              </div>
              <div className="mt-8">
                <Button href={admissionsConfig.registrationUrl} variant="primary" size="md" external>
                  Apply for Nursery →
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* College Admissions */}
      <section className="py-20 md:py-28 bg-ivory-50 border-y border-stone-300">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <SectionHeading subtitle="Secondary Education">College Admissions</SectionHeading>
              <div className="space-y-4 text-charcoal-700 max-w-lg">
                <p className="text-lg leading-relaxed">
                  Our College programme offers comprehensive secondary education with strong
                  academic foundation, character development, and preparation for higher
                  education.
                </p>
                <p className="leading-relaxed">
                  Students benefit from rigorous academics, STEM integration, sports, arts, and
                  leadership opportunities in a disciplined environment.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0" />
                  <span className="text-charcoal-700 text-sm">{schoolConfig.campuses.college.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold-600 flex-shrink-0" />
                  <span className="text-charcoal-700 text-sm">{schoolConfig.contact.phones[0]}</span>
                </div>
              </div>
              <div className="mt-8">
                <Button href={admissionsConfig.registrationUrl} variant="primary" size="md" external>
                  Apply for College →
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative aspect-[4/5]">
                <Image
                  src={schoolImages.college}
                  alt="College campus learning environment"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Admission Process — numbered sequence, since order genuinely matters here */}
      <section className="py-20 md:py-28 bg-ivory-100">
        <Container>
          <SectionHeading subtitle="Step by Step" align="center">Admission Process</SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12 mt-6">
            {admissionSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-display text-3xl text-gold-500/50">0{index + 1}</span>
                    <Icon className="w-5 h-5 text-navy-800" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-base text-navy-950 mb-2">{step.title}</h3>
                  <p className="text-charcoal-600 text-sm leading-relaxed">{step.description}</p>
                  {index < admissionSteps.length - 1 && (
                    <span className="hidden lg:block absolute top-4 -right-4 w-8 h-px bg-stone-300" aria-hidden="true" />
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28 bg-ivory-50 border-y border-stone-300">
        <Container size="md">
          <SectionHeading subtitle="Common Questions" align="center">
            Frequently Asked Questions
          </SectionHeading>

          <div className="divide-y divide-stone-300 mt-4">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="font-display text-lg text-navy-950 mb-2">{faq.question}</h3>
                <p className="text-charcoal-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-navy-950">
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="font-display text-3xl md:text-4xl text-ivory-50">
                Ready to Begin Your Journey?
              </h2>
              <p className="mt-3 text-ivory-100/70 leading-relaxed">
                Applications for the next academic session are now open. Take the first step
                towards your child&apos;s future today.
              </p>
            </div>
            <Button href={admissionsConfig.registrationUrl} variant="secondary" size="lg" external>
              Register Now →
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
