"use client";

import React from "react";
import Link from "next/link";
import { useScrollReveal, staggerDelay } from "@/lib/useScrollReveal";



const newsArchiveData = [
  {
    id: 1,
    category: "SMANDA JUARA",
    date: "29 Jul 2026",
    author: "Admin Smanda",
    title: "Banggakan Sekolah dan Daerah, Ferna Gavrila Patambo Siswi SMAN 2 Tebo Raih Runner-Up...",
    description: "Suasana haru dan bangga menyelimuti keluarga besar SMA Negeri 2 Tebo. Salah satu siswi terbaiknya berhasil mengukir prestasi gemilang...",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_9SzaRzPQtOFWV_fucp25YxK7b0uHSCTbBB0H4Z19Hmp4iAqQGNIHVE5W-hIZeIg0l9rS07qrAs4G6NUi2DRVMEBGDVU0XOWMiJKVtErkKUjpykSDdiUtkxTOV5lF7Q6q0rAW4kM1mpkxxH0_VDCbtuRPOgDOr-_Bkq6nR_pbvJiSudS0f3QqmHHk2oWGfR8cYEwDhW35zYOcFFDZfi7TwIPNmD5kcxGPIzRIj45Ai7u_oxQKF8t0",
  },
  {
    id: 2,
    category: "SMANDA JUARA",
    date: "27 Jul 2026",
    author: "Admin Smanda",
    title: "Tangguh di Dinding Panjat, Atlet SMAN 2 Tebo Raih Emas O2SN Provinsi dan...",
    description: "SMA Negeri 2 Tebo berhasil membuktikan dominasinya dalam cabang olahraga panjat tebing tingkat provinsi...",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp8GnUbLceRaBXpMgSwK0rUdfP-cOP3ezqqQSD3cIaOaUaesNqHvZicbDtY77iVB-ew7sKx1TSyn30mwjptL7x5kLKBO_6EBeAc4sHN0UrlEyBQF4LElMWl67GBXaGc9MSmXxdYv-WpUsJGUmpcJauSYh1GLS6ZXSqMMoAvDRF1NCGjlY_oxP1txcT1NZMZVCszlqouc2fL7K82rllbTJQ866v0QUBNKsUrvCiWJgBGot5tDMtP2Pd",
  },
  {
    id: 3,
    category: "SMANDA JUARA",
    date: "27 Jul 2026",
    author: "Admin Smanda",
    title: "Pertahankan Piala Bergilir, SMAN 2 Tebo Sukses Raih Juara Umum KTGT...",
    description: "SMAN 2 Tebo sukses membuktikan dominasi dan mempertahankan piala bergilir kehormatan...",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd_nBxn_dAR_CZg1uZBI20emGnWZZoUDWlO9Wo8fcj4_jA5GezJ-zMswqR879K0AAVpuhyOWGYEQm9ByKKnWT8fGNgQF8uyCC7Vm2CC-q2mkC2weXRHdKLEg3YSVEte1XUEXWLqNzf5BHNYpXFnqt8EG8mAT4_zjrpBltKmbvXKDXOewdD-o7WtHqPMaovMydKafkKU3KOvWBiZDvceyTPIbX_vtoI3u1jVQcWW9qZxrLRK-O2VyH6",
  },
  {
    id: 4,
    category: "PENGUMUMAN",
    date: "23 Jul 2026",
    author: "Admin Smanda",
    title: "SMA Negeri 2 Tebo Raih Penghargaan Sekolah Adiwiyata Nasional 2025...",
    description: "Jakarta, 11 Desember 2025 - SMA Negeri 2 Tebo kembali menorehkan prestasi dalam pengelolaan lingkungan...",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDz9iz8z-KSxtG-FfpYR_p1GMaZubPULaDrf6C-1gkrSZH6jfMsieMcgeJC-BEyp64ynfnWaPAXgWljjhc8owWdWa0Q84nY3olg__7H1tnPNA97JjIPLAclAz6ZwvOwN4yNwFAveKQADSEYVqtMwk7uGrFjf69MnwU9z7pGmsriBCZfyowu1PLXzQfn7w0qoRKqxV0EjNn-pKvpQQSvFpnS8LNidcxwOU66I4Ase-VGRwYYm7SIqWMX",
  },
  {
    id: 5,
    category: "KEGIATAN SISWA",
    date: "20 Jul 2026",
    author: "Humas Smanda",
    title: "Pekan Ilmiah Pelajar 2026 Berlangsung Meriah dan Penuh Inovasi",
    description: "Berbagai karya ilmiah dan teknologi hasil kreasi siswa-siswi SMAN 2 Tebo dipamerkan pada kegiatan...",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_cj28mh_Ado3YUMOQY6VJGAyuHv1NTcTVqJPmyNotO4XV2lpjkVtx3ZibYoUaAturjtrwQnJqYb9_XmZ8ZIB0mAwz_8BcxGyfOmJT7MBNjNTsWAjWX6T8uEmVCzbKljCzvgBI5SxPKf-X0yaBV55OrZzolRYai7Y2cgMX3TIR1TCEEzVFauw0h0K4ObSkb2_gc4gMWrixdvN_XN-vwgB0ZMKkIofRP1u9CcsGoVAQrDP83EUydUWx",
  },
  {
    id: 6,
    category: "KEGIATAN SISWA",
    date: "15 Jul 2026",
    author: "OSIS Smanda",
    title: "Pentas Seni & Budaya Tahunan Sambut Tahun Ajaran Baru",
    description: "Pertunjukan seni tari daerah dan musik modern memukau seluruh siswa dalam puncak acara...",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhvz-uTQLqzMYvyBxbuvbmH8840HSfdSR9pd-uDR6b-e5kzBPOaqmcDOT1fdU1fy2BSaehJMoMXIw_wX31WkHTR8Uk45kiqtyyNYrX1TCvBm7jiHihIsmZ_XWcTm-FJZpqvEUzIFGnC3gD3nvVF78GzOT9HweJLKzT9ZOXzwPMeMfgCpaMZsdO8QD8p6KZDNMM1kx8a4qOXRzkM1zp_pmOr-RMEdqiUFD_kTKYP6lkAEgjRzkyw4ve",
  },
  {
    id: 7,
    category: "PENGUMUMAN",
    date: "10 Jul 2026",
    author: "Tim SPMB",
    title: "Peresmian Perpustakaan Digital Baru untuk Seluruh Siswa SMAN 2",
    description: "Fasilitas perpustakaan digital resmi beroperasi guna mempermudah akses buku dan referensi belajar...",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTrbF7Rp2J3aBlNJdQqmmw19hp00sYunaSW4c1rZbmjwLYh0urFqv_07rlWdISpx4-2gbgV81cbdhS4jMHfYC5CGNUSHuN3PqtYe10SdMed-9hgimwtE9H1Ozx3fdl47fDYjersgpLwiuhVUyvDp7pAXjyOWuX2_vjfBsEubJpWvGwD1br4WHOw5Cx8eFu_96dx2Q_Xe9t_uS4OAPjigsJirxk8EluARClrbm-0rvarb9KbilD3ay0",
  },
  {
    id: 8,
    category: "SMANDA JUARA",
    date: "05 Jul 2026",
    author: "Admin Smanda",
    title: "Juara 1 Lomba Debat Bahasa Indonesia Tingkat Kabupaten",
    description: "Tim debat SMAN 2 Tebo sukses membawa pulang piala kejuaraan tingkat kabupaten...",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDz9iz8z-KSxtG-FfpYR_p1GMaZubPULaDrf6C-1gkrSZH6jfMsieMcgeJC-BEyp64ynfnWaPAXgWljjhc8owWdWa0Q84nY3olg__7H1tnPNA97JjIPLAclAz6ZwvOwN4yNwFAveKQADSEYVqtMwk7uGrFjf69MnwU9z7pGmsriBCZfyowu1PLXzQfn7w0qoRKqxV0EjNn-pKvpQQSvFpnS8LNidcxwOU66I4Ase-VGRwYYm7SIqWMX",
  }
];

function NewsCard({ item, delay }: { item: typeof newsArchiveData[0]; delay: number }) {
  const [ref, , style] = useScrollReveal<HTMLAnchorElement>({ variant: "fade-up", duration: 650, delay });
  return (
    <Link
      ref={ref}
      style={style}
      key={item.id}
      href={`/berita/${item.id}`}
      className="group bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Card Image */}
      <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-primary text-white font-bold text-[11px] tracking-wide px-3 py-1 rounded-md uppercase shadow-sm">
          {item.category}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Meta Row: Date & Author */}
        <div className="flex items-center gap-3 text-[12px] text-gray-500 font-inter mb-3">
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {item.date}
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {item.author}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-jakarta font-bold text-[16px] text-[#0f172a] mb-2.5 group-hover:text-primary transition-colors leading-[1.4] line-clamp-2">
          {item.title}
        </h3>

        {/* Short Description */}
        <p className="font-inter text-[13px] text-body-gray leading-[1.6] line-clamp-2 mb-4">
          {item.description}
        </p>

        {/* Footer Link */}
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center text-primary font-semibold text-[13px] group-hover:underline gap-1">
          Baca Selengkapnya
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}

export default function BeritaPage() {
  const [headerRef, , headerStyle] = useScrollReveal({ variant: "fade-up", duration: 700 });
  const [btnRef, , btnStyle] = useScrollReveal({ variant: "fade-up", duration: 700, delay: 200 });
  return (
    <div className="w-full bg-[#f8fafc] py-8 sm:py-12 md:py-16 animate-fade-in min-h-screen">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-x">
        
        {/* Header Title Section (Exactly matching screenshot) */}
        <div ref={headerRef} style={headerStyle} className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="font-jakarta text-[38px] md:text-[44px] font-bold text-[#0f172a] mb-4 tracking-tight">
            Berita & Informasi
          </h1>
          <p className="font-inter text-[15px] md:text-[16px] text-body-gray leading-relaxed">
            Ikuti terus perkembangan terbaru, prestasi membanggakan, dan beragam aktivitas positif dari <br className="hidden md:block"/>
            SMA Negeri 2 Tebo.
          </p>
        </div>

        {/* Grid of 4 Cards (Matching screenshot layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsArchiveData.map((item, i) => (
            <NewsCard key={item.id} item={item} delay={staggerDelay(i, 60, 70)} />
          ))}
        </div>

        {/* Back to Home Button */}
        <div ref={btnRef} style={btnStyle} className="mt-14 flex justify-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold text-[14px] px-8 py-3 rounded-md hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95"
          >
            ← Kembali ke Beranda
          </Link>
        </div>

      </div>
    </div>
  );
}
