import Image from "next/image";
import { pageMeta } from "@/components/InnerPage";
import { researchIntro, researchItems } from "@/content/research";
import { photos } from "@/lib/photos";

export const metadata = pageMeta("Pesquisa");

export default function PesquisaPage() {
  return (
    <article className="section pesquisa">
      <p className="kicker">Formação</p>
      <h1 className="chapter-title" style={{ marginTop: "0.7rem" }}>
        Pesquisa
      </h1>
      <div className="pesquisa-grid">
        <p className="intro-text">{researchIntro}</p>
        <div className="chapter-photo">
          <Image
            src={photos.retratoApoiada.src}
            alt={photos.retratoApoiada.alt}
            fill
            sizes="(min-width: 900px) 40vw, 100vw"
          />
        </div>
      </div>
      {researchItems.length === 0 ? (
        <p className="muted-note">[CONTEÚDO A DEFINIR]</p>
      ) : (
        <ol className="research-list">
          {researchItems.map((item) => (
            <li key={item.id}>
              <p className="chapter-meta">{item.kind}</p>
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
            </li>
          ))}
        </ol>
      )}
    </article>
  );
}
