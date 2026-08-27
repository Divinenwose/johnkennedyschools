'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Download, Printer, Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { PublicApplicationSummary } from '@/lib/supabase/types';
import { generateAdmissionBill } from '@/lib/admission-bill';

interface SuccessViewProps {
  application: PublicApplicationSummary;
}

export const SuccessView: React.FC<SuccessViewProps> = ({ application }) => {
  const [isGeneratingBill, setIsGeneratingBill] = useState(false);

  const handleDownloadBill = async () => {
    setIsGeneratingBill(true);
    try {
      await generateAdmissionBill(application);
    } finally {
      setIsGeneratingBill(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto text-center" data-print-application>
      <div className="w-16 h-16 bg-navy-900 flex items-center justify-center mx-auto mb-6 print:hidden">
        <CheckCircle className="w-8 h-8 text-gold-400" strokeWidth={1.5} />
      </div>

      <h1 className="font-display text-3xl md:text-4xl text-navy-950 mb-3">Application Submitted Successfully</h1>
      <p className="text-charcoal-600 leading-relaxed mb-10 print:hidden">
        Thank you for applying to John Kennedy International Schools. Your application has been
        received and saved. Please keep your application number for all future correspondence.
      </p>

      {/* Summary card */}
      <div className="border border-stone-300 bg-ivory-50 text-left divide-y divide-stone-300 mb-10">
        {[
          { label: 'Application Number', value: application.application_number },
          { label: 'Applicant', value: application.applicant_name },
          { label: 'Class Applied For', value: application.class_applied_for },
          {
            label: 'Registration Date',
            value: new Date(application.registration_date).toLocaleDateString('en-NG', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
          },
          ...(application.academic_session ? [{ label: 'Academic Session', value: application.academic_session }] : []),
          { label: 'Application Status', value: application.status },
          { label: 'Payment Status', value: application.payment_status },
        ].map((row) => (
          <div key={row.label} className="grid grid-cols-2 px-6 py-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-500">{row.label}</span>
            <span className="text-sm font-medium text-navy-950">{row.value}</span>
          </div>
        ))}
      </div>

      {/* Declaration — shown in the printed application per spec */}
      <div className="border border-stone-300 bg-ivory-50 px-6 py-5 text-left mb-10">
        <h3 className="font-display text-base text-navy-950 mb-2">Declaration</h3>
        <p className="text-sm text-charcoal-600 leading-relaxed">
          The applicant confirmed that the information provided in this application is accurate
          and complete to the best of their knowledge, and agreed to the school&apos;s admission
          declaration at the time of submission.
        </p>
      </div>

      {/* Next steps */}
      <div className="border-l-2 border-gold-500 pl-6 text-left mb-10 print:hidden">
        <h3 className="font-display text-lg text-navy-950 mb-2">Next Steps</h3>
        <ul className="space-y-2 text-sm text-charcoal-700">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 bg-gold-500 rotate-45 mt-1.5 flex-shrink-0" aria-hidden="true" />
            <span>Download your admission bill below and complete payment as instructed.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 bg-gold-500 rotate-45 mt-1.5 flex-shrink-0" aria-hidden="true" />
            <span>The school&apos;s admissions office will contact you regarding assessment scheduling.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 bg-gold-500 rotate-45 mt-1.5 flex-shrink-0" aria-hidden="true" />
            <span>Keep your application number and email — you&apos;ll need both to check your status later.</span>
          </li>
        </ul>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center print:hidden">
        <Button
          onClick={handleDownloadBill}
          variant="secondary"
          size="md"
          className="whitespace-nowrap"
          disabled={isGeneratingBill}
        >
          <Download className="w-4 h-4" />
          {isGeneratingBill ? 'Preparing…' : 'Download Admission Bill'}
        </Button>
        <Button onClick={() => window.print()} variant="outline" size="md" className="whitespace-nowrap">
          <Printer className="w-4 h-4" />
          Print Application
        </Button>
        <Link href="/admissions/application-status">
          <Button variant="outline" size="md" className="whitespace-nowrap w-full">
            <Search className="w-4 h-4" />
            Check Application Status
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost" size="md" className="whitespace-nowrap w-full">
            <Home className="w-4 h-4" />
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};
