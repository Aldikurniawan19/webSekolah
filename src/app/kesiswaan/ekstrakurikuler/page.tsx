"use client";

import React, { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import {
  Search,
  Trophy,
  Award,
  Users,
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  HeartPulse,
  Dumbbell,
  Palette,
  Code,
  Globe,
  Compass,
  ShieldCheck,
  Send,
  X,
  Star,
  Flame,
  Check,
  ChevronRight,
  BookOpen,
  HelpCircle,
  GraduationCap,
} from "lucide-react";

interface EkskulItem {
  id: string;
  name: string;
  category: "krida" | "olahraga" | "seni" | "sains-it" | "rohis";
  categoryLabel: string;
  isMandatory?: boolean;
  icon: React.ElementType;
  color: string;
  bgLight: string;
  schedule: string;
  location: string;
  coach: string;
  membersCount: string;
  description: string;
  achievements: string[];
  requirements: string[];
}

const ekskulData: EkskulItem[] = [
  {
    id: "pramuka",
    name: "Pramuka Ambalan Gugus Depan",
    category: "krida",
    categoryLabel: "Krida & Kepemimpinan",
    isMandatory: true,
    icon: Compass,
    color: "text-[#003883]",
    bgLight: "bg-blue-50/80",
    schedule: "Jumat, 14.30 - 17.00 WIB",
    location: "Lap. Utama SMAN 2 Tebo",
    coach: "Drs. Ahmad Jubaidi & Tim Pembina",
    membersCount: "Seluruh Siswa Kelas X & XI",
    description: "Ekstrakurikuler wajib pembentuk karakter kemandirian, kedisiplinan, kecintaan pada alam, serta keterampilan kepramukaan dan survival.",
    achievements: ["Juara Umum Kemah Budaya Tebo", "Kontingen Raimuna Nasional"],
    requirements: ["Seragam Lengkap Pramuka", "Buku SKU & Buku Catatan"],
  },
  {
    id: "paskibra",
    name: "Paskibraka SMAN 2 Tebo",
    category: "krida",
    categoryLabel: "Krida & Kepemimpinan",
    icon: Star,
    color: "text-red-600",
    bgLight: "bg-red-50/80",
    schedule: "Sabtu, 14.30 - 17.00 WIB",
    location: "Lap. Utama SMAN 2 Tebo",
    coach: "Pelatih Purna Paskibraka Tebo",
    membersCount: "45 Siswa Terseleksi",
    description: "Pelatihan Peraturan Baris Berbaris (PBB) tingkat tinggi, kedisiplinan, ketahanan fisik, dan pembentukan karakter kepemimpinan berkebangsaan.",
    achievements: ["Pengibar Bendera Utama HUT RI Kab. Tebo", "Juara 1 Lomba PBB se-Provinsi Jambi"],
    requirements: ["Seleksi Fisik & Postur", "Komitmen Latihan Tinggi"],
  },
  {
    id: "pmr",
    name: "PMR Wira (Palang Merah Remaja)",
    category: "krida",
    categoryLabel: "Krida & Kepemimpinan",
    icon: HeartPulse,
    color: "text-rose-600",
    bgLight: "bg-rose-50/80",
    schedule: "Sabtu, 14.00 - 16.30 WIB",
    location: "Ruang UKS SMAN 2 Tebo",
    coach: "Pembina PMI Kab. Tebo",
    membersCount: "35 Anggota Aktif",
    description: "Pembekalan keterampilan Pertolongan Pertama Pada Kecelakaan (P3K), kesiapsiagaan bencana, dan aksi kesehatan kemanusiaan lingkungan sekolah.",
    achievements: ["Juara 1 Lomba P3K Jamba PMI", "Penyelenggara Donor Darah Rutin"],
    requirements: ["Buku Panduan P3K", "Minat Kemanusiaan"],
  },
  {
    id: "futsal",
    name: "Klub Futsal & Sepak Bola",
    category: "olahraga",
    categoryLabel: "Olahraga & Kebugaran",
    icon: Dumbbell,
    color: "text-emerald-600",
    bgLight: "bg-emerald-50/80",
    schedule: "Selasa & Sabtu, 15.30 WIB",
    location: "Lapangan Olahraga Sekolah",
    coach: "Pelatih Lisensi C PSSI",
    membersCount: "50 Siswa",
    description: "Pengembangan taktik permainan futsal, pengasahan ketahanan fisik, kerja sama tim, dan persiapan kompetisi Bupati Cup & O2SN.",
    achievements: ["Juara 1 Futsal Pelajar Tebo Cup", "Semifinalis Liga Pendidikan Jambi"],
    requirements: ["Sepatu Futsal & Kostum Olahraga"],
  },
  {
    id: "basket",
    name: "Klub Bola Basket",
    category: "olahraga",
    categoryLabel: "Olahraga & Kebugaran",
    icon: Dumbbell,
    color: "text-amber-600",
    bgLight: "bg-amber-50/80",
    schedule: "Rabu & Sabtu, 15.30 WIB",
    location: "Lap. Basket SMAN 2 Tebo",
    coach: "Coach PERBASI Tebo",
    membersCount: "40 Siswa (Putra & Putri)",
    description: "Latihan teknik dasar dribble, shooting, strategi defense/offense, dan pembentukan tim tangguh peserta kejuaraan antarsekolah.",
    achievements: ["Runner Up DBL Jambi Series", "Juara 1 Basket O2SN Kabupaten"],
    requirements: ["Sepatu Basket & Kostum Tim"],
  },
  {
    id: "voli",
    name: "Klub Bola Voli",
    category: "olahraga",
    categoryLabel: "Olahraga & Kebugaran",
    icon: Dumbbell,
    color: "text-blue-600",
    bgLight: "bg-blue-50/80",
    schedule: "Kamis & Sabtu, 15.30 WIB",
    location: "Lap. Voli SMAN 2 Tebo",
    coach: "Coach PBVSI Tebo",
    membersCount: "35 Siswa",
    description: "Penguasaan servis smash, blocking, dan kekompakan tim voli putra & putri SMAN 2 Tebo.",
    achievements: ["Juara 1 Turnamen Voli Pelajar Tebo"],
    requirements: ["Pakaian Olahraga & Sepatu"],
  },
  {
    id: "pencak-silat",
    name: "Pencak Silat & Seni Bela Diri",
    category: "olahraga",
    categoryLabel: "Olahraga & Kebugaran",
    icon: ShieldCheck,
    color: "text-purple-600",
    bgLight: "bg-purple-50/80",
    schedule: "Jumat & Sabtu, 15.30 WIB",
    location: "Aula SMAN 2 Tebo",
    coach: "Pelatih IPSI Kabupaten Tebo",
    membersCount: "30 Siswa",
    description: "Pelestarian seni bela diri tradisional Nusantara, jurus tanding, dan pembentukan ketahanan fisik spiritual.",
    achievements: ["Medali Emas O2SN Pencak Silat Jambi"],
    requirements: ["Seragam Perguruan Silat"],
  },
  {
    id: "seni-tari",
    name: "Sanggar Seni Tari Tradisional & Kreasi",
    category: "seni",
    categoryLabel: "Seni & Budaya",
    icon: Palette,
    color: "text-fuchsia-600",
    bgLight: "bg-fuchsia-50/80",
    schedule: "Sabtu, 14.00 - 16.30 WIB",
    location: "Ruang Seni Budaya",
    coach: "Koreografer Seni Jambi",
    membersCount: "25 Siswa",
    description: "Eksplorasi gerak tari tradisional Melayu Jambi (Tari Sekapur Sirih), tari kreasi Nusantara, dan pertunjukan event resmi sekolah.",
    achievements: ["Juara 1 FLS2N Seni Tari Provinsi Jambi"],
    requirements: ["Kedisiplinan Latihan & Minat Seni"],
  },
  {
    id: "paduan-suara",
    name: "Paduan Suara & Vocal Group",
    category: "seni",
    categoryLabel: "Seni & Budaya",
    icon: Sparkles,
    color: "text-pink-600",
    bgLight: "bg-pink-50/80",
    schedule: "Rabu, 15.00 WIB",
    location: "Ruang Musik SMAN 2 Tebo",
    coach: "Guru Seni Musik",
    membersCount: "30 Siswa",
    description: "Pengolahan vokal, harmoni suara, lagu nasional/daerah, dan pengiring upacara bendera serta wisuda kelulusan.",
    achievements: ["Paduan Suara Terbaik Upacara Daerah Tebo"],
    requirements: ["Audisi Tes Vokal"],
  },
  {
    id: "band-musik",
    name: "Band Sekolah & Akustik",
    category: "seni",
    categoryLabel: "Seni & Budaya",
    icon: Palette,
    color: "text-cyan-600",
    bgLight: "bg-cyan-50/80",
    schedule: "Kamis, 15.30 WIB",
    location: "Studio Musik SMAN 2 Tebo",
    coach: "Instruktur Musik",
    membersCount: "20 Siswa",
    description: "Wadah ekspresi instrumen gitar, bass, drum, keyboard, dan persiapan pengisi acara Pentas Seni (Pensi) sekolah.",
    achievements: ["Juara 1 Festival Band Pelajar Tebo"],
    requirements: ["Kemampuan Dasar Instrumen Musik"],
  },
  {
    id: "kir",
    name: "Karya Ilmiah Remaja (KIR) & OSN",
    category: "sains-it",
    categoryLabel: "Sains & Teknologi",
    icon: BookOpen,
    color: "text-teal-600",
    bgLight: "bg-teal-50/80",
    schedule: "Sabtu, 13.30 WIB",
    location: "Lab Biologi / Fisika",
    coach: "Tim Guru Pembimbing OSN & OPSI",
    membersCount: "35 Siswa",
    description: "Penelitian ilmiah remaja, percobaan sains, penyusunan artikel karya ilmiah, dan persiapan Olimpiade Sains Nasional (OSN).",
    achievements: ["Finalis OPSI Nasional Kemendikbud", "Medali Perunggu OSN Astronomi"],
    requirements: ["Minat Riset & Sains"],
  },
  {
    id: "it-club",
    name: "Computer & Robotics Club",
    category: "sains-it",
    categoryLabel: "Sains & Teknologi",
    icon: Code,
    color: "text-cyan-700",
    bgLight: "bg-cyan-50/80",
    schedule: "Jumat, 14.30 WIB",
    location: "Lab Komputer SMAN 2 Tebo",
    coach: "Guru Komputer & IT Specialist",
    membersCount: "25 Siswa",
    description: "Pemrograman Web/Python, desain grafis, editing video, dan robotika IoT dasar untuk perlombaan teknologi digital.",
    achievements: ["Juara 1 Web Design Festival Jambi"],
    requirements: ["Laptop / Laptop Lab Sekolah"],
  },
  {
    id: "english-club",
    name: "English Debating & Public Speaking Club",
    category: "sains-it",
    categoryLabel: "Sains & Teknologi",
    icon: Globe,
    color: "text-indigo-600",
    bgLight: "bg-indigo-50/80",
    schedule: "Sabtu, 14.00 WIB",
    location: "Ruang Bahasa SMAN 2 Tebo",
    coach: "Guru Bahasa Inggris & Native Speaker",
    membersCount: "30 Siswa",
    description: "Latihan debat bahasa Inggris (Asian Parliamentary), speech, storytelling, dan persiapan kompetisi National Schools Debating Championship (NSDC).",
    achievements: ["Best Speaker NSDC Tingkat Provinsi Jambi"],
    requirements: ["Keinginan Belajar Bicara Bahasa Inggris"],
  },
  {
    id: "rohis",
    name: "Rohani Islam (Rohis Al-Kautsar)",
    category: "rohis",
    categoryLabel: "Keagamaan",
    icon: HeartPulse,
    color: "text-green-700",
    bgLight: "bg-green-50/80",
    schedule: "Jumat, 14.00 WIB",
    location: "Musholla SMAN 2 Tebo",
    coach: "Pembina Kerohanian Islam",
    membersCount: "60 Siswa",
    description: "Kajian keislaman remaja, seni Hadroh/Nasyid, bakti sosial ramadhan, serta pengembangan karakter akhlakul karimah.",
    achievements: ["Juara 1 Lomba Nasyid & Tilawah Tebo"],
    requirements: ["Terbuka untuk Seluruh Siswa Muslim"],
  },
];

export default function EkstrakurikulerPage() {
  const [headerRef, , headerStyle] = useScrollReveal({ variant: "fade-up", duration: 700 });
  const [filterRef, , filterStyle] = useScrollReveal({ variant: "fade-up", duration: 700, delay: 100 });
  const [gridRef, , gridStyle] = useScrollReveal({ variant: "fade-up", duration: 800, delay: 150 });

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedEkskul, setSelectedEkskul] = useState<EkskulItem | null>(null);

  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false);
  const [regSubmitted, setRegSubmitted] = useState<boolean>(false);
  const [regData, setRegData] = useState({
    fullName: "",
    studentClass: "Fase E (Kelas X)",
    ekskulChoice: "",
    phone: "",
    reason: "",
  });

  const filteredEkskul = ekskulData.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.coach.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegSubmitted(true);
    setTimeout(() => {
      setRegSubmitted(false);
      setIsRegisterModalOpen(false);
      setRegData({
        fullName: "",
        studentClass: "Fase E (Kelas X)",
        ekskulChoice: "",
        phone: "",
        reason: "",
      });
    }, 2500);
  };

  const openRegisterModal = (ekskulName?: string) => {
    if (ekskulName) {
      setRegData((prev) => ({ ...prev, ekskulChoice: ekskulName }));
    }
    setIsRegisterModalOpen(true);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-6 sm:pt-10 md:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Badge & Page Title */}
        <div ref={headerRef} style={headerStyle} className="flex flex-col items-center text-center mb-10">
          <div className="flex flex-col items-center mb-2">
            <span className="w-10 h-[3px] bg-[#f6bf22] mb-2 rounded-full"></span>
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-widest text-[#f6bf22]">
              KESISWAAN SMAN 2 TEBO
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-jakarta text-[#003883] tracking-tight relative inline-block">
            <span className="relative z-10">
              Ekstrakurikuler{" "}
              <span className="relative inline-block text-[#003883]">
                Sekolah
                <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#f6bf22] -z-10 rounded-full"></span>
              </span>
            </span>
          </h1>
          <p className="mt-3.5 max-w-2xl font-inter text-[#475569] text-sm sm:text-base leading-relaxed">
            Ruang eksplorasi minat, bakat, pembentukan karakter kepemimpinan, dan pencapaian prestasi siswa SMAN 2 Tebo di bidang seni, olahraga, sains, maupun keagamaan.
          </p>
        </div>

        {/* Highlight Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-blue-50 text-[#003883] flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-jakarta text-[#1e293b]">14+</div>
              <div className="text-xs text-slate-500 font-inter">Klub Ekstrakurikuler</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-jakarta text-[#1e293b]">50+</div>
              <div className="text-xs text-slate-500 font-inter">Medali & Prestasi Tahunan</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-jakarta text-[#1e293b]">100%</div>
              <div className="text-xs text-slate-500 font-inter">Pelatih & Pembina Ahli</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-jakarta text-[#1e293b]">Bebas</div>
              <div className="text-xs text-slate-500 font-inter">Pilih Ekskul Sesuai Minat</div>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Section */}
        <div ref={filterRef} style={filterStyle} className="bg-white rounded-2xl p-4 sm:p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Cari klub ekskul atau pembina..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-inter text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full lg:w-auto">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-inter transition-all ${
                  activeCategory === "all"
                    ? "bg-[#003883] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Semua ({ekskulData.length})
              </button>

              <button
                onClick={() => setActiveCategory("krida")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-inter transition-all flex items-center gap-1.5 ${
                  activeCategory === "krida"
                    ? "bg-[#003883] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                Krida & Kepemimpinan
              </button>

              <button
                onClick={() => setActiveCategory("olahraga")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-inter transition-all flex items-center gap-1.5 ${
                  activeCategory === "olahraga"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Dumbbell className="w-3.5 h-3.5" />
                Olahraga
              </button>

              <button
                onClick={() => setActiveCategory("seni")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-inter transition-all flex items-center gap-1.5 ${
                  activeCategory === "seni"
                    ? "bg-fuchsia-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                Seni & Budaya
              </button>

              <button
                onClick={() => setActiveCategory("sains-it")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-inter transition-all flex items-center gap-1.5 ${
                  activeCategory === "sains-it"
                    ? "bg-teal-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                Sains & IT
              </button>

              <button
                onClick={() => setActiveCategory("rohis")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-inter transition-all flex items-center gap-1.5 ${
                  activeCategory === "rohis"
                    ? "bg-green-700 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <HeartPulse className="w-3.5 h-3.5" />
                Keagamaan
              </button>
            </div>

          </div>
        </div>

        {/* Ekskul Grid Cards */}
        <div ref={gridRef} style={gridStyle} className="mb-16">
          {filteredEkskul.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
              <Trophy className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold font-jakarta text-slate-700">Ekstrakurikuler Tidak Ditemukan</h3>
              <p className="text-xs sm:text-sm text-slate-500 font-inter mt-1">
                Coba sesuaikan kata kunci pencarian atau pilih kategori lain.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-4 px-4 py-2 bg-[#003883] text-white rounded-xl text-xs font-semibold hover:bg-[#002860] transition-all"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEkskul.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.id}
                    className="group bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,56,131,0.08)] hover:border-[#003883]/20 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    <div className="p-6">
                      
                      {/* Category Header */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-[11px] font-bold font-inter ${item.bgLight} ${item.color}`}>
                          {item.categoryLabel}
                        </span>
                        {item.isMandatory ? (
                          <span className="px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[10px] font-extrabold font-inter uppercase">
                            Wajib (Fase E & F)
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-semibold font-inter">
                            Pilihan Minat
                          </span>
                        )}
                      </div>

                      {/* Title & Icon */}
                      <div className="flex items-start gap-3.5 mb-3">
                        <div className={`w-12 h-12 rounded-xl ${item.bgLight} ${item.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold font-jakarta text-slate-800 group-hover:text-[#003883] transition-colors leading-snug">
                            {item.name}
                          </h2>
                          <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500 font-inter">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>{item.schedule}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm font-inter text-slate-600 leading-relaxed mb-4 line-clamp-3">
                        {item.description}
                      </p>

                      {/* Coach & Location Info */}
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1 mb-4 text-xs font-inter text-slate-600">
                        <div className="flex items-center gap-2">
                          <Users className="w-3.5 h-3.5 text-[#003883] shrink-0" />
                          <span className="truncate">Pembina: <strong>{item.coach}</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-[#003883] shrink-0" />
                          <span className="truncate">Lokasi: {item.location}</span>
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div className="space-y-1.5 pt-2">
                        <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                          Prestasi Terbaru:
                        </span>
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-center gap-2 text-xs font-inter text-slate-700">
                            <Trophy className="w-3.5 h-3.5 text-[#f6bf22] shrink-0" />
                            <span className="truncate">{ach}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                    {/* Bottom Actions */}
                    <div className="px-6 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedEkskul(item)}
                        className="text-xs font-semibold font-inter text-slate-600 hover:text-[#003883] transition-colors"
                      >
                        Lihat Detail
                      </button>
                      <button
                        onClick={() => openRegisterModal(item.name)}
                        className="px-3.5 py-1.5 bg-[#003883] text-white rounded-lg text-xs font-semibold hover:bg-[#002860] active:scale-95 transition-all shadow-sm flex items-center gap-1.5"
                      >
                        <Send className="w-3 h-3 text-[#f6bf22]" />
                        Daftar Ekskul
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Detail Ekskul */}
        {selectedEkskul && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-slate-100 shadow-2xl p-6 sm:p-8 relative">
              
              <button
                onClick={() => setSelectedEkskul(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-5">
                <div className={`w-14 h-14 rounded-2xl ${selectedEkskul.bgLight} ${selectedEkskul.color} flex items-center justify-center shrink-0`}>
                  {React.createElement(selectedEkskul.icon, { className: "w-7 h-7" })}
                </div>
                <div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold font-inter ${selectedEkskul.bgLight} ${selectedEkskul.color} inline-block mb-1`}>
                    {selectedEkskul.categoryLabel}
                  </span>
                  <h2 className="text-xl font-bold font-jakarta text-slate-800">
                    {selectedEkskul.name}
                  </h2>
                </div>
              </div>

              <div className="space-y-4 font-inter text-xs sm:text-sm text-slate-600">
                <p className="bg-slate-50 p-4 rounded-xl border border-slate-100 leading-relaxed">
                  {selectedEkskul.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 block mb-0.5">Jadwal Latihan</span>
                    <span className="font-semibold text-slate-800">{selectedEkskul.schedule}</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 block mb-0.5">Lokasi Latihan</span>
                    <span className="font-semibold text-slate-800">{selectedEkskul.location}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Pembina & Pelatih</h4>
                  <p className="font-semibold text-slate-800">{selectedEkskul.coach}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Persyaratan Anggota</h4>
                  <div className="space-y-1">
                    {selectedEkskul.requirements.map((req, rIdx) => (
                      <div key={rIdx} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#003883] shrink-0" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedEkskul(null)}
                  className="px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-200"
                >
                  Tutup
                </button>
                <button
                  onClick={() => {
                    const name = selectedEkskul.name;
                    setSelectedEkskul(null);
                    openRegisterModal(name);
                  }}
                  className="px-5 py-2.5 bg-[#003883] text-white rounded-xl text-xs font-semibold hover:bg-[#002860] shadow-sm flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-[#f6bf22]" />
                  Daftar Sekarang
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Modal Form Pendaftaran Online */}
        {isRegisterModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-3xl max-w-lg w-full border border-slate-100 shadow-2xl p-6 sm:p-8 relative">
              
              <button
                onClick={() => setIsRegisterModalOpen(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {regSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-jakarta text-slate-800">
                    Pendaftaran Berhasil!
                  </h3>
                  <p className="text-xs sm:text-sm font-inter text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Data pendaftaran Anda telah diterima. Pembina ekskul akan menghubungi WhatsApp Anda untuk jadwal latihan perdana.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#003883] flex items-center justify-center shrink-0">
                      <Trophy className="w-5 h-5 text-[#f6bf22]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-jakarta text-slate-800">
                        Form Pendaftaran Ekstrakurikuler
                      </h3>
                      <p className="text-xs text-slate-500 font-inter">
                        Bergabunglah dengan klub impian Anda di SMAN 2 Tebo.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleRegisterSubmit} className="space-y-4 font-inter text-xs sm:text-sm">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Nama Lengkap Siswa <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Budi Pratama"
                        value={regData.fullName}
                        onChange={(e) => setRegData({ ...regData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Kelas</label>
                        <select
                          value={regData.studentClass}
                          onChange={(e) => setRegData({ ...regData, studentClass: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                        >
                          <option>Fase E (Kelas X)</option>
                          <option>Fase F (Kelas XI)</option>
                          <option>Fase F (Kelas XII)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Pilihan Ekskul</label>
                        <select
                          required
                          value={regData.ekskulChoice}
                          onChange={(e) => setRegData({ ...regData, ekskulChoice: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                        >
                          <option value="">-- Pilih Ekskul --</option>
                          {ekskulData.map((e) => (
                            <option key={e.id} value={e.name}>
                              {e.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Contoh: 081234567890"
                        value={regData.phone}
                        onChange={(e) => setRegData({ ...regData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Alasan / Motivasi Bergabung (Opsional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tuliskan pengalaman atau keinginan Anda bergabung di ekskul ini..."
                        value={regData.reason}
                        onChange={(e) => setRegData({ ...regData, reason: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 bg-[#003883] text-white rounded-xl font-bold text-xs sm:text-sm hover:bg-[#002860] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4 text-[#f6bf22]" />
                        Kirim Pendaftaran
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
