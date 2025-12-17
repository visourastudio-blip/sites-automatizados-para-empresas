import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/551194895563?text=Olá! Tenho interesse em um site automatizado para minha empresa.", "_blank");
  };

  return (
    <section id="contato" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Próximo Passo
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Pronto para ter um site que{" "}
            <span className="gradient-text-accent">trabalha por você?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Clique no botão abaixo e fale diretamente com nossa equipe. Faremos um diagnóstico gratuito do que sua empresa precisa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="accent"
              size="xl"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Falar pelo WhatsApp
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Resposta em até 24h • Diagnóstico gratuito
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
