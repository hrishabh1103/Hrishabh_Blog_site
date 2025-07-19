import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageCircle, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-800 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {t('contactTitle')}
          </h1>
          <p className={`text-xl text-cyan-200 max-w-2xl mx-auto ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {t('contactDescription')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className={`block text-white mb-2 font-medium ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                  {t('name')}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}
                    placeholder={language === 'en' ? 'Your name' : 'आपका नाम'}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className={`block text-white mb-2 font-medium ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                  {t('email')}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}
                    placeholder={language === 'en' ? 'your.email@example.com' : 'आपका.ईमेल@उदाहरण.com'}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className={`block text-white mb-2 font-medium ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                  {t('message')}
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 text-white/60 w-5 h-5" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 resize-none ${language === 'hi' ? 'font-hindi' : 'font-english'}`}
                    placeholder={language === 'en' ? 'Your message...' : 'आपका संदेश...'}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${language === 'hi' ? 'font-hindi' : 'font-english'}`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{t('sendMessage')}</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 text-center ${language === 'hi' ? 'font-hindi' : 'font-english'}`}
              >
                {language === 'en' ? 'Message sent successfully!' : 'संदेश सफलतापूर्वक भेजा गया!'}
              </motion.div>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              <h3 className={`text-2xl font-bold text-white mb-6 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                {language === 'en' ? 'Let\'s Connect' : 'आइए जुड़ें'}
              </h3>
              
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className={`text-white font-medium ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                      {t('email')}
                    </div>
                    <div className="text-cyan-200 text-sm">hrishabh1104@gmail.com</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className={`text-white font-medium ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                      {language === 'en' ? 'Response Time' : 'उत्तर का समय'}
                    </div>
                    <div className={`text-cyan-200 text-sm ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                      {language === 'en' ? 'Usually within 24 hours' : 'आमतौर पर 24 घंटे के भीतर'}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-pink-500/10 to-cyan-400/10 backdrop-blur-lg border border-pink-500/20 rounded-2xl p-8"
            >
              <blockquote className={`text-white/90 text-lg italic mb-4 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                {language === 'en' 
                  ? "\"Technology is best when it brings people together.\""
                  : "\"तकनीक तब सबसे अच्छी होती है जब वह लोगों को एक साथ लाती है।\""
                }
              </blockquote>
              <cite className={`text-cyan-300 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                - Hrishabh Gupta
              </cite>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;