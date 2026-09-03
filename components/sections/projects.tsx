import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/ui/reveal";

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-28" aria-labelledby="projects-title">
      <Container>
        <SectionHeading eyebrow="Selected work" headingId="projects-title" title="Web design shaped around distinct businesses and audiences." description="A selection of responsive website concepts spanning e-commerce, local services, finance, industrial supply, and marine services." />
        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 xl:gap-6">
          {projects.map((project, index) => <Reveal key={project.slug} className="h-full min-w-0" delay={(index % 2) * 70}><ProjectCard project={project} /></Reveal>)}
        </div>
      </Container>
    </section>
  );
}