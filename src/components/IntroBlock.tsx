import Image from "next/image";
import { person } from "@/content/person";
import { isPublicCopy } from "@/lib/copy";

type IntroBlockProps = {
  imageSrc: string;
  imageAlt: string;
};

export function IntroBlock({ imageSrc, imageAlt }: IntroBlockProps) {
  return (
    <section className="section" aria-labelledby="quem-e">
      <div className="intro-grid">
        <div className="intro-copy">
          <p className="kicker">Quem é Jaque</p>
          <h2 id="quem-e" className="intro-title">
            {person.publicName}
          </h2>
          {isPublicCopy(person.introText) ? (
            <p className="intro-text">{person.introText}</p>
          ) : null}
          <p className="intro-text">
            {person.city}, {person.state}. {person.party.name}.{" "}
            {person.publicContext}
          </p>
        </div>
        <figure className="intro-photo">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1100px) 42vw, 100vw"
          />
        </figure>
      </div>
    </section>
  );
}
