"use client";

import { useEffect } from "react";

const revealSelector = [
  ".section-head",
  ".about-photo",
  ".about-copy",
  ".priority-item",
  ".chapter",
  ".work-field",
  ".gallery-edit figure",
  ".home-cta",
].join(",");

export function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector),
    );

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("scroll-in"));
      return;
    }

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("scroll-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );

    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-order", String(index % 3));
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
