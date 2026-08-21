import React from 'react';
import { MapPin, Phone, GraduationCap } from 'lucide-react';
import { schoolConfig } from '@/config/school-config';
import { admissionsConfig } from '@/config/admissions-config';

export const SchoolHighlights: React.FC = () => {
  return (
    <section className="bg-white border-b border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Nursery Campus */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <MapPin className="w-6 h-6 text-blue-900" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Nursery Campus</p>
              <p className="text-sm font-semibold text-gray-900">Aguda, Surulere</p>
            </div>
          </div>

          {/* College Campus */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <MapPin className="w-6 h-6 text-blue-900" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">College Campus</p>
              <p className="text-sm font-semibold text-gray-900">Aguda, Surulere</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <Phone className="w-6 h-6 text-blue-900" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Contact</p>
              <p className="text-sm font-semibold text-gray-900">
                {schoolConfig.contact.phones[0]} / {schoolConfig.contact.phones[1]}
              </p>
            </div>
          </div>

          {/* Admissions */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Admissions</p>
              <p className="text-sm font-semibold text-amber-600">Now Enrolling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
