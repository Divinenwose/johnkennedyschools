'use client';

import React, { useState } from 'react';
import { Upload, X, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Stepper } from '@/components/admissions/Stepper';
import { SuccessView } from '@/components/admissions/SuccessView';
import { TextField, SelectField, TextAreaField } from '@/components/admissions/FormField';
import { RegistrationFormData, emptyFormData, EMAIL_REGEX, isValidPhone } from '@/components/admissions/types';
import { allClasses } from '@/config/classes-config';
import { NIGERIAN_STATES } from '@/components/admissions/nigerian-states';
import { saveApplication, ApplicationRecord } from '@/lib/application-storage';

type Errors = Record<string, string>;

const TOTAL_STEPS = 6;
const MAX_FILE_SIZE_MB = 5;
const ACCEPTED_FILE_TYPES = '.pdf,.jpg,.jpeg,.png';

export const RegistrationForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<RegistrationFormData>(emptyFormData);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<ApplicationRecord | null>(null);

  const update = <T extends keyof RegistrationFormData>(
    section: T,
    field: keyof RegistrationFormData[T],
    value: any
  ) => {
    setData((prev) => ({
      ...prev,
      [section]: { ...(prev[section] as any), [field]: value },
    }));
  };

  const clearError = (key: string) => {
    setErrors((prev) => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  // ---- Validation ----
  const validateStep = (currentStep: number): Errors => {
    const next: Errors = {};

    if (currentStep === 1) {
      if (!data.student.firstName.trim()) next['student.firstName'] = 'First name is required.';
      if (!data.student.lastName.trim()) next['student.lastName'] = 'Last name is required.';
      if (!data.student.dateOfBirth) next['student.dateOfBirth'] = 'Date of birth is required.';
      else if (new Date(data.student.dateOfBirth) > new Date())
        next['student.dateOfBirth'] = 'Date of birth cannot be in the future.';
      if (!data.student.gender) next['student.gender'] = 'Please select a gender.';
      if (!data.student.nationality.trim()) next['student.nationality'] = 'Nationality is required.';
      if (!data.student.classApplyingFor) next['student.classApplyingFor'] = 'Please select a class.';
    }

    if (currentStep === 2) {
      if (!data.guardian.fullName.trim()) next['guardian.fullName'] = "Guardian's full name is required.";
      if (!data.guardian.relationship.trim()) next['guardian.relationship'] = 'Relationship is required.';
      if (!data.guardian.phone.trim()) next['guardian.phone'] = 'Phone number is required.';
      else if (!isValidPhone(data.guardian.phone))
        next['guardian.phone'] = 'Enter a valid Nigerian phone number (e.g. 08012345678).';
      if (!data.guardian.email.trim()) next['guardian.email'] = 'Email address is required.';
      else if (!EMAIL_REGEX.test(data.guardian.email)) next['guardian.email'] = 'Enter a valid email address.';
      if (!data.guardian.address.trim()) next['guardian.address'] = 'Residential address is required.';

      if (!data.emergencyContact.fullName.trim())
        next['emergencyContact.fullName'] = "Emergency contact's name is required.";
      if (!data.emergencyContact.relationship.trim())
        next['emergencyContact.relationship'] = 'Relationship is required.';
      if (!data.emergencyContact.phone.trim()) next['emergencyContact.phone'] = 'Phone number is required.';
      else if (!isValidPhone(data.emergencyContact.phone))
        next['emergencyContact.phone'] = 'Enter a valid Nigerian phone number.';
    }

    // Steps 3-5 (Academic, Documents, Additional) are optional by design —
    // many applicants (e.g. first-time nursery entrants) have no prior
    // school history or documents yet.

    if (currentStep === 6) {
      if (!data.declaration) next['declaration'] = 'You must agree to the declaration to submit.';
    }

    return next;
  };

  const goNext = () => {
    const stepErrors = validateStep(step);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setErrors({});
    setStep((s) => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToStep = (target: number) => {
    setErrors({});
    setStep(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async () => {
    const stepErrors = validateStep(6);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const record = saveApplication({
        student: data.student,
        guardian: data.guardian,
        emergencyContact: data.emergencyContact,
        academic: data.academic,
        documents: { fileNames: data.documents.files.map((f) => f.name) },
        additional: data.additional,
      });
      setSubmittedRecord(record);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileSelect = (fileList: FileList | null) => {
    if (!fileList) return;
    const incoming = Array.from(fileList).filter((f) => f.size <= MAX_FILE_SIZE_MB * 1024 * 1024);
    setData((prev) => ({ ...prev, documents: { files: [...prev.documents.files, ...incoming] } }));
  };

  const removeFile = (index: number) => {
    setData((prev) => ({
      ...prev,
      documents: { files: prev.documents.files.filter((_, i) => i !== index) },
    }));
  };

  if (submittedRecord) {
    return <SuccessView record={submittedRecord} />;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Stepper currentStep={step} />

      {/* Step 1 — Student Information */}
      {step === 1 && (
        <div className="space-y-6">
          <h2 className="font-display text-2xl text-navy-950">Student Information</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <TextField
              id="firstName"
              label="First Name"
              required
              value={data.student.firstName}
              onChange={(v) => { update('student', 'firstName', v); clearError('student.firstName'); }}
              error={errors['student.firstName']}
            />
            <TextField
              id="middleName"
              label="Middle Name"
              value={data.student.middleName}
              onChange={(v) => update('student', 'middleName', v)}
            />
            <TextField
              id="lastName"
              label="Last Name"
              required
              value={data.student.lastName}
              onChange={(v) => { update('student', 'lastName', v); clearError('student.lastName'); }}
              error={errors['student.lastName']}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <TextField
              id="dateOfBirth"
              label="Date of Birth"
              type="date"
              required
              value={data.student.dateOfBirth}
              onChange={(v) => { update('student', 'dateOfBirth', v); clearError('student.dateOfBirth'); }}
              error={errors['student.dateOfBirth']}
            />
            <SelectField
              id="gender"
              label="Gender"
              required
              value={data.student.gender}
              onChange={(v) => { update('student', 'gender', v); clearError('student.gender'); }}
              options={['Male', 'Female']}
              error={errors['student.gender']}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <TextField
              id="nationality"
              label="Nationality"
              required
              value={data.student.nationality}
              onChange={(v) => { update('student', 'nationality', v); clearError('student.nationality'); }}
              error={errors['student.nationality']}
              placeholder="e.g. Nigerian"
            />
            <SelectField
              id="stateOfOrigin"
              label="State of Origin"
              value={data.student.stateOfOrigin}
              onChange={(v) => update('student', 'stateOfOrigin', v)}
              options={NIGERIAN_STATES}
            />
          </div>
          <SelectField
            id="classApplyingFor"
            label="Class Applying For"
            required
            value={data.student.classApplyingFor}
            onChange={(v) => { update('student', 'classApplyingFor', v); clearError('student.classApplyingFor'); }}
            options={allClasses}
            error={errors['student.classApplyingFor']}
          />
        </div>
      )}

      {/* Step 2 — Guardian & Emergency Contact */}
      {step === 2 && (
        <div className="space-y-10">
          <div className="space-y-6">
            <h2 className="font-display text-2xl text-navy-950">Parent / Guardian Information</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <TextField
                id="guardianFullName"
                label="Full Name"
                required
                value={data.guardian.fullName}
                onChange={(v) => { update('guardian', 'fullName', v); clearError('guardian.fullName'); }}
                error={errors['guardian.fullName']}
              />
              <TextField
                id="guardianRelationship"
                label="Relationship to Student"
                required
                value={data.guardian.relationship}
                onChange={(v) => { update('guardian', 'relationship', v); clearError('guardian.relationship'); }}
                error={errors['guardian.relationship']}
                placeholder="e.g. Mother, Father, Guardian"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <TextField
                id="guardianPhone"
                label="Phone Number"
                required
                value={data.guardian.phone}
                onChange={(v) => { update('guardian', 'phone', v); clearError('guardian.phone'); }}
                error={errors['guardian.phone']}
                placeholder="08012345678"
              />
              <TextField
                id="guardianAltPhone"
                label="Alternative Phone Number"
                value={data.guardian.altPhone}
                onChange={(v) => update('guardian', 'altPhone', v)}
                placeholder="08012345678"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <TextField
                id="guardianEmail"
                label="Email Address"
                type="email"
                required
                value={data.guardian.email}
                onChange={(v) => { update('guardian', 'email', v); clearError('guardian.email'); }}
                error={errors['guardian.email']}
              />
              <TextField
                id="guardianOccupation"
                label="Occupation"
                value={data.guardian.occupation}
                onChange={(v) => update('guardian', 'occupation', v)}
              />
            </div>
            <TextAreaField
              id="guardianAddress"
              label="Residential Address"
              required
              rows={3}
              value={data.guardian.address}
              onChange={(v) => { update('guardian', 'address', v); clearError('guardian.address'); }}
              error={errors['guardian.address']}
            />
          </div>

          <div className="space-y-6 pt-6 border-t border-stone-300">
            <h2 className="font-display text-2xl text-navy-950">Emergency Contact</h2>
            <p className="text-sm text-charcoal-500 -mt-4">
              Someone we can reach if the parent/guardian above is unavailable.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <TextField
                id="emergencyFullName"
                label="Full Name"
                required
                value={data.emergencyContact.fullName}
                onChange={(v) => { update('emergencyContact', 'fullName', v); clearError('emergencyContact.fullName'); }}
                error={errors['emergencyContact.fullName']}
              />
              <TextField
                id="emergencyRelationship"
                label="Relationship"
                required
                value={data.emergencyContact.relationship}
                onChange={(v) => { update('emergencyContact', 'relationship', v); clearError('emergencyContact.relationship'); }}
                error={errors['emergencyContact.relationship']}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <TextField
                id="emergencyPhone"
                label="Phone Number"
                required
                value={data.emergencyContact.phone}
                onChange={(v) => { update('emergencyContact', 'phone', v); clearError('emergencyContact.phone'); }}
                error={errors['emergencyContact.phone']}
                placeholder="08012345678"
              />
              <TextField
                id="emergencyAltPhone"
                label="Alternative Phone Number"
                value={data.emergencyContact.altPhone}
                onChange={(v) => update('emergencyContact', 'altPhone', v)}
                placeholder="08012345678"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 3 — Academic Information */}
      {step === 3 && (
        <div className="space-y-6">
          <h2 className="font-display text-2xl text-navy-950">Academic Information</h2>
          <p className="text-sm text-charcoal-500 -mt-4">
            If this is your child's first school (e.g. Creche or Nursery), you can leave this section blank.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <TextField
              id="previousSchool"
              label="Previous School"
              value={data.academic.previousSchool}
              onChange={(v) => update('academic', 'previousSchool', v)}
            />
            <TextField
              id="previousClass"
              label="Previous Class"
              value={data.academic.previousClass}
              onChange={(v) => update('academic', 'previousClass', v)}
            />
          </div>
          <TextField
            id="previousPerformance"
            label="Previous Academic Performance"
            value={data.academic.previousPerformance}
            onChange={(v) => update('academic', 'previousPerformance', v)}
            placeholder="e.g. Overall grade, position in class"
          />
          <TextAreaField
            id="reasonForLeaving"
            label="Reason for Leaving Previous School"
            value={data.academic.reasonForLeaving}
            onChange={(v) => update('academic', 'reasonForLeaving', v)}
            rows={3}
          />
          <TextAreaField
            id="additionalAcademicInfo"
            label="Additional Academic Information"
            value={data.academic.additionalInfo}
            onChange={(v) => update('academic', 'additionalInfo', v)}
            rows={3}
          />
        </div>
      )}

      {/* Step 4 — Documents */}
      {step === 4 && (
        <div className="space-y-6">
          <h2 className="font-display text-2xl text-navy-950">Document Uploads</h2>
          <p className="text-sm text-charcoal-600 leading-relaxed -mt-2">
            Where available, please attach: passport photograph, birth certificate, previous
            school result, and transfer certificate. Accepted formats:{' '}
            <span className="font-medium text-charcoal-800">PDF, JPG, PNG</span> — maximum{' '}
            <span className="font-medium text-charcoal-800">{MAX_FILE_SIZE_MB}MB</span> per file.
          </p>

          <label
            htmlFor="documentUpload"
            className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-stone-300 bg-ivory-50 py-10 px-6 cursor-pointer hover:border-gold-500 transition-colors"
          >
            <Upload className="w-6 h-6 text-gold-600" strokeWidth={1.5} />
            <span className="text-sm font-medium text-navy-900">Click to select files</span>
            <span className="text-xs text-charcoal-400">or drag and drop</span>
            <input
              id="documentUpload"
              type="file"
              multiple
              accept={ACCEPTED_FILE_TYPES}
              className="hidden"
              onChange={(e) => handleFileSelect(e.target.files)}
            />
          </label>

          {data.documents.files.length > 0 && (
            <ul className="space-y-2">
              {data.documents.files.map((file, index) => (
                <li
                  key={`${file.name}-${index}`}
                  className="flex items-center justify-between gap-3 border border-stone-300 bg-ivory-50 px-4 py-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <FileText className="w-4 h-4 text-navy-800 flex-shrink-0" />
                    <span className="text-sm text-charcoal-800 truncate">{file.name}</span>
                    <span className="text-xs text-charcoal-400 flex-shrink-0">
                      {(file.size / 1024 / 1024).toFixed(1)}MB
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-charcoal-400 hover:text-red-600 flex-shrink-0"
                    aria-label={`Remove ${file.name}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          <p className="text-xs text-charcoal-400 border-l-2 border-gold-500 pl-4 py-1">
            Note: this form does not yet connect to a document storage backend. Your selected
            files are listed here for your own record, but are not transmitted anywhere on
            submission. The school's admissions office will advise how to send physical or
            digital copies of these documents separately.
          </p>
        </div>
      )}

      {/* Step 5 — Additional / Medical Information */}
      {step === 5 && (
        <div className="space-y-6">
          <h2 className="font-display text-2xl text-navy-950">Additional Information</h2>
          <p className="text-sm text-charcoal-500 -mt-4">
            All fields in this section are optional — only share what you're comfortable with.
          </p>
          <TextAreaField
            id="medicalInfo"
            label="Medical Information"
            value={data.additional.medicalInfo}
            onChange={(v) => update('additional', 'medicalInfo', v)}
            placeholder="Any ongoing medical conditions we should be aware of"
            rows={3}
          />
          <TextAreaField
            id="allergies"
            label="Allergies"
            value={data.additional.allergies}
            onChange={(v) => update('additional', 'allergies', v)}
            rows={2}
          />
          <TextAreaField
            id="specialConsiderations"
            label="Special Learning Considerations"
            value={data.additional.specialConsiderations}
            onChange={(v) => update('additional', 'specialConsiderations', v)}
            rows={3}
          />
          <TextAreaField
            id="otherInfo"
            label="Other Important Information"
            value={data.additional.otherInfo}
            onChange={(v) => update('additional', 'otherInfo', v)}
            rows={3}
          />
        </div>
      )}

      {/* Step 6 — Review & Declaration */}
      {step === 6 && (
        <div className="space-y-8">
          <h2 className="font-display text-2xl text-navy-950">Review Your Application</h2>

          <ReviewSection title="Student" onEdit={() => goToStep(1)}>
            <ReviewRow
              label="Name"
              value={[data.student.firstName, data.student.middleName, data.student.lastName].filter(Boolean).join(' ')}
            />
            <ReviewRow label="Date of Birth" value={data.student.dateOfBirth} />
            <ReviewRow label="Gender" value={data.student.gender} />
            <ReviewRow label="Nationality" value={data.student.nationality} />
            <ReviewRow label="State of Origin" value={data.student.stateOfOrigin} />
            <ReviewRow label="Class Applying For" value={data.student.classApplyingFor} />
          </ReviewSection>

          <ReviewSection title="Parent / Guardian" onEdit={() => goToStep(2)}>
            <ReviewRow label="Name" value={data.guardian.fullName} />
            <ReviewRow label="Relationship" value={data.guardian.relationship} />
            <ReviewRow label="Phone" value={data.guardian.phone} />
            <ReviewRow label="Email" value={data.guardian.email} />
            <ReviewRow label="Address" value={data.guardian.address} />
          </ReviewSection>

          <ReviewSection title="Emergency Contact" onEdit={() => goToStep(2)}>
            <ReviewRow label="Name" value={data.emergencyContact.fullName} />
            <ReviewRow label="Phone" value={data.emergencyContact.phone} />
          </ReviewSection>

          {(data.academic.previousSchool || data.academic.previousClass) && (
            <ReviewSection title="Academic History" onEdit={() => goToStep(3)}>
              <ReviewRow label="Previous School" value={data.academic.previousSchool} />
              <ReviewRow label="Previous Class" value={data.academic.previousClass} />
            </ReviewSection>
          )}

          {data.documents.files.length > 0 && (
            <ReviewSection title="Documents" onEdit={() => goToStep(4)}>
              <ReviewRow label="Files Attached" value={data.documents.files.map((f) => f.name).join(', ')} />
            </ReviewSection>
          )}

          <div className="border-t border-stone-300 pt-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={data.declaration}
                onChange={(e) => { setData((prev) => ({ ...prev, declaration: e.target.checked })); clearError('declaration'); }}
                className="mt-1 w-4 h-4 accent-gold-500 flex-shrink-0"
              />
              <span className="text-sm text-charcoal-700 leading-relaxed">
                I confirm that the information provided in this application is accurate and
                complete to the best of my knowledge.
              </span>
            </label>
            {errors['declaration'] && <p className="mt-2 text-xs text-red-600">{errors['declaration']}</p>}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between gap-4">
        {step > 1 ? (
          <Button onClick={goBack} variant="outline" size="md" className="whitespace-nowrap">
            ← Back
          </Button>
        ) : (
          <span />
        )}

        {step < TOTAL_STEPS ? (
          <Button onClick={goNext} variant="primary" size="md" className="whitespace-nowrap">
            Continue →
          </Button>
        ) : (
          <Button onClick={handleSubmit} variant="primary" size="md" className="whitespace-nowrap" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting…' : 'Submit Application'}
          </Button>
        )}
      </div>
    </div>
  );
};

const ReviewSection: React.FC<{ title: string; onEdit: () => void; children: React.ReactNode }> = ({
  title,
  onEdit,
  children,
}) => (
  <div className="border border-stone-300 bg-ivory-50">
    <div className="flex items-center justify-between px-5 py-3 border-b border-stone-300">
      <h3 className="font-display text-base text-navy-950">{title}</h3>
      <button type="button" onClick={onEdit} className="text-xs font-semibold text-gold-600 hover:text-gold-700 uppercase tracking-wider">
        Edit
      </button>
    </div>
    <div className="divide-y divide-stone-300">{children}</div>
  </div>
);

const ReviewRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="grid grid-cols-2 px-5 py-3">
    <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-500">{label}</span>
    <span className="text-sm text-charcoal-800">{value || '—'}</span>
  </div>
);
