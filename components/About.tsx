import React from 'react';
import { MapPin, Phone, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-brand-red text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-black via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Meet Raami, The Furnace King
            </h2>
            <p className="mt-4 text-lg text-red-100">
              For over two decades, Raami has been the face of reliable heating in Mississauga. Unlike big faceless corporations, when you call Furnace King, you get personalized care.
            </p>
            <p className="mt-4 text-lg text-red-100">
              We believe in honest pricing, quality parts, and treating your home with the same respect we treat our own.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-white mr-3" />
                <span className="text-xl font-medium">Proudly Serving Mississauga & GTA</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-white mr-3" />
                <span className="text-xl font-medium">(905) 555-0123</span>
              </div>
            </div>

            <div className="mt-8 flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-red-100 font-medium">5.0 Star Rating on Local Reviews</span>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0 relative">
             <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="HVAC Professional" 
                  className="object-cover w-full h-full"
                />
             </div>
             <div className="absolute -bottom-6 -left-6 bg-white text-brand-red p-6 rounded-lg shadow-xl hidden md:block">
                <p className="font-bold text-2xl">100%</p>
                <p className="text-sm uppercase tracking-wide font-semibold">Satisfaction Guaranteed</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;