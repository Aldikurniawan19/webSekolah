import React from "react";
import Link from "next/link";
import { Home, ChevronRight, Facebook, Twitter, MessageCircle, Eye, User, Clock } from "@/components/ui/Icons";

// Single Page metadata helper
export const metadata = {
  title: "Detail Berita - SMA Negeri 2 Tebo",
  description: "Baca informasi dan berita selengkapnya dari SMA Negeri 2 Tebo.",
};

const newsDatabase: Record<string, {
  id: string;
  category: string;
  date: string;
  views: number;
  author: string;
  title: string;
  image: string;
  introText: string;
  sectionTitle: string;
  highlights: { label: string; text: string }[];
  tags: string[];
}> = {
  "1": {
    id: "1",
    category: "SMANDA JUARA",
    date: "27 Jul 2026, 21:15",
    views: 142,
    author: "Admin Smanda",
    title: "Pertahankan Piala Bergilir, SMAN 2 Tebo Sukses Raih Juara Umum KTGT Provinsi Tahun 2026",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd_nBxn_dAR_CZg1uZBI20emGnWZZoUDWlO9Wo8fcj4_jA5GezJ-zMswqR879K0AAVpuhyOWGYEQm9ByKKnWT8fGNgQF8uyCC7Vm2CC-q2mkC2weXRHdKLEg3YSVEte1XUEXWLqNzf5BHNYpXFnqt8EG8mAT4_zjrpBltKmbvXKDXOewdD-o7WtHqPMaovMydKafkKU3KOvWBiZDvceyTPIbX_vtoI3u1jVQcWW9qZxrLRK-O2VyH6",
    introText: "SMAN 2 Tebo sukses membuktikan dominasi dan ketangguhannya dengan meraih predikat Juara Umum pada Kegiatan Kemah Temu Galang Tegak (KTGT) Tingkat Provinsi selama tiga tahun berturut-turut hingga tahun 2026. Pencapaian luar biasa ini menegaskan posisi ambalan pramuka sekolah yang berlokasi di Kabupaten Tebo ini sebagai salah satu kekuatan utama kepramukaan.",
    sectionTitle: "🏆 Konsistensi Juara Umum Tiga Tahun Berturut-turut :",
    highlights: [
      {
        label: "KTGT Ke-13 (2024)",
        text: "Langkah awal dominasi dimulai dengan menyabet gelar Juara 1 Umum melalui kemenangan di berbagai cabang lomba yaitu Juara 1 LCTK, Juara 1 Puisi Kolosal, Juara 2 Tata Laksana Tenda, Juara 3 Dance, Juara 3 Morse Cahaya dan Juara 3 Tilawatil Putri."
      },
      {
        label: "KTGT Ke-14 (2025)",
        text: "Pramuka SMAN 2 Tebo mempertahankan piala bergilir dengan kembali menjadi Juara Umum 1 se-Provinsi, didukung oleh kemenangan mutlak seperti Juara 1 Sandi Champion, Juara 1 Kontes Logo, Juara 2 Lomba Cepat Tanggap, Juara 2 Videografi, Juara 3 Nasyid dan Juara 3 Tari Kreasi."
      },
      {
        label: "KTGT Ke-15 (2026)",
        text: "Pada kompetisi yang berpusat di Bumi Perkemahan, kematangan strategi dan ketangguhan fisik serta mental para anggota penggalang penegak SMANDA kembali mengunci gelar Juara Umum untuk ketiga kalinya dengan meraih Juara 1 Lomba Ketangkasan Baris Berbaris (LKBB); Juara 1 Orientering; Juara 1 Pionering; Juara 1 Lomba Cerdas Tangkas Kepramukaan (LCTK); Juara 1 Desain Maskot; Juara 1 Vokal Group; Juara 1 Puisi Kolosal."
      }
    ],
    tags: ["#KTGT", "#Pramuka", "#Sekolah", "#Prestasi"]
  }
};

// Fallback data if id is not found or arbitrary
const fallbackNews = newsDatabase["1"];

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const news = newsDatabase[id] || fallbackNews;

  return (
    <div className="w-full bg-[#f8fafc] py-8 md:py-12 animate-fade-in min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-x">
        
        {/* Transparent Minimal Breadcrumb Navigation with Lucide Icons */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-[14.5px] text-body-gray font-inter flex-wrap">
            <li className="inline-flex items-center">
              <Link href="/" className="inline-flex items-center gap-1.5 text-gray-700 hover:text-primary transition-colors font-medium">
                <Home className="w-4 h-4 text-primary" />
                Beranda
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </li>
            <li>
              <Link href="/berita" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Berita
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </li>
            <li className="text-gray-600 font-medium truncate max-w-xs sm:max-w-sm md:max-w-md">
              {news.title}
            </li>
          </ol>
        </nav>

        {/* Main Article Container Card */}
        <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-12">
          
          {/* Header Badge & Meta Row */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="bg-primary text-white font-bold text-[11px] tracking-wide px-3 py-1 rounded-md uppercase shadow-sm">
              {news.category}
            </span>
            <div className="flex items-center gap-1.5 text-[12px] text-body-gray font-inter">
              <Clock className="w-4 h-4 text-gray-400" />
              {news.date}
            </div>
          </div>

          {/* Article Title */}
          <h1 className="font-jakarta text-[28px] md:text-[36px] font-bold text-[#0f172a] leading-[1.25] mb-4">
            {news.title}
          </h1>

          {/* Author & Views Info */}
          <div className="flex items-center gap-4 pb-6 border-b border-gray-100 text-[13px] text-body-gray font-inter mb-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                <User className="w-3.5 h-3.5 text-primary" />
              </div>
              <span>Oleh : <strong className="text-on-surface">{news.author}</strong></span>
            </div>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-gray-400" />
              <span>{news.views} kali dibaca</span>
            </div>
          </div>

          {/* Featured Article Image */}
          <div className="w-full rounded-xl overflow-hidden mb-8 shadow-sm">
            <img 
              src={news.image} 
              alt={news.title} 
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>

          {/* Article Body Content */}
          <div className="font-inter text-[15px] md:text-[16px] text-[#334155] leading-[1.8] flex flex-col gap-6">
            
            {/* Bold Lead Paragraph */}
            <p className="font-medium text-[16px] md:text-[17px] text-[#1e293b] leading-[1.7]">
              {news.introText}
            </p>

            <p>
              Berikut adalah deskripsi mendalam mengenai pilar keberhasilan dan profil prestasi SMAN 2 Tebo:
            </p>

            {/* Subheading */}
            <h2 className="font-jakarta font-bold text-[18px] text-[#0f172a] mt-2">
              {news.sectionTitle}
            </h2>

            {/* List of Highlights */}
            <ul className="flex flex-col gap-4 list-disc pl-5">
              {news.highlights.map((item, idx) => (
                <li key={idx} className="pl-1">
                  <strong className="text-[#0f172a] font-bold">{item.label}: </strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <p className="mt-2">
              Prestasi ini sekaligus membuktikan keberhasilan pembinaan ekstrakurikuler di SMAN 2 Tebo yang berorientasi pada pengembangan kedisiplinan, kepemimpinan, dan kerja sama tim.
            </p>
          </div>

          {/* Footer Tags & Social Share Buttons */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            
            {/* Hashtag Badges */}
            <div className="flex flex-wrap gap-2">
              {news.tags.map((tag, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-600 font-medium text-[12px] px-3 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>

            {/* Social Share Buttons */}
            <div className="flex items-center gap-3">
              <span className="text-[13px] font-semibold text-body-gray">Bagikan:</span>
              <div className="flex gap-2.5">
                {/* Facebook */}
                <a 
                  href="#" 
                  title="Bagikan ke Facebook"
                  className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xs"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                {/* Twitter / X */}
                <a 
                  href="#" 
                  title="Bagikan ke Twitter / X"
                  className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xs"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                {/* WhatsApp */}
                <a 
                  href="#" 
                  title="Bagikan ke WhatsApp"
                  className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </article>

      </div>
    </div>
  );
}
