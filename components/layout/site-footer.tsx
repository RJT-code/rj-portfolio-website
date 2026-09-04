import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionLink } from "@/components/ui/section-link";

const footerNavigation = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-midnight-navy py-8 text-white">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <SectionLink className="inline-flex min-h-11 items-center gap-3 rounded-lg" href="#home" aria-label="RJ, back to home">
          <span className="grid size-9 place-items-center rounded-lg border border-white/20 bg-white">
            <Image src="/brand/rj-logo.svg" alt="" width={24} height={24} aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold">RJ B. Tolibas</span>
        </SectionLink>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer navigation">
          {footerNavigation.map(([label, href]) => (
            <SectionLink key={label} className="inline-flex min-h-11 items-center text-sm text-white/70 transition-colors hover:text-white" href={href}>{label}</SectionLink>
          ))}
        </nav>
        <p className="text-sm text-white/60">© {new Date().getFullYear()} RJ B. Tolibas</p>
      </Container>
    </footer>
  );
}
