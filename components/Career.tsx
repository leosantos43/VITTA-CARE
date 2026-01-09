
import React from 'react';
import carreiraVitta from '../carreira-vitta.jpg';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Career: React.FC = () => {
  return (
    <section id="carreira" className="py-16 md:py-32 bg-blue-50/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-white rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-20 shadow-2xl shadow-blue-900/10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center reveal">
          <div className="order-2 lg:order-1">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-xs md:text-sm mb-4">Trabalhe Conosco</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-6 md:mb-8 leading-tight">Você tem vocação para o cuidar?</h3>
            <p className="text-slate-600 text-lg md:text-xl mb-8 leading-relaxed">
              Buscamos profissionais que unam competência técnica e empatia. Oferecemos treinamentos constantes, plano de carreira e a satisfação de atuar em uma empresa que valoriza o ser humano.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-10">
              <div className="flex gap-4">
                <div className="bg-emerald-100 text-emerald-600 p-3 rounded-2xl shadow-sm shrink-0"><GraduationCap /></div>
                <div>
                  <h5 className="font-bold text-blue-950 text-lg">Treinamento VITTA</h5>
                  <p className="text-sm text-slate-500">Capacitação em protocolos de geriatria e emergência.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-2xl shadow-sm shrink-0"><Award /></div>
                <div>
                  <h5 className="font-bold text-blue-950 text-lg">Reconhecimento</h5>
                  <p className="text-sm text-slate-500">Valorizamos e premiamos o bom desempenho e a dedicação.</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://wa.me/5511945880272?text=Gostaria+de+enviar+meu+currículo+para+vaga+de+cuidador"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-10 py-4 md:py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95 w-full sm:w-auto"
            >
              <Briefcase size={22} />
              Enviar meu Currículo
            </a>
          </div>
          
          <div className="relative group order-1 lg:order-2">
            <div className="absolute inset-0 bg-emerald-500 rounded-[2rem] md:rounded-[3rem] rotate-3 -z-10 opacity-10"></div>
            <img 
              src={carreiraVitta} 
              alt="Profissional de saúde preparada para atendimento" 
              className="rounded-[2rem] md:rounded-[3rem] shadow-xl border border-slate-100 h-[350px] md:h-[550px] w-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
              loading="lazy"
              onError={(e) => e.currentTarget.src = "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=800"}
            />
            <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-emerald-500 text-white p-6 md:p-8 rounded-3xl shadow-2xl transform group-hover:scale-110 transition-transform">
               <p className="text-2xl md:text-3xl font-black leading-none italic">Faça Parte!</p>
               <p className="text-xs md:text-sm font-bold opacity-90 mt-2 uppercase tracking-widest">Vagas em Aberto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
