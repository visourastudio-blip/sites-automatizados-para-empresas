import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import visuoraLogo from "@/assets/visuora-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <img src={visuoraLogo} alt="Visuora Studio" className="h-10 w-10 object-contain" />
            <span className="font-roboto font-bold text-lg text-foreground hidden sm:block">
              VISUORA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("metodo")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Método
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              FAQ
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="hero"
              size="default"
              onClick={() => scrollToSection("contato")}
            >
              Falar com Especialista
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border animate-fade-in">
            <div className="container py-6 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("metodo")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left py-2"
              >
                Método
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left py-2"
              >
                FAQ
              </button>
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("contato")}
                className="mt-2"
              >
                Falar com Especialista
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
