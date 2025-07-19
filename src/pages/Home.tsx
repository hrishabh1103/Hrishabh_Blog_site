import React from 'react';
import Hero from '../components/Hero';
import FeaturedArticles from '../components/FeaturedArticles';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedArticles />
    </div>
  );
};

export default Home;