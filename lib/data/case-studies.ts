export interface CaseStudy {
  id: string;
  tag: string;
  route: string;
  challenge: string;
  outcome: string;
  stat: string;
  statLabel: string;
}

// Placeholder content — replace with real case studies before launch
export const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    tag: "Mobilização EUA",
    route: "Brasil → Texas, EUA",
    challenge:
      "Empresa de manutenção eólica precisava mobilizar 12 técnicos para um contrato de 6 meses no Texas com prazo de 3 semanas.",
    outcome:
      "Estruturamos a estratégia migratória, emitimos todos os vistos e coordenamos a logística completa. Equipe embarcou no prazo, sem nenhuma negativa consular.",
    stat: "12",
    statLabel: "Técnicos mobilizados",
  },
  {
    id: "case-2",
    tag: "Gestão de Crise",
    route: "Brasil → Europa",
    challenge:
      "Dois técnicos foram barrados na fronteira por inconsistência documental. A empresa enfrentava perda de contrato com multa contratual.",
    outcome:
      "Acionamos nosso suporte emergencial, resolvemos a situação em 48 horas e remobilizamos a equipe sem perda do contrato.",
    stat: "48h",
    statLabel: "Para resolver a crise",
  },
  {
    id: "case-3",
    tag: "Expansão Internacional",
    route: "Brasil → Múltiplos países",
    challenge:
      "Empresa eólica em processo de expansão internacional precisava de uma estrutura de mobilização recorrente para equipes em diferentes destinos.",
    outcome:
      "Implementamos um protocolo de mobilização padronizado que reduziu o tempo médio de processamento e eliminou inconsistências documentais.",
    stat: "40%",
    statLabel: "Redução no tempo de mobilização",
  },
];
