import React from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';

const Hero = () => {
  const { darkMode } = useDarkMode(); // optional: use dark mode context if needed

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const nameVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.2
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const gradientVariants = {
    hidden: { backgroundPosition: "0% 50%" },
    visible: {
      backgroundPosition: "100% 50%",
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }
    }
  };

  return (
    <motion.section
      id="home"
      className="pt-20 min-h-screen flex items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            Hi, I'm{' '}
            <motion.span
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block"
              variants={nameVariants}
              whileHover={{ scale: 1.05 }}
              animate={gradientVariants}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              John Doe
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted mb-8"
            variants={itemVariants}
          >
            Full Stack Developer & UI/UX Enthusiast
          </motion.p>
          
          <motion.p 
            className="text-lg text-muted max-w-2xl mx-auto mb-12"
            variants={itemVariants}
          >
            I build exceptional digital experiences that are fast, modern, and user-friendly.
          </motion.p>
          
          <motion.div 
            className="flex justify-center gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get In Touch
            </motion.a>
            
            <motion.a
              href="#projects"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              View Work
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;