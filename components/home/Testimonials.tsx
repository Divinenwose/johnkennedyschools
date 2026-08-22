import React from 'react';
import Image from 'next/image';
import { testimonialsConfig } from '@/config/testimonials-config';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-ivory-50 border-y border-stone-300">
      <Container>
        <SectionHeading subtitle="Parent Voices" align="center">
          What Our Families Say
        </SectionHeading>

        <div className="grid md:grid-cols-3 gap-x-10 gap-y-12 mt-4">
          {testimonialsConfig.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col">
              <span
                className="font-display text-6xl text-gold-500/30 leading-none mb-2"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="text-charcoal-700 leading-relaxed italic flex-1">
                {testimonial.testimonial}
              </p>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-stone-300">
                <div className="relative w-11 h-11 flex-shrink-0 overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt=""
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-navy-950 text-sm">{testimonial.name}</p>
                  <p className="text-charcoal-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
