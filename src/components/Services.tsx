import React from 'react';
import { Brain, Code, TestTube, Settings, Lightbulb, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI-Powered Development',
      description: 'Leverage artificial intelligence to create innovative photonics solutions that adapt and optimize performance automatically.',
      features: ['Machine learning algorithms', 'Predictive modeling', 'Automated optimization', 'Performance analytics']
    },
    {
      icon: Code,
      title: 'Custom Software Design',
      description: 'Tailored Python-based scripts and applications designed specifically for your photonics platform requirements.',
      features: ['Python SDK integration', 'Custom algorithms', 'Platform compatibility', 'Scalable architecture']
    },
    {
      icon: TestTube,
      title: 'Proof of Concepts',
      description: 'Rapid prototyping and validation of photonics concepts to minimize risk and accelerate time-to-market.',
      features: ['Rapid prototyping', 'Feasibility analysis', 'Risk assessment', 'Market validation']
    },
    {
      icon: Settings,
      title: 'Platform Integration',
      description: 'Seamless integration of our solutions with existing photonics platforms and development environments.',
      features: ['SDK compatibility', 'API development', 'System integration', 'Performance tuning']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Strategic guidance on photonics technology adoption, optimization strategies, and future roadmap planning.',
      features: ['Technology assessment', 'Strategic planning', 'Innovation roadmaps', 'Best practices']
    },
    {
      icon: Users,
      title: 'Partnership Development',
      description: 'Collaborative partnerships with photonics platforms to create synergistic solutions and expand market reach.',
      features: ['Joint development', 'Co-innovation', 'Market expansion', 'Technical collaboration']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
            Comprehensive Photonics Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
            From concept to implementation, we provide end-to-end photonics solutions 
            that drive innovation and deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-200">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 transition-colors duration-200">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              Ready to Transform Your Photonics Solutions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto transition-colors duration-200">
              Let's discuss how our AI-powered approach can accelerate your photonics development 
              and deliver breakthrough results for your specific use case.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;