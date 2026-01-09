
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Cláudia Mendonça",
      role: "Filha do Sr. Alberto",
      text: "A VITTA mudou a vida da nossa família. O cuidador é extremamente atencioso e o acompanhamento próximo da supervisão me deixa muito tranquila no trabalho.",
      location: "Pinheiros, SP"
    },
    {
      name: "Ricardo Santos",
      role: "Neto da Dona Maria",
      text: "Serviço impecável. A seleção do profissional foi perfeita, parece que ele já fazia parte da família. Recomendo de olhos fechados pela humanização.",
      location: "Moema, SP"
    },
    {
      name: "Patrícia Vieira",
      role: "Filha da Dona Helena",
      text: "Estávamos desesperados com a rotina e a VITTA organizou tudo em 48 horas. Transparência total e carinho sem igual com minha mãe.",
      location: "Jardins, SP"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-blue-50/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-4">Relatos Reais</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-blue-950">O que dizem as famílias VITTA</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 reveal">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-xl shadow-blue-950/5 relative">
              <Quote className="absolute top-8 right-10 text-blue-50 w-16 h-16 -z-0" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-slate-600 text-lg italic mb-8 leading-relaxed">"{rev.text}"</p>
                <div className="border-t border-slate-50 pt-6">
                  <p className="font-bold text-blue-950">{rev.name}</p>
                  <p className="text-sm text-slate-500">{rev.role} • {rev.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
