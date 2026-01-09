
import React from 'react';
import sobreVitta from '../sobre-vitta.jpg';
import { Heart, Star, ShieldCheck, ClipboardCheck, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    { icon: <Heart className="text-emerald-500" />, text: "Humanização no DNA" },
    { icon: <ClipboardCheck className="text-blue-500" />, text: "Supervisão Técnica Constante" },
    { icon: <Star className="text-emerald-500" />, text: "Cuidadores Especialistas" },
    { icon: <ShieldCheck className="text-blue-500" />, text: "Segurança 24 Horas" },
  ];

  return (
    <section id="sobre" className="py-16 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal relative order-2 lg:order-1">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-100/50 rounded-full blur-3xl animate-blob"></div>
            <div className="relative">
              <img
                src={sobreVitta}
                alt="Cuidados Senior VITTA"
                className="rounded-[2rem] md:rounded-[3rem] shadow-2xl object-cover w-full aspect-[4/3] md:h-[500px]"
                loading="lazy"
                onError={(e) => e.currentTarget.src = "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800"}
              />
              <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 glass p-5 md:p-8 rounded-3xl shadow-2xl border border-white/50 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <CheckCircle size={32} />
                  </div>
                  <div>
                    <p className="text-blue-950 font-black text-lg md:text-xl leading-none">Qualidade VITTA</p>
                    <p className="text-slate-500 text-xs md:text-sm mt-1">Excelência em cada detalhe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal order-1 lg:order-2">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4">Conheça a VITTA</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-6 md:mb-8 leading-tight">Onde a técnica encontra o afeto</h3>
            <p className="text-slate-600 text-lg md:text-xl mb-6 leading-relaxed">
              A VITTA Senior Care nasceu da missão de transformar o envelhecimento em uma fase de plenitude e segurança, sem que o idoso precise sair do conforto do seu lar.
            </p>
            <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed">
              Nossa equipe não apenas cuida; nós acompanhamos, ouvimos e preservamos a autonomia de quem você ama, utilizando protocolos rigorosos de gestão técnica.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                  <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="font-bold text-slate-700 text-sm md:text-base leading-tight">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
