"use client";

import { useState, useEffect } from "react";

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
          ? "bg-vow-dark/95 backdrop-blur-sm border-b border-vow-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex flex-col leading-none">
              <span className="text-vow-text font-bold text-xl tracking-tight">
                VOW
              </span>
              <span className="text-vow-primary text-xs font-semibold tracking-widest uppercase">
                VISTOS
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-vow-muted hover:text-vow-text transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contato"
              className="text-vow-muted hover:text-vow-text transition-colors text-sm font-medium"
            >
              Falar com especialista
            </a>
            <a
              href="#contato"
              className="bg-vow-primary hover:bg-vow-primary-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Agendar Reunião
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-vow-muted hover:text-vow-text transition-colors p-2"
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
          <div className="md:hidden border-t border-vow-border pb-6 pt-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-vow-muted hover:text-vow-text transition-colors text-sm font-medium py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMenuOpen(false)}
                className="bg-vow-primary hover:bg-vow-primary-hover text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors text-center mt-2"
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
