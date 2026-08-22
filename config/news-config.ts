import { schoolImages } from "./images-config";

// Note: article images below reuse the site's existing curated Unsplash
// set (rather than /images/news/*.jpg, which doesn't exist on disk) so
// the photographic direction stays consistent. Swap for real JKIS event
// photography when available.
export const newsConfig = {
  featured: {
    id: 1,
    category: "School News",
    date: "2024-01-15",
    title: "Excellence in Education: Our Commitment to Student Success",
    description: "Discover how John Kennedy International Schools continues to provide exceptional education that prepares students for a bright future.",
    image: schoolImages.about,
    slug: "excellence-in-education",
  },
  
  articles: [
    {
      id: 2,
      category: "Events",
      date: "2024-01-10",
      title: "Annual Sports Day Celebration",
      description: "Students showcase their athletic abilities and sportsmanship in our exciting annual sports competition.",
      image: schoolImages.sports,
      slug: "annual-sports-day",
    },
    {
      id: 3,
      category: "Academics",
      date: "2024-01-05",
      title: "Science Fair Innovation Showcase",
      description: "Our students present innovative projects demonstrating creativity and scientific thinking.",
      image: schoolImages.classroom,
      slug: "science-fair",
    },
    {
      id: 4,
      category: "Community",
      date: "2024-01-02",
      title: "Community Service Initiative",
      description: "Students engage in meaningful community service projects, learning the value of giving back.",
      image: schoolImages.events,
      slug: "community-service",
    },
  ],
};
