"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { painPoints } from "@/lib/data/pain-points";

const icons = [
  <svg key="clock" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15.5 14.5" />
  </svg>,
  <svg key="doc" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>,
  <svg key="globe" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <line x1="3" y1="12" x2="21" y2="12" />
  </svg>,
  <svg key="alert" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>,
];

export default function PainPoints({
  ids,
  headline,
}: {
  ids?: string[];
  headline?: ReactNode;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = ids ? painPoints.filter((p) => ids.includes(p.id)) : painPoints;

  const defaultHeadline = (
    <>
      O setor eólico{" "}
      <span className="text-vow-text">não pode esperar.</span>
    </>
  );

  return (
    <section className="bg-gray-50 py-24 lg:py-32">
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
            className="text-3xl md:text-4xl lg:text-5xl font-light text-vow-primary leading-tight"
          >
            {headline ?? defaultHeadline}
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((point, i) => {
            const iconIndex = painPoints.indexOf(point);
            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-7 flex gap-5 hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                {/* Left accent bar */}
                <div className="w-0.5 bg-vow-primary/20 group-hover:bg-vow-primary rounded-full flex-shrink-0 transition-colors" />

                <div>
                  <div className="text-vow-primary mb-3">{icons[iconIndex]}</div>
                  <h3 className="text-vow-text font-medium text-lg mb-2 leading-snug">
                    {point.headline}
                  </h3>
                  <p className="text-vow-muted text-sm leading-relaxed">
                    {point.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
