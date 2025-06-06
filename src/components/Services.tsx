
import React from 'react';
import { Palette, Code, Smartphone, Search } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces that enhance user experience and engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Building responsive and modern websites using the latest technologies and best practices.',
      features: ['HTML/CSS/JavaScript', 'Responsive Design', 'Cross-browser Compatibility', 'Performance Optimization']
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile-First Design',
      description: 'Designing with mobile users in mind, ensuring optimal experience across all devices.',
      features: ['Mobile Optimization', 'Touch-friendly Interfaces', 'Progressive Web Apps', 'Adaptive Layouts']
    },
    {
      icon: <Search size={40} />,
      title: 'User Research',
      description: 'Understanding user needs and behaviors to create data-driven design decisions.',
      features: ['User Testing', 'Analytics Review', 'Accessibility Audits', 'Usability Studies']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive design and development services focused on creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">My Approach</h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I believe in a user-centered design approach that combines thorough research, creative problem-solving, and technical expertise. 
            Every project begins with understanding your users' needs and ends with a solution that not only looks great but functions flawlessly. 
            My goal is to create digital experiences that are both beautiful and meaningful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
