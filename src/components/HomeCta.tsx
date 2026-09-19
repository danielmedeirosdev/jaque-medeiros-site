import Link from "next/link";
import { BallotMark } from "@/components/BallotMark";
import { SocialLinks } from "@/components/SocialLinks";
import { person } from "@/content/person";

export function HomeCta() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="cta-inner">
        <p className="kicker kicker-on-dark">Campanha</p>
        <h2 id="cta-title" className="cta-title">
          {person.starLine}
        </h2>
        <p className="cta-text">
          {person.publicName} é candidata a deputada estadual pelo{" "}
          {person.party.acronym}. Participe, compartilhe e fortaleça essa
          construção em {person.city} e em todo o estado de São Paulo.
        </p>
        <BallotMark tone="hero" />
        <div className="hero-actions">
          <Link href="/manifesto" className="btn btn-light">
            Ler o manifesto
          </Link>
          <Link href="/contribua" className="btn btn-ghost-light">
            Apoie a campanha
          </Link>
        </div>
        <SocialLinks tone="light" />
      </div>
    </section>
  );
}
