// IMPORTANT: No real fee amounts or payment/bank details exist in this
// project. These are intentionally left unconfigured so the admission
// bill never displays invented figures. Fill in real values here once
// the school provides them — the bill PDF (lib/admission-bill.ts) reads
// directly from this file and will render whatever is set below.
export const feesConfig = {
  // Set to a number (in Naira) once confirmed, e.g. 25000
  applicationFee: null as number | null,

  currency: "NGN",

  // Bank/payment details — leave as null until the school provides them.
  payment: {
    bankName: null as string | null,
    accountName: null as string | null,
    accountNumber: null as string | null,
  },

  notes: [
    "This bill is generated upon submission of an admission application and does not confirm a place at the school.",
    "Please retain your application number for all future correspondence.",
  ],
};
