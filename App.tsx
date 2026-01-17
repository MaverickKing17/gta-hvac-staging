import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AITroubleshooter from './components/AITroubleshooter';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [contactMessage, setContactMessage] = useState('');

  useEffect(() => {
    // Smooth scrolling for anchor links with header offset
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      // Check if it's an anchor link to an ID on the same page
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin === window.location.origin) {
        const element = document.querySelector(anchor.hash);
        if (element) {
          e.preventDefault();
          const headerOffset = 100; // Header height (80px) + padding
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Update URL hash without jumping
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const handleBookAppointment = (diagnosis: string) => {
    // Summarize or format the diagnosis for the contact form
    const message = `Hi Raami, I used the AI diagnostic tool. \n\nAI Diagnosis: ${diagnosis}\n\nI would like to book a service call for this issue.`;
    setContactMessage(message);
    
    // Smooth scroll to contact section with offset
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <AITroubleshooter onBookAppointment={handleBookAppointment} />
        <About />
        <Testimonials />
        <ContactForm prefilledMessage={contactMessage} />
      </main>
      <Footer />
    </div>
  );
};

export default App;