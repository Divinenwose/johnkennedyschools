'use client';

import { useState } from 'react';
import { LoadingScreen } from '@/components/home/LoadingScreen';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/home/Hero';
import { SchoolHighlights } from '@/components/home/SchoolHighlights';
import { AboutPreview } from '@/components/home/AboutPreview';
import { Campuses } from '@/components/home/Campuses';
import { AcademicsPreview } from '@/components/home/AcademicsPreview';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { SchoolLifePreview } from '@/components/home/SchoolLifePreview';
import { AdmissionsCTA } from '@/components/home/AdmissionsCTA';
import { ResultsPortal } from '@/components/home/ResultsPortal';
import { NewsPreview } from '@/components/home/NewsPreview';
import { Testimonials } from '@/components/home/Testimonials';
import { Statistics } from '@/components/home/Statistics';
import { ContactPreview } from '@/components/home/ContactPreview';
import { Footer } from '@/components/layout/Footer';
import { AdmissionsPopup } from '@/components/home/AdmissionsPopup';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <div className="min-h-screen">
          <AnnouncementBar />
          <Navbar />
          <AdmissionsPopup />
          
          <main>
            <Hero />
            <SchoolHighlights />
            <AboutPreview />
            <Campuses />
            <AcademicsPreview />
            <WhyChooseUs />
            <SchoolLifePreview />
            <AdmissionsCTA />
            <ResultsPortal />
            <NewsPreview />
            <Testimonials />
            <Statistics />
            <ContactPreview />
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
}
