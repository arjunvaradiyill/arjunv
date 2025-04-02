'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 hover:opacity-100 transition-all duration-300 bg-black/50">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-lg bg-white/10 backdrop-blur-sm"
          >
            <FiGithub className="text-white hover:text-black transition-colors" size={24} />
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-lg bg-white/10 backdrop-blur-sm"
          >
            <FiExternalLink className="text-white hover:text-black transition-colors" size={24} />
          </motion.a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-3">
          {project.title}
        </h3>
        <p className="text-gray-700 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full bg-yellow-50 text-black border border-yellow-200 hover:bg-yellow-100 transition-colors"
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
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-black mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 