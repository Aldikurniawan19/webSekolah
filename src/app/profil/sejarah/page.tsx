"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Principal {
  id: number;
  name: string;
  period: string;
  years: string;
  isCurrent?: boolean;
  image: string;
  styleVariant: "bw" | "sepia" | "color1" | "color2" | "active";
}

const principalsData: Principal[] = [
  {
    id: 1,
    name: "Drs. Soeharto",
    period: "1983 - 1995",
    years: "(1983-1995)",
    image: "/images/kepsek/kepsek_1.png",
    styleVariant: "bw"
  },
  {
    id: 2,
    name: "Drs. Njarudjin Lamastidjulu",
    period: "1995 - 2002",
    years: "(1995-2002)",
    image: "/images/kepsek/kepsek_2.png",
    styleVariant: "sepia"
  },
  {
    id: 3,
    name: "Drs. H. Muh. Arasy, M.Si.",
    period: "2002 - 2015",
    years: "(2002-2015)",
    image: "/images/kepsek/kepsek_3.png",
    styleVariant: "color1"
  },
  {
    id: 4,
    name: "Drs. Abdurrahman H. Palawa, M.Pd.",
    period: "2015 - 2019",
    years: "(2015-2019)",
    image: "/images/kepsek/kepsek_4.png",
    styleVariant: "color2"
  },
  {
    id: 5,
    name: "H. Idris Ade, S.Pd., M.Si.",
    period: "2020 - Sekarang",
    years: "(2020-Sekarang)",
    isCurrent: true,
    image: "/images/kepsek/kepsek_5.png",
    styleVariant: "active"
  }
];

export default function SejarahSingkatPage() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen py-10 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Badge & Page Title */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex flex-col items-center mb-2">
            <span className="w-10 h-[3px] bg-[#f6bf22] mb-2 rounded-full"></span>
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-widest text-[#f6bf22]">
              PROFIL SMAN 2 TEBO
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-jakarta text-[#003883] tracking-tight">
            Sejarah Singkat
          </h1>
        </div>

        {/* Article Box Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-10 md:p-14 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100 mb-16">
          <article className="font-inter text-[#475569] leading-relaxed md:leading-[1.85] text-[15px] sm:text-[16px] text-justify space-y-6">
            <p>
              SMA Negeri 2 Tebo, yang beralamat di Jl. Lintas Tebo-Bungo, lahir pada tanggal 9 November 1983. 
              Dengan jumlah siswa yang terus meningkat seiring berkembangnya kepercayaan masyarakat. Berdasarkan 
              Surat Keputusan Menteri Pendidikan dan Kebudayaan Nomor 055/O/1984 tertanggal 20 November 1984 tentang 
              Pembukaan Penegerian Sekolah, yang merupakan dasar lahirnya SMA Negeri 2 Tebo. Pada saat itu pada awalnya 
              berhubungan gedung sekolah belum rampung dalam tahap pembangunannya, selama satu semester SMA Negeri 2 Tebo 
              masih menumpang dengan jumlah tenaga pendidik 5 orang.
            </p>
            
            <p>
              Pada tanggal 1 Februari 1984 pembangunan gedung SMA Negeri 2 Tebo telah selesai dan memiliki 4 ruang 
              kelas untuk belajar, kemudian pada tahun ajaran berikutnya ruang kelas bertambah lagi sebanyak 3 ruangan, 
              sehingga total jumlah kelas keseluruhannya saat itu adalah 7 ruang kelas.
            </p>
            
            <p>
              Dalam sejarahnya yang mungkin tak terlupakan, pada masa kepemimpinan Bapak Drs. H. Muh. Arasy, M.Si., 
              SMA Negeri 2 Tebo yang pada saat itu sedang mengalami puncak kemajuan yang pesat dengan diraihnya 
              prestasi di bidang lingkungan yakni sekolah peduli lingkungan Tingkat Nasional. SMA Negeri 2 Tebo pernah 
              mengalami musibah kebakaran yang menghanguskan 9 ruang kelas, ruang kepala sekolah, ruang TU, lab computer 
              serta kerugian materi lainnya berupa arsip sekolah dan sarana penunjang lainnya. Namun pada tahun yang sama 
              berkat kerja sama seluruh warga sekolah berupaya mengajukan bantuan kepada pihak pemerintah agar dapat 
              segera merenovasi gedung SMA Negeri 2 Tebo selesai, dilengkapi dengan ruang Aula Pertemuan, kemudian 
              SMA Negeri 2 Tebo mulai berbenah diri sedikit demi sedikit memperbaiki kondisi lingkungan yang rusak, 
              dan dapat mengembalikan kondisi lingkungannya sehingga gelar sekolah peduli lingkungan masih layak untuk disandang.
            </p>
            
            <p>
              Seiring dengan berjalannya waktu, SMA Negeri 2 Tebo terus menata diri, dengan menambah berbagai sarana 
              sekolah seperti ruang kelas, Lab. Bahasa, Lab. Komputer, Lab. Kimia, sarana ibadah agama Islam, Kristen, 
              dan Hindu. Di bidang kebersihan dan keindahan lingkungan SMA Negeri 2 Tebo, tak perlu diragukan lagi, 
              berkat doa, usaha dan kerja keras seluruh warga sekolah SMA Negeri 2 Tebo, dibawah kepemimpinan Bapak 
              Drs. H. Muh. Arasy, M.Si., berhasil meraih gelar sekolah Adiwiyata Mandiri.
            </p>
            
            <p>
              Pada perkembangannya SMA Negeri 2 Tebo, telah menjadi salah satu sekolah tujuan bagi masyarakat Kabupaten 
              Tebo dan Provinsi Jambi pada umumnya, untuk menitipkan putera-puterinya agar dibina menjadi generasi 
              yang berkarakter. Karena SMA Negeri 2 Tebo mempunyai keunggulan dalam bidang pembinaan kedisiplinan, 
              akhlak dan budi pekerti, imtak, serta lingkungan.
            </p>
          </article>
        </div>

        {/* Section: Pergantian Kepala Sekolah */}
        <div className="mt-16 mb-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-jakarta text-[#181c1f] mb-3">
              Pergantian Kepala Sekolah
            </h2>
            <p className="text-sm sm:text-base font-inter text-[#64748b] leading-relaxed">
              Sejak berdirinya, SMA Negeri 2 Tebo telah mengalami beberapa kali pergantian kepemimpinan. 
              Berikut adalah rekam jejak Kepala Sekolah dari masa ke masa.
            </p>
          </div>

          {/* Grid Cards 5 Kepsek */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {principalsData.map((item) => {
              const hasError = imageErrors[item.id];

              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-xl overflow-hidden border transition-all duration-300 flex flex-col group ${
                    item.isCurrent
                      ? "border-[#f6bf22] shadow-md ring-2 ring-[#f6bf22]/20"
                      : "border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300"
                  }`}
                >
                  {/* Photo Container */}
                  <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden flex items-center justify-center">
                    {item.isCurrent && (
                      <span className="absolute top-2 right-2 bg-[#dc2626] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-10 tracking-wide uppercase">
                        Saat Ini
                      </span>
                    )}

                    {!hasError ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                        className={`object-cover object-top transition-transform duration-500 group-hover:scale-105 ${
                          item.styleVariant === "bw"
                            ? "grayscale contrast-105"
                            : item.styleVariant === "sepia"
                            ? "sepia-[0.35] brightness-95"
                            : ""
                        }`}
                        onError={() => handleImageError(item.id)}
                      />
                    ) : (
                      /* Fallback SVG Portrait */
                      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 p-4 text-center">
                        <svg
                          className="w-16 h-16 text-slate-400 mb-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                        <span className="text-xs font-semibold text-slate-500">
                          {item.name}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Details Footer inside Card */}
                  <div className="p-4 flex flex-col items-center text-center flex-grow justify-between bg-white">
                    {/* Period Label */}
                    <span
                      className={`text-[12px] font-medium mb-1 ${
                        item.isCurrent
                          ? "text-[#dc2626] font-semibold"
                          : "text-[#d97706]"
                      }`}
                    >
                      {item.years}
                    </span>

                    {/* Principal Name */}
                    <h3 className="font-jakarta font-bold text-[14px] text-[#1e293b] leading-snug line-clamp-2">
                      {item.name}
                    </h3>

                    {/* Years sub-label */}
                    <span className="text-[11px] text-[#64748b] mt-1 font-inter">
                      {item.period}
                    </span>
                  </div>

                  {/* Card Bottom Border Highlight */}
                  {item.isCurrent && (
                    <div className="w-full h-1 bg-[#dc2626]"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
