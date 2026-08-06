"use client";

import React from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Hero() {
  const [heroRef] = useScrollReveal({ variant: "fade-up", duration: 900 });

  return (
    <section className="relative w-full min-h-[560px] sm:min-h-[600px] md:min-h-[660px] pt-20 sm:pt-28 pb-32 sm:pb-36 md:pb-40 flex items-center bg-[#002256]">
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
      <div ref={heroRef} className="relative z-10 w-full max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-x text-center md:text-left flex flex-col md:items-start items-center gap-6 sm:gap-8">
        <h1 className="font-jakarta text-[36px] sm:text-[52px] md:text-[56px] font-bold text-white max-w-3xl drop-shadow-lg leading-[1.2] tracking-[-0.02em]">
          <span className="text-[#f6bf22]">SMA Negeri 2</span> Tebo
        </h1>
        <p className="font-inter text-base sm:text-lg text-surface-container-low max-w-2xl leading-[1.7]">
          Mewujudkan generasi berprestasi, berkarakter, dan berdaya saing global melalui pendidikan berkualitas dan fasilitas modern.
        </p>
        
        <div className="grid grid-cols-2 sm:flex gap-3 sm:gap-4 mt-2 w-full max-w-md md:max-w-none">
          {/* Primary CTA: Solid Accent Yellow */}
          <button className="w-full sm:w-auto bg-tertiary-fixed-dim text-on-tertiary-fixed font-semibold text-[13.5px] sm:text-[15px] px-3 sm:px-8 py-3.5 sm:py-4 rounded-md hover:bg-[#e0ad1b] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-lg text-center truncate">
            Info Pendaftaran
          </button>
          {/* Secondary CTA: Transparent Yellow Outline & Yellow Hover */}
          <button className="w-full sm:w-auto border-2 border-tertiary-fixed-dim text-tertiary-fixed-dim font-semibold text-[13.5px] sm:text-[15px] px-3 sm:px-8 py-3.5 sm:py-4 rounded-md hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed hover:-translate-y-0.5 active:scale-95 transition-all duration-300 text-center truncate">
            Jelajahi Sekolah
          </button>
        </div>
      </div>
    </section>
  );
}
