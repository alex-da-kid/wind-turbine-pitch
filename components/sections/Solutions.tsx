"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data/services";

export default function Solutions() {
  return (
    <section id="servicos" className="bg-vow-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-vow-primary text-xs font-semibold tracking-widest uppercase mb-4 block"
          >
            Soluções
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-vow-text leading-tight"
          >
            Uma estrutura completa para{" "}
            <span className="text-vow-primary">mobilização internacional.</span>
          </motion.h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-xl p-8 border transition-all group ${
                service.highlight
                  ? "bg-vow-primary/10 border-vow-primary/50 hover:border-vow-primary"
                  : "bg-vow-surface border-vow-border hover:border-vow-primary/40"
              }`}
            >
              {service.highlight && (
                <div className="absolute top-4 right-4">
                  <span className="bg-vow-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Mercado EUA
                  </span>
                </div>
              )}

              <h3
                className={`text-xl font-bold mb-3 ${service.highlight ? "text-vow-text" : "text-vow-text"}`}
              >
                {service.title}
              </h3>
              <p className="text-vow-muted text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className={`w-1 h-1 rounded-full mt-2 flex-shrink-0 ${service.highlight ? "bg-vow-primary" : "bg-vow-primary/60"}`}
                    />
                    <span className="text-vow-muted text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
