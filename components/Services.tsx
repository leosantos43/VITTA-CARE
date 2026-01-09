
import React from 'react';
import { ShowerHead, Utensils, BrainCircuit, Accessibility, Stethoscope, Clock, FileText } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { icon: <ShowerHead />, title: "Higiene e cuidados pessoais", desc: "Banho, higiene oral e íntima com respeito e delicadeza." },
    { icon: <Utensils />, title: "Alimentação e hidratação", desc: "Preparação e auxílio nas refeições, mantendo a dieta em dia." },
    { icon: <BrainCircuit />, title: "Estímulos cognitivos", desc: "Atividades que mantêm a mente ativa e proporcionam companhia." },
    { icon: <Accessibility />, title: "Auxílio na mobilidade", desc: "Prevenção de quedas e suporte em caminhadas e exercícios." },
    { icon: <Stethoscope />, title: "Acompanhamento em consultas", desc: "Suporte completo em consultas médicas e exames laboratoriais." },
    { icon: <Clock />, title: "Apoio na rotina diária", desc: "Organização de horários de remédios e atividades cotidianas." },
    { icon: <FileText />, title: "Relatórios para a família", desc: "Relatórios detalhados do dia a dia para total transparência." }
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
          <div className="max-w-2xl">
            <h2 className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-4">Nossa Especialidade</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-950">Cuidados especializados para cada fase da vida</h3>
          </div>
          <p className="text-slate-600 md:max-w-xs">Oferecemos um suporte 360º focado na qualidade de vida e na preservação da autonomia do idoso.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 reveal">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-blue-950 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
          <div className="bg-gradient-to-br from-blue-600 to-emerald-500 p-8 rounded-3xl text-white flex flex-col justify-center items-center text-center shadow-lg transition-transform hover:scale-[1.02]">
            <h4 className="text-xl font-bold mb-4">Precisa de algo específico?</h4>
            <p className="text-white/90 mb-6 text-sm">Criamos planos personalizados para cada tipo de necessidade.</p>
            <a href="https://wa.me/5511945880272" className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold text-sm">Consultar</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
