"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { caseStudies } from "@/lib/data/case-studies";

export default function CaseStudies({
  slugs,
  subheading,
}: {
  slugs?: string[];
  subheading?: string;
}) {
  const displayed = slugs
    ? caseStudies.filter((c) => slugs.includes(c.slug))
    : caseStudies.slice(0, 4);
  const defaultSubheading = "Resultados reais em operações reais do setor eólico.";

  return (
    <section id="cases" className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-vow-primary text-xs font-semibold tracking-widest uppercase mb-4 block"
            >
              Cases
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-light text-vow-primary leading-tight"
            >
              Operações que{" "}
              <span className="text-vow-text">executamos.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-vow-muted text-sm max-w-xs text-right hidden md:block"
          >
            {subheading ?? defaultSubheading}
          </motion.p>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayed.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-7 flex flex-col hover:border-blue-300 hover:shadow-sm transition-all"
            >
              {/* Tag + route */}
              <div className="flex items-center justify-between mb-6">
                <span className="bg-vow-primary/10 text-vow-primary text-xs font-semibold px-3 py-1 rounded-full">
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

              {/* Challenge */}
              <div className="mb-4 flex-1">
                <p className="text-vow-muted text-xs font-semibold uppercase tracking-wide mb-2">
                  Desafio
                </p>
                <p className="text-vow-muted text-sm leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Outcome */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-vow-muted text-xs font-semibold uppercase tracking-wide mb-2">
                  Resultado
                </p>
                <p className="text-vow-text text-sm leading-relaxed">
                  {study.outcome}
                </p>
              </div>

              {/* Link */}
              <div className="pt-5 mt-2">
                <Link
                  href={`/casos/${study.slug}`}
                  className="inline-flex items-center gap-1.5 text-vow-primary hover:text-vow-primary-hover text-xs font-semibold transition-colors"
                >
                  Ler caso completo
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to full cases page */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/casos"
            className="inline-flex items-center gap-2 border border-vow-border hover:border-vow-primary text-vow-text hover:text-vow-primary font-medium px-7 py-3.5 rounded-lg transition-all duration-200 text-sm"
          >
            Ver todos os estudos de caso
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
