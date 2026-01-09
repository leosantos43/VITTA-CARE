
import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-blue-600 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Fale com a VITTA agora e encontre o cuidado ideal para quem você ama.
          </h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
            Não deixe para amanhã a segurança e o conforto de quem é especial para você. Nossa equipe está pronta para te ouvir.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="https://wa.me/5511945880272"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all hover:-translate-y-1 w-full md:w-auto justify-center"
            >
              <MessageCircle className="w-6 h-6" />
              Chamar no WhatsApp
            </a>
            <div className="flex items-center gap-4 text-white">
              <div className="bg-white/10 p-4 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-blue-200 text-sm font-medium">Ligue agora</p>
                <p className="text-xl font-bold">(11) 94588-0272</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
