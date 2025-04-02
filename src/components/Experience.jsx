'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-yellow-50">
          <FiBriefcase className="w-6 h-6 text-black" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-black mb-2">
            {experience.title}
          </h3>
          <div className="flex items-center gap-4 text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-yellow-50 text-black border border-yellow-200"
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
      title: 'MERN Stack Developer',
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
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-black mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            My professional journey .
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.title} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 