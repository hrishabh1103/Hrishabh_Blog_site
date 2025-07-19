import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import EnglishBlogs from './pages/EnglishBlogs';
import HindiBlogs from './pages/HindiBlogs';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-slate-900 amoled:bg-black transition-colors duration-300">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/english-blogs" element={<EnglishBlogs />} />
                <Route path="/hindi-blogs" element={<HindiBlogs />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;