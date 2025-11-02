import React from 'react';

const portfolioItems = [
  {
    category: 'PRODUCT DESIGN',
    title: 'Brand Identity & Motion Design',
    image: '/assets/images/portfolio/portfolio-1.jpg',
  },
  {
    category: 'UI/UX DESIGN',
    title: 'Mobile Application Development',
    image: '/assets/images/portfolio/portfolio-2.jpg',
  },
  {
    category: 'PRODUCT DESIGN',
    title: 'Design & Branding Makeup',
    image: '/assets/images/portfolio/portfolio-3.jpg',
  },
  {
    category: 'UI/UX DESIGN',
    title: 'Mobile Application Development',
    image: '/assets/images/portfolio/portfolio-4.jpg',
  },
    {
    category: 'UI/UX DESIGN',
    title: 'Mobile Application Development',
    image: '/assets/images/portfolio/portfolio-5.jpg',
  },
    {
    category: 'UI/UX DESIGN',
    title: 'Mobile Application Development',
    image: '/assets/images/portfolio/portfolio-6.jpg',
  },
];

const PortfolioCard: React.FC<{ item: typeof portfolioItems[0] }> = ({ item }) => (
    <div className="group">
        <div className="overflow-hidden rounded-lg mb-6">
            <img src={item.image} alt={item.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div>
            <p className="text-sm text-brand-light-gray mb-2">{item.category}</p>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center justify-center w-12 h-12 border border-gray-700 rounded-full hover:bg-brand-lime hover:text-black transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
            </div>
        </div>
    </div>
);

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-lime font-semibold mb-2">--- Complete Project</p>
          <h2 className="text-4xl md:text-6xl font-bold">Look At My Portfolio And Give Me <br/> Your Feedback</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} item={item} />
          ))}
        </div>
        <div className="text-center mt-20">
            <button className="w-40 h-40 bg-brand-lime rounded-full flex flex-col items-center justify-center text-black font-semibold hover:bg-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                Click More Work
            </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;