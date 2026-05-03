import { useParams } from "react-router-dom"
import { projects } from "../data/projects"
import { Link } from "react-router-dom"

interface Props {
  lang: "en" | "tr"
}


export default function CaseStudy({ lang }: Props) {
  const { id } = useParams()
  const currentIndex = projects.findIndex(p => String(p.id) === String(id))
  const hasNext = currentIndex < projects.length - 1
  const hasPrev = currentIndex > 0
  const nextProject =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null

  const prevProject =
    currentIndex > 0
      ? projects[currentIndex - 1]
      : null


  if (currentIndex === -1) {
    return (
      <div className="container">
        <h1>Project not found</h1>
        <p>The project you are looking for does not exist</p>
      </div>
    )
  }
 const project = projects[currentIndex]
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
          
          {hasPrev && prevProject && (
            <Link to={`/case/${prevProject.id}`} className="prev">
              ← Previous
            </Link>
          )}

          {hasNext && nextProject && (
            <Link to={`/case/${nextProject.id}`} className="next">
              Next →
            </Link>
          )}
        </div>


      </div>
    </div>

  )
}



