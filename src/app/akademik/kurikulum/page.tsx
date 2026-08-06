"use client";

import React from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function KurikulumKamiPage() {
  const [headerRef, , headerStyle] = useScrollReveal({ variant: "fade-up", duration: 700 });
  const [articleRef, , articleStyle] = useScrollReveal({ variant: "zoom-in", duration: 800, delay: 100 });

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-6 sm:pt-10 md:pt-12 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
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
              <span className="relative">
                Kurikulum
                <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#f6bf22] -z-10 rounded-full"></span>
              </span>{" "}
              Kami
            </span>
          </h1>
        </div>

        {/* Main Article Box Container */}
        <div 
          ref={articleRef} 
          style={articleStyle} 
          className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-10 md:p-14 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100 mb-16"
        >
          <article className="font-inter text-[#475569] leading-relaxed md:leading-[1.85] text-[14.5px] sm:text-[15.5px] text-justify space-y-6">
            
            {/* Introduction */}
            <p>
              Kurikulum Operasional Satuan Pendidikan (KOSP) merupakan pola dan susunan mata pelajaran yang harus ditempuh oleh peserta didik dalam kegiatan pembelajaran. Kedalaman muatan kurikulum pada setiap mata pelajaran pada setiap satuan pendidikan dituangkan dalam kompetensi yang harus dikuasai peserta didik sesuai dengan beban belajar yang tercantum dalam struktur kurikulum. Perkembangan kurikulum di SMA Negeri 2 Tebo telah mengalami perubahan sebanyak enam kali sejak tahun 1983. Dinamika ini terjadi untuk menyesuaikan arah pendidikan dengan kebutuhan zaman, kemajuan teknologi, dan tuntutan pembangunan nasional.
            </p>

            {/* Historical Timeline */}
            <div>
              <p className="font-semibold text-[#1e293b] mb-3">
                Berikut adalah rincian perjalanan sejarah kurikulum di SMA Negeri 2 Tebo:
              </p>
              <ol className="list-decimal pl-5 space-y-2.5">
                <li>
                  <strong className="text-[#003883]">Kurikulum 1994 (1993 - 2004)</strong> : Mengusung pendekatan <em>Process Skill Approach</em>, peserta didik mulai dilibatkan secara aktif dalam proses belajar (Cara Belajar Peserta Didik Aktif - CBSA).
                </li>
                <li>
                  <strong className="text-[#003883]">Kurikulum 2004 (Kurikulum Berbasis Kompetensi / KBK) (2004 - 2006)</strong> : Menekankan pada pengembangan kompetensi dasar dan keterampilan peserta didik.
                </li>
                <li>
                  <strong className="text-[#003883]">Kurikulum 2006 (Kurikulum Tingkat Satuan Pendidikan / KTSP) (2006 - 2013)</strong> : Desentralisasi pendidikan di mana pemerintah pusat menetapkan standar kompetensi, namun sekolah diberikan wewenang penuh untuk mengembangkan kurikulum dan silabusnya sendiri.
                </li>
                <li>
                  <strong className="text-[#003883]">Kurikulum 2013 (K-13) (2015 - 2022)</strong> : Lebih menekankan pada aspek sikap (afektif), pengetahuan (kognitif), dan keterampilan (psikomotorik) secara holistik serta penguatan pendidikan karakter.
                </li>
                <li>
                  <strong className="text-[#003883]">Kurikulum Merdeka (2022 - Sekarang)</strong> : Kurikulum teranyar yang berfokus pada pembelajaran berbasis proyek (<em>project-based learning</em>), pengembangan karakter sesuai nilai-nilai Profil Pelajar Pancasila, serta memberi keleluasaan bagi peserta didik untuk memilih minat belajarnya sendiri.
                </li>
              </ol>
            </div>

            {/* Section 1: Karakteristik Utama */}
            <div className="pt-2">
              <h2 className="text-base sm:text-lg font-bold font-jakarta text-[#1e293b] mb-2">
                1. Karakteristik Utama
              </h2>
              <p className="mb-3">
                Kurikulum Merdeka adalah kerangka kurikulum pendidikan fleksibel yang berfokus pada materi esensial, pengembangan karakter, dan kompetensi peserta didik. Sistem ini memerdekakan peserta didik untuk belajar sesuai minat dan bakatnya, serta memberi keleluasaan bagi guru dalam merancang pembelajaran yang relevan dan kontekstual.
              </p>
              <p className="mb-3">
                Kurikulum Merdeka dirancang untuk mengatasi krisis pembelajaran (<em>learning loss</em>) melalui tiga pilar utama:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-[#1e293b]">Fokus pada Materi Esensial</strong> : Pembelajaran dibuat lebih mendalam dan tidak terburu-buru, sehingga peserta didik memiliki waktu yang cukup untuk memahami konsep secara menyeluruh.
                </li>
                <li>
                  <strong className="text-[#1e293b]">Pembelajaran Berdiferensiasi</strong> : Guru memiliki keleluasaan untuk menyesuaikan metode ajar dan kecepatan materi dengan tingkat kemampuan (fase perkembangan) masing-masing peserta didik.
                </li>
                <li>
                  <strong className="text-[#1e293b]">Pengembangan Karakter (Soft Skills)</strong> : Penekanan kuat pada pembentukan moral dan budi pekerti melalui Proyek Penguatan Profil Pelajar Pancasila (P5).
                </li>
              </ul>
            </div>

            {/* Section 2: Struktur Pembelajaran (Sistem Fase) */}
            <div className="pt-2">
              <h2 className="text-base sm:text-lg font-bold font-jakarta text-[#1e293b] mb-2">
                2. Struktur Pembelajaran (Sistem Fase)
              </h2>
              <p className="mb-3">
                Jenjang kelas tidak lagi sepenuhnya dibagi per tahun, melainkan dikelompokkan menjadi Fase untuk memberikan fleksibilitas:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong className="text-[#1e293b]">Fase E</strong> : Kelas 10 SMA
                </li>
                <li>
                  <strong className="text-[#1e293b]">Fase F</strong> : Kelas 11–12 SMA
                </li>
              </ul>
            </div>

            {/* Section 3: Komponen Implementasi di Sekolah */}
            <div className="pt-2">
              <h2 className="text-base sm:text-lg font-bold font-jakarta text-[#1e293b] mb-2">
                3. Komponen Implementasi di Sekolah
              </h2>
              <p className="mb-3">
                Penerapan kurikulum ini terlihat jelas dalam tiga kegiatan utama di sekolah:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-[#1e293b]">Pembelajaran Intrakurikuler</strong> : Kegiatan belajar mengajar harian yang didasarkan pada Capaian Pembelajaran (CP) yang telah ditetapkan pemerintah, tetapi disampaikan dengan pendekatan yang fleksibel.
                </li>
                <li>
                  <strong className="text-[#1e293b]">Projek Penguatan Profil Pelajar Pancasila (P5)</strong> : Pembelajaran berbasis proyek lintas disiplin ilmu untuk mengamati dan mencari solusi atas isu-isu di lingkungan sekitar (misalnya: gaya hidup berkelanjutan, kewirausahaan, atau kearifan lokal).
                </li>
                <li>
                  <strong className="text-[#1e293b]">Ekstrakurikuler</strong> : Kegiatan di luar jam pelajaran untuk mengembangkan minat, bakat, dan potensi diri peserta didik.
                </li>
              </ul>
            </div>

            {/* Section 4: Fleksibilitas Tingkat Lanjut (Untuk Jenjang SMA) */}
            <div className="pt-2">
              <h2 className="text-base sm:text-lg font-bold font-jakarta text-[#1e293b] mb-2">
                4. Fleksibilitas Tingkat Lanjut (Untuk Jenjang SMA)
              </h2>
              <p>
                Pada tingkat Sekolah Menengah Atas (SMA), peserta didik tidak lagi dibatasi oleh peminatan jurusan seperti IPA, IPS, atau Bahasa. Mereka diberikan kebebasan untuk memilih kelompok mata pelajaran sesuai dengan minat, bakat, dan rencana karir masa depan mereka. Untuk mempelajari pedoman resmi, perangkat ajar, atau contoh modul pembelajaran yang disediakan oleh Kemendikbudristek secara langsung, Anda dapat mengakses platform Merdeka Mengajar.
              </p>
            </div>

          </article>
        </div>

      </div>
    </div>
  );
}
