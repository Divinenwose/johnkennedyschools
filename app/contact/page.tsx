'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/motion/Reveal';
import { MapPin, Phone } from 'lucide-react';
import { schoolConfig } from '@/config/school-config';
import { schoolImages } from '@/config/images-config';
import { submitEnquiry } from '@/lib/actions/contact';

const inputStyles =
  'w-full px-4 py-3 bg-ivory-50 border border-stone-300 text-sm text-charcoal-900 placeholder:text-charcoal-400 focus-visible:outline-2 focus-visible:outline-gold-500 focus-visible:outline-offset-1 outline-none transition-colors';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    campus: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage(null);
    const result = await submitEnquiry(formData);
    if (!result.success) {
      setFormMessage({ type: 'error', text: result.error });
      setIsSubmitting(false);
      return;
    }
    setFormMessage({ type: 'success', text: 'Thank you for your enquiry. We will get back to you soon.' });
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      campus: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <PageHeader
        eyebrow="We'd Love to Hear From You"
        title="Contact Us"
        description="Get in touch with John Kennedy International Schools. We're here to answer your questions and help you learn more about our school."
        image={schoolImages.pageHeroes.contact}
        overlay="diagonal"
      />

      <Reveal>
        <section className="py-20 md:py-28 bg-ivory-100">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <SectionHeading subtitle="Find Us">Our Sections</SectionHeading>

              <div className="space-y-8">
                <div className="border-l-2 border-gold-500 pl-6">
                  <h3 className="font-display text-xl text-navy-950 mb-3">
                    {schoolConfig.campuses.nursery.name}
                  </h3>
                  <div className="flex items-start gap-3 text-charcoal-700 mb-3">
                    <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0 mt-1" />
                    <p className="whitespace-pre-line text-sm">{schoolConfig.campuses.nursery.address}</p>
                  </div>
                  <div className="flex items-center gap-3 text-charcoal-700">
                    <Phone className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <a
                      href={`tel:+234${schoolConfig.contact.phones[0].replace(/^0/, '')}`}
                      className="text-sm hover:text-navy-900 transition-colors"
                    >
                      {schoolConfig.contact.phones[0]}
                    </a>
                  </div>
                </div>

                <div className="border-l-2 border-gold-500 pl-6">
                  <h3 className="font-display text-xl text-navy-950 mb-3">
                    {schoolConfig.campuses.college.name}
                  </h3>
                  <div className="flex items-start gap-3 text-charcoal-700 mb-3">
                    <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0 mt-1" />
                    <p className="whitespace-pre-line text-sm">{schoolConfig.campuses.college.address}</p>
                  </div>
                  <div className="flex items-center gap-3 text-charcoal-700">
                    <Phone className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <a
                      href={`tel:+234${schoolConfig.contact.phones[0].replace(/^0/, '')}`}
                      className="text-sm hover:text-navy-900 transition-colors"
                    >
                      {schoolConfig.contact.phones[0]}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-stone-300">
                <h3 className="font-display text-lg text-navy-950 mb-4">Phone Lines</h3>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-navy-800 flex-shrink-0" />
                  <div className="text-sm">
                    <a
                      href={`tel:+234${schoolConfig.contact.phones[0].replace(/^0/, '')}`}
                      className="text-charcoal-700 hover:text-navy-900 transition-colors"
                    >
                      {schoolConfig.contact.phones[0]}
                    </a>
                    <span className="text-charcoal-400 mx-2">/</span>
                    <a
                      href={`tel:+234${schoolConfig.contact.phones[1].replace(/^0/, '')}`}
                      className="text-charcoal-700 hover:text-navy-900 transition-colors"
                    >
                      {schoolConfig.contact.phones[1]}
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10">
                <h3 className="font-display text-lg text-navy-950 mb-4">Location Map</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="border border-stone-300 bg-ivory-50">
                    <div className="px-4 py-3">
                      <p className="text-sm font-semibold text-navy-950">Nursery &amp; Primary section</p>
                    </div>
                    <iframe
                      title="Map showing John Kennedy International Nursery School"
                      src={`https://www.google.com/maps?q=${encodeURIComponent(schoolConfig.campuses.nursery.address)}&output=embed`}
                      className="w-full aspect-[4/3] border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                  <div className="border border-stone-300 bg-ivory-50">
                    <div className="px-4 py-3">
                      <p className="text-sm font-semibold text-navy-950">College section</p>
                    </div>
                    <iframe
                      title="Map showing John Kennedy International College"
                      src={`https://www.google.com/maps?q=${encodeURIComponent(schoolConfig.campuses.college.address)}&output=embed`}
                      className="w-full aspect-[4/3] border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <SectionHeading subtitle="Get in Touch">Send Us an Enquiry</SectionHeading>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-600 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className={inputStyles}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-600 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputStyles}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-600 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={inputStyles}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="campus" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-600 mb-2">
                    Section *
                  </label>
                  <select
                    id="campus"
                    name="campus"
                    value={formData.campus}
                    onChange={handleChange}
                    required
                    className={inputStyles}
                  >
                    <option value="">Select a section</option>
                    <option value="nursery">Nursery &amp; Primary section</option>
                    <option value="college">College section</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-600 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={inputStyles}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-600 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`${inputStyles} resize-none`}
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  {isSubmitting ? 'Sending…' : 'Send Enquiry'}
                </Button>

                {formMessage && (
                  <p role="status" className={`text-sm text-center pt-1 ${formMessage.type === 'error' ? 'text-red-600' : 'text-green-700'}`}>
                    {formMessage.text}
                  </p>
                )}
              </form>
            </div>
          </div>
        </Container>
      </section>
      </Reveal>
    </main>
  );
}
