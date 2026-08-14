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

export const newsItems: NewsItem[] = [];
