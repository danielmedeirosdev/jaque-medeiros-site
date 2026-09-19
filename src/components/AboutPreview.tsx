import Image from "next/image";
import Link from "next/link";
import { person } from "@/content/person";

type AboutPreviewProps = {
  imageSrc: string;
  imageAlt: string;
};

export function AboutPreview({ imageSrc, imageAlt }: AboutPreviewProps) {
  return (
    <section className="section about-preview" aria-labelledby="quem-e">
      <div className="about-grid">
        <figure className="about-photo">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 900px) 44vw, 100vw"
            className="object-cover"
          />
        </figure>
        <div className="about-copy">
          <p className="kicker">Quem é</p>
          <h2 id="quem-e" className="section-title">
            {person.publicName}
          </h2>
          {person.bioParagraphs.map((paragraph, index) => (
            <p key={paragraph} className={index === 0 ? "lead" : "body-muted"}>
              {paragraph}
            </p>
          ))}
          <Link href="/manifesto" className="text-link">
            Ler o manifesto
          </Link>
        </div>
      </div>
    </section>
  );
}
