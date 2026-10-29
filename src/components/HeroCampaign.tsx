import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { person } from "@/content/person";

type HeroCampaignProps = {
  imageSrc: string;
  imageAlt: string;
};

export function HeroCampaign({ imageSrc, imageAlt }: HeroCampaignProps) {
  return (
    <section className="hero" aria-labelledby="hero-name">
      <div className="hero-media" aria-hidden="true">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-media-img"
        />
        <div className="hero-scrim" />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow reveal">
          {person.party.acronym} · {person.city} · {person.state}
        </p>
        <h1 id="hero-name" className="hero-name reveal reveal-delay-1">
          {person.publicName}
        </h1>
        <p className="hero-role reveal reveal-delay-2">{person.role}</p>
        <p className="hero-line reveal reveal-delay-3">{person.starLine}</p>
        <div className="hero-actions reveal reveal-delay-4">
          <Link href="/manifesto" className="btn btn-primary">
            Nossa caminhada
          </Link>
          <Link href="/trajetoria" className="btn btn-ghost">
            Conheça a Jaque
          </Link>
        </div>
        <div className="reveal reveal-delay-4">
          <SocialLinks tone="light" />
        </div>
        <p className="sr-only">{imageAlt}</p>
      </div>
    </section>
  );
}
