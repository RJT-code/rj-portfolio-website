export type SkillGroup = { title: string; description: string; skills: readonly string[] };

export const skillGroups: readonly SkillGroup[] = [
  { title: "Frontend", description: "Technologies used to build fast, maintainable interfaces.", skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS"] },
  { title: "Design & UX", description: "Practices that keep digital products clear and inclusive.", skills: ["Responsive Design", "Accessibility", "Design Systems", "UI / UX Design", "Interaction Design"] },
  { title: "Tools & Workflow", description: "A focused workflow for reliable delivery and iteration.", skills: ["Git", "npm", "ESLint", "Vercel", "Performance Auditing"] },
];
