'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left space-y-6"
          >
            <h1 className="text-4xl sm:text-7xl font-bold text-black">
              Hi, I'm <span className="text-yellow-500">ARJUN V</span>
            </h1>
            
            <h2 className="text-3xl sm:text-5xl font-bold text-black">
              MERN Stack Developer
            </h2>
            
            <p className="text-xl text-gray-700">
              Passionate and results-driven Computer Science Engineering graduate with a strong interest in technology and adaptability to different domains. Skilled in programming, problem-solving, and analysis.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg bg-black text-white font-semibold transition-all duration-300 hover:bg-yellow-500 hover:text-black"
              >
                Get in Touch
              </a>
              
              <a
                href="https://drive.google.com/file/d/1c3vhI_xGWI0ZyhhXxauNCqZz6vSwtvQA/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg border-2 border-black text-black font-semibold transition-all duration-300 hover:bg-yellow-500 hover:border-yellow-500 flex items-center gap-2"
              >
                <FiDownload className="w-5 h-5" />
                View Resume
              </a>
            </div>

            <div className="flex gap-6">
              {[
                { href: "https://github.com/arjunvaradiyill", icon: <FiGithub size={24} /> },
                { href: "https://www.linkedin.com/in/arjunvaradiyill/", icon: <FiLinkedin size={24} /> },
                { href: "mailto:arjunvaradiyil203@gmail.com", icon: <FiMail size={24} /> }
              ].map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-gray-600 hover:text-black transition-colors">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative w-72 h-72 mx-auto">
              <div className="absolute inset-0 rounded-full bg-yellow-500/20 animate-pulse"></div>
              <Image
                src="https://lh3.googleusercontent.com/a/ACg8ocJqxeALwXt_aknMiD7AZPcI2HhQuNAlrNpHHEiyZNjGZ0JpMi7CKA=s576-c-no"
                alt="Arjun V"
                width={288}
                height={288}
                className="rounded-full object-cover border-4 border-yellow-500 shadow-xl"
                priority
              />
              <div className="absolute -inset-4 border-2 border-yellow-500/30 rounded-full animate-spin-slow"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 