'use client';

import { motion } from 'framer-motion';

const SectionContainer = ({ id, title, subtitle, children }) => {
  return (
    <section id={id} className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title && (
              <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-yellow-200 dark:text-yellow-200 max-w-3xl">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
        
        {children}
      </div>
    </section>
  );
};

export default SectionContainer; 