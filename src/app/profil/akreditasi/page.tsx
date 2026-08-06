"use client";

import React, { useEffect, useRef, useState } from "react";

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
  // Tambahkan record akreditasi sebelumnya di sini jika ada
  // {
  //   id: 2,
  //   tahun: "2016",
  //   noSK: "xxxx/BAN-SM/SK/2016",
  //   tanggalAwalSK: "...",
  //   tanggalAkhirSK: "...",
  //   peringkat: "A",
  //   nilaiAkhir: "89",
  //   isCurrent: false,
  // },
];

/* ───────────── GRADE BADGE ───────────── */
function GradeBadge({ grade, size = "lg" }: { grade: string; size?: "lg" | "sm" }) {
  const sizeClasses = size === "lg" ? "w-24 h-24 text-5xl" : "w-14 h-14 text-2xl";

  return (
    <div className={`relative ${sizeClasses} flex items-center justify-center`}>
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f6bf22] via-[#e0ad1b] to-[#d4a017] opacity-20 blur-lg animate-pulse" />
      {/* Main circle */}
      <div className={`relative ${sizeClasses} rounded-full bg-gradient-to-br from-[#f6bf22] via-[#e8b510] to-[#d4a017] flex items-center justify-center shadow-[0_4px_24px_rgba(246,191,34,0.4)]`}>
        <span className="font-jakarta font-black text-white drop-shadow-md">{grade}</span>
      </div>
      {/* Shine overlay */}
      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-to-b from-white/30 to-transparent rounded-full blur-sm" />
      </div>
    </div>
  );
}

/* ───────────── DETAIL ROW ───────────── */
function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-3 py-2.5 border-b border-white/[0.06] last:border-b-0">
      <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 sm:w-36 flex-shrink-0">
        {label}
      </span>
      <span className="text-sm font-semibold text-white font-inter">{value}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */
export default function AkreditasiPage() {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const currentAkreditasi = akreditasiData.find((a) => a.isCurrent);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen py-12 md:py-20 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9]/60 to-[#f8fafc] text-on-surface relative overflow-hidden"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-100/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-sky-100/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── PAGE HEADER ── */}
        <div
          className={`flex flex-col items-center text-center mb-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
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
            Akreditasi SMA Negeri 2 Tebo memperoleh predikat <span className="font-bold text-[#003883]">A</span> dengan nilai perolehan yang sangat memuaskan. 
            Ini adalah buah dari kerja keras seluruh warga SMA Negeri 2 Tebo, baik pihak guru maupun siswa.
          </p>
        </div>

        {/* ── MAIN AKREDITASI CARD ── */}
        {currentAkreditasi && (
          <div
            className={`relative max-w-2xl mx-auto transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Card */}
            <div className="relative bg-gradient-to-br from-[#0a1628] via-[#0f1f3d] to-[#0d1a30] rounded-3xl overflow-hidden border border-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              
              {/* Subtle grid pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '24px 24px',
              }} />

              {/* Top accent line */}
              <div className="w-full h-1 bg-gradient-to-r from-[#003883] via-[#f6bf22] to-[#003883]" />

              <div className="p-6 sm:p-8 md:p-10">
                
                {/* Header row: Year + Grade Badge */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 mb-8">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Berlaku
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black font-jakarta text-white tracking-tight">
                      TAHUN {currentAkreditasi.tahun}
                    </h2>
                    <p className="text-xs text-slate-500 mt-1 font-inter">
                      Badan Akreditasi Nasional Sekolah/Madrasah (BAN-SM)
                    </p>
                  </div>

                  <GradeBadge grade={currentAkreditasi.peringkat} />
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

                {/* Details Grid */}
                <div className="space-y-0">
                  <DetailRow label="No. SK" value={currentAkreditasi.noSK} />
                  <DetailRow label="Tanggal Awal SK" value={currentAkreditasi.tanggalAwalSK} />
                  <DetailRow label="Tanggal Akhir SK" value={currentAkreditasi.tanggalAkhirSK} />
                  <DetailRow label="Peringkat" value={currentAkreditasi.peringkat} />
                  {currentAkreditasi.nilaiAkhir && (
                    <DetailRow label="Nilai Akhir" value={currentAkreditasi.nilaiAkhir} />
                  )}
                </div>

                {/* Download Button */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#f6bf22] to-[#e0ad1b] text-[#1a1400] font-bold text-sm rounded-xl shadow-[0_4px_16px_rgba(246,191,34,0.35)] hover:shadow-[0_6px_24px_rgba(246,191,34,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    UNDUH SERTIFIKAT AKREDITASI
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── RIWAYAT AKREDITASI (jika ada lebih dari 1) ── */}
        {akreditasiData.filter((a) => !a.isCurrent).length > 0 && (
          <div
            className={`mt-14 transition-all duration-1000 delay-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-center text-lg font-bold font-jakarta text-[#003883] mb-6">
              Riwayat Akreditasi Sebelumnya
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {akreditasiData
                .filter((a) => !a.isCurrent)
                .map((record) => (
                  <div
                    key={record.id}
                    className="bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200/60 p-5 flex items-center gap-4 hover:shadow-md transition-all duration-300"
                  >
                    <GradeBadge grade={record.peringkat} size="sm" />
                    <div>
                      <h4 className="font-jakarta font-bold text-sm text-[#181c1f]">
                        Tahun {record.tahun}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-inter mt-0.5">
                        {record.noSK}
                      </p>
                      <p className="text-[11px] text-slate-400 font-inter">
                        {record.tanggalAwalSK} — {record.tanggalAkhirSK}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* ── SOURCE LINK ── */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-inter text-xs text-slate-400">
            Sumber:{" "}
            <a
              href="https://bansm.kemdikbud.go.id/akreditasi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#003883] hover:text-[#1e4fa3] underline underline-offset-2 transition-colors"
            >
              https://bansm.kemdikbud.go.id/akreditasi
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}
