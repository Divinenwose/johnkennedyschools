import React from 'react';
import Link from 'next/link';
import { schoolConfig } from '@/config/school-config';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { MapPin, Phone } from 'lucide-react';

// A lighter "visit us" teaser rather than duplicating the full enquiry
// form that already lives on /contact — avoids showing the same form
// twice and gives the homepage better rhythm.
export const ContactPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-ivory-100">
      <Container>
        <SectionHeading subtitle="Get in Touch" align="center">
          Visit or Reach Us
        </SectionHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 max-w-4xl mx-auto text-left">
          <div className="border-l-2 border-gold-500 pl-6">
            <h3 className="font-display text-lg text-navy-950 mb-2">{schoolConfig.campuses.nursery.name}</h3>
            <div className="flex items-start gap-2.5 text-charcoal-600 text-sm">
              <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
              <span className="whitespace-pre-line">{schoolConfig.campuses.nursery.address}</span>
            </div>
          </div>

          <div className="border-l-2 border-gold-500 pl-6">
            <h3 className="font-display text-lg text-navy-950 mb-2">{schoolConfig.campuses.college.name}</h3>
            <div className="flex items-start gap-2.5 text-charcoal-600 text-sm">
              <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
              <span className="whitespace-pre-line">{schoolConfig.campuses.college.address}</span>
            </div>
          </div>

          <div className="border-l-2 border-gold-500 pl-6">
            <h3 className="font-display text-lg text-navy-950 mb-2">Call Us</h3>
            <div className="flex items-center gap-2.5 text-charcoal-600 text-sm">
              <Phone className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <span>
                {schoolConfig.contact.phones[0]} / {schoolConfig.contact.phones[1]}
              </span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/contact">
            <Button variant="primary" size="md">
              Send Us an Enquiry →
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
