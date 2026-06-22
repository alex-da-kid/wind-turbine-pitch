"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="bg-gray-50 py-24 lg:py-32 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-vow-primary text-xs font-semibold tracking-widest uppercase mb-4 block"
          >
            Sobre nós
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-vow-primary leading-tight"
          >
            Especialistas em mobilidade{" "}
            <span className="text-vow-text">
              internacional para o setor eólico.
            </span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl space-y-5 text-vow-muted text-lg leading-relaxed"
        >
          <p>
            Desde 2017, a Vow Vistos ajuda pessoas e empresas a chegarem aos
            seus destinos com segurança, estratégia e suporte completo.
          </p>
          <p>
            A partir de 2019, passamos a atuar no setor de energia eólica,
            apoiando empresas de blade repair, inspeção NDT e rope access com
            soluções integradas para vistos, permissões de trabalho, passagens,
            hospedagem, seguros e suporte on-travel.
          </p>
          <p className="text-vow-text font-medium">
            Nossa missão: reduzir burocracias, evitar atrasos e garantir que
            equipes técnicas estejam prontas para operar em qualquer lugar do
            mundo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
