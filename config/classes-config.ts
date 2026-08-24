// Standard Nigerian school class structure (Nursery → Reception → Primary →
// Junior Secondary → Senior Secondary), grouped under the two existing
// campuses referenced throughout the site (Nursery Campus / College
// Campus). Edit this list if the school's actual class names differ.
export const classesConfig = {
  nursery: [
    "Creche",
    "Pre-Nursery",
    "Nursery 1",
    "Nursery 2",
    "Reception / Kindergarten",
  ],
  primary: [
    "Primary 1",
    "Primary 2",
    "Primary 3",
    "Primary 4",
    "Primary 5",
    "Primary 6",
  ],
  secondary: [
    "JSS 1",
    "JSS 2",
    "JSS 3",
    "SSS 1",
    "SSS 2",
    "SSS 3",
  ],
};

export const allClasses = [
  ...classesConfig.nursery,
  ...classesConfig.primary,
  ...classesConfig.secondary,
];
