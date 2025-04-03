'use client';

import { motion } from 'framer-motion';

export default function SectionContainer({ 
  id, 
  children, 
  className = "", 
  title, 
  subtitle
}) {
  return (
    <section 
      id={id}
      className={`relative py-24 overflow-hidden bg-black dark:bg-black ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            {title && (
              <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-yellow-200 dark:text-yellow-200 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        
        {children}
      </div>
    </section>
  );
} 