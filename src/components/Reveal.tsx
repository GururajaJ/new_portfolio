"use client";

import { useEffect, useRef, useState } from "react";

type RevealVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-up";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms before the reveal transition starts. */
  delay?: number;
  /** Duration of reveal in ms. Defaults to 700. */
  duration?: number;
  /** Visual variation of reveal. Defaults to "fade-up". */
  variant?: RevealVariant;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 700,
  variant = "fade-up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const getVariantClasses = (visibleState: boolean, v: RevealVariant) => {
    switch (v) {
      case "fade-down":
        return visibleState ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0";
      case "fade-left":
        return visibleState ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0";
      case "fade-right":
        return visibleState ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0";
      case "scale-up":
        return visibleState ? "scale-100 opacity-100" : "scale-95 opacity-0";
      case "fade-up":
      default:
        return visibleState ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0";
    }
  };

  const transitionClass = getVariantClasses(visible, variant);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
      className={`transition-all ease-out motion-reduce:transition-none ${transitionClass} ${className}`}
    >
      {children}
    </div>
  );
}
