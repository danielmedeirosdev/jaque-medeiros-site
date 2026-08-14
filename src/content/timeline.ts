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

export const chapters: ArchiveChapter[] = [
  {
    id: "capitulo-01",
    period: "[PERÍODO A DEFINIR]",
    title: "[CONTEÚDO A DEFINIR]",
    body: "[CONTEÚDO A DEFINIR]",
    layout: "image-right",
    photo: {
      src: photos.atoRua.src,
      alt: photos.atoRua.alt,
      treatment: "color",
    },
  },
  {
    id: "capitulo-02",
    period: "[PERÍODO A DEFINIR]",
    title: "[CONTEÚDO A DEFINIR]",
    body: "[CONTEÚDO A DEFINIR]",
    layout: "full-bleed",
    photo: {
      src: photos.tribuna.src,
      alt: photos.tribuna.alt,
      treatment: "color",
    },
  },
  {
    id: "capitulo-03",
    period: "[PERÍODO A DEFINIR]",
    title: "[CONTEÚDO A DEFINIR]",
    body: "[CONTEÚDO A DEFINIR]",
    layout: "image-left",
    photo: {
      src: photos.falaPublica.src,
      alt: photos.falaPublica.alt,
      treatment: "color",
    },
  },
];

export const homeChapters = chapters.slice(0, 2);
