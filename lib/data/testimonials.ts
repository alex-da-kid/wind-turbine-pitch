export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Para o ramo Eólico onde tudo se trata com urgência dificultando o planejamento antecipado na maioria das vezes, a Vow tem prontidão, solução rápida e eficaz para sempre atuar de maneira com que os custos sejam os mínimos possíveis com a qualidade esperada atendendo qualquer urgência sem atrasos. Não nos vemos hoje sem esta parceria, a Vow hoje é o braço direito da nossa empresa.",
    name: "Yago Duarte",
    role: "CEO",
    company: "Wind Special Forces",
  },
];
