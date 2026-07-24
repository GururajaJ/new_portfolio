import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  id,
  title,
  eyebrow,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-5xl px-6 py-20 sm:py-24 ${className}`}>
      <Reveal>
        <div className="mb-10">
          {eyebrow && (
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {title}
          </h2>
        </div>
      </Reveal>
      {children}
    </section>
  );
}
