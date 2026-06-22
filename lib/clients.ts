export interface ClientData {
  slug: string;
  companyName: string;
  companyLocation: string;
  priority: "A" | "B" | "C";
  type: string;
  size: string;
  website?: string;
  usSignal?: string;
  founded?: string;
  growthSignal?: string;
  heroTag: string;
  heroHeadline: string;
  heroSubheadline: string;
  pitch: string;
  painFocus: string[];
  caseStudySlugs: string[];
  whatsappMessage: string;
  metaTitle: string;
  metaDescription: string;
}

export const CLIENTS: Record<string, ClientData> = {
  // ─── PRIORITY A — Confirmed US Presence ───────────────────────────────────

  "wtg-offshore": {
    slug: "wtg-offshore",
    companyName: "WTG Offshore",
    companyLocation: "Port of Mostyn, Wales, UK",
    priority: "A",
    type: "Blade Inspection & Integrity Management",
    size: "Pequeno-médio porte",
    website: "wtg-offshore.com",
    usSignal: "Serviços declarados como 'Worldwide'; mercado offshore dos EUA (costa atlântica) é destino natural para seus técnicos IRATA",
    founded: "Estabelecida",
    heroTag: "Blade inspection & integrity management — deploy mundial",
    heroHeadline: "Vow Vistos + WTG Offshore: seus técnicos IRATA no projeto certo, no prazo certo.",
    heroSubheadline:
      "A WTG Offshore promete resposta imediata e deploy mundial. A Vow Vistos garante que vistos, autorizações de trabalho e logística de crew não sejam o que quebra essa promessa.",
    pitch:
      "A WTG Offshore construiu um sistema de inspeção e integridade de pás (BIIM) reconhecido internacionalmente e promete deploy 'Worldwide, Instant'. Mas mobilizar técnicos IRATA certificados — engenheiros de pás, supervisores QA/QC, instrutores de reparo complexo — para projetos nos EUA, Brasil ou qualquer outro mercado exige mais do que expertise técnica: exige autorização migratória, coordenação de CTV e suporte em campo. A Vow Vistos é a camada operacional que transforma a promessa 'Worldwide' em realidade — sem atrasos consulares, sem surpresas logísticas.",
    painFocus: ["downtime", "bureaucracy", "support"],
    caseStudySlugs: ["visto-b1-eua-98-aprovacoes", "mobilizacao-mexico-blade-repair"],
    whatsappMessage:
      "Olá Guilherme, sou da WTG Offshore e gostaria de entender como a Vow Vistos pode apoiar a mobilização dos nossos técnicos para projetos internacionais.",
    metaTitle: "Vow Vistos para WTG Offshore | Mobilização Global de Técnicos IRATA",
    metaDescription:
      "Suporte especializado em vistos e logística de crew para mobilizações internacionais da WTG Offshore — blade inspection & integrity management.",
  },

  "flex-wind": {
    slug: "flex-wind",
    companyName: "Flex Wind",
    companyLocation: "Fortaleza, CE",
    priority: "A",
    type: "Especialista em O&M",
    size: "251–500 colaboradores",
    website: "flex-wind.com",
    usSignal: "Opera plataformas suspensas nos EUA; mobiliza equipes Brasil → EUA de forma recorrente",
    heroTag: "Mobilização ativa Brasil → EUA",
    heroHeadline: "Vow Vistos + Flex Wind: sua equipe operando nos EUA sem imprevistos.",
    heroSubheadline:
      "Você já tem operações ativas nos EUA. A Vow Vistos garante que cada técnico chegue no prazo, com visto correto, logística integrada e suporte 24/7 durante toda a operação.",
    pitch:
      "Sabemos que a Flex Wind já opera plataformas nos EUA e mobiliza equipes regularmente entre o Brasil e o mercado americano. Cada deployment é uma corrida contra o relógio: visto, passagem, hotel, remarcação de emergência. A Vow Vistos centraliza tudo isso em uma operação única, para que você foque na turbina — não na burocracia.",
    painFocus: ["downtime", "bureaucracy", "support"],
    caseStudySlugs: ["visto-b1-eua-98-aprovacoes", "mobilizacao-mexico-blade-repair"],
    whatsappMessage:
      "Olá Guilherme, sou da Flex Wind e gostaria de entender como a Vow Vistos pode apoiar nossa mobilização de equipes para os EUA.",
    metaTitle: "Vow Vistos para Flex Wind | Mobilização de Equipes Brasil–EUA",
    metaDescription:
      "Imigração corporativa, crew travel management e suporte 24/7 para equipes da Flex Wind em operações nos EUA.",
  },

  "solucoes-eolicas": {
    slug: "solucoes-eolicas",
    companyName: "Soluções Eólicas do Brasil",
    companyLocation: "Ceará / São Paulo",
    priority: "A",
    type: "O&M + Comissionamento",
    size: "Pequeno porte",
    website: "solucoeseolicas.com.br",
    usSignal: "Lista EUA como país de operação ativa, ao lado de Espanha, UK, Índia, México e Austrália",
    heroTag: "Operações ativas em EUA, Europa e Ásia",
    heroHeadline: "Vow Vistos + Soluções Eólicas: mobilização sem gargalos, do Brasil ao mundo.",
    heroSubheadline:
      "Com operações ativas em EUA, Espanha, UK, Índia, México e Austrália, a Vow Vistos integra imigração e logística para que sua equipe chegue preparada — sempre no prazo.",
    pitch:
      "A Soluções Eólicas já opera em múltiplos países simultaneamente. Isso significa que mobilizações paralelas, vistos em consulados diferentes e suporte em fusos horários distintos são parte do dia a dia. A Vow Vistos foi construída exatamente para essa realidade: uma operação de mobilização que funciona enquanto você dorme.",
    painFocus: ["bureaucracy", "support", "readiness"],
    caseStudySlugs: ["visto-b1-eua-98-aprovacoes", "mobilizacao-tailandia-pandemia"],
    whatsappMessage:
      "Olá Guilherme, sou da Soluções Eólicas do Brasil e gostaria de entender como a Vow Vistos pode apoiar nossa mobilização de equipes internacionais.",
    metaTitle: "Vow Vistos para Soluções Eólicas | Mobilização Internacional Eólica",
    metaDescription:
      "Suporte de imigração corporativa e logística internacional para as operações globais da Soluções Eólicas do Brasil.",
  },

  "res-group-brazil": {
    slug: "res-group-brazil",
    companyName: "RES Group Brazil",
    companyLocation: "São Paulo, SP",
    priority: "A",
    type: "O&M + Desenvolvimento",
    size: "Grande porte (global)",
    website: "res-group.com",
    usSignal: "Ranqueada #2 global em O&M pelo Wood Mackenzie; operações ativas nos EUA",
    heroTag: "#2 global em O&M — operações Brasil e EUA",
    heroHeadline: "Vow Vistos + RES Group: mobilização que acompanha sua escala global.",
    heroSubheadline:
      "Como #2 global em O&M pelo ranking Wood Mackenzie, cada equipe deslocada do Brasil para os EUA representa uma operação crítica. A Vow Vistos cuida da mobilização de ponta a ponta.",
    pitch:
      "O RES Group opera em escala global e tem operações ativas nos EUA. Nesse nível de operação, uma negativa de visto ou uma remarcação mal gerenciada não é apenas um inconveniente — é um risco de contrato. A Vow Vistos funciona como o braço operacional de mobilização: prevenindo problemas antes que eles afetem sua operação.",
    painFocus: ["downtime", "bureaucracy", "support"],
    caseStudySlugs: ["visto-b1-eua-98-aprovacoes", "mobilizacao-tailandia-pandemia"],
    whatsappMessage:
      "Olá Guilherme, sou do RES Group Brazil e gostaria de entender como a Vow Vistos pode apoiar nossa mobilização de equipes para os EUA.",
    metaTitle: "Vow Vistos para RES Group Brazil | Crew Mobilization Brasil–EUA",
    metaDescription:
      "Parceiro especializado em mobilização internacional para as operações eólicas do RES Group no Brasil e nos EUA.",
  },

  "rio-energy": {
    slug: "rio-energy",
    companyName: "Rio Energy (Equinor)",
    companyLocation: "Rio de Janeiro, RJ",
    priority: "A",
    type: "Desenvolvedor + Operador",
    size: "Grande porte",
    website: "rioenergy.com.br",
    usSignal: "Controladora Equinor tem portfólio eólico expressivo nos EUA; adquiriu 230 MW Esquina no Brasil",
    heroTag: "Grupo Equinor — Brasil e EUA",
    heroHeadline: "Vow Vistos + Rio Energy: a ponte operacional entre o Brasil e o portfólio eólico dos EUA.",
    heroSubheadline:
      "Com a Equinor operando nos dois lados do Atlântico, a mobilização de equipes brasileiras para projetos americanos é uma necessidade real e recorrente. A Vow Vistos elimina esse atrito.",
    pitch:
      "A Rio Energy faz parte de um grupo com portfólio eólico expressivo nos EUA. Quando profissionais brasileiros precisam ser mobilizados para esses projetos, a complexidade migratória e logística é inevitável. A Vow Vistos existe para que essa complexidade não atrase suas operações nem sobrecarregue seu time de RH.",
    painFocus: ["bureaucracy", "support", "downtime"],
    caseStudySlugs: ["visto-b1-eua-98-aprovacoes", "mobilizacao-argentina-lockdown"],
    whatsappMessage:
      "Olá Guilherme, sou da Rio Energy e gostaria de entender como a Vow Vistos pode apoiar a mobilização de equipes brasileiras para projetos do grupo nos EUA.",
    metaTitle: "Vow Vistos para Rio Energy | Mobilização de Equipes Equinor",
    metaDescription:
      "Imigração corporativa e crew travel management para equipes da Rio Energy / Equinor em operações internacionais.",
  },

  "engie-brasil": {
    slug: "engie-brasil",
    companyName: "ENGIE Brasil / Tractebel",
    companyLocation: "Florianópolis, SC",
    priority: "A",
    type: "Desenvolvedor + Operador",
    size: "Muito grande porte",
    website: "engie.com.br",
    usSignal: "Grupo ENGIE (controladora francesa) tem presença eólica expressiva nos EUA",
    heroTag: "Grupo ENGIE — Brasil e EUA",
    heroHeadline: "Vow Vistos + ENGIE Brasil: mobilize sua equipe entre projetos globais sem interrupções.",
    heroSubheadline:
      "O grupo ENGIE tem presença eólica expressiva nos EUA. A Vow Vistos apoia a transferência de equipes brasileiras entre projetos internacionais com agilidade e conformidade.",
    pitch:
      "A ENGIE Brasil faz parte de um dos maiores grupos de energia renovável do mundo, com projetos ativos nos EUA. Transferir equipes brasileiras entre projetos globais exige um nível de coordenação migratória e logística que vai além do que um time de RH convencional consegue absorver. A Vow Vistos é especializada nisso.",
    painFocus: ["bureaucracy", "readiness", "support"],
    caseStudySlugs: ["visto-b1-eua-98-aprovacoes", "mobilizacao-tailandia-pandemia"],
    whatsappMessage:
      "Olá Guilherme, sou da ENGIE Brasil e gostaria de entender como a Vow Vistos pode apoiar a mobilização de equipes para projetos do grupo nos EUA.",
    metaTitle: "Vow Vistos para ENGIE Brasil | Mobilização Internacional de Equipes",
    metaDescription:
      "Parceiro de mobilização internacional para equipes da ENGIE Brasil em operações eólicas globais.",
  },

  "ge-vernova-brazil": {
    slug: "ge-vernova-brazil",
    companyName: "GE Vernova Brazil",
    companyLocation: "Bahia",
    priority: "A",
    type: "Divisão de Serviços OEM",
    size: "Grande porte",
    website: "gevernova.com",
    usSignal: "Controladora americana; 450+ turbinas no Brasil + centro de serviços na Bahia; técnicos enviados para campanhas nos EUA",
    heroTag: "OEM — campanhas de serviço Brasil → EUA",
    heroHeadline: "Vow Vistos + GE Vernova: técnicos brasileiros prontos para campanhas nos EUA.",
    heroSubheadline:
      "Campanhas de serviço OEM atravessam fronteiras. A Vow Vistos mobiliza técnicos brasileiros para os EUA com vistos corretos, logística integrada e suporte durante toda a operação.",
    pitch:
      "A GE Vernova tem mais de 450 turbinas no Brasil e um centro de serviços na Bahia. Quando campanhas de manutenção exigem que técnicos brasileiros operem em projetos nos EUA, cada dia de atraso no visto representa downtime direto. A Vow Vistos garante que o processo de mobilização esteja tão afinado quanto o serviço que você entrega.",
    painFocus: ["downtime", "bureaucracy", "support"],
    caseStudySlugs: ["visto-b1-eua-98-aprovacoes", "mobilizacao-mexico-blade-repair"],
    whatsappMessage:
      "Olá Guilherme, sou da GE Vernova Brazil e gostaria de entender como a Vow Vistos pode apoiar a mobilização de técnicos para campanhas nos EUA.",
    metaTitle: "Vow Vistos para GE Vernova Brazil | Mobilização de Técnicos Brasil–EUA",
    metaDescription:
      "Suporte especializado em vistos e logística para campanhas de serviço OEM da GE Vernova do Brasil para os EUA.",
  },

  // ─── PRIORITY B — High-Growth Brazilian-Owned Specialists ─────────────────

  revtech: {
    slug: "revtech",
    companyName: "REVTECH Wind Solutions",
    companyLocation: "Fortaleza, CE",
    priority: "B",
    type: "Especialista em O&M",
    size: "251–500 colaboradores",
    website: "revtech.com.br",
    founded: "2017",
    growthSignal: "Crescimento acelerado; 251–500 colaboradores para uma especialista é porte expressivo",
    heroTag: "Especialista em O&M em expansão acelerada",
    heroHeadline: "Vow Vistos + REVTECH: prepare sua operação para o próximo passo internacional.",
    heroSubheadline:
      "Com mais de 250 profissionais e crescimento acelerado, a REVTECH está na trajetória natural de expansão para o mercado americano. A Vow Vistos garante que mobilização não seja o gargalo.",
    pitch:
      "A REVTECH cresceu rápido e construiu um time técnico de alto nível. O próximo passo natural é o mercado americano — e quando esse momento chegar, a burocracia migratória vai ser o primeiro obstáculo. A Vow Vistos trabalha com especialistas em O&M exatamente nessa fase de expansão: antes do problema aparecer.",
    painFocus: ["readiness", "bureaucracy", "downtime"],
    caseStudySlugs: ["mobilizacao-mexico-blade-repair", "visto-b1-eua-98-aprovacoes"],
    whatsappMessage:
      "Olá Guilherme, sou da REVTECH Wind Solutions e gostaria de entender como a Vow Vistos pode apoiar nossa expansão para o mercado americano.",
    metaTitle: "Vow Vistos para REVTECH | Mobilização Internacional para O&M Eólico",
    metaDescription:
      "Prepare a REVTECH Wind Solutions para operações internacionais com imigração corporativa e crew travel management.",
  },

  windwerk: {
    slug: "windwerk",
    companyName: "WINDWERK",
    companyLocation: "Florianópolis, SC",
    priority: "B",
    type: "O&M Independente",
    size: "51–100 colaboradores",
    website: "windwerk.com.br",
    founded: "2016",
    growthSignal: "Posicionamento como especialista independente de alto padrão; perfil preferido para contratos internacionais",
    heroTag: "O&M independente de alto padrão",
    heroHeadline: "Vow Vistos + WINDWERK: quando contratos internacionais chegarem, sua mobilização já está pronta.",
    heroSubheadline:
      "Especialistas independentes de alta qualidade são os primeiros a ganhar contratos internacionais. A Vow Vistos é a parceira de mobilização que coloca sua equipe em campo — onde quer que o contrato esteja.",
    pitch:
      "A WINDWERK se posiciona como independente e de alto padrão — exatamente o perfil que clientes internacionais buscam. Quando o primeiro contrato nos EUA chegar, a mobilização precisa acontecer rápido. A Vow Vistos garante que visto, passagem e suporte já estejam estruturados para esse momento.",
    painFocus: ["readiness", "bureaucracy", "support"],
    caseStudySlugs: ["mobilizacao-mexico-blade-repair", "mobilizacao-el-salvador-carnet-residencia"],
    whatsappMessage:
      "Olá Guilherme, sou da WINDWERK e gostaria de entender como a Vow Vistos pode apoiar nossa expansão para contratos internacionais.",
    metaTitle: "Vow Vistos para WINDWERK | Mobilização Internacional O&M",
    metaDescription:
      "Parceiro de mobilização para a WINDWERK em contratos internacionais no setor eólico.",
  },

  "aeris-services": {
    slug: "aeris-services",
    companyName: "Aeris Services (Aeris Energy)",
    companyLocation: "Fortaleza, CE",
    priority: "B",
    type: "O&M + Blade Repair",
    size: "Grande porte",
    website: "aerisenergy.com.br",
    founded: "2013",
    growthSignal: "Divisão de O&M da maior fabricante de pás do Brasil; membro da ABEEÓLICA; escala acelerada",
    heroTag: "Blade repair e O&M com qualidade OEM",
    heroHeadline: "Vow Vistos + Aeris Services: da qualidade OEM à operação global.",
    heroSubheadline:
      "A expertise da Aeris em blade repair tem demanda global. A Vow Vistos estrutura a mobilização internacional para que sua equipe opere nos EUA e além — sem atrito, sem atraso.",
    pitch:
      "A Aeris Services combina a capacidade de fabricação de pás com uma divisão de O&M que cresce junto com o mercado. Blade repair de alta qualidade é um serviço com demanda crescente nos EUA — e quando seus técnicos forem para lá, eles precisam chegar com documentação impecável e suporte em campo. A Vow Vistos cuida disso.",
    painFocus: ["readiness", "bureaucracy", "downtime"],
    caseStudySlugs: ["mobilizacao-tailandia-pandemia", "visto-b1-eua-98-aprovacoes"],
    whatsappMessage:
      "Olá Guilherme, sou da Aeris Services e gostaria de entender como a Vow Vistos pode apoiar nossa mobilização de equipes para operações internacionais.",
    metaTitle: "Vow Vistos para Aeris Services | Mobilização Internacional de O&M",
    metaDescription:
      "Imigração corporativa e crew travel management para as equipes da Aeris Services em operações internacionais.",
  },

  "gouveia-engenharia": {
    slug: "gouveia-engenharia",
    companyName: "Gouveia Engenharia",
    companyLocation: "Natal, RN",
    priority: "B",
    type: "O&M + Construção",
    size: "Médio porte",
    website: "instagram.com/gouveiaengenharia",
    founded: "Anos 1990",
    growthSignal: "30+ anos de operação; 1.000+ projetos; base no Nordeste; entrando em contratos internacionais",
    heroTag: "30+ anos de O&M no Nordeste",
    heroHeadline: "Vow Vistos + Gouveia Engenharia: décadas de experiência, preparada para o mercado global.",
    heroSubheadline:
      "Com mais de 30 anos e 1.000+ projetos, a Gouveia está entrando na arena internacional. A Vow Vistos remove a complexidade migratória para que sua equipe foque no que sabe fazer.",
    pitch:
      "A Gouveia Engenharia tem um histórico que poucos conseguem competir no Brasil. Ao entrar em contratos internacionais, a complexidade migratória é um território novo — e errar nessa etapa pode comprometer projetos inteiros. A Vow Vistos é o parceiro que garante que essa transição aconteça sem os atritos que custam caro.",
    painFocus: ["bureaucracy", "readiness", "support"],
    caseStudySlugs: ["mobilizacao-mexico-blade-repair", "mobilizacao-el-salvador-carnet-residencia"],
    whatsappMessage:
      "Olá Guilherme, sou da Gouveia Engenharia e gostaria de entender como a Vow Vistos pode apoiar nossa entrada em contratos internacionais.",
    metaTitle: "Vow Vistos para Gouveia Engenharia | Mobilização para Contratos Internacionais",
    metaDescription:
      "Apoio de imigração e logística para a Gouveia Engenharia em sua expansão para projetos eólicos internacionais.",
  },

  "bela-vista-group": {
    slug: "bela-vista-group",
    companyName: "Bela Vista Group / BV Renováveis",
    companyLocation: "Fortaleza, CE",
    priority: "B",
    type: "Especialista em O&M",
    size: "251–500 colaboradores",
    website: "eolicabvs.com.br",
    founded: "2012",
    growthSignal: "O&M de wind + solar; forte presença no Nordeste; crescimento junto com clientes que expandem para os EUA",
    heroTag: "O&M especializado — vento e solar",
    heroHeadline: "Vow Vistos + BV Renováveis: mobilização pronta para acompanhar sua expansão.",
    heroSubheadline:
      "À medida que seus clientes levam projetos para os EUA, sua equipe precisa ir junto. A Vow Vistos garante que a mobilização não atrase o contrato.",
    pitch:
      "A BV Renováveis tem uma base sólida no Nordeste e cresce junto com o mercado. Quando os projetos dos seus clientes cruzarem fronteiras, você precisará mobilizar equipes internacionalmente — provavelmente com urgência. A Vow Vistos já passou por isso mais de uma vez. Podemos deixar sua operação pronta antes que o telefone toque.",
    painFocus: ["readiness", "downtime", "bureaucracy"],
    caseStudySlugs: ["mobilizacao-mexico-blade-repair", "visto-b1-eua-98-aprovacoes"],
    whatsappMessage:
      "Olá Guilherme, sou da Bela Vista Group e gostaria de entender como a Vow Vistos pode apoiar nossa mobilização para projetos internacionais.",
    metaTitle: "Vow Vistos para BV Renováveis | Mobilização Internacional O&M",
    metaDescription:
      "Parceiro de mobilização para a Bela Vista Group em contratos eólicos e solares internacionais.",
  },

  "bei-brasil": {
    slug: "bei-brasil",
    companyName: "BEI Brasil Energia Inteligente",
    companyLocation: "Belo Horizonte, MG",
    priority: "B",
    type: "Operador de O&M",
    size: "251–500 colaboradores",
    website: "bei.eng.br",
    founded: "2013",
    growthSignal: "Pioneiros em O&M no Brasil; posicionamento de excelência operacional; vanguarda da expansão internacional",
    heroTag: "Pioneiros em O&M no Brasil",
    heroHeadline: "Vow Vistos + BEI Brasil: excelência operacional que atravessa fronteiras.",
    heroSubheadline:
      "Como pioneiros em O&M no Brasil, a BEI está na vanguarda da expansão internacional. A Vow Vistos é a camada operacional que torna esse salto possível — sem improvisos.",
    pitch:
      "A BEI construiu sua reputação sobre excelência operacional. Ao expandir para o mercado internacional, essa excelência precisa se estender à mobilização: vistos corretos, logística integrada, suporte em campo. A Vow Vistos entrega exatamente isso — para que a BEI chegue em qualquer mercado operando no seu nível padrão.",
    painFocus: ["readiness", "bureaucracy", "support"],
    caseStudySlugs: ["mobilizacao-tailandia-pandemia", "visto-b1-eua-98-aprovacoes"],
    whatsappMessage:
      "Olá Guilherme, sou da BEI Brasil Energia Inteligente e gostaria de entender como a Vow Vistos pode apoiar nossa expansão internacional.",
    metaTitle: "Vow Vistos para BEI Brasil | Mobilização Internacional de O&M",
    metaDescription:
      "Imigração corporativa e logística internacional para as equipes da BEI Brasil em expansão para o mercado global.",
  },

  transfortech: {
    slug: "transfortech",
    companyName: "Transfortech Engenharia",
    companyLocation: "Maracanaú, CE",
    priority: "B",
    type: "Manutenção Wind + Subestações",
    size: "11–50 colaboradores",
    website: "transfortech.com.br",
    founded: "2001",
    growthSignal: "Especialista em gearbox e transformadores; nicho técnico com demanda internacional crescente",
    heroTag: "Especialistas em gearbox e transformadores",
    heroHeadline: "Vow Vistos + Transfortech: seu primeiro deployment internacional — sem surpresas.",
    heroSubheadline:
      "Para especialistas em gearbox e transformadores, o primeiro projeto internacional é um passo crítico. A Vow Vistos garante que vistos, logística e suporte estejam prontos antes de você precisar.",
    pitch:
      "A Transfortech tem expertise técnica específica e valiosa — manutenção de gearbox e transformadores é um serviço que não tem muitos provedores confiáveis. Quando um cliente internacional precisar dessa especialidade, você vai querer que a sua operação de mobilização já esteja estruturada. A Vow Vistos monta esse processo com você agora, não às pressas.",
    painFocus: ["bureaucracy", "downtime", "readiness"],
    caseStudySlugs: ["mobilizacao-mexico-blade-repair", "mobilizacao-el-salvador-carnet-residencia"],
    whatsappMessage:
      "Olá Guilherme, sou da Transfortech Engenharia e gostaria de entender como a Vow Vistos pode preparar nossa operação para contratos internacionais.",
    metaTitle: "Vow Vistos para Transfortech | Mobilização Internacional de Técnicos",
    metaDescription:
      "Prepare a Transfortech Engenharia para mobilizações internacionais com suporte especializado em imigração e logística.",
  },

  "casa-dos-ventos": {
    slug: "casa-dos-ventos",
    companyName: "Casa dos Ventos",
    companyLocation: "São Paulo, SP",
    priority: "B",
    type: "Desenvolvedor + Operador Independente",
    size: "Grande porte",
    website: "casadosventos.com.br",
    growthSignal: "Maior developer independente do Brasil; 828 MW Dom Inocêncio em desenvolvimento; pipeline agressivo",
    heroTag: "Maior developer independente do Brasil",
    heroHeadline: "Vow Vistos + Casa dos Ventos: mobilização em escala para um portfólio em escala.",
    heroSubheadline:
      "Com 828 MW em desenvolvimento e pipeline agressivo, a Casa dos Ventos precisa de um parceiro de mobilização que opere na mesma velocidade. A Vow Vistos não é uma agência de visto — é sua operação de crew mobilization.",
    pitch:
      "A Casa dos Ventos opera na maior escala entre os developers independentes brasileiros. Projetos dessa magnitude exigem mobilização de equipes técnicas em tempo real. A Vow Vistos entende o ritmo do setor eólico — cronogramas de janela de vento, cranes, commissioning — e estrutura a mobilização para esse ritmo, não para o tempo da burocracia convencional.",
    painFocus: ["downtime", "bureaucracy", "support"],
    caseStudySlugs: ["visto-b1-eua-98-aprovacoes", "mobilizacao-tailandia-pandemia"],
    whatsappMessage:
      "Olá Guilherme, sou da Casa dos Ventos e gostaria de entender como a Vow Vistos pode apoiar nossa operação de mobilização de equipes.",
    metaTitle: "Vow Vistos para Casa dos Ventos | Crew Mobilization em Escala",
    metaDescription:
      "Parceiro de mobilização em escala para o maior developer independente de energia eólica do Brasil.",
  },

  // ─── PRIORITY C — Large Fleet Operators ───────────────────────────────────

  neoenergia: {
    slug: "neoenergia",
    companyName: "Neoenergia",
    companyLocation: "São Paulo, SP",
    priority: "C",
    type: "Desenvolvedor + Operador (Iberdrola)",
    size: "Muito grande porte",
    website: "neoenergia.com",
    usSignal: "Controladora Iberdrola tem presença eólica nos EUA; transferências de equipe entre países do grupo",
    heroTag: "Grupo Iberdrola no Brasil",
    heroHeadline: "Vow Vistos + Neoenergia: mobilização especializada para operações internacionais do grupo.",
    heroSubheadline:
      "Com a Iberdrola operando em múltiplos mercados, incluindo os EUA, a Neoenergia tem acesso a oportunidades de intercâmbio de equipes. A Vow Vistos estrutura essa mobilização com precisão.",
    pitch:
      "A Neoenergia faz parte de um grupo com operações globais e equipes que transitam entre países. Para uma empresa do porte da Iberdrola, a mobilização internacional não pode depender de improvisos. A Vow Vistos atua como parceiro especializado para as mobilizações que o time interno de RH não foi treinado para executar.",
    painFocus: ["bureaucracy", "support", "downtime"],
    caseStudySlugs: ["visto-b1-eua-98-aprovacoes", "mobilizacao-argentina-lockdown"],
    whatsappMessage:
      "Olá Guilherme, sou da Neoenergia e gostaria de entender como a Vow Vistos pode apoiar mobilizações internacionais do grupo.",
    metaTitle: "Vow Vistos para Neoenergia | Mobilização Internacional de Equipes",
    metaDescription:
      "Parceiro especializado em imigração corporativa e logística para equipes da Neoenergia em operações internacionais.",
  },

  "cpfl-renovaveis": {
    slug: "cpfl-renovaveis",
    companyName: "CPFL Renováveis",
    companyLocation: "Campinas, SP",
    priority: "C",
    type: "Desenvolvedor + Operador (State Grid)",
    size: "Grande porte",
    website: "cpfl.com.br",
    usSignal: "Subsidiária da State Grid; grande portfólio eólico no Nordeste; grupo com presença internacional",
    heroTag: "State Grid — portfólio eólico no Nordeste",
    heroHeadline: "Vow Vistos + CPFL Renováveis: suporte especializado para mobilizações que o RH não resolve sozinho.",
    heroSubheadline:
      "Para um portfólio da dimensão da CPFL, ter um parceiro dedicado de mobilização internacional é uma vantagem operacional. A Vow Vistos cuida do que seu time de RH não foi treinado para fazer.",
    pitch:
      "A CPFL Renováveis tem um dos maiores portfólios eólicos do Brasil e faz parte de um grupo com presença internacional. Mobilizações internacionais surgem com urgência — uma negativa de visto ou uma remarcação mal gerenciada pode atrasar contratos inteiros. A Vow Vistos funciona como o overflow especializado que seu time interno precisa.",
    painFocus: ["bureaucracy", "downtime", "support"],
    caseStudySlugs: ["visto-b1-eua-98-aprovacoes", "mobilizacao-argentina-lockdown"],
    whatsappMessage:
      "Olá Guilherme, sou da CPFL Renováveis e gostaria de entender como a Vow Vistos pode apoiar mobilizações internacionais do grupo.",
    metaTitle: "Vow Vistos para CPFL Renováveis | Mobilização Internacional",
    metaDescription:
      "Suporte especializado em imigração corporativa para mobilizações internacionais da CPFL Renováveis.",
  },

  "auren-energia": {
    slug: "auren-energia",
    companyName: "Auren Energia",
    companyLocation: "São Paulo, SP",
    priority: "C",
    type: "Desenvolvedor + Operador",
    size: "Grande porte",
    website: "auren.com.br",
    usSignal: "Ex-Votorantim Energia; wind + hydro; escala cria oportunidades naturais de mobilização internacional",
    heroTag: "Votorantim Energia — wind + hydro",
    heroHeadline: "Vow Vistos + Auren Energia: mobilização pronta para sua próxima operação internacional.",
    heroSubheadline:
      "A escala e o portfólio da Auren criam oportunidades naturais de mobilização internacional. A Vow Vistos é o parceiro que garante que sua equipe chegue no destino certo, no prazo certo.",
    pitch:
      "A Auren Energia tem escala e ambição para operar além das fronteiras brasileiras. Quando projetos internacionais exigirem movimentação de equipes técnicas, a Vow Vistos está pronta para estruturar essa operação — com o nível de precisão que um grupo desse tamanho exige.",
    painFocus: ["bureaucracy", "readiness", "downtime"],
    caseStudySlugs: ["visto-b1-eua-98-aprovacoes", "mobilizacao-tailandia-pandemia"],
    whatsappMessage:
      "Olá Guilherme, sou da Auren Energia e gostaria de entender como a Vow Vistos pode apoiar mobilizações internacionais do grupo.",
    metaTitle: "Vow Vistos para Auren Energia | Mobilização Internacional",
    metaDescription:
      "Imigração corporativa e logística para mobilizações internacionais da Auren Energia.",
  },

  "echo-energia": {
    slug: "echo-energia",
    companyName: "Echo Energia",
    companyLocation: "Brasil",
    priority: "C",
    type: "Desenvolvedor",
    size: "Em crescimento",
    website: "echoeenergia.com.br",
    growthSignal: "Developer de wind + solar em expansão acelerada; pipeline crescente",
    heroTag: "Developer em crescimento acelerado",
    heroHeadline: "Vow Vistos + Echo Energia: construa sua capacidade de mobilização junto com seu portfólio.",
    heroSubheadline:
      "Empresas em crescimento acelerado chegam ao ponto de mobilização internacional mais rápido do que esperam. A Vow Vistos estrutura esse processo antes que se torne urgente.",
    pitch:
      "A Echo Energia está expandindo rápido. À medida que o portfólio cresce, a necessidade de mobilizar equipes internacionalmente vai surgir — e quando isso acontecer, não haverá tempo para improvisar. A Vow Vistos trabalha com developers nessa fase de crescimento para garantir que a infraestrutura de mobilização esteja pronta antes de ser necessária.",
    painFocus: ["readiness", "bureaucracy", "downtime"],
    caseStudySlugs: ["mobilizacao-mexico-blade-repair", "visto-b1-eua-98-aprovacoes"],
    whatsappMessage:
      "Olá Guilherme, sou da Echo Energia e gostaria de entender como a Vow Vistos pode apoiar nossa expansão internacional.",
    metaTitle: "Vow Vistos para Echo Energia | Mobilização Internacional",
    metaDescription:
      "Prepare a Echo Energia para mobilizações internacionais com suporte especializado em imigração e logística.",
  },

  "omega-energia": {
    slug: "omega-energia",
    companyName: "Omega Energia",
    companyLocation: "Salvador, BA",
    priority: "C",
    type: "Desenvolvedor + Operador",
    size: "Médio-grande porte",
    website: "omegaenergia.com.br",
    usSignal: "Developer brasileiro com foco em wind + solar; escala de portfólio aponta para internacionalização",
    heroTag: "Developer brasileiro — wind + solar",
    heroHeadline: "Vow Vistos + Omega Energia: sua operação de mobilização tão sólida quanto seu portfólio.",
    heroSubheadline:
      "A Omega Energia tem a escala e a ambição para ir além do Brasil. A Vow Vistos estrutura a mobilização de equipes para que o próximo passo internacional seja operacional — não burocrático.",
    pitch:
      "A Omega Energia construiu um portfólio expressivo com foco em wind e solar. A expansão natural para mercados internacionais traz consigo um desafio operacional específico: mobilizar equipes técnicas com agilidade e conformidade. A Vow Vistos resolve esse desafio de ponta a ponta.",
    painFocus: ["readiness", "bureaucracy", "support"],
    caseStudySlugs: ["visto-b1-eua-98-aprovacoes", "mobilizacao-mexico-blade-repair"],
    whatsappMessage:
      "Olá Guilherme, sou da Omega Energia e gostaria de entender como a Vow Vistos pode apoiar mobilizações internacionais do grupo.",
    metaTitle: "Vow Vistos para Omega Energia | Mobilização Internacional",
    metaDescription:
      "Parceiro de mobilização para a Omega Energia em expansão para projetos eólicos internacionais.",
  },

  "renova-energia": {
    slug: "renova-energia",
    companyName: "Renova Energia",
    companyLocation: "São Paulo, SP",
    priority: "C",
    type: "Desenvolvedor + Operador",
    size: "Médio porte",
    website: "renovaenergia.com.br",
    usSignal: "Uma das primeiras empresas a desenvolver eólica no Brasil; histórico abre portas internacionais",
    heroTag: "Pioneer do eólico brasileiro",
    heroHeadline: "Vow Vistos + Renova Energia: mobilização à altura do pioneirismo da empresa.",
    heroSubheadline:
      "Como uma das primeiras empresas a desenvolver eólica no Brasil, a Renova tem histórico e credibilidade para projetos internacionais. A Vow Vistos cuida da mobilização para que sua equipe chegue preparada.",
    pitch:
      "A Renova Energia foi pioneira no desenvolvimento eólico brasileiro. Esse histórico abre portas em mercados internacionais — e quando equipes precisarem ser mobilizadas para esses projetos, a Vow Vistos garante que a mobilização não seja o ponto fraco da operação.",
    painFocus: ["bureaucracy", "downtime", "readiness"],
    caseStudySlugs: ["visto-b1-eua-98-aprovacoes", "mobilizacao-argentina-lockdown"],
    whatsappMessage:
      "Olá Guilherme, sou da Renova Energia e gostaria de entender como a Vow Vistos pode apoiar mobilizações internacionais do grupo.",
    metaTitle: "Vow Vistos para Renova Energia | Mobilização Internacional",
    metaDescription:
      "Suporte de imigração corporativa e logística para mobilizações internacionais da Renova Energia.",
  },

  "statkraft-brasil": {
    slug: "statkraft-brasil",
    companyName: "Statkraft Brasil",
    companyLocation: "Brasil",
    priority: "C",
    type: "Desenvolvedor + Operador (Statkraft Noruega)",
    size: "Médio porte",
    website: "statkraft.com.br",
    usSignal: "Controladora norueguesa com presença internacional; equipes internacionais já são norma no grupo",
    heroTag: "Grupo norueguês — DNA internacional",
    heroHeadline: "Vow Vistos + Statkraft Brasil: mobilização que acompanha o DNA internacional do grupo.",
    heroSubheadline:
      "Com a Statkraft operando em múltiplos países, equipes internacionais já são parte da cultura do grupo. A Vow Vistos é o parceiro que garante que as mobilizações do Brasil para o mundo aconteçam sem atrito.",
    pitch:
      "A Statkraft já tem DNA internacional consolidado. Para a operação brasileira, isso significa que mobilizações entre países são uma realidade frequente. A Vow Vistos complementa o time interno com especialização em imigração e logística para que cada deployment seja executado com a eficiência que o grupo exige.",
    painFocus: ["bureaucracy", "support", "readiness"],
    caseStudySlugs: ["mobilizacao-tailandia-pandemia", "visto-b1-eua-98-aprovacoes"],
    whatsappMessage:
      "Olá Guilherme, sou da Statkraft Brasil e gostaria de entender como a Vow Vistos pode apoiar mobilizações internacionais do grupo.",
    metaTitle: "Vow Vistos para Statkraft Brasil | Mobilização Internacional",
    metaDescription:
      "Parceiro especializado em mobilização para as operações internacionais da Statkraft no Brasil.",
  },

  "voltalia-brasil": {
    slug: "voltalia-brasil",
    companyName: "Voltalia Brasil",
    companyLocation: "Brasil",
    priority: "C",
    type: "Desenvolvedor + Operador (Voltalia França)",
    size: "Médio porte",
    website: "voltalia.com.br",
    usSignal: "Controladora francesa com projetos na Europa e Brasil; equipes transitam entre mercados",
    heroTag: "Grupo francês — projetos Brasil e Europa",
    heroHeadline: "Vow Vistos + Voltalia Brasil: mobilização entre projetos globais sem a burocracia no caminho.",
    heroSubheadline:
      "Com a Voltalia operando na Europa e no Brasil, equipes que transitam entre projetos precisam de suporte especializado. A Vow Vistos garante que esse trânsito seja ágil e sem complicações.",
    pitch:
      "A Voltalia tem projetos no Brasil e na Europa, e equipes que precisam operar em ambos os mercados. Essa realidade cria uma necessidade recorrente de mobilização internacional. A Vow Vistos estrutura esse processo para que vistos, passagens e suporte em campo sejam tratados por especialistas — não pelo RH genérico.",
    painFocus: ["bureaucracy", "support", "downtime"],
    caseStudySlugs: ["visto-b1-eua-98-aprovacoes", "mobilizacao-tailandia-pandemia"],
    whatsappMessage:
      "Olá Guilherme, sou da Voltalia Brasil e gostaria de entender como a Vow Vistos pode apoiar mobilizações internacionais do grupo.",
    metaTitle: "Vow Vistos para Voltalia Brasil | Mobilização Internacional",
    metaDescription:
      "Imigração corporativa e logística para as mobilizações internacionais da Voltalia no Brasil.",
  },

  "serena-energia": {
    slug: "serena-energia",
    companyName: "Serena Energia",
    companyLocation: "Brasil",
    priority: "C",
    type: "Desenvolvedor de Renováveis",
    size: "Em crescimento",
    website: "serenaenergia.com.br",
    growthSignal: "Empresa de renováveis em crescimento com pipeline de projetos em expansão",
    heroTag: "Renovável em crescimento",
    heroHeadline: "Vow Vistos + Serena Energia: construa agora a capacidade de mobilização que você vai precisar.",
    heroSubheadline:
      "Empresas em crescimento chegam ao ponto de mobilização internacional mais rápido do que planejam. A Vow Vistos prepara sua operação antes que a urgência tome conta.",
    pitch:
      "A Serena Energia está em crescimento — e empresas que crescem no setor renovável invariavelmente chegam ao ponto em que precisam mobilizar equipes internacionalmente. Estruturar esse processo agora, antes da urgência, significa economizar tempo e dinheiro quando o telefone tocar. A Vow Vistos faz essa preparação com você.",
    painFocus: ["readiness", "bureaucracy", "downtime"],
    caseStudySlugs: ["mobilizacao-mexico-blade-repair", "visto-b1-eua-98-aprovacoes"],
    whatsappMessage:
      "Olá Guilherme, sou da Serena Energia e gostaria de entender como a Vow Vistos pode preparar nossa operação para mobilizações internacionais.",
    metaTitle: "Vow Vistos para Serena Energia | Mobilização Internacional",
    metaDescription:
      "Prepare a Serena Energia para mobilizações internacionais com suporte especializado.",
  },

  "pontal-energy": {
    slug: "pontal-energy",
    companyName: "Pontal Energy",
    companyLocation: "Brasil",
    priority: "C",
    type: "Desenvolvedor de Renováveis",
    size: "Em crescimento",
    website: "pontalenergy.com.br",
    growthSignal: "Novo entrante com pipeline ambicioso; parceiros internacionais no horizonte",
    heroTag: "Novo entrante com pipeline ambicioso",
    heroHeadline: "Vow Vistos + Pontal Energy: pipeline ambicioso exige infraestrutura de mobilização à altura.",
    heroSubheadline:
      "Um pipeline agressivo de projetos vai exigir mobilizações internacionais. A Vow Vistos estrutura essa capacidade junto com você — antes que o contrato exija.",
    pitch:
      "A Pontal Energy está construindo um pipeline ambicioso. À medida que projetos avançam e parceiros internacionais entram em cena, a necessidade de mobilizar equipes além das fronteiras brasileiras vai surgir. A Vow Vistos é o parceiro que deixa essa capacidade pronta — para que a mobilização nunca seja o motivo de um atraso.",
    painFocus: ["readiness", "bureaucracy", "support"],
    caseStudySlugs: ["mobilizacao-mexico-blade-repair", "visto-b1-eua-98-aprovacoes"],
    whatsappMessage:
      "Olá Guilherme, sou da Pontal Energy e gostaria de entender como a Vow Vistos pode apoiar nossa expansão internacional.",
    metaTitle: "Vow Vistos para Pontal Energy | Mobilização Internacional",
    metaDescription:
      "Parceiro de mobilização para a Pontal Energy em sua expansão para projetos internacionais.",
  },

  "isa-energia-brasil": {
    slug: "isa-energia-brasil",
    companyName: "ISA Energia Brasil",
    companyLocation: "Brasil",
    priority: "C",
    type: "Desenvolvedor + Operador (Grupo ISA Colômbia)",
    size: "Grande porte",
    website: "isa.com.co/br",
    usSignal: "Controladora colombiana com presença em toda América Latina; mobilizações entre países já são rotina",
    heroTag: "Grupo colombiano — DNA latino-americano",
    heroHeadline: "Vow Vistos + ISA Energia Brasil: mobilização alinhada com o DNA internacional do grupo.",
    heroSubheadline:
      "Com o grupo ISA operando em múltiplos países da América Latina, equipes que cruzam fronteiras são parte da rotina. A Vow Vistos especializa as mobilizações do Brasil para o resto do continente e além.",
    pitch:
      "A ISA tem DNA internacional consolidado em toda a América Latina. Para a operação brasileira, isso significa que mobilizações entre países são frequentes e esperadas. A Vow Vistos complementa o time com especialização em cada destino — particularmente para projetos nos EUA, onde as exigências migratórias são mais complexas.",
    painFocus: ["bureaucracy", "support", "downtime"],
    caseStudySlugs: ["mobilizacao-mexico-blade-repair", "visto-b1-eua-98-aprovacoes"],
    whatsappMessage:
      "Olá Guilherme, sou da ISA Energia Brasil e gostaria de entender como a Vow Vistos pode apoiar mobilizações internacionais do grupo.",
    metaTitle: "Vow Vistos para ISA Energia Brasil | Mobilização Internacional",
    metaDescription:
      "Suporte especializado em imigração e logística para as mobilizações internacionais da ISA Energia Brasil.",
  },

  "ibitu-energia": {
    slug: "ibitu-energia",
    companyName: "Ibitu Energia",
    companyLocation: "Brasil",
    priority: "C",
    type: "Operador Eólico",
    size: "Médio porte",
    website: "ibituenergia.com",
    usSignal: "Operador estabelecido (ex-Queiroz Galvão Energia); histórico e credibilidade para projetos internacionais",
    heroTag: "Operador eólico estabelecido",
    heroHeadline: "Vow Vistos + Ibitu Energia: mobilização especializada para um operador com histórico.",
    heroSubheadline:
      "Com anos de operação no mercado eólico brasileiro, a Ibitu tem o histórico para projetos internacionais. A Vow Vistos garante que a mobilização de equipes esteja à altura dessa reputação.",
    pitch:
      "A Ibitu Energia tem experiência consolidada no setor eólico brasileiro. Ao levar essa experiência para projetos internacionais, a mobilização de equipes técnicas precisa ser executada com o mesmo rigor operacional. A Vow Vistos entrega isso — sem improviso e sem depender de um time de RH sobrecarregado.",
    painFocus: ["bureaucracy", "downtime", "readiness"],
    caseStudySlugs: ["visto-b1-eua-98-aprovacoes", "mobilizacao-argentina-lockdown"],
    whatsappMessage:
      "Olá Guilherme, sou da Ibitu Energia e gostaria de entender como a Vow Vistos pode apoiar mobilizações internacionais da empresa.",
    metaTitle: "Vow Vistos para Ibitu Energia | Mobilização Internacional",
    metaDescription:
      "Parceiro especializado em mobilização para as operações internacionais da Ibitu Energia.",
  },

  // ─── OEM Service Divisions (Secondary Targets) ────────────────────────────

  "vestas-brazil": {
    slug: "vestas-brazil",
    companyName: "Vestas Brazil",
    companyLocation: "Nordeste, Brasil",
    priority: "A",
    type: "OEM — Divisão de Serviços",
    size: "Muito grande porte",
    website: "vestas.com/pt",
    usSignal: "Maior fabricante de turbinas do mundo; equipe de serviços muito grande no Brasil; parceria 828 MW com Casa dos Ventos; técnicos brasileiros mobilizados para campanhas globais",
    heroTag: "OEM líder mundial — Brasil e EUA",
    heroHeadline: "Vow Vistos + Vestas Brazil: sua equipe de serviços pronta para operar em qualquer mercado.",
    heroSubheadline:
      "A Vestas tem uma das maiores equipes de serviços de campo do Brasil. Quando campanhas de O&M exigem que técnicos brasileiros operem nos EUA ou em qualquer mercado global, a Vow Vistos garante a mobilização de ponta a ponta.",
    pitch:
      "A Vestas Brazil mantém um dos maiores times de técnicos de campo do setor no Brasil. Campanhas globais de manutenção e blade repair exigem mobilizações rápidas e sem erros consulares. A Vow Vistos especializa exatamente esse fluxo: técnicos brasileiros → mercado americano, com 98% de taxa de aprovação consular e suporte 24/7 em campo.",
    painFocus: ["downtime", "bureaucracy", "support"],
    caseStudySlugs: ["visto-b1-eua-98-aprovacoes", "mobilizacao-mexico-blade-repair"],
    whatsappMessage:
      "Olá Guilherme, sou da Vestas Brazil e gostaria de entender como a Vow Vistos pode apoiar a mobilização de técnicos brasileiros para campanhas nos EUA.",
    metaTitle: "Vow Vistos para Vestas Brazil | Mobilização de Técnicos Brasil–EUA",
    metaDescription:
      "Parceiro de mobilização para campanhas de serviço da Vestas Brazil em operações nos EUA e mercados internacionais.",
  },

  "siemens-gamesa-brazil": {
    slug: "siemens-gamesa-brazil",
    companyName: "Siemens Gamesa Brazil",
    companyLocation: "Nordeste, Brasil",
    priority: "A",
    type: "OEM — Divisão de Serviços",
    size: "Grande porte",
    website: "siemensgamesa.com",
    usSignal: "Grande divisão de serviços no Nordeste; controladora com operações globais e presença ativa nos EUA",
    heroTag: "OEM — grande divisão de serviços no Nordeste",
    heroHeadline: "Vow Vistos + Siemens Gamesa: mobilização de técnicos brasileiros para campanhas globais.",
    heroSubheadline:
      "Com uma das maiores divisões de serviços de campo do Brasil, a Siemens Gamesa mobiliza equipes entre países regularmente. A Vow Vistos garante que cada técnico chegue no prazo, com documentação correta.",
    pitch:
      "A Siemens Gamesa opera uma grande divisão de serviços no Nordeste do Brasil e precisa mobilizar técnicos para projetos globais com frequência. Cada vez que um técnico precisa de um visto americano com urgência, a diferença entre aprovação e negativa pode ser a documentação — não o perfil do candidato. A Vow Vistos garante que o dossiê seja irretocável.",
    painFocus: ["downtime", "bureaucracy", "support"],
    caseStudySlugs: ["visto-b1-eua-98-aprovacoes", "mobilizacao-tailandia-pandemia"],
    whatsappMessage:
      "Olá Guilherme, sou da Siemens Gamesa Brazil e gostaria de entender como a Vow Vistos pode apoiar a mobilização de técnicos para campanhas internacionais.",
    metaTitle: "Vow Vistos para Siemens Gamesa Brazil | Mobilização Internacional",
    metaDescription:
      "Suporte especializado em vistos e logística para campanhas de serviço da Siemens Gamesa no Brasil.",
  },

  "nordex-brazil": {
    slug: "nordex-brazil",
    companyName: "Nordex Brazil",
    companyLocation: "Brasil",
    priority: "A",
    type: "OEM — Serviços + Fornecimento de Turbinas",
    size: "Médio-grande porte",
    website: "nordex-online.com",
    usSignal: "Grupo Nordex com presença global; técnicos brasileiros mobilizados para campanhas de serviço internacionais",
    heroTag: "OEM global — serviços e fornecimento",
    heroHeadline: "Vow Vistos + Nordex Brazil: mobilização de campo sem atritos consulares.",
    heroSubheadline:
      "A Nordex combina fornecimento de turbinas com uma divisão de serviços que opera internacionalmente. A Vow Vistos garante que técnicos brasileiros cheguem a qualquer projeto global no prazo e com documentação impecável.",
    pitch:
      "A Nordex Brazil opera no fornecimento de turbinas e serviços de campo, com técnicos que precisam acompanhar projetos além das fronteiras brasileiras. Mobilizações internacionais urgentes — especialmente para os EUA — exigem estratégia consular e logística que o time de RH convencional não domina. A Vow Vistos cobre esse gap.",
    painFocus: ["bureaucracy", "downtime", "readiness"],
    caseStudySlugs: ["visto-b1-eua-98-aprovacoes", "mobilizacao-mexico-blade-repair"],
    whatsappMessage:
      "Olá Guilherme, sou da Nordex Brazil e gostaria de entender como a Vow Vistos pode apoiar a mobilização de técnicos para campanhas internacionais.",
    metaTitle: "Vow Vistos para Nordex Brazil | Mobilização Internacional OEM",
    metaDescription:
      "Parceiro de mobilização para a divisão de serviços da Nordex no Brasil em campanhas internacionais.",
  },

  "iqony-brasil": {
    slug: "iqony-brasil",
    companyName: "Iqony Solutions do Brasil",
    companyLocation: "Brasil",
    priority: "B",
    type: "O&M — Divisão de Serviços",
    size: "Em crescimento",
    website: "iqony.energy",
    founded: "Recente",
    growthSignal: "Contrato de O&M com COPEL; crescimento acelerado de presença no Brasil",
    heroTag: "O&M — crescimento acelerado no Brasil",
    heroHeadline: "Vow Vistos + Iqony Brasil: mobilização pronta para acompanhar seu crescimento.",
    heroSubheadline:
      "Com contrato de O&M com a COPEL e expansão acelerada no Brasil, a Iqony está construindo uma base técnica que vai precisar de mobilização internacional. A Vow Vistos estrutura isso agora.",
    pitch:
      "A Iqony está consolidando sua presença no mercado brasileiro de O&M com contratos de peso. À medida que essa base cresce, a necessidade de mobilizar técnicos para campanhas internacionais virá naturalmente. A Vow Vistos trabalha com empresas nessa fase de expansão para garantir que a infraestrutura de mobilização esteja pronta antes de ser urgente.",
    painFocus: ["readiness", "bureaucracy", "downtime"],
    caseStudySlugs: ["mobilizacao-mexico-blade-repair", "visto-b1-eua-98-aprovacoes"],
    whatsappMessage:
      "Olá Guilherme, sou da Iqony Solutions do Brasil e gostaria de entender como a Vow Vistos pode apoiar nossa mobilização de técnicos para operações internacionais.",
    metaTitle: "Vow Vistos para Iqony Brasil | Mobilização Internacional O&M",
    metaDescription:
      "Parceiro de mobilização para a Iqony Solutions do Brasil em operações de O&M internacionais.",
  },

  "invenergy-brasil": {
    slug: "invenergy-brasil",
    companyName: "Invenergy Services Brazil",
    companyLocation: "Brasil",
    priority: "B",
    type: "O&M — Empresa americana expandindo no Brasil",
    size: "Em crescimento",
    website: "invenergy.com",
    usSignal: "Empresa americana expandindo O&M no Brasil — fluxo reverso possível: técnicos brasileiros para EUA e americanos para Brasil",
    growthSignal: "Expansão do O&M americano para o Brasil cria necessidade de mobilização bidirecional",
    heroTag: "O&M americano expandindo no Brasil",
    heroHeadline: "Vow Vistos + Invenergy Brasil: mobilização bidirecional Brasil ↔ EUA.",
    heroSubheadline:
      "Como empresa americana expandindo O&M no Brasil, a Invenergy tem um fluxo único: técnicos brasileiros indo para os EUA e americanos vindo para cá. A Vow Vistos opera nos dois sentidos.",
    pitch:
      "A Invenergy tem uma posição única: é uma empresa americana construindo capacidade de O&M no Brasil, o que cria um fluxo bidirecional de mobilização. Técnicos brasileiros precisarão operar em projetos nos EUA, e vice-versa. A Vow Vistos é especialista nesse fluxo Brasil ↔ EUA e pode apoiar ambos os lados.",
    painFocus: ["bureaucracy", "readiness", "support"],
    caseStudySlugs: ["visto-b1-eua-98-aprovacoes", "mobilizacao-mexico-blade-repair"],
    whatsappMessage:
      "Olá Guilherme, sou da Invenergy Services Brazil e gostaria de entender como a Vow Vistos pode apoiar a mobilização de técnicos entre Brasil e EUA.",
    metaTitle: "Vow Vistos para Invenergy Brasil | Mobilização Brasil–EUA",
    metaDescription:
      "Parceiro de mobilização bidirecional Brasil–EUA para as operações da Invenergy Services no Brasil.",
  },

  "goldwind-americas": {
    slug: "goldwind-americas",
    companyName: "Goldwind Americas",
    companyLocation: "Brasil / EUA",
    priority: "A",
    type: "OEM — Presença Brasil e EUA",
    size: "Grande porte",
    website: "goldwindamericas.com",
    usSignal: "OEM chinês com presença no Brasil e operações ativas nos EUA; técnicos brasileiros mobilizados para campanhas americanas",
    heroTag: "OEM com presença Brasil e EUA",
    heroHeadline: "Vow Vistos + Goldwind Americas: técnicos brasileiros operando nos EUA — sem gargalos.",
    heroSubheadline:
      "Com presença no Brasil e operações ativas nos EUA, a Goldwind já move equipes entre os dois mercados. A Vow Vistos garante que cada mobilização aconteça no prazo e sem negativas consulares.",
    pitch:
      "A Goldwind Americas opera nos dois mercados simultaneamente — Brasil e EUA — e precisa mobilizar técnicos entre eles com regularidade. Cada negativa de visto ou atraso logístico tem custo direto sobre cronogramas de projeto. A Vow Vistos tem histórico comprovado nesse fluxo específico: 98% de taxa de aprovação B1 para projetos eólicos nos EUA.",
    painFocus: ["downtime", "bureaucracy", "support"],
    caseStudySlugs: ["visto-b1-eua-98-aprovacoes", "mobilizacao-mexico-blade-repair"],
    whatsappMessage:
      "Olá Guilherme, sou da Goldwind Americas e gostaria de entender como a Vow Vistos pode apoiar a mobilização de técnicos brasileiros para campanhas nos EUA.",
    metaTitle: "Vow Vistos para Goldwind Americas | Mobilização Brasil–EUA",
    metaDescription:
      "Suporte especializado em vistos e logística para as mobilizações da Goldwind Americas entre Brasil e EUA.",
  },
};
