import { portfolio } from "@/config/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Experience() {
  if (portfolio.experience.length === 0) return null;

  return (
    <Section id="experience" title="Experience" eyebrow="Where I've worked">
      <ol className="relative border-l border-border">
        {portfolio.experience.map((item, i) => (
          <Reveal key={`${item.company}-${item.period}`} delay={i * 80}>
            <li className="mb-10 ml-6 last:mb-0">
              <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-background bg-accent" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold">
                  {item.role}{" "}
                  <span className="text-muted-foreground">· {item.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
