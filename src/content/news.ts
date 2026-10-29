export type NewsItem = {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  href: string | null;
  imageSrc: string | null;
  imageAlt: string;
};

export const newsIntro =
  "Notícias, posicionamentos e registros da atuação de Jaque serão publicados aqui. Enquanto isso, leia o manifesto e conheça sua trajetória.";

export const newsItems: NewsItem[] = [];
