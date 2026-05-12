import Link from "next/link";
import { caseStudies } from "@/lib/data/case-studies";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estudos de Caso | Vow Vistos",
  description:
    "Operações reais do setor eólico gerenciadas pela Vow Vistos. Mobilização internacional, gestão de crise e expansão global.",
};

export default function CasosPage() {
  return (
    <>
      <Header />
      <main className="bg-vow-dark min-h-screen">
        {/* Page header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-vow-muted hover:text-vow-text text-sm transition-colors mb-10"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Voltar ao início
          </Link>

          <span className="text-vow-primary text-xs font-semibold tracking-widest uppercase mb-4 block">
            Cases
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-vow-text leading-tight mb-6">
            Operações que{" "}
            <span className="text-vow-primary">executamos.</span>
          </h1>
          <p className="text-vow-muted text-lg max-w-xl leading-relaxed">
            Resultados reais em operações reais do setor eólico.
          </p>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="border-t border-vow-border" />
        </div>

        {/* Case study cards */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/casos/${study.slug}`}
                className="group bg-vow-surface border border-vow-border rounded-xl p-7 flex flex-col hover:border-vow-primary/40 transition-colors"
              >
                {/* Tag + route */}
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-vow-primary/15 text-vow-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {study.tag}
                  </span>
                  <span className="text-vow-muted text-xs">{study.route}</span>
                </div>

                {/* Stat */}
                <div className="mb-5">
                  <div className="text-4xl font-bold text-vow-text mb-1">
                    {study.stat}
                  </div>
                  <div className="text-vow-muted text-xs font-medium uppercase tracking-wide">
                    {study.statLabel}
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-vow-text font-semibold text-base leading-snug mb-3 flex-1">
                  {study.title}
                </h2>

                <p className="text-vow-muted text-sm leading-relaxed mb-6">
                  {study.challenge}
                </p>

                {/* Read link */}
                <div className="flex items-center gap-1.5 text-vow-primary text-xs font-semibold group-hover:gap-2.5 transition-all">
                  Ler caso completo
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
