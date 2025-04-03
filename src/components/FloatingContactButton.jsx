'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FaWhatsapp, FaTimes, FaRobot, FaPaperPlane } from 'react-icons/fa';

const FloatingContactButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi there! I\'m Arjun\'s AI assistant. How can I help you today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e) => {
    e?.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message to chat
    const userMessage = { role: 'user', content: inputMessage };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputMessage('');
    
    // Simulate typing
    setIsTyping(true);
    
    // Simulate AI response (would be replaced with actual API call)
    setTimeout(() => {
      let botResponse;
      
      // Simple response logic based on keywords
      const lowercaseMessage = inputMessage.toLowerCase();
      
      if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi')) {
        botResponse = { role: 'bot', content: 'Hello! How can I assist you with questions about Arjun\'s skills, projects, or experience?' };
      } else if (lowercaseMessage.includes('hire') || lowercaseMessage.includes('job') || lowercaseMessage.includes('work')) {
        botResponse = { role: 'bot', content: 'Great! Arjun is available for projects and job opportunities. Would you like me to share his contact information or connect you directly?' };
      } else if (lowercaseMessage.includes('contact') || lowercaseMessage.includes('email') || lowercaseMessage.includes('phone')) {
        botResponse = { role: 'bot', content: 'You can reach Arjun at arjunvaradiyil203@gmail.com or call/WhatsApp at +91 9946642065. Would you like me to help with anything else?' };
      } else if (lowercaseMessage.includes('skills') || lowercaseMessage.includes('experience') || lowercaseMessage.includes('tech')) {
        botResponse = { role: 'bot', content: 'Arjun specializes in MERN stack development and has expertise in React, Node.js, MongoDB, and Express. He\'s also skilled in Next.js, TailwindCSS, and various modern web technologies. Is there a specific skill you\'d like to know more about?' };
      } else if (lowercaseMessage.includes('project') || lowercaseMessage.includes('portfolio')) {
        botResponse = { role: 'bot', content: 'Arjun has worked on several impressive projects, including web applications, e-commerce platforms, and custom solutions. You can check details in the Projects section or ask me about a specific type of project you\'re interested in.' };
      } else if (lowercaseMessage.includes('whatsapp')) {
        botResponse = { role: 'bot', content: 'You can message Arjun directly on WhatsApp at +91 9946642065. Would you like me to provide a direct link?' };
      } else {
        botResponse = { role: 'bot', content: 'Thanks for your message! Arjun will get back to you soon. Would you like to know more about his skills, projects, or would you prefer to connect directly via WhatsApp or email?' };
      }
      
      setMessages(prevMessages => [...prevMessages, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 mb-4 p-4 bg-black rounded-xl border border-yellow-600/30 shadow-lg shadow-yellow-500/20 backdrop-blur-sm"
            style={{
              maxWidth: "calc(100vw - 32px)",  /* Ensure it doesn't overflow screen width */
              right: 0,
              transform: showChatbot ? "translateX(0)" : "translateX(0)"
            }}
          >
            {!showChatbot ? (
              <>
                <div className="text-yellow-200 text-sm mb-3">
                  How would you like to connect?
                </div>
                <div className="space-y-2">
                  <button 
                    onClick={() => setShowChatbot(true)}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-medium py-2 px-4 rounded-lg transition-all duration-300 mb-2"
                  >
                    <FaRobot className="text-lg" />
                    <span>Chat with AI Assistant</span>
                  </button>
                  <a 
                    href="https://wa.me/919946642065" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>Message on WhatsApp</span>
                  </a>
                </div>
              </>
            ) : (
              <div className="w-80 sm:w-96">
                {/* Chatbot header */}
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-yellow-600/30">
                  <div className="flex items-center">
                    <div className="p-1.5 bg-yellow-900/30 rounded-full mr-2">
                      <FaRobot className="text-yellow-400 w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-medium text-yellow-200 text-sm">Arjun's AI Assistant</h3>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowChatbot(false)}
                    className="text-yellow-400 hover:text-yellow-300 p-1"
                  >
                    <FaTimes size={14} />
                  </button>
                </div>
                
                {/* Chat area */}
                <div className="h-[320px] overflow-y-auto mb-3 space-y-3 pr-1 scrollbar-thin scrollbar-thumb-yellow-800/30 scrollbar-track-transparent">
                  {messages.map((message, index) => (
                    <div 
                      key={index} 
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[85%] rounded-xl p-2.5 text-sm ${
                          message.role === 'user' 
                            ? 'bg-yellow-500/20 text-yellow-100 rounded-tr-none' 
                            : 'bg-black/40 border border-yellow-900/30 text-yellow-200 rounded-tl-none'
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-xl p-2.5 bg-black/40 border border-yellow-900/30 text-yellow-200 rounded-tl-none">
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 bg-yellow-400/50 rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-yellow-400/50 rounded-full animate-bounce delay-75"></div>
                          <div className="w-1.5 h-1.5 bg-yellow-400/50 rounded-full animate-bounce delay-150"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                
                {/* Chat input */}
                <form onSubmit={handleSendMessage} className="relative">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask me anything..."
                    className="w-full px-3 py-2 pr-10 bg-black/40 border border-yellow-700/50 focus:border-yellow-500 text-yellow-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500/50 transition-all text-sm"
                  />
                  <button
                    type="submit"
                    disabled={!inputMessage.trim() || isTyping}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-yellow-500/20 hover:bg-yellow-500/30 rounded-full text-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaPaperPlane className="w-3 h-3" />
                  </button>
                </form>
                
                {/* Direct WhatsApp link */}
                <div className="mt-3 pt-2 border-t border-yellow-900/30 text-center">
                  <a 
                    href="https://wa.me/919946642065" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 text-xs font-medium"
                  >
                    Prefer to chat on WhatsApp instead? Click here
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={() => {
          setIsExpanded(!isExpanded);
          if (!isExpanded) setShowChatbot(false);
        }}
        data-testid="floating-contact-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center justify-center p-4 rounded-full shadow-lg transition-all duration-300 ${
          isExpanded 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500'
        }`}
        style={{
          boxShadow: isExpanded 
            ? '0 10px 25px -5px rgba(239, 68, 68, 0.4)' 
            : '0 10px 25px -5px rgba(234, 179, 8, 0.4)'
        }}
      >
        {isExpanded ? (
          <FaTimes className="text-white text-xl" />
        ) : (
          <FaRobot className="text-black text-xl" />
        )}
      </motion.button>
    </div>
  );
};

export default FloatingContactButton; 