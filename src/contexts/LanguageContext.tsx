import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    englishBlogs: 'English Blogs',
    hindiBlogs: 'Hindi Blogs',
    about: 'About',
    contact: 'Contact',
    
    // Hero
    welcome: "Welcome to Hrishabh Gupta's Blog",
    tagline: 'Developer, Blogger, Dreamer',
    exploreEnglish: 'Explore English Blogs',
    exploreHindi: 'Explore Hindi Blogs',
    
    // Common
    readMore: 'Read More',
    search: 'Search blogs...',
    featuredArticles: 'Featured Articles',
    latestPosts: 'Latest Posts',
    poems: 'Poems',
    articles: 'Articles', 
    stories: 'Stories',
    allCategories: 'All Categories',
    
    // About
    aboutTitle: 'About Hrishabh',
    aboutDescription: 'I am a passionate developer and blogger who loves to write about technology, programming, and life experiences. Through this blog, I share my thoughts and insights in both English and Hindi to connect with a diverse audience.',
    
    // Contact
    contactTitle: 'Get In Touch',
    contactDescription: 'Have a question or want to collaborate? Feel free to reach out!',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    sendMessage: 'Send Message',
    
    // Footer
    copyright: '© 2025 Hrishabh Gupta. All Rights Reserved.',
  },
  hi: {
    // Navigation
    home: 'होम',
    englishBlogs: 'अंग्रेजी ब्लॉग',
    hindiBlogs: 'हिंदी ब्लॉग',
    about: 'परिचय',
    contact: 'संपर्क',
    
    // Hero
    welcome: 'ऋषभ गुप्ता के ब्लॉग में आपका स्वागत है',
    tagline: 'डेवलपर, ब्लॉगर, सपने देखने वाला',
    exploreEnglish: 'अंग्रेजी ब्लॉग देखें',
    exploreHindi: 'हिंदी ब्लॉग देखें',
    
    // Common
    readMore: 'और पढ़ें',
    search: 'ब्लॉग खोजें...',
    featuredArticles: 'चुनिंदा लेख',
    latestPosts: 'नवीनतम पोस्ट',
    poems: 'कविताएं',
    articles: 'लेख',
    stories: 'कहानियां',
    allCategories: 'सभी श्रेणियां',
    
    // About
    aboutTitle: 'ऋषभ के बारे में',
    aboutDescription: 'मैं एक उत्साही डेवलपर और ब्लॉगर हूं जो तकनीक, प्रोग्रामिंग और जीवन के अनुभवों के बारे में लिखना पसंद करता है। इस ब्लॉग के माध्यम से, मैं अपने विचार और अंतर्दृष्टि अंग्रेजी और हिंदी दोनों में साझा करता हूं।',
    
    // Contact
    contactTitle: 'संपर्क करें',
    contactDescription: 'कोई प्रश्न है या सहयोग करना चाहते हैं? बेझिझक संपर्क करें!',
    name: 'नाम',
    email: 'ईमेल',
    message: 'संदेश',
    sendMessage: 'संदेश भेजें',
    
    // Footer
    copyright: '© 2025 ऋषभ गुप्ता। सभी अधिकार सुरक्षित।',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};