"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/lib/useScrollReveal";
import {
  Users,
  Award,
  Target,
  Sparkles,
  Vote,
  Calendar,
  Megaphone,
  Globe,
  HeartHandshake,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  Send,
  X,
  Star,
  Flame,
  Tv,
  Activity,
  Dumbbell,
  Palette,
  Code,
  Lightbulb,
  Check,
  ChevronRight,
} from "lucide-react";

interface ExecutiveOfficer {
  name: string;
  role: string;
  classGrade: string;
  avatar: string;
  quote: string;
  instagram?: string;
}

interface SekbidItem {
  id: number;
  title: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  description: string;
  programs: string[];
}

const executiveOfficers: ExecutiveOfficer[] = [
  {
    name: "Muhammad Hafiz",
    role: "Ketua OSIS",
    classGrade: "Kelas XI MIPA 1",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    quote: "Mengabdi dengan aksi nyata, memimpin dengan integritas, dan menginspirasi seluruh siswa SMAN 2 Tebo.",
    instagram: "@hafiz_sman2tebo",
  },
  {
    name: "Nabila Putri Ramadhani",
    role: "Wakil Ketua OSIS",
    classGrade: "Kelas XI IPS 1",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    quote: "Sinergi dan kolaborasi adalah kunci mewujudkan OSIS yang responsif, adaptif, dan inklusif.",
    instagram: "@nabilaputri_r",
  },
  {
    name: "Raihan Syahputra",
    role: "Sekretaris Umum",
    classGrade: "Kelas XI MIPA 2",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    quote: "Tertib administrasi dan dokumentasi presisi untuk transparansi seluruh kegiatan kesiswaan.",
    instagram: "@raihan_syah",
  },
  {
    name: "Aulia Rahmawati",
    role: "Bendahara Umum",
    classGrade: "Kelas XI MIPA 3",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
    quote: "Pengelolaan keuangan yang akuntabel, efisien, dan mendukung kejayaan progaram OSIS.",
    instagram: "@auliarahma_w",
  },
];

const sekbidList: SekbidItem[] = [
  {
    id: 1,
    title: "Sekbid 1: Keagamaan & Ketaqwaan",
    icon: Sparkles,
    color: "text-[#003883]",
    bgColor: "bg-blue-50",
    description: "Pembinaan mental kerohanian, pelaksanaan Peringatan Hari Besar Islam (PHBI), dan kajian keagamaan sekolah.",
    programs: ["Peringatan Isra Mi'raj & Maulid Nabi", "Kajian Ketaqwaan Jumat Pagi", "Infaq & Sholat Berjamaah"],
  },
  {
    id: 2,
    title: "Sekbid 2: Budi Pekerti & Karakter",
    icon: ShieldCheck,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    description: "Penegakan kedisiplinan siswa, penanaman norma kesopanan 5S (Senyum, Sapa, Salam, Sopan, Santun).",
    programs: ["Penegakan Kedisiplinan Seragam & Waktu", "Gerakan 5S & Ramah Lingkungan", "Razia Ketertiban Edukatif"],
  },
  {
    id: 3,
    title: "Sekbid 3: Paskibra & Wawasan Kebangsaan",
    icon: Star,
    color: "text-red-600",
    bgColor: "bg-red-50",
    description: "Pelatihan Pasukan Pengibar Bendera (Paskibra), upacara bendera mingguan, dan wawasan bela negara.",
    programs: ["Petugas Upacara Bendera Rutin", "Peringatan HUT RI & Hari Pahlawan", "Pendidikan Wawasan Nusantara"],
  },
  {
    id: 4,
    title: "Sekbid 4: Prestasi Akademik & OSN",
    icon: Award,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    description: "Pendampingan kompetisi sains (OSN), Olimpiade Penelitian Siswa (OPSI), dan kelompok belajar inklusif.",
    programs: ["Pembinaan Intensif Tim OSN SMAN 2 Tebo", "Lomba Cerdas Cermat Antarkelas", "Klub Belajar Tutor Sebaya"],
  },
  {
    id: 5,
    title: "Sekbid 5: Demokrasi & HAM",
    icon: Vote,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    description: "Penyelenggaraan Pemilu OSIS demokratis, musyawarah siswa (MPK), dan edukasi hak asasi manusia.",
    programs: ["Pemilu Ketua & Wakil Ketua OSIS E-Voting", "Sidang Pleno Laporan Pertanggungjawaban", "Forum Aspirasi Siswa"],
  },
  {
    id: 6,
    title: "Sekbid 6: Kewirausahaan & Kreativitas",
    icon: Lightbulb,
    color: "text-yellow-700",
    bgColor: "bg-yellow-50",
    description: "Penumbuhan jiwa entrepreneurship siswa melalui bazaar kreatif, koperasi siswa, dan produk inovatif.",
    programs: ["Bazaar Entrepreneurship Pentas Seni", "Pengelolaan Koperasi OSIS Mart", "Pelatihan Workshop Bisnis Digital"],
  },
  {
    id: 7,
    title: "Sekbid 7: Olahraga & Kebugaran (PMR)",
    icon: Dumbbell,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    description: "Penyelenggaraan turnamen olahraga antar kelas (Classmeeting), Palang Merah Remaja (PMR), dan kebugaran.",
    programs: ["Classmeeting Turnamen Futsal & Voli", "Donor Darah & Pos Sehat PMR", "Senam Kebugaran Bersama"],
  },
  {
    id: 8,
    title: "Sekbid 8: Sastra, Seni, & Budaya",
    icon: Palette,
    color: "text-fuchsia-600",
    bgColor: "bg-fuchsia-50",
    description: "Pelestarian tarian Melayu Jambi, pentas seni musik, seni rupa, dan majalah dinding (Mading) kreatif.",
    programs: ["Pentas Seni & Budaya Tahunan (Pensi)", "Lomba Mading & Fotografi", "Sanggar Tari & Musik Sekolah"],
  },
  {
    id: 9,
    title: "Sekbid 9: Teknologi Informasi & Humas",
    icon: Code,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    description: "Pengelolaan media sosial resmi OSIS, dokumentasi podcast, liputan video event, dan transparansi informasi.",
    programs: ["Konten Kreatif Instagram & TikTok OSIS", "Podcast Suara Siswa SMAN 2 Tebo", "Desain Grafis & Liputan Event"],
  },
  {
    id: 10,
    title: "Sekbid 10: Bahasa Asing & Global",
    icon: Globe,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    description: "Pengembangan kemampuan komunikasi Bahasa Inggris, English Club, debate contest, dan wawasan global.",
    programs: ["English Day & Speech Competition", "Debate Club SMAN 2 Tebo", "Workshop TOEFL & Study Abroad"],
  },
];

const flagshipEvents = [
  {
    title: "TEBO CUP & Pentas Seni (Pensi)",
    date: "Oktober / November Tahunan",
    tag: "Event Akbar",
    description: "Ajang turnamen olahraga antarsekolah se-Kabupaten Tebo diselingi panggung hiburan karya seni siswa spektakuler.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Latihan Dasar Kepemimpinan Murid (LDKM)",
    date: "Awal Masa Bakti Kepengurusan",
    tag: "Kaderisasi",
    description: "Penggemblengan disiplin, wawasan organisasi, pemecahan masalah, dan jiwa kepemimpinan calon pengurus OSIS & MPK.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "OSIS Peduli & Bakti Sosial Lingkungan",
    date: "Bulan Ramadhan & Hari Jadi Sekolah",
    tag: "Aksi Sosial",
    description: "Penyaluran paket sembako untuk warga kurang mampu di Tebo, aksi tanam 1.000 pohon, dan bersih-bersih lingkungan.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Pemilu OSIS Digital (E-Voting)",
    date: "September Tahunan",
    tag: "Demokrasi",
    description: "Proses pesta demokrasi pemilihan Ketua & Wakil Ketua OSIS berbasis aplikasi e-voting transparan dan berintegritas.",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=600",
  },
];

export default function OsisPage() {
  const [headerRef, , headerStyle] = useScrollReveal({ variant: "fade-up", duration: 700 });
  const [officersRef, , officersStyle] = useScrollReveal({ variant: "fade-up", duration: 700, delay: 100 });
  const [sekbidRef, , sekbidStyle] = useScrollReveal({ variant: "fade-up", duration: 800, delay: 150 });
  const [eventsRef, , eventsStyle] = useScrollReveal({ variant: "fade-up", duration: 800, delay: 200 });

  const [isAspirationModalOpen, setIsAspirationModalOpen] = useState<boolean>(false);
  const [aspirationSubmitted, setAspirationSubmitted] = useState<boolean>(false);
  const [aspirationData, setAspirationData] = useState({
    name: "",
    studentClass: "Kelas X",
    category: "Usulan Event / Kegiatan",
    message: "",
  });

  const handleAspirationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAspirationSubmitted(true);
    setTimeout(() => {
      setAspirationSubmitted(false);
      setIsAspirationModalOpen(false);
      setAspirationData({
        name: "",
        studentClass: "Kelas X",
        category: "Usulan Event / Kegiatan",
        message: "",
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
              ORGANISASI SISWA INTRA SEKOLAH (OSIS)
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-jakarta text-[#003883] tracking-tight relative inline-block">
            <span className="relative z-10">
              OSIS SMAN 2{" "}
              <span className="relative inline-block text-[#003883]">
                TEBO
                <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#f6bf22] -z-10 rounded-full"></span>
              </span>
            </span>
          </h1>
          <p className="mt-3.5 max-w-2xl font-inter text-[#475569] text-sm sm:text-base leading-relaxed">
            Wadah resmi kepemimpinan, kreasi, dan penyalur aspirasi siswa SMAN 2 Tebo. Mengabdi dengan aksi nyata, menginspirasi melalui prestasi.
          </p>
        </div>

        {/* Kabinet Banner & Motto */}
        <div className="bg-gradient-to-r from-[#003883] via-[#1e4fa3] to-[#002860] rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-[#f6bf22]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold text-[#f6bf22]">
                <Flame className="w-4 h-4 text-[#f6bf22]" />
                Kabinet Berdikari • Masa Bakti 2025/2026
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-jakarta">
                Visi OSIS: "Sinergi, Inovatif, & Berkarakter Pancasila"
              </h2>
              <p className="text-xs sm:text-sm text-blue-100/90 font-inter max-w-2xl leading-relaxed">
                Mewujudkan OSIS SMAN 2 Tebo sebagai organisasi yang partisipatif, memfasilitasi minat bakat siswa secara inklusif, serta menjunjung tinggi nilai-nilai akhlak mulia, kepemimpinan, dan kecintaan pada almamater.
              </p>
            </div>

            <button
              onClick={() => setIsAspirationModalOpen(true)}
              className="bg-[#f6bf22] text-[#251a00] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl hover:bg-[#e0ad1b] active:scale-95 transition-all shadow-md shrink-0 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Kirim Aspirasi / Ide Siswa
            </button>
          </div>
        </div>

        {/* Executive Officers (Pengurus Inti OSIS) */}
        <div ref={officersRef} style={officersStyle} className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#003883] uppercase tracking-wider block mb-1">
              PENGURUS INTI
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-jakarta text-slate-800">
              Pengurus Inti OSIS 2025/2026
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-inter mt-1.5">
              Para pemimpin muda yang mengkoordinasikan seluruh aktivitas kesiswaan SMAN 2 Tebo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {executiveOfficers.map((officer, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,56,131,0.08)] hover:border-[#003883]/20 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 bg-slate-100 overflow-hidden">
                    <img
                      src={officer.avatar}
                      alt={officer.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#003883] text-white font-bold text-[10px] uppercase inline-block mb-1 border border-white/20">
                        {officer.role}
                      </span>
                      <h3 className="text-base font-bold font-jakarta leading-tight">
                        {officer.name}
                      </h3>
                      <p className="text-xs text-blue-200 font-inter">{officer.classGrade}</p>
                    </div>
                  </div>

                  <div className="p-4 font-inter text-xs text-slate-600">
                    <p className="italic text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100 leading-relaxed">
                      "{officer.quote}"
                    </p>
                  </div>
                </div>

                {officer.instagram && (
                  <div className="px-4 py-3 bg-slate-50/70 border-t border-slate-100 text-center">
                    <span className="text-[11px] font-mono text-[#003883] font-semibold">
                      {officer.instagram}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 10 Seksi Bidang (Sekbid) Grid */}
        <div ref={sekbidRef} style={sekbidStyle} className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#003883] uppercase tracking-wider block mb-1">
              STRUKTUR DIVISI
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-jakarta text-slate-800">
              10 Seksi Bidang (Sekbid) OSIS
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-inter mt-1.5">
              Divisi operasional yang menjalankan berbagai fokus kegiatan kesiswaan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sekbidList.map((sekbid) => {
              const IconComponent = sekbid.icon;
              return (
                <div
                  key={sekbid.id}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,56,131,0.08)] hover:border-[#003883]/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-11 h-11 rounded-xl ${sekbid.bgColor} ${sekbid.color} flex items-center justify-center shrink-0`}>
                        <IconComponent className="w-5.5 h-5.5" />
                      </div>
                      <h3 className="text-base font-bold font-jakarta text-slate-800 leading-snug">
                        {sekbid.title}
                      </h3>
                    </div>

                    <p className="text-xs font-inter text-slate-600 leading-relaxed mb-4">
                      {sekbid.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Program Unggulan Sekbid:
                    </span>
                    {sekbid.programs.map((prog, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs font-inter text-slate-700">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${sekbid.color} shrink-0`} />
                        <span className="truncate">{prog}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Flagship Annual Events */}
        <div ref={eventsRef} style={eventsStyle} className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#003883] uppercase tracking-wider block mb-1">
              PROGRAM KERJA UNGGULAN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-jakarta text-slate-800">
              Event Tahunan Kebanggaan Sekolah
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-inter mt-1.5">
              Kegiatan skala besar yang diselenggarakan secara rutin oleh OSIS SMAN 2 Tebo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {flagshipEvents.map((event, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden hover:shadow-[0_12px_30px_rgba(0,56,131,0.08)] transition-all duration-300 flex flex-col md:flex-row"
              >
                <div className="relative md:w-5/12 h-48 md:h-auto bg-slate-100 overflow-hidden shrink-0">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#003883] text-white font-bold text-[10px] uppercase px-2.5 py-0.5 rounded-full border border-white/20">
                    {event.tag}
                  </span>
                </div>

                <div className="p-6 md:w-7/12 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#f6bf22] font-semibold block mb-1">
                      {event.date}
                    </span>
                    <h3 className="text-lg font-bold font-jakarta text-slate-800 group-hover:text-[#003883] transition-colors leading-snug mb-2">
                      {event.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-inter text-slate-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Suara & Aspirasi Siswa */}
        {isAspirationModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-3xl max-w-lg w-full border border-slate-100 shadow-2xl p-6 sm:p-8 relative">
              
              <button
                onClick={() => setIsAspirationModalOpen(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {aspirationSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-jakarta text-slate-800">
                    Aspirasi Anda Berhasil Terkirim!
                  </h3>
                  <p className="text-xs sm:text-sm font-inter text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Terima kasih atas ide dan masukannya! Aspirasi Anda akan dibahas langsung dalam Rapat Kerja Pengurus OSIS SMAN 2 Tebo.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#003883] flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-jakarta text-slate-800">
                        Kotak Aspirasi Siswa OSIS
                      </h3>
                      <p className="text-xs text-slate-500 font-inter">
                        Sampaikan usulan event, ide kreatif, atau saran untuk sekolah.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleAspirationSubmit} className="space-y-4 font-inter text-xs sm:text-sm">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Nama Lengkap / Anonim <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Siswa Kelas XI atau Nama Lengkap"
                        value={aspirationData.name}
                        onChange={(e) => setAspirationData({ ...aspirationData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Kelas</label>
                        <select
                          value={aspirationData.studentClass}
                          onChange={(e) => setAspirationData({ ...aspirationData, studentClass: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                        >
                          <option>Kelas X (Fase E)</option>
                          <option>Kelas XI (Fase F)</option>
                          <option>Kelas XII (Fase F)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Kategori Usulan</label>
                        <select
                          value={aspirationData.category}
                          onChange={(e) => setAspirationData({ ...aspirationData, category: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                        >
                          <option>Usulan Event / Kegiatan</option>
                          <option>Fasilitas & Ekstrakurikuler</option>
                          <option>Saran & Kritikan Membangun</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Detail Aspirasi / Ide Kreatif <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tuliskan ide atau masukan Anda secara jelas dan membangun..."
                        value={aspirationData.message}
                        onChange={(e) => setAspirationData({ ...aspirationData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003883]/20 focus:border-[#003883]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 bg-[#003883] text-white rounded-xl font-bold text-xs sm:text-sm hover:bg-[#002860] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4 text-[#f6bf22]" />
                        Kirim Aspirasi Sekarang
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
