"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/lib/data/services";

export default function Solutions({
  iconOverrides,
}: {
  iconOverrides?: Record<string, string>;
}) {
  return (
    <section id="servicos" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-vow-primary text-xs font-semibold tracking-widest uppercase mb-4 block"
          >
            O que fazemos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-vow-primary leading-tight"
          >
            Uma estrutura completa para{" "}
            <span className="text-vow-text">mobilização internacional.</span>
          </motion.h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-xl p-8 border bg-gray-50 border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all group"
            >
              <Image
                src={iconOverrides?.[service.id] ?? service.icon}
                alt=""
                width={52}
                height={52}
                className="mb-6"
              />
              <h3 className="text-xl font-medium mb-3 text-vow-text">
                {service.title}
              </h3>
              <p className="text-vow-muted text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0 bg-vow-primary/60" />
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
