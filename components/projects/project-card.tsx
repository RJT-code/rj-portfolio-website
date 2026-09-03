import { ProjectPreview } from "@/components/projects/project-preview";
import type { Project } from "@/data/projects";

type Props = { project: Project };

export function ProjectCard({ project }: Props) {
  return (
    <a
      className="group block min-w-0 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
      href={project.sourceUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`View ${project.title} project (opens in a new tab)`}
    >
      <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition duration-200 motion-reduce:transition-none md:group-hover:-translate-y-1 md:group-hover:border-border-strong">
        <ProjectPreview image={project.image} title={project.title} />
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">{project.projectType}</p>
            {project.featured ? <span className="rounded-full border border-primary/15 bg-primary/[0.06] px-2.5 py-1 text-xs font-medium text-primary">Featured</span> : null}
          </div>
          <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{project.title}</h3>
          <p className="mt-3 leading-7 text-muted-foreground">{project.shortDescription}</p>
          <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-border/80 py-4 text-sm">
            <div><dt className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">Role</dt><dd className="mt-1 font-medium text-foreground">{project.role}</dd></div>
            <div><dt className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">Tool</dt><dd className="mt-1 font-medium text-foreground">{project.tool}</dd></div>
            <div className="col-span-2"><dt className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">Deliverable</dt><dd className="mt-1 font-medium text-foreground">{project.deliverable}</dd></div>
          </dl>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Project keywords for ${project.title}`}>
            {project.tags.map((tag) => <li key={tag} className="rounded-md border border-border bg-muted/65 px-2.5 py-1 text-xs font-medium text-muted-foreground">{tag}</li>)}
          </ul>
          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary">
            View project <span aria-hidden="true">↗</span>
          </span>
        </div>
      </article>
    </a>
  );
}