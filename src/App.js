import React from 'react';
import HeroSection from './components/HeroSection';
import './styles/App.css';
import './styles/AboutSection.css';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';


function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </div>
  );
}

export default App;