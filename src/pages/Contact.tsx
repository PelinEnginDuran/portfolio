import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"

interface Props {
  lang: "en" | "tr"
}

const SERVICE_ID = "service_atyz0vo"
const TEMPLATE_ID = "template_eqcufrb"
const PUBLIC_KEY = "FRfzF8boL_71hZnti"

export default function Contact({ lang }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const messageRef = useRef<HTMLParagraphElement | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const scrollToMessage = () => {
    setTimeout(() => {
      messageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      })
    }, 100)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    // VALIDATION
    if (!form.name.trim()) {
      setError("Name is required ❌")
      scrollToMessage()
      return
    }

    if (!isValidEmail(form.email)) {
      setError("Valid email is required ❌")
      scrollToMessage()
      return
    }

    if (!form.message.trim()) {
      setError("Message is required ❌")
      scrollToMessage()
      return
    }

    // RATE LIMIT
    const lastSent = localStorage.getItem("last_sent")
    const now = Date.now()

    if (lastSent && now - Number(lastSent) < 10000) {
      setError("Please wait a few seconds before sending again ⏳")
      scrollToMessage()
      return
    }

    localStorage.setItem("last_sent", String(now))

    setLoading(true)

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message
        },
        PUBLIC_KEY
      )
      .then(() => {
        setSuccess(true)
        setError(null)
        setForm({ name: "", email: "", message: "" })

        scrollToMessage()
      })
      .catch((err) => {
        console.log("Email error:", err)
        setError("Failed to send message ❌")

        scrollToMessage()
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const text = {
    en: {
      title: "Contact Me",
      description:
        "Feel free to reach out for collaborations or just a friendly hello 👋"
    },
    tr: {
      title: "Benimle İletişime Geçin",
      description:
        "İş birliği teklifleri veya sadece dostça bir merhaba için çekinmeden iletişime geçin 👋"
    }
  }

  return (
    <div className="container contact">
      <div className="info-upper">
        <a className="info-item" href="tel:+905343920114">
          <span>📞</span>
          <div>
            <p>Ara</p>
            <small>+90 5343920114</small>
          </div>
        </a>

        <a
          className="info-item"
          href="https://www.google.com/maps/place/Tekirdağ"
          target="_blank"
        >
          <span>📍</span>
          <div>
            <p>Location</p>
            <small>Tekirdağ, Türkiye</small>
          </div>
        </a>

        <a
          className="info-item"
          href="https://github.com/PelinEnginDuran"
          target="_blank"
        >
          <span>💻</span>
          <div>
            <p>GitHub</p>
            <small>/PelinEnginDuran</small>
          </div>
        </a>

        <a
          className="info-item"
          href="https://www.linkedin.com/in/pelin-engin-duran-760580231/"
          target="_blank"
        >
          <span>🔗</span>
          <div>
            <p>LinkedIn</p>
            <small>Profile</small>
          </div>
        </a>
      </div>

      <h1>{text[lang].title}</h1>

      <p>{text[lang].description}</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {success && (
        <p ref={messageRef} className="success">
          Message sent successfully ✔
        </p>
      )}

      {error && (
        <p ref={messageRef} className="error">
          {error}
        </p>
      )}
    </div>
  )
}