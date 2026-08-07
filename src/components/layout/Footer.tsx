"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Footer() {
  const [ref, , style] = useScrollReveal({ variant: "fade-up", duration: 800, threshold: 0.05 });
  return (
    <footer ref={ref} style={style} className="bg-[#111827] text-surface-variant w-full pt-16 pb-8 px-margin-x mt-auto">
      <div className="max-w-container-max mx-auto">
        
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Kolom 1: Logo & Deskripsi (Lebih lebar) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <Image 
                src="/images/Logo.png" 
                alt="Logo SMAN 2 Tebo" 
                width={48} 
                height={48} 
                className="object-contain"
              />
              <span className="font-jakarta text-[20px] font-bold uppercase tracking-wide">
                <span className="text-white">SMAN 2 </span>
                <span className="text-[#f6bf22]">TEBO</span>
              </span>
            </div>
            <p className="font-inter text-[14px] leading-relaxed text-surface-variant/80 max-w-sm">
              Mencetak generasi yang unggul dalam IPTEK dan IMTAQ, berwawasan lingkungan, serta mampu bersaing di era global.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3 mt-4">
              <Link href="#" className="w-10 h-10 bg-white/5 rounded hover:bg-white/10 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/5 rounded hover:bg-white/10 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/5 rounded hover:bg-white/10 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s-.002 3.254-.42 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.812.419-7.812.419s-6.252 0-7.812-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.254 2 12 2 12s.002-3.254.42-4.814a2.507 2.507 0 0 1 1.768-1.768C5.748 5 12 5 12 5s6.252 0 7.812.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div className="md:col-span-2 flex flex-col gap-3 md:mt-2">
            <h3 className="font-jakarta text-[16px] font-bold text-white mb-2">Tautan Cepat</h3>
            <Link href="/profil/sejarah" className="font-inter text-[14px] text-surface-variant/80 hover:text-sky-400 transition-colors">Profil Sekolah</Link>
            <Link href="/#visi-misi" className="font-inter text-[14px] text-surface-variant/80 hover:text-sky-400 transition-colors">Visi dan Misi</Link>
            <Link href="/kesiswaan/osis" className="font-inter text-[14px] text-surface-variant/80 hover:text-sky-400 transition-colors">OSIS SMAN 2 Tebo</Link>
            <Link href="/kesiswaan/ekstrakurikuler" className="font-inter text-[14px] text-surface-variant/80 hover:text-sky-400 transition-colors">Ekstrakurikuler</Link>
            <Link href="#" className="font-inter text-[14px] text-surface-variant/80 hover:text-sky-400 transition-colors">Program Unggulan</Link>
            <Link href="#" className="font-inter text-[14px] text-surface-variant/80 hover:text-sky-400 transition-colors">Direktori Guru</Link>
            <Link href="#" className="font-inter text-[14px] text-surface-variant/80 hover:text-sky-400 transition-colors">Prestasi Siswa</Link>
          </div>

          {/* Kolom 3: Layanan Akademik */}
          <div className="md:col-span-2 flex flex-col gap-3 md:mt-2">
            <h3 className="font-jakarta text-[16px] font-bold text-white mb-2">Layanan Akademik</h3>
            <Link href="/akademik/kurikulum" className="font-inter text-[14px] text-surface-variant/80 hover:text-sky-400 transition-colors">Kurikulum Kami</Link>
            <Link href="/akademik/mata-pelajaran" className="font-inter text-[14px] text-surface-variant/80 hover:text-sky-400 transition-colors">Mata Pelajaran</Link>
            <Link href="/akademik/bimbingan-konseling" className="font-inter text-[14px] text-surface-variant/80 hover:text-sky-400 transition-colors">Bimbingan Konseling</Link>
            <Link href="#" className="font-inter text-[14px] text-surface-variant/80 hover:text-sky-400 transition-colors">Informasi Kelulusan</Link>
            <Link href="/pendaftaran" className="font-inter text-[14px] text-surface-variant/80 hover:text-sky-400 transition-colors">Info Pendaftaran PPDB</Link>
          </div>

          {/* Kolom 4: Kontak Kami & Lokasi Peta */}
          <div className="md:col-span-4 flex flex-col gap-3 md:mt-2">
            <h3 className="font-jakarta text-[16px] font-bold text-white mb-1">Kontak & Lokasi</h3>
            
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 flex-shrink-0 text-tertiary-fixed-dim mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-inter text-[13.5px] text-surface-variant/80 leading-snug">
                Jl. Pahlawan No. 45 Muara Tebo, Kabupaten Tebo - Jambi, 37571
              </span>
            </div>

            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0 text-tertiary-fixed-dim" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-inter text-[13.5px] text-surface-variant/80">
                info@sman2tebo.sch.id
              </span>
            </div>

            {/* Embedded Google Maps */}
            <div className="w-full mt-2 rounded-xl overflow-hidden border border-white/15 shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.352628934066!2d102.03065774863279!3d-1.312183999999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2ea85b59bd0319%3A0x95fa589dc03906a9!2sSMAN%2002%20Tebo!5e0!3m2!1sid!2sid!4v1786008882459!5m2!1sid!2sid" 
                className="w-full h-44 rounded-xl opacity-90 hover:opacity-100 transition-opacity duration-300" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title="Peta Lokasi SMAN 2 Tebo"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-[13px] text-surface-variant/60">
            © 2026 SMA Negeri 2 Tebo. All rights reserved.
          </p>
          <div className="flex gap-4 font-inter text-[13px] text-surface-variant/60">
            <Link href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="#" className="hover:text-sky-400 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}