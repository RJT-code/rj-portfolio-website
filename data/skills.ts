export type SkillGroup = { title: string; description: string; skills: readonly string[] };

export const skillGroups: readonly SkillGroup[] = [
  { title: "Frontend", description: "Technologies I use to build responsive, maintainable, and production-ready interfaces.", skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS"] },
  { title: "Design & UX", description: "Design practices I use to create clear, accessible, and intuitive digital experiences.", skills: ["Responsive Design", "Accessibility", "Design Systems", "Prototyping", "Interaction Design", "Wireframing"] },
  { title: "Tools & Workflow", description: "Tools I use to develop, version, validate, and deploy projects efficiently.", skills: ["Figma", "Git", "GitHub", "Vercel", "VS Code"] },
];
