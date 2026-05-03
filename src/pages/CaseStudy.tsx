import { useParams } from "react-router-dom"
import { useRef } from "react"
import { projects } from "../data/projects"

interface Props {
  lang: "en" | "tr"
}

export default function CaseStudy({ lang }: Props) {
  const { id } = useParams()

  const currentIndex = projects.findIndex(p => p.id === id)

  const startX = useRef(0)

  const project = projects.find((item) => item.id === id)

  if (!project || currentIndex === -1) {
    return (
      <div className="container">
        <h1>Project not found</h1>
        <p>The project you are looking for does not exist</p>
      </div>
    )
  }

  const data = project[lang]

  const next = () => {
    const nextProject = projects[currentIndex + 1]
    if (nextProject) {
      window.location.href = `/case/${nextProject.id}`
    }
  }

  const prev = () => {
    const prevProject = projects[currentIndex - 1]
    if (prevProject) {
      window.location.href = `/case/${prevProject.id}`
    }
  }

  const hasNext = currentIndex < projects.length - 1
  const hasPrev = currentIndex > 0

  // 👆 SWIPE START
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
  }

  // 👆 SWIPE END
  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX

    if (startX.current > endX + 50) next()
    if (startX.current < endX - 50) prev()
  }

  return (
    <div
      className="container case-layout"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
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
            <button onClick={prev} className="prev">
              ← Previous
            </button>
          )}

          {hasNext && (
            <button onClick={next} className="next">
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}