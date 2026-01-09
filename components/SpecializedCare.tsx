
import React from 'react';
import { Heart, Activity, Brain, UserPlus } from 'lucide-react';

const SpecializedCare: React.FC = () => {
  const cares = [
    {
      icon: <Brain />,
      title: "Alzheimer e Demências",
      desc: "Abordagem especializada para lidar com os desafios cognitivos e comportamentais, mantendo a calma e a dignidade."
    },
    {
      icon: <Activity />,
      title: "Pós-Operatório",
      desc: "Cuidados intensivos para garantir uma recuperação rápida, segura e sem complicações no ambiente familiar."
    },
    {
      icon: <Heart />,
      title: "Cuidados Paliativos",
      desc: "Foco total no conforto, controle de sintomas e suporte emocional tanto para o idoso quanto para a família."
    },
    {
      icon: <UserPlus />,
      title: "Limitações Físicas",
      desc: "Auxílio em mobilidade reduzida, prevenção de escaras e suporte em todas as atividades de vida diária."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">Especializações</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-blue-950 mb-6">Expertise em casos complexos</h3>
          <p className="text-slate-600 text-lg">
            Nossa equipe é treinada para protocolos específicos, garantindo que cada condition de saúde receba o manejo técnico adequado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
          {cares.map((care, idx) => (
            <div key={idx} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all group">
              <div className="text-blue-600 mb-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {/* Fixed TypeScript error by casting to React.ReactElement<any> to allow 'size' prop in cloneElement */}
                {React.cloneElement(care.icon as React.ReactElement<any>, { size: 28 })}
              </div>
              <h4 className="text-xl font-bold text-blue-950 mb-4">{care.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{care.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedCare;
