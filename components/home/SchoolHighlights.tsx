import React from 'react';
import { MapPin, Phone, GraduationCap } from 'lucide-react';
import { schoolConfig } from '@/config/school-config';
import { Container } from '@/components/ui/Container';

export const SchoolHighlights: React.FC = () => {
  const items = [
    {
      icon: MapPin,
      label: 'Nursery Campus',
      value: 'Aguda, Surulere',
    },
    {
      icon: MapPin,
      label: 'College Campus',
      value: 'Aguda, Surulere',
    },
    {
      icon: Phone,
      label: 'Contact',
      value: `${schoolConfig.contact.phones[0]} / ${schoolConfig.contact.phones[1]}`,
    },
    {
      icon: GraduationCap,
      label: 'Admissions',
      value: 'Now Enrolling',
      accent: true,
    },
  ];

  return (
    <section className="bg-ivory-50 border-b border-stone-300">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`
                  flex items-start gap-2 px-3 py-5 sm:gap-3 sm:px-5 sm:py-6
                  border-stone-300
                  border-b
                  ${index % 2 === 0 ? "border-r" : ""}
                  md:border-b-0
                  md:border-r
                  ${index === items.length - 1 ? "md:border-r-0" : ""}
                  ${index === items.length - 2 ? "md:border-r-0" : ""}
                `}
              >
                <Icon
                  className={`mt-0.5 h-5 w-5 flex-shrink-0 ${item.accent ? "text-gold-600" : "text-navy-800"
                    }`}
                />

                <div className="min-w-0">
                  <p className="text-[9px] uppercase leading-tight tracking-[0.1em] text-charcoal-400 sm:text-[10px] sm:tracking-[0.14em]">
                    {item.label}
                  </p>

                  <p
                    className={`mt-1 break-words text-xs font-semibold leading-snug sm:text-sm ${item.accent ? "text-gold-600" : "text-navy-950"
                      }`}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
