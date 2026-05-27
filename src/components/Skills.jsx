import React from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Vue.js', 'Tailwind CSS', 'HTML5/CSS3', 'JavaScript'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'PHP', 'GraphQL'],
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Jest'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-primary text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Animated heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Skills & Technologies
        </motion.h2>

        {/* Staggered grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: '0 16px 32px rgba(0,0,0,0.10)' }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="bg-card rounded-lg p-6 border-primary"
            >
              {/* Category title */}
              <motion.h3
                className="text-xl font-semibold mb-4 text-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                {category.category}
              </motion.h3>

              {/* Skill list with stagger */}
              <motion.ul
                className="space-y-2"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {category.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariants}
                    className="text-muted flex items-center gap-2"
                  >
                    {/* Animated dot accent */}
                    <motion.span
                      className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 + 0.2, type: 'spring', stiffness: 400 }}
                    />
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;