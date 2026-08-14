export type PhotoRecord = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

export const photos = {
  atoRua: {
    id: "ato-rua",
    src: "/photos/equipe/ato-rua.png",
    alt: "Jaque Medeiros fala ao microfone em ato de rua, com o punho erguido.",
    caption: "[LEGENDA A DEFINIR]",
  },
  tribuna: {
    id: "tribuna",
    src: "/photos/equipe/tribuna.png",
    alt: "Jaque Medeiros na tribuna, punho erguido, em fotografia em preto e branco.",
    caption: "[LEGENDA A DEFINIR]",
  },
  auditorio: {
    id: "auditorio",
    src: "/photos/equipe/auditorio.png",
    alt: "Jaque Medeiros sentada em auditório, em registro documental.",
    caption: "[LEGENDA A DEFINIR]",
  },
  falaPublica: {
    id: "fala-publica",
    src: "/photos/equipe/fala-publica.png",
    alt: "Jaque Medeiros fala ao microfone em evento público.",
    caption: "[LEGENDA A DEFINIR]",
  },
  retratoBracos: {
    id: "retrato-bracos",
    src: "/photos/selecao/1LLK1889.webp",
    alt: "Retrato de estúdio de Jaque Medeiros, de braços cruzados, com blazer vermelho.",
    caption: "[LEGENDA A DEFINIR]",
  },
  retratoGesto: {
    id: "retrato-gesto",
    src: "/photos/selecao/hero.webp",
    alt: "Retrato de estúdio de Jaque Medeiros, sorrindo, com a mão em primeiro plano.",
    caption: "[LEGENDA A DEFINIR]",
  },
  retratoPunho: {
    id: "retrato-punho",
    src: "/photos/selecao/1LLK1909.webp",
    alt: "Retrato de estúdio de Jaque Medeiros com o punho erguido.",
    caption: "[LEGENDA A DEFINIR]",
  },
  retratoAponta: {
    id: "retrato-aponta",
    src: "/photos/selecao/1LLK1927.webp",
    alt: "Retrato de estúdio de Jaque Medeiros, expressão séria, indicando com o dedo.",
    caption: "[LEGENDA A DEFINIR]",
  },
  retratoApoiada: {
    id: "retrato-apoiada",
    src: "/photos/selecao/1LLK1947.webp",
    alt: "Retrato de estúdio de Jaque Medeiros, apoiada, olhando para a câmera.",
    caption: "[LEGENDA A DEFINIR]",
  },
} as const;

export const heroPhoto = photos.retratoGesto.src;
export const introPhoto = photos.auditorio.src;

export const galleryPhotos: PhotoRecord[] = [
  photos.atoRua,
  photos.tribuna,
  photos.auditorio,
  photos.falaPublica,
  photos.retratoBracos,
  photos.retratoPunho,
  photos.retratoAponta,
  photos.retratoApoiada,
  photos.retratoGesto,
];
