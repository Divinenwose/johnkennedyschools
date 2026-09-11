-- The admissions Server Actions use Supabase's service_role key.
-- RLS bypass does not replace PostgreSQL table privileges, so grant the
-- server role only the permissions required by the application workflow.
grant usage on schema public to service_role;
grant select, insert on table public.admission_applications to service_role;
grant usage, select on sequence public.admission_application_number_seq to service_role;
grant execute on function public.generate_admission_application_number() to service_role;
