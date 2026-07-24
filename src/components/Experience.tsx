"use client";

import { portfolio } from "@/config/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Experience() {
  if (portfolio.experience.length === 0) return null;

  return (
    <Section id="experience" title="Experience" eyebrow="Where I've worked">
      <div className="relative pl-6">
        {/* Animated timeline background and fill bar */}
        <div className="absolute left-[3px] top-1.5 bottom-1.5 w-[2px] bg-border">
          <div className="w-full bg-accent origin-top animate-timeline-line h-full" />
        </div>
        <ol className="space-y-10">
          {portfolio.experience.map((item, i) => (
            <Reveal key={`${item.company}-${item.period}`} delay={i * 80} variant="fade-right">
              <li className="relative">
                {/* Timeline node dot */}
                <span className="absolute -left-[30px] top-1.5 h-4 w-4 rounded-full border-4 border-background bg-accent transition-transform duration-300 hover:scale-125" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-foreground">
                    {item.role}{" "}
                    <span className="text-muted-foreground font-normal">· {item.company}</span>
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
      </div>
    </Section>
  );
}
