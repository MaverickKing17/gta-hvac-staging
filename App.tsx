import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AITroubleshooter from './components/AITroubleshooter';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <AITroubleshooter />
        <About />
        
        {/* Simple Contact CTA Section */}
        <section id="contact" className="bg-gray-50 py-16">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
               <div className="md:w-1/2 p-8 md:p-12 bg-gray-900 text-white flex flex-col justify-center">
                 <h2 className="text-3xl font-extrabold mb-4">Ready to get started?</h2>
                 <p className="text-gray-300 mb-6">Contact Raami today for a free quote on new installations or to schedule a service call.</p>
                 <div className="space-y-2">
                   <p className="font-semibold text-brand-red text-xl">(905) 555-0123</p>
                   <p className="text-gray-400">info@furnacekingmississauga.com</p>
                 </div>
               </div>
               <div className="md:w-1/2 p-8 md:p-12">
                 <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                   <div>
                     <label className="block text-sm font-medium text-gray-700">Name</label>
                     <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red bg-gray-50 p-3" placeholder="Your Name" />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700">Phone</label>
                     <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red bg-gray-50 p-3" placeholder="(555) 555-5555" />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700">Message</label>
                     <textarea rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red bg-gray-50 p-3" placeholder="How can we help?"></textarea>
                   </div>
                   <button type="submit" className="w-full bg-brand-red text-white font-bold py-3 px-4 rounded-md hover:bg-brand-dark transition-colors">
                     Request Callback
                   </button>
                 </form>
               </div>
             </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;