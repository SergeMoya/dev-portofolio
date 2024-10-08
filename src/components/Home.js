import React, { useState, useEffect } from 'react';
import ComputerScene from '../canvas/Computer_desktop';
import MouseScroll from '../utilities/MouseScroll';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
  const [text, setText] = useState('');
  const [showParagraph, setShowParagraph] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const fullText = "Hello! This is Acare";

  useEffect(() => {
    if (text.length < fullText.length) {
      setTimeout(() => setText(fullText.slice(0, text.length + 1)), 150);
    } else {
      setTimeout(() => setShowParagraph(true), 500);
    }

    // Hide the hint after 5 seconds
    const timer = setTimeout(() => setShowHint(false), 3000);
    return () => clearTimeout(timer);
  }, [text]);

  const goToProjects = () => {
    const element = document.getElementById('skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="homepage">
      <div className="content">
        <h1 className={text.length < fullText.length ? "typing" : ""}>{text}</h1>
        <motion.p 
          className={showParagraph ? "show" : ""}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showParagraph ? 1 : 0, y: showParagraph ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to AcareOx, the app that helps you track your lifestyle.
          We are committed to monitoring your sleep management. With Acare
          App, you can easily connect to our company's pulse oximeter and
          view your real-time measurement.
        </motion.p>
      </div>
      <div className="Canvas">
        <ComputerScene />
      </div>
      <AnimatePresence>
        {showHint && (
          <motion.div 
            className="interaction-hint"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <span>Click and move your cursor around the image to interact with the 3D scene</span>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="scroller">
        <MouseScroll onScroll={goToProjects} />
      </div>
    </div>
  );
};

export default Home;