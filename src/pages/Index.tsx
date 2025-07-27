
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Certificates from '../components/Certificates';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
