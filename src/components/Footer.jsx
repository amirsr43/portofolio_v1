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
      className="bg-gray-900 dark:bg-gray-950 text-white py-12 border-t border-gray-800 dark:border-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand & Logo */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-8 h-8 object-contain rounded-lg p-1 bg-white/5 border border-white/10"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="font-bold text-lg tracking-tight text-white flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full animate-pulse bg-violet-400`} />
                JohnDoe
              </span>
            </div>
            <p className="text-muted text-sm text-center md:text-left">
              &copy; {currentYear} JohnDoe. All rights reserved.
            </p>
          </motion.div>
          
          {/* Social Links */}
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
                className="text-muted hover:text-violet-400 transition-colors duration-300 relative group"
              >
                {social}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300"
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
