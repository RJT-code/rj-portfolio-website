import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/experience";
import { Reveal } from "@/components/ui/reveal";

export function Experience() {
  return (
    <section id="experience" className="border-y border-border/80 bg-soft-navy/55 py-20 sm:py-24 lg:py-28" aria-labelledby="experience-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
          <SectionHeading
            eyebrow="Experience"
            headingId="experience-title"
            title="Professional experience across design and digital support."
            description="A background spanning UI/UX design, website content management, data research, and remote digital support."
          />

          <ol className="relative space-y-5 before:absolute before:bottom-8 before:left-1.75 before:top-8 before:w-px before:bg-border-strong" aria-label="Professional experience timeline">
            {experience.map((entry, index) => (
              <Reveal as="li" key={`${entry.role}-${entry.organization}`} className="relative pl-8" delay={index * 70}>
                <span className="absolute left-0 top-8 size-3.5 rounded-full border-4 border-background bg-primary ring-1 ring-border-strong" aria-hidden="true" />
                <article className="rounded-2xl border border-border bg-surface p-5 shadow-soft sm:p-7">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">{entry.period}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">{entry.role}</h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {entry.organization}{entry.location ? ` · ${entry.location}` : ""}
                  </p>
                  <ul className="mt-5 grid gap-2 text-sm leading-6 text-muted-foreground">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2.5 size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}