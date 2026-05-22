"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { file: "Logo-Ad-Comp.svg", name: "Ad Comp" },
  { file: "Logo-All-American-Wind.svg", name: "All American Wind" },
  { file: "Logo-Appia.svg", name: "Appia" },
  { file: "Logo-Cotech-Group.svg", name: "Cotech Group" },
  { file: "Logo-Gwind.svg", name: "Gwind" },
  { file: "Logo-MS.svg", name: "MS" },
  { file: "Logo-Mega-Wind.svg", name: "Mega Wind" },
  { file: "Logo-Pronto-Solutions.svg", name: "Pronto Solutions" },
  { file: "Logo-Siemens-Energy.svg", name: "Siemens Energy" },
  { file: "Logo-Tech-Wind.svg", name: "Tech Wind" },
  { file: "Logo-WSF.svg", name: "WSF" },
  { file: "Logo-WTC.svg", name: "WTC" },
  { file: "Logo-Wind-Com.svg", name: "Wind Com" },
];

export default function Authority() {
  return (
    <section className="bg-gray-50 py-24 lg:py-32 border-t border-gray-200">
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
            className="text-3xl md:text-4xl lg:text-5xl font-light text-vow-primary leading-tight"
          >
            Empresas do setor eólico{" "}
            <span className="text-vow-text">que já mobilizamos.</span>
          </motion.h2>
        </div>

        {/* Logo grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-6">
            {logos.map(({ file, name }, i) => (
              <motion.div
                key={file}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-center hover:shadow-sm transition-shadow"
              >
                <Image
                  src={`/logos/${file}`}
                  alt={name}
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
