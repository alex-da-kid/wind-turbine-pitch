export interface PersonContact {
  name: string;
  title: string;
  linkedin?: string;
}

export interface CompanyIntel {
  slug: string;
  phone?: string;
  phone2?: string;
  email?: string;
  address?: string;
  addressUSA?: string;
  website?: string;
  keyPeople?: PersonContact[];
  currentProjects?: string[];
  services?: string[];
  companyFacts?: string[];
  notes?: string;
}

export const COMPANY_INTEL: Record<string, CompanyIntel> = {
  "flex-wind": {
    slug: "flex-wind",
    phone: "+55 85 3077-7777",
    address: "Merit Offices & Mall — Av. Santos Dumont, 6740, Piso M1, Cocó, Fortaleza-CE, 60192-022",
    addressUSA: "Flex Wind USA Inc. — 6243 E. Highway 114, Rhome, Texas 76078, USA",
    website: "flex-wind.com",
    services: [
      "Instalação e manutenção de turbinas eólicas",
      "Mobilização de equipes técnicas internacionais",
      "O&M especializado em plataformas suspensas",
    ],
    companyFacts: [
      "Escritório Brasil: Fortaleza, CE",
      "Escritório USA: Rhome, Texas",
      "Idiomas de operação: PT, EN, PL, ES",
      "251–500 colaboradores",
    ],
  },

  "solucoes-eolicas": {
    slug: "solucoes-eolicas",
    website: "solucoeseolicas.com.br",
    services: [
      "O&M de parques eólicos",
      "Comissionamento de turbinas",
      "Manutenção preventiva e corretiva",
    ],
    companyFacts: [
      "Fundada em 2014",
      "Parceiros espanhóis: Virena & Koshkil",
      "Operações ativas: EUA, Espanha, UK, Índia, México e Austrália",
    ],
  },

  "res-group-brazil": {
    slug: "res-group-brazil",
    website: "res-group.com",
    services: [
      "O&M de parques eólicos e solares",
      "Desenvolvimento de projetos renováveis",
      "Asset management",
    ],
    companyFacts: [
      "Ranqueada #2 global em O&M pelo Wood Mackenzie",
      "Operações ativas nos EUA e internacionalmente",
      "Grupo global com sede no UK",
    ],
  },

  "rio-energy": {
    slug: "rio-energy",
    website: "rioenergy.com.br",
    services: [
      "Desenvolvimento de projetos eólicos, solares e híbridos",
      "Implantação e operação de plantas renováveis",
      "Comercialização de energia",
    ],
    companyFacts: [
      "Fundada em 2012, empresa do Grupo Equinor",
      "0,8 GW em projetos desenvolvidos e implantados",
      "Pipeline de 1,43 GW em desenvolvimento",
      "Emissora de Green Bonds; signatária do Pacto Global",
      "Capacidade em energia solar, eólica e híbrida",
    ],
  },

  "engie-brasil": {
    slug: "engie-brasil",
    website: "engie.com.br",
    services: [
      "Geração de energia renovável (eólica, solar, hídrica, biomassa)",
      "Desenvolvimento e operação de parques",
      "Comercialização de energia no mercado livre",
    ],
    companyFacts: [
      "Sede: Florianópolis, SC",
      "Grupo ENGIE (França) — presença global incluindo EUA",
      "Uma das maiores geradoras de renováveis do Brasil",
      "Antigo nome: Tractebel Energia",
    ],
  },

  "ge-vernova-brazil": {
    slug: "ge-vernova-brazil",
    website: "gevernova.com",
    services: [
      "Fornecimento de turbinas eólicas onshore e offshore",
      "Serviços de O&M de turbinas GE",
      "Campanhas de manutenção e blade repair",
      "Repotenciação (Repower) de turbinas",
    ],
    companyFacts: [
      "450+ turbinas GE instaladas no Brasil",
      "Centro de serviços e peças na Bahia",
      "Plataformas: 3 MW e 6 MW onshore; offshore",
      "Controladora americana — técnicos mobilizados EUA ↔ Brasil",
    ],
  },

  "revtech": {
    slug: "revtech",
    website: "revtech.com.br",
    services: [
      "O&M de parques eólicos",
      "Manutenção preventiva e corretiva de turbinas",
      "Serviços técnicos especializados em energia eólica",
    ],
    companyFacts: [
      "Fundada em 2017, Fortaleza, CE",
      "251–500 colaboradores",
      "Crescimento acelerado no segmento de O&M",
    ],
  },

  "windwerk": {
    slug: "windwerk",
    website: "windwerk.com.br",
    services: [
      "O&M e monitoramento 24/7 de parques eólicos",
      "Owner's Engineering e inspeções técnicas",
      "Due Diligence e consultoria em renováveis",
    ],
    companyFacts: [
      "Parte do Grupo DGE alemão (Freiburg, Floresta Negra)",
      "30 anos de experiência em energia renovável",
      "Gerencia 600 turbinas (~1 GW) + 80 parques solares (500 MWp)",
      "Atuação: Brasil e Chile",
      "Fundada em Florianópolis, SC (2016)",
    ],
  },

  "aeris-services": {
    slug: "aeris-services",
    website: "aerisenergy.com.br",
    services: [
      "O&M de parques eólicos",
      "Inspeção e reparo de pás (blade repair)",
      "Comissionamento de turbinas",
      "Membro da ABEEÓLICA",
    ],
    companyFacts: [
      "Fundada em 2013, Fortaleza, CE",
      "Divisão de serviços da Aeris Energy — maior fabricante de pás do Brasil",
      "Qualidade OEM aplicada a O&M e blade repair",
    ],
  },

  "gouveia-engenharia": {
    slug: "gouveia-engenharia",
    website: "instagram.com/gouveiaengenharia",
    services: [
      "O&M de parques eólicos",
      "Construção e implantação de parques",
      "Serviços de engenharia civil e elétrica",
    ],
    companyFacts: [
      "Sede: Natal, RN",
      "Fundada nos anos 1990 (30+ anos de operação)",
      "1.000+ projetos executados",
      "Base forte no Nordeste brasileiro",
    ],
  },

  "bela-vista-group": {
    slug: "bela-vista-group",
    website: "eolicabvs.com.br",
    services: [
      "O&M de parques eólicos",
      "Manutenção de sistemas solares",
      "Serviços técnicos para renováveis no Nordeste",
    ],
    companyFacts: [
      "Sede: Fortaleza, CE",
      "Fundada em 2012",
      "251–500 colaboradores",
      "Forte presença no Nordeste (eólica + solar)",
    ],
  },

  "bei-brasil": {
    slug: "bei-brasil",
    website: "bei.eng.br",
    services: [
      "Operação e Manutenção de usinas",
      "Ensaio de Vibração",
      "Ensaios Elétricos",
      "Retrofit de Usinas",
      "Engenharia do Proprietário (Owner's Engineering)",
      "Hidrometria e Telemetria",
      "Termografia",
    ],
    companyFacts: [
      "Sede: Belo Horizonte, MG",
      "Fundada em 2013",
      "Pioneiros em O&M de usinas no Brasil",
      "251–500 colaboradores",
      "Portfólio: eólica + hidro + solar",
    ],
  },

  "transfortech": {
    slug: "transfortech",
    website: "transfortech.com.br",
    services: [
      "Manutenção de gearbox de turbinas eólicas",
      "Manutenção de transformadores de potência",
      "Serviços em subestações de energia",
    ],
    companyFacts: [
      "Sede: Maracanaú, CE (Região Metropolitana de Fortaleza)",
      "Fundada em 2001",
      "11–50 colaboradores",
      "Nicho técnico especializado — alta demanda internacional",
    ],
  },

  "casa-dos-ventos": {
    slug: "casa-dos-ventos",
    website: "casadosventos.com.br",
    services: [
      "Desenvolvimento de projetos eólicos, solares e híbridos",
      "Operação e manutenção de parques",
      "Comercialização de energia no mercado livre",
      "Green fuels e certificados ambientais (I-RECs)",
    ],
    currentProjects: [
      "Rio do Vento — Complexo Eólico (em operação)",
      "Babilônia Sul — Complexo Eólico (em construção)",
      "Folha Larga Sul — Complexo Eólico (em construção)",
      "Dom Inocêncio — 828 MW em desenvolvimento",
    ],
    companyFacts: [
      "Sede: São Paulo, SP",
      "80 GW de projetos em operação, construção e desenvolvimento",
      "R$ 80 bilhões investidos em projetos operacionais e em construção",
      "Mais de 80% dos projetos entregues no prazo",
      "Maior developer independente de renováveis do Brasil",
    ],
  },

  "neoenergia": {
    slug: "neoenergia",
    website: "neoenergia.com",
    services: [
      "Geração de energia eólica, solar e hídrica",
      "Distribuição de energia elétrica",
      "Transmissão de energia",
      "Comercialização de energia",
    ],
    companyFacts: [
      "Sede: São Paulo, SP",
      "Controlada pela Iberdrola (Espanha) — grupo com presença eólica expressiva nos EUA",
      "~4,2 GW de capacidade eólica instalada no Brasil",
      "Distribuidoras em 5 estados brasileiros",
    ],
  },

  "cpfl-renovaveis": {
    slug: "cpfl-renovaveis",
    website: "cpfl.com.br",
    services: [
      "Geração de energia eólica e solar",
      "Desenvolvimento de novos projetos renováveis",
      "Comercialização de energia",
    ],
    companyFacts: [
      "Sede: Campinas, SP",
      "Subsidiária da State Grid Corporation of China",
      "Um dos maiores portfólios eólicos do Nordeste brasileiro",
      "Parques nas regiões Nordeste e Sul",
    ],
  },

  "auren-energia": {
    slug: "auren-energia",
    phone: "0800 704 0589",
    email: "comercial@aurenenergia.com.br",
    website: "aurenenergia.com.br",
    services: [
      "Geração de energia eólica e hídrica",
      "Comercialização de energia no mercado livre",
      "Soluções de autoprodução e descarbonização",
    ],
    companyFacts: [
      "Sede: São Paulo, SP",
      "Ex-Votorantim Energia (rebrandeada como Auren em 2022)",
      "3ª maior geradora do Brasil — 8,7 GW, 39 ativos",
      "Portfólio: eólica + hidro + solar",
    ],
  },

  "echo-energia": {
    slug: "echo-energia",
    website: "echoeenergia.com.br",
    services: [
      "Geração de energia eólica e solar",
      "Desenvolvimento de projetos renováveis",
      "Comercialização de energia",
    ],
    companyFacts: [
      "Operadora de grande frota eólica no Brasil",
      "Projetos concentrados no Nordeste",
    ],
  },

  "omega-energia": {
    slug: "omega-energia",
    website: "serenaenergia.com.br",
    notes: "Omega Energia foi rebrandeada como Serena Energia em 2022. O slug omega-energia aponta para a mesma empresa.",
    services: [
      "Geração de energia eólica e solar",
      "Comercialização de energia renovável",
    ],
    companyFacts: [
      "Rebrandeada como Serena Energia em 2022",
      "Grande operadora de parques eólicos no Nordeste",
    ],
  },

  "renova-energia": {
    slug: "renova-energia",
    website: "renovaenergia.com.br",
    services: [
      "Geração de energia eólica",
      "Desenvolvimento e operação de parques eólicos",
    ],
    companyFacts: [
      "Operadora de grande frota eólica no Brasil",
      "Projetos no Nordeste e em outras regiões",
    ],
  },

  "statkraft-brasil": {
    slug: "statkraft-brasil",
    website: "statkraft.com.br",
    services: [
      "Geração de energia hidráulica e eólica",
      "Trading e comercialização de energia",
      "Desenvolvimento de novos projetos renováveis",
    ],
    companyFacts: [
      "Controladora norueguesa Statkraft — maior produtora de renováveis da Europa",
      "Presença em Brasil, Chile, e 15+ países europeus",
      "Foco em hidro, eólica e energia solar",
    ],
  },

  "voltalia-brasil": {
    slug: "voltalia-brasil",
    website: "voltalia.com",
    services: [
      "Geração de energia eólica e solar",
      "Desenvolvimento e construção de parques",
      "O&M próprio com equipes in-house",
    ],
    companyFacts: [
      "Controladora francesa Voltalia — presença em 20+ países",
      "Projetos de geração no Nordeste brasileiro",
      "Equipe O&M própria — mobilização internacional recorrente",
    ],
  },

  "serena-energia": {
    slug: "serena-energia",
    website: "serenaenergia.com.br",
    notes: "Serena é a empresa resultante do rebranding da Omega Energia (2022).",
    services: [
      "Geração de energia eólica e solar",
      "Comercialização de energia renovável para o mercado livre",
    ],
    companyFacts: [
      "Antiga Omega Energia — rebrandeada como Serena em 2022",
      "Grande geradora de renováveis no Nordeste",
      "Focada no mercado livre de energia",
    ],
  },

  "pontal-energy": {
    slug: "pontal-energy",
    website: "pontalenergy.com.br",
    services: [
      "Geração de energia eólica",
      "Desenvolvimento de projetos de energia renovável",
    ],
    companyFacts: [
      "Operadora de grande frota eólica no Brasil",
    ],
  },

  "isa-energia-brasil": {
    slug: "isa-energia-brasil",
    website: "isaenergiabrasil.com.br",
    services: [
      "Transmissão de energia elétrica",
      "Operação de linhas de transmissão de alta tensão",
      "Gestão de concessões de infraestrutura elétrica",
    ],
    companyFacts: [
      "34 concessões de transmissão",
      "1.700 colaboradores diretos no Brasil",
      "Transporta ~30% de toda a energia do Brasil",
      "Responsável por ~95% da energia do estado de São Paulo",
      "Certificação Great Place to Work",
      "Compromisso Net Zero 2050",
      "Líder em inovação no setor de transmissão",
    ],
  },

  "ibitu-energia": {
    slug: "ibitu-energia",
    website: "ibituenergia.com",
    notes: "ATENÇÃO: o site correto é ibituenergia.com — ibitu.com.br é uma pousada (Pousada Ibitu) sem relação.",
    services: [
      "Geração e comercialização de energia 100% renovável",
      "Operação de parques eólicos no mercado livre",
    ],
    companyFacts: [
      "745 MW de capacidade instalada",
      "6 ativos em 3 estados (Ceará, Piauí, Rio Grande do Norte)",
      "Escritórios: São Paulo e Fortaleza",
      "Uma das maiores geradoras eólicas no Mercado Livre",
      "Nome de origem tupi-guarani: 'vento'",
    ],
  },

  "vestas-brazil": {
    slug: "vestas-brazil",
    website: "vestas.com",
    services: [
      "Fornecimento e instalação de turbinas eólicas",
      "O&M de longo prazo (contratos multiyear)",
      "Serviços de upgrades e otimização de desempenho",
    ],
    companyFacts: [
      "Líder global em turbinas eólicas (mais de 185 GW instalados mundialmente)",
      "Forte presença no Brasil — maior base instalada do país",
      "Sede global: Dinamarca",
      "Técnicos mobilizados globalmente para campanhas de serviço",
    ],
  },

  "siemens-gamesa-brazil": {
    slug: "siemens-gamesa-brazil",
    website: "siemensgamesa.com",
    services: [
      "Fornecimento de turbinas eólicas onshore e offshore",
      "Serviços de O&M e Asset Management",
      "Campanhas globais de manutenção",
    ],
    companyFacts: [
      "2º maior fabricante de turbinas eólicas do mundo",
      "Grupo Siemens Energy — presença global incluindo EUA",
      "Forte base instalada no Brasil",
      "Equipes técnicas mobilizadas globalmente",
    ],
  },

  "nordex-brazil": {
    slug: "nordex-brazil",
    website: "nordex-online.com",
    keyPeople: [
      { name: "José Luis Blanco", title: "CEO, Nordex Group" },
      { name: "Dr Ilya Hartmann", title: "CFO, Nordex Group" },
    ],
    services: [
      "Fornecimento de turbinas eólicas onshore (Delta4000: 4–7 MW)",
      "Serviços de O&M de turbinas Nordex",
      "Campanhas de manutenção e serviço em campo",
    ],
    companyFacts: [
      "Um dos maiores fabricantes de turbinas do mundo",
      "Sede: Hamburgo, Alemanha",
      "Linha Delta4000 (4–7 MW) — maior série disponível",
      "Nova fábrica de pás inaugurada na Turquia (2026)",
      "110 MW adjudicado à Eksim Enerji (Turquia) — mai 2026",
    ],
  },

  "iqony-brasil": {
    slug: "iqony-brasil",
    website: "iqony.energy",
    services: [
      "Gerenciamento e suporte operacional de plantas de energia",
      "Energia renovável (eólica, solar, geotérmica)",
      "Soluções de hidrogênio e armazenamento",
      "Engenharia e serviços de descarbonização industrial",
      "Aquecimento urbano (district heating)",
    ],
    companyFacts: [
      "Parte do Grupo STEAG-Iqony (Alemanha)",
      "85 anos de experiência em planejamento e operação de plantas de energia",
      "2.600+ colaboradores em todo o mundo",
      ">6.970 MW em gestão operacional",
      ">100 ativos descentralizados",
      "Experiência em 100.000+ MW de capacidade de plantas de energia",
    ],
  },

  "invenergy-brasil": {
    slug: "invenergy-brasil",
    website: "invenergy.com",
    services: [
      "Desenvolvimento e operação de projetos de energia renovável",
      "Energia eólica, solar, gás natural e armazenamento",
      "Infraestrutura de transmissão",
      "Serviços de operação (Invenergy Services)",
    ],
    companyFacts: [
      "Maior produtora independente privada de energia da América do Norte",
      "Sede: Chicago, Illinois, EUA",
      "Portfólio: +30 GW desenvolvidos nos EUA e internacionalmente",
      "Braço de serviços: Invenergy Services LLC",
    ],
  },

  "goldwind-americas": {
    slug: "goldwind-americas",
    website: "goldwindamericas.com",
    keyPeople: [
      { name: "Zuo Feng", title: "Chief Executive Officer" },
      { name: "Lynlee Yager", title: "General Counsel" },
      { name: "Kevin Linnane", title: "VP Business Development & Business Operations" },
      { name: "Paul Briggs", title: "Director, Commercial Contract Management" },
      { name: "Lauren La Marche", title: "VP Marketing & Public Relations" },
      { name: "Jorge Rivera", title: "Director, Project Management Office" },
      { name: "Justin Valentine", title: "Director, Operational Excellence & Strategic Planning" },
      { name: "Weiheng Wang", title: "Acting VP, Service Operations & Engineering" },
    ],
    services: [
      "Fornecimento de turbinas PMDD (1,5 MW a 5 MW)",
      "Soluções utility-scale e direct-to-consumer",
      "Serviços de O&M de turbinas Goldwind",
      "Capital e soluções digitais para parques eólicos",
    ],
    companyFacts: [
      "Líder mundial em tecnologia PMDD (Permanent Magnet Direct-Drive)",
      "Turbinas: 1,5S, 2,5S, 3,0S, 4S e 5S MW",
      "Sede das Américas: USA",
      "Controladora: Goldwind (China) — maior fabricante de turbinas do mundo",
      "Portfolio de projetos em expansão nas Américas",
    ],
  },
};
