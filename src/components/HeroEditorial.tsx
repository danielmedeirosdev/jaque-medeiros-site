import Image from "next/image";
import { person } from "@/content/person";
import { isPublicCopy } from "@/lib/copy";

type HeroEditorialProps = {
  imageSrc: string;
  imageAlt: string;
};

export function HeroEditorial({ imageSrc, imageAlt }: HeroEditorialProps) {
  return (
    <section className="hero" aria-labelledby="hero-name">
      <div className="hero-copy">
        <p className="hero-context">
          {person.city} · {person.state}
        </p>
        <h1 id="hero-name" className="hero-name">
          Jaque
          <br />
          Medeiros
        </h1>
        <p className="hero-full">{person.fullName}</p>
        {isPublicCopy(person.openingLine) ? (
          <p className="hero-line">{person.openingLine}</p>
        ) : null}
      </div>
      <figure className="hero-photo">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          unoptimized
          sizes="(min-width: 1100px) 54vw, 100vw"
        />
      </figure>
    </section>
  );
}
