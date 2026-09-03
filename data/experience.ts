export type ExperienceEntry = {
  role: string;
  organization: string;
  location?: string;
  period: string;
  highlights: readonly string[];
};

export const experience: readonly ExperienceEntry[] = [
  {
    role: "UI/UX Design Intern",
    organization: "REGGIEJAN Web Design Services",
    location: "Mandaue City, Cebu",
    period: "February 2, 2026 – April 30, 2026 · 500 hours",
    highlights: [
      "Created high-fidelity website designs, wireframes, interactive prototypes, and visual directions for client projects.",
      "Developed brand guidelines, typography systems, color palettes, and reusable UI components for B2B and B2C websites.",
      "Designed and refined website layouts for projects including Cebu Steel Corporation, Sheridan Marketing, 3N Moving Solutions, Ocean Equipment & Services, and Play District Soft Play.",
      "Supported WordPress content entry, data migration, and Elementor product-layout updates.",
    ],
  },
  {
    role: "Part-Time Remote Data Entry & Data Research Specialist",
    organization: "Sparta Digital Australia",
    location: "Remote",
    period: "2022 – 2025 · Project-based",
    highlights: [
      "Updated and organized website data using WordPress, Elementor, and Bricks Builder.",
      "Conducted data research, verification, content migration, and publishing support.",
    ],
  },
  {
    role: "Part-Time Remote Data Entry",
    organization: "REGGIEJAN Web Design Services",
    location: "Remote",
    period: "2022 – 2025 · Project-based",
    highlights: [
      "Entered, updated, and migrated website content using WordPress and Elementor.",
    ],
  },
  {
    role: "Freelance Virtual Assistant",
    organization: "Remote",
    period: "2022 – 2025 · Part-time",
    highlights: [
      "Managed social media scheduling, basic content organization, and simple video editing.",
      "Assisted with online research, administrative tasks, and digital content updates.",
    ],
  },
];