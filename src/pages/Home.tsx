import me from "../assets/portre-pelin.jpg"
import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"
import {TypeAnimation} from "react-type-animation"
import {content} from "../data/content"

interface Props {
  lang: string;
}

export default function Home({lang}: Props){
  const t = content[lang as "en" | "tr"]
  return(
    <div className="home">
      <div className="container">
<div className="hero">
  <div className="hero-content">

    {/* LEFT */}
    <div className="hero-text">
      <h1>Pelin Engin Duran</h1>

      <h2>
        <TypeAnimation
        sequence={[
          "Frontend Developer",
          1500,
           "React & TypeScript Developer",
          1500, 
          "Mobile Developer",
          1500,
          "UI Focused Developer",
          1500,
          "Building Real World Apps",
          2500,
        ]}    
        wrapper="span"
        speed={40}
        repeat={Infinity}
        />
         </h2>

      <p>
        {t.hero.description}
      </p>

      <div className="hero-buttons">
        <a href="/projects" className="btn primary">{t.hero.buttons.projects}</a>
        <a href="/contact" className="btn secondary">{t.hero.buttons.contact}</a>
      </div>
    </div>

    {/* RIGHT */}
    <div className="hero-image">
      <div className="image-wrapper">
        <img src={me} alt="Pelin" />

        <div className="badge">
      {t.hero.badge}
        </div>
      </div>
    </div>
    

  </div>
</div>
<div className="featured">
  <h2>{t.featured.title}</h2>

  <div className="project-grid">
    {projects.slice(0, 3).map((project) => (
      <ProjectCard key={project.id} project={project} lang={lang} />
    ))}
  </div>
</div>
      </div>


    </div>
  )
}

