import React from 'react';
import './App.css';
import Header from './components/Header';
/*import Home from './components/Home';
import Skills from './components/Skills';
import Body from './components/Body';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Project from './components/Project';
// Import other components as needed*/

const App = () => {
  return (
    <div className="App">
      <Header />
      {/*<div id="home"><Home /></div>
      <div id="body"><Body /></div>
      <div id="skills"><Skills /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Project /></div>
      <div id="about-me"><AboutMe /></div>
      {/* Add other sections here as needed */}
    </div>
  );
};

export default App;