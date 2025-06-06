
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90, color: 'bg-orange-500' },
    { name: 'CSS', level: 85, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 80, color: 'bg-yellow-500' },
    { name: 'Python', level: 75, color: 'bg-green-500' },
    { name: 'C', level: 70, color: 'bg-purple-500' },
    { name: 'C++', level: 70, color: 'bg-red-500' },
  ];

  const designSkills = [
    'UI/UX Design',
    'Responsive Design',
    'User Research',
    'Prototyping',
    'Wireframing',
    'Design Systems'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and design capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Programming Skills */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Programming Languages</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Skills */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Design Capabilities</h3>
            <div className="grid grid-cols-2 gap-4">
              {designSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg text-center hover:from-purple-200 hover:to-blue-200 transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-gray-700 font-medium group-hover:text-purple-700 transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Design Philosophy</h4>
              <p className="text-gray-600 text-sm">
                I focus on creating user-friendly digital solutions that combine aesthetic appeal with functional design, ensuring every interface is intuitive and accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
