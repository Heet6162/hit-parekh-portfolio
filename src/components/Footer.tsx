
import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Hit Parekh</h3>
            <p className="text-gray-400 leading-relaxed">
              BCA Student passionate about creating beautiful and functional digital experiences through front-end development and UI/UX design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="block text-gray-400 hover:text-white transition-colors">About</button>
              <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} className="block text-gray-400 hover:text-white transition-colors">Skills</button>
              <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="block text-gray-400 hover:text-white transition-colors">Services</button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="block text-gray-400 hover:text-white transition-colors">Contact</button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a href="mailto:parekhheet1@gmail.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail size={16} className="mr-2" />
                parekhheet1@gmail.com
              </a>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://www.linkedin.com/in/hit-parekh-a34b6031b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/Heet6162" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> by Hit Parekh
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            © 2024 Hit Parekh. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors text-sm"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
