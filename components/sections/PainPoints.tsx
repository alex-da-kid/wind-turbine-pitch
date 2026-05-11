"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { painPoints } from "@/lib/data/pain-points";

export default function PainPoints() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
            O problema
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-vow-text leading-tight"
          >
            O setor eólico{" "}
            <span className="text-vow-primary">não pode esperar.</span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-vow-surface border border-vow-border rounded-xl p-7 flex gap-5 hover:border-vow-primary/40 transition-colors group"
            >
              {/* Left accent bar */}
              <div className="w-0.5 bg-vow-primary/30 group-hover:bg-vow-primary rounded-full flex-shrink-0 transition-colors" />

              <div>
                <div className="text-2xl mb-3">{point.icon}</div>
                <h3 className="text-vow-text font-semibold text-lg mb-2 leading-snug">
                  {point.headline}
                </h3>
                <p className="text-vow-muted text-sm leading-relaxed">
                  {point.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
