"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <header className={`bg-white top-0 sticky shadow-sm transition-all duration-300 ease-in-out z-50 w-full ${
      scrolled ? "shadow-md" : ""
    }`}>
      <div className={`flex justify-between items-center w-full px-margin-x max-w-container-max mx-auto transition-all duration-300 ${
        scrolled ? "h-14" : "h-18"
      }`}>
        
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2.5">
          <Image 
            src="/images/Logo.png" 
            alt="Logo SMAN 2 Tebo" 
            width={34} 
            height={34} 
            className="object-contain"
          />
          <div className="font-bold text-xl font-jakarta">
            <span className="text-black">SMAN 2 </span>
            <span className="text-[#f6bf22]">TEBO</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="font-semibold text-[13.5px] uppercase tracking-wide text-primary border-b-2 border-primary pb-1 transition-all">
            Beranda
          </Link>
          
          {/* Menu Profil dengan Dropdown */}
          <div className="relative group py-1">
            <button className="flex items-center gap-1 font-semibold text-[13.5px] uppercase tracking-wide text-on-surface-variant group-hover:text-primary border-b-2 border-transparent group-hover:border-primary pb-1 transition-all">
              Profil
              <svg 
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="w-52 bg-white shadow-[0_4px_20px_rgba(11,42,91,0.08)] rounded-[10px] border border-gray-100 overflow-hidden flex flex-col py-1.5">
                <Link href="/profil/sejarah" className="px-4 py-2 font-inter text-[13.5px] text-body-gray hover:bg-gray-50 hover:text-primary transition-colors">
                  Sejarah Singkat
                </Link>
                <Link href="/#visi-misi" className="px-4 py-2 font-inter text-[13.5px] text-body-gray hover:bg-gray-50 hover:text-primary transition-colors">
                  Visi Misi
                </Link>
                <Link href="/profil/struktur-organisasi" className="px-4 py-2 font-inter text-[13.5px] text-body-gray hover:bg-gray-50 hover:text-primary transition-colors">
                  Struktur Organisasi
                </Link>
                <Link href="/profil/akreditasi" className="px-4 py-2 font-inter text-[13.5px] text-body-gray hover:bg-gray-50 hover:text-primary transition-colors">
                  Akreditasi
                </Link>
              </div>
            </div>
          </div>

          {/* Menu Akademik dengan Dropdown */}
          <div className="relative group py-1">
            <button className="flex items-center gap-1 font-semibold text-[13.5px] uppercase tracking-wide text-on-surface-variant group-hover:text-primary border-b-2 border-transparent group-hover:border-primary pb-1 transition-all">
              Akademik
              <svg 
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="w-52 bg-white shadow-[0_4px_20px_rgba(11,42,91,0.08)] rounded-[10px] border border-gray-100 overflow-hidden flex flex-col py-1.5">
                <Link href="#" className="px-4 py-2 font-inter text-[13.5px] text-body-gray hover:bg-gray-50 hover:text-primary transition-colors">
                  Kurikulum Kami
                </Link>
                <Link href="#" className="px-4 py-2 font-inter text-[13.5px] text-body-gray hover:bg-gray-50 hover:text-primary transition-colors">
                  Mata Pelajaran
                </Link>
                <Link href="#" className="px-4 py-2 font-inter text-[13.5px] text-body-gray hover:bg-gray-50 hover:text-primary transition-colors">
                  Bimbingan Konseling
                </Link>
              </div>
            </div>
          </div>

          {/* Menu Kesiswaan dengan Dropdown */}
          <div className="relative group py-1">
            <button className="flex items-center gap-1 font-semibold text-[13.5px] uppercase tracking-wide text-on-surface-variant group-hover:text-primary border-b-2 border-transparent group-hover:border-primary pb-1 transition-all">
              Kesiswaan
              <svg 
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="w-52 bg-white shadow-[0_4px_20px_rgba(11,42,91,0.08)] rounded-[10px] border border-gray-100 overflow-hidden flex flex-col py-1.5">
                <Link href="#" className="px-4 py-2 font-inter text-[13.5px] text-body-gray hover:bg-gray-50 hover:text-primary transition-colors">
                  OSIS
                </Link>
                <Link href="#" className="px-4 py-2 font-inter text-[13.5px] text-body-gray hover:bg-gray-50 hover:text-primary transition-colors">
                  Ekstrakulikuler
                </Link>
              </div>
            </div>
          </div>

          <Link href="/berita" className="font-semibold text-[13.5px] uppercase tracking-wide text-on-surface-variant hover:text-primary border-b-2 border-transparent hover:border-primary pb-1 transition-all">
            Berita
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-tertiary-fixed-dim text-on-tertiary-fixed font-semibold text-[13.5px] px-5 py-2.5 rounded-md hover:bg-[#e0ad1b] transition-all shadow-sm">
            Layanan Pengaduan
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-on-surface hover:text-primary focus:outline-none rounded-md transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl px-margin-x py-4 flex flex-col gap-3 animate-fade-in">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)} 
            className="font-semibold text-[13.5px] uppercase text-primary py-2 border-b border-gray-100"
          >
            Beranda
          </Link>
          
          {/* Mobile Profil Accordion */}
          <div className="border-b border-gray-100 py-1">
            <button 
              onClick={() => toggleSubmenu('profil')}
              className="w-full flex justify-between items-center font-semibold text-[13.5px] uppercase text-on-surface-variant py-1.5"
            >
              Profil
              <svg className={`w-4 h-4 transition-transform duration-300 ${openSubmenu === 'profil' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSubmenu === 'profil' && (
              <div className="pl-4 flex flex-col gap-2 py-2 bg-surface-container-low rounded-md mt-1">
                <Link href="/profil/sejarah" onClick={() => setMobileMenuOpen(false)} className="text-xs font-inter text-body-gray hover:text-primary py-1">Sejarah Singkat</Link>
                <Link href="/#visi-misi" onClick={() => setMobileMenuOpen(false)} className="text-xs font-inter text-body-gray hover:text-primary py-1">Visi Misi</Link>
                <Link href="/profil/struktur-organisasi" onClick={() => setMobileMenuOpen(false)} className="text-xs font-inter text-body-gray hover:text-primary py-1">Struktur Organisasi</Link>
                <Link href="/profil/akreditasi" onClick={() => setMobileMenuOpen(false)} className="text-xs font-inter text-body-gray hover:text-primary py-1">Akreditasi</Link>
              </div>
            )}
          </div>

          {/* Mobile Akademik Accordion */}
          <div className="border-b border-gray-100 py-1">
            <button 
              onClick={() => toggleSubmenu('akademik')}
              className="w-full flex justify-between items-center font-semibold text-[13.5px] uppercase text-on-surface-variant py-1.5"
            >
              Akademik
              <svg className={`w-4 h-4 transition-transform duration-300 ${openSubmenu === 'akademik' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSubmenu === 'akademik' && (
              <div className="pl-4 flex flex-col gap-2 py-2 bg-surface-container-low rounded-md mt-1">
                <Link href="#" onClick={() => setMobileMenuOpen(false)} className="text-xs font-inter text-body-gray hover:text-primary py-1">Kurikulum Kami</Link>
                <Link href="#" onClick={() => setMobileMenuOpen(false)} className="text-xs font-inter text-body-gray hover:text-primary py-1">Mata Pelajaran</Link>
                <Link href="#" onClick={() => setMobileMenuOpen(false)} className="text-xs font-inter text-body-gray hover:text-primary py-1">Bimbingan Konseling</Link>
              </div>
            )}
          </div>

          {/* Mobile Kesiswaan Accordion */}
          <div className="border-b border-gray-100 py-1">
            <button 
              onClick={() => toggleSubmenu('kesiswaan')}
              className="w-full flex justify-between items-center font-semibold text-[13.5px] uppercase text-on-surface-variant py-1.5"
            >
              Kesiswaan
              <svg className={`w-4 h-4 transition-transform duration-300 ${openSubmenu === 'kesiswaan' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSubmenu === 'kesiswaan' && (
              <div className="pl-4 flex flex-col gap-2 py-2 bg-surface-container-low rounded-md mt-1">
                <Link href="#" onClick={() => setMobileMenuOpen(false)} className="text-xs font-inter text-body-gray hover:text-primary py-1">OSIS</Link>
                <Link href="#" onClick={() => setMobileMenuOpen(false)} className="text-xs font-inter text-body-gray hover:text-primary py-1">Ekstrakulikuler</Link>
              </div>
            )}
          </div>

          <Link 
            href="/berita" 
            onClick={() => setMobileMenuOpen(false)} 
            className="font-semibold text-[13.5px] uppercase text-on-surface-variant py-2 border-b border-gray-100"
          >
            Berita
          </Link>

          <div className="pt-2 pb-1">
            <button className="w-full bg-tertiary-fixed-dim text-on-tertiary-fixed font-semibold text-xs py-3 rounded-md hover:bg-[#e0ad1b] transition-all shadow-sm">
              Layanan Pengaduan
            </button>
          </div>
        </div>
      )}
    </header>
  );
}