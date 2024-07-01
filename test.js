import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills'; // Import the Skills component
import Production from './components/Production';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AcareOX" element={<Skills />} /> {/* Ensure this line exists */}
        <Route path="/production" element={<Production />} />
        <Route path="/contact" element={<Contact />} />
        {/* Include other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
