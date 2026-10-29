import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { person } from "@/content/person";

export function HomeCta() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="cta-inner">
        <p className="kicker kicker-on-dark">Seguimos</p>
        <h2 id="cta-title" className="cta-title">
          {person.starLine}
        </h2>
        <p className="cta-text">
          A caminhada eleitoral de 2026 reuniu 8.649 votos e milhares de
          encontros. Agora, {person.publicName} segue fortalecendo essa
          construção em {person.city} e em todo o estado de São Paulo.
        </p>
        <div className="hero-actions">
          <Link href="/manifesto" className="btn btn-light">
            Ler o manifesto
          </Link>
          <Link href="/contato" className="btn btn-ghost-light">
            Fale com a equipe
          </Link>
        </div>
        <SocialLinks tone="light" />
      </div>
    </section>
  );
}
