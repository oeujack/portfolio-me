const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-border">
      <p className="font-mono text-sm text-muted-foreground">
        <span className="code-comment">// Desenvolvido </span>{" "}
        <span className="code-comment">
          por Jackson © {new Date().getFullYear()}
        </span>
      </p>
    </footer>
  );
};

export default Footer;
