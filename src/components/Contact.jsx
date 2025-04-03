'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import SectionContainer from './SectionContainer';

const Contact = () => {
  return (
    <SectionContainer
      id="contact"
      title="Get in Touch"
      subtitle="Feel free to connect with me through any of these channels."
    >
      <div className="flex flex-col items-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8 w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 group bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-900/30 transition-all hover:border-yellow-600/50">
              <div className="p-3 bg-yellow-900/30 rounded-xl group-hover:bg-yellow-900/50 transition-colors">
                <FiMail className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-100 mb-2 group-hover:text-yellow-400 transition-colors">
                  Email
                </h3>
                <a 
                  href="mailto:arjunvaradiyil203@gmail.com" 
                  className="text-yellow-200 hover:text-yellow-400 transition-colors"
                >
                  arjunvaradiyil203@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-900/30 transition-all hover:border-yellow-600/50">
              <div className="p-3 bg-yellow-900/30 rounded-xl group-hover:bg-yellow-900/50 transition-colors">
                <FiPhone className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-100 mb-2 group-hover:text-yellow-400 transition-colors">
                  Phone
                </h3>
                <div className="flex flex-col gap-2">
                  <a 
                    href="tel:+919946642065" 
                    className="text-yellow-200 hover:text-yellow-400 transition-colors"
                  >
                    +91 9946642065
                  </a>
                  <a 
                    href="https://wa.me/919946642065" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-medium rounded-lg transition-all w-fit"
                  >
                    <FaWhatsapp />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 group bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-900/30 transition-all hover:border-yellow-600/50">
              <div className="p-3 bg-yellow-900/30 rounded-xl group-hover:bg-yellow-900/50 transition-colors">
                <FiMapPin className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-100 mb-2 group-hover:text-yellow-400 transition-colors">
                  Location
                </h3>
                <p className="text-yellow-200">
                  Malappuram, Kerala, India
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-900/30 transition-all hover:border-yellow-600/50">
              <div className="p-3 bg-yellow-900/30 rounded-xl group-hover:bg-yellow-900/50 transition-colors">
                <FiInstagram className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-100 mb-2 group-hover:text-yellow-400 transition-colors">
                  Social Media
                </h3>
                <div className="flex gap-3 mt-2">
                  <a 
                    href="https://www.linkedin.com/in/arjunvaradiyill/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-black border border-yellow-500 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110"
                  >
                    <FiLinkedin className="w-5 h-5 text-yellow-400 hover:text-yellow-300" />
                  </a>
                  <a 
                    href="https://github.com/arjunvaradiyill" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-black border border-yellow-500 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110"
                  >
                    <FiGithub className="w-5 h-5 text-yellow-400 hover:text-yellow-300" />
                  </a>
                  <a 
                    href="https://www.instagram.com/_arjuo__/" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-black border border-yellow-500 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110"
                  >
                    <FiInstagram className="w-5 h-5 text-yellow-400 hover:text-yellow-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-8 p-8"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
              Looking Forward to Connecting!
            </h3>
            <p className="text-yellow-200 max-w-2xl mx-auto">
              Whether you're interested in discussing a project, an opportunity, or just want to say hello,
              I'd love to hear from you. The fastest way to reach me is via WhatsApp or email.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Contact; 