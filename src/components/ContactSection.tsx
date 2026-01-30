import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react"; // Adicionei useState
import gsap from "gsap";
import emailjs from "@emailjs/browser"; // Import do EmailJS
import { Send } from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Estado para controlar o loading do envio
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (formRef.current && isInView) {
      const inputs = formRef.current.querySelectorAll("input, textarea");
      gsap.fromTo(
        inputs,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
      );
    }
  }, [isInView]);

  // Função que envia o email
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    emailjs.sendForm(
      'service_hhik2lf',   // Pegue no painel do EmailJS
      'template_d6aarnm',  // Pegue no painel do EmailJS
      formRef.current,
      'O2wkk9zvPtG6vKorQ'    // Pegue em Account > API Keys
    )
    .then(() => {
      alert("Mensagem enviada com sucesso! 🚀");
      formRef.current?.reset(); // Limpa o formulário
    })
    .catch((error) => {
      console.error("Erro ao enviar:", error);
      alert("Houve um erro ao enviar. Tente novamente.");
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <section id="contato" ref={sectionRef} className="relative py-32 bg-grid">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="font-mono text-muted-foreground text-sm mb-4 block"
            >
              // contato
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-mono font-bold mb-4"
            >
              <span className="text-muted-foreground">//</span> Vamos{" "}
              <span className="text-primary">Conectar</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground font-mono text-sm"
            >
              sendMessage(sua ideia) → response.collaboration
            </motion.p>
          </div>

          {/* Form as Code Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="code-block">
              <div className="font-mono text-sm mb-6">
                <span className="syntax-comment">
                  // Preencha os campos abaixo
                </span>
              </div>

              {/* Adicionei o onSubmit */}
              <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                <div>
                  <label className="block font-mono text-sm mb-2">
                    <span className="syntax-keyword">const</span>{" "}
                    <span className="syntax-property">name</span>{" "}
                    <span className="syntax-bracket">=</span>
                  </label>
                  <input
                    required // Importante para não enviar vazio
                    name="name" // Importante para o EmailJS
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-mono text-sm placeholder:text-muted-foreground/50"
                    placeholder='"Seu nome"'
                  />
                </div>

                <div>
                  <label className="block font-mono text-sm mb-2">
                    <span className="syntax-keyword">const</span>{" "}
                    <span className="syntax-property">email</span>{" "}
                    <span className="syntax-bracket">=</span>
                  </label>
                  <input
                    required
                    name="email" // Importante para o EmailJS
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-mono text-sm placeholder:text-muted-foreground/50"
                    placeholder='"seu@email.com"'
                  />
                </div>

                <div>
                  <label className="block font-mono text-sm mb-2">
                    <span className="syntax-keyword">const</span>{" "}
                    <span className="syntax-property">message</span>{" "}
                    <span className="syntax-bracket">=</span>
                  </label>
                  <textarea
                    required
                    name="message" // Importante para o EmailJS
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-mono text-sm resize-none placeholder:text-muted-foreground/50"
                    placeholder='"Conte-me sobre seu projeto..."'
                  />
                </div>

                <div className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSending} // Desabilita enquanto envia
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full btn-primary justify-center ${isSending ? 'opacity-70 cursor-wait' : ''}`}
                  >
                    <span>{isSending ? "sending..." : "sendMessage()"}</span>
                    {!isSending && <Send className="w-4 h-4" />}
                  </motion.button>
                </div>
              </form>

              <div className="font-mono text-sm mt-6">
                <span className="syntax-comment">// Respondo em até 24h</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-6 font-mono text-sm"
          >
            {[
              {
                label: "github",
                value: "@oeujack",
                url: "https://github.com/oeujack",
              },
              {
                label: "linkedin",
                value: "/in/jackson-dos-santos",
                url: "https://www.linkedin.com/in/jackson-dos-santos/",
              },
              { label: "email", value: "contato.jacksondsantos@gmail.com", url: "mailto:contato.jacksondsantos@gmail.com" },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                whileHover={{ y: -2 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="syntax-property">{link.label}</span>
                <span className="syntax-bracket">:</span>{" "}
                <span className="syntax-string">"{link.value}"</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;