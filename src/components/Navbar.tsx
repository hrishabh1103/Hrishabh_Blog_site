import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/english-blogs', label: t('englishBlogs') },
    { path: '/hindi-blogs', label: t('hindiBlogs') },
    { path: '/about', label: t('about') },
    { path: '/contact', label: t('contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 amoled:bg-black/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 amoled:border-gray-800/50 shadow-sm transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-300"
            >
              H
            </motion.div>
            <span className={`text-gray-900 dark:text-white amoled:text-white font-semibold text-lg transition-colors duration-300 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
              Hrishabh Gupta
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-gray-600 dark:text-gray-300 amoled:text-gray-200 hover:text-gray-900 dark:hover:text-white amoled:hover:text-white transition-colors duration-300 font-medium ${language === 'hi' ? 'font-hindi' : 'font-english'}`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                  />
                )}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 amoled:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 amoled:hover:bg-gray-800 rounded-xl transition-all duration-300"
            >
              <Globe className="w-4 h-4 text-gray-600 dark:text-gray-300 amoled:text-gray-200" />
              <span className="text-gray-700 dark:text-gray-300 amoled:text-gray-200 text-sm font-medium">
                {language === 'en' ? 'हिं' : 'EN'}
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 amoled:bg-gray-900 rounded-lg transition-all duration-300"
            >
              <Globe className="w-4 h-4 text-gray-600 dark:text-gray-300 amoled:text-gray-200" />
              <span className="text-gray-700 dark:text-gray-300 amoled:text-gray-200 text-xs font-medium">
                {language === 'en' ? 'हिं' : 'EN'}
              </span>
            </motion.button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 amoled:text-gray-200 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 amoled:hover:bg-gray-900 rounded-lg transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 amoled:bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-indigo-100 dark:border-indigo-800 amoled:border-indigo-900 transition-all duration-300"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-gray-600 dark:text-gray-300 amoled:text-gray-200 hover:text-gray-900 dark:hover:text-white amoled:hover:text-white transition-colors duration-300 font-medium ${language === 'hi' ? 'font-hindi' : 'font-english'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;