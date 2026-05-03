import { Link } from "react-router-dom"
import type { Project } from "../data/projects"


interface Props {
  project: Project;
  lang: string;
}

const text = {
  en: {
    case: "View Case Study"
  },
  tr: {
    case: "Detayları Gör"
  }
}

const ProjectCard = ({ project, lang }: Props) => {
  const data = project[lang as "en" | "tr"];
  return (
    <div className="project-card">

      <h3>{data.title}</h3>
      <p className="intro">{data.description}</p>


      <div className="tech-stack">
        {project.tech.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <Link to={`/case/${project.id}`} 
      className="case-link">{text[lang as "en" | "tr"].case}</Link>
    </div>
  )
}

export default ProjectCard