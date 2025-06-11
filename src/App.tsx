import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Technology from './components/Technology';
import Partnerships from './components/Partnerships';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <Hero />
        <Services />
        <Technology />
        <Partnerships />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;