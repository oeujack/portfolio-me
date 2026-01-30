import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "TodoList",
    category: "frontend",
    description: "Gerenciador de tarefas com persistência local e validação de formulários.",
    tech: ["TypeScript", "React", "MUI", "localStorage", "formik"],
    status: "produção",
    github: "https://github.com/oeujack/todo-list",
    url: "https://todolist8bit.vercel.app/",
  },
  {
    id: 2,
    title: "ShinobiGallery",
    category: "frontend",
    description: "Galeria interativa e imersiva explorando o universo Naruto.",
    tech: ["TypeScript", "React", "MUI", "React Bits"],
    status: "indisponivel",
    github: "https://github.com/oeujack/shinobi-gallery-app",
    // url: "https://shinobi-gallery-app.vercel.app/",
  },
  {
    id: 3,
    title: "ByteBank",
    category: "fullstack",
    description: "Simulação de dashboard bancário com gerenciamento de estado global.",
    tech: ["TypeScript", "React", "MUI", "formik", "Redux", "NodeJS", "express", "SQLite"],
    status: "produção",
    github: "https://github.com/oeujack/bytebank-app",
    url: "https://bytebank-app.vercel.app/",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, []);

  return (
    <section id="projetos" ref={sectionRef} className="relative py-32 bg-grid">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-muted-foreground text-sm mb-4 block"
          >
            // projetos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-mono font-bold"
          >
            <span className="text-muted-foreground">//</span> Meus Projetos
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card group"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="code-block hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    {/* Comment header */}
                    <div className="font-mono text-sm mb-3">
                      <span className="syntax-comment">
                        // {project.category} :: {project.status}
                      </span>
                    </div>

                    {/* Project title as function */}
                    <h3 className="font-mono text-xl mb-2">
                      <span className="syntax-keyword">export</span>{" "}
                      <span className="syntax-keyword">const</span>{" "}
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        {project.title.replace(/\s+/g, "")}
                      </span>{" "}
                      <span className="syntax-bracket">=</span>{" "}
                      <span className="syntax-bracket">{"() => {"}</span>
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground pl-4 mb-3 font-mono text-sm">
                      <span className="syntax-comment">
                        // {project.description}
                      </span>
                    </p>

                    {/* Tech stack */}
                    <div className="pl-4 font-mono text-sm">
                      <span className="syntax-keyword">return</span>{" "}
                      <span className="syntax-bracket">[</span>
                      {project.tech.map((tech, i) => (
                        <span key={tech}>
                          <span className="syntax-string">"{tech}"</span>
                          {i < project.tech.length - 1 && (
                            <span className="syntax-bracket">, </span>
                          )}
                        </span>
                      ))}
                      <span className="syntax-bracket">]</span>
                      <span className="syntax-bracket">;</span>
                    </div>

                    <div className="font-mono text-sm mt-2">
                      <span className="syntax-bracket">{"}"}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                      onClick={() => navigate(project.github)}
                    >
                      <Github className="w-5 h-5" />
                    </motion.button>
                    {project.url && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                        onClick={() => navigate(project.url)}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}           
            className="font-mono text-muted-foreground hover:text-primary transition-colors"
            onClick={() =>
              navigate("https://github.com/oeujack?tab=repositories")
            }
          >
            acessarTodosProjetos() →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
