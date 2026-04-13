import React from 'react';
import Blobs from './components/Blobs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import Services from './components/Services';
import Specialization from './components/Specialization';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#030014] text-white selection:bg-purple-500/30 overflow-x-hidden min-h-screen relative font-sans">
      <Blobs />
      <Navbar />
      <Hero />
      <Impact />
      <Projects />
      <Services />
      <Process />
      <Specialization />
      <Contact />
    </div>
  );
}

export default App;
