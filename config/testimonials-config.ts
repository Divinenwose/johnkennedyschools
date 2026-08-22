import { schoolImages } from "./images-config";

// Names and roles are placeholders pending real parent testimonials —
// do not treat as actual quotes. Portrait images use the site's
// coherent placeholder set (see images-config.portraits).
export const testimonialsConfig = {
  testimonials: [
    {
      id: 1,
      name: "Parent Name",
      role: "Parent",
      testimonial: "John Kennedy International Schools has provided my children with an excellent education. The teachers are dedicated and the learning environment is nurturing.",
      image: schoolImages.portraits.parent1,
    },
    {
      id: 2,
      name: "Parent Name",
      role: "Parent",
      testimonial: "We are impressed by the quality of education and the emphasis on character development. Our children have thrived here.",
      image: schoolImages.portraits.parent2,
    },
    {
      id: 3,
      name: "Parent Name",
      role: "Parent",
      testimonial: "The school's commitment to academic excellence and discipline has helped our children develop confidence and a strong work ethic.",
      image: schoolImages.portraits.parent3,
    },
  ],
};
