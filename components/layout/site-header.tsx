import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionLink } from "@/components/ui/section-link";

const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
] as const;

function Brand() {
  return (
    <SectionLink className="group inline-flex min-h-11 items-center gap-3 rounded-lg" href="#home" aria-label="RJ, home">
      <span className="grid size-9 place-items-center rounded-lg border border-border-strong bg-background shadow-sm transition-colors group-hover:border-foreground/40">
        <Image src="/brand/rj-logo.svg" alt="" width={24} height={24} aria-hidden="true" />
      </span>

    </SectionLink>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <Container className="flex min-h-18 items-center justify-between gap-5">
        <Brand />
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          {navigation.map(([label, href]) => <SectionLink key={label} className="nav-link" href={href}>{label}</SectionLink>)}
        </nav>
        <SectionLink className="button-primary hidden xl:inline-flex" href="#contact">Let&apos;s talk</SectionLink>
        <details className="mobile-menu relative xl:hidden">
          <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:border-border-strong hover:bg-muted">
            <span className="sr-only">Toggle navigation menu</span>
            <span className="menu-icon grid gap-1.5" aria-hidden="true"><span className="h-0.5 w-5 rounded-full bg-current" /><span className="h-0.5 w-5 rounded-full bg-current" /><span className="h-0.5 w-5 rounded-full bg-current" /></span>
          </summary>
          <div className="absolute right-0 top-[calc(100%+0.75rem)] w-[min(20rem,calc(100vw-2.5rem))] rounded-xl border border-border bg-surface-elevated p-3 shadow-soft">
            <nav className="grid" aria-label="Mobile navigation">
              {navigation.map(([label, href]) => <SectionLink key={label} className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" href={href}>{label}</SectionLink>)}
              <SectionLink className="button-primary mt-2" href="#contact">Let&apos;s talk</SectionLink>
            </nav>
          </div>
        </details>
      </Container>
    </header>
  );
}
