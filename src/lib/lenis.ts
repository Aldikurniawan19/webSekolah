"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface LenisOptions {
  lerp?: number;
  wheelMultiplier?: number;
}

export class LenisScroll {
  private targetY: number = 0;
  private currentY: number = 0;
  private isRunning: boolean = false;
  private rafId: number | null = null;
  private lastTime: number = 0;
  private wheelMultiplier: number = 1.0;
  private isDestroyed: boolean = false;
  private listeners: Set<(scroll: { scroll: number; velocity: number }) => void> = new Set();
  private velocity: number = 0;
  private cleanupFns: Array<() => void> = [];

  constructor(options: LenisOptions = {}) {
    if (typeof window === "undefined") return;

    this.wheelMultiplier = options.wheelMultiplier ?? 1.0;
    this.currentY = window.scrollY || window.pageYOffset;
    this.targetY = this.currentY;

    this.init();
  }

  private getMaxScroll(): number {
    return Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    ) - window.innerHeight;
  }

  private init() {
    if (typeof window === "undefined") return;

    // Respect user reduced-motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    document.documentElement.classList.add("lenis", "lenis-smooth");

    const onWheel = (e: WheelEvent) => {
      // Check if target is inside a data-lenis-prevent container
      let target = e.target as HTMLElement | null;
      while (target && target !== document.body && target !== document.documentElement) {
        if (target.hasAttribute("data-lenis-prevent")) {
          return;
        }
        target = target.parentElement;
      }

      // CRITICAL FIX: Prevent native browser scroll from fighting JS loop!
      e.preventDefault();

      let deltaY = e.deltaY;
      if (e.deltaMode === 1) deltaY *= 32;
      else if (e.deltaMode === 2) deltaY *= window.innerHeight;

      const maxScroll = this.getMaxScroll();
      
      // If loop was stopped, sync target with actual window scroll
      if (!this.isRunning) {
        this.currentY = window.scrollY;
        this.targetY = window.scrollY;
      }

      this.targetY = Math.max(0, Math.min(maxScroll, this.targetY + deltaY * this.wheelMultiplier));

      this.start();
    };

    const onScroll = () => {
      if (!this.isRunning) {
        this.currentY = window.scrollY;
        this.targetY = window.scrollY;
      }
    };

    // MUST use passive: false so e.preventDefault() stops native scroll collision!
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });

    this.cleanupFns.push(() => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
    });

    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  public start() {
    if (this.isRunning || this.isDestroyed) return;
    this.isRunning = true;
    this.lastTime = performance.now();
    this.rafId = requestAnimationFrame(this.onFrame.bind(this));
  }

  private onFrame(time: number) {
    if (!this.isRunning || this.isDestroyed) return;

    // Calculate elapsed delta time in seconds (clamped to max 100ms)
    const dt = Math.min((time - (this.lastTime || time)) / 1000, 0.1);
    this.lastTime = time;

    const maxScroll = this.getMaxScroll();
    this.targetY = Math.max(0, Math.min(maxScroll, this.targetY));

    const diff = this.targetY - this.currentY;

    // Frame-rate independent exponential dampening physics: 1 - Math.exp(-lambda * dt)
    // lambda = 14 provides silky-smooth 60fps/120fps/144fps momentum scrolling
    const factor = 1 - Math.exp(-14 * dt);
    this.velocity = diff * factor;
    this.currentY += this.velocity;

    // Precision completion check
    if (Math.abs(diff) < 0.3) {
      this.currentY = this.targetY;
      this.velocity = 0;
      window.scrollTo(0, Math.round(this.currentY));
      this.notify();
      this.isRunning = false;
      return;
    }

    window.scrollTo(0, Math.round(this.currentY));
    this.notify();

    this.rafId = requestAnimationFrame(this.onFrame.bind(this));
  }

  private notify() {
    for (const listener of this.listeners) {
      listener({ scroll: this.currentY, velocity: this.velocity });
    }
  }

  public scrollTo(target: number | HTMLElement | string, options: { offset?: number; immediate?: boolean } = {}) {
    let targetY = 0;
    const offset = options.offset ?? 0;

    if (typeof target === "number") {
      targetY = target;
    } else if (typeof target === "string") {
      const el = document.querySelector(target);
      if (el) {
        const rect = el.getBoundingClientRect();
        targetY = rect.top + window.scrollY;
      }
    } else if (target instanceof HTMLElement) {
      const rect = target.getBoundingClientRect();
      targetY = rect.top + window.scrollY;
    }

    targetY += offset;
    const maxScroll = this.getMaxScroll();
    targetY = Math.max(0, Math.min(maxScroll, targetY));

    if (options.immediate) {
      this.currentY = targetY;
      this.targetY = targetY;
      window.scrollTo(0, targetY);
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.update();
      }
    } else {
      this.targetY = targetY;
      this.start();
    }
  }

  public on(callback: (scroll: { scroll: number; velocity: number }) => void) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  public destroy() {
    this.isDestroyed = true;
    this.isRunning = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    this.cleanupFns.forEach((fn) => fn());
    document.documentElement.classList.remove("lenis", "lenis-smooth");
  }
}
