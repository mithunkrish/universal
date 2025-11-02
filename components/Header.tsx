import React, { useState } from 'react';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'WORK', href: '#work' },
  { name: 'SERVICES', href: '#services' },
  { name: 'TESTIMONIAL', href: '#testimonial' },
  { name: 'BLOG', href: '#blog' },
  { name: 'CONTACT', href: '#contact' }
];


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleScroll(e);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
             <div className="text-3xl font-bold font-gorditas tracking-wider">
              <span className="bg-brand-lime text-black rounded-md px-2 mr-1">U</span>
              Universal
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleScroll}
                className="text-sm font-medium tracking-widest text-white hover:text-brand-lime transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#contact" onClick={handleScroll} className="hidden sm:block bg-brand-lime text-black font-bold py-3 px-6 rounded-md hover:bg-white transition-colors duration-300">
              Let's Talk →
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 border border-gray-600 rounded-md"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-brand-dark">
          <nav className="flex flex-col items-center space-y-4 py-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium tracking-widest text-white hover:text-brand-lime transition-colors duration-300"
                onClick={handleMobileLinkClick}
              >
                {link.name}
              </a>
            ))}
             <a href="#contact" className="sm:hidden bg-brand-lime text-black font-bold py-3 px-6 rounded-md hover:bg-white transition-colors duration-300" onClick={handleMobileLinkClick}>
              Let's Talk →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;