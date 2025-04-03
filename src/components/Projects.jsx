'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';
import SectionContainer from './SectionContainer';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-black dark:bg-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-yellow-900 dark:border-yellow-900"
    >
      <div className="relative h-64 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
          <div className="flex gap-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full bg-yellow-500/20 backdrop-blur-md hover:bg-yellow-500/40 transition-colors"
            >
              <FiGithub className="text-yellow-100 text-xl" />
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full bg-yellow-500/20 backdrop-blur-md hover:bg-yellow-500/40 transition-colors"
            >
              <FiExternalLink className="text-yellow-100 text-xl" />
            </motion.a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-yellow-100 dark:text-yellow-100 mb-3 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-yellow-100 dark:text-yellow-100 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full bg-yellow-900/30 dark:bg-yellow-900/30 text-yellow-100 dark:text-yellow-100 border border-yellow-800/50 dark:border-yellow-800/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Simple Audio Visualizer',
      description: 'A web app that creates audio visualizations from uploaded music (mp3) files. Users can create accounts, log in, and upload music for visualization. Features user authentication and a clean interface.',
      image: 'https://i.pinimg.com/474x/7f/94/98/7f94986d10d4dde0d67e970c777d2d3d.jpg',
      tech: ['Python', 'Flask', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/arjunvaradiyill/Ramanan-music-equalizer',
      demo: 'https://www.loom.com/share/85249c4b861140d89c105c57547ab176',
    },
    {
      title: 'Personal Assistant for Deaf and Mute',
      description: 'A mobile application using Flutter framework that addresses communication challenges for individuals with speech and hearing impairments. Features real-time communication and efficient data management.',
      image: 'https://i.pinimg.com/474x/2e/ee/08/2eee085d8465794f1a80030b2b7f7282.jpg',
      tech: ['Flutter', 'MySQL', 'Mobile Development'],
      github: 'https://github.com/arjunvaradiyill/personal-assistant',
      demo: '#',
    },{
      title: 'Movie review&rating website',
      description: 'A web application that allows users to search for movies, read reviews, and rate them. Features user authentication, a clean interface, and efficient data management.',
      image: 'https://i.pinimg.com/736x/e1/13/1b/e1131bded4198f98f0db3345a1aa84cf.jpg',
      tech: ['React', 'Node.js', 'MongoDB','tailwind css','express'],
      github: 'https://github.com/arjunvaradiyill/moviereviewapp',
      demo: 'https://moviereviewapp-client.onrender.com',
    }
  ];

  return (
    <SectionContainer
      id="projects"
      title="Featured Projects"
      subtitle="Here are some of my recent projects that showcase my skills and experience."
      className="bg-black dark:bg-black"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects; 