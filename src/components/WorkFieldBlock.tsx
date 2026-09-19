import Image from "next/image";
import type { WorkField } from "@/content/work";

export function WorkFieldBlock({ field }: { field: WorkField }) {
  return (
    <article className="work-field">
      <p className="work-index">{field.index}</p>
      <div className="work-copy">
        <h2 className="chapter-title">{field.title}</h2>
        <p className="lead">{field.description}</p>
      </div>
      <div
        className={`chapter-photo${
          field.imageFit === "contain" ? " image-contain" : ""
        }`}
      >
        {field.imageSrc ? (
          <Image
            src={field.imageSrc}
            alt={field.imageAlt}
            fill
            sizes="(min-width: 900px) 42vw, 100vw"
          />
        ) : (
          <div className="photo-placeholder">Foto em definição</div>
        )}
      </div>
    </article>
  );
}
