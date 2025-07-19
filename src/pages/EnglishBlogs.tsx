import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import BlogCard from '../components/BlogCard';
import { useLanguage } from '../contexts/LanguageContext';

const EnglishBlogs: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'article' | 'poem' | 'story'>('all');

  const englishPosts = blogPosts.filter(post => post.language === 'en');
  
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    englishPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, [englishPosts]);

  const filteredPosts = useMemo(() => {
    return englishPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesTag && matchesCategory;
    });
  }, [englishPosts, searchTerm, selectedTag, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-teal-800 amoled:from-black amoled:via-black amoled:to-black pt-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white amoled:text-white mb-4 font-display transition-colors duration-300">
            English Blogs
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 amoled:text-gray-200 font-english transition-colors duration-300">
            Thoughts, insights, and stories in English
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 flex flex-wrap justify-center gap-3"
        >
          {[
            { key: 'all', label: t('allCategories') },
            { key: 'article', label: t('articles') },
            { key: 'poem', label: t('poems') },
            { key: 'story', label: t('stories') },
          ].map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key as any)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.key
                  ? 'bg-indigo-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 amoled:bg-gray-900 text-gray-700 dark:text-gray-200 amoled:text-gray-100 hover:bg-indigo-50 dark:hover:bg-gray-700 amoled:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 amoled:border-gray-800'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex flex-col md:flex-row gap-4"
        >
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t('search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 amoled:bg-gray-900 border border-gray-200 dark:border-gray-700 amoled:border-gray-800 rounded-xl text-gray-900 dark:text-white amoled:text-white placeholder-gray-500 dark:placeholder-gray-400 amoled:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm font-english transition-all duration-300"
            />
          </div>

          {/* Tag Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="pl-10 pr-8 py-3 bg-white dark:bg-gray-800 amoled:bg-gray-900 border border-gray-200 dark:border-gray-700 amoled:border-gray-800 rounded-xl text-gray-900 dark:text-white amoled:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none min-w-[150px] shadow-sm font-english transition-all duration-300"
            >
              <option value="" className="bg-white dark:bg-gray-800 amoled:bg-gray-900">All Tags</option>
              {allTags.map(tag => (
                <option key={tag} value={tag} className="bg-white dark:bg-gray-800 amoled:bg-gray-900">
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </motion.div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 amoled:text-gray-300 text-lg font-english transition-colors duration-300">
              No blogs found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EnglishBlogs;