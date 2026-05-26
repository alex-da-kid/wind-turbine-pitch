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
    id: "case-4",
    slug: "mobilizacao-tailandia-pandemia",
    title: "33 Técnicos Mobilizados para a Tailândia Durante a Pandemia de Covid-19",
    tag: "Alta Complexidade",
    route: "Brasil → Tailândia",
    challenge:
      "Em 2020, uma empresa eólica precisava mobilizar com urgência 33 técnicos brasileiros para projetos de blade repair, inspeção e manutenção na Tailândia — no auge das restrições da Covid-19.",
    outcome:
      "33 técnicos mobilizados, 100% de entrada legal e zero negativas consulares. O cliente cumpriu o contrato no prazo e abriu operações em outros quatro países.",
    stat: "33",
    statLabel: "Técnicos mobilizados com zero negativas",
    date: "2020",
    readTime: "4 min",
    fullContent: [
      {
        heading: "O contexto",
        body: "Em 2020, no auge da pandemia de Covid-19, uma empresa do setor eólico precisava mobilizar com urgência uma equipe de técnicos brasileiros para atuar na Tailândia em contratos de blade repair, inspeção, rope access e manutenção corretiva. As fronteiras do mundo inteiro estavam parcial ou totalmente fechadas, e as exigências para entrada em países asiáticos eram das mais rigorosas registradas na história recente.",
      },
      {
        heading: "O desafio",
        body: "O desafio ia muito além da emissão de vistos. A operação exigiu a coordenação simultânea de exigências consulares, sanitárias, trabalhistas e logísticas que simplesmente não existiam em condições normais: vistos Non-Immigrant B, permissões de trabalho, autorizações de viagem, testes de PCR dentro de janelas específicas, seguro com cobertura Covid obrigatória, quarentena em hotel designado pelo governo tailandês e rotas aéreas operacionais em meio a severas restrições internacionais — tudo isso com prazo contratual em aberto.",
      },
      {
        heading: "Nossa abordagem",
        body: "A Vow conduziu o processo de ponta a ponta. Representamos o grupo perante a Embaixada da Tailândia no Brasil, coordenamos documentos com a empresa patrocinadora local, advogados no destino e demais autoridades envolvidas. Organizamos a logística aérea com rotas viáveis, os hotéis de quarentena homologados pelo governo tailandês e a preparação pré-embarque individual de cada técnico. No dia do voo, estivemos presencialmente no aeroporto de Guarulhos para o check-in internacional, garantindo que todos embarcassem com documentação completa e em conformidade.",
      },
      {
        heading: "O resultado",
        body: "Mesmo diante de mudanças constantes nas regras sanitárias e da operação limitada dos órgãos governamentais, a mobilização foi concluída com sucesso: 33 técnicos autorizados, 100% de entrada legal no território tailandês e zero negativas consulares. O cliente cumpriu seu contrato dentro do prazo. O protocolo operacional desenvolvido para essa mobilização foi posteriormente replicado para projetos em El Salvador, Nicarágua, Costa Rica e República Dominicana.",
      },
    ],
  },
  {
    id: "case-6",
    slug: "mobilizacao-argentina-lockdown",
    title: "Dois Voos Privados, 70 Técnicos e 100% de Entrada Autorizada Durante o Lockdown Argentino",
    tag: "Operação Excepcional",
    route: "Brasil → Argentina",
    challenge:
      "Em 2020, durante o lockdown total na Argentina — fronteiras terrestres seladas, voos comerciais suspensos — uma empresa eólica brasileira precisava mobilizar 70 técnicos para projetos em andamento no país.",
    outcome:
      "Dois voos privados autorizados, 70 técnicos com entrada regular, zero negativas migratórias e DNI emitido para todos. A operação cresceu para 150 técnicos em campo, com suporte contínuo da Vow por três anos.",
    stat: "70",
    statLabel: "Técnicos mobilizados durante o lockdown",
    date: "2020",
    readTime: "5 min",
    fullContent: [
      {
        heading: "O contexto",
        body: "Em 2020, no auge da pandemia de Covid-19, uma empresa brasileira do setor eólico em processo de internacionalização precisava mobilizar 70 técnicos para atuação em múltiplos projetos na Argentina. O cenário era de lockdown total: fronteiras terrestres seladas, voos comerciais suspensos e rígidos controles sanitários vigentes em todo o território argentino.",
      },
      {
        heading: "O desafio",
        body: "A entrada exigia autorização governamental em caráter de exceção — o que significava demonstrar formalmente que os serviços prestados se enquadravam como essenciais à infraestrutura de geração de energia. Sem voos comerciais disponíveis, qualquer mobilização dependia da operação de aeronaves privadas fretadas. Após a chegada, cada técnico enfrentaria quarentena obrigatória de 14 dias, testagem de PCR em três momentos e necessidade de regularização migratória completa, incluindo a obtenção do DNI para residência e trabalho no país.",
      },
      {
        heading: "Nossa abordagem",
        body: "A Vow estruturou a operação do zero. Coordenamos junto às autoridades argentinas a obtenção de autorização de entrada em caráter excepcional, preparando a documentação que comprovou a essencialidade dos serviços. Localizamos fornecedores habilitados a operar dois voos privados dedicados ao grupo e coordenamos o deslocamento dos técnicos de diversas cidades do Brasil até Porto Alegre, incluindo hospedagem pré-embarque, listas de passageiros, faturamento, autorizações sanitárias e acompanhamento presencial no embarque. Após a chegada em Buenos Aires, acompanhamos todos os técnicos ao longo da quarentena de 14 dias e dos testes PCR exigidos — antes do embarque, na chegada e ao final do isolamento. Conduzimos também a regularização migratória completa: documentação provisória e emissão de DNI. Paralelamente, assumimos a gestão de uma frota de 15 veículos 4x4 para operação em regiões remotas da Argentina, incluindo seleção de fornecedores locais, contratos, pagamentos, auditoria, manutenção, suporte a sinistros e substituição de veículos quando necessário.",
      },
      {
        heading: "O resultado",
        body: "70 técnicos mobilizados, dois voos privados autorizados, 100% de entrada regular no país, zero negativas migratórias e DNI emitido para todos os profissionais. A operação inicial abriu caminho para a expansão do cliente na Argentina, que chegou a aproximadamente 150 técnicos em campo. A Vow prestou suporte contínuo por três anos: mobilizações, desmobilizações, gestão de frota, deslocamentos internos e atendimento a emergências.",
      },
    ],
  },
  {
    id: "case-7",
    slug: "mobilizacao-mexico-blade-repair",
    title: "20 Técnicos em Campo no México em 4 Semanas, com 100% de Aprovação e Admissão",
    tag: "Mobilização LATAM",
    route: "Brasil → México",
    challenge:
      "Entre 2021 e 2024, uma empresa brasileira do setor eólico precisava mobilizar equipes de blade repair para múltiplos projetos em regiões remotas do México — Tamaulipas, Oaxaca, San Luis Potosí e Baja California — com urgência operacional e janelas de vento que não perdoavam atrasos.",
    outcome:
      "20 técnicos com vistos aprovados, 100% de aprovação consular, 100% de admissão no México e equipes prontas em campo em até 4 semanas. Suporte 24/7 contínuo ao longo de todos os projetos.",
    stat: "100%",
    statLabel: "Aprovação consular e admissão no México",
    date: "2021–2024",
    readTime: "5 min",
    fullContent: [
      {
        heading: "O contexto",
        body: "Entre 2021 e 2024, uma empresa brasileira do setor eólico em processo de expansão para o mercado LATAM precisava mobilizar equipes de blade repair para múltiplos projetos em regiões remotas do México, incluindo Tamaulipas, Oaxaca, San Luis Potosí e Baja California. O desafio combinava urgência operacional, estratégia consular e logística complexa. Em muitos casos, a velocidade de mobilização era decisiva: torres eólicas paradas precisavam voltar a gerar energia, e janelas de baixa incidência de ventos exigiam que as equipes estivessem em campo no momento certo para execução das manutenções programadas.",
      },
      {
        heading: "O desafio",
        body: "A operação exigia uma estratégia consular precisa para a categoria de visitante com atividades não remuneradas — os técnicos permaneciam empregados e remunerados pela empresa brasileira. Qualquer imprecisão no enquadramento poderia gerar negativas. Além da estratégia consular, a logística era altamente complexa: voos internacionais para Cidade do México ou Monterrey, conexões domésticas, transfers e deslocamentos terrestres que podiam variar de 5 a 12 horas até o destino final em regiões remotas.",
      },
      {
        heading: "Nossa abordagem",
        body: "A Vow estruturou dossiês individuais para cada técnico, com comprovação de vínculo com o Brasil, cartas de suporte das empresas no Brasil e no México, descrição técnica das atividades e solicitação formal de agendamentos emergenciais junto ao Consulado Mexicano em São Paulo. Nossa equipe conduziu orientações em pequenos grupos, preparando os técnicos tanto para a entrevista consular quanto para a admissão no México, garantindo consistência entre o propósito da viagem, a categoria do visto e a operação em campo. As equipes foram mobilizadas em etapas — geralmente grupos de três técnicos — com toda a logística coordenada de ponta a ponta, incluindo voos, conexões domésticas, transfers, trechos rodoviários e pernoites intermediários quando necessário.",
      },
      {
        heading: "O resultado",
        body: "20 técnicos com vistos aprovados, 100% de aprovação consular, 100% de admissão no México e equipes prontas em campo em até 4 semanas. Ao longo dos projetos, a Vow prestou suporte 24/7 para remarcações, emergências, acionamento de seguro, retornos antecipados, desmobilizações, rotação de equipes e extensão de FMM. A operação contribuiu para que o cliente atendesse contratos dentro do prazo, evitasse atrasos operacionais e consolidasse sua presença como um dos principais provedores de serviços de blade repair no México por vários anos.",
      },
    ],
  },
  {
    id: "case-5",
    slug: "visto-b1-eua-98-aprovacoes",
    title: "49 Aprovações em 50 Solicitações de Visto B1 para Projetos Eólicos nos EUA",
    tag: "Visto B1 EUA",
    route: "Brasil → Estados Unidos",
    challenge:
      "Em 2022, uma empresa eólica precisava mobilizar 50 técnicos para projetos nos EUA dentro de uma janela operacional crítica, estruturando uma estratégia B1 em escala no período pós-pandemia, com agendas consulares ainda muito limitadas.",
    outcome:
      "49 vistos aprovados em 50 solicitações, 98% de taxa de aprovação, três consulados envolvidos. O cliente cumpriu o cronograma e manteve sua operação no mercado eólico norte-americano.",
    stat: "98%",
    statLabel: "Taxa de aprovação consular",
    date: "2022",
    readTime: "4 min",
    fullContent: [
      {
        heading: "O contexto",
        body: "Em 2022, uma empresa brasileira do setor eólico precisava mobilizar com urgência 50 técnicos para atuação temporária em projetos nos Estados Unidos, vinculados a um dos maiores fabricantes globais do setor. A operação exigia uma estratégia B1 estruturada em larga escala, em um cenário pós-pandemia em que a disponibilidade de agenda nos consulados americanos ainda era extremamente limitada.",
      },
      {
        heading: "O desafio",
        body: "Além do volume, dois fatores tornavam essa operação particularmente crítica. O primeiro era o enquadramento da categoria: o visto B1 exige que as atividades sejam caracterizadas como consultivas, técnicas ou de capacitação — qualquer imprecisão na construção do dossiê cria fundamento para negativa. O segundo era o prazo: a mobilização tinha uma janela operacional rígida, determinada por fatores climáticos e pelo cronograma dos projetos. Perder essa janela significava perder o contrato.",
      },
      {
        heading: "Nossa abordagem",
        body: "A Vow construiu uma estratégia imigratória 100% alinhada às exigências da categoria B1. Cada um dos 50 técnicos foi analisado individualmente: preparação documental personalizada, comprovação de vínculos com o Brasil, cartas de suporte das empresas envolvidas, orientação consular e simulação de entrevista. Para contornar a escassez de agendas, nossa equipe coordenou solicitações emergenciais e distribuiu as entrevistas entre os consulados de Recife, São Paulo e Brasília, organizando toda a logística nacional — voos, traslados, hospedagens e suporte fora do horário comercial.",
      },
      {
        heading: "O resultado",
        body: "49 vistos aprovados em 50 solicitações — 98% de taxa de aprovação. Três consulados, operação concluída dentro da janela do cliente. Após a emissão, a Vow também coordenou a mobilização internacional: orientação pré-embarque, suporte on-travel e acompanhamento até a chegada aos destinos nos Estados Unidos. Com a equipe mobilizada no prazo, o cliente executou os projetos conforme o cronograma e manteve sua posição no mercado eólico norte-americano.",
      },
    ],
  },
];
