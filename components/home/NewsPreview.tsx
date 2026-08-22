import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { newsConfig } from '@/config/news-config';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Calendar } from 'lucide-react';

export const NewsPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-ivory-100">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <SectionHeading subtitle="Latest Updates">News & Events</SectionHeading>
          <Link href="/news" className="hidden md:block">
            <Button variant="outline" size="sm">
              View All News →
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-10">
          {newsConfig.articles.map((article) => (
            <article key={article.id} className="group">
              <div className="relative aspect-[4/3] mb-5 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 90vw"
                  className="object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center gap-2 text-xs text-charcoal-500 mb-3">
                <Calendar className="w-3.5 h-3.5" />
                <span>{article.date}</span>
                <span className="text-gold-600 font-semibold">• {article.category}</span>
              </div>
              <h3 className="font-display text-lg text-navy-950 leading-snug mb-2">{article.title}</h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">{article.description}</p>
            </article>
          ))}
        </div>

        <Link href="/news" className="md:hidden mt-10 block">
          <Button variant="outline" size="md" className="w-full">
            View All News →
          </Button>
        </Link>
      </Container>
    </section>
  );
};
