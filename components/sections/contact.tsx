import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function Contact() {
  return (
    <section id="contact" className="bg-deep-navy py-20 text-white sm:py-24 lg:py-28" aria-labelledby="contact-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.38fr)] lg:gap-16">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white/65">Contact</p>
            <h2 id="contact-title" className="mt-4 text-balance text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              Have a project in mind? Let&apos;s make it clear, useful, and memorable.
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/70">
              I&apos;m open to selected web design and frontend opportunities. Share what you&apos;re building and I&apos;ll get back to you.
            </p>
            <p className="mt-5 text-sm text-white/60">Based in Mabolo, Cebu City</p>

            <address className="mt-10 grid max-w-2xl gap-0 border-y border-white/15 not-italic sm:grid-cols-2">
              <a className="flex min-h-24 flex-col justify-center py-4 pr-5 transition-colors hover:text-blue-gray sm:border-r sm:border-white/15" href="mailto:tolibasrjb682@gmail.com">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white/55">Email</span>
                <span className="mt-2 break-all text-sm font-medium sm:text-base">tolibasrjb682@gmail.com</span>
              </a>
              <a className="flex min-h-24 flex-col justify-center border-t border-white/15 py-4 transition-colors hover:text-blue-gray sm:border-t-0 sm:pl-5" href="tel:+639512348866">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white/55">Phone</span>
                <span className="mt-2 text-sm font-medium sm:text-base">+63 951 234 8866</span>
              </a>
            </address>
          </Reveal>

          <Reveal className="flex flex-col justify-center border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0" delay={70}>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white/55">Start a conversation</p>
            <p className="mt-4 text-sm leading-6 text-white/65">The quickest way to reach me is by email.</p>
            <a className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-deep-navy transition-colors hover:bg-blue-mist" href="mailto:tolibasrjb682@gmail.com">
              Send an email <span className="ml-2" aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}