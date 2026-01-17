import React, { useState, useRef, useEffect } from 'react';
import { diagnoseHVACIssue } from '../services/gemini';
import { ChatMessage, DiagnosticStatus } from '../types';
import { Bot, User, AlertTriangle, Send, Loader2 } from 'lucide-react';

const AITroubleshooter: React.FC = () => {
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

  return (
    <section id="diagnose" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-base text-brand-red font-semibold tracking-wide uppercase">Smart Diagnostics</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Not sure what's wrong? Ask our AI.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Describe your issue below to get instant feedback before booking an appointment.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          {/* Chat Window */}
          <div className="h-96 overflow-y-auto p-6 bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex max-w-[80%] ${
                    msg.role === 'user'
                      ? 'bg-brand-red text-white rounded-tr-none'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                  } rounded-2xl p-4 shadow-sm items-start space-x-3`}
                >
                  <div className="flex-shrink-0 mt-1">
                    {msg.role === 'user' ? (
                      <User className="w-5 h-5 text-red-100" />
                    ) : (
                      <Bot className="w-5 h-5 text-brand-red" />
                    )}
                  </div>
                  <div>
                    <p className={`text-sm ${msg.role === 'user' ? 'text-white' : 'text-gray-700'}`}>
                      {msg.text}
                    </p>
                    {msg.role === 'model' && idx > 0 && !msg.isError && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <a href="tel:+19055550123" className="text-xs font-bold text-brand-red hover:underline flex items-center">
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          Call Raami to fix this: (905) 555-0123
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {status === DiagnosticStatus.ANALYZING && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none p-4 shadow-sm flex items-center space-x-2">
                  <Loader2 className="w-5 h-5 text-brand-red animate-spin" />
                  <span className="text-sm text-gray-500">Analyzing symptoms...</span>
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
                placeholder="e.g., My furnace is humming but no heat..."
                className="flex-1 focus:ring-brand-red focus:border-brand-red block w-full min-w-0 rounded-full sm:text-sm border-gray-300 p-4 bg-gray-50"
                disabled={status === DiagnosticStatus.ANALYZING}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || status === DiagnosticStatus.ANALYZING}
                className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-brand-red hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-2 text-xs text-center text-gray-400">
              *AI advice is preliminary. Always consult a professional for safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITroubleshooter;