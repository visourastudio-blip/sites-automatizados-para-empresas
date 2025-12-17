import { Quote } from "lucide-react";
import visuoraLogo from "@/assets/visuora-logo.png";

const AuthoritySection = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              {/* Logo/Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl" />
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-secondary border border-border overflow-hidden flex items-center justify-center">
                    <img src={visuoraLogo} alt="Visuora Studio" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <Quote className="w-10 h-10 text-accent/50 mb-4 mx-auto md:mx-0" />
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                  Sou fundador do Visuora Studio e desenvolvo sites automatizados focados em{" "}
                  <strong className="text-accent">resolver problemas reais de empresas</strong>, como desorganização no atendimento, dependência excessiva de redes sociais e falta de presença digital profissional.
                </blockquote>
                <p className="text-muted-foreground mb-6">
                  Cada projeto é pensado para funcionar como uma extensão do negócio, não apenas como um cartão de visitas online.
                </p>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div>
                    <p className="font-semibold text-foreground">Visuora Studio</p>
                    <p className="text-sm text-muted-foreground">Sites Automatizados para Empresas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
