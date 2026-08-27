import "server-only";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./types";

// SERVER-ONLY. The `server-only` import above makes Next.js throw a build
// error if this file is ever imported from a Client Component, as an extra
// guard on top of the fact that SUPABASE_SERVICE_ROLE_KEY (no NEXT_PUBLIC_
// prefix) is never exposed to the browser bundle in the first place.
//
// This client uses the service role key, which bypasses Row Level Security
// entirely. It must only be used inside Server Actions or Route Handlers,
// never re-exported to client code, and every function that uses it must
// itself decide exactly what subset of data is safe to return to the
// browser (see PublicApplicationSummary in ./types.ts).

let cachedClient: SupabaseClient<Database> | null = null;

export function getSupabaseServerClient(): SupabaseClient<Database> {
  if (cachedClient) return cachedClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Supabase is not configured: set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY " +
        "in your environment (see .env.example). This client is only created lazily, on first " +
        "use, so the rest of the site works fine without these until the admissions backend is " +
        "actually invoked."
    );
  }

  cachedClient = createClient<Database>(url, serviceRoleKey, {
    auth: { persistSession: false },
  });

  return cachedClient;
}
