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
  {
    id: "t2",
    quote:
      "Desde que conheci a Vow, as demandas chegam e é só encaminhar — tudo flui naturalmente, sem dor de cabeça, sem stress. Qualquer tipo de visto, passagem para qualquer país, resolvem muito rápido com acompanhamento completo até o desembarque. Com a Vow, vamos cada vez mais longe e o mundo fica pequeno!",
    name: "Marcio Moraes",
    role: "CEO LATAM",
    company: "All American Wind",
  },
  {
    id: "t3",
    quote:
      "We would highly recommend Vow Vistos to everyone who needs legal immigration services. Guilherme and the team helped us get results where others failed. Since we started working together, we've grown substantially — 32 employees and a clientele that keeps expanding.",
    name: "Michael Lee",
    role: "Customer Service & Sales",
    company: "CICNDT",
  },
];
