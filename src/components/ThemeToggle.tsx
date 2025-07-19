import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { value: 'light', icon: Sun, label: 'Light', color: 'text-yellow-500' },
    { value: 'dark', icon: Moon, label: 'Dark', color: 'text-blue-400' },
    { value: 'amoled', icon: Monitor, label: 'AMOLED', color: 'text-purple-400' },
  ] as const;

  const currentTheme = themes.find(t => t.value === theme) || themes[0];

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 amoled:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 amoled:hover:bg-gray-800 rounded-xl transition-all duration-300"
      >
        <motion.div
          key={theme}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <currentTheme.icon className={`w-4 h-4 ${currentTheme.color}`} />
        </motion.div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 amoled:text-gray-200 hidden sm:block">
          {currentTheme.label}
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 z-50 bg-white dark:bg-gray-800 amoled:bg-black border border-gray-200 dark:border-gray-700 amoled:border-gray-800 rounded-xl shadow-lg overflow-hidden min-w-[140px]"
            >
              {themes.map((themeOption) => (
                <motion.button
                  key={themeOption.value}
                  whileHover={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
                  onClick={() => {
                    setTheme(themeOption.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${
                    theme === themeOption.value
                      ? 'bg-indigo-50 dark:bg-indigo-900/20 amoled:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-700 dark:text-gray-300 amoled:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 amoled:hover:bg-gray-900'
                  }`}
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <themeOption.icon className={`w-4 h-4 ${themeOption.color}`} />
                  </motion.div>
                  <span className="text-sm font-medium">{themeOption.label}</span>
                  {theme === themeOption.value && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto w-2 h-2 bg-indigo-500 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;