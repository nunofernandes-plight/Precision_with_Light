import React from 'react';
import { Code2, Database, Cpu, Zap, Globe, Shield } from 'lucide-react';

const Technology = () => {
  const technologies = [
    {
      icon: Code2,
      title: 'Python Ecosystem',
      description: 'Advanced Python development with NumPy, SciPy, and specialized photonics libraries.',
      tools: ['NumPy & SciPy', 'Matplotlib', 'Pandas', 'Custom Libraries']
    },
    {
      icon: Database,
      title: 'SDK Integration',
      description: 'Seamless integration with major photonics SDK platforms and development environments.',
      tools: ['Platform APIs', 'Custom Adapters', 'Driver Development', 'Protocol Implementation']
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Cutting-edge AI algorithms optimized for photonics applications and real-time processing.',
      tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Custom ML Models']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'High-performance computing solutions for time-critical photonics applications.',
      tools: ['Parallel Computing', 'GPU Acceleration', 'Real-time Analytics', 'Edge Computing']
    },
    {
      icon: Globe,
      title: 'Platform Compatibility',
      description: 'Cross-platform solutions that work seamlessly across different operating systems.',
      tools: ['Windows', 'Linux', 'macOS', 'Embedded Systems']
    },
    {
      icon: Shield,
      title: 'Security & Reliability',
      description: 'Enterprise-grade security and reliability standards for mission-critical applications.',
      tools: ['Code Security', 'Data Encryption', 'Fault Tolerance', 'Quality Assurance']
    }
  ];

  const stats = [
    { number: '50+', label: 'SDK Integrations' },
    { number: '99.9%', label: 'Uptime Reliability' },
    { number: '10ms', label: 'Processing Latency' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="technology" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our cutting-edge technology foundation enables us to deliver high-performance, 
            scalable solutions for the most demanding photonics applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6">
                <tech.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {tech.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {tech.description}
              </p>
              
              <div className="grid grid-cols-2 gap-2">
                {tech.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium text-center"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Performance Metrics
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Leverage Our Technology?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Discover how our advanced technology stack can accelerate your photonics development 
            and deliver superior performance for your specific requirements.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-blue-600 px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-200 font-semibold"
          >
            Get Technical Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Technology;