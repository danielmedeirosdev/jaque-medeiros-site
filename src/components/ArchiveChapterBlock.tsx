import Image from "next/image";
import type { ArchiveChapter } from "@/content/timeline";

export function ArchiveChapterBlock({ chapter }: { chapter: ArchiveChapter }) {
  const isFull = chapter.layout === "full-bleed";

  return (
    <article className={`chapter ${chapter.layout}`}>
      {isFull ? (
        <>
          <div
            className={`chapter-photo full ${chapter.photo.treatment === "bw" ? "bw" : ""}`}
          >
            {chapter.photo.src ? (
              <Image
                src={chapter.photo.src}
                alt={chapter.photo.alt}
                fill
                sizes="100vw"
              />
            ) : (
              <div className="photo-placeholder">{chapter.photo.alt}</div>
            )}
          </div>
          <div className="chapter-copy overlay-copy">
            <p className="chapter-meta">{chapter.period}</p>
            <h2 className="chapter-title" style={{ marginTop: "0.7rem" }}>
              {chapter.title}
            </h2>
            <p className="intro-text" style={{ marginTop: "1.25rem" }}>
              {chapter.body}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="chapter-copy">
            <p className="chapter-meta">{chapter.period}</p>
            <h2 className="chapter-title" style={{ marginTop: "0.7rem" }}>
              {chapter.title}
            </h2>
            <p className="intro-text" style={{ marginTop: "1.25rem" }}>
              {chapter.body}
            </p>
          </div>
          <div
            className={`chapter-photo ${chapter.photo.treatment === "bw" ? "bw" : ""}`}
          >
            {chapter.photo.src ? (
              <Image
                src={chapter.photo.src}
                alt={chapter.photo.alt}
                fill
                sizes="(min-width: 900px) 55vw, 100vw"
              />
            ) : (
              <div className="photo-placeholder">{chapter.photo.alt}</div>
            )}
          </div>
        </>
      )}
    </article>
  );
}
