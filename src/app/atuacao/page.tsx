import { WorkFieldBlock } from "@/components/WorkFieldBlock";
import { pageMeta } from "@/components/InnerPage";
import { workFields } from "@/content/work";

export const metadata = pageMeta("Atuação");

export default function AtuacaoPage() {
  return (
    <>
      <header className="section" style={{ paddingBottom: 0 }}>
        <p className="kicker">Campos</p>
        <h1 className="chapter-title" style={{ marginTop: "0.7rem" }}>
          Atuação
        </h1>
        <p className="intro-text" style={{ marginTop: "1.2rem" }}>
          [CONTEÚDO A DEFINIR]
        </p>
      </header>
      {workFields.map((field) => (
        <WorkFieldBlock key={field.id} field={field} />
      ))}
    </>
  );
}
