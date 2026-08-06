"use client";

import { useEffect, useRef, useState, RefObject } from "react";

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade"
  | "zoom-in"
  | "zoom-out"
  | "flip-up"
  | "slide-up";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
  variant?: AnimationVariant;
}

/**
 * Custom hook for scroll-triggered reveal animations.
 * Returns [ref, isVisible, animationStyle].
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: UseScrollRevealOptions = {}
): [RefObject<T | null>, boolean, React.CSSProperties] {
  const {
    threshold = 0.12,
    rootMargin = "0px 0px -40px 0px",
    once = true,
    delay = 0,
    duration = 700,
    variant = "fade-up",
  } = options;

  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  // Build CSS transitions
  const hiddenStyles: Record<AnimationVariant, React.CSSProperties> = {
    "fade-up":    { opacity: 0, transform: "translateY(40px)" },
    "fade-down":  { opacity: 0, transform: "translateY(-40px)" },
    "fade-left":  { opacity: 0, transform: "translateX(-40px)" },
    "fade-right": { opacity: 0, transform: "translateX(40px)" },
    "fade":       { opacity: 0 },
    "zoom-in":    { opacity: 0, transform: "scale(0.88)" },
    "zoom-out":   { opacity: 0, transform: "scale(1.1)" },
    "flip-up":    { opacity: 0, transform: "perspective(600px) rotateX(25deg) translateY(30px)" },
    "slide-up":   { opacity: 0, transform: "translateY(60px)" },
  };

  const visibleStyle: React.CSSProperties = {
    opacity: 1,
    transform: "none",
  };

  const baseStyle: React.CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: `${delay}ms`,
  };

  const animationStyle: React.CSSProperties = {
    ...baseStyle,
    ...(isVisible ? visibleStyle : hiddenStyles[variant]),
  };

  return [ref, isVisible, animationStyle];
}

/**
 * Staggered children helper – returns a delay (ms) for each index.
 */
export function staggerDelay(index: number, base = 100, step = 80): number {
  return base + index * step;
}
