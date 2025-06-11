import React from 'react';
import { ArrowRight, Lightbulb, Cpu, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center transform rotate-6 hover:rotate-12 transition-transform duration-300">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-2xl flex items-center justify-center transform -rotate-6 hover:-rotate-12 transition-transform duration-300">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-400 rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300">
              <Zap className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-200">
            AI-Powered
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Photonics</span>
            <br />
            Solutions
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed transition-colors duration-200">
            Transforming photonics and optoelectronics through intelligent design, development, and proof of concepts. 
            We create programmable digital solutions that integrate seamlessly with your photonics platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToServices}
              className="group bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-200 font-semibold"
            >
              Start a Consultation
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-200">Python-Based</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Advanced scripts optimized for photonics SDK integration</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
              <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-2 transition-colors duration-200">AI-Enhanced</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Intelligent algorithms for superior performance optimization</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
              <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2 transition-colors duration-200">Partnership Ready</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Collaborative solutions for platform integration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;