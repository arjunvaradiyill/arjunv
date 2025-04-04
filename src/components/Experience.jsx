'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiBook, FiAward } from 'react-icons/fi';
import SectionContainer from './SectionContainer';

const ExperienceCard = ({ experience, index, type }) => {
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

// New modern education timeline
const ModernEducationTimeline = ({ educationList }) => {
  return (
    <div className="mt-12 relative">
      {/* Main Container with yellow glow */}
      <div 
        className="relative mx-auto p-1 rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, rgba(234,179,8,0.3) 0%, rgba(234,179,8,0.1) 100%)',
          boxShadow: '0 0 40px rgba(234,179,8,0.15)'
        }}
      >
        <div className="bg-black/70 backdrop-blur-sm rounded-3xl p-8 sm:p-12">
          {/* Timeline steps */}
          <div className="flex justify-center items-center mb-12">
            <div className="flex items-center">
              {educationList.map((_, index) => (
                <div key={index} className="flex items-center">
                  {/* Node */}
                  <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center z-10 shadow-lg shadow-yellow-600/30">
                    <div className="w-2 h-2 rounded-full bg-black"></div>
                  </div>
                  
                  {/* Connector (not for last item) */}
                  {index < educationList.length - 1 && (
                    <div className="h-[2px] w-20 sm:w-32 bg-gradient-to-r from-yellow-500 to-yellow-700"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Timeline content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationList.map((education, index) => (
              <motion.div
                key={education.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Date Badge */}
                <div className="absolute -top-5 right-4 px-4 py-1 bg-yellow-900/50 rounded-full border border-yellow-600/20 text-yellow-300 text-sm font-medium">
                  {education.period}
                </div>
                
                {/* Content */}
                <div 
                  className="bg-gradient-to-br from-black/80 to-black/50 rounded-xl p-6 border-t border-yellow-500/20"
                  style={{
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), 0 20px 25px -5px rgba(0,0,0,0.1)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-yellow-900/20 rounded-full">
                      <FiBook className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                        {education.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="mb-3 pb-3 border-b border-yellow-900/20">
                    <div className="flex items-center gap-2 text-yellow-300">
                      <FiBriefcase className="w-4 h-4" />
                      <span>{education.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-yellow-200 mt-2">
                      <FiMapPin className="w-4 h-4" />
                      <span>{education.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-yellow-100 mb-5 text-sm">
                    {education.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="text-yellow-400 text-xs font-medium flex items-center gap-2">
                      <FiAward className="w-3 h-3" />
                      <span>KEY SUBJECTS</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {education.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-yellow-900/20 text-yellow-300 border border-yellow-700/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
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
      period: 'july 2024 - march 2025',
      location: 'perinthalmanna, Kerala',
      description: 'Developed lesson plans in programming, data structures, and algorithms while mentoring students for career success and integrating modern learning tools.',
      technologies: ['python', 'sql', 'computer networks', 'c,c++,java'],
    },
  ];

  const education = [
    {
      title: 'B.Tech Computer Science and Engineering',
      company: 'Cochin University of Science and Technology (CUSAT)',
      period: '2020 - 2024',
      location: 'Kochi, Kerala',
      description: 'Completed Bachelor of Technology in Computer Science and Engineering with focus on software development, algorithms, and web technologies.',
      technologies: ['Data Structures', 'Algorithms', 'Computer Networks', 'Database Systems'],
    },
    {
      title: 'Plus Two Computer Science',
      company: 'ASMHSS Vellivenchery',
      period: '2018 - 2020',
      location: 'Velliyanchery, Malappuram, Kerala',
      description: 'Completed higher secondary education with Computer Science specialization, building a foundation in programming and computer fundamentals.',
      technologies: ['Computer Science', 'Mathematics','chemistry', 'Physics', 'Basic Programming'],
    },
  ];

  return (
    <div>
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
              type="work"
            />
          ))}
        </div>
      </SectionContainer>
      
      <SectionContainer
        id="education"
        title="Education"
        subtitle="My academic journey and qualifications."
        className="bg-black dark:bg-black"
      >
        <ModernEducationTimeline educationList={education} />
      </SectionContainer>
    </div>
  );
};

export default Experience; 