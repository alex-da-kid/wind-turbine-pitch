"use client";

import { motion } from "framer-motion";

const DEFAULT_WHATSAPP_URL =
  "https://wa.me/558531216961?text=Olá%20Guilherme%2C%20vim%20pelo%20site%20da%20Vow%20Vistos%20e%20gostaria%20de%20conversar%20sobre%20mobilização%20internacional%20para%20o%20setor%20eólico.";

interface FinalCTAProps {
  whatsappUrl?: string;
}

export default function FinalCTA({ whatsappUrl }: FinalCTAProps = {}) {
  const WHATSAPP_URL = whatsappUrl ?? DEFAULT_WHATSAPP_URL;
  return (
    <section
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ backgroundColor: "#f9fafb" }}
    >
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-vow-primary text-xs font-semibold tracking-widest uppercase mb-6 block"
        >
          Próximo passo
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-light text-vow-primary leading-[1.1] tracking-tight mb-6"
        >
          Sua operação internacional precisa de{" "}
          <span className="text-vow-text">
            velocidade, suporte e segurança.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-vow-muted text-lg max-w-2xl mx-auto leading-relaxed mb-12"
        >
          A Vow Vistos ajuda empresas do setor eólico a mobilizar equipes
          internacionais com agilidade, estratégia e suporte operacional real.
        </motion.p>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white font-medium px-10 py-5 rounded-xl transition-all duration-200 hover:shadow-lg text-lg"
            style={{ backgroundColor: "#19736e" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "#15625e")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "#19736e")
            }
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar com Guilherme no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
