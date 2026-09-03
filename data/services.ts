export type Service = { title: string; description: string; deliverables: readonly string[] };

export const services: readonly Service[] = [
  { title: "Web Design", description: "Clear visual systems and page designs shaped around content, usability, and brand goals.", deliverables: ["Visual direction", "Responsive layouts", "UI systems"] },
  { title: "Frontend Development", description: "Accessible, maintainable interfaces built with a modern, performance-minded frontend stack.", deliverables: ["Next.js builds", "Reusable components", "Accessible UI"] },
  { title: "Responsive Websites", description: "Web experiences that remain comfortable, readable, and effective across screen sizes.", deliverables: ["Mobile-first build", "Cross-device QA", "Fluid layouts"] },
  { title: "Website Redesign", description: "Thoughtful redesigns that improve hierarchy, consistency, and the overall user journey.", deliverables: ["UX review", "Interface refresh", "Design consistency"] },
  { title: "Landing Pages", description: "Focused pages that communicate value quickly and guide visitors toward a clear action.", deliverables: ["Content hierarchy", "Conversion flow", "Responsive delivery"] },
  { title: "Performance & UX", description: "Targeted improvements for speed, accessibility, clarity, and interaction quality.", deliverables: ["Performance review", "Accessibility checks", "UX refinements"] },
];
