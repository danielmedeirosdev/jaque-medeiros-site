import Image from "next/image";
import { pageMeta } from "@/components/InnerPage";
import { person } from "@/content/person";
import { researchIntro, researchItems } from "@/content/research";
import { photos } from "@/lib/photos";

export const metadata = pageMeta(
  "Pesquisa",
  `Formação e pesquisa de ${person.publicName} em jornalismo científico.`,
  "/pesquisa",
);

export default function PesquisaPage() {
  return (
    <article className="section pesquisa">
      <p className="kicker">Formação</p>
      <h1 className="chapter-title">Pesquisa</h1>
      <div className="pesquisa-grid">
        <p className="lead">{researchIntro}</p>
        <div className="chapter-photo">
          <Image
            src={photos.retratoApoiada.src}
            alt={photos.retratoApoiada.alt}
            fill
            sizes="(min-width: 900px) 40vw, 100vw"
          />
        </div>
      </div>
      <ol className="research-list">
        {researchItems.map((item) => (
          <li key={item.id}>
            <p className="chapter-meta">{item.kind}</p>
            <h2>{item.title}</h2>
            <p>{item.detail}</p>
          </li>
        ))}
      </ol>
    </article>
  );
}
