-- ============================================================================
-- Admission Applications — John Kennedy International Schools
--
-- Safe to run on a fresh Supabase project. Creates:
--   - enums for application/payment status
--   - a sequence + function for atomic, collision-free application numbers
--   - the admission_applications table
--   - indexes for the admin-search fields called out in the spec
--   - a trigger to keep updated_at current
--   - RLS enabled with NO policies for anon/authenticated
--
-- Security model:
-- This table is never queried directly from the browser. All reads and
-- writes happen through Next.js Server Actions using the Supabase
-- service-role key (server-only, bypasses RLS by design). RLS is enabled
-- here as defense-in-depth — even if the anon key were ever used directly
-- against this table, no policy grants it any access. When real
-- administrator authentication is added later, add SELECT/UPDATE policies
-- scoped to that admin role rather than opening this table up broadly.
-- ============================================================================

-- --------------------------------------------------------------------------
-- Extensions
-- --------------------------------------------------------------------------
create extension if not exists "pgcrypto"; -- for gen_random_uuid()

-- --------------------------------------------------------------------------
-- Enums
-- --------------------------------------------------------------------------
do $$ begin
  create type admission_status as enum ('Submitted', 'Under Review', 'Approved', 'Rejected');
exception
  when duplicate_object then null;
end $$;

do $$ begin
  create type admission_payment_status as enum ('Pending Payment', 'Payment Submitted', 'Paid', 'Payment Verified');
exception
  when duplicate_object then null;
end $$;

-- --------------------------------------------------------------------------
-- Application number generation
--
-- A dedicated sequence gives atomic, race-condition-free uniqueness under
-- concurrent inserts (two simultaneous applicants cannot receive the same
-- number — this is guaranteed by Postgres sequence semantics, not
-- application-level locking). The year is read dynamically at generation
-- time via now(), never hardcoded.
-- --------------------------------------------------------------------------
create sequence if not exists admission_application_number_seq start 1;

create or replace function generate_admission_application_number()
returns text
language plpgsql
as $$
declare
  next_val bigint;
  year_part text;
begin
  next_val := nextval('admission_application_number_seq');
  year_part := to_char(now(), 'YYYY');
  return 'JKS-' || year_part || '-' || lpad(next_val::text, 4, '0');
end;
$$;

-- --------------------------------------------------------------------------
-- Table
--
-- Fields explicitly requested in the spec but not currently collected by
-- the live form (local_government, religion, academic_session as a
-- standalone concept) are included as nullable columns so the schema is
-- ready for them without requiring new required data today.
-- academic_session is auto-computed server-side (see application-number
-- lib) from the current date rather than left for the applicant to type.
--
-- Fields the live form DOES collect but which aren't called out as
-- top-level spec columns (alternate phone numbers, occupation, previous
-- academic performance/reason for leaving, uploaded file names, medical/
-- special-consideration notes) are kept in application_data (jsonb) —
-- they're real data, just less likely to be searched/filtered on by an
-- admin, per the spec's own guidance for what belongs in the JSONB column.
-- --------------------------------------------------------------------------
create table if not exists admission_applications (
  id uuid primary key default gen_random_uuid(),
  application_number text not null unique default generate_admission_application_number(),
  registration_date timestamptz not null default now(),
  status admission_status not null default 'Submitted',
  payment_status admission_payment_status not null default 'Pending Payment',

  -- Applicant (student)
  applicant_first_name text not null,
  applicant_middle_name text,
  applicant_last_name text not null,
  date_of_birth date not null,
  gender text not null,
  nationality text not null,
  state_of_origin text,
  local_government text,
  religion text,
  address text,
  phone text,
  email text,

  -- Academic
  class_applied_for text not null,
  previous_school text,
  previous_class text,
  academic_session text,

  -- Parent / guardian
  parent_guardian_name text not null,
  parent_guardian_relationship text not null,
  parent_guardian_phone text not null,
  parent_guardian_email text not null,
  parent_guardian_address text not null,

  -- Emergency contact
  emergency_contact_name text not null,
  emergency_contact_phone text not null,
  emergency_contact_relationship text not null,

  -- Declaration
  declaration_accepted boolean not null default false,
  declaration_accepted_at timestamptz,

  -- Idempotency: the client generates one random id per form session
  -- (crypto.randomUUID(), stable across the whole multi-step flow) and
  -- sends it with the submission. If the same id arrives twice — e.g. a
  -- double-click that slips past the disabled button, or a retried
  -- request after a network blip whose response was lost — the unique
  -- constraint below causes the second insert to fail, and the server
  -- action catches that specific conflict and returns the original
  -- application instead of creating a duplicate row.
  client_submission_id uuid unique,

  -- Secondary / less-searchable fields (see comment above)
  application_data jsonb not null default '{}'::jsonb,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint declaration_must_be_accepted check (declaration_accepted = true)
);

comment on table admission_applications is
  'Admission applications submitted through /admissions/register. Written and read exclusively via server-side code using the service-role key — see lib/supabase/server-client.ts and lib/actions/admissions.ts.';

-- --------------------------------------------------------------------------
-- Indexes — supports the admin-search/filter needs described in the spec
-- (search by application number/name, filter by class/status/payment).
-- --------------------------------------------------------------------------
create index if not exists idx_admission_applications_application_number
  on admission_applications (application_number);

create index if not exists idx_admission_applications_last_name
  on admission_applications (applicant_last_name);

create index if not exists idx_admission_applications_class_applied_for
  on admission_applications (class_applied_for);

create index if not exists idx_admission_applications_status
  on admission_applications (status);

create index if not exists idx_admission_applications_payment_status
  on admission_applications (payment_status);

create index if not exists idx_admission_applications_guardian_email
  on admission_applications (parent_guardian_email);

create index if not exists idx_admission_applications_created_at
  on admission_applications (created_at desc);

create index if not exists idx_admission_applications_client_submission_id
  on admission_applications (client_submission_id);

-- --------------------------------------------------------------------------
-- updated_at trigger
-- --------------------------------------------------------------------------
create or replace function set_admission_applications_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_admission_applications_updated_at on admission_applications;
create trigger trg_admission_applications_updated_at
  before update on admission_applications
  for each row
  execute function set_admission_applications_updated_at();

-- --------------------------------------------------------------------------
-- Row Level Security
--
-- Enabled, with NO policies granted to anon/authenticated. All access goes
-- through Server Actions using the service-role key, which bypasses RLS
-- entirely by design — so this table is unreachable from the browser no
-- matter what a client-side script tries. This is intentional and is the
-- "secure server-side route/RPC" pattern the spec asks for, taken to its
-- logical conclusion: rather than writing a narrow RPC and still exposing
-- some anon policy, nothing is exposed at all.
--
-- When real admin authentication exists, add policies here scoped to that
-- role, e.g.:
--   create policy "Admins can read all applications"
--     on admission_applications for select
--     using (auth.jwt() ->> 'role' = 'admin');
-- --------------------------------------------------------------------------
alter table admission_applications enable row level security;
