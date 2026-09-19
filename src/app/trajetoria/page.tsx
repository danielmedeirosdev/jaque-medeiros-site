import Link from "next/link";
import { ArchiveChapterBlock } from "@/components/ArchiveChapterBlock";
import { pageMeta } from "@/components/InnerPage";
import { person } from "@/content/person";
import { chapters, trajetoriaIntro } from "@/content/timeline";

export const metadata = pageMeta(
  "Quem é",
  `Conheça a trajetória de ${person.publicName}: jornalista, pesquisadora e candidata a deputada estadual pelo PT.`,
  "/trajetoria",
);

export default function TrajetoriaPage() {
  return (
    <>
      <header className="section" style={{ paddingBottom: 0 }}>
        <p className="kicker">Quem é</p>
        <h1 className="chapter-title">{person.publicName}</h1>
        <p className="lead" style={{ marginTop: "1.2rem", maxWidth: "40rem" }}>
          {trajetoriaIntro}
        </p>
        {person.bioParagraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="body-muted"
            style={{ marginTop: "1rem", maxWidth: "40rem" }}
          >
            {paragraph}
          </p>
        ))}
        <Link href="/manifesto" className="text-link" style={{ marginTop: "1.25rem" }}>
          Ler o manifesto
        </Link>
      </header>
      {chapters.map((chapter) => (
        <ArchiveChapterBlock key={chapter.id} chapter={chapter} />
      ))}
    </>
  );
}
