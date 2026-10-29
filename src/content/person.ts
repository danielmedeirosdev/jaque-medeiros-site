export type ContentStatus = "confirmed" | "pending-team";

export const person = {
  fullName: "Jaqueline de Campos Medeiros",
  publicName: "Jaque Medeiros",
  city: "Campinas",
  state: "São Paulo",
  party: {
    name: "Partido dos Trabalhadores",
    acronym: "PT",
  },
  role: "Jornalista, pesquisadora e liderança política",
  ballotNumber: "13111",
  professionLabel: "Jornalista, mãe, pesquisadora e militante",
  formationLabel: "Mestra em Jornalismo Científico — Unicamp / Labjor",
  openingLine:
    "Jovem mulher negra, nascida em Campinas, jornalista, mãe, pesquisadora, militante e filha da classe trabalhadora.",
  bioParagraphs: [
    "Eu sou a Jaque! Mulher negra, trabalhadora, mãe, jornalista e pesquisadora. Nasci na periferia de Campinas e venho de uma família de mulheres fortes e de luta, que me ensinaram que defender direitos é um compromisso com a vida.",
    "Minha trajetória foi construída nas ruas, nos movimentos populares, no movimento estudantil e ao lado do povo trabalhador. Luto pelas mulheres, pela juventude, pelo povo negro, pela população LGBTQIAPN+, pelos direitos de quem trabalha e pelos serviços públicos.",
    "Em 2026, fui candidata a deputada estadual e recebi 8.649 votos. Essa caminhada ampliou uma construção coletiva que continua nas ruas, nos territórios e ao lado de quem luta por direitos.",
  ],
  starLine: "A eleição passou. A luta e o compromisso continuam.",
  notes: {
    profession: {
      status: "confirmed" as ContentStatus,
      reason:
        "Título de mestra em Jornalismo Científico confirmado por fontes públicas (FAPESP/Labjor/Lattes). Doutorado não publicado.",
    },
  },
} as const;
