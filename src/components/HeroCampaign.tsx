import Image from "next/image";
import { person } from "@/content/person";

type HeroCampaignProps = {
  imageSrc: string;
  imageAlt: string;
};

export function HeroCampaign({ imageSrc, imageAlt }: HeroCampaignProps) {
  return (
    <section className="hero hero-poster" aria-labelledby="hero-name">
      <h1 id="hero-name" className="sr-only">{person.publicName}</h1>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1116}
        height={1409}
        priority
        sizes="(min-width: 1116px) 1116px, 100vw"
        className="hero-poster-image"
      />
      <a className="hero-next" href="#agradecimento">
        <span>Feche com a Jaque também</span>
        <span className="hero-next-symbol" aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
