export type WorkField = {
  id: string;
  index: string;
  title: string;
  description: string;
  imageSrc: string | null;
  imageAlt: string;
  imageFit?: "cover" | "contain";
};

export const workIntro =
  "As bandeiras que orientam a atuação política de Jaque Medeiros em Campinas e no estado de São Paulo.";

export const workFields: WorkField[] = [
  {
    id: "mulheres-trabalhadores",
    index: "01",
    title: "Direitos das mulheres e dos trabalhadores",
    description: "Igualdade salarial e fim da violência.",
    imageSrc: "/photos/equipe/ato-rua.png",
    imageAlt: "Jaque Medeiros em ato de rua, falando ao microfone.",
  },
  {
    id: "saude-sem-racismo",
    index: "02",
    title: "Saúde sem racismo",
    description: "SUS forte e saúde da população negra.",
    imageSrc: "/photos/equipe/fala-publica.png",
    imageAlt: "Jaque Medeiros em fala pública.",
  },
  {
    id: "tarifa-zero",
    index: "03",
    title: "Tarifa Zero e direito à cidade",
    description: "Transporte de qualidade para a periferia.",
    imageSrc: "/photos/campanha/tarifa-zero-13111.png",
    imageAlt: "Arte da campanha Tarifa Zero 13111 de Jaque Medeiros.",
    imageFit: "contain",
  },
  {
    id: "educacao-igualdade-racial",
    index: "04",
    title: "Educação e igualdade racial",
    description: "Escola pública, direitos humanos e LGBTQIA+.",
    imageSrc: "/photos/equipe/tribuna.png",
    imageAlt: "Jaque Medeiros na tribuna, com o punho erguido.",
  },
  {
    id: "ciencia-publica",
    index: "05",
    title: "Ciência pública",
    description: "Fortalecimento das universidades públicas e da ciência.",
    imageSrc: "/photos/selecao/1LLK1909.webp",
    imageAlt: "Retrato de estúdio de Jaque Medeiros com o punho erguido.",
  },
];
