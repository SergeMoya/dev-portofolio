import React, { useState, useEffect } from 'react';
import backgroundImage from '../images/art1.jpg';
import TaiwanTrainScene from '../3d/TaiwanTrainScene';
import '../styles/Home.css';

const Home = () => {
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState('');
  const [showParagraph, setShowParagraph] = useState(false);
  const [enableInteraction] = useState(false);
  const fullText = "Hello! This is Acare";

  useEffect(() => {
    if (text.length < fullText.length) {
      setTimeout(() => setText(fullText.slice(0, text.length + 1)), 150);
    } else {
      setTimeout(() => setShowParagraph(true), 500); // Show the paragraph after the text is completed
    }
  }, [text]);

  const goToProjects = () => {
    const element = document.getElementById('skills');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMouseMove = (e) => {
    setLightPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="homepage" onMouseMove={handleMouseMove}>
      <div className={enableInteraction ? 'Canvas interactive' : 'Canvas'} style={{ pointerEvents: enableInteraction ? 'auto' : 'none' }}>
        <TaiwanTrainScene />
      </div>
      <div className="overlay" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply', 
        background: `radial-gradient(circle at ${lightPosition.x}px ${lightPosition.y}px, rgba(249, 178, 163, 0.09), rgba(249, 178, 163, 0) 40%)`
      }}>
        <div className="content">
          <div className="cardcontent">
            <div className="text-content">
              <h1 className={text.length < fullText.length ? "typing" : ""}>{text}</h1>
              {showParagraph && <p className="show">Welcome to AcareOx, the app that helps you track your lifestyle. We are committed to monitoring your sleep management. With Acare App, you can easily connect to our company's pulse oximeter and view your real-time measurement.</p>}
            </div>
          </div>
        </div>
        <div className="mouse_scroll" onClick={goToProjects}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="scroll_arrows">
            <span className="m_scroll_arrows unu"></span>
            <span className="m_scroll_arrows doi"></span>
            <span className="m_scroll_arrows trei"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;