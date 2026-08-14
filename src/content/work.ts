export type WorkField = {
  id: string;
  index: string;
  title: string;
  description: string;
  imageSrc: string | null;
  imageAlt: string;
};

export const workFields: WorkField[] = [
  {
    id: "campo-01",
    index: "01",
    title: "[CONTEÚDO A DEFINIR]",
    description: "[CONTEÚDO A DEFINIR]",
    imageSrc: "/photos/equipe/ato-rua.png",
    imageAlt: "Jaque Medeiros em ato de rua.",
  },
  {
    id: "campo-02",
    index: "02",
    title: "[CONTEÚDO A DEFINIR]",
    description: "[CONTEÚDO A DEFINIR]",
    imageSrc: "/photos/equipe/fala-publica.png",
    imageAlt: "Jaque Medeiros em fala pública.",
  },
  {
    id: "campo-03",
    index: "03",
    title: "[CONTEÚDO A DEFINIR]",
    description: "[CONTEÚDO A DEFINIR]",
    imageSrc: "/photos/selecao/1LLK1909.webp",
    imageAlt: "Retrato de estúdio de Jaque Medeiros.",
  },
];
