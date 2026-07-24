"use client";

import { useEffect, useState } from "react";
import { portfolio } from "@/config/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollPercent((window.scrollY / totalScroll) * 100);
      } else {
        setScrollPercent(0);
      }
    };
    
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors border-b ${
        scrolled
          ? "border-foreground/10 bg-background/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollPercent}%` }}
      />

      <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <div>
          <a href="#about" className="font-mono text-xs font-bold tracking-widest text-foreground uppercase">
            {portfolio.name}
          </a>
        </div>

        {/* Minimalist Nav Link Items */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="#projects" className="text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
            Projects
          </a>
          <a href="#skills" className="hidden sm:inline-block text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
            Skills
          </a>
          <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </a>
          {portfolio.resumeUrl && (
            <a
              href={portfolio.resumeUrl}
              download
              className="hidden sm:inline-block text-xs font-bold uppercase tracking-widest text-foreground hover:underline cursor-pointer"
            >
              Resume
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}
