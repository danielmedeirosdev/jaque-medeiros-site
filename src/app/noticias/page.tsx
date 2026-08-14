import { pageMeta } from "@/components/InnerPage";
import { newsItems } from "@/content/news";

export const metadata = pageMeta("Notícias");

export default function NoticiasPage() {
  return (
    <article className="inner-page">
      <p className="kicker">Registros</p>
      <h1 className="chapter-title" style={{ marginTop: "0.7rem" }}>
        Notícias
      </h1>
      {newsItems.length === 0 ? (
        <p className="intro-text" style={{ marginTop: "1.4rem" }}>
          [CONTEÚDO A DEFINIR]
        </p>
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
