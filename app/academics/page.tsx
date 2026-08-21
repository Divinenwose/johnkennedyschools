import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { schoolImages } from '@/config/images-config';
import { BookOpen, Brain, TrendingUp, Users, Target, Award } from 'lucide-react';
import Link from 'next/link';

export default function AcademicsPage() {
  const programmes = [
    {
      icon: BookOpen,
      title: 'Nursery Education',
      description: 'Foundational learning in a nurturing environment where young minds develop creativity, communication skills, and social confidence.',
      features: [
        'Play-based learning approach',
        'Early literacy and numeracy',
        'Creative arts and music',
        'Social and emotional development',
        'Small class sizes for personalized attention',
      ],
    },
    {
      icon: Brain,
      title: 'Junior Secondary',
      description: 'Strong academic foundation with emphasis on critical thinking, practical learning, and character development.',
      features: [
        'Comprehensive core subjects',
        'STEM integration',
        'Project-based learning',
        'Character education programmes',
        'Sports and extracurricular activities',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Senior Secondary',
      description: 'Rigorous examination preparation, higher education readiness, career awareness, and independent thinking skills.',
      features: [
        'WAEC/NECO preparation',
        'Career guidance and counselling',
        'Advanced subject options',
        'Leadership opportunities',
        'University preparation support',
      ],
    },
  ];

  const approach = [
    {
      icon: Users,
      title: 'Student-Centered Learning',
      description: 'Our teaching approach focuses on the individual needs and learning styles of each student, ensuring personalized attention and support.',
    },
    {
      icon: Target,
      title: 'Practical Application',
      description: 'We emphasize hands-on learning, real-world applications, and practical skills that prepare students for life beyond the classroom.',
    },
    {
      icon: Award,
      title: 'Continuous Assessment',
      description: 'Regular evaluations and feedback help track progress and identify areas for improvement, ensuring academic growth.',
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
                Academic Programmes
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Discover our comprehensive educational approach designed to nurture academic excellence and character development.
              </p>
            </div>
          </Container>
        </section>

        {/* Academic Programmes */}
        <section className="py-20 bg-white">
          <Container>
            <SectionHeading subtitle="Our Curriculum">ACADEMIC PROGRAMMES</SectionHeading>
            
            <div className="space-y-12">
              {programmes.map((programme, index) => {
                const Icon = programme.icon;
                return (
                  <Card key={index} hover>
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                            <Icon className="w-8 h-8 text-amber-500" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {programme.title}
                          </h3>
                          <p className="text-gray-700 mb-6">
                            {programme.description}
                          </p>
                          <ul className="space-y-2">
                            {programme.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-gray-600">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <img
                            src={schoolImages.classroom}
                            alt={`${programme.title} learning environment`}
                            className="rounded-lg shadow-lg w-full h-auto"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Learning Approach */}
        <section className="py-20 bg-gray-50">
          <Container>
            <SectionHeading subtitle="How We Teach">LEARNING METHODOLOGY</SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8">
              {approach.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} hover>
                    <CardContent>
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-amber-500" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription className="mt-3">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Academic Support */}
        <section className="py-20 bg-white">
          <Container>
            <SectionHeading subtitle="Student Success">ACADEMIC SUPPORT</SectionHeading>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Remedial Classes</h3>
                <p className="text-gray-700">
                  Additional support is available for students who need extra help in specific subjects, ensuring no student is left behind.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Study Skills Development</h3>
                <p className="text-gray-700">
                  We teach effective study techniques, time management, and organizational skills to help students become independent learners.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Library and Resources</h3>
                <p className="text-gray-700">
                  Our well-stocked library and digital resources provide students with access to a wealth of information for research and self-study.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Co-curricular */}
        <section className="py-20 bg-gray-50">
          <Container>
            <SectionHeading subtitle="Beyond Academics">CO-CURRICULAR DEVELOPMENT</SectionHeading>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sports and Athletics</h3>
                <p className="text-gray-700">
                  Physical education and sports programmes promote teamwork, discipline, and physical fitness. Students participate in various sports activities and competitions.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Arts and Culture</h3>
                <p className="text-gray-700">
                  Creative expression through music, drama, and visual arts helps students develop creativity, confidence, and appreciation for the arts.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Clubs and Societies</h3>
                <p className="text-gray-700">
                  Various student clubs provide opportunities for leadership, skill development, and pursuing personal interests outside the regular curriculum.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community Service</h3>
                <p className="text-gray-700">
                  Engagement in community service projects teaches students the value of giving back and develops empathy and social responsibility.
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
                Prepare Your Child for Success
              </h2>
              <p className="text-lg text-gray-200">
                Our academic programmes are designed to equip students with the knowledge, skills, and character needed for future success.
              </p>
              <Link href="/admissions">
                <Button variant="secondary" size="lg">
                  Apply for Admission →
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
