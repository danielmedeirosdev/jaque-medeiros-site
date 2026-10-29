import { WorkFieldBlock } from "@/components/WorkFieldBlock";
import { pageMeta } from "@/components/InnerPage";
import { person } from "@/content/person";
import { workFields, workIntro } from "@/content/work";

export const metadata = pageMeta(
  "Propostas",
  `Bandeiras que orientam a atuação política de ${person.publicName} em Campinas e São Paulo.`,
  "/atuacao",
);

export default function AtuacaoPage() {
  return (
    <>
      <header className="section" style={{ paddingBottom: 0 }}>
        <p className="kicker">Propostas</p>
        <h1 className="chapter-title">Bandeiras de atuação</h1>
        <p className="lead" style={{ marginTop: "1.2rem", maxWidth: "40rem" }}>
          {workIntro}
        </p>
      </header>
      {workFields.map((field) => (
        <WorkFieldBlock key={field.id} field={field} />
      ))}
    </>
  );
}
