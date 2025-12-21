export default [
  {
    type: "folder",
    name: "src",
    children: [
      {
        type: "file",
        name: "index.html",
        content: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Lutfi Andika — Portfolio</title>
  <link rel="stylesheet" href="/styles/global.css" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div id="app"></div>

  <script type="module" src="/src/main.jsx"></script>

  <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css"/>
  <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      if (window.AOS) AOS.init();
    });
  </script>
</body>
</html>`,
      },

      {
        type: "file",
        name: "main.jsx",
        content: `import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./styles/tailwind.css";

createRoot(document.getElementById("app")).render(<App />);`,
      },

      {
        type: "file",
        name: "App.jsx",
        content: `import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeSection from "./pages/HomeSection";
import AboutSection from "./pages/AboutSection";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="app-root">
        <HomeSection />
        <Projects />
        <Experience />
        <AboutSection />
      </div>
      <Footer />
    </>
  );
}`,
      },

      {
        type: "folder",
        name: "pages",
        children: [
          {
            type: "file",
            name: "HomeSection.jsx",
            content: `import React from "react";
import "../styles/home.css";
import "aos/dist/aos.css";

export default function HomeSection() {
  return (
    <section className="home-terminal" id="home">
      <div className="terminal-card" data-aos="fade-up">
        <div className="terminal-header">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <p className="terminal-title">portfolio.exe</p>
        </div>
        <div className="terminal-body">
<pre>
$ ./start --hello
console.log("Hi, I'm Lutfi — Frontend Developer & UI/UX Enthusiast")
console.log("I build fast, modern and responsive websites")
</pre>
        </div>
      </div>
    </section>
  );
}`,
          },

          {
            type: "file",
            name: "AboutSection.jsx",
            content: `import React from "react";

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 data-aos="fade-up">About Me</h2>
        <p data-aos="fade-up">
         Halo, saya Lutfi Andika seorang pelajar dari SMK TELEKOMUNIKASI TELESANDI BEKASI yang fokus mendalami dunia 
         front-end development dan desain digital.
        </p>

        <ul className="skills-list" data-aos="fade-up">
          <li>HTML • CSS • JavaScript</li>
          <li>Bootstrap • Tailwind • Flowbite • UI Verse</li>
          <li>React • TSX • AOS Animation</li>
          <li>PHP • Laravel • MySQL</li>
          <li>Git & GitHub</li>
        </ul>

        <h3 data-aos="fade-up">Services</h3>
        <ul className="skills-list" data-aos="fade-up">
          <li>Frontend Development</li>
          <li>UI / UX Design</li>
          <li>Poster Digital</li>
        </ul>
      </div>
    </section>
  );
}`,
          },

          {
            type: "file",
            name: "Projects.jsx",
            content: `import React from "react";

export default function Projects() {
  const projects = [
    { id: 1, name: "D&DiShop", link: "https://websiteddishop.netlify.app/", tech: ["React","CSS"] },
    { id: 2, name: "Webkraf", link: "https://lutfi-dika.github.io/Website-Kreatif/", tech: ["React","CSS"] },
    { id: 3, name: "Web SMK TELESANDI", link: "https://lutfi-dika.github.io/SMK-TELEKOMUNIKASI-TELESANDI-BEKASI/", tech: ["React","CSS"] },
    { id: 4, name: "Portofolio", link: "https://lutfi-dika.github.io/MY-Portofolio/", tech: ["React","CSS"] },
    { id: 5, name: "CakraLogy", link: "https://lutfi-dika.github.io/cakralogy/", tech: ["React","CSS"] },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 data-aos="fade-up">Projects</h2>

        <div className="project-grid">
          {projects.map(p => (
            <a href={p.link} target="_blank" key={p.id} className="project-card" data-aos="zoom-in">
              <h3>{p.name}</h3>
              <small>{p.tech.join(", ")}</small>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}`,
          },

          {
            type: "file",
            name: "Experience.jsx",
            content: `import React from "react";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 data-aos="fade-up">Experience</h2>
        <ul data-aos="fade-up">
          <li>Owner : Webkraf ( Website </li>
          <li>Poster Digital & Branding</li>
          <li>Junior Frontend React Developer</li>
        </ul>
      </div>
    </section>
  );
}`,
          },
          {
            type: "file",
            name: "Contact.jsx",
            content: `import React from "react";
import "aos/dist/aos.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 data-aos="fade-up">Contact Me</h2>
        <p data-aos="fade-up" className="contact-desc">
          Punya proyek atau ingin bekerja sama?
          Jangan ragu untuk menghubungi saya 👇
        </p>

        <div className="contact-grid">

          <a
            href="mailto:lutfiandika526@gmail.com"
            className="contact-card"
            data-aos="zoom-in"
          >
            📧 Email
            <span className="small">lutfiandika526@gmail.com</span>
          </a>

          <a
            href="https://wa.me/6285135977841"
            target="_blank"
            className="contact-card"
            data-aos="zoom-in"
          >
            💬 WhatsApp
            <span className="small">Chat Now</span>
          </a>

          <a
            href="https://github.com/lutfi-dika"
            target="_blank"
            className="contact-card"
            data-aos="zoom-in"
          >
            🧑‍💻 GitHub
            <span className="small">github.com/lutfi-dika</span>
          </a>

                  <a
          href="https://www.instagram.com/303.andika/"
          target="_blank"
          className="contact-card"
          data-aos="zoom-in"
        >
          📸 Instagram
          <span className="small">@303.andika</span>
        </a>

        </div>
      </div>
    </section>
  );
}`,
          },
        ],
      },

      {
        type: "folder",
        name: "components",
        children: [
          {
            type: "file",
            name: "Navbar.jsx",
            content: `import React,{useState} from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="logo">Lutfi.dev</div>
      <nav className={\`links \${open ? "open" : ""}\`}>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
      </nav>
      <button className="hamburger" onClick={()=>setOpen(s=>!s)}>☰</button>
    </header>
  );
}`,
          },

          {
            type: "file",
            name: "Footer.jsx",
            content: `import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; ${new Date().getFullYear()} Lutfi Andika — Built with ❤️</p>
    </footer>
  );
}`,
          },

          {
            type: "file",
            name: "CodeCard.jsx",
            content: `import React from "react";

export default function CodeCard({title, code}) {
  return (
    <div className="code-card">
      <h4>{title}</h4>
      <pre><code>{code}</code></pre>
    </div>
  );
}`,
          },

          {
            type: "file",
            name: "Sidebar.jsx",
            content: `import React from "react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="icons">📁 🔍 🐞 ⚙️</div>
    </aside>
  );
}`,
          },
        ],
      },

      {
        type: "folder",
        name: "styles",
        children: [
          {
            type: "file",
            name: "global.css",
            content: `:root{
  --bg:#0b1020;
  --panel:#111317;
  --muted:#9aa9bf;
  --accent:#00eaff;
}
*{box-sizing:border-box}
body{
  margin:0;
  font-family:"Inter",system-ui,"Fira Code",monospace;
  background:linear-gradient(180deg,#07102a,#021021);
  color:#d4d4d4;
}
.container{max-width:1100px;margin:auto;padding:20px;}
.skills-list li{margin:4px 0;color:#cdd6f4;font-size:15px;}`,
          },

          {
            type: "file",
            name: "home.css",
            content: `.home-terminal{display:flex;align-items:center;justify-content:center;padding:70px 20px}
.terminal-card{width:900px;min-height:340px;background:rgba(15,20,40,0.9);border-radius:12px;box-shadow:0 10px 40px rgba(0,200,255,0.12)}
.terminal-header{display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.3)}
.terminal-body{padding:24px;font-family:"Fira Code",monospace;color:#dbeafe;font-size:16px;white-space:pre-line}`,
          },

          {
            type: "file",
            name: "tailwind.css",
            content: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
          },

          {
            type: "file",
            name: "bootstrap-custom.css",
            content: `.btn-ghost{background:transparent;border:1px solid rgba(255,255,255,0.06);color:#fff}`,
          },
        ],
      },

      {
        type: "file",
        name: "vite.config.js",
        content: `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()]
});`,
      },
    ],
  },
];
