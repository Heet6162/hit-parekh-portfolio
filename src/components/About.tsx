
import React from 'react';
import { GraduationCap, Heart, Code, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discovering my passion for technology and creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <GraduationCap className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Educational Journey</h3>
                <p className="text-gray-600">
                  Currently pursuing my Bachelor of Computer Applications (BCA), where I'm building a strong foundation in computer science and programming fundamentals.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Heart className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Passion for Technology</h3>
                <p className="text-gray-600">
                  I have a deep love for coding and a continuous learning mindset. Every day brings new opportunities to explore emerging technologies and improve my skills.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Code className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Development Focus</h3>
                <p className="text-gray-600">
                  Specializing in front-end development and UI/UX design, I enjoy creating intuitive and visually appealing digital experiences.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Lightbulb className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Problem Solver</h3>
                <p className="text-gray-600">
                  I'm interested in how technology can solve real-world problems and make people's lives easier through thoughtful design and development.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hit Nileshbhai Parekh</h3>
              <p className="text-purple-600 font-semibold mb-4">BCA Student & Aspiring Developer</p>
              <p className="text-gray-600 leading-relaxed">
                "I believe that great design is not just about making things look beautiful, but about creating experiences that are intuitive, accessible, and meaningful to users."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
