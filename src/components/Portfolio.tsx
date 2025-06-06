
import React from 'react';
import { ExternalLink, Github, Plus } from 'lucide-react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my learning journey and upcoming projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Learning Projects Placeholder */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 h-48 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-6xl opacity-50">📚</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Learning Experiments</h3>
            <p className="text-gray-600 mb-4">
              Exploring new technologies and practicing fundamental concepts through hands-on coding exercises.
            </p>
            <div className="flex space-x-2">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 h-48 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-6xl opacity-50">🎨</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Design Practice</h3>
            <p className="text-gray-600 mb-4">
              UI/UX design concepts and wireframing exercises to understand user-centered design principles.
            </p>
            <div className="flex space-x-2">
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">UI Design</span>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">UX Research</span>
            </div>
          </div>

          {/* Coming Soon Project */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border-2 border-dashed border-purple-200 flex flex-col items-center justify-center text-center group hover:border-purple-400 transition-all duration-300">
            <div className="bg-purple-100 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
              <Plus className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Exciting Projects Coming Soon</h3>
            <p className="text-gray-600 mb-6">
              I'm currently working on some amazing projects that will showcase my growing skills in web development and design.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors">
              Stay Tuned
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 Building the Future</h3>
            <p className="text-gray-600 leading-relaxed">
              As a passionate BCA student, I'm constantly learning and building new projects. 
              While my portfolio is still growing, I'm excited to share my upcoming work that demonstrates 
              my dedication to creating innovative and user-friendly digital solutions. 
              Check back regularly to see my latest projects and experiments!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
