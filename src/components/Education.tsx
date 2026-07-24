import { portfolio } from "@/config/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Education() {
  if (portfolio.education.length === 0) return null;

  return (
    <Section id="education" title="Education" eyebrow="Where I studied">
      <ol className="relative border-l border-border">
        {portfolio.education.map((item, i) => (
          <Reveal key={`${item.institution}-${item.period}`} delay={i * 80}>
            <li className="mb-10 ml-6 last:mb-0">
              <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-background bg-accent" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold">{item.degree}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.institution}
              </p>
              {item.detail && (
                <p className="mt-1 text-sm font-medium text-accent">
                  {item.detail}
                </p>
              )}
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
