'use client';

import React, { useState } from 'react';
import { AlertCircle, Download, Printer, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { TextField } from '@/components/admissions/FormField';
import { EMAIL_REGEX } from '@/components/admissions/types';
import { lookupApplication } from '@/lib/actions/admissions';
import type { PublicApplicationSummary } from '@/lib/supabase/types';
import { generateAdmissionBill } from '@/lib/admission-bill';

type FieldErrors = { applicationNumber?: string; email?: string };

export const ApplicationStatusLookup: React.FC = () => {
  const [applicationNumber, setApplicationNumber] = useState('');
  const [email, setEmail] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [lookupError, setLookupError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PublicApplicationSummary | null>(null);
  const [isGeneratingBill, setIsGeneratingBill] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: FieldErrors = {};
    if (!applicationNumber.trim()) errors.applicationNumber = 'Please enter your application number.';
    if (!email.trim()) errors.email = 'Please enter the email address used during registration.';
    else if (!EMAIL_REGEX.test(email)) errors.email = 'Enter a valid email address.';

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setLookupError(null);
    setResult(null);
    setIsLoading(true);
    try {
      const response = await lookupApplication({ applicationNumber, email });
      if (response.success) {
        setResult(response.application);
      } else {
        setLookupError(response.error);
      }
    } catch (err) {
      console.error('[ApplicationStatusLookup] lookup failed:', err);
      setLookupError("We couldn't look up your application right now. Please try again shortly.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadBill = async () => {
    if (!result) return;
    setIsGeneratingBill(true);
    try {
      await generateAdmissionBill(result);
    } finally {
      setIsGeneratingBill(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      {!result && (
        <form onSubmit={handleSubmit} className="space-y-5">
          <TextField
            id="applicationNumber"
            label="Application Number"
            required
            value={applicationNumber}
            onChange={(v) => {
              setApplicationNumber(v);
              setFieldErrors((prev) => ({ ...prev, applicationNumber: undefined }));
            }}
            error={fieldErrors.applicationNumber}
            placeholder="JKS-2026-0001"
          />
          <TextField
            id="email"
            label="Email Address"
            type="email"
            required
            value={email}
            onChange={(v) => {
              setEmail(v);
              setFieldErrors((prev) => ({ ...prev, email: undefined }));
            }}
            error={fieldErrors.email}
            hint="The email address you used when registering."
          />

          {lookupError && (
            <div role="alert" className="flex items-start gap-3 border border-red-300 bg-red-50 px-5 py-4 text-sm text-red-700">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>{lookupError}</span>
            </div>
          )}

          <Button type="submit" variant="primary" size="lg" className="w-full whitespace-nowrap" disabled={isLoading}>
            {isLoading ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Checking…
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                Check Application
              </>
            )}
          </Button>
        </form>
      )}

      {result && (
        <div data-print-application>
          <div className="border border-stone-300 bg-ivory-50 text-left divide-y divide-stone-300 mb-8">
            {[
              { label: 'Application Number', value: result.application_number },
              { label: 'Applicant', value: result.applicant_name },
              { label: 'Class Applied For', value: result.class_applied_for },
              {
                label: 'Registration Date',
                value: new Date(result.registration_date).toLocaleDateString('en-NG', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }),
              },
              ...(result.academic_session ? [{ label: 'Academic Session', value: result.academic_session }] : []),
              { label: 'Application Status', value: result.status },
              { label: 'Payment Status', value: result.payment_status },
              {
                label: 'Last Updated',
                value: new Date(result.updated_at).toLocaleDateString('en-NG', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }),
              },
            ].map((row) => (
              <div key={row.label} className="grid grid-cols-2 px-6 py-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-500">{row.label}</span>
                <span className="text-sm font-medium text-navy-950">{row.value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleDownloadBill}
              variant="secondary"
              size="md"
              className="whitespace-nowrap flex-1"
              disabled={isGeneratingBill}
            >
              <Download className="w-4 h-4" />
              {isGeneratingBill ? 'Preparing…' : 'Download Admission Bill'}
            </Button>
            <Button onClick={() => window.print()} variant="outline" size="md" className="whitespace-nowrap flex-1">
              <Printer className="w-4 h-4" />
              Print Application
            </Button>
          </div>

          <button
            type="button"
            onClick={() => {
              setResult(null);
              setApplicationNumber('');
              setEmail('');
            }}
            className="mt-6 text-sm font-semibold text-gold-600 hover:text-gold-700"
          >
            ← Check a different application
          </button>
        </div>
      )}
    </div>
  );
};
