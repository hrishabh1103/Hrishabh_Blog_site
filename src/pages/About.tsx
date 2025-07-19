import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Brain, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'en' | 'hi'>('en');

  const content = {
    en: {
      title: 'About Me',
      subtitle: 'Developer, Blogger, Dreamer',
      bio: `Hello! I’m Hrishabh Gupta — a passionate learner, writer, and creator with a deep love for technology, art, and storytelling. While I am currently pursuing my studies and exploring the world of artificial intelligence and modern development, my interests go far beyond tech.

This blog is my creative space where I share thoughts, poems, stories, and articles from all walks of life — technology, personal experiences, literature, culture, and much more. I believe ideas become more powerful when shared, and I aim to bring together diverse perspectives through my writing in both English and Hindi.

When I’m not writing or coding, I’m often reading, exploring new concepts, or simply observing the world to find inspiration for my next piece.

My goal is simple: to inspire curiosity, spark emotions, and make knowledge and creativity accessible to everyone.`,
      skills: ['Bilingual Content Writing (English & Hindi)', 'Version Control (Git & GitHub)', 'SEO & Performance Optimization', 'Deployment & Hosting', 'Backend Development', 'AIML Development', 'Public Speaker'],
    },
    hi: {
      title: 'मेरे बारे में',
      subtitle: 'डेवलपर, ब्लॉगर, सपने देखने वाला',
      bio: `नमस्ते! मैं ऋषभ गुप्ता हूँ — एक जिज्ञासु विद्यार्थी, लेखक और सृजनशीलता से भरा हुआ इंसान, जिसे तकनीक, कला और कहानियों से गहरा लगाव है। जहाँ एक ओर मैं अपनी पढ़ाई करते हुए आर्टिफ़िशियल इंटेलिजेंस और आधुनिक डेवलपमेंट की दुनिया को खोज रहा हूँ, वहीं दूसरी ओर मेरी रुचियाँ केवल तकनीक तक सीमित नहीं हैं।

यह ब्लॉग मेरा एक रचनात्मक संसार है जहाँ मैं विचार, कविताएँ, कहानियाँ और लेख हर तरह के विषयों पर साझा करता हूँ — तकनीक, व्यक्तिगत अनुभव, साहित्य, संस्कृति और बहुत कुछ। मेरा मानना है कि विचार साझा करने से और शक्तिशाली बनते हैं, और इसी सोच के साथ मैं अंग्रेज़ी और हिन्दी दोनों भाषाओं में लिखता हूँ ताकि ज़्यादा से ज़्यादा लोगों तक पहुँच सकूँ।

जब मैं लिख या कोड नहीं कर रहा होता, तो अक्सर नई चीज़ें पढ़ रहा होता हूँ, नई अवधारणाओं को खोज रहा होता हूँ या फिर आसपास की दुनिया को देख कर अगली रचना के लिए प्रेरणा जुटा रहा होता हूँ।

मेरा उद्देश्य है: जिज्ञासा जगाना, भावनाओं को छूना और ज्ञान व रचनात्मकता को सभी के लिए सुलभ बनाना।`,
      skills: ['द्विभाषी सामग्री लेखन (अंग्रेजी और हिंदी)', 'वर्जन कंट्रोल (Git & GitHub)', 'SEO और प्रदर्शन अनुकूलन', 'डिप्लॉयमेंट और होस्टिंग', 'बैकएंड डेवलपमेंट', 'AIML डेवलपमेंट', 'सार्वजनिक वक्ता'],
    },
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/hrishabh1103', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hrishabh1103/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hrishabh1104@gmail.com', label: 'Email' },
  ];

  const achievements = [
    { icon: Code, number: '50+', label: language === 'en' ? 'Projects' : 'प्रोजेक्ट्स' },
    { icon: Brain, number: '5+', label: language === 'en' ? 'AI Models' : 'AI मॉडल्स' },
    { icon: BookOpen, number: '20+', label: language === 'en' ? 'Articles' : 'लेख' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-800 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <motion.div
              animate={{ rotateY: [0, 10, 0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="w-full h-full rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 p-1"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                <img
                  src="/WhatsApp Image 2025-05-27 at 11.18.37.jpeg"
                  alt="Hrishabh Gupta"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 flex items-center justify-center text-white font-bold text-2xl">H</div>';
                    }
                  }}
                />
              </div>
            </motion.div>
          </div>

          <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {content[language].title}
          </h1>
          <p className={`text-xl text-cyan-200 mb-8 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {content[language].subtitle}
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white hover:text-cyan-300 transition-colors"
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Language Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-1">
            <button
              onClick={() => setActiveTab('en')}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                activeTab === 'en'
                  ? 'bg-gradient-to-r from-pink-500 to-cyan-400 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setActiveTab('hi')}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                activeTab === 'hi'
                  ? 'bg-gradient-to-r from-pink-500 to-cyan-400 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              हिंदी
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 mb-8"
        >
          <div className={`whitespace-pre-line text-white/90 leading-relaxed ${activeTab === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {content[activeTab].bio}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 mb-8"
        >
          <h3 className={`text-2xl font-bold text-white mb-6 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {language === 'en' ? 'Skills & Technologies' : 'कौशल और तकनीकें'}
          </h3>
          <div className="flex flex-wrap gap-3">
            {content[activeTab].skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className={`px-4 py-2 bg-gradient-to-r from-pink-500/20 to-cyan-400/20 border border-pink-500/30 text-white rounded-lg backdrop-blur-sm ${activeTab === 'hi' ? 'font-hindi' : 'font-english'}`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center"
            >
              <achievement.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">
                {achievement.number}
              </div>
              <div className={`text-white/70 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;