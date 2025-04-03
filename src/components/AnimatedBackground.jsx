'use client';

import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Main background */}
      <div className="absolute inset-0 bg-black transition-colors duration-500" />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 bg-grid-dark opacity-10 bg-[length:30px_30px] transition-opacity duration-500"
      />

      {/* Yellow gradient accents */}
      <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-yellow-500/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-[40vh] bg-gradient-to-t from-yellow-500/10 to-transparent"></div>
      
      {/* Subtle yellow animated elements */}
      <div className="absolute top-40 -right-40 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl animate-float"></div>
      <div className="absolute -bottom-20 left-20 w-80 h-80 bg-yellow-300 rounded-full opacity-5 blur-3xl animate-float animation-delay-2000"></div>
      <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-yellow-500 rounded-full opacity-5 blur-3xl animate-float animation-delay-4000"></div>
      
      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 bg-dots-yellow opacity-10 bg-[length:20px_20px] transition-opacity duration-500" />
      
      {/* Light noise texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.02]"></div>
    </div>
  );
};

export default AnimatedBackground; 