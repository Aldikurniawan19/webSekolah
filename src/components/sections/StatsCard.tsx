"use client";

import React, { useState, useEffect, useRef } from "react";
import { GraduationCap, Users, ShieldCheck, Trophy } from "@/components/ui/Icons";

interface StatItem {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  numericValue?: number;
  suffix?: string;
  textValue?: string;
  label: string;
  description: string;
  iconBg: string;
}

function StatCounter({ 
  numericValue, 
  suffix = "", 
  textValue, 
  isVisible 
}: { 
  numericValue?: number; 
  suffix?: string; 
  textValue?: string; 
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible || numericValue === undefined) {
      setCount(0);
      return;
    }

    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 1600; // 1.6 seconds animation duration

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Smooth Exponential Ease Out
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easeOut * numericValue);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, numericValue]);

  if (textValue) {
    return (
      <span 
        className={`inline-block transition-all duration-700 ease-out transform ${
          isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-2"
        }`}
      >
        {textValue}
      </span>
    );
  }

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCard() {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const stats: StatItem[] = [
    {
      id: 1,
      icon: GraduationCap,
      numericValue: 850,
      suffix: "+",
      label: "Jumlah Siswa",
      description: "Peserta didik aktif IPA & IPS",
      iconBg: "bg-primary/15 text-primary border border-primary/20",
    },
    {
      id: 2,
      icon: Users,
      numericValue: 52,
      suffix: "+",
      label: "Guru & Staf",
      description: "Tenaga pengajar profesional",
      iconBg: "bg-[#f6bf22]/20 text-[#b37e00] border border-[#f6bf22]/30",
    },
    {
      id: 3,
      icon: ShieldCheck,
      textValue: "Akreditasi A",
      label: "Akreditasi",
      description: "Predikat Unggul BAN-S/M",
      iconBg: "bg-emerald-500/15 text-emerald-700 border border-emerald-500/20",
    },
    {
      id: 4,
      icon: Trophy,
      numericValue: 100,
      suffix: "%",
      label: "Kelulusan",
      description: "Alumni di PTN Favorit",
      iconBg: "bg-indigo-500/15 text-indigo-700 border border-indigo-500/20",
    },
  ];

  return (
    <section className="relative z-30 -translate-y-1/3 sm:-translate-y-1/2 -mb-6 sm:-mb-14 md:-mb-20 px-4 sm:px-6 md:px-margin-x max-w-container-max mx-auto">
      <div 
        ref={cardRef}
        className={`bg-white/55 backdrop-blur-2xl rounded-xl sm:rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,38,100,0.14),0_10px_25px_-5px_rgba(0,0,0,0.04)] border border-white/70 ring-1 ring-white/40 p-3.5 sm:p-6 md:p-8 relative overflow-hidden transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-90 translate-y-3"
        }`}
      >
        {/* Liquid Glass Ambient Glow Effect */}
        <div className="absolute -top-24 -left-20 w-72 h-72 bg-gradient-to-br from-white/70 via-white/30 to-transparent rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-gradient-to-tl from-[#f6bf22]/20 via-primary/10 to-transparent rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 divide-y-0 sm:divide-y-0 lg:divide-x divide-gray-200/60">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.id} 
                className={`flex flex-col sm:flex-row items-start gap-2.5 sm:gap-4 ${idx !== 0 ? 'lg:pl-6 md:pl-8' : ''} group cursor-default p-1.5 sm:p-0`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-lg sm:rounded-xl ${stat.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-xs backdrop-blur-md`}>
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-jakarta font-extrabold text-[18px] sm:text-[24px] md:text-[28px] text-[#0f172a] leading-tight tracking-tight group-hover:text-primary transition-colors min-h-[26px] sm:min-h-[36px] flex items-center">
                    <StatCounter 
                      numericValue={stat.numericValue} 
                      suffix={stat.suffix} 
                      textValue={stat.textValue} 
                      isVisible={isVisible} 
                    />
                  </span>
                  <span className="font-inter font-semibold text-[12px] sm:text-[14px] text-gray-800 mt-0.5 leading-snug">
                    {stat.label}
                  </span>
                  <span className="font-inter text-[10.5px] sm:text-[12px] text-body-gray leading-snug mt-0.5 sm:mt-1">
                    {stat.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
