export interface CaseStudySection {
  heading?: string;
  body: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  tag: string;
  route: string;
  challenge: string;
  outcome: string;
  stat: string;
  statLabel: string;
  date: string;
  readTime: string;
  fullContent: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    slug: "mobilizacao-texas",
    title: "Mobilização de 12 Técnicos para o Texas em 3 Semanas",
    tag: "Mobilização EUA",
    route: "Brasil → Texas, EUA",
    challenge:
      "Empresa de manutenção eólica precisava mobilizar 12 técnicos para um contrato de 6 meses no Texas com prazo de 3 semanas.",
    outcome:
      "Estruturamos a estratégia migratória, emitimos todos os vistos e coordenamos a logística completa. Equipe embarcou no prazo, sem nenhuma negativa consular.",
    stat: "12",
    statLabel: "Técnicos mobilizados",
    date: "2024",
    readTime: "3 min",
    fullContent: [
      {
        heading: "O contexto",
        body: "[Descreva aqui o contexto completo do cliente, o setor em que atua e o momento em que nos procurou.]",
      },
      {
        heading: "O desafio",
        body: "[Detalhe os desafios específicos enfrentados: prazos, documentação, perfil dos técnicos, requisitos do visto, restrições do contrato, etc.]",
      },
      {
        heading: "Nossa abordagem",
        body: "[Explique passo a passo como a Vow Vistos estruturou a solução: análise migratória, preparação documental, coordenação consular, logística de viagem, etc.]",
      },
      {
        heading: "O resultado",
        body: "[Descreva o desfecho em detalhes: quantos técnicos, em quanto tempo, qual foi o impacto para a operação do cliente e o que foi evitado.]",
      },
    ],
  },
  {
    id: "case-2",
    slug: "gestao-de-crise-fronteira",
    title: "Resolução de Crise em 48 Horas na Fronteira",
    tag: "Gestão de Crise",
    route: "Brasil → Europa",
    challenge:
      "Dois técnicos foram barrados na fronteira por inconsistência documental. A empresa enfrentava perda de contrato com multa contratual.",
    outcome:
      "Acionamos nosso suporte emergencial, resolvemos a situação em 48 horas e remobilizamos a equipe sem perda do contrato.",
    stat: "48h",
    statLabel: "Para resolver a crise",
    date: "2024",
    readTime: "3 min",
    fullContent: [
      {
        heading: "O contexto",
        body: "[Descreva aqui o contexto do cliente e a operação em andamento quando a crise aconteceu.]",
      },
      {
        heading: "O desafio",
        body: "[Detalhe o que aconteceu na fronteira, quais documentos estavam inconsistentes, quais eram as consequências contratuais e o nível de urgência da situação.]",
      },
      {
        heading: "Nossa abordagem",
        body: "[Explique como o suporte emergencial foi acionado, quais medidas foram tomadas nas primeiras horas, como a comunicação foi gerenciada e quais canais foram utilizados para resolver a situação.]",
      },
      {
        heading: "O resultado",
        body: "[Descreva como a situação foi resolvida, em quanto tempo, qual foi o impacto evitado e o que o cliente conseguiu preservar operacionalmente.]",
      },
    ],
  },
  {
    id: "case-3",
    slug: "expansao-internacional-multiplos-destinos",
    title: "Protocolo de Mobilização para Expansão Internacional",
    tag: "Expansão Internacional",
    route: "Brasil → Múltiplos países",
    challenge:
      "Empresa eólica em processo de expansão internacional precisava de uma estrutura de mobilização recorrente para equipes em diferentes destinos.",
    outcome:
      "Implementamos um protocolo de mobilização padronizado que reduziu o tempo médio de processamento e eliminou inconsistências documentais.",
    stat: "40%",
    statLabel: "Redução no tempo de mobilização",
    date: "2024",
    readTime: "4 min",
    fullContent: [
      {
        heading: "O contexto",
        body: "[Descreva o momento de expansão da empresa, os mercados que estavam sendo explorados e os desafios de escalar operações internacionais sem um processo estruturado.]",
      },
      {
        heading: "O desafio",
        body: "[Detalhe os problemas que surgiam com o modelo anterior: inconsistências documentais, prazos imprevisíveis, falta de padronização entre destinos e o custo operacional disso.]",
      },
      {
        heading: "Nossa abordagem",
        body: "[Explique como a Vow Vistos mapeou os destinos, criou um protocolo padrão de mobilização, definiu fluxos documentais por país e estabeleceu um processo de checagem recorrente.]",
      },
      {
        heading: "O resultado",
        body: "[Descreva os resultados mensuráveis: redução de tempo, eliminação de erros, impacto no planejamento operacional do cliente e como o processo continua funcionando hoje.]",
      },
    ],
  },
];
