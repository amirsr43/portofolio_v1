import React from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { darkMode } = useDarkMode(); // optional

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }),
    hover: {
      scale: 1.2,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.9
    }
  };

  const waveVariants = {
    animate: {
      rotate: [0, 14, -8, 14, -4, 10, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  };

  return (
    <motion.footer 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-gray-900 dark:bg-gray-950 text-white py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="text-muted mb-4 md:mb-0"
          >
            &copy; {currentYear} John Doe. 
            <motion.span
              variants={waveVariants}
              animate="animate"
              style={{ display: "inline-block" }}
            >
              {" "}❤️
            </motion.span>
            {" "}All rights reserved.
          </motion.p>
          
          <motion.div 
            className="flex space-x-6"
            variants={itemVariants}
          >
            {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social, index) => (
              <motion.a
                key={social}
                href="#"
                custom={index}
                variants={socialVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                className="text-muted hover:text-primary transition-colors duration-300 relative group"
              >
                {social}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                  initial={{ width: 0 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;