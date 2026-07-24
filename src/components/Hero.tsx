import { portfolio } from "@/config/portfolio";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Animated blue background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/4 h-72 w-72 animate-blob rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute top-10 right-1/4 h-72 w-72 animate-blob rounded-full bg-sky-400/20 blur-3xl [animation-delay:4s]" />
        <div className="absolute inset-0 bg-dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-6 py-20 sm:py-28 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-accent backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              Available for Software Engineer roles
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
              Hi, I&apos;m <span className="text-gradient">{portfolio.name}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <h2 className="mt-2 text-xl font-semibold text-muted-foreground sm:text-3xl">
              {portfolio.role}
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {portfolio.tagline}
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-accent/40"
              >
                View my work
              </a>
              {portfolio.resumeUrl && (
                <a
                  href={portfolio.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent-soft px-5 py-2.5 text-sm font-semibold text-accent transition-all hover:-translate-y-0.5 hover:border-accent"
                >
                  <DownloadIcon />
                  Download résumé
                </a>
              )}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-muted"
              >
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>

        {/* Avatar / monogram card */}
        <Reveal delay={200} className="hidden md:block">
          <div className="relative mx-auto aspect-square w-56">
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,var(--accent),transparent_35%,var(--accent-strong),transparent_70%,var(--accent))] opacity-70 blur-[2px]" />
            <div className="absolute inset-[6px] flex items-center justify-center rounded-full border border-border bg-card">
              <span className="text-5xl font-bold text-gradient">
                {initials(portfolio.name)}
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Quick stats */}
      {portfolio.stats.length > 0 && (
        <div className="mx-auto max-w-5xl px-6 pb-16 sm:pb-20">
          <Reveal delay={120}>
            <dl className="grid grid-cols-3 gap-4 rounded-2xl border border-border bg-card/70 p-6 backdrop-blur">
              {portfolio.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-bold text-gradient sm:text-3xl">
                    <Counter value={stat.value} />
                  </dd>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      )}
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg
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
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  );
}
