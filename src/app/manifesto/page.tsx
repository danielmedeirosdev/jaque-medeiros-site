import { pageMeta } from "@/components/InnerPage";
import { manifesto } from "@/content/manifesto";
import { person } from "@/content/person";
import Link from "next/link";

export const metadata = pageMeta(
  "Manifesto",
  `Manifesto político de ${person.publicName}, apresentado na caminhada eleitoral de 2026.`,
  "/manifesto",
);

function PdfLink({ className }: { className: string }) {
  return (
    <a
      className={className}
      href={manifesto.pdfHref}
      download
      target="_blank"
      rel="noreferrer"
    >
      {manifesto.pdfLabel}
    </a>
  );
}

export default function ManifestoPage() {
  return (
    <article className="manifesto-page">
      <header className="manifesto-hero">
        <p className="kicker kicker-on-dark">Manifesto de 2026</p>
        <h1 className="manifesto-title">{manifesto.title}</h1>
        <p className="manifesto-hero-line">{manifesto.refrain}</p>
        <div className="hero-actions">
          <a
            href={manifesto.participationHref}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            {manifesto.participationLabel}
          </a>
          <PdfLink className="btn btn-light" />
          <Link href="/contato" className="btn btn-ghost-light">
            Fale com a equipe
          </Link>
        </div>
      </header>

      {manifesto.sections.map((section) => {
        if (section.kind === "opening") {
          return (
            <section
              key={section.id}
              className="manifesto-block manifesto-opening"
              aria-labelledby="manifesto-lede"
            >
              <p id="manifesto-lede" className="manifesto-lede">
                {section.lede}
              </p>
              <ul className="manifesto-names">
                {section.names.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="manifesto-prose">
                  {paragraph}
                </p>
              ))}
            </section>
          );
        }

        if (section.kind === "identity") {
          return (
            <section
              key={section.id}
              className="manifesto-block manifesto-identity"
              aria-labelledby="manifesto-name"
            >
              <p className="manifesto-kicker">{section.kicker}</p>
              <h2 id="manifesto-name" className="manifesto-name-line">
                {section.nameLine}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="manifesto-prose">
                  {paragraph}
                </p>
              ))}
            </section>
          );
        }

        if (section.kind === "context") {
          return (
            <section key={section.id} className="manifesto-block manifesto-context">
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === section.paragraphs.length - 1
                      ? "manifesto-turn"
                      : "manifesto-prose"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </section>
          );
        }

        if (section.kind === "litany") {
          return (
            <section
              key={section.id}
              className="manifesto-litany-wrap"
              aria-labelledby="manifesto-refrain"
            >
              <p id="manifesto-refrain" className="manifesto-refrain">
                {section.refrain}
              </p>
              <ol className="manifesto-litany">
                {section.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ol>
            </section>
          );
        }

        if (section.kind === "program") {
          return (
            <section key={section.id} className="manifesto-block manifesto-program">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="manifesto-prose">
                  {paragraph}
                </p>
              ))}
            </section>
          );
        }

        return (
          <section
            key={section.id}
            className="manifesto-invitation"
            aria-labelledby="manifesto-close"
          >
            <div className="manifesto-block">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="manifesto-prose">
                  {paragraph}
                </p>
              ))}
              <ul className="manifesto-call">
                {section.call.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="manifesto-walk">{section.walkWithMe}</p>
              <p className="manifesto-prose">{section.because}</p>
            </div>
            <p className="manifesto-refrain manifesto-refrain-end">
              {section.refrain}
            </p>
            <div className="manifesto-block manifesto-close-copy">
              <p className="manifesto-stand">{section.stand}</p>
              <p className="manifesto-prose">{section.hands}</p>
              <p id="manifesto-close" className="manifesto-closing">
                {section.closing}
              </p>
              <div className="hero-actions">
                <PdfLink className="btn btn-primary" />
                <a
                  href={manifesto.participationHref}
                  className="btn btn-outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {manifesto.participationLabel}
                </a>
              </div>
            </div>
          </section>
        );
      })}
    </article>
  );
}
