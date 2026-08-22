import { Reveal } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PageHeader } from '@/components/ui/PageHeader';
import { newsConfig } from '@/config/news-config';
import { Calendar } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'News & Events | John Kennedy International Schools',
};

export default function NewsPage() {
  const categories = ['School News', 'Events', 'Academics', 'Community'];

  return (
    <main>
      <PageHeader
        eyebrow="Stay Informed"
        title="News & Events"
        description="Stay updated with the latest news, events, and achievements from John Kennedy International Schools."
      />

      {/* Featured Article — editorial, full width, not a boxed card */}
      <Reveal>
      <section className="py-20 md:py-28 bg-ivory-100">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-8">Featured Story</p>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10]">
                <Image
                  src={newsConfig.featured.image}
                  alt={newsConfig.featured.title}
                  fill
                  sizes="(min-width: 1024px) 60vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-xs text-charcoal-500 mb-4">
                <Calendar className="w-3.5 h-3.5" />
                <span>{newsConfig.featured.date}</span>
                <span className="text-gold-600 font-semibold">• {newsConfig.featured.category}</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-navy-950 leading-tight mb-4">
                {newsConfig.featured.title}
              </h2>
              <p className="text-charcoal-700 leading-relaxed">{newsConfig.featured.description}</p>
            </div>
          </div>
        </Container>
      </section>
      </Reveal>

      {/* News Grid */}
      <Reveal>
      <section className="py-20 md:py-28 bg-ivory-50 border-y border-stone-300">
        <Container>
          <SectionHeading subtitle="Latest Updates">Recent News</SectionHeading>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {newsConfig.articles.map((article) => (
              <article key={article.id}>
                <div className="relative aspect-[4/3] mb-5">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 90vw"
                    className="object-cover"
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
        </Container>
      </section>
      </Reveal>

      {/* Categories */}
      <Reveal>
      <section className="py-16 bg-ivory-100">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-6">Browse by Topic</p>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="px-5 py-2.5 border border-stone-300 text-sm font-medium text-navy-900 hover:border-navy-900 transition-colors cursor-default"
              >
                {category}
              </span>
            ))}
          </div>
        </Container>
      </section>
      </Reveal>

      {/* Note */}
      <Reveal>
      <section className="pb-20 md:pb-28 bg-ivory-100">
        <Container size="md">
          <div className="border-l-2 border-gold-500 pl-6 py-1">
            <h3 className="font-display text-lg text-navy-950 mb-2">About This Section</h3>
            <p className="text-charcoal-600 text-sm leading-relaxed">
              The articles above are placeholder content demonstrating the page structure. Real
              news and events from John Kennedy International Schools will be added by the school
              administration, and this section is built to connect easily to a CMS or API later.
            </p>
          </div>
        </Container>
      </section>
      </Reveal>
    </main>
  );
}
