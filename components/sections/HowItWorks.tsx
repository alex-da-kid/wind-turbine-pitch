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
    body: "Documentação, viagens, suporte e acompanhamento completo. Cada detalhe gerenciado pela nossa equipe.",
  },
  {
    number: "04",
    title: "Acompanhamos sua equipe",
    body: "Suporte contínuo durante toda a operação. Antes do embarque, durante e no retorno.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-vow-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-vow-primary text-xs font-semibold tracking-widest uppercase mb-4 block"
          >
            Processo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-vow-text leading-tight"
          >
            Um processo simples para{" "}
            <span className="text-vow-primary">operações complexas.</span>
          </motion.h2>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-vow-border z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center lg:text-center"
              >
                {/* Step circle */}
                <div className="w-20 h-20 rounded-full bg-vow-surface border-2 border-vow-border flex items-center justify-center mb-6 relative">
                  <span className="text-vow-primary font-bold text-lg">
                    {step.number}
                  </span>
                  {/* Mobile connector */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-px h-8 bg-vow-border" />
                  )}
                </div>
                <h3 className="text-vow-text font-semibold text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-vow-muted text-sm leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-vow-primary hover:text-vow-primary-hover font-semibold text-sm transition-colors"
          >
            Iniciar uma conversa
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
