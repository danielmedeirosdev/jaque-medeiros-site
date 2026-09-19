import { pageMeta } from "@/components/InnerPage";
import { contribute } from "@/content/contact";
import { person } from "@/content/person";

export const metadata = pageMeta(
  "Apoie",
  `Apoie a campanha de ${person.publicName} a deputada estadual pelo PT.`,
  "/contribua",
);

export default function ContribuaPage() {
  return (
    <article className="inner-page">
      <p className="kicker">Apoio</p>
      <h1 className="chapter-title">{contribute.title}</h1>
      <p className="lead" style={{ marginTop: "1.4rem" }}>
        {contribute.text}
      </p>
      {contribute.href ? (
        <a
          className="btn btn-primary"
          href={contribute.href}
          style={{ marginTop: "1.75rem" }}
          target="_blank"
          rel="noreferrer"
        >
          {contribute.buttonLabel}
        </a>
      ) : (
        <p className="muted-note" style={{ marginTop: "1.75rem" }}>
          {contribute.buttonLabel}
        </p>
      )}
    </article>
  );
}
