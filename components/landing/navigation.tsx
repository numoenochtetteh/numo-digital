// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";

// const navLinks = [
//   { name: "Features", href: "#features" },
//   { name: "How it works", href: "#how-it-works" },
//   { name: "Developers", href: "#developers" },
//   { name: "Pricing", href: "#pricing" },
// ];

// export function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed z-50 transition-all duration-500 ${
//         isScrolled
//           ? "top-4 left-4 right-4"
//           : "top-0 left-0 right-0"
//       }`}
//     >
//       <nav
//         className={`mx-auto transition-all duration-500 ${
//           isScrolled || isMobileMenuOpen
//             ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]"
//             : "bg-transparent max-w-[1400px]"
//         }`}
//       >
//         <div
//           className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
//             isScrolled ? "h-14" : "h-20"
//           }`}
//         >
//           {/* Logo */}
//           <a href="#" className="flex items-center gap-2 group">
//             <span className={`font-display tracking-tight transition-all duration-500 ${isScrolled ? "text-xl" : "text-2xl"}`}>Optimus</span>
//             <span className={`text-muted-foreground font-mono transition-all duration-500 ${isScrolled ? "text-[10px] mt-0.5" : "text-xs mt-1"}`}>TM</span>
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-12">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
//               >
//                 {link.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
//               </a>
//             ))}
//           </div>

//           {/* Desktop CTA */}
//           <div className="hidden md:flex items-center gap-4">
//             <a href="#" className={`text-foreground/70 hover:text-foreground transition-all duration-500 ${isScrolled ? "text-xs" : "text-sm"}`}>
//               Sign in
//             </a>
//             <Button
//               size="sm"
//               className={`bg-foreground hover:bg-foreground/90 text-background rounded-full transition-all duration-500 ${isScrolled ? "px-4 h-8 text-xs" : "px-6"}`}
//             >
//               Start creating
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden p-2"
//             aria-label="Toggle menu"
//           >
//             {isMobileMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>

//       </nav>

//       {/* Mobile Menu - Full Screen Overlay */}
//       <div
//         className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
//           isMobileMenuOpen
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"
//         }`}
//         style={{ top: 0 }}
//       >
//         <div className="flex flex-col h-full px-8 pt-28 pb-8">
//           {/* Navigation Links */}
//           <div className="flex-1 flex flex-col justify-center gap-8">
//             {navLinks.map((link, i) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className={`text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${
//                   isMobileMenuOpen
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-4"
//                 }`}
//                 style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           {/* Bottom CTAs */}
//           <div className={`flex gap-4 pt-8 border-t border-foreground/10 transition-all duration-500 ${
//             isMobileMenuOpen
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 translate-y-4"
//           }`}
//           style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
//           >
//             <Button
//               variant="outline"
//               className="flex-1 rounded-full h-14 text-base"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Sign in
//             </Button>
//             <Button
//               className="flex-1 bg-foreground text-background rounded-full h-14 text-base"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Start creating
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Process", href: "#development" },
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
