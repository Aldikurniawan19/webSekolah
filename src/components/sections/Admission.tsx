import React from "react";

export default function Admission() {
  return (
    <section className="relative w-full py-section-v-padding overflow-hidden">
      {/* Background Image with Overlay[cite: 1] */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="PPDB Background" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcj2syiCS-V-WcwA-9OtzBTNvtnZ5xRwPRQyO359SQJBSfE-XWNFMxq0RxEYi4RFU_6dQdl65RUHszY_gmf6lgs-f-jnLg9WiN1tKaCWFZrijVEgDWxkr9wDkcd87-VMqHzOBy3a6ey4LyivMMsG-8HEM6b1hv6hUF1-htvUY7bCDnkKfhM3KsbEjO0gmaMNv9PM_ulOmzp2-YKExAAz5tIT-wfVbZLrmmOSM5_4BnLeVzpjo1M-ai"
        />
        <div className="absolute inset-0 bg-on-primary-fixed/80"></div>
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-margin-x">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Text Content */}
          <div className="max-w-3xl">
            <div className="inline-block bg-primary text-white font-bold text-[12px] tracking-wider uppercase px-3.5 py-1.5 rounded-md shadow-sm mb-6">
              Portal Pendaftaran
            </div>
            
            <h2 className="font-jakarta text-[56px] font-bold text-white mb-4 leading-[1.2] tracking-[-0.02em]">
              Penerimaan Peserta Didik Baru (PPDB)
            </h2>
            <p className="font-inter text-[18px] text-surface-variant leading-[1.7]">
              Bergabunglah bersama keluarga besar SMA Negeri 2 Tebo. Temukan informasi lengkap mengenai alur, syarat, dan jadwal pendaftaran di Portal SPMB SMANDA Tebo.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex-shrink-0">
            <a href="#" className="group inline-flex items-center gap-2 bg-tertiary-fixed-dim text-on-tertiary-fixed font-semibold text-[15px] px-8 py-5 rounded-md hover:bg-[#e0ad1b] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-lg">
              Masuk Portal SPMB
              {/* SVG Arrow Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}