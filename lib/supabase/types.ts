// Hand-written types mirroring supabase/migrations/0001_admission_applications.sql.
// Once a real Supabase project exists, these can be regenerated exactly via:
//   npx supabase gen types typescript --project-id <id> > lib/supabase/types.ts
// (merge back in the JSDoc comments / additional exports below if you do).

export type AdmissionApplicationStatus = "Submitted" | "Under Review" | "Approved" | "Rejected";

export type PaymentStatus = "Pending Payment" | "Payment Submitted" | "Paid" | "Payment Verified";

/** Secondary fields kept in the application_data JSONB column — see the
 * migration's comments for why these aren't top-level columns. */
export type ApplicationSecondaryData = {
  guardian?: {
    altPhone?: string;
    occupation?: string;
  };
  emergencyContact?: {
    altPhone?: string;
  };
  academic?: {
    previousPerformance?: string;
    reasonForLeaving?: string;
    additionalInfo?: string;
  };
  documents?: {
    fileNames?: string[];
  };
  additional?: {
    medicalInfo?: string;
    allergies?: string;
    specialConsiderations?: string;
    otherInfo?: string;
  };
};

/** Full database row — server-side only. Never returned to the browser in
 * full; see PublicApplicationSummary for what the client actually gets. */
export type AdmissionApplication = {
  id: string;
  application_number: string;
  registration_date: string;
  status: AdmissionApplicationStatus;
  payment_status: PaymentStatus;

  applicant_first_name: string;
  applicant_middle_name: string | null;
  applicant_last_name: string;
  date_of_birth: string;
  gender: string;
  nationality: string;
  state_of_origin: string | null;
  local_government: string | null;
  religion: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;

  class_applied_for: string;
  previous_school: string | null;
  previous_class: string | null;
  academic_session: string | null;

  parent_guardian_name: string;
  parent_guardian_relationship: string;
  parent_guardian_phone: string;
  parent_guardian_email: string;
  parent_guardian_address: string;

  emergency_contact_name: string;
  emergency_contact_phone: string;
  emergency_contact_relationship: string;

  declaration_accepted: boolean;
  declaration_accepted_at: string | null;

  /** One random id per form session, used for insert idempotency — see
   * the migration's comment on this column. */
  client_submission_id: string | null;

  application_data: ApplicationSecondaryData;

  created_at: string;
  updated_at: string;
};

/** Shape used for inserts — id/application_number/timestamps are
 * database-generated (see migration defaults), so they're omitted here. */
export type AdmissionApplicationInsert = Omit<
  AdmissionApplication,
  "id" | "application_number" | "registration_date" | "created_at" | "updated_at"
>;

/** The minimal, non-sensitive subset returned to the browser — for both
 * the post-submit success screen and the public status-lookup page. Never
 * includes address, phone, medical info, or other sensitive PII, even for
 * the applicant's own submission, so nothing sensitive travels over the
 * network or sits in a success-screen DOM unnecessarily. */
export type PublicApplicationSummary = {
  application_number: string;
  applicant_name: string;
  class_applied_for: string;
  registration_date: string;
  status: AdmissionApplicationStatus;
  payment_status: PaymentStatus;
  academic_session: string | null;
  updated_at: string;
};

export type Database = {
  public: {
    Tables: {
      admission_applications: {
        Row: AdmissionApplication;
        Insert: AdmissionApplicationInsert;
        Update: Partial<AdmissionApplicationInsert>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
