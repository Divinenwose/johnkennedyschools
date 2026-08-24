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
import { Reveal } from '@/components/motion/Reveal';

export default function Home() {
  return (
    <>
      <AdmissionsPopup />
      <main>
        <Hero />
        <SchoolHighlights />
        <Reveal><AboutPreview /></Reveal>
        <Reveal><Campuses /></Reveal>
        <Reveal><AcademicsPreview /></Reveal>
        <Reveal><WhyChooseUs /></Reveal>
        <Reveal><SchoolLifePreview /></Reveal>
        <Reveal><AdmissionsCTA /></Reveal>
        <Reveal><ResultsPortal /></Reveal>
        <Reveal><NewsPreview /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><ContactPreview /></Reveal>
      </main>
    </>
  );
}
