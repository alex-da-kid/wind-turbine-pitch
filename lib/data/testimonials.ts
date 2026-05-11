export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
}

// Placeholder content — replace with real testimonials before launch
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "A Vow Vistos transformou nossa capacidade de mobilização internacional. Antes, cada operação era um stress enorme. Hoje é um processo estruturado e previsível.",
    name: "Carlos M.",
    role: "Diretor de Operações",
    company: "Empresa de Manutenção Eólica — [Substituir pelo nome real]",
  },
  {
    id: "t2",
    quote:
      "O que nos impressionou foi a velocidade e o suporte humano. Quando tivemos uma emergência com nossa equipe nos EUA, eles resolveram em horas — não em dias.",
    name: "Ana L.",
    role: "Gerente de Projetos",
    company: "Operadora Eólica — [Substituir pelo nome real]",
  },
  {
    id: "t3",
    quote:
      "Finalmente um parceiro que entende o setor eólico de verdade. Eles não são uma agência de viagem — são uma extensão da nossa operação.",
    name: "Roberto S.",
    role: "CEO",
    company: "Empresa do Setor Eólico — [Substituir pelo nome real]",
  },
];
