import { portfolio } from "@/config/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" title="About" eyebrow="Get to know me">
      <div className="grid gap-8 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <p className="text-base leading-relaxed text-muted-foreground">
            {portfolio.about}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <dl className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm">
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Location
              </dt>
              <dd className="mt-1 text-sm">{portfolio.location}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Phone
              </dt>
              <dd className="mt-1 text-sm">
                <a
                  href={`tel:${portfolio.phone.replace(/\s+/g, "")}`}
                  className="transition-colors hover:text-accent"
                >
                  {portfolio.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Email
              </dt>
              <dd className="mt-1 text-sm break-all">
                <a
                  href={`mailto:${portfolio.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {portfolio.email}
                </a>
              </dd>
            </div>
            {portfolio.resumeUrl && (
              <a
                href={portfolio.resumeUrl}
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-strong"
              >
                Download résumé
              </a>
            )}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
