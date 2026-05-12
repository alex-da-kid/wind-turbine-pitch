export interface PainPoint {
  id: string;
  headline: string;
  body: string;
}

export const painPoints: PainPoint[] = [
  {
    id: "downtime",
    headline: "Técnicos parados geram prejuízo imediato.",
    body: "Atrasos migratórios e falhas logísticas impactam diretamente cronogramas, contratos e produtividade operacional. Cada dia sem mobilização é receita perdida.",
  },
  {
    id: "bureaucracy",
    headline: "A burocracia internacional está cada vez mais complexa.",
    body: "Processos migratórios inconsistentes podem resultar em negativas de visto, recusas de entrada e interrupções operacionais que comprometem projetos inteiros.",
  },
  {
    id: "support",
    headline: "Operações globais exigem suporte contínuo.",
    body: "Mudanças emergenciais, remobilizações, cancelamentos e suporte fora do horário comercial fazem parte da rotina de quem opera internacionalmente.",
  },
  {
    id: "readiness",
    headline: "Chegar sem preparo gera atrasos desde o primeiro dia.",
    body: "A mobilização internacional exige integração entre imigração, logística, documentação e suporte em campo. Fragmentar isso cria brechas críticas.",
  },
];
