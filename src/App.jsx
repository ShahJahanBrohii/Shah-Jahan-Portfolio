import React, { useState, useEffect } from 'react';
// import Navigation from './components/Navigation';
// import HeroSection from './components/HeroSection';
// import AboutSection from './components/AboutSection';
// import SkillsSection from './components/SkillsSection';
// import ProjectsSection from './components/ProjectsSection';
// import ContactSection from './components/ContactSection';
// import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">

    <h1>Personal Portfolio of Shah Jahan</h1>


    </div>
  );
}

export default App;