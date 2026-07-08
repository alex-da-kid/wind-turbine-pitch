"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const trustPoints = [
  "Integração real entre imigração e logística. Não apenas vistos, não apenas viagens.",
  "Equipe trilingue em português, inglês e espanhol. Comunicamos com todos os lados da operação.",
  "Presença no mercado americano. Entendemos os processos, os consulados e a operação local.",
  "Modelo de trabalho alinhado aos seus resultados. Se a sua operação não funciona, a nossa também não.",
];

export default function Differentiator({ paragraph }: { paragraph?: string }) {
  const defaultParagraph =
    "A Vow Vistos foi construída para atender operações internacionais do setor eólico. Entendemos a urgência operacional, os desafios migratórios e a complexidade logística envolvida na mobilização global de equipes técnicas.";

  return (
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text side */}
          <div>
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-56 rounded-2xl overflow-hidden mb-10"
            >
              <Image
                src="/team-operations.jpg"
                alt="Equipe de operações em reunião de alinhamento"
                fill
                className="object-cover object-center"
              />
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-vow-primary text-xs font-semibold tracking-widest uppercase mb-4 block"
            >
              Nosso diferencial
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-light text-vow-primary leading-tight mb-6"
            >
              Operamos como{" "}
              <span className="text-vow-text">parte da sua equipe.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-vow-muted text-base leading-relaxed mb-8"
            >
              {paragraph ?? defaultParagraph}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-vow-muted text-base leading-relaxed"
            >
              Nosso papel é garantir que sua equipe esteja pronta para operar:
              no prazo, com segurança e com suporte contínuo.
            </motion.p>
          </div>

          {/* Trust points */}
          <div className="space-y-4">
            {trustPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-shadow"
              >
                <div className="w-6 h-6 rounded-full bg-vow-primary/10 border border-vow-primary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-vow-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-vow-text text-sm leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
