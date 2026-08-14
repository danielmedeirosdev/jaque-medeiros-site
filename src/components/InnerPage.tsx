import type { Metadata } from "next";

type InnerPageProps = {
  title: string;
  description: string;
};

export function InnerPage({ title, description }: InnerPageProps) {
  return (
    <article className="inner-page">
      <p className="kicker">Arquivo</p>
      <h1 className="chapter-title" style={{ marginTop: "0.7rem" }}>
        {title}
      </h1>
      <p className="intro-text" style={{ marginTop: "1.4rem" }}>
        {description}
      </p>
    </article>
  );
}

export function pageMeta(title: string): Metadata {
  return { title };
}
