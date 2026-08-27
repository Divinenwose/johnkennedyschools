// Stores only a *reference* to the most recent submission on this device —
// the application number and the email used to submit it — so a page
// refresh on /admissions/register can re-fetch the real record from
// Supabase and restore the success screen. Supabase remains the source of
// truth; nothing authoritative about the application itself is kept here.

const STORAGE_KEY = 'current_admission_application';

export interface RecoveryReference {
  applicationNumber: string;
  email: string;
}

export function saveRecoveryReference(ref: RecoveryReference) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ref));
  } catch {
    // Non-fatal — refresh-recovery just won't work this session (e.g.
    // private browsing with storage disabled). The applicant still sees
    // their success screen right now.
  }
}

export function getRecoveryReference(): RecoveryReference | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as RecoveryReference) : null;
  } catch {
    return null;
  }
}

export function clearRecoveryReference() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
