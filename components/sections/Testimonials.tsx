"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-vow-primary text-xs font-semibold tracking-widest uppercase mb-4 block"
          >
            Depoimentos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-vow-primary leading-tight"
          >
            O que nossos{" "}
            <span className="text-vow-text">clientes dizem.</span>
          </motion.h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-7 flex flex-col hover:shadow-sm transition-shadow"
            >
              {/* Quote mark */}
              <div className="text-vow-primary/40 text-5xl font-serif leading-none mb-4">
                "
              </div>

              <blockquote className="text-vow-text text-sm leading-relaxed mb-6 flex-1">
                {t.quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-9 h-9 rounded-full bg-vow-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-vow-primary text-sm font-bold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-vow-text text-sm font-medium">
                    {t.name}
                  </div>
                  <div className="text-vow-muted text-xs">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
