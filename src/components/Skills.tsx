import { portfolio } from "@/config/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" title="Skills" eyebrow="What I work with">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 80}>
            <div className="group h-full rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-md hover:shadow-accent/10">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold">
                <span className="h-4 w-1 rounded-full bg-accent" />
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-medium text-accent transition-colors group-hover:border-accent/40"
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
