import React from 'react';
import { ArrowRight, CheckCircle, ShieldCheck, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Text Column */}
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-brand-red text-sm font-semibold mb-6 animate-fade-in">
              <ShieldCheck className="w-4 h-4 mr-2" />
              Serving Mississauga for 20+ Years
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Don't Get Left In</span>{' '}
              <span className="block text-brand-red xl:inline">The Cold.</span>
            </h1>

            {/* Satisfaction Guarantee Banner */}
            <div className="mt-6 flex sm:justify-start">
              <div className="inline-flex items-center px-5 py-2 rounded-lg bg-white border-2 border-brand-red shadow-sm transform transition hover:-translate-y-0.5">
                 <Award className="w-6 h-6 text-brand-red mr-3" />
                 <span className="font-extrabold text-gray-900 text-lg">100% Satisfaction Guarantee</span>
              </div>
            </div>

            <p className="mt-5 text-base text-gray-500 sm:text-lg md:text-xl">
              Mississauga's most trusted heating and cooling experts. Owned and operated by Raami. We fix it right, or we make it right. Fast, reliable, and fairly priced.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row sm:justify-start gap-4">
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

            <div className="mt-6 flex items-center justify-start space-x-6 text-sm text-gray-500">
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

          {/* Image Column */}
          <div className="relative">
             {/* Decorative element behind image */}
             <div className="absolute top-0 right-0 -mr-4 -mt-4 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
             <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
             
             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
               <img
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  src="https://i.ibb.co/spG2tjYD/gemini-3-pro-image-preview-b-Replace-the-current.png"
                  alt="HVAC Technician working on furnace"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;