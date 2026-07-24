"use client";

import { portfolio } from "@/config/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" title="Skills" eyebrow="What I work with">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 80} variant="scale-up">
            <div className="group glow-card glass-card h-full rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md hover:shadow-accent/10">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold group-hover:text-accent transition-colors">
                <span className="h-4 w-1 rounded-full bg-accent transition-all group-hover:h-6" />
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <li
                    key={item}
                    className="rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-medium text-accent transition-all hover:border-accent hover:bg-accent/15 duration-200 hover:scale-105"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
