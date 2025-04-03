'use client';

import { motion } from 'framer-motion';
import { FiUser, FiAward, FiTarget, FiLinkedin } from 'react-icons/fi';
import Image from 'next/image';
import SectionContainer from './SectionContainer';

const About = () => {
  const features = [
    {
      icon: <FiUser className="w-6 h-6" />,
      title: 'Personal Background',
      description: 'Computer Science Engineering graduate with a strong foundation in programming and problem-solving.',
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: 'Skills & Expertise',
      description: 'Proficient in MERN stack development, with expertise in building scalable web applications.',
    },
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: 'Career Goals',
      description: 'Aiming to contribute to innovative projects and develop cutting-edge solutions in web development.',
    },
  ];

  return (
    <SectionContainer 
      id="about"
      title="About Me"
      subtitle="A passionate developer with a strong foundation in computer science and a keen interest in creating innovative solutions."
      className="bg-black dark:bg-black"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto aspect-square">
            {/* Modern image styling */}
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-30 blur-xl rounded-2xl"></div>
            <div className="absolute inset-0 rounded-2xl bg-white dark:bg-black transform rotate-6"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/a/ACg8ocJqxeALwXt_aknMiD7AZPcI2HhQuNAlrNpHHEiyZNjGZ0JpMi7CKA=s576-c-no"
                alt="Arjun V"
                width={400}
                height={400}
                className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent"></div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-black to-yellow-500 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">
            Who I Am
          </h3>
          <p className="text-black dark:text-yellow-100">
            I am a dedicated developer who thrives on solving complex problems and creating elegant solutions. 
            With a strong foundation in computer science and hands-on experience in web development, 
            I am passionate about building scalable applications that make a difference.
          </p>
          <p className="text-black dark:text-yellow-100">
            My journey in technology has been driven by curiosity and a desire to create meaningful impact through code.
            I constantly strive to learn new technologies and improve my skills to deliver better solutions.
          </p>
          
          <motion.div 
            className="mt-8 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="https://linkedin.com/in/arjunvaradiyill/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black font-semibold shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <FiLinkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative p-8 rounded-2xl bg-white dark:bg-black shadow-xl hover:shadow-2xl transition-all duration-300 group border border-yellow-100 dark:border-yellow-900 overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-yellow-400/10 rounded-full group-hover:bg-yellow-400/20 transition-all duration-500"></div>
            
            <div className="text-yellow-500 mb-4 relative">
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl inline-block">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-black dark:text-yellow-100 mb-3 relative">
              {feature.title}
            </h3>
            <p className="text-black dark:text-yellow-100 relative">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default About; 