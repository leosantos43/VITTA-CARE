
import React from 'react';
import { UserCheck, Shield, Clock, Heart, Headphones } from 'lucide-react';

const Differentials: React.FC = () => {
  const diffs = [
    { icon: <Heart />, title: "Cuidado Humanizado", desc: "Tratamos cada idoso como parte da nossa própria família." },
    { icon: <UserCheck />, title: "Profissionais Qualificados", desc: "Processo rigoroso de seleção e treinamento constante." },
    { icon: <Clock />, title: "Atendimento 24h / 7 dias", desc: "Sua tranquilidade garantida a qualquer hora do dia ou da noite." },
    { icon: <Shield />, title: "Confiança e Segurança", desc: "Segurança de dados e acompanhamento direto da gestão." },
    { icon: <Headphones />, title: "Suporte à Família", desc: "Cuidamos de quem cuida, oferecendo suporte emocional e técnico." }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-emerald-400 font-bold uppercase tracking-wider text-sm mb-4">Diferenciais VITTA</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Por que escolher a VITTA Senior Care?</h3>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 reveal">
          {diffs.map((diff, idx) => (
            <div key={idx} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                {/* Fixed TypeScript error by casting to React.ReactElement<any> to allow 'size' prop in cloneElement */}
                {React.cloneElement(diff.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h4 className="text-xl font-bold mb-3">{diff.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{diff.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
