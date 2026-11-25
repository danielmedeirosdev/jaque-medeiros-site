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
        width={1014}
        height={1280}
        priority
        sizes="(min-width: 1014px) 1014px, 100vw"
        className="hero-poster-image"
      />
    </section>
  );
}
