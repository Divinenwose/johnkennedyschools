import { schoolImages } from "./images-config";

// Real news items. Dates below are placeholders (not confirmed) — update
// them to the actual dates once known. Images reuse the site's existing
// real photography where a good thematic match exists.
export const newsConfig = {
  featured: {
    id: 1,
    category: "Events",
    date: "3rd August, 2026",
    title: "Summer School Programme Now Open",
    description:
      "John Kennedy International Schools is delighted to announce its Summer School programme, offering pupils a stimulating blend of academic reinforcement, creative activities and holiday fun. Places are available across all levels, from Nursery through Senior Secondary.",
    image: schoolImages.summer,
    slug: "summer-school-programme",
  },

  articles: [
    {
      id: 4,
      category: "Events",
      date: "to be announced soon",
      title: "John Kennedy International Schools to Celebrate 20th Anniversary",
      description:
        "John Kennedy International Schools is preparing to mark a major milestone — its 20th Anniversary. Celebrations are being planned across both campuses to honour two decades of academic excellence, character development and community impact, with more details to be announced soon.",
      image: schoolImages.pageHeroes.anniversary,
      slug: "20th-anniversary-celebration",
    },
    {
      id: 2,
      category: "School News",
      date: "1st August, 2026",
      title: "Graduating Class Celebrated at Annual Graduation Ceremony",
      description:
        "Our graduating students were celebrated in style at this year's graduation ceremony, marking a proud milestone as they move on to the next stage of their academic journey. Parents, teachers and school leadership gathered to honour their achievements in academics, character and leadership throughout their time at John Kennedy International Schools.",
      image: schoolImages.gallery.graduation,
      slug: "graduation-ceremony",
    },
    {
      id: 3,
      category: "Academics",
      date: "23rd June, 2026",
      title: "Pupils Explore Aviation and Science on Academic Excursion",
      description:
        "As part of this term's experiential learning programme, our Nursery, Primary and Junior Secondary pupils enjoyed an educational excursion to Murtala Muhammed International Airport, gaining first-hand insight into aviation and air travel. Meanwhile, our Senior Secondary students visited Deo Science Discovery World for a hands-on exploration of science and technology.",
      image: schoolImages.pageHeroes.excursion, 
      slug: "airport-and-science-excursion",
    },
  ],
};
