import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import CaseStudy from "./pages/CaseStudy"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import { useState } from "react"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

function App() {
const [lang, setLang] = useState<"en" | "tr">(() => {
  return (localStorage.getItem("lang") as "en" | "tr") || "en"
})
const changeLang = (value: "en" | "tr") => {
  setLang(value)
  localStorage.setItem("lang", value)
}

  return (
    <BrowserRouter>
      <Navbar lang={lang} changeLang={changeLang} />
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home lang={lang} />}/>
        <Route path="/projects" element={<Projects lang={lang} />}/>
        <Route path="/case/:id" element={<CaseStudy lang={lang} />}/>
        <Route path="/about" element={<About lang={lang} />}/>
        <Route path="/contact" element={<Contact lang={lang}/>}/>

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App