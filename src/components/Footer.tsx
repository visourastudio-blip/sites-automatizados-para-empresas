import visuoraLogo from "@/assets/visuora-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={visuoraLogo} alt="Visuora Studio" className="h-10 w-10 object-contain" />
            <div>
              <p className="font-bold text-foreground">VISUORA STUDIO</p>
              <p className="text-xs text-muted-foreground">Sites Automatizados para Empresas</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#metodo" className="hover:text-foreground transition-colors">
              Método
            </a>
            <a href="#sobre" className="hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </a>
            <a href="#contato" className="hover:text-foreground transition-colors">
              Contato
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Visuora Studio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
