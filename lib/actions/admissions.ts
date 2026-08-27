'use server';

import { getSupabaseServerClient } from '@/lib/supabase/server-client';
import type { AdmissionApplication, AdmissionApplicationInsert, PublicApplicationSummary } from '@/lib/supabase/types';
import { EMAIL_REGEX, isValidPhone } from '@/components/admissions/types';
import { computeAcademicSession } from '@/lib/academic-session';

// ----------------------------------------------------------------------------
// Submit
// ----------------------------------------------------------------------------

/** Plain, fully-serializable payload sent across the Server Action boundary
 * — RegistrationFormData's `documents.files: File[]` is converted to
 * `documentFileNames: string[]` by the caller before this is invoked,
 * since raw File objects aren't something we persist (no upload backend
 * exists) or something that should cross this boundary directly. */
export interface SubmitApplicationInput {
  /** One random id per form session (crypto.randomUUID()), stable across
   * the whole multi-step flow — see the client_submission_id column
   * comment in the migration for why this exists. */
  clientSubmissionId: string;
  student: {
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    gender: string;
    nationality: string;
    stateOfOrigin: string;
    classApplyingFor: string;
  };
  guardian: {
    fullName: string;
    relationship: string;
    phone: string;
    altPhone: string;
    email: string;
    address: string;
    occupation: string;
  };
  emergencyContact: {
    fullName: string;
    relationship: string;
    phone: string;
    altPhone: string;
  };
  academic: {
    previousSchool: string;
    previousClass: string;
    previousPerformance: string;
    reasonForLeaving: string;
    additionalInfo: string;
  };
  documentFileNames: string[];
  additional: {
    medicalInfo: string;
    allergies: string;
    specialConsiderations: string;
    otherInfo: string;
  };
  declaration: boolean;
}

export type SubmitApplicationResult =
  | { success: true; application: PublicApplicationSummary }
  | { success: false; error: string; fieldErrors?: Record<string, string> };

function toSummary(row: AdmissionApplication): PublicApplicationSummary {
  return {
    application_number: row.application_number,
    applicant_name: [row.applicant_first_name, row.applicant_middle_name, row.applicant_last_name]
      .filter(Boolean)
      .join(' '),
    class_applied_for: row.class_applied_for,
    registration_date: row.registration_date,
    status: row.status,
    payment_status: row.payment_status,
    academic_session: row.academic_session,
    updated_at: row.updated_at,
  };
}

/** Server-side re-validation — defense in depth. The client already
 * validates before allowing submission, but a Server Action is a public
 * endpoint in its own right and must never trust the client alone. */
function validateSubmission(input: SubmitApplicationInput): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!input.student.firstName.trim()) errors['student.firstName'] = 'First name is required.';
  if (!input.student.lastName.trim()) errors['student.lastName'] = 'Last name is required.';
  if (!input.student.dateOfBirth) {
    errors['student.dateOfBirth'] = 'Date of birth is required.';
  } else if (new Date(input.student.dateOfBirth) > new Date()) {
    errors['student.dateOfBirth'] = 'Date of birth cannot be in the future.';
  }
  if (!input.student.gender) errors['student.gender'] = 'Gender is required.';
  if (!input.student.nationality.trim()) errors['student.nationality'] = 'Nationality is required.';
  if (!input.student.classApplyingFor) errors['student.classApplyingFor'] = 'Class applying for is required.';

  if (!input.guardian.fullName.trim()) errors['guardian.fullName'] = "Guardian's full name is required.";
  if (!input.guardian.relationship.trim()) errors['guardian.relationship'] = 'Relationship is required.';
  if (!input.guardian.phone.trim() || !isValidPhone(input.guardian.phone))
    errors['guardian.phone'] = 'A valid phone number is required.';
  if (!input.guardian.email.trim() || !EMAIL_REGEX.test(input.guardian.email))
    errors['guardian.email'] = 'A valid email address is required.';
  if (!input.guardian.address.trim()) errors['guardian.address'] = 'Address is required.';

  if (!input.emergencyContact.fullName.trim())
    errors['emergencyContact.fullName'] = "Emergency contact's name is required.";
  if (!input.emergencyContact.relationship.trim())
    errors['emergencyContact.relationship'] = 'Relationship is required.';
  if (!input.emergencyContact.phone.trim() || !isValidPhone(input.emergencyContact.phone))
    errors['emergencyContact.phone'] = 'A valid phone number is required.';

  if (!input.declaration) errors['declaration'] = 'You must accept the declaration to submit.';

  return errors;
}

export async function submitApplication(input: SubmitApplicationInput): Promise<SubmitApplicationResult> {
  const fieldErrors = validateSubmission(input);
  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, error: 'Please correct the highlighted fields and try again.', fieldErrors };
  }

  let supabase;
  try {
    supabase = getSupabaseServerClient();
  } catch (err) {
    console.error('[submitApplication] Supabase not configured:', err);
    return {
      success: false,
      error: "We couldn't submit your application right now. Please try again shortly or contact the school directly.",
    };
  }

  // Idempotency: if this exact submission already produced a row (a
  // retried request whose original response was lost, or a double-click
  // that slipped past the disabled button), return that row instead of
  // inserting a duplicate.
  const { data: existing, error: existingError } = await supabase
    .from('admission_applications')
    .select('*')
    .eq('client_submission_id', input.clientSubmissionId)
    .maybeSingle();

  if (existingError) {
    console.error('[submitApplication] idempotency check failed:', existingError);
  }
  if (existing) {
    return { success: true, application: toSummary(existing) };
  }

  const insertPayload: AdmissionApplicationInsert = {
    status: 'Submitted',
    payment_status: 'Pending Payment',

    applicant_first_name: input.student.firstName.trim(),
    applicant_middle_name: input.student.middleName.trim() || null,
    applicant_last_name: input.student.lastName.trim(),
    date_of_birth: input.student.dateOfBirth,
    gender: input.student.gender,
    nationality: input.student.nationality.trim(),
    state_of_origin: input.student.stateOfOrigin || null,
    local_government: null,
    religion: null,
    address: null,
    phone: null,
    email: null,

    class_applied_for: input.student.classApplyingFor,
    previous_school: input.academic.previousSchool.trim() || null,
    previous_class: input.academic.previousClass.trim() || null,
    academic_session: computeAcademicSession(),

    parent_guardian_name: input.guardian.fullName.trim(),
    parent_guardian_relationship: input.guardian.relationship.trim(),
    parent_guardian_phone: input.guardian.phone.trim(),
    parent_guardian_email: input.guardian.email.trim().toLowerCase(),
    parent_guardian_address: input.guardian.address.trim(),

    emergency_contact_name: input.emergencyContact.fullName.trim(),
    emergency_contact_phone: input.emergencyContact.phone.trim(),
    emergency_contact_relationship: input.emergencyContact.relationship.trim(),

    declaration_accepted: true,
    declaration_accepted_at: new Date().toISOString(),

    client_submission_id: input.clientSubmissionId,

    application_data: {
      guardian: {
        altPhone: input.guardian.altPhone || undefined,
        occupation: input.guardian.occupation || undefined,
      },
      emergencyContact: {
        altPhone: input.emergencyContact.altPhone || undefined,
      },
      academic: {
        previousPerformance: input.academic.previousPerformance || undefined,
        reasonForLeaving: input.academic.reasonForLeaving || undefined,
        additionalInfo: input.academic.additionalInfo || undefined,
      },
      documents: {
        fileNames: input.documentFileNames,
      },
      additional: {
        medicalInfo: input.additional.medicalInfo || undefined,
        allergies: input.additional.allergies || undefined,
        specialConsiderations: input.additional.specialConsiderations || undefined,
        otherInfo: input.additional.otherInfo || undefined,
      },
    },
  };

  const { data, error } = await supabase.from('admission_applications').insert(insertPayload).select('*').single();

  if (error) {
    console.error('[submitApplication] insert failed:', error);

    // Unique violation on client_submission_id — an extremely rare race
    // with the idempotency check above. Fetch and return the row that won.
    if (error.code === '23505' && error.message?.includes('client_submission_id')) {
      const { data: retry } = await supabase
        .from('admission_applications')
        .select('*')
        .eq('client_submission_id', input.clientSubmissionId)
        .maybeSingle();
      if (retry) return { success: true, application: toSummary(retry) };
    }

    return {
      success: false,
      error: "We couldn't submit your application right now. Please check your internet connection and try again.",
    };
  }

  return { success: true, application: toSummary(data) };
}

// ----------------------------------------------------------------------------
// Lookup
//
// Used by both /admissions/application-status (manual lookup) and the
// register page's own refresh-recovery flow. Requiring the application
// number AND the guardian email together (rather than the number alone)
// matters because application numbers are sequential — a number-only
// lookup would let anyone enumerate every applicant's name and status by
// iterating JKS-2026-0001, 0002, 0003... The email requirement makes that
// impractical while staying easy for a genuine applicant, who has both.
// ----------------------------------------------------------------------------

export interface LookupApplicationInput {
  applicationNumber: string;
  email: string;
}

export type LookupApplicationResult =
  | { success: true; application: PublicApplicationSummary }
  | { success: false; error: string };

export async function lookupApplication(input: LookupApplicationInput): Promise<LookupApplicationResult> {
  const applicationNumber = input.applicationNumber.trim().toUpperCase();
  const email = input.email.trim().toLowerCase();

  if (!applicationNumber) {
    return { success: false, error: 'Please enter your application number.' };
  }
  if (!email || !EMAIL_REGEX.test(email)) {
    return { success: false, error: 'Please enter the email address used during registration.' };
  }

  let supabase;
  try {
    supabase = getSupabaseServerClient();
  } catch (err) {
    console.error('[lookupApplication] Supabase not configured:', err);
    return { success: false, error: "We couldn't look up your application right now. Please try again shortly." };
  }

  const { data, error } = await supabase
    .from('admission_applications')
    .select('*')
    .eq('application_number', applicationNumber)
    .eq('parent_guardian_email', email)
    .maybeSingle();

  if (error) {
    console.error('[lookupApplication] query failed:', error);
    return { success: false, error: "We couldn't look up your application right now. Please try again shortly." };
  }

  if (!data) {
    return {
      success: false,
      error: "We couldn't find an application with that number and email address. Please check the details and try again.",
    };
  }

  return { success: true, application: toSummary(data) };
}
