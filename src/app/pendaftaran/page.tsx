"use client";

import React, { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import {
  FileText,
  CheckCircle2,
  Calendar,
  Clock,
  UserCheck,
  Award,
  Users,
  MapPin,
  HelpCircle,
  Download,
  Send,
  X,
  ChevronRight,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Check,
  PhoneCall,
  Laptop,
  ArrowRight,
  FileCheck,
  UserPlus,
  BookOpen,
} from "lucide-react";

interface PpdbTrack {
  name: string;
  quota: string;
  percentage: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: React.ElementType;
  description: string;
  criteria: string[];
}

const ppdbTracks: PpdbTrack[] = [
  {
    name: "Jalur Zonasi",
    quota: "160 Siswa",
    percentage: "50%",
    color: "text-[#003883]",
    bgColor: "bg-blue-50/80",
    borderColor: "border-blue-200",
    icon: MapPin,
    description: "Jalur penerimaan berdasarkan jarak terdekat tempat tinggal domisili calon peserta didik ke SMAN 2 Tebo.",
    criteria: [
      "Domisili berdasarkan Kartu Keluarga (KK) yang diterbitkan minimal 1 tahun sebelum PPDB",
      "Memiliki Kartu Keluarga asli wilayah Kabupaten Tebo & sekitarnya",
      "Perhitungan jarak menggunakan sistem koordinat geospasial resmi",
    ],
  },
  {
    name: "Jalur Prestasi",
    quota: "96 Siswa",
    percentage: "30%",
    color: "text-amber-600",
    bgColor: "bg-amber-50/80",
    borderColor: "border-amber-200",
    icon: Award,
    description: "Diperuntukkan bagi calon siswa berprestasi di bidang akademik (Rapor/OSN) maupun non-akademik (FLS2N, O2SN, Tahfidz).",
    criteria: [
      "Prestasi Akademik: Rata-rata nilai rapor semester 1–5 minimal 85.00",
      "Prestasi Non-Akademik: Juara 1, 2, atau 3 kejuaraan minimal tingkat Kabupaten",
      "Sertifikat Tahfidz Al-Qur'an (minimal 3 Juz tersertifikasi)",
    ],
  },
  {
    name: "Jalur Afirmasi",
    quota: "48 Siswa",
    percentage: "15%",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50/80",
    borderColor: "border-emerald-200",
    icon: Users,
    description: "Jalur dukungan bagi calon peserta didik dari keluarga ekonomi tidak mampu dan penyandang disabilitas ringan.",
    criteria: [
      "Pemegang Kartu Indonesia Pintar (KIP), PKH, atau Kartu Keluarga Sejahtera (KKS)",
      "Terdaftar dalam Data Terpadu Kesejahteraan Sosial (DTKS) Kemensos",
      "Surat Pernyataan Tanggung Jawab Mutlak (SPTJM) dari Orang Tua",
    ],
  },
  {
    name: "Jalur Perpindahan Tugas",
    quota: "16 Siswa",
    percentage: "5%",
    color: "text-purple-600",
    bgColor: "bg-purple-50/80",
    borderColor: "border-purple-200",
    icon: UserCheck,
    description: "Bagi calon peserta didik yang mengikuti orang tua/wali berpindah tugas dinas atau instansi ke wilayah Tebo.",
    criteria: [
      "Surat keputusan penugasan resmi dari instansi/lembaga/perusahaan",
      "Surat keterangan pindah domisili dari Dinas Dukcapil",
      "Diutamakan untuk anak kandung tenaga pendidik/kependidikan SMAN 2 Tebo",
    ],
  },
];

const timelineSteps = [
  {
    step: "01",
    title: "Persiapan Dokumen & Berkas",
    period: "1 Mei – 14 Mei 2026",
    status: "Selesai",
    statusColor: "bg-[#003883] text-[#003883]",
    description: "Calon peserta didik menyiapkan scan dokumen persyaratan (KK, SKL/Ijazah, Akta Kelahiran, Pasfoto, dan Rapor/Sertifikat Prestasi).",
    icon: FileText,
  },
  {
    step: "02",
    title: "Pendaftaran Online & Unggah Berkas",
    period: "15 Mei – 25 Juni 2026",
    status: "Gelombang 1 Dibuka",
    statusColor: "bg-[#f6bf22] text-[#251a00]",
    description: "Mengisi formulir registrasi akun pada portal online PPDB, memilih jalur pendaftaran, dan mengunggah dokumen digital.",
    icon: Laptop,
  },
  {
    step: "03",
    title: "Verifikasi Berkas & Validasi Panitia",
    period: "26 Juni – 30 Juni 2026",
    status: "Mendatang",
    statusColor: "bg-slate-200 text-slate-700",
    description: "Tim verifikator PPDB SMAN 2 Tebo memverifikasi validitas berkas fisik/digital dan mengukur jarak zonasi.",
    icon: FileCheck,
  },
  {
    step: "04",
    title: "Pengumuman Kelulusan Seleksi",
    period: "2 Juli 2026 (Pukul 09.00 WIB)",
    status: "Mendatang",
    statusColor: "bg-slate-200 text-slate-700",
    description: "Pengumuman hasil seleksi akhir diumumkan secara terbuka pada portal online PPDB dan papan pengumuman sekolah.",
    icon: Award,
  },
  {
    step: "05",
    title: "Daftar Ulang & Orientasi MPLS",
    period: "3 Juli – 8 Juli 2026",
    status: "Mendatang",
    statusColor: "bg-slate-200 text-slate-700",
    description: "Calon siswa baru yang diterima melakukan verifikasi fisik daftar ulang serta persiapan ikuti Masa Pengenalan Lingkungan Sekolah.",
    icon: UserPlus,
  },
];

const requirementsChecklist = [
  "Fotokopi Surat Keterangan Lulus (SKL) / Ijazah SMP/MTs Legalisir (2 lembar)",
  "Fotokopi Kartu Keluarga (KK) diterbitkan minimal 1 tahun (2 lembar)",
  "Fotokopi Akta Kelahiran & KTP Orang Tua/Wali (2 lembar)",
  "Pasfoto Berwarna Ukuran 3x4 cm latar belakang Merah/Biru (4 lembar)",
  "Fotokopi Rapor SMP/MTs Semester 1 s.d. 5 (Khusus Jalur Prestasi Rapor)",
  "Sertifikat / Piagam Kejuaraan Asli & Fotokopi (Khusus Jalur Prestasi Non-Akademik)",
  "Kartu KIP / PKH / KKS Asli & Fotokopi (Khusus Jalur Afirmasi)",
  "Surat Penugasan Pindah Orang Tua Asli (Khusus Jalur Perpindahan Tugas)",
];

export default function PendaftaranPage() {
  const [headerRef, , headerStyle] = useScrollReveal({ variant: "fade-up", duration: 700 });
  const [bannerRef, , bannerStyle] = useScrollReveal({ variant: "fade-up", duration: 700, delay: 100 });
  const [tracksRef, , tracksStyle] = useScrollReveal({ variant: "fade-up", duration: 800, delay: 150 });
  const [timelineRef, , timelineStyle] = useScrollReveal({ variant: "fade-up", duration: 800, delay: 200 });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [selectedTrack, setSelectedTrack] = useState<string>("Jalur Zonasi");

  const [formData, setFormData] = useState({
    fullName: "",
    nisn: "",
    originSchool: "",
    trackChoice: "Jalur Zonasi",
    phone: "",
    address: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        fullName: "",
        nisn: "",
        originSchool: "",
        trackChoice: "Jalur Zonasi",
        phone: "",
        address: "",
      });
    }, 2500);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-6 sm:pt-10 md:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Badge & Page Title */}
        <div ref={headerRef} style={headerStyle} className="flex flex-col items-center text-center mb-10">
          <div className="flex flex-col items-center mb-2">
            <span className="w-10 h-[3px] bg-[#f6bf22] mb-2 rounded-full"></span>
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-widest text-[#f6bf22]">
              PENERIMAAN PESERTA DIDIK BARU (PPDB) 2026/2027
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-jakarta text-[#003883] tracking-tight relative inline-block">
            <span className="relative z-10">
              Info Pendaftaran{" "}
              <span className="relative inline-block text-[#003883]">
                PPDB SMAN 2 TEBO
                <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#f6bf22] -z-10 rounded-full"></span>
              </span>
            </span>
          </h1>
          <p className="mt-3.5 max-w-2xl font-inter text-[#475569] text-sm sm:text-base leading-relaxed">
            Bergabunglah menjadi bagian dari keluarga besar SMA Negeri 2 Tebo. Siapkan masa depanmu dengan pendidikan berkualitas, berkarakter, dan berdaya saing tinggi.
          </p>
        </div>

        {/* Primary Banner Registration Status Card */}
        <div ref={bannerRef} style={bannerStyle} className="bg-gradient-to-br from-[#003883] via-[#1e4fa3] to-[#002860] rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-12 relative overflow-hidden">
          
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-[#f6bf22]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#f6bf22] text-[#251a00] font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-md">
                <Sparkles className="w-4 h-4 text-[#251a00]" />
                STATUS PPDB: GELOMBANG 1 RESMI DIBUKA
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-jakarta text-white tracking-tight leading-tight">
                Penerimaan Siswa Baru Tahun Ajaran 2026/2027
              </h2>

              <p className="text-xs sm:text-sm text-blue-100/90 font-inter leading-relaxed max-w-2xl">
                Proses pendaftaran diselenggarakan secara online, transparan, objektif, dan akuntabel sesuai Petunjuk Teknis PPDB Dinas Pendidikan Provinsi Jambi.
              </p>

              {/* Schedule Quick Info Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15">
                  <span className="text-[11px] font-bold text-[#f6bf22] block uppercase tracking-wider">Pendaftaran Online</span>
                  <span className="text-xs sm:text-sm font-bold text-white font-inter">15 Mei – 25 Juni 2026</span>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15">
                  <span className="text-[11px] font-bold text-[#f6bf22] block uppercase tracking-wider">Pengumuman Seleksi</span>
                  <span className="text-xs sm:text-sm font-bold text-white font-inter">2 Juli 2026</span>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15">
                  <span className="text-[11px] font-bold text-[#f6bf22] block uppercase tracking-wider">Daftar Ulang</span>
                  <span className="text-xs sm:text-sm font-bold text-white font-inter">3 Juli – 8 Juli 2026</span>
                </div>
              </div>
            </div>

            {/* Banner Action Card */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 flex flex-col justify-center space-y-3.5 text-center">
              <h3 className="text-base font-bold font-jakarta text-white">Siap Mendaftar?</h3>
              <p className="text-xs font-inter text-blue-100">
                Isi formulir simulasi pendaftaran online atau unduh petunjuk teknis PPDB.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#f6bf22] text-[#251a00] font-extrabold text-xs sm:text-sm py-3.5 px-5 rounded-xl hover:bg-[#e0ad1b] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <UserPlus className="w-4 h-4 text-[#251a00]" />
                Daftar Online Sekarang
              </button>

              <button
                onClick={() => alert("Brosur Petunjuk Teknis PPDB 2026/2027 SMAN 2 Tebo dalam format PDF telah diunduh.")}
                className="w-full bg-white/15 text-white font-bold text-xs py-3 px-5 rounded-xl hover:bg-white/25 active:scale-95 transition-all border border-white/20 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#f6bf22]" />
                Unduh Juknis PPDB (PDF)
              </button>
            </div>

          </div>
        </div>

        {/* Quick Stats Highlight */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-blue-50 text-[#003883] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-jakarta text-[#1e293b]">320 Siswa</div>
              <div className="text-xs text-slate-500 font-inter">Total Kuota (10 Rombel)</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-jakarta text-[#1e293b]">4 Jalur</div>
              <div className="text-xs text-slate-500 font-inter">Penerimaan Resmi</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-jakarta text-[#1e293b]">100% Gratis</div>
              <div className="text-xs text-slate-500 font-inter">Bebas Biaya Formulir</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-jakarta text-[#1e293b]">Full Online</div>
              <div className="text-xs text-slate-500 font-inter">Sistem Terintegrasi</div>
            </div>
          </div>
        </div>

        {/* 4 Jalur Penerimaan Siswa Baru */}
        <div ref={tracksRef} style={tracksStyle} className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#003883] uppercase tracking-wider block mb-1">
              JALUR PENERIMAAN PPDB
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-jakarta text-slate-800">
              4 Jalur Masuk SMAN 2 Tebo
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-inter mt-1.5">
              Pilih jalur pendaftaran yang sesuai dengan kriteria dan domisili calon siswa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ppdbTracks.map((track, idx) => {
              const IconComp = track.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,56,131,0.08)] hover:border-[#003883]/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-extrabold font-inter ${track.bgColor} ${track.color}`}>
                        Kuota {track.percentage}
                      </span>
                      <span className="text-xs font-bold font-mono text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md">
                        {track.quota}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-11 h-11 rounded-xl ${track.bgColor} ${track.color} flex items-center justify-center shrink-0`}>
                        <IconComp className="w-5.5 h-5.5" />
                      </div>
                      <h3 className="text-lg font-bold font-jakarta text-slate-800">
                        {track.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm font-inter text-slate-600 leading-relaxed mb-4">
                      {track.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Kriteria Utama:
                    </span>
                    {track.criteria.map((c, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs font-inter text-slate-700">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${track.color} shrink-0 mt-0.5`} />
                        <span className="leading-tight">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step-by-Step Registration Timeline Section */}
        <div ref={timelineRef} style={timelineStyle} className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] mb-16">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#003883] uppercase tracking-wider block mb-1">
              ALUR & ALUR PROSES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-jakarta text-slate-800">
              Langkah-Langkah Pendaftaran (Timeline)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-inter mt-1.5">
              Panduan tahapan resmi proses seleksi PPDB SMAN 2 Tebo dari awal hingga daftar ulang.
            </p>
          </div>

          {/* Connected Steps Timeline */}
          <div className="relative space-y-8 before:absolute before:inset-0 before:left-6 sm:before:left-8 before:w-0.5 before:bg-slate-200 before:z-0">
            {timelineSteps.map((stepItem, idx) => {
              const StepIcon = stepItem.icon;
              return (
                <div key={idx} className="relative z-10 flex items-start gap-4 sm:gap-6 group">
                  
                  {/* Circle Badge Number */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#003883] text-white flex flex-col items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                    <StepIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#f6bf22]" />
                    <span className="text-[10px] font-mono font-bold text-blue-200">{stepItem.step}</span>
                  </div>

                  {/* Step Card Details */}
                  <div className="flex-grow bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-100 hover:border-[#003883]/20 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold font-mono text-[#003883] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        {stepItem.period}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase font-inter ${stepItem.statusColor}`}>
                        {stepItem.status}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-jakarta text-slate-800 mb-1">
                      Tahap {stepItem.step}: {stepItem.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-inter text-slate-600 leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Requirements Checklist Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-jakarta text-slate-800">
                Kelengkapan Berkas & Persyaratan Dokumen
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-inter">
                Pastikan seluruh dokumen berikut telah disiapkan sebelum melakukan verifikasi berkas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {requirementsChecklist.map((req, rIdx) => (
              <div key={rIdx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs sm:text-sm font-inter text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#003883] shrink-0 mt-0.5" />
                <span className="leading-snug">{req}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Simulasi Form Pendaftaran PPDB */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-slate-100 shadow-2xl p-6 sm:p-8 relative">
              
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {formSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-jakarta text-slate-800">
                    Simulasi Pendaftaran Berhasil!
                  </h3>
                  <p className="text-xs sm:text-sm font-inter text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Data draft calon peserta didik telah tersimpan. Panitia PPDB SMAN 2 Tebo akan menghubungi nomor WhatsApp Anda untuk instruksi verifikasi berkas.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#003883] flex items-center justify-center shrink-0">
                      <UserPlus className="w-5 h-5 text-[#f6bf22]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-jakarta text-slate-800">
                        Formulir Pendaftaran Online PPDB
                      </h3>
                      <p className="text-xs text-slate-500 font-inter">
                        Lengkapi data diri calon peserta didik baru.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4 font-inter text-xs sm:text-sm">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Nama Lengkap Calon Siswa <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Muhammad Rizky Pratama"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          NISN <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="10 Digit NISN"
                          value={formData.nisn}
                          onChange={(e) => setFormData({ ...formData, nisn: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Jalur Pilihan</label>
                        <select
                          value={formData.trackChoice}
                          onChange={(e) => setFormData({ ...formData, trackChoice: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                        >
                          <option>Jalur Zonasi</option>
                          <option>Jalur Prestasi Akademik/Rapor</option>
                          <option>Jalur Prestasi Non-Akademik</option>
                          <option>Jalur Afirmasi (KIP/PKH)</option>
                          <option>Jalur Perpindahan Tugas</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Sekolah Asal (SMP / MTs) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: SMP Negeri 1 Tebo"
                        value={formData.originSchool}
                        onChange={(e) => setFormData({ ...formData, originSchool: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Nomor WhatsApp Aktif / Orang Tua <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Contoh: 081234567890"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Alamat Lengkap Domisili Sesuai KK
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Jalan, RT/RW, Desa/Kelurahan, Kecamatan..."
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 bg-[#003883] text-white rounded-xl font-bold text-xs sm:text-sm hover:bg-[#002860] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4 text-[#f6bf22]" />
                        Kirim Pendaftaran Online
                      </button>
                    </div>
                  </form>
                </>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
