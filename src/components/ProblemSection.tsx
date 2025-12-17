import { XCircle } from "lucide-react";

const ProblemSection = () => {
  const notForItems = [
    {
      title: "Quer apenas um site 'por ter'",
      description: "Sites que ficam parados não geram resultados"
    },
    {
      title: "Busca a opção mais barata do mercado",
      description: "Qualidade e automação exigem investimento adequado"
    },
    {
      title: "Não está disposto a usar o site como ferramenta de negócio",
      description: "O site precisa ser parte ativa da sua operação"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
              Importante
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Este serviço <span className="text-destructive">não é para você</span> se...
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Somos seletivos porque queremos entregar resultados reais
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {notForItems.map((item, index) => (
              <div
                key={index}
                className="group glass-card rounded-xl p-6 hover:border-destructive/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-destructive/10">
                    <XCircle className="w-5 h-5 text-destructive" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
