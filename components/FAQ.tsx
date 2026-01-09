
import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-blue-600 transition-colors"
      >
        <span className="text-lg font-bold text-blue-950">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-emerald-500" /> : <Plus className="w-5 h-5 text-blue-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Como é feita a substituição do cuidador em caso de falta?",
      answer: "Temos uma equipe de reserva técnica. Caso o cuidador titular não possa comparecer por motivo de força maior, a VITTA garante a substituição imediata por outro profissional qualificado para que o idoso nunca fique desamparado."
    },
    {
      question: "Os cuidadores são funcionários da VITTA?",
      answer: "Sim, todos os nossos profissionais passam pelo nosso processo de gestão, treinamento e acompanhamento próximo, garantindo que os protocolos de segurança e humanização da VITTA sejam seguidos rigorosamente."
    },
    {
      question: "Como acompanho a rotina do meu familiar?",
      answer: "Mantemos um Diário de Cuidados detalhado no domicílio, onde o cuidador registra alimentação, sinais vitais, medicação e atividades. Além disso, nossa supervisão mantém contato direto com a família para atualizações constantes."
    },
    {
      question: "Vocês atendem em finais de semana e feriados?",
      answer: "Sim, nosso atendimento é 24 horas por dia, 7 dias por semana, incluindo feriados. Temos plantões personalizados de acordo com a necessidade específica de cada família."
    },
    {
      question: "Qual o prazo para iniciar o atendimento?",
      answer: "Geralmente conseguimos organizar a equipe e iniciar o atendimento em até 48 horas após a avaliação inicial da família."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">Dúvidas Frequentes</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-blue-950 mb-8 leading-tight">Transparência em cada detalhe</h3>
            <p className="text-slate-600 text-lg mb-8">
              Ainda tem dúvidas sobre como podemos ajudar? Entre em contato diretamente com nossa equipe técnica pelo WhatsApp.
            </p>
            <a
              href="https://wa.me/5511945880272"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-4 transition-all"
            >
              Falar com um especialista <ChevronDown className="-rotate-90 w-5 h-5" />
            </a>
          </div>
          
          <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] reveal">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
