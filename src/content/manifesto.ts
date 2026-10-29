export type ManifestoSection =
  | {
      id: string;
      kind: "opening";
      lede: string;
      names: string[];
      paragraphs: string[];
    }
  | {
      id: string;
      kind: "identity";
      kicker: string;
      nameLine: string;
      paragraphs: string[];
    }
  | {
      id: string;
      kind: "context";
      paragraphs: string[];
    }
  | {
      id: string;
      kind: "litany";
      refrain: string;
      lines: string[];
    }
  | {
      id: string;
      kind: "program";
      paragraphs: string[];
    }
  | {
      id: string;
      kind: "invitation";
      paragraphs: string[];
      call: string[];
      walkWithMe: string;
      because: string;
      refrain: string;
      stand: string;
      hands: string;
      closing: string;
    };

export const manifesto = {
  title: "Manifesto",
  pdfHref: "/manifesto-jaque.pdf",
  pdfLabel: "Baixar o PDF",
  participationHref:
    "https://docs.google.com/forms/d/e/1FAIpQLSe-WFYjZFsQVAAbpx2SuYnOKhXaFRMoV4oIcYM3IP7Z6rSmxw/viewform",
  participationLabel: "Assine aqui o manifesto",
  refrain: "Eles semeiam o ódio. Nós semeamos futuro.",
  closing: "Agora é conosco no poder!",
  sections: [
    {
      id: "antes",
      kind: "opening",
      lede: "Antes de nós, vieram outras.",
      names: [
        "Vieram Dandara.",
        "Vieram Luísa Mahin.",
        "Vieram Laudelinas.",
        "Vieram Lélias.",
        "Vieram Suelis.",
        "Vieram Marielles.",
      ],
      paragraphs: [
        "Mulheres que enfrentaram a escravidão, o racismo, o patriarcado, a exploração e a violência para que hoje pudéssemos sonhar, resistir e transformar.",
        "Tentaram silenciar suas vozes. Não conseguiram.",
        "Porque cada mulher negra que se levanta para lutar carrega a memória de quem veio antes e a responsabilidade de abrir caminhos para quem ainda virá.",
      ],
    },
    {
      id: "hoje",
      kind: "identity",
      kicker: "Hoje, somos nós.",
      nameLine: "Eu sou Jaque Medeiros.",
      paragraphs: [
        "Sou uma jovem mulher negra, nascida na cidade de Campinas, jornalista, mãe, pesquisadora, militante e filha da classe trabalhadora.",
        "Minha trajetória foi construída nas periferias, nos movimentos sociais, na escola pública, na universidade pública, nas ruas e na comunicação e ao lado de quem acredita que a política deve servir ao povo. Foi nesses espaços que aprendi que a política só faz sentido quando transforma a vida das pessoas e enfrenta as desigualdades.",
        "Em 2026, coloquei meu nome à disposição como candidata a deputada estadual, para fortalecer as lutas do nosso povo e ampliar a presença de mulheres negras nos espaços de decisão.",
        "Não por um projeto individual, mas porque acredito que chegou a hora de disputar o futuro de São Paulo.",
      ],
    },
    {
      id: "tempo",
      kind: "context",
      paragraphs: [
        "Vivemos um tempo em que a extrema direita reorganiza suas forças. O racismo continua determinando quem vive e quem morre. A misoginia encontra nas plataformas digitais novos espaços para se espalhar, normalizando o discurso de ódio, a violência política de gênero e a desumanização das mulheres. A LGBTfobia segue produzindo violência.",
        "Enquanto isso, a desigualdade aumenta e os direitos do povo trabalhador são constantemente ameaçados.",
        "Quando a violência contra as mulheres é naturalizada, nossos corpos continuam sendo transformados em estatísticas de agressões e feminicídios.",
        "Mas nós escolhemos outro caminho.",
      ],
    },
    {
      id: "futuro",
      kind: "litany",
      refrain: "Eles semeiam o ódio. Nós semeamos futuro.",
      lines: [
        "Semeamos futuro quando defendemos a democracia.",
        "Semeamos futuro quando enfrentamos o racismo estrutural.",
        "Semeamos futuro quando fortalecemos o SUS, a educação pública, a cultura e a ciência.",
        "Semeamos futuro quando garantimos direitos às mulheres, à população negra, à juventude, aos povos indígenas, à população LGBTQIAPN+ e à classe trabalhadora.",
        "Semeamos futuro quando transformamos indignação em organização popular.",
      ],
    },
    {
      id: "estado",
      kind: "program",
      paragraphs: [
        "Acredito em um Estado de São Paulo que fortaleça a juventude com mais estrutura para as universidades públicas, a pesquisa, a ciência e a inovação como instrumentos de desenvolvimento, soberania e justiça social. A ciência deve estar comprometida com a transformação da vida do povo.",
        "Também defendo o trabalho digno. Sou contra a terceirização que precariza as relações de trabalho, reduz direitos e amplia a exploração de trabalhadores e trabalhadoras. Não existe desenvolvimento sem valorização do trabalho.",
        "Quero um Estado que enfrente o racismo como política pública permanente, que combata todas as formas de discriminação e que compreenda que não haverá democracia plena enquanto mulheres negras, trabalhadores e trabalhadoras e as periferias continuarem sub-representados nos espaços de decisão.",
      ],
    },
    {
      id: "convite",
      kind: "invitation",
      paragraphs: [
        "Por isso, coloco meu nome à disposição.",
        "Não para falar por ninguém.",
        "Mas para construir, junto com o povo, um mandato popular, antirracista, feminista, socialista e comprometido com a justiça social.",
      ],
      call: [
        "São Paulo, chegou a hora de ouvir as Marias Mahin.",
        "Chegou a hora de fazer florescer milhares de Laudelinas.",
        "Chegou a hora de multiplicar Marielles.",
      ],
      walkWithMe: "Convido você a caminhar comigo.",
      because:
        "Porque quando uma mulher negra ocupa um espaço de poder, ela não chega sozinha. Ela leva consigo a história de quem veio antes e abre caminho para quem ainda virá.",
      refrain: "Eles semeiam o ódio. Nós semeamos futuro.",
      stand: "Não recuaremos.",
      hands:
        "Se as mãos das mulheres negras construíram este país, também construirão o seu futuro.",
      closing: "Agora é conosco no poder!",
    },
  ] satisfies ManifestoSection[],
} as const;
