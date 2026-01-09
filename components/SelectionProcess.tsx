
import React from 'react';
import { UserSearch, FileCheck, Brain, Handshake, ShieldCheck } from 'lucide-react';

const SelectionProcess: React.FC = () => {
  const steps = [
    { icon: <UserSearch />, title: "Triagem Curricular", desc: "Análise detalhada de experiência e formações em geriatria." },
    { icon: <FileCheck />, title: "Verificação de Antecedentes", desc: "Checagem rigorosa de referências e antecedentes criminais." },
    { icon: <Brain />, title: "Avaliação Psicológica", desc: "Testes de perfil comportamental, paciência e empatia." },
    { icon: <ShieldCheck />, title: "Treinamento VITTA", desc: "Capacitação em protocolos de emergência e humanização." },
    { icon: <Handshake />, title: "Match Familiar", desc: "Apresentamos o profissional que melhor se adapta à rotina da casa." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 reveal">
          <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">Segurança Absoluta</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-blue-950 mb-6">Nosso rigoroso processo de seleção</h3>
          <p className="text-slate-600 text-lg">
            Apenas 5% dos candidatos são aprovados para integrar a nossa equipe. Priorizamos a segurança e a paz de espírito da sua família.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4 reveal">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group p-6 rounded-3xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {/* Fixed TypeScript error by casting to React.ReactElement<any> to allow 'size' prop in cloneElement */}
                {React.cloneElement(step.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h4 className="text-lg font-bold text-blue-950 mb-3 text-center">{step.title}</h4>
              <p className="text-slate-500 text-sm text-center leading-relaxed">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 -right-2 w-4 h-0.5 bg-blue-100"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectionProcess;
