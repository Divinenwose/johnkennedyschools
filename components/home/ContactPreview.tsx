'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { schoolConfig } from '@/config/school-config';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { MapPin, Phone, Mail } from 'lucide-react';

export const ContactPreview: React.FC = () => {
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
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionHeading subtitle="Get in Touch">CONTACT US</SectionHeading>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Campuses</h3>
              
              <div className="space-y-6">
                {/* Nursery */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    {schoolConfig.campuses.nursery.name}
                  </h4>
                  <div className="flex items-start space-x-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="whitespace-pre-line text-sm">
                      {schoolConfig.campuses.nursery.address}
                    </p>
                  </div>
                </div>

                {/* College */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    {schoolConfig.campuses.college.name}
                  </h4>
                  <div className="flex items-start space-x-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="whitespace-pre-line text-sm">
                      {schoolConfig.campuses.college.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-900" />
                  <div>
                    <a
                      href={`tel:+234${schoolConfig.contact.phones[0].replace(/^0/, '')}`}
                      className="text-gray-700 hover:text-amber-600 transition-colors"
                    >
                      {schoolConfig.contact.phones[0]}
                    </a>
                    <span className="text-gray-400 mx-2">/</span>
                    <a
                      href={`tel:+234${schoolConfig.contact.phones[1].replace(/^0/, '')}`}
                      className="text-gray-700 hover:text-amber-600 transition-colors"
                    >
                      {schoolConfig.contact.phones[1]}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us an Enquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="campus" className="block text-sm font-medium text-gray-700 mb-1">
                  Campus *
                </label>
                <select
                  id="campus"
                  name="campus"
                  value={formData.campus}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                >
                  <option value="">Select a campus</option>
                  <option value="nursery">Nursery Campus</option>
                  <option value="college">College Campus</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none resize-none"
                />
              </div>

              <Button type="submit" variant="primary" size="md" className="w-full">
                Send Enquiry
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
