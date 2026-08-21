import React from 'react';
import Link from 'next/link';
import { schoolConfig } from '@/config/school-config';
import { navigationConfig } from '@/config/navigation-config';
import { admissionsConfig } from '@/config/admissions-config';
import { GraduationCap, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-500 p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">JOHN KENNEDY</h3>
                <p className="text-xs text-amber-400 font-semibold">
                  INTERNATIONAL SCHOOLS
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building Excellence. Shaping the Future. 
              Providing quality education in Surulere, Lagos.
            </p>
          </div>

          {/* School Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">School</h4>
            <ul className="space-y-2">
              {navigationConfig.footer.school.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigationConfig.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Campuses & Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-400">
                  <p className="font-medium text-white mb-1">Nursery Campus</p>
                  <p className="whitespace-pre-line">
                    {schoolConfig.campuses.nursery.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-400">
                  <p className="font-medium text-white mb-1">College Campus</p>
                  <p className="whitespace-pre-line">
                    {schoolConfig.campuses.college.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <div className="text-sm">
                  <a
                    href={`tel:+234${schoolConfig.contact.phones[0].replace(/^0/, '')}`}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {schoolConfig.contact.phones[0]}
                  </a>
                  <span className="text-gray-600 mx-1">/</span>
                  <a
                    href={`tel:+234${schoolConfig.contact.phones[1].replace(/^0/, '')}`}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {schoolConfig.contact.phones[1]}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {schoolConfig.name}. All rights reserved.
            </p>

            <div className="flex items-center space-x-4">
              {schoolConfig.socialLinks.facebook && (
                <a
                  href={schoolConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm font-medium"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
              )}
              {schoolConfig.socialLinks.instagram && (
                <a
                  href={schoolConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm font-medium"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              )}
              {schoolConfig.socialLinks.youtube && (
                <a
                  href={schoolConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm font-medium"
                  aria-label="YouTube"
                >
                  YouTube
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
