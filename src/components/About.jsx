'use client';

import { motion } from 'framer-motion';
import { FiUser, FiAward, FiTarget } from 'react-icons/fi';
import Image from 'next/image';

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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-black mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A passionate developer with a strong foundation in computer science and a keen interest in creating innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 bg-yellow-500/10 rounded-lg transform rotate-6"></div>
              <Image
                src="https://lh3.googleusercontent.com/a/ACg8ocJqxeALwXt_aknMiD7AZPcI2HhQuNAlrNpHHEiyZNjGZ0JpMi7CKA=s576-c-no"
                alt="Arjun V"
                width={400}
                height={400}
                className="relative rounded-lg shadow-xl object-cover grayscale"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-black">
              Who I Am
            </h3>
            <p className="text-gray-700">
              I am a dedicated developer who thrives on solving complex problems and creating elegant solutions. 
              With a strong foundation in computer science and hands-on experience in web development, 
              I am passionate about building scalable applications that make a difference.
            </p>
            <p className="text-gray-700">
              My journey in technology has been driven by curiosity and a desire to create meaningful impact through code.
              I constantly strive to learn new technologies and improve my skills to deliver better solutions.
            </p>
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
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
            >
              <div className="text-yellow-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 