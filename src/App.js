import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
//import Project from './components/Project';
// Import other components as needed*/

const App = () => {
  return (
    <div className="App">
      <Header />
      <div id="home"><Home /></div>
      <div id="skills"><Skills /></div>
      <div id="about-me"><AboutMe /></div>
      <div id="experience"><Experience /></div>
      {/*<div id="projects"><Project /></div>
      {/* Add other sections here as needed */}
    </div>
  );
};

export default App;