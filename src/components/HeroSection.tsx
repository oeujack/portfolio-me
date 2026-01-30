import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Lock } from "lucide-react";
import curriculum from "../assets/curriculum.pdf";

const HeroSection = () => {
  const codeBlockRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Animate code block lines
    if (codeBlockRef.current) {
      const lines = codeBlockRef.current.querySelectorAll(".code-line");
      gsap.fromTo(
        lines,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
          delay: 1,
        },
      );
    }
  }, []);

  const handleViewCurriculum = () => {
    window.open(`${curriculum}`, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-grid bg-code-overlay pt-20"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm text-muted-foreground mb-4"
          >
            <span className="text-primary">const</span> greeting ={" "}
            <span className="text-green-400">"Olá, visitante!"</span>;
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold mb-6 tracking-tight"
          >
            <span className="text-muted-foreground">//</span> Transformando café
            em <span className="text-primary">Código</span>
          </motion.h1>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleViewCurriculum}
              className="btn-primary"
            >
              <span className="font-mono">viewCurriculum();</span>
              <Lock className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Code Block Atualizado */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-left"
          >
            <div ref={codeBlockRef} className="code-block overflow-x-auto">
              <div className="code-line mb-2">
                <span className="syntax-comment">
                  // JACKSON :: Developer Configuration
                </span>
              </div>

              {/* const developer = { */}
              <div className="code-line">
                <span className="syntax-keyword">const</span>{" "}
                <span className="syntax-property">developer</span>{" "}
                <span className="syntax-bracket">=</span>{" "}
                <span className="syntax-bracket">{"{"}</span>
              </div>

              {/* role: "Frontend Developer" */}
              <div className="code-line pl-4">
                <span className="syntax-property">role</span>
                <span className="syntax-bracket">:</span>{" "}
                <span className="syntax-string">"Frontend Developer"</span>
                <span className="syntax-bracket">,</span>
              </div>

              {/* level: "Pleno" */}
              <div className="code-line pl-4">
                <span className="syntax-property">level</span>
                <span className="syntax-bracket">:</span>{" "}
                <span className="syntax-string">"Pleno"</span>
                <span className="syntax-bracket">,</span>
              </div>

              {/* skills: [...] */}
              <div className="code-line pl-4">
                <span className="syntax-property">skills</span>
                <span className="syntax-bracket">:</span>{" "}
                <span className="syntax-bracket">[</span>
              </div>
              <div className="code-line pl-8">
                <span className="syntax-string">
                  "Raciocínio Lógico e Fluxo"
                </span>
                <span className="syntax-bracket">,</span>
              </div>
              <div className="code-line pl-8">
                <span className="syntax-string">
                  "Código Limpo e Manutenível"
                </span>
                <span className="syntax-bracket">,</span>
              </div>
              <div className="code-line pl-8">
                <span className="syntax-string">"Arquitetura de Sistemas"</span>
                <span className="syntax-bracket">,</span>
              </div>
              <div className="code-line pl-8">
                <span className="syntax-string">
                  "Deploy de Projetos Reais"
                </span>
              </div>
              <div className="code-line pl-4">
                <span className="syntax-bracket">]</span>
                <span className="syntax-bracket">,</span>
              </div>

              {/* Separator */}
              <div className="code-line"></div>

              {/* portfolio: 4 */}
              <div className="code-line pl-4">
                <span className="syntax-property">projetos</span>
                <span className="syntax-bracket">:</span>{" "}
                <span className="syntax-value">4</span>
                <span className="syntax-bracket">,</span>
              </div>

              {/* focus: "..." */}
              <div className="code-line pl-4">
                <span className="syntax-property">focus</span>
                <span className="syntax-bracket">:</span>{" "}
                <span className="syntax-string">"Prática e Performance"</span>
                <span className="syntax-bracket">,</span>
              </div>

              {/* workflow: "..." */}
              <div className="code-line pl-4">
                <span className="syntax-property">workflow</span>
                <span className="syntax-bracket">:</span>{" "}
                <span className="syntax-string">
                  "Aprender → Criar → Iterar"
                </span>
              </div>
              <div className="code-line mt-4">
                <span className="syntax-property">nextStep</span>
                <span className="syntax-bracket">:</span>{" "}
                <span className="syntax-string">"run(Portfolio)"</span>
              </div>
              {/* }; */}
              <div className="code-line">
                <span className="syntax-bracket">{"}"}</span>
                <span className="syntax-bracket">;</span>
                <span
                  ref={cursorRef}
                  className="inline-block w-2 h-5 bg-primary animate-blink ml-1 align-middle"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
