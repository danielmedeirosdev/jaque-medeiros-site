import { pageMeta } from "@/components/InnerPage";
import { channels, contactNote } from "@/content/contact";
import { person } from "@/content/person";

export const metadata = pageMeta("Contato");

export default function ContatoPage() {
  return (
    <article className="inner-page">
      <p className="kicker">Fale com a Jaque</p>
      <h1 className="chapter-title" style={{ marginTop: "0.7rem" }}>
        Contato
      </h1>
      <p className="intro-text" style={{ marginTop: "1.4rem" }}>
        {contactNote}
      </p>
      <ul className="channel-list">
        {channels.map((channel) => (
          <li key={channel.id}>
            <span>{channel.label}</span>
            <span>{channel.value}</span>
          </li>
        ))}
      </ul>
      <p className="muted-note">
        {person.city}, {person.state}
      </p>
    </article>
  );
}
