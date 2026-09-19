import Image from "next/image";
import Link from "next/link";
import { workFields, workIntro } from "@/content/work";

export function PrioritiesSection() {
  return (
    <section className="section priorities" aria-labelledby="propostas">
      <div className="section-head">
        <p className="kicker">Propostas</p>
        <h2 id="propostas" className="section-title">
          Bandeiras para São Paulo
        </h2>
        <p className="lead narrow">{workIntro}</p>
      </div>

      <ol className="priority-list">
        {workFields.map((field) => (
          <li key={field.id} className="priority-item">
            <div className="priority-copy">
              <span className="priority-index">{field.index}</span>
              <h3 className="priority-title">{field.title}</h3>
              <p>{field.description}</p>
            </div>
            {field.imageSrc ? (
              <figure
                className={`priority-photo${
                  field.imageFit === "contain" ? " image-contain" : ""
                }`}
              >
                <Image
                  src={field.imageSrc}
                  alt={field.imageAlt}
                  fill
                  sizes="(min-width: 900px) 38vw, 100vw"
                />
              </figure>
            ) : null}
          </li>
        ))}
      </ol>

      <div className="section-foot">
        <Link href="/atuacao" className="btn btn-primary">
          Ver propostas
        </Link>
      </div>
    </section>
  );
}
