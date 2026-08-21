import React from 'react';
import Link from 'next/link';
import { newsConfig } from '@/config/news-config';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardImage, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calendar } from 'lucide-react';

export const NewsPreview: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionHeading subtitle="Latest Updates">NEWS & EVENTS</SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

        <div className="text-center">
          <Link href="/news">
            <Button variant="primary" size="md">
              View All News →
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
