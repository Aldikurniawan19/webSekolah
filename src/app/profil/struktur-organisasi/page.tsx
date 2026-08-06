"use client";

import React, { useEffect, useRef, useState } from "react";

/* ───────────── TYPES ───────────── */
interface OrgMember {
  id: string;
  name: string;
  role: string;
  nip?: string;
}

/* ───────────── DATA ───────────── */
const komiteSekolah: OrgMember = {
  id: "komite",
  name: "Komite Sekolah",
  role: "Komite Sekolah",
};

const kepalaSekolah: OrgMember = {
  id: "kepsek",
  name: "H. Idris Ade, S.Pd., M.Si.",
  role: "Kepala Sekolah",
  nip: "NIP. 196812311994031023",
};

const wakilKepala: OrgMember[] = [
  {
    id: "waka-kurikulum",
    name: "Nama Wakil Kurikulum",
    role: "Waka Kurikulum",
  },
  {
    id: "waka-kesiswaan",
    name: "Nama Wakil Kesiswaan",
    role: "Waka Kesiswaan",
  },
  {
    id: "waka-sarpras",
    name: "Nama Wakil Sarpras",
    role: "Waka Sarana & Prasarana",
  },
  {
    id: "waka-humas",
    name: "Nama Wakil Humas",
    role: "Waka Hubungan Masyarakat",
  },
];

const stafPendukung: OrgMember[] = [
  { id: "tu", name: "Nama Kepala TU", role: "Kepala Tata Usaha" },
  { id: "bendahara", name: "Nama Bendahara", role: "Bendahara" },
  { id: "perpus", name: "Nama Kepala Perpustakaan", role: "Kepala Perpustakaan" },
  { id: "lab", name: "Nama Kepala Lab", role: "Kepala Laboratorium" },
];

const guruBK: OrgMember = {
  id: "bk",
  name: "Nama Guru BK",
  role: "Koordinator BK",
};

const waliKelas: OrgMember[] = [
  { id: "wali-x", name: "Wali Kelas X", role: "Wali Kelas X" },
  { id: "wali-xi", name: "Wali Kelas XI", role: "Wali Kelas XI" },
  { id: "wali-xii", name: "Wali Kelas XII", role: "Wali Kelas XII" },
];

/* ───────────── USER AVATAR ICON ───────────── */
function UserAvatar({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={`rounded-full bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 flex items-center justify-center flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size * 0.55}
        height={size * 0.55}
        viewBox="0 0 24 24"
        fill="none"
        className="text-slate-400"
      >
        <path
          d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

/* ───────────── ORG CARD COMPONENT ───────────── */
interface OrgCardProps {
  member: OrgMember;
  variant?: "primary" | "secondary" | "accent" | "default";
  avatarSize?: number;
  isVisible?: boolean;
  delay?: number;
}

function OrgCard({ member, variant = "default", avatarSize = 56, isVisible = true, delay = 0 }: OrgCardProps) {
  const variantStyles: Record<string, string> = {
    primary:
      "bg-gradient-to-br from-[#003883] to-[#1e4fa3] text-white border-[#003883]/30 shadow-[0_8px_32px_rgba(0,56,131,0.25)]",
    secondary:
      "bg-gradient-to-br from-[#0d1f3c] to-[#162d50] text-white border-slate-600/30 shadow-[0_8px_32px_rgba(13,31,60,0.3)]",
    accent:
      "bg-white/80 backdrop-blur-xl border-[#f6bf22]/40 shadow-[0_8px_24px_rgba(246,191,34,0.12)]",
    default:
      "bg-white/70 backdrop-blur-xl border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.04)]",
  };

  const nameColor: Record<string, string> = {
    primary: "text-white",
    secondary: "text-white",
    accent: "text-[#181c1f]",
    default: "text-[#181c1f]",
  };

  const roleColor: Record<string, string> = {
    primary: "text-sky-200",
    secondary: "text-slate-300",
    accent: "text-[#003883]",
    default: "text-[#4b5563]",
  };

  const avatarBorder: Record<string, string> = {
    primary: "ring-2 ring-white/30",
    secondary: "ring-2 ring-sky-400/30",
    accent: "ring-2 ring-[#f6bf22]/40",
    default: "ring-2 ring-slate-200/60",
  };

  return (
    <div
      className={`
        relative rounded-2xl border p-5 flex flex-col items-center text-center
        transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:scale-[1.03] hover:-translate-y-1
        ${variantStyles[variant]}
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Subtle shimmer accent for primary */}
      {variant === "primary" && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 animate-[shimmer_4s_ease-in-out_infinite]" />
        </div>
      )}

      <UserAvatar size={avatarSize} className={`mb-3 ${avatarBorder[variant]}`} />

      <h3 className={`font-jakarta font-bold text-sm leading-snug ${nameColor[variant]}`}>
        {member.name}
      </h3>

      <span
        className={`mt-1 text-[11px] font-semibold uppercase tracking-wider ${roleColor[variant]}`}
      >
        {member.role}
      </span>

      {member.nip && (
        <span className={`mt-0.5 text-[10px] ${variant === "primary" || variant === "secondary" ? "text-white/50" : "text-slate-400"}`}>
          {member.nip}
        </span>
      )}
    </div>
  );
}

/* ───────────── CONNECTOR LINE ───────────── */
function VerticalConnector({ height = 40, isVisible = true, delay = 0 }: { height?: number; isVisible?: boolean; delay?: number }) {
  return (
    <div className="flex justify-center" style={{ transitionDelay: `${delay}ms` }}>
      <div
        className={`w-[2px] bg-gradient-to-b from-[#003883]/40 to-slate-300/40 rounded-full transition-all duration-700 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ height }}
      />
    </div>
  );
}

function HorizontalBranch({ isVisible = true, delay = 0 }: { isVisible?: boolean; delay?: number }) {
  return (
    <div
      className={`hidden md:block w-full h-[2px] bg-gradient-to-r from-transparent via-[#003883]/25 to-transparent transition-all duration-700 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    />
  );
}

/* ───────────── SECTION LABEL ───────────── */
function SectionLabel({ label, isVisible = true, delay = 0 }: { label: string; isVisible?: boolean; delay?: number }) {
  return (
    <div
      className={`flex justify-center transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#003883]/5 border border-[#003883]/10 text-[#003883] font-bold text-[10px] uppercase tracking-widest">
        <span className="w-1.5 h-1.5 rounded-full bg-[#f6bf22]" />
        {label}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */
export default function StrukturOrganisasiPage() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen py-12 md:py-20 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9]/60 to-[#f8fafc] text-on-surface relative overflow-hidden"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-100/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-100/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-sky-50/40 via-transparent to-amber-50/30 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── PAGE HEADER ── */}
        <div
          className={`flex flex-col items-center text-center mb-14 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col items-center mb-3">
            <span className="w-10 h-[3px] bg-[#f6bf22] mb-2 rounded-full" />
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-widest text-[#f6bf22]">
              PROFIL SMAN 2 TEBO
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-jakarta text-[#003883] tracking-tight">
            Struktur Organisasi
          </h1>
          <p className="font-inter text-[#4b5563] text-sm md:text-base max-w-xl mt-3 leading-relaxed">
            Bagan struktur organisasi sekolah yang menunjukkan garis koordinasi dan hierarki kepemimpinan di SMA Negeri 2 Tebo.
          </p>
        </div>

        {/* ═══════════ ORG CHART TREE ═══════════ */}
        <div className="flex flex-col items-center">

          {/* ── TIER 1: Kepala Sekolah + Komite ── */}
          <SectionLabel label="Pimpinan Sekolah" isVisible={sectionVisible} delay={100} />
          <VerticalConnector height={28} isVisible={sectionVisible} delay={150} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl items-end">
            {/* Komite Sekolah – left */}
            <div className="flex flex-col items-center">
              <OrgCard member={komiteSekolah} variant="accent" avatarSize={48} isVisible={sectionVisible} delay={250} />
              {/* Dashed connector to Kepala Sekolah (visible on md+) */}
              <div className="hidden md:flex items-center justify-end w-full mt-[-28px]">
                <div className="w-1/2 h-[2px] border-t-2 border-dashed border-[#f6bf22]/50" />
              </div>
            </div>

            {/* Kepala Sekolah – center */}
            <div className="flex flex-col items-center">
              <OrgCard member={kepalaSekolah} variant="primary" avatarSize={64} isVisible={sectionVisible} delay={200} />
            </div>

            {/* Empty right for symmetry */}
            <div className="hidden md:block" />
          </div>

          {/* ── CONNECTOR TO TIER 2 ── */}
          <VerticalConnector height={40} isVisible={sectionVisible} delay={350} />
          <HorizontalBranch isVisible={sectionVisible} delay={400} />

          {/* ── TIER 2: Wakil Kepala Sekolah ── */}
          <SectionLabel label="Wakil Kepala Sekolah" isVisible={sectionVisible} delay={420} />
          <VerticalConnector height={24} isVisible={sectionVisible} delay={440} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {wakilKepala.map((wk, i) => (
              <div key={wk.id} className="flex flex-col items-center">
                {/* Vertical tick connector */}
                <div className="hidden lg:block w-[2px] h-4 bg-[#003883]/20 rounded-full" />
                <OrgCard member={wk} variant="secondary" avatarSize={48} isVisible={sectionVisible} delay={460 + i * 80} />
              </div>
            ))}
          </div>

          {/* ── CONNECTOR TO TIER 3 ── */}
          <VerticalConnector height={40} isVisible={sectionVisible} delay={780} />
          <HorizontalBranch isVisible={sectionVisible} delay={800} />

          {/* ── TIER 3: Staf Pendukung ── */}
          <SectionLabel label="Staf Pendukung" isVisible={sectionVisible} delay={820} />
          <VerticalConnector height={24} isVisible={sectionVisible} delay={840} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {stafPendukung.map((sp, i) => (
              <div key={sp.id} className="flex flex-col items-center">
                <div className="hidden lg:block w-[2px] h-4 bg-slate-300/50 rounded-full" />
                <OrgCard member={sp} variant="default" avatarSize={44} isVisible={sectionVisible} delay={860 + i * 80} />
              </div>
            ))}
          </div>

          {/* ── CONNECTOR TO TIER 4 ── */}
          <VerticalConnector height={40} isVisible={sectionVisible} delay={1180} />

          {/* ── TIER 4: Guru BK ── */}
          <SectionLabel label="Bimbingan Konseling" isVisible={sectionVisible} delay={1200} />
          <VerticalConnector height={24} isVisible={sectionVisible} delay={1220} />

          <div className="w-full max-w-xs">
            <OrgCard member={guruBK} variant="accent" avatarSize={44} isVisible={sectionVisible} delay={1260} />
          </div>

          {/* ── CONNECTOR TO TIER 5 ── */}
          <VerticalConnector height={40} isVisible={sectionVisible} delay={1320} />
          <HorizontalBranch isVisible={sectionVisible} delay={1340} />

          {/* ── TIER 5: Wali Kelas ── */}
          <SectionLabel label="Wali Kelas" isVisible={sectionVisible} delay={1360} />
          <VerticalConnector height={24} isVisible={sectionVisible} delay={1380} />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
            {waliKelas.map((wk, i) => (
              <div key={wk.id} className="flex flex-col items-center">
                <div className="hidden sm:block w-[2px] h-4 bg-slate-300/50 rounded-full" />
                <OrgCard member={wk} variant="default" avatarSize={40} isVisible={sectionVisible} delay={1400 + i * 80} />
              </div>
            ))}
          </div>

          {/* ── CONNECTOR TO BOTTOM ── */}
          <VerticalConnector height={40} isVisible={sectionVisible} delay={1640} />

          {/* ── BOTTOM: Siswa/i ── */}
          <div
            className={`w-full max-w-md bg-gradient-to-r from-[#003883] via-[#1e4fa3] to-[#003883] rounded-2xl p-5 text-center transition-all duration-700 ease-out ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "1680ms" }}
          >
            <div className="flex items-center justify-center gap-3 mb-1">
              <svg className="w-5 h-5 text-[#f6bf22]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="font-jakarta font-bold text-lg text-white">Siswa/i SMAN 2 Tebo</h3>
            </div>
            <p className="font-inter text-sky-200 text-xs">
              Seluruh peserta didik yang dibimbing oleh struktur organisasi sekolah
            </p>
          </div>
        </div>

        {/* ── FOOTER NOTE ── */}
        <div
          className={`mt-16 max-w-2xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 text-center transition-all duration-700 ease-out ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1800ms" }}
        >
          <p className="font-inter text-xs text-slate-500 leading-relaxed">
            <span className="font-semibold text-[#003883]">Catatan:</span>{" "}
            Struktur organisasi ini menggambarkan hierarki koordinasi dan garis komando di SMA Negeri 2 Tebo. 
            Setiap jabatan memiliki tugas dan tanggung jawab yang saling terhubung untuk mendukung visi dan misi sekolah.
          </p>
        </div>
      </div>
    </div>
  );
}
