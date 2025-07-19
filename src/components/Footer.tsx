import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/hrishabh1103', label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hrishabh1103/', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Mail, href: 'mailto:hrishabh1104@gmail.com', label: 'Email', color: 'hover:text-red-500' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-50 dark:bg-black amoled:bg-black border-t border-gray-200 dark:border-gray-800 amoled:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                H
              </div>
              <div>
                <h3 className={`text-xl font-bold text-gray-900 dark:text-white amoled:text-white ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                  Hrishabh Gupta
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 amoled:text-gray-200 text-sm ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                  {language === 'en' ? 'Student & AI Enthusiast' : 'छात्र और AI उत्साही'}
                </p>
              </div>
            </div>
            <p className={`text-gray-600 dark:text-gray-300 amoled:text-gray-200 leading-relaxed max-w-md ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
              {language === 'en' 
                ? 'Sharing thoughts and insights through the power of words. Join me on this journey of learning, technology, and personal growth.'
                : 'शब्दों की शक्ति के माध्यम से विचार और अंतर्दृष्टि साझा करना। सीखने, तकनीक और व्यक्तिगत विकास की इस यात्रा में मेरे साथ जुड़ें।'
              }
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className={`text-lg font-semibold text-gray-900 dark:text-white amoled:text-white mb-6 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
              {language === 'en' ? 'Quick Links' : 'त्वरित लिंक'}
            </h4>
            <div className="space-y-3">
              {[
                { href: '/', label: t('home') },
                { href: '/english-blogs', label: t('englishBlogs') },
                { href: '/hindi-blogs', label: t('hindiBlogs') },
                { href: '/about', label: t('about') },
                { href: '/contact', label: t('contact') },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block text-gray-600 dark:text-gray-300 amoled:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 amoled:hover:text-indigo-300 transition-colors ${language === 'hi' ? 'font-hindi' : 'font-english'}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className={`text-lg font-semibold text-gray-900 dark:text-white amoled:text-white mb-6 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
              {language === 'en' ? 'Connect' : 'जुड़ें'}
            </h4>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className={`flex items-center space-x-3 text-gray-600 dark:text-gray-300 amoled:text-gray-200 ${link.color} transition-colors`}
                >
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 amoled:bg-gray-900 rounded-lg flex items-center justify-center">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <span className={`font-medium dark:text-gray-200 amoled:text-gray-100 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center"
        >
          <p className={`text-gray-600 dark:text-gray-300 amoled:text-gray-200 flex items-center space-x-2 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            <span>© 2025 Hrishabh Gupta.</span>
            <span>{language === 'en' ? 'Made with' : 'के साथ बनाया गया'}</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>{language === 'en' ? 'in India' : 'भारत में'}</span>
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 md:mt-0 flex items-center space-x-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 amoled:bg-indigo-900/50 hover:bg-indigo-200 dark:hover:bg-indigo-900/50 amoled:hover:bg-indigo-900/70 text-indigo-700 dark:text-indigo-300 amoled:text-indigo-200 rounded-lg transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            <span className={`text-sm font-medium dark:text-indigo-300 amoled:text-indigo-200 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
              {language === 'en' ? 'Back to top' : 'शीर्ष पर वापस'}
            </span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;