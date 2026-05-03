import { content } from "../data/content";

interface Props {
  lang: string;
}


export default function About({ lang }: Props) {
  const t = content[lang as "en" | "tr"]
  return (
    <div className='container about'>

      <section className="about-section">
        <h1>{t.about.title}</h1>
        {t.about.description.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </section>

      <section className="about-section">
        <h3>{t.about.techStackTitle}</h3>

        <div className="tech-grid">

          <div className="tech-item">
            <h4>{t.about.techStackFrontendTitle}</h4>
            <ul>
              {t.about.techStackFrontend.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="tech-item">
            <h4>{t.about.techStackBackendTitle}</h4>
            <ul>
              {t.about.techStackBackend.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="tech-item">
            <h4>{t.about.techStackStateManagementTitle}</h4>
            <ul>
              {t.about.techStackStateManagement.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="tech-item">
            <h4>{t.about.techStackOtherTitle}</h4>
            <ul>
              {t.about.techStackOther.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="tech-item">
            <h4>{t.about.techStackLangTitle}</h4>
            <ul>
              {t.about.techStackLang.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <section className="about-section">
        <h3>{t.about.experienceTitle}</h3>
        <p>{t.about.experience}</p>
      </section>


      <section className="about-section">
        <h3>{t.about.education}</h3>
        <ul>
          {t.about.educationInfo.map((item, i) => (
            <li key={i}>{item}</li>
          ))}</ul>
      </section>

      <section className="about-section">
        <h3>{t.about.certificate}</h3>
        <ul>
          {t.about.certificateList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="about-section">
        <h3>{t.about.goalTitle}</h3>
        <p>
          {t.about.goal}
        </p>
      </section>
    </div>
  )
}
