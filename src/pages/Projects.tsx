import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projects"


interface Props { 
   lang: "en" | "tr"
}



export default function Projects({ lang }: Props) {

  const titles = {
    en: {
      title: "Projects",
      description:
        "Selected projects that demonstrate my technical skills and problem-solving approach."
      },
    tr: {
      title: "Projeler",
      description:
        "Teknik becerilerimi ve problem çözme yaklaşımımı gösteren seçilmiş projeler."
    }
  }
  return (
    <div className="container">
      <h1>{titles [lang].title}</h1>
      <p>{titles[lang].description}</p>
      
         <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} lang={lang} />
        ))}

      </div>
    </div>
  )
}

