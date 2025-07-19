import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { blogPosts } from '../data/blogData';
import BlogCard from './BlogCard';
import { useLanguage } from '../contexts/LanguageContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FeaturedArticles: React.FC = () => {
  const { language, t } = useLanguage();
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 amoled:from-black amoled:to-black transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center space-x-2 bg-indigo-100 dark:bg-indigo-900/30 amoled:bg-indigo-900/50 px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            <span className={`text-sm font-medium text-indigo-700 dark:text-indigo-300 amoled:text-indigo-200 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
              {language === 'en' ? 'Featured Content' : 'चुनिंदा सामग्री'}
            </span>
          </motion.div>
          
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white amoled:text-white mb-4 font-display ${language === 'hi' ? 'font-hindi' : ''}`}>
            {t('featuredArticles')}
          </h2>
          
          <p className={`text-xl text-gray-600 dark:text-gray-300 amoled:text-gray-200 max-w-2xl mx-auto ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {language === 'en' 
              ? 'Discover my most popular and impactful articles across technology, AI, and personal insights.'
              : 'तकनीक, AI, और व्यक्तिगत अंतर्दृष्टि पर मेरे सबसे लोकप्रिय और प्रभावशाली लेख खोजें।'
            }
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="featured-swiper pb-12"
          >
            {featuredPosts.map((post, index) => (
              <SwiperSlide key={post.id}>
                <BlogCard post={post} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArticles;