
import React from 'react';
import { ChevronRight, MessageCircle, Star, ShieldCheck, Heart } from 'lucide-react';
import heroIdosa from '../hero-idosa.jpg';
import heroCuidadora from '../hero-cuidadora.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-12 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-5%] left-[-10%] w-[60%] h-[60%] bg-blue-200/20 rounded-full blur-[80px] md:blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-emerald-200/20 rounded-full blur-[80px] -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="reveal text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-xs md:text-sm font-bold mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Cuidado Especializado no Seu Lar</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-blue-950 leading-[1.1] mb-6 tracking-tight">
            Seu familiar em <br className="hidden sm:block" />
            <span className="gradient-text">Boas Mãos</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Oferecemos <span className="font-bold text-blue-900">segurança técnica</span> e <span className="font-bold text-emerald-600">afeto genuíno</span> para garantir o bem-estar de quem você ama.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://wa.me/5511945880272"
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-shimmer flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 md:py-5 rounded-2xl font-bold text-lg shadow-xl shadow-emerald-500/25 transition-all hover:-translate-y-1 active:scale-95"
            >
              <MessageCircle className="w-6 h-6" />
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center gap-2 bg-white/60 backdrop-blur-sm border-2 border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-700 px-8 py-4 md:py-5 rounded-2xl font-bold text-lg transition-all"
            >
              Nossos Serviços
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
          
          <div className="mt-10 md:mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-8 opacity-70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-blue-600 w-5 h-5" />
              <span className="text-slate-800 font-bold text-xs uppercase tracking-wider">Gestão Técnica</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-blue-600 w-5 h-5 fill-blue-600" />
              <span className="text-slate-800 font-bold text-xs uppercase tracking-wider">Equipe Própria</span>
            </div>
          </div>
        </div>

        <div className="relative reveal order-1 lg:order-2">
          <div className="relative z-10 grid grid-cols-12 gap-3 md:gap-4 items-center">
            {/* Main Image - hero-idosa.jpg */}
            <div className="col-span-8 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-[2rem] md:rounded-[3.5rem] rotate-3 -z-10 opacity-10"></div>
              <img
                src={heroIdosa}
                alt="Idosa sendo cuidada com carinho"
                className="rounded-[2rem] md:rounded-[3.5rem] shadow-2xl border-4 border-white object-cover aspect-[4/5] w-full"
                onError={(e) => e.currentTarget.src = "https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=800"}
              />
              {/* Badge flutuante */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 glass p-3 md:p-5 rounded-2xl md:rounded-3xl shadow-xl border border-white/50 animate-float hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <Heart className="fill-emerald-600" size={20} />
                  </div>
                  <div>
                    <p className="text-blue-900 font-extrabold text-sm md:text-base leading-none">Cuidado Real</p>
                    <p className="text-[10px] md:text-xs text-slate-500 font-medium mt-1">100% Humanizado</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Side Image - hero-cuidadora.jpg */}
            <div className="col-span-4 space-y-3 md:space-y-4">
              <img
                src={heroCuidadora}
                alt="Cuidadora VITTA em atendimento"
                className="rounded-2xl md:rounded-[2rem] shadow-xl border-2 border-white object-cover aspect-square w-full"
                onError={(e) => e.currentTarget.src = "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=400"}
              />
              <div className="glass p-3 md:p-4 rounded-xl md:rounded-2xl text-center shadow-lg">
                <p className="text-emerald-600 font-black text-lg md:text-xl leading-none">24h</p>
                <p className="text-[9px] md:text-[10px] text-slate-600 font-bold uppercase mt-1">Plantão</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
