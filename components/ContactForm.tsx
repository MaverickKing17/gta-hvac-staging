import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  prefilledMessage?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ prefilledMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    if (prefilledMessage) {
      setFormData(prev => ({ ...prev, message: prefilledMessage }));
    }
  }, [prefilledMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', message: '' });
      
      // Reset status after a few seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 scroll-mt-20" aria-labelledby="contact-heading">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
           <div className="md:w-1/2 p-8 md:p-12 bg-gray-900 text-white flex flex-col justify-center">
             <h2 id="contact-heading" className="text-3xl font-extrabold mb-4">Ready to get started?</h2>
             <p className="text-gray-300 mb-6">Contact Raami today for a free quote on new installations or to schedule a service call.</p>
             <div className="space-y-4">
               <div className="flex flex-col">
                 <span className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Call Us</span>
                 <a 
                   href="tel:+19055550123" 
                   className="font-semibold text-brand-red text-xl hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red rounded px-1 -ml-1 w-fit"
                   aria-label="Call Furnace King at (905) 555-0123"
                 >
                   (905) 555-0123
                 </a>
               </div>
               <div className="flex flex-col">
                 <span className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Email Us</span>
                 <a 
                   href="mailto:info@furnacekingmississauga.com" 
                   className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red rounded px-1 -ml-1 w-fit"
                   aria-label="Email us at info@furnacekingmississauga.com"
                 >
                   info@furnacekingmississauga.com
                 </a>
               </div>
             </div>
           </div>
           <div className="md:w-1/2 p-8 md:p-12">
             <form className="space-y-4" onSubmit={handleSubmit} aria-label="Contact form">
               <div>
                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                 <input 
                    type="text" 
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red bg-gray-50 p-3 transition-all" 
                    placeholder="Your Name"
                    required
                    aria-required="true"
                    disabled={status !== 'idle'}
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red bg-gray-50 p-3 transition-all" 
                    placeholder="(555) 555-5555"
                    required
                    aria-required="true"
                    disabled={status !== 'idle'}
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-red focus:ring-brand-red bg-gray-50 p-3 transition-all" 
                    placeholder="How can we help?"
                    required
                    aria-required="true"
                    disabled={status !== 'idle'}
                 ></textarea>
               </div>
               <button 
                 type="submit" 
                 disabled={status !== 'idle'}
                 className={`w-full font-bold py-3 px-4 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red shadow-md flex justify-center items-center ${
                   status === 'success' 
                    ? 'bg-green-600 text-white cursor-default' 
                    : 'bg-brand-red text-white hover:bg-brand-dark hover:shadow-lg hover:-translate-y-0.5'
                 } disabled:opacity-80 disabled:cursor-not-allowed`}
                 aria-label="Submit callback request"
               >
                 {status === 'submitting' ? (
                   <>
                     <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                     Sending Request...
                   </>
                 ) : status === 'success' ? (
                   <>
                     <CheckCircle className="w-5 h-5 mr-2" />
                     Request Sent!
                   </>
                 ) : (
                   'Request Callback'
                 )}
               </button>
               {status === 'success' && (
                 <p className="text-green-600 text-center text-sm font-medium mt-2">
                   Thanks! Raami or the team will be in touch shortly.
                 </p>
               )}
             </form>
           </div>
         </div>
       </div>
    </section>
  );
};

export default ContactForm;