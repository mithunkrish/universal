import React from 'react';

const services = [
  { number: '01', category: 'Designer', title: 'Illustration Design', description: 'Duis aute irure dolor in reprehenit in voluptate velit esse cillum dolore eu fugiat nulla pariaturs.' },
  { number: '02', category: 'Branding', title: 'Business Branding', description: 'Duis aute irure dolor in reprehenit in voluptate velit esse cillum dolore eu fugiat nulla pariaturs.' },
  { number: '03', category: 'UI/UX Design', title: 'Web UI/UX Design', description: 'Duis aute irure dolor in reprehenit in voluptate velit esse cillum dolore eu fugiat nulla pariaturs.' },
  { number: '04', category: 'Web Design', title: 'Application Design', description: 'Duis aute irure dolor in reprehenit in voluptate velit esse cillum dolore eu fugiat nulla pariaturs.' },
  { number: '05', category: 'SEO Analytics', title: 'Digital Marketing', description: 'Duis aute irure dolor in reprehenit in voluptate velit esse cillum dolore eu fugiat nulla pariaturs.' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-lime font-semibold mb-2">--- Service That I Provide</p>
          <h2 className="text-4xl md:text-6xl font-bold">My Special Service For Your <br/> Business Development</h2>
        </div>
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.number} className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-8 border-b border-gray-800 hover:bg-brand-gray transition-colors duration-300 rounded-lg">
              <div className="md:col-span-1 text-2xl font-bold text-brand-light-gray group-hover:text-brand-lime">{service.number}</div>
              <div className="md:col-span-4">
                <p className="text-sm text-brand-light-gray">{service.category}</p>
                <h3 className="text-3xl font-semibold">{service.title}</h3>
              </div>
              <div className="md:col-span-6 text-brand-light-gray">{service.description}</div>
              <div className="md:col-span-1 flex justify-end">
                <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center justify-center w-12 h-12 border border-gray-700 rounded-full group-hover:bg-brand-lime group-hover:text-black transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;