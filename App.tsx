import React, { useState } from 'react';
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

  const handleBookAppointment = (diagnosis: string) => {
    // Summarize or format the diagnosis for the contact form
    const message = `Hi Raami, I used the AI diagnostic tool. \n\nAI Diagnosis: ${diagnosis}\n\nI would like to book a service call for this issue.`;
    setContactMessage(message);
    
    // Scroll to contact section
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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