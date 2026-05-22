"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Cases", href: "#cases" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-vow-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/Vow-Vistos-Logo.svg"
              alt="Vow Vistos"
              width={130}
              height={49}
              priority
              className={`transition-all duration-300 ${!scrolled ? "brightness-0 invert" : ""}`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors text-sm font-normal ${
                  scrolled
                    ? "text-vow-muted hover:text-vow-text"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contato"
              className={`transition-colors text-sm font-normal ${
                scrolled
                  ? "text-vow-muted hover:text-vow-text"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Falar com especialista
            </a>
            <a
              href="#contato"
              className="bg-vow-primary hover:bg-vow-primary-hover text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              Agendar Reunião
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden transition-colors p-2 ${scrolled ? "text-vow-muted hover:text-vow-text" : "text-white"}`}
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-vow-border bg-white pb-6 pt-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-vow-muted hover:text-vow-text transition-colors text-sm font-normal py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMenuOpen(false)}
                className="bg-vow-primary hover:bg-vow-primary-hover text-white text-sm font-medium px-5 py-3 rounded-lg transition-colors text-center mt-2"
              >
                Agendar Reunião
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
