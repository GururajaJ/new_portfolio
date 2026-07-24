"use client";

import { useEffect, useState } from "react";

export function CyberGrid() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Elegant Dotted Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.2]" />

      {/* Mouse Spot-Lighting Proximity Glow - Extremely Faint for White Minimalist Theme */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(10, 17, 40, 0.015), transparent 85%)`,
        }}
      />
    </div>
  );
}
