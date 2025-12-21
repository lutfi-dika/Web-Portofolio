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
import Contact from "./pages/Contact"; // ⭐ ADDED CONTACT IMPORT

export default function App() {
  return (
    <>
      <Navbar />
      <div className="app-root">
        <HomeSection />
        <Projects />
        <Experience />
        <AboutSection />
        <Contact /> {/* ⭐ ADDED CONTACT ROUTE */}
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
          // ... existing files ...

          {
            type: "file",
            name: "Contact.jsx",
            content: `import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 data-aos="fade-up">Contact</h2>

        <p data-aos="fade-up">
          Feel free to reach out! I'm always open for collaboration, freelance projects,  
          or just networking.
        </p>

        <div className="contact-card" data-aos="zoom-in">
          <a href="mailto:lutfiandika526@gmail.com" className="btn-contact">
            ✉ Email: lutfiandika526@gmail.com
          </a>
          <a href="https://wa.me/6285135977841" target="_blank" className="btn-contact">
            💬 WhatsApp: 6285135977841
          </a>
          <a href="https://github.com/lutfi-dika" target="_blank" className="btn-contact">
            🐱 GitHub: lutfi-dika
          </a>
          <a href="https://www.instagram.com/303.andika" target="_blank" className="btn-contact">
            📸 Instagram: @303.andika
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
          // no changes
        ],
      },

      {
        type: "folder",
        name: "styles",
        children: [
          // ... existing CSS ...

          {
            type: "file",
            name: "contact.css",
            content: `.contact{
  padding:90px 20px;
  background:#0b1020;
  text-align:center;
}
.contact h2{
  font-size:36px;
  margin-bottom:18px;
  color:#00eaff;
}
.contact p{
  color:#d7e0ff;
  margin-bottom:35px;
}
.contact-card{
  display:flex;
  flex-direction:column;
  gap:14px;
  align-items:center;
}
.btn-contact{
  background:#111317;
  color:white;
  border:1px solid #00eaff;
  padding:12px 30px;
  border-radius:6px;
  text-decoration:none;
  transition:.3s;
}
.btn-contact:hover{
  background:#00eaff;
  color:#000;
  transform:translateY(-3px);
}`,
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
