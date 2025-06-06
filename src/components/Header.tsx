
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            Hit Parekh
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-purple-600 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-purple-600 transition-colors">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-purple-600 transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('contact')} className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">Contact</button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-purple-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-purple-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="block text-gray-700 hover:text-purple-600 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('services')} className="block text-gray-700 hover:text-purple-600 transition-colors">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="block text-gray-700 hover:text-purple-600 transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('contact')} className="block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors text-center">Contact</button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
