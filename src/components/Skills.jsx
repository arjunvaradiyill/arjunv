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
      className="bg-black dark:bg-black rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-yellow-900 dark:border-yellow-900 relative group overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -left-4 -top-4 w-24 h-24 bg-yellow-400/10 rounded-full group-hover:bg-yellow-400/20 transition-all duration-500"></div>
      
      <div className="flex items-center gap-4 mb-8 relative z-10">
        <div className="p-3 bg-yellow-900/30 dark:bg-yellow-900/30 rounded-xl">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">
          {category.title}
        </h3>
      </div>
      
      <div className="space-y-6 relative z-10">
        {items.map((item) => (
          <div key={item.name} className="group/skill">
            <div className="flex justify-between mb-2">
              <span className="text-yellow-100 dark:text-yellow-100 font-medium">{item.name}</span>
              <span className="text-yellow-200 dark:text-yellow-200">{item.level}%</span>
            </div>
            <div className="h-2.5 bg-yellow-900/20 dark:bg-yellow-900/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover/skill:from-yellow-500 group-hover/skill:to-yellow-700 transition-all duration-300"
              />
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