// There is no backend/database in this project — admission registrations
// are a frontend-only form. This module persists application records and
// generates sequential application numbers using localStorage, scoped to
// the visitor's own browser, so a submitted application and its number
// remain retrievable (e.g. to re-download the bill) after the success
// page. Replace this with a real API call to a backend once one exists;
// the shape below (ApplicationRecord) is designed to map cleanly onto a
// database record.

export interface ApplicationRecord {
  applicationNumber: string;
  submittedAt: string; // ISO date string
  status: "Pending Payment";

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

  documents: {
    // File objects can't be persisted to localStorage — we only keep the
    // file names as a record of what the applicant selected. Real file
    // storage requires a backend upload endpoint (see step component).
    fileNames: string[];
  };

  additional: {
    medicalInfo: string;
    allergies: string;
    specialConsiderations: string;
    otherInfo: string;
  };
}

const COUNTER_KEY = "jkis-application-counter";
const RECORD_PREFIX = "jkis-application-";

function generateApplicationNumber(): string {
  const year = new Date().getFullYear();
  let counter = 1;

  try {
    const stored = localStorage.getItem(COUNTER_KEY);
    counter = stored ? parseInt(stored, 10) + 1 : 1;
    localStorage.setItem(COUNTER_KEY, String(counter));
  } catch {
    // localStorage unavailable (e.g. private browsing) — fall back to a
    // timestamp-based number so the flow still works, just not guaranteed
    // sequential.
    counter = Number(String(Date.now()).slice(-4));
  }

  const padded = String(counter).padStart(4, "0");
  return `JKS-${year}-${padded}`;
}

export function saveApplication(
  data: Omit<ApplicationRecord, "applicationNumber" | "submittedAt" | "status">
): ApplicationRecord {
  const record: ApplicationRecord = {
    ...data,
    applicationNumber: generateApplicationNumber(),
    submittedAt: new Date().toISOString(),
    status: "Pending Payment",
  };

  try {
    localStorage.setItem(`${RECORD_PREFIX}${record.applicationNumber}`, JSON.stringify(record));
  } catch {
    // Non-fatal — the applicant still sees their confirmation and can
    // download the bill immediately; it just won't survive a reload.
  }

  return record;
}

export function getApplication(applicationNumber: string): ApplicationRecord | null {
  try {
    const raw = localStorage.getItem(`${RECORD_PREFIX}${applicationNumber}`);
    return raw ? (JSON.parse(raw) as ApplicationRecord) : null;
  } catch {
    return null;
  }
}
