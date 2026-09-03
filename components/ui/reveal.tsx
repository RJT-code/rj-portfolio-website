"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";

type Props = { as?: "div" | "li"; children: ReactNode; className?: string; delay?: number };

export function Reveal({ as: Component = "div", children, className, delay = 0 }: Props) {
  const elementRef = useRef<HTMLDivElement & HTMLLIElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setIsVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { rootMargin: "0px 0px -8%", threshold: 0.1 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <Component ref={elementRef} className={["scroll-reveal", isVisible ? "scroll-reveal-visible" : "", className].filter(Boolean).join(" ")} style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}>{children}</Component>;
}