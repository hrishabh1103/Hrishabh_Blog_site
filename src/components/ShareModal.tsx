import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { BlogPost } from '../data/blogData';
import { useLanguage } from '../contexts/LanguageContext';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost | undefined;
  blogUrl?: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, post, blogUrl }) => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!post) return null;

  const currentUrl = blogUrl || `${window.location.origin}/blog/${post.id}`;
  const shareText = `${post.title} - ${post.excerpt}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`,
      color: 'bg-sky-500 hover:bg-sky-600',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      color: 'bg-blue-700 hover:bg-blue-800',
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this blog post: ${shareText}\n\n${currentUrl}`)}`,
      color: 'bg-gray-600 hover:bg-gray-700',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 amoled:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-gray-200 dark:border-gray-700 amoled:border-gray-800"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-xl font-bold text-gray-900 dark:text-white amoled:text-white ${post.language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                  {language === 'en' ? 'Share this post' : 'इस पोस्ट को साझा करें'}
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 amoled:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              {/* Post Preview */}
              <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 amoled:bg-gray-800 rounded-xl">
                <h4 className={`font-semibold text-gray-900 dark:text-white amoled:text-white mb-2 line-clamp-2 ${post.language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                  {post.title}
                </h4>
                <p className={`text-sm text-gray-600 dark:text-gray-300 amoled:text-gray-200 line-clamp-2 ${post.language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                  {post.excerpt}
                </p>
              </div>

              {/* Copy Link */}
              <div className="mb-6">
                <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 amoled:text-gray-200 mb-2 ${post.language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                  {language === 'en' ? 'Copy link' : 'लिंक कॉपी करें'}
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={currentUrl}
                    readOnly
                    className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 amoled:bg-gray-800 border border-gray-300 dark:border-gray-600 amoled:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white amoled:text-white focus:outline-none"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={copyToClipboard}
                    className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors flex items-center space-x-2"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {language === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {language === 'en' ? 'Copy' : 'कॉपी'}
                        </span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Social Share Buttons */}
              <div>
                <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 amoled:text-gray-200 mb-3 ${post.language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                  {language === 'en' ? 'Share on social media' : 'सोशल मीडिया पर साझा करें'}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {shareLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center justify-center space-x-2 px-4 py-3 ${link.color} text-white rounded-lg transition-colors font-medium`}
                    >
                      <link.icon className="w-5 h-5" />
                      <span className="text-sm">{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ShareModal;
