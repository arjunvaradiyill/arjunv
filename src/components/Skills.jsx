'use client';

import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiTool } from 'react-icons/fi';
import SectionContainer from './SectionContainer';

const SkillCard = ({ category, items, index }) => {
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
      <div className="absolute -right-12 top-0 w-36 h-36 bg-yellow-500/5 rounded-full blur-xl"></div>
      <div className="absolute -left-12 -bottom-12 w-36 h-36 bg-yellow-500/10 rounded-full blur-xl"></div>
      
      <div className="flex items-center gap-4 mb-8 relative z-10">
        <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-yellow-700/20 rounded-lg shadow-inner">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
          {category.title}
        </h3>
      </div>
      
      <div className="space-y-6 relative z-10">
        {items.map((item) => (
          <div key={item.name} className="group/skill">
            <div className="flex justify-between mb-2">
              <span className="text-yellow-100 font-medium">{item.name}</span>
              <span className="text-yellow-300 text-sm bg-yellow-900/30 px-2 py-0.5 rounded-full">{item.level}%</span>
            </div>
            <div className="h-2 bg-black/50 rounded-full overflow-hidden backdrop-blur-sm shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full relative"
                style={{
                  background: `linear-gradient(90deg, #EAB308 0%, #F59E0B ${100-item.level/2}%, #FBBF24 100%)`,
                  boxShadow: '0 0 8px rgba(234, 179, 8, 0.5)'
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(234,179,8,0.3)_0%,_transparent_70%)] opacity-50"></div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    {
      category: {
        title: 'Programming Languages',
        icon: <FiCode className="w-6 h-6 text-yellow-400 dark:text-yellow-400" />,
      },
      items: [
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 70 },
        { name: 'Java', level: 50 },
        { name: 'HTML/CSS', level: 80 },
      ],
    },
    {
      category: {
        title: 'MERN Stack',
        icon: <FiServer className="w-6 h-6 text-yellow-400 dark:text-yellow-400" />,
      },
      items: [
        { name: 'MongoDB', level: 50 },
        { name: 'Express.js', level:50 },
        { name: 'React.js', level: 55 },
        { name: 'Node.js', level: 50 },
      ],
    },
    {
      category: {
        title: 'Databases & Tools',
        icon: <FiDatabase className="w-6 h-6 text-yellow-400 dark:text-yellow-400" />,
      },
      items: [
        { name: 'MySQL', level: 55 },
        { name: 'PostgreSQL', level: 55 },
        { name: 'MongoDB', level: 85 },
        { name: 'Git/GitHub', level: 90 },
      ],
    },
    {
      category: {
        title: 'Frameworks & Libraries',
        icon: <FiTool className="w-6 h-6 text-yellow-400 dark:text-yellow-400" />,
      },
      items: [
        { name: 'Flask/Django', level: 65 },
        { name: 'NumPy/Pandas', level:70 },
        { name: 'Matplotlib', level: 60 },
        { name: 'Flutter', level: 40 },
      ],
    },
  ];

  return (
    <SectionContainer
      id="skills"
      title="Skills & Expertise"
      subtitle="A comprehensive overview of my technical skills and proficiency levels."
      className="bg-black dark:bg-black"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <SkillCard 
            key={skill.category.title} 
            category={skill.category} 
            items={skill.items} 
            index={index} 
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Skills;