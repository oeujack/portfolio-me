import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.a
            href="#home"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 border-2 border-foreground rounded-lg flex items-center justify-center">
              <span className="font-mono font-bold text-sm">J</span>
            </div>
            <span className="font-mono text-sm text-muted-foreground">
              JACKSON
            </span>
          </motion.a>

          <p className="font-mono text-muted-foreground text-xs">
            <span className="syntax-comment">
              {`// © ${currentYear} Jackson. All rights reserved.`}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
