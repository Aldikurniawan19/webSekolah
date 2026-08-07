"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/lib/useScrollReveal";
import {
  HeartHandshake,
  UserCheck,
  Compass,
  BookOpenCheck,
  ShieldCheck,
  MessageSquare,
  Calendar,
  Clock,
  GraduationCap,
  Sparkles,
  Smile,
  CheckCircle2,
  HelpCircle,
  Send,
  X,
  ChevronDown,
  Award,
  Users,
  Lock,
  Lightbulb,
  PhoneCall,
  Check,
} from "lucide-react";

interface Counselor {
  id: string;
  name: string;
  role: string;
  degree: string;
  specialization: string;
  experience: string;
  avatar: string;
  bio: string;
}

const counselorsData: Counselor[] = [
  {
    id: "counselor-1",
    name: "Dra. Hj. Siti Aminah, M.Pd.",
    role: "Koordinator Bimbingan Konseling",
    degree: "S2 Bimbingan & Konseling (UNP)",
    specialization: "Konseling Karir, Studi Lanjut & Beasiswa Perguruan Tinggi",
    experience: "18+ Tahun Pengalaman",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: "Spesialis dalam mendampingi siswa kelas XII merencanakan strategi masuk PTN (SNBP, SNBT, Kedinasan) serta pengembangan potensi kepemimpinan.",
  },
  {
    id: "counselor-2",
    name: "Budi Santoso, S.Psi., M.Si.",
    role: "Guru Konselor Akademik & Remaja",
    degree: "S2 Psikologi Perkembangan (UNJA)",
    specialization: "Kesehatan Mental, Manajemen Stres & Psikologi Remaja",
    experience: "12+ Tahun Pengalaman",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    bio: "Fokus pada konseling kesehatan mental remaja, pengelolaan kecemasan ujian, kepercayaan diri, dan regulasi emosi positif di sekolah.",
  },
  {
    id: "counselor-3",
    name: "Rina Rahmawati, S.Pd.",
    role: "Guru Konselor Bimbingan Belajar",
    degree: "S1 Bimbingan & Konseling (UIN)",
    specialization: "Strategi Belajar Efektif, Adaptasi Sosial & Tes Minat Bakat",
    experience: "8+ Tahun Pengalaman",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    bio: "Membantu siswa menemukan gaya belajar terbaik, mengatasi kesulitan akademik, serta membangun hubungan sosial antar teman sebaya.",
  },
];

const pillarsData = [
  {
    title: "Bimbingan Pribadi",
    icon: UserCheck,
    color: "text-blue-600",
    bgColor: "bg-blue-50/80",
    borderColor: "border-blue-100",
    description: "Membimbing siswa dalam memahami kelebihan dan kelemahan diri, membangun rasa percaya diri, ketahanan emosional, serta ketakwaan kepada Tuhan.",
    bullets: ["Pemahaman potensi diri", "Pengelolaan emosi & stres", "Karakter & kemandirian"],
  },
  {
    title: "Bimbingan Sosial",
    icon: HeartHandshake,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50/80",
    borderColor: "border-emerald-100",
    description: "Membantu siswa beradaptasi dengan lingkungan sekolah, menjalin komunikasi yang sehat dengan sesama, serta mengatasi konflik antarteman sebaya.",
    bullets: ["Komunikasi interpersonal", "Resolusi konflik teman sebaya", "Etika pergaulan positif"],
  },
  {
    title: "Bimbingan Belajar",
    icon: BookOpenCheck,
    color: "text-amber-600",
    bgColor: "bg-amber-50/80",
    borderColor: "border-amber-100",
    description: "Memfasilitasi siswa menemukan gaya belajar yang efektif, mengatasi kejenuhan belajar, serta persiapan matang menghadapi asesmen dan ujian sekolah.",
    bullets: ["Teknik & gaya belajar", "Manajemen waktu belajar", "Penanganan kesulitan belajar"],
  },
  {
    title: "Bimbingan Karir & Kuliah",
    icon: Compass,
    color: "text-purple-600",
    bgColor: "bg-purple-50/80",
    borderColor: "border-purple-100",
    description: "Pendampingan intensif pemilihan mata pelajaran pilihan (Fase F), analisis hasil tes bakat minat, serta strategi lulus PTN (SNBP, SNBT, Kedinasan).",
    bullets: ["Pemilihan jurusan kuliah", "Analisis minat & bakat", "Strategi SNBP & SNBT"],
  },
];

const faqData = [
  {
    question: "Apakah rahasia cerita saya benar-benar terjamin saat konseling?",
    answer: "Tentu saja! Kode etika utama Bimbingan & Konseling adalah Azas Kerahasiaan. Seluruh informasi, privasi, dan isi percakapan Anda dijamin 100% rahasia antara Anda dan Guru Konselor.",
  },
  {
    question: "Apakah layanan BK hanya untuk siswa yang melakukan pelanggaran?",
    answer: "Sama sekali tidak! BK adalah 'Ruang Tumbuh & Solusi' bagi seluruh siswa SMAN 2 Tebo. Lebih dari 80% siswa datang ke BK untuk konsultasi strategi kuliah, beasiswa, analisis tes bakat minat, atau sekadar berdiskusi tentang pengembangan diri.",
  },
  {
    question: "Bagaimana cara membuat janji temu konseling?",
    answer: "Anda dapat langsung mendaftar secara online melalui tombol 'Buat Janji Konsultasi' di halaman ini, menemui Guru BK langsung di Ruang BK pada jam istirahat, atau menghubungi kontak WhatsApp resmi BK SMAN 2 Tebo.",
  },
  {
    question: "Apakah orang tua siswa dapat berkonsultasi dengan Guru BK?",
    answer: "Sangat bisa! Kami menyambut hangat bapak/ibu orang tua/wali siswa untuk berdiskusi perkembangan akademik, minat bakat, maupun psikologis putra-putrinya.",
  },
];

export default function BimbinganKonselingPage() {
  const [headerRef, , headerStyle] = useScrollReveal({ variant: "fade-up", duration: 700 });
  const [pillarsRef, , pillarsStyle] = useScrollReveal({ variant: "fade-up", duration: 700, delay: 100 });
  const [counselorsRef, , counselorsStyle] = useScrollReveal({ variant: "fade-up", duration: 800, delay: 150 });
  const [faqRef, , faqStyle] = useScrollReveal({ variant: "fade-up", duration: 800, delay: 200 });

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCounselorName, setSelectedCounselorName] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    fullName: "",
    studentClass: "Fase E (Kelas X)",
    serviceType: "Konseling Karir & Kuliah",
    counselor: "Bebas (Pilihan Terbaik)",
    sessionType: "Tatap Muka di Ruang BK",
    preferredDate: "",
    notes: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        fullName: "",
        studentClass: "Fase E (Kelas X)",
        serviceType: "Konseling Karir & Kuliah",
        counselor: "Bebas (Pilihan Terbaik)",
        sessionType: "Tatap Muka di Ruang BK",
        preferredDate: "",
        notes: "",
      });
    }, 2500);
  };

  const openConsultationModal = (counselorName?: string) => {
    if (counselorName) {
      setSelectedCounselorName(counselorName);
      setFormData((prev) => ({ ...prev, counselor: counselorName }));
    }
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-6 sm:pt-10 md:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Badge & Page Title */}
        <div ref={headerRef} style={headerStyle} className="flex flex-col items-center text-center mb-10">
          <div className="flex flex-col items-center mb-2">
            <span className="w-10 h-[3px] bg-[#f6bf22] mb-2 rounded-full"></span>
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-widest text-[#f6bf22]">
              LAYANAN AKADEMIK & KESISWAAN
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-jakarta text-[#003883] tracking-tight relative inline-block">
            <span className="relative z-10">
              Bimbingan &{" "}
              <span className="relative inline-block text-[#003883]">
                Konseling
                <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#f6bf22] -z-10 rounded-full"></span>
              </span>
            </span>
          </h1>
          <p className="mt-3.5 max-w-2xl font-inter text-[#475569] text-sm sm:text-base leading-relaxed">
            Ruang tumbuh yang aman, ramah, dan profesional untuk mendampingi perkembangan akademik, psikologis, emosional, serta perencanaan masa depan siswa SMAN 2 Tebo.
          </p>
        </div>

        {/* Confidentiality Guarantee & Quick Action Bar */}
        <div className="bg-gradient-to-r from-[#003883] via-[#1e4fa3] to-[#002860] rounded-3xl p-6 sm:p-8 text-white shadow-xl mb-12 relative overflow-hidden">
          
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 text-[#f6bf22]">
                <Lock className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#f6bf22] text-[#251a00] font-bold text-[10px] uppercase px-2.5 py-0.5 rounded-full">
                    Jaminan Rahasia 100%
                  </span>
                  <span className="text-xs text-blue-200 font-inter">Azas Kerahasiaan BK</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-jakarta text-white">
                  Privasi & Kenyamanan Cerita Anda Adalah Prioritas Utama Kami
                </h3>
                <p className="text-xs sm:text-sm text-blue-100/90 font-inter mt-0.5 max-w-xl">
                  Tidak perlu ragu atau takut. Setiap sesi konsultasi berlangsung dalam suasana hangat, suportif, tanpa menghakimi, dan terlindungi kode etik profesional.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={() => openConsultationModal()}
                className="bg-[#f6bf22] text-[#251a00] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl hover:bg-[#e0ad1b] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Buat Janji Konsultasi
              </button>
            </div>

          </div>
        </div>

        {/* 4 Pillars of BK Services */}
        <div ref={pillarsRef} style={pillarsStyle} className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#003883] uppercase tracking-wider block mb-1">
              BIDANG LAYANAN BK
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-jakarta text-slate-800">
              4 Pilar Pendampingan Siswa
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-inter mt-1.5">
              Program komprehensif yang dirancang untuk mendukung tiap tahapan tumbuh kembang siswa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillarsData.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,56,131,0.08)] hover:border-[#003883]/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${pillar.bgColor} ${pillar.color} flex items-center justify-center mb-4`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold font-jakarta text-slate-800 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-inter text-slate-600 leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-4 border-t border-slate-100">
                    {pillar.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-xs font-inter text-slate-700">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${pillar.color} shrink-0`} />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Counselors Team Section */}
        <div ref={counselorsRef} style={counselorsStyle} className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#003883] uppercase tracking-wider block mb-1">
              TIM GURU KONSELOR
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-jakarta text-slate-800">
              Siap Mendengar & Mendampingi Anda
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-inter mt-1.5">
              Guru bimbingan konseling profesional yang berpengalaman di bidang psikologi & pendidikan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {counselorsData.map((counselor) => (
              <div
                key={counselor.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden hover:shadow-[0_12px_30px_rgba(0,56,131,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo & Header */}
                  <div className="relative h-48 bg-slate-100 overflow-hidden">
                    <img
                      src={counselor.avatar}
                      alt={counselor.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#f6bf22] text-[#251a00] font-bold text-[10px] uppercase inline-block mb-1">
                        {counselor.experience}
                      </span>
                      <h3 className="text-base font-bold font-jakarta leading-tight">
                        {counselor.name}
                      </h3>
                      <p className="text-xs text-blue-200 font-inter">{counselor.role}</p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3 font-inter text-xs sm:text-sm text-slate-600">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-slate-700 text-xs">
                        <GraduationCap className="w-4 h-4 text-[#003883]" />
                        <span>Kualifikasi:</span>
                      </div>
                      <p className="text-slate-600 text-xs pl-5">{counselor.degree}</p>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Spesialisasi Utama:
                      </span>
                      <p className="text-xs font-semibold text-[#003883] leading-snug">
                        {counselor.specialization}
                      </p>
                    </div>

                    <p className="text-slate-500 text-xs leading-relaxed italic">
                      "{counselor.bio}"
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-4 bg-slate-50/70 border-t border-slate-100">
                  <button
                    onClick={() => openConsultationModal(counselor.name)}
                    className="w-full py-2.5 px-4 bg-[#003883] text-white rounded-xl text-xs font-semibold hover:bg-[#002860] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#f6bf22]" />
                    Pilih Guru ini untuk Konsultasi
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div ref={faqRef} style={faqStyle} className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-jakarta text-slate-800">
                  Pertanyaan Sering Diajukan (FAQ)
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-inter">
                  Hal-hal yang sering ditanyakan siswa seputar layanan Bimbingan Konseling SMAN 2 Tebo.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {faqData.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-slate-100 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 text-left font-bold font-jakarta text-sm sm:text-base text-slate-800 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                        openFaq === idx ? "rotate-180 text-[#003883]" : ""
                      }`}
                    />
                  </button>

                  {openFaq === idx && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm font-inter text-slate-600 leading-relaxed bg-slate-50/50 border-t border-slate-100">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Janji Konsultasi */}
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
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-jakarta text-slate-800">
                    Pengajuan Berhasil Terkirim!
                  </h3>
                  <p className="text-xs sm:text-sm font-inter text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Jadwal konsultasi Anda telah diterima oleh Tim BK SMAN 2 Tebo. Guru konselor akan mengonfirmasi waktu dan tempat melalui pesan sekolah/WhatsApp.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#003883] flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-jakarta text-slate-800">
                        Formulir Janji Konsultasi BK
                      </h3>
                      <p className="text-xs text-slate-500 font-inter">
                        Pilih jadwal & konselor yang nyaman untuk Anda.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4 font-inter text-xs sm:text-sm">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Nama Lengkap Siswa / Orang Tua <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Ahmad Rizky"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Kelas</label>
                        <select
                          value={formData.studentClass}
                          onChange={(e) => setFormData({ ...formData, studentClass: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                        >
                          <option>Fase E (Kelas X)</option>
                          <option>Fase F (Kelas XI)</option>
                          <option>Fase F (Kelas XII)</option>
                          <option>Orang Tua / Wali Siswa</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Jenis Layanan</label>
                        <select
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                        >
                          <option>Konseling Karir & Kuliah</option>
                          <option>Bimbingan Belajar</option>
                          <option>Konseling Pribadi / Emosi</option>
                          <option>Bimbingan Sosial & Pertemanan</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Pilihan Konselor</label>
                        <select
                          value={formData.counselor}
                          onChange={(e) => setFormData({ ...formData, counselor: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                        >
                          <option>Bebas (Pilihan Terbaik)</option>
                          <option>Dra. Hj. Siti Aminah, M.Pd.</option>
                          <option>Budi Santoso, S.Psi., M.Si.</option>
                          <option>Rina Rahmawati, S.Pd.</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Mode Sesi</label>
                        <select
                          value={formData.sessionType}
                          onChange={(e) => setFormData({ ...formData, sessionType: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                        >
                          <option>Tatap Muka di Ruang BK</option>
                          <option>Online (WhatsApp / Zoom)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Prakiraan Tanggal & Waktu Diinginkan
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Catatan Singkat / Harapan Konsultasi (Opsional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Contoh: Ingin diskusi jurusan kuliah teknik elektro atau tes bakat..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 bg-[#003883] text-white rounded-xl font-bold text-xs sm:text-sm hover:bg-[#002860] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4 text-[#f6bf22]" />
                        Kirim Pengajuan Konsultasi
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
