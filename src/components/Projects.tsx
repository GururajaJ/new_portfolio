import { portfolio, type Project } from "@/config/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" title="Projects" eyebrow="Things I've built">
      <div className="grid gap-6 sm:grid-cols-2">
        {portfolio.projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent to-sky-400 transition-transform duration-300 group-hover:scale-x-100"
      />
      <div className="mb-2 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        {project.featured && (
          <span className="shrink-0 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
            Featured
          </span>
        )}
      </div>

      {(project.kind || project.period) && (
        <p className="mb-3 font-mono text-xs text-muted-foreground">
          {[project.kind, project.period].filter(Boolean).join(" · ")}
        </p>
      )}

      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>

      {(project.liveUrl || project.repoUrl) && (
        <div className="mt-5 flex items-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
            >
              Live demo →
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Source
            </a>
          )}
        </div>
      )}
    </article>
  );
}
