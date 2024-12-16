import React, { useState, useEffect } from 'react';
import ComputerScene from '../canvas/Computer_desktop';
import MouseScroll from '../utilities/MouseScroll';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
  const [text, setText] = useState('');
  const [showParagraph, setShowParagraph] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const fullText = "Hello, this is Serge !";

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
          Senior Full Stack Engineer with a Ph.D. in Electrical Engineering, bridging advanced technology and practical innovation. Architected multiple groundbreaking solutions: from launching a medical device company's first IoT platform to building sophisticated DeFi and algorithmic trading systems. Passionate about transforming complex technical challenges into scalable, market-ready products — whether in Web3, healthcare tech, or AI/ML domains.
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