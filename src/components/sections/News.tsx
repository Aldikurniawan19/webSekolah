import React from "react";
import Link from "next/link";

// Data Berita Utama (Kiri)
const featuredNews = {
  category: "SMANDA JUARA",
  timeAgo: "6 hari yang lalu",
  author: "Admin Smanda",
  title: "Banggakan Sekolah dan Daerah, Ferna Gavrila Patambo Siswi SMAN 2 Tebo Raih Runner-Up...",
  description: "Suasana haru dan bangga menyelimuti keluarga besar SMA Negeri 2 Tebo (SMANDA). Salah satu siswi terbaiknya, Ferna Gavrila Patambo, berhasil mengukir prestasi gemilang di tingkat provinsi dengan meraih gelar Runner-Up pada ajang...",
  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_9SzaRzPQtOFWV_fucp25YxK7b0uHSCTbBB0H4Z19Hmp4iAqQGNIHVE5W-hIZeIg0l9rS07qrAs4G6NUi2DRVMEBGDVU0XOWMiJKVtErkKUjpykSDdiUtkxTOV5lF7Q6q0rAW4kM1mpkxxH0_VDCbtuRPOgDOr-_Bkq6nR_pbvJiSudS0f3QqmHHk2oWGfR8cYEwDhW35zYOcFFDZfi7TwIPNmD5kcxGPIzRIj45Ai7u_oxQKF8t0"
};

// Data Daftar Berita (Kanan)
const sideNewsList = [
  {
    id: 1,
    category: "SMANDA JUARA",
    timeAgo: "1 minggu yang lalu",
    title: "Tangguh di Dinding Panjat, Atlet SMAN 2 Tebo Raih Emas O2SN Provinsi dan...",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp8GnUbLceRaBXpMgSwK0rUdfP-cOP3ezqqQSD3cIaOaUaesNqHvZicbDtY77iVB-ew7sKx1TSyn30mwjptL7x5kLKBO_6EBeAc4sHN0UrlEyBQF4LElMWl67GBXaGc9MSmXxdYv-WpUsJGUmpcJauSYh1GLS6ZXSqMMoAvDRF1NCGjlY_oxP1txcT1NZMZVCszlqouc2fL7K82rllbTJQ866v0QUBNKsUrvCiWJgBGot5tDMtP2Pd"
  },
  {
    id: 2,
    category: "SMANDA JUARA",
    timeAgo: "1 minggu yang lalu",
    title: "Pertahankan Piala Bergilir, SMAN 2 Tebo Sukses Raih Juara Umum KTGT Tingkat...",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd_nBxn_dAR_CZg1uZBI20emGnWZZoUDWlO9Wo8fcj4_jA5GezJ-zMswqR879K0AAVpuhyOWGYEQm9ByKKnWT8fGNgQF8uyCC7Vm2CC-q2mkC2weXRHdKLEg3YSVEte1XUEXWLqNzf5BHNYpXFnqt8EG8mAT4_zjrpBltKmbvXKDXOewdD-o7WtHqPMaovMydKafkKU3KOvWBiZDvceyTPIbX_vtoI3u1jVQcWW9qZxrLRK-O2VyH6"
  },
  {
    id: 3,
    category: "PENGUMUMAN",
    timeAgo: "1 minggu yang lalu",
    title: "SMA Negeri 2 Tebo Raih Penghargaan Sekolah Adiwiyata Nasional 2025 Buk...",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDz9iz8z-KSxtG-FfpYR_p1GMaZubPULaDrf6C-1gkrSZH6jfMsieMcgeJC-BEyp64ynfnWaPAXgWljjhc8owWdWa0Q84nY3olg__7H1tnPNA97JjIPLAclAz6ZwvOwN4yNwFAveKQADSEYVqtMwk7uGrFjf69MnwU9z7pGmsriBCZfyowu1PLXzQfn7w0qoRKqxV0EjNn-pKvpQQSvFpnS8LNidcxwOU66I4Ase-VGRwYYm7SIqWMX"
  }
];

export default function News() {
  return (
    <section className="w-full py-section-v-padding bg-white">
      <div className="max-w-container-max mx-auto px-margin-x">
        
        {/* Header Section as per design */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
          <div>
            {/* Eyebrow Label with left bar */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-5 bg-primary rounded-full"></div>
              <span className="font-bold text-[13px] tracking-widest text-primary uppercase">
                Pusat Informasi
              </span>
            </div>
            <h2 className="font-jakarta text-[32px] font-bold text-on-surface mb-2 leading-tight">
              Berita & Prestasi Terkini
            </h2>
            <p className="font-inter text-[15px] text-body-gray">
              Informasi terkini dari dunia pendidikan dan pembaruan prestasi siswa SMA Negeri 2 Tebo.
            </p>
          </div>
          
          <Link href="/berita" className="flex items-center gap-1 text-primary font-semibold text-[15px] hover:underline whitespace-nowrap">
            Berita Selengkapnya
            <span>→</span>
          </Link>
        </div>

        {/* Horizontal Divider Below Header */}
        <hr className="border-gray-200 mb-8" />

        {/* 55/45 Asymmetric Layout Grid (7 cols left, 5 cols right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* KIRI: Featured News (7 cols) */}
          <Link href="/berita/1" className="lg:col-span-7 group cursor-pointer flex flex-col">
            <div className="relative w-full aspect-[16/9] mb-5 bg-gray-100 overflow-hidden">
              <img 
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              {/* Badge SMANDA JUARA */}
              <div className="absolute top-6 left-0 bg-primary text-white font-bold text-[12px] tracking-wide px-4 py-1.5 rounded-r-md uppercase shadow-sm">
                {featuredNews.category}
              </div>
            </div>
            
            {/* Meta Info (Clock & User) */}
            <div className="flex items-center gap-5 text-[13px] text-body-gray mb-3 font-inter">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {featuredNews.timeAgo}
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {featuredNews.author}
              </div>
            </div>

            <h3 className="font-jakarta text-[26px] font-bold text-on-surface mb-4 group-hover:text-primary transition-colors leading-[1.3]">
              {featuredNews.title}
            </h3>
            <p className="font-inter text-[15px] text-body-gray leading-[1.6] line-clamp-3">
              {featuredNews.description}
            </p>
          </Link>

          {/* KANAN: List of 3 smaller news items (5 cols) */}
          {/* Menggunakan divide-y untuk border bawah antar item secara otomatis */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-gray-200">
            {sideNewsList.map((news) => (
              <Link key={news.id} href="/berita/1" className="flex gap-5 group cursor-pointer py-6 first:pt-0 last:pb-0">
                
                {/* Thumbnail */}
                <div className="relative w-40 h-28 flex-shrink-0 bg-gray-100 overflow-hidden rounded-md">
                  <img 
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                
                {/* Content */}
                <div className="flex flex-col justify-start">
                  <span className="bg-primary/10 text-primary font-bold text-[11px] tracking-wider uppercase px-2.5 py-0.5 rounded-md inline-block w-fit mb-1.5">
                    {news.category}
                  </span>
                  
                  <h4 className="font-jakarta font-bold text-[16px] text-on-surface group-hover:text-primary transition-colors line-clamp-3 leading-[1.4] mb-2">
                    {news.title}
                  </h4>
                  
                  {/* Meta Info (Clock) */}
                  <div className="flex items-center gap-1.5 text-[12px] text-body-gray font-inter mt-auto">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {news.timeAgo}
                  </div>
                </div>
                
              </Link>
            ))}
          </div>

        </div>

        {/* Divider & Button Center Bottom */}
        <hr className="border-gray-200 mt-6 mb-8" />
        <div className="flex justify-center">
          <Link href="/berita" className="inline-block border-2 border-tertiary-fixed-dim text-on-surface font-semibold text-[15px] px-10 py-3 rounded-md hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-sm">
            Lihat Semua Berita
          </Link>
        </div>

      </div>
    </section>
  );
}