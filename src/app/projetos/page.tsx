import { pageMeta } from "@/components/InnerPage";
import { person } from "@/content/person";
import { projects, projectsIntro } from "@/content/projects";

export const metadata = pageMeta(
  "Projetos",
  `Projetos e iniciativas de ${person.publicName} em pesquisa, comunicação e articulação de mulheres na ALESP.`,
  "/projetos",
);

export default function ProjetosPage() {
  return (
    <article className="inner-page">
      <p className="kicker">Trabalho</p>
      <h1 className="chapter-title">Projetos</h1>
      <p className="lead" style={{ marginTop: "1.4rem" }}>
        {projectsIntro}
      </p>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id}>
            <p className="chapter-meta">{project.period}</p>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p className="body-muted">{project.role}</p>
            {project.href ? (
              <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                Saiba mais
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </article>
  );
}
