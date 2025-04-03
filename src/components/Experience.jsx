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
      className="relative bg-black/60 backdrop-blur-sm rounded-xl p-8 transition-all duration-300 group overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(145deg, rgba(45,45,45,0.3), rgba(10,10,10,0.5))',
        boxShadow: '0 10px 30px -15px rgba(234, 179, 8, 0.3)'
      }}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-br from-yellow-500/30 via-yellow-700/20 to-transparent -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-yellow-500/5 rounded-full blur-xl"></div>
      <div className="absolute -left-12 -top-12 w-36 h-36 bg-yellow-500/10 rounded-full blur-xl"></div>
      
      <div className="flex items-start gap-4 relative z-10">
        <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-yellow-700/20 rounded-lg shadow-inner">
          <FiBriefcase className="w-6 h-6 text-yellow-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-2">
            {experience.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-yellow-300 mb-2">
            <div className="flex items-center gap-2">
              <FiBriefcase className="w-4 h-4" />
              <span className="font-medium">{experience.company}</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-yellow-200 mb-4">
            <div className="flex items-center gap-2 bg-yellow-900/20 px-3 py-1 rounded-full">
              <FiCalendar className="w-4 h-4" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-2 bg-yellow-900/20 px-3 py-1 rounded-full">
              <FiMapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>
          <p className="text-yellow-100 mb-6 backdrop-blur-sm bg-black/30 p-3 rounded-lg border-l-2 border-yellow-500/50">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-yellow-900/20 text-yellow-300 backdrop-blur-sm transition-colors"
                style={{boxShadow: 'inset 0 0 5px rgba(234, 179, 8, 0.2)'}}
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