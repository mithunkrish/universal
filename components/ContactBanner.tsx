
import React from 'react';

const ContactBanner: React.FC = () => {
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
    <section className="py-20 bg-brand-lime">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Have A Project In Your Mind?
        </h2>
        <p className="text-black/70 max-w-2xl mx-auto mb-8">
          Don't be shy, let's have a chat! I'm always excited to hear about new ideas and discuss how I can help bring them to life.
        </p>
        <a 
          href="#contact" 
          onClick={handleScroll} 
          className="inline-block bg-brand-dark text-white font-bold py-4 px-8 rounded-md hover:bg-black transition-colors duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default ContactBanner;
