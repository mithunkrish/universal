
import React from 'react';

const About: React.FC = () => {
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
    <section id="about" className="py-24 bg-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/assets/images/about-me.png" alt="About David Matias" className="rounded-lg w-full" />
          </div>
          <div>
            <p className="text-brand-lime font-semibold mb-2">--- I'M A Designer</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">About Me</h2>
            <p className="text-brand-light-gray mb-4">
              Hello, I’m David Matias, a creative visual designer with a passion for creating beautiful, intuitive, and highly-crafted user experiences. I have over 10 years of experience in the design industry, working with a wide range of clients from startups to large corporations.
            </p>
            <p className="text-brand-light-gray mb-8">
              My design process is centered around user research and a deep understanding of business goals. I believe that great design is not just about aesthetics, but also about solving problems and creating value for users and businesses.
            </p>
            <a href="#contact" onClick={handleScroll} className="bg-brand-lime text-black font-bold py-4 px-8 rounded-md hover:bg-white transition-colors duration-300">
              Hire Me Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
