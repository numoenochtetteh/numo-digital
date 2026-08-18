"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 z-50 transition-all duration-500 ${
        isScrolled ? "top-4 px-4" : "top-0 px-0"
      }`}
    >
      <nav
        className={`relative z-50 mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "max-w-[1300px] rounded-[22px] border border-black/10 bg-white/85 shadow-[0_18px_55px_rgba(0,0,0,0.10)] backdrop-blur-xl"
            : "max-w-[1500px] border-transparent bg-transparent"
        }`}
      >
        <div
          className={`flex items-center justify-between px-6 transition-all duration-500 lg:px-10 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-2"
            aria-label="Numo Digital home"
          >
            <span
              className={`font-display font-semibold lowercase tracking-[-0.045em] text-black transition-all duration-500 ${
                isScrolled ? "text-xl" : "text-2xl"
              }`}
            >
              numo
            </span>

            <span
              className={`rounded-full bg-black px-2 py-1 font-mono uppercase tracking-[0.12em] text-white transition-all duration-500 ${
                isScrolled ? "text-[7px]" : "text-[8px]"
              }`}
            >
              digital
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-9 md:flex lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-sm font-medium text-black/65 transition-colors duration-300 hover:text-black"
              >
                {link.name}

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#work"
              className={`text-black/60 transition-all duration-300 hover:text-black ${
                isScrolled ? "text-xs" : "text-sm"
              }`}
            >
              View our work
            </a>

            <a
              href="#contact"
              className={`group inline-flex items-center justify-center gap-2 rounded-full bg-black font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-black/80 ${
                isScrolled ? "h-10 px-5 text-xs" : "h-12 px-6 text-sm"
              }`}
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black transition-colors hover:bg-black hover:text-white md:hidden"
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#f7f7f3] transition-all duration-500 md:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="flex min-h-[100dvh] flex-col px-6 pb-8 pt-28 sm:px-8">
          {/* Mobile links */}
          <div className="flex flex-1 flex-col justify-center gap-3">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className={`border-b border-black/10 py-4 font-display text-[clamp(2.8rem,12vw,5rem)] font-medium leading-none tracking-[-0.05em] text-black transition-all duration-500 hover:pl-3 ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen
                    ? `${index * 70 + 100}ms`
                    : "0ms",
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile bottom area */}
          <div
            className={`border-t border-black/10 pt-6 transition-all duration-500 ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{
              transitionDelay: isMobileMenuOpen ? "380ms" : "0ms",
            }}
          >
            <p className="mb-5 max-w-[320px] text-sm leading-relaxed text-black/55">
              Have a project in mind? Let&apos;s create a website that supports
              your business growth.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                onClick={closeMobileMenu}
                className="inline-flex h-13 flex-1 items-center justify-center rounded-full border border-black/15 bg-white px-6 text-sm font-medium text-black transition-colors hover:border-black"
              >
                View our work
              </a>

              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="group inline-flex h-13 flex-1 items-center justify-center gap-2 rounded-full bg-black px-6 text-sm font-medium text-white transition-all hover:bg-black/80"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="mt-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-black/40">
              <span>Ghana</span>
              <span>United Kingdom</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
