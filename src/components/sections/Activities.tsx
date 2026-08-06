"use client";

import React from "react";
import { useScrollReveal, staggerDelay } from "@/lib/useScrollReveal";

const activitiesData = [
  {
    id: 1,
    title: "Pekan Ilmiah Pelajar",
    date: "12 Oktober 2023",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_cj28mh_Ado3YUMOQY6VJGAyuHv1NTcTVqJPmyNotO4XV2lpjkVtx3ZibYoUaAturjtrwQnJqYb9_XmZ8ZIB0mAwz_8BcxGyfOmJT7MBNjNTsWAjWX6T8uEmVCzbKljCzvgBI5SxPKf-X0yaBV55OrZzolRYai7Y2cgMX3TIR1TCEEzVFauw0h0K4ObSkb2_gc4gMWrixdvN_XN-vwgB0ZMKkIofRP1u9CcsGoVAQrDP83EUydUWx",
  },
  {
    id: 2,
    title: "Kejuaraan Olahraga Antar Kelas",
    date: "28 September 2023",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp8GnUbLceRaBXpMgSwK0rUdfP-cOP3ezqqQSD3cIaOaUaesNqHvZicbDtY77iVB-ew7sKx1TSyn30mwjptL7x5kLKBO_6EBeAc4sHN0UrlEyBQF4LElMWl67GBXaGc9MSmXxdYv-WpUsJGUmpcJauSYh1GLS6ZXSqMMoAvDRF1NCGjlY_oxP1txcT1NZMZVCszlqouc2fL7K82rllbTJQ866v0QUBNKsUrvCiWJgBGot5tDMtP2Pd",
  },
  {
    id: 3,
    title: "Konser Seni Tahunan",
    date: "15 Agustus 2023",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhvz-uTQLqzMYvyBxbuvbmH8840HSfdSR9pd-uDR6b-e5kzBPOaqmcDOT1fdU1fy2BSaehJMoMXIw_wX31WkHTR8Uk45kiqtyyNYrX1TCvBm7jiHihIsmZ_XWcTm-FJZpqvEUzIFGnC3gD3nvVF78GzOT9HweJLKzT9ZOXzwPMeMfgCpaMZsdO8QD8p6KZDNMM1kx8a4qOXRzkM1zp_pmOr-RMEdqiUFD_kTKYP6lkAEgjRzkyw4ve",
  }
];

function ActivityCard({ activity, delay }: { activity: typeof activitiesData[0]; delay: number }) {
  const [ref, , style] = useScrollReveal<HTMLDivElement>({ variant: "zoom-in", duration: 700, delay });
  return (
    <div
      ref={ref}
      style={style}
      className="group relative rounded-lg overflow-hidden h-80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-out"
        style={{ backgroundImage: `url('${activity.image}')` }}
      ></div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed via-overlay-navy to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
      {/* Badge */}
      <div className="absolute top-4 left-4 bg-primary text-white font-bold text-[11px] tracking-wider px-3 py-1 rounded-md uppercase shadow-sm">
        GALERI
      </div>
      {/* Info */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
        <h3 className="font-semibold text-[15px] mb-1">{activity.title}</h3>
        <p className="font-semibold text-[13px] tracking-[0.1em] text-surface-container-low opacity-80 uppercase">
          {activity.date}
        </p>
      </div>
    </div>
  );
}

export default function Activities() {
  const [headerRef, , headerStyle] = useScrollReveal({ variant: "fade-up", duration: 700 });

  return (
    <section className="w-full py-section-v-padding bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-x">
        <div ref={headerRef} style={headerStyle}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-primary rounded-full"></div>
            <span className="font-bold text-[13px] tracking-widest text-primary uppercase">
              Budaya &amp; Tradisi
            </span>
          </div>
          
          {/* Header Section */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-jakarta text-[24px] font-bold text-on-surface mb-2">Aktivitas Siswa</h2>
              <p className="font-inter text-[16px] text-body-gray">Potret dinamis kehidupan kampus dan ekstrakurikuler.</p>
            </div>
            <button className="hidden md:block border-2 border-tertiary-fixed-dim text-on-surface font-semibold text-[14px] px-5 py-2 rounded-md hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-all shadow-sm">
              Lihat Semua
            </button>
          </div>
        </div>

        {/* Grid of 3 gallery cards — each card animates individually */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {activitiesData.map((activity, i) => (
            <ActivityCard key={activity.id} activity={activity} delay={staggerDelay(i, 80, 120)} />
          ))}
        </div>

      </div>
    </section>
  );
}