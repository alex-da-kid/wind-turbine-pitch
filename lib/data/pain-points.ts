export interface PainPoint {
  id: string;
  icon: string;
  headline: string;
  body: string;
}

export const painPoints: PainPoint[] = [
  {
    id: "downtime",
    icon: "⏱",
    headline: "Técnicos parados geram prejuízo imediato.",
    body: "Atrasos migratórios e falhas logísticas impactam diretamente cronogramas, contratos e produtividade operacional. Cada dia sem mobilização é receita perdida.",
  },
  {
    id: "bureaucracy",
    icon: "📋",
    headline: "A burocracia internacional está cada vez mais complexa.",
    body: "Processos migratórios inconsistentes podem resultar em negativas de visto, recusas de entrada e interrupções operacionais que comprometem projetos inteiros.",
  },
  {
    id: "support",
    icon: "🌐",
    headline: "Operações globais exigem suporte contínuo.",
    body: "Mudanças emergenciais, remobilizações, cancelamentos e suporte fora do horário comercial fazem parte da rotina de quem opera internacionalmente.",
  },
  {
    id: "readiness",
    icon: "🛫",
    headline: "Sua equipe precisa chegar pronta para operar.",
    body: "A mobilização internacional exige integração entre imigração, logística, documentação e suporte em campo. Fragmentar isso cria brechas críticas.",
  },
];
