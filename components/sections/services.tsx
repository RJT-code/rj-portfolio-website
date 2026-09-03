import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/services";

export function Services() {
  return <section id="services" className="border-y border-border/80 bg-blue-mist py-20 sm:py-24 lg:py-28" aria-labelledby="services-title">
    <Container>
      <SectionHeading eyebrow="Services" headingId="services-title" title="From a strong first impression to a stronger user experience." description="Flexible service directions for design and frontend work." />
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => <article key={service.title} className="group flex flex-col md:min-h-80 rounded-2xl border border-border bg-surface p-6 shadow-soft transition duration-200 motion-reduce:transition-none sm:p-8 md:hover:-translate-y-1 md:hover:border-border-strong">
          <div className="flex items-center justify-between gap-4"><span className="grid size-10 place-items-center rounded-lg border border-primary/20 bg-primary/[0.07] font-mono text-xs font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span><span className="h-px w-12 bg-border transition-colors group-hover:bg-primary/40" aria-hidden="true" /></div>
          <h3 className="mt-7 text-xl font-semibold tracking-tight">{service.title}</h3>
          <p className="mt-3 leading-7 text-muted-foreground">{service.description}</p>
          <ul className="mt-auto space-y-2 pt-7" aria-label={`${service.title} includes`}>{service.deliverables.map(item => <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground"><span className="size-1 rounded-full bg-primary" aria-hidden="true" />{item}</li>)}</ul>
        </article>)}
      </div>
    </Container>
  </section>;
}
