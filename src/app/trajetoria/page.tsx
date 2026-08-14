import { ArchiveChapterBlock } from "@/components/ArchiveChapterBlock";
import { pageMeta } from "@/components/InnerPage";
import { chapters } from "@/content/timeline";

export const metadata = pageMeta("Trajetória");

export default function TrajetoriaPage() {
  return (
    <>
      <header className="section" style={{ paddingBottom: 0 }}>
        <p className="kicker">Arquivo</p>
        <h1 className="chapter-title" style={{ marginTop: "0.7rem" }}>
          Trajetória
        </h1>
        <p className="intro-text" style={{ marginTop: "1.2rem" }}>
          [CONTEÚDO A DEFINIR]
        </p>
      </header>
      {chapters.map((chapter) => (
        <ArchiveChapterBlock key={chapter.id} chapter={chapter} />
      ))}
    </>
  );
}
