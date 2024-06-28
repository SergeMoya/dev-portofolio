import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Body from './components/Body';
import Home from './components/Home';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Body />} />
        {/* Add more Route components here for additional pages */}
      </Routes>
      {/* Any other components that should appear on all pages can go here */}
    </div>
  );
};

export default App;
