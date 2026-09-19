export type Project = {
  id: string;
  name: string;
  period: string;
  description: string;
  role: string;
  href: string | null;
};

export const projectsIntro =
  "Iniciativas que cruzam jornalismo científico, pesquisa e articulação de mulheres na política paulista.";

export const projects: Project[] = [
  {
    id: "labirinto",
    name: "Labirinto — Labjor / Unicamp",
    period: "Unicamp · FAPESP",
    description:
      "Laboratório de Estudos Socioantropológicos sobre Tecnologias da Vida. Jaque atua na divulgação científica das pesquisas do grupo, com ênfase em comunicação pública da ciência e práticas antirracistas.",
    role: "Jornalista científica · Bolsa Mídia Ciência (FAPESP)",
    href: "https://www.labirinto.labjor.unicamp.br/author/jacqueline-medeiros/",
  },
  {
    id: "mulheres-alesp",
    name: "Mulheres na ALESP",
    period: "São Paulo · Assembleia Legislativa",
    description:
      "Grupo de articulação de mulheres na Assembleia Legislativa do Estado de São Paulo. Jaque integra o coletivo na construção de presença feminina, antirracista e popular no parlamento paulista.",
    role: "Integrante",
    href: null,
  },
];
