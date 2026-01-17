import React, { useState, useRef, useEffect } from 'react';
import { diagnoseHVACIssue } from '../services/gemini';
import { ChatMessage, DiagnosticStatus } from '../types';
import { Bot, User, AlertTriangle, Send, Loader2, CalendarCheck, Sparkles } from 'lucide-react';

interface AITroubleshooterProps {
  onBookAppointment?: (diagnosis: string) => void;
}

const AITroubleshooter: React.FC<AITroubleshooterProps> = ({ onBookAppointment }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hello! I'm Raami's AI Assistant. Is your furnace making a noise, or is your AC blowing warm air? Describe the problem, and I'll give you a preliminary diagnosis."
    }
  ]);
  const [status, setStatus] = useState<DiagnosticStatus>(DiagnosticStatus.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || status === DiagnosticStatus.ANALYZING) return;

    const userText = input.trim();
    setInput('');
    setStatus(DiagnosticStatus.ANALYZING);

    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: userText }]);

    try {
      const responseText = await diagnoseHVACIssue(userText);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please call Raami directly.", isError: true }]);
    } finally {
      setStatus(DiagnosticStatus.COMPLETE);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Simple formatter to handle bold text (**text**) and preserve lines
  const formatMessageText = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Check for bold syntax **...**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <span key={i} className="block min-h-[1.25rem]">
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={j} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
            }
            return <span key={j}>{part}</span>;
          })}
        </span>
      );
    });
  };

  return (
    <section id="diagnose" className="py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-full mb-4">
             <Sparkles className="h-5 w-5 text-brand-red" />
          </div>
          <h2 className="text-base text-brand-red font-bold tracking-wide uppercase">Smart Diagnostics</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Not sure what's wrong? Ask our AI.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Describe your issue below to get instant professional feedback before booking an appointment.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 ring-1 ring-gray-900/5">
          {/* Chat Window */}
          <div className="h-[500px] overflow-y-auto p-6 bg-slate-50 space-y-6">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex max-w-[90%] md:max-w-[80%] ${
                    msg.role === 'user'
                      ? 'bg-brand-red text-white rounded-2xl rounded-tr-sm'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-2xl rounded-tl-sm shadow-sm'
                  } p-5 items-start space-x-4`}
                >
                  <div className="flex-shrink-0 mt-1">
                    {msg.role === 'user' ? (
                      <div className="h-8 w-8 rounded-full bg-red-700 flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-brand-red flex items-center justify-center shadow-md">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="w-full">
                    <div className={`text-sm md:text-base ${msg.role === 'user' ? 'text-white' : 'text-gray-700'} leading-relaxed space-y-1`}>
                      {msg.role === 'user' ? msg.text : formatMessageText(msg.text)}
                    </div>
                    
                    {msg.role === 'model' && idx > 0 && !msg.isError && (
                      <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                        <a href="tel:+19055550123" className="flex-1 text-center py-2.5 px-4 rounded-lg bg-gray-100 text-gray-700 font-bold hover:bg-gray-200 transition-colors text-sm flex items-center justify-center">
                          <AlertTriangle className="w-4 h-4 mr-2 text-orange-500" />
                          Emergency Call
                        </a>
                        {onBookAppointment && (
                            <button 
                                onClick={() => onBookAppointment(msg.text)}
                                className="flex-[2] text-center py-2.5 px-4 rounded-lg bg-brand-red text-white font-bold hover:bg-brand-dark transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm flex items-center justify-center"
                            >
                                <CalendarCheck className="w-4 h-4 mr-2" />
                                Book Appointment Now
                            </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {status === DiagnosticStatus.ANALYZING && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none p-4 shadow-sm flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <Loader2 className="w-5 h-5 text-brand-red animate-spin" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-24"></div>
                    <div className="h-2 bg-gray-200 rounded w-32"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Describe your problem (e.g. 'Furnace is making a banging noise')"
                className="flex-1 focus:ring-2 focus:ring-brand-red focus:border-transparent block w-full min-w-0 rounded-full sm:text-base border-gray-300 p-4 bg-gray-50 shadow-inner transition-all"
                disabled={status === DiagnosticStatus.ANALYZING}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || status === DiagnosticStatus.ANALYZING}
                className="inline-flex items-center justify-center w-14 h-14 border border-transparent rounded-full shadow-lg text-white bg-brand-red hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
              >
                <Send className="h-6 w-6 ml-0.5" />
              </button>
            </div>
            <p className="mt-3 text-xs text-center text-gray-400">
              *AI advice is preliminary. Always consult a professional for safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITroubleshooter;