import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <motion.nav 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="bg-gray-100 dark:bg-gray-800 shadow fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-gray-950 uppercase dark:text-white">
                My Profile
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6 ml-8">
              <Link to="/" className="text-gray-950 dark:text-white uppercase font-semibold hover:text-gray-500">Home</Link>
              <Link to="/about" className="text-gray-950 dark:text-white uppercase font-semibold hover:text-gray-500">About</Link>
              <Link to="/contact" className="text-gray-950 dark:text-white uppercase font-semibold hover:text-gray-500">Contact</Link>
              <Link to="/service" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 uppercase text-gray-950 dark:text-white font-semibold hover:text-gray-500">Service</Link>
              <Link to="/project" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 uppercase text-gray-950 dark:text-white font-semibold hover:text-gray-500">project</Link>
            </div>
          </div>

          <div className="flex items-center">
            <motion.a 
              href="mailto:jammelbrona@gmail.com" 
              className="mr-4 p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <FaEnvelope className="text-gray-600 dark:text-gray-300" />
            </motion.a>
            
            <motion.a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mr-4 p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600"
              whileHover={{ scale: 1.1, rotate: -10 }}
            >
              <FaGithub className="text-gray-600 dark:text-gray-300" />
            </motion.a>

            <motion.button 
              onClick={() => setDarkMode(!darkMode)} 
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600"
              whileHover={{ scale: 1.1 }}
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
            </motion.button>

            <button 
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden ml-4 p-2"
            >
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-gray-100 dark:bg-gray-800 p-4 shadow-lg"
          >
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 uppercase text-gray-950 dark:text-white font-semibold hover:text-gray-500">Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 uppercase text-gray-950 dark:text-white font-semibold hover:text-gray-500">About</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 uppercase text-gray-950 dark:text-white font-semibold hover:text-gray-500">Contact</Link>
            <Link to="/service" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 uppercase text-gray-950 dark:text-white font-semibold hover:text-gray-500">Service</Link>
            <Link to="/project" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 uppercase text-gray-950 dark:text-white font-semibold hover:text-gray-500">project</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
