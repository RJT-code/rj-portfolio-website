export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  title: string;
  slug: string;
  shortDescription: string;
  projectType: string;
  role: string;
  tool: string;
  deliverable: string;
  tags: readonly string[];
  image: ProjectImage;
  sourceUrl: string;
  featured?: boolean;
};

export const projects: readonly Project[] = [
  {
    title: "Velora Coffee & Provisions",
    slug: "velora-coffee-provisions",
    shortDescription: "A responsive e-commerce homepage concept for a coffee and provisions brand, presented across desktop and mobile screens.",
    projectType: "E-commerce website design",
    role: "UI/UX and web design",
    tool: "Figma",
    deliverable: "Responsive homepage design",
    tags: ["E-commerce", "Responsive design", "Food & beverage"],
    image: { src: "/images/projects/velora-coffee.webp", alt: "Velora Coffee and Provisions responsive e-commerce homepage shown on laptop and mobile devices", width: 1448, height: 1086 },
    sourceUrl: "https://www.figma.com/proto/DwtT7RUeCrjIfUW4tZQjpO/Velora-homepage?node-id=1-838&viewport=252%2C348%2C0.12&t=Ngt83acGWovxhBGa-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A838&page-id=0%3A1&hide-ui=1",
    featured: true,
  },
  {
    title: "Play District",
    slug: "play-district",
    shortDescription: "A responsive homepage for a kids’ play rental service, with package comparison, booking actions, and playful visual styling.",
    projectType: "Play rental website design",
    role: "UI/UX and web design",
    tool: "Figma",
    deliverable: "Responsive single-page homepage",
    tags: ["Booking website", "Responsive design", "Playful UI"],
    image: { src: "/images/projects/play-district.webp", alt: "Play District responsive kids’ play rental homepage with package and service sections", width: 1600, height: 1920 },
    sourceUrl: "https://www.figma.com/proto/kh2YRGumWNjFpZHyNqpFn3/Play-District-Soft-Play?node-id=1-243&viewport=-1178%2C32%2C0.18&t=1t4ZfiicbcQdzLXV-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&hide-ui=1",
    featured: true,
  },
  {
    title: "3N Moving Solutions",
    slug: "3n-moving-solutions",
    shortDescription: "A professional service-business website concept organizing moving services, pricing, process steps, and contact information.",
    projectType: "Moving company website design",
    role: "UI/UX and web design",
    tool: "Figma",
    deliverable: "Responsive business website",
    tags: ["Service business", "Booking flow", "Responsive design"],
    image: { src: "/images/projects/3n-moving-solutions.webp", alt: "3N Moving Solutions website design showing moving services, process, pricing, and contact sections", width: 1600, height: 1920 },
    sourceUrl: "https://www.figma.com/proto/XLYT78Bdfm4wHxt4s0OOEw/3N-moving-solutions-inc.?node-id=2-361&viewport=-1644%2C-133%2C0.28&t=cq9HYu5qnaAFFO58-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&hide-ui=1",
  },
  {
    title: "Cebu Steel",
    slug: "cebu-steel",
    shortDescription: "An industrial homepage design presenting steel products, pricing information, delivery details, and quote-focused actions.",
    projectType: "Industrial homepage design",
    role: "UI/UX and web design",
    tool: "Figma",
    deliverable: "Business homepage design",
    tags: ["B2B website", "Industrial design", "Landing page"],
    image: { src: "/images/projects/cebu-steel.webp", alt: "Cebu Steel industrial homepage design with product, pricing, delivery, and quotation sections", width: 1600, height: 1920 },
    sourceUrl: "https://www.figma.com/proto/HzyeEWwhtG7Nu5M9pPqtKp/Cebu-Steel-Corp-Home-Page-Design?node-id=1-2020&viewport=-5412%2C-878%2C0.66&t=JqlYcEjGd6WYdPdV-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&hide-ui=1",
  },
  {
    title: "First Cebu Fund Ventures",
    slug: "first-cebu-fund-ventures",
    shortDescription: "A financing website design that structures loan services, application guidance, requirements, and trust-building content.",
    projectType: "Financing website design",
    role: "UI/UX and web design",
    tool: "Figma",
    deliverable: "Responsive finance website",
    tags: ["Finance website", "Application flow", "Responsive design"],
    image: { src: "/images/projects/first-cebu-fund-ventures.webp", alt: "First Cebu Fund Ventures financing website with loan services and application guidance", width: 1600, height: 1920 },
    sourceUrl: "https://www.figma.com/proto/mAvdC4V4NazbM9d4g9RJ7G/First-Cebu-Fund-venture-Inc.?node-id=1-191&viewport=-1364%2C-1376%2C0.4&t=8bYIJfoqRohY3f11-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&hide-ui=1",
  },
  {
    title: "Ocean Equipment & Services",
    slug: "ocean-equipment-services",
    shortDescription: "A marine-industry website design presenting equipment, spare parts, technical services, and quote-focused pathways.",
    projectType: "Marine website design",
    role: "UI/UX and web design",
    tool: "Figma",
    deliverable: "Responsive B2B website",
    tags: ["Marine industry", "B2B website", "Responsive design"],
    image: { src: "/images/projects/ocean-equipment-services.webp", alt: "Ocean Equipment and Services marine website with equipment, products, services, and quotation sections", width: 1600, height: 1920 },
    sourceUrl: "https://www.figma.com/proto/J1fyGCPfv2Qlg3vmOAcm4D/Ocean-Equipment---Services?node-id=1-13&viewport=-33%2C-722%2C0.18&t=KDp6nzUQoSNm9sSc-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&hide-ui=1",
  },
];