"use client";

import { motion } from "framer-motion";

const ctaOptions = [
  {
    label: "Agendar reunião",
    description: "Conversa inicial de 30 minutos sobre sua operação",
    primary: true,
  },
  {
    label: "Falar com especialista",
    description: "Atendimento direto com nossa equipe técnica",
    primary: false,
  },
  {
    label: "Solicitar diagnóstico",
    description: "Avaliação gratuita da sua estrutura de mobilização",
    primary: false,
  },
];

export default function FinalCTA() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-vow-dark">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-vow-surface/20 via-vow-dark to-vow-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-vow-primary/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-vow-primary text-xs font-semibold tracking-widest uppercase mb-6 block"
        >
          Próximo passo
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-vow-text leading-[1.1] tracking-tight mb-6"
        >
          Sua operação internacional precisa de{" "}
          <span className="text-vow-primary">
            velocidade, suporte e segurança.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-vow-muted text-lg max-w-2xl mx-auto leading-relaxed mb-12"
        >
          A Vow Vistos ajuda empresas do setor eólico a mobilizar equipes
          internacionais com agilidade, estratégia e suporte operacional real.
        </motion.p>

        {/* CTA Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          {ctaOptions.map((cta) => (
            <a
              key={cta.label}
              href="#contato"
              className={`group flex flex-col items-center gap-1 px-7 py-4 rounded-xl transition-all duration-200 text-center w-full sm:w-auto ${
                cta.primary
                  ? "bg-vow-primary hover:bg-vow-primary-hover text-white hover:shadow-[0_0_40px_rgba(29,111,164,0.35)]"
                  : "border border-vow-border hover:border-vow-primary text-vow-text hover:text-vow-primary"
              }`}
            >
              <span className="font-semibold text-sm">{cta.label}</span>
              <span
                className={`text-xs ${cta.primary ? "text-white/70" : "text-vow-muted"}`}
              >
                {cta.description}
              </span>
            </a>
          ))}
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-6 text-vow-muted text-xs"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-vow-primary/60" />
            Atendimento humano
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-vow-primary/60" />
            Resposta em até 24h
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-vow-primary/60" />
            Sem compromisso inicial
          </span>
        </motion.div>
      </div>
    </section>
  );
}
