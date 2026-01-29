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
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold mb-6 tracking-tight"
          >
            <span className="text-muted-foreground">//</span> Build Your Way
            Through <span className="text-primary">Code</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            A modern developer course where logic, system thinking, and
            engineering discipline shape the next generation of builders.
          </motion.p>

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

          {/* Code Block */}
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
              <div className="code-line">
                <span className="syntax-keyword">const</span>{" "}
                <span className="syntax-property">developer</span>{" "}
                <span className="syntax-bracket">=</span>{" "}
                <span className="syntax-bracket">{"{"}</span>
              </div>
              <div className="code-line pl-4">
                <span className="syntax-property">role</span>
                <span className="syntax-bracket">:</span>{" "}
                <span className="syntax-string">"fullstack developer"</span>
                <span className="syntax-bracket">,</span>
              </div>
              <div className="code-line pl-4">
                <span className="syntax-property">goal</span>
                <span className="syntax-bracket">:</span>{" "}
                <span className="syntax-string">
                  "build real-world systems"
                </span>
                <span className="syntax-bracket">,</span>
              </div>
              <div className="code-line pl-4">
                <span className="syntax-property">level</span>
                <span className="syntax-bracket">:</span>{" "}
                <span className="syntax-bracket">[</span>
                <span className="syntax-string">"intermediate"</span>
                <span className="syntax-bracket">,</span>{" "}
                <span className="syntax-string">"advanced"</span>
                <span className="syntax-bracket">]</span>
                <span className="syntax-bracket">,</span>
              </div>
              <div className="code-line"></div>
              <div className="code-line pl-4">
                <span className="syntax-property">skills</span>
                <span className="syntax-bracket">:</span>{" "}
                <span className="syntax-bracket">[</span>
              </div>
              <div className="code-line pl-8">
                <span className="syntax-string">"think in logic and flow"</span>
                <span className="syntax-bracket">,</span>
              </div>
              <div className="code-line pl-8">
                <span className="syntax-string">
                  "write clean and maintainable code"
                </span>
                <span className="syntax-bracket">,</span>
              </div>
              <div className="code-line pl-8">
                <span className="syntax-string">
                  "understand system architecture"
                </span>
                <span className="syntax-bracket">,</span>
              </div>
              <div className="code-line pl-8">
                <span className="syntax-string">
                  "build and deploy real projects"
                </span>
              </div>
              <div className="code-line pl-4">
                <span className="syntax-bracket">]</span>
                <span className="syntax-bracket">,</span>
              </div>
              <div className="code-line"></div>
              <div className="code-line pl-4">
                <span className="syntax-property">portfolio</span>
                <span className="syntax-bracket">:</span>{" "}
                <span className="syntax-bracket">{"{"}</span>
              </div>
              <div className="code-line pl-8">
                <span className="syntax-property">projects</span>
                <span className="syntax-bracket">:</span>{" "}
                <span className="syntax-value">12</span>
                <span className="syntax-bracket">,</span>
              </div>
              <div className="code-line pl-8">
                <span className="syntax-property">focus</span>
                <span className="syntax-bracket">:</span>{" "}
                <span className="syntax-string">"hands-on practice"</span>
                <span className="syntax-bracket">,</span>
              </div>
              <div className="code-line pl-8">
                <span className="syntax-property">workflow</span>
                <span className="syntax-bracket">:</span>{" "}
                <span className="syntax-string">"learn → build → iterate"</span>
              </div>
              <div className="code-line pl-4">
                <span className="syntax-bracket">{"}"}</span>
              </div>
              <div className="code-line">
                <span className="syntax-bracket">{"}"}</span>
                <span className="syntax-bracket">;</span>
              </div>
              <div className="code-line mt-4">
                <span className="syntax-property">nextStep</span>
                <span className="syntax-bracket">:</span>{" "}
                <span className="syntax-string">"run(Portfolio)"</span>
              </div>
              <div className="code-line">
                <span
                  ref={cursorRef}
                  className="inline-block w-2 h-5 bg-primary animate-blink ml-1"
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
