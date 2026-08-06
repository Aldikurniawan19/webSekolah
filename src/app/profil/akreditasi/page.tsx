"use client";

import React from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

/* ───────────── TYPES ───────────── */
interface AkreditasiRecord {
  id: number;
  tahun: string;
  noSK: string;
  tanggalAwalSK: string;
  tanggalAkhirSK: string;
  peringkat: string;
  nilaiAkhir?: string;
  isCurrent: boolean;
}

/* ───────────── DATA ───────────── */
const akreditasiData: AkreditasiRecord[] = [
  {
    id: 1,
    tahun: "2021",
    noSK: "1346/BAN-SM/SK/2021",
    tanggalAwalSK: "08 Desember 2021",
    tanggalAkhirSK: "21 Desember 2026",
    peringkat: "A",
    nilaiAkhir: "93",
    isCurrent: true,
  },
];

/* ───────────── DETAIL ITEM ───────────── */
function DetailItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100/80 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all duration-300">
      <div className="w-10 h-10 rounded-xl bg-[#003883]/5 text-[#003883] flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-inter">
          {label}
        </span>
        <span className="text-sm sm:text-[15px] font-bold text-[#0f172a] font-jakarta truncate">
          {value}
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */
export default function AkreditasiPage() {
  const [headerRef] = useScrollReveal({ variant: "fade-up", duration: 700 });
  const [cardRef] = useScrollReveal({ variant: "zoom-in", duration: 800, delay: 150 });
  const [sourceRef] = useScrollReveal({ variant: "fade-up", duration: 600, delay: 300 });

  const currentAkreditasi = akreditasiData.find((a) => a.isCurrent);

  return (
    <div className="w-full min-h-screen py-12 md:py-20 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9]/60 to-[#f8fafc] text-on-surface relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-sky-100/30 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── PAGE HEADER ── */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-12">
          <div className="flex flex-col items-center mb-3">
            <span className="w-10 h-[3px] bg-[#f6bf22] mb-2 rounded-full" />
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-widest text-[#f6bf22]">
              PROFIL SMAN 2 TEBO
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-jakarta text-[#003883] tracking-tight">
            Akreditasi Sekolah
          </h1>
          <p className="font-inter text-[#4b5563] text-sm md:text-base max-w-2xl mt-3 leading-relaxed">
            SMA Negeri 2 Tebo secara resmi memperoleh predikat <span className="font-bold text-[#003883]">Akreditasi A</span> dari Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M).
          </p>
        </div>

        {/* ── MODERN CLEAN AKREDITASI CARD ── */}
        {currentAkreditasi && (
          <div ref={cardRef} className="max-w-2xl mx-auto">
            <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl border border-slate-200/80 shadow-[0_20px_50px_-15px_rgba(0,56,131,0.08)] overflow-hidden transition-all duration-500 hover:shadow-[0_25px_60px_-12px_rgba(0,56,131,0.14)]">

              {/* Accent Top Gradient Line */}
              <div className="w-full h-1.5 bg-gradient-to-r from-[#003883] via-[#f6bf22] to-[#003883]" />

              <div className="p-6 sm:p-10">
                
                {/* Header: Title + Status + Grade Badge */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 mb-8 text-center sm:text-left">
                  <div className="flex flex-col items-center sm:items-start">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold uppercase tracking-wider shadow-2xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Status: Berlaku
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black font-jakarta text-[#0f172a] tracking-tight">
                      TAHUN {currentAkreditasi.tahun}
                    </h2>
                    <p className="text-xs text-slate-500 mt-1 font-inter">
                      Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M)
                    </p>
                  </div>

                  {/* Grade Badge */}
                  <div className="relative group flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-[#f6bf22] opacity-30 blur-xl group-hover:opacity-50 transition-opacity" />
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#f6bf22] via-[#e8b510] to-[#d4a017] flex flex-col items-center justify-center text-white shadow-[0_10px_30px_rgba(246,191,34,0.35)] border-4 border-white">
                      <span className="text-4xl font-black font-jakarta drop-shadow-sm leading-none">
                        {currentAkreditasi.peringkat}
                      </span>
                      <span className="text-[9px] font-bold tracking-widest uppercase opacity-90 mt-0.5">
                        Unggul
                      </span>
                    </div>
                  </div>
                </div>

                {/* Horizontal Divider */}
                <div className="w-full h-px bg-slate-100 mb-6" />

                {/* Details Grid (2 Columns on sm+) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  <DetailItem
                    label="No. SK Akreditasi"
                    value={currentAkreditasi.noSK}
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    }
                  />

                  <DetailItem
                    label="Peringkat"
                    value={`Predikat ${currentAkreditasi.peringkat} (Sangat Memuaskan)`}
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    }
                  />

                  <DetailItem
                    label="Tanggal Awal SK"
                    value={currentAkreditasi.tanggalAwalSK}
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    }
                  />

                  <DetailItem
                    label="Tanggal Akhir SK"
                    value={currentAkreditasi.tanggalAkhirSK}
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    }
                  />

                  {currentAkreditasi.nilaiAkhir && (
                    <div className="sm:col-span-2">
                      <DetailItem
                        label="Nilai Akhir Akreditasi"
                        value={`${currentAkreditasi.nilaiAkhir} / 100`}
                        icon={
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        }
                      />
                    </div>
                  )}
                </div>

                {/* Download CTA Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <a
                    href="#"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#003883] hover:bg-[#1e4fa3] text-white font-bold text-sm rounded-2xl shadow-[0_8px_25px_rgba(0,56,131,0.22)] hover:shadow-[0_12px_30px_rgba(0,56,131,0.35)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    UNDUH SERTIFIKAT AKREDITASI
                  </a>

                  <span className="text-xs text-slate-400 font-inter">
                    Format: PDF (Resmi BAN-S/M)
                  </span>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ── SOURCE FOOTER ── */}
        <div ref={sourceRef} className="mt-12 text-center">
          <p className="font-inter text-xs text-slate-400">
            Sumber Informasi Resmi:{" "}
            <a
              href="https://bansm.kemdikbud.go.id/akreditasi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#003883] hover:text-[#1e4fa3] font-semibold underline underline-offset-2 transition-colors"
            >
              https://bansm.kemdikbud.go.id/akreditasi
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}
