import Image from "next/image";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden py-16 sm:py-20 lg:py-24" aria-labelledby="hero-title">
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-35" aria-hidden="true" />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(19rem,0.65fr)] lg:gap-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
              <span className="relative flex size-2" aria-hidden="true"><span className="absolute inline-flex size-full rounded-full bg-primary opacity-20" /><span className="relative inline-flex size-2 rounded-full bg-primary" /></span>
              Available for selected opportunities
            </div>
            <p className="mt-7 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">Web Designer &amp; Developer</p>
            <h1 id="hero-title" className="mt-4 text-balance text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">I design and build digital experiences that feel<span className="text-primary"> clear, useful, and refined.</span></h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">I&apos;m RJ B. Tolibas, a web designer and developer focused on turning ideas into accessible, responsive, and thoughtfully crafted websites.</p>
            <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
              <a className="button-primary gap-2" href="#projects">View my work <span aria-hidden="true">→</span></a>
              <a className="button-secondary" href="#contact">Start a conversation</a>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-6">
              <div><dt className="font-mono text-[0.6875rem] uppercase tracking-widest text-muted-foreground">Focus</dt><dd className="mt-1 text-sm font-medium text-foreground">Design + development</dd></div>
              <div><dt className="font-mono text-[0.6875rem] uppercase tracking-widest text-muted-foreground">Approach</dt><dd className="mt-1 text-sm font-medium text-foreground">Accessible by default</dd></div>
            </dl>
          </div>

          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rotate-2 rounded-[1.75rem] border border-border bg-blue-gray/70" aria-hidden="true" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border-strong bg-blue-mist shadow-soft">
                <div className="absolute inset-x-8 bottom-0 top-5">
                  <Image src="/images/profile/profile-hero.webp" alt="Portrait of RJ B. Tolibas" fill priority sizes="(max-width: 1023px) 384px, 34vw" className="object-contain object-bottom drop-shadow-[0_18px_24px_rgb(31_41_55_/_0.16)]" />
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-xl border border-border bg-surface/95 p-4 shadow-sm backdrop-blur-md">
                  <div><p className="text-sm font-semibold text-foreground">RJ B. Tolibas</p><p className="mt-0.5 text-xs text-muted-foreground">Web Designer &amp; Developer</p></div>
                  <span className="size-2.5 shrink-0 rounded-full bg-primary ring-4 ring-primary/10" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}