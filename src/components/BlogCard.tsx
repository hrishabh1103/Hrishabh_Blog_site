import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight, Clock, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../data/blogData';
import { useLanguage } from '../contexts/LanguageContext';
import ShareModal from './ShareModal';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}
// can u please add the new animation soon
const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  const { language, t } = useLanguage();
  const [isShareModalOpen, setIsShareModalOpen] = React.useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (language === 'hi') {
      return date.toLocaleDateString('hi-IN');
    }
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const blogUrl = `${window.location.origin}/${post.language === 'en' ? 'english-blogs' : 'hindi-blogs'}/${post.id}`;

  const handleShareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsShareModalOpen(true);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white dark:bg-gray-800 amoled:bg-gray-900 rounded-3xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 amoled:shadow-black/50 transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 amoled:border-gray-800"
    >
      {/* Featured Badge */}
      {post.featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold rounded-full shadow-lg">
            {language === 'en' ? 'Featured' : 'चुनिंदा'}
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-4 right-4">
          <div className="flex space-x-2">
            <span className="px-2 py-1 bg-white/90 dark:bg-gray-800/90 amoled:bg-gray-900/90 backdrop-blur-sm text-gray-700 dark:text-gray-200 amoled:text-gray-100 text-xs font-medium rounded-full">
              {post.language === 'en' ? 'EN' : 'हिं'}
            </span>
            <span className={`px-2 py-1 bg-indigo-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm ${post.language === 'hi' ? 'font-hindi' : 'font-english'}`}>
              {post.category === 'article' ? (post.language === 'en' ? 'Article' : 'लेख') :
               post.category === 'poem' ? (post.language === 'en' ? 'Poem' : 'कविता') :
               post.category === 'story' ? (post.language === 'en' ? 'Story' : 'कहानी') : ''}
            </span>
          </div>
        </div>

        {/* Share Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleShareClick}
          className="absolute bottom-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 amoled:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 amoled:hover:bg-gray-900 transition-colors"
        >
          <Share2 className="w-4 h-4 text-gray-700 dark:text-gray-200 amoled:text-gray-100" />
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400 amoled:text-gray-300 text-sm">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span className={language === 'hi' ? 'font-hindi' : 'font-english'}>
                {formatDate(post.date)}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span className={language === 'hi' ? 'font-hindi' : 'font-english'}>
                {language === 'en' ? '5 min read' : '5 मिनट पढ़ें'}
              </span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-xl font-bold text-gray-900 dark:text-white amoled:text-white mb-3 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 amoled:group-hover:text-indigo-300 transition-colors ${post.language === 'hi' ? 'font-hindi' : 'font-english'}`}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className={`text-gray-600 dark:text-gray-300 amoled:text-gray-200 mb-4 line-clamp-3 leading-relaxed ${post.language === 'hi' ? 'font-hindi' : 'font-english'}`}>
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center space-x-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 amoled:bg-gray-800 text-gray-700 dark:text-gray-200 amoled:text-gray-100 text-xs rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/30 amoled:hover:bg-indigo-900/50 hover:text-indigo-700 dark:hover:text-indigo-300 amoled:hover:text-indigo-200 transition-colors ${post.language === 'hi' ? 'font-hindi' : 'font-english'}`}
            >
              <Tag className="w-3 h-3" />
              <span>{tag}</span>
            </span>
          ))}
        </div>

        {/* Read More Button */}
        <Link
          to={`/${post.language === 'en' ? 'english-blogs' : 'hindi-blogs'}/${post.id}`}
          className={`inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 amoled:text-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-300 amoled:hover:text-indigo-200 font-semibold transition-colors group ${post.language === 'hi' ? 'font-hindi' : 'font-english'}`}
        >
          <span>{t('readMore')}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 dark:group-hover:from-indigo-500/10 dark:group-hover:to-purple-500/10 amoled:group-hover:from-indigo-500/20 amoled:group-hover:to-purple-500/20 transition-all duration-500 pointer-events-none rounded-3xl" />

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        post={post}
        blogUrl={blogUrl}
      />
    </motion.article>
  );
};

export default BlogCard;
