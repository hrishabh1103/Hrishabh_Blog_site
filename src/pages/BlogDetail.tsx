import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Share2, Copy, Check } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { useLanguage } from '../contexts/LanguageContext';
import ShareModal from '../components/ShareModal';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const [isShareModalOpen, setIsShareModalOpen] = React.useState(false);
  
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-800 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Blog post not found</h1>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (post.language === 'hi') {
      return date.toLocaleDateString('hi-IN');
    }
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-800 dark:from-slate-900 dark:via-blue-900 dark:to-teal-800 amoled:from-black amoled:via-black amoled:to-black pt-20 transition-all duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to={post.language === 'en' ? '/english-blogs' : '/hindi-blogs'}
            className={`inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors ${post.language === 'hi' ? 'font-hindi' : 'font-english'}`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{post.language === 'en' ? 'Back to blogs' : 'ब्लॉग पर वापस जाएं'}</span>
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-64 md:h-96 mb-8 rounded-2xl overflow-hidden"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Featured Badge */}
          {post.featured && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-medium rounded-full">
                {post.language === 'en' ? 'Featured' : 'चुनिंदा'}
              </span>
            </div>
          )}
        </motion.div>

        {/* Share Modal */}
        <ShareModal
          isOpen={isShareModalOpen}
          onClose={() => setIsShareModalOpen(false)}
          post={post}
        />

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8"
        >
          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-between mb-6 pb-6 border-b border-white/20">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2 text-cyan-200">
                <Calendar className="w-5 h-5" />
                <span className={post.language === 'hi' ? 'font-hindi' : 'font-english'}>
                  {formatDate(post.date)}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400"></span>
                <span className="text-sm text-white/60 uppercase tracking-wide">
                  {post.language === 'en' ? 'English' : 'Hindi'}
                </span>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsShareModalOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Share2 className="w-4 h-4 text-white" />
              <span className={`text-white text-sm ${post.language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                {post.language === 'en' ? 'Share' : 'साझा करें'}
              </span>
            </motion.button>
          </div>

          {/* Title */}
          <h1 className={`text-3xl md:text-4xl font-bold text-white mb-6 ${post.language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className={`text-xl text-cyan-200 mb-8 ${post.language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {post.excerpt}
          </p>

          {/* Content */}
          <div className={`prose prose-lg prose-invert max-w-none mb-8 ${post.language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            <div className="text-white/90 leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-white/20">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={`inline-flex items-center space-x-1 px-3 py-1 bg-white/10 text-white/80 text-sm rounded-lg border border-white/20 ${post.language === 'hi' ? 'font-hindi' : 'font-english'}`}
              >
                <Tag className="w-3 h-3" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </motion.article>

        {/* Related Posts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <h2 className={`text-2xl font-bold text-white mb-6 ${post.language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {post.language === 'en' ? 'More Articles' : 'और लेख'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && p.language === post.language)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
                  >
                    <h3 className={`text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors ${relatedPost.language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                      {relatedPost.title}
                    </h3>
                    <p className={`text-white/70 text-sm line-clamp-2 ${relatedPost.language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                      {relatedPost.excerpt}
                    </p>
                  </motion.div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetail;
