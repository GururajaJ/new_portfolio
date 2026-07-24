import { portfolio } from "@/config/portfolio";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-14 text-center sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
          />
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
            Get in touch
          </p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            I&apos;m open to Software Engineer roles and collaborations. Send me a
            message below and it&apos;ll land straight in my inbox.
          </p>

          <ContactForm />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${portfolio.email}`}
              className="inline-flex items-center rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              {portfolio.email}
            </a>
            {portfolio.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
