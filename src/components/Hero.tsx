import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { language, t } = useLanguage();

  const dotPatternSvg = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 transition-all duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-black dark:via-gray-900 dark:to-black amoled:from-black amoled:via-black amoled:to-black transition-all duration-500">
        <div className={`absolute inset-0 bg-[url('${dotPatternSvg}')] opacity-40`} />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 dark:opacity-30 amoled:opacity-40"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-20 dark:opacity-30 amoled:opacity-40"
        />
        <motion.div
          animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-20 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-30 dark:opacity-40 amoled:opacity-50"
        />
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Profile Section */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-8 inline-block"
        >
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="w-full h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-1 shadow-2xl"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img
                  src="/WhatsApp Image 2025-05-27 at 11.18.37.jpeg"
                  alt="Hrishabh Gupta"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl">H</div>';
                    }
                  }}
                />
              </div>
            </motion.div>
            
            {/* Floating Icons */}
            <motion.div
              animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-2 -right-2 w-10 h-10 bg-white dark:bg-slate-800 amoled:bg-gray-900 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
            >
              <Code className="w-5 h-5 text-indigo-500" />
            </motion.div>
            
            <motion.div
              animate={{ y: [5, -5, 5], rotate: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-2 -left-2 w-10 h-10 bg-white dark:bg-slate-800 amoled:bg-gray-900 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
            >
              <BookOpen className="w-5 h-5 text-purple-500" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-6"
        >
          {/* Welcome Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 amoled:bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-indigo-100 dark:border-indigo-800 amoled:border-indigo-900 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className={`text-sm font-medium text-gray-700 dark:text-gray-200 amoled:text-gray-100 transition-colors duration-300 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
              {language === 'en' ? 'Welcome to my digital space' : 'मेरे डिजिटल स्थान में आपका स्वागत है'}
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className={`text-5xl md:text-7xl font-bold text-gray-900 dark:text-white amoled:text-white mb-6 font-display transition-colors duration-300 ${language === 'hi' ? 'font-hindi' : ''}`}>
            <span className="gradient-text">{t('welcome').split(' ').slice(0, 2).join(' ')}</span>
            <br />
            <span className="text-gray-800 dark:text-gray-200 amoled:text-gray-100 transition-colors duration-300">{t('welcome').split(' ').slice(2).join(' ')}</span>
          </h1>

          {/* Tagline */}
          <p className={`text-xl md:text-2xl text-gray-600 dark:text-gray-300 amoled:text-gray-200 mb-8 max-w-3xl mx-auto font-light transition-colors duration-300 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {t('tagline')}
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/english-blogs">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 amoled:from-indigo-500 amoled:to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl amoled:shadow-purple-500/20 amoled:hover:shadow-purple-500/40 transition-all duration-300 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}
              >
                <span>{t('exploreEnglish')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link to="/hindi-blogs">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group flex items-center space-x-3 px-8 py-4 bg-white dark:bg-gray-800 amoled:bg-gray-900 text-gray-700 dark:text-gray-200 amoled:text-gray-100 font-semibold rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 amoled:border-gray-800 transition-all duration-300 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}
              >
                <span>{t('exploreHindi')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {[
            { number: '10+', label: language === 'en' ? 'Articles' : 'लेख' },
            { number: '2', label: language === 'en' ? 'Languages' : 'भाषाएं' },
            { number: '∞', label: language === 'en' ? 'Ideas' : 'विचार' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 dark:bg-gray-800/80 amoled:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 amoled:border-gray-800 text-center transition-all duration-300"
            >
              <div className="text-3xl font-bold text-gray-900 dark:text-white amoled:text-white mb-2 transition-colors duration-300">{stat.number}</div>
              <div className={`text-gray-600 dark:text-gray-300 amoled:text-gray-200 text-sm transition-colors duration-300 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;