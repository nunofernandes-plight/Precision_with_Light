import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Technology from './components/Technology';
import Partnerships from './components/Partnerships';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Technology />
      <Partnerships />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;