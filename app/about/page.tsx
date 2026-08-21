import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { schoolImages } from '@/config/images-config';
import { admissionsConfig } from '@/config/admissions-config';
import { Target, Heart, Shield, Users, Lightbulb, Award } from 'lucide-react';
import Link from 'next/link';

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
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
          <Container>
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                About John Kennedy International Schools
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Discover our commitment to excellence, character development, and preparing students for a bright future.
              </p>
            </div>
          </Container>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={schoolImages.about}
                  alt="Students engaged in learning"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div className="space-y-6">
                <SectionHeading subtitle="Our Story" align="left">
                  WELCOME TO JOHN KENNEDY INTERNATIONAL SCHOOLS
                </SectionHeading>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    At John Kennedy International Schools, we believe that education is the foundation for a successful and fulfilling life. Our institution is dedicated to providing exceptional education that nurtures not just academic excellence, but also character, discipline, and personal growth.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Located in the heart of Surulere, Lagos, our school offers a supportive learning environment where students are encouraged to explore their potential, develop critical thinking skills, and become confident, responsible individuals ready to make positive contributions to society.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our commitment to excellence extends beyond the classroom. We focus on holistic development, ensuring that every student receives the guidance and support needed to thrive academically, socially, and emotionally.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <Container>
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To provide quality education that develops confident, disciplined, and academically excellent students who are prepared for higher education and future success. We are committed to nurturing character, integrity, and a lifelong love for learning in every student.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                    <Lightbulb className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be a leading educational institution recognized for academic excellence, character development, and the preparation of students who become responsible, successful, and compassionate leaders in their communities and beyond.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white">
          <Container>
            <SectionHeading subtitle="What We Stand For">CORE VALUES</SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} hover>
                    <CardContent>
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-amber-500" />
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                      <CardDescription className="mt-3">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Learning Environment */}
        <section className="py-20 bg-gray-50">
          <Container>
            <SectionHeading subtitle="Our Approach">LEARNING ENVIRONMENT</SectionHeading>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Safe and Nurturing</h3>
                <p className="text-gray-700">
                  We provide a safe, secure, and nurturing environment where students feel valued, respected, and motivated to learn. Our facilities are designed to support both academic and personal development.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Facilities</h3>
                <p className="text-gray-700">
                  Our campuses are equipped with modern learning resources, well-maintained classrooms, and facilities that support comprehensive education including sports, arts, and technology.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Educators</h3>
                <p className="text-gray-700">
                  Our team of dedicated and experienced educators are committed to each student's success. They provide personalized attention, guidance, and support to help every child reach their full potential.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
          <Container>
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Join Our Community
              </h2>
              <p className="text-lg text-gray-200">
                Be part of a school that values excellence, character, and the future of your child.
              </p>
              <Link href="/admissions">
                <Button variant="secondary" size="lg">
                  Learn About Admissions →
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
