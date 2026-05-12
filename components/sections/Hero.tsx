"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-vow-dark">
      {/* Background grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#1D6FA4 1px, transparent 1px), linear-gradient(90deg, #1D6FA4 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-vow-dark via-transparent to-vow-dark" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-vow-primary/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-32 pb-20">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-vow-surface border border-vow-border rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-vow-primary animate-pulse" />
          <span className="text-vow-muted text-xs font-medium tracking-wide uppercase">
            Especialistas no mercado americano
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-vow-text leading-[1.08] tracking-tight mb-6"
        >
          Sua equipe pronta para{" "}
          <span className="text-vow-primary">operar em qualquer lugar</span>{" "}
          do mundo.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-vow-muted max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A Vow Vistos apoia empresas do setor eólico com mobilização
          internacional, imigração corporativa, logística global e suporte
          operacional 24/7.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#servicos"
            className="w-full sm:w-auto bg-vow-primary hover:bg-vow-primary-hover text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-[0_0_30px_rgba(29,111,164,0.3)] text-center"
          >
            Ver Nossos Serviços
          </a>
          <a
            href="#cases"
            className="w-full sm:w-auto border border-vow-border hover:border-vow-primary text-vow-text hover:text-vow-primary font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-center"
          >
            Ver Estudos de Caso
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-3 gap-6 max-w-xl mx-auto mt-16 pt-10 border-t border-vow-border"
        >
          {[
            { value: "24/7", label: "Suporte operacional" },
            { value: "+5", label: "Anos no setor eólico" },
            { value: "100%", label: "Atendimento humano" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-vow-text mb-1">
                {stat.value}
              </div>
              <div className="text-vow-muted text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
