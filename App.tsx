
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import StatsTicker from './components/StatsTicker';
import Awards from './components/Awards';
import Portfolio from './components/Portfolio';
import ContactBanner from './components/ContactBanner';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Blog from './components/Blog';
import Footer from './components/Footer';
import SideInfo from './components/SideInfo';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark text-white font-jost overflow-x-hidden">
      <Header />
      <SideInfo />
      <main>
        <Hero />
        <Ticker />
        <About />
        <StatsTicker />
        <Awards />
        <Portfolio />
        <ContactBanner />
        <Services />
        <Process />
        <Testimonials />
        <Partners />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default App;
