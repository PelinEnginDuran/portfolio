import { NavLink } from "react-router-dom";
import { content } from "../data/content";

type Props = {
  lang: "en" | "tr";
  changeLang: (value: "en" | "tr") => void;
}




const Navbar =({lang, changeLang}: Props)=>{
    const t =content[lang]
    return (
        <nav className="navbar">
            <div className="nav-container">
                <h2 className="logo">
                    <span>Pelin</span>
                    <span className="surname">Engin Duran</span>
                </h2>
                <ul className="nav-links">
                    <li>
                        <NavLink to ="/">{t.nav.home}</NavLink>
                    </li>
                    <li> 
                        <NavLink to="/projects">{t.nav.projects}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">{t.nav.about}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">{t.nav.contact}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="hire-btn">{t.nav.hire}</NavLink>
                    </li>
                </ul>
                <div className="lang-switch">
                    <button
                    className={lang === "en" ? "active" :""}
                    onClick={() => changeLang("en")}>EN</button>
                    <button 
                    className={lang === "tr" ? "active" : ""}
                    onClick={() => changeLang("tr")}>TR</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar