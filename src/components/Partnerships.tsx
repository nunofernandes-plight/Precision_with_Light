import React from 'react';
import { Handshake, Target, Rocket, Users, ArrowRight, CheckCircle } from 'lucide-react';

const Partnerships = () => {
  const partnershipTypes = [
    {
      icon: Handshake,
      title: 'Strategic Alliances',
      description: 'Long-term partnerships with photonics platform providers to create integrated solutions.',
      benefits: ['Mutual growth opportunities', 'Shared technology development', 'Market expansion', 'Co-marketing initiatives']
    },
    {
      icon: Target,
      title: 'Integration Partners',
      description: 'Technical partnerships focused on seamless SDK and platform integration capabilities.',
      benefits: ['Deep technical integration', 'Optimized performance', 'Certified compatibility', 'Priority support']
    },
    {
      icon: Rocket,
      title: 'Innovation Labs',
      description: 'Collaborative R&D partnerships to pioneer next-generation photonics technologies.',
      benefits: ['Joint research projects', 'Shared IP development', 'Early access to innovations', 'Risk sharing']
    },
    {
      icon: Users,
      title: 'Channel Partners',
      description: 'Distribution and reseller partnerships to expand market reach and customer access.',
      benefits: ['Extended market reach', 'Local expertise', 'Sales support', 'Training programs']
    }
  ];

  const partnershipProcess = [
    {
      step: '01',
      title: 'Initial Discussion',
      description: 'Explore partnership opportunities and alignment of goals and capabilities.'
    },
    {
      step: '02',
      title: 'Technical Evaluation',
      description: 'Assess technical compatibility and integration requirements.'
    },
    {
      step: '03',
      title: 'Partnership Agreement',
      description: 'Formalize partnership terms, responsibilities, and success metrics.'
    },
    {
      step: '04',
      title: 'Joint Development',
      description: 'Collaborate on solution development and market introduction.'
    }
  ];

  return (
    <section id="partnerships" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
            Strategic Partnerships
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
            We believe in the power of collaboration. Our partnership approach creates 
            synergistic relationships that drive innovation and deliver exceptional value to all stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {partnershipTypes.map((partnership, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 transition-colors duration-200"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6">
                <partnership.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
                {partnership.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-200">
                {partnership.description}
              </p>
              
              <ul className="space-y-3">
                {partnership.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-gray-700 dark:text-gray-300 transition-colors duration-200">
                    <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 flex-shrink-0 transition-colors duration-200" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 mb-16 transition-colors duration-200">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12 transition-colors duration-200">
            Partnership Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {partnershipProcess.map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">{process.step}</span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-200">
                  {process.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-200">
                  {process.description}
                </p>
                
                {index < partnershipProcess.length - 1 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-gray-400 dark:text-gray-500 absolute top-8 -right-4 transform translate-x-1/2 transition-colors duration-200" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Partner With Us?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Join our ecosystem of innovative partners and together let's shape the future of photonics technology. 
              Reach out to explore partnership opportunities that align with your strategic goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-blue-600 px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-200 font-semibold"
              >
                Discuss Partnership
              </button>
              <a
                href="mailto:partnerships@precisionwithlight.com"
                className="border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold"
              >
                Email Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;