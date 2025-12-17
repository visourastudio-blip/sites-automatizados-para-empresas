import { Palette, Cog, Target, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const features = [
    {
      icon: Palette,
      title: "Design Profissional",
      description: "Visual moderno e alinhado com a identidade da sua marca"
    },
    {
      icon: Cog,
      title: "Automação de Fluxos",
      description: "Contato, pedidos ou agendamentos funcionando automaticamente"
    },
    {
      icon: Target,
      title: "Estrutura para Conversão",
      description: "Pensado para transformar visitantes em clientes"
    }
  ];

  const benefits = [
    "Atendimento automatizado 24h",
    "Menos trabalho manual",
    "Mais controle do seu negócio",
    "Independência de terceiros"
  ];

  return (
    <section id="metodo" className="py-20 md:py-32 relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              A Solução
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Método <span className="gradient-text">Site Operacional</span> Visuora
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Um processo que une design, automação e conversão — entregue de forma simples, funcional e adaptada à realidade de cada empresa.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">O que você ganha</h3>
                <p className="text-muted-foreground mb-6">
                  Um site que funciona como uma extensão do seu negócio, não apenas como um cartão de visitas online.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl" />
                  <div className="relative bg-secondary rounded-2xl p-8 border border-border">
                    <div className="text-center">
                      <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                      <p className="text-muted-foreground text-sm">Adaptado ao seu negócio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              variant="hero"
              size="xl"
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              Quero Aplicar o Método
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
