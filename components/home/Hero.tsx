import React from 'react';
import Link from 'next/link';
import { schoolImages } from '@/config/images-config';
import { schoolConfig } from '@/config/school-config';
import { admissionsConfig } from '@/config/admissions-config';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={schoolImages.hero}
          alt="Students learning in a modern classroom"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge variant="accent" className="px-6 py-2 text-base">
              NOW ENROLLING FOR THE NEXT SESSION
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            BUILDING EXCELLENCE.
            <br />
            SHAPING THE FUTURE.
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            At John Kennedy International Schools, we nurture confident, disciplined and 
            academically prepared students for a changing world.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              href={admissionsConfig.registrationUrl}
              variant="secondary"
              size="lg"
              external
              className="w-full sm:w-auto"
            >
              Register for Admission →
            </Button>
<Button
              href="/about"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-blue-900"
            >
              Explore Our School
            </Button>
          </div>

          {/* Optional Small CTA */}
          <div className="pt-4">
            <a
              href={schoolConfig.resultPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium"
            >
              Access Result Portal →
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
