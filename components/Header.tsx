import React, { useState } from 'react';
import { Phone, Menu, X, Flame } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Services', href: 'services' },
    { name: 'About Raami', href: 'about' },
    { name: 'AI Diagnostics', href: 'diagnose' },
    { name: 'Contact', href: 'contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md border-b-4 border-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="bg-brand-red p-2 rounded-lg mr-2 transition-transform group-hover:scale-105">
              <Flame className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">FURNACE KING</h1>
              <p className="text-xs text-brand-red font-bold uppercase tracking-widest">Mississauga</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-gray-600 hover:text-brand-red font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <a 
              href="tel:+19055550123"
              className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-full text-white bg-brand-red hover:bg-brand-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Raami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-brand-red focus:outline-none p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-red hover:bg-red-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+19055550123"
              className="block w-full text-center mt-4 px-5 py-3 rounded-md font-bold text-white bg-brand-red"
            >
              Emergency Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;