
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-orange-200 rounded-full opacity-50 animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              👋 Hello, I'm
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hit Nileshbhai 
              <span className="text-purple-600"> Parekh</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A passionate <span className="text-purple-600 font-semibold">BCA student</span> from India, focused on 
              <span className="text-purple-600 font-semibold"> front-end development</span>, 
              <span className="text-purple-600 font-semibold"> UI/UX design</span>, and emerging technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToPortfolio}
                className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
              >
                View My Work
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={scrollToContact}
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center group"
              >
                <Download size={20} className="mr-2" />
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 lg:w-88 lg:h-88 bg-white rounded-full flex items-center justify-center">
                  <div className="text-6xl lg:text-7xl">👨‍💻</div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-orange-400 text-white px-3 py-2 rounded-lg text-sm font-medium animate-bounce">
                UI/UX
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-medium animate-bounce delay-500">
                Frontend
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
