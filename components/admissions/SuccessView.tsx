'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Download, Printer, Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { ApplicationRecord } from '@/lib/application-storage';
import { generateAdmissionBill } from '@/lib/admission-bill';

interface SuccessViewProps {
  record: ApplicationRecord;
}

export const SuccessView: React.FC<SuccessViewProps> = ({ record }) => {
  const [isGeneratingBill, setIsGeneratingBill] = useState(false);

  const applicantName = [record.student.firstName, record.student.middleName, record.student.lastName]
    .filter(Boolean)
    .join(' ');

  const handleDownloadBill = async () => {
    setIsGeneratingBill(true);
    try {
      await generateAdmissionBill(record);
    } finally {
      setIsGeneratingBill(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="w-16 h-16 bg-navy-900 flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-8 h-8 text-gold-400" strokeWidth={1.5} />
      </div>

      <h1 className="font-display text-3xl md:text-4xl text-navy-950 mb-3">Registration Successful</h1>
      <p className="text-charcoal-600 leading-relaxed mb-10">
        Thank you for applying to John Kennedy International Schools. Your application has been
        received. Please keep your application number for all future correspondence.
      </p>

      {/* Summary card */}
      <div className="border border-stone-300 bg-ivory-50 text-left divide-y divide-stone-300 mb-10">
        {[
          { label: 'Application Number', value: record.applicationNumber },
          { label: 'Applicant', value: applicantName },
          { label: 'Class Applied For', value: record.student.classApplyingFor },
          {
            label: 'Registration Date',
            value: new Date(record.submittedAt).toLocaleDateString('en-NG', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
          },
          { label: 'Status', value: record.status },
        ].map((row) => (
          <div key={row.label} className="grid grid-cols-2 px-6 py-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-500">{row.label}</span>
            <span className="text-sm font-medium text-navy-950">{row.value}</span>
          </div>
        ))}
      </div>

      {/* Next steps */}
      <div className="border-l-2 border-gold-500 pl-6 text-left mb-10">
        <h3 className="font-display text-lg text-navy-950 mb-2">Next Steps</h3>
        <ul className="space-y-2 text-sm text-charcoal-700">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 bg-gold-500 rotate-45 mt-1.5 flex-shrink-0" aria-hidden="true" />
            <span>Download your admission bill below and complete payment as instructed.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 bg-gold-500 rotate-45 mt-1.5 flex-shrink-0" aria-hidden="true" />
            <span>The school's admissions office will contact you regarding assessment scheduling.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 bg-gold-500 rotate-45 mt-1.5 flex-shrink-0" aria-hidden="true" />
            <span>Keep your application number — you'll need it for any follow-up enquiries.</span>
          </li>
        </ul>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
