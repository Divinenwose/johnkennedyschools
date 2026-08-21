'use client';

import React, { useEffect, useRef, useState } from 'react';
import { statisticsConfig } from '@/config/statistics-config';
import { Container } from '@/components/ui/Container';
import * as Icons from 'lucide-react';

export const Statistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statisticsConfig.statistics.map((stat) => {
            const Icon = Icons[stat.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            return (
              <div key={stat.id} className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                  {Icon && <Icon className="w-8 h-8 text-amber-500" />}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-gray-200 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
