import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./types";

// Safe to import from Client Components — uses only the public anon key.
// The current admission-registration flow doesn't actually need this (form
// submission and application lookup both go through Server Actions using
// the service-role key instead, per lib/actions/admissions.ts), but it's
// kept available for legitimate future browser-side use — e.g. an admin
// login flow via Supabase Auth.

let cachedClient: SupabaseClient<Database> | null = null;

export function getSupabaseBrowserClient(): SupabaseClient<Database> {
  if (cachedClient) return cachedClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Supabase is not configured: set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY " +
        "in your environment (see .env.example)."
    );
  }

  cachedClient = createClient<Database>(url, anonKey);
  return cachedClient;
}
