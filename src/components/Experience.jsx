'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import SectionContainer from './SectionContainer';

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-black rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-yellow-100 dark:border-yellow-900 relative group overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-yellow-400/5 rounded-full group-hover:bg-yellow-400/10 transition-all duration-500"></div>
      
      <div className="flex items-start gap-4 relative z-10">
        <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl">
          <FiBriefcase className="w-6 h-6 text-black dark:text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold bg-gradient-to-r from-black to-yellow-500 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent mb-2">
            {experience.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-2">
            <div className="flex items-center gap-2">
              <FiBriefcase className="w-4 h-4" />
              <span className="font-medium">{experience.company}</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-black dark:text-yellow-200 mb-4">
            <div className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>
          <p className="text-black dark:text-yellow-100 mb-6">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-yellow-50 dark:bg-yellow-900/30 text-black dark:text-yellow-100 border border-yellow-300 dark:border-yellow-800/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: 'MERN Stack Developer Trainee',
      company: 'Faircode infotech',
      period: 'April 2025 - Present',
      location: 'kochi,kerala',
      description: 'Working on full-stack web applications using the MERN stack. Developing scalable solutions and implementing modern web technologies.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    },
    {
      title: 'faculty in computer science',
      company: 'Xceed academy',
      period: '2022 - 2023',
      location: 'perinthalmanna, Kerala',
      description: 'Developed lesson plans in programming, data structures, and algorithms while mentoring students for career success and integrating modern learning tools.',
      technologies: ['python', 'sql', 'computer networks', 'c,c++,java'],
    },
  ];

  return (
    <SectionContainer
      id="experience"
      title="Work Experience"
      subtitle="My professional journey in the world of technology and education."
      className="bg-black dark:bg-black"
    >
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard 
            key={experience.title} 
            experience={experience} 
            index={index} 
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Experience; 