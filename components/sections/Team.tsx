"use client";

import { motion } from "framer-motion";

export default function Team() {
  return (
    <section className="bg-vow-surface-alt py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-vow-primary text-xs font-semibold tracking-widest uppercase mb-4 block"
          >
            Equipe
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-vow-text leading-tight"
          >
            Quem vai cuidar{" "}
            <span className="text-vow-primary">da sua operação.</span>
          </motion.h2>
        </div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-vow-surface border border-vow-border rounded-2xl p-10 lg:p-14"
        >
          {/* Photo placeholder */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="w-40 h-40 rounded-2xl bg-vow-primary/10 border border-vow-primary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-4xl font-bold text-vow-primary">GN</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-vow-text mb-1">
                Guilherme Nielsen
              </h3>
              <p className="text-vow-primary text-sm font-semibold mb-3">
                Co-Founder, Vow Vistos
              </p>
              {/* Languages */}
              <div className="flex flex-wrap gap-2">
                {["Português", "English", "Español"].map((lang) => (
                  <span
                    key={lang}
                    className="bg-vow-primary/10 border border-vow-primary/20 text-vow-primary text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4 text-vow-muted text-base leading-relaxed">
            <p>
              [Guilherme — adicione aqui uma introdução pessoal. Fale sobre sua trajetória, o que te levou a criar a Vow Vistos e por que o setor eólico é a sua especialidade.]
            </p>
            <p>
              [Fale sobre sua experiência prática com mobilização internacional, os mercados que você conhece de perto e o que diferencia sua abordagem da de uma agência tradicional.]
            </p>
            <p>
              [Encerre com algo pessoal: o que te motiva nesse trabalho e como você enxerga a parceria com os clientes da Vow Vistos.]
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
