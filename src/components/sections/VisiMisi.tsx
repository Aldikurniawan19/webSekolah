"use client";

import React, { useEffect, useRef, useState } from "react";

interface MissionPoint {
  id: number;
  number: string;
  pillarId: number;
  title: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
}

const missionData: MissionPoint[] = [
  {
    id: 1,
    number: "01",
    pillarId: 1,
    title: "Pembelajaran Aktif, Kreatif & Menyenangkan",
    description: "Menyelenggarakan proses pembelajaran yang aktif, inovatif, kreatif, efektif dan menyenangkan.",
    badge: "Generasi Unggul",
    icon: (
      <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 2,
    number: "02",
    pillarId: 1,
    title: "Persaingan Masuk Perguruan Tinggi Favorit",
    description: "Menyiapkan lulusan yang berkompeten untuk bersaing masuk perguruan tinggi favorit.",
    badge: "Generasi Unggul",
    icon: (
      <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: 3,
    number: "03",
    pillarId: 2,
    title: "Ketaqwaan & Kedisiplinan Pancasila",
    description: "Meningkatkan Ketaqwaan dan kedisiplinan melalui berbagai kegiatan kesiswaan serta kegiatan lain yang berakar pada nilai-nilai Pancasila.",
    badge: "Karakter Pancasila",
    icon: (
      <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: 4,
    number: "04",
    pillarId: 2,
    title: "7 Kebiasaan Anak Indonesia Hebat",
    description: "Membudayakan tujuh kebiasaan anak Indonesia hebat dalam aktivitas kehidupan sehari-hari.",
    badge: "Karakter Pancasila",
    icon: (
      <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    id: 5,
    number: "05",
    pillarId: 1,
    title: "Peningkatan Kualifikasi Tenaga Pendidik",
    description: "Meningkatkan jenjang pendidikan tenaga guru dan tenaga kependidikan agar mampu membina siswa berdaya saing tinggi.",
    badge: "Generasi Unggul",
    icon: (
      <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 6,
    number: "06",
    pillarId: 3,
    title: "Kreativitas & Berpikir Kritis",
    description: "Menyelenggarakan pembelajaran yang mendorong kreativitas, pemecahan masalah, dan berpikir kritis.",
    badge: "Kompetitif & Inovatif",
    icon: (
      <svg className="w-5 h-5 text-[#f6bf22]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-4a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 7,
    number: "07",
    pillarId: 3,
    title: "Integrasi Teknologi Informasi",
    description: "Mengintegrasikan teknologi informasi dalam proses pembelajaran dan administrasi sekolah.",
    badge: "Kompetitif & Inovatif",
    icon: (
      <svg className="w-5 h-5 text-[#f6bf22]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 8,
    number: "08",
    pillarId: 3,
    title: "Literasi, Numerasi & Eksperimen",
    description: "Mengembangkan budaya literasi, numerasi, riset dan eksperimen di kalangan siswa dan guru.",
    badge: "Kompetitif & Inovatif",
    icon: (
      <svg className="w-5 h-5 text-[#f6bf22]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: 9,
    number: "09",
    pillarId: 3,
    title: "Kemitraan Inovasi Pendidikan",
    description: "Membangun kemitraan dengan berbagai pihak untuk mendukung inovasi dalam pendidikan.",
    badge: "Kompetitif & Inovatif",
    icon: (
      <svg className="w-5 h-5 text-[#f6bf22]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 10,
    number: "10",
    pillarId: 4,
    title: "Integrasi Isu-Isu Global",
    description: "Mengintegrasikan isu-isu Global ke dalam proses pembelajaran.",
    badge: "Berwawasan Global",
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11a2 2 0 012-2h1.055M11 20.055V18a2 2 0 012-2h2.245M12 21a9 9 0 100-18 9 9 0 000 18z" />
      </svg>
    )
  },
  {
    id: 11,
    number: "11",
    pillarId: 4,
    title: "Keterampilan Bahasa Internasional",
    description: "Membekali murid dengan keterampilan berbahasa internasional.",
    badge: "Berwawasan Global",
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    id: 12,
    number: "12",
    pillarId: 4,
    title: "Kerja Sama Harmonis Multi-Pihak",
    description: "Menjalin kerja sama yang harmonis dengan orang tua murid, masyarakat, dan instansi-instansi terkait.",
    badge: "Berwawasan Global",
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    )
  }
];

export default function VisiMisi() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Record<number, boolean>>({});
  const [scrollProgress, setScrollProgress] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Main Section Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Scroll Progress Listener for Dynamic Liquid River Flowing Line Animation
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineContainerRef.current) return;
      const rect = timelineContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      
      // Calculate scroll progress percentage through the timeline container
      const currentProgress = (windowHeight * 0.7 - rect.top) / totalHeight;
      const clampedProgress = Math.min(Math.max(currentProgress, 0.05), 1);
      setScrollProgress(clampedProgress * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Individual Journey Card Observer for smooth pop-in one by one
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-card-id");
            if (id) {
              const cardId = parseInt(id, 10);
              setVisibleCards((prev) => ({ ...prev, [cardId]: true }));
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="visi-misi"
      ref={sectionRef}
      className="w-full py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9]/70 to-[#f8fafc] text-on-surface relative overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-sky-200/35 via-amber-100/20 to-transparent blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-container-max mx-auto px-margin-x relative z-10">

        {/* 1. HEADER SECTION */}
        <div className={`flex flex-col items-center text-center max-w-4xl mx-auto mb-12 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
          sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-[#003883] rounded-full"></div>
            <span className="font-bold text-[13px] tracking-widest text-[#003883] uppercase font-jakarta">
              PROFIL SEKOLAH
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-jakarta text-[#003883] tracking-tight">
            Visi &amp; Misi Sekolah
          </h2>
          <p className="font-inter text-[#4b5563] text-sm md:text-base max-w-xl mt-3 leading-relaxed">
            Arah dan komitmen SMA Negeri 2 Tebo dalam membimbing generasi penerus bangsa yang unggul dan berkarakter.
          </p>
        </div>

        {/* 2. VISI STATEMENT (INTEGRATED DIRECTLY ON SECTION BACKGROUND) */}
        <div className={`max-w-4xl mx-auto mb-16 relative text-center px-4 transition-all duration-1000 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
          sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="flex flex-col items-center text-center relative z-10">
            {/* Top Pill Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#003883]/5 border border-[#003883]/15 text-[#003883] font-bold text-xs uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f6bf22] animate-pulse"></span>
              Visi Utama SMAN 2 Tebo
            </span>

            {/* Visi Text Directly on Section Background */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold font-jakarta leading-snug md:leading-relaxed text-[#003883] tracking-tight max-w-3xl mx-auto">
              &ldquo;TERWUJUDNYA GENERASI UNGGUL, BERKARAKTER PANCASILA, KOMPETITIF DAN INOVATIF SERTA BERWAWASAN GLOBAL&rdquo;
            </h3>

            {/* Gold Accent Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#f6bf22] to-transparent mx-auto mt-6 rounded-full"></div>
          </div>
        </div>

        {/* 3. MISI JOURNEY TIMELINE SECTION (SESUAI GAMBAR REFERENSI GAMBAR TEKNINDO/SAGA) */}
        <div className="mt-8">
          
          {/* Header Journey */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003883]/5 text-[#003883] font-bold text-xs uppercase tracking-wider mb-2">
              The Journey of Misi
            </div>
            <h3 className="text-3xl font-extrabold font-jakarta text-[#003883] tracking-tight">
              Rekam Langkah Misi SMAN 2 Tebo
            </h3>
            <p className="font-inter text-slate-500 text-sm mt-2">
              12 komitmen misi terarah yang mengalir secara konsisten untuk mewujudkan visi generasi emas.
            </p>
          </div>

          {/* TIMELINE CONTAINER MATCHING THE USER REFERENCE IMAGE */}
          <div ref={timelineContainerRef} className="relative max-w-4xl mx-auto px-4">
            
            {/* Background Static Timeline Guide Line */}
            <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1.5 bg-slate-300/50 transform -translate-x-1/2 rounded-full z-0"></div>

            {/* FLOWING WATER ANIMATED LIQUID STREAM LINE (BEHIND THE ICONS) */}
            <div 
              className="absolute left-6 md:left-1/2 top-4 w-1.5 bg-gradient-to-b from-[#003883] via-sky-400 via-[#f6bf22] to-emerald-400 transform -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.7)] transition-all duration-300 ease-out z-0"
              style={{ height: `${scrollProgress}%` }}
            >
              {/* Dynamic Animated Flowing Water Drop Leading Particle */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-2 border-white shadow-[0_0_15px_#38bdf8] animate-ping"></div>
              <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-sky-300 border-2 border-white shadow-[0_0_10px_#38bdf8]"></div>
            </div>

            {/* Alternating Journey Cards (Left & Right) */}
            <div className="space-y-12 relative z-10">
              {missionData.map((item, index) => {
                const isEven = index % 2 === 0; // Even items go RIGHT, Odd items go LEFT on desktop
                const isCardVisible = visibleCards[item.id];

                return (
                  <div
                    key={item.id}
                    data-card-id={item.id}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    className={`flex flex-col md:flex-row items-center relative transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isCardVisible
                        ? "opacity-100 translate-y-0 scale-100"
                        : `opacity-0 translate-y-12 scale-95 ${
                            isEven ? "md:translate-x-10" : "md:-translate-x-10"
                          }`
                    }`}
                  >
                    {/* LEFT / RIGHT CONTAINER */}
                    <div className={`w-full md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12 md:text-left"} pl-14 md:pl-0 mb-4 md:mb-0`}>
                      <div className="bg-[#111c35] text-white rounded-2xl p-6 md:p-7 border border-slate-700/60 shadow-xl hover:border-sky-400/50 hover:shadow-sky-900/20 transition-all duration-500 group relative">
                        {/* Top Number Badge matching Reference Image */}
                        <div className={`flex items-center flex-wrap sm:flex-nowrap gap-2 mb-3 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                          <span className="bg-sky-500 text-white font-extrabold text-[10px] sm:text-[11px] px-2.5 py-0.5 sm:py-1 rounded-md tracking-wider uppercase shadow-sm whitespace-nowrap flex-shrink-0">
                            MISI {item.number}
                          </span>
                          <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium whitespace-nowrap">
                            {item.badge}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="font-jakarta font-bold text-lg text-white mb-2 group-hover:text-sky-300 transition-colors leading-snug">
                          {item.title}
                        </h4>

                        {/* Description */}
                        <p className="font-inter text-xs md:text-sm text-slate-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* CENTER NODE ICON CIRCLE SIT STRICTLY ON TOP OF THE LINE (z-30) */}
                    <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-30">
                      <div className={`w-10 h-10 rounded-full bg-[#003883] text-white flex items-center justify-center shadow-lg border-2 border-white transition-all duration-500 ${
                        isCardVisible ? "scale-100 shadow-[0_0_20px_rgba(56,189,248,0.7)] ring-4 ring-sky-400/30" : "scale-75 opacity-50"
                      }`}>
                        {item.icon}
                      </div>
                    </div>

                    {/* RIGHT SPACER FOR ALTERNATING LAYOUT */}
                    <div className={`hidden md:block w-1/2 ${isEven ? "order-2" : "order-1"}`}></div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* 4. BOTTOM CONCLUSION BANNER */}
        <div className="mt-20 max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm text-center">
          <h4 className="font-jakarta font-bold text-lg text-[#003883] mb-1.5">
            Komitmen Terarah Menuju Masa Depan
          </h4>
          <p className="font-inter text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Melalui rekam perjalanan 12 Misi ini, SMA Negeri 2 Tebo berkomitmen melahirkan lulusan yang berakhlak mulia, cerdas, dan siap bersaing di kancah nasional maupun internasional.
          </p>
        </div>

      </div>
    </section>
  );
}
