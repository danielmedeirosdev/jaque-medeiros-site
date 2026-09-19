export type PhotoRecord = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  aspectRatio: string;
  orientation: "portrait" | "landscape";
};

export const photos = {
  atoRua: {
    id: "ato-rua",
    src: "/photos/equipe/ato-rua.png",
    alt: "Jaque Medeiros fala ao microfone em ato de rua, com o punho erguido.",
    caption: "Na rua, com o povo.",
    aspectRatio: "754 / 1024",
    orientation: "portrait",
  },
  tribuna: {
    id: "tribuna",
    src: "/photos/equipe/tribuna.png",
    alt: "Jaque Medeiros na tribuna, punho erguido, em fotografia em preto e branco.",
    caption: "Tribuna e luta.",
    aspectRatio: "818 / 1024",
    orientation: "portrait",
  },
  auditorio: {
    id: "auditorio",
    src: "/photos/equipe/auditorio.png",
    alt: "Jaque Medeiros sentada em auditório, em registro documental.",
    caption: "Escuta e presença.",
    aspectRatio: "822 / 1024",
    orientation: "portrait",
  },
  falaPublica: {
    id: "fala-publica",
    src: "/photos/equipe/fala-publica.png",
    alt: "Jaque Medeiros fala ao microfone em evento público.",
    caption: "Palavra que organiza.",
    aspectRatio: "1024 / 742",
    orientation: "landscape",
  },
  retratoCampinas: {
    id: "retrato-campinas",
    src: "/photos/equipe/retrato-campinas.jpeg",
    alt: "Jaque Medeiros sorrindo, de blazer vermelho, em uma praça de Campinas.",
    caption: "Jaque em Campinas.",
    aspectRatio: "1600 / 1066",
    orientation: "landscape",
  },
  retratoBracos: {
    id: "retrato-bracos",
    src: "/photos/selecao/1LLK1889.webp",
    alt: "Retrato de estúdio de Jaque Medeiros, de braços cruzados, com blazer vermelho.",
    caption: "Retrato oficial.",
    aspectRatio: "1800 / 1200",
    orientation: "landscape",
  },
  retratoGesto: {
    id: "retrato-gesto",
    src: "/photos/selecao/hero.webp",
    alt: "Retrato de estúdio de Jaque Medeiros, sorrindo, com a mão em primeiro plano.",
    caption: "Jaque Medeiros.",
    aspectRatio: "1467 / 2200",
    orientation: "portrait",
  },
  retratoPunho: {
    id: "retrato-punho",
    src: "/photos/selecao/1LLK1909.webp",
    alt: "Retrato de estúdio de Jaque Medeiros com o punho erguido.",
    caption: "Punho erguido.",
    aspectRatio: "1800 / 1200",
    orientation: "landscape",
  },
  retratoAponta: {
    id: "retrato-aponta",
    src: "/photos/selecao/1LLK1927.webp",
    alt: "Retrato de estúdio de Jaque Medeiros, expressão séria, indicando com o dedo.",
    caption: "Direção e firmeza.",
    aspectRatio: "1800 / 1200",
    orientation: "landscape",
  },
  retratoApoiada: {
    id: "retrato-apoiada",
    src: "/photos/selecao/1LLK1947.webp",
    alt: "Retrato de estúdio de Jaque Medeiros, apoiada, olhando para a câmera.",
    caption: "Olhar de campanha.",
    aspectRatio: "1467 / 2200",
    orientation: "portrait",
  },
} as const;

export const heroPhoto = photos.retratoGesto.src;
export const introPhoto = photos.retratoCampinas.src;

export const galleryPhotos: PhotoRecord[] = [
  photos.retratoGesto,
  photos.retratoBracos,
  photos.retratoPunho,
  photos.atoRua,
  photos.falaPublica,
  photos.tribuna,
  photos.auditorio,
  photos.retratoAponta,
  photos.retratoApoiada,
];
