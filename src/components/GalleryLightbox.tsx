"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import type { PhotoRecord } from "@/lib/photos";

export function GalleryLightbox({ photos }: { photos: PhotoRecord[] }) {
  const labelId = useId();
  const [index, setIndex] = useState<number | null>(null);
  const current = index === null ? null : photos[index];

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => {
    setIndex((value) =>
      value === null ? value : (value + photos.length - 1) % photos.length,
    );
  }, [photos.length]);
  const next = useCallback(() => {
    setIndex((value) =>
      value === null ? value : (value + 1) % photos.length,
    );
  }, [photos.length]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, prev, next]);

  return (
    <>
      <div className="gallery-edit">
        {photos.map((photo, photoIndex) => (
          <figure
            key={photo.id}
            className={photoIndex % 5 === 1 ? "gallery-edit-wide" : undefined}
          >
            <button
              type="button"
              className="gallery-open"
              onClick={() => setIndex(photoIndex)}
            >
              <span className="gallery-frame">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 900px) 50vw, 100vw"
                />
              </span>
            </button>
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>

      {current ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelId}
        >
          <p id={labelId} className="sr-only">
            {current.alt}
          </p>
          <button type="button" className="lightbox-close" onClick={close}>
            Fechar
          </button>
          <button type="button" className="lightbox-nav prev" onClick={prev}>
            Anterior
          </button>
          <div className="lightbox-stage">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
            />
          </div>
          <button type="button" className="lightbox-nav next" onClick={next}>
            Próxima
          </button>
        </div>
      ) : null}
    </>
  );
}
