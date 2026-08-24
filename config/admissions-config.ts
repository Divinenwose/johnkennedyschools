export const admissionsConfig = {
  isOpen: true,
  // Now a real in-site page (see app/admissions/register) — was a
  // placeholder external URL with no destination.
  registrationUrl: "/admissions/register",
  
  popup: {
    title: "WE'RE ENROLLING!",
    message: "Applications for the next academic session are now open.",
    schoolName: "John Kennedy International Schools",
    description: "Give your child the opportunity to learn, grow and thrive in a supportive academic environment.",
    delay: 3000, // 3 seconds delay
    localStorageKey: "jkis-admissions-popup-seen",
  },
  
  announcement: {
    title: "WE'RE ENROLLING FOR THE NEXT SESSION",
    message: "Applications are now open. Give your child a strong foundation for the future.",
    cta: "Register Now",
    localStorageKey: "jkis-announcement-dismissed",
  },
};
