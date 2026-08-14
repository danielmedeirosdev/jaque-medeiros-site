import { pageMeta } from "@/components/InnerPage";
import { projects } from "@/content/projects";

export const metadata = pageMeta("Projetos");

export default function ProjetosPage() {
  return (
    <article className="inner-page">
      <p className="kicker">Trabalho</p>
      <h1 className="chapter-title" style={{ marginTop: "0.7rem" }}>
        Projetos
      </h1>
      {projects.length === 0 ? (
        <p className="intro-text" style={{ marginTop: "1.4rem" }}>
          [PROJETOS A DEFINIR]
        </p>
      ) : (
        <ul className="project-list">
          {projects.map((project) => (
            <li key={project.id}>
              <p className="chapter-meta">{project.period}</p>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <p>{project.role}</p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
