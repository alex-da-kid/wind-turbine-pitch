"use client";

import { motion } from "framer-motion";

const problems = [
  "Negativas de visto",
  "Técnicos barrados na fronteira",
  "Atraso em mobilização",
  "Perda de conexão aérea",
  "Documentação inconsistente",
  "Custos emergenciais",
  "Equipes sem suporte local",
  "Processos consulares mal preparados",
  "Interrupção de contratos",
  "Repatriação não planejada",
  "Falha de comunicação em campo",
  "Problemas de compliance migratório",
];

export default function ProblemsWePrevented() {
  return (
    <section className="bg-vow-surface-alt py-24 lg:py-32 relative overflow-hidden">
      {/* Left glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-vow-danger/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-vow-primary text-xs font-semibold tracking-widest uppercase mb-4 block"
            >
              Mitigação de risco
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-vow-text leading-tight mb-6"
            >
              Problemas que{" "}
              <span className="text-vow-primary">evitamos para você.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-vow-muted text-base leading-relaxed"
            >
              Cada problema listado aqui representa uma operação que falhou em
              empresas que não tinham o suporte certo. A Vow Vistos existe para
              garantir que isso nunca aconteça com você.
            </motion.p>
          </div>

          {/* Problems grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {problems.map((problem, i) => (
              <motion.div
                key={problem}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-3 bg-vow-surface border border-vow-border rounded-lg px-4 py-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-vow-danger flex-shrink-0" />
                <span className="text-vow-muted text-sm">{problem}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
