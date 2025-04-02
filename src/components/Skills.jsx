'use client';

import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiTool } from 'react-icons/fi';

const SkillCard = ({ category, items, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-2 rounded-lg bg-yellow-50">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold text-black">
          {category.title}
        </h3>
      </div>
      
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">{item.name}</span>
              <span className="text-gray-600">{item.level}%</span>
            </div>
            <div className="h-2 bg-yellow-50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-yellow-500"
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
        icon: <FiCode className="w-6 h-6 text-black" />,
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
        icon: <FiServer className="w-6 h-6 text-black" />,
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
        icon: <FiDatabase className="w-6 h-6 text-black" />,
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
        icon: <FiTool className="w-6 h-6 text-black" />,
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
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-black mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.category.title} category={skill.category} items={skill.items} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;