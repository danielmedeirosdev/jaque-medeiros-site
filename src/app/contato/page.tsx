import { pageMeta } from "@/components/InnerPage";
import { SocialIcon, isSocialIconId } from "@/components/SocialIcon";
import { SocialLinks } from "@/components/SocialLinks";
import { channels, contactNote } from "@/content/contact";
import { person } from "@/content/person";

export const metadata = pageMeta(
  "Contato",
  `Fale com a equipe de ${person.publicName}.`,
  "/contato",
);

export default function ContatoPage() {
  return (
    <article className="inner-page">
      <p className="kicker">Contato</p>
      <h1 className="chapter-title">Contato</h1>
      <p className="lead" style={{ marginTop: "1.4rem" }}>
        {contactNote}
      </p>
      <SocialLinks tone="dark" className="contact-social" />
      <ul className="channel-list">
        {channels.map((channel) => (
          <li key={channel.id}>
            <span className="channel-label">
              {isSocialIconId(channel.id) ? (
                <span className="channel-icon" aria-hidden="true">
                  <SocialIcon id={channel.id} />
                </span>
              ) : null}
              {channel.label}
            </span>
            {channel.href ? (
              <a
                href={channel.href}
                {...(channel.href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {channel.value}
              </a>
            ) : (
              <span className="body-muted">{channel.value}</span>
            )}
          </li>
        ))}
      </ul>
      <p className="muted-note" style={{ marginTop: "1.75rem" }}>
        {person.city}, {person.state} · {person.party.name}
      </p>
    </article>
  );
}
