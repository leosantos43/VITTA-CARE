
import React from 'react';
import { Target, Eye, ShieldCheck } from 'lucide-react';

const MissionVisionValues: React.FC = () => {
  const items = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Nossa Missão",
      desc: "Oferecer cuidado humanizado de excelência, unindo tecnologia e afeto para garantir a dignidade e o bem-estar dos idosos em seu próprio lar."
    },
    {
      icon: <Eye className="w-8 h-8 text-emerald-600" />,
      title: "Nossa Visão",
      desc: "Ser a referência nacional em Senior Care, transformando a percepção do envelhecimento através de soluções inovadoras e acolhedoras."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Nossos Valores",
      desc: "Empatia profunda, integridade absoluta, inovação tecnológica, transparência total e segurança inegociável em cada atendimento."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 reveal">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold text-blue-950 mb-4">{item.title}</h4>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
