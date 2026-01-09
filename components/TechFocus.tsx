
import React from 'react';
import { Smartphone, Bell, Activity, Lock } from 'lucide-react';

const TechFocus: React.FC = () => {
  const features = [
    { icon: <Activity />, title: "Sinais Vitais", desc: "Acompanhamento diário de pressão, saturação e glicemia." },
    { icon: <Bell />, title: "Alertas em Tempo Real", desc: "Notificações imediatas sobre intercorrências ou medicação." },
    { icon: <Smartphone />, title: "App para Família", desc: "Acesso total à rotina e relatórios direto do seu celular." },
    { icon: <Lock />, title: "Dados Criptografados", desc: "Segurança total das informações de saúde do seu familiar." }
  ];

  return (
    <section id="tecnologia" className="py-24 bg-blue-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-0"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="text-emerald-400 font-bold uppercase tracking-wider text-sm mb-4">VITTA Connect</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Tecnologia que aproxima e protege</h3>
            <p className="text-blue-100/70 text-lg mb-10 leading-relaxed">
              Diferente de cuidadores particulares, a VITTA oferece um sistema de gestão digital. Você nunca fica no escuro: cada ação do cuidador é registrada e auditada pela nossa central técnica.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-emerald-400 shrink-0">
                    {/* Fixed TypeScript error by casting to React.ReactElement<any> to allow 'size' prop in cloneElement */}
                    {React.cloneElement(f.icon as React.ReactElement<any>, { size: 28 })}
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">{f.title}</h5>
                    <p className="text-blue-100/50 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal relative flex justify-center">
            {/* Mockup do App */}
            <div className="relative w-72 h-[580px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
               <div className="p-6 pt-12">
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                      <Activity size={20} />
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-slate-400">Status Agora</p>
                      <p className="text-xs font-bold text-white">Estável</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                      <p className="text-[10px] text-slate-400 mb-1">Medicação 08:00</p>
                      <p className="text-xs text-emerald-400 flex items-center gap-2">✓ Ministrada com sucesso</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                      <p className="text-[10px] text-slate-400 mb-1">Alimentação</p>
                      <p className="text-xs text-white">Café da manhã completo</p>
                    </div>
                    <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/30">
                      <p className="text-[10px] text-emerald-400 mb-1">Nota do Cuidador</p>
                      <p className="text-[11px] text-white">"D. Helena acordou bem disposta e realizou 15min de caminhada."</p>
                    </div>
                  </div>
               </div>
            </div>
            {/* Decorative Pulse */}
            <div className="absolute -z-10 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechFocus;
