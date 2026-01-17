import React, { useState, useEffect } from 'react';

interface ContactFormProps {
  prefilledMessage?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ prefilledMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    if (prefilledMessage) {
      setFormData(prev => ({ ...prev, message: prefilledMessage }));
    }
  }, [prefilledMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
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
                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                 <input 
                    type="text" 
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red bg-gray-50 p-3" 
                    placeholder="Your Name" 
                 />
               </div>
               <div>
                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                 <input 
                    type="tel" 
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red bg-gray-50 p-3" 
                    placeholder="(555) 555-5555" 
                 />
               </div>
               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                 <textarea 
                    rows={4} 
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red bg-gray-50 p-3" 
                    placeholder="How can we help?"
                 ></textarea>
               </div>
               <button type="submit" className="w-full bg-brand-red text-white font-bold py-3 px-4 rounded-md hover:bg-brand-dark transition-colors">
                 Request Callback
               </button>
             </form>
           </div>
         </div>
       </div>
    </section>
  );
};

export default ContactForm;