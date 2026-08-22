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
import { ContactPreview } from '@/components/home/ContactPreview';
import { AdmissionsPopup } from '@/components/home/AdmissionsPopup';

export default function Home() {
  return (
    <>
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
        <ContactPreview />
      </main>
    </>
  );
}
