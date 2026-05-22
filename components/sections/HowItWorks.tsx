"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Entendemos sua operação",
    body: "Destino, prazo, tamanho da equipe e necessidade operacional. Cada projeto tem uma realidade específica.",
  },
  {
    number: "02",
    title: "Estruturamos a estratégia",
    body: "Imigração, logística e suporte alinhados à realidade do projeto, com antecipação de riscos e planos de contingência.",
  },
  {
    number: "03",
    title: "Executamos a mobilização",
    body: "Vistos, passagens, documentação e logística coordenados em paralelo. Sua equipe embarca no prazo, sem surpresas.",
  },
  {
    number: "04",
    title: "Acompanhamos em campo",
    body: "Com a equipe no destino, continuamos ativos: imprevistos, remarcações e emergências resolvidos em tempo real.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 lg:py-32" style={{ backgroundColor: '#19736e' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-4 block"
          >
            Processo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight"
          >
            Um processo simples para{" "}
            <span className="text-vow-orange">operações complexas.</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-white/20 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center mb-6 relative">
                  <span className="text-white font-bold text-lg">
                    {step.number}
                  </span>
                  {/* Mobile connector */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-px h-8 bg-white/20" />
                  )}
                </div>
                <h3 className="text-white font-medium text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
