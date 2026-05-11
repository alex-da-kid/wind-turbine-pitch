export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  items: string[];
  highlight?: boolean;
}

export const services: ServiceItem[] = [
  {
    id: "immigration",
    title: "Imigração Corporativa",
    description:
      "Estruturamos processos migratórios para empresas do setor eólico com foco em agilidade, conformidade e mitigação de riscos.",
    items: [
      "Vistos de trabalho temporário",
      "Suporte consular especializado",
      "Análise estratégica migratória",
      "Preparação documental completa",
      "Orientação pré-embarque",
      "Suporte em entrevistas consulares",
    ],
  },
  {
    id: "travel",
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
    id: "usa",
    title: "Mobilização para os Estados Unidos",
    description:
      "O mercado americano segue em forte expansão para empresas de serviços do setor eólico. Apoiamos empresas brasileiras na mobilização de equipes técnicas para operações nos EUA, reduzindo riscos migratórios e acelerando processos.",
    items: [
      "Estratégia migratória para o mercado americano",
      "Vistos de trabalho para técnicos eólicos",
      "Gestão de documentação e compliance",
      "Logística completa EUA",
      "Suporte local e acompanhamento",
      "Remobilização ágil em casos de urgência",
    ],
    highlight: true,
  },
  {
    id: "operational",
    title: "Suporte Operacional Real",
    description:
      "Nossa equipe atua como uma extensão do seu departamento de mobilização internacional — com atendimento humano, não automatizado.",
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
