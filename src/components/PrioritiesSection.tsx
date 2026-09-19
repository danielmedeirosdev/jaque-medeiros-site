import Link from "next/link";
import { workFields, workIntro } from "@/content/work";

function ProposalIcon({ id }: { id: string }) {
  if (id === "saude-sem-racismo") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M27 8h10v14h14v10H37v14H27V32H13V22h14V8Z" />
        <path d="M18 42c5 0 9 3 14 10 5-7 9-10 14-10 6 0 10 4 10 10 0 8-9 14-24 23C17 66 8 60 8 52c0-6 4-10 10-10Z" />
      </svg>
    );
  }

  if (id === "tarifa-zero") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M16 8h32c6 0 10 4 10 10v27H6V18C6 12 10 8 16 8Zm0 9v13h32V17H16Zm1 34a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm42 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM14 36h9v5h-9v-5Zm27 0h9v5h-9v-5Z" />
      </svg>
    );
  }

  if (id === "educacao-igualdade-racial") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M7 12c10-3 19-1 25 5 6-6 15-8 25-5v39c-10-3-19-1-25 5-6-6-15-8-25-5V12Zm8 9v21c5 0 9 1 13 3V24c-4-2-8-3-13-3Zm34 0c-5 0-9 1-13 3v21c4-2 8-3 13-3V21Z" />
      </svg>
    );
  }

  if (id === "ciencia-publica") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="5" />
        <path d="M32 7c9 0 16 11 16 25S41 57 32 57 16 46 16 32 23 7 32 7Zm0 7c-4 0-9 7-9 18s5 18 9 18 9-7 9-18-5-18-9-18Z" />
        <path d="M10 19c5-8 18-8 30-1s19 18 14 26-18 8-30 1S5 27 10 19Zm6 4c-2 4 3 11 12 16s18 6 20 1-3-11-12-16-18-6-20-1Z" />
        <path d="M54 19c5 8-2 19-14 26s-25 7-30-1 2-19 14-26 25-7 30 1Zm-6 4c-2-5-11-4-20 1S14 36 16 40s11 4 20-1 14-12 12-16Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="22" cy="20" r="9" />
      <circle cx="44" cy="20" r="9" />
      <path d="M5 51c0-10 7-18 17-18s17 8 17 18H5Z" />
      <path d="M25 51c0-10 8-18 19-18s15 8 15 18H25Z" />
    </svg>
  );
}

export function PrioritiesSection() {
  return (
    <section className="section priorities" aria-labelledby="propostas">
      <div className="section-head">
        <p className="kicker">Propostas</p>
        <h2 id="propostas" className="section-title">
          Bandeiras para São Paulo
        </h2>
        <p className="lead narrow">{workIntro}</p>
      </div>

      <ol className="priority-list">
        {workFields.map((field) => (
          <li key={field.id} className="priority-item">
            <div className="priority-icon">
              <ProposalIcon id={field.id} />
            </div>
            <div className="priority-copy">
              <span className="priority-index">{field.index}</span>
              <h3 className="priority-title">{field.title}</h3>
              <p>{field.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="section-foot">
        <Link href="/atuacao" className="btn btn-primary">
          Ver propostas
        </Link>
      </div>
    </section>
  );
}
