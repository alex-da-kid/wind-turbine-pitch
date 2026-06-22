"use client";

import { motion } from "framer-motion";

const team = [
  {
    initials: "AP",
    name: "Alex Podmore",
    title: "Director",
    languages: ["English", "Português"],
    bio: "Cofundador da Vow Vistos com formação em Economia. Lidera a visão estratégica da empresa com foco em criação de sistemas, gestão de processos e eficiência operacional.",
  },
  {
    initials: "GN",
    name: "Guilherme Nielsen",
    title: "Diretor Operacional",
    languages: ["Português", "English", "Español"],
    bio: "Cofundador com formação em Administração e aproximadamente 10 anos de vivência na Califórnia. Lidera os projetos de imigração e o departamento de viagens, com expertise em vistos, permissões de trabalho e logística internacional.",
  },
];

export default function Team() {
  return (
    <section className="bg-white py-24 lg:py-32">
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
            className="text-3xl md:text-4xl lg:text-5xl font-light text-vow-primary leading-tight"
          >
            Quem vai cuidar{" "}
            <span className="text-vow-text">da sua operação.</span>
          </motion.h2>
        </div>

        {/* Profile cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-10"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 rounded-xl bg-vow-primary/8 border border-vow-primary/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-vow-primary">
                    {member.initials}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-vow-text mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-vow-primary text-sm font-medium mb-3">
                    {member.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.languages.map((lang) => (
                      <span
                        key={lang}
                        className="bg-vow-primary/8 border border-vow-primary/20 text-vow-primary text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <p className="text-vow-muted text-base leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
