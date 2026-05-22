"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background image */}
      <Image
        src="/hero-airport.jpg"
        alt="Profissional em trânsito internacional no aeroporto"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-32 pb-20">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/30 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-white text-xs font-medium tracking-wide uppercase">
            Especialistas no mercado americano
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.08] tracking-tight mb-6"
        >
          Sua equipe pronta para{" "}
          <span className="text-white/80">operar em qualquer lugar</span>{" "}
          do mundo.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10"
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
            className="w-full sm:w-auto bg-vow-primary hover:bg-vow-primary-hover text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,90,255,0.25)] text-center"
          >
            Ver Nossos Serviços
          </a>
          <a
            href="#cases"
            className="w-full sm:w-auto border border-white/40 hover:border-white text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 text-center"
          >
            Ver Estudos de Caso
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-3 gap-6 max-w-xl mx-auto mt-16 pt-10 border-t border-white/20"
        >
          {[
            { value: "24/7", label: "Suporte operacional" },
            { value: "+5", label: "Anos no setor eólico" },
            { value: "100%", label: "Atendimento humano" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
