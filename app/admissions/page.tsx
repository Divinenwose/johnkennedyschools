import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { schoolConfig } from '@/config/school-config';
import { admissionsConfig } from '@/config/admissions-config';
import { schoolImages } from '@/config/images-config';
import { FileText, CheckCircle, Calendar, Users, MapPin, Phone } from 'lucide-react';

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
      description: 'Choose between our Nursery or College campus based on your child\'s age and educational needs.',
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
      answer: 'To apply, contact us through the enquiry form or call our office. We will guide you through the registration process and provide information about available spaces.',
    },
    {
      question: 'Which campuses are available?',
      answer: 'We have two campuses: Nursery Campus for early years education and College Campus for secondary education. Both are located in Aguda, Surulere, Lagos.',
    },
    {
      question: 'How do I contact the school?',
      answer: 'You can reach us by phone at 08068252501 or 08098884407, or visit our campuses in person during school hours.',
    },
    {
      question: 'Where is the school located?',
      answer: 'Our Nursery Campus is at 4A, Shaki Crescent, Off Cassette Bus Stop, Aguda, Surulere, Lagos. Our College Campus is at 35, Enitan Street, Off Pako, Aguda, Surulere, Lagos.',
    },
    {
      question: 'How can I register?',
      answer: 'Registration can be completed online through our registration portal or in person at either campus. Visit our Result Portal section for more information.',
    },
  ];

  if (!admissionsConfig.isOpen) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="py-20">
          <Container>
            <div className="text-center space-y-6 max-w-2xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900">Admissions Currently Closed</h1>
              <p className="text-lg text-gray-700">
                Admissions are not currently open. Please check back later or contact us for more information.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Contact Us
              </Button>
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
          <Container>
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Admissions
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Give your child a strong foundation for the future. Join the John Kennedy International Schools community.
              </p>
              <Button
                href={admissionsConfig.registrationUrl}
                variant="secondary"
                size="lg"
                external
              >
                Register Now →
              </Button>
            </div>
          </Container>
        </section>

        {/* Nursery Admissions */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={schoolImages.nursery}
                  alt="Nursery campus learning environment"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div className="space-y-6">
                <SectionHeading subtitle="Early Years" align="left">
                  NURSERY ADMISSIONS
                </SectionHeading>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Our Nursery programme provides a nurturing environment for young learners to develop foundational skills, creativity, and social confidence.
                  </p>
                  <p className="text-lg leading-relaxed">
                    We focus on play-based learning, early literacy, numeracy, and character development in a safe and supportive setting.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-amber-500" />
                    <span className="text-gray-700">{schoolConfig.campuses.nursery.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-amber-500" />
                    <span className="text-gray-700">{schoolConfig.contact.phones[0]}</span>
                  </div>
                </div>
                <Button
                  href={admissionsConfig.registrationUrl}
                  variant="primary"
                  size="md"
                  external
                >
                  Apply for Nursery →
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* College Admissions */}
        <section className="py-20 bg-gray-50">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <SectionHeading subtitle="Secondary Education" align="left">
                  COLLEGE ADMISSIONS
                </SectionHeading>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Our College programme offers comprehensive secondary education with strong academic foundation, character development, and preparation for higher education.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Students benefit from rigorous academics, STEM integration, sports, arts, and leadership opportunities in a disciplined environment.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-amber-500" />
                    <span className="text-gray-700">{schoolConfig.campuses.college.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-amber-500" />
                    <span className="text-gray-700">{schoolConfig.contact.phones[0]}</span>
                  </div>
                </div>
                <Button
                  href={admissionsConfig.registrationUrl}
                  variant="primary"
                  size="md"
                  external
                >
                  Apply for College →
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={schoolImages.college}
                  alt="College campus learning environment"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Admission Process */}
        <section className="py-20 bg-white">
          <Container>
            <SectionHeading subtitle="Step by Step">ADMISSION PROCESS</SectionHeading>
            
            <div className="grid md:grid-cols-5 gap-6">
              {admissionSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} hover>
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-amber-500" />
                      </div>
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                        {index + 1}
                      </div>
                      <CardTitle className="text-base mb-2">{step.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-gray-50">
          <Container>
            <SectionHeading subtitle="Common Questions">FREQUENTLY ASKED QUESTIONS</SectionHeading>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
          <Container>
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-lg text-gray-200">
                Applications for the next academic session are now open. Take the first step towards your child's future today.
              </p>
              <Button
                href={admissionsConfig.registrationUrl}
                variant="secondary"
                size="lg"
                external
              >
                Register Now →
              </Button>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
