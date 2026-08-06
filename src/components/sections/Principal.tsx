import React from "react";

export default function Principal() {
  return (
    <section className="w-full pt-10 md:pt-14 pb-section-v-padding bg-surface">
      <div className="max-w-container-max mx-auto px-margin-x grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        
        {/* Image with decorative offset stack effect */}
        <div className="col-span-1 md:col-span-5 relative mb-12 md:mb-0 group cursor-pointer">
          {/* Offset Box Effect */}
          <div className="absolute top-4 left-4 w-full h-full bg-surface-container-high rounded-lg z-0 hidden md:block transition-all duration-300 group-hover:top-6 group-hover:left-6"></div>
          
          <div className="relative z-10 overflow-hidden rounded-lg shadow-sm">
            <img 
              className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition-transform duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC62D5wm8P5u-LAXKqvDuwwUagmMLyq6KqtbYPmKxhXVvClVRL4wHrlPoXmxThF7gdC9KfmFqkCXu5ylOBEUEIbczDXQZrKM3BNwojFfSRB4Xp1-2yvNkuZtOX01APPjjpdXJqZcVwUGn-wuqncbDsPD3Xzg4CqGWx9Ng00DZp55uS4CD0Q19WONo6ukrphYWtanWrwzA5mXJf9slo0X9fel0GTZOcQn-olXNYQkiV5nYvyGoBgHrfC"
              alt="Kepala Sekolah SMA Negeri 2 Tebo"
            />
          </div>
          
          {/* Yellow accent strip */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-tertiary-fixed-dim rounded-tl-full z-20 hidden md:block transition-transform duration-300 group-hover:scale-110"></div>
        </div>

        {/* Text Content */}
        <div className="col-span-1 md:col-span-6 md:col-start-7 flex flex-col gap-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-primary rounded-full"></div>
            <span className="font-bold text-[13px] tracking-widest text-primary uppercase">
              Sambutan Kepala Sekolah
            </span>
          </div>
          <h2 className="font-jakarta text-[24px] font-bold text-primary leading-[1.4]">
            Mewujudkan Generasi Emas <br/>
            <span className="text-[#f6bf22]">SMAN 2 Tebo</span>
          </h2>
          <div className="w-16 h-1 bg-tertiary-fixed-dim rounded-full"></div>
          
          <p className="font-inter text-[16px] text-body-gray leading-[1.6]">
            Selamat datang di website resmi SMA Negeri 2 Tebo. Sebagai institusi pendidikan yang menjunjung tinggi nilai-nilai kejujuran, disiplin, dan inovasi, kami berkomitmen untuk menyediakan lingkungan belajar yang aman, inklusif, dan inspiratif bagi seluruh siswa-siswi kami.
          </p>
          <p className="font-inter text-[16px] text-body-gray leading-[1.6]">
            Dukungan dari tenaga pendidik profesional serta fasilitas modern yang kami miliki dirancang secara khusus untuk memfasilitasi pengembangan karakter dan potensi akademik maupun non-akademik peserta didik, mempersiapkan mereka menghadapi tantangan masa depan dengan percaya diri.
          </p>
          
          <div className="mt-4">
            <p className="font-semibold text-[15px] text-on-surface">Kepala Sekolah</p>
            <p className="font-semibold text-[13px] tracking-[0.1em] text-outline uppercase">
              SMA Negeri 2 Tebo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}