import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { schoolConfig } from '@/config/school-config';
import { navigationConfig } from '@/config/navigation-config';
import { admissionsConfig } from '@/config/admissions-config';
import { MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-ivory-100">
      {/* Closing CTA strip */}
      <div className="border-b border-ivory-50/10">
        <Container className="py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold-400 mb-2">Admissions Open</p>
            <h3 className="font-display text-2xl md:text-3xl text-ivory-50">
              Begin your child&apos;s journey with us.
            </h3>
          </div>
          <Button href={admissionsConfig.registrationUrl} variant="secondary" size="lg">
            Start Your Application →
          </Button>
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* School Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-ivory-50 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="John Kennedy International Schools crest"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <div className="leading-none">
                <span className="block font-display font-semibold text-ivory-50">JOHN KENNEDY</span>
                <span className="block text-[10px] text-gold-400 font-semibold uppercase tracking-[0.18em] mt-1">
                  International Schools
                </span>
              </div>
            </div>
            <p className="text-ivory-100/60 text-sm leading-relaxed">
              Building Excellence. Shaping the Future. Quality education in Surulere, Lagos.
            </p>
          </div>

          {/* School Links */}
          <div>
            <h4 className="font-display text-base text-ivory-50 mb-5">School</h4>
            <ul className="space-y-3">
              {navigationConfig.footer.school.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory-100/60 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base text-ivory-50 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navigationConfig.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ivory-100/60 hover:text-gold-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-ivory-100/60 hover:text-gold-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Campuses & Contact */}
          <div className="space-y-5">
            <h4 className="font-display text-base text-ivory-50 mb-1">Contact</h4>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-ivory-100/60">
                <p className="font-medium text-ivory-50 mb-1">{schoolConfig.campuses.nursery.name}</p>
                <p className="whitespace-pre-line">{schoolConfig.campuses.nursery.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-ivory-100/60">
                <p className="font-medium text-ivory-50 mb-1">{schoolConfig.campuses.college.name}</p>
                <p className="whitespace-pre-line">{schoolConfig.campuses.college.address}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <div className="text-sm">
                <a
                  href={`tel:+234${schoolConfig.contact.phones[0].replace(/^0/, '')}`}
                  className="text-ivory-100/60 hover:text-gold-400 transition-colors"
                >
                  {schoolConfig.contact.phones[0]}
                </a>
                <span className="text-ivory-100/30 mx-1.5">/</span>
                <a
                  href={`tel:+234${schoolConfig.contact.phones[1].replace(/^0/, '')}`}
                  className="text-ivory-100/60 hover:text-gold-400 transition-colors"
                >
                  {schoolConfig.contact.phones[1]}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-ivory-50/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-ivory-100/40 text-xs">
              © {currentYear} {schoolConfig.name}. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {schoolConfig.socialLinks.facebook && (
                <a
                  href={schoolConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory-100/50 hover:text-gold-400 transition-colors text-xs font-medium uppercase tracking-wider"
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
                  className="text-ivory-100/50 hover:text-gold-400 transition-colors text-xs font-medium uppercase tracking-wider"
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
                  className="text-ivory-100/50 hover:text-gold-400 transition-colors text-xs font-medium uppercase tracking-wider"
                  aria-label="YouTube"
                >
                  YouTube
                </a>
              )}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
