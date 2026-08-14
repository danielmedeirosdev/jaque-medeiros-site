import { pageMeta } from "@/components/InnerPage";
import { contribute } from "@/content/contact";

export const metadata = pageMeta("Contribua");

export default function ContribuaPage() {
  return (
    <article className="inner-page">
      <p className="kicker">Apoio</p>
      <h1 className="chapter-title" style={{ marginTop: "0.7rem" }}>
        {contribute.title}
      </h1>
      <p className="intro-text" style={{ marginTop: "1.4rem" }}>
        {contribute.text}
      </p>
      {contribute.href ? (
        <a className="official-link" href={contribute.href}>
          {contribute.buttonLabel}
        </a>
      ) : (
        <p className="muted-note">{contribute.buttonLabel}</p>
      )}
    </article>
  );
}
