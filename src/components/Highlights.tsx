import { portfolio } from "@/config/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Highlights() {
  const hasCerts = portfolio.certifications.length > 0;
  const hasAchievements = portfolio.achievements.length > 0;
  if (!hasCerts && !hasAchievements) return null;

  return (
    <Section
      id="highlights"
      title="Certifications & Achievements"
      eyebrow="Beyond the code"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {hasCerts && (
          <Reveal>
            <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-semibold">Certifications</h3>
              <ul className="space-y-3">
                {portfolio.certifications.map((cert) => (
                  <li key={cert} className="flex gap-3 text-sm text-muted-foreground">
                    <BadgeIcon />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
        {hasAchievements && (
          <Reveal delay={100}>
            <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-semibold">Achievements</h3>
              <ul className="space-y-3">
                {portfolio.achievements.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <StarIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </Section>
  );
}

function BadgeIcon() {
  return (
    <svg
      className="mt-0.5 shrink-0 text-accent"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      className="mt-0.5 shrink-0 text-accent"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </svg>
  );
}
