import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import { useEffect, useState } from 'react';

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const tagVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const About = () => {
  const { darkMode } = useDarkMode();
  const [mounted, setMounted] = useState(false);

  // Wait for client-side mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted (avoid flash of wrong theme)
  if (!mounted) {
    return (
      <section id="about" className="py-20 overflow-hidden bg-primary text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Skeleton loader or empty state */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold inline-block relative text-primary">
              About Me
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      className="py-20 overflow-hidden transition-colors duration-300 bg-primary text-primary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Animated title with underline */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold inline-block relative transition-colors text-primary">
            About Me
            <motion.span
              className="block h-1 bg-gradient-to-r from-purple-500 to-teal-400 mt-2 rounded"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — image with hover zoom + floating badge */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group"
          >
            <div className={`overflow-hidden rounded-2xl shadow-lg transition-shadow ${
              darkMode ? 'shadow-purple-900/20' : 'shadow-gray-300'
            }`}>
              <motion.img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                alt="Profile"
                className="w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/20 to-teal-400/20 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Floating badge */}
              <motion.div
                className={`absolute bottom-4 right-4 rounded-xl px-4 py-2 shadow-md text-sm font-medium transition-colors bg-card border-primary text-primary`}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
                Open to work
              </motion.div>
            </div>
          </motion.div>

          {/* Right — text content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 transition-colors text-primary">
              Who am I?
            </h3>
            <p className="mb-4 leading-relaxed transition-colors text-muted">
              I'm a passionate full-stack developer with 5+ years of experience building web applications.
              I love creating elegant solutions to complex problems and continuously learning new technologies.
            </p>
            <p className="mb-6 leading-relaxed transition-colors text-muted">
              My journey started when I built my first website in college. I specialize in React, Node.js,
              and modern web technologies.
            </p>

            {/* Tech tags with stagger - FIXED with proper darkMode */}
            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {['React', 'Node.js', 'TypeScript', 'Next.js', 'PostgreSQL'].map(tag => (
                <motion.span
                  key={tag}
                  variants={tagVariant}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200 ${
                    darkMode
                      ? 'bg-purple-900/40 text-purple-200 border-purple-500/40 hover:bg-purple-800/60'
                      : 'bg-purple-100 text-purple-900 border-purple-300 hover:bg-purple-200'
                  }`}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Info grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { label: 'Name', value: 'John Doe' },
                { label: 'Email', value: 'john@example.com' },
                { label: 'Location', value: 'Jakarta, Indonesia' },
                { label: 'Experience', value: '5+ Years' },
              ].map(({ label, value }) => (
                <motion.div
                  key={label}
                  variants={tagVariant}
                  whileHover={{ y: -3 }}
                  className={`p-3 rounded-xl border transition-all duration-200 border-primary bg-card`}
                >
                  <p className="text-xs uppercase tracking-wide mb-1 transition-colors text-muted">
                    {label}
                  </p>
                  <p className="font-medium transition-colors text-primary">
                    {value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;