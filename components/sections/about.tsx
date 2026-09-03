import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const highlights = [
  ["500", "hours in UI/UX", "Completed an immersive design internship creating client websites, prototypes, brand guidelines, and reusable design systems."],
  ["3+", "years working remotely", "Supported Australian and local teams through website content management, data research, migration, and publishing."],
  ["BSIT", "technology foundation", "Grounded in information technology, with working knowledge of web technologies, CMS tools, and technical support."],
] as const;

export function About() {
  return <section id="about" className="border-y border-border/80 bg-blue-gray/55 py-20 sm:py-24 lg:py-28" aria-labelledby="about-title">
    <Container>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
        <SectionHeading eyebrow="About" headingId="about-title" title="A designer with a practical technology foundation." description="I bring together thoughtful UI/UX design, hands-on website experience, and the curiosity to keep learning with every project." />
        <div>
          <div className="max-w-2xl space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
            <p>I&apos;m RJ B. Tolibas, an Information Technology graduate based in Cebu City. I enjoy turning complex ideas into clear, approachable digital experiences&mdash;from early wireframes and visual direction to polished, responsive interfaces.</p>
            <p>During a 500-hour UI/UX design internship at REGGIEJAN Web Design Services, I created high-fidelity website designs, interactive prototypes, brand guidelines, and scalable design systems for B2B and B2C clients. My earlier remote work in data research and website content management also taught me to be organized, dependable, and attentive to the details behind a good user experience.</p>
          </div>
          <div className="mt-8 inline-flex items-start gap-3 rounded-xl border border-primary/15 bg-primary/4 px-4 py-3 text-sm leading-6 text-muted-foreground">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <p><span className="font-medium text-foreground">What I bring:</span> UI/UX design, responsive design, Figma, and modern frontend development with React, Next.js, TypeScript, and Tailwind CSS.</p>
          </div>
        </div>
      </div>
      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3 lg:mt-18">
        {highlights.map(([value, title, text], index) => <Reveal key={title} className="bg-surface" delay={index * 70}><article className="h-full p-6 sm:p-8">
          <p className="font-mono text-2xl font-semibold tracking-tight text-primary">{value}</p>
          <h3 className="mt-4 text-xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
        </article></Reveal>)}
      </div>
    </Container>
  </section>;
}
