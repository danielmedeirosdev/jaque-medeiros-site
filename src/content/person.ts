export type ContentStatus = "confirmed" | "pending-team";

export const person = {
  fullName: "Jaqueline de Campos Medeiros",
  publicName: "Jaque Medeiros",
  age: 34,
  city: "Campinas",
  state: "São Paulo",
  party: {
    name: "Partido dos Trabalhadores",
    acronym: "PT",
  },
  publicContext:
    "Construção de presença pública como candidata a deputada estadual.",
  professionLabel: "[CONTEÚDO A DEFINIR]",
  formationLabel: "[CONTEÚDO A DEFINIR]",
  openingLine: "[FRASE DE ABERTURA A DEFINIR]",
  introText: "[CONTEÚDO A DEFINIR]",
  notes: {
    profession: {
      status: "pending-team" as ContentStatus,
      reason:
        "O briefing cita doutora em Jornalismo. Fontes públicas (FAPESP/Labjor) descrevem mestra em Jornalismo Científico. Não publicar título até confirmação.",
    },
  },
} as const;
