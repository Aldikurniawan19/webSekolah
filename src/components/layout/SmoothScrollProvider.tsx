"use client";

import React, { createContext, useContext, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { LenisScroll } from "@/lib/lenis";

interface SmoothScrollContextType {
  lenis: LenisScroll | null;
  scrollTo: (target: number | HTMLElement | string, options?: { offset?: number; immediate?: boolean }) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  scrollTo: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisScroll | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Instantiate Lenis smooth scroll engine
    const lenis = new LenisScroll({ wheelMultiplier: 1.0 });
    lenisRef.current = lenis;

    // Handle global anchor clicks for smooth scrolling to sections (e.g., href="#visi-misi" or href="/#visi-misi")
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Handle anchor link on current page (e.g. "#visi-misi" or "/#visi-misi")
      if (href.startsWith("#") || (href.startsWith("/#") && pathname === "/")) {
        const hash = href.startsWith("/#") ? href.substring(1) : href;
        if (hash && hash !== "#") {
          const el = document.querySelector(hash);
          if (el) {
            e.preventDefault();
            lenis.scrollTo(el as HTMLElement, { offset: -80 });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [pathname]);

  // Reset scroll to top or scroll to target hash on route changes
  useEffect(() => {
    if (!lenisRef.current) return;

    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          lenisRef.current?.scrollTo(el as HTMLElement, { offset: -80 });
        }, 100);
        return;
      }
    }

    // Scroll to top on standard route change
    lenisRef.current.scrollTo(0, { immediate: true });
  }, [pathname]);

  const scrollTo = (target: number | HTMLElement | string, options?: { offset?: number; immediate?: boolean }) => {
    lenisRef.current?.scrollTo(target, options);
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
