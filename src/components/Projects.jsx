import React from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce platform with React, Node.js, and MongoDB. Includes payment integration and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      link: '#',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management application with real-time updates and team features.',
      tech: ['React', 'Firebase', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
      link: '#',
    },
    {
      title: 'Portfolio Website',
      description:
        'Modern portfolio website built with React and Tailwind CSS, featuring smooth animations.',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-primary text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Animated heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          My Projects
        </motion.h2>

        {/* Staggered grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-card rounded-lg shadow-lg overflow-hidden border-primary cursor-pointer"
            >
              {/* Image with subtle zoom on card hover */}
              <div className="overflow-hidden h-48">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted mb-4">{project.description}</p>

                {/* Tech badges with stagger */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.07 } },
                  }}
                >
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
                      }}
                      className="px-2 py-1 bg-blue-100 text-blue-600 text-sm rounded"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Animated link */}
                <motion.a
                  href={project.link}
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;