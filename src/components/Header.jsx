import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [darkMode, setDarkMode] = useState(true); // Default dark mode

  // Cek preferensi user dari localStorage atau system
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else if (savedTheme === 'dark' || systemPrefersDark) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-[#0f0c29]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
            : 'bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-lg shadow-gray-200/20'
          : darkMode
            ? 'bg-[#0f0c29]/40 backdrop-blur-sm'
            : 'bg-white/40 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className={`flex items-center gap-2 font-bold text-lg tracking-tight transition-colors text-primary`}
          whileHover={{ scale: 1.03 }}
        >
          <span className={`w-2 h-2 rounded-full animate-pulse ${
            darkMode ? 'bg-violet-400' : 'bg-violet-600'
          }`} />
          JohnDoe
        </motion.a>

        {/* Desktop Nav — pill style */}
        <div className={`hidden md:flex items-center gap-1 border rounded-full px-2 py-1.5 backdrop-blur-sm transition-colors ${
          darkMode 
            ? 'bg-white/10 border-white/20' 
            : 'bg-black/5 border-gray-300'
        }`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActive(item.name)}
              className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                active === item.name
                  ? 'text-primary'
                  : darkMode 
                    ? 'text-white/70 hover:text-white' 
                    : 'text-muted hover:text-primary'
              }`}
            >
              {active === item.name && (
                <motion.span
                  layoutId="pill"
                  className={`absolute inset-0 rounded-full backdrop-blur-sm ${
                    darkMode ? 'bg-violet-500/40' : 'bg-violet-200/60'
                  }`}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </a>
          ))}
        </div>

        {/* Right section: Dark mode toggle + CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Dark Mode Toggle Button */}
          <motion.button
            onClick={toggleDarkMode}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-full transition-colors ${
              darkMode 
                ? 'text-yellow-400 hover:bg-white/10' 
                : 'text-muted hover:bg-gray-200'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </motion.button>

          <div className={`w-px h-4 ${darkMode ? 'bg-white/30' : 'bg-gray-400'}`} />
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors shadow-lg shadow-violet-500/20"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile toggle & dark mode */}
        <div className="md:hidden flex items-center gap-3">
          {/* Dark Mode Toggle for Mobile */}
          <motion.button
            onClick={toggleDarkMode}
            whileTap={{ scale: 0.9 }}
            className={`p-1.5 rounded-full transition-colors ${
              darkMode ? 'text-yellow-400' : 'text-muted'
            }`}
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </motion.button>

          <motion.button
            className={`${darkMode ? 'text-white/80' : 'text-muted'}`}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden backdrop-blur-xl border-t ${
              darkMode 
                ? 'bg-[#0f0c29]/95 border-white/10' 
                : 'bg-white/95 border-gray-200'
            }`}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => { setActive(item.name); setIsOpen(false); }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    active === item.name
                      ? darkMode
                        ? 'bg-violet-500/30 text-white'
                        : 'bg-violet-100 text-violet-900'
                      : darkMode
                        ? 'text-white/70 hover:text-white hover:bg-white/10'
                        : 'text-muted hover:text-primary hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
              
              <a
                href="#contact"
                className="mt-2 px-4 py-2.5 rounded-xl bg-violet-600 text-white text-sm font-semibold text-center"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;