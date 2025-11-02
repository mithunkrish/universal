import React from 'react';

const awards = [
  { title: 'Site Of The Day', category: 'Css & Animation', year: 2018 },
  { title: 'Best Business Model', category: 'New Strategy', year: 2019 },
  { title: 'Motion Graphic', category: '3D & Visual Effect', year: 2020 },
  { title: 'Video Design', category: 'Css & Animation', year: 2022 },
];

const Awards: React.FC = () => {
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
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Our Awards</h2>
          <a href="#work" onClick={handleScroll} className="text-brand-lime font-semibold border-b border-brand-lime pb-1 hover:text-white hover:border-white transition-colors">
            View My Work
          </a>
        </div>
        <div>
          {awards.map((award, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-gray-800 py-6">
              <h3 className="text-2xl font-semibold">{award.title}</h3>
              <p className="text-brand-light-gray">{award.category}</p>
              <p className="text-xl font-semibold md:text-right">{award.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;