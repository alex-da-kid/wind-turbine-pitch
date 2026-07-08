export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: string;
  highlight?: boolean;
}

export const services: ServiceItem[] = [
  {
    id: "immigration",
    icon: "/icon-globe.svg",
    title: "Imigração Corporativa",
    description:
      "Estruturamos processos migratórios para empresas com operações internacionais, com foco em agilidade, conformidade e mitigação de riscos. Com especialização no mercado americano, aceleramos vistos e reduzimos interrupções operacionais.",
    items: [
      "Vistos de trabalho temporário",
      "Estratégia migratória para os EUA",
      "Suporte consular especializado",
      "Gestão de documentação e compliance",
      "Orientação pré-embarque",
      "Remobilização ágil em casos de urgência",
    ],
  },
  {
    id: "travel",
    icon: "/icon-travel.svg",
    title: "Crew Travel Management",
    description:
      "Gerenciamos toda a logística internacional da sua equipe técnica, do embarque ao retorno.",
    items: [
      "Passagens aéreas corporativas",
      "Hotéis e acomodações",
      "Locação de veículos",
      "Seguro viagem completo",
      "Remarcações emergenciais",
      "Suporte operacional 24/7",
    ],
  },
  {
    id: "operational",
    icon: "/icon-immigration.svg",
    title: "Atendimento Direto 24/7",
    description:
      "Nossa equipe atua como uma extensão do seu departamento de mobilização internacional, com atendimento humano, não automatizado.",
    items: [
      "Atendimento humano direto",
      "Suporte emergencial 24/7",
      "Acompanhamento em tempo real",
      "Apoio antes, durante e após a viagem",
      "Comunicação direta e rápida",
      "Gestão de imprevistos operacionais",
    ],
  },
];
