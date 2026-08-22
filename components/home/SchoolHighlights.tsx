import React from 'react';
import { MapPin, Phone, GraduationCap } from 'lucide-react';
import { schoolConfig } from '@/config/school-config';

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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-stone-300">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-3 py-6 px-4 sm:px-6">
                <Icon className={`w-5 h-5 flex-shrink-0 ${item.accent ? 'text-gold-600' : 'text-navy-800'}`} />
                <div>
                  <p className="text-[10px] text-charcoal-400 uppercase tracking-[0.14em]">{item.label}</p>
                  <p className={`text-sm font-semibold mt-0.5 ${item.accent ? 'text-gold-600' : 'text-navy-950'}`}>
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
