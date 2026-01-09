
import React from 'react';
import { Calendar, CheckCircle2, Zap } from 'lucide-react';

const Plans: React.FC = () => {
  return (
    <section id="planos" className="py-20 md:py-32 bg-slate-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4">Investimento</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-blue-950 mb-6">Planos que cabem na sua rotina</h3>
          <p className="text-slate-600 text-lg">Flexibilidade total para que sua família receba o suporte necessário sem burocracia.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto reveal">
          {/* Daily Plan */}
          <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col group">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-50 text-blue-600 p-4 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Calendar className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-blue-950">Plano Diário</h4>
                <p className="text-slate-400 font-medium text-sm">Necessidades Pontuais</p>
              </div>
            </div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {["Eventual e Pontual", "Acompanhamento em exames", "Substituição temporária", "Pós-operatório imediato"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/5511945880272"
              className="w-full py-5 rounded-2xl bg-slate-100 text-slate-800 font-bold text-center hover:bg-blue-900 hover:text-white transition-all shadow-sm"
            >
              Consultar Diária
            </a>
          </div>

          {/* Monthly Plan */}
          <div className="bg-blue-950 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col group">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white px-6 py-2 rounded-bl-3xl font-bold text-xs uppercase tracking-widest">
              Recomendado
            </div>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-white/10 text-emerald-400 p-4 rounded-2xl border border-white/10">
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">Plano Mensal</h4>
                <p className="text-emerald-400/70 font-medium text-sm">Cuidado Contínuo</p>
              </div>
            </div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {["Equipe fixa dedicada", "Gestão completa VITTA", "Relatórios diários digitais", "Supervisão quinzenal inclusa", "Melhor custo-benefício"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-blue-100/80 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/5511945880272"
              className="w-full py-5 rounded-2xl bg-emerald-500 text-white font-bold text-center hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20"
            >
              Consultar Mensalidade
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
