import { schoolImages } from "./images-config";
import { schoolConfig } from "./school-config";
import { admissionsConfig } from "./admissions-config";

export interface HeroSlide {
  image: string;
  alt: string;
  eyebrow: string;
  headline: string[]; // one string per line
  subtext: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export const heroSlides: HeroSlide[] = [
  {
    image: "/images/hero/hero.jpeg",
    alt: "Students at John Kennedy International Schools",
    eyebrow: schoolConfig.name,
    headline: schoolConfig.tagline.split(". ").map((line, i, arr) => (i < arr.length - 1 ? `${line}.` : line)),
    subtext:
      "A nurturing, disciplined academic community in Surulere, Lagos — preparing confident, capable students from nursery through secondary school for a changing world.",
    primaryCta: { label: "Apply Now", href: admissionsConfig.registrationUrl },
    secondaryCta: { label: "Explore Our School", href: "/about" },
  },
  {
    image: schoolImages.pageHeroes.academics,
    alt: "Students engaged in classroom learning",
    eyebrow: "Academic Excellence",
    headline: ["A Clear Path", "From Nursery to Senior Secondary"],
    subtext:
      "A structured academic pathway with strong foundations at every stage — nursery, primary, junior secondary, and senior secondary — preparing students for WAEC, NECO, and beyond.",
    primaryCta: { label: "View Academic Programmes", href: "/academics" },
    secondaryCta: { label: "Why Choose Us", href: "/about" },
  },
  {
    image: schoolImages.pageHeroes.schoolLife,
    alt: "Students taking part in school activities",
    eyebrow: "Beyond the Classroom",
    headline: ["A Vibrant School Life", "That Builds Character"],
    subtext:
      "Sports, arts, clubs, and cultural activities that nurture confidence, teamwork, and creativity alongside academic growth.",
    primaryCta: { label: "Explore School Life", href: "/school-life" },
    secondaryCta: { label: "See Our Campuses", href: "/about" },
  },
  {
    image: schoolImages.pageHeroes.admissions,
    alt: "A welcoming school environment for new families",
    eyebrow: admissionsConfig.announcement.title,
    headline: ["Give Your Child", "A Strong Foundation"],
    subtext: admissionsConfig.announcement.message,
    primaryCta: { label: "Start Registration", href: admissionsConfig.registrationUrl },
    secondaryCta: { label: "Admission Process", href: "/admissions" },
  },
];
