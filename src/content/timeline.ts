import { photos } from "@/lib/photos";

export type ChapterLayout = "image-right" | "image-left" | "full-bleed";
export type PhotoTreatment = "color" | "bw";

export type ArchiveChapter = {
  id: string;
  period: string;
  title: string;
  body: string;
  layout: ChapterLayout;
  photo: {
    src: string | null;
    alt: string;
    treatment: PhotoTreatment;
  };
};

export const trajetoriaIntro =
  "De Campinas para a disputa estadual: jovem mulher negra, jornalista, mãe, pesquisadora, militante e filha da classe trabalhadora. Candidata a deputada estadual pelo PT.";

export const chapters: ArchiveChapter[] = [
  {
    id: "formacao",
    period: "Unicamp · Labjor",
    title: "Jornalismo científico com raiz popular",
    body: "Mestra em Jornalismo Científico pela Unicamp, Jaque desenvolve trabalho na interseção entre mídia, ciência e cultura. No Labirinto (Labjor/Unicamp), produz divulgação científica crítica sobre corpo, gênero, raça, tecnociência e sociedade — com bolsa Mídia Ciência da FAPESP.",
    layout: "image-right",
    photo: {
      src: photos.auditorio.src,
      alt: photos.auditorio.alt,
      treatment: "color",
    },
  },
  {
    id: "territorio",
    period: "Campinas · Periferias",
    title: "Raiz na periferia",
    body: "A trajetória de Jaque foi construída nas periferias, nos movimentos sociais, na escola pública e na universidade pública. É daí que vem a escuta, a organização e a defesa de uma política que sirva ao povo.",
    layout: "full-bleed",
    photo: {
      src: photos.atoRua.src,
      alt: photos.atoRua.alt,
      treatment: "color",
    },
  },
  {
    id: "militancia",
    period: "PT · São Paulo",
    title: "Da rua à Assembleia",
    body: "Com passagem pela disputa municipal em Campinas e construção coletiva no Partido dos Trabalhadores, Jaque integra o grupo Mulheres na ALESP e leva para a campanha estadual a mesma ética do território: escuta, organização e presença. A Assembleia precisa da voz de quem conhece a periferia por dentro.",
    layout: "image-left",
    photo: {
      src: photos.tribuna.src,
      alt: photos.tribuna.alt,
      treatment: "bw",
    },
  },
];

