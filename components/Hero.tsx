import React from 'react';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {/* Diagonal background slice */}
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-brand-red text-sm font-semibold mb-6 animate-fade-in">
                <ShieldCheck className="w-4 h-4 mr-2" />
                Serving Mississauga for 20+ Years
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Don't Get Left In</span>{' '}
                <span className="block text-brand-red xl:inline">The Cold.</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Mississauga's most trusted heating and cooling experts. Owned and operated by Raami. We fix it right, or we make it right. Fast, reliable, and fairly priced.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <div className="rounded-md shadow">
                  <a
                    href="#diagnose"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-red hover:bg-brand-dark md:py-4 md:text-lg transition-all"
                  >
                    AI Diagnostic Tool
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg transition-all"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-1.5" />
                  <span>Licensed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-1.5" />
                  <span>Insured</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-1.5" />
                  <span>24/7 Support</span>
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90"
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="HVAC Technician working on furnace"
        />
        <div className="absolute inset-0 bg-brand-red mix-blend-multiply opacity-20"></div>
      </div>
    </section>
  );
};

export default Hero;