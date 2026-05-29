import { useTranslation } from 'react-i18next';
import "../css/Projects.css";

export default function Projects() {
  const { t } = useTranslation();

  const projectData = [
    // Featured Projects
    {
      title: "tourgui-portofolio",
      description: "Modern React portfolio with AI ChatBot, multi-language support, and Vercel deployment",
      tech: ["React", "JavaScript", "Vercel"],
      link: "https://github.com/turguiabderrahim/tourgui-portofolio",
      featured: true
    },
    {
      title: t("projects.python_rpg.title"),
      description: t("projects.python_rpg.description"),
      tech: ["Python", "Logic"],
      link: "https://github.com/turguiabderrahim/Titan-Trials-Wrath-of-the-Fallen",
      featured: true
    },
    {
      title: t("projects.pomodoro.title"),
      description: t("projects.pomodoro.description"),
      tech: ["JavaScript", "CSS3"],
      link: "https://github.com/turguiabderrahim/pomodoro",
      featured: true
    },
    
    // All GitHub Projects
    {
      title: "Smart City Traffic Simulation",
      description: "Interactive 2D smart city traffic simulation with SQLite3 predictive routing and real-time telemetry",
      tech: ["Python", "SQLite3", "Simulation"],
      link: "https://github.com/turguiabderrahim/Smart-city-Traffic"
    },
    {
      title: "QuizStudio",
      description: "Interactive knowledge management assessment system with Dark/Light theme toggle",
      tech: ["Python", "Tkinter", "Desktop"],
      link: "https://github.com/turguiabderrahim/QuizStudio-Interactive-Knowledge-Management-Assessment-System"
    },
    {
      title: "Python Data Structures RPG",
      description: "Educational game mapping Tuples, Dicts, Sets to gameplay mechanics",
      tech: ["Python", "Education", "Gaming"],
      link: "https://github.com/turguiabderrahim/python-data-structures-rpg"
    },
    {
      title: "Cycle Point Manager",
      description: "Bicycle rental management system with fleet analytics and inventory valuation",
      tech: ["Python", "OOP", "Analytics"],
      link: "https://github.com/turguiabderrahim/cycle-point-manager"
    },
    {
      title: "Wrath of the Fallen GUI",
      description: "Python GUI application with interactive gameplay elements",
      tech: ["Python", "GUI"],
      link: "https://github.com/turguiabderrahim/Wrath-of-the-Fallen-GUI"
    },
    {
      title: "Store",
      description: "JavaScript-based store application",
      tech: ["JavaScript", "E-commerce"],
      link: "https://github.com/turguiabderrahim/store"
    },
    {
      title: "Tugostore",
      description: "Modern store with responsive design",
      tech: ["CSS", "HTML", "E-commerce"],
      link: "https://github.com/turguiabderrahim/Tugostore"
    },
    {
      title: "TUGOTUGO",
      description: "JavaScript application project",
      tech: ["JavaScript", "Web"],
      link: "https://github.com/turguiabderrahim/TUGOTUGO"
    },
    {
      title: "AI Portal",
      description: "TypeScript-based AI portal application",
      tech: ["TypeScript", "AI"],
      link: "https://github.com/turguiabderrahim/ai"
    },
    {
      title: "Chatbot AI",
      description: "TypeScript chatbot implementation with AI capabilities",
      tech: ["TypeScript", "AI", "Chatbot"],
      link: "https://github.com/turguiabderrahim/chatbot-ai"
    },
    {
      title: "MaxNote",
      description: "Note-taking application with clean interface",
      tech: ["HTML", "Web"],
      link: "https://github.com/turguiabderrahim/MaxNote"
    },
    {
      title: "Blog Platform",
      description: "Vue.js-based blog application",
      tech: ["Vue", "Web", "Blog"],
      link: "https://github.com/turguiabderrahim/blog"
    },
    {
      title: "Univel",
      description: "HTML-based web application",
      tech: ["HTML", "Web"],
      link: "https://github.com/turguiabderrahim/univel"
    },
    {
      title: "Marketing Leo",
      description: "Marketing website template",
      tech: ["HTML", "Web"],
      link: "https://github.com/turguiabderrahim/marketingleo"
    },
    {
      title: "Meta Audit",
      description: "HTML-based audit platform",
      tech: ["HTML", "Web"],
      link: "https://github.com/turguiabderrahim/metaaudit"
    },
    {
      title: "Meta Audit Source",
      description: "Source code for meta audit application",
      tech: ["HTML", "Web"],
      link: "https://github.com/turguiabderrahim/metaauditsrc"
    },
    {
      title: "Coinship",
      description: "Cryptocurrency-related web application",
      tech: ["HTML", "Web"],
      link: "https://github.com/turguiabderrahim/coinship"
    },
    {
      title: "Tendit",
      description: "JavaScript DApp application",
      tech: ["JavaScript", "DApp"],
      link: "https://github.com/turguiabderrahim/tendit"
    },
    {
      title: "Martian Doge",
      description: "Web-based application",
      tech: ["HTML", "Web"],
      link: "https://github.com/turguiabderrahim/martiandoge"
    },
    {
      title: "Habibi Pepe",
      description: "Creative web project",
      tech: ["HTML", "Web"],
      link: "https://github.com/turguiabderrahim/habibipepe"
    },
    {
      title: "Portofolio (Original)",
      description: "First dynamic portfolio implementation",
      tech: ["HTML", "Web"],
      link: "https://github.com/turguiabderrahim/Portofolio"
    },
    {
      title: "Webstore",
      description: "E-commerce web application",
      tech: ["Web", "E-commerce"],
      link: "https://github.com/turguiabderrahim/webstore"
    },
    {
      title: "My First Project",
      description: "Learning project with Vue.js",
      tech: ["Vue", "Learning"],
      link: "https://github.com/turguiabderrahim/myfirst-project"
    },
    {
      title: "Turguimurch",
      description: "Nuxt.js application",
      tech: ["Vue", "Nuxt"],
      link: "https://github.com/turguiabderrahim/turguimurch"
    },
    {
      title: "Nuxt.js Template",
      description: "Marketing template with Nuxt.js",
      tech: ["Vue", "Nuxt"],
      link: "https://github.com/turguiabderrahim/Nuxt.js"
    },
    {
      title: "KPOP Stack",
      description: "TypeScript-based project",
      tech: ["TypeScript", "Web"],
      link: "https://github.com/turguiabderrahim/kpop-stack"
    },
    {
      title: "Form Login",
      description: "User authentication form implementation",
      tech: ["Web", "Form"],
      link: "https://github.com/turguiabderrahim/Form-Login"
    },
    {
      title: "CSS Design",
      description: "CSS design showcase and learning project",
      tech: ["CSS", "Design"],
      link: "https://github.com/turguiabderrahim/css-design"
    },
    {
      title: "AI Chatgpt",
      description: "ChatGPT integration project",
      tech: ["TypeScript", "AI"],
      link: "https://github.com/turguiabderrahim/ai-chatgpt"
    },
    {
      title: "AIlonai",
      description: "AI application",
      tech: ["HTML", "AI"],
      link: "https://github.com/turguiabderrahim/ailonai"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">{t("projects.title")}</h2>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="card-content">
                <span className="tech-badge">{project.tech[0]}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="card-footer">
                  <div className="tech-stack">
                    {project.tech.map((t, i) => <span key={i}>{t}</span>)}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}