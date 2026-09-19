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
  "Notas e registros da campanha serão publicados aqui. Por enquanto, leia o manifesto e acompanhe a trajetória de Jaque.";

export const newsItems: NewsItem[] = [];
