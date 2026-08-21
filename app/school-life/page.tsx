import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ImageCard } from '@/components/ui/ImageCard';
import { schoolImages } from '@/config/images-config';
import { Heart, Trophy, Music, Palette, Users, BookOpen } from 'lucide-react';

export default function SchoolLifePage() {
  const galleryImages = [
    {
      image: schoolImages.gallery.learning,
      alt: "Students engaged in collaborative learning",
      title: "Learning",
      description: "Interactive classroom experiences",
    },
    {
      image: schoolImages.gallery.students,
      alt: "Students working together on projects",
      title: "Community",
      description: "Building lasting friendships",
    },
    {
      image: schoolImages.gallery.classroom,
      alt: "Modern classroom with engaged students",
      title: "Classroom",
      description: "Supportive learning environment",
    },
    {
      image: schoolImages.gallery.sports,
      alt: "Students participating in sports activities",
      title: "Sports",
      description: "Developing teamwork and fitness",
    },
    {
      image: schoolImages.gallery.activities,
      alt: "Students engaged in creative activities",
      title: "Activities",
      description: "Exploring creative talents",
    },
    {
      image: schoolImages.gallery.events,
      alt: "School events and celebrations",
      title: "Events",
      description: "Celebrating achievements together",
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
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
          <Container>
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                School Life
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Beyond academics, we provide a rich and vibrant school life that nurtures talents, builds character, and creates lasting memories.
              </p>
            </div>
          </Container>
        </section>

        {/* Gallery */}
        <section className="py-20 bg-white">
          <Container>
            <SectionHeading subtitle="Our Community">LIFE AT JOHN KENNEDY</SectionHeading>
            
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

        {/* Activities */}
        <section className="py-20 bg-gray-50">
          <Container>
            <SectionHeading subtitle="Beyond the Classroom">ACTIVITIES & PROGRAMMES</SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {activity.title}
                    </h3>
                    <p className="text-gray-700">
                      {activity.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Sports */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={schoolImages.sports}
                  alt="Students participating in sports"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div className="space-y-6">
                <SectionHeading subtitle="Physical Development" align="left">
                  SPORTS & ATHLETICS
                </SectionHeading>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Our sports programme is designed to promote physical fitness, teamwork, discipline, and healthy competition among students.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Students participate in various sports including football, basketball, athletics, and more. Regular inter-house competitions and sports days provide opportunities for students to showcase their athletic abilities.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span className="text-gray-700">Football and Basketball</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span className="text-gray-700">Track and Field Events</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span className="text-gray-700">Inter-house Competitions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span className="text-gray-700">Annual Sports Day</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Arts & Culture */}
        <section className="py-20 bg-gray-50">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <SectionHeading subtitle="Creative Expression" align="left">
                  ARTS & CULTURE
                </SectionHeading>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Our arts and culture programme provides students with opportunities to explore their creative talents and develop appreciation for the arts.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Through music, drama, visual arts, and cultural activities, students develop confidence, creativity, and cultural awareness.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span className="text-gray-700">Music Lessons and Choir</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span className="text-gray-700">Drama and Theatre</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span className="text-gray-700">Visual Arts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span className="text-gray-700">Cultural Celebrations</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={schoolImages.activities}
                  alt="Students engaged in arts and cultural activities"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Student Leadership */}
        <section className="py-20 bg-white">
          <Container>
            <SectionHeading subtitle="Building Leaders">STUDENT LEADERSHIP</SectionHeading>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Prefect System</h3>
                <p className="text-gray-700">
                  Students are selected as prefects to develop leadership skills, responsibility, and serve as role models for their peers.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Club Leadership</h3>
                <p className="text-gray-700">
                  Students lead various clubs and societies, organizing activities and events that develop organizational and management skills.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Student Council</h3>
                <p className="text-gray-700">
                  A representative student council provides a platform for student voice and participation in school decision-making processes.
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
                Join Our Vibrant Community
              </h2>
              <p className="text-lg text-gray-200">
                Experience a school life that balances academics with rich extracurricular activities for holistic development.
              </p>
              <Button href="/admissions" variant="secondary" size="lg">
                Apply for Admission →
              </Button>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
