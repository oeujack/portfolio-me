import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const navRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [indicatorReady, setIndicatorReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIndicatorReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["inicio", "projetos", "contato"];
      const scrollPosition = window.scrollY + 200;

      if (window.scrollY < 100) {
        setActiveSection("inicio");
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      setActiveSection("inicio");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", href: "#inicio" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  const getIndicatorStyle = () => {
    const activeKey = activeSection;
    const activeElement = navRefs.current[activeKey];
    const containerElement = navRefs.current["container"];

    if (activeElement && containerElement) {
      const containerRect = containerElement.getBoundingClientRect();
      const activeRect = activeElement.getBoundingClientRect();

      return {
        left: activeRect.left - containerRect.left,
        width: activeRect.width,
      };
    }

    return { left: 0, width: 0 };
  };

  const indicatorStyle = getIndicatorStyle();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          <motion.a
            href="#inicio"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 border-2 border-foreground rounded-lg flex items-center justify-center">
              <span className="font-mono font-bold text-lg">J</span>
            </div>
            <span className="font-mono text-sm text-muted-foreground hidden sm:block">
              JACKSON
            </span>
          </motion.a>

          <div
            ref={(el) => (navRefs.current["container"] = el)}
            className="relative flex items-center gap-8"
          >
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace("#", "");
              const itemKey = item.href.replace("#", "");

              return (
                <motion.a
                  key={item.name}
                  ref={(el) => (navRefs.current[itemKey] = el)}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.2, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </motion.a>
              );
            })}

            {indicatorReady && indicatorStyle.width > 0 && (
              <motion.span
                className="absolute -bottom-1 h-0.5 bg-primary rounded-full"
                initial={{ opacity: 0 }}
                animate={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
