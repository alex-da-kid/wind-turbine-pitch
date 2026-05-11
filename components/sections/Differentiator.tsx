"use client";

import { motion } from "framer-motion";

const trustPoints = [
  "Integração real entre imigração e logística — não apenas vistos, não apenas viagens.",
  "Suporte humano genuíno — você fala com um especialista, não com um bot.",
  "Presença no mercado americano — entendemos os processos, os consulados e a operação local.",
];

export default function Differentiator() {
  return (
    <section className="bg-vow-graphite/30 py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-vow-primary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text side */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-vow-primary text-xs font-semibold tracking-widest uppercase mb-4 block"
            >
              Nosso diferencial
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-vow-text leading-tight mb-6"
            >
              Não somos uma{" "}
              <span className="text-vow-primary">agência tradicional.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-vow-muted text-base leading-relaxed mb-8"
            >
              A Vow Vistos foi construída para atender operações internacionais
              do setor eólico. Entendemos a urgência operacional, os desafios
              migratórios e a complexidade logística envolvida na mobilização
              global de equipes técnicas.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-vow-muted text-base leading-relaxed"
            >
              Nosso papel é garantir que sua equipe esteja pronta para operar —
              no prazo, com segurança e com suporte contínuo.
            </motion.p>
          </div>

          {/* Trust points */}
          <div className="space-y-4">
            {trustPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex items-start gap-4 bg-vow-surface border border-vow-border rounded-xl p-5"
              >
                <div className="w-6 h-6 rounded-full bg-vow-primary/15 border border-vow-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-vow-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-vow-text text-sm leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
