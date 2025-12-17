import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para ter meu site pronto?",
      answer: "O prazo varia de acordo com a complexidade do projeto, mas geralmente entregamos em 1 a 2 semanas. Sites mais simples podem ficar prontos em menos tempo, enquanto projetos com automações complexas podem levar um pouco mais."
    },
    {
      question: "Preciso ter conhecimento técnico para gerenciar o site?",
      answer: "Não! Desenvolvemos tudo de forma que você consiga gerenciar o básico sem complicação. Além disso, oferecemos treinamento e suporte para que você se sinta confiante para fazer atualizações simples."
    },
    {
      question: "Quais tipos de automação vocês implementam?",
      answer: "Trabalhamos com automação de atendimento via WhatsApp, formulários inteligentes, sistemas de agendamento, carrinho de compras com pedidos automatizados, integração com redes sociais e muito mais — tudo personalizado para sua necessidade."
    },
    {
      question: "Vocês oferecem suporte após a entrega?",
      answer: "Sim! Todos os nossos projetos incluem um período de suporte pós-entrega para ajustes e dúvidas. Também oferecemos planos de manutenção para quem deseja acompanhamento contínuo."
    },
    {
      question: "Qual é o investimento para ter um site automatizado?",
      answer: "O valor depende das funcionalidades e automações necessárias para o seu negócio. Fazemos um diagnóstico inicial gratuito para entender suas necessidades e apresentar uma proposta personalizada."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32 relative">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary text-muted-foreground text-sm font-medium mb-4">
              Dúvidas Frequentes
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Perguntas que você pode ter
            </h2>
            <p className="text-muted-foreground">
              Se sua dúvida não estiver aqui, entre em contato conosco
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-border/50 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
