type Props = { eyebrow: string; title: string; description: string; headingId: string };

export function SectionHeading({ eyebrow, title, description, headingId }: Props) {
  return <div className="max-w-2xl">
    <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
    <h2 id={headingId} className="mt-4 text-balance text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl">{title}</h2>
    <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{description}</p>
  </div>;
}
