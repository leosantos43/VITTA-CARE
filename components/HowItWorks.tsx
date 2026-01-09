
import React from 'react';
import { MessageSquare, HeartHandshake, UserPlus, PlayCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Contato rápido",
      desc: "Inicie o contato pelo WhatsApp de forma simples e direta."
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Entendimento",
      desc: "Conversamos para entender a necessidade específica da sua família."
    },
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Seleção ideal",
      desc: "Selecionamos o cuidador que melhor se adapta ao perfil do idoso."
    },
    {
      icon: <PlayCircle className="w-8 h-8" />,
      title: "Início do cuidado",
      desc: "Acompanhamento constante e relatórios diários para a família."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-blue-950 text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-emerald-400 font-bold uppercase tracking-wider text-xs md:text-sm mb-4">Fluxo de Atendimento</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Como funciona nosso processo?</h3>
          <p className="text-blue-100/70 text-lg md:text-xl">
            Garantimos uma transição tranquila e segura para a rotina de cuidados domiciliares.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 reveal">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-sm transition-all group-hover:bg-white/10 group-hover:-translate-y-2 h-full">
                <div className="text-emerald-400 mb-6 bg-emerald-400/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-blue-100/60 leading-relaxed text-sm md:text-base">{step.desc}</p>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-black shadow-lg border-4 border-blue-950 text-white text-sm">
                  {idx + 1}
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
