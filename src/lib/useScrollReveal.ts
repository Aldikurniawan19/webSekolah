"use client";

import { useEffect, useRef, useState, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade"
  | "zoom-in"
  | "zoom-out"
  | "flip-up"
  | "slide-up";

export interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
  variant?: AnimationVariant;
}

/**
 * GSAP ScrollTrigger Hook for Smooth Web Animations.
 * Automatically handles triggers, hardware acceleration, and cleanup.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: UseScrollRevealOptions = {}
): [RefObject<T | null>, boolean, React.CSSProperties] {
  const {
    delay = 0,
    duration = 800,
    variant = "fade-up",
    once = true,
  } = options;

  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    const durSec = duration / 1000;
    const delaySec = delay / 1000;

    let fromVars: gsap.TweenVars = { opacity: 0 };

    switch (variant) {
      case "fade-up":
        fromVars = { opacity: 0, y: 45 };
        break;
      case "fade-down":
        fromVars = { opacity: 0, y: -45 };
        break;
      case "fade-left":
        fromVars = { opacity: 0, x: -50 };
        break;
      case "fade-right":
        fromVars = { opacity: 0, x: 50 };
        break;
      case "fade":
        fromVars = { opacity: 0 };
        break;
      case "zoom-in":
        fromVars = { opacity: 0, scale: 0.85 };
        break;
      case "zoom-out":
        fromVars = { opacity: 0, scale: 1.12 };
        break;
      case "flip-up":
        fromVars = { opacity: 0, y: 40, rotationX: 20 };
        break;
      case "slide-up":
        fromVars = { opacity: 0, y: 70 };
        break;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        fromVars,
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: durSec,
          delay: delaySec,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: once ? "play none none none" : "play reverse play reverse",
            onEnter: () => setIsVisible(true),
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [variant, delay, duration, once]);

  // Return empty style object so components passing style={style} remain compatible
  return [ref, isVisible, {}];
}

/**
 * Helper to generate staggered delay in ms
 */
export function staggerDelay(index: number, base = 100, step = 80): number {
  return base + index * step;
}
