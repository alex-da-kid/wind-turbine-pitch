export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
}

// Placeholder slots: replace t2 and t3 with real testimonials before launch
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Para o ramo Eólico onde tudo se trata com urgência dificultando o planejamento antecipado na maioria das vezes, a Vow tem prontidão, solução rápida e eficaz para sempre atuar de maneira com que os custos sejam os mínimos possíveis com a qualidade esperada atendendo qualquer urgência sem atrasos. Não nos vemos hoje sem esta parceria, a Vow hoje é o braço direito da nossa empresa.",
    name: "Yago Duarte",
    role: "CEO",
    company: "Wind Special Forces",
  },
  {
    id: "t2",
    quote:
      "O que nos impressionou foi a velocidade e o suporte humano. Quando tivemos uma emergência com nossa equipe nos EUA, eles resolveram em horas, não em dias.",
    name: "Ana L.",
    role: "Gerente de Projetos",
    company: "Operadora Eólica [Substituir pelo nome real]",
  },
  {
    id: "t3",
    quote:
      "Finalmente um parceiro que entende o setor eólico de verdade. Eles não são uma agência de viagem: são uma extensão da nossa operação.",
    name: "Roberto S.",
    role: "CEO",
    company: "Empresa do Setor Eólico [Substituir pelo nome real]",
  },
];
