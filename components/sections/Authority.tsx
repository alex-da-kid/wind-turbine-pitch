"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "+50", label: "Operações realizadas" },
  { value: "5+", label: "Países atendidos" },
  { value: "24/7", label: "Suporte operacional" },
  { value: "0", label: "Negativas em clientes estruturados" },
];

const logoPlaceholders = [
  "Empresa Eólica 1",
  "Empresa Eólica 2",
  "Empresa Eólica 3",
  "Empresa Eólica 4",
  "Empresa Eólica 5",
];

export default function Authority() {
  return (
    <section className="bg-vow-dark py-24 lg:py-32 border-t border-vow-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-vow-primary text-xs font-semibold tracking-widest uppercase mb-4 block"
          >
            Resultados
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-vow-text leading-tight"
          >
            Empresas do setor eólico{" "}
            <span className="text-vow-primary">confiam na Vow.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-vow-muted text-sm mt-4 leading-relaxed"
          >
            Atuamos apoiando operações internacionais de empresas brasileiras do
            segmento eólico, especialmente em mobilizações voltadas ao mercado
            americano.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center bg-vow-surface border border-vow-border rounded-xl p-6"
            >
              <div className="text-3xl md:text-4xl font-bold text-vow-text mb-2">
                {stat.value}
              </div>
              <div className="text-vow-muted text-xs font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo grid (placeholders) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-vow-border pt-10"
        >
          <p className="text-center text-vow-muted text-xs uppercase tracking-widest mb-8">
            Empresas que confiam na Vow Vistos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logoPlaceholders.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-vow-surface border border-vow-border rounded-lg px-6 py-4 text-vow-muted/40 text-sm font-medium italic"
                title="Substitua pelo logo real"
              >
                {name}
              </motion.div>
            ))}
          </div>
          <p className="text-center text-vow-muted/40 text-xs mt-6 italic">
            * Substitua pelos logos reais dos seus clientes antes do lançamento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
