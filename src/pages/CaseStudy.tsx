import { useParams } from "react-router-dom"
import { projects } from "../data/projects"

interface Props{
  lang: "en" | "tr"
}



export default function CaseStudy({lang}: Props) {
  const { id } = useParams()
  const currentIndex = projects.findIndex(p => p.id === id)
  const nextProject = projects[currentIndex + 1]
  const prevProject = projects[currentIndex - 1]
  const hasNext = currentIndex < projects.length - 1
  const hasPrev = currentIndex > 0



const project = projects.find((item) => item.id === id)

if (!project) {
  return (
    <div className="container">
      <h1>Project not found</h1>
      <p>The project you are looking for does not exist</p>
    </div>
  )
}
const data = project[lang]
return (
  <div className="container case-layout">
    <div className="case-media">
      {data.images?.map((img, i) => (
        <img key={i} src={img} alt={data.title} />
      ))}
    </div>
    <div className="case-text">
      <h1>{data.title}</h1>
      <p className="case-description">{data.description}</p>
      <section>
        <h3>Problem</h3>
        <p>{data.problem}</p>

      </section>

      <section>
        <h3>Solution</h3>
        <p>{data.solution}</p>

      </section>

      <section>
        <h3>Learning</h3>
        <p>{data.learnings}</p>

      </section>
      <section>
        <h3>Technologies</h3>
        <div className="tech-stack">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
      <div className="nav-arrows">
        {hasPrev && (
          <a href={`/case/${prevProject.id}`} className="prev">
             ← Previous </a>
        )}
             {hasNext && (
              <a href={`/case/${nextProject.id}`} className="next">
                 Next → </a>
             )}
      </div>
      

    </div>
  </div>

)}



