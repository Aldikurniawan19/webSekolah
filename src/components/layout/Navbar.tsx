"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Automatically close mobile menu when clicking outside the navbar area
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  // Click handler for SMAN 2 TEBO Brand & Logo -> smooth scroll back to Hero / Top
  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Active state helpers
  const isHomeActive = pathname === "/";
  const isProfilActive = pathname.startsWith("/profil");
  const isAkademikActive = pathname.startsWith("/akademik");
  const isKesiswaanActive = pathname.startsWith("/kesiswaan");
  const isBeritaActive = pathname.startsWith("/berita");

  const useWhiteText = !scrolled && isHome;

  const linkBaseClass = "font-semibold text-[13.5px] uppercase tracking-wide transition-colors py-1";
  
  const getNavLinkClass = (isActive: boolean) => {
    if (useWhiteText) {
      return isActive
        ? `${linkBaseClass} text-white font-bold`
        : `${linkBaseClass} text-white/80 hover:text-white`;
    }
    return isActive
      ? `${linkBaseClass} text-primary font-bold`
      : `${linkBaseClass} text-on-surface-variant hover:text-primary`;
  };

  const getSubmenuLinkClass = (path: string) => {
    const isSubActive = pathname === path;
    return `px-4 py-2.5 font-inter text-[13.5px] transition-colors flex items-center justify-between ${
      isSubActive
        ? "bg-primary/10 text-primary font-bold"
        : "text-body-gray hover:bg-gray-50 hover:text-primary"
    }`;
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ease-in-out py-3.5 md:py-4 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md text-on-surface"
            : isHome
            ? "bg-gradient-to-b from-black/60 via-black/25 to-transparent text-white"
            : "bg-white/85 backdrop-blur-md text-on-surface"
        }`}
      >
        <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-margin-x max-w-container-max mx-auto">
          
          {/* Brand Logo & Name (No Hover Scale) */}
          <Link
            href="/"
            onClick={handleBrandClick}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <Image
              src="/images/Logo.png"
              alt="Logo SMAN 2 Tebo"
              width={36}
              height={36}
              className="object-contain"
            />
            <div className="font-bold text-xl font-jakarta tracking-tight">
              <span className={useWhiteText ? "text-white" : "text-[#003883]"}>
                SMAN 2{" "}
              </span>
              <span className="text-[#f6bf22]">TEBO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Beranda */}
            <Link
              href="/"
              onClick={handleBrandClick}
              className={getNavLinkClass(isHomeActive)}
            >
              Beranda
            </Link>

            {/* Menu Profil dengan Dropdown */}
            <div className="relative group py-1">
              <button
                className={`flex items-center gap-1 ${getNavLinkClass(isProfilActive)}`}
              >
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
                <div className="w-56 bg-white shadow-[0_10px_30px_rgba(11,42,91,0.12)] rounded-xl border border-gray-100 overflow-hidden flex flex-col py-1.5">
                  <Link
                    href="/profil/sejarah"
                    className={getSubmenuLinkClass("/profil/sejarah")}
                  >
                    <span>Sejarah Singkat</span>
                    {pathname === "/profil/sejarah" && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                  </Link>
                  <Link
                    href="/#visi-misi"
                    className={getSubmenuLinkClass("/#visi-misi")}
                  >
                    <span>Visi Misi</span>
                  </Link>
                  <Link
                    href="/profil/struktur-organisasi"
                    className={getSubmenuLinkClass("/profil/struktur-organisasi")}
                  >
                    <span>Struktur Organisasi</span>
                    {pathname === "/profil/struktur-organisasi" && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                  </Link>
                  <Link
                    href="/profil/akreditasi"
                    className={getSubmenuLinkClass("/profil/akreditasi")}
                  >
                    <span>Akreditasi</span>
                    {pathname === "/profil/akreditasi" && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                  </Link>
                </div>
              </div>
            </div>

            {/* Menu Akademik dengan Dropdown */}
            <div className="relative group py-1">
              <button
                className={`flex items-center gap-1 ${getNavLinkClass(isAkademikActive)}`}
              >
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
                <div className="w-52 bg-white shadow-[0_10px_30px_rgba(11,42,91,0.12)] rounded-xl border border-gray-100 overflow-hidden flex flex-col py-1.5">
                  <Link
                    href="/akademik/kurikulum"
                    className={getSubmenuLinkClass("/akademik/kurikulum")}
                  >
                    <span>Kurikulum Kami</span>
                    {pathname === "/akademik/kurikulum" && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                  </Link>
                  <Link href="#" className="px-4 py-2.5 font-inter text-[13.5px] text-body-gray hover:bg-gray-50 hover:text-primary transition-colors">
                    Mata Pelajaran
                  </Link>
                  <Link href="#" className="px-4 py-2.5 font-inter text-[13.5px] text-body-gray hover:bg-gray-50 hover:text-primary transition-colors">
                    Bimbingan Konseling
                  </Link>
                </div>
              </div>
            </div>

            {/* Menu Kesiswaan dengan Dropdown */}
            <div className="relative group py-1">
              <button
                className={`flex items-center gap-1 ${getNavLinkClass(isKesiswaanActive)}`}
              >
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
                <div className="w-52 bg-white shadow-[0_10px_30px_rgba(11,42,91,0.12)] rounded-xl border border-gray-100 overflow-hidden flex flex-col py-1.5">
                  <Link href="#" className="px-4 py-2.5 font-inter text-[13.5px] text-body-gray hover:bg-gray-50 hover:text-primary transition-colors">
                    OSIS
                  </Link>
                  <Link href="#" className="px-4 py-2.5 font-inter text-[13.5px] text-body-gray hover:bg-gray-50 hover:text-primary transition-colors">
                    Ekstrakulikuler
                  </Link>
                </div>
              </div>
            </div>

            {/* Berita */}
            <Link
              href="/berita"
              className={getNavLinkClass(isBeritaActive)}
            >
              Berita
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="bg-tertiary-fixed-dim text-on-tertiary-fixed font-semibold text-[13.5px] px-5 py-2.5 rounded-md hover:bg-[#e0ad1b] hover:-translate-y-0.5 active:scale-95 transition-all shadow-sm">
              Layanan Pengaduan
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 focus:outline-none rounded-md transition-colors ${
              useWhiteText ? "text-white" : "text-on-surface hover:text-primary"
            }`}
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
          <div className="md:hidden bg-white text-on-surface shadow-xl px-4 sm:px-6 md:px-margin-x py-4 flex flex-col gap-3 animate-fade-in">
            <Link
              href="/"
              onClick={(e) => {
                handleBrandClick(e);
                setMobileMenuOpen(false);
              }}
              className={`font-semibold text-[13.5px] uppercase py-2 ${
                isHomeActive ? "text-primary font-bold" : "text-on-surface-variant"
              }`}
            >
              Beranda
            </Link>
            
            {/* Mobile Profil Accordion */}
            <div className="py-1">
              <button
                onClick={() => toggleSubmenu('profil')}
                className={`w-full flex justify-between items-center font-semibold text-[13.5px] uppercase py-1.5 ${
                  isProfilActive ? "text-primary font-bold" : "text-on-surface-variant"
                }`}
              >
                Profil
                <svg className={`w-4 h-4 transition-transform duration-300 ${openSubmenu === 'profil' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSubmenu === 'profil' && (
                <div className="pl-4 flex flex-col gap-2 py-2 bg-surface-container-low rounded-md mt-1">
                  <Link href="/profil/sejarah" onClick={() => setMobileMenuOpen(false)} className={`text-xs font-inter py-1 ${pathname === '/profil/sejarah' ? 'text-primary font-bold' : 'text-body-gray'}`}>Sejarah Singkat</Link>
                  <Link href="/#visi-misi" onClick={() => setMobileMenuOpen(false)} className="text-xs font-inter text-body-gray hover:text-primary py-1">Visi Misi</Link>
                  <Link href="/profil/struktur-organisasi" onClick={() => setMobileMenuOpen(false)} className={`text-xs font-inter py-1 ${pathname === '/profil/struktur-organisasi' ? 'text-primary font-bold' : 'text-body-gray'}`}>Struktur Organisasi</Link>
                  <Link href="/profil/akreditasi" onClick={() => setMobileMenuOpen(false)} className={`text-xs font-inter py-1 ${pathname === '/profil/akreditasi' ? 'text-primary font-bold' : 'text-body-gray'}`}>Akreditasi</Link>
                </div>
              )}
            </div>

            {/* Mobile Akademik Accordion */}
            <div className="py-1">
              <button
                onClick={() => toggleSubmenu('akademik')}
                className={`w-full flex justify-between items-center font-semibold text-[13.5px] uppercase py-1.5 ${
                  isAkademikActive ? "text-primary font-bold" : "text-on-surface-variant"
                }`}
              >
                Akademik
                <svg className={`w-4 h-4 transition-transform duration-300 ${openSubmenu === 'akademik' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSubmenu === 'akademik' && (
                <div className="pl-4 flex flex-col gap-2 py-2 bg-surface-container-low rounded-md mt-1">
                  <Link href="/akademik/kurikulum" onClick={() => setMobileMenuOpen(false)} className={`text-xs font-inter py-1 ${pathname === '/akademik/kurikulum' ? 'text-primary font-bold' : 'text-body-gray'}`}>Kurikulum Kami</Link>
                  <Link href="#" onClick={() => setMobileMenuOpen(false)} className="text-xs font-inter text-body-gray hover:text-primary py-1">Mata Pelajaran</Link>
                  <Link href="#" onClick={() => setMobileMenuOpen(false)} className="text-xs font-inter text-body-gray hover:text-primary py-1">Bimbingan Konseling</Link>
                </div>
              )}
            </div>

            {/* Mobile Kesiswaan Accordion */}
            <div className="py-1">
              <button
                onClick={() => toggleSubmenu('kesiswaan')}
                className={`w-full flex justify-between items-center font-semibold text-[13.5px] uppercase py-1.5 ${
                  isKesiswaanActive ? "text-primary font-bold" : "text-on-surface-variant"
                }`}
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
              className={`font-semibold text-[13.5px] uppercase py-2 ${
                isBeritaActive ? "text-primary font-bold" : "text-on-surface-variant"
              }`}
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

      {/* Spacing spacer for fixed header on subpages */}
      {!isHome && <div className="h-18 md:h-20 w-full" />}
    </>
  );
}