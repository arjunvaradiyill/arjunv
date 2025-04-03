'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiInstagram } from 'react-icons/fi';
import Image from 'next/image';
import { FaRobot } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-black dark:bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-left space-y-8"
          >
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-4 py-1 bg-yellow-400 dark:bg-yellow-600 rounded-full text-black font-medium text-sm mb-4"
              >
                MERN Stack Developer
              </motion.div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-yellow-100 dark:text-yellow-100">
                Hi, I'm <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-yellow-300 dark:to-yellow-500 text-transparent bg-clip-text">ARJUN V</span>
              </h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-yellow-200 dark:text-yellow-200 leading-relaxed max-w-xl"
            >
              Passionate and results-driven Computer Science Engineering graduate with a strong interest in technology and adaptability to different domains. Skilled in programming, problem-solving, and analysis.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <motion.a
                href="https://drive.google.com/file/d/1c3vhI_xGWI0ZyhhXxauNCqZz6vSwtvQA/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-yellow-500/20"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(234, 179, 8, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                <FiDownload className="w-5 h-5" />
                View My CV
              </motion.a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-5 pt-4"
            >
              {[
                { href: "https://github.com/arjunvaradiyill", icon: <FiGithub size={22} />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/arjunvaradiyill/", icon: <FiLinkedin size={22} />, label: "LinkedIn" },
                { href: "mailto:arjunvaradiyil203@gmail.com", icon: <FiMail size={22} />, label: "Email" },
                { href: "https://www.instagram.com/_arjuo__/", icon: <FiInstagram size={22} />, label: "Instagram" }
              ].map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-black dark:bg-black border border-yellow-500 dark:border-yellow-500 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-yellow-400 dark:text-yellow-400 hover:text-yellow-500 transition-colors">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-first lg:order-last mx-auto"
          >
            <motion.div 
              className="relative w-80 h-80 mx-auto"
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              {/* Glass card effect for image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black dark:bg-black border-2 border-yellow-500 dark:border-yellow-600 p-3">
                <Image
                  src="https://lh3.googleusercontent.com/a/ACg8ocJqxeALwXt_aknMiD7AZPcI2HhQuNAlrNpHHEiyZNjGZ0JpMi7CKA=s576-c-no"
                  alt="Arjun V"
                  width={320}
                  height={320}
                  className="rounded-xl object-cover w-full h-full shadow-inner z-10 relative"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 dark:from-yellow-500/20 to-transparent rounded-xl"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 