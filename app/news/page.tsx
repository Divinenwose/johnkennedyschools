import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardImage, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { newsConfig } from '@/config/news-config';
import { Calendar } from 'lucide-react';

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
          <Container>
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                News & Events
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Stay updated with the latest news, events, and achievements from John Kennedy International Schools.
              </p>
            </div>
          </Container>
        </section>

        {/* Featured Article */}
        <section className="py-20 bg-white">
          <Container>
            <SectionHeading subtitle="Featured">FEATURED STORY</SectionHeading>
            
            <Card hover>
              <CardImage src={newsConfig.featured.image} alt={newsConfig.featured.title} />
              <CardContent className="p-8">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{newsConfig.featured.date}</span>
                  <span className="text-amber-600 font-medium">• {newsConfig.featured.category}</span>
                </div>
                <CardTitle className="text-2xl mb-4">{newsConfig.featured.title}</CardTitle>
                <CardDescription className="text-lg mb-6">
                  {newsConfig.featured.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Container>
        </section>

        {/* News Grid */}
        <section className="py-20 bg-gray-50">
          <Container>
            <SectionHeading subtitle="Latest Updates">RECENT NEWS</SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsConfig.articles.map((article) => (
                <Card key={article.id} hover>
                  <CardImage src={article.image} alt={article.title} />
                  <CardContent>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                      <span className="text-amber-600 font-medium">• {article.category}</span>
                    </div>
                    <CardTitle className="mb-2">{article.title}</CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Categories */}
        <section className="py-20 bg-white">
          <Container>
            <SectionHeading subtitle="Browse by Topic">CATEGORIES</SectionHeading>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-900 hover:text-white transition-colors cursor-pointer">
                <h3 className="font-bold text-lg">School News</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-900 hover:text-white transition-colors cursor-pointer">
                <h3 className="font-bold text-lg">Events</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-900 hover:text-white transition-colors cursor-pointer">
                <h3 className="font-bold text-lg">Academics</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-900 hover:text-white transition-colors cursor-pointer">
                <h3 className="font-bold text-lg">Community</h3>
              </div>
            </div>
          </Container>
        </section>

        {/* Note */}
        <section className="py-20 bg-gray-50">
          <Container>
            <div className="max-w-3xl mx-auto bg-blue-50 border border-blue-200 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">About Our News</h3>
              <p className="text-gray-700 mb-4">
                The news articles displayed above are placeholder content to demonstrate the website structure and design. 
                Actual news and events from John Kennedy International Schools will be added by the school administration.
              </p>
              <p className="text-gray-700">
                This section is designed to be easily connected to a content management system (CMS) or custom API 
                for dynamic news management.
              </p>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
