import React from 'react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        const headerOffset = 96; // h-24 = 6rem = 96px
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-brand-dark">
      {/* Background swirl */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] lg:w-[60vw] lg:h-[60vw] animate-spin-slow">
              <div className="absolute inset-0 bg-no-repeat bg-center bg-cover" style={{backgroundImage: 'url(/assets/images/hero-background-swirl.png)'}}></div>
          </div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-lime/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-lime/10 rounded-full blur-3xl"></div>
      </div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <a href="#contact" onClick={handleScroll} className="inline-block border border-gray-700 rounded-full px-4 py-2 text-sm text-brand-light-gray hover:border-white transition-colors">
              Currently Available For Freelance Worldwide ↗
            </a>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold my-6 leading-tight">
              Creative Visual <br /> <span className="text-brand-lime">Designer</span>
            </h1>
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <a href="#" onClick={(e) => e.preventDefault()} className="relative group flex items-center justify-center w-24 h-24 border-2 border-gray-700 rounded-full">
                <div className="absolute inset-0 border-2 border-brand-lime rounded-full animate-ping-slow opacity-0 group-hover:opacity-100"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </a>
              <span className="text-lg font-semibold">Work <br/> Process</span>
            </div>
          </div>
          <div className="relative h-[500px] lg:h-auto">
             <img src="/assets/images/hero-designer.png" alt="David Matias" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;