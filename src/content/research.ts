export type ResearchItem = {
  id: string;
  kind: string;
  title: string;
  detail: string;
};

export const researchIntro =
  "Formação e pesquisa orientadas pela comunicação pública da ciência, pela representatividade negra e pela valorização de saberes periféricos.";

export const researchItems: ResearchItem[] = [
  {
    id: "mestrado",
    kind: "Formação",
    title: "Mestrado em Jornalismo Científico — Unicamp",
    detail:
      "Formação no Labjor/Unicamp voltada à comunicação da ciência com rigor crítico e vínculo social.",
  },
  {
    id: "fapesp",
    kind: "Pesquisa",
    title: "Bolsa Mídia Ciência — FAPESP",
    detail:
      "Divulgação científica das atividades do Labirinto (Labjor/NUDECRI/Unicamp), ampliando o alcance de pesquisas sobre corpo, gênero, raça, tecnociência e cultura.",
  },
  {
    id: "producao",
    kind: "Produção",
    title: "Artigos, capítulos e intervenção pública",
    detail:
      "Produção em periódicos, capítulos de livro e atuação em eventos acadêmicos e populares — sempre conectando universidade e território.",
  },
];
