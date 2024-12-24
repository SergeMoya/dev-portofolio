import React from 'react';
import './App.css';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Project from './components/Project';
import Footer from './components/Footer';
//import Contact from './components/Contact';
// Import other components as needed

const App = () => {
  return (
    <div className="App">
      <Header />
      <div id="home"><Home /></div>
      <div id="skills"><Skills /></div>
      <div id="about-me"><AboutMe /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Project /></div>
      {/*<div id="contact"><Contact/></div>
       Add other sections here as needed */}
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;