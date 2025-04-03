'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const FloatingContactButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isExpanded && (
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="mb-4 p-4 bg-black rounded-xl border border-yellow-600/30 shadow-lg shadow-yellow-500/20 backdrop-blur-sm"
        >
          <div className="text-yellow-200 text-sm mb-3">
            Message me directly on WhatsApp
          </div>
          <a 
            href="https://wa.me/919946642065" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
          >
            <FaWhatsapp className="text-lg" />
            <span>WhatsApp</span>
          </a>
        </motion.div>
      )}
      
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center justify-center p-4 rounded-full shadow-lg transition-all duration-300 ${
          isExpanded 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500'
        }`}
        style={{
          boxShadow: isExpanded 
            ? '0 10px 25px -5px rgba(239, 68, 68, 0.4)' 
            : '0 10px 25px -5px rgba(16, 185, 129, 0.4)'
        }}
      >
        {isExpanded ? (
          <FaTimes className="text-white text-xl" />
        ) : (
          <FaWhatsapp className="text-white text-xl" />
        )}
      </motion.button>
    </div>
  );
};

export default FloatingContactButton; 