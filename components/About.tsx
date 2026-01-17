import React from 'react';
import { MapPin, Phone, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-brand-red text-white overflow-hidden relative scroll-mt-20">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-black via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Meet Raami, The Furnace King
            </h2>
            <p className="mt-4 text-lg text-red-100">
              For over two decades, Raami has been the face of reliable heating in Mississauga. Unlike big faceless corporations, when you call Furnace King, you get personalized care directly from the owner.
            </p>
            <p className="mt-4 text-lg text-red-100">
              We believe in honest pricing, quality parts, and treating your home with the same respect we treat our own. That's the Raami guarantee.
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

            <div className="mt-8 flex space-x-1 items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-3 text-red-100 font-medium">5.0 Star Rating on Local Reviews</span>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0 relative order-1 lg:order-2">
             <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop" 
                  alt="Raami, the Furnace King owner, inspecting a heating unit" 
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                />
             </div>
             {/* Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white text-brand-red p-6 rounded-xl shadow-xl hidden md:block border border-gray-100">
                <p className="font-extrabold text-3xl">100%</p>
                <p className="text-xs uppercase tracking-wider font-bold text-gray-900">Satisfaction<br/>Guaranteed</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;