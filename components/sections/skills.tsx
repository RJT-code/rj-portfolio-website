import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return <section id="skills" className="bg-surface py-20 sm:py-24 lg:py-28" aria-labelledby="skills-title">
    <Container>
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeading eyebrow="Skills & technologies" headingId="skills-title" title="A focused toolkit for modern web work." description="A practical toolkit spanning interface design, frontend development, and production workflows for building thoughtful digital experiences." />
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {skillGroups.map((group, index) => <article key={group.title} className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4"><h3 className="text-xl font-semibold tracking-tight">{group.title}</h3><span className="font-mono text-xs text-primary" aria-hidden="true">0{index + 1}</span></div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground lg:min-h-12">{group.description}</p>
          <ul className="mt-7 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>{group.skills.map(skill => <li key={skill} className="rounded-lg border border-border bg-muted px-3 py-2 text-sm font-medium">{skill}</li>)}</ul>
        </article>)}
      </div>
    </Container>
  </section>;
}
