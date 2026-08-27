// Nigerian academic sessions typically run September–July, spanning two
// calendar years (e.g. "2026/2027"). Computed from the current date at
// submission time — never hardcoded — so this stays correct automatically
// as time passes, and the application number's year (see the Postgres
// function generate_admission_application_number) follows the same
// principle independently.
export function computeAcademicSession(referenceDate: Date = new Date()): string {
  const year = referenceDate.getFullYear();
  const month = referenceDate.getMonth() + 1; // 1-12
  return month >= 9 ? `${year}/${year + 1}` : `${year - 1}/${year}`;
}
