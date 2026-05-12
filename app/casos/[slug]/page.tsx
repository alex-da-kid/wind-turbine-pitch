import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data/case-studies";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} | Vow Vistos`,
    description: study.challenge,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <>
      <Header />
      <main className="bg-vow-dark min-h-screen">
        {/* Page header */}
        <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-36 pb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-vow-muted text-sm mb-10">
            <Link href="/" className="hover:text-vow-text transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link href="/casos" className="hover:text-vow-text transition-colors">
              Estudos de Caso
            </Link>
            <span>/</span>
            <span className="text-vow-text truncate">{study.tag}</span>
          </div>

          {/* Tag + route */}
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-vow-primary/15 text-vow-primary text-xs font-semibold px-3 py-1 rounded-full">
              {study.tag}
            </span>
            <span className="text-vow-muted text-xs">{study.route}</span>
            <span className="text-vow-muted text-xs">{study.date}</span>
            <span className="text-vow-muted text-xs">{study.readTime} de leitura</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-vow-text leading-tight">
            {study.title}
          </h1>
        </div>

        {/* Stat banner */}
        <div className="border-y border-vow-border">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 py-10">
            <div className="text-6xl font-bold text-vow-primary mb-2">
              {study.stat}
            </div>
            <div className="text-vow-muted text-sm font-medium uppercase tracking-widest">
              {study.statLabel}
            </div>
          </div>
        </div>

        {/* Body content */}
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 space-y-12">
          {/* Challenge + Outcome summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-vow-surface border border-vow-border rounded-xl p-6">
              <p className="text-vow-muted text-xs font-semibold uppercase tracking-widest mb-3">
                Desafio
              </p>
              <p className="text-vow-text text-sm leading-relaxed">
                {study.challenge}
              </p>
            </div>
            <div className="bg-vow-surface border border-vow-primary/30 rounded-xl p-6">
              <p className="text-vow-primary text-xs font-semibold uppercase tracking-widest mb-3">
                Resultado
              </p>
              <p className="text-vow-text text-sm leading-relaxed">
                {study.outcome}
              </p>
            </div>
          </div>

          {/* Full content sections */}
          <div className="space-y-10">
            {study.fullContent.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="text-xl font-bold text-vow-text mb-4">
                    {section.heading}
                  </h2>
                )}
                <p className="text-vow-muted text-base leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="border-t border-vow-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              href="/casos"
              className="inline-flex items-center gap-2 text-vow-muted hover:text-vow-text text-sm transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Ver todos os casos
            </Link>
            <Link
              href="/#contato"
              className="bg-vow-primary hover:bg-vow-primary-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Falar com a equipe
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
