import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setSubmitStatus('success');
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitStatus(null), 3000);
    setIsSubmitting(false);
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
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

  const leftContentVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.2
      }
    }
  };

  const formVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const inputVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    focus: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 }
    },
    tap: {
      scale: 0.95
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
      transition: { type: "spring", stiffness: 400 }
    },
    tap: { scale: 0.95 },
    loading: {
      scale: 0.98,
      opacity: 0.8
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-primary text-primary"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          variants={titleVariants}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <motion.div variants={leftContentVariants}>
            <motion.h3 
              className="text-2xl font-semibold mb-4"
              whileHover={{ x: 10 }}
            >
              Let's Connect
            </motion.h3>
            <motion.p 
              className="text-muted mb-6"
              whileHover={{ scale: 1.02 }}
            >
              I'm always interested in hearing about new opportunities, collaborations, or just having a chat.
              Feel free to reach out!
            </motion.p>
            
            <div className="space-y-4">
              <motion.div 
                className="flex items-center gap-3"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.svg 
                  className="w-6 h-6 text-blue-600"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </motion.svg>
                <motion.span 
                  className="text-primary"
                  whileHover={{ color: "#3B82F6" }}
                >
                  john@example.com
                </motion.span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.svg 
                  className="w-6 h-6 text-blue-600"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </motion.svg>
                <motion.span 
                  className="text-primary"
                  whileHover={{ color: "#3B82F6" }}
                >
                  +62 812 3456 7890
                </motion.span>
              </motion.div>

              {/* Animated decorative element */}
              <motion.div
                className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-8"
                initial={{ width: 0 }}
                whileInView={{ width: 128 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </motion.div>
          
          {/* Form */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            variants={formVariants}
          >
            <motion.div variants={inputVariants}>
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                Name
              </label>
              <motion.input
                whileFocus="focus"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-primary rounded-lg bg-card text-primary focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </motion.div>
            
            <motion.div variants={inputVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                Email
              </label>
              <motion.input
                whileFocus="focus"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-primary rounded-lg bg-card text-primary focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </motion.div>
            
            <motion.div variants={inputVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                Message
              </label>
              <motion.textarea
                whileFocus="focus"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-primary rounded-lg bg-card text-primary focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </motion.div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              variants={buttonVariants}
              initial="initial"
              whileHover={!isSubmitting ? "hover" : ""}
              whileTap={!isSubmitting ? "tap" : ""}
              animate={isSubmitting ? "loading" : "initial"}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <motion.div className="flex items-center justify-center gap-2">
                  <motion.div
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  Sending...
                </motion.div>
              ) : (
                "Send Message"
              )}
            </motion.button>

            {/* Success/Error animation */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500 text-center"
                >
                  ✓ Message sent successfully!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;