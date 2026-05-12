"use client";

import { motion } from "framer-motion";

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
            Clientes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-vow-text leading-tight"
          >
            Empresas que{" "}
            <span className="text-vow-primary">confiam na Vow.</span>
          </motion.h2>
        </div>

        {/* Logo grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className=""
        >
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
        </motion.div>
      </div>
    </section>
  );
}
