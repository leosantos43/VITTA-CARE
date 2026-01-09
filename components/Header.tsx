
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../logo.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Planos', href: '#planos' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2 md:py-3' : 'py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 rounded-3xl px-4 md:px-6 py-2 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg border border-white/40' : 'bg-transparent'}`}>
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2 md:gap-3 group">
            <div className="relative h-12 w-12 md:h-16 md:w-16 overflow-hidden rounded-full border-2 border-emerald-500/20 shadow-sm">
              <img 
                src={logo} 
                alt="VITTA Senior Care" 
                className="h-full w-full object-cover transition-transform group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=VITTA&background=1e3a8a&color=fff";
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black tracking-tighter text-blue-950 leading-none">VITTA</span>
              <span className="text-[10px] md:text-[11px] font-bold text-emerald-600 tracking-[0.2em] uppercase">Senior Care</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-slate-600 hover:text-blue-600 font-bold text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5511945880272"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-950 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-800 transition-all flex items-center gap-2 shadow-md shadow-blue-950/20"
            >
              <Phone size={14} className="text-emerald-400" />
              Atendimento 24h
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-800 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-xl transition-all duration-500 ease-in-out z-[-1] flex flex-col justify-center items-center gap-8 p-10 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="text-4xl font-black text-blue-950 hover:text-emerald-600 transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="https://wa.me/5511945880272"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-xs bg-emerald-500 text-white text-center py-5 rounded-2xl font-black text-xl shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3"
        >
          <Phone size={24} />
          Falar Agora
        </a>
      </div>
    </header>
  );
};

export default Header;
