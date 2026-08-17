"use client";

import { useState } from "react";
import { portfolio, type Project } from "@/config/portfolio";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";
import { Typewriter } from "./Typewriter";

export function MinimalistLayout() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const roles = [
    "Full-Stack Java Developer",
    "Spring Boot Developer",
    "React.js Developer",
    "LeetCode Problem Solver",
  ];

  // Filter projects dynamically by selected skill tag (case-insensitive)
  const filteredProjects = selectedSkill
    ? portfolio.projects.filter((p) =>
        p.tags.some((tag) => tag.toLowerCase() === selectedSkill.toLowerCase())
      )
    : portfolio.projects;

  const handleSkillClick = (skillName: string) => {
    setSelectedSkill(skillName);
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 space-y-24 md:py-24">
      
      {/* =======================================================================
          HERO MODULE: Typographical Headline, Circular Photo, & Metrics
          ======================================================================= */}
      <header id="about" className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center border-b border-foreground/10 pb-16">
        <div className="md:col-span-8 space-y-8">
          <Reveal variant="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              Open for Software Engineer roles
            </span>
          </Reveal>
          
          <Reveal variant="fade-up" delay={80}>
            <h1 className="text-5xl font-black tracking-tighter sm:text-6xl lg:text-7xl uppercase text-foreground leading-none">
              {portfolio.name}
            </h1>
            <div className="mt-4 text-lg font-bold sm:text-xl h-6">
              <Typewriter words={roles} />
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={160}>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {portfolio.tagline}
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={240}>
            <div className="flex flex-wrap gap-4 pt-2">
              {portfolio.resumeUrl && (
                <a
                  href={portfolio.resumeUrl}
                  download
                  className="btn-minimal cursor-pointer"
                >
                  Download Resume
                </a>
              )}
              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-transparent px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-foreground hover:underline"
              >
                Get in Touch →
              </a>
            </div>
          </Reveal>

          {/* Stats Row */}
          <Reveal variant="scale-up" delay={300}>
            <dl className="grid grid-cols-3 gap-4 pt-8 border-t border-foreground/10 max-w-xl">
              {portfolio.stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <dd className="text-2xl font-extrabold text-foreground tracking-tight sm:text-3xl">
                    <Counter value={stat.value} />
                  </dd>
                  <dt className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest leading-snug">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Profile Image Column - Hidden on mobile, Circular on desktop */}
        <div className="hidden md:flex md:col-span-4 justify-center">
          <Reveal variant="scale-up" delay={200} className="w-48 h-48 aspect-square relative overflow-hidden rounded-full border border-foreground/10 shadow-sm">
            {/* Slide block reveal animation */}
            <div className="absolute inset-0 bg-foreground origin-left animate-slide-reveal z-10" />
            <img
              src="/gururaja.jpg"
              alt={portfolio.name}
              className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
            />
          </Reveal>
        </div>
      </header>

      {/* =======================================================================
          ABOUT MODULE: Clean Text Layout
          ======================================================================= */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline py-4">
        <h2 className="md:col-span-3 font-mono text-xs uppercase tracking-widest text-muted-foreground font-bold">
          Summary
        </h2>
        <div className="md:col-span-9">
          <Reveal variant="fade-up">
            <p className="text-sm leading-relaxed text-foreground sm:text-base font-medium font-sans">
              {portfolio.about}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-bold text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <LocationIcon />
                {portfolio.location}
              </span>
              <span className="hidden sm:inline">·</span>
              <span>{portfolio.email}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =======================================================================
          PROJECTS MODULE: Interactive Expandable Row List
          ======================================================================= */}
      <section id="projects" className="grid grid-cols-1 md:grid-cols-12 gap-8 py-4 border-t border-foreground/10 pt-16">
        <div className="md:col-span-3">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-bold sticky top-24">
            Builds & Works
          </h2>
          <p className="text-xs text-muted-foreground mt-2 hidden md:block leading-relaxed">
            Click on a project to slide open details, repository resources, and direct live links.
          </p>
        </div>
        
        <div className="md:col-span-9">
          {/* Active Skill Filter Banner */}
          {selectedSkill && (
            <div className="mb-6 flex items-center justify-between border border-accent/25 bg-muted/60 px-4 py-2.5 text-xs font-bold text-foreground rounded-none animate-scale-in">
              <span>Showing projects utilizing: <strong className="underline decoration-2 uppercase underline-offset-2">{selectedSkill}</strong></span>
              <button
                type="button"
                onClick={() => setSelectedSkill(null)}
                className="hover:underline cursor-pointer font-bold uppercase tracking-wider text-[10px] text-muted-foreground hover:text-foreground"
              >
                Clear Filter [X]
              </button>
            </div>
          )}
          
          <div className="border-t border-foreground/10">
            {filteredProjects.map((project, idx) => (
              <ProjectRow key={project.title} project={project} index={idx} />
            ))}
            {filteredProjects.length === 0 && (
              <div className="py-12 text-center text-sm border-b border-foreground/10">
                <p className="text-muted-foreground font-medium">No projects listed matching &ldquo;{selectedSkill}&rdquo;.</p>
                <button
                  type="button"
                  onClick={() => setSelectedSkill(null)}
                  className="mt-3 text-xs font-bold underline cursor-pointer text-foreground hover:opacity-85"
                >
                  View All Projects
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =======================================================================
          SKILLS MODULE: Minimalist Columns with Staggered Spring Pop Animations
          ======================================================================= */}
      <section id="skills" className="grid grid-cols-1 md:grid-cols-12 gap-8 py-4 border-t border-foreground/10 pt-16">
        <h2 className="md:col-span-3 font-mono text-xs uppercase tracking-widest text-muted-foreground font-bold">
          Technical Skills
        </h2>
        <div className="md:col-span-9">
          <div className="grid gap-8 sm:grid-cols-2">
            {portfolio.skills.map((group, i) => (
              <Reveal key={group.category} delay={i * 80} variant="fade-up">
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-widest border-b border-foreground/10 pb-2">
                    {group.category}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item, idx) => {
                      const isActive = selectedSkill?.toLowerCase() === item.toLowerCase();
                      return (
                        <li
                          key={item}
                          style={{
                            animationDelay: `${idx * 40}ms`,
                            opacity: 0,
                          }}
                          onClick={() => handleSkillClick(item)}
                          className={`animate-scale-in rounded border px-2.5 py-1 text-xs font-semibold transition-all hover:scale-105 duration-200 cursor-pointer ${
                            isActive
                              ? "border-accent bg-accent text-background font-black"
                              : "border-foreground/10 bg-muted/40 text-foreground hover:border-foreground/50 hover:bg-accent-soft hover:text-accent"
                          }`}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =======================================================================
          EDUCATION MODULE: Clean Timeline
          ======================================================================= */}
      <section id="education" className="grid grid-cols-1 md:grid-cols-12 gap-8 py-4 border-t border-foreground/10 pt-16">
        <h2 className="md:col-span-3 font-mono text-xs uppercase tracking-widest text-muted-foreground font-bold">
          Credentials
        </h2>
        <div className="md:col-span-9">
          <div className="relative pl-6">
            <div className="absolute left-[3px] top-1.5 bottom-1.5 w-[1.5px] bg-foreground/10">
              <div className="w-full bg-foreground origin-top animate-timeline-line h-full" />
            </div>
            <ol className="space-y-10">
              {portfolio.education.map((edu, i) => (
                <Reveal key={edu.institution} delay={i * 80} variant="fade-right">
                  <li className="relative">
                    <span className="absolute -left-[30px] top-1 h-3.5 w-3.5 rounded-full border-4 border-background bg-foreground transition-transform duration-300 hover:scale-125 animate-pulse" />
                    <div className="flex flex-wrap items-baseline justify-between gap-4">
                      <h4 className="text-sm font-bold text-foreground">{edu.degree}</h4>
                      <span className="font-mono text-xs text-muted-foreground">{edu.period}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{edu.institution}</p>
                    {edu.detail && (
                      <p className="text-xs font-bold text-foreground mt-1.5">{edu.detail}</p>
                    )}
                  </li>
                </Reveal>
              ))}
            </ol>

            {/* Certifications Subsection */}
            {portfolio.certifications && portfolio.certifications.length > 0 && (
              <div className="mt-16 pt-8 border-t border-foreground/10 space-y-4">
                <h3 className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest">
                  Certifications
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {portfolio.certifications.map((cert, i) => (
                    <Reveal key={cert} delay={i * 60} variant="fade-up">
                      <li className="rounded border border-foreground/10 bg-muted/40 p-3 text-xs font-semibold text-foreground hover:border-foreground/30 transition-colors">
                        {cert}
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            )}

            {/* Achievements Subsection */}
            {portfolio.achievements && portfolio.achievements.length > 0 && (
              <div className="mt-12 pt-8 border-t border-foreground/10 space-y-4">
                <h3 className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest">
                  Key Achievements
                </h3>
                <ul className="space-y-3 list-disc pl-4 text-xs text-muted-foreground">
                  {portfolio.achievements.map((ach, i) => (
                    <Reveal key={ach} delay={i * 60} variant="fade-up">
                      <li className="leading-relaxed font-medium text-foreground">
                        {ach}
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* =======================================================================
          CONTACT MODULE: Underline fields form
          ======================================================================= */}
      <section id="contact" className="grid grid-cols-1 md:grid-cols-12 gap-8 py-4 border-t border-foreground/10 pt-16">
        <div className="md:col-span-3 space-y-2">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-bold">
            Contact
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed hidden md:block">
            Have a project or opportunity? Drop an outline here.
          </p>
        </div>
        <div className="md:col-span-9">
          <Reveal variant="fade-up">
            <ContactForm />
          </Reveal>
          
          {/* Social Links Row */}
          <div className="flex flex-wrap gap-4 pt-12 border-t border-foreground/10 mt-12 justify-center sm:justify-start">
            {portfolio.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

// Sub-Component for Project Row Expansion
function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Reveal variant="fade-up" delay={index * 60}>
      <div className="border-b border-foreground/10 py-5 transition-all">
        {/* Clickable Header Row */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between gap-4 text-left font-sans group cursor-pointer"
        >
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="font-mono text-[10px] text-muted-foreground font-bold">
              0{index + 1}
            </span>
            {/* Sliding Underline Hover Effect on Title */}
            <h3 className="relative text-base font-bold text-foreground md:text-lg overflow-hidden py-0.5">
              <span>{project.title}</span>
              <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-foreground scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </h3>
            {project.featured && (
              <span className="rounded bg-foreground px-1.5 py-0.5 text-[8px] font-bold text-background uppercase tracking-wider">
                Featured
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-4 shrink-0">
            <span className="hidden sm:inline font-mono text-xs text-muted-foreground">
              {project.kind}
            </span>
            {/* Rotating indicator arrow */}
            <span className={`text-foreground transition-transform duration-300 ${isOpen ? "rotate-90 text-accent font-blackScale" : "rotate-0"}`}>
              {isOpen ? <CollapseIcon /> : <ExpandIcon />}
            </span>
          </div>
        </button>

        {/* Expandable sliding drawer */}
        <div
          className={`grid transition-all duration-350 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-4 pb-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              <p className="max-w-2xl">{project.description}</p>
              
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-foreground/10 bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(project.liveUrl || project.repoUrl) && (
                <div className="flex items-center gap-4 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-foreground underline hover:opacity-80 cursor-pointer"
                    >
                      Visit Live Site
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer"
                    >
                      View Source
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

// Minimal Icons
function LocationIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export function CollapseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
