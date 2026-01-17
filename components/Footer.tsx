import React from 'react';
import { Flame, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white border-t border-brand-red/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <Flame className="h-8 w-8 text-brand-red mr-2" />
              <span className="text-xl font-bold tracking-wider">FURNACE KING</span>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Mississauga's premier HVAC solution. Keeping you warm in the winter and cool in the summer.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a 
                  href="#furnace-repair" 
                  onClick={(e) => handleScroll(e, 'furnace-repair')}
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Furnace Repair
                </a>
              </li>
              <li>
                <a 
                  href="#ac-installation" 
                  onClick={(e) => handleScroll(e, 'ac-installation')}
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  AC Installation
                </a>
              </li>
              <li>
                <a 
                  href="#maintenance-plans" 
                  onClick={(e) => handleScroll(e, 'maintenance-plans')}
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Maintenance Plans
                </a>
              </li>
              <li>
                <a 
                  href="#emergency-service" 
                  onClick={(e) => handleScroll(e, 'emergency-service')}
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Emergency Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleScroll(e, 'about')}
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  About Raami
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  onClick={(e) => handleScroll(e, 'testimonials')}
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, 'contact')}
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, 'contact')}
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
            <div className="flex space-x-6 mt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-brand-red transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-brand-red transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-brand-red transition-colors"
                aria-label="Visit our Twitter page"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-8 text-sm text-gray-400">
               Serving Mississauga, Brampton, Oakville, and Etobicoke.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Furnace King Mississauga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;