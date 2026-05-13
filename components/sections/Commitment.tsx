"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Só ganhamos quando você opera.",
    body: "Nosso modelo está diretamente atrelado ao sucesso da sua mobilização. O seu resultado é o nosso resultado.",
  },
  {
    title: "Processo estruturado elimina surpresas.",
    body: "Um método comprovado significa menos falhas, menos emergências e menos custos inesperados para a sua operação.",
  },
  {
    title: "Suporte ativo até o último dia.",
    body: "Permanecemos presentes durante toda a operação, não apenas até o embarque. A nossa responsabilidade não termina no aeroporto.",
  },
];

export default function Commitment() {
  return (
    <section className="bg-vow-surface-alt py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-vow-primary/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-vow-primary text-xs font-semibold tracking-widest uppercase mb-4 block"
          >
            Nosso Modelo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-vow-text leading-tight mb-6"
          >
            Se você não opera,{" "}
            <span className="text-vow-primary">nós não crescemos.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-vow-muted text-lg leading-relaxed"
          >
            Nosso negócio só funciona quando o seu funciona. Por isso tratamos cada mobilização como se fosse a nossa própria operação em risco.
          </motion.p>
        </div>

        {/* Principle cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-vow-surface border border-vow-border rounded-xl p-8 hover:border-vow-primary/40 transition-colors"
            >
              <div className="w-8 h-0.5 bg-vow-primary mb-6" />
              <h3 className="text-vow-text font-bold text-lg mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-vow-muted text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
