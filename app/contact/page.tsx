'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { MapPin, Phone, Mail } from 'lucide-react';
import { schoolConfig } from '@/config/school-config';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    campus: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be handled by backend/email service
    alert('Thank you for your enquiry. We will get back to you soon.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      campus: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
          <Container>
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Contact Us
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Get in touch with John Kennedy International Schools. We're here to answer your questions and help you learn more about our school.
              </p>
            </div>
          </Container>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <Container>
            <SectionHeading subtitle="Find Us">OUR CAMPUSES</SectionHeading>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Nursery */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {schoolConfig.campuses.nursery.name}
                </h3>
                <div className="flex items-start space-x-3 text-gray-700 mb-4">
                  <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="whitespace-pre-line">
                    {schoolConfig.campuses.nursery.address}
                  </p>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <a
                    href={`tel:+234${schoolConfig.contact.phones[0].replace(/^0/, '')}`}
                    className="hover:text-amber-600 transition-colors"
                  >
                    {schoolConfig.contact.phones[0]}
                  </a>
                </div>
              </div>

              {/* College */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {schoolConfig.campuses.college.name}
                </h3>
                <div className="flex items-start space-x-3 text-gray-700 mb-4">
                  <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="whitespace-pre-line">
                    {schoolConfig.campuses.college.address}
                  </p>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <a
                    href={`tel:+234${schoolConfig.contact.phones[0].replace(/^0/, '')}`}
                    className="hover:text-amber-600 transition-colors"
                  >
                    {schoolConfig.contact.phones[0]}
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Numbers */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-900" />
                  <div>
                    <a
                      href={`tel:+234${schoolConfig.contact.phones[0].replace(/^0/, '')}`}
                      className="text-gray-700 hover:text-amber-600 transition-colors text-lg"
                    >
                      {schoolConfig.contact.phones[0]}
                    </a>
                    <span className="text-gray-400 mx-2">/</span>
                    <a
                      href={`tel:+234${schoolConfig.contact.phones[1].replace(/^0/, '')}`}
                      className="text-gray-700 hover:text-amber-600 transition-colors text-lg"
                    >
                      {schoolConfig.contact.phones[1]}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gray-50">
          <Container>
            <SectionHeading subtitle="Get in Touch">SEND US AN ENQUIRY</SectionHeading>
            
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="campus" className="block text-sm font-medium text-gray-700 mb-2">
                    Campus *
                  </label>
                  <select
                    id="campus"
                    name="campus"
                    value={formData.campus}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                  >
                    <option value="">Select a campus</option>
                    <option value="nursery">Nursery Campus</option>
                    <option value="college">College Campus</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Enquiry
                </Button>
              </form>

              <p className="text-sm text-gray-500 mt-4 text-center">
                * This form is a demonstration. To enable actual email functionality, connect it to an email service or backend API.
              </p>
            </div>
          </Container>
        </section>

        {/* Map Placeholder */}
        <section className="py-20 bg-white">
          <Container>
            <SectionHeading subtitle="Find Us">LOCATION MAP</SectionHeading>
            
            <div className="bg-gray-100 p-12 rounded-lg text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Google Maps Integration</h3>
              <p className="text-gray-600 mb-4">
                Interactive maps will be added here with the exact coordinates of both campuses.
              </p>
              <p className="text-sm text-gray-500">
                Configure map URLs in the school configuration file to enable this feature.
              </p>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
