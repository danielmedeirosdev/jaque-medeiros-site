import Link from "next/link";
import { pageMeta } from "@/components/InnerPage";
import { newsIntro, newsItems } from "@/content/news";
import { person } from "@/content/person";

export const metadata = {
  ...pageMeta(
    "Notícias",
    `Notícias e registros da campanha de ${person.publicName}.`,
    "/noticias",
  ),
  robots: {
    index: newsItems.length > 0,
    follow: true,
  },
};

export default function NoticiasPage() {
  return (
    <article className="inner-page">
      <p className="kicker">Atualizações</p>
      <h1 className="chapter-title">Notícias</h1>
      {newsItems.length === 0 ? (
        <>
          <p className="lead" style={{ marginTop: "1.4rem" }}>
            {newsIntro}
          </p>
          <Link href="/manifesto" className="text-link" style={{ marginTop: "1.5rem" }}>
            Ler o manifesto
          </Link>
        </>
      ) : (
        <ul className="news-list">
          {newsItems.map((item) => (
            <li key={item.id}>
              <p className="chapter-meta">
                {item.date} · {item.category}
              </p>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
