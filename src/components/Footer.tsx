import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 text-center border-t border-border">
      <p className="font-mono text-sm text-muted-foreground">
        <span className="code-comment">// Desenvolvido com</span>{" "}
        <span className="text-primary">♥</span>{" "}
        <span className="code-comment">
          por Jackson © {new Date().getFullYear()}
        </span>
      </p>
    </footer>
  );
};

export default Footer;
