
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MissionVisionValues from './components/MissionVisionValues';
import HowItWorks from './components/HowItWorks';
import SelectionProcess from './components/SelectionProcess';
import SpecializedCare from './components/SpecializedCare';
import Services from './components/Services';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import Differentials from './components/Differentials';
import FAQ from './components/FAQ';
import Career from './components/Career';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <About />
        <MissionVisionValues />
        <HowItWorks />
        <SelectionProcess />
        <SpecializedCare />
        <Services />
        <Plans />
        <Testimonials />
        <Differentials />
        <FAQ />
        <Career />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
