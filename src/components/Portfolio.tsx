
import React from 'react';
import { ExternalLink, Github, Plus, Award } from 'lucide-react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Portfolio</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my learning journey and upcoming projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Learning Projects Placeholder */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 h-48 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-6xl opacity-50">📚</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Learning Experiments</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Exploring new technologies and practicing fundamental concepts through hands-on coding exercises.
            </p>
            <div className="flex space-x-2">
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900 h-48 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-6xl opacity-50">🎨</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Design Practice</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              UI/UX design concepts and wireframing exercises to understand user-centered design principles.
            </p>
            <div className="flex space-x-2">
              <span className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-sm">UI Design</span>
              <span className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm">UX Research</span>
            </div>
          </div>

          {/* Coming Soon Project */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 p-8 rounded-2xl border-2 border-dashed border-purple-200 dark:border-purple-700 flex flex-col items-center justify-center text-center group hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300">
            <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
              <Plus className="text-purple-600 dark:text-purple-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Exciting Projects Coming Soon</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm currently working on some amazing projects that will showcase my growing skills in web development and design.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors">
              Stay Tuned
            </button>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              <Award className="mr-3 text-purple-600 dark:text-purple-400" size={32} />
              Certificates & Achievements
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Recent certifications and bootcamp completions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Microsoft Student Chapter Certificate */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/2bdb40ac-2c8a-4b85-b4e9-94ec1bd35d7b.png" 
                  alt="Microsoft Student Chapter - SQL Bootcamp Certificate"
                  className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                SQL for Analyst Bootcamp
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                Microsoft Student Chapter - MSIT
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                  SQL Analytics
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  July 2025
                </span>
              </div>
            </div>

            {/* Google Developers Group Certificate */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/1e785a2e-81df-4ac8-bda5-1485f2665c79.png" 
                  alt="Google Developers Group - SQL Bootcamp Certificate"
                  className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                SQL for Analyst Bootcamp
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                Google Developers Group - VIT-AP
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                  SQL Analytics
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  July 2025
                </span>
              </div>
            </div>

            {/* DevTown SQL Certificate */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/01d73c53-03be-42b9-910e-37b4641d4d97.png" 
                  alt="DevTown - SQL for Analyst Certificate"
                  className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                SQL for Analyst: Query Your Way to Insights
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                DevTown in collaboration with MSIT
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm">
                  SQL Analytics
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  July 2025
                </span>
              </div>
            </div>

            {/* Microsoft Student Chapter XSS Defense Certificate */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/c061f310-6c08-4180-ad5f-11e6bc8b223f.png" 
                  alt="Microsoft Student Chapter - XSS Defense Certificate"
                  className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                XSS Defense: Block Hackers with One Click
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                Microsoft Student Chapter - MSIT
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                  Cybersecurity
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  July 2025
                </span>
              </div>
            </div>

            {/* Google Developers Group XSS Defense Certificate */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/5b728396-b7fa-44d8-ad12-3dfa8d924f9e.png" 
                  alt="Google Developers Group - XSS Defense Certificate"
                  className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                XSS Defense: Block Hackers with One Click
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                Google Developers Group - VIT-AP
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                  Cybersecurity
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  July 2025
                </span>
              </div>
            </div>

            {/* DevTown XSS Defense Certificate */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/baaad364-ace4-45fe-b220-ce650b8d06ca.png" 
                  alt="DevTown - XSS Defense Certificate"
                  className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                XSS Defense: Block Hackers with One Click
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                DevTown in collaboration with MSIT
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm">
                  Cybersecurity
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  July 2025
                </span>
              </div>
            </div>

            {/* DevTown Array Mastery Certificate */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/1a069478-e4e3-41c1-9034-23d92fa2be38.png" 
                  alt="DevTown - Array Mastery Certificate"
                  className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Array Mastery: Crack Array Puzzles Like a Pro
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                DevTown in collaboration with StartupIndia
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm">
                  Data Structures
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  June 2025
                </span>
              </div>
            </div>

            {/* Microsoft Student Chapter Array Mastery Certificate */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/18a4b27e-15eb-4df2-9b4c-43799a470a55.png" 
                  alt="Microsoft Student Chapter - Array Mastery Certificate"
                  className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Array Mastery: Crack Array Puzzles Like a Pro
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                Microsoft Student Chapter - MSIT
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                  Data Structures
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  June 2025
                </span>
              </div>
            </div>

            {/* Google Developers Group Array Mastery Certificate */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/2bb8c830-4c8a-41b0-86fa-ba60908bbab5.png" 
                  alt="Google Developers Group - Array Mastery Certificate"
                  className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Array Mastery: Crack Array Puzzles Like a Pro
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                Google Developers Group - VIT-AP
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                  Data Structures
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  June 2025
                </span>
              </div>
            </div>

            {/* Google Workspace AI Workshop Certificate */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/f7264a29-e140-4657-9f3d-baeeb3e31fe1.png" 
                  alt="Google Workspace - Bring AI to Work Workshop Certificate"
                  className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Bring AI to Work Workshop
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                Google Workspace
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full text-sm">
                  AI Technology
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  June 2025
                </span>
              </div>
            </div>

            {/* NVPAS College Certificate */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/82e2d8a2-2f38-40f9-89f9-aa04661d10d4.png" 
                  alt="NVPAS College - Certificate of Excellence"
                  className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Certificate of Excellence - C Programming
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                NVPAS College - Third Position
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-sm">
                  Programming
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  2024-25
                </span>
              </div>
            </div>

            {/* IGNITE 2025 Certificate */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/648882fb-0cf7-4c24-a53b-2661775f6186.png" 
                  alt="IGNITE 2025 - Code Clash Certificate"
                  className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                IGNITE 2025 - Code Clash
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                CMPICA, CHARUSAT
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm">
                  Competitive Programming
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  January 2025
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🚀 Building the Future</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
