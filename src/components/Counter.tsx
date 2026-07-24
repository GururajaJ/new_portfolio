"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: string;
  duration?: number; // duration of animation in ms
};

export function Counter({ value, duration = 1500 }: CounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const parseValue = (val: string) => {
      const match = val.match(/([\d.]+)/);
      const number = match ? parseFloat(match[0]) : 0;
      const prefix = val.split(match ? match[0] : "")[0] || "";
      const suffix = val.split(match ? match[0] : "")[1] || "";
      const isDecimal = val.includes(".");
      const decimals = isDecimal ? val.split(".")[1].length : 0;
      return { number, prefix, suffix, decimals };
    };

    const parsed = parseValue(value);

    const startAnimation = () => {
      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing out function
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentNum = easeProgress * parsed.number;

        const formattedNumber = currentNum.toFixed(parsed.decimals);
        setDisplayValue(`${parsed.prefix}${formattedNumber}${parsed.suffix}`);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            startAnimation();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return <span ref={ref}>{displayValue}</span>;
}
