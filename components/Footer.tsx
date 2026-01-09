
import React from 'react';
import { HeartPulse, Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      const headerOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <HeartPulse className="text-blue-600 w-8 h-8" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-blue-900 leading-none">VITTA</span>
                <span className="text-xs font-medium text-emerald-600 tracking-widest uppercase">Senior Care</span>
              </div>
            </div>
            <p className="text-slate-500 text-lg max-w-md leading-relaxed">
              Especialistas em cuidado humanizado domiciliar. Oferecemos segurança, profissionalismo e amor para idosos e suporte completo para suas famílias.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="mailto:contato@vittaseniorcare.com.br" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-blue-950 mb-6 uppercase text-sm tracking-widest">Acesso Rápido</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#sobre" 
                  onClick={(e) => handleScroll(e, '#sobre')}
                  className="text-slate-500 hover:text-blue-600 transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  onClick={(e) => handleScroll(e, '#servicos')}
                  className="text-slate-500 hover:text-blue-600 transition-colors"
                >
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#planos" 
                  onClick={(e) => handleScroll(e, '#planos')}
                  className="text-slate-500 hover:text-blue-600 transition-colors"
                >
                  Planos e Preços
                </a>
              </li>
              <li>
                <a 
                  href="#como-funciona" 
                  onClick={(e) => handleScroll(e, '#como-funciona')}
                  className="text-slate-500 hover:text-blue-600 transition-colors"
                >
                  Como Funciona
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-950 mb-6 uppercase text-sm tracking-widest">Informações</h4>
            <div className="space-y-3">
              <p className="text-slate-500 font-medium">WhatsApp: (11) 94588-0272</p>
              <p className="text-slate-500">Segunda a Domingo: 24h</p>
              <p className="text-slate-500">Atendimento em Domicílio</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p>© {year} VITTA Senior Care. Todos os direitos reservados.</p>
            <a
              href="https://tisemfronteira.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 transition-colors"
            >
              Site desenvolvido pela <span className="font-semibold">TI SEM FRONTEIRA</span>
            </a>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-600">Política de Privacidade</a>
            <a href="#" className="hover:text-blue-600">Termos de Uso</a>
          </div>
          <p className="text-xs">Cuidado Humanizado para Idosos</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
