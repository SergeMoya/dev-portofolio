import React, { useState, useEffect } from 'react';
import ComputerScene from '../canvas/3D_animation';
import MouseScroll from '../utilities/MouseScroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogleScholar } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';  
import styled from 'styled-components';
import '../styles/Home.css';

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin-top: 1rem;
  margin-right: 3rem;
  background-color: transparent;
`;

const SocialIcon = styled.a`
  color: #ffffff;
  margin: 0 1.5rem;
  font-size: 3rem;
  position: relative;
  display: inline-block;

  &:hover {
    color: #1da1f2;
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip = styled.span`
  visibility: hidden;
  width: auto-fit;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 5px;
  position: absolute;
  z-index: 1;
  font-size: 1.5rem;
  bottom: 125%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
`;

const Home = () => {
  const [text, setText] = useState('');
  const [showParagraph, setShowParagraph] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const fullText = "Hello, this is Serge\u00A0!";

  useEffect(() => {
    if (text.length < fullText.length) {
      setTimeout(() => setText(fullText.slice(0, text.length + 1)), 150);
    } else {
      setTimeout(() => setShowParagraph(true), 500);
    }

    // Hide the hint after 10 seconds
    const timer = setTimeout(() => setShowHint(false), 10000);
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
          Full Stack Engineer with a Ph.D. in Electrical Engineering, bridging advanced technology and practical innovation. Architected multiple groundbreaking solutions: from launching a medical device company's first IoT platform to building sophisticated DeFi and algorithmic trading systems. Passionate about transforming complex technical challenges into scalable, market-ready products — whether in Web3, healthcare tech, or AI/ML domains.
        </motion.p>
        <SocialMediaContainer>
          <SocialIcon href="https://github.com/SergeMoya" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            <Tooltip>GitHub</Tooltip>
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/sergeizida" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
            <Tooltip>LinkedIn</Tooltip>
          </SocialIcon>
          <SocialIcon 
            href="mailto:serge.zida@gmail.com" 
            target="_blank"  
            rel="noopener noreferrer" 
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <Tooltip>Gmail</Tooltip>
          </SocialIcon>
          <SocialIcon href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=serge+ismael+zida&oq=serge" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGoogleScholar} />
            <Tooltip>Google Scholar</Tooltip>
          </SocialIcon>
        </SocialMediaContainer>
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