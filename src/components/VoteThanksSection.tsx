import Image from "next/image";
import Link from "next/link";

export function VoteThanksSection() {
  return (
    <section className="thanks-section" aria-labelledby="thanks-title">
      <div className="thanks-copy">
        <p className="thanks-number">8.649 <span>votos</span></p>
        <h2 id="thanks-title" className="thanks-title">
          Obrigada por caminhar com a gente.
        </h2>
        <p className="thanks-text">
          Obrigada a cada pessoa que confiou, caminhou, conversou e construiu
          essa campanha. Essa votação nasceu de muitas mãos, de Campinas e de
          todo o estado de São Paulo.
        </p>
        <p className="thanks-emphasis">
          A eleição terminou. O compromisso com o nosso povo continua.
        </p>
        <Link href="/trajetoria" className="btn btn-outline">
          Conheça essa trajetória
        </Link>
      </div>
      <figure className="thanks-photo">
        <Image
          src="/photos/selecao/1LLK1939.webp"
          alt="Jaque Medeiros sorrindo, em retrato com blazer vermelho."
          fill
          sizes="(min-width: 900px) 48vw, 100vw"
          className="object-cover"
        />
      </figure>
    </section>
  );
}
