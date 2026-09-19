import type { Metadata } from "next";

type InnerPageProps = {
  title: string;
  description: string;
  kicker?: string;
};

export function InnerPage({
  title,
  description,
  kicker = "Institucional",
}: InnerPageProps) {
  return (
    <article className="inner-page">
      <p className="kicker">{kicker}</p>
      <h1 className="chapter-title">{title}</h1>
      <p className="lead">{description}</p>
    </article>
  );
}

export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
    },
  };
}
