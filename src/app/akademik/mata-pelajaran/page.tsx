"use client";

import React, { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import {
  Search,
  BookOpen,
  Calculator,
  FlaskConical,
  Atom,
  Globe,
  Palette,
  Dumbbell,
  Code,
  Sparkles,
  Users,
  Compass,
  HeartPulse,
  Filter,
  CheckCircle2,
  X,
  ChevronRight,
  GraduationCap,
  Clock,
  Award,
  FileText,
  HelpCircle,
  Lightbulb,
} from "lucide-react";

interface SubjectItem {
  id: string;
  name: string;
  code: string;
  category: "mipa" | "ips" | "wajib" | "seni-pjok" | "mulok";
  categoryLabel: string;
  phase: "Fase E & F" | "Fase E" | "Fase F";
  hoursPerWeek: number;
  icon: React.ElementType;
  color: string;
  bgLight: string;
  borderAccent: string;
  description: string;
  competencies: string[];
  syllabus: string[];
  recommendedMajors?: string[];
}

const subjectsData: SubjectItem[] = [
  {
    id: "mat-lanjut",
    name: "Matematika Tingkat Lanjut",
    code: "MAT-TL",
    category: "mipa",
    categoryLabel: "MIPA / Sains & Math",
    phase: "Fase F",
    hoursPerWeek: 5,
    icon: Calculator,
    color: "text-blue-600",
    bgLight: "bg-blue-50/80",
    borderAccent: "border-blue-200",
    description: "Mendalami kalkulus, aljabar linier, geometri analitik, dan deret angka untuk persiapan kuliah teknik & sains.",
    competencies: ["Kalkulus & Turunan", "Vektor & Matriks", "Polinomial & Fungsi Lanjut", "Pemodelan Matematika"],
    syllabus: ["Fungsi & Grafiknya", "Limit & Turunan", "Integral & Aplikasinya", "Matriks & Sistem Persamaan"],
    recommendedMajors: ["Teknik Informatika", "Teknik Sipil/Mesin", "Statistika & Data Science", "Fisika / MIPA"],
  },
  {
    id: "fisika",
    name: "Fisika",
    code: "FIS-10",
    category: "mipa",
    categoryLabel: "MIPA / Sains & Math",
    phase: "Fase E & F",
    hoursPerWeek: 4,
    icon: Atom,
    color: "text-indigo-600",
    bgLight: "bg-indigo-50/80",
    borderAccent: "border-indigo-200",
    description: "Mempelajari hukum mekanika, termodinamika, gelombang, optik, dan prinsip energi terbarukan.",
    competencies: ["Kinematika & Dinamika", "Termodinamika & Gelombang", "Listrik & Magnet", "Fisika Modern & Energi"],
    syllabus: ["Vektor Gaya", "Hukum Newton & Gravitasi", "Usaha & Energi", "Listrik Arus Searah & Bolak-Balik"],
    recommendedMajors: ["Teknik Elektro", "Teknik Industri", "Astrofisika", "Pendidikan Fisika"],
  },
  {
    id: "kimia",
    name: "Kimia",
    code: "KIM-10",
    category: "mipa",
    categoryLabel: "MIPA / Sains & Math",
    phase: "Fase E & F",
    hoursPerWeek: 4,
    icon: FlaskConical,
    color: "text-teal-600",
    bgLight: "bg-teal-50/80",
    borderAccent: "border-teal-200",
    description: "Eksplorasi struktur atom, ikatan kimia, reaksi stoikiometri, asam-basa, dan kimia organik.",
    competencies: ["Struktur Atom & Tabel Periodik", "Stoikiometri Reaksi", "Termokimia & Laju Reaksi", "Senyawa Karbon & Polimer"],
    syllabus: ["Model Atom Bohr & Kuantum", "Ikatan Kovalent & Ionik", "Larutan Asam Basa & Titrasi", "Kimia Organik Dasar"],
    recommendedMajors: ["Kedokteran", "Farmasi", "Teknik Kimia", "Bioteknologi"],
  },
  {
    id: "biologi",
    name: "Biologi",
    code: "BIO-10",
    category: "mipa",
    categoryLabel: "MIPA / Sains & Math",
    phase: "Fase E & F",
    hoursPerWeek: 4,
    icon: HeartPulse,
    color: "text-emerald-600",
    bgLight: "bg-emerald-50/80",
    borderAccent: "border-emerald-200",
    description: "Keanekaragaman hayati, struktur sel, genetika molekuler, ekosistem, dan bioteknologi modern.",
    competencies: ["Ekosistem & Konservasi", "Struktur & Fungsi Sel", "Genetika & Pewarisan Sifat", "Bioteknologi Konvensional & Modern"],
    syllabus: ["Keanekaragaman Hayati Jambi", "Biologi Sel & Jaringan", "Sistem Organ Manusia", "Genetika & DNA"],
    recommendedMajors: ["Kedokteran Umum", "Kedokteran Gigi", "Bioteknologi", "Pertanian & Kehutanan"],
  },
  {
    id: "informatika",
    name: "Informatika & Koding",
    code: "INF-10",
    category: "mipa",
    categoryLabel: "MIPA / Sains & Math",
    phase: "Fase E & F",
    hoursPerWeek: 3,
    icon: Code,
    color: "text-cyan-600",
    bgLight: "bg-cyan-50/80",
    borderAccent: "border-cyan-200",
    description: "Berpikir komputasional, pemrograman Python/Web, analisis data, jaringan komputer, dan etika digital.",
    competencies: ["Berpikir Komputasional", "Algoritma & Pemrograman", "Analisis Data", "Jaringan & Keamanan Siber"],
    syllabus: ["Dasar Algoritma Python", "Struktur Data", "Web Development Dasar", "Dampak Sosial Informatika"],
    recommendedMajors: ["Teknik Informatika", "Sistem Informasi", "Cybersecurity", "Kecerdasan Buatan (AI)"],
  },
  {
    id: "ekonomi",
    name: "Ekonomi & Akuntansi",
    code: "EKO-10",
    category: "ips",
    categoryLabel: "IPS / Sosial & Humaniora",
    phase: "Fase E & F",
    hoursPerWeek: 4,
    icon: Compass,
    color: "text-amber-600",
    bgLight: "bg-amber-50/80",
    borderAccent: "border-amber-200",
    description: "Analisis pasar, kelangkaan sumber daya, manajemen keuangan, lembaga perbankan, dan akuntansi dasar.",
    competencies: ["Kelangkaan & Skala Prioritas", "Mekanisme Pasar (Penawaran & Permintaan)", "Bank & Lembaga Keuangan", "Siklus Akuntansi Jasa & Dagang"],
    syllabus: ["Kebutuhan Manusia & Sistem Ekonomi", "Kebijakan Moneter & Fiskal", "Perdagangan Internasional", "Laporan Keuangan Dasar"],
    recommendedMajors: ["Manajemen", "Akuntansi", "Ilmu Ekonomi", "Perbankan"],
  },
  {
    id: "sosiologi",
    name: "Sosiologi",
    code: "SOS-10",
    category: "ips",
    categoryLabel: "IPS / Sosial & Humaniora",
    phase: "Fase E & F",
    hoursPerWeek: 4,
    icon: Users,
    color: "text-orange-600",
    bgLight: "bg-orange-50/80",
    borderAccent: "border-orange-200",
    description: "Interaksi sosial, struktur masyarakat, penanganan konflik sosial, serta penelitian sosial masyarakat.",
    competencies: ["Interaksi & Lembaga Sosial", "Ragam Gejala Sosial", "Konflik & Integrasi Sosial", "Metodologi Penelitian Sosial"],
    syllabus: ["Individu, Kelompok, & Masyarakat", "Penyimpangan Sosial", "Konflik & Resolusi Konflik", "Rancangan Penelitian Lapangan"],
    recommendedMajors: ["Sosiologi", "Ilmu Komunikasi", "Hubungan Internasional", "Hukum"],
  },
  {
    id: "geografi",
    name: "Geografi",
    code: "GEO-10",
    category: "ips",
    categoryLabel: "IPS / Sosial & Humaniora",
    phase: "Fase E & F",
    hoursPerWeek: 4,
    icon: Globe,
    color: "text-sky-600",
    bgLight: "bg-sky-50/80",
    borderAccent: "border-sky-200",
    description: "Studi fenomena geosfer, pemetaan GIS, iklim, dinamika kependudukan, dan mitigasi bencana alam.",
    competencies: ["Prinsip & Konsep Geografi", "Penginderaan Jauh & SIG", "Litosfer & Hidrosfer", "Dinamika Kependudukan & Lingkungan"],
    syllabus: ["Pengetahuan Dasar Map & GIS", "Dinamika Planet Bumi", "Sumber Daya Alam Indonesia", "Kependudukan & Mitigasi Bencana"],
    recommendedMajors: ["Perencanaan Wilayah & Kota", "Geografi", "Teknik Geodesi", "Ilmu Lingkungan"],
  },
  {
    id: "sejarah-lanjut",
    name: "Sejarah Tingkat Lanjut",
    code: "SEJ-TL",
    category: "ips",
    categoryLabel: "IPS / Sosial & Humaniora",
    phase: "Fase F",
    hoursPerWeek: 4,
    icon: BookOpen,
    color: "text-rose-600",
    bgLight: "bg-rose-50/80",
    borderAccent: "border-rose-200",
    description: "Kajian kritis dinamika sejarah Indonesia, peradaban dunia, perang dunia, serta historiografi.",
    competencies: ["Metode Penelitian Sejarah", "Peradaban Kuno Dunia", "Pergerakan Nasional Indonesia", "Dinamika Dunia Modern"],
    syllabus: ["Pengantar Historiografi", "Kerajaan Nusantara", "Revolusi Dunia & Pengaruhnya", "Indonesia Pasca-Kemerdekaan"],
    recommendedMajors: ["Ilmu Sejarah", "Hubungan Internasional", "Ilmu Politik", "Arkeologi"],
  },
  {
    id: "bahasa-indonesia",
    name: "Bahasa Indonesia",
    code: "IND-10",
    category: "wajib",
    categoryLabel: "Wajib / Umum",
    phase: "Fase E & F",
    hoursPerWeek: 4,
    icon: FileText,
    color: "text-blue-700",
    bgLight: "bg-blue-50/60",
    borderAccent: "border-blue-100",
    description: "Pengembangan literasi, sintesis teks opini, karya ilmiah, puisi, drama, serta komunikasi lisan bernalar kritis.",
    competencies: ["Membaca & Memirsa Teks Kritis", "Menulis Karya Teks Laporan & Opini", "Berbicara & Mempresentasikan Ide", "Apresiasi Sastra"],
    syllabus: ["Teks Laporan Hasil Observasi", "Teks Eksposisi & Negosiasi", "Teks Resensi & Artikel Ilmiah", "Puisi & Drama Klasik/Modern"],
  },
  {
    id: "bahasa-inggris",
    name: "Bahasa Inggris",
    code: "ING-10",
    category: "wajib",
    categoryLabel: "Wajib / Umum",
    phase: "Fase E & F",
    hoursPerWeek: 3,
    icon: Sparkles,
    color: "text-purple-600",
    bgLight: "bg-purple-50/80",
    borderAccent: "border-purple-200",
    description: "Penguasaan komunikasi global melalui analytical exposition, narrative texts, academic discussion, dan public speaking.",
    competencies: ["Listening & Academic Speaking", "Reading Exposition Texts", "Writing Essay & Email Formal", "Intercultural Communication"],
    syllabus: ["Descriptive & Narrative Texts", "Analytical Exposition Text", "Hortatory Exposition & Debate", "Academic Presentation"],
  },
  {
    id: "pendidikan-agama",
    name: "Pendidikan Agama & Budi Pekerti",
    code: "PAI-10",
    category: "wajib",
    categoryLabel: "Wajib / Umum",
    phase: "Fase E & F",
    hoursPerWeek: 3,
    icon: Lightbulb,
    color: "text-green-700",
    bgLight: "bg-green-50/70",
    borderAccent: "border-green-200",
    description: "Pembentukan karakter akhlak mulia, nilai-nilai spiritualitas, moderasi beragama, dan toleransi sosial.",
    competencies: ["Pemahaman Kitab Suci & Hadis", "Akhlak Terhadap Sesama & Alam", "Fikih Muamalah Modern", "Sejarah Kebudayaan"],
    syllabus: ["Kajian Ayat-Ayat Al-Qur'an", "Akhlak Mahmudah & Moderasi", "Fikih Keseharian & Etika", "Toleransi Beragama"],
  },
  {
    id: "seni-budaya",
    name: "Seni Budaya & Kreasi",
    code: "SEN-10",
    category: "seni-pjok",
    categoryLabel: "Seni & Olahraga",
    phase: "Fase E & F",
    hoursPerWeek: 2,
    icon: Palette,
    color: "text-fuchsia-600",
    bgLight: "bg-fuchsia-50/80",
    borderAccent: "border-fuchsia-200",
    description: "Eksplorasi seni rupa, musik tradisional/modern, seni tari, dan seni pertunjukan kreatif.",
    competencies: ["Apresiasi Karya Seni", "Kreasi Seni Rupa Dua/Tiga Dimensi", "Musik Tradisional Nusantara", "Pameran & Pergelaran Seni"],
    syllabus: ["Dasar Seni Rupa & Desain", "Musik Tradisional Melayu Jambi", "Seni Tari Kreasi", "Manajemen Pameran Sekolah"],
  },
  {
    id: "pjok",
    name: "Pendidikan Jasmani, Olahraga & Kesehatan (PJOK)",
    code: "PJK-10",
    category: "seni-pjok",
    categoryLabel: "Seni & Olahraga",
    phase: "Fase E & F",
    hoursPerWeek: 3,
    icon: Dumbbell,
    color: "text-red-600",
    bgLight: "bg-red-50/80",
    borderAccent: "border-red-200",
    description: "Pengembangan kebugaran jasmani, olahraga permainan bola besar/kecil, atletik, dan pola hidup sehat.",
    competencies: ["Keterampilan Gerak Olahraga", "Kebugaran Jasmani Mandiri", "Permainan Berkelompok & Sportivitas", "Kesehatan Reproduksi & Gizi"],
    syllabus: ["Permainan Sepak Bola & Voli", "Atletik & Senam Lantai", "Tes Kebugaran Jasmani", "Pola Makan Sehat & Bebas Narkoba"],
  },
  {
    id: "muatan-lokal",
    name: "Muatan Lokal (Bahasa & Budaya Jambi)",
    code: "MLK-10",
    category: "mulok",
    categoryLabel: "Muatan Lokal",
    phase: "Fase E & F",
    hoursPerWeek: 2,
    icon: HelpCircle,
    color: "text-yellow-700",
    bgLight: "bg-yellow-50/80",
    borderAccent: "border-yellow-200",
    description: "Pelestarian adat istiadat Jambi, sastra lisan, kerajinan ukir/batik Tebo, serta kewirausahaan lokal.",
    competencies: ["Pengetahuan Adat & Budaya Tebo", "Batik Jambi & Ukiran Tradisional", "Sastra Lisan Seloko Jambi", "Kewirausahaan Berbasis Produk Lokal"],
    syllabus: ["Sejarah Kuno Kabupaten Tebo", "Batik Motif Khas Tebo", "Seni Seloko Melayu Jambi", "Projek Produk Lokal Sekolah"],
  },
];

export default function MataPelajaranPage() {
  const [headerRef, , headerStyle] = useScrollReveal({ variant: "fade-up", duration: 700 });
  const [filterRef, , filterStyle] = useScrollReveal({ variant: "fade-up", duration: 700, delay: 100 });
  const [gridRef, , gridStyle] = useScrollReveal({ variant: "fade-up", duration: 800, delay: 150 });

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSubject, setSelectedSubject] = useState<SubjectItem | null>(null);

  // Filter subjects based on active tab and search query
  const filteredSubjects = subjectsData.filter((subject) => {
    const matchesCategory =
      activeCategory === "all" || subject.category === activeCategory;
    const matchesSearch =
      subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subject.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subject.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-6 sm:pt-10 md:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Badge & Page Title */}
        <div ref={headerRef} style={headerStyle} className="flex flex-col items-center text-center mb-10">
          <div className="flex flex-col items-center mb-2">
            <span className="w-10 h-[3px] bg-[#f6bf22] mb-2 rounded-full"></span>
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-widest text-[#f6bf22]">
              AKADEMIK SMAN 2 TEBO
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-jakarta text-[#003883] tracking-tight relative inline-block">
            <span className="relative z-10">
              Mata Pelajaran{" "}
              <span className="relative inline-block text-[#003883]">
                Kurikulum Merdeka
                <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#f6bf22] -z-10 rounded-full"></span>
              </span>
            </span>
          </h1>
          <p className="mt-3.5 max-w-2xl font-inter text-[#475569] text-sm sm:text-base leading-relaxed">
            Struktur kurikulum terpadu yang dirancang untuk mengasah kecerdasan intelektual, keterampilan praktis, dan karakter berlandaskan nilai-nilai Profil Pelajar Pancasila.
          </p>
        </div>

        {/* Highlight Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-blue-50 text-[#003883] flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-jakarta text-[#1e293b]">15+</div>
              <div className="text-xs text-slate-500 font-inter">Total Mata Pelajaran</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-jakarta text-[#1e293b]">Fase E & F</div>
              <div className="text-xs text-slate-500 font-inter">Jenjang Kelas X, XI & XII</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-jakarta text-[#1e293b]">Fleksibel</div>
              <div className="text-xs text-slate-500 font-inter">Pilihan Minat Bebas</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-jakarta text-[#1e293b]">45+ JP</div>
              <div className="text-xs text-slate-500 font-inter">Beban Belajar / Minggu</div>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Section */}
        <div ref={filterRef} style={filterStyle} className="bg-white rounded-2xl p-4 sm:p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            
            {/* Realtime Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Cari mata pelajaran atau topik..."
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
                Semua ({subjectsData.length})
              </button>

              <button
                onClick={() => setActiveCategory("mipa")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-inter transition-all flex items-center gap-1.5 ${
                  activeCategory === "mipa"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Calculator className="w-3.5 h-3.5" />
                MIPA
              </button>

              <button
                onClick={() => setActiveCategory("ips")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-inter transition-all flex items-center gap-1.5 ${
                  activeCategory === "ips"
                    ? "bg-amber-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                IPS
              </button>

              <button
                onClick={() => setActiveCategory("wajib")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-inter transition-all flex items-center gap-1.5 ${
                  activeCategory === "wajib"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                Wajib / Umum
              </button>

              <button
                onClick={() => setActiveCategory("seni-pjok")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-inter transition-all flex items-center gap-1.5 ${
                  activeCategory === "seni-pjok"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                Seni & Olahraga
              </button>

              <button
                onClick={() => setActiveCategory("mulok")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-inter transition-all flex items-center gap-1.5 ${
                  activeCategory === "mulok"
                    ? "bg-yellow-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                Muatan Lokal
              </button>
            </div>

          </div>
        </div>

        {/* Subject Grid Cards */}
        <div ref={gridRef} style={gridStyle} className="mb-16">
          {filteredSubjects.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold font-jakarta text-slate-700">Mata Pelajaran Tidak Ditemukan</h3>
              <p className="text-xs sm:text-sm text-slate-500 font-inter mt-1">
                Coba gunakan kata kunci pencarian lain atau pilih kategori yang berbeda.
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
              {filteredSubjects.map((subject) => {
                const IconComponent = subject.icon;
                return (
                  <div
                    key={subject.id}
                    className="group bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,56,131,0.08)] hover:border-[#003883]/20 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    <div className="p-6">
                      
                      {/* Top Badges Header */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-[11px] font-bold font-inter ${subject.bgLight} ${subject.color}`}>
                          {subject.categoryLabel}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-semibold font-mono">
                          {subject.phase}
                        </span>
                      </div>

                      {/* Title & Icon */}
                      <div className="flex items-start gap-3.5 mb-3">
                        <div className={`w-12 h-12 rounded-xl ${subject.bgLight} ${subject.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold font-jakarta text-slate-800 group-hover:text-[#003883] transition-colors leading-snug">
                            {subject.name}
                          </h2>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[11px] font-mono text-slate-400">{subject.code}</span>
                            <span className="text-slate-300">•</span>
                            <span className="text-xs font-inter text-slate-500 flex items-center gap-1">
                              <Clock className="w-3 h-3 text-slate-400" />
                              {subject.hoursPerWeek} JP / Minggu
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm font-inter text-slate-600 leading-relaxed mb-4 line-clamp-3">
                        {subject.description}
                      </p>

                      {/* Key Competencies List */}
                      <div className="space-y-1.5 pt-3 border-t border-slate-100">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                          Kompetensi Utama:
                        </span>
                        {subject.competencies.slice(0, 3).map((comp, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-inter text-slate-700">
                            <CheckCircle2 className={`w-3.5 h-3.5 ${subject.color} shrink-0`} />
                            <span className="truncate">{comp}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                    {/* Bottom Action Button */}
                    <div className="px-6 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between group-hover:bg-blue-50/50 transition-colors">
                      <span className="text-xs font-semibold font-inter text-[#003883]">
                        Detail Silabus & Capaian
                      </span>
                      <button
                        onClick={() => setSelectedSubject(subject)}
                        className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-[#003883] group-hover:text-white group-hover:border-[#003883] transition-all"
                        aria-label={`Detail ${subject.name}`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Kurikulum Merdeka Guidance Section */}
        <div className="bg-gradient-to-br from-[#003883] to-[#1e4fa3] rounded-3xl p-6 sm:p-10 md:p-12 text-white relative overflow-hidden shadow-xl mb-12">
          
          {/* Subtle Decorative Circle */}
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold text-[#f6bf22]">
                <Lightbulb className="w-4 h-4 text-[#f6bf22]" />
                Panduan Sistem Fase Kurikulum Merdeka
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-jakarta tracking-tight">
                Bagaimana Cara Memilih Mata Pelajaran Pilihan di Fase F?
              </h2>
              <p className="text-xs sm:text-sm font-inter text-blue-100/90 leading-relaxed">
                Di kelas XI & XII (Fase F), peserta didik tidak dibatasi jurusan IPA/IPS kaku. Setiap siswa berhak memilih 4-5 mata pelajaran pilihan yang disesuaikan dengan minat bakat, rencana jurusan kuliah (SNBT/SNBP), dan cita-cita karir masa depan.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-xl border border-white/10">
                  <span className="text-xs font-bold text-white block mb-1">Rencana Kuliah Teknik / IT</span>
                  <span className="text-[11.5px] text-blue-200">Rekomendasi: Matematika Lanjut, Fisika, Informatika</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-xl border border-white/10">
                  <span className="text-xs font-bold text-white block mb-1">Rencana Kuliah Kedokteran / Kesehatan</span>
                  <span className="text-[11.5px] text-blue-200">Rekomendasi: Biologi, Kimia, Matematika Lanjut</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center flex flex-col items-center">
              <HelpCircle className="w-12 h-12 text-[#f6bf22] mb-3" />
              <h3 className="text-base font-bold font-jakarta text-white">Butuh Konsultasi Pemilihan Mapel?</h3>
              <p className="text-xs font-inter text-blue-100 mt-1 mb-4">
                Tim Bimbingan Konseling (BK) SMAN 2 Tebo siap membantu analisis minat bakat Anda.
              </p>
              <button className="w-full bg-[#f6bf22] text-[#251a00] font-bold text-xs py-3 px-5 rounded-xl hover:bg-[#e0ad1b] active:scale-95 transition-all shadow-md">
                Konsultasi dengan Guru BK
              </button>
            </div>

          </div>
        </div>

        {/* Subject Detail Modal */}
        {selectedSubject && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-100 shadow-2xl p-6 sm:p-8 relative">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedSubject(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 flex items-center justify-center transition-all"
                aria-label="Tutup modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl ${selectedSubject.bgLight} ${selectedSubject.color} flex items-center justify-center shrink-0`}>
                  {React.createElement(selectedSubject.icon, { className: "w-7 h-7" })}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold font-inter ${selectedSubject.bgLight} ${selectedSubject.color}`}>
                      {selectedSubject.categoryLabel}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{selectedSubject.code}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-jakarta text-slate-800">
                    {selectedSubject.name}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="space-y-5 font-inter text-slate-700 text-xs sm:text-sm">
                
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Deskripsi Mata Pelajaran</h4>
                  <p className="leading-relaxed text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {selectedSubject.description}
                  </p>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 block mb-0.5">Jenjang / Phase</span>
                    <span className="font-semibold text-slate-800">{selectedSubject.phase}</span>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 block mb-0.5">Beban Jam Pelajaran</span>
                    <span className="font-semibold text-slate-800">{selectedSubject.hoursPerWeek} Jam Pelajaran / Minggu</span>
                  </div>
                </div>

                {/* Syllabus List */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Ringkasan Silabus & Materi Utama</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedSubject.syllabus.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2.5 bg-blue-50/50 rounded-lg text-slate-700 text-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#003883] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Majors */}
                {selectedSubject.recommendedMajors && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Rekomendasi Jurusan Perguruan Tinggi</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedSubject.recommendedMajors.map((major, idx) => (
                        <span key={idx} className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold border border-amber-200/60">
                          {major}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedSubject(null)}
                  className="px-5 py-2.5 bg-[#003883] text-white rounded-xl text-xs font-semibold hover:bg-[#002860] transition-all"
                >
                  Tutup Detail
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
