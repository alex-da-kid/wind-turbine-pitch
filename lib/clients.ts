export interface ClientData {
  slug: string;
  companyName: string;
  companyLocation: string;
  heroTag: string;
  heroHeadline: string;
  heroSubheadline: string;
  whatsappMessage: string;
  metaTitle: string;
  metaDescription: string;
}

export const CLIENTS: Record<string, ClientData> = {
  "flex-wind": {
    slug: "flex-wind",
    companyName: "Flex Wind",
    companyLocation: "Fortaleza, CE",
    heroTag: "Criado para a equipe da Flex Wind",
    heroHeadline: "A Flex Wind já opera nos EUA. Vow Vistos garante que suas equipes cheguem lá.",
    heroSubheadline:
      "Sabemos que vocês operam plataformas suspensas nos EUA. Cada técnico parado em fila de visto é um contrato em risco. A Vow Vistos integra imigração e logística para que nenhum deploy da Flex Wind seja interrompido por burocracia.",
    whatsappMessage:
      "Olá Guilherme, sou da Flex Wind e vi a página que vocês prepararam especialmente para nós. Gostaria de conversar sobre mobilização internacional para nossas operações nos EUA.",
    metaTitle: "Vow Vistos × Flex Wind — Mobilização Internacional para Operações Eólicas nos EUA",
    metaDescription:
      "A Vow Vistos integra imigração corporativa, logística global e suporte 24/7 para que a Flex Wind mobilize equipes técnicas nos EUA sem burocracia e sem atrasos.",
  },
};
