"use client";

import React, { useState, useEffect } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

import Link from "next/link";

function CountUp({ target, suffix = "", isVisible }: { target: number; suffix?: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 1800; // 1.8 seconds smooth count animation

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out exponential curve
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [heroRef, isVisible] = useScrollReveal({ variant: "fade-up", duration: 900 });

  return (
    <section className="relative w-full min-h-[100dvh] pt-32 sm:pt-36 md:pt-44 pb-12 sm:pb-20 md:pb-24 flex items-center bg-[#002256]">
      {/* Background Video & Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-[1.15] origin-center pointer-events-none"
        >
          <source src="/video/videoHero.mp4" type="video/mp4" />
        </video>
        {/* 50/50 Gradient Overlay: Faded at top, rich navy at middle & bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#001f4d]/30 via-45%-[#002b66]/85 to-[#001a40]"></div>
      </div>

      {/* Content */}
      <div ref={heroRef} className="relative z-10 w-full max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-x text-center md:text-left flex flex-col md:items-start items-center gap-6 sm:gap-8 mt-4 sm:mt-8 md:mt-10">
        <h1 className="font-jakarta text-[36px] sm:text-[52px] md:text-[56px] font-bold text-white max-w-3xl drop-shadow-lg leading-[1.2] tracking-[-0.02em]">
          <span className="text-[#f6bf22]">SMA Negeri 2</span> Tebo
        </h1>
        <p className="font-inter text-base sm:text-lg text-surface-container-low max-w-2xl leading-[1.7]">
          Mewujudkan generasi berprestasi, berkarakter, dan berdaya saing global melalui pendidikan berkualitas dan fasilitas modern.
        </p>
        
        <div className="grid grid-cols-2 sm:flex gap-3 sm:gap-4 mt-2 w-full max-w-md md:max-w-none">
          {/* Primary CTA: Solid Accent Yellow */}
          <Link
            href="/pendaftaran"
            className="w-full sm:w-auto bg-tertiary-fixed-dim text-on-tertiary-fixed font-bold text-[13.5px] sm:text-[15px] px-3 sm:px-8 py-3.5 sm:py-4 rounded-md hover:bg-[#e0ad1b] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-lg text-center truncate flex items-center justify-center gap-2"
          >
            Info Pendaftaran
          </Link>
          {/* Secondary CTA: Transparent Yellow Outline & Yellow Hover */}
          <Link
            href="/profil/sejarah"
            className="w-full sm:w-auto border-2 border-tertiary-fixed-dim text-tertiary-fixed-dim font-bold text-[13.5px] sm:text-[15px] px-3 sm:px-8 py-3.5 sm:py-4 rounded-md hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed hover:-translate-y-0.5 active:scale-95 transition-all duration-300 text-center truncate flex items-center justify-center gap-2"
          >
            Jelajahi Sekolah
          </Link>
        </div>

        {/* Simple Stats Display under buttons */}
        <div className="flex flex-row items-center justify-center md:justify-start gap-5 sm:gap-8 mt-3 pt-5 border-t border-white/15 w-full max-w-md md:max-w-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-[#f6bf22] shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="font-jakarta text-lg sm:text-xl font-bold text-white leading-tight">
                <CountUp target={850} suffix="+" isVisible={isVisible} />
              </p>
              <p className="font-inter text-xs text-white/75">Siswa Aktif</p>
            </div>
          </div>

          <div className="h-8 w-px bg-white/20"></div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-[#f6bf22] shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="font-jakarta text-lg sm:text-xl font-bold text-white leading-tight">Akreditasi A</p>
              <p className="font-inter text-xs text-white/75">Unggul BAN-S/M</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
